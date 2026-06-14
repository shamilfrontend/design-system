import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QBreadcrumbsPropRoute } from '.';
export declare const QBreadcrumbs: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      linkComponent: {
        type: StringConstructor;
        default: null;
      };
      last: {
        type: StringConstructor;
        default: null;
      };
      route: {
        type: PropType<QBreadcrumbsPropRoute>;
        default: null;
      };
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
        linkComponent: {
          type: StringConstructor;
          default: null;
        };
        last: {
          type: StringConstructor;
          default: null;
        };
        route: {
          type: PropType<QBreadcrumbsPropRoute>;
          default: null;
        };
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
  >
>;
export type {
  QBreadcrumbsProps,
  QBreadcrumbsPropRoute,
  QBreadcrumbsInstance
} from './src/types';
