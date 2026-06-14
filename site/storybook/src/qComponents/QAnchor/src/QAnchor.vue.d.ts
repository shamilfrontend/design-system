import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QAnchorPropItems, QAnchorPropOffset } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    items: {
      type: PropType<QAnchorPropItems>;
      default: () => never[];
    };
    offset: {
      type: PropType<QAnchorPropOffset>;
      default: number;
    };
    container: {
      type: PropType<string | HTMLElement | null>;
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
      items: {
        type: PropType<QAnchorPropItems>;
        default: () => never[];
      };
      offset: {
        type: PropType<QAnchorPropOffset>;
        default: number;
      };
      container: {
        type: PropType<string | HTMLElement | null>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    offset: number;
    container: string | HTMLElement | null;
    items: QAnchorPropItems;
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
