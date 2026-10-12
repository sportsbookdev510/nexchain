(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1053],
  {
    1469: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return i;
          },
        });
      let s = n(8229),
        a = n(8883),
        r = n(3063),
        c = s._(n(1193));
      function i(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: c.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = r.Image;
    },
    1678: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => h });
      var s = n(5155);
      n(6705);
      var a = n(6874),
        r = n.n(a),
        c = n(6766),
        i = n(5695),
        l = n(2115);
      let o = (e) => {
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
          let [n, s = ""] = e.split("#", 2),
            [a, r = ""] = n.split("?", 2),
            c = new URLSearchParams(r);
          new URLSearchParams(t).forEach((e, t) => {
            o(t) && !c.has(t) && c.append(t, e);
          });
          let i = c.toString();
          return ""
            .concat(a)
            .concat(i ? "?".concat(i) : "")
            .concat(s ? "#".concat(s) : "");
        },
        u = (e) => {
          let {
              href: t,
              children: n,
              className: a,
              download: o,
              rel: u,
              onClick: h,
            } = e,
            m = t.includes("http") || t.includes(".pdf") ? "_blank" : "",
            f = (0, i.useSearchParams)(),
            p = (0, l.useMemo)(() => d(t, f.toString()), [t, f]);
          return t.includes(".pdf")
            ? (0, s.jsxs)("a", {
                href: p,
                target: m,
                rel: u,
                download: o,
                onClick: h,
                className: "nex-link ".concat(a),
                children: [
                  n,
                  "string" == typeof n &&
                    (0, s.jsx)(c.default, {
                      src: "/images/ArrowUpRight.svg",
                      alt: "arrow",
                      width: 16,
                      height: 16,
                    }),
                ],
              })
            : (0, s.jsx)(r(), {
                onClick: h,
                href: p,
                target: m,
                rel: u,
                className: "nex-link "
                  .concat(a, " ")
                  .concat(t ? "" : "inactive"),
                children: n,
              });
        },
        h = (e) =>
          (0, s.jsx)(l.Suspense, { children: (0, s.jsx)(u, { ...e }) });
    },
    1711: () => {},
    2360: () => {},
    2567: () => {},
    2708: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a, N: () => r });
      var s = n(5155);
      function a(e) {
        let {
          children: t,
          white: n,
          noIcon: a,
          small: r,
          center: c,
          disabled: i,
          onClick: l,
        } = e;
        return (0, s.jsx)("button", {
          className: "btn "
            .concat(n ? "btn-w" : "", " ")
            .concat(a ? "no-icon" : "", " ")
            .concat(r ? "small" : "", " ")
            .concat(c ? "center" : "", " ")
            .concat(i ? "disabled" : ""),
          onClick: l,
          children: t,
        });
      }
      function r(e) {
        let {
          children: t,
          white: n,
          noIcon: a,
          small: r,
          center: c,
          disabled: i,
        } = e;
        return (0, s.jsx)("button", {
          className: "btn blog-btn "
            .concat(n ? "btn-w" : "", " ")
            .concat(a ? "no-icon" : "", " ")
            .concat(r ? "small" : "", " ")
            .concat(c ? "center" : "", " ")
            .concat(i ? "disabled" : ""),
          children: t,
        });
      }
      n(2360);
    },
    5695: (e, t, n) => {
      "use strict";
      var s = n(8999);
      n.o(s, "useParams") &&
        n.d(t, {
          useParams: function () {
            return s.useParams;
          },
        }),
        n.o(s, "usePathname") &&
          n.d(t, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        n.o(s, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        n.o(s, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
    5937: () => {},
    6705: () => {},
    6766: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => a.a });
      var s = n(1469),
        a = n.n(s);
    },
    7298: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 9272)),
        Promise.resolve().then(n.t.bind(n, 5937, 23)),
        Promise.resolve().then(n.t.bind(n, 1711, 23)),
        Promise.resolve().then(n.t.bind(n, 2567, 23));
    },
    9272: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => i });
      var s = n(5155),
        a = n(2708),
        r = n(1678),
        c = n(6766);
      function i(e) {
        let { campaign: t } = e,
          n = "TGE_50" === t.unlockPolicy,
          i = "TESTNET_EXPLORER" === t.spotlight;
        return (0, s.jsxs)("div", {
          className: "bonus-panel",
          children: [
            (0, s.jsx)("h2", {
              children: n
                ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("span", {
                      children: "50% UNLOCK OFFER",
                    }),
                  })
                : i
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("span", { children: "Testnet Explorer" }),
                      " Is Live",
                    ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("span", { children: ["The ", t.priceLabel] }),
                      " Window Won't Last",
                    ],
                  }),
            }),
            (0, s.jsx)("p", {
              className: "bonus-subtitle",
              children: t.supportingText,
            }),
            (0, s.jsx)("div", {
              className: "bonus-actions",
              children: (0, s.jsx)(r.default, {
                href: "https://nexchain.live",
                children: (0, s.jsx)(a.A, {
                  white: !0,
                  small: !0,
                  children: "Join Presale",
                }),
              }),
            }),
            (0, s.jsxs)("div", {
              className: "bonus-audits",
              children: [
                (0, s.jsxs)(r.default, {
                  href: "https://app.solidproof.io/projects/nexchain",
                  children: [
                    (0, s.jsx)("span", {
                      className: "bonus-audit-icon",
                      children: (0, s.jsx)(c.default, {
                        src: "/images/landing/solid-proof.svg",
                        alt: "",
                        width: 18,
                        height: 18,
                      }),
                    }),
                    (0, s.jsxs)("span", {
                      className: "bonus-audit-copy",
                      children: [
                        (0, s.jsx)("strong", { children: "Solid Proof" }),
                        "Smart Contract Audit",
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(r.default, {
                  href: "https://skynet.certik.com/projects/nexchain",
                  children: [
                    (0, s.jsx)("span", {
                      className: "bonus-audit-icon",
                      children: (0, s.jsx)(c.default, {
                        src: "/images/landing/certik.svg",
                        alt: "",
                        width: 18,
                        height: 18,
                      }),
                    }),
                    (0, s.jsxs)("span", {
                      className: "bonus-audit-copy",
                      children: [
                        (0, s.jsx)("strong", { children: "CertiK" }),
                        "Smart Contract Audit",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("p", {
              className: "bonus-audit-note",
              children:
                "Audits cover the NEX token smart contract, not the network or the AI layer.",
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6287, 6, 6222, 1852, 4144, 6874, 3063, 8441, 1684, 7358], () =>
      t(7298)
    ),
      (_N_E = e.O());
  },
]);
