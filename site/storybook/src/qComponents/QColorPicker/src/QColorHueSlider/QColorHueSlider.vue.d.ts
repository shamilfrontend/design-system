import { Nullable } from '../../../../../types/helpers';
import { QPickerHSVAModel } from '../QPickerDropdown/types';
import {
  DefineComponent,
  Ref,
  ComputedRef,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  {},
  {
    root: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
    thumb: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
    bar: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
    thumbStyles: ComputedRef<Record<string, string>>;
    handleBarClick: (event: MouseEvent) => void;
    update: () => void;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    change: (newModel: QPickerHSVAModel) => any;
  },
  string,
  PublicProps,
  Readonly<{}> &
    Readonly<{
      onChange?: ((newModel: QPickerHSVAModel) => any) | undefined;
    }>,
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
