export interface QStepsItem {
  title: string;
  description?: string;
  icon?: string;
}

export type QStepsPropActive = number;
export type QStepsPropDirection = 'horizontal' | 'vertical';
export type QStepsPropFinishStatus = 'wait' | 'process' | 'finish' | 'error';

export interface QStepsProps {
  active: QStepsPropActive;
  direction: QStepsPropDirection;
  finishStatus: QStepsPropFinishStatus;
}
