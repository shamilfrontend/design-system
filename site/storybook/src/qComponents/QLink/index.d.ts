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
import {
  QLinkPropType,
  QLinkPropUnderline,
  QLinkPropDisabled,
  QLinkPropHref,
  QLinkPropTarget
} from '.';
export declare const QLink: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          type: {
            type: PropType<QLinkPropType>;
            default: string;
            validator: (value: QLinkPropType) => boolean;
          };
          underline: {
            type: PropType<QLinkPropUnderline>;
            default: boolean;
          };
          disabled: {
            type: PropType<QLinkPropDisabled>;
            default: boolean;
          };
          href: {
            type: PropType<QLinkPropHref>;
            default: null;
          };
          target: {
            type: PropType<QLinkPropTarget>;
            default: string;
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
        type: QLinkPropType;
        disabled: boolean;
        underline: boolean;
        href: QLinkPropHref;
        target: QLinkPropTarget;
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
          type: {
            type: PropType<QLinkPropType>;
            default: string;
            validator: (value: QLinkPropType) => boolean;
          };
          underline: {
            type: PropType<QLinkPropUnderline>;
            default: boolean;
          };
          disabled: {
            type: PropType<QLinkPropDisabled>;
            default: boolean;
          };
          href: {
            type: PropType<QLinkPropHref>;
            default: null;
          };
          target: {
            type: PropType<QLinkPropTarget>;
            default: string;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        type: QLinkPropType;
        disabled: boolean;
        underline: boolean;
        href: QLinkPropHref;
        target: QLinkPropTarget;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        type: {
          type: PropType<QLinkPropType>;
          default: string;
          validator: (value: QLinkPropType) => boolean;
        };
        underline: {
          type: PropType<QLinkPropUnderline>;
          default: boolean;
        };
        disabled: {
          type: PropType<QLinkPropDisabled>;
          default: boolean;
        };
        href: {
          type: PropType<QLinkPropHref>;
          default: null;
        };
        target: {
          type: PropType<QLinkPropTarget>;
          default: string;
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
      type: QLinkPropType;
      disabled: boolean;
      underline: boolean;
      href: QLinkPropHref;
      target: QLinkPropTarget;
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
      } & {
        default?: (props: {}) => any;
      };
    })
>;
export type {
  QLinkProps,
  QLinkPropType,
  QLinkPropUnderline,
  QLinkPropDisabled,
  QLinkPropHref,
  QLinkPropTarget
} from './src/types';
