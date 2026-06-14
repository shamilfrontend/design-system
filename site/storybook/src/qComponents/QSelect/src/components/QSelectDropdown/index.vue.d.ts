import { QScrollbarInstance } from '../../../../QScrollbar';
import { Nullable, UnwrappedInstance } from '../../../../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  Ref,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare var __VLS_19: {}, __VLS_21: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_19) => any;
} & {
  empty?: (props: typeof __VLS_21) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    shown: {
      type: BooleanConstructor;
      required: true;
    };
    selectAllShown: {
      type: BooleanConstructor;
      required: true;
    };
    selectAllText: {
      type: StringConstructor;
      required: true;
    };
    showEmptyContent: {
      type: BooleanConstructor;
      required: true;
    };
    emptyText: {
      type: StringConstructor;
      required: true;
    };
    isCanLoadMoreShown: {
      type: BooleanConstructor;
      required: true;
    };
    loadMoreText: {
      type: StringConstructor;
      required: true;
    };
    isNewOptionShown: {
      type: BooleanConstructor;
      required: true;
    };
    width: {
      type: NumberConstructor;
      default: null;
    };
  }>,
  {
    navigateDropdown: (e: KeyboardEvent) => void;
    scrollbar: Ref<
      UnwrappedInstance<QScrollbarInstance>,
      UnwrappedInstance<QScrollbarInstance>
    >;
    root: Ref<Nullable<HTMLDivElement>, Nullable<HTMLDivElement>>;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    'select-all': (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      shown: {
        type: BooleanConstructor;
        required: true;
      };
      selectAllShown: {
        type: BooleanConstructor;
        required: true;
      };
      selectAllText: {
        type: StringConstructor;
        required: true;
      };
      showEmptyContent: {
        type: BooleanConstructor;
        required: true;
      };
      emptyText: {
        type: StringConstructor;
        required: true;
      };
      isCanLoadMoreShown: {
        type: BooleanConstructor;
        required: true;
      };
      loadMoreText: {
        type: StringConstructor;
        required: true;
      };
      isNewOptionShown: {
        type: BooleanConstructor;
        required: true;
      };
      width: {
        type: NumberConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      'onSelect-all'?: ((...args: any[]) => any) | undefined;
    }>,
  {
    width: number;
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
