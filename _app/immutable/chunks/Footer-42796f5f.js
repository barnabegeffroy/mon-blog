import{S as $,i as x,s as ee,k as g,a as A,l as p,m as b,h as f,c as C,n as h,K as q,L as te,b as T,J as _,M as K,C as F,A as M,N as Q,O as se,G as U,I as ae,q as P,r as S,P as Y,Q as ne,u as le,R as oe}from"./index-b165e248.js";import{b as D}from"./paths-6cd3a76e.js";import{l as j}from"./vars-6fb987dd.js";import{p as re}from"./stores-22da8b7a.js";const{window:ie}=ae;function z(e,l,s){const t=e.slice();return t[8]=l[s],t}function W(e,l,s){const t=e.slice();return t[11]=l[s],t}function X(e){let l,s,t=e[11].label+"",r,o,i,E,I;return{c(){l=g("li"),s=g("a"),r=P(t),i=A(),this.h()},l(v){l=p(v,"LI",{class:!0});var c=b(l);s=p(c,"A",{"data-sveltekit-prefetch":!0,href:!0,class:!0});var u=b(s);r=S(u,t),u.forEach(f),i=C(c),c.forEach(f),this.h()},h(){h(s,"data-sveltekit-prefetch",""),h(s,"href",o=(e[2]==="en"?D:D+"/"+e[2])+"/"+e[11].href+(e[11].href===""?"":"/")),h(s,"class","svelte-6m6u89"),h(l,"class","svelte-6m6u89"),Y(l,"active",e[3].routeId===(e[2]==="en"?"(en)":e[2])+e[11].href||e[3].routeId===(e[2]==="en"?"(en)":e[2])+"/"+e[11].href)},m(v,c){T(v,l,c),_(l,s),_(s,r),_(l,i),E||(I=F(l,"click",function(){ne(e[1]?e[4]:null)&&(e[1]?e[4]:null).apply(this,arguments)}),E=!0)},p(v,c){e=v,c&1&&t!==(t=e[11].label+"")&&le(r,t),c&37&&o!==(o=(e[2]==="en"?D:D+"/"+e[2])+"/"+e[11].href+(e[11].href===""?"":"/"))&&h(s,"href",o),c&13&&Y(l,"active",e[3].routeId===(e[2]==="en"?"(en)":e[2])+e[11].href||e[3].routeId===(e[2]==="en"?"(en)":e[2])+"/"+e[11].href)},d(v){v&&f(l),E=!1,I()}}}function Z(e){let l,s=e[8].name+"",t,r;return{c(){l=g("option"),t=P(s),this.h()},l(o){l=p(o,"OPTION",{});var i=b(l);t=S(i,s),i.forEach(f),this.h()},h(){l.__value=e[8].code,l.value=l.__value,l.selected=r=e[8].code===e[2]},m(o,i){T(o,l,i),_(l,t)},p(o,i){i&36&&r!==(r=o[8].code===o[2])&&(l.selected=r)},d(o){o&&f(l)}}}function ce(e){let l,s,t,r,o,i,E,I,v,c,u,H,k,N,R,O=e[0],d=[];for(let n=0;n<O.length;n+=1)d[n]=X(W(e,O,n));let V=e[5],m=[];for(let n=0;n<V.length;n+=1)m[n]=Z(z(e,V,n));return{c(){l=g("nav"),s=g("div"),t=g("div"),r=g("div"),i=A(),E=g("div"),I=A(),v=g("div"),c=g("ul");for(let n=0;n<d.length;n+=1)d[n].c();H=A(),k=g("select");for(let n=0;n<m.length;n+=1)m[n].c();this.h()},l(n){l=p(n,"NAV",{id:!0,class:!0});var w=b(l);s=p(w,"DIV",{class:!0});var a=b(s);t=p(a,"DIV",{class:!0});var L=b(t);r=p(L,"DIV",{class:!0}),b(r).forEach(f),L.forEach(f),i=C(a),E=p(a,"DIV",{}),b(E).forEach(f),I=C(a),v=p(a,"DIV",{class:!0});var B=b(v);c=p(B,"UL",{class:!0});var G=b(c);for(let y=0;y<d.length;y+=1)d[y].l(G);G.forEach(f),B.forEach(f),H=C(a),k=p(a,"SELECT",{class:!0});var J=b(k);for(let y=0;y<m.length;y+=1)m[y].l(J);J.forEach(f),a.forEach(f),w.forEach(f),this.h()},h(){h(r,"class","middle-line svelte-6m6u89"),h(t,"class",o=q(`mobile-icon${e[1]?" active":""}`)+" svelte-6m6u89"),h(c,"class",u=q(`navbar-list${e[1]?" mobile":""}`)+" svelte-6m6u89"),h(v,"class","items"),h(k,"class","svelte-6m6u89"),e[2]===void 0&&te(()=>e[7].call(k)),h(s,"class","inner svelte-6m6u89"),h(l,"id","navbar"),h(l,"class","svelte-6m6u89")},m(n,w){T(n,l,w),_(l,s),_(s,t),_(t,r),_(s,i),_(s,E),_(s,I),_(s,v),_(v,c);for(let a=0;a<d.length;a+=1)d[a].m(c,null);_(s,H),_(s,k);for(let a=0;a<m.length;a+=1)m[a].m(k,null);K(k,e[2]),N||(R=[F(ie,"scroll",he),F(t,"click",e[4]),F(k,"change",e[7]),F(k,"change",e[6])],N=!0)},p(n,[w]){if(w&2&&o!==(o=q(`mobile-icon${n[1]?" active":""}`)+" svelte-6m6u89")&&h(t,"class",o),w&31){O=n[0];let a;for(a=0;a<O.length;a+=1){const L=W(n,O,a);d[a]?d[a].p(L,w):(d[a]=X(L),d[a].c(),d[a].m(c,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=O.length}if(w&2&&u!==(u=q(`navbar-list${n[1]?" mobile":""}`)+" svelte-6m6u89")&&h(c,"class",u),w&36){V=n[5];let a;for(a=0;a<V.length;a+=1){const L=z(n,V,a);m[a]?m[a].p(L,w):(m[a]=Z(L),m[a].c(),m[a].m(k,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=V.length}w&36&&K(k,n[2])},i:M,o:M,d(n){n&&f(l),Q(d,n),Q(m,n),N=!1,se(R)}}}function he(){var e=document.getElementById("navbar"),l=e.offsetTop;window.pageYOffset>=l?e.classList.add("sticky"):e.classList.remove("sticky")}function fe(e,l,s){let t,r;U(e,j,u=>s(2,t=u)),U(e,re,u=>s(3,r=u));let o=!1,{navItems:i}=l;const E=()=>s(1,o=!o),I=[{name:"\u{1F1EC}\u{1F1E7}\uFE0F English",code:"en"},{name:"\u{1F1E8}\u{1F1F5}\uFE0F Fran\xE7ais",code:"fr"}];function v(){var u=t=="en"?window.location.pathname.substring(12):window.location.pathname.substring(9);window.location.href=t==="en"?D+u:D+"/"+t+u}function c(){t=oe(this),j.set(t),s(5,I)}return e.$$set=u=>{"navItems"in u&&s(0,i=u.navItems)},[i,o,t,r,E,I,v,c]}class pe extends ${constructor(l){super(),x(this,l,fe,ce,ee,{navItems:0})}}function ue(e){let l,s,t,r;return{c(){l=g("footer"),s=g("p"),t=g("a"),r=P(e[0]),this.h()},l(o){l=p(o,"FOOTER",{class:!0});var i=b(l);s=p(i,"P",{});var E=b(s);t=p(E,"A",{href:!0,rel:!0,target:!0,class:!0});var I=b(t);r=S(I,e[0]),I.forEach(f),E.forEach(f),i.forEach(f),this.h()},h(){h(t,"href","https://github.com/barnabegeffroy/mon-blog"),h(t,"rel","noopener noreferrer"),h(t,"target","_blank"),h(t,"class","svelte-ugq5h"),h(l,"class","svelte-ugq5h")},m(o,i){T(o,l,i),_(l,s),_(s,t),_(t,r)},p(o,[i]){i&1&&le(r,o[0])},i:M,o:M,d(o){o&&f(l)}}}function _e(e,l,s){let{content:t}=l;return e.$$set=r=>{"content"in r&&s(0,t=r.content)},[t]}class be extends ${constructor(l){super(),x(this,l,_e,ue,ee,{content:0})}}export{be as F,pe as H};
