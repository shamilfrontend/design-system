import { Nullable } from '../../../../types/helpers';
export type QAlertPropType = Nullable<'success' | 'warning' | 'info' | 'error'>;
export type QAlertPropTitle = Nullable<string>;
export type QAlertPropClosable = Nullable<boolean>;
export type QAlertPropShowIcon = Nullable<boolean>;
export type QAlertPropAriaLabel = Nullable<string>;
export interface QAlertProps {
  type: QAlertPropType;
  title: QAlertPropTitle;
  closable: QAlertPropClosable;
  showIcon: QAlertPropShowIcon;
  ariaLabel: QAlertPropAriaLabel;
}
export interface QAlertInstance {
  handleClose: (event: MouseEvent) => void;
}
