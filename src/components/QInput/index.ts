import { withInstall } from '@/helpers';

import Input from './src/QInput.vue';

export const QInput = withInstall(Input);

export type {
  QInputProps,
  QInputInstance,
  QInputPropModelValue,
  QInputPropType,
  QInputPropSize,
  QInputPropDisabled,
  QInputPropShowWordLimit,
  QInputPropValidateEvent,
  QInputPropPrefixIcon,
  QInputPropSuffixIcon,
  QInputPropClearable,
  QInputPropShowPassword,
  QInputPropFormatter,
  QInputPropParser
} from './src/types';
