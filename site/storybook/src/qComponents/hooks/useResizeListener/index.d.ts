import { Ref } from 'vue';
import { Nullable } from '../../../../types/helpers';
import { UseResizeListenerResult } from './types';
export declare const useResizeListener: (
  elRef: Ref<Nullable<HTMLElement>>,
  runOnMount?: boolean
) => UseResizeListenerResult;
