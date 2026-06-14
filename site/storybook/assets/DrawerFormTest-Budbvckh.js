import { i as e } from './preload-helper-CMdWXl7s.js';
import {
  G as t,
  L as n,
  N as r,
  X as i,
  Z as a,
  _ as o,
  b as s,
  it as c,
  p as l,
  t as u,
  v as d,
  w as f
} from './vue.esm-bundler-BVbty6R8.js';
import { b as p, p as m, t as h } from './iframe-CABL6dQv.js';
import { n as g, t as _ } from './_plugin-vue_export-helper-DyGbzYVF.js';
var v,
  y = e(() => {
    (u(),
      h(),
      (v = s({
        name: `QDrawerSampleContent`,
        components: { QDrawerContent: m },
        props: {
          someExternalProp: { type: String, default: `Default external prop` }
        },
        emits: [`name-input`],
        setup(e, t) {
          let n = f(`qDrawerContainer`),
            r = a(!1),
            o = i({ name: `Testname` }),
            s = e => {
              t.emit(`name-input`, e.target.value);
            },
            c = () =>
              new Promise(e => {
                setTimeout(() => e(!0), 1e3);
              });
          return {
            isLoading: r,
            formModel: o,
            handleNameInput: s,
            handleConfirmClick: async () => {
              r.value = !0;
              let e = p.confirm;
              ((await c()) && n?.emitDoneEvent({ action: e }), (r.value = !1));
            },
            handleCancelClick: async () => {
              let e = p.cancel;
              n?.emitDoneEvent({ action: e });
            }
          };
        }
      })));
  }),
  b = e(() => {});
function x(e, i, a, s, u, f) {
  let p = n(`q-input`),
    m = n(`q-form-item`),
    h = n(`q-form`),
    g = n(`q-button`),
    _ = n(`q-drawer-content`);
  return (
    r(),
    l(_, null, {
      title: t(() => [
        ...(i[1] ||= [
          o(
            ` Morbi massa libero, vehicula nec consequat sed, porta a sem. `,
            -1
          )
        ])
      ]),
      default: t(() => [
        o(` ` + c(e.someExternalProp) + ` `, 1),
        d(
          h,
          { model: e.formModel },
          {
            default: t(() => [
              d(
                m,
                { prop: `name`, label: `Name`, required: `` },
                {
                  default: t(() => [
                    d(
                      p,
                      {
                        modelValue: e.formModel.name,
                        'onUpdate:modelValue': (i[0] ||= t =>
                          (e.formModel.name = t)),
                        onInput: e.handleNameInput
                      },
                      null,
                      8,
                      [`modelValue`, `onInput`]
                    )
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          },
          8,
          [`model`]
        ),
        d(
          g,
          { loading: e.isLoading, onClick: e.handleConfirmClick },
          { default: t(() => [...(i[2] ||= [o(` Confirm `, -1)])]), _: 1 },
          8,
          [`loading`, `onClick`]
        ),
        d(
          g,
          { theme: `secondary`, onClick: e.handleCancelClick },
          { default: t(() => [...(i[3] ||= [o(` Cancel `, -1)])]), _: 1 },
          8,
          [`onClick`]
        )
      ]),
      _: 1
    })
  );
}
var S;
e(() => {
  (y(),
    y(),
    u(),
    b(),
    g(),
    (S = _(v, [
      [`render`, x],
      [`__scopeId`, `data-v-45d39e3c`]
    ])),
    (v.__docgenInfo = Object.assign(
      { displayName: v.name ?? v.__name },
      {
        displayName: `QDrawerSampleContent`,
        exportName: `default`,
        description: ``,
        tags: {},
        props: [
          {
            name: `someExternalProp`,
            type: { name: `string` },
            defaultValue: { func: !1, value: `'Default external prop'` }
          }
        ],
        events: [{ name: `name-input` }],
        sourceFiles: [
          `/Users/samilalisultanov/Desktop/projects/github/design-system/stories/plugins/QDrawer/DrawerFormTest.vue`
        ]
      }
    )));
})();
export { S as default };
