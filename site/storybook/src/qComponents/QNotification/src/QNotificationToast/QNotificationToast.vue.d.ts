import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { NotifyType } from '../constants';
import { QNotifyId } from '../types';
import {
  QNotificationToastPropContent,
  QNotificationToastPropType,
  QNotificationToastPropOnClose
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    uniqId: {
      type: PropType<QNotifyId>;
      required: true;
    };
    /**
     * description text
     */
    content: {
      type: PropType<QNotificationToastPropContent>;
      required: true;
    };
    /**
     * notification type
     */
    type: {
      type: PropType<QNotificationToastPropType>;
      default: null;
      validator: (value: NotifyType) => boolean;
    };
    /**
     * icon class
     */
    icon: {
      type: StringConstructor;
      default: null;
    };
    /**
     * duration before close
     */
    duration: {
      type: NumberConstructor;
      default: number;
    };
    /**
     * callback function when closed
     */
    onClose: {
      type: PropType<QNotificationToastPropOnClose>;
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
    remove: (uniqId: QNotifyId) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      uniqId: {
        type: PropType<QNotifyId>;
        required: true;
      };
      /**
       * description text
       */
      content: {
        type: PropType<QNotificationToastPropContent>;
        required: true;
      };
      /**
       * notification type
       */
      type: {
        type: PropType<QNotificationToastPropType>;
        default: null;
        validator: (value: NotifyType) => boolean;
      };
      /**
       * icon class
       */
      icon: {
        type: StringConstructor;
        default: null;
      };
      /**
       * duration before close
       */
      duration: {
        type: NumberConstructor;
        default: number;
      };
      /**
       * callback function when closed
       */
      onClose: {
        type: PropType<QNotificationToastPropOnClose>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onRemove?: ((uniqId: QNotifyId) => any) | undefined;
    }>,
  {
    type: NotifyType;
    onClose: QNotificationToastPropOnClose;
    duration: number;
    icon: string;
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
