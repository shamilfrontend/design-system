import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QBarPropType, QBarPropTheme } from './types';
declare function scrollToPx(px: number): void;
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    type: {
      type: PropType<QBarPropType>;
      default: string;
      validator: (value: QBarPropType) => boolean;
    };
    theme: {
      type: PropType<QBarPropTheme>;
      default: null;
    };
    size: {
      type: StringConstructor;
      default: string;
    };
    move: {
      type: NumberConstructor;
      default: null;
    };
  }>,
  {
    scrollToPx: typeof scrollToPx;
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
      type: {
        type: PropType<QBarPropType>;
        default: string;
        validator: (value: QBarPropType) => boolean;
      };
      theme: {
        type: PropType<QBarPropTheme>;
        default: null;
      };
      size: {
        type: StringConstructor;
        default: string;
      };
      move: {
        type: NumberConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    size: string;
    type: QBarPropType;
    theme: QBarPropTheme;
    move: number;
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
