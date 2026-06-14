import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QIconPropName,
  QIconPropSize,
  QIconPropColor,
  QIconPropSpin,
  QIconPropAriaLabel
} from '.';
export declare const QIcon: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      name: {
        type: PropType<QIconPropName>;
        required: true;
      };
      size: {
        type: PropType<QIconPropSize>;
        default: string;
        validator: (value: QIconPropSize) => boolean;
      };
      color: {
        type: PropType<QIconPropColor>;
        default: null;
      };
      spin: {
        type: PropType<QIconPropSpin>;
        default: boolean;
      };
      ariaLabel: {
        type: PropType<QIconPropAriaLabel>;
        default: null;
      };
    }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        name: {
          type: PropType<QIconPropName>;
          required: true;
        };
        size: {
          type: PropType<QIconPropSize>;
          default: string;
          validator: (value: QIconPropSize) => boolean;
        };
        color: {
          type: PropType<QIconPropColor>;
          default: null;
        };
        spin: {
          type: PropType<QIconPropSpin>;
          default: boolean;
        };
        ariaLabel: {
          type: PropType<QIconPropAriaLabel>;
          default: null;
        };
      }>
    > &
      Readonly<{}>,
    {
      size: QIconPropSize;
      ariaLabel: QIconPropAriaLabel;
      color: QIconPropColor;
      spin: QIconPropSpin;
    },
    {},
    {},
    {},
    string,
    ComponentProvideOptions,
    true,
    {},
    any
  >
>;
export { Q_ICON_NAMES } from './src/constants';
export type { QIconName } from './src/constants';
export { resolveIconClass } from './src/utils';
export type {
  QIconProps,
  QIconInstance,
  QIconPropName,
  QIconPropSize,
  QIconPropColor,
  QIconPropSpin,
  QIconPropAriaLabel
} from './src/types';
