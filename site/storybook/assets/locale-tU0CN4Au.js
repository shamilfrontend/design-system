import { i as e } from './preload-helper-CMdWXl7s.js';
import { C as t, P as n, t as r } from './lodash-CfTzKX-M.js';
import { n as i, t as a } from './config-D7-7gfK6.js';
var o,
  s,
  c,
  l,
  u,
  d = e(() => {
    (r(),
      i(),
      (o = null),
      (s = null),
      (c = (e, ...r) => {
        if (s) return s(e, ...r);
        let i = a(`locale`),
          c = n(o, `${i}.${e}`);
        return t(c) ? c : ``;
      }),
      (l = e => {
        s = e;
      }),
      (u = e => {
        e && (o = e);
      }));
  });
export { c as i, l as n, u as r, d as t };
