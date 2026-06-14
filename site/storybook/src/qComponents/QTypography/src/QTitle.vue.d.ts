import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTitlePropLevel } from './types';
declare var __VLS_8: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    level: {
      type: PropType<QTitlePropLevel>;
      default: number;
      validator: (value: QTitlePropLevel) => boolean;
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
      level: {
        type: PropType<QTitlePropLevel>;
        default: number;
        validator: (value: QTitlePropLevel) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    level: QTitlePropLevel;
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
