import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable } from '../../../../types/helpers';
import { QRowPropAlignV, QRowPropAlignH } from './types';
declare var __VLS_8: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * custom element tag
     */
    tag: {
      type: StringConstructor;
      default: string;
    };
    /**
     * vertical alignment of flex layout.
     * `['start', 'end', 'center', 'baseline', 'stretch']`
     */
    alignV: {
      type: PropType<QRowPropAlignV>;
      default: null;
      validator: (value: Nullable<QRowPropAlignV>) => boolean;
    };
    /**
     * horizontal alignment of flex layout.
     * `['start', 'end', 'center', 'between', 'around']`
     */
    alignH: {
      type: PropType<QRowPropAlignH>;
      default: null;
      validator: (value: Nullable<QRowPropAlignH>) => boolean;
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
       * custom element tag
       */
      tag: {
        type: StringConstructor;
        default: string;
      };
      /**
       * vertical alignment of flex layout.
       * `['start', 'end', 'center', 'baseline', 'stretch']`
       */
      alignV: {
        type: PropType<QRowPropAlignV>;
        default: null;
        validator: (value: Nullable<QRowPropAlignV>) => boolean;
      };
      /**
       * horizontal alignment of flex layout.
       * `['start', 'end', 'center', 'between', 'around']`
       */
      alignH: {
        type: PropType<QRowPropAlignH>;
        default: null;
        validator: (value: Nullable<QRowPropAlignH>) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    tag: string;
    alignV: QRowPropAlignV;
    alignH: QRowPropAlignH;
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
