import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { fr as i, pr as a } from './iframe-CABL6dQv.js';
var o, s, c, l, u, d;
e(() => {
  (r(),
    a(),
    (o = {
      title: `Components/QCascader`,
      component: i,
      argTypes: { modelValue: { control: !1 } }
    }),
    (s = e =>
      n({
        setup() {
          return {
            args: e,
            modelValue: t(null),
            handleDropdownClose: () => {
              console.log(`dropdown-close`);
            },
            handleDropdownExpand: () => {
              console.log(`dropdown-expand`);
            }
          };
        },
        template: `
      <div style="width: 304px; height:240px">
        <q-cascader
          v-model="modelValue"
          :check-strictly="args.checkStrictly"
          :options="args.options"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :multiple="args.multiple"
          :separator="args.separator"
          :all-levels-shown="args.allLevelsShown"
          :collapse-tags="args.collapseTags"
          @dropdown-close="handleDropdownClose"
          @dropdown-expand="handleDropdownExpand"
        />
      </div>
    `
      })),
    (c = {
      options: [
        {
          value: `guide`,
          label: `Guide`,
          children: [
            {
              value: `disciplines`,
              label: `Disciplines`,
              children: [
                {
                  value: `consistency`,
                  label: `Consistency`,
                  children: [{ value: `four level`, label: `Four level` }]
                },
                { value: `feedback`, label: `Feedback` }
              ]
            },
            {
              value: `navigation`,
              label: `Navigation`,
              children: [
                { value: `side nav`, label: `Side Navigation` },
                { value: `top nav`, label: `Top Navigation` }
              ]
            },
            { value: `alone`, label: `Alone` }
          ]
        },
        {
          value: `disabled resource`,
          label: `Disabled resource`,
          disabled: !0,
          children: [{ value: `some child`, label: `Some child` }]
        },
        { value: `resource`, label: `Resource` }
      ]
    }),
    (l = s.bind({})),
    (l.args = { ...c }),
    (u = s.bind({})),
    (u.args = { ...c, multiple: !0 }),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const modelValue = ref(null);
    const handleDropdownExpand = (): void => {
      console.log('dropdown-expand');
    };
    const handleDropdownClose = (): void => {
      console.log('dropdown-close');
    };
    return {
      args,
      modelValue,
      handleDropdownClose,
      handleDropdownExpand
    };
  },
  template: \`
      <div style="width: 304px; height:240px">
        <q-cascader
          v-model="modelValue"
          :check-strictly="args.checkStrictly"
          :options="args.options"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :multiple="args.multiple"
          :separator="args.separator"
          :all-levels-shown="args.allLevelsShown"
          :collapse-tags="args.collapseTags"
          @dropdown-close="handleDropdownClose"
          @dropdown-expand="handleDropdownExpand"
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
    const modelValue = ref(null);
    const handleDropdownExpand = (): void => {
      console.log('dropdown-expand');
    };
    const handleDropdownClose = (): void => {
      console.log('dropdown-close');
    };
    return {
      args,
      modelValue,
      handleDropdownClose,
      handleDropdownExpand
    };
  },
  template: \`
      <div style="width: 304px; height:240px">
        <q-cascader
          v-model="modelValue"
          :check-strictly="args.checkStrictly"
          :options="args.options"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :multiple="args.multiple"
          :separator="args.separator"
          :all-levels-shown="args.allLevelsShown"
          :collapse-tags="args.collapseTags"
          @dropdown-close="handleDropdownClose"
          @dropdown-expand="handleDropdownExpand"
        />
      </div>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`, `Multiple`]));
})();
export { l as Default, u as Multiple, d as __namedExportsOrder, o as default };
