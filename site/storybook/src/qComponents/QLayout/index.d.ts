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
import { QContainerPropSize } from '.';
export declare const QContainer: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          size: {
            type: PropType<QContainerPropSize>;
            default: string;
            validator: (value: QContainerPropSize) => boolean;
          };
          fluid: {
            type: BooleanConstructor;
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
        size: QContainerPropSize;
        fluid: boolean;
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
          size: {
            type: PropType<QContainerPropSize>;
            default: string;
            validator: (value: QContainerPropSize) => boolean;
          };
          fluid: {
            type: BooleanConstructor;
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
        size: QContainerPropSize;
        fluid: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        size: {
          type: PropType<QContainerPropSize>;
          default: string;
          validator: (value: QContainerPropSize) => boolean;
        };
        fluid: {
          type: BooleanConstructor;
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
      size: QContainerPropSize;
      fluid: boolean;
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
export declare const QLayout: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          hasSider: {
            type: BooleanConstructor;
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
        hasSider: boolean;
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
          hasSider: {
            type: BooleanConstructor;
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
        hasSider: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        hasSider: {
          type: BooleanConstructor;
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
      hasSider: boolean;
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
        header?: (props: {}) => any;
      } & {
        sidebar?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      } & {
        footer?: (props: {}) => any;
      };
    })
>;
export declare const QHeader: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          fixed: {
            type: BooleanConstructor;
            default: boolean;
          };
          height: {
            type: (StringConstructor | NumberConstructor)[];
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
        fixed: boolean;
        height: string | number;
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
          fixed: {
            type: BooleanConstructor;
            default: boolean;
          };
          height: {
            type: (StringConstructor | NumberConstructor)[];
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
        fixed: boolean;
        height: string | number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        fixed: {
          type: BooleanConstructor;
          default: boolean;
        };
        height: {
          type: (StringConstructor | NumberConstructor)[];
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
      fixed: boolean;
      height: string | number;
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
export declare const QSidebar: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          width: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
          };
          collapsed: {
            type: BooleanConstructor;
            default: boolean;
          };
          collapsible: {
            type: BooleanConstructor;
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
        width: string | number;
        collapsed: boolean;
        collapsible: boolean;
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
          width: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
          };
          collapsed: {
            type: BooleanConstructor;
            default: boolean;
          };
          collapsible: {
            type: BooleanConstructor;
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
        width: string | number;
        collapsed: boolean;
        collapsible: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        width: {
          type: (StringConstructor | NumberConstructor)[];
          default: number;
        };
        collapsed: {
          type: BooleanConstructor;
          default: boolean;
        };
        collapsible: {
          type: BooleanConstructor;
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
      width: string | number;
      collapsed: boolean;
      collapsible: boolean;
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
export declare const QFooter: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          fixed: {
            type: BooleanConstructor;
            default: boolean;
          };
          height: {
            type: (StringConstructor | NumberConstructor)[];
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
        fixed: boolean;
        height: string | number;
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
          fixed: {
            type: BooleanConstructor;
            default: boolean;
          };
          height: {
            type: (StringConstructor | NumberConstructor)[];
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
        fixed: boolean;
        height: string | number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        fixed: {
          type: BooleanConstructor;
          default: boolean;
        };
        height: {
          type: (StringConstructor | NumberConstructor)[];
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
      fixed: boolean;
      height: string | number;
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
export type { QContainerPropSize } from './src/QContainer.vue';
