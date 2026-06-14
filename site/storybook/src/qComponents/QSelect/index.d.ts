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
} from '.';
import { QOptionModel } from '..';
export declare const QSelect: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: PropType<QSelectPropModelValue>;
            default: null;
          };
          autocomplete: {
            type: PropType<QSelectPropAutocomplete>;
            default: string;
          };
          canLoadMore: {
            type: PropType<QSelectPropCanLoadMore>;
            default: boolean;
          };
          disabled: {
            type: PropType<QSelectPropDisabled>;
            default: boolean;
          };
          clearable: {
            type: PropType<QSelectPropClearable>;
            default: boolean;
          };
          filterable: {
            type: PropType<QSelectPropFilterable>;
            default: boolean;
          };
          allowCreate: {
            type: PropType<QSelectPropAllowCreate>;
            default: boolean;
          };
          loading: {
            type: PropType<QSelectPropLoading>;
            default: boolean;
          };
          remote: {
            type: PropType<QSelectPropRemote>;
            default: boolean;
          };
          loadingText: {
            type: PropType<QSelectPropLoadingText>;
            default: null;
          };
          loadMoreText: {
            type: PropType<QSelectPropLoadMoreText>;
            default: null;
          };
          noMatchText: {
            type: PropType<QSelectPropNoMatchText>;
            default: null;
          };
          noDataText: {
            type: PropType<QSelectPropNoDataText>;
            default: null;
          };
          multiple: {
            type: PropType<QSelectPropMultiple>;
            default: boolean;
          };
          multipleLimit: {
            type: PropType<QSelectPropMultipleLimit>;
            default: number;
          };
          placeholder: {
            type: PropType<QSelectPropPlaceholder>;
            default: string;
          };
          selectAllShown: {
            type: PropType<QSelectPropSelectAllShown>;
            default: boolean;
          };
          selectAllText: {
            type: PropType<QSelectPropSelectAllText>;
            default: null;
          };
          valueKey: {
            type: PropType<QSelectPropValueKey>;
            default: string;
          };
          collapseTags: {
            type: PropType<QSelectPropCollapseTags>;
            default: boolean;
          };
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
      PublicProps,
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
          modelValue: {
            type: PropType<QSelectPropModelValue>;
            default: null;
          };
          autocomplete: {
            type: PropType<QSelectPropAutocomplete>;
            default: string;
          };
          canLoadMore: {
            type: PropType<QSelectPropCanLoadMore>;
            default: boolean;
          };
          disabled: {
            type: PropType<QSelectPropDisabled>;
            default: boolean;
          };
          clearable: {
            type: PropType<QSelectPropClearable>;
            default: boolean;
          };
          filterable: {
            type: PropType<QSelectPropFilterable>;
            default: boolean;
          };
          allowCreate: {
            type: PropType<QSelectPropAllowCreate>;
            default: boolean;
          };
          loading: {
            type: PropType<QSelectPropLoading>;
            default: boolean;
          };
          remote: {
            type: PropType<QSelectPropRemote>;
            default: boolean;
          };
          loadingText: {
            type: PropType<QSelectPropLoadingText>;
            default: null;
          };
          loadMoreText: {
            type: PropType<QSelectPropLoadMoreText>;
            default: null;
          };
          noMatchText: {
            type: PropType<QSelectPropNoMatchText>;
            default: null;
          };
          noDataText: {
            type: PropType<QSelectPropNoDataText>;
            default: null;
          };
          multiple: {
            type: PropType<QSelectPropMultiple>;
            default: boolean;
          };
          multipleLimit: {
            type: PropType<QSelectPropMultipleLimit>;
            default: number;
          };
          placeholder: {
            type: PropType<QSelectPropPlaceholder>;
            default: string;
          };
          selectAllShown: {
            type: PropType<QSelectPropSelectAllShown>;
            default: boolean;
          };
          selectAllText: {
            type: PropType<QSelectPropSelectAllText>;
            default: null;
          };
          valueKey: {
            type: PropType<QSelectPropValueKey>;
            default: string;
          };
          collapseTags: {
            type: PropType<QSelectPropCollapseTags>;
            default: boolean;
          };
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
        toggleOptionSelection: (option: QOptionModel) => void;
      },
      {},
      {},
      {},
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
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QSelectPropModelValue>;
          default: null;
        };
        autocomplete: {
          type: PropType<QSelectPropAutocomplete>;
          default: string;
        };
        canLoadMore: {
          type: PropType<QSelectPropCanLoadMore>;
          default: boolean;
        };
        disabled: {
          type: PropType<QSelectPropDisabled>;
          default: boolean;
        };
        clearable: {
          type: PropType<QSelectPropClearable>;
          default: boolean;
        };
        filterable: {
          type: PropType<QSelectPropFilterable>;
          default: boolean;
        };
        allowCreate: {
          type: PropType<QSelectPropAllowCreate>;
          default: boolean;
        };
        loading: {
          type: PropType<QSelectPropLoading>;
          default: boolean;
        };
        remote: {
          type: PropType<QSelectPropRemote>;
          default: boolean;
        };
        loadingText: {
          type: PropType<QSelectPropLoadingText>;
          default: null;
        };
        loadMoreText: {
          type: PropType<QSelectPropLoadMoreText>;
          default: null;
        };
        noMatchText: {
          type: PropType<QSelectPropNoMatchText>;
          default: null;
        };
        noDataText: {
          type: PropType<QSelectPropNoDataText>;
          default: null;
        };
        multiple: {
          type: PropType<QSelectPropMultiple>;
          default: boolean;
        };
        multipleLimit: {
          type: PropType<QSelectPropMultipleLimit>;
          default: number;
        };
        placeholder: {
          type: PropType<QSelectPropPlaceholder>;
          default: string;
        };
        selectAllShown: {
          type: PropType<QSelectPropSelectAllShown>;
          default: boolean;
        };
        selectAllText: {
          type: PropType<QSelectPropSelectAllText>;
          default: null;
        };
        valueKey: {
          type: PropType<QSelectPropValueKey>;
          default: string;
        };
        collapseTags: {
          type: PropType<QSelectPropCollapseTags>;
          default: boolean;
        };
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
      } & {
        empty?: (props: {}) => any;
      };
    })
>;
export type {
  NewOption,
  QSelectProvider,
  QSelectState,
  QSelectProps,
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
} from './src/types';
