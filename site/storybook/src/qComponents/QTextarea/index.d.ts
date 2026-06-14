import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTextareaPropResize, QTextareaPropAutosize } from './src/types';
export declare const QTextarea: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      modelValue: {
        type: StringConstructor;
        default: null;
      };
      resize: {
        type: PropType<QTextareaPropResize>;
        default: string;
        validator: (value: QTextareaPropResize) => boolean;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      showSymbolLimit: {
        type: BooleanConstructor;
        default: boolean;
      };
      autosize: {
        type: PropType<QTextareaPropAutosize>;
        default: boolean;
      };
      validateEvent: {
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
      input: (event: Event) => any;
      'update:modelValue': (value: string) => any;
      change: (event: Event) => any;
      focus: (event: FocusEvent) => any;
      blur: (event: FocusEvent) => any;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: StringConstructor;
          default: null;
        };
        resize: {
          type: PropType<QTextareaPropResize>;
          default: string;
          validator: (value: QTextareaPropResize) => boolean;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        showSymbolLimit: {
          type: BooleanConstructor;
          default: boolean;
        };
        autosize: {
          type: PropType<QTextareaPropAutosize>;
          default: boolean;
        };
        validateEvent: {
          type: BooleanConstructor;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        onInput?: ((event: Event) => any) | undefined;
        'onUpdate:modelValue'?: ((value: string) => any) | undefined;
        onChange?: ((event: Event) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
      }>,
    {
      disabled: boolean;
      modelValue: string;
      showSymbolLimit: boolean;
      validateEvent: boolean;
      resize: QTextareaPropResize;
      autosize: QTextareaPropAutosize;
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
export type { QTextareaProps, QTextareaInstance } from './src/types';
