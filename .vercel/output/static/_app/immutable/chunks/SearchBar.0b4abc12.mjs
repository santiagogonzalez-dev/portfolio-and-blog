import{X as Y,S as M,i as U,s as V,k as b,a as S,l as g,m as C,h as p,c as T,P as q,p as i,O as E,L as I,b as L,K as m,Y as K,E as v,Z as A,n as N,F as G,M as O,r as H,u as R,x as X}from"./index.0fa8382b.mjs";import{P as Z,F as D,a as w}from"./store.91cb6150.mjs";import{b as P}from"./paths.d2eff921.mjs";import{h}from"./singletons.5d2b7933.mjs";const j=a=>{const e=Y(Z).filter(t=>`${t.description} ${t.title}`.toLowerCase().toLowerCase().includes(a.toLowerCase()));return D.set(e),a};h.disable_scroll_handling;const z=h.goto;h.invalidate;h.invalidateAll;const J=h.preload_data;h.preload_code;h.before_navigate;h.after_navigate;function B(a){let e,t;return{c(){e=b("kbd"),t=H("Ctrl K"),this.h()},l(r){e=g(r,"KBD",{class:!0});var n=C(e);t=R(n,"Ctrl K"),n.forEach(p),this.h()},h(){i(e,"class","svelte-1ka339c")},m(r,n){L(r,e,n),m(e,t)},d(r){r&&p(e)}}}function Q(a){let e,t,r,n,s,_,f,d,k,l=!a[2]&&B();return{c(){e=b("form"),t=b("button"),r=b("iconify-icon"),n=S(),s=b("input"),_=S(),l&&l.c(),this.h()},l(c){e=g(c,"FORM",{class:!0});var o=C(e);t=g(o,"BUTTON",{"aria-label":!0,type:!0,class:!0});var y=C(t);r=g(y,"ICONIFY-ICON",{icon:!0}),C(r).forEach(p),y.forEach(p),n=T(o),s=g(o,"INPUT",{placeholder:!0,"aria-keyshortcuts":!0,type:!0,id:!0,list:!0,autocomplete:!0,class:!0}),_=T(o),l&&l.l(o),o.forEach(p),this.h()},h(){q(r,"icon","lucide:search"),i(t,"aria-label","Go to selected blog"),i(t,"type","submit"),i(t,"class","svelte-1ka339c"),i(s,"placeholder",a[1]),i(s,"aria-keyshortcuts","Control+K"),i(s,"type","search"),i(s,"id","search"),i(s,"list","search-terms"),i(s,"autocomplete","off"),i(s,"class","svelte-1ka339c"),i(e,"class",f=E(a[4].trim().length!==0?"wide attn attn-focus":"wide attn attn-gradient-border")+" svelte-1ka339c"),I(e,"form-modal",a[2])},m(c,o){L(c,e,o),m(e,t),m(t,r),m(e,n),m(e,s),K(s,a[3]),a[8](s),m(e,_),l&&l.m(e,null),d||(k=[v(s,"input",a[7]),v(s,"input",a[9]),v(s,"focus",a[10],{once:!0}),v(e,"submit",A(a[5]))],d=!0)},p(c,[o]){o&2&&i(s,"placeholder",c[1]),o&8&&K(s,c[3]),c[2]?l&&(l.d(1),l=null):l||(l=B(),l.c(),l.m(e,null)),o&16&&f!==(f=E(c[4].trim().length!==0?"wide attn attn-focus":"wide attn attn-gradient-border")+" svelte-1ka339c")&&i(e,"class",f),o&20&&I(e,"form-modal",c[2])},i:N,o:N,d(c){c&&p(e),a[8](null),l&&l.d(),d=!1,G(k)}}}const F="Search",W="You haven't searched for any post yet";function x(a,e,t){let r,n;O(a,w,u=>t(4,r=u)),O(a,D,u=>t(6,n=u));let{input:s}=e,{modal:_=!1}=e,{placeholder:f=F}=e,d="";async function k(){if(d.length===0){t(1,f=W),setTimeout(()=>{t(1,f=F)},1e3);return}await z(`${P}/blog${n[0].href}`)}w.subscribe(()=>{t(3,d=r)});function l(){d=this.value,t(3,d)}function c(u){X[u?"unshift":"push"](()=>{s=u,t(0,s)})}const o=()=>w.set(j(d)),y=()=>t(1,f=F);return a.$$set=u=>{"input"in u&&t(0,s=u.input),"modal"in u&&t(2,_=u.modal),"placeholder"in u&&t(1,f=u.placeholder)},a.$$.update=()=>{a.$$.dirty&64&&n.length===1&&J(`${P}/blog${n[0].href}`)},[s,f,_,d,r,k,n,l,c,o,y]}class se extends M{constructor(e){super(),U(this,e,x,Q,V,{input:0,modal:2,placeholder:1})}}export{se as S};
