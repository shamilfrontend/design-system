import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { Q as i, Z as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    i(),
    (o = {
      title: `Components/QTextarea`,
      component: a,
      argTypes: {
        placeholder: { category: `Native attrs`, control: { type: `text` } },
        maxlength: { category: `Native attrs`, control: { type: `number` } },
        resize: {
          options: [`vertical`, `horizontal`, `both`, `none`],
          control: { type: `select` }
        },
        autocomplete: { options: [`on`, `off`], control: { type: `radio` } },
        modelValue: { control: !1 },
        autosize: {
          options: [!0, !1, `restrictions`],
          mapping: {
            true: !0,
            false: !1,
            restrictions: { minRows: 2, maxRows: 4 }
          },
          control: {
            type: `select`,
            labels: {
              true: `true`,
              false: `false`,
              restrictions: `{ minRows: 2, maxRows: 4 }`
            }
          }
        }
      }
    }),
    (s = e =>
      n({
        setup() {
          return {
            model: t(``),
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
            }
          };
        },
        template: `
      <q-textarea
        v-model="model"
        :disabled="args.disabled"
        :resize="args.resize"
        :autosize="args.autosize"
        :placeholder="args.placeholder"
        :maxlength="args.maxlength"
        :autocomplete="args.autocomplete"
        :show-symbol-limit="args.showSymbolLimit"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleChange"
      />
    `
      })),
    (c = s.bind({})),
    (c.args = {
      autocomplete: `off`,
      placeholder: `Input text`,
      maxlength: 100,
      autosize: !0
    }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const model = ref<string>('');
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
    return {
      model,
      args,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange
    };
  },
  template: \`
      <q-textarea
        v-model="model"
        :disabled="args.disabled"
        :resize="args.resize"
        :autosize="args.autosize"
        :placeholder="args.placeholder"
        :maxlength="args.maxlength"
        :autocomplete="args.autocomplete"
        :show-symbol-limit="args.showSymbolLimit"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleChange"
      />
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
