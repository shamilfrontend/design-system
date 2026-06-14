import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QUploadPropValue,
  QUploadPropDirection,
  QUploadPropAccept
} from './src/types';
export declare const QUpload: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      value: {
        type: PropType<QUploadPropValue>;
        default: null;
      };
      multiple: {
        type: BooleanConstructor;
        default: boolean;
      };
      direction: {
        type: PropType<QUploadPropDirection>;
        default: string;
        validator: (value: string) => boolean;
      };
      limit: {
        type: NumberConstructor;
        default: null;
      };
      accept: {
        type: PropType<QUploadPropAccept>;
        default: () => never[];
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      clearable: {
        type: BooleanConstructor;
        default: boolean;
      };
      validateEvent: {
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
        multiple: {
          type: BooleanConstructor;
          default: boolean;
        };
        direction: {
          type: PropType<QUploadPropDirection>;
          default: string;
          validator: (value: string) => boolean;
        };
        limit: {
          type: NumberConstructor;
          default: null;
        };
        accept: {
          type: PropType<QUploadPropAccept>;
          default: () => never[];
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        clearable: {
          type: BooleanConstructor;
          default: boolean;
        };
        validateEvent: {
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
  >
>;
export type { QUploadProps, QUploadFile, QUploadInstance } from './src/types';
