import{Z as G,S as H,i as U,s as V,k as b,a as S,l as g,m as w,h as p,c as I,J as Y,p as u,L as T,E,b as D,F as m,_ as N,G as v,$ as q,n as B,H as A,I as L,r as J,u as M,x as R}from"./index.c3d2379f.mjs";import{P as Z,F as K,a as C}from"./store.43628da8.mjs";import{b as O}from"./paths.f35432d5.mjs";import{h}from"./singletons.58c002b3.mjs";const j=a=>{const e=G(Z).filter(t=>`${t.description} ${t.title}`.toLowerCase().toLowerCase().includes(a.toLowerCase()));return K.set(e),a};h.disable_scroll_handling;const z=h.goto;h.invalidate;h.invalidateAll;const Q=h.preload_data;h.preload_code;h.before_navigate;h.after_navigate;function P(a){let e,t;return{c(){e=b("kbd"),t=J("Ctrl K"),this.h()},l(n){e=g(n,"KBD",{class:!0});var r=w(e);t=M(r,"Ctrl K"),r.forEach(p),this.h()},h(){u(e,"class","svelte-1ka339c")},m(n,r){D(n,e,r),m(e,t)},d(n){n&&p(e)}}}function W(a){let e,t,n,r,l,_,f,d,k,s=!a[2]&&P();return{c(){e=b("form"),t=b("button"),n=b("iconify-icon"),r=S(),l=b("input"),_=S(),s&&s.c(),this.h()},l(i){e=g(i,"FORM",{class:!0});var o=w(e);t=g(o,"BUTTON",{"aria-label":!0,type:!0,class:!0});var y=w(t);n=g(y,"ICONIFY-ICON",{icon:!0}),w(n).forEach(p),y.forEach(p),r=I(o),l=g(o,"INPUT",{placeholder:!0,type:!0,id:!0,list:!0,autocomplete:!0,class:!0}),_=I(o),s&&s.l(o),o.forEach(p),this.h()},h(){Y(n,"icon","lucide:search"),u(t,"aria-label","Go to selected blog"),u(t,"type","submit"),u(t,"class","svelte-1ka339c"),u(l,"placeholder",a[1]),u(l,"type","search"),u(l,"id","search"),u(l,"list","search-terms"),u(l,"autocomplete","off"),u(l,"class","svelte-1ka339c"),u(e,"class",f=T(a[4].trim().length!==0?"wide attn attn-focus":"wide attn attn-gradient-border")+" svelte-1ka339c"),E(e,"form-modal",a[2])},m(i,o){D(i,e,o),m(e,t),m(t,n),m(e,r),m(e,l),N(l,a[3]),a[8](l),m(e,_),s&&s.m(e,null),d||(k=[v(l,"input",a[7]),v(l,"input",a[9]),v(l,"focus",a[10],{once:!0}),v(e,"submit",q(a[5]))],d=!0)},p(i,[o]){o&2&&u(l,"placeholder",i[1]),o&8&&N(l,i[3]),i[2]?s&&(s.d(1),s=null):s||(s=P(),s.c(),s.m(e,null)),o&16&&f!==(f=T(i[4].trim().length!==0?"wide attn attn-focus":"wide attn attn-gradient-border")+" svelte-1ka339c")&&u(e,"class",f),o&20&&E(e,"form-modal",i[2])},i:B,o:B,d(i){i&&p(e),a[8](null),s&&s.d(),d=!1,A(k)}}}const F="Search",X="You haven't searched for any post yet";function x(a,e,t){let n,r;L(a,C,c=>t(4,n=c)),L(a,K,c=>t(6,r=c));let{input:l}=e,{modal:_=!1}=e,{placeholder:f=F}=e,d="";async function k(){if(d.length===0){t(1,f=X),setTimeout(()=>{t(1,f=F)},1e3);return}await z(`${O}/blog${r[0].href}`)}C.subscribe(()=>{t(3,d=n)});function s(){d=this.value,t(3,d)}function i(c){R[c?"unshift":"push"](()=>{l=c,t(0,l)})}const o=()=>C.set(j(d)),y=()=>t(1,f=F);return a.$$set=c=>{"input"in c&&t(0,l=c.input),"modal"in c&&t(2,_=c.modal),"placeholder"in c&&t(1,f=c.placeholder)},a.$$.update=()=>{a.$$.dirty&64&&r.length===1&&Q(`${O}/blog${r[0].href}`)},[l,f,_,d,n,k,r,s,i,o,y]}class le extends H{constructor(e){super(),U(this,e,x,W,V,{input:0,modal:2,placeholder:1})}}export{le as S};
