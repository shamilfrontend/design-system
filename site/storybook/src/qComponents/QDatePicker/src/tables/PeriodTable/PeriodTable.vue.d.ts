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
    type: {
      type: StringConstructor;
      default: string;
      validator: (value: unknown) => boolean;
    };
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
    rangeState: {
      type: PropType<RangeState>;
      default: () => RangeState;
      validator: (value: unknown) => boolean;
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
      type: {
        type: StringConstructor;
        default: string;
        validator: (value: unknown) => boolean;
      };
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
      rangeState: {
        type: PropType<RangeState>;
        default: () => RangeState;
        validator: (value: unknown) => boolean;
      };
    }>
  > &
    Readonly<{
      onPick?: ((...args: any[]) => any) | undefined;
      onRangeSelecting?: ((...args: any[]) => any) | undefined;
    }>,
  {
    type: string;
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
