import {
  S as e,
  f as t,
  h as n,
  i as r,
  l as i,
  m as a,
  o,
  p as s,
  r as c,
  s as l,
  t as u,
  v as d,
  y as f
} from './app-CIsYDi5X.js';
var p = 2 * Math.PI * 54;
function m(e) {
  return p - (e / 100) * p;
}
var h = { class: `progress-ring` },
  g = {
    viewBox: `0 0 120 120`,
    class: `progress-ring__svg`,
    'aria-hidden': `true`
  },
  _ = [`stroke-dasharray`, `stroke-dashoffset`],
  v = { class: `progress-ring__value` },
  y = c(
    s({
      __name: `ProgressRing`,
      props: { value: {}, percent: {} },
      setup(t) {
        return (n, r) => (
          a(),
          i(`div`, h, [
            (a(),
            i(`svg`, g, [
              (r[0] ||= o(
                `circle`,
                {
                  class: `progress-ring__track`,
                  cx: `60`,
                  cy: `60`,
                  r: `54`,
                  fill: `none`,
                  'stroke-width': `6`
                },
                null,
                -1
              )),
              o(
                `circle`,
                {
                  class: `progress-ring__progress`,
                  cx: `60`,
                  cy: `60`,
                  r: `54`,
                  fill: `none`,
                  'stroke-width': `6`,
                  'stroke-linecap': `round`,
                  'stroke-dasharray': f(p),
                  'stroke-dashoffset': f(m)(t.percent),
                  transform: `rotate(-90 60 60)`
                },
                null,
                8,
                _
              )
            ])),
            o(`span`, v, e(t.value), 1)
          ])
        );
      }
    }),
    [[`__scopeId`, `data-v-01db503e`]]
  ),
  b = { class: `landing-stats` },
  x = { class: `landing-stats__label` },
  S = c(
    s({
      __name: `LandingStats`,
      props: { content: {} },
      setup(s) {
        return (c, f) => (
          a(),
          l(
            u,
            {
              title: s.content.title,
              subtitle: s.content.subtitle,
              id: `stats`
            },
            {
              default: d(() => [
                o(`div`, b, [
                  (a(!0),
                  i(
                    r,
                    null,
                    n(
                      s.content.items,
                      n => (
                        a(),
                        i(
                          `div`,
                          { key: n.label, class: `landing-stats__item` },
                          [
                            t(
                              y,
                              { value: n.value, percent: n.percent },
                              null,
                              8,
                              [`value`, `percent`]
                            ),
                            o(`p`, x, e(n.label), 1)
                          ]
                        )
                      )
                    ),
                    128
                  ))
                ])
              ]),
              _: 1
            },
            8,
            [`title`, `subtitle`]
          )
        );
      }
    }),
    [[`__scopeId`, `data-v-79463a11`]]
  );
export { S as default };
