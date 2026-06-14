import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QStepsItem,
  QStepsPropActive,
  QStepsPropDirection,
  QStepsPropFinishStatus
} from '.';
export declare const QSteps: SFCWithInstall<
  DefineComponent<
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
  >
>;
export type {
  QStepsProps,
  QStepsItem,
  QStepsPropActive,
  QStepsPropDirection,
  QStepsPropFinishStatus
} from './src/types';
