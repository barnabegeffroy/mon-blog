import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-7f55a65f.js";
import { b as base } from "../../chunks/paths-396f020f.js";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-xxtoas.svelte-xxtoas{display:flex;justify-content:space-between}.corner.svelte-xxtoas.svelte-xxtoas{width:3em;height:3em}.corner.svelte-xxtoas a.svelte-xxtoas{display:flex;align-items:center;justify-content:center;width:100%;height:100%}nav.svelte-xxtoas.svelte-xxtoas{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-xxtoas.svelte-xxtoas{width:2em;height:3em;display:block}path.svelte-xxtoas.svelte-xxtoas{fill:var(--background)}ul.svelte-xxtoas.svelte-xxtoas{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-xxtoas.svelte-xxtoas{position:relative;height:100%}li.active.svelte-xxtoas.svelte-xxtoas::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-xxtoas a.svelte-xxtoas{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-xxtoas.svelte-xxtoas:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$1);
  return `<header class="${"svelte-xxtoas"}"><div class="${"corner svelte-xxtoas"}"></div>

	<nav class="${"svelte-xxtoas"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-xxtoas"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-xxtoas"}"></path></svg>
		<ul class="${"svelte-xxtoas"}"><li class="${["svelte-xxtoas", page === base || page === base + "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base) + "/"}" class="${"svelte-xxtoas"}">Home</a></li>
			<li class="${["svelte-xxtoas", page === base + "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${escape(base) + "/about"}" class="${"svelte-xxtoas"}">About</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-xxtoas"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-xxtoas"}"></path></svg></nav>

	<div class="${"corner svelte-xxtoas"}"><a href="${"https://github.com/barnabegeffroy/"}" target="${"_blank"}" class="${"svelte-xxtoas"}">Mon Github</a></div>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let page;
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { page }, {}, {})}
<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-1izrdc8"}"><p><a href="${"https://github.com/barnabegeffroy/mon-blog"}" target="${"_blank"}" class="${"svelte-1izrdc8"}">Code source du blog</a></p>
</footer>`;
});
export { _layout as default };
