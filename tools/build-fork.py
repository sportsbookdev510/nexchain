#!/usr/bin/env python3
"""Download the public nexchain.ai marketing site and turn it into a local static fork."""

from __future__ import annotations

import json
import re
import shutil
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urljoin, urlparse
from urllib.request import Request, urlopen

BASE = "https://nexchain.ai"
ROOT = Path(__file__).resolve().parent.parent
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
)

PAGES = [
    "/",
    "/tokenomics",
    "/roadmap",
    "/ecosystem",
    "/builders",
    "/blog",
    "/referrals",
    "/career",
    "/contact-us",
    "/terms-conditions",
    "/cookie-policy",
    "/privacy-policy",
]

SEED_ASSETS = [
    "/favicon.ico",
    "/robots.txt",
    "/documents/Whitepaper-Nexchain.pdf",
    "/documents/Litepaper-Nexchain.pdf",
    "/images/logo.png",
    "/images/logo.svg",
    "/images/favicon.ico",
    "/images/404-ufo.svg",
    "/images/plus.svg",
    "/images/minus.svg",
    "/images/w-arrow.svg",
    "/images/b-arrow.svg",
    "/images/ArrowUpRight.svg",
    "/images/CaretDown.svg",
    "/images/menu-compact.svg",
    "/images/menu-cross.svg",
    "/images/left-arrow.svg",
    "/images/right-arrow.svg",
    "/images/footer-logo.svg",
    "/images/footer_x.svg",
    "/images/footer_telegram.svg",
    "/images/footer_facebook.svg",
    "/images/footer_instagram.svg",
    "/images/footer_medium.svg",
    "/images/footer_coinmarketcap.svg",
    "/images/footer_linkedin.svg",
    "/images/footer_blog.svg",
    "/images/tokenomics/illustration.svg",
    "/images/landing/certik.svg",
    "/images/landing/solid-proof.svg",
    "/images/landing-redesign/feature-ai-network.png",
    "/images/landing-redesign/feature-faster.png",
    "/images/landing-redesign/feature-builders.png",
    "/images/landing-redesign/feature-onchain.png",
    "/images/landing-redesign/feature-growth.png",
    "/images/landing-redesign/feature-crosschain.png",
    "/images/landing-redesign/community-avatars.png",
    "/images/landing-redesign/final-cta-bg.png",
    "/images/landing-redesign/bonus-window-bg.png",
    "/images/featured/featured-6.png",
    "/images/featured/featured-7.png",
    "/images/featured/featured-8.png",
    "/images/featured/featured-9.png",
    "/images/featured/featured-10.png",
    "/images/featured/featured-12.png",
    "/images/featured/featured-13.png",
    "/images/roadmap/CircleGrey.svg",
    "/images/roadmap/CircleDashed.svg",
    "/images/roadmap/CheckCircle-black.svg",
    "/images/roadmap/check.svg",
    "/images/powered/eth.svg",
    "/images/powered/blockscout.svg",
    "/images/powered/relay.svg",
    "/images/powered/celestia.svg",
    "/images/powered/arbitrum.svg",
    "/images/powered/caldera.svg",
    "/images/blog/magnifier.svg",
    "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
    "/_next/static/media/ba9851c3c22cd980-s.woff2",
    "/_next/static/media/21350d82a1f187e9-s.woff2",
    "/_next/static/media/c5fe6dc8356a8c31-s.woff2",
    "/_next/static/media/19cfc7226ec3afaa-s.woff2",
    "/_next/static/media/df0a9ae256c0569c-s.woff2",
    "/_next/static/media/8e9860b6e62d6359-s.woff2",
    "/_next/static/css/6a4f4945fb169447.css",
    "/_next/static/css/ef46db3751d8e999.css",
]

FAQ_ANSWERS = {
    "What is Nexchain?": "Nexchain is an AI-native Layer 1 blockchain designed to combine fast execution, low fees, AI-powered network intelligence, and a more transparent user experience.",
    "What makes Nexchain different?": "Nexchain focuses on AI-native execution at the network level, practical builder tooling, cross-chain connectivity, and early presale access for the NEX token.",
    "What is the current NEX price?": "The current NEX presale price is $0.16 during the active entry window.",
    "How much has Nexchain raised?": "The campaign summary on this page shows more than $17M raised from 10,814 investors.",
    "Is Nexchain audited?": "CertiK and SolidProof audit references cover the NEX token smart contract, not the network or the AI layer.",
    "What is NEX used for?": "NEX is designed to power network usage, AI-related activity, staking, governance, and ecosystem incentives.",
    "Can I lose money?": "Yes. Crypto assets and presales involve risk, including loss of capital. Review the official terms and your local eligibility before participating.",
    "Who can participate?": "Participation depends on the official terms and local eligibility. Review the project terms before joining the presale.",
}

SKIP_PREFIXES = ("/api", "/admin", "/purchase", "/dashboard", "/private")


def log(message: str) -> None:
    print(message, flush=True)


def normalize_path(url: str) -> str | None:
    parsed = urlparse(url)
    if parsed.scheme and parsed.hostname and not parsed.hostname.endswith("nexchain.ai"):
        return None
    path = unquote(parsed.path or "/")
    if path != "/":
        path = path.rstrip("/")
    if any(path == prefix or path.startswith(prefix + "/") for prefix in SKIP_PREFIXES):
        return None
    return path or "/"


def is_page_path(path: str) -> bool:
    if path == "/":
        return True
    name = Path(path).name
    if "." in name and not name.endswith((".html", ".htm", ".xml", ".txt")):
        return False
    return True


def local_file(path: str) -> Path:
    if path == "/":
        return ROOT / "index.html"
    rel = path.lstrip("/").replace("/", "/")
    if is_page_path(path) and not path.endswith((".html", ".htm", ".xml", ".txt")):
        return ROOT / rel / "index.html"
    return ROOT / rel


def alias_html_file(path: str) -> Path | None:
    if path == "/" or not is_page_path(path) or path.endswith((".html", ".htm")):
        return None
    return ROOT / (path.lstrip("/") + ".html")


def fetch(url: str, retries: int = 3) -> bytes:
    last_error: Exception | None = None
    for attempt in range(retries):
        try:
            req = Request(
                url,
                headers={
                    "User-Agent": UA,
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.9",
                },
            )
            with urlopen(req, timeout=45) as response:
                return response.read()
        except (HTTPError, URLError, TimeoutError, OSError) as exc:
            last_error = exc
            time.sleep(0.6 * (attempt + 1))
    raise RuntimeError(f"Failed to fetch {url}: {last_error}")


def rewrite_next_images(text: str) -> str:
    def replace(match: re.Match[str]) -> str:
        encoded = unescape(match.group(1)).split("&")[0]
        return unquote(encoded)

    return re.sub(r"/_next/image\?url=([^\"\s,]+)", replace, text)


def extract_paths(text: str) -> set[str]:
    found: set[str] = set()
    patterns = [
        r"""(?:href|src|poster|action)=["']([^"']+)["']""",
        r"""srcSet=["']([^"']+)["']""",
        r"""url\((?:["']?)([^"')]+)(?:["']?)\)""",
        r"""["'](/_next/[^"']+)["']""",
        r"""["'](/images/[^"']+)["']""",
        r"""["'](/documents/[^"']+)["']""",
        r"""["'](/blog/[^"']+)["']""",
        r"""https://nexchain\.ai(/[^"'\s]+)""",
    ]
    for pattern in patterns:
        for match in re.finditer(pattern, text, flags=re.I):
            raw = unescape(match.group(1))
            for part in re.split(r"\s*,\s*", raw):
                candidate = part.split()[0] if part.split() else ""
                if not candidate or candidate.startswith(("data:", "mailto:", "javascript:", "#")):
                    continue
                if candidate.startswith("/_next/image"):
                    query = candidate.split("?", 1)[1] if "?" in candidate else ""
                    encoded = unescape(query.split("url=", 1)[-1].split("&", 1)[0]) if "url=" in query else ""
                    if encoded:
                        candidate = unquote(encoded)
                if candidate.startswith("//"):
                    candidate = "https:" + candidate
                if candidate.startswith("http"):
                    path = normalize_path(candidate)
                elif candidate.startswith("/"):
                    path = normalize_path(urljoin(BASE, candidate.split("?", 1)[0]))
                else:
                    continue
                if path:
                    found.add(path)
    return found


def load_faq_from_chunks() -> dict[str, str]:
    answers = dict(FAQ_ANSWERS)
    chunk = ROOT / "_next/static/chunks/app/(landing)/page-111422a2634c30d5.js"
    if not chunk.exists():
        return answers
    match = re.search(r"""'(\[{"title":"What is Nexchain\?".*?\])'""", chunk.read_text(encoding="utf-8", errors="ignore"))
    if not match:
        return answers
    try:
        payload = json.loads(match.group(1))
    except json.JSONDecodeError:
        return answers
    for item in payload:
        title = item.get("title")
        answer = item.get("answer")
        if title and answer:
            answers[title] = answer
    return answers


def fill_faq(html: str, answers: dict[str, str]) -> str:
    def replace_block(match: re.Match[str]) -> str:
        block = match.group(0)
        title_match = re.search(r"<h3>(.*?)</h3>", block, flags=re.S)
        if not title_match:
            return block
        title = re.sub(r"\s+", " ", unescape(re.sub(r"<[^>]+>", "", title_match.group(1)))).strip()
        answer = answers.get(title)
        if not answer:
            return block
        if re.search(r'class="faq_text', block):
            return block
        insertion = f'\n                        <div class="faq_text">{answer}</div>'
        return block[:-6] + insertion + "\n                    </div>"

    return re.sub(
        r'<div class="faq_block[^"]*">.*?</div>\s*</div>',
        replace_block,
        html,
        flags=re.S,
    )


def strip_remote_runtime(html: str) -> str:
    html = re.sub(
        r'<link rel="preload"[^>]+googletagmanager[^>]*>\s*',
        "",
        html,
        flags=re.I,
    )
    html = re.sub(
        r'<script[^>]+src="[^"]*(?:_next/|googletagmanager|gtag/|clarity|vercel|esputnik)[^"]*"[^>]*>\s*</script>\s*',
        "",
        html,
        flags=re.I,
    )
    html = re.sub(
        r"<script>\s*self\.__next_f[\s\S]*?</script>\s*",
        "",
        html,
        flags=re.I,
    )
    html = re.sub(
        r'<script src="/_next/static/chunks/webpack[^"]*"></script>\s*',
        "",
        html,
        flags=re.I,
    )
    if 'src="/js/fork.js"' not in html:
        html = html.replace("</body>", '        <script src="/js/fork.js" defer></script>\n    </body>')
    return html


def pretty_internal_links(html: str) -> str:
    def replace(match: re.Match[str]) -> str:
        href = match.group(1)
        if href in PAGES and href != "/":
            return f'href="{href}/"'
        return match.group(0)

    return re.sub(r'href="(/[a-z0-9-]+)"', replace, html)


def process_html(html: str, answers: dict[str, str]) -> str:
    html = rewrite_next_images(html)
    html = fill_faq(html, answers)
    html = strip_remote_runtime(html)
    html = pretty_internal_links(html)
    return html


def copy_cached_images() -> None:
    source = ROOT / "_next/image/images"
    if not source.exists():
        return
    dest = ROOT / "images"
    dest.mkdir(parents=True, exist_ok=True)
    for file in source.rglob("*"):
        if file.is_file():
            target = dest / file.relative_to(source)
            target.parent.mkdir(parents=True, exist_ok=True)
            if not target.exists():
                shutil.copy2(file, target)


def save_bytes(path: str, data: bytes, answers: dict[str, str]) -> set[str]:
    dest = local_file(path)
    dest.parent.mkdir(parents=True, exist_ok=True)
    extra: set[str] = set()
    if dest.suffix.lower() in {".html", ""} or is_page_path(path):
        text = data.decode("utf-8", errors="replace")
        if text.lstrip().startswith("0:{") or "<html" not in text.lower():
            log(f"SKIP RSC payload {path}")
            return extra
        text = process_html(text, answers)
        dest.write_text(text, encoding="utf-8")
        alias = alias_html_file(path)
        if alias:
            alias.write_text(text, encoding="utf-8")
        extra |= extract_paths(text)
        return extra
    dest.write_bytes(data)
    if dest.suffix.lower() in {".css", ".js", ".svg", ".xml", ".txt"}:
        extra |= extract_paths(data.decode("utf-8", errors="replace"))
    return extra


def download_one(path: str, answers: dict[str, str]) -> tuple[str, bool, set[str]]:
    dest = local_file(path)
    if dest.exists() and dest.stat().st_size > 0 and not is_page_path(path):
        if dest.suffix.lower() in {".css", ".js", ".svg", ".xml", ".txt"}:
            return path, True, extract_paths(dest.read_text(encoding="utf-8", errors="replace"))
        return path, True, set()
    url = BASE + path
    try:
        data = fetch(url)
        extra = save_bytes(path, data, answers)
        log(f"OK  {path}  ({len(data):,} bytes)")
        return path, True, extra
    except Exception as exc:
        log(f"FAIL {path}  {exc}")
        return path, False, set()


def seed_blog_pages() -> set[str]:
    found = set()
    for page in range(1, 21):
        found.add(f"/blog?page={page}")
    return found


def main() -> int:
    answers = load_faq_from_chunks()
    copy_cached_images()

    queue: list[str] = []
    seen: set[str] = set()

    def enqueue(path: str) -> None:
        clean = path.split("?", 1)[0]
        if clean not in seen:
            seen.add(clean)
            queue.append(clean)

    for page in PAGES:
        enqueue(page)
    for asset in SEED_ASSETS:
        enqueue(asset)
    for css in (ROOT / "_next/static/css").glob("*.css"):
        enqueue("/_next/static/css/" + css.name)
        enqueue_paths = extract_paths(css.read_text(encoding="utf-8", errors="replace"))
        for path in enqueue_paths:
            enqueue(path)

    ok = 0
    failed: list[str] = []
    while queue:
        batch = queue[:12]
        del queue[:12]
        with ThreadPoolExecutor(max_workers=8) as pool:
            futures = [pool.submit(download_one, path, answers) for path in batch]
            for future in as_completed(futures):
                path, success, extra = future.result()
                if success:
                    ok += 1
                    for item in extra:
                        enqueue(item)
                    if path == "/blog" or path.startswith("/blog/"):
                        dest = local_file(path if is_page_path(path) else "/blog")
                        if dest.exists():
                            html = dest.read_text(encoding="utf-8", errors="replace")
                            for match in re.finditer(r"/blog/([a-z0-9-]+)", html):
                                enqueue("/blog/" + match.group(1))
                                enqueue("/images/blog/" + match.group(1) + ".png")
                else:
                    failed.append(path)

    # Always re-process local HTML after assets land so FAQ + fork.js stay applied.
    answers = load_faq_from_chunks()
    for html_file in ROOT.rglob("*.html"):
        if "tools" in html_file.parts or html_file.name.startswith("roadmap ("):
            continue
        text = html_file.read_text(encoding="utf-8", errors="replace")
        if "<html" not in text.lower():
            continue
        html_file.write_text(process_html(text, answers), encoding="utf-8")

    copy_cached_images()
    log("")
    log(f"Downloaded/verified {ok} files. Failed: {len(failed)}")
    for path in failed:
        log(f"  {path}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
