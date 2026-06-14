import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QUploadFileMultiplePropValue } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    value: {
      type: PropType<QUploadFileMultiplePropValue>;
      default: null;
    };
    isDisabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    isClearable: {
      type: BooleanConstructor;
      default: boolean;
    };
    textUploadedFiles: {
      type: StringConstructor;
      default: null;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    clear: (fileId: string) => any;
    abort: (fileId: string) => any;
    'clear-all': () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      value: {
        type: PropType<QUploadFileMultiplePropValue>;
        default: null;
      };
      isDisabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      isClearable: {
        type: BooleanConstructor;
        default: boolean;
      };
      textUploadedFiles: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      onClear?: ((fileId: string) => any) | undefined;
      onAbort?: ((fileId: string) => any) | undefined;
      'onClear-all'?: (() => any) | undefined;
    }>,
  {
    isDisabled: boolean;
    value: QUploadFileMultiplePropValue;
    isClearable: boolean;
    textUploadedFiles: string;
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
