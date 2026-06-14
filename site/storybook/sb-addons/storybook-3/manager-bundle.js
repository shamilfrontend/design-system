try {
  (() => {
    var m = __STORYBOOK_API__,
      {
        ActiveTabs: p,
        Consumer: c,
        ManagerContext: f,
        Provider: d,
        RequestResponseError: T,
        Tag: O,
        addons: o,
        combineParameters: h,
        controlOrMetaKey: b,
        controlOrMetaSymbol: y,
        eventMatchesShortcut: g,
        eventToShortcut: x,
        experimental_MockUniversalStore: v,
        experimental_UniversalStore: C,
        experimental_getStatusStore: A,
        experimental_getTestProviderStore: B,
        experimental_requestResponse: P,
        experimental_useStatusStore: R,
        experimental_useTestProviderStore: E,
        experimental_useUniversalStore: k,
        internal_checklistStore: M,
        internal_fullStatusStore: K,
        internal_fullTestProviderStore: U,
        internal_universalChecklistStore: Y,
        internal_universalStatusStore: I,
        internal_universalTestProviderStore: N,
        isMacLike: G,
        isShortcutTaken: H,
        keyToSymbol: D,
        merge: L,
        mockChannel: q,
        optionOrAltSymbol: V,
        shortcutMatchesShortcut: j,
        shortcutToAriaKeyshortcuts: w,
        shortcutToHumanString: z,
        types: F,
        useAddonState: J,
        useArgTypes: Q,
        useArgs: W,
        useChannel: X,
        useGlobalTypes: Z,
        useGlobals: $,
        useParameter: ee,
        useSharedState: te,
        useStoryPrepared: re,
        useStorybookApi: oe,
        useStorybookState: ae
      } = __STORYBOOK_API__;
    var ue = __STORYBOOK_THEMING_CREATE__,
      { create: a, themes: Se } = __STORYBOOK_THEMING_CREATE__;
    var s = a({
      name: 'Theme',
      base: 'light',
      colorPrimary: '#7367f0',
      colorSecondary: '#7367f0',
      appBg: '#f8f7fa',
      appContentBg: '#ffffff',
      appBorderColor: '#ebe9f1',
      appBorderRadius: 6,
      barTextColor: '#6e6b7b',
      barSelectedColor: '#7367f0',
      barBg: '#ffffff',
      textColor: '#5e5873',
      brandTitle: 'Design System',
      brandUrl: 'https://github.com/shamilfrontend/design-system'
    });
    o.setConfig({ theme: s });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
