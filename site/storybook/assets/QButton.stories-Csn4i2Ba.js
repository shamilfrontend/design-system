import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
var a, o, s, c, l, u, d, f, p;
e(() => {
  (n(),
    r(),
    (a = {
      title: `Components/QButton`,
      component: i,
      argTypes: {
        type: { options: [`default`, `icon`], control: { type: `select` } },
        theme: {
          options: [`primary`, `secondary`, `link`],
          control: { type: `select` }
        },
        size: { options: [`small`, `regular`], control: { type: `select` } },
        disabled: { control: { type: `boolean` } },
        loading: { control: { type: `boolean` } },
        circle: { control: { type: `boolean` } },
        icon: { control: { type: `text` } }
      }
    }),
    (o = e =>
      t({
        setup() {
          return {
            args: e,
            handleClick: e => {
              console.log(`click`, e);
            }
          };
        },
        template: `
      <q-button
        :type="args.type"
        :theme="args.theme"
        :size="args.size"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :circle="args.circle"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
    `
      })),
    (s = o.bind({})),
    (s.args = {
      theme: `primary`,
      type: `default`,
      label: `Primary theme`,
      size: `regular`
    }),
    (c = o.bind({})),
    (c.args = {
      theme: `secondary`,
      type: `default`,
      label: `Secondary theme`,
      size: `regular`
    }),
    (l = o.bind({})),
    (l.args = {
      theme: `link`,
      type: `default`,
      label: `Link theme`,
      size: `regular`
    }),
    (u = o.bind({})),
    (u.args = {
      theme: `primary`,
      type: `icon`,
      icon: `q-icon-bell`,
      size: `regular`
    }),
    (d = o.bind({})),
    (d.args = {
      theme: `secondary`,
      type: `icon`,
      icon: `q-icon-bell`,
      size: `regular`
    }),
    (f = o.bind({})),
    (f.args = {
      theme: `link`,
      type: `icon`,
      icon: `q-icon-bell`,
      size: `regular`
    }),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const handleClick = (event: MouseEvent): void => {
      console.log('click', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: \`
      <q-button
        :type="args.type"
        :theme="args.theme"
        :size="args.size"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :circle="args.circle"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
    \`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const handleClick = (event: MouseEvent): void => {
      console.log('click', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: \`
      <q-button
        :type="args.type"
        :theme="args.theme"
        :size="args.size"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :circle="args.circle"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
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
    const handleClick = (event: MouseEvent): void => {
      console.log('click', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: \`
      <q-button
        :type="args.type"
        :theme="args.theme"
        :size="args.size"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :circle="args.circle"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
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
    const handleClick = (event: MouseEvent): void => {
      console.log('click', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: \`
      <q-button
        :type="args.type"
        :theme="args.theme"
        :size="args.size"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :circle="args.circle"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
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
    const handleClick = (event: MouseEvent): void => {
      console.log('click', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: \`
      <q-button
        :type="args.type"
        :theme="args.theme"
        :size="args.size"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :circle="args.circle"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
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
    const handleClick = (event: MouseEvent): void => {
      console.log('click', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: \`
      <q-button
        :type="args.type"
        :theme="args.theme"
        :size="args.size"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :circle="args.circle"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
    \`
})`,
          ...f.parameters?.docs?.source
        }
      }
    }),
    (p = [
      `ThemePrimary`,
      `ThemeSecondary`,
      `ThemeLink`,
      `IconPrimary`,
      `IconSecondary`,
      `IconLink`
    ]));
})();
export {
  f as IconLink,
  u as IconPrimary,
  d as IconSecondary,
  l as ThemeLink,
  s as ThemePrimary,
  c as ThemeSecondary,
  p as __namedExportsOrder,
  a as default
};
