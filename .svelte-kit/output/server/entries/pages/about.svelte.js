import { c as create_ssr_component, e as escape } from "../../chunks/index-7f55a65f.js";
import { b as base } from "../../chunks/paths-396f020f.js";
const prerender = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>About SvelteKit</h1>
<a sveltekit:prefetch href="${escape(base) + "/"}">Home</a>`;
});
export { About as default, prerender };
