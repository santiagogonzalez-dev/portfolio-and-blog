import{S as fe,i as ue,s as he,C as ze,k as d,q as T,a as z,l as _,m as v,r as A,h as r,c as L,n as i,D as q,b as O,E as l,F as ie,B as K,G as Le,H as Se,o as ye,I as Te,u as Ae,J as De,w as pe,x as be,y as Ee,K as Ge,L as Me,M as He,f as oe,t as ne,z as ke}from"../../chunks/index-5a5c71c7.js";const{setTimeout:$e,window:ce}=Te;function we(c,e,s){const a=c.slice();return a[11]=e[s],a}function Ie(c){let e,s,a=c[11].label+"",o,n,m,b;return{c(){e=d("li"),s=d("a"),o=T(a),n=z(),this.h()},l(h){e=_(h,"LI",{});var t=v(e);s=_(t,"A",{href:!0,class:!0});var u=v(s);o=A(u,a),u.forEach(r),n=L(t),t.forEach(r),this.h()},h(){i(s,"href",c[11].href),i(s,"class","svelte-26ka4k")},m(h,t){O(h,e,t),l(e,s),l(s,o),l(e,n),m||(b=ie(s,"click",c[4]),m=!0)},p:K,d(h){h&&r(e),m=!1,b()}}}function Ce(c){let e;return{c(){e=d("i"),this.h()},l(s){e=_(s,"I",{class:!0}),v(e).forEach(r),this.h()},h(){i(e,"class","fa-solid fa-bars")},m(s,a){O(s,e,a)},d(s){s&&r(e)}}}function Ne(c){let e;return{c(){e=d("i"),this.h()},l(s){e=_(s,"I",{class:!0}),v(e).forEach(r),this.h()},h(){i(e,"class","fa-solid fa-xmark")},m(s,a){O(s,e,a)},d(s){s&&r(e)}}}function Ve(c){let e=!1,s=()=>{e=!1},a,o,n,m,b,h,t,u,D,k,G,E;ze(c[6]);let I=c[3],p=[];for(let f=0;f<I.length;f+=1)p[f]=Ie(we(c,I,f));function M(f,$){return f[1]?Ne:Ce}let C=M(c),y=C(c);return{c(){o=d("div"),n=d("nav"),m=d("h3"),b=d("a"),h=T("SZ"),t=z(),u=d("ul");for(let f=0;f<p.length;f+=1)p[f].c();D=z(),k=d("button"),y.c(),this.h()},l(f){o=_(f,"DIV",{class:!0});var $=v(o);n=_($,"NAV",{class:!0});var g=v(n);m=_(g,"H3",{class:!0});var w=v(m);b=_(w,"A",{href:!0,class:!0});var H=v(b);h=A(H,"SZ"),H.forEach(r),w.forEach(r),t=L(g),u=_(g,"UL",{class:!0});var S=v(u);for(let P=0;P<p.length;P+=1)p[P].l(S);S.forEach(r),D=L(g),k=_(g,"BUTTON",{"aria-hidden":!0,class:!0});var N=v(k);y.l(N),N.forEach(r),g.forEach(r),$.forEach(r),this.h()},h(){i(b,"href","/"),i(b,"class","svelte-26ka4k"),i(m,"class","svelte-26ka4k"),i(u,"class","svelte-26ka4k"),q(u,"ulMobile",c[1]),i(k,"aria-hidden","true"),i(k,"class","svelte-26ka4k"),i(n,"class","svelte-26ka4k"),i(o,"class","wrapper-nav svelte-26ka4k"),q(o,"scrolled",c[0]>0),q(o,"hidden",c[2])},m(f,$){O(f,o,$),l(o,n),l(n,m),l(m,b),l(b,h),l(n,t),l(n,u);for(let g=0;g<p.length;g+=1)p[g].m(u,null);l(n,D),l(n,k),y.m(k,null),G||(E=[ie(ce,"scroll",()=>{e=!0,clearTimeout(a),a=$e(s,100),c[6]()}),ie(k,"click",c[5])],G=!0)},p(f,[$]){if($&1&&!e&&(e=!0,clearTimeout(a),scrollTo(ce.pageXOffset,f[0]),a=$e(s,100)),$&24){I=f[3];let g;for(g=0;g<I.length;g+=1){const w=we(f,I,g);p[g]?p[g].p(w,$):(p[g]=Ie(w),p[g].c(),p[g].m(u,null))}for(;g<p.length;g+=1)p[g].d(1);p.length=I.length}$&2&&q(u,"ulMobile",f[1]),C!==(C=M(f))&&(y.d(1),y=C(f),y&&(y.c(),y.m(k,null))),$&1&&q(o,"scrolled",f[0]>0),$&4&&q(o,"hidden",f[2])},i:K,o:K,d(f){f&&r(o),Le(p,f),y.d(),G=!1,Se(E)}}}function Oe(c,e,s){var a,o,n,m;const b=[{label:"Home",href:"/"},{label:"Projects",href:"#projects"},{label:"About",href:"#about"},{label:"Contact",href:"#cta"},{label:"Resume",href:"#"}];function h(){s(1,n=!1)}const t=E=>{typeof E!="number"&&(E=3e3),setTimeout(()=>{!n&&!m&&a>0&&s(2,m=!0)},E)};function u(E){return h(),E>0&&E>=o?(o=E,!0):(o=E,t(),!1)}const D=E=>{t(0),E.matches||h()},k=()=>s(1,n=!n);ye(()=>{window.matchMedia("(max-width: 767px)").addListener(D)});function G(){s(0,a=ce.pageYOffset)}return c.$$.update=()=>{c.$$.dirty&1&&s(2,m=u(a))},[a,n,m,b,D,k,G]}class Pe extends fe{constructor(e){super(),ue(this,e,Oe,Ve,he,{})}}function Re(c){let e,s,a,o,n,m,b,h,t,u,D,k,G,E,I,p,M,C,y,f,$,g,w,H,S,N,P,ee,B,te,se,j,V,Z,le;return{c(){e=d("div"),s=d("div"),a=d("section"),o=d("p"),n=T("Designed & Built with "),m=d("i"),b=T(" by Santiago"),h=z(),t=d("a"),u=d("i"),D=z(),k=T(c[0]),G=T(" on GitHub"),E=z(),I=d("section"),p=d("div"),M=d("p"),C=T("\xA9 GPL-3.0 Santiago Gonzalez"),y=z(),f=d("p"),$=T("2022-2023. All Rights Reserved"),g=z(),w=d("ul"),H=d("li"),S=d("a"),N=d("i"),P=T(`
						GitHub @santigo-zero`),ee=z(),B=d("li"),te=T("\u2022"),se=z(),j=d("li"),V=d("a"),Z=d("i"),le=T(" LinkedIn"),this.h()},l(R){e=_(R,"DIV",{id:!0,class:!0});var F=v(e);s=_(F,"DIV",{class:!0});var W=v(s);a=_(W,"SECTION",{class:!0});var X=v(a);o=_(X,"P",{class:!0});var Y=v(o);n=A(Y,"Designed & Built with "),m=_(Y,"I",{class:!0}),v(m).forEach(r),b=A(Y," by Santiago"),Y.forEach(r),h=L(X),t=_(X,"A",{href:!0,class:!0});var J=v(t);u=_(J,"I",{class:!0}),v(u).forEach(r),D=L(J),k=A(J,c[0]),G=A(J," on GitHub"),J.forEach(r),X.forEach(r),E=L(W),I=_(W,"SECTION",{class:!0});var Q=v(I);p=_(Q,"DIV",{class:!0});var x=v(p);M=_(x,"P",{class:!0});var de=v(M);C=A(de,"\xA9 GPL-3.0 Santiago Gonzalez"),de.forEach(r),y=L(x),f=_(x,"P",{class:!0});var _e=v(f);$=A(_e,"2022-2023. All Rights Reserved"),_e.forEach(r),x.forEach(r),g=L(Q),w=_(Q,"UL",{class:!0});var U=v(w);H=_(U,"LI",{class:!0});var ve=v(H);S=_(ve,"A",{href:!0,class:!0});var ae=v(S);N=_(ae,"I",{class:!0}),v(N).forEach(r),P=A(ae,`
						GitHub @santigo-zero`),ae.forEach(r),ve.forEach(r),ee=L(U),B=_(U,"LI",{class:!0});var me=v(B);te=A(me,"\u2022"),me.forEach(r),se=L(U),j=_(U,"LI",{class:!0});var ge=v(j);V=_(ge,"A",{href:!0,class:!0});var re=v(V);Z=_(re,"I",{class:!0}),v(Z).forEach(r),le=A(re," LinkedIn"),re.forEach(r),ge.forEach(r),U.forEach(r),Q.forEach(r),W.forEach(r),F.forEach(r),this.h()},h(){i(m,"class","fa-regular fa-heart svelte-14cgmdt"),i(o,"class","svelte-14cgmdt"),i(u,"class","fa-regular fa-star svelte-14cgmdt"),i(t,"href","https://github.com/santigo-zero/santigo-zero.github.io"),i(t,"class","svelte-14cgmdt"),i(a,"class","this svelte-14cgmdt"),i(M,"class","svelte-14cgmdt"),i(f,"class","svelte-14cgmdt"),i(p,"class","copyright"),i(N,"class","fa-brands fa-github"),i(S,"href","https://github.com/santigo-zero/"),i(S,"class","svelte-14cgmdt"),i(H,"class","svelte-14cgmdt"),i(B,"class","separator svelte-14cgmdt"),i(Z,"class","fa-brands fa-linkedin"),i(V,"href","https://www.linkedin.com/in/santiago-gonzalez-62557221b/"),i(V,"class","svelte-14cgmdt"),i(j,"class","svelte-14cgmdt"),i(w,"class","svelte-14cgmdt"),i(I,"class","that svelte-14cgmdt"),i(s,"class","container svelte-14cgmdt"),i(e,"id","footer"),i(e,"class","wrapper-footer svelte-14cgmdt")},m(R,F){O(R,e,F),l(e,s),l(s,a),l(a,o),l(o,n),l(o,m),l(o,b),l(a,h),l(a,t),l(t,u),l(t,D),l(t,k),l(t,G),l(s,E),l(s,I),l(I,p),l(p,M),l(M,C),l(p,y),l(p,f),l(f,$),l(I,g),l(I,w),l(w,H),l(H,S),l(S,N),l(S,P),l(w,ee),l(w,B),l(B,te),l(w,se),l(w,j),l(j,V),l(V,Z),l(V,le)},p(R,[F]){F&1&&Ae(k,R[0])},i:K,o:K,d(R){R&&r(e)}}}function Be(c,e,s){var a=0;return ye(async()=>{const n=await(await fetch("https://api.github.com/repos/santigo-zero/santigo-zero.github.io")).json();s(0,a=n.stargazers_count)}),[a]}class je extends fe{constructor(e){super(),ue(this,e,Be,Re,he,{})}}function Fe(c){let e,s,a,o,n,m;e=new Pe({});const b=c[1].default,h=De(b,c,c[0],null);return n=new je({}),{c(){pe(e.$$.fragment),s=z(),a=d("div"),h&&h.c(),o=z(),pe(n.$$.fragment),this.h()},l(t){be(e.$$.fragment,t),s=L(t),a=_(t,"DIV",{class:!0});var u=v(a);h&&h.l(u),u.forEach(r),o=L(t),be(n.$$.fragment,t),this.h()},h(){i(a,"class","wrapper")},m(t,u){Ee(e,t,u),O(t,s,u),O(t,a,u),h&&h.m(a,null),O(t,o,u),Ee(n,t,u),m=!0},p(t,[u]){h&&h.p&&(!m||u&1)&&Ge(h,b,t,t[0],m?He(b,t[0],u,null):Me(t[0]),null)},i(t){m||(oe(e.$$.fragment,t),oe(h,t),oe(n.$$.fragment,t),m=!0)},o(t){ne(e.$$.fragment,t),ne(h,t),ne(n.$$.fragment,t),m=!1},d(t){ke(e,t),t&&r(s),t&&r(a),h&&h.d(t),t&&r(o),ke(n,t)}}}function Ue(c,e,s){let{$$slots:a={},$$scope:o}=e;return c.$$set=n=>{"$$scope"in n&&s(0,o=n.$$scope)},[o,a]}class Ze extends fe{constructor(e){super(),ue(this,e,Ue,Fe,he,{})}}export{Ze as default};
