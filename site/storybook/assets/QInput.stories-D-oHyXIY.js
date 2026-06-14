import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { Nr as i, Pr as a, _n as o } from './iframe-CABL6dQv.js';
import { t as s } from './iconsList-DiWPY8la.js';
var c, l, u, d;
e(() => {
  (r(),
    a(),
    s(),
    (c = {
      title: `Components/QInput`,
      component: i,
      argTypes: {
        placeholder: { control: { type: `text` } },
        maxlength: { control: { type: `number` } },
        modelValue: { control: !1 },
        type: {
          options: [
            `text`,
            `password`,
            `number`,
            `email`,
            `hidden`,
            `tel`,
            `url`
          ],
          control: { type: `select` }
        },
        suffixIcon: { options: [null, ...o], control: { type: `select` } },
        autocomplete: { options: [`on`, `off`], control: { type: `select` } },
        readonly: { control: { type: `boolean` } }
      }
    }),
    (l = e =>
      n({
        setup() {
          return {
            data: t(``),
            args: e,
            handleFocus: e => {
              console.log(`handleFocus`, e);
            },
            handleBlur: e => {
              console.log(`handleBlur`, e);
            },
            handleInput: e => {
              console.log(`handleInput`, e);
            },
            handleChange: e => {
              console.log(`handleChange`, e);
            },
            handleClear: e => {
              console.log(`handleClear`, e);
            }
          };
        },
        template: `
      <div style="width: 300px">
        <q-input
          v-model="data"
          :suffix-icon="args.suffixIcon"
          :show-symbol-limit="args.showSymbolLimit"
          :password-switch="args.passwordSwitch"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :validate-event="args.validateEvent"
          :autocomplete="args.autocomplete"
          :placeholder="args.placeholder"
          :maxlength="args.maxlength"
          :type="args.type"
          :readonly="args.readonly"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInput"
          @change="handleChange"
          @clear="handleClear"
        />
      </div>
    `
      })),
    (u = l.bind({})),
    (u.args = { placeholder: `Input text`, maxlength: 25, type: `text` }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const data = ref<string>('');
    const handleFocus = (event: Event): void => {
      console.log('handleFocus', event);
    };
    const handleBlur = (event: Event): void => {
      console.log('handleBlur', event);
    };
    const handleInput = (event: Event): void => {
      console.log('handleInput', event);
    };
    const handleChange = (event: Event): void => {
      console.log('handleChange', event);
    };
    const handleClear = (event: Event): void => {
      console.log('handleClear', event);
    };
    return {
      data,
      args,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear
    };
  },
  template: \`
      <div style="width: 300px">
        <q-input
          v-model="data"
          :suffix-icon="args.suffixIcon"
          :show-symbol-limit="args.showSymbolLimit"
          :password-switch="args.passwordSwitch"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :validate-event="args.validateEvent"
          :autocomplete="args.autocomplete"
          :placeholder="args.placeholder"
          :maxlength="args.maxlength"
          :type="args.type"
          :readonly="args.readonly"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInput"
          @change="handleChange"
          @clear="handleClear"
        />
      </div>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`]));
})();
export { u as Default, d as __namedExportsOrder, c as default };
