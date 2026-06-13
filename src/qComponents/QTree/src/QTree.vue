<script setup lang="ts">
import { ref, watch } from 'vue';
import type { PropType } from 'vue';

import QTreeNode from './QTreeNode.vue';
import type { QTreeNode as QTreeNodeType, QTreePropData } from './types';

defineOptions({
  name: 'QTree',
  componentName: 'QTree'
});

const props = defineProps({
  data: {
    type: Array as PropType<QTreePropData>,
    default: (): QTreePropData => []
  },
  defaultExpandAll: {
    type: Boolean,
    default: false
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  select: [node: QTreeNodeType];
}>();

const expandedKeys = ref<Set<string | number>>(new Set());

function collectAllKeys(nodes: QTreePropData): (string | number)[] {
  const keys: (string | number)[] = [];

  function walk(items: QTreePropData): void {
    items.forEach(node => {
      if (node.children?.length) {
        keys.push(node.id);
        walk(node.children);
      }
    });
  }

  walk(nodes);

  return keys;
}

function handleToggle(key: string | number): void {
  const next = new Set(expandedKeys.value);

  if (next.has(key)) {
    next.delete(key);
  } else {
    next.add(key);
  }

  expandedKeys.value = next;
}

function handleSelect(node: QTreeNodeType): void {
  emit('select', node);
}

watch(
  () => props.data,
  () => {
    if (props.defaultExpandAll) {
      expandedKeys.value = new Set(collectAllKeys(props.data));
    }
  },
  { immediate: true, deep: true }
);
</script>

<template>
  <ul
    class="q-tree"
    role="tree"
  >
    <QTreeNode
      v-for="node in data"
      :key="node.id"
      :node="node"
      :expanded-keys="expandedKeys"
      :expand-on-click-node="expandOnClickNode"
      @toggle="handleToggle"
      @select="handleSelect"
    />
  </ul>
</template>
