import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QButton } from '@/qComponents/QButton';
import type { QButtonColorType, QButtonProps } from '@/qComponents/QButton';

const COLOR_TYPES: QButtonColorType[] = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'info'
];

const storyMetadata: Meta = {
  title: 'Basic/QButton',
  component: QButton,
  argTypes: {
    type: {
      options: COLOR_TYPES,
      control: { type: 'select' }
    },
    size: {
      options: ['large', 'default', 'small'],
      control: { type: 'select' }
    },
    plain: {
      control: { type: 'boolean' }
    },
    text: {
      control: { type: 'boolean' }
    },
    link: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    circle: {
      control: { type: 'boolean' }
    },
    round: {
      control: { type: 'boolean' }
    },
    bg: {
      control: { type: 'boolean' }
    },
    dark: {
      control: { type: 'boolean' }
    },
    color: {
      control: { type: 'color' }
    },
    tag: {
      control: { type: 'text' }
    },
    icon: {
      control: { type: 'text' }
    }
  }
};

type StoryArgs = QButtonProps & Record<'label', string>;

const Template: StoryFn<StoryArgs> = args =>
  defineComponent({
    setup() {
      const handleClick = (event: MouseEvent): void => {
        console.log('click', event);
      };

      return { args, handleClick };
    },
    template: `
      <q-button
        :type="args.type"
        :size="args.size"
        :plain="args.plain"
        :text="args.text"
        :link="args.link"
        :icon="args.icon"
        :nativeType="args.nativeType"
        :loading="args.loading"
        :disabled="args.disabled"
        :autofocus="args.autofocus"
        :round="args.round"
        :circle="args.circle"
        :bg="args.bg"
        :tag="args.tag"
        :color="args.color"
        :dark="args.dark"
        :autoInsertSpace="args.autoInsertSpace"
        :fullWidth="args.fullWidth"
        @click="handleClick"
      >
        {{ args.label }}
      </q-button>
    `
  });

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary',
  size: 'default'
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  label: 'Default',
  size: 'default'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  label: 'Success',
  size: 'default'
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  label: 'Warning',
  size: 'default'
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  label: 'Danger',
  size: 'default'
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  label: 'Info',
  size: 'default'
};

export const PlainPrimary = Template.bind({});
PlainPrimary.args = {
  type: 'primary',
  plain: true,
  label: 'Plain',
  size: 'default'
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  type: 'primary',
  text: true,
  label: 'Text',
  size: 'default'
};

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  type: 'primary',
  link: true,
  label: 'Link',
  size: 'default'
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  type: 'primary',
  label: 'Large',
  size: 'large'
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  type: 'primary',
  label: 'Small',
  size: 'small'
};

export const IconPrimary = Template.bind({});
IconPrimary.args = {
  type: 'primary',
  icon: 'q-icon-bell',
  size: 'default',
  label: ''
};

export const IconPlain = Template.bind({});
IconPlain.args = {
  type: 'primary',
  plain: true,
  icon: 'q-icon-bell',
  size: 'default',
  label: ''
};

export const IconCircle = Template.bind({});
IconCircle.args = {
  type: 'primary',
  circle: true,
  icon: 'q-icon-bell',
  size: 'default',
  label: ''
};

export const Round = Template.bind({});
Round.args = {
  type: 'primary',
  round: true,
  label: 'Round',
  size: 'default'
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#409eff',
  dark: true,
  label: 'Custom',
  size: 'default'
};

export const AsLinkTag = Template.bind({});
AsLinkTag.args = {
  type: 'primary',
  tag: 'a',
  label: 'Anchor',
  size: 'default'
};

export const AllTypes = (): ReturnType<typeof defineComponent> =>
  defineComponent({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <q-button type="default">Default</q-button>
        <q-button type="primary">Primary</q-button>
        <q-button type="success">Success</q-button>
        <q-button type="warning">Warning</q-button>
        <q-button type="danger">Danger</q-button>
        <q-button type="info">Info</q-button>
      </div>
    `
  });

export const AllPlain = (): ReturnType<typeof defineComponent> =>
  defineComponent({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <q-button type="default" plain>Default</q-button>
        <q-button type="primary" plain>Primary</q-button>
        <q-button type="success" plain>Success</q-button>
        <q-button type="warning" plain>Warning</q-button>
        <q-button type="danger" plain>Danger</q-button>
        <q-button type="info" plain>Info</q-button>
      </div>
    `
  });

export const AllText = (): ReturnType<typeof defineComponent> =>
  defineComponent({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <q-button type="default" text>Default</q-button>
        <q-button type="primary" text>Primary</q-button>
        <q-button type="success" text>Success</q-button>
        <q-button type="warning" text>Warning</q-button>
        <q-button type="danger" text>Danger</q-button>
        <q-button type="info" text>Info</q-button>
      </div>
    `
  });

export const AllLink = (): ReturnType<typeof defineComponent> =>
  defineComponent({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <q-button type="default" link>Default</q-button>
        <q-button type="primary" link>Primary</q-button>
        <q-button type="success" link>Success</q-button>
        <q-button type="warning" link>Warning</q-button>
        <q-button type="danger" link>Danger</q-button>
        <q-button type="info" link>Info</q-button>
      </div>
    `
  });

export const AllSizes = (): ReturnType<typeof defineComponent> =>
  defineComponent({
    template: `
      <div style="display: flex; align-items: center; gap: 12px;">
        <q-button type="primary" size="large">Large</q-button>
        <q-button type="primary" size="default">Default</q-button>
        <q-button type="primary" size="small">Small</q-button>
      </div>
    `
  });

export default storyMetadata;
