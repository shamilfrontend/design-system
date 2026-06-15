<script setup lang="ts">
import { inject, ref, toRefs } from 'vue';

import type { QOptionModel } from '@/components/QOption';
import type { QSelectProvider } from '@/components/QSelect';

import type { Nullable } from '#/helpers';

import type { NewOption } from '../../types';

defineOptions({
  name: 'QSelectTags'
});

const emit = defineEmits([
  'remove-tag',
  'exit',
  'update:query',
  'focus',
  'keyup-enter'
]);

const input = ref<Nullable<HTMLInputElement>>(null);
const qSelect = inject<Nullable<QSelectProvider>>('qSelect', null);
const { selected = ref<QOptionModel[]>([]), query = ref('') } = toRefs(
  qSelect?.state ?? {}
);

const filterable = qSelect?.filterable ?? ref(false);
const collapseTags = qSelect?.collapseTags ?? ref(false);
const isDisabled = qSelect?.isDisabled ?? ref(false);
const autocomplete = qSelect?.autocomplete ?? ref('off');

const handleBackspaceKeyDown = (): void => {
  if (!qSelect?.state?.query && Array.isArray(qSelect?.state?.selected)) {
    emit(
      'remove-tag',
      qSelect?.state?.selected[qSelect.state.selected.length - 1]
    );
  }
};

const handleTagClose = (option: Nullable<QOptionModel | NewOption>): void => {
  emit('remove-tag', option);
};

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emit('update:query', target.value);
};

defineExpose({ input });
</script>

<template>
  <div
    class="q-select-tags"
    :class="{
      'q-select-tags_filterable': filterable,
      'q-select-tags_collapse-tags': collapseTags
    }"
  >
    <template v-if="Array.isArray(selected)">
      <template v-if="collapseTags && selected.length">
        <q-tag
          :closable="!isDisabled"
          @close="handleTagClose(selected[0])"
        >
          {{ selected[0].preparedLabel }}
        </q-tag>
        <q-tag
          v-if="selected.length > 1"
          :closable="false"
        >
          + {{ selected.length - 1 }}
        </q-tag>
      </template>

      <template v-if="!collapseTags">
        <q-tag
          v-for="option in selected"
          :key="option.key"
          :closable="!isDisabled"
          @close="handleTagClose(option)"
        >
          {{ option.preparedLabel }}
        </q-tag>
      </template>
    </template>
    <input
      v-if="filterable && !isDisabled"
      ref="input"
      :value="query"
      type="text"
      class="q-select-tags__input"
      :autocomplete="autocomplete ?? 'off'"
      @focus="emit('focus')"
      @keyup.esc="emit('exit')"
      @keyup.enter="emit('keyup-enter')"
      @keydown.backspace.capture="handleBackspaceKeyDown"
      @input="handleInput"
    />
  </div>
</template>
