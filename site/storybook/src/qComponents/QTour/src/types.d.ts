export interface QTourStep {
  target: string;
  title: string;
  description?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
export interface QTourProps {
  modelValue: boolean;
  steps: QTourStep[];
  current: number;
}
