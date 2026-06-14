import { Nullable } from '../../../../../types/helpers';
export interface QDialogContentProps {
  title: Nullable<string>;
  hideCloseButton: Nullable<boolean>;
}
export interface QDialogContentInstance {
  handleCloseBtnClick: () => void;
}
