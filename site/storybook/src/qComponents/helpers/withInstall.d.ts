import { Component } from 'vue';
import { SFCWithInstall } from '../../../types/helpers';
export declare const withInstall: <T extends Component>(
  main: T
) => SFCWithInstall<T>;
