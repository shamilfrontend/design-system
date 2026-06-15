<script setup lang="ts">
import type { PropType } from 'vue';

import type { QTreeNode } from './types';

defineOptions({
  name: 'QTreeNode',
});

const props = defineProps({
  node: {
    type: Object as PropType<QTreeNode>,
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  expandedKeys: {
    type: Set as PropType<Set<string | number>>,
    required: true
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  toggle: [key: string | number];
  select: [node: QTreeNode];
}>();

const hasChildren = (): boolean =>
  Boolean(props.node.children && props.node.children.length > 0);

const isExpanded = (): boolean => props.expandedKeys.has(props.node.id);

function handleToggle(): void {
  if (!hasChildren()) return;

  emit('toggle', props.node.id);
}

function handleSelect(): void {
  if (props.node.disabled) return;

  if (props.expandOnClickNode && hasChildren()) {
    emit('toggle', props.node.id);
  }

  emit('select', props.node);
}
</script>

<template>
  <li
    class="q-tree__node"
    :class="{
      'q-tree__node_disabled': node.disabled,
      'q-tree__node_expanded': isExpanded()
    }"
  >
    <div
      class="q-tree__node-content"
      :style="{ paddingLeft: `${level * 20}px` }"
      @click="handleSelect"
    >
      <span
        v-if="hasChildren()"
        class="q-tree__expand-icon"
        :class="isExpanded() ? 'q-icon-arrow-down' : 'q-icon-arrow-right'"
        @click.stop="handleToggle"
      />
      <span
        v-else
        class="q-tree__expand-icon q-tree__expand-icon_placeholder"
      />
      <span class="q-tree__label">{{ node.label }}</span>
    </div>
    <ul
      v-if="hasChildren() && isExpanded()"
      class="q-tree__children"
    >
      <QTreeNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :level="level + 1"
        :expanded-keys="expandedKeys"
        :expand-on-click-node="expandOnClickNode"
        @toggle="emit('toggle', $event)"
        @select="emit('select', $event)"
      />
    </ul>
  </li>
</template>
