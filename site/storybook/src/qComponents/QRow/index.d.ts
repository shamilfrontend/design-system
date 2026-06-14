import { SFCWithInstall, Nullable } from '../../../types/helpers';
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
import { QRowPropAlignV, QRowPropAlignH } from './src/types';
export declare const QRow: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          tag: {
            type: StringConstructor;
            default: string;
          };
          alignV: {
            type: PropType<QRowPropAlignV>;
            default: null;
            validator: (value: Nullable<QRowPropAlignV>) => boolean;
          };
          alignH: {
            type: PropType<QRowPropAlignH>;
            default: null;
            validator: (value: Nullable<QRowPropAlignH>) => boolean;
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
        tag: string;
        alignV: QRowPropAlignV;
        alignH: QRowPropAlignH;
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
          tag: {
            type: StringConstructor;
            default: string;
          };
          alignV: {
            type: PropType<QRowPropAlignV>;
            default: null;
            validator: (value: Nullable<QRowPropAlignV>) => boolean;
          };
          alignH: {
            type: PropType<QRowPropAlignH>;
            default: null;
            validator: (value: Nullable<QRowPropAlignH>) => boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        tag: string;
        alignV: QRowPropAlignV;
        alignH: QRowPropAlignH;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        tag: {
          type: StringConstructor;
          default: string;
        };
        alignV: {
          type: PropType<QRowPropAlignV>;
          default: null;
          validator: (value: Nullable<QRowPropAlignV>) => boolean;
        };
        alignH: {
          type: PropType<QRowPropAlignH>;
          default: null;
          validator: (value: Nullable<QRowPropAlignH>) => boolean;
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
      tag: string;
      alignV: QRowPropAlignV;
      alignH: QRowPropAlignH;
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
export type { QRowProps, QRowInstance } from './src/types';
