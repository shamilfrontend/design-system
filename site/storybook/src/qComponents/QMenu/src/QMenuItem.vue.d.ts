import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QMenuItemPropCommand,
  QMenuItemPropDisabled,
  QMenuItemPropDivided,
  QMenuItemPropIcon
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    disabled: {
      type: PropType<QMenuItemPropDisabled>;
      default: boolean;
    };
    divided: {
      type: PropType<QMenuItemPropDivided>;
      default: boolean;
    };
    icon: {
      type: PropType<QMenuItemPropIcon>;
      default: null;
    };
    command: {
      type: PropType<QMenuItemPropCommand>;
      default: null;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    click: (event: MouseEvent) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      disabled: {
        type: PropType<QMenuItemPropDisabled>;
        default: boolean;
      };
      divided: {
        type: PropType<QMenuItemPropDivided>;
        default: boolean;
      };
      icon: {
        type: PropType<QMenuItemPropIcon>;
        default: null;
      };
      command: {
        type: PropType<QMenuItemPropCommand>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onClick?: ((event: MouseEvent) => any) | undefined;
    }>,
  {
    disabled: boolean;
    icon: QMenuItemPropIcon;
    command: QMenuItemPropCommand;
    divided: boolean;
  },
  {},
  {},
  {},
  string,
  ComponentProvideOptions,
  true,
  {},
  any
>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
