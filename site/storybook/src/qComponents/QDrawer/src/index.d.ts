import { App, Ref } from 'vue';
import { Nullable } from '../../../../types/helpers';
import { QDrawerHookOptions, QDrawer } from './types';
export declare const createDrawer: (config?: QDrawerHookOptions) => {
  drawer: QDrawer;
  app: Ref<Nullable<App<Element>>>;
};
