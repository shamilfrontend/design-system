import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QLinkPropDisabled,
  QLinkPropHref,
  QLinkPropTarget,
  QLinkPropType,
  QLinkPropUnderline
} from './types';
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
} & {
  default?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    type: {
      type: PropType<QLinkPropType>;
      default: string;
      validator: (value: QLinkPropType) => boolean;
    };
    underline: {
      type: PropType<QLinkPropUnderline>;
      default: boolean;
    };
    disabled: {
      type: PropType<QLinkPropDisabled>;
      default: boolean;
    };
    href: {
      type: PropType<QLinkPropHref>;
      default: null;
    };
    target: {
      type: PropType<QLinkPropTarget>;
      default: string;
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
      type: {
        type: PropType<QLinkPropType>;
        default: string;
        validator: (value: QLinkPropType) => boolean;
      };
      underline: {
        type: PropType<QLinkPropUnderline>;
        default: boolean;
      };
      disabled: {
        type: PropType<QLinkPropDisabled>;
        default: boolean;
      };
      href: {
        type: PropType<QLinkPropHref>;
        default: null;
      };
      target: {
        type: PropType<QLinkPropTarget>;
        default: string;
      };
    }>
  > &
    Readonly<{}>,
  {
    type: QLinkPropType;
    disabled: boolean;
    underline: boolean;
    href: QLinkPropHref;
    target: QLinkPropTarget;
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
