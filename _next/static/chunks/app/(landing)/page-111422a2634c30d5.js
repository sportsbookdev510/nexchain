(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5859],
  {
    169: (e, s, n) => {
      "use strict";
      n.d(s, { default: () => l });
      var i = n(5155),
        a = n(2115);
      let r = Date.UTC(2026, 5, 15, 10, 30),
        t = (e) => 10814 + Math.max(Math.floor((e - r) / 6e5), 0);
      function l(e) {
        let { campaign: s } = e,
          [n, l] = (0, a.useState)(r);
        (0, a.useEffect)(() => {
          let e = () => l(Date.now());
          e();
          let s = window.setInterval(e, 1e3);
          return () => window.clearInterval(s);
        }, []);
        let c = t(n),
          d =
            "STANDARD" !== s.spotlight
              ? s.shortTitle
              : "".concat(s.priceLabel, " ENTRY WINDOW");
        return (0, i.jsxs)("div", {
          className: "campaign-summary",
          children: [
            (0, i.jsx)("div", {
              className: "campaign-summary__header",
              children: (0, i.jsx)("span", { children: s.shortTitle }),
            }),
            (0, i.jsxs)("div", {
              className: "campaign-summary__price",
              children: [
                (0, i.jsx)("span", {
                  className: "campaign-summary__price-title",
                  children: d,
                }),
                (0, i.jsxs)("div", {
                  className: "campaign-summary__price-main",
                  children: [
                    (0, i.jsx)("div", {
                      className: "campaign-summary__current-price",
                      children: (0, i.jsx)("strong", {
                        children: s.priceLabel,
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "campaign-summary__stats",
                      children: [
                        (0, i.jsxs)("span", {
                          children: [
                            (0, i.jsx)("strong", { children: "$17M+" }),
                            " raised",
                          ],
                        }),
                        (0, i.jsxs)("span", {
                          children: [
                            (0, i.jsx)("strong", {
                              children: c.toLocaleString("en-US"),
                            }),
                            " investors",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    440: () => {},
    3079: () => {},
    3847: () => {},
    4489: () => {},
    5397: (e, s, n) => {
      "use strict";
      n.d(s, { default: () => t });
      var i = n(5155),
        a = n(2708),
        r = n(1678);
      function t(e) {
        let { campaign: s } = e,
          n = "TGE_50" === s.unlockPolicy,
          t = "TESTNET_EXPLORER" === s.spotlight;
        return (0, i.jsxs)("div", {
          className: "final-cta-panel",
          children: [
            (0, i.jsx)("div", {
              className: "final-cta-copy",
              children: n
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)("h2", {
                        children: [
                          "Join at ",
                          (0, i.jsx)("span", { children: s.priceLabel }),
                        ],
                      }),
                      (0, i.jsx)("p", {
                        children:
                          "50% of purchased NEX unlocks at TGE during this limited offer.",
                      }),
                    ],
                  })
                : t
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)("h2", {
                        children: [
                          "Explore the ",
                          (0, i.jsx)("span", { children: "Testnet" }),
                        ],
                      }),
                      (0, i.jsx)("p", {
                        children:
                          "Track live Nexchain testnet activity on Nexscan, then join before the next scheduled price increase.",
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)("h2", {
                        children: [
                          "Every Stage Brings ",
                          (0, i.jsx)("span", { children: "A Higher Price" }),
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          "The current ",
                          s.priceLabel,
                          " entry window is available for a limited time before the next scheduled increase.",
                        ],
                      }),
                    ],
                  }),
            }),
            (0, i.jsx)("div", {
              className: "final-cta-side",
              children: (0, i.jsx)("div", {
                className: "final-cta-actions",
                children: t
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("a", {
                          href: "https://www.nexscan.cloud/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "nex-link",
                          children: (0, i.jsx)(a.A, {
                            small: !0,
                            children: "Open Testnet",
                          }),
                        }),
                        (0, i.jsx)(r.default, {
                          href: "https://nexchain.live",
                          children: (0, i.jsx)(a.A, {
                            white: !0,
                            small: !0,
                            children: "Join Presale",
                          }),
                        }),
                      ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(r.default, {
                          href: "https://nexchain.live",
                          children: (0, i.jsx)(a.A, {
                            small: !0,
                            children: "Join Presale",
                          }),
                        }),
                        (0, i.jsx)(r.default, {
                          href: "/documents/Whitepaper-Nexchain.pdf",
                          children: (0, i.jsx)(a.A, {
                            white: !0,
                            small: !0,
                            children: "Read the Whitepaper",
                          }),
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
    },
    5937: () => {},
    6255: () => {},
    6837: () => {},
    7931: (e, s, n) => {
      "use strict";
      n.d(s, { default: () => t });
      var i = n(5155),
        a = n(2115);
      n(9775);
      let r = JSON.parse(
        '[{"title":"What is Nexchain?","answer":"Nexchain is an AI-native Layer 1 blockchain designed to combine fast execution, low fees, AI-powered network intelligence, and a more transparent user experience."},{"title":"What makes Nexchain different?","answer":"Nexchain focuses on AI-native execution at the network level, practical builder tooling, cross-chain connectivity, and early presale access for the NEX token."},{"title":"What is the current NEX price?","answer":"The current NEX presale price is shown in the presale card on this page and updates according to the active campaign window."},{"title":"How much has Nexchain raised?","answer":"The landing page displays the latest public campaign summary, including raised funds and investor count."},{"title":"Is Nexchain audited?","answer":"CertiK and SolidProof audit references cover the NEX token smart contract, not the network or the AI layer."},{"title":"What is NEX used for?","answer":"NEX is designed to power network usage, AI features, ecosystem growth, and future on-chain utility inside Nexchain."},{"title":"Can I lose money?","answer":"Crypto assets and presales involve risk. You should only participate after reviewing the project materials and considering your own risk tolerance."},{"title":"Who can participate?","answer":"Participation depends on local rules and the official purchase flow requirements. Users are responsible for checking eligibility in their jurisdiction."}]'
      );
      function t() {
        let [e, s] = (0, a.useState)(0);
        return (0, i.jsx)("section", {
          id: "faq",
          children: (0, i.jsxs)("div", {
            className: "container",
            children: [
              (0, i.jsxs)("div", {
                className: "faq-head",
                children: [
                  (0, i.jsx)("h2", {
                    className: "section_title",
                    children: "Frequently asked questions",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      (0, i.jsx)("span", {
                        children: "Everything you need to know about NEX",
                      }),
                      " and the presale.",
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "faq_wrapp",
                children: r.map((n, a) => {
                  let { title: r, answer: t } = n;
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: "faq_block ".concat(e === a && "active"),
                      children: [
                        (0, i.jsxs)("div", {
                          className: "faq_title",
                          onClick: () => s(e == a ? -1 : a),
                          children: [
                            (0, i.jsx)("h3", { children: r }),
                            (0, i.jsx)("button", {
                              className: "btn btn-faq ".concat(
                                e === a ? "active" : ""
                              ),
                            }),
                          ],
                        }),
                        (e === a &&
                          (0, i.jsx)("div", {
                            className: "faq_text active",
                            children: t,
                          })) ||
                          "",
                      ],
                    },
                    a
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    7951: () => {},
    8459: (e, s, n) => {
      Promise.resolve().then(n.bind(n, 7931)),
        Promise.resolve().then(n.bind(n, 5397)),
        Promise.resolve().then(n.t.bind(n, 6255, 23)),
        Promise.resolve().then(n.bind(n, 169)),
        Promise.resolve().then(n.bind(n, 6242)),
        Promise.resolve().then(n.bind(n, 9272)),
        Promise.resolve().then(n.t.bind(n, 6837, 23)),
        Promise.resolve().then(n.t.bind(n, 3847, 23)),
        Promise.resolve().then(n.t.bind(n, 1711, 23)),
        Promise.resolve().then(n.t.bind(n, 3079, 23)),
        Promise.resolve().then(n.t.bind(n, 4489, 23)),
        Promise.resolve().then(n.t.bind(n, 5937, 23)),
        Promise.resolve().then(n.t.bind(n, 7951, 23)),
        Promise.resolve().then(n.t.bind(n, 440, 23)),
        Promise.resolve().then(n.bind(n, 1678)),
        Promise.resolve().then(n.t.bind(n, 3063, 23));
    },
    9775: () => {},
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(
      0,
      [
        9732, 6287, 6, 6268, 9567, 3839, 1852, 612, 3862, 6222, 408, 6874, 3063,
        3281, 8441, 1684, 7358,
      ],
      () => s(8459)
    ),
      (_N_E = e.O());
  },
]);
