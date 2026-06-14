import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { DatePanelPropModelValue } from './types';
declare function navigateDropdown(e: KeyboardEvent): void;
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<DatePanelPropModelValue>;
      default: null;
    };
  }>,
  {
    navigateDropdown: typeof navigateDropdown;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    pick: (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<DatePanelPropModelValue>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onPick?: ((...args: any[]) => any) | undefined;
    }>,
  {
    modelValue: DatePanelPropModelValue;
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
