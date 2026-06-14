import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QImagePropAlt,
  QImagePropFit,
  QImagePropHeight,
  QImagePropLazy,
  QImagePropPreview,
  QImagePropSrc,
  QImagePropWidth
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  error?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    src: {
      type: PropType<QImagePropSrc>;
      required: true;
    };
    alt: {
      type: PropType<QImagePropAlt>;
      default: string;
    };
    fit: {
      type: PropType<QImagePropFit>;
      default: string;
      validator: (value: QImagePropFit) => boolean;
    };
    lazy: {
      type: PropType<QImagePropLazy>;
      default: boolean;
    };
    preview: {
      type: PropType<QImagePropPreview>;
      default: boolean;
    };
    width: {
      type: PropType<QImagePropWidth>;
      default: null;
    };
    height: {
      type: PropType<QImagePropHeight>;
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
      src: {
        type: PropType<QImagePropSrc>;
        required: true;
      };
      alt: {
        type: PropType<QImagePropAlt>;
        default: string;
      };
      fit: {
        type: PropType<QImagePropFit>;
        default: string;
        validator: (value: QImagePropFit) => boolean;
      };
      lazy: {
        type: PropType<QImagePropLazy>;
        default: boolean;
      };
      preview: {
        type: PropType<QImagePropPreview>;
        default: boolean;
      };
      width: {
        type: PropType<QImagePropWidth>;
        default: null;
      };
      height: {
        type: PropType<QImagePropHeight>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    alt: string;
    height: QImagePropHeight;
    width: QImagePropWidth;
    fit: QImagePropFit;
    lazy: boolean;
    preview: boolean;
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
