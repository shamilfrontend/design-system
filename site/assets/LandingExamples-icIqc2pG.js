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
var d = { class: `landing-examples` },
  f = { class: `landing-examples__track` },
  p = [`src`, `alt`, `width`, `height`],
  m = { class: `landing-examples__caption` },
  h = s(
    o({
      __name: `LandingExamples`,
      props: { content: {} },
      setup(o) {
        return (s, h) => (
          i(),
          c(
            l,
            {
              title: o.content.title,
              subtitle: o.content.subtitle,
              id: `examples`
            },
            {
              default: u(() => [
                a(`div`, d, [
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
                            `figure`,
                            { key: t.title, class: `landing-examples__card` },
                            [
                              a(
                                `img`,
                                {
                                  src: t.image,
                                  alt: t.title,
                                  class: `landing-examples__image`,
                                  width: t.width ?? 320,
                                  height: t.height ?? 200,
                                  loading: `lazy`
                                },
                                null,
                                8,
                                p
                              ),
                              a(`figcaption`, m, e(t.title), 1)
                            ]
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
    [[`__scopeId`, `data-v-0c23e76e`]]
  );
export { h as default };
