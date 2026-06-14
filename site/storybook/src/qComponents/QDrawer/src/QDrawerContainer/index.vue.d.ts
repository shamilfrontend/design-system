import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QDrawerEvent } from '../types';
import {
  QDrawerContainerPropContent,
  QDrawerContainerPropPosition,
  QDrawerContainerPropBeforeClose,
  QDrawerContainerPropTeleportTo
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    content: {
      type: PropType<QDrawerContainerPropContent>;
      required: true;
    };
    /**
     * width of QDrawer
     */
    width: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
    };
    /**
     * closes QDrawer by click on shadow layer
     */
    closeOnClickShadow: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to distinguish canceling and closing the QDrawer
     */
    distinguishCancelAndClose: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * cancel focus on document.activeElement after QDrawer was closed
     */
    preventFocusAfterClosing: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * Drawer's position
     */
    position: {
      type: PropType<QDrawerContainerPropPosition>;
      default: string;
      validator: (value: QDrawerContainerPropPosition) => boolean;
    };
    /**
     * Extra class names for Drawer's wrapper
     */
    customClass: {
      type: StringConstructor;
      default: null;
    };
    /**
     * callback before QDrawer closes, and it will prevent QDrawer from closing
     */
    beforeClose: {
      type: PropType<QDrawerContainerPropBeforeClose>;
      default: null;
    };
    /**
     * Specifies a target element where QDrawer will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QDrawerContainerPropTeleportTo>;
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
    done: (event: QDrawerEvent) => any;
    remove: () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      content: {
        type: PropType<QDrawerContainerPropContent>;
        required: true;
      };
      /**
       * width of QDrawer
       */
      width: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
      };
      /**
       * closes QDrawer by click on shadow layer
       */
      closeOnClickShadow: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to distinguish canceling and closing the QDrawer
       */
      distinguishCancelAndClose: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * cancel focus on document.activeElement after QDrawer was closed
       */
      preventFocusAfterClosing: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * Drawer's position
       */
      position: {
        type: PropType<QDrawerContainerPropPosition>;
        default: string;
        validator: (value: QDrawerContainerPropPosition) => boolean;
      };
      /**
       * Extra class names for Drawer's wrapper
       */
      customClass: {
        type: StringConstructor;
        default: null;
      };
      /**
       * callback before QDrawer closes, and it will prevent QDrawer from closing
       */
      beforeClose: {
        type: PropType<QDrawerContainerPropBeforeClose>;
        default: null;
      };
      /**
       * Specifies a target element where QDrawer will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
      teleportTo: {
        type: PropType<QDrawerContainerPropTeleportTo>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onDone?: ((event: QDrawerEvent) => any) | undefined;
      onRemove?: (() => any) | undefined;
    }>,
  {
    width: string | number;
    position: QDrawerContainerPropPosition;
    teleportTo: QDrawerContainerPropTeleportTo;
    distinguishCancelAndClose: boolean;
    preventFocusAfterClosing: boolean;
    customClass: string;
    beforeClose: QDrawerContainerPropBeforeClose;
    closeOnClickShadow: boolean;
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
