import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QSwitchEmitValueType } from './src/types';
export declare const QSwitch: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
      };
      activeValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
      };
      inactiveValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      loading: {
        type: BooleanConstructor;
        default: boolean;
      };
      validateEvent: {
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
      'update:modelValue': (value: QSwitchEmitValueType) => any;
      change: (value: QSwitchEmitValueType) => any;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
          default: boolean;
        };
        activeValue: {
          type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
          default: boolean;
        };
        inactiveValue: {
          type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
          default: boolean;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        loading: {
          type: BooleanConstructor;
          default: boolean;
        };
        validateEvent: {
          type: BooleanConstructor;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?:
          | ((value: QSwitchEmitValueType) => any)
          | undefined;
        onChange?: ((value: QSwitchEmitValueType) => any) | undefined;
      }>,
    {
      loading: boolean;
      disabled: boolean;
      modelValue: string | number | boolean;
      validateEvent: boolean;
      activeValue: string | number | boolean;
      inactiveValue: string | number | boolean;
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
  QSwitchPropModelValue,
  QSwitchPropActiveValue,
  QSwitchPropInactiveValue,
  QSwitchProps
} from './src/types';
