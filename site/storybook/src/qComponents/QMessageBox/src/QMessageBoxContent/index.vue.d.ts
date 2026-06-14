import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QMessageBoxContentPropBeforeClose } from './types';
declare var __VLS_1: {},
  __VLS_3: {},
  __VLS_5: {},
  __VLS_7: {},
  __VLS_9: {},
  __VLS_11: {};
type __VLS_Slots = {} & {
  title?: (props: typeof __VLS_1) => any;
} & {
  default?: (props: typeof __VLS_3) => any;
} & {
  content?: (props: typeof __VLS_5) => any;
} & {
  message?: (props: typeof __VLS_7) => any;
} & {
  submessage?: (props: typeof __VLS_9) => any;
} & {
  actions?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * title of the QMessageBox
     */
    title: {
      type: StringConstructor;
      default: null;
    };
    /**
     * content of the QMessageBox
     */
    message: {
      type: StringConstructor;
      default: null;
    };
    /**
     * subcontent of the QMessageBox
     */
    submessage: {
      type: StringConstructor;
      default: null;
    };
    /**
     * text content of confirm button
     */
    confirmButtonText: {
      type: StringConstructor;
      default: null;
    };
    /**
     * text content of cancel button
     */
    cancelButtonText: {
      type: StringConstructor;
      default: null;
    };
    /**
     * callback before QMessageBox closes, and it will prevent QMessageBox from closing
     */
    beforeClose: {
      type: PropType<QMessageBoxContentPropBeforeClose>;
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
      /**
       * title of the QMessageBox
       */
      title: {
        type: StringConstructor;
        default: null;
      };
      /**
       * content of the QMessageBox
       */
      message: {
        type: StringConstructor;
        default: null;
      };
      /**
       * subcontent of the QMessageBox
       */
      submessage: {
        type: StringConstructor;
        default: null;
      };
      /**
       * text content of confirm button
       */
      confirmButtonText: {
        type: StringConstructor;
        default: null;
      };
      /**
       * text content of cancel button
       */
      cancelButtonText: {
        type: StringConstructor;
        default: null;
      };
      /**
       * callback before QMessageBox closes, and it will prevent QMessageBox from closing
       */
      beforeClose: {
        type: PropType<QMessageBoxContentPropBeforeClose>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    title: string;
    message: string;
    beforeClose: QMessageBoxContentPropBeforeClose;
    submessage: string;
    confirmButtonText: string;
    cancelButtonText: string;
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
