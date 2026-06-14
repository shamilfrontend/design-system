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
import { QAffixPropOffsetTop } from '.';
export declare const QAffix: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          offsetTop: {
            type: PropType<QAffixPropOffsetTop>;
            default: number;
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
        offsetTop: number;
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
          offsetTop: {
            type: PropType<QAffixPropOffsetTop>;
            default: number;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        offsetTop: number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        offsetTop: {
          type: PropType<QAffixPropOffsetTop>;
          default: number;
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
      offsetTop: number;
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
export type { QAffixProps, QAffixPropOffsetTop } from './src/types';
