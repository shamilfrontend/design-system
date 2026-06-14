import { Ref, ComputedRef } from 'vue';
import {
  Nullable,
  ClassValue,
  UnwrappedInstance
} from '../../../../../types/helpers';
import {
  StickyGlobalConfig,
  QTableTStickyInstance
} from '../QTableTSticky/types';
export interface QTableTProvider {
  tableHeight: Ref<Nullable<number>>;
  stickyGlobalConfig: ComputedRef<StickyGlobalConfig>;
}
export interface QTableTInstance {
  root: Ref<Nullable<HTMLElement>>;
  thead: Ref<Nullable<HTMLElement>>;
  sticky: Ref<UnwrappedInstance<QTableTStickyInstance>>;
  isColgroupShown: ComputedRef<boolean>;
  isTotalShown: ComputedRef<boolean>;
  rootClasses: ComputedRef<ClassValue>;
}
