import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QDividerPropBorderStyle,
  QDividerPropContentPosition,
  QDividerPropDirection
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    direction: {
      type: PropType<QDividerPropDirection>;
      default: string;
      validator: (value: QDividerPropDirection) => boolean;
    };
    contentPosition: {
      type: PropType<QDividerPropContentPosition>;
      default: string;
      validator: (value: QDividerPropContentPosition) => boolean;
    };
    borderStyle: {
      type: PropType<QDividerPropBorderStyle>;
      default: string;
      validator: (value: QDividerPropBorderStyle) => boolean;
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
      direction: {
        type: PropType<QDividerPropDirection>;
        default: string;
        validator: (value: QDividerPropDirection) => boolean;
      };
      contentPosition: {
        type: PropType<QDividerPropContentPosition>;
        default: string;
        validator: (value: QDividerPropContentPosition) => boolean;
      };
      borderStyle: {
        type: PropType<QDividerPropBorderStyle>;
        default: string;
        validator: (value: QDividerPropBorderStyle) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    direction: QDividerPropDirection;
    borderStyle: QDividerPropBorderStyle;
    contentPosition: QDividerPropContentPosition;
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
