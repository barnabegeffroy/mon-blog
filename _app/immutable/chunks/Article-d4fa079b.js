import{S as B,i as F,s as J,B as O,a as y,k as S,q as $,v as T,T as j,h as v,c as k,l as q,m as D,r as G,w as V,n as K,b as E,J as p,x as H,u as L,f as g,g as M,t as b,d as N,D as P,E as Q,F as R,y as z,p as w}from"./index-b165e248.js";import{C as U}from"./Comment-e8ea5dad.js";import{T as W}from"./Toc-690d1d24.js";function I(r){let a,l,t,i;return l=new W({props:{title:"Sommaire",breakpoint:"0",headingSelector:":is(h2, h3):not(.toc-exclude)",activeHeadingScrollOffset:"30"}}),{c(){a=S("div"),t=S("div"),T(l.$$.fragment),this.h()},l(n){a=q(n,"DIV",{});var c=D(a);t=q(c,"DIV",{style:!0});var _=D(t);V(l.$$.fragment,_),c.forEach(v),this.h()},h(){w(t,"display","contents"),w(t,"--toc-active-bg","none"),w(t,"--toc-active-color","rgba(0,0,0,0.7)"),w(t,"--toc-li-padding","10px")},m(n,c){E(n,a,c),p(a,t),H(l,t,null),i=!0},i(n){i||(g(l.$$.fragment,n),i=!0)},o(n){b(l.$$.fragment,n),i=!1},d(n){n&&v(a),z(l)}}}function X(r){let a,l,t,i,n,c,_,o,d,h;document.title=a=r[0];let s=r[2]&&I();const A=r[4].default,m=O(A,r,r[3],null);return d=new U({props:{name:r[1]}}),{c(){l=y(),t=S("div"),i=S("h1"),n=$(r[0]),c=y(),s&&s.c(),_=y(),m&&m.c(),o=y(),T(d.$$.fragment),this.h()},l(e){j('[data-svelte="svelte-1258swp"]',document.head).forEach(v),l=k(e),t=q(e,"DIV",{class:!0});var u=D(t);i=q(u,"H1",{});var C=D(i);n=G(C,r[0]),C.forEach(v),c=k(u),s&&s.l(u),_=k(u),m&&m.l(u),u.forEach(v),o=k(e),V(d.$$.fragment,e),this.h()},h(){K(t,"class","content svelte-1orzqwm")},m(e,f){E(e,l,f),E(e,t,f),p(t,i),p(i,n),p(t,c),s&&s.m(t,null),p(t,_),m&&m.m(t,null),E(e,o,f),H(d,e,f),h=!0},p(e,[f]){(!h||f&1)&&a!==(a=e[0])&&(document.title=a),(!h||f&1)&&L(n,e[0]),e[2]?s?f&4&&g(s,1):(s=I(),s.c(),g(s,1),s.m(t,_)):s&&(M(),b(s,1,1,()=>{s=null}),N()),m&&m.p&&(!h||f&8)&&P(m,A,e,e[3],h?R(A,e[3],f,null):Q(e[3]),null);const u={};f&2&&(u.name=e[1]),d.$set(u)},i(e){h||(g(s),g(m,e),g(d.$$.fragment,e),h=!0)},o(e){b(s),b(m,e),b(d.$$.fragment,e),h=!1},d(e){e&&v(l),e&&v(t),s&&s.d(),m&&m.d(e),e&&v(o),z(d,e)}}}function Y(r,a,l){let{$$slots:t={},$$scope:i}=a,{title:n}=a,{name:c}=a,{sommaire:_}=a;return r.$$set=o=>{"title"in o&&l(0,n=o.title),"name"in o&&l(1,c=o.name),"sommaire"in o&&l(2,_=o.sommaire),"$$scope"in o&&l(3,i=o.$$scope)},[n,c,_,i,t]}class te extends B{constructor(a){super(),F(this,a,Y,X,J,{title:0,name:1,sommaire:2})}}export{te as A};
