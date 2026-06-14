import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QSkeletonPropVariant,
  QSkeletonPropAnimated,
  QSkeletonPropRows,
  QSkeletonPropWidth,
  QSkeletonPropHeight,
  QSkeletonPropRadius
} from '.';
export declare const QSkeleton: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      variant: {
        type: PropType<QSkeletonPropVariant>;
        default: string;
        validator: (value: 'button' | 'circle' | 'rect' | 'text') => boolean;
      };
      animated: {
        type: PropType<QSkeletonPropAnimated>;
        default: boolean;
      };
      rows: {
        type: PropType<QSkeletonPropRows>;
        default: number;
      };
      width: {
        type: PropType<QSkeletonPropWidth>;
        default: null;
      };
      height: {
        type: PropType<QSkeletonPropHeight>;
        default: null;
      };
      radius: {
        type: PropType<QSkeletonPropRadius>;
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
        variant: {
          type: PropType<QSkeletonPropVariant>;
          default: string;
          validator: (value: 'button' | 'circle' | 'rect' | 'text') => boolean;
        };
        animated: {
          type: PropType<QSkeletonPropAnimated>;
          default: boolean;
        };
        rows: {
          type: PropType<QSkeletonPropRows>;
          default: number;
        };
        width: {
          type: PropType<QSkeletonPropWidth>;
          default: null;
        };
        height: {
          type: PropType<QSkeletonPropHeight>;
          default: null;
        };
        radius: {
          type: PropType<QSkeletonPropRadius>;
          default: null;
        };
      }>
    > &
      Readonly<{}>,
    {
      height: QSkeletonPropHeight;
      width: QSkeletonPropWidth;
      rows: QSkeletonPropRows;
      variant: QSkeletonPropVariant;
      animated: QSkeletonPropAnimated;
      radius: QSkeletonPropRadius;
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
  QSkeletonProps,
  QSkeletonInstance,
  QSkeletonPropVariant,
  QSkeletonPropAnimated,
  QSkeletonPropRows,
  QSkeletonPropWidth,
  QSkeletonPropHeight,
  QSkeletonPropRadius
} from './src/types';
