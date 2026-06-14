import { SFCWithInstall } from '../../../types/helpers';
import {
  CreateComponentPublicInstanceWithMixins,
  ComponentOptionsMixin,
  PublicProps,
  GlobalComponents,
  GlobalDirectives,
  ComponentProvideOptions,
  ComponentOptionsBase,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
  ExtractPropTypes,
  PropType
} from 'vue';
import {
  QMenuItemPropDisabled,
  QMenuItemPropDivided,
  QMenuItemPropIcon,
  QMenuItemPropCommand
} from '.';
export declare const QMenu: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<{}> & Readonly<{}>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      PublicProps,
      {},
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
      Readonly<{}> & Readonly<{}>,
      {},
      {},
      {},
      {},
      {}
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<{}> & Readonly<{}>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    {},
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
export declare const QMenuItem: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          disabled: {
            type: PropType<QMenuItemPropDisabled>;
            default: boolean;
          };
          divided: {
            type: PropType<QMenuItemPropDivided>;
            default: boolean;
          };
          icon: {
            type: PropType<QMenuItemPropIcon>;
            default: null;
          };
          command: {
            type: PropType<QMenuItemPropCommand>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClick?: ((event: MouseEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        click: (event: MouseEvent) => any;
      },
      PublicProps,
      {
        disabled: boolean;
        icon: QMenuItemPropIcon;
        command: QMenuItemPropCommand;
        divided: boolean;
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
          disabled: {
            type: PropType<QMenuItemPropDisabled>;
            default: boolean;
          };
          divided: {
            type: PropType<QMenuItemPropDivided>;
            default: boolean;
          };
          icon: {
            type: PropType<QMenuItemPropIcon>;
            default: null;
          };
          command: {
            type: PropType<QMenuItemPropCommand>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClick?: ((event: MouseEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        disabled: boolean;
        icon: QMenuItemPropIcon;
        command: QMenuItemPropCommand;
        divided: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        disabled: {
          type: PropType<QMenuItemPropDisabled>;
          default: boolean;
        };
        divided: {
          type: PropType<QMenuItemPropDivided>;
          default: boolean;
        };
        icon: {
          type: PropType<QMenuItemPropIcon>;
          default: null;
        };
        command: {
          type: PropType<QMenuItemPropCommand>;
          default: null;
        };
      }>
    > &
      Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      click: (event: MouseEvent) => any;
    },
    string,
    {
      disabled: boolean;
      icon: QMenuItemPropIcon;
      command: QMenuItemPropCommand;
      divided: boolean;
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
  QMenuItemProps,
  QMenuItemPropCommand,
  QMenuItemPropDisabled,
  QMenuItemPropDivided,
  QMenuItemPropIcon
} from './src/types';
