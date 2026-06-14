import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
export type QDescriptionsItemPropLabel = string;
export type QDescriptionsItemPropSpan = number;
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    label: {
      type: PropType<QDescriptionsItemPropLabel>;
      default: string;
    };
    span: {
      type: PropType<QDescriptionsItemPropSpan>;
      default: number;
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
      label: {
        type: PropType<QDescriptionsItemPropLabel>;
        default: string;
      };
      span: {
        type: PropType<QDescriptionsItemPropSpan>;
        default: number;
      };
    }>
  > &
    Readonly<{}>,
  {
    label: string;
    span: number;
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
