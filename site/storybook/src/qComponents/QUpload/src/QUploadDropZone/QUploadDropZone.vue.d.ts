import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    hasValue: {
      type: BooleanConstructor;
      default: boolean;
    };
    isMultiple: {
      type: BooleanConstructor;
      default: boolean;
    };
    isDisabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    isLoading: {
      type: BooleanConstructor;
      default: boolean;
    };
    textUploadFile: {
      type: StringConstructor;
      default: null;
    };
    textReplaceFile: {
      type: StringConstructor;
      default: null;
    };
    textLoadingFile: {
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
    drop: (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      hasValue: {
        type: BooleanConstructor;
        default: boolean;
      };
      isMultiple: {
        type: BooleanConstructor;
        default: boolean;
      };
      isDisabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      isLoading: {
        type: BooleanConstructor;
        default: boolean;
      };
      textUploadFile: {
        type: StringConstructor;
        default: null;
      };
      textReplaceFile: {
        type: StringConstructor;
        default: null;
      };
      textLoadingFile: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      onDrop?: ((...args: any[]) => any) | undefined;
    }>,
  {
    isDisabled: boolean;
    isLoading: boolean;
    isMultiple: boolean;
    hasValue: boolean;
    textUploadFile: string;
    textReplaceFile: string;
    textLoadingFile: string;
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
