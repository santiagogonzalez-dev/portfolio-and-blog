import{S as D,i as V,s as q,K as te,k as h,q as L,a as j,l as m,m as E,r as C,h as r,c as H,n as t,L as I,b as S,C as c,M as Z,B as P,N as ae,O as ne,o as oe,P as le,w as K,x as X,E as re,y as Y,f as F,t as J,z as Q}from"../../chunks/index-f5f38381.js";const{window:O}=le;function W(u,e,n){const l=u.slice();return l[6]=e[n],l}function se(u){let e,n=u[6].label+"",l;return{c(){e=h("a"),l=L(n),this.h()},l(s){e=m(s,"A",{href:!0,class:!0});var o=E(e);l=C(o,n),o.forEach(r),this.h()},h(){t(e,"href",u[6].href),t(e,"class","svelte-14wcjtn")},m(s,o){S(s,e,o),c(e,l)},p:P,d(s){s&&r(e)}}}function ie(u){let e,n=u[6].alt_label+"";return{c(){e=h("a"),this.h()},l(l){e=m(l,"A",{href:!0,class:!0});var s=E(e);s.forEach(r),this.h()},h(){t(e,"href",u[6].href),t(e,"class","svelte-14wcjtn")},m(l,s){S(l,e,s),e.innerHTML=n},p:P,d(l){l&&r(e)}}}function x(u){let e,n;function l(d,f){return d[1]?ie:se}let s=l(u),o=s(u);return{c(){e=h("li"),o.c(),n=j()},l(d){e=m(d,"LI",{});var f=E(e);o.l(f),n=H(f),f.forEach(r)},m(d,f){S(d,e,f),o.m(e,null),c(e,n)},p(d,f){s===(s=l(d))&&o?o.p(d,f):(o.d(1),o=s(d),o&&(o.c(),o.m(e,n)))},d(d){d&&r(e),o.d()}}}function ce(u){let e;return{c(){e=h("i"),this.h()},l(n){e=m(n,"I",{class:!0}),E(e).forEach(r),this.h()},h(){t(e,"class","fa-solid fa-bars")},m(n,l){S(n,e,l)},d(n){n&&r(e)}}}function ue(u){let e;return{c(){e=h("i"),this.h()},l(n){e=m(n,"I",{class:!0}),E(e).forEach(r),this.h()},h(){t(e,"class","fa-solid fa-xmark")},m(n,l){S(n,e,l)},d(n){n&&r(e)}}}function fe(u){let e=!1,n=()=>{e=!1},l,s,o,d,f,v,b,w,z,p,A,M;te(u[4]);let y=u[2],_=[];for(let a=0;a<y.length;a+=1)_[a]=x(W(u,y,a));function k(a,T){return a[1]?ue:ce}let $=k(u),i=$(u);return{c(){s=h("div"),o=h("nav"),d=h("h3"),f=h("a"),v=L("SZ"),b=j(),w=h("ul");for(let a=0;a<_.length;a+=1)_[a].c();z=j(),p=h("button"),i.c(),this.h()},l(a){s=m(a,"DIV",{class:!0});var T=E(s);o=m(T,"NAV",{class:!0});var g=E(o);d=m(g,"H3",{});var G=E(d);f=m(G,"A",{href:!0,class:!0});var B=E(f);v=C(B,"SZ"),B.forEach(r),G.forEach(r),b=H(g),w=m(g,"UL",{class:!0});var R=E(w);for(let N=0;N<_.length;N+=1)_[N].l(R);R.forEach(r),z=H(g),p=m(g,"BUTTON",{"aria-hidden":!0,class:!0});var U=E(p);i.l(U),U.forEach(r),g.forEach(r),T.forEach(r),this.h()},h(){t(f,"href","/"),t(f,"class","svelte-14wcjtn"),I(f,"hide_logo",u[1]),t(w,"class","svelte-14wcjtn"),I(w,"ulMobile",u[1]),t(p,"aria-hidden","true"),t(p,"class","svelte-14wcjtn"),t(o,"class","svelte-14wcjtn"),I(o,"floating_nav",u[0]>0),t(s,"class","wrapper-nav svelte-14wcjtn")},m(a,T){S(a,s,T),c(s,o),c(o,d),c(d,f),c(f,v),c(o,b),c(o,w);for(let g=0;g<_.length;g+=1)_[g].m(w,null);c(o,z),c(o,p),i.m(p,null),A||(M=[Z(O,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(n,100),u[4]()}),Z(p,"click",u[3])],A=!0)},p(a,[T]){if(T&1&&!e&&(e=!0,clearTimeout(l),scrollTo(O.pageXOffset,a[0]),l=setTimeout(n,100)),T&2&&I(f,"hide_logo",a[1]),T&6){y=a[2];let g;for(g=0;g<y.length;g+=1){const G=W(a,y,g);_[g]?_[g].p(G,T):(_[g]=x(G),_[g].c(),_[g].m(w,null))}for(;g<_.length;g+=1)_[g].d(1);_.length=y.length}T&2&&I(w,"ulMobile",a[1]),$!==($=k(a))&&(i.d(1),i=$(a),i&&(i.c(),i.m(p,null))),T&1&&I(o,"floating_nav",a[0]>0)},i:P,o:P,d(a){a&&r(s),ae(_,a),i.d(),A=!1,ne(M)}}}function he(u,e,n){var l,s;const o=[{alt_label:'<i class="fa-solid fa-house"></i>',label:"Home",href:"/"},{alt_label:'<i class="fa-solid fa-briefcase"></i>',label:"Projects",href:"#projects"},{alt_label:'<i class="fa-solid fa-person"></i>',label:"About",href:"#about"},{alt_label:'<i class="fa-solid fa-message"></i>',label:"Contact",href:"#cta"},{alt_label:'<i class="fa-solid fa-phone"></i>',label:"Resume",href:"#"}];function d(){n(1,s=!1)}const f=()=>n(1,s=!s);oe(()=>{window.matchMedia("(min-width: 43.75rem)").addEventListener("change",w=>{w.matches&&d()})});function v(){n(0,l=O.pageYOffset)}return[l,s,o,f,v]}class me extends D{constructor(e){super(),V(this,e,he,fe,q,{})}}function de(u){let e,n,l,s,o,d,f,v,b,w,z,p,A;return{c(){e=h("div"),n=h("header"),l=h("h1"),s=j(),o=h("h2"),d=L(ee),f=j(),v=h("section"),b=h("a"),w=L("Projects"),z=j(),p=h("a"),A=L("Contacts"),this.h()},l(M){e=m(M,"DIV",{id:!0,class:!0});var y=E(e);n=m(y,"HEADER",{class:!0});var _=E(n);l=m(_,"H1",{class:!0});var k=E(l);k.forEach(r),s=H(_),o=m(_,"H2",{});var $=E(o);d=C($,ee),$.forEach(r),f=H(_),v=m(_,"SECTION",{role:!0,class:!0});var i=E(v);b=m(i,"A",{href:!0,role:!0,class:!0});var a=E(b);w=C(a,"Projects"),a.forEach(r),z=H(i),p=m(i,"A",{href:!0,role:!0,class:!0});var T=E(p);A=C(T,"Contacts"),T.forEach(r),i.forEach(r),_.forEach(r),y.forEach(r),this.h()},h(){t(l,"class","svelte-101yysr"),t(b,"href","#projects"),t(b,"role","button"),t(b,"class","svelte-101yysr"),t(p,"href","#cta"),t(p,"role","button"),t(p,"class","svelte-101yysr"),t(v,"role","group"),t(v,"class","svelte-101yysr"),t(n,"class","svelte-101yysr"),t(e,"id","home"),t(e,"class","wrapper-home svelte-101yysr")},m(M,y){S(M,e,y),c(e,n),c(n,l),l.innerHTML=u[0],c(n,s),c(n,o),c(o,d),c(n,f),c(n,v),c(v,b),c(b,w),c(v,z),c(v,p),c(p,A)},p:P,i:P,o:P,d(M){M&&r(e)}}}const ee="And I create clean interfaces for the web.";function _e(u){return[`
    Hello! I'm <strong>Santiago</strong>, a
    web developer
  `]}class pe extends D{constructor(e){super(),V(this,e,_e,de,q,{})}}function ge(u){let e,n,l,s,o,d,f,v,b,w,z,p,A,M,y,_,k,$;return e=new me({}),l=new pe({}),{c(){K(e.$$.fragment),n=j(),K(l.$$.fragment),s=j(),o=h("meta"),d=h("meta"),f=h("meta"),v=h("meta"),b=h("meta"),w=h("meta"),z=h("meta"),p=h("meta"),A=h("meta"),M=h("meta"),y=h("meta"),_=h("meta"),k=h("meta"),this.h()},l(i){X(e.$$.fragment,i),n=H(i),X(l.$$.fragment,i),s=H(i);const a=re("svelte-5nrspv",document.head);o=m(a,"META",{name:!0,content:!0}),d=m(a,"META",{itemprop:!0,content:!0}),f=m(a,"META",{itemprop:!0,content:!0}),v=m(a,"META",{itemprop:!0,content:!0}),b=m(a,"META",{property:!0,content:!0}),w=m(a,"META",{property:!0,content:!0}),z=m(a,"META",{property:!0,content:!0}),p=m(a,"META",{property:!0,content:!0}),A=m(a,"META",{property:!0,content:!0}),M=m(a,"META",{name:!0,content:!0}),y=m(a,"META",{name:!0,content:!0}),_=m(a,"META",{name:!0,content:!0}),k=m(a,"META",{name:!0,content:!0}),a.forEach(r),this.h()},h(){document.title="Santiago Gonzalez - Portfolio",t(o,"name","description"),t(o,"content","Santiago Gonzalez (santigo-zero) is a software engineer who loves to play around with software, creating websites with clean interfaces."),t(d,"itemprop","name"),t(d,"content","Santiago Gonzalez - Portfolio"),t(f,"itemprop","description"),t(f,"content","Santiago Gonzalez (santigo-zero) is a software engineer who loves to play around with software, creating websites with clean interfaces."),t(v,"itemprop","image"),t(v,"content",""),t(b,"property","og:url"),t(b,"content","https://santigo-zero.github.io"),t(w,"property","og:type"),t(w,"content","website"),t(z,"property","og:title"),t(z,"content","Santiago Gonzalez - Portfolio"),t(p,"property","og:description"),t(p,"content","Santiago Gonzalez (santigo-zero) is a software engineer who loves to play around with software, creating websites with clean interfaces."),t(A,"property","og:image"),t(A,"content",""),t(M,"name","twitter:card"),t(M,"content","summary_large_image"),t(y,"name","twitter:title"),t(y,"content","Santiago Gonzalez - Portfolio"),t(_,"name","twitter:description"),t(_,"content","Santiago Gonzalez (santigo-zero) is a software engineer who loves to play around with software, creating websites with clean interfaces."),t(k,"name","twitter:image"),t(k,"content","")},m(i,a){Y(e,i,a),S(i,n,a),Y(l,i,a),S(i,s,a),c(document.head,o),c(document.head,d),c(document.head,f),c(document.head,v),c(document.head,b),c(document.head,w),c(document.head,z),c(document.head,p),c(document.head,A),c(document.head,M),c(document.head,y),c(document.head,_),c(document.head,k),$=!0},p:P,i(i){$||(F(e.$$.fragment,i),F(l.$$.fragment,i),$=!0)},o(i){J(e.$$.fragment,i),J(l.$$.fragment,i),$=!1},d(i){Q(e,i),i&&r(n),Q(l,i),i&&r(s),r(o),r(d),r(f),r(v),r(b),r(w),r(z),r(p),r(A),r(M),r(y),r(_),r(k)}}}class we extends D{constructor(e){super(),V(this,e,null,ge,q,{})}}export{we as default};
