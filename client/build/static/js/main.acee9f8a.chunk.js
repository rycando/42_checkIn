(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},56:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(24),o=n.n(r),i=(n(34),n(27)),s=n(1),u=(n(35),n(4));var l=function(){return Object(u.jsx)("div",{className:"btn-wrapper",children:Object(u.jsx)("div",{className:"btn",onClick:function(){window.location.href="https://api.intra.42.fr/oauth/authorize?client_id=f312ff6c8d982b88860a72019668c3d2b6e59b66c6c0e43a783d373519fedc54&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fuser%2Flogin&response_type=code"},children:"42 CheckIn"})})},d=n(12),p=n.n(d),f=n(25),h=n(29),b=n(26),j=n.n(b);var v=function(){var t=Object(c.useState)(""),e=Object(h.a)(t,2),n=e[0],a=e[1],r=function(){var t=Object(f.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("",{code:n});case 3:e=t.sent,localStorage.setItem("w_auth",e.data.w_auth),window.location.href="",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a(window.location.search.split("=")[1]),r()})),Object(u.jsx)("div",{children:"code"})};n(56);var w=function(){return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(s.a,{path:"/",exact:!0,component:l}),Object(u.jsx)(s.a,{path:"/api/user/login",exact:!0,component:v})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),x()}},[[62,1,2]]]);
//# sourceMappingURL=main.acee9f8a.chunk.js.map