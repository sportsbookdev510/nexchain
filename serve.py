#!/usr/bin/env python3
"""Serve the Nexchain static fork with pretty URLs."""

from __future__ import annotations

import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parent


class ForkHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def translate_path(self, path: str) -> str:
        raw = unquote(path.split("?", 1)[0].split("#", 1)[0])
        if raw.endswith("/") and raw != "/":
            candidate = ROOT / raw.strip("/") / "index.html"
            if candidate.is_file():
                return str(candidate)
        elif raw != "/" and "." not in Path(raw).name:
            pretty = ROOT / raw.strip("/") / "index.html"
            if pretty.is_file():
                return str(pretty)
            html = ROOT / (raw.strip("/") + ".html")
            if html.is_file():
                return str(html)
        return super().translate_path(path)


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the Nexchain fork")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=5503)
    args = parser.parse_args()
    server = ThreadingHTTPServer((args.host, args.port), ForkHandler)
    print(f"Nexchain fork running at http://{args.host}:{args.port}/")
    server.serve_forever()


if __name__ == "__main__":
    main()
