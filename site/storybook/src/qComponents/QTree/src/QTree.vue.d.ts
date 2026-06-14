import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTreeNode as QTreeNodeType, QTreePropData } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    data: {
      type: PropType<QTreePropData>;
      default: () => QTreePropData;
    };
    defaultExpandAll: {
      type: BooleanConstructor;
      default: boolean;
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
    select: (node: QTreeNodeType) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      data: {
        type: PropType<QTreePropData>;
        default: () => QTreePropData;
      };
      defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
      };
      expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onSelect?: ((node: QTreeNodeType) => any) | undefined;
    }>,
  {
    data: QTreePropData;
    expandOnClickNode: boolean;
    defaultExpandAll: boolean;
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
