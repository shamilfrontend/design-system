import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QDropdownPropTrigger,
  QDropdownPropPlacement,
  QDropdownPropPopperOptions,
  QDropdownPropTeleportTo
} from './types';
import { Placement, Options } from '@popperjs/core';
declare var __VLS_1: {}, __VLS_17: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
} & {
  dropdown?: (props: typeof __VLS_17) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    trigger: {
      type: PropType<QDropdownPropTrigger>;
      default: string;
      validator: (value: QDropdownPropTrigger) => boolean;
    };
    placement: {
      type: PropType<QDropdownPropPlacement>;
      default: string;
      validator: (value: Placement) => boolean;
    };
    popperOptions: {
      type: PropType<QDropdownPropPopperOptions>;
      default: () => QDropdownPropPopperOptions;
    };
    teleportTo: {
      type: PropType<QDropdownPropTeleportTo>;
      default: string;
    };
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    hideOnClick: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    visibleChange: (visible: boolean) => any;
    command: (command: string) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      trigger: {
        type: PropType<QDropdownPropTrigger>;
        default: string;
        validator: (value: QDropdownPropTrigger) => boolean;
      };
      placement: {
        type: PropType<QDropdownPropPlacement>;
        default: string;
        validator: (value: Placement) => boolean;
      };
      popperOptions: {
        type: PropType<QDropdownPropPopperOptions>;
        default: () => QDropdownPropPopperOptions;
      };
      teleportTo: {
        type: PropType<QDropdownPropTeleportTo>;
        default: string;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onVisibleChange?: ((visible: boolean) => any) | undefined;
      onCommand?: ((command: string) => any) | undefined;
    }>,
  {
    trigger: QDropdownPropTrigger;
    disabled: boolean;
    placement: Placement;
    teleportTo: QDropdownPropTeleportTo;
    popperOptions: Partial<Options>;
    hideOnClick: boolean;
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
