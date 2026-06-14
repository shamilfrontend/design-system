import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QBreadcrumbsPropRoute } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * component name for link
     */
    linkComponent: {
      type: StringConstructor;
      default: null;
    };
    /**
     * custom last crumb
     */
    last: {
      type: StringConstructor;
      default: null;
    };
    /**
     * **Array of Objects**, object must contain required fields: `path` - uses as route path, `name` - route name, `meta` - must contain `breadcrumb` - visible title
     */
    route: {
      type: PropType<QBreadcrumbsPropRoute>;
      default: null;
    };
    /**
     * accessible label for breadcrumb navigation
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
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * component name for link
       */
      linkComponent: {
        type: StringConstructor;
        default: null;
      };
      /**
       * custom last crumb
       */
      last: {
        type: StringConstructor;
        default: null;
      };
      /**
       * **Array of Objects**, object must contain required fields: `path` - uses as route path, `name` - route name, `meta` - must contain `breadcrumb` - visible title
       */
      route: {
        type: PropType<QBreadcrumbsPropRoute>;
        default: null;
      };
      /**
       * accessible label for breadcrumb navigation
       */
      ariaLabel: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    ariaLabel: string;
    linkComponent: string;
    last: string;
    route: QBreadcrumbsPropRoute;
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
