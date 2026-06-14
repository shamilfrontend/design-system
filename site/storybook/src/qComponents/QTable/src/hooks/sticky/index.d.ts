import { Nullable, Optional } from '../../../../../../types/helpers';
import { StickyGlobalConfig } from '../../QTableTSticky/types';
import { StickyConfig } from './types';
export declare const useSticky: (
  position: Nullable<Optional<'left' | 'right'>>,
  columnIndex: number,
  sticky: StickyGlobalConfig
) => StickyConfig;
export type { StickyConfig };
