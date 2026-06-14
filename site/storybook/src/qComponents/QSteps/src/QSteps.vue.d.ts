import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QStepsItem,
  QStepsPropActive,
  QStepsPropDirection,
  QStepsPropFinishStatus
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    steps: {
      type: PropType<QStepsItem[]>;
      default: () => QStepsItem[];
    };
    active: {
      type: PropType<QStepsPropActive>;
      default: number;
    };
    direction: {
      type: PropType<QStepsPropDirection>;
      default: string;
      validator: (value: QStepsPropDirection) => boolean;
    };
    finishStatus: {
      type: PropType<QStepsPropFinishStatus>;
      default: string;
      validator: (value: QStepsPropFinishStatus) => boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    'update:active': (value: number) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      steps: {
        type: PropType<QStepsItem[]>;
        default: () => QStepsItem[];
      };
      active: {
        type: PropType<QStepsPropActive>;
        default: number;
      };
      direction: {
        type: PropType<QStepsPropDirection>;
        default: string;
        validator: (value: QStepsPropDirection) => boolean;
      };
      finishStatus: {
        type: PropType<QStepsPropFinishStatus>;
        default: string;
        validator: (value: QStepsPropFinishStatus) => boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:active'?: ((value: number) => any) | undefined;
    }>,
  {
    direction: QStepsPropDirection;
    active: number;
    steps: QStepsItem[];
    finishStatus: QStepsPropFinishStatus;
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
