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
  QTablePropGrid,
  QTablePropFixedLayout,
  QTablePropIsLoading,
  QTablePropLoadingRowCount,
  QTablePropDefaultColWidth,
  QTablePropSelectionColumn,
  QTablePropGroupsOfColumns,
  QTablePropTotal,
  QTablePropRows,
  QTablePropCheckedRows,
  QTablePropSortBy,
  QTablePropCustomRowClass,
  QTablePropCustomRowStyle,
  QTablePropEmptyText
} from '.';
export declare const QTable: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          grid: {
            type: PropType<QTablePropGrid>;
            default: boolean;
          };
          fixedLayout: {
            type: PropType<QTablePropFixedLayout>;
            default: boolean;
          };
          isLoading: {
            type: PropType<QTablePropIsLoading>;
            default: boolean;
          };
          loadingRowCount: {
            type: PropType<QTablePropLoadingRowCount>;
            default: number;
          };
          defaultColWidth: {
            type: PropType<QTablePropDefaultColWidth>;
            default: null;
          };
          selectionColumn: {
            type: PropType<QTablePropSelectionColumn>;
            default: null;
          };
          groupsOfColumns: {
            type: PropType<QTablePropGroupsOfColumns>;
            required: true;
          };
          total: {
            type: PropType<QTablePropTotal>;
            default: null;
          };
          rows: {
            type: PropType<QTablePropRows>;
            required: true;
          };
          checkedRows: {
            type: PropType<QTablePropCheckedRows>;
            default: null;
          };
          sortBy: {
            type: PropType<QTablePropSortBy>;
            default: null;
          };
          customRowClass: {
            type: PropType<QTablePropCustomRowClass>;
            default: null;
          };
          customRowStyle: {
            type: PropType<QTablePropCustomRowStyle>;
            default: null;
          };
          emptyText: {
            type: PropType<QTablePropEmptyText>;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:checkedRows'?: ((value: number[]) => any) | undefined;
          'onUpdate:sortBy'?: ((value: QTablePropSortBy) => any) | undefined;
          'onUpdate:groupsOfColumns'?:
            | ((value: QTablePropGroupsOfColumns) => any)
            | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        'update:checkedRows': (value: number[]) => any;
        'update:sortBy': (value: QTablePropSortBy) => any;
        'update:groupsOfColumns': (value: QTablePropGroupsOfColumns) => any;
      },
      PublicProps,
      {
        isLoading: QTablePropIsLoading;
        grid: QTablePropGrid;
        emptyText: QTablePropEmptyText;
        total: QTablePropTotal;
        sortBy: QTablePropSortBy;
        fixedLayout: QTablePropFixedLayout;
        loadingRowCount: QTablePropLoadingRowCount;
        defaultColWidth: QTablePropDefaultColWidth;
        selectionColumn: QTablePropSelectionColumn;
        checkedRows: QTablePropCheckedRows;
        customRowClass: QTablePropCustomRowClass;
        customRowStyle: QTablePropCustomRowStyle;
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
          grid: {
            type: PropType<QTablePropGrid>;
            default: boolean;
          };
          fixedLayout: {
            type: PropType<QTablePropFixedLayout>;
            default: boolean;
          };
          isLoading: {
            type: PropType<QTablePropIsLoading>;
            default: boolean;
          };
          loadingRowCount: {
            type: PropType<QTablePropLoadingRowCount>;
            default: number;
          };
          defaultColWidth: {
            type: PropType<QTablePropDefaultColWidth>;
            default: null;
          };
          selectionColumn: {
            type: PropType<QTablePropSelectionColumn>;
            default: null;
          };
          groupsOfColumns: {
            type: PropType<QTablePropGroupsOfColumns>;
            required: true;
          };
          total: {
            type: PropType<QTablePropTotal>;
            default: null;
          };
          rows: {
            type: PropType<QTablePropRows>;
            required: true;
          };
          checkedRows: {
            type: PropType<QTablePropCheckedRows>;
            default: null;
          };
          sortBy: {
            type: PropType<QTablePropSortBy>;
            default: null;
          };
          customRowClass: {
            type: PropType<QTablePropCustomRowClass>;
            default: null;
          };
          customRowStyle: {
            type: PropType<QTablePropCustomRowStyle>;
            default: null;
          };
          emptyText: {
            type: PropType<QTablePropEmptyText>;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:checkedRows'?: ((value: number[]) => any) | undefined;
          'onUpdate:sortBy'?: ((value: QTablePropSortBy) => any) | undefined;
          'onUpdate:groupsOfColumns'?:
            | ((value: QTablePropGroupsOfColumns) => any)
            | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        isLoading: QTablePropIsLoading;
        grid: QTablePropGrid;
        emptyText: QTablePropEmptyText;
        total: QTablePropTotal;
        sortBy: QTablePropSortBy;
        fixedLayout: QTablePropFixedLayout;
        loadingRowCount: QTablePropLoadingRowCount;
        defaultColWidth: QTablePropDefaultColWidth;
        selectionColumn: QTablePropSelectionColumn;
        checkedRows: QTablePropCheckedRows;
        customRowClass: QTablePropCustomRowClass;
        customRowStyle: QTablePropCustomRowStyle;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        grid: {
          type: PropType<QTablePropGrid>;
          default: boolean;
        };
        fixedLayout: {
          type: PropType<QTablePropFixedLayout>;
          default: boolean;
        };
        isLoading: {
          type: PropType<QTablePropIsLoading>;
          default: boolean;
        };
        loadingRowCount: {
          type: PropType<QTablePropLoadingRowCount>;
          default: number;
        };
        defaultColWidth: {
          type: PropType<QTablePropDefaultColWidth>;
          default: null;
        };
        selectionColumn: {
          type: PropType<QTablePropSelectionColumn>;
          default: null;
        };
        groupsOfColumns: {
          type: PropType<QTablePropGroupsOfColumns>;
          required: true;
        };
        total: {
          type: PropType<QTablePropTotal>;
          default: null;
        };
        rows: {
          type: PropType<QTablePropRows>;
          required: true;
        };
        checkedRows: {
          type: PropType<QTablePropCheckedRows>;
          default: null;
        };
        sortBy: {
          type: PropType<QTablePropSortBy>;
          default: null;
        };
        customRowClass: {
          type: PropType<QTablePropCustomRowClass>;
          default: null;
        };
        customRowStyle: {
          type: PropType<QTablePropCustomRowStyle>;
          default: null;
        };
        emptyText: {
          type: PropType<QTablePropEmptyText>;
          default: null;
        };
      }>
    > &
      Readonly<{
        'onUpdate:checkedRows'?: ((value: number[]) => any) | undefined;
        'onUpdate:sortBy'?: ((value: QTablePropSortBy) => any) | undefined;
        'onUpdate:groupsOfColumns'?:
          | ((value: QTablePropGroupsOfColumns) => any)
          | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:checkedRows': (value: number[]) => any;
      'update:sortBy': (value: QTablePropSortBy) => any;
      'update:groupsOfColumns': (value: QTablePropGroupsOfColumns) => any;
    },
    string,
    {
      isLoading: QTablePropIsLoading;
      grid: QTablePropGrid;
      emptyText: QTablePropEmptyText;
      total: QTablePropTotal;
      sortBy: QTablePropSortBy;
      fixedLayout: QTablePropFixedLayout;
      loadingRowCount: QTablePropLoadingRowCount;
      defaultColWidth: QTablePropDefaultColWidth;
      selectionColumn: QTablePropSelectionColumn;
      checkedRows: QTablePropCheckedRows;
      customRowClass: QTablePropCustomRowClass;
      customRowStyle: QTablePropCustomRowStyle;
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
        empty?: (props: {}) => any;
      };
    })
>;
export type {
  QTableProps,
  QTablePropGrid,
  QTablePropFixedLayout,
  QTablePropIsLoading,
  QTablePropLoadingRowCount,
  QTablePropDefaultColWidth,
  QTablePropSelectionColumn,
  QTablePropGroupsOfColumns,
  QTablePropTotal,
  QTablePropRows,
  QTablePropCheckedRows,
  QTablePropSortBy,
  QTablePropCustomRowClass,
  QTablePropCustomRowStyle,
  QTablePropEmptyText,
  QTableInstance
} from './src/types';
