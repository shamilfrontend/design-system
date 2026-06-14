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
  QTooltipPropContent,
  QTooltipPropPlacement,
  QTooltipPropEffect,
  QTooltipPropDisabled,
  QTooltipPropOpenDelay,
  QTooltipPropCloseDelay,
  QTooltipPropTeleportTo,
  QTooltipPropPopperOptions
} from '.';
import { Placement } from '@popperjs/core';
export declare const QTooltip: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          content: {
            type: PropType<QTooltipPropContent>;
            default: null;
          };
          placement: {
            type: PropType<QTooltipPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          effect: {
            type: PropType<QTooltipPropEffect>;
            default: string;
            validator: (value: QTooltipPropEffect) => boolean;
          };
          disabled: {
            type: PropType<QTooltipPropDisabled>;
            default: boolean;
          };
          openDelay: {
            type: PropType<QTooltipPropOpenDelay>;
            default: number;
          };
          closeDelay: {
            type: PropType<QTooltipPropCloseDelay>;
            default: number;
          };
          teleportTo: {
            type: PropType<QTooltipPropTeleportTo>;
            default: string;
          };
          popperOptions: {
            type: PropType<QTooltipPropPopperOptions>;
            default: () => QTooltipPropPopperOptions;
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
        disabled: QTooltipPropDisabled;
        placement: Placement;
        effect: QTooltipPropEffect;
        content: QTooltipPropContent;
        teleportTo: QTooltipPropTeleportTo;
        popperOptions: QTooltipPropPopperOptions;
        openDelay: QTooltipPropOpenDelay;
        closeDelay: QTooltipPropCloseDelay;
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
          content: {
            type: PropType<QTooltipPropContent>;
            default: null;
          };
          placement: {
            type: PropType<QTooltipPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          effect: {
            type: PropType<QTooltipPropEffect>;
            default: string;
            validator: (value: QTooltipPropEffect) => boolean;
          };
          disabled: {
            type: PropType<QTooltipPropDisabled>;
            default: boolean;
          };
          openDelay: {
            type: PropType<QTooltipPropOpenDelay>;
            default: number;
          };
          closeDelay: {
            type: PropType<QTooltipPropCloseDelay>;
            default: number;
          };
          teleportTo: {
            type: PropType<QTooltipPropTeleportTo>;
            default: string;
          };
          popperOptions: {
            type: PropType<QTooltipPropPopperOptions>;
            default: () => QTooltipPropPopperOptions;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        disabled: QTooltipPropDisabled;
        placement: Placement;
        effect: QTooltipPropEffect;
        content: QTooltipPropContent;
        teleportTo: QTooltipPropTeleportTo;
        popperOptions: QTooltipPropPopperOptions;
        openDelay: QTooltipPropOpenDelay;
        closeDelay: QTooltipPropCloseDelay;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        content: {
          type: PropType<QTooltipPropContent>;
          default: null;
        };
        placement: {
          type: PropType<QTooltipPropPlacement>;
          default: string;
          validator: (value: Placement) => boolean;
        };
        effect: {
          type: PropType<QTooltipPropEffect>;
          default: string;
          validator: (value: QTooltipPropEffect) => boolean;
        };
        disabled: {
          type: PropType<QTooltipPropDisabled>;
          default: boolean;
        };
        openDelay: {
          type: PropType<QTooltipPropOpenDelay>;
          default: number;
        };
        closeDelay: {
          type: PropType<QTooltipPropCloseDelay>;
          default: number;
        };
        teleportTo: {
          type: PropType<QTooltipPropTeleportTo>;
          default: string;
        };
        popperOptions: {
          type: PropType<QTooltipPropPopperOptions>;
          default: () => QTooltipPropPopperOptions;
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
      disabled: QTooltipPropDisabled;
      placement: Placement;
      effect: QTooltipPropEffect;
      content: QTooltipPropContent;
      teleportTo: QTooltipPropTeleportTo;
      popperOptions: QTooltipPropPopperOptions;
      openDelay: QTooltipPropOpenDelay;
      closeDelay: QTooltipPropCloseDelay;
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
        content?: (props: {}) => any;
      };
    })
>;
export type {
  QTooltipProps,
  QTooltipInstance,
  QTooltipPropContent,
  QTooltipPropPlacement,
  QTooltipPropEffect,
  QTooltipPropDisabled,
  QTooltipPropOpenDelay,
  QTooltipPropCloseDelay,
  QTooltipPropTeleportTo,
  QTooltipPropPopperOptions
} from './src/types';
