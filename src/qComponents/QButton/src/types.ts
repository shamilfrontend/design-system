import type { ComputedRef } from 'vue';

import type { Nullable, ClassValue } from '#/helpers';

export enum QButtonTypeEnum {
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info'
}

export enum QButtonSizeEnum {
  Large = 'large',
  Default = 'default',
  Small = 'small'
}

export enum QButtonNativeTypeEnum {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset'
}

export enum QButtonTagEnum {
  Button = 'button',
  Anchor = 'a',
  Div = 'div',
  Span = 'span'
}

export type QButtonColorType = `${QButtonTypeEnum}`;

export type QButtonPropType = Nullable<QButtonColorType>;

export type QButtonPropSize = Nullable<`${QButtonSizeEnum}`>;

export type QButtonPropPlain = Nullable<boolean>;
export type QButtonPropText = Nullable<boolean>;
export type QButtonPropLink = Nullable<boolean>;
export type QButtonPropIcon = Nullable<ClassValue>;
export type QButtonPropNativeType = Nullable<`${QButtonNativeTypeEnum}`>;
export type QButtonPropLoading = Nullable<boolean>;
export type QButtonPropDisabled = Nullable<boolean>;
export type QButtonPropAutofocus = Nullable<boolean>;
export type QButtonPropRound = Nullable<boolean>;
export type QButtonPropCircle = Nullable<boolean>;
export type QButtonPropBg = Nullable<boolean>;
export type QButtonPropTag = Nullable<`${QButtonTagEnum}`>;
export type QButtonPropColor = Nullable<string>;
export type QButtonPropDark = Nullable<boolean>;
export type QButtonPropAutoInsertSpace = Nullable<boolean>;
export type QButtonPropFullWidth = Nullable<boolean>;

export interface QButtonProps {
  type?: QButtonPropType;
  plain?: QButtonPropPlain;
  text?: QButtonPropText;
  link?: QButtonPropLink;
  size?: QButtonPropSize;
  icon?: QButtonPropIcon;
  nativeType?: QButtonPropNativeType;
  loading?: QButtonPropLoading;
  disabled?: QButtonPropDisabled;
  autofocus?: QButtonPropAutofocus;
  round?: QButtonPropRound;
  circle?: QButtonPropCircle;
  bg?: QButtonPropBg;
  tag?: QButtonPropTag;
  color?: QButtonPropColor;
  dark?: QButtonPropDark;
  autoInsertSpace?: QButtonPropAutoInsertSpace;
  fullWidth?: QButtonPropFullWidth;
  ariaLabel?: Nullable<string>;
}

export interface QButtonInstance {
  isDisabled: ComputedRef<boolean>;
  isLoading: ComputedRef<boolean>;
  classList: ComputedRef<ClassValue[]>;
}
