import {
  S as $,
  i as g,
  s as h,
  w as f,
  x as u,
  e as m,
  y,
  z as _,
  b as w,
  t as p,
  d as x,
  f as l,
  h as v,
  A as d,
  g as S
} from '../../../../chunks/index-82b2adb0.js';
function b(s) {
  let t, a, o;
  var e = s[0];
  function r(n) {
    return {};
  }
  return (
    e && (t = f(e, r())),
    {
      c() {
        t && u(t.$$.fragment), (a = m());
      },
      l(n) {
        t && y(t.$$.fragment, n), (a = m());
      },
      m(n, i) {
        t && _(t, n, i), w(n, a, i), (o = !0);
      },
      p(n, [i]) {
        if (e !== (e = n[0])) {
          if (t) {
            S();
            const c = t;
            p(c.$$.fragment, 1, 0, () => {
              d(c, 1);
            }),
              x();
          }
          e
            ? ((t = f(e, r())),
              u(t.$$.fragment),
              l(t.$$.fragment, 1),
              _(t, a.parentNode, a))
            : (t = null);
        }
      },
      i(n) {
        o || (t && l(t.$$.fragment, n), (o = !0));
      },
      o(n) {
        t && p(t.$$.fragment, n), (o = !1);
      },
      d(n) {
        n && v(a), t && d(t, n);
      }
    }
  );
}
function k(s, t, a) {
  let o,
    { data: e } = t;
  return (
    (s.$$set = r => {
      'data' in r && a(1, (e = r.data));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 2 && a(0, (o = e.content));
    }),
    [o, e]
  );
}
class z extends $ {
  constructor(t) {
    super(), g(this, t, k, b, h, { data: 1 });
  }
}
export { z as default };
