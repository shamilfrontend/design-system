import { i as e } from './preload-helper-CMdWXl7s.js';
import { U as t, X as n, b as r, t as i } from './vue.esm-bundler-BVbty6R8.js';
import { Ht as a, Vt as o, _t as s, vt as c } from './iframe-CABL6dQv.js';
var l, u, d, f, p, m;
e(() => {
  (i(),
    a(),
    c(),
    (l = {
      title: `Components/QSelect`,
      component: s,
      subcomponents: { QOption: o },
      argTypes: { modelValue: { control: !1 }, loading: { control: !1 } }
    }),
    (u = [
      { value: 0, label: `Option Zero` },
      { value: `value1`, label: `Option 1` },
      {
        value: `value3`,
        label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
      },
      { value: `value4`, label: `Option 4`, disabled: !0 },
      {
        value: `value5`,
        label: `Sed sit amet nibh consequat, pellentesque arcu ut, congue lorem.`,
        disabled: !0
      },
      { value: `value6`, label: `Option 6` }
    ]),
    (d = e =>
      r({
        setup() {
          let r = n({ remoteLoading: !1, value: null, options: u });
          return (
            t(
              () => e.multiple,
              () => {
                r.value = null;
              }
            ),
            t(
              () => e.remote,
              e => {
                e || (r.options = u);
              }
            ),
            {
              handleSearch: t => {
                e.remote &&
                  ((r.remoteLoading = !0),
                  setTimeout(() => {
                    ((r.remoteLoading = !1),
                      t === ``
                        ? (r.options = u)
                        : (r.options = u.filter(e =>
                            e.label?.toLowerCase().includes(t.toLowerCase())
                          )));
                  }, 2e3));
              },
              args: e,
              state: r
            }
          );
        },
        template: `
      <div style="width: 304px; height:240px">
        <h3>Value:</h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-select
          v-model="state.value"
          :disabled="args.disabled"
          :autocomplete="args.autocomplete"
          :can-load-more="args.canLoadMore"
          :clearable="args.clearable"
          :filterable="args.filterable"
          :allow-create="args.allowCreate"
          :remote="args.remote"
          :loading-text="args.loadingText"
          :load-more-text="args.loadMoreText"
          :no-match-text="args.noMatchText"
          :no-data-text="args.noDataText"
          :loading="state.remoteLoading"
          :multiple="args.multiple"
          :multiple-limit="args.multipleLimit"
          :select-all-shown="args.selectAllShown"
          :select-all-text="args.selectAllText"
          :value-key="args.valueKey"
          :collapse-tags="args.collapseTags"
          :teleport-to="args.teleportTo"
          :placeholder="args.placeholder"
          @search="handleSearch"
        >
          <q-option
            v-for="item in state.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </q-select>
      </div>
    `
      })),
    (f = d.bind({})),
    (f.args = {
      ...f.args,
      filterable: !0,
      clearable: !0,
      placeholder: `Pick an option`
    }),
    (p = d.bind({})),
    (p.args = {
      ...p.args,
      multiple: !0,
      filterable: !0,
      allowCreate: !0,
      clearable: !0,
      placeholder: `Pick an option`
    }),
    (f.parameters = {
      ...f.parameters,
      docs: {
        ...f.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      remoteLoading: false,
      value: null,
      options
    });
    watch(() => args.multiple, () => {
      state.value = null;
    });
    watch(() => args.remote, value => {
      if (!value) state.options = options;
    });
    const handleSearch = (query: string): void => {
      if (!args.remote) return;
      state.remoteLoading = true;
      setTimeout(() => {
        state.remoteLoading = false;
        if (query !== '') {
          state.options = options.filter(item => {
            return item.label?.toLowerCase().includes(query.toLowerCase());
          });
        } else {
          state.options = options;
        }
      }, 2000);
    };
    return {
      handleSearch,
      args,
      state
    };
  },
  template: \`
      <div style="width: 304px; height:240px">
        <h3>Value:</h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-select
          v-model="state.value"
          :disabled="args.disabled"
          :autocomplete="args.autocomplete"
          :can-load-more="args.canLoadMore"
          :clearable="args.clearable"
          :filterable="args.filterable"
          :allow-create="args.allowCreate"
          :remote="args.remote"
          :loading-text="args.loadingText"
          :load-more-text="args.loadMoreText"
          :no-match-text="args.noMatchText"
          :no-data-text="args.noDataText"
          :loading="state.remoteLoading"
          :multiple="args.multiple"
          :multiple-limit="args.multipleLimit"
          :select-all-shown="args.selectAllShown"
          :select-all-text="args.selectAllText"
          :value-key="args.valueKey"
          :collapse-tags="args.collapseTags"
          :teleport-to="args.teleportTo"
          :placeholder="args.placeholder"
          @search="handleSearch"
        >
          <q-option
            v-for="item in state.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </q-select>
      </div>
    \`
})`,
          ...f.parameters?.docs?.source
        }
      }
    }),
    (p.parameters = {
      ...p.parameters,
      docs: {
        ...p.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      remoteLoading: false,
      value: null,
      options
    });
    watch(() => args.multiple, () => {
      state.value = null;
    });
    watch(() => args.remote, value => {
      if (!value) state.options = options;
    });
    const handleSearch = (query: string): void => {
      if (!args.remote) return;
      state.remoteLoading = true;
      setTimeout(() => {
        state.remoteLoading = false;
        if (query !== '') {
          state.options = options.filter(item => {
            return item.label?.toLowerCase().includes(query.toLowerCase());
          });
        } else {
          state.options = options;
        }
      }, 2000);
    };
    return {
      handleSearch,
      args,
      state
    };
  },
  template: \`
      <div style="width: 304px; height:240px">
        <h3>Value:</h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-select
          v-model="state.value"
          :disabled="args.disabled"
          :autocomplete="args.autocomplete"
          :can-load-more="args.canLoadMore"
          :clearable="args.clearable"
          :filterable="args.filterable"
          :allow-create="args.allowCreate"
          :remote="args.remote"
          :loading-text="args.loadingText"
          :load-more-text="args.loadMoreText"
          :no-match-text="args.noMatchText"
          :no-data-text="args.noDataText"
          :loading="state.remoteLoading"
          :multiple="args.multiple"
          :multiple-limit="args.multipleLimit"
          :select-all-shown="args.selectAllShown"
          :select-all-text="args.selectAllText"
          :value-key="args.valueKey"
          :collapse-tags="args.collapseTags"
          :teleport-to="args.teleportTo"
          :placeholder="args.placeholder"
          @search="handleSearch"
        >
          <q-option
            v-for="item in state.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </q-select>
      </div>
    \`
})`,
          ...p.parameters?.docs?.source
        }
      }
    }),
    (m = [`Default`, `Multiple`]));
})();
export { f as Default, p as Multiple, m as __namedExportsOrder, l as default };
