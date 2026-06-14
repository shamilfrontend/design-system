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
  v as u,
  x as d
} from './app-CIsYDi5X.js';
var f = { class: `landing-announcements` },
  p = { class: `landing-announcements__title` },
  m = { class: `landing-announcements__text` },
  h = s(
    o({
      __name: `LandingAnnouncements`,
      props: { content: {} },
      setup(o) {
        let s = {
          orange: `linear-gradient(135deg, #ff9f43, #ea5455)`,
          teal: `linear-gradient(135deg, #00cfe8, #28c76f)`,
          purple: `linear-gradient(135deg, #7367f0, #9e95f5)`
        };
        return (h, g) => (
          i(),
          c(
            l,
            {
              title: o.content.title,
              subtitle: o.content.subtitle,
              id: `announcements`
            },
            {
              default: u(() => [
                a(`div`, f, [
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
                          {
                            key: t.title,
                            class: `landing-announcements__card`,
                            style: d({ background: s[t.color] })
                          },
                          [
                            (g[0] ||= a(
                              `span`,
                              {
                                class: `landing-announcements__star`,
                                'aria-hidden': `true`
                              },
                              `★`,
                              -1
                            )),
                            a(`h3`, p, e(t.title), 1),
                            a(`p`, m, e(t.description), 1)
                          ],
                          4
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
    [[`__scopeId`, `data-v-d7b201c8`]]
  );
export { h as default };
