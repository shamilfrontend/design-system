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
  QTransferPropModelValue,
  QTransferPropData,
  QTransferPropTitles
} from '.';
export declare const QTransfer: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QTransferPropModelValue>;
        default: () => QTransferPropModelValue;
      };
      data: {
        type: PropType<QTransferPropData>;
        default: () => QTransferPropData;
      };
      titles: {
        type: PropType<QTransferPropTitles>;
        default: null;
      };
    }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (value: QTransferPropModelValue) => any;
      change: (value: QTransferPropModelValue) => any;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QTransferPropModelValue>;
          default: () => QTransferPropModelValue;
        };
        data: {
          type: PropType<QTransferPropData>;
          default: () => QTransferPropData;
        };
        titles: {
          type: PropType<QTransferPropTitles>;
          default: null;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?:
          | ((value: QTransferPropModelValue) => any)
          | undefined;
        onChange?: ((value: QTransferPropModelValue) => any) | undefined;
      }>,
    {
      data: QTransferPropData;
      modelValue: QTransferPropModelValue;
      titles: QTransferPropTitles;
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
  QTransferProps,
  QTransferItem,
  QTransferPropModelValue,
  QTransferPropData,
  QTransferPropTitles
} from './src/types';
