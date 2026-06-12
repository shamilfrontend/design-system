/**
 * Patched copy of @vuepress/theme-default useSidebarItems (rc.30).
 * Applied via patch-package — see PATCH_AUDIT.md for rationale per change.
 */
import { computed, inject, provide } from 'vue';
import { usePageData, usePageFrontmatter, useRoute } from 'vuepress/client';
import { isPlainObject, isString, resolveLocalePath } from 'vuepress/shared';
import { getAutoLink } from '@vuepress/theme-default/lib/client/utils/index.js';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables/useThemeData.js';

export const sidebarItemsSymbol = Symbol('sidebarItems');

export const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error('useSidebarItems() is called without provider.');
  }
  return sidebarItems;
};

export const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const page = usePageData();
  const route = useRoute();
  const sidebarItems = computed(() =>
    resolveSidebarItems(frontmatter.value, themeLocale.value, page.value, route.path)
  );
  provide(sidebarItemsSymbol, sidebarItems);
};

export const resolveSidebarItems = (frontmatter, themeLocale, page, path) => {
  const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? 'auto';
  const sidebarDepth = frontmatter.sidebarDepth ?? themeLocale.sidebarDepth ?? 2;

  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === 'auto') {
    return resolveAutoSidebarItems(page, sidebarDepth);
  }
  if (Array.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(page, path, sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(page, path, sidebarConfig, sidebarDepth);
  }
  return [];
};

export const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: header.link,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});

export const headersToSidebarItemChildren = (headers, sidebarDepth) =>
  sidebarDepth > 0 && headers
    ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1))
    : [];

export const resolveAutoSidebarItems = (page, sidebarDepth) => [
  {
    text: page.title,
    children: headersToSidebarItemChildren(page.headers ?? [], sidebarDepth)
  }
];

export const resolveArraySidebarItems = (page, path, sidebarConfig, sidebarDepth) => {
  const pageHeaders = page.headers ?? [];

  const handleChildItem = (item) => {
    let childItem;
    if (isString(item)) {
      childItem = getAutoLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return {
        ...childItem,
        children: childItem.children.map((child) => handleChildItem(child))
      };
    }
    if (childItem.link === path) {
      const headers =
        pageHeaders[0]?.level === 1 ? pageHeaders[0].children : pageHeaders;
      return {
        ...childItem,
        children: headersToSidebarItemChildren(headers ?? [], sidebarDepth)
      };
    }
    return childItem;
  };

  return sidebarConfig.map((item) => handleChildItem(item));
};

export const resolveMultiSidebarItems = (page, path, sidebarConfig, sidebarDepth) => {
  const sidebarPath = resolveLocalePath(sidebarConfig, path);
  const matchedSidebarConfig = sidebarConfig[sidebarPath] ?? [];
  if (matchedSidebarConfig === 'heading') {
    return resolveAutoSidebarItems(page, sidebarDepth);
  }
  return resolveArraySidebarItems(page, path, matchedSidebarConfig, sidebarDepth);
};
