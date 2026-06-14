import { Nullable } from '../../../../../../types/helpers';
import {
  DefineComponent,
  Ref,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  {},
  {
    input: Ref<Nullable<HTMLInputElement>, Nullable<HTMLInputElement>>;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    focus: (...args: any[]) => void;
    'remove-tag': (...args: any[]) => void;
    exit: (...args: any[]) => void;
    'update:query': (...args: any[]) => void;
    'keyup-enter': (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<{}> &
    Readonly<{
      onFocus?: ((...args: any[]) => any) | undefined;
      'onRemove-tag'?: ((...args: any[]) => any) | undefined;
      onExit?: ((...args: any[]) => any) | undefined;
      'onUpdate:query'?: ((...args: any[]) => any) | undefined;
      'onKeyup-enter'?: ((...args: any[]) => any) | undefined;
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
