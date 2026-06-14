import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QUploadPropValue,
  QUploadPropDirection,
  QUploadPropAccept
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    value: {
      type: PropType<QUploadPropValue>;
      default: null;
    };
    /**
     * whether uploading multiple files is permitted
     */
    multiple: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * direction to show the file list
     */
    direction: {
      type: PropType<QUploadPropDirection>;
      default: string;
      validator: (value: string) => boolean;
    };
    /**
     * maximum number of uploads allowed
     */
    limit: {
      type: NumberConstructor;
      default: null;
    };
    /**
     * the accept attribute value is a string or an array that defines the file types the file input should accept.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
     */
    accept: {
      type: PropType<QUploadPropAccept>;
      default: () => never[];
    };
    /**
     * whether to disable upload
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to show clear button
     */
    clearable: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to trigger form validation
     */
    validateEvent: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * used to change 'upload file' text
     */
    textUploadFile: {
      type: StringConstructor;
      default: null;
    };
    /**
     * used to change 'replace file' text
     */
    textReplaceFile: {
      type: StringConstructor;
      default: null;
    };
    /**
     * used to change 'loading file' text
     */
    textLoadingFile: {
      type: StringConstructor;
      default: null;
    };
    /**
     * used to change 'uploaded files' text
     */
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
    clear: (fileId?: string | undefined) => any;
    select: (sourceFile: File, fileId: string) => any;
    abort: (fileId?: string | undefined) => any;
    'clear-all': () => any;
    exceed: () => any;
    'select-all': (
      preparedFileList: {
        id: string;
        sourceFile: File;
      }[]
    ) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      value: {
        type: PropType<QUploadPropValue>;
        default: null;
      };
      /**
       * whether uploading multiple files is permitted
       */
      multiple: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * direction to show the file list
       */
      direction: {
        type: PropType<QUploadPropDirection>;
        default: string;
        validator: (value: string) => boolean;
      };
      /**
       * maximum number of uploads allowed
       */
      limit: {
        type: NumberConstructor;
        default: null;
      };
      /**
       * the accept attribute value is a string or an array that defines the file types the file input should accept.
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
       */
      accept: {
        type: PropType<QUploadPropAccept>;
        default: () => never[];
      };
      /**
       * whether to disable upload
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to show clear button
       */
      clearable: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to trigger form validation
       */
      validateEvent: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * used to change 'upload file' text
       */
      textUploadFile: {
        type: StringConstructor;
        default: null;
      };
      /**
       * used to change 'replace file' text
       */
      textReplaceFile: {
        type: StringConstructor;
        default: null;
      };
      /**
       * used to change 'loading file' text
       */
      textLoadingFile: {
        type: StringConstructor;
        default: null;
      };
      /**
       * used to change 'uploaded files' text
       */
      textUploadedFiles: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      onClear?: ((fileId?: string | undefined) => any) | undefined;
      onSelect?: ((sourceFile: File, fileId: string) => any) | undefined;
      onAbort?: ((fileId?: string | undefined) => any) | undefined;
      'onClear-all'?: (() => any) | undefined;
      onExceed?: (() => any) | undefined;
      'onSelect-all'?:
        | ((
            preparedFileList: {
              id: string;
              sourceFile: File;
            }[]
          ) => any)
        | undefined;
    }>,
  {
    disabled: boolean;
    validateEvent: boolean;
    clearable: boolean;
    value: QUploadPropValue;
    direction: QUploadPropDirection;
    multiple: boolean;
    textUploadFile: string;
    textReplaceFile: string;
    textLoadingFile: string;
    textUploadedFiles: string;
    limit: number;
    accept: QUploadPropAccept;
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
