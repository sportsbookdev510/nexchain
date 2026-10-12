(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [803],
  {
    1218: () => {},
    1469: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return i;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = a(8229),
        n = a(8883),
        s = a(3063),
        c = r._(a(1193));
      function l(e) {
        let { props: t } = (0, n.getImgProps)(e, {
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
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let i = s.Image;
    },
    1678: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => h });
      var r = a(5155);
      a(6705);
      var n = a(6874),
        s = a.n(n),
        c = a(6766),
        l = a(5695),
        i = a(2115);
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
          let [a, r = ""] = e.split("#", 2),
            [n, s = ""] = a.split("?", 2),
            c = new URLSearchParams(s);
          new URLSearchParams(t).forEach((e, t) => {
            o(t) && !c.has(t) && c.append(t, e);
          });
          let l = c.toString();
          return ""
            .concat(n)
            .concat(l ? "?".concat(l) : "")
            .concat(r ? "#".concat(r) : "");
        },
        u = (e) => {
          let {
              href: t,
              children: a,
              className: n,
              download: o,
              rel: u,
              onClick: h,
            } = e,
            m = t.includes("http") || t.includes(".pdf") ? "_blank" : "",
            f = (0, l.useSearchParams)(),
            g = (0, i.useMemo)(() => d(t, f.toString()), [t, f]);
          return t.includes(".pdf")
            ? (0, r.jsxs)("a", {
                href: g,
                target: m,
                rel: u,
                download: o,
                onClick: h,
                className: "nex-link ".concat(n),
                children: [
                  a,
                  "string" == typeof a &&
                    (0, r.jsx)(c.default, {
                      src: "/images/ArrowUpRight.svg",
                      alt: "arrow",
                      width: 16,
                      height: 16,
                    }),
                ],
              })
            : (0, r.jsx)(s(), {
                onClick: h,
                href: g,
                target: m,
                rel: u,
                className: "nex-link "
                  .concat(n, " ")
                  .concat(t ? "" : "inactive"),
                children: a,
              });
        },
        h = (e) =>
          (0, r.jsx)(i.Suspense, { children: (0, r.jsx)(u, { ...e }) });
    },
    2360: () => {},
    2567: () => {},
    2708: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n, N: () => s });
      var r = a(5155);
      function n(e) {
        let {
          children: t,
          white: a,
          noIcon: n,
          small: s,
          center: c,
          disabled: l,
          onClick: i,
        } = e;
        return (0, r.jsx)("button", {
          className: "btn "
            .concat(a ? "btn-w" : "", " ")
            .concat(n ? "no-icon" : "", " ")
            .concat(s ? "small" : "", " ")
            .concat(c ? "center" : "", " ")
            .concat(l ? "disabled" : ""),
          onClick: i,
          children: t,
        });
      }
      function s(e) {
        let {
          children: t,
          white: a,
          noIcon: n,
          small: s,
          center: c,
          disabled: l,
        } = e;
        return (0, r.jsx)("button", {
          className: "btn blog-btn "
            .concat(a ? "btn-w" : "", " ")
            .concat(n ? "no-icon" : "", " ")
            .concat(s ? "small" : "", " ")
            .concat(c ? "center" : "", " ")
            .concat(l ? "disabled" : ""),
          children: t,
        });
      }
      a(2360);
    },
    5411: () => {},
    5695: (e, t, a) => {
      "use strict";
      var r = a(8999);
      a.o(r, "useParams") &&
        a.d(t, {
          useParams: function () {
            return r.useParams;
          },
        }),
        a.o(r, "usePathname") &&
          a.d(t, {
            usePathname: function () {
              return r.usePathname;
            },
          }),
        a.o(r, "useRouter") &&
          a.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        a.o(r, "useSearchParams") &&
          a.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    6705: () => {},
    6766: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n.a });
      var r = a(1469),
        n = a.n(r);
    },
    7292: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => h });
      var r = a(5155),
        n = a(2115),
        s = a(5695);
      a(5411);
      var c = a(2708),
        l = a(1678),
        i = a(6766);
      function o(e) {
        let {
          category: t,
          title: a,
          date: n,
          description: s,
          slug: o,
          readingTime: d,
        } = e;
        return (0, r.jsxs)("div", {
          className: "blogpost-card",
          children: [
            (0, r.jsx)("div", {
              className: "title-image-wrap",
              children: (0, r.jsx)(l.default, {
                href: "/blog/".concat(o),
                children: (0, r.jsx)(i.default, {
                  src: "/images/blog/".concat(o, ".png"),
                  alt: o || "",
                  fill: !0,
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: "info",
              children: [
                t,
                (0, r.jsxs)("div", {
                  className: "right",
                  children: [n, " / ", d, " min"],
                }),
              ],
            }),
            (0, r.jsx)(l.default, {
              href: "/blog/".concat(o),
              children: (0, r.jsx)("h3", { children: a }),
            }),
            (0, r.jsx)("p", { children: s }),
            (0, r.jsx)("div", {
              className: "card-button-block",
              children: (0, r.jsx)(l.default, {
                href: "/blog/".concat(o),
                children: (0, r.jsx)(c.N, {
                  white: !0,
                  small: !0,
                  children: "Read More",
                }),
              }),
            }),
          ],
        });
      }
      function d(e) {
        let { total: t, pageSize: a, updateList: c } = e,
          l = (0, s.useRouter)(),
          i = (0, s.useSearchParams)(),
          [o, d] = (0, n.useState)(1);
        (0, n.useEffect)(() => {
          let e = Number(i.get("page")) || 1;
          d(e), c(e);
        }, [i, c]);
        let u = Math.ceil(t / a);
        return (0, r.jsx)("div", {
          id: "pagination",
          children: Array.from({ length: u }, (e, t) => {
            let a = t + 1;
            return (0, r.jsx)(
              "button",
              {
                className: a === o ? "active" : "",
                onClick: () =>
                  (function (e) {
                    let t = new URLSearchParams(Array.from(i.entries()));
                    1 === e ? t.delete("page") : t.set("page", String(e)),
                      l.push("?".concat(t.toString()));
                  })(a),
                children: a,
              },
              a
            );
          }),
        });
      }
      a(1218);
      let u = ["Insights", "Guides", "Technology"];
      function h(e) {
        let { posts: t } = e,
          a = (0, s.useRouter)(),
          c = (0, s.useSearchParams)(),
          l = Number(c.get("page")) || 1,
          [i, h] = (0, n.useState)(""),
          m = c.get("category") || "",
          f = (e) => {
            let t = new URLSearchParams(Array.from(c.entries()));
            e ? t.set("category", e) : t.delete("category"),
              t.delete("page"),
              a.push("?".concat(t.toString()));
          },
          g = (0, n.useMemo)(
            () => u.filter((e) => t.some((t) => t.category === e)),
            [t]
          ),
          p = (0, n.useMemo)(() => {
            let e = t;
            return (
              m && (e = e.filter((e) => e.category === m)),
              i &&
                (e = e.filter((e) => {
                  var t;
                  return null == (t = e.title)
                    ? void 0
                    : t.toLowerCase().includes(i.toLowerCase());
                })),
              e
                .filter((e) => e.title)
                .sort((e, t) => {
                  let a = e.date ? new Date(e.date).getTime() : 0;
                  return (t.date ? new Date(t.date).getTime() : 0) - a;
                })
            );
          }, [t, m, i]),
          v = p.slice((l - 1) * 6, 6 * l);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: "filters-wrap",
              children: [
                (0, r.jsxs)("div", {
                  className: "types-wrap",
                  children: [
                    (0, r.jsx)("button", {
                      className: m ? "" : "active",
                      onClick: () => f(""),
                      children: "All",
                    }),
                    g.map((e, t) =>
                      (0, r.jsx)(
                        "button",
                        {
                          className: m === e ? "active" : "",
                          onClick: () => f(e || ""),
                          children: e,
                        },
                        t
                      )
                    ),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "search-wrap",
                  children: (0, r.jsx)("div", {
                    className: "search-input",
                    children: (0, r.jsx)("input", {
                      type: "text",
                      placeholder: "Search",
                      id: "search",
                      value: i,
                      onChange: (e) => h(e.target.value),
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "article-list",
              children: v.map((e, t) =>
                (0, n.createElement)(o, { ...e, key: t })
              ),
            }),
            (0, r.jsx)(d, {
              pageSize: 6,
              total: p.length,
              updateList: () => {},
            }),
          ],
        });
      }
    },
    8070: (e, t, a) => {
      Promise.resolve().then(a.t.bind(a, 8763, 23)),
        Promise.resolve().then(a.bind(a, 7292)),
        Promise.resolve().then(a.t.bind(a, 2567, 23)),
        Promise.resolve().then(a.bind(a, 1678));
    },
    8763: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [2776, 7124, 6287, 6, 6561, 4144, 6874, 3063, 8441, 1684, 7358],
      () => t(8070)
    ),
      (_N_E = e.O());
  },
]);
