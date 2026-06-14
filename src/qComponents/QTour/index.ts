import { withInstall } from '../helpers';
import Tour from './src/QTour.vue';
export { useTour } from './src/useTour';
export const QTour = withInstall(Tour);
export type { QTourProps, QTourStep } from './src/types';
