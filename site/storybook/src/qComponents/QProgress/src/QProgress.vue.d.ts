import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QProgressPropIndeterminate,
  QProgressPropPercentage,
  QProgressPropShowText,
  QProgressPropStatus,
  QProgressPropStrokeWidth,
  QProgressPropType
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    type: {
      type: PropType<QProgressPropType>;
      default: string;
      validator: (value: QProgressPropType) => boolean;
    };
    percentage: {
      type: PropType<QProgressPropPercentage>;
      default: number;
    };
    status: {
      type: PropType<QProgressPropStatus>;
      default: null;
      validator: (value: QProgressPropStatus) => boolean;
    };
    strokeWidth: {
      type: PropType<QProgressPropStrokeWidth>;
      default: number;
    };
    showText: {
      type: PropType<QProgressPropShowText>;
      default: boolean;
    };
    indeterminate: {
      type: PropType<QProgressPropIndeterminate>;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      type: {
        type: PropType<QProgressPropType>;
        default: string;
        validator: (value: QProgressPropType) => boolean;
      };
      percentage: {
        type: PropType<QProgressPropPercentage>;
        default: number;
      };
      status: {
        type: PropType<QProgressPropStatus>;
        default: null;
        validator: (value: QProgressPropStatus) => boolean;
      };
      strokeWidth: {
        type: PropType<QProgressPropStrokeWidth>;
        default: number;
      };
      showText: {
        type: PropType<QProgressPropShowText>;
        default: boolean;
      };
      indeterminate: {
        type: PropType<QProgressPropIndeterminate>;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    type: QProgressPropType;
    strokeWidth: number;
    indeterminate: boolean;
    status: QProgressPropStatus;
    percentage: number;
    showText: boolean;
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
