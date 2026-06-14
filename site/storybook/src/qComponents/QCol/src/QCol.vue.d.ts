import { Nullable } from '../../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
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
     * number of column the grid cols.
     * `auto || [1-12]`
     */
    cols: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
      validator: (value: Nullable<string | number>) => boolean;
    };
    /**
     * number of spacing on the left side of the grid.
     * `[0-11]`
     */
    offset: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
      validator: (value: Nullable<string | number>) => boolean;
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
       * number of column the grid cols.
       * `auto || [1-12]`
       */
      cols: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
        validator: (value: Nullable<string | number>) => boolean;
      };
      /**
       * number of spacing on the left side of the grid.
       * `[0-11]`
       */
      offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
        validator: (value: Nullable<string | number>) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    offset: string | number;
    tag: string;
    cols: string | number;
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
