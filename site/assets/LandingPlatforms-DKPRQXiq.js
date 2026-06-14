import {
  f as e,
  m as t,
  n,
  o as r,
  p as i,
  r as a,
  s as o,
  t as s,
  v as c
} from './app-CIsYDi5X.js';
var l = { class: `landing-platforms` },
  u = a(
    i({
      __name: `LandingPlatforms`,
      props: { content: {} },
      setup(i) {
        return (a, u) => (
          t(),
          o(
            s,
            {
              title: i.content.title,
              subtitle: i.content.subtitle,
              id: `platforms`
            },
            {
              default: c(() => [
                r(`div`, l, [
                  e(
                    n,
                    {
                      variant: `platforms`,
                      size: `md`,
                      labels: i.content.labels
                    },
                    null,
                    8,
                    [`labels`]
                  )
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
    [[`__scopeId`, `data-v-a62c300e`]]
  );
export { u as default };
