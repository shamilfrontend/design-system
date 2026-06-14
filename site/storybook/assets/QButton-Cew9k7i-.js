import { i as e } from './preload-helper-CMdWXl7s.js';
import {
  H as t,
  I as n,
  N as r,
  b as i,
  d as a,
  h as o,
  m as s,
  nt as c,
  t as l,
  w as u
} from './vue.esm-bundler-BVbty6R8.js';
import { r as d, s as f, t as p } from './helpers-D3Z0HUyh.js';
var m,
  h,
  g,
  _,
  v,
  y = e(() => {
    (l(),
      p(),
      (m = [`disabled`, `autofocus`, `type`, `aria-busy`, `aria-label`]),
      (h = {
        key: 0,
        class: `q-button__spinner-icon q-icon-reverse`,
        'aria-hidden': `true`
      }),
      (g = [`aria-hidden`]),
      (_ = { key: 2, class: `q-button__inner` }),
      (v = i({
        name: `QButton`,
        componentName: `QButton`,
        __name: `QButton`,
        props: {
          type: {
            type: String,
            default: `default`,
            validator: f([`default`, `icon`])
          },
          theme: {
            type: String,
            default: `primary`,
            validator: f([`primary`, `secondary`, `link`])
          },
          size: {
            type: String,
            default: `regular`,
            validator: f([`small`, `regular`])
          },
          icon: { type: String, default: null },
          nativeType: {
            type: String,
            default: `button`,
            validator: f([`button`, `submit`, `reset`])
          },
          loading: { type: Boolean, default: !1 },
          disabled: { type: Boolean, default: !1 },
          autofocus: { type: Boolean, default: !1 },
          circle: { type: Boolean, default: !1 },
          fullWidth: { type: Boolean, default: !1 },
          ariaLabel: { type: String, default: null }
        },
        setup(e) {
          let i = e,
            l = t(),
            d = u(`qForm`, null),
            f = a(() => i.disabled || (d?.disabled.value ?? !1)),
            p = a(() => !!i.loading),
            v = a(() => i.type === `icon`),
            y = a(() => !!i.circle && v.value),
            b = a(() => !!l.default),
            x = a(() => {
              let e = Object.entries({
                theme: i.theme ?? `primary`,
                type: i.type ?? `default`,
                size: i.size ?? `regular`
              })
                .filter(([, e]) => !!e)
                .map(([e, t]) => `q-button_${e}_${t}`);
              return (
                e.push({
                  'q-button_disabled': f.value && !p.value,
                  'q-button_loading': p.value,
                  'q-button_circle': y.value,
                  'q-button_full-width': !!i.fullWidth && !y.value
                }),
                e
              );
            });
          return (t, i) => (
            r(),
            o(
              `button`,
              {
                class: c([`q-button`, x.value]),
                disabled: f.value || p.value,
                autofocus: !!e.autofocus,
                type: e.nativeType ?? `button`,
                'aria-busy': p.value || void 0,
                'aria-label': e.ariaLabel ?? void 0
              },
              [
                p.value
                  ? (r(), o(`span`, h))
                  : e.icon
                    ? (r(),
                      o(
                        `span`,
                        {
                          key: 1,
                          class: c(e.icon),
                          'aria-hidden': b.value ? !0 : void 0
                        },
                        null,
                        10,
                        g
                      ))
                    : s(``, !0),
                t.$slots.default
                  ? (r(), o(`span`, _, [n(t.$slots, `default`)]))
                  : s(``, !0)
              ],
              10,
              m
            )
          );
        }
      })));
  }),
  b,
  x = e(() => {
    (y(),
      y(),
      (b = v),
      (v.__docgenInfo = Object.assign(
        { displayName: v.name ?? v.__name },
        {
          name: `QButton`,
          exportName: `default`,
          displayName: `QButton`,
          description: ``,
          tags: {},
          props: [
            {
              name: `type`,
              type: { name: `QButtonPropType` },
              defaultValue: { func: !1, value: `'default'` }
            },
            {
              name: `theme`,
              type: { name: `QButtonPropTheme` },
              defaultValue: { func: !1, value: `'primary'` }
            },
            {
              name: `size`,
              type: { name: `QButtonPropSize` },
              defaultValue: { func: !1, value: `'regular'` }
            },
            {
              name: `icon`,
              description: `any q-icon`,
              type: { name: `QButtonPropIcon` },
              defaultValue: { func: !1, value: `null` }
            },
            {
              name: `nativeType`,
              description: `as native button type`,
              type: { name: `QButtonPropNativeType` },
              defaultValue: { func: !1, value: `'button'` }
            },
            {
              name: `loading`,
              description: `whether to show loader inside button`,
              type: { name: `QButtonPropLoading` },
              defaultValue: { func: !1, value: `false` }
            },
            {
              name: `disabled`,
              description: `whether the button is disabled`,
              type: { name: `QButtonPropDisabled` },
              defaultValue: { func: !1, value: `false` }
            },
            {
              name: `autofocus`,
              description: `as native button autofocus`,
              type: { name: `QButtonPropAutofocus` },
              defaultValue: { func: !1, value: `false` }
            },
            {
              name: `circle`,
              description: `change button's shape to circle (use with type icon)`,
              type: { name: `QButtonPropCircle` },
              defaultValue: { func: !1, value: `false` }
            },
            {
              name: `fullWidth`,
              description: `sets button width to 100%`,
              type: { name: `QButtonPropFullWidth` },
              defaultValue: { func: !1, value: `false` }
            },
            {
              name: `ariaLabel`,
              description: `accessible label for icon-only buttons`,
              type: { name: `string` },
              defaultValue: { func: !1, value: `null` }
            }
          ],
          slots: [{ name: `default` }],
          sourceFiles: [
            `/Users/samilalisultanov/Desktop/projects/github/design-system/src/qComponents/QButton/src/QButton.vue`
          ]
        }
      )));
  }),
  S,
  C = e(() => {
    (p(), x(), (S = d(b)));
  });
export { C as n, S as t };
