import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QMentionOption } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: StringConstructor;
      default: string;
    };
    options: {
      type: PropType<QMentionOption[]>;
      default: () => never[];
    };
    prefix: {
      type: StringConstructor;
      default: string;
    };
    placeholder: {
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
    select: (option: QMentionOption) => any;
    'update:modelValue': (value: string) => any;
    change: (value: string) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: StringConstructor;
        default: string;
      };
      options: {
        type: PropType<QMentionOption[]>;
        default: () => never[];
      };
      prefix: {
        type: StringConstructor;
        default: string;
      };
      placeholder: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      onSelect?: ((option: QMentionOption) => any) | undefined;
      'onUpdate:modelValue'?: ((value: string) => any) | undefined;
      onChange?: ((value: string) => any) | undefined;
    }>,
  {
    options: QMentionOption[];
    modelValue: string;
    placeholder: string;
    prefix: string;
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
