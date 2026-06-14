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
var d = { class: `landing-style-grid` },
  f = [`href`, `target`, `rel`],
  p = { class: `landing-style-grid__icon` },
  m = { class: `landing-style-grid__title` },
  h = { class: `landing-style-grid__text` },
  g = s(
    o({
      __name: `LandingStyleGrid`,
      props: { content: {} },
      setup(o) {
        return (s, g) => (
          i(),
          c(
            l,
            {
              title: o.content.title,
              subtitle: o.content.subtitle,
              id: `style-grid`
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
                          `a`,
                          {
                            key: t.title,
                            href: t.link,
                            class: `landing-style-grid__card`,
                            target: t.external ? `_blank` : void 0,
                            rel: t.external ? `noopener noreferrer` : void 0
                          },
                          [
                            a(`span`, p, e(t.icon), 1),
                            a(`h3`, m, e(t.title), 1),
                            a(`p`, h, e(t.description), 1)
                          ],
                          8,
                          f
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
    [[`__scopeId`, `data-v-305b0432`]]
  );
export { g as default };
