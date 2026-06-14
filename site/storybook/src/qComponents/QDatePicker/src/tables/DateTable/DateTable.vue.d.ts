import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable } from '../../../../../../types/helpers';
import { RangeState } from '../../commonTypes';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    year: {
      type: NumberConstructor;
      default: number;
      validator: (value: unknown) => boolean;
    };
    month: {
      type: NumberConstructor;
      default: number;
      validator: (value: unknown) => boolean;
    };
    value: {
      type: PropType<Nullable<Date>>;
      default: null;
    };
    minDate: {
      type: PropType<Nullable<Date>>;
      default: null;
    };
    maxDate: {
      type: PropType<Nullable<Date>>;
      default: null;
    };
    rangeState: {
      type: PropType<RangeState>;
      default: () => RangeState;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    pick: (...args: any[]) => void;
    rangeSelecting: (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      year: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
      };
      month: {
        type: NumberConstructor;
        default: number;
        validator: (value: unknown) => boolean;
      };
      value: {
        type: PropType<Nullable<Date>>;
        default: null;
      };
      minDate: {
        type: PropType<Nullable<Date>>;
        default: null;
      };
      maxDate: {
        type: PropType<Nullable<Date>>;
        default: null;
      };
      rangeState: {
        type: PropType<RangeState>;
        default: () => RangeState;
      };
    }>
  > &
    Readonly<{
      onPick?: ((...args: any[]) => any) | undefined;
      onRangeSelecting?: ((...args: any[]) => any) | undefined;
    }>,
  {
    month: number;
    value: Nullable<Date>;
    year: number;
    minDate: Nullable<Date>;
    maxDate: Nullable<Date>;
    rangeState: RangeState;
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
