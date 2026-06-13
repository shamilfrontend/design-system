import type { ComponentPublicInstance } from 'vue';

export type QLoadingPropSize = 'small' | 'medium' | 'large';
export type QLoadingPropText = string | null;

export interface QLoadingProps {
  size: QLoadingPropSize;
  text: QLoadingPropText;
}

export type QLoadingInstance = ComponentPublicInstance<QLoadingProps>;

export interface QLoadingDirectiveBinding {
  value: boolean;
  modifiers: {
    fullscreen?: boolean;
  };
}
