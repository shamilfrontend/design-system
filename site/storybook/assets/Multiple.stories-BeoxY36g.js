import { i as e } from './preload-helper-CMdWXl7s.js';
import { X as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { L as i, R as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    a(),
    (o = {
      title: `Components/QUpload/Multiple`,
      component: i,
      argTypes: {
        multiple: { control: !1 },
        direction: { options: [`right`, `bottom`], control: { type: `select` } }
      }
    }),
    (s = e =>
      n({
        setup() {
          let n = t({ files: [] });
          return {
            args: e,
            formModel: n,
            handleFileSelect: async (e, t) => {
              n.files.push({ id: t, sourceFile: e, name: e.name, loading: 0 });
              let r = n.files.find(({ id: e }) => e === t);
              await new Promise(e => {
                let t = setInterval(() => {
                  r &&
                    (r.loading === null && (r.loading = 0), (r.loading += 10));
                }, 100);
                setTimeout(() => {
                  (clearInterval(t), r && (r.loading = null), e());
                }, 1e3);
              });
            },
            handleAbort: e => {
              console.log(`abort uploading for: `, e);
            },
            handleClear: e => {
              n.files = n.files.filter(({ id: t }) => t !== e);
            },
            handleClearAll: () => {
              n.files = [];
            }
          };
        },
        template: `
      <q-upload
        :multiple="true"
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
        :value="formModel.files"
        @select="handleFileSelect"
        @abort="handleAbort"
        @clear="handleClear"
        @clear-all="handleClearAll"
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
      files: []
    });
    const handleFileSelect = async (sourceFile: File, fileId: string): Promise<void> => {
      formModel.files.push({
        id: fileId,
        sourceFile,
        name: sourceFile.name,
        loading: 0
      });
      const currentFile = formModel.files.find(({
        id
      }) => id === fileId);
      const promise = (): Promise<void> => new Promise((resolve): void => {
        const interval = setInterval(() => {
          if (!currentFile) return;
          if (currentFile.loading === null) currentFile.loading = 0;
          currentFile.loading += 10;
        }, 100);
        setTimeout(() => {
          clearInterval(interval);
          if (currentFile) currentFile.loading = null;
          resolve();
        }, 1000);
      });
      await promise();
    };
    const handleAbort = (fileId: string): void => {
      console.log('abort uploading for: ', fileId);
    };
    const handleClear = (fileId: string): void => {
      formModel.files = formModel.files.filter(({
        id
      }) => id !== fileId);
    };
    const handleClearAll = (): void => {
      formModel.files = [];
    };
    return {
      args,
      formModel,
      handleFileSelect,
      handleAbort,
      handleClear,
      handleClearAll
    };
  },
  template: \`
      <q-upload
        :multiple="true"
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
        :value="formModel.files"
        @select="handleFileSelect"
        @abort="handleAbort"
        @clear="handleClear"
        @clear-all="handleClearAll"
      />
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Multiple`]));
})();
export { c as Multiple, l as __namedExportsOrder, o as default };
