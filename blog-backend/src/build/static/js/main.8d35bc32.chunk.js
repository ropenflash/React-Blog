(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(27),a(28),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello, welcome to my blog"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra nibh a quam iaculis, in mollis diam imperdiet. Nullam eget facilisis nisi. Praesent et turpis elit. Duis sagittis nulla vitae ultricies vestibulum. Phasellus placerat tortor sed orc varius aliquet. Aenean felis est, viverra in finibus at, finibus vel mauris. Vestibulum viverra rhoncus tellus, a rhoncus augue auctor ac. Sed interdum elit nulla itae placerat est fermentum id. Sed ullamcorper nulla non posuere sollicitudin. Nulla sed enim quis nunc ultrices gravida. Vivamus ut dictum magna."))}),o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"))},m=a(5),u=a.n(m),s=a(8),p=a(11),f=[{name:"learn-react",title:"React Chapter 1",content:["explaning types of components understanding state management"]},{name:"learn-redux",title:"Chapter 3 Redux",content:["Redux explaining limitation of MVC model Actions Dispatch Store and View"]},{name:"underscore",title:"functional javascript library",content:["amazing library"]}],E=a(6),d=function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement(E.b,{key:t,className:"article",to:"/article/".concat(e.name)},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content[0].substring(0,150),"......"))}))},v=function(){return r.a.createElement("h1",null,"404: Page not found")};function h(e){var t=e.comments;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comments:"),t.map(function(e,t){return r.a.createElement("div",{key:t,className:"comment"},r.a.createElement("h4",null,e.name),r.a.createElement("p",null,e.text))}))}function b(e){var t=e.upvotes,a=e.articleName,n=e.setArticleInfo,l=function(){var e=Object(s.a)(u.a.mark(function e(){var t,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(a,"/upvote"),{method:"post"});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-dark btn-secondary",onClick:l},"Add Upvote"),r.a.createElement("span",{className:"ml-2"},"This post has been upvoted ",t," times"))}function g(e){var t=e.articleName,a=e.setArticleInfo,l=Object(n.useState)(""),c=Object(p.a)(l,2),i=c[0],o=c[1],m=Object(n.useState)(""),f=Object(p.a)(m,2),E=f[0],d=f[1],v=function(){var e=Object(s.a)(u.a.mark(function e(){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({name:i,text:E}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r),o(""),d("");case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"add-comment "},r.a.createElement("h3",{className:"mt-2"},"Add Comment"),r.a.createElement("label",null,"Name:"),r.a.createElement("input",{className:"ml-5",type:"text",value:i,onChange:function(e){o(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("label",null,"Comment: "),r.a.createElement("textarea",{className:"ml-4",rows:"4",cols:"50",value:E,onChange:function(e){d(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-dark mb-2",onClick:v},"Add Comment"))}var N=function(e){var t=e.match.params.name,a=f.find(function(e){return e.name===t}),l=Object(n.useState)({upvotes:0,comments:[]}),c=Object(p.a)(l,2),i=c[0],o=c[1];if(Object(n.useEffect)(function(){!function(){var e=Object(s.a)(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),!a)return r.a.createElement(v,null);var m=f.filter(function(e){return e.name!==a.name});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,a.title),r.a.createElement(b,{upvotes:i.upvotes,articleName:t,setArticleInfo:o}),a.content.map(function(e,t){return r.a.createElement("p",{key:t},e)}),r.a.createElement(h,{comments:i.comments}),r.a.createElement(g,{articleName:t,setArticleInfo:o}),r.a.createElement("h3",{className:"mt-2"},"Related Articles:"),r.a.createElement(d,{articles:m}))},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Articles"),r.a.createElement(d,{articles:f}))},x=(a(34),function(){return r.a.createElement("div",{className:"container2"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:"navbar-li li"},r.a.createElement(E.b,{className:"anchor anchor-hover",to:"/"},"Home")),r.a.createElement("li",{className:"navbar-li li"},r.a.createElement(E.b,{className:"anchor anchor-hover",to:"/about"},"About")),r.a.createElement("li",{className:"navbar-li li"},r.a.createElement(E.b,{className:"anchor anchor-hover",to:"/articles"},"Articles")))))}),y=a(7);var j=function(){return r.a.createElement(E.a,null,r.a.createElement(x,null),r.a.createElement("div",{className:"App"},r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:i}),r.a.createElement(y.a,{path:"/about",component:o}),r.a.createElement(y.a,{path:"/articles",component:w}),r.a.createElement(y.a,{path:"/article/:name",component:N}),r.a.createElement(y.a,{component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.8d35bc32.chunk.js.map