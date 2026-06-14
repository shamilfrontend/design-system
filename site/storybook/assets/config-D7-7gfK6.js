import { i as e } from './preload-helper-CMdWXl7s.js';
import { d as t, t as n } from './lodash-CfTzKX-M.js';
var r,
  i,
  a,
  o = e(() => {
    (n(),
      (r = { nextZIndex: 0, locale: `en` }),
      (i = ({ zIndex: e, ...n }) => {
        ((r.nextZIndex = e ?? 2e3), (r = t(r, n)));
      }),
      (a = e => (e === `nextZIndex` && (r.nextZIndex += 1), r[e])));
  });
export { o as n, i as r, a as t };
