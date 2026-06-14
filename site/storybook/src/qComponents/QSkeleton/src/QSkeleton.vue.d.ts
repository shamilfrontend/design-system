import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QSkeletonPropVariant,
  QSkeletonPropAnimated,
  QSkeletonPropRows,
  QSkeletonPropWidth,
  QSkeletonPropHeight,
  QSkeletonPropRadius
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * skeleton shape preset
     */
    variant: {
      type: PropType<QSkeletonPropVariant>;
      default: string;
      validator: (value: 'button' | 'circle' | 'rect' | 'text') => boolean;
    };
    /**
     * whether shimmer animation is enabled
     */
    animated: {
      type: PropType<QSkeletonPropAnimated>;
      default: boolean;
    };
    /**
     * number of text rows (works with variant="text")
     */
    rows: {
      type: PropType<QSkeletonPropRows>;
      default: number;
    };
    /**
     * custom width
     */
    width: {
      type: PropType<QSkeletonPropWidth>;
      default: null;
    };
    /**
     * custom height
     */
    height: {
      type: PropType<QSkeletonPropHeight>;
      default: null;
    };
    /**
     * custom border radius
     */
    radius: {
      type: PropType<QSkeletonPropRadius>;
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
       * skeleton shape preset
       */
      variant: {
        type: PropType<QSkeletonPropVariant>;
        default: string;
        validator: (value: 'button' | 'circle' | 'rect' | 'text') => boolean;
      };
      /**
       * whether shimmer animation is enabled
       */
      animated: {
        type: PropType<QSkeletonPropAnimated>;
        default: boolean;
      };
      /**
       * number of text rows (works with variant="text")
       */
      rows: {
        type: PropType<QSkeletonPropRows>;
        default: number;
      };
      /**
       * custom width
       */
      width: {
        type: PropType<QSkeletonPropWidth>;
        default: null;
      };
      /**
       * custom height
       */
      height: {
        type: PropType<QSkeletonPropHeight>;
        default: null;
      };
      /**
       * custom border radius
       */
      radius: {
        type: PropType<QSkeletonPropRadius>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    height: QSkeletonPropHeight;
    width: QSkeletonPropWidth;
    rows: QSkeletonPropRows;
    variant: QSkeletonPropVariant;
    animated: QSkeletonPropAnimated;
    radius: QSkeletonPropRadius;
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
