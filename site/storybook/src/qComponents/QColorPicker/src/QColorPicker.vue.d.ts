import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  Ref,
  ComputedRef,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable, UnwrappedInstance } from '../../../../types/helpers';
import { QPickerDropdownInstance } from './QPickerDropdown';
import {
  QColorPickerPropColorFormat,
  QColorPickerPropPlacement,
  QColorPickerPropPopperOptions,
  QColorPickerPropTeleportTo,
  ColorFormat
} from './types';
import { Placement } from '@popperjs/core';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  trigger?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * binding value
     */
    modelValue: {
      type: StringConstructor;
      default: null;
    };
    /**
     * whether to disable the ColorPicker
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to show clear button
     */
    clearable: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to display the alpha slider
     */
    alphaShown: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * output color format
     */
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
    /**
     * Specifies a target element where QColorPicker will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QColorPickerPropTeleportTo>;
      default: null;
    };
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
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * binding value
       */
      modelValue: {
        type: StringConstructor;
        default: null;
      };
      /**
       * whether to disable the ColorPicker
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to show clear button
       */
      clearable: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to display the alpha slider
       */
      alphaShown: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * output color format
       */
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
      /**
       * Specifies a target element where QColorPicker will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
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
