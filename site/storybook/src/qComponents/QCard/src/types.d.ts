import { Nullable } from '../../../../types/helpers';
export type QCardPropShadow = Nullable<'always' | 'hover' | 'never'>;
export type QCardPropTitle = Nullable<string>;
export type QCardPropBodyPadding = Nullable<boolean>;
export interface QCardProps {
  shadow: QCardPropShadow;
  title: QCardPropTitle;
  bodyPadding: QCardPropBodyPadding;
}
