import { Ref } from 'vue';
import { QOptionModel } from '../../../../QOption';
import { Nullable, Optional } from '../../../../../../types/helpers';
import { NewOption, QSelectState } from '../../types';
export interface QSelectTagsInstance {
  filterable: Ref<Nullable<boolean>>;
  collapseTags: Ref<Nullable<boolean>>;
  isDisabled: Ref<Nullable<boolean>>;
  autocomplete: Ref<Nullable<string>>;
  selected: Ref<Optional<QSelectState['selected']>>;
  query: Ref<Optional<string>>;
  handleBackspaceKeyDown: () => void;
  handleTagClose: (option: Nullable<QOptionModel | NewOption>) => void;
  handleInput: (event: Event) => void;
  input: Ref<Nullable<HTMLInputElement>>;
}
