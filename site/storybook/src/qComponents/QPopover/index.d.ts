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
  QPopoverPropTrigger,
  QPopoverPropPlacement,
  QPopoverPropPopperOptions,
  QPopoverPropTeleportTo
} from './src/types';
import { Placement } from '@popperjs/core';
export declare const QPopover: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          title: {
            type: StringConstructor;
            default: null;
          };
          trigger: {
            type: PropType<QPopoverPropTrigger>;
            default: string;
            validator: (value: QPopoverPropTrigger) => boolean;
          };
          placement: {
            type: PropType<QPopoverPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          icon: {
            type: StringConstructor;
            default: null;
          };
          iconColor: {
            type: StringConstructor;
            default: string;
          };
          transition: {
            type: StringConstructor;
            default: string;
          };
          openDelay: {
            type: NumberConstructor;
            default: number;
          };
          closeDelay: {
            type: NumberConstructor;
            default: number;
          };
          minWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          maxWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          popperOptions: {
            type: PropType<QPopoverPropPopperOptions>;
            default: () => QPopoverPropPopperOptions;
          };
          teleportTo: {
            type: PropType<QPopoverPropTeleportTo>;
            default: string;
          };
        }>
      > &
        Readonly<{
          onHide?: (() => any) | undefined;
          onShow?: (() => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        hide: () => any;
        show: () => any;
      },
      PublicProps,
      {
        title: string;
        trigger: QPopoverPropTrigger;
        transition: string;
        placement: Placement;
        icon: string;
        maxWidth: string | number;
        minWidth: string | number;
        teleportTo: QPopoverPropTeleportTo;
        popperOptions: QPopoverPropPopperOptions;
        iconColor: string;
        openDelay: number;
        closeDelay: number;
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
          title: {
            type: StringConstructor;
            default: null;
          };
          trigger: {
            type: PropType<QPopoverPropTrigger>;
            default: string;
            validator: (value: QPopoverPropTrigger) => boolean;
          };
          placement: {
            type: PropType<QPopoverPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          icon: {
            type: StringConstructor;
            default: null;
          };
          iconColor: {
            type: StringConstructor;
            default: string;
          };
          transition: {
            type: StringConstructor;
            default: string;
          };
          openDelay: {
            type: NumberConstructor;
            default: number;
          };
          closeDelay: {
            type: NumberConstructor;
            default: number;
          };
          minWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          maxWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          popperOptions: {
            type: PropType<QPopoverPropPopperOptions>;
            default: () => QPopoverPropPopperOptions;
          };
          teleportTo: {
            type: PropType<QPopoverPropTeleportTo>;
            default: string;
          };
        }>
      > &
        Readonly<{
          onHide?: (() => any) | undefined;
          onShow?: (() => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        title: string;
        trigger: QPopoverPropTrigger;
        transition: string;
        placement: Placement;
        icon: string;
        maxWidth: string | number;
        minWidth: string | number;
        teleportTo: QPopoverPropTeleportTo;
        popperOptions: QPopoverPropPopperOptions;
        iconColor: string;
        openDelay: number;
        closeDelay: number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        title: {
          type: StringConstructor;
          default: null;
        };
        trigger: {
          type: PropType<QPopoverPropTrigger>;
          default: string;
          validator: (value: QPopoverPropTrigger) => boolean;
        };
        placement: {
          type: PropType<QPopoverPropPlacement>;
          default: string;
          validator: (value: Placement) => boolean;
        };
        icon: {
          type: StringConstructor;
          default: null;
        };
        iconColor: {
          type: StringConstructor;
          default: string;
        };
        transition: {
          type: StringConstructor;
          default: string;
        };
        openDelay: {
          type: NumberConstructor;
          default: number;
        };
        closeDelay: {
          type: NumberConstructor;
          default: number;
        };
        minWidth: {
          type: (StringConstructor | NumberConstructor)[];
          default: null;
        };
        maxWidth: {
          type: (StringConstructor | NumberConstructor)[];
          default: null;
        };
        popperOptions: {
          type: PropType<QPopoverPropPopperOptions>;
          default: () => QPopoverPropPopperOptions;
        };
        teleportTo: {
          type: PropType<QPopoverPropTeleportTo>;
          default: string;
        };
      }>
    > &
      Readonly<{
        onHide?: (() => any) | undefined;
        onShow?: (() => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      hide: () => any;
      show: () => any;
    },
    string,
    {
      title: string;
      trigger: QPopoverPropTrigger;
      transition: string;
      placement: Placement;
      icon: string;
      maxWidth: string | number;
      minWidth: string | number;
      teleportTo: QPopoverPropTeleportTo;
      popperOptions: QPopoverPropPopperOptions;
      iconColor: string;
      openDelay: number;
      closeDelay: number;
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
        reference?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      };
    })
>;
export type { QPopoverProps, QPopoveInstance } from './src/types';
