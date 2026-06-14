import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QBadgePropValue,
  QBadgePropMax,
  QBadgePropType,
  QBadgePropIsDot,
  QBadgePropHidden
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * badge value
     */
    value: {
      type: PropType<QBadgePropValue>;
      default: null;
    };
    /**
     * maximum value before showing `{max}+`
     */
    max: {
      type: PropType<QBadgePropMax>;
      default: number;
    };
    /**
     * badge color type
     */
    type: {
      type: PropType<QBadgePropType>;
      default: string;
      validator: (
        value: 'success' | 'warning' | 'info' | 'primary' | 'danger'
      ) => boolean;
    };
    /**
     * whether badge is a dot without value
     */
    isDot: {
      type: PropType<QBadgePropIsDot>;
      default: boolean;
    };
    /**
     * whether badge is hidden
     */
    hidden: {
      type: PropType<QBadgePropHidden>;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * badge value
       */
      value: {
        type: PropType<QBadgePropValue>;
        default: null;
      };
      /**
       * maximum value before showing `{max}+`
       */
      max: {
        type: PropType<QBadgePropMax>;
        default: number;
      };
      /**
       * badge color type
       */
      type: {
        type: PropType<QBadgePropType>;
        default: string;
        validator: (
          value: 'success' | 'warning' | 'info' | 'primary' | 'danger'
        ) => boolean;
      };
      /**
       * whether badge is a dot without value
       */
      isDot: {
        type: PropType<QBadgePropIsDot>;
        default: boolean;
      };
      /**
       * whether badge is hidden
       */
      hidden: {
        type: PropType<QBadgePropHidden>;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    type: QBadgePropType;
    max: QBadgePropMax;
    hidden: QBadgePropHidden;
    value: QBadgePropValue;
    isDot: QBadgePropIsDot;
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
