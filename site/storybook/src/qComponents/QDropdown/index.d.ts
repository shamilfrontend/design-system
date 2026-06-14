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
  QDropdownPropTrigger,
  QDropdownPropPlacement,
  QDropdownPropPopperOptions,
  QDropdownPropTeleportTo
} from '.';
import { Placement, Options } from '@popperjs/core';
export declare const QDropdown: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          trigger: {
            type: PropType<QDropdownPropTrigger>;
            default: string;
            validator: (value: QDropdownPropTrigger) => boolean;
          };
          placement: {
            type: PropType<QDropdownPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          popperOptions: {
            type: PropType<QDropdownPropPopperOptions>;
            default: () => QDropdownPropPopperOptions;
          };
          teleportTo: {
            type: PropType<QDropdownPropTeleportTo>;
            default: string;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          hideOnClick: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          onVisibleChange?: ((visible: boolean) => any) | undefined;
          onCommand?: ((command: string) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        visibleChange: (visible: boolean) => any;
        command: (command: string) => any;
      },
      PublicProps,
      {
        trigger: QDropdownPropTrigger;
        disabled: boolean;
        placement: Placement;
        teleportTo: QDropdownPropTeleportTo;
        popperOptions: Partial<Options>;
        hideOnClick: boolean;
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
          trigger: {
            type: PropType<QDropdownPropTrigger>;
            default: string;
            validator: (value: QDropdownPropTrigger) => boolean;
          };
          placement: {
            type: PropType<QDropdownPropPlacement>;
            default: string;
            validator: (value: Placement) => boolean;
          };
          popperOptions: {
            type: PropType<QDropdownPropPopperOptions>;
            default: () => QDropdownPropPopperOptions;
          };
          teleportTo: {
            type: PropType<QDropdownPropTeleportTo>;
            default: string;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          hideOnClick: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          onVisibleChange?: ((visible: boolean) => any) | undefined;
          onCommand?: ((command: string) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        trigger: QDropdownPropTrigger;
        disabled: boolean;
        placement: Placement;
        teleportTo: QDropdownPropTeleportTo;
        popperOptions: Partial<Options>;
        hideOnClick: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        trigger: {
          type: PropType<QDropdownPropTrigger>;
          default: string;
          validator: (value: QDropdownPropTrigger) => boolean;
        };
        placement: {
          type: PropType<QDropdownPropPlacement>;
          default: string;
          validator: (value: Placement) => boolean;
        };
        popperOptions: {
          type: PropType<QDropdownPropPopperOptions>;
          default: () => QDropdownPropPopperOptions;
        };
        teleportTo: {
          type: PropType<QDropdownPropTeleportTo>;
          default: string;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        hideOnClick: {
          type: BooleanConstructor;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        onVisibleChange?: ((visible: boolean) => any) | undefined;
        onCommand?: ((command: string) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      visibleChange: (visible: boolean) => any;
      command: (command: string) => any;
    },
    string,
    {
      trigger: QDropdownPropTrigger;
      disabled: boolean;
      placement: Placement;
      teleportTo: QDropdownPropTeleportTo;
      popperOptions: Partial<Options>;
      hideOnClick: boolean;
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
        dropdown?: (props: {}) => any;
      };
    })
>;
export { Q_DROPDOWN_INJECTION_KEY } from './src/constants';
export type { QDropdownContext } from './src/constants';
export type {
  QDropdownProps,
  QDropdownPropTrigger,
  QDropdownPropPlacement,
  QDropdownPropPopperOptions,
  QDropdownPropTeleportTo,
  QDropdownPropDisabled,
  QDropdownPropHideOnClick
} from './src/types';
