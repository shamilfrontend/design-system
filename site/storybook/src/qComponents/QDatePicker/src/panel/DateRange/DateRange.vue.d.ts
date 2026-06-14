import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { DatePanelRangePropModelValue } from './types';
declare function navigateDropdown(e: KeyboardEvent): void;
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<DatePanelRangePropModelValue>;
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
        type: PropType<DatePanelRangePropModelValue>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onPick?: ((...args: any[]) => any) | undefined;
    }>,
  {
    modelValue: DatePanelRangePropModelValue;
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
