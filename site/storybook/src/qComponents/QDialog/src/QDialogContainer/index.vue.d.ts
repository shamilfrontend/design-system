import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QDialogEvent } from '../types';
import {
  QDialogContainerPropContent,
  QDialogContainerPropBeforeClose,
  QDialogContainerPropTeleportTo
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    content: {
      type: PropType<QDialogContainerPropContent>;
      required: true;
    };
    /**
     * offset from top border of parent relative element
     */
    offsetTop: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
    };
    /**
     * whether to distinguish canceling and closing the QDialog
     */
    distinguishCancelAndClose: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * cancel focus on document.activeElement after QDialog was closed
     */
    preventFocusAfterClosing: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * Extra class names for QDialog's wrapper
     */
    customClass: {
      type: StringConstructor;
      default: null;
    };
    /**
     * callback before QDialog closes, and it will prevent QDialog from closing
     */
    beforeClose: {
      type: PropType<QDialogContainerPropBeforeClose>;
      default: null;
    };
    /**
     * Specifies a target element where QDialog will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QDialogContainerPropTeleportTo>;
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
    done: (event: QDialogEvent) => any;
    remove: () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      content: {
        type: PropType<QDialogContainerPropContent>;
        required: true;
      };
      /**
       * offset from top border of parent relative element
       */
      offsetTop: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
      };
      /**
       * whether to distinguish canceling and closing the QDialog
       */
      distinguishCancelAndClose: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * cancel focus on document.activeElement after QDialog was closed
       */
      preventFocusAfterClosing: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * Extra class names for QDialog's wrapper
       */
      customClass: {
        type: StringConstructor;
        default: null;
      };
      /**
       * callback before QDialog closes, and it will prevent QDialog from closing
       */
      beforeClose: {
        type: PropType<QDialogContainerPropBeforeClose>;
        default: null;
      };
      /**
       * Specifies a target element where QDialog will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
      teleportTo: {
        type: PropType<QDialogContainerPropTeleportTo>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onDone?: ((event: QDialogEvent) => any) | undefined;
      onRemove?: (() => any) | undefined;
    }>,
  {
    teleportTo: QDialogContainerPropTeleportTo;
    offsetTop: string | number;
    distinguishCancelAndClose: boolean;
    preventFocusAfterClosing: boolean;
    customClass: string;
    beforeClose: QDialogContainerPropBeforeClose;
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
