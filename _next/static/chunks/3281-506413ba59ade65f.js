(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3281],
  {
    1469: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return o;
          },
        });
      let n = a(8229),
        r = a(8883),
        s = a(3063),
        i = n._(a(1193));
      function o(e) {
        let { props: t } = (0, r.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let c = s.Image;
    },
    1678: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => p });
      var n = a(5155);
      a(6705);
      var r = a(6874),
        s = a.n(r),
        i = a(6766),
        o = a(5695),
        c = a(2115);
      let l = (e) => {
          let t = e.toLowerCase();
          return (
            "r" === t ||
            "ref" === t ||
            "referral" === t ||
            t.startsWith("utm_") ||
            [
              "gclid",
              "dclid",
              "fbclid",
              "msclkid",
              "ttclid",
              "twclid",
              "yclid",
              "li_fat_id",
              "srsltid",
            ].includes(t)
          );
        },
        d = (e, t) => {
          if (!t) return e;
          let [a, n = ""] = e.split("#", 2),
            [r, s = ""] = a.split("?", 2),
            i = new URLSearchParams(s);
          new URLSearchParams(t).forEach((e, t) => {
            l(t) && !i.has(t) && i.append(t, e);
          });
          let o = i.toString();
          return ""
            .concat(r)
            .concat(o ? "?".concat(o) : "")
            .concat(n ? "#".concat(n) : "");
        },
        u = (e) => {
          let {
              href: t,
              children: a,
              className: r,
              download: l,
              rel: u,
              onClick: p,
            } = e,
            m = t.includes("http") || t.includes(".pdf") ? "_blank" : "",
            h = (0, o.useSearchParams)(),
            f = (0, c.useMemo)(() => d(t, h.toString()), [t, h]);
          return t.includes(".pdf")
            ? (0, n.jsxs)("a", {
                href: f,
                target: m,
                rel: u,
                download: l,
                onClick: p,
                className: "nex-link ".concat(r),
                children: [
                  a,
                  "string" == typeof a &&
                    (0, n.jsx)(i.default, {
                      src: "/images/ArrowUpRight.svg",
                      alt: "arrow",
                      width: 16,
                      height: 16,
                    }),
                ],
              })
            : (0, n.jsx)(s(), {
                onClick: p,
                href: f,
                target: m,
                rel: u,
                className: "nex-link "
                  .concat(r, " ")
                  .concat(t ? "" : "inactive"),
                children: a,
              });
        },
        p = (e) =>
          (0, n.jsx)(c.Suspense, { children: (0, n.jsx)(u, { ...e }) });
    },
    1711: () => {},
    2360: () => {},
    2708: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r, N: () => s });
      var n = a(5155);
      function r(e) {
        let {
          children: t,
          white: a,
          noIcon: r,
          small: s,
          center: i,
          disabled: o,
          onClick: c,
        } = e;
        return (0, n.jsx)("button", {
          className: "btn "
            .concat(a ? "btn-w" : "", " ")
            .concat(r ? "no-icon" : "", " ")
            .concat(s ? "small" : "", " ")
            .concat(i ? "center" : "", " ")
            .concat(o ? "disabled" : ""),
          onClick: c,
          children: t,
        });
      }
      function s(e) {
        let {
          children: t,
          white: a,
          noIcon: r,
          small: s,
          center: i,
          disabled: o,
        } = e;
        return (0, n.jsx)("button", {
          className: "btn blog-btn "
            .concat(a ? "btn-w" : "", " ")
            .concat(r ? "no-icon" : "", " ")
            .concat(s ? "small" : "", " ")
            .concat(i ? "center" : "", " ")
            .concat(o ? "disabled" : ""),
          children: t,
        });
      }
      a(2360);
    },
    4255: () => {},
    5695: (e, t, a) => {
      "use strict";
      var n = a(8999);
      a.o(n, "useParams") &&
        a.d(t, {
          useParams: function () {
            return n.useParams;
          },
        }),
        a.o(n, "usePathname") &&
          a.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        a.o(n, "useRouter") &&
          a.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        a.o(n, "useSearchParams") &&
          a.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    6242: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var n = a(5155),
        r = a(2115);
      a(4255);
      let s = [
          {
            quarter: "Q1",
            year: 2025,
            title: "Idea & Foundation",
            milestones: [
              "Core vision defined: an AI-native chain with transaction risk awareness at its center",
              "Founding team and contributor base assembled",
              "Early technical direction and design principles established",
              "First whitepaper and litepaper drafted",
            ],
            status: "completed",
          },
          {
            quarter: "Q2",
            year: 2025,
            title: "Early Access & Community",
            milestones: [
              "Token infrastructure developed and deployed",
              "Independent third-party security audit completed",
              "Early supporter access opened to the community",
              "First official channels launched across major platforms",
            ],
            status: "completed",
          },
          {
            quarter: "Q3",
            year: 2025,
            title: "Beta Testnet",
            milestones: [
              "First public testnet brought online",
              "Block explorer support introduced",
              "Faucet and early developer onboarding made available",
              "Initial feedback loop with early participants",
            ],
            status: "completed",
          },
          {
            quarter: "Q4",
            year: 2025,
            title: "Advanced Testnet",
            milestones: [
              "AI transaction risk-awareness prototype demonstrated",
              "Wallet and transaction flow tested end to end",
              "Network performance and stability improvements",
              "Expanded developer resources and documentation",
            ],
            status: "completed",
          },
          {
            quarter: "Q1",
            year: 2026,
            title: "Infrastructure Scaling",
            milestones: [
              "Core infrastructure prepared for production-scale workloads",
              "Network tooling and node operations hardened",
              "Explorer and supporting services strengthened",
              "Groundwork laid for upcoming AI feature rollout",
            ],
            status: "completed",
          },
          {
            quarter: "Q2",
            year: 2026,
            title: "Mainnet Preparation",
            milestones: [
              "Mainnet candidate moved into staging and validation",
              "Developer tooling and integration documentation published",
              "Infrastructure and ecosystem partner onboarding",
            ],
            status: "completed",
          },
          {
            quarter: "Q3",
            year: 2026,
            title: "Token Launch",
            milestones: [
              "Network goes live",
              "Token Generation Event and public availability",
              "Staking and on-chain governance enabled",
              "Builder programs and broader ecosystem growth",
            ],
            status: "in-progress",
          },
        ],
        i = {
          completed: "Completed",
          "in-progress": "In Progress",
          upcoming: "Upcoming",
        },
        o = r.useLayoutEffect,
        c = s.findIndex((e) => "in-progress" === e.status),
        l = Math.max(0, Math.min(c < 0 ? 0 : c, s.length - 3));
      function d(e) {
        let { showHead: t = !0 } = e,
          a = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          [u, p] = (0, r.useState)(l),
          [m, h] = (0, r.useState)(0),
          [f, x] = (0, r.useState)(l),
          [g, b] = (0, r.useState)(3),
          [j, v] = (0, r.useState)(!1),
          y = (0, r.useRef)(!1);
        function k(e) {
          p((t) => Math.min(Math.max(t + e, 0), f));
        }
        return (
          o(() => {
            let e = a.current,
              t = d.current;
            if (!e || !t) return;
            let n = () => {
              let a = t.children[0];
              if (!a) return;
              let n = getComputedStyle(t),
                r = parseFloat(n.columnGap || n.gap) || 0,
                i = parseFloat(n.getPropertyValue("--peek")) || 0,
                o = a.offsetWidth,
                c = e.clientWidth,
                l = t.scrollWidth,
                d = Math.max(1, Math.floor((c + r) / (o + r) + 0.01)),
                m = Math.max(0, s.length - d);
              b(d), x(m);
              let f = Math.min(u, m);
              if (f !== u) return void p(f);
              let g = t.children[f];
              if (g)
                h(
                  Math.max(
                    Math.min(0, c - l),
                    Math.min(0, i + r - g.offsetLeft)
                  )
                );
            };
            n();
            let r = new ResizeObserver(n);
            return r.observe(e), () => r.disconnect();
          }, [u]),
          (0, r.useEffect)(() => {
            y.current ||
              c < 0 ||
              (window.matchMedia("(max-width: 860px)").matches &&
                ((y.current = !0), p(c)));
          }, []),
          (0, r.useEffect)(() => {
            let e = requestAnimationFrame(() => v(!0));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, n.jsx)("section", {
            id: "landing-roadmap",
            className: t ? void 0 : "landing-roadmap--page",
            children: (0, n.jsxs)("div", {
              className: "container",
              children: [
                t &&
                  (0, n.jsxs)("div", {
                    className: "roadmap-head",
                    children: [
                      (0, n.jsxs)("h2", {
                        children: [
                          "Nexchain ",
                          (0, n.jsx)("span", { children: "roadmap" }),
                        ],
                      }),
                      (0, n.jsxs)("p", {
                        children: [
                          "A phased rollout from core infrastructure ",
                          (0, n.jsx)("span", {
                            children: "and AI features to ecosystem",
                          }),
                          " ",
                          "growth and broader network utility.",
                        ],
                      }),
                    ],
                  }),
                (0, n.jsx)("div", {
                  className: "roadmap-line",
                  children: s.slice(u, u + g).map((e) => {
                    let { quarter: t, year: a, status: r } = e;
                    return (0, n.jsx)(
                      "button",
                      {
                        type: "button",
                        tabIndex: -1,
                        "aria-hidden": "true",
                        className: [r, "in-progress" === r && "active"]
                          .filter(Boolean)
                          .join(" "),
                      },
                      "".concat(t, "-").concat(a)
                    );
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "roadmap-viewport",
                  ref: a,
                  children: (0, n.jsx)("div", {
                    className: "roadmap-track ".concat(j ? "is-ready" : ""),
                    ref: d,
                    style: { transform: "translate3d(".concat(m, "px, 0, 0)") },
                    children: s.map((e) => {
                      let {
                        quarter: t,
                        year: a,
                        title: r,
                        milestones: s,
                        status: o,
                      } = e;
                      return (0, n.jsxs)(
                        "article",
                        {
                          className: "roadmap_block ".concat(o),
                          children: [
                            (0, n.jsxs)("div", {
                              className: "roadmap_block-top",
                              children: [
                                (0, n.jsxs)("span", { children: [t, " ", a] }),
                                (0, n.jsx)("b", { children: i[o] }),
                              ],
                            }),
                            (0, n.jsx)("h3", { children: r }),
                            (0, n.jsx)("ul", {
                              children: s.map((e) =>
                                (0, n.jsx)("li", { children: e }, e)
                              ),
                            }),
                          ],
                        },
                        "".concat(t, "-").concat(a)
                      );
                    }),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "roadmap-actions",
                  children: [
                    (0, n.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous roadmap item",
                      onClick: () => k(-1),
                      disabled: 0 === u,
                    }),
                    (0, n.jsx)("button", {
                      type: "button",
                      "aria-label": "Next roadmap item",
                      onClick: () => k(1),
                      disabled: u >= f,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    6705: () => {},
    6766: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => r.a });
      var n = a(1469),
        r = a.n(n);
    },
    9272: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => o });
      var n = a(5155),
        r = a(2708),
        s = a(1678),
        i = a(6766);
      function o(e) {
        let { campaign: t } = e,
          a = "TGE_50" === t.unlockPolicy,
          o = "TESTNET_EXPLORER" === t.spotlight;
        return (0, n.jsxs)("div", {
          className: "bonus-panel",
          children: [
            (0, n.jsx)("h2", {
              children: a
                ? (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("span", {
                      children: "50% UNLOCK OFFER",
                    }),
                  })
                : o
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", { children: "Testnet Explorer" }),
                      " Is Live",
                    ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("span", { children: ["The ", t.priceLabel] }),
                      " Window Won't Last",
                    ],
                  }),
            }),
            (0, n.jsx)("p", {
              className: "bonus-subtitle",
              children: t.supportingText,
            }),
            (0, n.jsx)("div", {
              className: "bonus-actions",
              children: (0, n.jsx)(s.default, {
                href: "https://nexchain.live",
                children: (0, n.jsx)(r.A, {
                  white: !0,
                  small: !0,
                  children: "Join Presale",
                }),
              }),
            }),
            (0, n.jsxs)("div", {
              className: "bonus-audits",
              children: [
                (0, n.jsxs)(s.default, {
                  href: "https://app.solidproof.io/projects/nexchain",
                  children: [
                    (0, n.jsx)("span", {
                      className: "bonus-audit-icon",
                      children: (0, n.jsx)(i.default, {
                        src: "/images/landing/solid-proof.svg",
                        alt: "",
                        width: 18,
                        height: 18,
                      }),
                    }),
                    (0, n.jsxs)("span", {
                      className: "bonus-audit-copy",
                      children: [
                        (0, n.jsx)("strong", { children: "Solid Proof" }),
                        "Smart Contract Audit",
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(s.default, {
                  href: "https://skynet.certik.com/projects/nexchain",
                  children: [
                    (0, n.jsx)("span", {
                      className: "bonus-audit-icon",
                      children: (0, n.jsx)(i.default, {
                        src: "/images/landing/certik.svg",
                        alt: "",
                        width: 18,
                        height: 18,
                      }),
                    }),
                    (0, n.jsxs)("span", {
                      className: "bonus-audit-copy",
                      children: [
                        (0, n.jsx)("strong", { children: "CertiK" }),
                        "Smart Contract Audit",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("p", {
              className: "bonus-audit-note",
              children:
                "Audits cover the NEX token smart contract, not the network or the AI layer.",
            }),
          ],
        });
      }
    },
  },
]);
