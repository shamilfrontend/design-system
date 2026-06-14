import {
  S as e,
  l as t,
  m as n,
  o as r,
  p as i,
  r as a
} from './app-CIsYDi5X.js';
var o = { class: `landing-footer` },
  s = {
    class: `landing-footer__netlify`,
    href: `https://www.netlify.com`,
    target: `_blank`,
    rel: `noopener noreferrer`
  },
  c = [`src`],
  l = a(
    i({
      __name: `LandingFooter`,
      props: { content: {} },
      setup(i) {
        return (a, l) => (
          n(),
          t(`footer`, o, [
            r(`p`, null, e(i.content.text), 1),
            r(`a`, s, [
              r(
                `img`,
                {
                  src: i.content.netlifyBadge,
                  alt: `Deploys by Netlify`,
                  width: `114`,
                  height: `32`,
                  loading: `lazy`
                },
                null,
                8,
                c
              )
            ])
          ])
        );
      }
    }),
    [[`__scopeId`, `data-v-45b8241a`]]
  );
export { l as default };
