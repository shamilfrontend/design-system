import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTreePropData, QTreeNode } from '.';
export declare const QTree: SFCWithInstall<
  DefineComponent<
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
      select: (node: QTreeNode) => any;
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
        onSelect?: ((node: QTreeNode) => any) | undefined;
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
  >
>;
export type {
  QTreeProps,
  QTreeNode,
  QTreePropData,
  QTreePropDefaultExpandAll,
  QTreePropExpandOnClickNode
} from './src/types';
