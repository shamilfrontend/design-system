import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { Mt as r, jt as i } from './iframe-CABL6dQv.js';
var a,
  o = e(() => {
    (n(),
      i(),
      (a = () =>
        t({
          setup() {
            let e = r();
            return {
              handleStartClick: () => {
                e?.start();
              },
              handleSetClick: () => {
                e?.set(25);
              },
              handleIncClick: () => {
                e?.inc(10);
              },
              handleDecClick: () => {
                e?.inc(-10);
              },
              handleDoneClick: () => {
                e?.done();
              },
              handleForceDoneClick: () => {
                e?.forceDone();
              }
            };
          },
          template: `
      <q-button @click="handleStartClick">Start</q-button>
      <q-button @click="handleSetClick">Set 25</q-button>
      <q-button @click="handleIncClick">Inc 10</q-button>
      <q-button @click="handleDecClick">Dec -10</q-button>
      <q-button @click="handleDoneClick" theme="secondary">Done</q-button>
      <q-button @click="handleForceDoneClick" theme="secondary">Force done</q-button>
    `
        })));
  }),
  s,
  c,
  l;
e(() => {
  (o(),
    (s = { title: `Plugins/QProgressIndicatior` }),
    (c = a.bind({})),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, s as default };
