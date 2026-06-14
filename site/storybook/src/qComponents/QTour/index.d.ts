import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTourStep } from '.';
export { useTour } from './src/useTour';
export declare const QTour: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      modelValue: {
        type: BooleanConstructor;
        default: boolean;
      };
      steps: {
        type: PropType<QTourStep[]>;
        default: () => never[];
      };
      current: {
        type: NumberConstructor;
        default: number;
      };
    }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (value: boolean) => any;
      finish: () => any;
      'update:current': (value: number) => any;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: BooleanConstructor;
          default: boolean;
        };
        steps: {
          type: PropType<QTourStep[]>;
          default: () => never[];
        };
        current: {
          type: NumberConstructor;
          default: number;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?: ((value: boolean) => any) | undefined;
        onFinish?: (() => any) | undefined;
        'onUpdate:current'?: ((value: number) => any) | undefined;
      }>,
    {
      modelValue: boolean;
      steps: QTourStep[];
      current: number;
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
export type { QTourProps, QTourStep } from './src/types';
