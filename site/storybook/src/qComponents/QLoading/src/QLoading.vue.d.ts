import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QLoadingPropSize, QLoadingPropText } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    size: {
      type: PropType<QLoadingPropSize>;
      default: string;
      validator: (value: QLoadingPropSize) => boolean;
    };
    text: {
      type: PropType<QLoadingPropText>;
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
      size: {
        type: PropType<QLoadingPropSize>;
        default: string;
        validator: (value: QLoadingPropSize) => boolean;
      };
      text: {
        type: PropType<QLoadingPropText>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    size: QLoadingPropSize;
    text: QLoadingPropText;
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
