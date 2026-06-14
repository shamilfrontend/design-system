import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { D as i, E as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QCalendar`, component: a }),
    (s = () =>
      n({
        components: { QCalendar: a },
        setup() {
          return {
            month: t(new Date()),
            events: [
              {
                date: new Date().toISOString().slice(0, 10),
                title: `Meet`,
                type: `primary`
              }
            ]
          };
        },
        template: `<q-calendar v-model="month" :events="events" style="max-width:560px" />`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QCalendar
  },
  setup() {
    const month = ref(new Date());
    const events = [{
      date: new Date().toISOString().slice(0, 10),
      title: 'Meet',
      type: 'primary'
    }];
    return {
      month,
      events
    };
  },
  template: \`<q-calendar v-model="month" :events="events" style="max-width:560px" />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
