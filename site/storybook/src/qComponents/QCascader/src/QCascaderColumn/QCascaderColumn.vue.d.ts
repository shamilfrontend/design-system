import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QCascaderColumnPropColumn } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    columnIndex: {
      type: NumberConstructor;
      required: true;
    };
    column: {
      type: PropType<QCascaderColumnPropColumn>;
      required: true;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    expand: (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      columnIndex: {
        type: NumberConstructor;
        required: true;
      };
      column: {
        type: PropType<QCascaderColumnPropColumn>;
        required: true;
      };
    }>
  > &
    Readonly<{
      onExpand?: ((...args: any[]) => any) | undefined;
    }>,
  {},
  {},
  {},
  {},
  string,
  ComponentProvideOptions,
  true,
  {},
  any
>;
declare const _default: typeof __VLS_export;
export default _default;
