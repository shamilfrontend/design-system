import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTimelinePropItems, QTimelinePropMode } from '.';
export declare const QTimeline: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      items: {
        type: PropType<QTimelinePropItems>;
        default: () => QTimelinePropItems;
      };
      mode: {
        type: PropType<QTimelinePropMode>;
        default: string;
        validator: (value: QTimelinePropMode) => boolean;
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
          type: PropType<QTimelinePropItems>;
          default: () => QTimelinePropItems;
        };
        mode: {
          type: PropType<QTimelinePropMode>;
          default: string;
          validator: (value: QTimelinePropMode) => boolean;
        };
      }>
    > &
      Readonly<{}>,
    {
      mode: QTimelinePropMode;
      items: QTimelinePropItems;
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
  QTimelineProps,
  QTimelineItem,
  QTimelinePropItems,
  QTimelinePropMode
} from './src/types';
