var Vt=Object.defineProperty;var qt=(p,t,n)=>t in p?Vt(p,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):p[t]=n;var it=(p,t,n)=>(qt(p,typeof t!="symbol"?t+"":t,n),n);import{S as W,i as B,s as G,k as d,r as b,l as f,m as _,u as w,h as l,b as h,F as i,n as H,a as S,c as M,Q as Kt,W as Wt,p as r,N as Bt,w as Gt,d as nt,f as Yt,g as et,v as wt,R as Qt,T as Ut,U as Xt,L as Zt,o as Jt,z as _t,A as ht,B as gt,C as vt,X as D,Y as yt,Z as st,_ as at,$ as tn}from"./index.93f4b5e8.js";import{T as zt}from"./config.b1cd1a42.js";import{s as nn,r as en,w as Ft}from"./singletons.062a8cf3.js";import{H as sn}from"./Hollow.f0e51e5e.js";const Nt=()=>{const p=nn;return{page:{subscribe:p.page.subscribe},navigating:{subscribe:p.navigating.subscribe},updated:p.updated}},an={subscribe(p){return Nt().page.subscribe(p)}},le={subscribe(p){return Nt().navigating.subscribe(p)}};class Ct{constructor(t,n,s,a,e,o){it(this,"title");it(this,"description");it(this,"date");it(this,"href");it(this,"extension");it(this,"metadata");this.href=t,this.title=n,this.description=s,this.date=a,this.extension=e,this.metadata=o}}const on=(p,t)=>{const n=p.getTime()-t.getTime(),s=new Intl.RelativeTimeFormat("en",{style:"long"});let a,e;return n<1e3?"just now":(n<6e4?(a=Math.floor(n/1e3),e="second"):n<36e5?(a=Math.floor(n/6e4),e="minute"):n<864e5?(a=Math.floor(n/36e5),e="hour"):(a=Math.floor(n/864e5),e="day"),s.format(-a,e))},pn=p=>{const t=new Date(p);return new Intl.DateTimeFormat("en",{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(t)};let bt=0;function ln(){if(bt||typeof document>"u"||!document.documentElement)return bt;const p=document.documentElement;return bt=parseFloat(getComputedStyle(p).fontSize),bt}function ce(p){const t=p.replace(/[^0-9]/g,""),n=parseInt(t,10);return parseInt(`${n*ln()}`)}function cn(p){let t,n;return{c(){t=d("h1"),n=b("Test number 1")},l(s){t=f(s,"H1",{});var a=_(t);n=w(a,"Test number 1"),a.forEach(l)},m(s,a){h(s,t,a),i(t,n)},p:H,i:H,o:H,d(s){s&&l(t)}}}let un="This is a 1 post",rn="This is description 1";class dn extends W{constructor(t){super(),B(this,t,null,cn,G,{})}}const fn=Object.freeze(Object.defineProperty({__proto__:null,default:dn,description:rn,title:un},Symbol.toStringTag,{value:"Module"}));function kn(p){let t,n;return{c(){t=d("h1"),n=b("Test number 2")},l(s){t=f(s,"H1",{});var a=_(t);n=w(a,"Test number 2"),a.forEach(l)},m(s,a){h(s,t,a),i(t,n)},p:H,i:H,o:H,d(s){s&&l(t)}}}let mn="This is a 2 post",_n="This is description 2";class hn extends W{constructor(t){super(),B(this,t,null,kn,G,{})}}const gn=Object.freeze(Object.defineProperty({__proto__:null,default:hn,description:_n,title:mn},Symbol.toStringTag,{value:"Module"}));function vn(p){let t,n,s,a,e,o;return{c(){t=d("article"),n=d("h1"),s=b($t),a=S(),e=d("p"),o=b("333333333333333")},l(c){t=f(c,"ARTICLE",{});var k=_(t);n=f(k,"H1",{});var $=_(n);s=w($,$t),$.forEach(l),a=M(k),e=f(k,"P",{});var T=_(e);o=w(T,"333333333333333"),T.forEach(l),k.forEach(l)},m(c,k){h(c,t,k),i(t,n),i(n,s),i(t,a),i(t,e),i(e,o)},p:H,i:H,o:H,d(c){c&&l(t)}}}let $t="This is a 3 post",bn="This is the description number 3 three(3) antoehun toehuntaoeuhan toehuntaoeuhan toehuntaoeuhan antoehun antoehun toehuntaoeuhan oehtuoheuna htoeutheo",wn="2023-01-21 19:23";class yn extends W{constructor(t){super(),B(this,t,null,vn,G,{})}}const Tn=Object.freeze(Object.defineProperty({__proto__:null,date:wn,default:yn,description:bn,title:$t},Symbol.toStringTag,{value:"Module"}));function En(p){let t,n;return{c(){t=d("h1"),n=b(p[0])},l(s){t=f(s,"H1",{});var a=_(t);n=w(a,p[0]),a.forEach(l)},m(s,a){h(s,t,a),i(t,n)},p(s,a){a&1&&wt(n,s[0])},i:H,o:H,d(s){s&&l(t)}}}function $n(p){let t,n,s,a,e;return n=new sn({props:{color:"var(--clr-title)",$$slots:{default:[Sn]},$$scope:{ctx:p}}}),{c(){t=d("h1"),_t(n.$$.fragment),s=S(),a=b(p[6])},l(o){t=f(o,"H1",{});var c=_(t);ht(n.$$.fragment,c),s=M(c),a=w(c,p[6]),c.forEach(l)},m(o,c){h(o,t,c),gt(n,t,null),i(t,s),i(t,a),e=!0},p(o,c){const k={};c&2080&&(k.$$scope={dirty:c,ctx:o}),n.$set(k),(!e||c&64)&&wt(a,o[6])},i(o){e||(et(n.$$.fragment,o),e=!0)},o(o){nt(n.$$.fragment,o),e=!1},d(o){o&&l(t),vt(n)}}}function Sn(p){let t;return{c(){t=b(p[5])},l(n){t=w(n,p[5])},m(n,s){h(n,t,s)},p(n,s){s&32&&wt(t,n[5])},d(n){n&&l(t)}}}function Rt(p){let t,n,s,a,e,o;return{c(){t=d("div"),n=d("small"),s=b("🏗 Construction site, keep out 🏗️"),a=S(),e=d("small"),o=b("🚧 Authorized personnel only 🚧"),this.h()},l(c){t=f(c,"DIV",{class:!0});var k=_(t);n=f(k,"SMALL",{class:!0});var $=_(n);s=w($,"🏗 Construction site, keep out 🏗️"),$.forEach(l),a=M(k),e=f(k,"SMALL",{class:!0});var T=_(e);o=w(T,"🚧 Authorized personnel only 🚧"),T.forEach(l),k.forEach(l),this.h()},h(){r(n,"class","svelte-4xdosg"),r(e,"class","svelte-4xdosg"),r(t,"class","wip svelte-4xdosg")},m(c,k){h(c,t,k),i(t,n),i(n,s),i(t,a),i(t,e),i(e,o)},d(c){c&&l(t)}}}function Mn(p){let t,n,s,a,e,o,c,k,$,T,j,E,P,Y,R,g,z,Q,C,mt,U,A,ut,u,v,F,N,V,q,ot,X,K,pt,rt,dt,lt,ct,ft,L;const xt=[$n,En],Z=[];function At(m,y){return m[4]?0:1}a=At(p),e=Z[a]=xt[a](p);let x=!p[3]&&Rt();const Et=p[10].default,O=Kt(Et,p,p[11],null);return document.title=u=""+(p[0]+zt),{c(){t=d("main"),n=d("header"),s=d("div"),e.c(),o=S(),c=d("p"),k=b(p[2]),$=S(),x&&x.c(),T=S(),j=d("small"),E=d("time"),P=d("iconify-icon"),Y=b(": "),R=b(p[8]),g=S(),z=d("div"),Q=b("•"),C=S(),mt=b(p[9]),U=S(),A=d("article"),O&&O.c(),ut=S(),v=d("meta"),F=d("meta"),N=d("meta"),V=d("meta"),q=d("meta"),X=d("meta"),K=d("meta"),pt=d("meta"),rt=d("meta"),dt=d("meta"),lt=d("meta"),ct=d("meta"),ft=d("meta"),this.h()},l(m){t=f(m,"MAIN",{});var y=_(t);n=f(y,"HEADER",{id:!0,class:!0});var kt=_(n);s=f(kt,"DIV",{"aria-labelledby":!0,class:!0});var J=_(s);e.l(J),o=M(J),c=f(J,"P",{class:!0});var It=_(c);k=w(It,p[2]),It.forEach(l),$=M(J),x&&x.l(J),T=M(J),j=f(J,"SMALL",{class:!0});var Ot=_(j);E=f(Ot,"TIME",{datetime:!0,class:!0});var tt=_(E);P=f(tt,"ICONIFY-ICON",{icon:!0}),_(P).forEach(l),Y=w(tt,": "),R=w(tt,p[8]),g=M(tt),z=f(tt,"DIV",{"aria-orientation":!0,role:!0});var jt=_(z);Q=w(jt,"•"),jt.forEach(l),C=M(tt),mt=w(tt,p[9]),tt.forEach(l),Ot.forEach(l),J.forEach(l),kt.forEach(l),U=M(y),A=f(y,"ARTICLE",{class:!0});var Dt=_(A);O&&O.l(Dt),Dt.forEach(l),y.forEach(l),ut=M(m);const I=Wt("svelte-1nv67zy",document.head);v=f(I,"META",{name:!0,content:!0}),F=f(I,"META",{itemprop:!0,content:!0}),N=f(I,"META",{itemprop:!0,content:!0}),V=f(I,"META",{itemprop:!0,content:!0}),q=f(I,"META",{property:!0,content:!0}),X=f(I,"META",{property:!0,content:!0}),K=f(I,"META",{property:!0,content:!0}),pt=f(I,"META",{property:!0,content:!0}),rt=f(I,"META",{property:!0,content:!0}),dt=f(I,"META",{name:!0,content:!0}),lt=f(I,"META",{name:!0,content:!0}),ct=f(I,"META",{name:!0,content:!0}),ft=f(I,"META",{name:!0,content:!0}),I.forEach(l),this.h()},h(){r(c,"class","svelte-4xdosg"),Bt(P,"icon","lucide:calendar"),r(z,"aria-orientation","vertical"),r(z,"role","separator"),r(E,"datetime",p[1]),r(E,"class","svelte-4xdosg"),r(j,"class","svelte-4xdosg"),r(s,"aria-labelledby","page-header-info"),r(s,"class","wrapper-header wide svelte-4xdosg"),r(n,"id","page-header-info"),r(n,"class","banner"),r(A,"class","wide svelte-4xdosg"),r(v,"name","description"),r(v,"content",p[2]),r(F,"itemprop","name"),r(F,"content",p[0]),r(N,"itemprop","description"),r(N,"content",p[2]),r(V,"itemprop","image"),r(V,"content",""),r(q,"property","og:url"),r(q,"content",ot=p[7].url.toString()),r(X,"property","og:type"),r(X,"content","website"),r(K,"property","og:title"),r(K,"content",p[0]),r(pt,"property","og:description"),r(pt,"content",p[2]),r(rt,"property","og:image"),r(rt,"content",""),r(dt,"name","twitter:card"),r(dt,"content","summary_large_image"),r(lt,"name","twitter:title"),r(lt,"content",p[0]),r(ct,"name","twitter:description"),r(ct,"content",p[2]),r(ft,"name","twitter:image"),r(ft,"content","")},m(m,y){h(m,t,y),i(t,n),i(n,s),Z[a].m(s,null),i(s,o),i(s,c),i(c,k),i(s,$),x&&x.m(s,null),i(s,T),i(s,j),i(j,E),i(E,P),i(E,Y),i(E,R),i(E,g),i(E,z),i(z,Q),i(E,C),i(E,mt),i(t,U),i(t,A),O&&O.m(A,null),h(m,ut,y),i(document.head,v),i(document.head,F),i(document.head,N),i(document.head,V),i(document.head,q),i(document.head,X),i(document.head,K),i(document.head,pt),i(document.head,rt),i(document.head,dt),i(document.head,lt),i(document.head,ct),i(document.head,ft),L=!0},p(m,[y]){let kt=a;a=At(m),a===kt?Z[a].p(m,y):(Gt(),nt(Z[kt],1,1,()=>{Z[kt]=null}),Yt(),e=Z[a],e?e.p(m,y):(e=Z[a]=xt[a](m),e.c()),et(e,1),e.m(s,o)),(!L||y&4)&&wt(k,m[2]),m[3]?x&&(x.d(1),x=null):x||(x=Rt(),x.c(),x.m(s,T)),(!L||y&2)&&r(E,"datetime",m[1]),O&&O.p&&(!L||y&2048)&&Qt(O,Et,m,m[11],L?Xt(Et,m[11],y,null):Ut(m[11]),null),(!L||y&1)&&u!==(u=""+(m[0]+zt))&&(document.title=u),(!L||y&4)&&r(v,"content",m[2]),(!L||y&1)&&r(F,"content",m[0]),(!L||y&4)&&r(N,"content",m[2]),(!L||y&128&&ot!==(ot=m[7].url.toString()))&&r(q,"content",ot),(!L||y&1)&&r(K,"content",m[0]),(!L||y&4)&&r(pt,"content",m[2]),(!L||y&1)&&r(lt,"content",m[0]),(!L||y&4)&&r(ct,"content",m[2])},i(m){L||(et(e),et(O,m),L=!0)},o(m){nt(e),nt(O,m),L=!1},d(m){m&&l(t),Z[a].d(),x&&x.d(),O&&O.d(m),m&&l(ut),l(v),l(F),l(N),l(V),l(q),l(X),l(K),l(pt),l(rt),l(dt),l(lt),l(ct),l(ft)}}}function Hn(p,t,n){let s;Zt(p,an,g=>n(7,s=g));let{$$slots:a={},$$scope:e}=t,{title:o=""}=t,{date:c=""}=t,{description:k=""}=t,{finished:$=!1}=t;const T=on(new Date,new Date(c)),j=pn(c);let E=!1,P="",Y="";const R=["How ","How to ","How to: "];return Jt(()=>{o&&R.some(g=>{o.startsWith(g)&&(n(5,P=g),n(6,Y=o.replace(g,"")),n(4,E=!0))})}),p.$$set=g=>{"title"in g&&n(0,o=g.title),"date"in g&&n(1,c=g.date),"description"in g&&n(2,k=g.description),"finished"in g&&n(3,$=g.finished),"$$scope"in g&&n(11,e=g.$$scope)},[o,c,k,$,E,P,Y,s,T,j,a,e]}class Tt extends W{constructor(t){super(),B(this,t,Hn,Mn,G,{title:0,date:1,description:2,finished:3})}}function Ln(p){let t,n,s,a,e;return{c(){t=d("h1"),n=b("TEST TEST H1"),s=S(),a=d("p"),e=b(`4444444 paragraph
Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`)},l(o){t=f(o,"H1",{});var c=_(t);n=w(c,"TEST TEST H1"),c.forEach(l),s=M(o),a=f(o,"P",{});var k=_(a);e=w(k,`4444444 paragraph
Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`),k.forEach(l)},m(o,c){h(o,t,c),i(t,n),h(o,s,c),h(o,a,c),i(a,e)},p:H,d(o){o&&l(t),o&&l(s),o&&l(a)}}}function Pn(p){let t,n;const s=[p[0],St];let a={$$slots:{default:[Ln]},$$scope:{ctx:p}};for(let e=0;e<s.length;e+=1)a=D(a,s[e]);return t=new Tt({props:a}),{c(){_t(t.$$.fragment)},l(e){ht(t.$$.fragment,e)},m(e,o){gt(t,e,o),n=!0},p(e,[o]){const c=o&1?yt(s,[o&1&&st(e[0]),o&0&&st(St)]):{};o&2&&(c.$$scope={dirty:o,ctx:e}),t.$set(c)},i(e){n||(et(t.$$.fragment,e),n=!0)},o(e){nt(t.$$.fragment,e),n=!1},d(e){vt(t,e)}}}const St={title:"This is a 4 post",description:"This is the description number 4 four(4) antoehun toehuntaoeuhan toehuntaoeuhan toehuntaoeuhan antoehun antoehun toehuntaoeuhan oehtuoheuna htoeutheo",date:"2023-01-23"};function xn(p,t,n){return p.$$set=s=>{n(0,t=D(D({},t),at(s)))},t=at(t),[t]}class An extends W{constructor(t){super(),B(this,t,xn,Pn,G,{})}}const In=Object.freeze(Object.defineProperty({__proto__:null,default:An,metadata:St},Symbol.toStringTag,{value:"Module"}));function On(p){let t,n,s,a,e,o;return{c(){t=d("article"),n=d("h1"),s=b(Mt),a=S(),e=d("p"),o=b("This should be the start, explaining how I built this site")},l(c){t=f(c,"ARTICLE",{});var k=_(t);n=f(k,"H1",{});var $=_(n);s=w($,Mt),$.forEach(l),a=M(k),e=f(k,"P",{});var T=_(e);o=w(T,"This should be the start, explaining how I built this site"),T.forEach(l),k.forEach(l)},m(c,k){h(c,t,k),i(t,n),i(n,s),i(t,a),i(t,e),i(e,o)},p:H,i:H,o:H,d(c){c&&l(t)}}}let Mt="This is a hello world post",jn="This is the description hello world",Dn="2023-01-14";class zn extends W{constructor(t){super(),B(this,t,null,On,G,{})}}const Cn=Object.freeze(Object.defineProperty({__proto__:null,date:Dn,default:zn,description:jn,title:Mt},Symbol.toStringTag,{value:"Module"}));function Rn(p){let t,n,s,a,e,o,c,k,$,T,j,E,P,Y='<code class="language-bash"><span class="token function">yarn</span> create svelte <span class="token builtin class-name">.</span></code>',R,g,z,Q,C,mt=`<code class="language-typescript"><span class="token keyword">let</span> hello<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'world'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">printHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,U,A,ut=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> IconSearch <span class="token keyword">from</span> <span class="token string">'$lib/Icons/IconSearch.svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> FilteredPosts <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/components/Search/store'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> base <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> goto <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/navigation'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> inPixels<span class="token punctuation">,</span> readableDate <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/utils/utils'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> searchHandler <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$lib/components/Search/utils'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Separator <span class="token keyword">from</span> <span class="token string">'./Separator.svelte'</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> <span class="token literal-property property">modal</span><span class="token operator">:</span> HTMLDialogElement<span class="token punctuation">,</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> HTMLInputElement<span class="token punctuation">,</span>
    value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">,</span>
    onDesktop <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    outerWidth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    complex <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    touchSupport <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">toggleModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    modal<span class="token punctuation">.</span>open
      <span class="token operator">?</span> <span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token punctuation">(</span>modal<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">onCtrlK</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> KeyboardEvent</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> <span class="token punctuation">&#123;</span> key<span class="token punctuation">,</span> ctrlKey<span class="token punctuation">,</span> repeat <span class="token punctuation">&#125;</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>repeat<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">case</span> <span class="token string">'k'</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ctrlKey<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">toggleModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">toggleModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">goto</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>base<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/blog</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>$FilteredPosts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>href<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>touchSupport <span class="token operator">=</span> <span class="token string">'ontouchstart'</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    modal<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token operator">===</span> modal<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> onDesktop <span class="token operator">=</span> outerWidth <span class="token operator">></span> <span class="token function">inPixels</span><span class="token punctuation">(</span><span class="token string">'48rem'</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token literal-property property">$</span><span class="token operator">:</span> complex <span class="token operator">=</span> onDesktop <span class="token operator">||</span> <span class="token operator">!</span>touchSupport<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`;return{c(){t=d("h1"),n=b("Let’s get started"),s=S(),a=d("h2"),e=b("Here I’ll explain how I built this blog using Sveltekit"),o=S(),c=d("h3"),k=b("Test"),$=S(),T=d("p"),j=b("Let’s get started"),E=S(),P=d("pre"),R=S(),g=d("h3"),z=b("More tests"),Q=S(),C=d("pre"),U=S(),A=d("pre"),this.h()},l(u){t=f(u,"H1",{});var v=_(t);n=w(v,"Let’s get started"),v.forEach(l),s=M(u),a=f(u,"H2",{});var F=_(a);e=w(F,"Here I’ll explain how I built this blog using Sveltekit"),F.forEach(l),o=M(u),c=f(u,"H3",{});var N=_(c);k=w(N,"Test"),N.forEach(l),$=M(u),T=f(u,"P",{});var V=_(T);j=w(V,"Let’s get started"),V.forEach(l),E=M(u),P=f(u,"PRE",{class:!0});var q=_(P);q.forEach(l),R=M(u),g=f(u,"H3",{});var ot=_(g);z=w(ot,"More tests"),ot.forEach(l),Q=M(u),C=f(u,"PRE",{class:!0});var X=_(C);X.forEach(l),U=M(u),A=f(u,"PRE",{class:!0});var K=_(A);K.forEach(l),this.h()},h(){r(P,"class","language-bash"),r(C,"class","language-typescript"),r(A,"class","language-svelte")},m(u,v){h(u,t,v),i(t,n),h(u,s,v),h(u,a,v),i(a,e),h(u,o,v),h(u,c,v),i(c,k),h(u,$,v),h(u,T,v),i(T,j),h(u,E,v),h(u,P,v),P.innerHTML=Y,h(u,R,v),h(u,g,v),i(g,z),h(u,Q,v),h(u,C,v),C.innerHTML=mt,h(u,U,v),h(u,A,v),A.innerHTML=ut},p:H,d(u){u&&l(t),u&&l(s),u&&l(a),u&&l(o),u&&l(c),u&&l($),u&&l(T),u&&l(E),u&&l(P),u&&l(R),u&&l(g),u&&l(Q),u&&l(C),u&&l(U),u&&l(A)}}}function Fn(p){let t,n;const s=[p[0],Ht];let a={$$slots:{default:[Rn]},$$scope:{ctx:p}};for(let e=0;e<s.length;e+=1)a=D(a,s[e]);return t=new Tt({props:a}),{c(){_t(t.$$.fragment)},l(e){ht(t.$$.fragment,e)},m(e,o){gt(t,e,o),n=!0},p(e,[o]){const c=o&1?yt(s,[o&1&&st(e[0]),o&0&&st(Ht)]):{};o&2&&(c.$$scope={dirty:o,ctx:e}),t.$set(c)},i(e){n||(et(t.$$.fragment,e),n=!0)},o(e){nt(t.$$.fragment,e),n=!1},d(e){vt(t,e)}}}const Ht={title:"How this blog was built",date:"2023-01-27 20:59",description:"How to build your own static blog written in sveltekit and deploy it to GitHub Pages.",finished:!1};function Nn(p,t,n){return p.$$set=s=>{n(0,t=D(D({},t),at(s)))},t=at(t),[t]}class Vn extends W{constructor(t){super(),B(this,t,Nn,Fn,G,{})}}const qn=Object.freeze(Object.defineProperty({__proto__:null,default:Vn,metadata:Ht},Symbol.toStringTag,{value:"Module"}));function Kn(p){let t,n;return{c(){t=d("h2"),n=b("title")},l(s){t=f(s,"H2",{});var a=_(t);n=w(a,"title"),a.forEach(l)},m(s,a){h(s,t,a),i(t,n)},p:H,d(s){s&&l(t)}}}function Wn(p){let t,n;const s=[p[0],Lt];let a={$$slots:{default:[Kn]},$$scope:{ctx:p}};for(let e=0;e<s.length;e+=1)a=D(a,s[e]);return t=new Tt({props:a}),{c(){_t(t.$$.fragment)},l(e){ht(t.$$.fragment,e)},m(e,o){gt(t,e,o),n=!0},p(e,[o]){const c=o&1?yt(s,[o&1&&st(e[0]),o&0&&st(Lt)]):{};o&2&&(c.$$scope={dirty:o,ctx:e}),t.$set(c)},i(e){n||(et(t.$$.fragment,e),n=!0)},o(e){nt(t.$$.fragment,e),n=!1},d(e){vt(t,e)}}}const Lt={date:"2023-02-11 18:34",title:"New Test title"};function Bn(p,t,n){return p.$$set=s=>{n(0,t=D(D({},t),at(s)))},t=at(t),[t]}class Gn extends W{constructor(t){super(),B(this,t,Bn,Wn,G,{})}}const Yn=Object.freeze(Object.defineProperty({__proto__:null,default:Gn,metadata:Lt},Symbol.toStringTag,{value:"Module"}));function Qn(p){let t,n,s,a,e;return{c(){t=d("h2"),n=b("Test test title"),s=S(),a=d("p"),e=b("notehuntehu")},l(o){t=f(o,"H2",{});var c=_(t);n=w(c,"Test test title"),c.forEach(l),s=M(o),a=f(o,"P",{});var k=_(a);e=w(k,"notehuntehu"),k.forEach(l)},m(o,c){h(o,t,c),i(t,n),h(o,s,c),h(o,a,c),i(a,e)},p:H,d(o){o&&l(t),o&&l(s),o&&l(a)}}}function Un(p){let t,n;const s=[p[0],Pt];let a={$$slots:{default:[Qn]},$$scope:{ctx:p}};for(let e=0;e<s.length;e+=1)a=D(a,s[e]);return t=new Tt({props:a}),{c(){_t(t.$$.fragment)},l(e){ht(t.$$.fragment,e)},m(e,o){gt(t,e,o),n=!0},p(e,[o]){const c=o&1?yt(s,[o&1&&st(e[0]),o&0&&st(Pt)]):{};o&2&&(c.$$scope={dirty:o,ctx:e}),t.$set(c)},i(e){n||(et(t.$$.fragment,e),n=!0)},o(e){nt(t.$$.fragment,e),n=!1},d(e){vt(t,e)}}}const Pt={date:"2023-02-11 18:34",title:"Test test title",description:"testaoenuhoenuht aontehuotaheunoheu aonetuhonatehuteouh"};function Xn(p,t,n){return p.$$set=s=>{n(0,t=D(D({},t),at(s)))},t=at(t),[t]}class Zn extends W{constructor(t){super(),B(this,t,Xn,Un,G,{})}}const Jn=Object.freeze(Object.defineProperty({__proto__:null,default:Zn,metadata:Pt},Symbol.toStringTag,{value:"Module"})),te=()=>{const p=[],t=Object.assign({"../../posts/1.svelte":fn,"../../posts/2.svelte":gn,"../../posts/3.svelte":Tn,"../../posts/4.md":In,"../../posts/hello-world.svelte":Cn,"../../posts/how-to-build-a-blog-in-sveltekit.md":qn,"../../posts/new_test.md":Yn,"../../posts/test-test.md":Jn});function n(s){const a="^.*.md$";return s.search(a)>=0&&"md"||"svelte"}for(const s in t){const a=t[s],e=n(s),o=s.replace("../../posts","").replace(".svelte","").replace(".md","");if(a.metadata===void 0)p.unshift(new Ct(o,a.title,a.description,a.date,e));else{const c=a.metadata;p.unshift(new Ct(o,c.title,c.description,c.date,e))}}return p},ne=en(te()),ie=Ft(tn(ne)),ue=Ft("");export{ie as F,ne as P,fn as _,ue as a,gn as b,Tn as c,In as d,Cn as e,qn as f,Yn as g,Jn as h,ce as i,le as n,an as p,pn as r};