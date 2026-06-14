import {
  SFCWithInstall,
  Nullable,
  UnwrappedInstance
} from '../../../types/helpers';
import {
  CreateComponentPublicInstanceWithMixins,
  ExtractPropTypes,
  PropType,
  Ref,
  ComputedRef,
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
  QColorPickerPropColorFormat,
  ColorFormat,
  QColorPickerPropPlacement,
  QColorPickerPropPopperOptions,
  QColorPickerPropTeleportTo
} from './src/types';
import { Placement } from '@popperjs/core';
import { QPickerDropdownInstance } from './src/QPickerDropdown';
export declare const QColorPicker: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: StringConstructor;
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          clearable: {
            type: BooleanConstructor;
            default: boolean;
          };
          alphaShown: {
            type: BooleanConstructor;
            default: boolean;
          };
          colorFormat: {
            type: PropType<QColorPickerPropColorFormat>;
            default: string;
            validator: (value: ColorFormat) => boolean;
          };
          placement: {
            type: PropType<QColorPickerPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          popperOptions: {
            type: PropType<QColorPickerPropPopperOptions>;
            default: () => Partial<QColorPickerPropPopperOptions>;
          };
          teleportTo: {
            type: PropType<QColorPickerPropTeleportTo>;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?:
            | ((value: Nullable<string>) => any)
            | undefined;
          onChange?: ((value: Nullable<string>) => any) | undefined;
        }>,
      {
        trigger: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
        dropdown: Ref<
          UnwrappedInstance<QPickerDropdownInstance>,
          UnwrappedInstance<QPickerDropdownInstance>
        >;
        zIndex: Ref<number, number>;
        iconClasses: ComputedRef<Record<string, boolean>>;
        isDisabled: ComputedRef<boolean>;
        isPickerShown: Ref<boolean, boolean>;
        handleClose: () => void;
        handleTriggerClick: () => void;
        handlePick: (value: Nullable<string>) => void;
      },
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        'update:modelValue': (value: Nullable<string>) => any;
        change: (value: Nullable<string>) => any;
      },
      PublicProps,
      {
        disabled: boolean;
        modelValue: string;
        clearable: boolean;
        placement: Placement;
        teleportTo: QColorPickerPropTeleportTo;
        colorFormat: ColorFormat;
        alphaShown: boolean;
        popperOptions: QColorPickerPropPopperOptions;
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
            type: StringConstructor;
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          clearable: {
            type: BooleanConstructor;
            default: boolean;
          };
          alphaShown: {
            type: BooleanConstructor;
            default: boolean;
          };
          colorFormat: {
            type: PropType<QColorPickerPropColorFormat>;
            default: string;
            validator: (value: ColorFormat) => boolean;
          };
          placement: {
            type: PropType<QColorPickerPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          popperOptions: {
            type: PropType<QColorPickerPropPopperOptions>;
            default: () => Partial<QColorPickerPropPopperOptions>;
          };
          teleportTo: {
            type: PropType<QColorPickerPropTeleportTo>;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?:
            | ((value: Nullable<string>) => any)
            | undefined;
          onChange?: ((value: Nullable<string>) => any) | undefined;
        }>,
      {
        trigger: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
        dropdown: Ref<
          UnwrappedInstance<QPickerDropdownInstance>,
          UnwrappedInstance<QPickerDropdownInstance>
        >;
        zIndex: Ref<number, number>;
        iconClasses: ComputedRef<Record<string, boolean>>;
        isDisabled: ComputedRef<boolean>;
        isPickerShown: Ref<boolean, boolean>;
        handleClose: () => void;
        handleTriggerClick: () => void;
        handlePick: (value: Nullable<string>) => void;
      },
      {},
      {},
      {},
      {
        disabled: boolean;
        modelValue: string;
        clearable: boolean;
        placement: Placement;
        teleportTo: QColorPickerPropTeleportTo;
        colorFormat: ColorFormat;
        alphaShown: boolean;
        popperOptions: QColorPickerPropPopperOptions;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: StringConstructor;
          default: null;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        clearable: {
          type: BooleanConstructor;
          default: boolean;
        };
        alphaShown: {
          type: BooleanConstructor;
          default: boolean;
        };
        colorFormat: {
          type: PropType<QColorPickerPropColorFormat>;
          default: string;
          validator: (value: ColorFormat) => boolean;
        };
        placement: {
          type: PropType<QColorPickerPropPlacement>;
          default: string;
          validator: (value: Placement) => boolean;
        };
        popperOptions: {
          type: PropType<QColorPickerPropPopperOptions>;
          default: () => Partial<QColorPickerPropPopperOptions>;
        };
        teleportTo: {
          type: PropType<QColorPickerPropTeleportTo>;
          default: null;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?: ((value: Nullable<string>) => any) | undefined;
        onChange?: ((value: Nullable<string>) => any) | undefined;
      }>,
    {
      trigger: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
      dropdown: Ref<
        UnwrappedInstance<QPickerDropdownInstance>,
        UnwrappedInstance<QPickerDropdownInstance>
      >;
      zIndex: Ref<number, number>;
      iconClasses: ComputedRef<Record<string, boolean>>;
      isDisabled: ComputedRef<boolean>;
      isPickerShown: Ref<boolean, boolean>;
      handleClose: () => void;
      handleTriggerClick: () => void;
      handlePick: (value: Nullable<string>) => void;
    },
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (value: Nullable<string>) => any;
      change: (value: Nullable<string>) => any;
    },
    string,
    {
      disabled: boolean;
      modelValue: string;
      clearable: boolean;
      placement: Placement;
      teleportTo: QColorPickerPropTeleportTo;
      colorFormat: ColorFormat;
      alphaShown: boolean;
      popperOptions: QColorPickerPropPopperOptions;
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
        trigger?: (props: {}) => any;
      };
    })
>;
export type { QColorPickerProps, QColorPickerInstance } from './src/types';
