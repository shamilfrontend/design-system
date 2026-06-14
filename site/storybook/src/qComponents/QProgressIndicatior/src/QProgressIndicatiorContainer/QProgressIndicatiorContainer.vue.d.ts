import {
  PropType,
  Ref,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    isShown: {
      type: PropType<Ref<boolean>>;
      required: true;
    };
    isStarted: {
      type: PropType<Ref<boolean>>;
      required: true;
    };
    progress: {
      type: PropType<Ref<number>>;
      required: true;
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
      isShown: {
        type: PropType<Ref<boolean>>;
        required: true;
      };
      isStarted: {
        type: PropType<Ref<boolean>>;
        required: true;
      };
      progress: {
        type: PropType<Ref<number>>;
        required: true;
      };
    }>
  > &
    Readonly<{}>,
  {},
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
