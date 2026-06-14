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
  QTreeSelectPropModelValue,
  QTreeSelectPropData,
  QTreeSelectPropMultiple,
  QTreeSelectPropPlaceholder,
  QTreeSelectPropDisabled,
  QTreeSelectPropClearable,
  QTreeSelectPropCheckStrictly
} from '.';
export declare const QTreeSelect: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QTreeSelectPropModelValue>;
        default: null;
      };
      data: {
        type: PropType<QTreeSelectPropData>;
        default: () => QTreeSelectPropData;
      };
      multiple: {
        type: PropType<QTreeSelectPropMultiple>;
        default: boolean;
      };
      placeholder: {
        type: PropType<QTreeSelectPropPlaceholder>;
        default: null;
      };
      disabled: {
        type: PropType<QTreeSelectPropDisabled>;
        default: boolean;
      };
      clearable: {
        type: PropType<QTreeSelectPropClearable>;
        default: boolean;
      };
      checkStrictly: {
        type: PropType<QTreeSelectPropCheckStrictly>;
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
      'update:modelValue': (value: QTreeSelectPropModelValue) => any;
      change: (value: QTreeSelectPropModelValue) => any;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QTreeSelectPropModelValue>;
          default: null;
        };
        data: {
          type: PropType<QTreeSelectPropData>;
          default: () => QTreeSelectPropData;
        };
        multiple: {
          type: PropType<QTreeSelectPropMultiple>;
          default: boolean;
        };
        placeholder: {
          type: PropType<QTreeSelectPropPlaceholder>;
          default: null;
        };
        disabled: {
          type: PropType<QTreeSelectPropDisabled>;
          default: boolean;
        };
        clearable: {
          type: PropType<QTreeSelectPropClearable>;
          default: boolean;
        };
        checkStrictly: {
          type: PropType<QTreeSelectPropCheckStrictly>;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?:
          | ((value: QTreeSelectPropModelValue) => any)
          | undefined;
        onChange?: ((value: QTreeSelectPropModelValue) => any) | undefined;
      }>,
    {
      data: QTreeSelectPropData;
      disabled: boolean;
      modelValue: QTreeSelectPropModelValue;
      clearable: boolean;
      placeholder: QTreeSelectPropPlaceholder;
      multiple: boolean;
      checkStrictly: boolean;
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
  QTreeSelectProps,
  QTreeSelectPropModelValue,
  QTreeSelectPropData,
  QTreeSelectPropMultiple,
  QTreeSelectPropPlaceholder,
  QTreeSelectPropDisabled,
  QTreeSelectPropClearable,
  QTreeSelectPropCheckStrictly
} from './src/types';
