import { SFCWithInstall } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
export declare const QPagination: SFCWithInstall<
  DefineComponent<
    ExtractPropTypes<{
      pageCount: {
        type: NumberConstructor;
        default: null;
      };
      total: {
        type: NumberConstructor;
        default: null;
      };
      pageSize: {
        type: NumberConstructor;
        default: null;
      };
      currentPage: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      pagerCount: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
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
    {
      'current-change': (newPage: number) => any;
      'prev-click': (newPage: number) => any;
      'next-click': (newPage: number) => any;
      'quick-prev-click': (newPage: number) => any;
      'quick-next-click': (newPage: number) => any;
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        pageCount: {
          type: NumberConstructor;
          default: null;
        };
        total: {
          type: NumberConstructor;
          default: null;
        };
        pageSize: {
          type: NumberConstructor;
          default: null;
        };
        currentPage: {
          type: NumberConstructor;
          default: number;
          validator: (value: number) => boolean;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        pagerCount: {
          type: NumberConstructor;
          default: number;
          validator: (value: number) => boolean;
        };
        ariaLabel: {
          type: StringConstructor;
          default: null;
        };
      }>
    > &
      Readonly<{
        'onCurrent-change'?: ((newPage: number) => any) | undefined;
        'onPrev-click'?: ((newPage: number) => any) | undefined;
        'onNext-click'?: ((newPage: number) => any) | undefined;
        'onQuick-prev-click'?: ((newPage: number) => any) | undefined;
        'onQuick-next-click'?: ((newPage: number) => any) | undefined;
      }>,
    {
      ariaLabel: string;
      disabled: boolean;
      pageCount: number;
      total: number;
      pageSize: number;
      currentPage: number;
      pagerCount: number;
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
export type { QPaginationProps, QPaginationInstance } from './src/types';
