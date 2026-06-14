import { Nullable } from '../../../../../types/helpers';
import { Option } from '../types';
declare const findFullPath: (
  branches: Nullable<Option[]>,
  find: Nullable<string | number>
) => Nullable<string[]>;
export default findFullPath;
