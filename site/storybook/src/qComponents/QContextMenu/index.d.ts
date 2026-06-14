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
  QContextMenuPropMenuItems,
  QContextMenuPropPosition,
  QContextMenuPropTeleportTo
} from './src/types';
export declare const QContextMenu: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          menuItems: {
            type: PropType<QContextMenuPropMenuItems>;
            required: true;
          };
          position: {
            type: PropType<QContextMenuPropPosition>;
            default: string;
            validator: (value: QContextMenuPropPosition) => boolean;
          };
          teleportTo: {
            type: PropType<QContextMenuPropTeleportTo>;
            default: null;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{
          onAction?: ((actionName: string) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        action: (actionName: string) => any;
      },
      PublicProps,
      {
        ariaLabel: string;
        position: QContextMenuPropPosition;
        teleportTo: QContextMenuPropTeleportTo;
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
          menuItems: {
            type: PropType<QContextMenuPropMenuItems>;
            required: true;
          };
          position: {
            type: PropType<QContextMenuPropPosition>;
            default: string;
            validator: (value: QContextMenuPropPosition) => boolean;
          };
          teleportTo: {
            type: PropType<QContextMenuPropTeleportTo>;
            default: null;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{
          onAction?: ((actionName: string) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        ariaLabel: string;
        position: QContextMenuPropPosition;
        teleportTo: QContextMenuPropTeleportTo;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        menuItems: {
          type: PropType<QContextMenuPropMenuItems>;
          required: true;
        };
        position: {
          type: PropType<QContextMenuPropPosition>;
          default: string;
          validator: (value: QContextMenuPropPosition) => boolean;
        };
        teleportTo: {
          type: PropType<QContextMenuPropTeleportTo>;
          default: null;
        };
        ariaLabel: {
          type: StringConstructor;
          default: null;
        };
      }>
    > &
      Readonly<{
        onAction?: ((actionName: string) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      action: (actionName: string) => any;
    },
    string,
    {
      ariaLabel: string;
      position: QContextMenuPropPosition;
      teleportTo: QContextMenuPropTeleportTo;
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
export type { QContextMenuProps, QContextMenuInstance } from './src/types';
