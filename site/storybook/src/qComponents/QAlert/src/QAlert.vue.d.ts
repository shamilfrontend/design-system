import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QAlertPropType,
  QAlertPropTitle,
  QAlertPropClosable,
  QAlertPropShowIcon,
  QAlertPropAriaLabel
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * alert type
     */
    type: {
      type: PropType<QAlertPropType>;
      default: string;
      validator: (value: 'success' | 'warning' | 'info' | 'error') => boolean;
    };
    /**
     * alert title
     */
    title: {
      type: PropType<QAlertPropTitle>;
      default: null;
    };
    /**
     * whether close button is shown
     */
    closable: {
      type: PropType<QAlertPropClosable>;
      default: boolean;
    };
    /**
     * whether icon is shown
     */
    showIcon: {
      type: PropType<QAlertPropShowIcon>;
      default: boolean;
    };
    /**
     * accessible label for close button
     */
    ariaLabel: {
      type: PropType<QAlertPropAriaLabel>;
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
    close: (event: MouseEvent) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * alert type
       */
      type: {
        type: PropType<QAlertPropType>;
        default: string;
        validator: (value: 'success' | 'warning' | 'info' | 'error') => boolean;
      };
      /**
       * alert title
       */
      title: {
        type: PropType<QAlertPropTitle>;
        default: null;
      };
      /**
       * whether close button is shown
       */
      closable: {
        type: PropType<QAlertPropClosable>;
        default: boolean;
      };
      /**
       * whether icon is shown
       */
      showIcon: {
        type: PropType<QAlertPropShowIcon>;
        default: boolean;
      };
      /**
       * accessible label for close button
       */
      ariaLabel: {
        type: PropType<QAlertPropAriaLabel>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onClose?: ((event: MouseEvent) => any) | undefined;
    }>,
  {
    type: QAlertPropType;
    title: QAlertPropTitle;
    closable: QAlertPropClosable;
    showIcon: QAlertPropShowIcon;
    ariaLabel: QAlertPropAriaLabel;
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
