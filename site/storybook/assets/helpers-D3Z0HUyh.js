import { i as e } from './preload-helper-CMdWXl7s.js';
var t,
  n = e(() => {
    t = e =>
      Math.random()
        .toString(36)
        .replace(`0.`, e ?? ``);
  }),
  r,
  i = e(() => {
    r = e => t => e.includes(t);
  }),
  a,
  o = e(() => {
    a = e => e !== null;
  }),
  s,
  c = e(() => {
    s = e => ({
      ...e,
      install: t => {
        t.component(e.name ?? `Unknown`, e);
      }
    });
  }),
  l = e(() => {
    (n(), i(), o(), c());
  });
export { a, n as c, o as i, t as l, c as n, i as o, s as r, r as s, l as t };
