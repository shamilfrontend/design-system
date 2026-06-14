try {
  (() => {
    var e = 'storybook/links';
    var n = {
      NAVIGATE: `${e}/navigate`,
      REQUEST: `${e}/request`,
      RECEIVE: `${e}/receive`
    };
    var A = __STORYBOOK_API__,
      {
        ActiveTabs: E,
        Consumer: h,
        ManagerContext: P,
        Provider: b,
        RequestResponseError: k,
        Tag: x,
        addons: a,
        combineParameters: R,
        controlOrMetaKey: g,
        controlOrMetaSymbol: f,
        eventMatchesShortcut: I,
        eventToShortcut: C,
        experimental_MockUniversalStore: D,
        experimental_UniversalStore: M,
        experimental_getStatusStore: K,
        experimental_getTestProviderStore: U,
        experimental_requestResponse: B,
        experimental_useStatusStore: N,
        experimental_useTestProviderStore: Y,
        experimental_useUniversalStore: V,
        internal_checklistStore: q,
        internal_fullStatusStore: G,
        internal_fullTestProviderStore: L,
        internal_universalChecklistStore: $,
        internal_universalStatusStore: H,
        internal_universalTestProviderStore: Q,
        isMacLike: j,
        isShortcutTaken: w,
        keyToSymbol: z,
        merge: F,
        mockChannel: J,
        optionOrAltSymbol: W,
        shortcutMatchesShortcut: X,
        shortcutToAriaKeyshortcuts: Z,
        shortcutToHumanString: ee,
        types: te,
        useAddonState: re,
        useArgTypes: oe,
        useArgs: se,
        useChannel: ne,
        useGlobalTypes: ae,
        useGlobals: ie,
        useParameter: le,
        useSharedState: ue,
        useStoryPrepared: Se,
        useStorybookApi: _e,
        useStorybookState: ce
      } = __STORYBOOK_API__;
    a.register(e, t => {
      t.on(n.REQUEST, ({ kind: i, name: l }) => {
        let u = t.storyId(i, l);
        t.emit(n.RECEIVE, u);
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  );
}
