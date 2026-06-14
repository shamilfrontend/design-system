import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QCardPropShadow, QCardPropTitle, QCardPropBodyPadding } from './types';
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
  header?: (props: typeof __VLS_1) => any;
} & {
  default?: (props: typeof __VLS_3) => any;
} & {
  footer?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * card shadow display mode
     */
    shadow: {
      type: PropType<QCardPropShadow>;
      default: string;
      validator: (value: 'always' | 'hover' | 'never') => boolean;
    };
    /**
     * card title
     */
    title: {
      type: PropType<QCardPropTitle>;
      default: null;
    };
    /**
     * whether body has default padding
     */
    bodyPadding: {
      type: PropType<QCardPropBodyPadding>;
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
       * card shadow display mode
       */
      shadow: {
        type: PropType<QCardPropShadow>;
        default: string;
        validator: (value: 'always' | 'hover' | 'never') => boolean;
      };
      /**
       * card title
       */
      title: {
        type: PropType<QCardPropTitle>;
        default: null;
      };
      /**
       * whether body has default padding
       */
      bodyPadding: {
        type: PropType<QCardPropBodyPadding>;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    title: QCardPropTitle;
    shadow: QCardPropShadow;
    bodyPadding: QCardPropBodyPadding;
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
