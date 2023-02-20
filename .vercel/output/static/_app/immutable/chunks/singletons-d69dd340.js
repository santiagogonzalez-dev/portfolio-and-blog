import { C as d, s as m } from './index-82b2adb0.js';
const u = [];
function p(e, t = d) {
  let n;
  const s = new Set();
  function o(a) {
    if (m(e, a) && ((e = a), n)) {
      const c = !u.length;
      for (const l of s) l[1](), u.push(l, e);
      if (c) {
        for (let l = 0; l < u.length; l += 2) u[l][0](u[l + 1]);
        u.length = 0;
      }
    }
  }
  function r(a) {
    o(a(e));
  }
  function i(a, c = d) {
    const l = [a, c];
    return (
      s.add(l),
      s.size === 1 && (n = t(o) || d),
      a(e),
      () => {
        s.delete(l), s.size === 0 && (n(), (n = null));
      }
    );
  }
  return { set: o, update: r, subscribe: i };
}
const v = '';
let g = v;
function I(e) {
  g = e;
}
let E = '';
function y(e) {
  E = e;
}
const T = 'sveltekit:snapshot',
  x = 'sveltekit:scroll',
  O = 'sveltekit:index',
  b = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1 };
function U(e) {
  let t = e.baseURI;
  if (!t) {
    const n = e.getElementsByTagName('base');
    t = n.length ? n[0].href : e.URL;
  }
  return t;
}
function L() {
  return { x: pageXOffset, y: pageYOffset };
}
function f(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const h = { ...b, '': b.hover };
function k(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function N(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === 'A' && e.hasAttribute('href')) return e;
    e = k(e);
  }
}
function V(e, t) {
  let n;
  try {
    n = new URL(
      e instanceof SVGAElement ? e.href.baseVal : e.href,
      document.baseURI
    );
  } catch {}
  const s = e instanceof SVGAElement ? e.target.baseVal : e.target,
    o =
      !n ||
      !!s ||
      A(n, t) ||
      (e.getAttribute('rel') || '').split(/\s+/).includes('external') ||
      e.hasAttribute('download');
  return { url: n, external: o, target: s };
}
function P(e) {
  let t = null,
    n = null,
    s = null,
    o = null,
    r = e;
  for (; r && r !== document.documentElement; )
    n === null && (n = f(r, 'preload-code')),
      s === null && (s = f(r, 'preload-data')),
      t === null && (t = f(r, 'noscroll')),
      o === null && (o = f(r, 'reload')),
      (r = k(r));
  return {
    preload_code: h[n ?? 'off'],
    preload_data: h[s ?? 'off'],
    noscroll: t === 'off' ? !1 : t === '' ? !0 : null,
    reload: o === 'off' ? !1 : o === '' ? !0 : null
  };
}
function _(e) {
  const t = p(e);
  let n = !0;
  function s() {
    (n = !0), t.update(i => i);
  }
  function o(i) {
    (n = !1), t.set(i);
  }
  function r(i) {
    let a;
    return t.subscribe(c => {
      (a === void 0 || (n && c !== a)) && i((a = c));
    });
  }
  return { notify: s, set: o, subscribe: r };
}
function w() {
  const { set: e, subscribe: t } = p(!1);
  let n;
  async function s() {
    clearTimeout(n);
    const o = await fetch(`${g}/_app/version.json`, {
      headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
    });
    if (o.ok) {
      const i = (await o.json()).version !== E;
      return i && (e(!0), clearTimeout(n)), i;
    } else throw new Error(`Version check failed: ${o.status}`);
  }
  return { subscribe: t, check: s };
}
function A(e, t) {
  return e.origin !== location.origin || !e.pathname.startsWith(t);
}
let R;
function Y(e) {
  R = e.client;
}
const $ = { url: _({}), page: _({}), navigating: p(null), updated: w() };
export {
  O as I,
  b as P,
  x as S,
  T as a,
  V as b,
  P as c,
  L as d,
  v as e,
  N as f,
  U as g,
  Y as h,
  A as i,
  I as j,
  y as k,
  R as l,
  $ as s,
  p as w
};
