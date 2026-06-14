import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QContextMenuPropPosition,
  QContextMenuPropMenuItems,
  QContextMenuPropTeleportTo
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    menuItems: {
      type: PropType<QContextMenuPropMenuItems>;
      required: true;
    };
    position: {
      type: PropType<QContextMenuPropPosition>;
      default: string;
      validator: (value: QContextMenuPropPosition) => boolean;
    };
    /**
     * Specifies a target element where QContextMenu will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QContextMenuPropTeleportTo>;
      default: null;
    };
    /**
     * accessible label for the menu trigger button
     */
    ariaLabel: {
      type: StringConstructor;
      default: null;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    action: (actionName: string) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      menuItems: {
        type: PropType<QContextMenuPropMenuItems>;
        required: true;
      };
      position: {
        type: PropType<QContextMenuPropPosition>;
        default: string;
        validator: (value: QContextMenuPropPosition) => boolean;
      };
      /**
       * Specifies a target element where QContextMenu will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
      teleportTo: {
        type: PropType<QContextMenuPropTeleportTo>;
        default: null;
      };
      /**
       * accessible label for the menu trigger button
       */
      ariaLabel: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      onAction?: ((actionName: string) => any) | undefined;
    }>,
  {
    ariaLabel: string;
    position: QContextMenuPropPosition;
    teleportTo: QContextMenuPropTeleportTo;
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
