(this["webpackJsonpone_minute_timer-react"]=this["webpackJsonpone_minute_timer-react"]||[]).push([[0],{22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),r=t(17),i=t.n(r),u=(t(22),t(3)),o=t(7),b=t(1),l=t(4);function s(){var n=Object(u.a)(["\n  input {\n    font-size: 2em;\n    width: 2em;\n  }\n"]);return s=function(){return n},n}var f=Object(l.a)((function(n){var e=n.className,t=n.minutes,a=n.handleChange,c=n.disabled;return Object(b.b)("div",{className:e},Object(b.b)("h3",null,"Input your desired time"),Object(b.b)("input",{type:"number",min:"0",disabled:c,value:t,onChange:a,required:!0}))}))(s()),m=function(n){var e=n.minutes,t=n.seconds;return c.a.createElement("div",null,c.a.createElement("h1",{style:{fontSize:100}},e,":",t))};function j(){var n=Object(u.a)(["\n  display: inline-block;\n\n  button {\n    font-size: 3em;\n  }\n"]);return j=function(){return n},n}var v=Object(l.a)((function(n){var e=n.className,t=n.handleClick;return Object(b.b)("div",{className:e},Object(b.b)("button",{onClick:t},"Start"))}))(j());function O(){var n=Object(u.a)(["\n  margin-left: 3em;\n  button {\n    font-size: 3em;\n  }\n\n  ","\n"]);return O=function(){return n},n}function d(){var n=Object(u.a)(["\n    display: ",";\n  "]);return d=function(){return n},n}var h=Object(l.a)((function(n){var e=n.className,t=n.handleClick;return Object(b.b)("div",{className:e},Object(b.b)("button",{onClick:t},"Pause"))}))(O(),(function(n){return Object(b.a)(d(),n.visible?"inline-block":"none")}));function k(){var n=Object(u.a)(["\n  margin-left: 3em;\n  button {\n    font-size: 3em;\n  }\n\n  ","\n"]);return k=function(){return n},n}function N(){var n=Object(u.a)(["\n    display: ",";\n  "]);return N=function(){return n},n}var p=Object(l.a)((function(n){var e=n.className,t=n.handleClick;return Object(b.b)("div",{className:e},Object(b.b)("button",{onClick:t},"Resume"))}))(k(),(function(n){return Object(b.a)(N(),n.visible?"inline-block":"none")}));function C(){var n=Object(u.a)(["\n  margin-left: 3em;\n  display: inline-block;\n\n  button {\n    font-size: 3em;\n  }\n"]);return C=function(){return n},n}var g=Object(l.a)((function(n){var e=n.className,t=n.handleClick;return Object(b.b)("div",{className:e},Object(b.b)("button",{onClick:t},"Stop"))}))(C());function S(){var n=Object(u.a)(["\n  text-align: center;\n"]);return S=function(){return n},n}var w=Object(l.a)((function(n){var e=n.className,t=Object(a.useState)("01"),c=Object(o.a)(t,2),r=c[0],i=c[1],u=Object(a.useState)("01"),l=Object(o.a)(u,2),s=l[0],j=l[1],O=Object(a.useState)("00"),d=Object(o.a)(O,2),k=d[0],N=d[1],C=Object(a.useState)(false),S=Object(o.a)(C,2),w=S[0],y=S[1],z=Object(a.useState)(false),E=Object(o.a)(z,2),I=E[0],_=E[1],B=Object(a.useState)(0),J=Object(o.a)(B,2),W=J[0],q=J[1],x=w&&!I,A=w&&I;Object(a.useEffect)((function(){if(w&&!I){var n=Math.floor(W/60),e=W-60*n,t=String(e);e<10&&(t="0".concat(t));var a=String(n);if(n<10&&(a="0".concat(a)),j(a),N(t),w&&W>0){var c=setInterval(M,1e3);return function(){return clearInterval(c)}}P()}}),[w,I,W]);var M=function(){q(W-1)},P=function(){q(0),j(r),N("00"),y(false),_(false)};return Object(b.b)("div",{className:e},Object(b.b)(f,{className:e,minutes:r,handleChange:function(n){var e,t=n.target.value;e=Number(t)<10?"0".concat(t):t,i(e),j(e)},disabled:w}),Object(b.b)(m,{minutes:s,seconds:k}),Object(b.b)("div",null,Object(b.b)(v,{className:e,handleClick:function(){y(!0);var n=Number(s);q(60*n)}}),Object(b.b)(h,{className:e,visible:x,handleClick:function(){_(!0)}}),Object(b.b)(p,{className:e,visible:A,handleClick:function(){_(!1)}}),Object(b.b)(g,{className:e,handleClick:P})))}))(S());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(w,{className:"App"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.9be0a1d5.chunk.js.map