import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QCascaderPropModelValue,
  QCascaderPropOptions,
  QCascaderPropTeleportTo
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * binding value
     */
    modelValue: {
      type: PropType<QCascaderPropModelValue>;
      default: null;
    };
    /**
     * array of objects with required fields, example:
     * `{ value: 'guide', label: 'Guide', disabled: false, children: [{ ... }] }`
     */
    options: {
      type: PropType<QCascaderPropOptions>;
      default: null;
    };
    /**
     * whether all path to value in tags is shown
     */
    allLevelsShown: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * separator in tags
     */
    separator: {
      type: StringConstructor;
      default: string;
    };
    /**
     * whether QCascader accept multiple values
     */
    multiple: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether QCascader is clearable
     */
    clearable: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether QCascader is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * check each value as independent
     */
    checkStrictly: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * hide tags in counter
     */
    collapseTags: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * as native placeholder
     */
    placeholder: {
      type: StringConstructor;
      default: null;
    };
    /**
     * Specifies a target element where QCascader will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QCascaderPropTeleportTo>;
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
    'update:modelValue': (...args: any[]) => void;
    change: (...args: any[]) => void;
    'dropdown-close': (...args: any[]) => void;
    'dropdown-expand': (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * binding value
       */
      modelValue: {
        type: PropType<QCascaderPropModelValue>;
        default: null;
      };
      /**
       * array of objects with required fields, example:
       * `{ value: 'guide', label: 'Guide', disabled: false, children: [{ ... }] }`
       */
      options: {
        type: PropType<QCascaderPropOptions>;
        default: null;
      };
      /**
       * whether all path to value in tags is shown
       */
      allLevelsShown: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * separator in tags
       */
      separator: {
        type: StringConstructor;
        default: string;
      };
      /**
       * whether QCascader accept multiple values
       */
      multiple: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether QCascader is clearable
       */
      clearable: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether QCascader is disabled
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * check each value as independent
       */
      checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * hide tags in counter
       */
      collapseTags: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * as native placeholder
       */
      placeholder: {
        type: StringConstructor;
        default: null;
      };
      /**
       * Specifies a target element where QCascader will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
      teleportTo: {
        type: PropType<QCascaderPropTeleportTo>;
        default: null;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined;
      onChange?: ((...args: any[]) => any) | undefined;
      'onDropdown-close'?: ((...args: any[]) => any) | undefined;
      'onDropdown-expand'?: ((...args: any[]) => any) | undefined;
    }>,
  {
    options: QCascaderPropOptions;
    disabled: boolean;
    modelValue: QCascaderPropModelValue;
    clearable: boolean;
    placeholder: string;
    multiple: boolean;
    collapseTags: boolean;
    allLevelsShown: boolean;
    separator: string;
    checkStrictly: boolean;
    teleportTo: QCascaderPropTeleportTo;
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
declare const _default: typeof __VLS_export;
export default _default;
