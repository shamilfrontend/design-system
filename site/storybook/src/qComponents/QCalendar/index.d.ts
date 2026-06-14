import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QCalendarEvent } from '.';
export declare const QCalendar: SFCWithInstall<
  DefineComponent<
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
  >
>;
export type { QCalendarProps, QCalendarEvent } from './src/types';
