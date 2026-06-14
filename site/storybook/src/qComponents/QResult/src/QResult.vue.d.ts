import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QResultPropStatus,
  QResultPropSubtitle,
  QResultPropTitle
} from './types';
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
  icon?: (props: typeof __VLS_1) => any;
} & {
  subtitle?: (props: typeof __VLS_3) => any;
} & {
  extra?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    status: {
      type: PropType<QResultPropStatus>;
      default: string;
      validator: (value: QResultPropStatus) => boolean;
    };
    title: {
      type: PropType<QResultPropTitle>;
      default: null;
    };
    subtitle: {
      type: PropType<QResultPropSubtitle>;
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
      status: {
        type: PropType<QResultPropStatus>;
        default: string;
        validator: (value: QResultPropStatus) => boolean;
      };
      title: {
        type: PropType<QResultPropTitle>;
        default: null;
      };
      subtitle: {
        type: PropType<QResultPropSubtitle>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    title: QResultPropTitle;
    status: QResultPropStatus;
    subtitle: QResultPropSubtitle;
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
