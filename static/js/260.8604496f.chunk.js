"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[260],{321:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(643),a=r(184);function u(){return(0,a.jsx)("div",{children:(0,a.jsx)(n.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},visible:!0})})}},260:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(439),a=r(791),u=r(689),c=r(390),s="Review_list__twS+N",i="Review_listItem__-olvy",o="Review_author__fZw4a",f=r(184);function p(e){var t=e.review,r=t.author,n=t.content;return(0,f.jsxs)("li",{className:i,children:[(0,f.jsxs)("span",{className:o,children:["Author: ",r]}),(0,f.jsx)("span",{children:n})]})}function l(e){var t=e.review;return(0,f.jsx)("ul",{className:s,children:t.map((function(e){return(0,f.jsx)(p,{review:e},e.id)}))})}var v=r(321);function d(){var e=(0,u.UO)().movieId,t=(0,a.useState)([]),r=(0,n.Z)(t,2),s=r[0],i=r[1],o=(0,a.useState)(null),p=(0,n.Z)(o,2),d=p[0],h=p[1],m=(0,a.useState)(!1),w=(0,n.Z)(m,2),x=w[0],_=w[1];return(0,a.useEffect)((function(){_(!0),(0,c.tx)(e).then(i).catch((function(e){return h(e.message)})).finally((function(){return _(!1)}))}),[e]),(0,a.useEffect)((function(){d&&alert(d)}),[d]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("section",{children:0===s.length?(0,f.jsx)("span",{children:"Sorry, there is no reviews"}):s&&(0,f.jsx)(l,{review:s})}),x&&(0,f.jsx)(v.Z,{})]})}},390:function(e,t,r){r.d(t,{Df:function(){return o},Ph:function(){return f},TP:function(){return p},tx:function(){return v},zv:function(){return l}});var n=r(861),a=r(757),u=r.n(a),c=r(243),s="https://api.themoviedb.org/3/",i="25e4eeadea4cf520d825a9bf9fd0e85d",o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"trending/movie/day"),{params:{api_key:i}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"search/movie"),{params:{api_key:i,query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t),{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/credits"),{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{params:{api_key:i}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=260.8604496f.chunk.js.map