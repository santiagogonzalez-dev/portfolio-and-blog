import {
  S as i,
  i as l,
  s as c,
  k as h,
  q as m,
  l as p,
  m as d,
  r as _,
  h as n,
  b as f,
  F as u,
  C as r
} from '../../../chunks/index-82b2adb0.js';
function x(o) {
  let e, s;
  return {
    c() {
      (e = h('h1')), (s = m('This are my projects'));
    },
    l(t) {
      e = p(t, 'H1', {});
      var a = d(e);
      (s = _(a, 'This are my projects')), a.forEach(n);
    },
    m(t, a) {
      f(t, e, a), u(e, s);
    },
    p: r,
    i: r,
    o: r,
    d(t) {
      t && n(e);
    }
  };
}
class g extends i {
  constructor(e) {
    super(), l(this, e, null, x, c, {});
  }
}
export { g as default };
