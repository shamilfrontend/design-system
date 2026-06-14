import { i as e } from './preload-helper-CMdWXl7s.js';
import { U as t, X as n, b as r, t as i } from './vue.esm-bundler-BVbty6R8.js';
import {
  Gn as a,
  Mn as o,
  Nn as s,
  Qn as c,
  Yn as l,
  Zn as u,
  qn as d
} from './iframe-CABL6dQv.js';
var f, p, m, h, g, _, v, y, b, x, S, C, w;
e(() => {
  (a(),
    i(),
    s(),
    (f = new Date()),
    (p = {
      title: `Components/QDatePicker`,
      component: o,
      argTypes: {
        'v-model': { control: !1 },
        disabledValues: {
          options: [
            null,
            { to: l(f, 2), ranges: [{ start: f, end: new Date(c(f, 1)) }] }
          ],
          control: { type: `select` }
        },
        outputFormat: { options: [`date`, `iso`], control: { type: `select` } },
        placeholder: { type: { name: `string`, required: !1 } },
        format: { name: `format`, type: { name: `string`, required: !1 } },
        type: {
          options: [
            `date`,
            `week`,
            `month`,
            `year`,
            `datetime`,
            `daterange`,
            `datetimerange`,
            `monthrange`,
            `yearrange`
          ],
          control: { type: `select` },
          datetime: { disable: !0 }
        },
        firstDayOfWeek: {
          options: [0, 1, 2, 3, 4, 5, 6],
          control: { type: `select` }
        }
      }
    }),
    (m = e =>
      r({
        setup() {
          let r = n({ value: null });
          return (
            t(
              () => e.type,
              () => {
                r.value = null;
              }
            ),
            {
              args: e,
              state: r,
              handleIntermediateChange: e => {
                console.log(`handleIntermediateChange`, e);
              },
              handleChange: e => {
                console.log(`handleChange`, e);
              }
            }
          );
        },
        template: `
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    `
      })),
    (h = m.bind({})),
    (g = m.bind({})),
    (_ = m.bind({})),
    (v = m.bind({})),
    (y = m.bind({})),
    (b = m.bind({})),
    (x = m.bind({})),
    (S = m.bind({})),
    (C = m.bind({})),
    (S.args = { type: `yearrange` }),
    (x.args = { type: `monthrange` }),
    (v.args = { type: `datetime`, format: `dd MMMM yyyy HH:mm` }),
    (y.args = { type: `daterange` }),
    (b.args = { type: `datetimerange`, format: `dd MMMM yyyy HH:mm` }),
    (g.args = { type: `month` }),
    (_.args = { type: `year` }),
    (C.args = {
      shortcuts: [
        { text: `Today`, value: f },
        { text: `Yesterday`, value: u() },
        { text: `A week ago`, value: d(f, 1) }
      ]
    }),
    (h.parameters = {
      ...h.parameters,
      docs: {
        ...h.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...h.parameters?.docs?.source
        }
      }
    }),
    (g.parameters = {
      ...g.parameters,
      docs: {
        ...g.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...g.parameters?.docs?.source
        }
      }
    }),
    (_.parameters = {
      ..._.parameters,
      docs: {
        ..._.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ..._.parameters?.docs?.source
        }
      }
    }),
    (v.parameters = {
      ...v.parameters,
      docs: {
        ...v.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...v.parameters?.docs?.source
        }
      }
    }),
    (y.parameters = {
      ...y.parameters,
      docs: {
        ...y.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...y.parameters?.docs?.source
        }
      }
    }),
    (b.parameters = {
      ...b.parameters,
      docs: {
        ...b.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...b.parameters?.docs?.source
        }
      }
    }),
    (x.parameters = {
      ...x.parameters,
      docs: {
        ...x.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...x.parameters?.docs?.source
        }
      }
    }),
    (S.parameters = {
      ...S.parameters,
      docs: {
        ...S.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...S.parameters?.docs?.source
        }
      }
    }),
    (C.parameters = {
      ...C.parameters,
      docs: {
        ...C.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const state = reactive({
      value: null
    });
    const handleChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleChange', val);
    };
    const handleIntermediateChange = (val: QDatePickerPropModelValue): void => {
      console.log('handleIntermediateChange', val);
    };
    watch(() => args.type, () => {
      state.value = null;
    });
    return {
      args,
      state,
      handleIntermediateChange,
      handleChange
    };
  },
  template: \`
      <div style="width: 220px; height:300px">
        <h3>Value:
        <q-popover
          title='Note:'
          icon='q-icon-question'
        >
          <template #reference>
            <q-button
              circle
              type="icon"
              theme="secondary"
              size="small"
              icon="q-icon-question-mark"
            />
          </template>
          outputFormat prop for type date doesn't work in template (always shows iso), better check the browser console
        </q-popover>
        </h3>
        <div><b>v-model: </b>{{ JSON.stringify(state.value) }}</div>
        <br />
        <q-date-picker
          v-model="state.value"
          :clearable="args.clearable"
          :editable="args.editable"
          :placeholder="args.placeholder"
          :type="args.type"
          :format="args.format"
          :output-format="args.outputFormat"
          :name="args.name"
          :disabled="args.disabled"
          :disabled-values="args.disabledValues"
          :shortcuts="args.shortcuts"
          :start-placeholder="args.startPlaceholder"
          :end-placeholder="args.endPlaceholder"
          :first-day-of-week="args.firstDayOfWeek"
          :range-separator="args.rangeSeparator"
          :validate-event="args.validateEvent"
          :teleport-to="args.teleportTo"
          @change="handleChange"
          @intermediateChange="handleIntermediateChange"
        />
      </div>
    \`
})`,
          ...C.parameters?.docs?.source
        }
      }
    }),
    (w = [
      `Default`,
      `Month`,
      `Year`,
      `DateTime`,
      `DateRange`,
      `DateTimeRange`,
      `MonthRange`,
      `YearRange`,
      `Shortcuts`
    ]));
})();
export {
  y as DateRange,
  v as DateTime,
  b as DateTimeRange,
  h as Default,
  g as Month,
  x as MonthRange,
  C as Shortcuts,
  _ as Year,
  S as YearRange,
  w as __namedExportsOrder,
  p as default
};
