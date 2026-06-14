import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QIconPropName,
  QIconPropSize,
  QIconPropColor,
  QIconPropSpin,
  QIconPropAriaLabel
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * icon name with or without `q-icon-` prefix, e.g. `search` or `q-icon-search`
     */
    name: {
      type: PropType<QIconPropName>;
      required: true;
    };
    /**
     * icon size preset or custom value in pixels
     */
    size: {
      type: PropType<QIconPropSize>;
      default: string;
      validator: (value: QIconPropSize) => boolean;
    };
    /**
     * icon color
     */
    color: {
      type: PropType<QIconPropColor>;
      default: null;
    };
    /**
     * whether to rotate icon continuously
     */
    spin: {
      type: PropType<QIconPropSpin>;
      default: boolean;
    };
    /**
     * accessible label for the icon
     */
    ariaLabel: {
      type: PropType<QIconPropAriaLabel>;
      default: null;
    };
  }>,
  {},
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
       * icon name with or without `q-icon-` prefix, e.g. `search` or `q-icon-search`
       */
      name: {
        type: PropType<QIconPropName>;
        required: true;
      };
      /**
       * icon size preset or custom value in pixels
       */
      size: {
        type: PropType<QIconPropSize>;
        default: string;
        validator: (value: QIconPropSize) => boolean;
      };
      /**
       * icon color
       */
      color: {
        type: PropType<QIconPropColor>;
        default: null;
      };
      /**
       * whether to rotate icon continuously
       */
      spin: {
        type: PropType<QIconPropSpin>;
        default: boolean;
      };
      /**
       * accessible label for the icon
       */
      ariaLabel: {
        type: PropType<QIconPropAriaLabel>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    size: QIconPropSize;
    ariaLabel: QIconPropAriaLabel;
    color: QIconPropColor;
    spin: QIconPropSpin;
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
