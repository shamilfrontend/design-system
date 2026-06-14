import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QDrawerModalPropBeforeClose,
  QDrawerModalPropModelValue,
  QDrawerModalPropPosition,
  QDrawerModalPropTeleportTo,
  QDrawerModalPropTitle,
  QDrawerModalPropWidth
} from './types';
declare var __VLS_15: {}, __VLS_17: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_15) => any;
} & {
  footer?: (props: typeof __VLS_17) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QDrawerModalPropModelValue>;
      default: boolean;
    };
    title: {
      type: PropType<QDrawerModalPropTitle>;
      default: null;
    };
    width: {
      type: PropType<QDrawerModalPropWidth>;
      default: string;
    };
    position: {
      type: PropType<QDrawerModalPropPosition>;
      default: string;
      validator: (value: QDrawerModalPropPosition) => boolean;
    };
    beforeClose: {
      type: PropType<QDrawerModalPropBeforeClose>;
      default: null;
    };
    teleportTo: {
      type: PropType<QDrawerModalPropTeleportTo>;
      default: string;
    };
    closeOnClickModal: {
      type: BooleanConstructor;
      default: boolean;
    };
    showClose: {
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
    close: () => any;
    'update:modelValue': (value: boolean) => any;
    cancel: () => any;
    confirm: () => any;
    open: () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QDrawerModalPropModelValue>;
        default: boolean;
      };
      title: {
        type: PropType<QDrawerModalPropTitle>;
        default: null;
      };
      width: {
        type: PropType<QDrawerModalPropWidth>;
        default: string;
      };
      position: {
        type: PropType<QDrawerModalPropPosition>;
        default: string;
        validator: (value: QDrawerModalPropPosition) => boolean;
      };
      beforeClose: {
        type: PropType<QDrawerModalPropBeforeClose>;
        default: null;
      };
      teleportTo: {
        type: PropType<QDrawerModalPropTeleportTo>;
        default: string;
      };
      closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
      };
      showClose: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onClose?: (() => any) | undefined;
      'onUpdate:modelValue'?: ((value: boolean) => any) | undefined;
      onCancel?: (() => any) | undefined;
      onConfirm?: (() => any) | undefined;
      onOpen?: (() => any) | undefined;
    }>,
  {
    title: QDrawerModalPropTitle;
    modelValue: boolean;
    width: QDrawerModalPropWidth;
    position: QDrawerModalPropPosition;
    teleportTo: QDrawerModalPropTeleportTo;
    beforeClose: QDrawerModalPropBeforeClose;
    closeOnClickModal: boolean;
    showClose: boolean;
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
