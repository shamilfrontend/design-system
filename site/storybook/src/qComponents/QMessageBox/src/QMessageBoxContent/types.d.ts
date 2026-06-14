import { Ref, ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
import { QMessageBoxAction } from '../constants';
export type QMessageBoxContentPropBeforeClose = Nullable<
  (action: QMessageBoxAction) => Promise<boolean>
>;
export interface QMessageBoxContentProps {
  title: Nullable<string>;
  message: Nullable<string>;
  submessage: Nullable<string>;
  confirmButtonText: Nullable<string>;
  cancelButtonText: Nullable<string>;
  beforeClose: Nullable<QMessageBoxContentPropBeforeClose>;
}
export interface QMessageBoxContentInstance {
  isConfirmBtnLoading: Ref<boolean>;
  isCancelBtnLoading: Ref<boolean>;
  isActionsSectionShown: ComputedRef<boolean>;
  handleConfirmBtnClick: () => void;
  handleCancelBtnClick: () => void;
}
