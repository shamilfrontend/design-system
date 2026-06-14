import { SFCWithInstall } from '../../../types/helpers';
import {
  CreateComponentPublicInstanceWithMixins,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  GlobalComponents,
  GlobalDirectives,
  ComponentProvideOptions,
  ComponentOptionsBase,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps
} from 'vue';
import { QOptionPropValue } from '.';
import {
  QOptionPropLabel,
  QOptionPropCreated,
  QOptionPropDisabled
} from './src/types';
export declare const QOption: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          value: {
            type: PropType<QOptionPropValue>;
            required: true;
          };
          label: {
            type: PropType<QOptionPropLabel>;
            default: null;
          };
          created: {
            type: PropType<QOptionPropCreated>;
            default: boolean;
          };
          disabled: {
            type: PropType<QOptionPropDisabled>;
            default: boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      PublicProps,
      {
        created: QOptionPropCreated;
        label: QOptionPropLabel;
        disabled: QOptionPropDisabled;
      },
      true,
      {},
      {},
      GlobalComponents,
      GlobalDirectives,
      string,
      {},
      any,
      ComponentProvideOptions,
      {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
      },
      Readonly<
        ExtractPropTypes<{
          value: {
            type: PropType<QOptionPropValue>;
            required: true;
          };
          label: {
            type: PropType<QOptionPropLabel>;
            default: null;
          };
          created: {
            type: PropType<QOptionPropCreated>;
            default: boolean;
          };
          disabled: {
            type: PropType<QOptionPropDisabled>;
            default: boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        created: QOptionPropCreated;
        label: QOptionPropLabel;
        disabled: QOptionPropDisabled;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        value: {
          type: PropType<QOptionPropValue>;
          required: true;
        };
        label: {
          type: PropType<QOptionPropLabel>;
          default: null;
        };
        created: {
          type: PropType<QOptionPropCreated>;
          default: boolean;
        };
        disabled: {
          type: PropType<QOptionPropDisabled>;
          default: boolean;
        };
      }>
    > &
      Readonly<{}>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    {
      created: QOptionPropCreated;
      label: QOptionPropLabel;
      disabled: QOptionPropDisabled;
    },
    {},
    string,
    {},
    GlobalComponents,
    GlobalDirectives,
    string,
    ComponentProvideOptions
  > &
    VNodeProps &
    AllowedComponentProps &
    ComponentCustomProps &
    (new () => {
      $slots: {
        default?: (props: {}) => any;
      };
    })
>;
export type {
  QOptionInstance,
  QOptionPropValue,
  QOptionModel,
  QOptionProps
} from './src/types';
