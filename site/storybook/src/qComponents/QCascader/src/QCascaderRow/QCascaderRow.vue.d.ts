import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QCascaderRowPropRow } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    uniqueId: {
      type: StringConstructor;
      required: true;
    };
    row: {
      type: PropType<QCascaderRowPropRow>;
      required: true;
    };
    rowIndex: {
      type: NumberConstructor;
      required: true;
    };
    expanded: {
      type: BooleanConstructor;
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
    expand: (...args: any[]) => void;
    check: (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      uniqueId: {
        type: StringConstructor;
        required: true;
      };
      row: {
        type: PropType<QCascaderRowPropRow>;
        required: true;
      };
      rowIndex: {
        type: NumberConstructor;
        required: true;
      };
      expanded: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onExpand?: ((...args: any[]) => any) | undefined;
      onCheck?: ((...args: any[]) => any) | undefined;
    }>,
  {
    expanded: boolean;
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
declare const _default: typeof __VLS_export;
export default _default;
