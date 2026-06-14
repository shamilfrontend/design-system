import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
export type QDescriptionsPropTitle = string | null;
export type QDescriptionsPropColumn = number;
export type QDescriptionsPropBordered = boolean;
export type QDescriptionsPropSize = 'small' | 'medium' | 'large';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    title: {
      type: PropType<QDescriptionsPropTitle>;
      default: null;
    };
    column: {
      type: PropType<QDescriptionsPropColumn>;
      default: number;
    };
    bordered: {
      type: BooleanConstructor;
      default: boolean;
    };
    size: {
      type: PropType<QDescriptionsPropSize>;
      default: string;
      validator: (value: QDescriptionsPropSize) => boolean;
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
      title: {
        type: PropType<QDescriptionsPropTitle>;
        default: null;
      };
      column: {
        type: PropType<QDescriptionsPropColumn>;
        default: number;
      };
      bordered: {
        type: BooleanConstructor;
        default: boolean;
      };
      size: {
        type: PropType<QDescriptionsPropSize>;
        default: string;
        validator: (value: QDescriptionsPropSize) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    size: QDescriptionsPropSize;
    title: QDescriptionsPropTitle;
    column: number;
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
