import type { ComputedRef } from 'vue';

import type { Nullable, ClassValue } from '#/helpers';

type NativeType = 'button' | 'submit' | 'reset';

export type QButtonColorType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type QButtonPropType = Nullable<QButtonColorType>;

export type QButtonPropSize = Nullable<'large' | 'default' | 'small'>;

export type QButtonPropPlain = Nullable<boolean>;
export type QButtonPropText = Nullable<boolean>;
export type QButtonPropLink = Nullable<boolean>;
export type QButtonPropIcon = Nullable<ClassValue>;
export type QButtonPropNativeType = Nullable<NativeType>;
export type QButtonPropLoading = Nullable<boolean>;
export type QButtonPropDisabled = Nullable<boolean>;
export type QButtonPropAutofocus = Nullable<boolean>;
export type QButtonPropRound = Nullable<boolean>;
export type QButtonPropCircle = Nullable<boolean>;
export type QButtonPropBg = Nullable<boolean>;
export type QButtonPropTag = Nullable<string>;
export type QButtonPropColor = Nullable<string>;
export type QButtonPropDark = Nullable<boolean>;
export type QButtonPropAutoInsertSpace = Nullable<boolean>;
export type QButtonPropFullWidth = Nullable<boolean>;

export interface QButtonProps {
  type: QButtonPropType;
  plain: QButtonPropPlain;
  text: QButtonPropText;
  link: QButtonPropLink;
  size: QButtonPropSize;
  icon: QButtonPropIcon;
  nativeType: QButtonPropNativeType;
  loading: QButtonPropLoading;
  disabled: QButtonPropDisabled;
  autofocus: QButtonPropAutofocus;
  round: QButtonPropRound;
  circle: QButtonPropCircle;
  bg: QButtonPropBg;
  tag: QButtonPropTag;
  color: QButtonPropColor;
  dark: QButtonPropDark;
  autoInsertSpace: QButtonPropAutoInsertSpace;
  fullWidth: QButtonPropFullWidth;
  ariaLabel: Nullable<string>;
}

export interface QButtonInstance {
  isDisabled: ComputedRef<boolean>;
  isLoading: ComputedRef<boolean>;
  classList: ComputedRef<ClassValue[]>;
}
