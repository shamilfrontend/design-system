import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    visibilityHeight: {
      type: NumberConstructor;
      default: number;
    };
    right: {
      type: NumberConstructor;
      default: number;
    };
    bottom: {
      type: NumberConstructor;
      default: number;
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
      visibilityHeight: {
        type: NumberConstructor;
        default: number;
      };
      right: {
        type: NumberConstructor;
        default: number;
      };
      bottom: {
        type: NumberConstructor;
        default: number;
      };
    }>
  > &
    Readonly<{}>,
  {
    bottom: number;
    right: number;
    visibilityHeight: number;
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
