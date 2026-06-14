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
import { QEmptyPropDescription, QEmptyPropImageSize } from '.';
export declare const QEmpty: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          description: {
            type: PropType<QEmptyPropDescription>;
            default: null;
          };
          imageSize: {
            type: PropType<QEmptyPropImageSize>;
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
        description: QEmptyPropDescription;
        imageSize: number;
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
          description: {
            type: PropType<QEmptyPropDescription>;
            default: null;
          };
          imageSize: {
            type: PropType<QEmptyPropImageSize>;
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
        description: QEmptyPropDescription;
        imageSize: number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        description: {
          type: PropType<QEmptyPropDescription>;
          default: null;
        };
        imageSize: {
          type: PropType<QEmptyPropImageSize>;
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
      description: QEmptyPropDescription;
      imageSize: number;
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
        image?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      };
    })
>;
export type {
  QEmptyProps,
  QEmptyPropDescription,
  QEmptyPropImageSize
} from './src/types';
