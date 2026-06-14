import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QButtonPropType,
  QButtonPropTheme,
  QButtonPropSize,
  QButtonPropIcon,
  QButtonPropNativeType,
  QButtonPropLoading,
  QButtonPropDisabled,
  QButtonPropAutofocus,
  QButtonPropCircle,
  QButtonPropFullWidth
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    type: {
      type: PropType<QButtonPropType>;
      default: string;
      validator: (value: QButtonPropType) => boolean;
    };
    theme: {
      type: PropType<QButtonPropTheme>;
      default: string;
      validator: (value: QButtonPropTheme) => boolean;
    };
    size: {
      type: PropType<QButtonPropSize>;
      default: string;
      validator: (value: QButtonPropSize) => boolean;
    };
    /**
     * any q-icon
     */
    icon: {
      type: PropType<QButtonPropIcon>;
      default: null;
    };
    /**
     * as native button type
     */
    nativeType: {
      type: PropType<QButtonPropNativeType>;
      default: string;
      validator: (value: QButtonPropNativeType) => boolean;
    };
    /**
     * whether to show loader inside button
     */
    loading: {
      type: PropType<QButtonPropLoading>;
      default: boolean;
    };
    /**
     * whether the button is disabled
     */
    disabled: {
      type: PropType<QButtonPropDisabled>;
      default: boolean;
    };
    /**
     * as native button autofocus
     */
    autofocus: {
      type: PropType<QButtonPropAutofocus>;
      default: boolean;
    };
    /**
     * change button's shape to circle (use with type icon)
     */
    circle: {
      type: PropType<QButtonPropCircle>;
      default: boolean;
    };
    /**
     * sets button width to 100%
     */
    fullWidth: {
      type: PropType<QButtonPropFullWidth>;
      default: boolean;
    };
    /**
     * accessible label for icon-only buttons
     */
    ariaLabel: {
      type: StringConstructor;
      default: null;
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
      type: {
        type: PropType<QButtonPropType>;
        default: string;
        validator: (value: QButtonPropType) => boolean;
      };
      theme: {
        type: PropType<QButtonPropTheme>;
        default: string;
        validator: (value: QButtonPropTheme) => boolean;
      };
      size: {
        type: PropType<QButtonPropSize>;
        default: string;
        validator: (value: QButtonPropSize) => boolean;
      };
      /**
       * any q-icon
       */
      icon: {
        type: PropType<QButtonPropIcon>;
        default: null;
      };
      /**
       * as native button type
       */
      nativeType: {
        type: PropType<QButtonPropNativeType>;
        default: string;
        validator: (value: QButtonPropNativeType) => boolean;
      };
      /**
       * whether to show loader inside button
       */
      loading: {
        type: PropType<QButtonPropLoading>;
        default: boolean;
      };
      /**
       * whether the button is disabled
       */
      disabled: {
        type: PropType<QButtonPropDisabled>;
        default: boolean;
      };
      /**
       * as native button autofocus
       */
      autofocus: {
        type: PropType<QButtonPropAutofocus>;
        default: boolean;
      };
      /**
       * change button's shape to circle (use with type icon)
       */
      circle: {
        type: PropType<QButtonPropCircle>;
        default: boolean;
      };
      /**
       * sets button width to 100%
       */
      fullWidth: {
        type: PropType<QButtonPropFullWidth>;
        default: boolean;
      };
      /**
       * accessible label for icon-only buttons
       */
      ariaLabel: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    loading: QButtonPropLoading;
    size: QButtonPropSize;
    type: QButtonPropType;
    ariaLabel: string;
    circle: QButtonPropCircle;
    disabled: QButtonPropDisabled;
    icon: QButtonPropIcon;
    theme: QButtonPropTheme;
    nativeType: QButtonPropNativeType;
    autofocus: QButtonPropAutofocus;
    fullWidth: QButtonPropFullWidth;
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
