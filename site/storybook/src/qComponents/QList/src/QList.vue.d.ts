import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
export type QListPropSize = 'small' | 'medium' | 'large';
export type QListPropBordered = boolean;
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    size: {
      type: PropType<QListPropSize>;
      default: string;
      validator: (value: QListPropSize) => boolean;
    };
    bordered: {
      type: PropType<QListPropBordered>;
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
      size: {
        type: PropType<QListPropSize>;
        default: string;
        validator: (value: QListPropSize) => boolean;
      };
      bordered: {
        type: PropType<QListPropBordered>;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    size: QListPropSize;
    bordered: boolean;
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
