import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QOptionModel } from '../../QOption';
import {
  QSelectPropModelValue,
  QSelectPropAutocomplete,
  QSelectPropCanLoadMore,
  QSelectPropDisabled,
  QSelectPropClearable,
  QSelectPropFilterable,
  QSelectPropAllowCreate,
  QSelectPropLoading,
  QSelectPropRemote,
  QSelectPropLoadingText,
  QSelectPropLoadMoreText,
  QSelectPropNoMatchText,
  QSelectPropNoDataText,
  QSelectPropMultiple,
  QSelectPropMultipleLimit,
  QSelectPropPlaceholder,
  QSelectPropSelectAllShown,
  QSelectPropSelectAllText,
  QSelectPropValueKey,
  QSelectPropCollapseTags,
  QSelectPropTeleportTo
} from './types';
declare var __VLS_45: {}, __VLS_48: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_45) => any;
} & {
  empty?: (props: typeof __VLS_48) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * binding value
     */
    modelValue: {
      type: PropType<QSelectPropModelValue>;
      default: null;
    };
    /**
     * the autocomplete attribute of select input
     */
    autocomplete: {
      type: PropType<QSelectPropAutocomplete>;
      default: string;
    };
    /**
     * whether loadMoreText is shown
     */
    canLoadMore: {
      type: PropType<QSelectPropCanLoadMore>;
      default: boolean;
    };
    /**
     * whether Select is disabled
     */
    disabled: {
      type: PropType<QSelectPropDisabled>;
      default: boolean;
    };
    /**
     * whether select can be cleared
     */
    clearable: {
      type: PropType<QSelectPropClearable>;
      default: boolean;
    };
    /**
     * whether Select is filterable
     */
    filterable: {
      type: PropType<QSelectPropFilterable>;
      default: boolean;
    };
    /**
     * whether creating new items is allowed. To use this, `filterable` must be true
     */
    allowCreate: {
      type: PropType<QSelectPropAllowCreate>;
      default: boolean;
    };
    /**
     * whether Select is loading data from server
     */
    loading: {
      type: PropType<QSelectPropLoading>;
      default: boolean;
    };
    /**
     * whether options are loaded from server
     */
    remote: {
      type: PropType<QSelectPropRemote>;
      default: boolean;
    };
    /**
     * text that is shown when `loading` is true
     */
    loadingText: {
      type: PropType<QSelectPropLoadingText>;
      default: null;
    };
    /**
     * text that is shown when `canLoadMore` is true
     */
    loadMoreText: {
      type: PropType<QSelectPropLoadMoreText>;
      default: null;
    };
    /**
     * text of no match state
     */
    noMatchText: {
      type: PropType<QSelectPropNoMatchText>;
      default: null;
    };
    /**
     * text of no data state
     */
    noDataText: {
      type: PropType<QSelectPropNoDataText>;
      default: null;
    };
    /**
     * whether multiple-select is activated
     */
    multiple: {
      type: PropType<QSelectPropMultiple>;
      default: boolean;
    };
    /**
     * maximum number of options user can select when `multiple` is true. No `limit` when set to 0
     */
    multipleLimit: {
      type: PropType<QSelectPropMultipleLimit>;
      default: number;
    };
    /**
     * placeholder
     */
    placeholder: {
      type: PropType<QSelectPropPlaceholder>;
      default: string;
    };
    /**
     * whether select all button is shown
     */
    selectAllShown: {
      type: PropType<QSelectPropSelectAllShown>;
      default: boolean;
    };
    /**
     * text of select all button
     */
    selectAllText: {
      type: PropType<QSelectPropSelectAllText>;
      default: null;
    };
    /**
     * unique identity key name for value, required when option's value is an object
     */
    valueKey: {
      type: PropType<QSelectPropValueKey>;
      default: string;
    };
    /**
     * whether to collapse tags to a text when multiple selecting
     */
    collapseTags: {
      type: PropType<QSelectPropCollapseTags>;
      default: boolean;
    };
    /**
     * Specifies a target element where QSelect will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QSelectPropTeleportTo>;
      default: null;
    };
  }>,
  {
    toggleOptionSelection: (option: QOptionModel) => void;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    clear: (...args: any[]) => void;
    input: (...args: any[]) => void;
    search: (...args: any[]) => void;
    'update:modelValue': (...args: any[]) => void;
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    'remove-tag': (...args: any[]) => void;
    'visible-change': (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * binding value
       */
      modelValue: {
        type: PropType<QSelectPropModelValue>;
        default: null;
      };
      /**
       * the autocomplete attribute of select input
       */
      autocomplete: {
        type: PropType<QSelectPropAutocomplete>;
        default: string;
      };
      /**
       * whether loadMoreText is shown
       */
      canLoadMore: {
        type: PropType<QSelectPropCanLoadMore>;
        default: boolean;
      };
      /**
       * whether Select is disabled
       */
      disabled: {
        type: PropType<QSelectPropDisabled>;
        default: boolean;
      };
      /**
       * whether select can be cleared
       */
      clearable: {
        type: PropType<QSelectPropClearable>;
        default: boolean;
      };
      /**
       * whether Select is filterable
       */
      filterable: {
        type: PropType<QSelectPropFilterable>;
        default: boolean;
      };
      /**
       * whether creating new items is allowed. To use this, `filterable` must be true
       */
      allowCreate: {
        type: PropType<QSelectPropAllowCreate>;
        default: boolean;
      };
      /**
       * whether Select is loading data from server
       */
      loading: {
        type: PropType<QSelectPropLoading>;
        default: boolean;
      };
      /**
       * whether options are loaded from server
       */
      remote: {
        type: PropType<QSelectPropRemote>;
        default: boolean;
      };
      /**
       * text that is shown when `loading` is true
       */
      loadingText: {
        type: PropType<QSelectPropLoadingText>;
        default: null;
      };
      /**
       * text that is shown when `canLoadMore` is true
       */
      loadMoreText: {
        type: PropType<QSelectPropLoadMoreText>;
        default: null;
      };
      /**
       * text of no match state
       */
      noMatchText: {
        type: PropType<QSelectPropNoMatchText>;
        default: null;
      };
      /**
       * text of no data state
       */
      noDataText: {
        type: PropType<QSelectPropNoDataText>;
        default: null;
      };
      /**
       * whether multiple-select is activated
       */
      multiple: {
        type: PropType<QSelectPropMultiple>;
        default: boolean;
      };
      /**
       * maximum number of options user can select when `multiple` is true. No `limit` when set to 0
       */
      multipleLimit: {
        type: PropType<QSelectPropMultipleLimit>;
        default: number;
      };
      /**
       * placeholder
       */
      placeholder: {
        type: PropType<QSelectPropPlaceholder>;
        default: string;
      };
      /**
       * whether select all button is shown
       */
      selectAllShown: {
        type: PropType<QSelectPropSelectAllShown>;
        default: boolean;
      };
      /**
       * text of select all button
       */
      selectAllText: {
        type: PropType<QSelectPropSelectAllText>;
        default: null;
      };
      /**
       * unique identity key name for value, required when option's value is an object
       */
      valueKey: {
        type: PropType<QSelectPropValueKey>;
        default: string;
      };
      /**
       * whether to collapse tags to a text when multiple selecting
       */
      collapseTags: {
        type: PropType<QSelectPropCollapseTags>;
        default: boolean;
      };
      /**
       * Specifies a target element where QSelect will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
      teleportTo: {
        type: PropType<QSelectPropTeleportTo>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onClear?: ((...args: any[]) => any) | undefined;
      onInput?: ((...args: any[]) => any) | undefined;
      onSearch?: ((...args: any[]) => any) | undefined;
      'onUpdate:modelValue'?: ((...args: any[]) => any) | undefined;
      onChange?: ((...args: any[]) => any) | undefined;
      onFocus?: ((...args: any[]) => any) | undefined;
      onBlur?: ((...args: any[]) => any) | undefined;
      'onRemove-tag'?: ((...args: any[]) => any) | undefined;
      'onVisible-change'?: ((...args: any[]) => any) | undefined;
    }>,
  {
    loading: QSelectPropLoading;
    disabled: QSelectPropDisabled;
    modelValue: QSelectPropModelValue;
    clearable: QSelectPropClearable;
    placeholder: QSelectPropPlaceholder;
    multiple: QSelectPropMultiple;
    collapseTags: QSelectPropCollapseTags;
    teleportTo: QSelectPropTeleportTo;
    autocomplete: QSelectPropAutocomplete;
    selectAllShown: QSelectPropSelectAllShown;
    selectAllText: QSelectPropSelectAllText;
    loadMoreText: QSelectPropLoadMoreText;
    filterable: QSelectPropFilterable;
    canLoadMore: QSelectPropCanLoadMore;
    allowCreate: QSelectPropAllowCreate;
    remote: QSelectPropRemote;
    loadingText: QSelectPropLoadingText;
    noMatchText: QSelectPropNoMatchText;
    noDataText: QSelectPropNoDataText;
    multipleLimit: QSelectPropMultipleLimit;
    valueKey: QSelectPropValueKey;
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
