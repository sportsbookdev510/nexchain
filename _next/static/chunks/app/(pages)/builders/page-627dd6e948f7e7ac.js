(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6555],
  {
    1469: (e, r, l) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        !(function (e, r) {
          for (var l in r)
            Object.defineProperty(e, l, { enumerable: !0, get: r[l] });
        })(r, {
          default: function () {
            return d;
          },
          getImageProps: function () {
            return n;
          },
        });
      let i = l(8229),
        t = l(8883),
        a = l(3063),
        s = i._(l(1193));
      function n(e) {
        let { props: r } = (0, t.getImgProps)(e, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, l] of Object.entries(r)) void 0 === l && delete r[e];
        return { props: r };
      }
      let d = a.Image;
    },
    1678: (e, r, l) => {
      "use strict";
      l.r(r), l.d(r, { default: () => b });
      var i = l(5155);
      l(6705);
      var t = l(6874),
        a = l.n(t),
        s = l(6766),
        n = l(5695),
        d = l(2115);
      let c = (e) => {
          let r = e.toLowerCase();
          return (
            "r" === r ||
            "ref" === r ||
            "referral" === r ||
            r.startsWith("utm_") ||
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
            ].includes(r)
          );
        },
        u = (e, r) => {
          if (!r) return e;
          let [l, i = ""] = e.split("#", 2),
            [t, a = ""] = l.split("?", 2),
            s = new URLSearchParams(a);
          new URLSearchParams(r).forEach((e, r) => {
            c(r) && !s.has(r) && s.append(r, e);
          });
          let n = s.toString();
          return ""
            .concat(t)
            .concat(n ? "?".concat(n) : "")
            .concat(i ? "#".concat(i) : "");
        },
        o = (e) => {
          let {
              href: r,
              children: l,
              className: t,
              download: c,
              rel: o,
              onClick: b,
            } = e,
            h = r.includes("http") || r.includes(".pdf") ? "_blank" : "",
            m = (0, n.useSearchParams)(),
            p = (0, d.useMemo)(() => u(r, m.toString()), [r, m]);
          return r.includes(".pdf")
            ? (0, i.jsxs)("a", {
                href: p,
                target: h,
                rel: o,
                download: c,
                onClick: b,
                className: "nex-link ".concat(t),
                children: [
                  l,
                  "string" == typeof l &&
                    (0, i.jsx)(s.default, {
                      src: "/images/ArrowUpRight.svg",
                      alt: "arrow",
                      width: 16,
                      height: 16,
                    }),
                ],
              })
            : (0, i.jsx)(a(), {
                onClick: b,
                href: p,
                target: h,
                rel: o,
                className: "nex-link "
                  .concat(t, " ")
                  .concat(r ? "" : "inactive"),
                children: l,
              });
        },
        b = (e) =>
          (0, i.jsx)(d.Suspense, { children: (0, i.jsx)(o, { ...e }) });
    },
    2285: (e, r, l) => {
      "use strict";
      l.d(r, { default: () => a });
      var i = l(5155),
        t = l(2115);
      function a(e) {
        let { items: r } = e,
          [l, a] = (0, t.useState)(0);
        return (0, i.jsx)("div", {
          className: "builders-faq-list",
          children: r.map((e, r) => {
            let { question: t, answer: s } = e;
            return (0, i.jsxs)(
              "div",
              {
                className: "builders-faq-block ".concat(
                  l === r ? "active" : ""
                ),
                children: [
                  (0, i.jsxs)("div", {
                    className: "builders-faq-title",
                    onClick: () => a(l === r ? -1 : r),
                    children: [
                      (0, i.jsx)("h3", { children: t }),
                      (0, i.jsx)("button", {
                        type: "button",
                        "aria-label": l === r ? "Close answer" : "Open answer",
                        className: "btn btn-faq ".concat(
                          l === r ? "active" : ""
                        ),
                      }),
                    ],
                  }),
                  l === r &&
                    (0, i.jsx)("div", {
                      className: "builders-faq-text active",
                      children: s,
                    }),
                ],
              },
              t
            );
          }),
        });
      }
    },
    2567: () => {},
    4663: (e, r, l) => {
      Promise.resolve().then(l.bind(l, 2285)),
        Promise.resolve().then(l.bind(l, 5450)),
        Promise.resolve().then(l.t.bind(l, 2567, 23)),
        Promise.resolve().then(l.t.bind(l, 7763, 23)),
        Promise.resolve().then(l.bind(l, 1678)),
        Promise.resolve().then(l.t.bind(l, 3063, 23));
    },
    5450: (e, r, l) => {
      "use strict";
      l.d(r, { default: () => n });
      var i = l(5155),
        t = l(2115);
      let a = [
          "EVM-compatible smart contracts",
          "Transaction risk intelligence",
          "Wallet integrations",
          "DeFi infrastructure",
          "Explorer and analytics",
          "AI-powered applications",
        ],
        s = ["Idea", "Prototype", "MVP", "Live product", "Established company"];
      function n() {
        let [e, r] = (0, t.useState)(!1),
          [l, n] = (0, t.useState)(""),
          [d, c] = (0, t.useState)(""),
          [u, o] = (0, t.useState)(!1);
        return (0, i.jsxs)("form", {
          className: "builders-form",
          onSubmit: function (e) {
            e.preventDefault();
            let l = e.currentTarget,
              i = new FormData(l);
            if (!d) {
              r(!1), n("Select a project stage.");
              return;
            }
            if (0 === i.getAll("builderCapability").length) {
              r(!1), n("Select at least one relevant Nexchain capability.");
              return;
            }
            n(""), r(!0), c(""), l.reset();
          },
          children: [
            (0, i.jsx)("h3", { children: "Builder application" }),
            (0, i.jsxs)("div", {
              className: "builders-form-fields",
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderName",
                      children: "Full name*",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderName",
                      name: "builderName",
                      type: "text",
                      placeholder: "Your name",
                      required: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderEmail",
                      children: "Email address*",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderEmail",
                      name: "builderEmail",
                      type: "email",
                      placeholder: "Your email",
                      required: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderContact",
                      children: "Telegram or Discord*",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderContact",
                      name: "builderContact",
                      type: "text",
                      placeholder: "@username",
                      required: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderTeam",
                      children: "Team or project name*",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderTeam",
                      name: "builderTeam",
                      type: "text",
                      placeholder: "Project name",
                      required: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderRole",
                      children: "Your role*",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderRole",
                      name: "builderRole",
                      type: "text",
                      placeholder: "Founder, developer...",
                      required: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      id: "builderStageLabel",
                      children: "Project stage*",
                    }),
                    (0, i.jsx)("input", {
                      type: "hidden",
                      name: "builderStage",
                      value: d,
                      readOnly: !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: "builders-select "
                        .concat(u ? "open" : "", " ")
                        .concat(d ? "selected" : ""),
                      onBlur: function (e) {
                        e.currentTarget.contains(e.relatedTarget) || o(!1);
                      },
                      children: [
                        (0, i.jsx)("button", {
                          type: "button",
                          "aria-haspopup": "listbox",
                          "aria-expanded": u,
                          "aria-labelledby": "builderStageLabel",
                          onClick: () => o((e) => !e),
                          children: (0, i.jsx)("span", {
                            children: d || "Select stage",
                          }),
                        }),
                        u &&
                          (0, i.jsx)("ul", {
                            role: "listbox",
                            "aria-labelledby": "builderStageLabel",
                            tabIndex: -1,
                            children: s.map((e) =>
                              (0, i.jsx)(
                                "li",
                                {
                                  children: (0, i.jsx)("button", {
                                    type: "button",
                                    role: "option",
                                    "aria-selected": d === e,
                                    className: d === e ? "active" : void 0,
                                    onClick: () => {
                                      c(e), o(!1), n("");
                                    },
                                    children: e,
                                  }),
                                },
                                e
                              )
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderWebsite",
                      children: "Project website",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderWebsite",
                      name: "builderWebsite",
                      type: "url",
                      placeholder: "https://",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderGithub",
                      children: "GitHub or portfolio",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderGithub",
                      name: "builderGithub",
                      type: "url",
                      placeholder: "https://",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "builders-form-full",
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderProduct",
                      children: "What are you building?*",
                    }),
                    (0, i.jsx)("textarea", {
                      id: "builderProduct",
                      name: "builderProduct",
                      placeholder:
                        "Describe the problem, product, and intended users.",
                      required: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "builders-form-full",
                  children: [
                    (0, i.jsx)("p", {
                      className: "builders-form-label",
                      children: "Relevant Nexchain capabilities*",
                    }),
                    (0, i.jsx)("div", {
                      className: "builders-capabilities",
                      children: a.map((e) =>
                        (0, i.jsxs)(
                          "label",
                          {
                            children: [
                              (0, i.jsx)("input", {
                                type: "checkbox",
                                name: "builderCapability",
                                value: e,
                              }),
                              (0, i.jsx)("span", { children: e }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "builders-form-full",
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderContribution",
                      children:
                        "How will your product contribute to Nexchain?*",
                    }),
                    (0, i.jsx)("textarea", {
                      id: "builderContribution",
                      name: "builderContribution",
                      placeholder: "Explain the ecosystem value.",
                      required: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderStack",
                      children: "Technical stack",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderStack",
                      name: "builderStack",
                      type: "text",
                      placeholder: "Solidity, React, Foundry...",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderTimeline",
                      children: "Development timeline",
                    }),
                    (0, i.jsx)("input", {
                      id: "builderTimeline",
                      name: "builderTimeline",
                      type: "text",
                      placeholder: "Example: 8-12 weeks",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "builders-form-full",
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: "builderSupport",
                      children: "Specific support needed",
                    }),
                    (0, i.jsx)("textarea", {
                      id: "builderSupport",
                      name: "builderSupport",
                      placeholder: "Optional",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "builders-form-full",
                  children: (0, i.jsxs)("label", {
                    className: "builders-consent",
                    children: [
                      (0, i.jsx)("input", {
                        type: "checkbox",
                        name: "builderConsent",
                        required: !0,
                      }),
                      (0, i.jsx)("span", {
                        children:
                          "I agree that the Nexchain team may contact me regarding the Builders Program and review the information submitted in this application.*",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            l &&
              (0, i.jsx)("p", {
                className: "builders-form-error",
                role: "alert",
                children: l,
              }),
            (0, i.jsx)("button", {
              className: "builders-submit",
              type: "submit",
              children: "Submit Application",
            }),
            (0, i.jsx)("p", {
              className: "builders-form-note",
              children:
                "Prototype only - this form does not send or store data.",
            }),
            e &&
              (0, i.jsx)("div", {
                className: "builders-success",
                role: "status",
                children:
                  "Application received. Thank you for applying to the Nexchain Builders Program.",
              }),
          ],
        });
      }
    },
    5695: (e, r, l) => {
      "use strict";
      var i = l(8999);
      l.o(i, "useParams") &&
        l.d(r, {
          useParams: function () {
            return i.useParams;
          },
        }),
        l.o(i, "usePathname") &&
          l.d(r, {
            usePathname: function () {
              return i.usePathname;
            },
          }),
        l.o(i, "useRouter") &&
          l.d(r, {
            useRouter: function () {
              return i.useRouter;
            },
          }),
        l.o(i, "useSearchParams") &&
          l.d(r, {
            useSearchParams: function () {
              return i.useSearchParams;
            },
          });
    },
    6705: () => {},
    6766: (e, r, l) => {
      "use strict";
      l.d(r, { default: () => t.a });
      var i = l(1469),
        t = l.n(i);
    },
    7763: () => {},
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [4144, 6344, 6, 6874, 3063, 8441, 1684, 7358], () => r(4663)),
      (_N_E = e.O());
  },
]);
