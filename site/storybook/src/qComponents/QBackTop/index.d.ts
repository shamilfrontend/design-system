import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
export declare const QBackTop: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      visibilityHeight: {
        type: NumberConstructor;
        default: number;
      };
      right: {
        type: NumberConstructor;
        default: number;
      };
      bottom: {
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
    {},
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        visibilityHeight: {
          type: NumberConstructor;
          default: number;
        };
        right: {
          type: NumberConstructor;
          default: number;
        };
        bottom: {
          type: NumberConstructor;
          default: number;
        };
      }>
    > &
      Readonly<{}>,
    {
      bottom: number;
      right: number;
      visibilityHeight: number;
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
