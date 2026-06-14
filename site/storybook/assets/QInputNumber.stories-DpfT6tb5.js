import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { dn as i, fn as a } from './iframe-CABL6dQv.js';
var o, s, c, l, u, d, f, p;
e(() => {
  (r(),
    a(),
    (o = {
      title: `Components/QInputNumber`,
      component: i,
      argTypes: {
        modelValue: { control: !1 },
        placeholder: { control: { type: `text` } },
        min: { control: { type: `number` } },
        max: { control: { type: `number` } },
        prefix: { control: { type: `text` } },
        suffix: { control: { type: `text` } },
        precision: { control: { type: `number`, min: 0 } }
      }
    }),
    (s = e =>
      n({
        setup() {
          return {
            args: e,
            numberValue: t(1234567.89),
            handleEmit: (e, t) => {
              console.log(e, t);
            }
          };
        },
        template: `
      <div style="width:300px">
        <q-input-number
          v-model="numberValue"
          :min="args.min"
          :max="args.max"
          :placeholder="args.placeholder"
          :precision="args.precision"
          :disabled="args.disabled"
          :validate-event="args.validateEvent"
          :prefix="args.prefix"
          :suffix="args.suffix"
          @input="handleEmit($event, 'input')"
          @change="handleEmit($event, 'change')"
        />
      </div>
    `
      })),
    (c = s.bind({})),
    (l = s.bind({})),
    (u = s.bind({})),
    (d = s.bind({})),
    (f = s.bind({})),
    (c.args = {}),
    (l.args = { disabled: !0 }),
    (u.args = { min: 0 }),
    (d.args = { precision: 2 }),
    (f.args = { prefix: `Distance:`, suffix: `Km` }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const numberValue = ref<number>(1234567.89);
    const handleEmit = (value: string, type: string): void => {
      console.log(value, type);
    };
    return {
      args,
      numberValue,
      handleEmit
    };
  },
  template: \`
      <div style="width:300px">
        <q-input-number
          v-model="numberValue"
          :min="args.min"
          :max="args.max"
          :placeholder="args.placeholder"
          :precision="args.precision"
          :disabled="args.disabled"
          :validate-event="args.validateEvent"
          :prefix="args.prefix"
          :suffix="args.suffix"
          @input="handleEmit($event, 'input')"
          @change="handleEmit($event, 'change')"
        />
      </div>
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const numberValue = ref<number>(1234567.89);
    const handleEmit = (value: string, type: string): void => {
      console.log(value, type);
    };
    return {
      args,
      numberValue,
      handleEmit
    };
  },
  template: \`
      <div style="width:300px">
        <q-input-number
          v-model="numberValue"
          :min="args.min"
          :max="args.max"
          :placeholder="args.placeholder"
          :precision="args.precision"
          :disabled="args.disabled"
          :validate-event="args.validateEvent"
          :prefix="args.prefix"
          :suffix="args.suffix"
          @input="handleEmit($event, 'input')"
          @change="handleEmit($event, 'change')"
        />
      </div>
    \`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const numberValue = ref<number>(1234567.89);
    const handleEmit = (value: string, type: string): void => {
      console.log(value, type);
    };
    return {
      args,
      numberValue,
      handleEmit
    };
  },
  template: \`
      <div style="width:300px">
        <q-input-number
          v-model="numberValue"
          :min="args.min"
          :max="args.max"
          :placeholder="args.placeholder"
          :precision="args.precision"
          :disabled="args.disabled"
          :validate-event="args.validateEvent"
          :prefix="args.prefix"
          :suffix="args.suffix"
          @input="handleEmit($event, 'input')"
          @change="handleEmit($event, 'change')"
        />
      </div>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d.parameters = {
      ...d.parameters,
      docs: {
        ...d.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const numberValue = ref<number>(1234567.89);
    const handleEmit = (value: string, type: string): void => {
      console.log(value, type);
    };
    return {
      args,
      numberValue,
      handleEmit
    };
  },
  template: \`
      <div style="width:300px">
        <q-input-number
          v-model="numberValue"
          :min="args.min"
          :max="args.max"
          :placeholder="args.placeholder"
          :precision="args.precision"
          :disabled="args.disabled"
          :validate-event="args.validateEvent"
          :prefix="args.prefix"
          :suffix="args.suffix"
          @input="handleEmit($event, 'input')"
          @change="handleEmit($event, 'change')"
        />
      </div>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f.parameters = {
      ...f.parameters,
      docs: {
        ...f.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const numberValue = ref<number>(1234567.89);
    const handleEmit = (value: string, type: string): void => {
      console.log(value, type);
    };
    return {
      args,
      numberValue,
      handleEmit
    };
  },
  template: \`
      <div style="width:300px">
        <q-input-number
          v-model="numberValue"
          :min="args.min"
          :max="args.max"
          :placeholder="args.placeholder"
          :precision="args.precision"
          :disabled="args.disabled"
          :validate-event="args.validateEvent"
          :prefix="args.prefix"
          :suffix="args.suffix"
          @input="handleEmit($event, 'input')"
          @change="handleEmit($event, 'change')"
        />
      </div>
    \`
})`,
          ...f.parameters?.docs?.source
        }
      }
    }),
    (p = [
      `Default`,
      `Disabled`,
      `PositiveOnly`,
      `WithPrecision`,
      `WithPrefixAndSuffix`
    ]));
})();
export {
  c as Default,
  l as Disabled,
  u as PositiveOnly,
  d as WithPrecision,
  f as WithPrefixAndSuffix,
  p as __namedExportsOrder,
  o as default
};
