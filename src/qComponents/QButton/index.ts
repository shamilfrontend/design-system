import { withInstall } from '../helpers';

import Button from './src/QButton.vue';

export const QButton = withInstall(Button);

export {
  QButtonTypeEnum,
  QButtonSizeEnum,
  QButtonNativeTypeEnum,
  QButtonTagEnum
} from './src/types';

export type {
  QButtonProps,
  QButtonColorType,
  QButtonPropType,
  QButtonPropPlain,
  QButtonPropText,
  QButtonPropLink,
  QButtonPropSize,
  QButtonPropIcon,
  QButtonPropNativeType,
  QButtonPropLoading,
  QButtonPropDisabled,
  QButtonPropAutofocus,
  QButtonPropRound,
  QButtonPropCircle,
  QButtonPropBg,
  QButtonPropTag,
  QButtonPropColor,
  QButtonPropDark,
  QButtonPropAutoInsertSpace,
  QButtonPropFullWidth
} from './src/types';
