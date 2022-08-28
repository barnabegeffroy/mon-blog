var Je=Object.defineProperty;var Ke=(a,e,n)=>e in a?Je(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var pe=(a,e,n)=>(Ke(a,typeof e!="symbol"?e+"":e,n),n);import{S as We,i as He,s as Fe,a as Ge,e as U,c as Me,b as B,g as Y,t as T,d as X,f as V,h as q,j as Ye,o as me,k as Xe,l as Qe,m as Ze,n as de,p as H,q as xe,r as et,u as tt,v as J,w as te,x as K,y as W,z as Ie}from"./chunks/index-ac4f50eb.js";import{g as De,f as Ue,a as Te,s as M,b as ge,i as nt,c as rt}from"./chunks/singletons-847edb09.js";class re{constructor(e,n){pe(this,"name","HttpError");pe(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ve{constructor(e,n){this.status=e,this.location=n}}function at(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function st(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const it=["href","pathname","search","searchParams","toString","toJSON"];function ot(a,e){const n=new URL(a);for(const i of it){let r=n[i];Object.defineProperty(n,i,{get(){return e(),r},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(i,r,f)=>f(a,r),lt(n),n}function lt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ct(a){let e=5381,n=a.length;if(typeof a=="string")for(;n;)e=e*33^a.charCodeAt(--n);else for(;n;)e=e*33^a[--n];return(e>>>0).toString(36)}const ae=window.fetch;function ft(a,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${ct(e.body)}"]`);const r=document.querySelector(i);if(r&&r.textContent){const{body:f,...t}=JSON.parse(r.textContent);return Promise.resolve(new Response(f,t))}return ae(a,e)}const ut=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function pt(a){const e=[],n=[];let i=!0;if(/\]\[/.test(a))throw new Error(`Invalid route ${a} \u2014 parameters must be separated`);if(Ce("[",a)!==Ce("]",a))throw new Error(`Invalid route ${a} \u2014 brackets are unbalanced`);return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(dt).map((f,t,l)=>{const p=decodeURIComponent(f),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(d)return e.push(d[1]),n.push(d[2]),"(?:/(.*))?";const g=t===l.length-1;return p&&"/"+p.split(/\[(.+?)\]/).map((R,I)=>{if(I%2){const k=ut.exec(R);if(!k)throw new Error(`Invalid param: ${R}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,Z,x]=k;return e.push(Z),n.push(x),D?"(.*?)":"([^/]+?)"}return g&&R.includes(".")&&(i=!1),R.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:n}}function dt(a){return!/^\([^)]+\)$/.test(a)}function ht(a,e,n,i){const r={};for(let f=0;f<e.length;f+=1){const t=e[f],l=n[f],p=a[f+1]||"";if(l){const d=i[l];if(!d)throw new Error(`Missing "${l}" param matcher`);if(!d(p))return}r[t]=p}return r}function Ce(a,e){let n=0;for(let i=0;i<e.length;i+=1)e[i]===a&&(n+=1);return n}function _t(a,e,n){return Object.entries(e).map(([r,[f,t,l]])=>{const{pattern:p,names:d,types:g}=pt(r),R={id:r,exec:I=>{const k=p.exec(I);if(k)return ht(k,d,g,n)},errors:[1,...l||[]].map(I=>a[I]),layouts:[0,...t||[]].map(i),leaf:i(f)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function i(r){const f=r<0;return f&&(r=~r),[f,a[r]]}}function mt(a,e){return new re(a,e)}function gt(a){let e,n,i;var r=a[0][0];function f(t){return{props:{data:t[1],errors:t[4]}}}return r&&(e=new r(f(a))),{c(){e&&J(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const p={};if(l&2&&(p.data=t[1]),l&16&&(p.errors=t[4]),r!==(r=t[0][0])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{W(d,1)}),X()}r?(e=new r(f(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(p)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&W(e,t)}}}function wt(a){let e,n,i;var r=a[0][0];function f(t){return{props:{data:t[1],errors:t[4],$$slots:{default:[kt]},$$scope:{ctx:t}}}}return r&&(e=new r(f(a))),{c(){e&&J(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const p={};if(l&2&&(p.data=t[1]),l&16&&(p.errors=t[4]),l&1053&&(p.$$scope={dirty:l,ctx:t}),r!==(r=t[0][0])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{W(d,1)}),X()}r?(e=new r(f(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(p)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&W(e,t)}}}function bt(a){let e,n,i;var r=a[0][1];function f(t){return{props:{data:t[2],errors:t[4]}}}return r&&(e=new r(f(a))),{c(){e&&J(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const p={};if(l&4&&(p.data=t[2]),l&16&&(p.errors=t[4]),r!==(r=t[0][1])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{W(d,1)}),X()}r?(e=new r(f(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(p)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&W(e,t)}}}function yt(a){let e,n,i;var r=a[0][1];function f(t){return{props:{data:t[2],errors:t[4],$$slots:{default:[vt]},$$scope:{ctx:t}}}}return r&&(e=new r(f(a))),{c(){e&&J(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const p={};if(l&4&&(p.data=t[2]),l&16&&(p.errors=t[4]),l&1049&&(p.$$scope={dirty:l,ctx:t}),r!==(r=t[0][1])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{W(d,1)}),X()}r?(e=new r(f(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(p)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&W(e,t)}}}function vt(a){let e,n,i;var r=a[0][2];function f(t){return{props:{data:t[3],errors:t[4]}}}return r&&(e=new r(f(a))),{c(){e&&J(e.$$.fragment),n=U()},l(t){e&&te(e.$$.fragment,t),n=U()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const p={};if(l&8&&(p.data=t[3]),l&16&&(p.errors=t[4]),r!==(r=t[0][2])){if(e){Y();const d=e;T(d.$$.fragment,1,0,()=>{W(d,1)}),X()}r?(e=new r(f(t)),J(e.$$.fragment),V(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(p)},i(t){i||(e&&V(e.$$.fragment,t),i=!0)},o(t){e&&T(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&W(e,t)}}}function kt(a){let e,n,i,r;const f=[yt,bt],t=[];function l(p,d){return p[0][2]?0:1}return e=l(a),n=t[e]=f[e](a),{c(){n.c(),i=U()},l(p){n.l(p),i=U()},m(p,d){t[e].m(p,d),B(p,i,d),r=!0},p(p,d){let g=e;e=l(p),e===g?t[e].p(p,d):(Y(),T(t[g],1,1,()=>{t[g]=null}),X(),n=t[e],n?n.p(p,d):(n=t[e]=f[e](p),n.c()),V(n,1),n.m(i.parentNode,i))},i(p){r||(V(n),r=!0)},o(p){T(n),r=!1},d(p){t[e].d(p),p&&q(i)}}}function Ne(a){let e,n=a[6]&&qe(a);return{c(){e=Xe("div"),n&&n.c(),this.h()},l(i){e=Qe(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=Ze(e);n&&n.l(r),r.forEach(q),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(i,r){B(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&q(e),n&&n.d()}}}function qe(a){let e;return{c(){e=xe(a[7])},l(n){e=et(n,a[7])},m(n,i){B(n,e,i)},p(n,i){i&128&&tt(e,n[7])},d(n){n&&q(e)}}}function Et(a){let e,n,i,r,f;const t=[wt,gt],l=[];function p(g,R){return g[0][1]?0:1}e=p(a),n=l[e]=t[e](a);let d=a[5]&&Ne(a);return{c(){n.c(),i=Ge(),d&&d.c(),r=U()},l(g){n.l(g),i=Me(g),d&&d.l(g),r=U()},m(g,R){l[e].m(g,R),B(g,i,R),d&&d.m(g,R),B(g,r,R),f=!0},p(g,[R]){let I=e;e=p(g),e===I?l[e].p(g,R):(Y(),T(l[I],1,1,()=>{l[I]=null}),X(),n=l[e],n?n.p(g,R):(n=l[e]=t[e](g),n.c()),V(n,1),n.m(i.parentNode,i)),g[5]?d?d.p(g,R):(d=Ne(g),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},i(g){f||(V(n),f=!0)},o(g){T(n),f=!1},d(g){l[e].d(g),g&&q(i),d&&d.d(g),g&&q(r)}}}function $t(a,e,n){let{stores:i}=e,{page:r}=e,{components:f}=e,{data_0:t=null}=e,{data_1:l=null}=e,{data_2:p=null}=e,{errors:d}=e;Ye(i.page.notify);let g=!1,R=!1,I=null;return me(()=>{const k=i.page.subscribe(()=>{g&&(n(6,R=!0),n(7,I=document.title||"untitled page"))});return n(5,g=!0),k}),a.$$set=k=>{"stores"in k&&n(8,i=k.stores),"page"in k&&n(9,r=k.page),"components"in k&&n(0,f=k.components),"data_0"in k&&n(1,t=k.data_0),"data_1"in k&&n(2,l=k.data_1),"data_2"in k&&n(3,p=k.data_2),"errors"in k&&n(4,d=k.errors)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[f,t,l,p,d,g,R,I,i,r]}class Rt extends We{constructor(e){super(),He(this,e,$t,Et,Fe,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const Lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),St=function(a,e){return new URL(a,e).href},ze={},N=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=St(r,i),r in ze)return;ze[r]=!0;const f=r.endsWith(".css"),t=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const l=document.createElement("link");if(l.rel=f?"stylesheet":Lt,f||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),f)return new Promise((p,d)=>{l.addEventListener("load",p),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Ot={},se=[()=>N(()=>import("./chunks/0-88e0951e.js"),["chunks/0-88e0951e.js","components/pages/_layout.svelte-7336f7ff.js","assets/+layout-a460bcb6.css","chunks/index-ac4f50eb.js"],import.meta.url),()=>N(()=>import("./chunks/1-093102f3.js"),["chunks/1-093102f3.js","components/error.svelte-19ec671e.js","chunks/index-ac4f50eb.js","chunks/singletons-847edb09.js"],import.meta.url),()=>N(()=>import("./chunks/2-dae74088.js"),["chunks/2-dae74088.js","components/pages/(en)/_layout.svelte-7bdedb38.js","chunks/index-ac4f50eb.js","chunks/Footer-43bde5f7.js","assets/Footer-77c6ca59.css"],import.meta.url),()=>N(()=>import("./chunks/3-b1d28371.js"),["chunks/3-b1d28371.js","components/pages/fr/_layout.svelte-6f819c61.js","chunks/index-ac4f50eb.js","chunks/Footer-43bde5f7.js","assets/Footer-77c6ca59.css"],import.meta.url),()=>N(()=>import("./chunks/4-ad3d7bfe.js"),["chunks/4-ad3d7bfe.js","components/pages/(en)/_page.svelte-4ff68c58.js","chunks/index-ac4f50eb.js","chunks/home-4da4c7fe.js","assets/home-a0b61f22.css"],import.meta.url),()=>N(()=>import("./chunks/5-dcc63125.js"),["chunks/5-dcc63125.js","assets/Comment-b5b5e7b8.css","components/pages/(en)/gafalt/_page.svelte-15e5d8e9.js","chunks/index-ac4f50eb.js","chunks/Gafalt-9f3979ea.js"],import.meta.url),()=>N(()=>import("./chunks/6-f026bf43.js"),["chunks/6-f026bf43.js","assets/Comment-b5b5e7b8.css","components/pages/(en)/more/_page.svelte-65cb4d66.js","chunks/index-ac4f50eb.js","chunks/ressources-da0e3fad.js"],import.meta.url),()=>N(()=>import("./chunks/7-031099c6.js"),["chunks/7-031099c6.js","components/pages/(en)/why/_page.svelte-ce34c8e8.js","assets/+page-ebe4f841.css","chunks/index-ac4f50eb.js","chunks/Manifest-cb2fc098.js","assets/Manifest-5babaf59.css"],import.meta.url),()=>N(()=>import("./chunks/8-62708eda.js"),["chunks/8-62708eda.js","components/pages/fr/_page.svelte-0690a4a1.js","chunks/index-ac4f50eb.js","chunks/home-4da4c7fe.js","assets/home-a0b61f22.css"],import.meta.url),()=>N(()=>import("./chunks/9-30dfd1de.js"),["chunks/9-30dfd1de.js","assets/Comment-b5b5e7b8.css","components/pages/fr/aller-plus-loin/_page.svelte-a0b3702a.js","chunks/index-ac4f50eb.js","chunks/ressources-da0e3fad.js"],import.meta.url),()=>N(()=>import("./chunks/10-f58d47e8.js"),["chunks/10-f58d47e8.js","assets/Comment-b5b5e7b8.css","components/pages/fr/gafalt/_page.svelte-1e2aacd8.js","chunks/index-ac4f50eb.js","chunks/Gafalt-9f3979ea.js"],import.meta.url),()=>N(()=>import("./chunks/11-5603579d.js"),["chunks/11-5603579d.js","components/pages/fr/pourquoi/_page.svelte-05ded8f4.js","assets/+page-ebe4f841.css","chunks/index-ac4f50eb.js","chunks/Manifest-cb2fc098.js","assets/Manifest-5babaf59.css"],import.meta.url)],Pt={"(en)":[4,[2]],"(en)/gafalt":[5,[2]],"(en)/more":[6,[2]],"(en)/why":[7,[2]],fr:[8,[3]],"fr/aller-plus-loin":[9,[3]],"fr/gafalt":[10,[3]],"fr/pourquoi":[11,[3]]},Be="sveltekit:scroll",G="sveltekit:index",he=_t(se,Pt,Ot),we=se[0],be=se[1];we();be();let ee={};try{ee=JSON.parse(sessionStorage[Be])}catch{}function _e(a){ee[a]=ge()}function jt({target:a,base:e,trailing_slash:n}){var Oe;const i=[],r={id:null,promise:null},f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},l=!1,p=!0,d=!1,g=1,R=null,I,k=!0,D=(Oe=history.state)==null?void 0:Oe[G];D||(D=Date.now(),history.replaceState({...history.state,[G]:D},"",location.href));const Z=ee[D];Z&&(history.scrollRestoration="manual",scrollTo(Z.x,Z.y));let x=!1,Q,ye;async function ve(s,{noscroll:u=!1,replaceState:h=!1,keepfocus:o=!1,state:c={}},E){if(typeof s=="string"&&(s=new URL(s,De(document))),k)return ce({url:s,scroll:u?ge():null,keepfocus:o,redirect_chain:E,details:{state:c,replaceState:h},accepted:()=>{},blocked:()=>{}});await F(s)}async function ke(s){const u=Se(s);if(!u)throw new Error("Attempted to prefetch a URL that does not belong to this app");return r.promise=Le(u),r.id=u.id,r.promise}async function Ee(s,u,h,o){var y,L,S;const c=Se(s),E=ye={};let _=c&&await Le(c);if(!_&&s.origin===location.origin&&s.pathname===location.pathname&&(_=await le({status:404,error:new Error(`Not found: ${s.pathname}`),url:s,routeId:null})),!_)return await F(s),!1;if(s=(c==null?void 0:c.url)||s,ye!==E)return!1;if(i.length=0,_.type==="redirect")if(u.length>10||u.includes(s.pathname))_=await le({status:500,error:new Error("Redirect loop"),url:s,routeId:null});else return k?ve(new URL(_.location,s).href,{},[...u,s.pathname]):await F(new URL(_.location,location.href)),!1;else((L=(y=_.props)==null?void 0:y.page)==null?void 0:L.status)>=400&&await M.updated.check()&&await F(s);if(d=!0,h&&h.details){const{details:v}=h,j=v.replaceState?0:1;v.state[G]=D+=j,history[v.replaceState?"replaceState":"pushState"](v.state,"",s)}if(l?(t=_.state,_.props.page&&(_.props.page.url=s),I.$set(_.props)):$e(_),h){const{scroll:v,keepfocus:j}=h;if(!j){const b=document.body,P=b.getAttribute("tabindex");b.tabIndex=-1,b.focus({preventScroll:!0}),setTimeout(()=>{var m;(m=getSelection())==null||m.removeAllRanges()}),P!==null?b.setAttribute("tabindex",P):b.removeAttribute("tabindex")}if(await Ie(),p){const b=s.hash&&document.getElementById(s.hash.slice(1));v?scrollTo(v.x,v.y):b?b.scrollIntoView():scrollTo(0,0)}}else await Ie();r.promise=null,r.id=null,p=!0,_.props.page&&(Q=_.props.page);const $=_.state.branch[_.state.branch.length-1];k=((S=$==null?void 0:$.node.shared)==null?void 0:S.router)!==!1,o&&o(),d=!1}function $e(s){t=s.state;const u=document.querySelector("style[data-sveltekit]");if(u&&u.remove(),Q=s.props.page,I=new Rt({target:a,props:{...s.props,stores:M},hydrate:!0}),k){const h={from:null,to:new URL(location.href)};f.after_navigate.forEach(o=>o(h))}l=!0}async function ne({url:s,params:u,branch:h,status:o,error:c,routeId:E,validation_errors:_}){var j;const $=h.filter(Boolean),y={type:"loaded",state:{url:s,params:u,branch:h,error:c,session_id:g},props:{components:$.map(b=>b.node.component),errors:_}};let L={},S=!Q;for(let b=0;b<$.length;b+=1){const P=$[b];L={...L,...P.data},(S||!t.branch.some(m=>m===P))&&(y.props[`data_${b}`]=L,S=S||Object.keys((j=P.data)!=null?j:{}).length>0)}if(S||(S=Object.keys(Q.data).length!==Object.keys(L).length),!t.url||s.href!==t.url.href||t.error!==c||S){y.props.page={error:c,params:u,routeId:E,status:o,url:s,data:S?L:Q.data};const b=(P,m)=>{Object.defineProperty(y.props.page,P,{get:()=>{throw new Error(`$page.${P} has been replaced by $page.url.${m}`)}})};b("origin","origin"),b("path","pathname"),b("query","searchParams")}return y}async function ie({loader:s,parent:u,url:h,params:o,routeId:c,server_data_node:E}){var L,S,v,j,b;let _=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},y=await s();if((L=y.shared)!=null&&L.load){let P=function(...w){for(const O of w){const{href:C}=new URL(O,h);$.dependencies.add(C)}};const m={};for(const w in o)Object.defineProperty(m,w,{get(){return $.params.add(w),o[w]},enumerable:!0});const A={routeId:c,params:m,data:(S=E==null?void 0:E.data)!=null?S:null,url:ot(h,()=>{$.url=!0}),async fetch(w,O){let C;typeof w=="string"?C=w:(C=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O});const z=new URL(C,h).href;return P(z),l?ae(z,O):ft(C,O)},setHeaders:()=>{},depends:P,parent(){return $.parent=!0,u()}};Object.defineProperties(A,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(v=await y.shared.load.call(null,A))!=null?v:null}return{node:y,loader:s,server:E,shared:(j=y.shared)!=null&&j.load?{type:"data",data:_,uses:$}:null,data:(b=_!=null?_:E==null?void 0:E.data)!=null?b:null}}function Re(s,u,h){if(!h)return!1;if(h.parent&&u||s.url&&h.url)return!0;for(const o of s.params)if(h.params.has(o))return!0;for(const o of h.dependencies)if(i.some(c=>c(o)))return!0;return!1}function oe(s,u){var h,o;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((h=s.uses.dependencies)!=null?h:[]),params:new Set((o=s.uses.params)!=null?o:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&u!=null?u:null}async function Le({id:s,url:u,params:h,route:o}){if(r.id===s&&r.promise)return r.promise;const{errors:c,layouts:E,leaf:_}=o,$=t.url&&{url:s!==t.url.pathname+t.url.search,params:Object.keys(h).filter(m=>t.params[m]!==h[m])},y=[...E,_];c.forEach(m=>m==null?void 0:m().catch(()=>{})),y.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let L=null;const S=y.reduce((m,A,w)=>{var z;const O=t.branch[w],C=!!(A!=null&&A[0])&&((O==null?void 0:O.loader)!==A[1]||Re($,m.some(Boolean),(z=O.server)==null?void 0:z.uses));return m.push(C),m},[]);if(S.some(Boolean)){try{const m=await ae(`${u.pathname}${u.pathname.endsWith("/")?"":"/"}__data.json${u.search}`,{headers:{"x-sveltekit-invalidated":S.map(A=>A?"1":"").join(",")}});if(L=await m.json(),!m.ok)throw L}catch{F(u);return}if(L.type==="redirect")return L}const v=L==null?void 0:L.nodes;let j=!1;const b=y.map(async(m,A)=>{var fe,Pe;if(!m)return;const w=t.branch[A],O=(fe=v==null?void 0:v[A])!=null?fe:null;if((!O||O.type==="skip")&&m[1]===(w==null?void 0:w.loader)&&!Re($,j,(Pe=w.shared)==null?void 0:Pe.uses))return w;if(j=!0,(O==null?void 0:O.type)==="error")throw O.httperror?mt(O.httperror.status,O.httperror.message):O.error;return ie({loader:m[1],url:u,params:h,routeId:o.id,parent:async()=>{var Ae;const je={};for(let ue=0;ue<A;ue+=1)Object.assign(je,(Ae=await b[ue])==null?void 0:Ae.data);return je},server_data_node:oe(O,w==null?void 0:w.server)})});for(const m of b)m.catch(()=>{});const P=[];for(let m=0;m<y.length;m+=1)if(y[m])try{P.push(await b[m])}catch(A){const w=A;if(w instanceof Ve)return{type:"redirect",location:w.location};const O=A instanceof re?A.status:500;for(;m--;)if(c[m]){let C,z=m;for(;!P[z];)z-=1;try{return C={node:await c[m](),loader:c[m],data:{},server:null,shared:null},await ne({url:u,params:h,branch:P.slice(0,z+1).concat(C),status:O,error:w,routeId:o.id})}catch{continue}}F(u);return}else P.push(void 0);return await ne({url:u,params:h,branch:P,status:200,error:null,routeId:o.id})}async function le({status:s,error:u,url:h,routeId:o}){var L;const c={},E=await we();let _=null;if(E.server){const S=await ae(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),v=await S.json();if(_=(L=v==null?void 0:v[0])!=null?L:null,!S.ok||(v==null?void 0:v.type)!=="data"){F(h);return}}const $=await ie({loader:we,url:h,params:c,routeId:o,parent:()=>Promise.resolve({}),server_data_node:oe(_)}),y={node:await be(),loader:be,shared:null,server:null,data:null};return await ne({url:h,params:c,branch:[$,y],status:s,error:u,routeId:o})}function Se(s){if(s.origin!==location.origin||!s.pathname.startsWith(e))return;const u=decodeURI(s.pathname.slice(e.length)||"/");for(const h of he){const o=h.exec(u);if(o){const c=new URL(s.origin+at(s.pathname,n)+s.search+s.hash);return{id:c.pathname+c.search,route:h,params:st(o),url:c}}}}async function ce({url:s,scroll:u,keepfocus:h,redirect_chain:o,details:c,accepted:E,blocked:_}){const $=t.url;let y=!1;const L={from:$,to:s,cancel:()=>y=!0};if(f.before_navigate.forEach(S=>S(L)),y){_();return}_e(D),E(),l&&M.navigating.set({from:t.url,to:s}),await Ee(s,o,{scroll:u,keepfocus:h,details:c},()=>{const S={from:$,to:s};f.after_navigate.forEach(v=>v(S)),M.navigating.set(null)})}function F(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{me(()=>(f.after_navigate.push(s),()=>{const u=f.after_navigate.indexOf(s);f.after_navigate.splice(u,1)}))},before_navigate:s=>{me(()=>(f.before_navigate.push(s),()=>{const u=f.before_navigate.indexOf(s);f.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(d||!l)&&(p=!1)},goto:(s,u={})=>ve(s,u,[]),invalidate:s=>{var u,h;if(s===void 0){for(const o of t.branch)(u=o==null?void 0:o.server)==null||u.uses.dependencies.add(""),(h=o==null?void 0:o.shared)==null||h.uses.dependencies.add("");i.push(()=>!0)}else if(typeof s=="function")i.push(s);else{const{href:o}=new URL(s,location.href);i.push(c=>c===o)}return R||(R=Promise.resolve().then(async()=>{await Ee(new URL(location.href),[]),R=null})),R},prefetch:async s=>{const u=new URL(s,De(document));await ke(u)},prefetch_routes:async s=>{const h=(s?he.filter(o=>s.some(c=>o.exec(c))):he).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(h)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{let c=!1;const E={from:t.url,to:null,cancel:()=>c=!0};f.before_navigate.forEach(_=>_(E)),c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){_e(D);try{sessionStorage[Be]=JSON.stringify(ee)}catch{}}});const s=o=>{const c=Ue(o);c&&c.href&&c.hasAttribute("sveltekit:prefetch")&&ke(Te(c))};let u;const h=o=>{clearTimeout(u),u=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",o=>{if(!k||o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ue(o);if(!c||!c.href)return;const E=c instanceof SVGAElement,_=Te(c);if(!E&&!(_.protocol==="https:"||_.protocol==="http:"))return;const $=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||$.includes("external")||c.hasAttribute("sveltekit:reload")||(E?c.target.baseVal:c.target))return;const[y,L]=_.href.split("#");if(L!==void 0&&y===location.href.split("#")[0]){x=!0,_e(D),M.page.set({...Q,url:_}),M.page.notify();return}ce({url:_,scroll:c.hasAttribute("sveltekit:noscroll")?ge():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault()})}),addEventListener("popstate",o=>{if(o.state&&k){if(o.state[G]===D)return;ce({url:new URL(location.href),scroll:ee[o.state[G]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{D=o.state[G]},blocked:()=>{const c=D-o.state[G];history.go(c)}})}}),addEventListener("hashchange",()=>{x&&(x=!1,history.replaceState({...history.state,[G]:++D},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:s,error:u,node_ids:h,params:o,routeId:c})=>{const E=new URL(location.href);let _;try{const $=(v,j)=>{const b=document.querySelector(`script[sveltekit\\:data-type="${v}"]`);return b!=null&&b.textContent?JSON.parse(b.textContent):j},y=$("server_data",[]),L=$("validation_errors",void 0),S=h.map(async(v,j)=>ie({loader:se[v],url:E,params:o,routeId:c,parent:async()=>{const b={};for(let P=0;P<j;P+=1)Object.assign(b,(await S[P]).data);return b},server_data_node:oe(y[j])}));_=await ne({url:E,params:o,branch:await Promise.all(S),status:s,error:u!=null&&u.__is_http_error?new re(u.status,u.message):u,validation_errors:L,routeId:c})}catch($){const y=$;if(y instanceof Ve){await F(new URL($.location,location.href));return}_=await le({status:y instanceof re?y.status:500,error:y,url:E,routeId:c})}$e(_)}}}function Ut(a){}async function Tt({paths:a,target:e,route:n,spa:i,trailing_slash:r,hydrate:f}){const t=jt({target:e,base:a.base,trailing_slash:r});nt({client:t}),rt(a),f&&await t._hydrate(f),n&&(i&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Ut as set_public_env,Tt as start};
