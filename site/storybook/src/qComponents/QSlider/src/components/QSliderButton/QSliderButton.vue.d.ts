import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QSliderPropModelValue, QSliderPropTooltipMode } from '../../types';
import {
  QSliderButtonPropPosition,
  QSliderButtonPropPathLeft,
  QSliderButtonPropPathWidth
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    position: {
      type: PropType<QSliderButtonPropPosition>;
      default: null;
    };
    pathLeft: {
      type: PropType<QSliderButtonPropPathLeft>;
      default: null;
    };
    pathWidth: {
      type: PropType<QSliderButtonPropPathWidth>;
      default: null;
    };
    tooltipMode: {
      type: PropType<QSliderPropTooltipMode>;
      default: null;
    };
    currentValue: {
      type: PropType<QSliderPropModelValue>;
      default: null;
    };
    currentIndex: {
      type: NumberConstructor;
      default: number;
    };
    valueMin: {
      type: NumberConstructor;
      default: number;
    };
    valueMax: {
      type: NumberConstructor;
      default: number;
    };
    disabled: {
      type: BooleanConstructor;
      required: true;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    'update:position': (percent: number) => any;
    'drag-start': () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      position: {
        type: PropType<QSliderButtonPropPosition>;
        default: null;
      };
      pathLeft: {
        type: PropType<QSliderButtonPropPathLeft>;
        default: null;
      };
      pathWidth: {
        type: PropType<QSliderButtonPropPathWidth>;
        default: null;
      };
      tooltipMode: {
        type: PropType<QSliderPropTooltipMode>;
        default: null;
      };
      currentValue: {
        type: PropType<QSliderPropModelValue>;
        default: null;
      };
      currentIndex: {
        type: NumberConstructor;
        default: number;
      };
      valueMin: {
        type: NumberConstructor;
        default: number;
      };
      valueMax: {
        type: NumberConstructor;
        default: number;
      };
      disabled: {
        type: BooleanConstructor;
        required: true;
      };
    }>
  > &
    Readonly<{
      'onUpdate:position'?: ((percent: number) => any) | undefined;
      'onDrag-start'?: (() => any) | undefined;
    }>,
  {
    currentIndex: number;
    position: QSliderButtonPropPosition;
    pathLeft: QSliderButtonPropPathLeft;
    pathWidth: QSliderButtonPropPathWidth;
    tooltipMode: QSliderPropTooltipMode;
    currentValue: string | number | boolean | null;
    valueMin: number;
    valueMax: number;
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
