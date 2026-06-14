import { SFCWithInstall } from '../../../../../types/helpers';
import {
  CreateComponentPublicInstanceWithMixins,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  GlobalComponents,
  GlobalDirectives,
  ComponentProvideOptions,
  ComponentOptionsBase,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps
} from 'vue';
import {
  QDialogModalPropModelValue,
  QDialogModalPropTitle,
  QDialogModalPropWidth,
  QDialogModalPropBeforeClose,
  QDialogModalPropTeleportTo
} from './types';
export declare const QDialogModal: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
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
      PublicProps,
      {
        title: QDialogModalPropTitle;
        modelValue: boolean;
        width: QDialogModalPropWidth;
        teleportTo: QDialogModalPropTeleportTo;
        beforeClose: QDialogModalPropBeforeClose;
        closeOnClickModal: boolean;
        showClose: boolean;
      },
      true,
      {},
      {},
      GlobalComponents,
      GlobalDirectives,
      string,
      {},
      any,
      ComponentProvideOptions,
      {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
      },
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
      {},
      {},
      {},
      {},
      {
        title: QDialogModalPropTitle;
        modelValue: boolean;
        width: QDialogModalPropWidth;
        teleportTo: QDialogModalPropTeleportTo;
        beforeClose: QDialogModalPropBeforeClose;
        closeOnClickModal: boolean;
        showClose: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
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
    string,
    {},
    GlobalComponents,
    GlobalDirectives,
    string,
    ComponentProvideOptions
  > &
    VNodeProps &
    AllowedComponentProps &
    ComponentCustomProps &
    (new () => {
      $slots: {
        default?: (props: {}) => any;
      } & {
        footer?: (props: {}) => any;
      };
    })
>;
export type {
  QDialogModalProps,
  QDialogModalPropModelValue,
  QDialogModalPropTitle,
  QDialogModalPropWidth,
  QDialogModalPropTeleportTo,
  QDialogModalPropBeforeClose
} from './types';
