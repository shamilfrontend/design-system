import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QCalendarEvent } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: DateConstructor;
      default: () => Date;
    };
    events: {
      type: PropType<QCalendarEvent[]>;
      default: () => never[];
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    'update:modelValue': (value: Date) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: DateConstructor;
        default: () => Date;
      };
      events: {
        type: PropType<QCalendarEvent[]>;
        default: () => never[];
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((value: Date) => any) | undefined;
    }>,
  {
    modelValue: Date;
    events: QCalendarEvent[];
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
