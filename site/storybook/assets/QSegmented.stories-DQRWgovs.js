import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { bt as i, yt as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QSegmented`, component: a }),
    (s = () =>
      n({
        components: { QSegmented: a },
        setup() {
          return {
            value: t(`day`),
            options: [
              { label: `Day`, value: `day` },
              { label: `Week`, value: `week` },
              { label: `Month`, value: `month` }
            ]
          };
        },
        template: `
      <q-segmented v-model="value" :options="options" />
    `
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QSegmented
  },
  setup() {
    const value = ref('day');
    const options = [{
      label: 'Day',
      value: 'day'
    }, {
      label: 'Week',
      value: 'week'
    }, {
      label: 'Month',
      value: 'month'
    }];
    return {
      value,
      options
    };
  },
  template: \`
      <q-segmented v-model="value" :options="options" />
    \`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
