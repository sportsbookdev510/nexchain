(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8646],
  {
    1469: (e, a, t) => {
      "use strict";
      Object.defineProperty(a, "__esModule", { value: !0 }),
        !(function (e, a) {
          for (var t in a)
            Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
        })(a, {
          default: function () {
            return i;
          },
          getImageProps: function () {
            return c;
          },
        });
      let s = t(8229),
        l = t(8883),
        n = t(3063),
        r = s._(t(1193));
      function c(e) {
        let { props: a } = (0, l.getImgProps)(e, {
          defaultLoader: r.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, t] of Object.entries(a)) void 0 === t && delete a[e];
        return { props: a };
      }
      let i = n.Image;
    },
    1678: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { default: () => u });
      var s = t(5155);
      t(6705);
      var l = t(6874),
        n = t.n(l),
        r = t(6766),
        c = t(5695),
        i = t(2115);
      let o = (e) => {
          let a = e.toLowerCase();
          return (
            "r" === a ||
            "ref" === a ||
            "referral" === a ||
            a.startsWith("utm_") ||
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
            ].includes(a)
          );
        },
        d = (e, a) => {
          if (!a) return e;
          let [t, s = ""] = e.split("#", 2),
            [l, n = ""] = t.split("?", 2),
            r = new URLSearchParams(n);
          new URLSearchParams(a).forEach((e, a) => {
            o(a) && !r.has(a) && r.append(a, e);
          });
          let c = r.toString();
          return ""
            .concat(l)
            .concat(c ? "?".concat(c) : "")
            .concat(s ? "#".concat(s) : "");
        },
        h = (e) => {
          let {
              href: a,
              children: t,
              className: l,
              download: o,
              rel: h,
              onClick: u,
            } = e,
            f = a.includes("http") || a.includes(".pdf") ? "_blank" : "",
            m = (0, c.useSearchParams)(),
            x = (0, i.useMemo)(() => d(a, m.toString()), [a, m]);
          return a.includes(".pdf")
            ? (0, s.jsxs)("a", {
                href: x,
                target: f,
                rel: h,
                download: o,
                onClick: u,
                className: "nex-link ".concat(l),
                children: [
                  t,
                  "string" == typeof t &&
                    (0, s.jsx)(r.default, {
                      src: "/images/ArrowUpRight.svg",
                      alt: "arrow",
                      width: 16,
                      height: 16,
                    }),
                ],
              })
            : (0, s.jsx)(n(), {
                onClick: u,
                href: x,
                target: f,
                rel: h,
                className: "nex-link "
                  .concat(l, " ")
                  .concat(a ? "" : "inactive"),
                children: t,
              });
        },
        u = (e) =>
          (0, s.jsx)(i.Suspense, { children: (0, s.jsx)(h, { ...e }) });
    },
    2360: () => {},
    2514: () => {},
    2708: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => l, N: () => n });
      var s = t(5155);
      function l(e) {
        let {
          children: a,
          white: t,
          noIcon: l,
          small: n,
          center: r,
          disabled: c,
          onClick: i,
        } = e;
        return (0, s.jsx)("button", {
          className: "btn "
            .concat(t ? "btn-w" : "", " ")
            .concat(l ? "no-icon" : "", " ")
            .concat(n ? "small" : "", " ")
            .concat(r ? "center" : "", " ")
            .concat(c ? "disabled" : ""),
          onClick: i,
          children: a,
        });
      }
      function n(e) {
        let {
          children: a,
          white: t,
          noIcon: l,
          small: n,
          center: r,
          disabled: c,
        } = e;
        return (0, s.jsx)("button", {
          className: "btn blog-btn "
            .concat(t ? "btn-w" : "", " ")
            .concat(l ? "no-icon" : "", " ")
            .concat(n ? "small" : "", " ")
            .concat(r ? "center" : "", " ")
            .concat(c ? "disabled" : ""),
          children: a,
        });
      }
      t(2360);
    },
    4172: () => {},
    5695: (e, a, t) => {
      "use strict";
      var s = t(8999);
      t.o(s, "useParams") &&
        t.d(a, {
          useParams: function () {
            return s.useParams;
          },
        }),
        t.o(s, "usePathname") &&
          t.d(a, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        t.o(s, "useRouter") &&
          t.d(a, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        t.o(s, "useSearchParams") &&
          t.d(a, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
    6636: () => {},
    6705: () => {},
    6766: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => l.a });
      var s = t(1469),
        l = t.n(s);
    },
    7545: () => {},
    9543: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => o });
      var s = t(5155),
        l = t(2708),
        n = t(1678),
        r = t(6766),
        c = t(2115),
        i = t(5695);
      function o(e) {
        let { campaign: a, darkMode: t = !1, stickyRebuild: o = !1 } = e,
          d = (0, i.usePathname)(),
          h = "/builders" === d,
          [u, f] = (0, c.useState)(!1),
          [m, x] = (0, c.useState)(""),
          j = (0, c.useRef)([]),
          g = (0, c.useRef)([]);
        function p() {
          f(!u);
        }
        function b(e) {
          m != e ? x(e) : x("");
        }
        function v() {
          p();
        }
        return (
          (0, c.useEffect)(() => {
            let e =
              "aboutus" === m
                ? 0
                : "solutions" === m
                ? 1
                : "learn" === m
                ? 2
                : "testnet" === m
                ? 3
                : -1;
            if (-1 !== e) {
              let a = j.current[e],
                t = g.current[e];
              a && t && (t.style.height = "".concat(a.offsetHeight, "px"));
            }
          }, [m]),
          (0, c.useEffect)(() => {
            f(!1), x("");
          }, [d]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              "" !== m &&
                (0, s.jsx)("div", {
                  className: "menu-background",
                  onClick: () => x(""),
                }),
              (0, s.jsx)("div", {
                className: "header-shell "
                  .concat(o ? "header-shell--inline" : "", " ")
                  .concat(h ? "header-shell--builders" : ""),
                children: (0, s.jsx)("header", {
                  className: ""
                    .concat(u ? "active" : "", " ")
                    .concat(o ? "header--static header--landing" : ""),
                  children: (0, s.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, s.jsx)(n.default, {
                        href: "/",
                        className: "nav-logo",
                        children: (0, s.jsx)(r.default, {
                          src: "/images/logo.svg",
                          alt: "logo",
                          width: "102",
                          height: "47",
                          loading: "lazy",
                        }),
                      }),
                      (0, s.jsxs)("nav", {
                        className: u ? "active" : "",
                        children: [
                          (0, s.jsxs)("ul", {
                            className: "nav_list",
                            children: [
                              (0, s.jsxs)("li", {
                                children: [
                                  (0, s.jsxs)("label", {
                                    className:
                                      ("aboutus" === m && "active") || "",
                                    onClick: () => b("aboutus"),
                                    children: [
                                      "About ",
                                      (0, s.jsx)("span", {
                                        className: "arrow-menu",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "submenu-backdrop ".concat(
                                      "aboutus" === m && "active"
                                    ),
                                    ref: (e) => {
                                      e && (g.current[0] = e);
                                    },
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: "name-menu",
                                        children: "/About",
                                      }),
                                      " ",
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "submenu-wrapper ".concat(
                                      "aboutus" === m && "active"
                                    ),
                                    ref: (e) => {
                                      e && (j.current[0] = e);
                                    },
                                    children: (0, s.jsxs)("ul", {
                                      children: [
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/ecosystem",
                                            children: "Ecosystem",
                                          }),
                                        }),
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/tokenomics",
                                            children: "Tokenomics",
                                          }),
                                        }),
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/documents/Whitepaper-Nexchain.pdf",
                                            children: "Whitepaper",
                                          }),
                                        }),
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/documents/Litepaper-Nexchain.pdf",
                                            children: "Litepaper",
                                          }),
                                        }),
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/roadmap",
                                            children: "Roadmap",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("li", {
                                children: (0, s.jsx)(n.default, {
                                  onClick: v,
                                  href: "/blog",
                                  children: (0, s.jsx)("label", {
                                    children: "Blog",
                                  }),
                                }),
                              }),
                              (0, s.jsx)("li", {
                                children: (0, s.jsx)(n.default, {
                                  onClick: v,
                                  href: "/builders",
                                  children: (0, s.jsx)("label", {
                                    children: "Builders Program",
                                  }),
                                }),
                              }),
                              (0, s.jsx)("li", {
                                children: (0, s.jsx)("a", {
                                  onClick: v,
                                  href: "https://www.nexscan.cloud/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "nex-link",
                                  children: (0, s.jsx)("label", {
                                    children: "Testnet",
                                  }),
                                }),
                              }),
                              (0, s.jsxs)("li", {
                                children: [
                                  (0, s.jsxs)("label", {
                                    className:
                                      ("learn" === m && "active") || "",
                                    onClick: () => b("learn"),
                                    children: [
                                      "Learn ",
                                      (0, s.jsx)("span", {
                                        className: "arrow-menu",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "submenu-backdrop ".concat(
                                      "learn" === m && "active"
                                    ),
                                    ref: (e) => {
                                      e && (g.current[2] = e);
                                    },
                                    children: (0, s.jsx)("div", {
                                      className: "name-menu",
                                      children: "/Learn",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "submenu-wrapper ".concat(
                                      "learn" === m && "active"
                                    ),
                                    ref: (e) => {
                                      e && (j.current[2] = e);
                                    },
                                    children: (0, s.jsxs)("ul", {
                                      children: [
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/referrals",
                                            children: "Referrals",
                                          }),
                                        }),
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/career",
                                            children: "Career",
                                          }),
                                        }),
                                        (0, s.jsx)("li", {
                                          children: (0, s.jsx)(n.default, {
                                            onClick: v,
                                            href: "/contact-us",
                                            children: "Contact",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "menu-footer-mobile",
                            children: [
                              (0, s.jsx)("p", {
                                children:
                                  "Nexchain is an L1 blockchain protocol that leverages artificial intelligence (AI) to optimize scalability, security, and interoperability.",
                              }),
                              (0, s.jsxs)("div", {
                                className: "footer_soc",
                                children: [
                                  (0, s.jsx)(n.default, {
                                    href: "https://x.com/nexchain_ai",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_x.svg",
                                      alt: "Twitter/X",
                                      width: 24,
                                      height: 24,
                                    }),
                                  }),
                                  (0, s.jsx)(n.default, {
                                    href: "https://telegram.me/nexchain_ai",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_telegram.svg",
                                      alt: "Telegram",
                                      width: 24,
                                      height: 24,
                                    }),
                                  }),
                                  (0, s.jsx)(n.default, {
                                    href: "https://www.facebook.com/profile.php?id=61572292096808",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_facebook.svg",
                                      alt: "Facebook",
                                      width: 24,
                                      height: 24,
                                    }),
                                  }),
                                  (0, s.jsx)(n.default, {
                                    href: "https://www.instagram.com/nexchainai/",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_instagram.svg",
                                      alt: "Instagram",
                                      width: 20,
                                      height: 20,
                                    }),
                                  }),
                                  (0, s.jsx)(n.default, {
                                    href: "https://medium.com/@nexchain",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_medium.svg",
                                      alt: "Medium",
                                      width: 24,
                                      height: 24,
                                    }),
                                  }),
                                  (0, s.jsx)(n.default, {
                                    href: "https://coinmarketcap.com/community/profile/Nexchain/",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_coinmarketcap.svg",
                                      alt: "Coinmarketcap",
                                      width: 24,
                                      height: 24,
                                    }),
                                  }),
                                  (0, s.jsx)(n.default, {
                                    href: "https://www.linkedin.com/company/nexchainai/",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_linkedin.svg",
                                      alt: "LinkedIn",
                                      width: 20,
                                      height: 20,
                                    }),
                                  }),
                                  (0, s.jsx)(n.default, {
                                    href: "/blog",
                                    children: (0, s.jsx)(r.default, {
                                      src: "/images/footer_blog.svg",
                                      alt: "Blog",
                                      width: 20,
                                      height: 20,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "header-actions",
                        children: (0, s.jsx)(n.default, {
                          href: h
                            ? "/builders#builders-form"
                            : "https://nexchain.live",
                          className: "header-cta-link",
                          children: (0, s.jsx)(l.A, {
                            small: !0,
                            white: t,
                            children: h ? "Apply to Build" : "Join Presale",
                          }),
                        }),
                      }),
                      (0, s.jsx)("button", {
                        className: "show-menu ".concat(u ? "active" : ""),
                        onClick: p,
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      t(6636);
    },
  },
]);
