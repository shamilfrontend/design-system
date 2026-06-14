import {
  QMessageBoxParams,
  QMessageBoxComponent,
  QMessageBoxContainerPropContent
} from './types';
export declare const isExternalComponent: (
  object: QMessageBoxContainerPropContent
) => object is QMessageBoxComponent;
export declare const isInternalComponent: (
  object: QMessageBoxContainerPropContent
) => object is QMessageBoxParams;
