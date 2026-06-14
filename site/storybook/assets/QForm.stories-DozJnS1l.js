import { i as e } from './preload-helper-CMdWXl7s.js';
import { X as t, Z as n, b as r, t as i } from './vue.esm-bundler-BVbty6R8.js';
import { Sn as a, bn as o, xn as s, yn as c } from './iframe-CABL6dQv.js';
var l, u, d, f, p, m;
e(() => {
  (i(),
    a(),
    o(),
    (l = {
      title: `Components/QForm`,
      component: s,
      subcomponents: { QFormItem: c },
      argTypes: {
        rules: { control: { type: `object` } },
        model: { control: !1 }
      }
    }),
    (u = { name: ``, intro: `` }),
    (d = {
      name: [
        { required: !1 },
        {
          min: 3,
          max: 10,
          message: `Length should be 3 to 10`,
          trigger: `blur`
        }
      ],
      intro: {
        required: !0,
        message: `Please input introtext`,
        trigger: `change`
      }
    }),
    (f = e =>
      r({
        setup() {
          let r = n(null),
            i = t(u),
            a = t(d);
          return {
            form: r,
            args: e,
            formModel: i,
            rules: a,
            handleSubmitClick: async () => {
              let e = await r?.value?.validate();
              if (e) {
                let { isValid: t, invalidFields: n } = e;
                (console.log(`QForm | validate`, t, n), t && alert(`Success`));
              }
            },
            handleResetClick: () => {
              r?.value?.resetFields();
            },
            handleRule: () => {
              a.name = {
                required: !0,
                message: `Please input name`,
                trigger: `blur`
              };
            }
          };
        },
        template: `
      <q-form
        ref="form"
        :model="formModel"
        :rules="rules"
        :disabled="args.disabled"
        :hideRequiredAsterisk="args.hideRequiredAsterisk"
        :showErrorMessage="args.showErrorMessage"
        :validateOnRuleChange="args.validateOnRuleChange"
      >
        <q-form-item
          label="Name"
          prop="name"
        >
          <q-input
            v-model="formModel.name"
            type="text"
          />
        </q-form-item>

        <q-form-item
          label="Intro"
          prop="intro"
        >
          <q-input
            v-model="formModel.intro"
            type="text"
          />
        </q-form-item>

        <q-button @click="handleSubmitClick">Create</q-button>
        <q-button @click="handleResetClick" theme="secondary">Reset</q-button>
        <q-button @click="handleRule" theme="secondary">Make Name required</q-button>
      </q-form>
    `
      })),
    (p = f.bind({})),
    (p.parameters = {
      ...p.parameters,
      docs: {
        ...p.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const form = ref<UnwrappedInstance<QFormInstance>>(null);
    const formModel = reactive(model);
    const rules = reactive(INITIAL_RULES);
    const handleSubmitClick = async (): Promise<void> => {
      const valid = await form?.value?.validate();
      if (valid) {
        const {
          isValid,
          invalidFields
        } = valid;
        console.log('QForm | validate', isValid, invalidFields);
        if (isValid) {
          alert('Success');
        }
      }
    };
    const handleResetClick = (): void => {
      form?.value?.resetFields();
    };
    const handleRule = (): void => {
      rules.name = {
        required: true,
        message: 'Please input name',
        trigger: 'blur'
      };
    };
    return {
      form,
      args,
      formModel,
      rules,
      handleSubmitClick,
      handleResetClick,
      handleRule
    };
  },
  template: \`
      <q-form
        ref="form"
        :model="formModel"
        :rules="rules"
        :disabled="args.disabled"
        :hideRequiredAsterisk="args.hideRequiredAsterisk"
        :showErrorMessage="args.showErrorMessage"
        :validateOnRuleChange="args.validateOnRuleChange"
      >
        <q-form-item
          label="Name"
          prop="name"
        >
          <q-input
            v-model="formModel.name"
            type="text"
          />
        </q-form-item>

        <q-form-item
          label="Intro"
          prop="intro"
        >
          <q-input
            v-model="formModel.intro"
            type="text"
          />
        </q-form-item>

        <q-button @click="handleSubmitClick">Create</q-button>
        <q-button @click="handleResetClick" theme="secondary">Reset</q-button>
        <q-button @click="handleRule" theme="secondary">Make Name required</q-button>
      </q-form>
    \`
})`,
          ...p.parameters?.docs?.source
        }
      }
    }),
    (m = [`Default`]));
})();
export { p as Default, m as __namedExportsOrder, l as default };
