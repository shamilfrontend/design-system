import { Plugin } from 'vue';
import { Nillable } from '../../../types/helpers';
import {
  QProgressIndicatior,
  QProgressIndicatiorPluginOptions
} from './src/types';
declare const QProgressIndicatiorPlugin: Plugin;
declare const useProgressIndicatior: () => Nillable<QProgressIndicatior>;
export {
  QProgressIndicatiorPlugin as QProgressIndicatior,
  useProgressIndicatior
};
export type { QProgressIndicatiorPluginOptions };
