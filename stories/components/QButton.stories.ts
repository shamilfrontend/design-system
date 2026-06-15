import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import {
  QButton,
  QButtonTypeEnum,
  QButtonSizeEnum,
  QButtonNativeTypeEnum,
  QButtonTagEnum
} from '@/components/QButton';
import type { QButtonColorType, QButtonProps } from '@/components/QButton';

const COLOR_TYPES: QButtonColorType[] = [
  QButtonTypeEnum.Default,
  QButtonTypeEnum.Primary,
  QButtonTypeEnum.Success,
  QButtonTypeEnum.Warning,
  QButtonTypeEnum.Danger,
  QButtonTypeEnum.Info
];

const SIZE_TYPES = Object.values(QButtonSizeEnum);
const NATIVE_TYPE_OPTIONS = Object.values(QButtonNativeTypeEnum);
const TAG_OPTIONS = Object.values(QButtonTagEnum);

const storyMetadata: Meta = {
  title: 'Basic/QButton',
  component: QButton,
  argTypes: {
    type: {
      options: COLOR_TYPES,
      control: { type: 'select' }
    },
    size: {
      options: SIZE_TYPES,
      control: { type: 'select' }
    },
    nativeType: {
      options: NATIVE_TYPE_OPTIONS,
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
      options: TAG_OPTIONS,
      control: { type: 'select' }
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
  type: QButtonTypeEnum.Primary,
  label: 'Primary',
  size: QButtonSizeEnum.Default
};

export const Default = Template.bind({});
Default.args = {
  type: QButtonTypeEnum.Default,
  label: 'Default',
  size: QButtonSizeEnum.Default
};

export const Success = Template.bind({});
Success.args = {
  type: QButtonTypeEnum.Success,
  label: 'Success',
  size: QButtonSizeEnum.Default
};

export const Warning = Template.bind({});
Warning.args = {
  type: QButtonTypeEnum.Warning,
  label: 'Warning',
  size: QButtonSizeEnum.Default
};

export const Danger = Template.bind({});
Danger.args = {
  type: QButtonTypeEnum.Danger,
  label: 'Danger',
  size: QButtonSizeEnum.Default
};

export const Info = Template.bind({});
Info.args = {
  type: QButtonTypeEnum.Info,
  label: 'Info',
  size: QButtonSizeEnum.Default
};

export const PlainPrimary = Template.bind({});
PlainPrimary.args = {
  type: QButtonTypeEnum.Primary,
  plain: true,
  label: 'Plain',
  size: QButtonSizeEnum.Default
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  type: QButtonTypeEnum.Primary,
  text: true,
  label: 'Text',
  size: QButtonSizeEnum.Default
};

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  type: QButtonTypeEnum.Primary,
  link: true,
  label: 'Link',
  size: QButtonSizeEnum.Default
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  type: QButtonTypeEnum.Primary,
  label: 'Large',
  size: QButtonSizeEnum.Large
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  type: QButtonTypeEnum.Primary,
  label: 'Small',
  size: QButtonSizeEnum.Small
};

export const IconPrimary = Template.bind({});
IconPrimary.args = {
  type: QButtonTypeEnum.Primary,
  icon: 'q-icon-bell',
  size: QButtonSizeEnum.Default,
  label: ''
};

export const IconPlain = Template.bind({});
IconPlain.args = {
  type: QButtonTypeEnum.Primary,
  plain: true,
  icon: 'q-icon-bell',
  size: QButtonSizeEnum.Default,
  label: ''
};

export const IconCircle = Template.bind({});
IconCircle.args = {
  type: QButtonTypeEnum.Primary,
  circle: true,
  icon: 'q-icon-bell',
  size: QButtonSizeEnum.Default,
  label: ''
};

export const Round = Template.bind({});
Round.args = {
  type: QButtonTypeEnum.Primary,
  round: true,
  label: 'Round',
  size: QButtonSizeEnum.Default
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  color: '#409eff',
  dark: true,
  label: 'Custom',
  size: QButtonSizeEnum.Default
};

export const AsLinkTag = Template.bind({});
AsLinkTag.args = {
  type: QButtonTypeEnum.Primary,
  tag: QButtonTagEnum.Anchor,
  label: 'Anchor',
  size: QButtonSizeEnum.Default
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
