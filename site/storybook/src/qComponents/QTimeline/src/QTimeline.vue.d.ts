import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTimelinePropItems, QTimelinePropMode } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    items: {
      type: PropType<QTimelinePropItems>;
      default: () => QTimelinePropItems;
    };
    mode: {
      type: PropType<QTimelinePropMode>;
      default: string;
      validator: (value: QTimelinePropMode) => boolean;
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
        type: PropType<QTimelinePropItems>;
        default: () => QTimelinePropItems;
      };
      mode: {
        type: PropType<QTimelinePropMode>;
        default: string;
        validator: (value: QTimelinePropMode) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    mode: QTimelinePropMode;
    items: QTimelinePropItems;
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
