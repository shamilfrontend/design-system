import {
  S as e,
  a as t,
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
  x as f
} from './app-CIsYDi5X.js';
var p = [
  { top: `5%`, left: `10%`, rotate: -3 },
  { top: `15%`, left: `55%`, rotate: 2 },
  { top: `45%`, left: `5%`, rotate: 4 },
  { top: `50%`, left: `48%`, rotate: -2 },
  { top: `75%`, left: `25%`, rotate: -1 }
];
function m(e, t) {
  if (t) return t;
  let n = p[e % p.length],
    r = Math.floor(e / p.length);
  if (r === 0) return n;
  let i = r * 4;
  return {
    top: `calc(${n.top} + ${i}px)`,
    left: `calc(${n.left} + ${i}px)`,
    rotate: n.rotate + r
  };
}
var h = { class: `landing-reviews` },
  g = { class: `landing-reviews__cloud` },
  _ = { class: `landing-reviews__quote` },
  v = { class: `landing-reviews__author` },
  y = { class: `landing-reviews__avatar`, 'aria-hidden': `true` },
  b = { class: `landing-reviews__role` },
  x = c(
    s({
      __name: `LandingReviews`,
      props: { content: {} },
      setup(s) {
        let c = s,
          p = t(() => c.content.items.map((e, t) => m(t, e.layout)));
        return (t, c) => (
          a(),
          l(
            u,
            {
              title: s.content.title,
              subtitle: s.content.subtitle,
              id: `reviews`
            },
            {
              default: d(() => [
                o(`div`, h, [
                  o(`div`, g, [
                    (a(!0),
                    i(
                      r,
                      null,
                      n(
                        s.content.items,
                        (t, n) => (
                          a(),
                          i(
                            `blockquote`,
                            {
                              key: t.name,
                              class: `landing-reviews__bubble`,
                              style: f({
                                top: p.value[n]?.top,
                                left: p.value[n]?.left,
                                transform: `rotate(${p.value[n]?.rotate ?? 0}deg)`
                              })
                            },
                            [
                              o(`p`, _, `«` + e(t.quote) + `»`, 1),
                              o(`footer`, v, [
                                o(`span`, y, e(t.name[0]), 1),
                                o(`span`, null, [
                                  o(`strong`, null, e(t.name), 1),
                                  o(`span`, b, e(t.role), 1)
                                ])
                              ])
                            ],
                            4
                          )
                        )
                      ),
                      128
                    ))
                  ])
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
    [[`__scopeId`, `data-v-9f7fc344`]]
  );
export { x as default };
