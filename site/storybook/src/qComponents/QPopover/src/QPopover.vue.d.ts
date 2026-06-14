import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QPopoverPropTeleportTo,
  QPopoverPropTrigger,
  QPopoverPropPlacement,
  QPopoverPropPopperOptions
} from './types';
import { Placement } from '@popperjs/core';
declare var __VLS_1: {}, __VLS_23: {};
type __VLS_Slots = {} & {
  reference?: (props: typeof __VLS_1) => any;
} & {
  default?: (props: typeof __VLS_23) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * Popover content title
     */
    title: {
      type: StringConstructor;
      default: null;
    };
    /**
     * opening event trigger
     */
    trigger: {
      type: PropType<QPopoverPropTrigger>;
      default: string;
      validator: (value: QPopoverPropTrigger) => boolean;
    };
    /**
     * see: https://popper.js.org/docs/v2/constructors/#options
     */
    placement: {
      type: PropType<QPopoverPropPlacement>;
      default: string;
      validator: (value: Placement) => boolean;
    };
    /**
     * icon class name
     */
    icon: {
      type: StringConstructor;
      default: null;
    };
    /**
     * content icon color
     */
    iconColor: {
      type: StringConstructor;
      default: string;
    };
    /**
     * custom transition's animation
     */
    transition: {
      type: StringConstructor;
      default: string;
    };
    /**
     * delay before appearing, in milliseconds
     * (works only when trigger is hover)
     */
    openDelay: {
      type: NumberConstructor;
      default: number;
    };
    /**
     * delay before disappearing, in milliseconds
     * (works only when trigger is hover)
     */
    closeDelay: {
      type: NumberConstructor;
      default: number;
    };
    /**
     * popover min-width
     */
    minWidth: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
    };
    /**
     * popover max-width
     */
    maxWidth: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
    };
    /**
     * see: https://popper.js.org/docs/v2/constructors/#options
     */
    popperOptions: {
      type: PropType<QPopoverPropPopperOptions>;
      default: () => QPopoverPropPopperOptions;
    };
    /**
     * Specifies a target element where QPopover will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QPopoverPropTeleportTo>;
      default: string;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    hide: () => any;
    show: () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * Popover content title
       */
      title: {
        type: StringConstructor;
        default: null;
      };
      /**
       * opening event trigger
       */
      trigger: {
        type: PropType<QPopoverPropTrigger>;
        default: string;
        validator: (value: QPopoverPropTrigger) => boolean;
      };
      /**
       * see: https://popper.js.org/docs/v2/constructors/#options
       */
      placement: {
        type: PropType<QPopoverPropPlacement>;
        default: string;
        validator: (value: Placement) => boolean;
      };
      /**
       * icon class name
       */
      icon: {
        type: StringConstructor;
        default: null;
      };
      /**
       * content icon color
       */
      iconColor: {
        type: StringConstructor;
        default: string;
      };
      /**
       * custom transition's animation
       */
      transition: {
        type: StringConstructor;
        default: string;
      };
      /**
       * delay before appearing, in milliseconds
       * (works only when trigger is hover)
       */
      openDelay: {
        type: NumberConstructor;
        default: number;
      };
      /**
       * delay before disappearing, in milliseconds
       * (works only when trigger is hover)
       */
      closeDelay: {
        type: NumberConstructor;
        default: number;
      };
      /**
       * popover min-width
       */
      minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
      };
      /**
       * popover max-width
       */
      maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
      };
      /**
       * see: https://popper.js.org/docs/v2/constructors/#options
       */
      popperOptions: {
        type: PropType<QPopoverPropPopperOptions>;
        default: () => QPopoverPropPopperOptions;
      };
      /**
       * Specifies a target element where QPopover will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
      teleportTo: {
        type: PropType<QPopoverPropTeleportTo>;
        default: string;
      };
    }>
  > &
    Readonly<{
      onHide?: (() => any) | undefined;
      onShow?: (() => any) | undefined;
    }>,
  {
    title: string;
    trigger: QPopoverPropTrigger;
    transition: string;
    placement: Placement;
    icon: string;
    maxWidth: string | number;
    minWidth: string | number;
    teleportTo: QPopoverPropTeleportTo;
    popperOptions: QPopoverPropPopperOptions;
    iconColor: string;
    openDelay: number;
    closeDelay: number;
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
