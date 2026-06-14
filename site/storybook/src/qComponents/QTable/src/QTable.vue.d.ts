import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
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
} from './types';
declare var __VLS_7: {};
type __VLS_Slots = {} & {
  empty?: (props: typeof __VLS_7) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * whether QTable has vertical border
     */
    grid: {
      type: PropType<QTablePropGrid>;
      default: boolean;
    };
    /**
     * do not shrink column's width as native table does
     * (change `defaultColWidth` or pass the `width` to each column object for managing the width)
     */
    fixedLayout: {
      type: PropType<QTablePropFixedLayout>;
      default: boolean;
    };
    /**
     * whether to show skeleton
     */
    isLoading: {
      type: PropType<QTablePropIsLoading>;
      default: boolean;
    };
    /**
     * count of rows, when table is loading
     */
    loadingRowCount: {
      type: PropType<QTablePropLoadingRowCount>;
      default: number;
    };
    /**
     * Default columns width, required `fixedLayout: true`
     */
    defaultColWidth: {
      type: PropType<QTablePropDefaultColWidth>;
      default: null;
    };
    /**
     * Checkboxes column settings.
     */
    selectionColumn: {
      type: PropType<QTablePropSelectionColumn>;
      default: null;
    };
    /**
     * `groupsOfColumns` MUST contain one or more groups of columns,
     * Each group MUST contain `key` and `columns` - array of objects.
     * Each group MAY contain:
     *  `color` (hex string) - column's header color.
     * Each column MUST contain `key` and `value`.
     * Each column MAY contain:
     *  `isHidden`.
     *  `sortable`.
     *  `sortOrder`. (MUST be an array of keywords - 'ascending', 'descending', null. Works with `sortable: true`)
     *  `draggable`.
     *  `slots`.
     *  `align` (left/right) - content's align.
     *  `width` (works with `fixedLayout: true`).
     *  `minWidth` (works with `fixedLayout: false`).
     *  `customCellClass`.
     *  `formatter` (fn).
     */
    groupsOfColumns: {
      type: PropType<QTablePropGroupsOfColumns>;
      required: true;
    };
    /**
     * Object, `[column.key]: value` pair, not all are required
     */
    total: {
      type: PropType<QTablePropTotal>;
      default: null;
    };
    /**
     * Array of objects, each object must contain `[column.key]: value` pair
     */
    rows: {
      type: PropType<QTablePropRows>;
      required: true;
    };
    /**
     * Array of checked rows indexs
     */
    checkedRows: {
      type: PropType<QTablePropCheckedRows>;
      default: null;
    };
    /**
     * used to set sort the table
     */
    sortBy: {
      type: PropType<QTablePropSortBy>;
      default: null;
    };
    /**
     * used to set classes for a row
     */
    customRowClass: {
      type: PropType<QTablePropCustomRowClass>;
      default: null;
    };
    /**
     * used to set styles for a row
     */
    customRowStyle: {
      type: PropType<QTablePropCustomRowStyle>;
      default: null;
    };
    /**
     * used to change 'No data' text
     */
    emptyText: {
      type: PropType<QTablePropEmptyText>;
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
    'update:checkedRows': (value: number[]) => any;
    'update:sortBy': (value: QTablePropSortBy) => any;
    'update:groupsOfColumns': (value: QTablePropGroupsOfColumns) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * whether QTable has vertical border
       */
      grid: {
        type: PropType<QTablePropGrid>;
        default: boolean;
      };
      /**
       * do not shrink column's width as native table does
       * (change `defaultColWidth` or pass the `width` to each column object for managing the width)
       */
      fixedLayout: {
        type: PropType<QTablePropFixedLayout>;
        default: boolean;
      };
      /**
       * whether to show skeleton
       */
      isLoading: {
        type: PropType<QTablePropIsLoading>;
        default: boolean;
      };
      /**
       * count of rows, when table is loading
       */
      loadingRowCount: {
        type: PropType<QTablePropLoadingRowCount>;
        default: number;
      };
      /**
       * Default columns width, required `fixedLayout: true`
       */
      defaultColWidth: {
        type: PropType<QTablePropDefaultColWidth>;
        default: null;
      };
      /**
       * Checkboxes column settings.
       */
      selectionColumn: {
        type: PropType<QTablePropSelectionColumn>;
        default: null;
      };
      /**
       * `groupsOfColumns` MUST contain one or more groups of columns,
       * Each group MUST contain `key` and `columns` - array of objects.
       * Each group MAY contain:
       *  `color` (hex string) - column's header color.
       * Each column MUST contain `key` and `value`.
       * Each column MAY contain:
       *  `isHidden`.
       *  `sortable`.
       *  `sortOrder`. (MUST be an array of keywords - 'ascending', 'descending', null. Works with `sortable: true`)
       *  `draggable`.
       *  `slots`.
       *  `align` (left/right) - content's align.
       *  `width` (works with `fixedLayout: true`).
       *  `minWidth` (works with `fixedLayout: false`).
       *  `customCellClass`.
       *  `formatter` (fn).
       */
      groupsOfColumns: {
        type: PropType<QTablePropGroupsOfColumns>;
        required: true;
      };
      /**
       * Object, `[column.key]: value` pair, not all are required
       */
      total: {
        type: PropType<QTablePropTotal>;
        default: null;
      };
      /**
       * Array of objects, each object must contain `[column.key]: value` pair
       */
      rows: {
        type: PropType<QTablePropRows>;
        required: true;
      };
      /**
       * Array of checked rows indexs
       */
      checkedRows: {
        type: PropType<QTablePropCheckedRows>;
        default: null;
      };
      /**
       * used to set sort the table
       */
      sortBy: {
        type: PropType<QTablePropSortBy>;
        default: null;
      };
      /**
       * used to set classes for a row
       */
      customRowClass: {
        type: PropType<QTablePropCustomRowClass>;
        default: null;
      };
      /**
       * used to set styles for a row
       */
      customRowStyle: {
        type: PropType<QTablePropCustomRowStyle>;
        default: null;
      };
      /**
       * used to change 'No data' text
       */
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
  {},
  {},
  string,
  ComponentProvideOptions,
  true,
  {},
  any
>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
