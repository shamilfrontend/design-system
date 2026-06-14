import { i as e } from './preload-helper-CMdWXl7s.js';
import { X as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { L as i, R as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    a(),
    (o = {
      title: `Components/QUpload`,
      component: i,
      argTypes: {
        multiple: { control: !1 },
        direction: { options: [`right`, `bottom`], control: { type: `select` } }
      }
    }),
    (s = e =>
      n({
        setup() {
          let n = t({ file: null });
          return {
            args: e,
            formModel: n,
            handleFileSelect: async (e, t) => {
              ((n.file = { id: t, sourceFile: e, name: e.name, loading: 0 }),
                await new Promise(e => {
                  let t = setInterval(() => {
                    n.file &&
                      (n.file.loading === null && (n.file.loading = 0),
                      (n.file.loading += 10));
                  }, 100);
                  setTimeout(() => {
                    (clearInterval(t), n.file && (n.file.loading = null), e());
                  }, 1e3);
                }));
            },
            handleAbort: () => {
              console.log(`abort uploading`);
            },
            handleClear: () => {
              n.file = null;
            }
          };
        },
        template: `
      <q-upload
        :multiple="false"
        :direction="args.direction"
        :limit="args.limit"
        :accept="args.accept"
        :disabled="args.disabled"
        :clearable="args.clearable"
        :validate-event="args.validateEvent"
        :text-upload-file="args.textUploadFile"
        :text-replace-file="args.textReplaceFile"
        :text-loading-file="args.textLoadingFile"
        :text-uploaded-files="args.textUploadedFiles"
        :value="formModel.file"
        @select="handleFileSelect"
        @abort="handleAbort"
        @clear="handleClear"
      />
    `
      })),
    (c = s.bind({})),
    (c.args = { accept: [`image/*`, `.pdf`] }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const formModel = reactive<FormModel>({
      file: null
    });
    const handleFileSelect = async (sourceFile: File, fileId: string): Promise<void> => {
      formModel.file = {
        id: fileId,
        sourceFile,
        name: sourceFile.name,
        loading: 0
      };
      const promise = (): Promise<void> => new Promise(resolve => {
        const interval = setInterval(() => {
          if (!formModel.file) return;
          if (formModel.file.loading === null) formModel.file.loading = 0;
          formModel.file.loading += 10;
        }, 100);
        setTimeout(() => {
          clearInterval(interval);
          if (formModel.file) formModel.file.loading = null;
          resolve();
        }, 1000);
      });
      await promise();
    };
    const handleAbort = (): void => {
      console.log('abort uploading');
    };
    const handleClear = (): void => {
      formModel.file = null;
    };
    return {
      args,
      formModel,
      handleFileSelect,
      handleAbort,
      handleClear
    };
  },
  template: \`
      <q-upload
        :multiple="false"
        :direction="args.direction"
        :limit="args.limit"
        :accept="args.accept"
        :disabled="args.disabled"
        :clearable="args.clearable"
        :validate-event="args.validateEvent"
        :text-upload-file="args.textUploadFile"
        :text-replace-file="args.textReplaceFile"
        :text-loading-file="args.textLoadingFile"
        :text-uploaded-files="args.textUploadedFiles"
        :value="formModel.file"
        @select="handleFileSelect"
        @abort="handleAbort"
        @clear="handleClear"
      />
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
