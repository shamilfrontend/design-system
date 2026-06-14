import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QTooltipPropContent,
  QTooltipPropPlacement,
  QTooltipPropEffect,
  QTooltipPropDisabled,
  QTooltipPropOpenDelay,
  QTooltipPropCloseDelay,
  QTooltipPropTeleportTo,
  QTooltipPropPopperOptions
} from './types';
import { Placement } from '@popperjs/core';
declare var __VLS_1: {}, __VLS_17: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
} & {
  content?: (props: typeof __VLS_17) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * tooltip text
     */
    content: {
      type: PropType<QTooltipPropContent>;
      default: null;
    };
    /**
     * tooltip placement
     */
    placement: {
      type: PropType<QTooltipPropPlacement>;
      default: string;
      validator: (value: Placement) => boolean;
    };
    /**
     * visual theme
     */
    effect: {
      type: PropType<QTooltipPropEffect>;
      default: string;
      validator: (value: QTooltipPropEffect) => boolean;
    };
    /**
     * whether tooltip is disabled
     */
    disabled: {
      type: PropType<QTooltipPropDisabled>;
      default: boolean;
    };
    /**
     * delay before appearing, in milliseconds
     */
    openDelay: {
      type: PropType<QTooltipPropOpenDelay>;
      default: number;
    };
    /**
     * delay before disappearing, in milliseconds
     */
    closeDelay: {
      type: PropType<QTooltipPropCloseDelay>;
      default: number;
    };
    /**
     * target element where tooltip will be teleported
     */
    teleportTo: {
      type: PropType<QTooltipPropTeleportTo>;
      default: string;
    };
    /**
     * see: https://popper.js.org/docs/v2/constructors/#options
     */
    popperOptions: {
      type: PropType<QTooltipPropPopperOptions>;
      default: () => QTooltipPropPopperOptions;
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
      /**
       * tooltip text
       */
      content: {
        type: PropType<QTooltipPropContent>;
        default: null;
      };
      /**
       * tooltip placement
       */
      placement: {
        type: PropType<QTooltipPropPlacement>;
        default: string;
        validator: (value: Placement) => boolean;
      };
      /**
       * visual theme
       */
      effect: {
        type: PropType<QTooltipPropEffect>;
        default: string;
        validator: (value: QTooltipPropEffect) => boolean;
      };
      /**
       * whether tooltip is disabled
       */
      disabled: {
        type: PropType<QTooltipPropDisabled>;
        default: boolean;
      };
      /**
       * delay before appearing, in milliseconds
       */
      openDelay: {
        type: PropType<QTooltipPropOpenDelay>;
        default: number;
      };
      /**
       * delay before disappearing, in milliseconds
       */
      closeDelay: {
        type: PropType<QTooltipPropCloseDelay>;
        default: number;
      };
      /**
       * target element where tooltip will be teleported
       */
      teleportTo: {
        type: PropType<QTooltipPropTeleportTo>;
        default: string;
      };
      /**
       * see: https://popper.js.org/docs/v2/constructors/#options
       */
      popperOptions: {
        type: PropType<QTooltipPropPopperOptions>;
        default: () => QTooltipPropPopperOptions;
      };
    }>
  > &
    Readonly<{}>,
  {
    disabled: QTooltipPropDisabled;
    placement: Placement;
    effect: QTooltipPropEffect;
    content: QTooltipPropContent;
    teleportTo: QTooltipPropTeleportTo;
    popperOptions: QTooltipPropPopperOptions;
    openDelay: QTooltipPropOpenDelay;
    closeDelay: QTooltipPropCloseDelay;
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
