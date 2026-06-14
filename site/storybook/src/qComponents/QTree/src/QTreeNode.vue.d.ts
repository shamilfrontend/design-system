import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTreeNode } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    node: {
      type: PropType<QTreeNode>;
      required: true;
    };
    level: {
      type: NumberConstructor;
      default: number;
    };
    expandedKeys: {
      type: PropType<Set<string | number>>;
      required: true;
    };
    expandOnClickNode: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    select: (node: QTreeNode) => any;
    toggle: (key: string | number) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      node: {
        type: PropType<QTreeNode>;
        required: true;
      };
      level: {
        type: NumberConstructor;
        default: number;
      };
      expandedKeys: {
        type: PropType<Set<string | number>>;
        required: true;
      };
      expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onSelect?: ((node: QTreeNode) => any) | undefined;
      onToggle?: ((key: string | number) => any) | undefined;
    }>,
  {
    level: number;
    expandOnClickNode: boolean;
  },
  {},
  {},
  {},
  string,
  ComponentProvideOptions,
  true,
  {},
  any
>;
declare const _default: typeof __VLS_export;
export default _default;
