import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QPageHeaderPropBack,
  QPageHeaderPropSubtitle,
  QPageHeaderPropTitle
} from './types';
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {}, __VLS_9: {};
type __VLS_Slots = {} & {
  breadcrumb?: (props: typeof __VLS_1) => any;
} & {
  title?: (props: typeof __VLS_3) => any;
} & {
  subtitle?: (props: typeof __VLS_5) => any;
} & {
  extra?: (props: typeof __VLS_7) => any;
} & {
  default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    title: {
      type: PropType<QPageHeaderPropTitle>;
      default: null;
    };
    subtitle: {
      type: PropType<QPageHeaderPropSubtitle>;
      default: null;
    };
    back: {
      type: PropType<QPageHeaderPropBack>;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    back: () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      title: {
        type: PropType<QPageHeaderPropTitle>;
        default: null;
      };
      subtitle: {
        type: PropType<QPageHeaderPropSubtitle>;
        default: null;
      };
      back: {
        type: PropType<QPageHeaderPropBack>;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onBack?: (() => any) | undefined;
    }>,
  {
    title: QPageHeaderPropTitle;
    subtitle: QPageHeaderPropSubtitle;
    back: boolean;
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
