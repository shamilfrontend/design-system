import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QSpacePropAlign,
  QSpacePropDirection,
  QSpacePropFill,
  QSpacePropSize,
  QSpacePropWrap
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    direction: {
      type: PropType<QSpacePropDirection>;
      default: string;
      validator: (value: QSpacePropDirection) => boolean;
    };
    size: {
      type: PropType<QSpacePropSize>;
      default: string;
    };
    wrap: {
      type: PropType<QSpacePropWrap>;
      default: boolean;
    };
    fill: {
      type: PropType<QSpacePropFill>;
      default: boolean;
    };
    align: {
      type: PropType<QSpacePropAlign>;
      default: string;
      validator: (value: QSpacePropAlign) => boolean;
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
        type: PropType<QSpacePropDirection>;
        default: string;
        validator: (value: QSpacePropDirection) => boolean;
      };
      size: {
        type: PropType<QSpacePropSize>;
        default: string;
      };
      wrap: {
        type: PropType<QSpacePropWrap>;
        default: boolean;
      };
      fill: {
        type: PropType<QSpacePropFill>;
        default: boolean;
      };
      align: {
        type: PropType<QSpacePropAlign>;
        default: string;
        validator: (value: QSpacePropAlign) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    size: QSpacePropSize;
    fill: boolean;
    direction: QSpacePropDirection;
    wrap: boolean;
    align: QSpacePropAlign;
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
