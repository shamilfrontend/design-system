import { Ref, ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
export interface QColorSvpanelInstance {
  root: Ref<Nullable<HTMLElement>>;
  rootStyles: ComputedRef<Record<string, string>>;
  cursorStyles: ComputedRef<Record<string, string | number>>;
  update: () => void;
}
