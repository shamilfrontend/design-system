import { i as e } from './preload-helper-CMdWXl7s.js';
import {
  A as t,
  Z as n,
  j as r,
  t as i,
  x as a
} from './vue.esm-bundler-BVbty6R8.js';
var o,
  s = e(() => {
    (i(),
      (o = (e, i = !0) => {
        let a = n(!1),
          o = n(null),
          s = null,
          c = e => {
            o.value = e[0];
          },
          l = () => {
            !e.value ||
              a.value ||
              ((s = new ResizeObserver(c)), s.observe(e.value), (a.value = !0));
          },
          u = () => {
            !a.value || !s || (s.disconnect(), (a.value = !1));
          };
        return (
          t(() => {
            i && l();
          }),
          r(u),
          { observedEntry: o, isTracking: a, start: l, stop: u }
        );
      }));
  }),
  c,
  l = e(() => {
    (i(),
      (c = e => {
        a() && r(e);
      }));
  }),
  u,
  d = e(() => {
    (i(),
      l(),
      (u = e => {
        if (!window) return n(!1);
        let t = window.matchMedia(e),
          r = n(t.matches),
          i = e => {
            r.value = e.matches;
          };
        return (
          t.addEventListener(`change`, i),
          c(() => t.removeEventListener(`change`, i)),
          r
        );
      }));
  }),
  f = e(() => {
    (s(), d());
  });
export { o as a, s as i, d as n, u as r, f as t };
