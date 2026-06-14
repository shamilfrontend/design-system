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
var d = { class: `landing-customization` },
  f = { class: `landing-customization__mockup` },
  p = { class: `landing-customization__phone` },
  m = [`src`],
  h = { class: `landing-customization__list` },
  g = s(
    o({
      __name: `LandingCustomization`,
      props: { content: {} },
      setup(o) {
        return (s, g) => (
          i(),
          c(
            l,
            {
              title: o.content.title,
              subtitle: o.content.subtitle,
              id: `customization`
            },
            {
              default: u(() => [
                a(`div`, d, [
                  a(`div`, f, [
                    a(`div`, p, [
                      a(
                        `img`,
                        {
                          src: o.content.image,
                          alt: `Пример компонентов Design System`,
                          class: `landing-customization__image`,
                          width: `256`,
                          height: `400`,
                          loading: `lazy`
                        },
                        null,
                        8,
                        m
                      )
                    ])
                  ]),
                  a(`ul`, h, [
                    (i(!0),
                    r(
                      n,
                      null,
                      t(
                        o.content.points,
                        t => (
                          i(),
                          r(
                            `li`,
                            { key: t, class: `landing-customization__item` },
                            e(t),
                            1
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
    [[`__scopeId`, `data-v-84dc218c`]]
  );
export { g as default };
