import {
  S as l,
  i,
  s as c,
  k as h,
  q as m,
  l as d,
  m as u,
  r as p,
  h as o,
  b as _,
  F as f,
  C as n
} from '../../../chunks/index-82b2adb0.js';
function x(r) {
  let t, s;
  return {
    c() {
      (t = h('h1')), (s = m('About'));
    },
    l(e) {
      t = d(e, 'H1', {});
      var a = u(t);
      (s = p(a, 'About')), a.forEach(o);
    },
    m(e, a) {
      _(e, t, a), f(t, s);
    },
    p: n,
    i: n,
    o: n,
    d(e) {
      e && o(t);
    }
  };
}
class g extends l {
  constructor(t) {
    super(), i(this, t, null, x, c, {});
  }
}
export { g as default };
