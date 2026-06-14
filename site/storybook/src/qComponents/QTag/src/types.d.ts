import { Nullable } from '../../../../types/helpers';
export interface QTagProps {
  closable: Nullable<boolean>;
  ariaLabel: Nullable<string>;
}
export interface QTagInstance {
  handleClose: (event: MouseEvent) => void;
}
