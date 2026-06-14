import {
  PropType,
  Ref,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QNotifyItem, QNotifyId } from '../types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * icon class
     */
    list: {
      type: PropType<Ref<QNotifyItem[]>>;
      required: true;
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
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    remove: (id: QNotifyId) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * icon class
       */
      list: {
        type: PropType<Ref<QNotifyItem[]>>;
        required: true;
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
    }>
  > &
    Readonly<{
      onRemove?: ((id: QNotifyId) => any) | undefined;
    }>,
  {
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
