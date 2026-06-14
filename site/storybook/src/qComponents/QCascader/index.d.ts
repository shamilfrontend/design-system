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
  QCascaderPropModelValue,
  QCascaderPropOptions,
  QCascaderPropTeleportTo
} from './src/types';
export declare const QCascader: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QCascaderPropModelValue>;
        default: null;
      };
      options: {
        type: PropType<QCascaderPropOptions>;
        default: null;
      };
      allLevelsShown: {
        type: BooleanConstructor;
        default: boolean;
      };
      separator: {
        type: StringConstructor;
        default: string;
      };
      multiple: {
        type: BooleanConstructor;
        default: boolean;
      };
      clearable: {
        type: BooleanConstructor;
        default: boolean;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
      };
      collapseTags: {
        type: BooleanConstructor;
        default: boolean;
      };
      placeholder: {
        type: StringConstructor;
        default: null;
      };
      teleportTo: {
        type: PropType<QCascaderPropTeleportTo>;
        default: null;
      };
    }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (...args: any[]) => void;
      change: (...args: any[]) => void;
      'dropdown-close': (...args: any[]) => void;
      'dropdown-expand': (...args: any[]) => void;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QCascaderPropModelValue>;
          default: null;
        };
        options: {
          type: PropType<QCascaderPropOptions>;
          default: null;
        };
        allLevelsShown: {
          type: BooleanConstructor;
          default: boolean;
        };
        separator: {
          type: StringConstructor;
          default: string;
        };
        multiple: {
          type: BooleanConstructor;
          default: boolean;
        };
        clearable: {
          type: BooleanConstructor;
          default: boolean;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        checkStrictly: {
          type: BooleanConstructor;
          default: boolean;
        };
        collapseTags: {
          type: BooleanConstructor;
          default: boolean;
        };
        placeholder: {
          type: StringConstructor;
          default: null;
        };
        teleportTo: {
          type: PropType<QCascaderPropTeleportTo>;
          default: null;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        'onDropdown-close'?: ((...args: any[]) => any) | undefined;
        'onDropdown-expand'?: ((...args: any[]) => any) | undefined;
      }>,
    {
      options: QCascaderPropOptions;
      disabled: boolean;
      modelValue: QCascaderPropModelValue;
      clearable: boolean;
      placeholder: string;
      multiple: boolean;
      collapseTags: boolean;
      allLevelsShown: boolean;
      separator: string;
      checkStrictly: boolean;
      teleportTo: QCascaderPropTeleportTo;
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
export type { QCascaderProps, QCascaderInstance } from './src/types';
