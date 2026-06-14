import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QSliderPropModelValue,
  QSliderPropData,
  QSliderPropTooltipMode
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * binding value
     */
    modelValue: {
      type: PropType<QSliderPropModelValue>;
      default: null;
    };
    /**
     * array of objects with required fields, example:
     * `{ value: 'test', label: 'text', style: {}, slotData: {} }`
     */
    data: {
      type: PropType<QSliderPropData>;
      required: true;
    };
    /**
     * Slider's tooltip displaying mode:
     * `'hover' | 'always'`.
     * If `null`, the tooltip will be hidden
     */
    tooltipMode: {
      type: PropType<QSliderPropTooltipMode>;
      default: null;
    };
    /**
     *
     * whether Slider steps is visible
     */
    showSteps: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether Slider is disabled
     */
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
      /**
       * binding value
       */
      modelValue: {
        type: PropType<QSliderPropModelValue>;
        default: null;
      };
      /**
       * array of objects with required fields, example:
       * `{ value: 'test', label: 'text', style: {}, slotData: {} }`
       */
      data: {
        type: PropType<QSliderPropData>;
        required: true;
      };
      /**
       * Slider's tooltip displaying mode:
       * `'hover' | 'always'`.
       * If `null`, the tooltip will be hidden
       */
      tooltipMode: {
        type: PropType<QSliderPropTooltipMode>;
        default: null;
      };
      /**
       *
       * whether Slider steps is visible
       */
      showSteps: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether Slider is disabled
       */
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
>;
declare const _default: typeof __VLS_export;
export default _default;
