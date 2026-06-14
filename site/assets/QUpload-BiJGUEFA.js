import {
  d as e,
  l as t,
  m as n,
  o as r,
  r as i,
  u as a
} from './app-CIsYDi5X.js';
var o = JSON.parse(
    `{"path":"/components/QUpload.html","title":"QUpload 📤","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781259814000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"components/QUpload.md"}`
  ),
  s = { name: `QUpload.md` };
function c(i, o, s, c, l, u) {
  return (
    n(),
    t(`div`, null, [
      ...(o[0] ||= [
        r(
          `h1`,
          { id: `qupload-📤`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#qupload-📤` }, [
              r(`span`, null, `QUpload 📤`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [r(`code`, null, `QUpload`), e(` is used for upload files.`)],
          -1
        ),
        r(
          `h2`,
          { id: `examples`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#examples` }, [
              r(`span`, null, `Examples`)
            ])
          ],
          -1
        ),
        r(
          `iframe`,
          {
            style: { width: `100%` },
            height: `660px`,
            scrolling: `no`,
            frameborder: `no`,
            src: `/QUpload/example.html`
          },
          null,
          -1
        ),
        a(
          `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value"><span>value</span></a></h3><ul><li>Type: <code>&#39;Array&#39; | &#39;Object&#39;</code></li><li>Default: <code>null</code></li></ul><p>Binding value. Value can be an <code>Object</code> or <code>Array</code> of <code>Object</code>s, each object MUST contain:</p><ul><li><code>id</code> - identifier of the file</li><li><code>name</code> - a filename</li><li><code>loading</code> - file upload percentage</li></ul><h3 id="accept" tabindex="-1"><a class="header-anchor" href="#accept"><span>accept</span></a></h3><ul><li>Type: <code>&#39;String&#39; | &#39;Array&#39;</code></li><li>Default: <code>null</code></li></ul><p>Defines the file types the <code>QUpload</code> should accept.</p><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether uploading multiple files is allowed.</p><h3 id="direction" tabindex="-1"><a class="header-anchor" href="#direction"><span>direction</span></a></h3><ul><li>Type: <code>&#39;Right&#39; | &#39;Bottom&#39;</code></li><li>Default: <code>Right</code></li></ul><p>Defines the file list position.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-upload</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          15
        ),
        r(
          `iframe`,
          {
            style: { width: `100%` },
            height: `670px`,
            scrolling: `no`,
            frameborder: `no`,
            src: `/QUpload/direction.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit"><span>limit</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Maximum number of uploads.</p><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether QUpload is disabled.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-upload</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          7
        ),
        r(
          `iframe`,
          {
            style: { width: `100%` },
            height: `290px`,
            scrolling: `no`,
            frameborder: `no`,
            src: `/QUpload/disabled.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="clearable" tabindex="-1"><a class="header-anchor" href="#clearable"><span>clearable</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to show clear button.</p><h3 id="validateevent" tabindex="-1"><a class="header-anchor" href="#validateevent"><span>validateEvent</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><p>If <code>QUpload</code> is wrapped in <code>QFormItem</code>, prop <code>validateEvent</code> defines if bound events will be validated immediately.</p><h3 id="textuploadfile" tabindex="-1"><a class="header-anchor" href="#textuploadfile"><span>textUploadFile</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>Defines the &#39;upload file&#39; text.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-upload</span> <span class="token attr-name">text-upload-file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Upload file<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          10
        ),
        r(
          `iframe`,
          {
            style: { width: `100%` },
            height: `350px`,
            scrolling: `no`,
            frameborder: `no`,
            src: `/QUpload/textupload.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="textreplacefile" tabindex="-1"><a class="header-anchor" href="#textreplacefile"><span>textReplaceFile</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>Defines the &#39;replace file&#39; text.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-upload</span> <span class="token attr-name">text-replace-file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Replace file<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        r(
          `iframe`,
          {
            style: { width: `100%` },
            height: `350px`,
            scrolling: `no`,
            frameborder: `no`,
            src: `/QUpload/textreplace.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="textloadingfile" tabindex="-1"><a class="header-anchor" href="#textloadingfile"><span>textLoadingFile</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>Defines the &#39;loading file&#39; text.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-upload</span> <span class="token attr-name">text-loading-file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Loading<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        r(
          `iframe`,
          {
            style: { width: `100%` },
            height: `350px`,
            scrolling: `no`,
            frameborder: `no`,
            src: `/QUpload/textloading.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="textuploadedfiles" tabindex="-1"><a class="header-anchor" href="#textuploadedfiles"><span>textUploadedFiles</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>Defines the &#39;uploaded files&#39; text.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-upload</span> <span class="token attr-name">text-uploaded-files</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Uploaded:<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        r(
          `iframe`,
          {
            style: { width: `100%` },
            height: `350px`,
            scrolling: `no`,
            frameborder: `no`,
            src: `/QUpload/textuploadedfiles.html`
          },
          null,
          -1
        ),
        a(
          `<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>select</span></a></h3><p>Triggers when file select.</p><h4 id="select-all" tabindex="-1"><a class="header-anchor" href="#select-all"><span>select-all</span></a></h4><p>Triggers when all files select.</p><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear"><span>clear</span></a></h3><p>Triggers when removing one file.</p><h3 id="clear-all" tabindex="-1"><a class="header-anchor" href="#clear-all"><span>clear-all</span></a></h3><p>Triggers when removing all files.</p><h3 id="abort" tabindex="-1"><a class="header-anchor" href="#abort"><span>abort</span></a></h3><p>Triggers when loading is aborted.</p><h3 id="exceed" tabindex="-1"><a class="header-anchor" href="#exceed"><span>exceed</span></a></h3><p>Triggers when limit is exceeded.</p>`,
          13
        )
      ])
    ])
  );
}
var l = i(s, [[`render`, c]]);
export { o as _pageData, l as default };
