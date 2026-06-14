import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QScrollbarPropScrollTo,
  QScrollbarPropVisible,
  QScrollbarPropTheme,
  QScrollbarPropWrapClass,
  QScrollbarPropViewTag,
  QScrollbarPropViewClass,
  QScrollbarPropViewStyle,
  QScrollbarPropNoResize
} from './types';
/**
 * @public
 */
declare function handleScroll(): void;
/**
 * @public
 */
declare function update(): void;
declare var __VLS_9: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * passing DOM element will scroll content to it (works dynamically)
     */
    scrollTo: {
      type: PropType<QScrollbarPropScrollTo>;
      default: null;
    };
    /**
     * whether scrollbar is always visible
     */
    visible: {
      type: PropType<QScrollbarPropVisible>;
      default: boolean;
    };
    /**
     * changes style
     */
    theme: {
      type: PropType<QScrollbarPropTheme>;
      default: string;
      validator: (value: QScrollbarPropTheme) => boolean;
    };
    /**
     * custom wrapper content class (it helps you to style content)
     */
    wrapClass: {
      type: PropType<QScrollbarPropWrapClass>;
      default: null;
    };
    /**
     * custom inner content tag
     */
    viewTag: {
      type: PropType<QScrollbarPropViewTag>;
      default: string;
    };
    /**
     * custom inner content class
     */
    viewClass: {
      type: PropType<QScrollbarPropViewClass>;
      default: null;
    };
    /**
     * custom inner content class
     */
    viewStyle: {
      type: PropType<QScrollbarPropViewStyle>;
      default: null;
    };
    /**
     * whether is resizeListener will watch for parent
     */
    noresize: {
      type: PropType<QScrollbarPropNoResize>;
      default: boolean;
    };
    /**
     * accessible label for the scroll region
     */
    ariaLabel: {
      type: StringConstructor;
      default: null;
    };
  }>,
  {
    handleScroll: typeof handleScroll;
    update: typeof update;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * passing DOM element will scroll content to it (works dynamically)
       */
      scrollTo: {
        type: PropType<QScrollbarPropScrollTo>;
        default: null;
      };
      /**
       * whether scrollbar is always visible
       */
      visible: {
        type: PropType<QScrollbarPropVisible>;
        default: boolean;
      };
      /**
       * changes style
       */
      theme: {
        type: PropType<QScrollbarPropTheme>;
        default: string;
        validator: (value: QScrollbarPropTheme) => boolean;
      };
      /**
       * custom wrapper content class (it helps you to style content)
       */
      wrapClass: {
        type: PropType<QScrollbarPropWrapClass>;
        default: null;
      };
      /**
       * custom inner content tag
       */
      viewTag: {
        type: PropType<QScrollbarPropViewTag>;
        default: string;
      };
      /**
       * custom inner content class
       */
      viewClass: {
        type: PropType<QScrollbarPropViewClass>;
        default: null;
      };
      /**
       * custom inner content class
       */
      viewStyle: {
        type: PropType<QScrollbarPropViewStyle>;
        default: null;
      };
      /**
       * whether is resizeListener will watch for parent
       */
      noresize: {
        type: PropType<QScrollbarPropNoResize>;
        default: boolean;
      };
      /**
       * accessible label for the scroll region
       */
      ariaLabel: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    ariaLabel: string;
    visible: QScrollbarPropVisible;
    theme: QScrollbarPropTheme;
    scrollTo: QScrollbarPropScrollTo;
    wrapClass: QScrollbarPropWrapClass;
    viewTag: QScrollbarPropViewTag;
    viewClass: QScrollbarPropViewClass;
    viewStyle: QScrollbarPropViewStyle;
    noresize: QScrollbarPropNoResize;
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
