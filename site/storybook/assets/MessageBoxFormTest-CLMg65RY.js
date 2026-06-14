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
import { l as p, s as m, t as h } from './iframe-CABL6dQv.js';
import { n as g, t as _ } from './_plugin-vue_export-helper-DyGbzYVF.js';
var v,
  y = e(() => {
    (u(),
      h(),
      (v = s({
        name: `MessageBoxFormTest`,
        components: { QMessageBoxContent: m },
        props: { someExternalProp: { type: String, default: null } },
        emits: [`name-input`],
        setup(e, t) {
          let n = f(`qMessageBoxContainer`),
            r = a(!1);
          return {
            formModel: i({ name: `Testname` }),
            isSending: r,
            handleNameInput: e => {
              t.emit(`name-input`, e.target.value);
            },
            handleSendClick: async () => {
              ((r.value = !0),
                await new Promise(e => {
                  setTimeout(() => e(`done`), 1e3);
                }),
                n?.emitDoneEvent({ action: p.confirm, payload: { test: !0 } }),
                (r.value = !1));
            },
            handleCancelClick: () => {
              n?.emitDoneEvent({ action: p.cancel });
            }
          };
        }
      })));
  });
function b(e, i, a, s, u, f) {
  let p = n(`q-input`),
    m = n(`q-form-item`),
    h = n(`q-form`),
    g = n(`q-button`),
    _ = n(`q-message-box-content`);
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
      content: t(() => [
        o(c(e.someExternalProp) + ` `, 1),
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
        )
      ]),
      actions: t(() => [
        d(
          g,
          { loading: e.isSending, onClick: e.handleSendClick },
          { default: t(() => [...(i[2] ||= [o(` Send `, -1)])]), _: 1 },
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
var x;
e(() => {
  (y(),
    y(),
    u(),
    g(),
    (x = _(v, [[`render`, b]])),
    (v.__docgenInfo = Object.assign(
      { displayName: v.name ?? v.__name },
      {
        displayName: `MessageBoxFormTest`,
        exportName: `default`,
        description: ``,
        tags: {},
        props: [
          {
            name: `someExternalProp`,
            type: { name: `string` },
            defaultValue: { func: !1, value: `null` }
          }
        ],
        events: [{ name: `name-input` }],
        sourceFiles: [
          `/Users/samilalisultanov/Desktop/projects/github/design-system/stories/plugins/QMessageBox/MessageBoxFormTest.vue`
        ]
      }
    )));
})();
export { x as default };
