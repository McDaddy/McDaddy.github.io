(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(177)},113:function(e,t,n){},114:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n(6),c=n.n(l),r=(n(113),n(25)),o=n(30),m=n(91),u=n(92),i=n(105),s=n(93),p=n(106),E=n(179),d=n(180),h=n(40),b=(n(114),E.a.Header),f=E.a.Content,v=E.a.Sider,w=d.b.SubMenu,y=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement(E.a,{className:"page-container"},a.createElement(b,{className:"header"},a.createElement("div",{className:"logo"}),a.createElement(d.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],className:"menu"},a.createElement(d.b.Item,{key:"1"},"Ho1111111me"))),a.createElement(E.a,null,a.createElement(v,{width:200,className:"sider"},a.createElement(d.b,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"]},a.createElement(w,{key:"sub1",title:a.createElement("span",null,a.createElement(h.a,{type:"laptop"}),"test")},a.createElement(d.b.Item,{key:"1"},a.createElement(r.b,{to:"/about"},"about")),a.createElement(d.b.Item,{key:"2"},a.createElement(r.b,{to:"/topics"},"Topics"))))),a.createElement(E.a,{className:"content-layout"},a.createElement(f,{style:{background:"#fff",padding:24,margin:0,minHeight:"100vh"}},this.props.children))))}}]),t}(a.PureComponent);n(176);function g(){return a.createElement("div",null,a.createElement("h2",null,"Home"))}function k(){return a.createElement("div",null,a.createElement("h2",null,"About"))}function I(e){var t=e.match;return a.createElement("div",null,a.createElement("h2",null,"Topics"),a.createElement("ul",null,a.createElement("li",null,a.createElement(r.b,{to:"".concat(t.url,"/rendering")},"Rendering with React")),a.createElement("li",null,a.createElement(r.b,{to:"".concat(t.url,"/components")},"Components")),a.createElement("li",null,a.createElement(r.b,{to:"".concat(t.url,"/props-v-state")},"Props v. State"))),a.createElement(o.a,{path:"".concat(t.path,"/:topicId"),component:N}),a.createElement(o.a,{exact:!0,path:t.path,render:function(){return a.createElement("h3",null,"Please select a topic.")}}))}function N(e){var t=e.match;return a.createElement("div",null,a.createElement("h3",null,t.params.topicId))}var O=function(){return a.createElement(r.a,null,a.createElement(y,null,a.createElement(o.a,{exact:!0,path:"/",component:g}),a.createElement(o.a,{path:"/about",component:k}),a.createElement(o.a,{path:"/topics",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.be41339c.chunk.js.map