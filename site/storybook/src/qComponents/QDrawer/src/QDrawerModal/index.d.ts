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
  QDrawerModalPropModelValue,
  QDrawerModalPropTitle,
  QDrawerModalPropWidth,
  QDrawerModalPropPosition,
  QDrawerModalPropBeforeClose,
  QDrawerModalPropTeleportTo
} from './types';
export declare const QDrawerModal: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
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
        title: QDrawerModalPropTitle;
        modelValue: boolean;
        width: QDrawerModalPropWidth;
        position: QDrawerModalPropPosition;
        teleportTo: QDrawerModalPropTeleportTo;
        beforeClose: QDrawerModalPropBeforeClose;
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
      {},
      {},
      {},
      {},
      {
        title: QDrawerModalPropTitle;
        modelValue: boolean;
        width: QDrawerModalPropWidth;
        position: QDrawerModalPropPosition;
        teleportTo: QDrawerModalPropTeleportTo;
        beforeClose: QDrawerModalPropBeforeClose;
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
  QDrawerModalProps,
  QDrawerModalPropModelValue,
  QDrawerModalPropTitle,
  QDrawerModalPropWidth,
  QDrawerModalPropPosition,
  QDrawerModalPropTeleportTo,
  QDrawerModalPropBeforeClose
} from './types';
