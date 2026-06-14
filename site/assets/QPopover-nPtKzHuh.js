import {
  d as e,
  l as t,
  m as n,
  o as r,
  r as i,
  u as a
} from './app-CIsYDi5X.js';
var o = JSON.parse(
    `{"path":"/components/QPopover.html","title":"QPopover 💬","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":3}]},"filePathRelative":"components/QPopover.md"}`
  ),
  s = { name: `QPopover.md` };
function c(i, o, s, c, l, u) {
  return (
    n(),
    t(`div`, null, [
      ...(o[0] ||= [
        r(
          `h1`,
          { id: `qpopover-💬`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#qpopover-💬` }, [
              r(`span`, null, `QPopover 💬`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [
            r(`code`, null, `QPopover`),
            e(
              ` is a non-modal dialog that floats around a trigger. It is used to display contextual information to the user, and should be paired with a clickable trigger element.`
            )
          ],
          -1
        ),
        r(
          `h2`,
          { id: `example`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#example` }, [
              r(`span`, null, `Example`)
            ])
          ],
          -1
        ),
        r(`p`, null, `Default view:`, -1),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `257px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QPopover/main.html`
          },
          null,
          -1
        ),
        a(
          `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-question<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">circle</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-question-mark<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-popover</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h3><ul><li>Type: <code>String</code></li><li>default: <code>null</code></li></ul><p>Popover content title inside context window.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h3><ul><li><p>Type: <code>String</code></p></li><li><p>default: <code>null</code></p></li><li><p><code>&#39;q-icon-*&#39;</code> - class string, see full list <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">here</a></p></li></ul><p>Popover content icon inside context window.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-question<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="iconcolor" tabindex="-1"><a class="header-anchor" href="#iconcolor"><span>iconColor</span></a></h3><ul><li>Type: <code>String</code></li><li>default: <code>&#39;var(--gradient-secondary)&#39;</code></li></ul><p>Icon&#39;s color.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">icon-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ececec<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="popperoptions" tabindex="-1"><a class="header-anchor" href="#popperoptions"><span>popperOptions</span></a></h3><ul><li>Type: <code>Object</code></li><li>Default: <code>null</code></li></ul><p>We use Popper.js to show tooltips &amp; popovers. See full options guide <a href="https://popper.js.org/docs/v2/constructors/#options" target="_blank" rel="noopener noreferrer">here</a></p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span>
  <span class="token attr-name">:popper-options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    modifiers: [
      {
        name: &#39;flip&#39;,
        enabled: false
      }
    ]
  }<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">...</span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>trigger</span></a></h3><ul><li>Type: <code>&#39;click&#39; | &#39;hover&#39;</code></li><li>Default: <code>&#39;click&#39;</code></li></ul><p>Opening event trigger.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="placement" tabindex="-1"><a class="header-anchor" href="#placement"><span>placement</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;right-start&#39;</code></li></ul><p>Sets picker placement around the button.</p><pre><code class="language-ts"><span class="token comment">// ts type</span>
<span class="token keyword">type</span> <span class="token class-name">Placement</span> <span class="token operator">=</span> AutoPlacement <span class="token operator">|</span> BasePlacement <span class="token operator">|</span> VariationPlacement<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">AutoPlacement</span> <span class="token operator">=</span> <span class="token string">&#39;auto&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;auto-start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;auto-end&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">BasePlacement</span> <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">VariationPlacement</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-end&#39;</span><span class="token punctuation">;</span>
</code></pre><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>transition</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;q-fade&#39;</code></li></ul><p>Custom transition&#39;s animation. Applies for the default vue <code>&lt;transition&gt;</code> tag as a <code>name</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">transition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customTransitionName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="opendelay" tabindex="-1"><a class="header-anchor" href="#opendelay"><span>openDelay</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>10</code></li></ul><p>The delay before appearing, in milliseconds. NOTE: works only when <code>trigger</code> is <code>hover</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">:open-delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="closedelay" tabindex="-1"><a class="header-anchor" href="#closedelay"><span>closeDelay</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>10</code></li></ul><p>The delay before disappearing, in milliseconds. NOTE: works only when <code>trigger</code> is <code>hover</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">:close-delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="minwidth" tabindex="-1"><a class="header-anchor" href="#minwidth"><span>minWidth</span></a></h3><ul><li>Type: <code>String, Number</code></li><li>Default: <code>null</code></li></ul><p>Popover&#39;s min-width style (in px).</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">:min-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="maxwidth" tabindex="-1"><a class="header-anchor" href="#maxwidth"><span>maxWidth</span></a></h3><ul><li>Type: <code>String, Number</code></li><li>Default: <code>null</code></li></ul><p>Popover&#39;s max-width style (in px).</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">:max-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="teleportto" tabindex="-1"><a class="header-anchor" href="#teleportto"><span>teleportTo</span></a></h3><ul><li>Type <code>String, HTMLElement</code></li><li>Default: <code>&#39;body&#39;</code></li></ul><p>Specifies a target element where <code>QPopover</code> will be moved from original layout place. (has to be a valid query selector, or an HTMLElement).</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">teleport-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>.popover-wrapper&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="show" tabindex="-1"><a class="header-anchor" href="#show"><span>show</span></a></h3><p>Triggers when the context window appeares.</p><h3 id="hide" tabindex="-1"><a class="header-anchor" href="#hide"><span>hide</span></a></h3><p>Triggers when the context window disappeares.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3><p>Popover main content.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-popover</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>reference</span></a></h3><p>The trigger.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-popover</span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#reference</span><span class="token punctuation">&gt;</span></span>
    ...trigger element
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-popover</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          64
        )
      ])
    ])
  );
}
var l = i(s, [[`render`, c]]);
export { o as _pageData, l as default };
