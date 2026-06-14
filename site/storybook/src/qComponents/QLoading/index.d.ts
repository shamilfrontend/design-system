import {
  App,
  Directive,
  Plugin,
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { SFCWithInstall } from '../../../types/helpers';
import { QLoadingPropSize, QLoadingPropText } from '.';
declare const LOADING_INSTANCE_KEY = '__qLoadingInstance__';
interface LoadingElement extends HTMLElement {
  [LOADING_INSTANCE_KEY]?: {
    overlay: HTMLElement;
    app: App;
  };
}
declare const loadingDirective: Directive<LoadingElement, boolean>;
export declare const QLoading: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      size: {
        type: PropType<QLoadingPropSize>;
        default: string;
        validator: (value: QLoadingPropSize) => boolean;
      };
      text: {
        type: PropType<QLoadingPropText>;
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
        size: {
          type: PropType<QLoadingPropSize>;
          default: string;
          validator: (value: QLoadingPropSize) => boolean;
        };
        text: {
          type: PropType<QLoadingPropText>;
          default: null;
        };
      }>
    > &
      Readonly<{}>,
    {
      size: QLoadingPropSize;
      text: QLoadingPropText;
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
declare const QLoadingPlugin: Plugin;
export { QLoadingPlugin, loadingDirective };
export type {
  QLoadingProps,
  QLoadingPropSize,
  QLoadingPropText,
  QLoadingDirectiveBinding
} from './src/types';
