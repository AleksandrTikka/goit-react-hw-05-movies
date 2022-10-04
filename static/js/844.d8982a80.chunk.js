"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[844],{8716:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(6731),c=t(470),u=t(8668),o=t(184),a=function(e){var n=e.movie,t=(0,c.TH)(),a=n.id,i=n.poster_path,s=n.title;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("li",{children:(0,o.jsxs)(r.OL,{to:"/movies/".concat(a),state:{from:t},children:[(0,o.jsx)("img",{src:i?u.pd+i:u.bm,alt:s}),(0,o.jsx)("h3",{children:s})]})})})},i=function(e){var n=e.movies;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:n.map((function(e){return(0,o.jsx)(a,{movie:e},e.id)}))})})}},8668:function(e,n,t){t.d(n,{bm:function(){return c},pd:function(){return r},v3:function(){return u}});var r="https://www.themoviedb.org/t/p/w500",c="https://en-images.kinorium.com/movie/1080/1662246.jpg?1556722314",u="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_z58Dz951_gGtjU3bYqGsTCKODu_RRAh3WcZ7dfanzNN-vBi6WcjBpf6Rr4sa6qcdlrQ&usqp=CAU"},1844:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,c,u,o=t(5861),a=t(885),i=t(7757),s=t.n(i),p=t(2791),f=t(168),l=t(6444),h=l.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: ","px;\n  gap: ","px;\n"])),(function(e){return e.theme.space[5]}),(function(e){return e.theme.space[3]})),d=l.ZP.input(c||(c=(0,f.Z)(["\n  width: 50%;\n  /* height: 30px; */\n  padding: ","px ","px;\n  border: ",";\n  outline: ",";\n  border-radius: ",";\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.borders.none}),(function(e){return e.theme.radii.sm})),v=l.ZP.button(u||(u=(0,f.Z)(["\n  padding: ","px ","px;\n  color: ",";\n  background-color: ",";\n  font-weight: ",";\n  border: ",";\n  border-radius: ",";\n  transition: ",";\n  transition: ",";\n  :hover,\n  :focus {\n    transform: scale(1.2);\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.bgButton}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.borders.none}),(function(e){return e.theme.radii.sm}),(function(e){return e.theme.transition.transform}),(function(e){return e.theme.transition.bgColor}),(function(e){return e.theme.colors.bgButtonHover})),m=t(184);function g(e){var n=e.getSearchQuery,t=(0,p.useState)(""),r=(0,a.Z)(t,2),c=r[0],u=r[1];return(0,m.jsx)("div",{children:(0,m.jsxs)(h,{onSubmit:function(e){e.preventDefault(),""===c.trim()?alert("Search input is empty... Please enter a new word"):n(c),u("")},children:[(0,m.jsx)(d,{name:"input",value:c,onChange:function(e){u(e.target.value.toLowerCase())},type:"text",autoComplete:"off",placeholder:"Search movies"}),(0,m.jsx)(v,{type:"submit",children:"Search"})]})})}var x=t(8716),b=t(4390),w=t(927),y=t(6731),j=function(){var e,n=(0,p.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1],u=(0,p.useState)(""),i=(0,a.Z)(u,2),f=i[0],l=i[1],h=(0,p.useState)("idle"),d=(0,a.Z)(h,2),v=d[0],j=d[1],Z=(0,y.lr)(),k=(0,a.Z)(Z,2),_=k[0],S=k[1],C=null!==(e=_.get("query"))&&void 0!==e?e:"";(0,p.useEffect)((function(){function e(){return(e=(0,o.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j("pending"),e.next=4,(0,b.bI)(C);case 4:n=e.sent,c(n),j("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),j("rejected"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}""!==C&&function(){e.apply(this,arguments)}()}),[C]),(0,p.useEffect)((function(){function e(){return(e=(0,o.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j("pending"),e.next=4,(0,b.bI)(f);case 4:n=e.sent,c(n),j("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),j("rejected"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}""!==f&&function(){e.apply(this,arguments)}()}),[f]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(g,{getSearchQuery:function(e){l(e.trim()),function(e){S(""!==e?{query:e}:{})}(e.trim())}}),r.length>0&&(0,m.jsx)(x.Z,{movies:r}),"pending"===v&&(0,m.jsx)(w.Z,{})]})}},4390:function(e,n,t){t.d(n,{Hx:function(){return h},Tg:function(){return s},Y5:function(){return f},bI:function(){return p},uV:function(){return l}});var r=t(5861),c=t(7757),u=t.n(c),o=t(4569),a=t.n(o);a().defaults.baseURL="https://api.themoviedb.org/3/";var i="a56dfce00590e00de6e7abfd96a9065d",s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("trending/movie/day?api_key=".concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:i,query:n}),e.prev=1,e.next=4,a().get("search/movie?".concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("movie/".concat(n,"?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("movie/".concat(n,"/credits?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=844.d8982a80.chunk.js.map