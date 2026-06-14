import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QSliderPropModelValue, QSliderPropData } from '.';
import { QSliderPropTooltipMode } from './src/types';
export declare const QSlider: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QSliderPropModelValue>;
        default: null;
      };
      data: {
        type: PropType<QSliderPropData>;
        required: true;
      };
      tooltipMode: {
        type: PropType<QSliderPropTooltipMode>;
        default: null;
      };
      showSteps: {
        type: BooleanConstructor;
        default: boolean;
      };
      disabled: {
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
      'update:modelValue': (value: string | number | boolean | null) => any;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QSliderPropModelValue>;
          default: null;
        };
        data: {
          type: PropType<QSliderPropData>;
          required: true;
        };
        tooltipMode: {
          type: PropType<QSliderPropTooltipMode>;
          default: null;
        };
        showSteps: {
          type: BooleanConstructor;
          default: boolean;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?:
          | ((value: string | number | boolean | null) => any)
          | undefined;
      }>,
    {
      disabled: boolean;
      modelValue: string | number | boolean | null;
      tooltipMode: QSliderPropTooltipMode;
      showSteps: boolean;
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
export type {
  QSliderProps,
  QSliderPropModelValue,
  QSliderPropData
} from './src/types';
