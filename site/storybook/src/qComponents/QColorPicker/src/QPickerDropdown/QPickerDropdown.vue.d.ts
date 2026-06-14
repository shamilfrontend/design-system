import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  Ref,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable, UnwrappedInstance } from '../../../../../types/helpers';
import { QColorAlphaSliderInstance } from '../QColorAlphaSlider';
import { QColorHueSliderInstance } from '../QColorHueSlider';
import { QColorSvpanelInstance } from '../QColorSvpanel';
import { QPickerDropdownPropColorFormat, QPickerHSVAModel } from './types';
import { ColorFormat } from '../types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    isShown: {
      type: BooleanConstructor;
      default: boolean;
    };
    isClearBtnShown: {
      type: BooleanConstructor;
      default: boolean;
    };
    color: {
      type: StringConstructor;
      default: null;
    };
    colorFormat: {
      type: PropType<QPickerDropdownPropColorFormat>;
      default: string;
      validator: (value: ColorFormat) => boolean;
    };
    alphaShown: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>,
  {
    t: (key: string, ...args: unknown[]) => string;
    dropdown: Ref<Nullable<HTMLElement>, Nullable<HTMLElement>>;
    tempColor: Ref<string, string>;
    refSv: Ref<
      UnwrappedInstance<QColorSvpanelInstance>,
      UnwrappedInstance<QColorSvpanelInstance>
    >;
    refHue: Ref<
      UnwrappedInstance<QColorHueSliderInstance>,
      UnwrappedInstance<QColorHueSliderInstance>
    >;
    refAlpha: Ref<
      UnwrappedInstance<QColorAlphaSliderInstance>,
      UnwrappedInstance<QColorAlphaSliderInstance>
    >;
    formatColor: () => void;
    handleMouseDown: () => void;
    handleClearBtnClick: () => void;
    handleConfirmBtnClick: () => void;
    handleChange: (newModel: QPickerHSVAModel) => void;
    handleInput: (event: Event) => void;
    closeDropdown: (e: KeyboardEvent | MouseEvent) => void;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    close: () => any;
    pick: (value: Nullable<string>) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      isShown: {
        type: BooleanConstructor;
        default: boolean;
      };
      isClearBtnShown: {
        type: BooleanConstructor;
        default: boolean;
      };
      color: {
        type: StringConstructor;
        default: null;
      };
      colorFormat: {
        type: PropType<QPickerDropdownPropColorFormat>;
        default: string;
        validator: (value: ColorFormat) => boolean;
      };
      alphaShown: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onClose?: (() => any) | undefined;
      onPick?: ((value: Nullable<string>) => any) | undefined;
    }>,
  {
    color: string;
    isClearBtnShown: boolean;
    isShown: boolean;
    colorFormat: ColorFormat;
    alphaShown: boolean;
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
