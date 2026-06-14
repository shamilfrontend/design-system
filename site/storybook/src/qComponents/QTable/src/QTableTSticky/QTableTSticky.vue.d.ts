import { Nullable } from '../../../../../types/helpers';
import {
  DefineComponent,
  Ref,
  ComputedRef,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { ExtendedColumn } from '../QTableContainer/types';
declare const __VLS_export: DefineComponent<
  {},
  {
    root: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
    stickyConfig: {
      columnsLeftNew: Record<string, Nullable<number>>;
      columnsRightNew: Record<string, Nullable<number>>;
    };
    isSelectable: ComputedRef<boolean>;
    columnList: ComputedRef<ExtendedColumn[]>;
    setColRef: (el: unknown, key: number | string) => void;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<{}> & Readonly<{}>,
  {},
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
