import {
  S as e,
  _ as t,
  b as n,
  c as r,
  h as i,
  i as a,
  l as o,
  m as s,
  o as c,
  p as l,
  r as u,
  s as d,
  t as f,
  v as p
} from './app-CIsYDi5X.js';
var m = { class: `landing-tools` },
  h = { class: `landing-tools__name` },
  g = { class: `landing-tools__desc` },
  _ = { key: 0, class: `landing-tools__badge` },
  v = u(
    l({
      __name: `LandingTools`,
      props: { content: {} },
      setup(l) {
        return (u, v) => (
          s(),
          d(
            f,
            {
              title: l.content.title,
              subtitle: l.content.subtitle,
              id: `tools`
            },
            {
              default: p(() => [
                c(`div`, m, [
                  (s(!0),
                  o(
                    a,
                    null,
                    i(
                      l.content.items,
                      i => (
                        s(),
                        d(
                          t(i.link && !i.comingSoon ? `a` : `div`),
                          {
                            key: i.name,
                            href: i.link,
                            class: n([
                              `landing-tools__card`,
                              { 'landing-tools__card--disabled': i.comingSoon }
                            ]),
                            target: i.link?.startsWith(`http`)
                              ? `_blank`
                              : void 0,
                            rel: i.link?.startsWith(`http`)
                              ? `noopener noreferrer`
                              : void 0
                          },
                          {
                            default: p(() => [
                              c(`h3`, h, e(i.name), 1),
                              c(`p`, g, e(i.description), 1),
                              i.comingSoon
                                ? (s(), o(`span`, _, `Скоро`))
                                : r(``, !0)
                            ]),
                            _: 2
                          },
                          1032,
                          [`href`, `class`, `target`, `rel`]
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
    [[`__scopeId`, `data-v-2b10ea93`]]
  );
export { v as default };
