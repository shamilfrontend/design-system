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
  QAlertPropType,
  QAlertPropTitle,
  QAlertPropClosable,
  QAlertPropShowIcon,
  QAlertPropAriaLabel
} from '.';
export declare const QAlert: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          type: {
            type: PropType<QAlertPropType>;
            default: string;
            validator: (
              value: 'success' | 'warning' | 'info' | 'error'
            ) => boolean;
          };
          title: {
            type: PropType<QAlertPropTitle>;
            default: null;
          };
          closable: {
            type: PropType<QAlertPropClosable>;
            default: boolean;
          };
          showIcon: {
            type: PropType<QAlertPropShowIcon>;
            default: boolean;
          };
          ariaLabel: {
            type: PropType<QAlertPropAriaLabel>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClose?: ((event: MouseEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        close: (event: MouseEvent) => any;
      },
      PublicProps,
      {
        type: QAlertPropType;
        title: QAlertPropTitle;
        closable: QAlertPropClosable;
        showIcon: QAlertPropShowIcon;
        ariaLabel: QAlertPropAriaLabel;
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
            type: PropType<QAlertPropType>;
            default: string;
            validator: (
              value: 'success' | 'warning' | 'info' | 'error'
            ) => boolean;
          };
          title: {
            type: PropType<QAlertPropTitle>;
            default: null;
          };
          closable: {
            type: PropType<QAlertPropClosable>;
            default: boolean;
          };
          showIcon: {
            type: PropType<QAlertPropShowIcon>;
            default: boolean;
          };
          ariaLabel: {
            type: PropType<QAlertPropAriaLabel>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClose?: ((event: MouseEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        type: QAlertPropType;
        title: QAlertPropTitle;
        closable: QAlertPropClosable;
        showIcon: QAlertPropShowIcon;
        ariaLabel: QAlertPropAriaLabel;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        type: {
          type: PropType<QAlertPropType>;
          default: string;
          validator: (
            value: 'success' | 'warning' | 'info' | 'error'
          ) => boolean;
        };
        title: {
          type: PropType<QAlertPropTitle>;
          default: null;
        };
        closable: {
          type: PropType<QAlertPropClosable>;
          default: boolean;
        };
        showIcon: {
          type: PropType<QAlertPropShowIcon>;
          default: boolean;
        };
        ariaLabel: {
          type: PropType<QAlertPropAriaLabel>;
          default: null;
        };
      }>
    > &
      Readonly<{
        onClose?: ((event: MouseEvent) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      close: (event: MouseEvent) => any;
    },
    string,
    {
      type: QAlertPropType;
      title: QAlertPropTitle;
      closable: QAlertPropClosable;
      showIcon: QAlertPropShowIcon;
      ariaLabel: QAlertPropAriaLabel;
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
  QAlertProps,
  QAlertInstance,
  QAlertPropType,
  QAlertPropTitle,
  QAlertPropClosable,
  QAlertPropShowIcon,
  QAlertPropAriaLabel
} from './src/types';
