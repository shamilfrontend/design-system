<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { t } from '@/qComponents/locale';

import type { Optional } from '#/helpers';

import type { QBreadcrumbsPropRoute, RouteItem } from './types';

defineOptions({
  name: 'QBreadcrumbs',
  componentName: 'QBreadcrumbs'
});

const props = defineProps({
  /**
   * component name for link
   */
  linkComponent: {
    type: String,
    default: null
  },
  /**
   * custom last crumb
   */
  last: {
    type: String,
    default: null
  },
  /**
   * **Array of Objects**, object must contain required fields: `path` - uses as route path, `name` - route name, `meta` - must contain `breadcrumb` - visible title
   */
  route: {
    type: Array as PropType<QBreadcrumbsPropRoute>,
    default: null
  },
  /**
   * accessible label for breadcrumb navigation
   */
  ariaLabel: {
    type: String,
    default: null
  }
});

const crumbs = computed<RouteItem[]>(
  () => props.route?.filter(route => route.meta?.breadcrumb) ?? []
);

const breadcrumbs = computed<RouteItem[]>(() => crumbs.value.slice(0, -1));

const lastCrumb = computed<string>(
  () => props.last ?? crumbs.value.at(-1)?.meta.breadcrumb ?? ''
);

const navigationLabel = computed<string>(
  () => props.ariaLabel ?? t('QBreadcrumbs.ariaLabel')
);

function pushTo({
  name,
  path
}: {
  name?: string | symbol;
  path?: string;
}): Optional<string | Record<'name', string | symbol>> {
  return name ? { name } : path;
}
</script>

<template>
  <nav
    class="q-breadcrumbs"
    :aria-label="navigationLabel"
  >
    <ol class="q-breadcrumbs__list">
      <li
        v-for="crumb in breadcrumbs"
        :key="crumb.name || crumb.path"
        class="q-breadcrumbs__item"
      >
        <component
          :is="linkComponent || 'RouterLink'"
          :to="pushTo(crumb)"
          active-class="q-breadcrumbs__crumb_active"
          exact-active-class="q-breadcrumbs__crumb_exact-active"
          class="q-breadcrumbs__crumb"
        >
          {{ crumb.meta.breadcrumb }}
        </component>

        <span
          class="q-breadcrumbs__divider q-icon-arrow-right"
          aria-hidden="true"
        />
      </li>

      <li class="q-breadcrumbs__item">
        <span
          class="q-breadcrumbs__crumb q-breadcrumbs__crumb_last"
          aria-current="page"
        >
          {{ lastCrumb }}
        </span>
      </li>
    </ol>
  </nav>
</template>
