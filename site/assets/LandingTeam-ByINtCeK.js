import {
  S as e,
  h as t,
  i as n,
  l as r,
  m as i,
  o as a,
  p as o,
  r as s,
  s as c,
  t as l,
  v as u
} from './app-CIsYDi5X.js';
var d = { class: `landing-team` },
  f = { class: `landing-team__portrait`, 'aria-hidden': `true` },
  p = { class: `landing-team__quote` },
  m = { class: `landing-team__info` },
  h = s(
    o({
      __name: `LandingTeam`,
      props: { content: {} },
      setup(o) {
        return (s, h) => (
          i(),
          c(
            l,
            {
              title: o.content.title,
              subtitle: o.content.subtitle,
              id: `team`
            },
            {
              default: u(() => [
                a(`div`, d, [
                  (i(!0),
                  r(
                    n,
                    null,
                    t(
                      o.content.items,
                      t => (
                        i(),
                        r(
                          `article`,
                          { key: t.name, class: `landing-team__card` },
                          [
                            a(`div`, f, e(t.initials), 1),
                            a(`blockquote`, p, ` «` + e(t.quote) + `» `, 1),
                            a(`footer`, m, [
                              a(`strong`, null, e(t.name), 1),
                              a(`span`, null, e(t.role), 1)
                            ])
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
    [[`__scopeId`, `data-v-83d23dd5`]]
  );
export { h as default };
