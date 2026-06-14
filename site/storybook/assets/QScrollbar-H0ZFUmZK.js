import { i as e } from './preload-helper-CMdWXl7s.js';
import {
  A as t,
  D as n,
  G as r,
  I as i,
  K as a,
  N as o,
  P as s,
  R as c,
  U as l,
  Z as u,
  b as d,
  d as f,
  et as p,
  f as m,
  h,
  j as g,
  nt as _,
  o as v,
  p as y,
  rt as b,
  t as x,
  v as S,
  w as C
} from './vue.esm-bundler-BVbty6R8.js';
import { i as w, t as T } from './locale-tU0CN4Au.js';
import { r as E, s as D, t as O } from './helpers-D3Z0HUyh.js';
import { n as k, t as A } from './isServer-DOelQ9zM.js';
import { a as j, t as M } from './hooks-Bp_2Pnfv.js';
var N,
  P = e(() => {
    N = {
      vertical: {
        offset: `offsetHeight`,
        scroll: `scrollTop`,
        scrollSize: `scrollHeight`,
        size: `height`,
        key: `vertical`,
        axis: `Y`,
        client: `clientY`,
        direction: `top`
      },
      horizontal: {
        offset: `offsetWidth`,
        scroll: `scrollLeft`,
        scrollSize: `scrollWidth`,
        size: `width`,
        key: `horizontal`,
        axis: `X`,
        client: `clientX`,
        direction: `left`
      }
    };
  }),
  F,
  I = e(() => {
    F = (e, t, n) => {
      let r = {};
      return ((r[n.size] = t), (r.transform = `translate${n.axis}(${e}%)`), r);
    };
  }),
  L,
  R = e(() => {
    (x(),
      O(),
      P(),
      I(),
      (L = d({
        name: `QBar`,
        componentName: `QBar`,
        __name: `QBar`,
        props: {
          type: {
            type: String,
            default: `horizontal`,
            validator: D([`horizontal`, `vertical`])
          },
          theme: { type: String, default: null },
          size: { type: String, default: `0` },
          move: { type: Number, default: null }
        },
        setup(e, { expose: t }) {
          let n = e,
            r = C(`qScrollbar`),
            i = u(null),
            a = u(null),
            s = u(!1),
            c = 0,
            l = f(() => (n.type ? N[n.type] : N.horizontal)),
            d = f(() => F(n.move ?? 0, n.size ?? `0`, l.value)),
            p = f(() => ({
              'q-scrollbar__thumb': !0,
              'q-scrollbar__thumb_secondary': n?.theme === `secondary`
            })),
            v = f(() => ({
              [`q-scrollbar__bar_${l.value.key}`]: !0,
              'q-scrollbar__bar_secondary': n?.theme === `secondary`
            })),
            y = f(() => r?.wrap.value ?? null);
          function x(e) {
            let t = y?.value;
            t && (t[l.value.scroll] = e);
          }
          function S(e) {
            if (!a.value || !i.value || !y?.value) return;
            let t = e.target;
            x(
              ((((Math.abs(
                t.getBoundingClientRect()[l.value.direction] - e[l.value.client]
              ) -
                a.value[l.value.offset] / 2) *
                100) /
                (i.value[l.value.offset] ?? 0)) *
                y.value[l.value.scrollSize]) /
                100
            );
          }
          function w(e) {
            if (!s.value || !i.value || !a.value || !y?.value) return;
            let t = c;
            t &&
              x(
                (((((i.value.getBoundingClientRect()[l.value.direction] -
                  e[l.value.client]) *
                  -1 -
                  (a.value[l.value.offset] - t)) *
                  100) /
                  (i.value?.[l.value.offset] ?? 1)) *
                  y.value[l.value.scrollSize]) /
                  100
              );
          }
          function T() {
            ((s.value = !1),
              (c = 0),
              document.removeEventListener(`mousemove`, w, !1),
              (document.onselectstart = null));
          }
          function E(e) {
            (e.stopImmediatePropagation(),
              (s.value = !0),
              document.addEventListener(`mousemove`, w, !1),
              document.addEventListener(`mouseup`, T, !1),
              (document.onselectstart = () => !1));
          }
          function D(e) {
            if (e.ctrlKey || e.button === 2) return;
            E(e);
            let t = e.currentTarget;
            c =
              t[l.value.offset] -
              (e[l.value.client] -
                t.getBoundingClientRect()[l.value.direction]);
          }
          return (
            g(() => {
              (document.removeEventListener(`mouseup`, T, !1),
                document.removeEventListener(`mousemove`, w, !1));
            }),
            t({ scrollToPx: x }),
            (e, t) => (
              o(),
              h(
                `div`,
                {
                  ref_key: `root`,
                  ref: i,
                  class: _([`q-scrollbar__bar`, v.value]),
                  'aria-hidden': `true`,
                  onMousedown: S
                },
                [
                  m(
                    `div`,
                    {
                      ref_key: `thumb`,
                      ref: a,
                      class: _(p.value),
                      style: b(d.value),
                      'aria-hidden': `true`,
                      onMousedown: D
                    },
                    null,
                    38
                  )
                ],
                34
              )
            )
          );
        }
      })));
  }),
  z,
  B = e(() => {
    (R(),
      R(),
      (z = L),
      (L.__docgenInfo = Object.assign(
        { displayName: L.name ?? L.__name },
        {
          name: `QBar`,
          exportName: `default`,
          displayName: `QBar`,
          description: ``,
          tags: {},
          expose: [{ name: `scrollToPx` }],
          props: [
            {
              name: `type`,
              type: { name: `QBarPropType` },
              defaultValue: { func: !1, value: `'horizontal'` }
            },
            {
              name: `theme`,
              type: { name: `QBarPropTheme` },
              defaultValue: { func: !1, value: `null` }
            },
            {
              name: `size`,
              type: { name: `string` },
              defaultValue: { func: !1, value: `'0'` }
            },
            {
              name: `move`,
              type: { name: `number` },
              defaultValue: { func: !1, value: `null` }
            }
          ],
          sourceFiles: [
            `/Users/samilalisultanov/Desktop/projects/github/design-system/src/qComponents/QScrollbar/src/components/QBar/QBar.vue`
          ]
        }
      )));
  }),
  V,
  H = e(() => {
    (B(), (V = z));
  }),
  U,
  W,
  G,
  K = e(() => {
    (x(),
      A(),
      O(),
      M(),
      T(),
      H(),
      (U = [`aria-label`]),
      (W = -10),
      (G = d({
        name: `QScrollbar`,
        componentName: `QScrollbar`,
        __name: `QScrollbar`,
        props: {
          scrollTo: { type: k ? Object : HTMLElement, default: null },
          visible: { type: Boolean, default: !1 },
          theme: {
            type: String,
            default: `primary`,
            validator: D([`primary`, `secondary`])
          },
          wrapClass: { type: [String, Object, Array], default: null },
          viewTag: { type: String, default: `div` },
          viewClass: { type: [String, Object, Array], default: null },
          viewStyle: { type: [String, Object, Array], default: null },
          noresize: { type: Boolean, default: !1 },
          ariaLabel: { type: String, default: null }
        },
        setup(e, { expose: d }) {
          let g = e,
            x = f(() => g.ariaLabel ?? w(`QScrollbar.ariaLabel`)),
            C = u(null),
            T = u(null),
            E = u(null),
            D = u(null),
            O = u(`0`),
            k = u(`0`),
            A = u(0),
            M = u(0),
            N = u(0),
            P = f(() => O.value !== ``),
            F = f(() => k.value !== ``),
            I = f(() => ({
              'q-scrollbar': !0,
              'q-scrollbar_visible': !!g.visible,
              'q-scrollbar_has-horizontal-bar': P.value,
              'q-scrollbar_has-vertical-bar': F.value
            })),
            L = f(() => [
              g.wrapClass,
              { 'q-scrollbar__wrap_hidden-default': !0 }
            ]),
            R = f(() => g.theme ?? `primary`);
          function z() {
            let e = T.value;
            e &&
              ((N.value = (e.scrollTop * 100) / e.clientHeight),
              (A.value = (e.scrollLeft * 100) / e.clientWidth),
              (M.value = e.scrollLeft));
          }
          function B() {
            let e = T.value;
            if (!e) return;
            let t = (e.clientHeight * 100) / e.scrollHeight,
              n = (e.clientWidth * 100) / e.scrollWidth;
            ((k.value = t < 100 ? `${t}%` : ``),
              (O.value = n < 100 ? `${n}%` : ``));
          }
          let H = f(() => C.value?.parentNode ?? null),
            G = j(E, !1),
            K = j(H, !1);
          return (
            l([G.observedEntry, K.observedEntry], () => {
              B();
            }),
            t(() => {
              (n().then(B), g.noresize || (G.start(), K.start()));
            }),
            l(
              () => g.scrollTo,
              e => {
                e && D.value?.scrollToPx(e.offsetTop + W);
              }
            ),
            l(
              () => g.visible,
              e => {
                if (e) {
                  let e = g.scrollTo?.offsetTop ?? -10;
                  D.value?.scrollToPx(e);
                }
              }
            ),
            s(`qScrollbar`, { wrap: T, sizeWidth: O, moveXInPx: M }),
            d({ handleScroll: z, update: B }),
            (t, n) => (
              o(),
              h(
                `div`,
                { ref_key: `root`, ref: C, class: _(I.value) },
                [
                  m(
                    `div`,
                    {
                      ref_key: `wrap`,
                      ref: T,
                      class: _([`q-scrollbar__wrap`, L.value]),
                      role: `region`,
                      'aria-label': x.value,
                      tabindex: `0`,
                      onScroll: z
                    },
                    [
                      (o(),
                      y(
                        c(e.viewTag ?? `div`),
                        {
                          ref_key: `view`,
                          ref: E,
                          class: _([`q-scrollbar__view`, e.viewClass]),
                          style: b(e.viewStyle)
                        },
                        { default: r(() => [i(t.$slots, `default`)]), _: 3 },
                        8,
                        [`class`, `style`]
                      ))
                    ],
                    42,
                    U
                  ),
                  a(
                    S(
                      p(V),
                      {
                        ref: `xbar`,
                        type: `horizontal`,
                        theme: R.value,
                        move: A.value,
                        size: O.value
                      },
                      null,
                      8,
                      [`theme`, `move`, `size`]
                    ),
                    [[v, P.value]]
                  ),
                  a(
                    S(
                      p(V),
                      {
                        ref_key: `ybar`,
                        ref: D,
                        type: `vertical`,
                        theme: R.value,
                        move: N.value,
                        size: k.value
                      },
                      null,
                      8,
                      [`theme`, `move`, `size`]
                    ),
                    [[v, F.value]]
                  )
                ],
                2
              )
            )
          );
        }
      })));
  }),
  q,
  J = e(() => {
    (K(),
      K(),
      (q = G),
      (G.__docgenInfo = Object.assign(
        { displayName: G.name ?? G.__name },
        {
          name: `QScrollbar`,
          exportName: `default`,
          displayName: `QScrollbar`,
          description: ``,
          tags: {},
          expose: [{ name: `handleScroll` }, { name: `update` }],
          props: [
            {
              name: `scrollTo`,
              description: `passing DOM element will scroll content to it (works dynamically)`,
              type: { name: `QScrollbarPropScrollTo` },
              defaultValue: { func: !1, value: `null` }
            },
            {
              name: `visible`,
              description: `whether scrollbar is always visible`,
              type: { name: `QScrollbarPropVisible` },
              defaultValue: { func: !1, value: `false` }
            },
            {
              name: `theme`,
              description: `changes style`,
              type: { name: `QScrollbarPropTheme` },
              defaultValue: { func: !1, value: `'primary'` }
            },
            {
              name: `wrapClass`,
              description: `custom wrapper content class (it helps you to style content)`,
              type: { name: `QScrollbarPropWrapClass` },
              defaultValue: { func: !1, value: `null` }
            },
            {
              name: `viewTag`,
              description: `custom inner content tag`,
              type: { name: `QScrollbarPropViewTag` },
              defaultValue: { func: !1, value: `'div'` }
            },
            {
              name: `viewClass`,
              description: `custom inner content class`,
              type: { name: `QScrollbarPropViewClass` },
              defaultValue: { func: !1, value: `null` }
            },
            {
              name: `viewStyle`,
              description: `custom inner content class`,
              type: { name: `QScrollbarPropViewStyle` },
              defaultValue: { func: !1, value: `null` }
            },
            {
              name: `noresize`,
              description: `whether is resizeListener will watch for parent`,
              type: { name: `QScrollbarPropNoResize` },
              defaultValue: { func: !1, value: `false` }
            },
            {
              name: `ariaLabel`,
              description: `accessible label for the scroll region`,
              type: { name: `string` },
              defaultValue: { func: !1, value: `null` }
            }
          ],
          slots: [{ name: `default` }],
          sourceFiles: [
            `/Users/samilalisultanov/Desktop/projects/github/design-system/src/qComponents/QScrollbar/src/QScrollbar.vue`
          ]
        }
      )));
  }),
  Y,
  X = e(() => {
    (O(), J(), (Y = E(q)));
  });
export { X as n, Y as t };
