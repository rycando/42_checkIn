(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(30),s=n.n(r),i=(n(39),n(32)),l=n(2),o=(n(40),function(e){for(var t=e+"=",n="",c=document.cookie.split(";"),a=0;a<c.length;a++)if(" "===c[a][0]&&(c[a]=c[a].substring(1)),0===c[a].indexOf(t))return n=c[a].slice(t.length,c[a].length);return n}),u=n(0);var d=function(){return Object(c.useEffect)((function(){""!==o("w_auth")&&(window.location.href="/submit")}),[]),Object(u.jsx)("div",{id:"landing-wrapper",children:Object(u.jsx)("button",{id:"login-btn",onClick:function(){window.location.href="/api/user/login"},children:"42 Log In"})})},j=n(4),b=n.n(j),h=n(11),x=n(5),p=n(6),O=n.n(p),f=n(20);n(61);var g=function(e){var t=e.idx,n=e.text,c=e.checkStatus,a=e.setCheckStatus;return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{htmlFor:t,className:"checkbox-text",children:[Object(u.jsx)("input",{id:t,className:"checkbox",type:"checkbox",checked:c[t],onChange:function(){var e=c[t];a([].concat(Object(f.a)(c.slice(0,t)),[!e],Object(f.a)(c.slice(t+1))))}}),n]})})},m=function(e){var t=e.label,n=e.type,c=e.placeholder,a=e.value,r=e.handleChange;return Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("div",{id:"card",children:Object(u.jsx)("input",{type:n,name:"text",value:a,onChange:r,placeholder:c,style:{textAlign:"center"}})})]})},v=function(e){var t=e.className,n=e.handleClick,c=e.text;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:t,onClick:n,children:c})})},k=(n(62),function(){return Object(u.jsx)("div",{id:"myModal",className:"modal",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsx)("p",{className:"text",children:"42 Wi-Fi\ub97c \uc774\uc6a9\ud574\uc8fc\uc138\uc694"}),Object(u.jsx)("p",{className:"text",children:"Wi-Fi : 42 Guest"}),Object(u.jsx)("p",{className:"text",children:"pw : WeL0ve42Seoul"}),Object(u.jsx)("button",{className:"close",onClick:function(){var e=document.createElement("textarea");e.value="WeL0ve42Seoul",document.body.appendChild(e),e.select(),e.setSelectionRange(0,9999),document.execCommand("copy"),document.body.removeChild(e),document.getElementById("myModal").style.display="none"},children:"Copy"})]})})}),y=[" \ubc1c\uc5f4 \uccb4\ud06c\uc2dc 37.5\ub3c4 \uc774\ud558\uc778 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \uc774 \uc784\uc2dc \ucd9c\uc785\uce74\ub4dc\ub97c \ubd84\uc2e4 \uc2dc \ubd84\uc2e4 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \ub9c8\uc2a4\ud06c\ub97c \ubc18\ub4dc\uc2dc \uc0c1\uc2dc \ucc29\uc6a9\ud558\uace0 \ubc29\uc5ed\uc218\uce59\uc744 \uc900\uc218\ud560 \uac83\uc744 \uc57d\uc18d\ud558\uba70, \ubaa8\ub4e0 \uc124\ubb38\uc744 \uc774\uc0c1\uc5c6\uc774 \uc791\uc131\ud588\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."];n(63);var w=function(){var e=Object(c.useState)({userId:"",waitingNum:null,status:"out",timeOut:null}),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(x.a)(r,2),i=s[0],l=s[1],d=Object(c.useState)({gaepo:0,g_waiting:0,seocho:0,s_waiting:0}),j=Object(x.a)(d,2),p=j[0],f=j[1],w=Object(c.useState)(!1),N=Object(x.a)(w,2),C=N[0],S=N[1],B=Object(c.useState)([!1,!1,!1]),I=Object(x.a)(B,2),_=I[0],F=I[1],P=Object(c.useState)(!1),A=Object(x.a)(P,2),W=A[0],E=A[1],L=n.userId,D=(n.waitingNum,n.status),J=(n.timeOut,p.gaepo),M=p.g_waiting,T=p.seocho,H=p.s_waiting,R=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=26;break}return e.prev=1,e.next=4,O.a.get("/api/card/valid/".concat(i));case 4:if(t=e.sent,console.log(i),console.log(t.data),!1!==t.data.using){e.next=19;break}return e.prev=8,e.next=11,O.a.post("/api/user/checkIn/".concat(i));case 11:window.location.href="/end",e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),console.log(e.t0);case 17:e.next=21;break;case 19:l(null),alert("\uc774\ubbf8 \uc0ac\uc6a9 \uc911\uc774\uac70\ub098 \uc720\ud6a8\ud55c \uce74\ub4dc \ubc88\ud638\uac00 \uc544\ub2d9\ub2c8\ub2e4");case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(1),400===e.t1.response.status?document.getElementById("myModal").style.display="flex":alert("\uccb4\ud06c\uc778\uc744 \ucc98\ub9ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc81c\ud55c \uc778\uc6d0 \ucd08\uacfc\uac00 \uc544\ub2cc \uacbd\uc6b0 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694.");case 26:case"end":return e.stop()}}),e,null,[[1,23],[8,14]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ud1f4\uc2e4 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=12;break}return e.prev=1,e.next=4,O.a.post("/api/user/checkOut");case 4:window.location.href="/end",e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),alert("\uc774\ubbf8 \ucc98\ub9ac\ub41c \uc791\uc5c5\uc785\ub2c8\ub2e4."),window.location.href="/",console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/user/status");case 3:t=e.sent,n=t.data,c=n.user,r=n.cluster,a({userId:c.login,status:null!==c.card?"in":"out",waitingNum:c.waitingNum,timeOut:c.timeOut}),l(c.card),f({gaepo:r.gaepo,g_waiting:r.gaepoWaiting,seocho:r.seocho,s_waiting:r.seochoWaiting}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),document.cookie="w_auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.href="/";case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();""!==o("w_auth")?e():window.location.href="/",JSON.stringify(_)!==JSON.stringify([!0,!0,!0])?S(!1):S(!0),""!==i&&JSON.stringify(_)===JSON.stringify([!0,!0,!0])?E(!0):E(!1)}),[i,_,D]),Object(u.jsxs)("div",{id:"page-wrapper",children:[Object(u.jsxs)("div",{id:"checkinout",children:[Object(u.jsx)("h1",{id:"title",children:"in"===D?"42 CheckOut":"42 CheckIn"}),Object(u.jsxs)("h4",{children:["\uac1c\ud3ec \uc778\uc6d0 : ",J," / 150"," ",150===J?"(".concat(M,")"):""]}),Object(u.jsxs)("h4",{children:["\uc11c\ucd08 \uc778\uc6d0 : ",T," / 150"," ",150===T?"(".concat(H,")"):""]}),Object(u.jsxs)("h3",{children:[" Intra ID : ",L]}),"in"===D?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:["Card Number : ",i]}),Object(u.jsx)(v,{className:"submitBtn ready",handleClick:G,text:"Check Out"})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"input-wrapper",style:{textAlign:"left"},children:[Object(u.jsxs)("label",{htmlFor:"allCheck",style:{fontSize:"1em"},children:[Object(u.jsx)("input",{id:"allCheck",type:"checkbox",checked:C,onChange:function(e){var t=e.target.checked;S(t),F([t,t,t])}}),"\ubaa8\ub450 \ub3d9\uc758"]}),Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(u.jsx)("div",{className:"checkbox-wrapper",children:y.map((function(e,t){return Object(u.jsx)(g,{idx:t,text:e,checkStatus:_,setCheckStatus:F},t)}))})})]}),Object(u.jsx)(m,{label:"Card Number",type:"number",placeholder:"\uce74\ub4dc \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:i,handleChange:function(e){l(e.target.value)}}),Object(u.jsx)(v,{className:"submitBtn ".concat(W?" ready":""),handleClick:R,text:"Check In"})]})]}),Object(u.jsx)(k,{})]})};n(64);var N=function(){return Object(c.useEffect)((function(){setTimeout((function(){return window.location.href="/submit"}),1e3)})),Object(u.jsx)("div",{id:"text-wrapper",children:Object(u.jsx)("h1",{id:"ending-text",children:"Complete!"})})},C=n(34),S=(n(65),n(66),function(e){var t=e.Page,n=e.setPage;return Object(u.jsxs)("div",{className:"paging-wrapper",children:[Object(u.jsx)("button",{className:"pagingBtn",onClick:function(){n(0===t?0:t-1)},children:"\uc774\uc804 \ud398\uc774\uc9c0"}),Object(u.jsx)("label",{children:t}),Object(u.jsx)("button",{className:"pagingBtn",onClick:function(){n(t+1)},children:"\ub2e4\uc74c \ud398\uc774\uc9c0"})]})}),B=Object(c.forwardRef)((function(e,t){Object(c.useImperativeHandle)(t,(function(){return{onSubmit:B}}));var n=Object(c.useState)(0),a=Object(x.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(0),l=Object(x.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)(""),p=Object(x.a)(j,2),f=p[0],g=p[1],m=Object(c.useState)(0),v=Object(x.a)(m,2),k=v[0],y=v[1],w=[1,2,3,5,6,8,10,11,13,14,15,16,19,20,21,23,25,26,29,34,35,36,37,38,40,41,42,43,44,45,46,47,50,51,52,53,54,55,57,58,59,63,64,65,66,68,69,70,71,72,73,74,76,78,79,80,81,85,86,87,89,90,91,92,93,95,96,99,101,102,103,104,106,108,110,111,112,113,115,116,117,118,122,123,124,125,129,130,132,133,135,136,137,142,146,147,149,150,151,152,153,154,156,158,161,163,166,167,168,169,170,171,172,173,176,179,184,185,186,189,191,198,199,201,204,205,206,207,208,210,212,213,214,215,216,218,219,220,222,225,226,228,229,231,233,234,235,240,242,243],N=function(t){e.setLogs([]),s(t.target.value),d(0)},B=function(){var t=Object(h.a)(b.a.mark((function t(n){var c,a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),t.prev=1,t.t0=e.type,t.next=0===t.t0?5:1===t.t0?9:2===t.t0?13:3===t.t0?17:4===t.t0?20:23;break;case 5:return t.next=7,O.a.get("/api/log/".concat(0===r?"gaepo":"seocho","/").concat(o));case 7:return c=t.sent,t.abrupt("break",24);case 9:return t.next=11,O.a.get("/api/log/user/".concat(f,"?").concat(o));case 11:return c=t.sent,t.abrupt("break",24);case 13:return t.next=15,O.a.get("/api/log/card/".concat(k,"?").concat(o));case 15:return c=t.sent,t.abrupt("break",24);case 17:return t.next=19,O.a.get("/api/log/checkIn/".concat(r,"?").concat(o));case 19:c=t.sent;case 20:return t.next=22,O.a.get("/api/log/allCard/".concat(r));case 22:c=t.sent;case 23:return t.abrupt("break",24);case 24:a=c.data,3!==e.type&&4!==e.type||(a=c.data.filter((function(e,t){return c.data.findIndex((function(t,n){return e.user._id===t.user._id}))===t})).reverse()),4===e.type&&0==r&&(s=[],w.map((function(e,t){var n=a.find((function(t){if(t.card.cardId===e)return!0}));s.push(Object(C.a)({id:e},n))})),a=s),e.setLogs(a),console.log(a),t.next=34;break;case 31:t.prev=31,t.t1=t.catch(1),console.log(t.t1);case 34:case"end":return t.stop()}}),t,null,[[1,31]])})));return function(e){return t.apply(this,arguments)}}(),I=function(){return Object(u.jsx)("div",{className:"control-section",children:Object(u.jsxs)("form",{onSubmit:B,children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"cluster",value:0,checked:0==r,onChange:N}),"\uac1c\ud3ec"]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:"cluster",value:1,checked:1==r,onChange:N}),"\uc11c\ucd08"]}),Object(u.jsx)("button",{onClick:B,children:"\ubd88\ub7ec\uc624\uae30"})]}),Object(u.jsx)(S,{Page:o,setPage:d})]})})};switch(e.type){case 0:return I();case 1:return Object(u.jsx)("div",{className:"control-section",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",name:"\ub85c\uadf8\uc778",value:f,placeholder:"\uc778\ud2b8\ub77c \uc544\uc774\ub514",onChange:function(e){g(e.target.value)},style:{textAlign:"center"}}),Object(u.jsx)("button",{onClick:B,children:"\ubd88\ub7ec\uc624\uae30"}),Object(u.jsx)(S,{Page:o,setPage:d})]})});case 2:return Object(u.jsx)("div",{className:"control-section",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",name:"text",value:k,placeholder:"\uce74\ub4dc\ubc88\ud638",onChange:function(e){y(e.target.value)},style:{textAlign:"center"}}),Object(u.jsx)("button",{onClick:B,children:"\ubd88\ub7ec\uc624\uae30"}),Object(u.jsx)(S,{Page:o,setPage:d})]})});case 3:default:return I()}})),I=n(31);n(68);var _=function(){var e=Object(c.useState)(0),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(x.a)(r,2),i=s[0],l=s[1],o=Object(c.useRef)(),d=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/user/status");case 3:(t=e.sent).data&&t.data.isAdmin||(window.location.href="/submit"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),window.location.href="/";case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}),[]);var j=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.target.getAttribute("data"),e.next=4,O.a.post("/api/user/forceCheckOut/".concat(n));case 4:e.sent,l([]),o.current.onSubmit(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(u.jsxs)("div",{className:"selectorWrapper",children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(0)},children:"\ud074\ub7ec\uc2a4\ud130 \ub85c\uadf8"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(1)},children:"\ud559\uc0dd \ub85c\uadf8"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(2)},children:"\uce74\ub4dc \ub85c\uadf8"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(3)},children:"\ubbf8\ubc18\ub0a9 \uce74\ub383"}),Object(u.jsx)("button",{className:"filterBtn",onClick:function(){l([]),a(4)},children:"\ubaa8\ub4e0 \uce74\ub4dc \uc815\ubcf4 \ubcf4\uae30"})]}),Object(u.jsx)("div",{style:{display:"flex",width:"50%",padding:"1rem",height:"5rem"},children:Object(u.jsx)(B,{type:n,setLogs:l,ref:o})})]}),Object(u.jsxs)("div",{style:{overflowX:"scroll",margin:"auto"},children:[Object(u.jsxs)("div",{className:"logWrapper",children:[4===n?Object(u.jsx)("div",{className:"logBox1",children:"\uce74\ub4dc \ubc88\ud638"}):null,Object(u.jsx)("div",{className:"logBox3",children:"\uc2dc\uac04"}),Object(u.jsx)("div",{className:"logBox1",children:"\ucd9c/\uc785"}),Object(u.jsx)("div",{className:"logBox1",children:"\ub85c\uadf8\uc778"}),Object(u.jsx)("div",{className:"logBox1",children:"\uce74\ub4dc \ubc88\ud638"}),Object(u.jsx)("div",{className:"logBox1",children:"\ud074\ub7ec\uc2a4\ud130"}),Object(u.jsx)("div",{className:"logBox1",children:"\uac15\uc81c \ud1f4\uc2e4"})]}),Object(u.jsx)("hr",{}),i&&i.map((function(e,t){var n=new Date(e.createdAt);return Object(u.jsxs)("div",{className:"logWrapper",children:[e.id?Object(u.jsx)("div",{className:"logBox1",children:e.id}):null,n?Object(u.jsx)("div",{className:"logBox3",children:I(n).format("MM\uc6d4 DD\uc77c HH:mm")}):null,e.logType?Object(u.jsx)("div",{className:"logBox1",children:e.logType}):null,e.user?Object(u.jsx)("div",{className:"logBox1",children:e.user.userName}):null,e.card?Object(u.jsx)("div",{className:"logBox1",children:e.card.cardId}):null,e.card?Object(u.jsx)("div",{className:"logBox1",children:0===e.card.type?"\uac1c\ud3ec":"\uc11c\ucd08"}):null,e.user?Object(u.jsx)("div",{className:"logBox1",data:e.user._id,onClick:j,children:e.card.cardId===e.user.cardId?"\ud1f4\uc2e4\ucc98\ub9ac\ud558\uae30":null}):null]},t)}))]})]})};var F=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h1",{style:{textAlign:"center",touchAction:"pan-y"},children:"404 Not Found"})})};n(69);var P=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",exact:!0,component:d}),Object(u.jsx)(l.a,{path:"/submit",component:w}),Object(u.jsx)(l.a,{path:"/end",component:N}),Object(u.jsx)(l.a,{path:"/admin",component:_}),Object(u.jsx)(l.a,{component:F})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n.p;s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),A()}},[[75,1,2]]]);
//# sourceMappingURL=main.373013b9.chunk.js.map