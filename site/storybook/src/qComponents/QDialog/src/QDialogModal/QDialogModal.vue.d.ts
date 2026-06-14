import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QDialogModalPropBeforeClose,
  QDialogModalPropModelValue,
  QDialogModalPropTeleportTo,
  QDialogModalPropTitle,
  QDialogModalPropWidth
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
      type: PropType<QDialogModalPropModelValue>;
      default: boolean;
    };
    title: {
      type: PropType<QDialogModalPropTitle>;
      default: null;
    };
    width: {
      type: PropType<QDialogModalPropWidth>;
      default: string;
    };
    beforeClose: {
      type: PropType<QDialogModalPropBeforeClose>;
      default: null;
    };
    teleportTo: {
      type: PropType<QDialogModalPropTeleportTo>;
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
        type: PropType<QDialogModalPropModelValue>;
        default: boolean;
      };
      title: {
        type: PropType<QDialogModalPropTitle>;
        default: null;
      };
      width: {
        type: PropType<QDialogModalPropWidth>;
        default: string;
      };
      beforeClose: {
        type: PropType<QDialogModalPropBeforeClose>;
        default: null;
      };
      teleportTo: {
        type: PropType<QDialogModalPropTeleportTo>;
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
    title: QDialogModalPropTitle;
    modelValue: boolean;
    width: QDialogModalPropWidth;
    teleportTo: QDialogModalPropTeleportTo;
    beforeClose: QDialogModalPropBeforeClose;
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
