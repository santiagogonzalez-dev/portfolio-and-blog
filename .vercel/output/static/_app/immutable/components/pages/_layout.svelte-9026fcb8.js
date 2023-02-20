import {
  S as te,
  i as le,
  s as Q,
  D as ie,
  k as p,
  a as T,
  q as R,
  l as g,
  m as v,
  h as u,
  c as A,
  r as B,
  n as m,
  p as I,
  E as we,
  b as L,
  F as f,
  G as ee,
  C as j,
  H as Ae,
  I as Ge,
  J as ce,
  e as P,
  K as fe,
  L as ue,
  M as Oe,
  u as Re,
  o as $e,
  g as Be,
  t as M,
  d as De,
  f as W,
  N as He,
  O as Ie,
  P as Se,
  Q as Le,
  R as Ne,
  x as oe,
  y as re,
  z as ne,
  A as ae,
  v as qe
} from '../../chunks/index-82b2adb0.js';
import { e as C } from '../../chunks/singletons-d69dd340.js';
import { n as Ce, p as Te } from '../../chunks/stores-f9938e62.js';
import { f as Pe } from '../../chunks/index-554623a6.js';
function ke(n, e, t) {
  const r = n.slice();
  return (r[13] = e[t]), r;
}
function ye(n) {
  let e, t, r;
  function s(a, _) {
    return a[3] ? Ve : Me;
  }
  let l = s(n),
    o = l(n);
  return {
    c() {
      (e = p('button')), o.c(), this.h();
    },
    l(a) {
      e = g(a, 'BUTTON', { class: !0 });
      var _ = v(e);
      o.l(_), _.forEach(u), this.h();
    },
    h() {
      m(e, 'class', 'svelte-1hhlg8b');
    },
    m(a, _) {
      L(a, e, _), o.m(e, null), t || ((r = ee(e, 'click', n[7])), (t = !0));
    },
    p(a, _) {
      l === (l = s(a)) && o
        ? o.p(a, _)
        : (o.d(1), (o = l(a)), o && (o.c(), o.m(e, null)));
    },
    d(a) {
      a && u(e), o.d(), (t = !1), r();
    }
  };
}
function Ve(n) {
  let e, t;
  return {
    c() {
      (e = new fe(!1)), (t = P()), this.h();
    },
    l(r) {
      (e = ue(r, !1)), (t = P()), this.h();
    },
    h() {
      e.a = t;
    },
    m(r, s) {
      e.m(Je, r, s), L(r, t, s);
    },
    p: j,
    d(r) {
      r && u(t), r && e.d();
    }
  };
}
function Me(n) {
  let e, t;
  return {
    c() {
      (e = new fe(!1)), (t = P()), this.h();
    },
    l(r) {
      (e = ue(r, !1)), (t = P()), this.h();
    },
    h() {
      e.a = t;
    },
    m(r, s) {
      e.m(Ue, r, s), L(r, t, s);
    },
    p: j,
    d(r) {
      r && u(t), r && e.d();
    }
  };
}
function We(n) {
  let e,
    t,
    r = n[13].separator + '',
    s;
  return {
    c() {
      (e = p('li')), (t = new fe(!1)), (s = T()), this.h();
    },
    l(l) {
      e = g(l, 'LI', { class: !0 });
      var o = v(e);
      (t = ue(o, !1)), (s = A(o)), o.forEach(u), this.h();
    },
    h() {
      (t.a = s),
        m(e, 'class', 'svelte-1hhlg8b'),
        I(e, 'display', n[0] ? 'block' : 'none');
    },
    m(l, o) {
      L(l, e, o), t.m(r, e), f(e, s);
    },
    p(l, o) {
      o & 1 && I(e, 'display', l[0] ? 'block' : 'none');
    },
    d(l) {
      l && u(e);
    }
  };
}
function je(n) {
  let e,
    t,
    r = n[13].label + '',
    s,
    l,
    o,
    a,
    _,
    d;
  return {
    c() {
      (e = p('li')),
        (t = p('a')),
        (s = R(r)),
        (o = T()),
        (a = p('hr')),
        this.h();
    },
    l(i) {
      e = g(i, 'LI', { class: !0 });
      var c = v(e);
      t = g(c, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var k = v(t);
      (s = B(k, r)),
        k.forEach(u),
        c.forEach(u),
        (o = A(i)),
        (a = g(i, 'HR', { style: !0 })),
        this.h();
    },
    h() {
      m(
        t,
        'aria-current',
        (l = n[6].url.pathname.startsWith(n[13].href) ? 'page' : void 0)
      ),
        m(t, 'href', n[13].href),
        m(t, 'class', 'svelte-1hhlg8b'),
        m(
          e,
          'class',
          Oe(n[13].decoration ? 'attn-border attn' : 'trn-border') +
            ' svelte-1hhlg8b'
        ),
        I(e, 'display', n[13].label === 'Home' && n[0] ? 'none' : 'block'),
        I(a, 'width', '80%'),
        I(a, 'display', n[0] ? 'none' : 'block');
    },
    m(i, c) {
      L(i, e, c),
        f(e, t),
        f(t, s),
        L(i, o, c),
        L(i, a, c),
        _ || ((d = ee(t, 'click', n[7])), (_ = !0));
    },
    p(i, c) {
      c & 64 &&
        l !==
          (l = i[6].url.pathname.startsWith(i[13].href) ? 'page' : void 0) &&
        m(t, 'aria-current', l),
        c & 1 &&
          I(e, 'display', i[13].label === 'Home' && i[0] ? 'none' : 'block'),
        c & 1 && I(a, 'display', i[0] ? 'none' : 'block');
    },
    d(i) {
      i && u(e), i && u(o), i && u(a), (_ = !1), d();
    }
  };
}
function Ee(n) {
  let e;
  function t(l, o) {
    return l[13].href ? je : We;
  }
  let s = t(n)(n);
  return {
    c() {
      s.c(), (e = P());
    },
    l(l) {
      s.l(l), (e = P());
    },
    m(l, o) {
      s.m(l, o), L(l, e, o);
    },
    p(l, o) {
      s.p(l, o);
    },
    d(l) {
      s.d(l), l && u(e);
    }
  };
}
function Fe(n) {
  let e = !1,
    t = () => {
      e = !1;
    },
    r,
    s,
    l,
    o,
    a,
    _,
    d,
    i,
    c,
    k,
    $,
    G,
    S,
    H,
    F;
  ie(n[11]), ie(n[12]);
  let E = !n[0] && ye(n),
    z = n[8],
    y = [];
  for (let h = 0; h < z.length; h += 1) y[h] = Ee(ke(n, z, h));
  return {
    c() {
      (s = p('nav')),
        (l = p('progress')),
        (o = T()),
        (a = p('div')),
        (_ = p('div')),
        (d = p('a')),
        (i = R('Santiago Gonzalez')),
        (k = T()),
        E && E.c(),
        ($ = T()),
        (G = p('section')),
        (S = p('ul'));
      for (let h = 0; h < y.length; h += 1) y[h].c();
      this.h();
    },
    l(h) {
      s = g(h, 'NAV', { class: !0 });
      var w = v(s);
      (l = g(w, 'PROGRESS', { max: !0, class: !0 })),
        v(l).forEach(u),
        (o = A(w)),
        (a = g(w, 'DIV', { class: !0 }));
      var b = v(a);
      _ = g(b, 'DIV', { class: !0 });
      var O = v(_);
      d = g(O, 'A', { 'aria-current': !0, href: !0, class: !0 });
      var U = v(d);
      (i = B(U, 'Santiago Gonzalez')),
        U.forEach(u),
        O.forEach(u),
        (k = A(b)),
        E && E.l(b),
        ($ = A(b)),
        (G = g(b, 'SECTION', {}));
      var J = v(G);
      S = g(J, 'UL', { class: !0 });
      var N = v(S);
      for (let D = 0; D < y.length; D += 1) y[D].l(N);
      N.forEach(u), J.forEach(u), b.forEach(u), w.forEach(u), this.h();
    },
    h() {
      m(l, 'max', n[5]),
        (l.value = n[4]),
        m(l, 'class', 'svelte-1hhlg8b'),
        m(
          d,
          'aria-current',
          (c = n[6].url.pathname === `/${C}` ? 'page' : void 0)
        ),
        m(d, 'href', C + '/'),
        m(d, 'class', 'svelte-1hhlg8b'),
        I(d, 'padding-left', '0'),
        I(d, 'visibility', n[3] ? 'hidden' : 'visible'),
        m(_, 'class', 'main-nav svelte-1hhlg8b'),
        m(S, 'class', 'svelte-1hhlg8b'),
        I(S, 'flex-direction', n[0] ? 'row' : 'column'),
        I(G, 'display', n[3] || n[0] ? 'grid' : 'none'),
        m(a, 'class', 'nav-container wider svelte-1hhlg8b'),
        I(a, 'flex-direction', n[0] ? 'row' : 'column'),
        m(s, 'class', 'artifact-ui svelte-1hhlg8b'),
        we(s, 'headerActive', n[4] > 30 || n[3]);
    },
    m(h, w) {
      L(h, s, w),
        f(s, l),
        f(s, o),
        f(s, a),
        f(a, _),
        f(_, d),
        f(d, i),
        f(a, k),
        E && E.m(a, null),
        f(a, $),
        f(a, G),
        f(G, S);
      for (let b = 0; b < y.length; b += 1) y[b].m(S, null);
      H ||
        ((F = [
          ee(window, 'resize', n[11]),
          ee(window, 'scroll', () => {
            (e = !0), clearTimeout(r), (r = setTimeout(t, 100)), n[12]();
          })
        ]),
        (H = !0));
    },
    p(h, [w]) {
      if (
        (w & 16 &&
          !e &&
          ((e = !0),
          clearTimeout(r),
          scrollTo(window.pageXOffset, h[4]),
          (r = setTimeout(t, 100))),
        w & 32 && m(l, 'max', h[5]),
        w & 16 && (l.value = h[4]),
        w & 64 &&
          c !== (c = h[6].url.pathname === `/${C}` ? 'page' : void 0) &&
          m(d, 'aria-current', c),
        w & 8 && I(d, 'visibility', h[3] ? 'hidden' : 'visible'),
        h[0]
          ? E && (E.d(1), (E = null))
          : E
          ? E.p(h, w)
          : ((E = ye(h)), E.c(), E.m(a, $)),
        w & 449)
      ) {
        z = h[8];
        let b;
        for (b = 0; b < z.length; b += 1) {
          const O = ke(h, z, b);
          y[b] ? y[b].p(O, w) : ((y[b] = Ee(O)), y[b].c(), y[b].m(S, null));
        }
        for (; b < y.length; b += 1) y[b].d(1);
        y.length = z.length;
      }
      w & 1 && I(S, 'flex-direction', h[0] ? 'row' : 'column'),
        w & 9 && I(G, 'display', h[3] || h[0] ? 'grid' : 'none'),
        w & 1 && I(a, 'flex-direction', h[0] ? 'row' : 'column'),
        w & 24 && we(s, 'headerActive', h[4] > 30 || h[3]);
    },
    i: j,
    o: j,
    d(h) {
      h && u(s), E && E.d(), Ae(y, h), (H = !1), Ge(F);
    }
  };
}
let Ue =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg>',
  Je =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>';
function Ke(n, e, t) {
  let r, s, l, o;
  ce(n, Ce, H => t(10, (l = H))), ce(n, Te, H => t(6, (o = H)));
  let a = !1,
    _ = !1;
  const d = () => t(3, (a = !a));
  let i = 0,
    c = 0,
    { pageHeight: k = 0 } = e;
  const $ = [
    { label: 'Home', href: `${C}/` },
    { label: 'Blog', href: `${C}/blog` },
    { label: 'Projects', href: `${C}/projects` },
    { separator: '|' },
    { label: 'About', href: `${C}/about` },
    { label: 'Contact', href: `${C}/contact`, decoration: 'border' }
  ];
  function G() {
    t(1, (c = window.outerWidth)), t(2, (r = window.innerHeight));
  }
  function S() {
    t(4, (i = window.pageYOffset));
  }
  return (
    (n.$$set = H => {
      'pageHeight' in H && t(9, (k = H.pageHeight));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 2 && (c > 700 ? t(0, (_ = !0)) : t(0, (_ = !1))),
        n.$$.dirty & 516 && t(5, (s = k - r)),
        n.$$.dirty & 1025 && (l || _) && t(3, (a = !1));
    }),
    t(2, (r = 0)),
    [_, c, r, a, i, s, o, d, $, k, l, G, S]
  );
}
class Qe extends te {
  constructor(e) {
    super(), le(this, e, Ke, Fe, Q, { pageHeight: 9 });
  }
}
function Xe(n) {
  let e,
    t,
    r,
    s,
    l,
    o,
    a,
    _,
    d,
    i,
    c,
    k,
    $,
    G,
    S,
    H,
    F,
    E,
    z,
    y,
    h,
    w,
    b,
    O,
    U,
    J,
    N,
    D,
    se;
  return {
    c() {
      (e = p('footer')),
        (t = p('section')),
        (r = p('p')),
        (s = R('Designed & Built with <3 by Santiago')),
        (l = T()),
        (o = p('a')),
        (a = R('nth(')),
        (_ = R(n[0])),
        (d = R(') on GitHub')),
        (i = T()),
        (c = p('section')),
        (k = p('div')),
        ($ = p('p')),
        (G = R('© GPL-3.0 Santiago Gonzalez')),
        (S = T()),
        (H = p('p')),
        (F = R('2022-2023. All Rights Reserved')),
        (E = T()),
        (z = p('ul')),
        (y = p('li')),
        (h = p('a')),
        (w = R('GitHub @santigo-zero')),
        (b = T()),
        (O = p('li')),
        (U = R('•')),
        (J = T()),
        (N = p('li')),
        (D = p('a')),
        (se = R('LinkedIn')),
        this.h();
    },
    l(V) {
      e = g(V, 'FOOTER', { class: !0 });
      var q = v(e);
      t = g(q, 'SECTION', { class: !0 });
      var X = v(t);
      r = g(X, 'P', {});
      var he = v(r);
      (s = B(he, 'Designed & Built with <3 by Santiago')),
        he.forEach(u),
        (l = A(X)),
        (o = g(X, 'A', { href: !0 }));
      var Y = v(o);
      (a = B(Y, 'nth(')),
        (_ = B(Y, n[0])),
        (d = B(Y, ') on GitHub')),
        Y.forEach(u),
        X.forEach(u),
        (i = A(q)),
        (c = g(q, 'SECTION', { class: !0 }));
      var Z = v(c);
      k = g(Z, 'DIV', { class: !0 });
      var x = v(k);
      $ = g(x, 'P', {});
      var _e = v($);
      (G = B(_e, '© GPL-3.0 Santiago Gonzalez')),
        _e.forEach(u),
        (S = A(x)),
        (H = g(x, 'P', {}));
      var de = v(H);
      (F = B(de, '2022-2023. All Rights Reserved')),
        de.forEach(u),
        x.forEach(u),
        (E = A(Z)),
        (z = g(Z, 'UL', { class: !0 }));
      var K = v(z);
      y = g(K, 'LI', {});
      var pe = v(y);
      h = g(pe, 'A', { href: !0 });
      var ge = v(h);
      (w = B(ge, 'GitHub @santigo-zero')),
        ge.forEach(u),
        pe.forEach(u),
        (b = A(K)),
        (O = g(K, 'LI', { class: !0 }));
      var me = v(O);
      (U = B(me, '•')), me.forEach(u), (J = A(K)), (N = g(K, 'LI', {}));
      var ve = v(N);
      D = g(ve, 'A', { href: !0 });
      var be = v(D);
      (se = B(be, 'LinkedIn')),
        be.forEach(u),
        ve.forEach(u),
        K.forEach(u),
        Z.forEach(u),
        q.forEach(u),
        this.h();
    },
    h() {
      m(o, 'href', 'https://github.com/santigo-zero/santigo-zero.github.io'),
        m(t, 'class', 'upper wider svelte-1elv9q5'),
        m(k, 'class', 'copyright svelte-1elv9q5'),
        m(h, 'href', 'https://github.com/santigo-zero/'),
        m(O, 'class', 'separator svelte-1elv9q5'),
        m(
          D,
          'href',
          'https://www.linkedin.com/in/santiago-gonzalez-62557221b/'
        ),
        m(z, 'class', 'svelte-1elv9q5'),
        m(c, 'class', 'bottom wider svelte-1elv9q5'),
        m(e, 'class', 'svelte-1elv9q5');
    },
    m(V, q) {
      L(V, e, q),
        f(e, t),
        f(t, r),
        f(r, s),
        f(t, l),
        f(t, o),
        f(o, a),
        f(o, _),
        f(o, d),
        f(e, i),
        f(e, c),
        f(c, k),
        f(k, $),
        f($, G),
        f(k, S),
        f(k, H),
        f(H, F),
        f(c, E),
        f(c, z),
        f(z, y),
        f(y, h),
        f(h, w),
        f(z, b),
        f(z, O),
        f(O, U),
        f(z, J),
        f(z, N),
        f(N, D),
        f(D, se);
    },
    p(V, [q]) {
      q & 1 && Re(_, V[0]);
    },
    i: j,
    o: j,
    d(V) {
      V && u(e);
    }
  };
}
function Ye(n, e, t) {
  var r = 0;
  return (
    $e(async () => {
      {
        const l = await (
          await fetch(
            'https://api.github.com/repos/santigo-zero/santigo-zero.github.io'
          )
        ).json();
        t(0, (r = l.stargazers_count));
      }
    }),
    [r]
  );
}
class Ze extends te {
  constructor(e) {
    super(), le(this, e, Ye, Xe, Q, {});
  }
}
function ze(n) {
  let e, t, r;
  const s = n[2].default,
    l = He(s, n, n[1], null);
  return {
    c() {
      (e = p('div')), l && l.c();
    },
    l(o) {
      e = g(o, 'DIV', {});
      var a = v(e);
      l && l.l(a), a.forEach(u);
    },
    m(o, a) {
      L(o, e, a), l && l.m(e, null), (r = !0);
    },
    p(o, a) {
      l &&
        l.p &&
        (!r || a & 2) &&
        Ie(l, s, o, o[1], r ? Le(s, o[1], a, null) : Se(o[1]), null);
    },
    i(o) {
      r ||
        (W(l, o),
        t ||
          ie(() => {
            (t = Ne(e, Pe, { y: -60, duration: 250 })), t.start();
          }),
        (r = !0));
    },
    o(o) {
      M(l, o), (r = !1);
    },
    d(o) {
      o && u(e), l && l.d(o);
    }
  };
}
function xe(n) {
  let e = n[0],
    t,
    r,
    s = ze(n);
  return {
    c() {
      s.c(), (t = P());
    },
    l(l) {
      s.l(l), (t = P());
    },
    m(l, o) {
      s.m(l, o), L(l, t, o), (r = !0);
    },
    p(l, [o]) {
      o & 1 && Q(e, (e = l[0]))
        ? (Be(),
          M(s, 1, 1, j),
          De(),
          (s = ze(l)),
          s.c(),
          W(s, 1),
          s.m(t.parentNode, t))
        : s.p(l, o);
    },
    i(l) {
      r || (W(s), (r = !0));
    },
    o(l) {
      M(s), (r = !1);
    },
    d(l) {
      l && u(t), s.d(l);
    }
  };
}
function et(n, e, t) {
  let { $$slots: r = {}, $$scope: s } = e,
    { url: l } = e;
  return (
    (n.$$set = o => {
      'url' in o && t(0, (l = o.url)), '$$scope' in o && t(1, (s = o.$$scope));
    }),
    [l, s, r]
  );
}
class tt extends te {
  constructor(e) {
    super(), le(this, e, et, xe, Q, { url: 0 });
  }
}
function lt(n) {
  let e;
  const t = n[3].default,
    r = He(t, n, n[5], null);
  return {
    c() {
      r && r.c();
    },
    l(s) {
      r && r.l(s);
    },
    m(s, l) {
      r && r.m(s, l), (e = !0);
    },
    p(s, l) {
      r &&
        r.p &&
        (!e || l & 32) &&
        Ie(r, t, s, s[5], e ? Le(t, s[5], l, null) : Se(s[5]), null);
    },
    i(s) {
      e || (W(r, s), (e = !0));
    },
    o(s) {
      M(r, s), (e = !1);
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function st(n) {
  let e, t, r, s, l, o, a, _, d;
  return (
    (t = new Qe({ props: { pageHeight: n[1] } })),
    (s = new tt({
      props: { url: n[2].url, $$slots: { default: [lt] }, $$scope: { ctx: n } }
    })),
    (o = new Ze({})),
    {
      c() {
        (e = p('div')),
          oe(t.$$.fragment),
          (r = T()),
          oe(s.$$.fragment),
          (l = T()),
          oe(o.$$.fragment),
          (a = T()),
          (_ = p('div')),
          this.h();
      },
      l(i) {
        e = g(i, 'DIV', { class: !0 });
        var c = v(e);
        re(t.$$.fragment, c),
          (r = A(c)),
          re(s.$$.fragment, c),
          (l = A(c)),
          re(o.$$.fragment, c),
          c.forEach(u),
          (a = A(i)),
          (_ = g(i, 'DIV', { class: !0 })),
          v(_).forEach(u),
          this.h();
      },
      h() {
        m(e, 'class', 'layout svelte-3b4m7h'),
          m(_, 'class', 'noise svelte-3b4m7h');
      },
      m(i, c) {
        L(i, e, c),
          ne(t, e, null),
          f(e, r),
          ne(s, e, null),
          f(e, l),
          ne(o, e, null),
          n[4](e),
          L(i, a, c),
          L(i, _, c),
          (d = !0);
      },
      p(i, [c]) {
        const k = {};
        c & 2 && (k.pageHeight = i[1]), t.$set(k);
        const $ = {};
        c & 4 && ($.url = i[2].url),
          c & 32 && ($.$$scope = { dirty: c, ctx: i }),
          s.$set($);
      },
      i(i) {
        d ||
          (W(t.$$.fragment, i),
          W(s.$$.fragment, i),
          W(o.$$.fragment, i),
          (d = !0));
      },
      o(i) {
        M(t.$$.fragment, i), M(s.$$.fragment, i), M(o.$$.fragment, i), (d = !1);
      },
      d(i) {
        i && u(e), ae(t), ae(s), ae(o), n[4](null), i && u(a), i && u(_);
      }
    }
  );
}
function ot(n, e, t) {
  let r, s;
  ce(n, Te, d => t(2, (s = d)));
  let { $$slots: l = {}, $$scope: o } = e,
    a;
  $e(() => {
    const d = new ResizeObserver(i => {
      const c = i.at(0);
      c !== void 0 && t(1, (r = Math.floor(c.contentBoxSize[0].blockSize)));
    });
    return d.observe(a), () => d.unobserve(a);
  });
  function _(d) {
    qe[d ? 'unshift' : 'push'](() => {
      (a = d), t(0, a);
    });
  }
  return (
    (n.$$set = d => {
      '$$scope' in d && t(5, (o = d.$$scope));
    }),
    t(1, (r = 0)),
    [a, r, s, l, _, o]
  );
}
class ct extends te {
  constructor(e) {
    super(), le(this, e, ot, st, Q, {});
  }
}
export { ct as default };
