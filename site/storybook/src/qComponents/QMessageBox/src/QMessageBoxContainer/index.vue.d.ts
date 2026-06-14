import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QMessageBoxEvent } from '../types';
import {
  QMessageBoxContainerPropContent,
  QMessageBoxContainerPropWrapClass,
  QMessageBoxContainerPropWrapStyle,
  QMessageBoxContainerPropBeforeClose,
  QMessageBoxContainerPropTeleportTo
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    content: {
      type: PropType<QMessageBoxContainerPropContent>;
      required: true;
    };
    /**
     * whether QMessageBox can be closed by clicking the mask
     */
    closeOnClickShadow: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to distinguish canceling and closing the QMessageBox
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
     * class list of the QMessageBox
     */
    wrapClass: {
      type: PropType<QMessageBoxContainerPropWrapClass>;
      default: null;
    };
    /**
     * style list of the QMessageBox
     */
    wrapStyle: {
      type: PropType<QMessageBoxContainerPropWrapStyle>;
      default: null;
    };
    /**
     * callback before QMessageBox closes, and it will prevent QMessageBox from closing
     */
    beforeClose: {
      type: PropType<QMessageBoxContainerPropBeforeClose>;
      default: null;
    };
    /**
     * Specifies a target element where QMessageBox will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QMessageBoxContainerPropTeleportTo>;
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
    done: (event: QMessageBoxEvent) => any;
    remove: () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      content: {
        type: PropType<QMessageBoxContainerPropContent>;
        required: true;
      };
      /**
       * whether QMessageBox can be closed by clicking the mask
       */
      closeOnClickShadow: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to distinguish canceling and closing the QMessageBox
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
       * class list of the QMessageBox
       */
      wrapClass: {
        type: PropType<QMessageBoxContainerPropWrapClass>;
        default: null;
      };
      /**
       * style list of the QMessageBox
       */
      wrapStyle: {
        type: PropType<QMessageBoxContainerPropWrapStyle>;
        default: null;
      };
      /**
       * callback before QMessageBox closes, and it will prevent QMessageBox from closing
       */
      beforeClose: {
        type: PropType<QMessageBoxContainerPropBeforeClose>;
        default: null;
      };
      /**
       * Specifies a target element where QMessageBox will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
      teleportTo: {
        type: PropType<QMessageBoxContainerPropTeleportTo>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onDone?: ((event: QMessageBoxEvent) => any) | undefined;
      onRemove?: (() => any) | undefined;
    }>,
  {
    wrapClass: QMessageBoxContainerPropWrapClass;
    teleportTo: QMessageBoxContainerPropTeleportTo;
    distinguishCancelAndClose: boolean;
    preventFocusAfterClosing: boolean;
    beforeClose: QMessageBoxContainerPropBeforeClose;
    closeOnClickShadow: boolean;
    wrapStyle: QMessageBoxContainerPropWrapStyle;
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
