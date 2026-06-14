import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QSliderBarPropSize } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    size: {
      type: PropType<QSliderBarPropSize>;
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
        type: PropType<QSliderBarPropSize>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    size: QSliderBarPropSize;
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
