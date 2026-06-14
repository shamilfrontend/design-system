import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QEmptyPropDescription, QEmptyPropImageSize } from './types';
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
  image?: (props: typeof __VLS_1) => any;
} & {
  default?: (props: typeof __VLS_3) => any;
} & {
  default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    description: {
      type: PropType<QEmptyPropDescription>;
      default: null;
    };
    imageSize: {
      type: PropType<QEmptyPropImageSize>;
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
      description: {
        type: PropType<QEmptyPropDescription>;
        default: null;
      };
      imageSize: {
        type: PropType<QEmptyPropImageSize>;
        default: number;
      };
    }>
  > &
    Readonly<{}>,
  {
    description: QEmptyPropDescription;
    imageSize: number;
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
