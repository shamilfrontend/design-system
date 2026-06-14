import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * total page count
     */
    pageCount: {
      type: NumberConstructor;
      default: null;
    };
    /**
     * total item count
     */
    total: {
      type: NumberConstructor;
      default: null;
    };
    /**
     * item count of each page
     */
    pageSize: {
      type: NumberConstructor;
      default: null;
    };
    /**
     * current page number
     */
    currentPage: {
      type: NumberConstructor;
      default: number;
      validator: (value: number) => boolean;
    };
    /**
     * whether Pagination is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * number of visible page's buttons
     */
    pagerCount: {
      type: NumberConstructor;
      default: number;
      validator: (value: number) => boolean;
    };
    /**
     * accessible label for pagination navigation
     */
    ariaLabel: {
      type: StringConstructor;
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
    'current-change': (newPage: number) => any;
    'prev-click': (newPage: number) => any;
    'next-click': (newPage: number) => any;
    'quick-prev-click': (newPage: number) => any;
    'quick-next-click': (newPage: number) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * total page count
       */
      pageCount: {
        type: NumberConstructor;
        default: null;
      };
      /**
       * total item count
       */
      total: {
        type: NumberConstructor;
        default: null;
      };
      /**
       * item count of each page
       */
      pageSize: {
        type: NumberConstructor;
        default: null;
      };
      /**
       * current page number
       */
      currentPage: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
      };
      /**
       * whether Pagination is disabled
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * number of visible page's buttons
       */
      pagerCount: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
      };
      /**
       * accessible label for pagination navigation
       */
      ariaLabel: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      'onCurrent-change'?: ((newPage: number) => any) | undefined;
      'onPrev-click'?: ((newPage: number) => any) | undefined;
      'onNext-click'?: ((newPage: number) => any) | undefined;
      'onQuick-prev-click'?: ((newPage: number) => any) | undefined;
      'onQuick-next-click'?: ((newPage: number) => any) | undefined;
    }>,
  {
    ariaLabel: string;
    disabled: boolean;
    pageCount: number;
    total: number;
    pageSize: number;
    currentPage: number;
    pagerCount: number;
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
