import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QAnchorPropItems, QAnchorPropOffset } from '.';
export declare const QAnchor: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      items: {
        type: PropType<QAnchorPropItems>;
        default: () => never[];
      };
      offset: {
        type: PropType<QAnchorPropOffset>;
        default: number;
      };
      container: {
        type: PropType<string | HTMLElement | null>;
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
        items: {
          type: PropType<QAnchorPropItems>;
          default: () => never[];
        };
        offset: {
          type: PropType<QAnchorPropOffset>;
          default: number;
        };
        container: {
          type: PropType<string | HTMLElement | null>;
          default: null;
        };
      }>
    > &
      Readonly<{}>,
    {
      offset: number;
      container: string | HTMLElement | null;
      items: QAnchorPropItems;
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
  QAnchorProps,
  QAnchorItem,
  QAnchorPropItems,
  QAnchorPropOffset
} from './src/types';
