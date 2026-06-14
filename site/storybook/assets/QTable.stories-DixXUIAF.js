import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { n as i, t as a } from './QButton-Cew9k7i-.js';
import { it as o, rt as s } from './iframe-CABL6dQv.js';
var c,
  l,
  u,
  d,
  f = e(() => {
    ((c = [
      {
        key: `one`,
        columns: [
          { key: `col1`, value: `Column 1`, formatter: e => `formatted_${e}` },
          { key: `col2`, value: `Column 2` },
          {
            key: `col3`,
            value: `Column 3`,
            sortable: !0,
            sortOrder: [`ascending`, `descending`]
          },
          {
            key: `col4`,
            value: `Column 4`,
            sortable: !0,
            slots: {
              header: `customHeader`,
              total: `customTotal`,
              row: `customRow`
            }
          },
          {
            key: `col5`,
            value: `Column with a very long title with ellipsis in the second line`
          },
          { key: `col6`, value: `Column 6` }
        ]
      }
    ]),
      (l = { key: `col4`, direction: `ascending` }),
      (u = [
        {
          col1: `Lorem ipsum dolor sit amet`,
          col2: `Consectetur adipiscing elit`,
          col3: `Sed do eiusmod tempor incididunt`,
          col4: `Ut labore et dolore magna aliqua`,
          col5: `Ut enim ad minim veniam`,
          col6: `Phasellus nunc lorem, blandit non tristique a`,
          col7: `Vivamus orci diam, laoreet quis urna in, tincidunt bibendum nunc`,
          col8: `Nullam velit elit, congue nec vulputate vitae`
        },
        {
          col1: `Nisi ut aliquip ex ea commodo consequat`,
          col2: `Duis aute irure dolor in reprehenderit`,
          col3: `In voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
          col4: `Excepteur sint occaecat cupidatat non proident`,
          col5: `Nulla laoreet, risus ac lacinia rhoncus, ex massa semper sem.`,
          col6: `Duis leo nulla, volutpat eget rutrum nec, consequat at tortor`,
          col7: `Integer ac pulvinar sapien, id iaculis ligula. Nullam id arcu`,
          col8: `Aenean id tincidunt tortor. Sed tempus tempus nibh, a congue`
        },
        {
          col1: `Integer commodo neque sed purus porttitor interdum. Duis dapibus finibus ex, sit amet iaculis nunc posuere id. Mauris consequat, lacus`,
          col2: `Curabitur aliquet bibendum risus, in malesuada nisl suscipit ac. In hac habitasse platea dictumst. Integer lobortis sed lorem vel dignissim`,
          col3: `Integer lobortis ornare ex eget sagittis. Praesent consectetur tempor tortor a vehicula. Nulla facilisi. Sed eu nunc rutrum, sagittis magna`,
          col4: `Mauris gravida lacus at laoreet pharetra. Pellentesque eu lectus tellus. Morbi scelerisque lobortis dui in aliquet`,
          col5: `Donec lorem ante, malesuada fermentum posuere vitae, tincidunt in leo`,
          col6: `Curabitur nunc purus, placerat id tellus ut, gravida pulvinar est`,
          col7: `Proin posuere, justo a porttitor posuere, lectus nunc rhoncus libero`,
          col8: `Maecenas metus felis, porttitor nec aliquam ut, fermentum nec mi`
        }
      ]),
      (d = {
        col2: `Total 200`,
        col1: `Total 100`,
        col4: `Total 400`,
        col3: `Total 300`,
        col6: `Total 600`,
        col5: `Total 500`,
        col7: `Total 700`,
        col8: `Total 800`
      }));
  }),
  p,
  m = e(() => {
    (r(),
      f(),
      (p = e =>
        n({
          setup() {
            let n = t(e.checkedRows ?? null),
              r = t(e.sortBy ?? null);
            return {
              args: e,
              groupsOfCols: t(e.groupsOfColumns ?? null),
              checkedRows: n,
              sortBy: r,
              handleRowClick: (e, t) => {
                console.log(t, e);
              }
            };
          },
          template: `
      <q-table
        v-model:checked-rows="checkedRows"
        v-model:sort-by="sortBy"
        v-model:groups-of-columns="groupsOfCols"
        :fixed-layout="args.fixedLayout"
        :is-loading="args.isLoading"
        :loading-row-count="args.loadingRowCount"
        :grid="args.grid"
        :rows="args.rows"
        :total="args.total"
        :custom-row-class="args.customRowClass"
        :custom-row-style="args.customRowStyle"
        :selection-column="args.selectionColumn"
        :empty-text="args.emptyText"
        :default-col-width="args.defaultColWidth"
        @row-click="handleRowClick"
      >
        <template #customHeader="{ value }">
          {{ value }} custom
        </template>

        <template #customTotal="{ value }">
          {{ value }} custom
        </template>

        <template #customRow="{ value }">
          {{ value }} custom
        </template>
      </q-table>
    `
        })),
      (p.args = {
        rows: u,
        sortBy: l,
        groupsOfColumns: c,
        loadingRowCount: 3,
        fixedLayout: !1
      }));
  }),
  h,
  g = e(() => {
    (f(),
      m(),
      (h = p.bind({})),
      (h.args = {
        groupsOfColumns: c,
        rows: u,
        loadingRowCount: 3,
        customRowClass: ({ rowIndex: e }) => `custom-row-class-${e}`,
        customRowStyle: ({ rowIndex: e }) =>
          e === 0
            ? `--row-custom-border-color: var(--color-secondary-green)`
            : e === 1
              ? `--row-custom-border-color: var(--color-secondary-orange)`
              : e === 2
                ? `--row-custom-border-color: #f2d22b`
                : ``
      }));
  }),
  _,
  v,
  y = e(() => {
    (f(),
      m(),
      (_ = [
        {
          key: `one`,
          columns: [
            { key: `col1`, value: `Column 1` },
            { key: `col2`, value: `Column 2` },
            { key: `col3`, value: `Column 3`, sortable: !0 },
            { key: `col4`, value: `Column 4` }
          ]
        }
      ]),
      (v = p.bind({})),
      (v.args = {
        rows: u,
        sortBy: l,
        groupsOfColumns: _,
        loadingRowCount: 3,
        fixedLayout: !0,
        defaultColWidth: `180px`
      }));
  }),
  b,
  x = e(() => {
    (f(),
      m(),
      (b = p.bind({})),
      (b.args = {
        total: d,
        rows: u,
        sortBy: l,
        loadingRowCount: 3,
        fixedLayout: !0,
        grid: !0,
        selectionColumn: { enabled: !0 },
        groupsOfColumns: [
          {
            key: `one`,
            color: `#de4b7a`,
            draggable: !0,
            columns: [
              { key: `col1`, value: `Column 1`, width: `300px` },
              { key: `col2`, value: `Column 2`, draggable: !1 },
              { key: `col3`, value: `Column 3`, sortable: !0 },
              { key: `col4`, value: `Column 4`, sortable: !0 }
            ]
          },
          {
            key: `two`,
            color: `#74aff8`,
            draggable: !0,
            columns: [
              { key: `col5`, value: `Column 5`, sortable: !0, align: `right` },
              { key: `col6`, value: `Column 6`, align: `right` },
              { key: `col7`, value: `Column 7`, width: `157px` },
              { key: `col8`, value: `Column 8`, width: `500px` }
            ]
          }
        ]
      }));
  }),
  S,
  C = e(() => {
    (r(),
      i(),
      f(),
      (S = e =>
        n({
          components: { QButton: a },
          setup() {
            let n = t(e.sortBy ?? null);
            return {
              args: e,
              groupsOfCols: t(e.groupsOfColumns ?? null),
              sortBy: n
            };
          },
          template: `
      <q-table
        v-model:sort-by="sortBy"
        v-model:groups-of-columns="groupsOfCols"
        :rows="args.rows"
        :empty-text="args.emptyText"
        :fixed-layout="args.fixedLayout"
        :loading-row-count="args.loadingRowCount"
      >
        <template #empty>
          <div style="padding: 24px; text-align: center">
            <p style="margin: 0 0 12px; color: var(--color-text-muted)">
              {{ args.emptyText || 'No records yet' }}
            </p>
            <q-button size="small">Add record</q-button>
          </div>
        </template>
      </q-table>
    `
        })),
      (S.args = {
        rows: [],
        groupsOfColumns: c,
        loadingRowCount: 3,
        emptyText: `No records yet`,
        fixedLayout: !1
      }));
  }),
  w,
  T = e(() => {
    (f(),
      m(),
      (w = p.bind({})),
      (w.args = {
        loadingRowCount: 3,
        rows: u,
        sortBy: l,
        groupsOfColumns: c,
        fixedLayout: !0
      }));
  }),
  E,
  D = e(() => {
    (f(),
      m(),
      (E = p.bind({})),
      (E.args = {
        rows: u,
        total: d,
        sortBy: l,
        loadingRowCount: 3,
        groupsOfColumns: [
          {
            key: `one`,
            columns: [
              {
                key: `col1`,
                value: `Column 1`,
                formatter: e => `formatted_${e}`
              }
            ]
          },
          {
            key: `two`,
            color: `#de4b7a`,
            columns: [
              { key: `col2`, value: `Column 2` },
              { key: `col3`, value: `Column 3`, sortable: !0 }
            ]
          },
          {
            color: `#74aff8`,
            key: `three`,
            columns: [
              {
                key: `col4`,
                value: `Column 4`,
                sortable: !0,
                align: `right`,
                slots: { header: `customHeader`, row: `customRow` }
              },
              { key: `col5`, value: `Column with very long title` },
              { key: `col6`, value: `Column 6` }
            ]
          }
        ]
      }));
  }),
  O,
  k,
  A = e(() => {
    (f(),
      m(),
      (O = c.map(e => ({
        ...e,
        columns: e.columns.map(e =>
          e.key === `col3` ? { ...e, isHidden: !0 } : e
        )
      }))),
      (k = p.bind({})),
      (k.args = {
        rows: u,
        sortBy: l,
        groupsOfColumns: O,
        loadingRowCount: 3,
        fixedLayout: !1
      }));
  }),
  j,
  M = e(() => {
    (f(),
      m(),
      (j = p.bind({})),
      (j.args = {
        rows: u,
        sortBy: l,
        groupsOfColumns: c,
        loadingRowCount: 3,
        isLoading: !0,
        fixedLayout: !1
      }));
  }),
  N,
  P,
  F = e(() => {
    (f(),
      m(),
      (N = [
        {
          key: `one`,
          columns: [
            { key: `col1`, value: `Column 1 (min 120px)`, minWidth: `120px` },
            { key: `col2`, value: `Column 2 (min 200px)`, minWidth: `200px` },
            {
              key: `col3`,
              value: `Column 3 (min 280px)`,
              minWidth: `280px`,
              sortable: !0
            },
            { key: `col4`, value: `Column 4 (min 160px)`, minWidth: `160px` }
          ]
        }
      ]),
      (P = p.bind({})),
      (P.args = {
        rows: u,
        sortBy: l,
        groupsOfColumns: N,
        loadingRowCount: 3,
        fixedLayout: !1
      }));
  }),
  I,
  L = e(() => {
    (f(),
      m(),
      (I = p.bind({})),
      (I.args = {
        total: d,
        rows: u,
        sortBy: l,
        groupsOfColumns: c,
        loadingRowCount: 3,
        checkedRows: [0, 2],
        selectionColumn: {
          enabled: !0,
          selectAllShown: !0,
          selectTotalShown: !0
        }
      }));
  }),
  R,
  z = e(() => {
    (r(),
      f(),
      (R = e =>
        n({
          setup() {
            let n = t(e.sortBy ?? null),
              r = t(e.groupsOfColumns ?? null),
              i = t(`Click a row to select it`);
            return {
              args: e,
              groupsOfCols: r,
              sortBy: n,
              lastClicked: i,
              handleRowClick: (e, t) => {
                i.value = `Row ${t + 1}: ${String(e.col1 ?? ``)}`;
              }
            };
          },
          template: `
      <div>
        <p style="margin: 0 0 12px; padding: 8px 12px; background: var(--color-primary-lighter); border-radius: 6px">
          {{ lastClicked }}
        </p>
        <q-table
          v-model:sort-by="sortBy"
          v-model:groups-of-columns="groupsOfCols"
          :rows="args.rows"
          :fixed-layout="args.fixedLayout"
          :loading-row-count="args.loadingRowCount"
          @row-click="handleRowClick"
        />
      </div>
    `
        })),
      (R.args = {
        rows: u,
        sortBy: l,
        groupsOfColumns: c,
        loadingRowCount: 3,
        fixedLayout: !1
      }));
  }),
  B,
  V = e(() => {
    (f(),
      m(),
      (B = p.bind({})),
      (B.args = {
        total: d,
        rows: u,
        sortBy: l,
        groupsOfColumns: c,
        loadingRowCount: 3,
        selectionColumn: {
          enabled: !0,
          selectAllShown: !0,
          selectTotalShown: !0
        }
      }));
  }),
  H,
  U = e(() => {
    (f(),
      m(),
      (H = p.bind({})),
      (H.args = {
        total: d,
        rows: u,
        sortBy: l,
        loadingRowCount: 3,
        fixedLayout: !0,
        grid: !0,
        selectionColumn: { enabled: !0, sticky: !0 },
        groupsOfColumns: [
          {
            key: `one`,
            columns: [
              {
                key: `col1`,
                value: `Column 1`,
                formatter: e => `formatted_${e}`,
                width: `300px`
              },
              {
                key: `col2`,
                value: `Column 2 sticky`,
                sticky: { position: `left` }
              },
              {
                key: `col3`,
                value: `Column 3 sticky`,
                width: `150px`,
                sortable: !0,
                sticky: { position: `left` }
              },
              {
                key: `col4`,
                value: `Column 4`,
                sortable: !0,
                slots: { header: `customHeader`, row: `customRow` }
              },
              {
                key: `col5`,
                value: `Column 5 sticky`,
                sticky: { position: `right` }
              },
              {
                key: `col6`,
                value: `Column 6 sticky`,
                sticky: { position: `left` }
              },
              {
                key: `col7`,
                value: `Column 7 sticky`,
                width: `157px`,
                sticky: { position: `right` }
              },
              { key: `col8`, value: `Column 8`, width: `1000px` }
            ]
          }
        ]
      }));
  }),
  W,
  G = e(() => {
    (f(),
      m(),
      (W = p.bind({})),
      (W.args = {
        total: d,
        rows: u,
        sortBy: l,
        groupsOfColumns: c,
        loadingRowCount: 3
      }));
  }),
  K,
  q;
e(() => {
  (o(),
    g(),
    m(),
    y(),
    x(),
    C(),
    T(),
    D(),
    A(),
    M(),
    F(),
    L(),
    z(),
    V(),
    U(),
    G(),
    (K = {
      title: `Components/QTable`,
      component: s,
      argTypes: {
        isLoading: { control: `boolean` },
        grid: { control: `boolean` },
        fixedLayout: { control: `boolean` },
        loadingRowCount: { control: { type: `number`, min: 1, max: 30 } },
        defaultColWidth: { control: `text` },
        emptyText: { control: `text` },
        'v-model:checkedRows': { control: !1 },
        'v-model:sortBy': { control: !1 },
        'v-model:groupsOfColumns': { control: !1 },
        rows: { control: !1 },
        groupsOfColumns: { control: !1 },
        total: { control: !1 },
        selectionColumn: { control: !1 },
        customRowClass: { control: !1 },
        customRowStyle: { control: !1 }
      },
      decorators: [
        () => ({
          template: `<div style="width: 100vw;margin-left:-1rem;margin-right:-1rem;"><story /></div>`
        })
      ]
    }),
    (q = [
      `Default`,
      `Loading`,
      `Empty`,
      `RowClick`,
      `HiddenColumns`,
      `FixedLayout`,
      `MinWidth`,
      `DefaultColWidth`,
      `PreChecked`,
      `Selectable`,
      `Total`,
      `StickyColumn`,
      `CustomRows`,
      `Groups`,
      `Draggable`
    ]));
})();
export {
  h as CustomRows,
  p as Default,
  v as DefaultColWidth,
  b as Draggable,
  S as Empty,
  w as FixedLayout,
  E as Groups,
  k as HiddenColumns,
  j as Loading,
  P as MinWidth,
  I as PreChecked,
  R as RowClick,
  B as Selectable,
  H as StickyColumn,
  W as Total,
  q as __namedExportsOrder,
  K as default
};
