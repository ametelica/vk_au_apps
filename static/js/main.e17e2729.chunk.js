(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){e.exports=a(440)},440:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(127),l=a.n(c),o=a(129),i=a.n(o),s=a(187),m=a(188),d=a(197),u=a(189),h=a(86),E=a(198),f=a(2),v=(a(221),a(190)),p=function(e){return r.a.createElement(f.Panel,{id:e.id},r.a.createElement(f.PanelHeader,null,"ActiveUsers"),r.a.createElement(f.FixedLayout,{vertical:"top"},r.a.createElement(f.HorizontalScroll,null,r.a.createElement(f.Tabs,{theme:"header",type:"buttons"},r.a.createElement(f.TabsItem,{"data-to":"home",onClick:e.go,selected:"home"===e.appState.activePanel},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(f.TabsItem,{"data-to":"info",onClick:e.go,selected:"info"===e.appState.activePanel},"\u0418\u043d\u0444\u043e")))),r.a.createElement(f.Div,null,"\u0422\u0443\u0442 \u0442\u0435\u043b\u043e"),e.fetchedUser&&r.a.createElement(f.Group,{title:""},r.a.createElement(f.ListItem,{before:e.fetchedUser.photo_200?r.a.createElement(f.Avatar,{src:e.fetchedUser.photo_200}):null,description:e.fetchedUser.city&&e.fetchedUser.city.title?e.fetchedUser.city.title:""},"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name))),r.a.createElement(f.Group,{title:"\u041c\u0435\u043d\u044e"},r.a.createElement(f.Div,null,r.a.createElement(f.Button,{level:"secondary",onClick:e.go,"data-to":"info"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))))},y=a(191),b=a.n(y),g=a(128),S=a.n(g),P=Object(f.platform)(),C=function(e){return r.a.createElement(f.Panel,{id:e.id},r.a.createElement(f.PanelHeader,{left:r.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},P===f.IOS?r.a.createElement(b.a,null):r.a.createElement(S.a,null))},"\u0422\u0443\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2"),r.a.createElement(f.Div,null,"\u0422\u0443\u0442 \u0442\u0435\u043b\u043e 2"))},k=a(192),U=a.n(k),I=a(193),w=a.n(I),T=a(194),j=a.n(T),H=a(195),O=a.n(H),x=a(196),V=a.n(x),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={money:[],items:[],achievements:[],activePanel:"home",fetchedUser:null,popout:null,activeStory:"user"},a.onStoryChange=a.onStoryChange.bind(Object(h.a)(a)),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"loadData",value:function(e){var t=this;fetch("http://activeusers.ru/app_api.php").then(function(e){return e.json()}).then(function(a){var n={};n[e]=a,t.setState(n)}).catch(function(){alert("\u041e\u0448\u0438\u0431\u043a\u0430!")})}},{key:"componentDidMount",value:function(){var e=this;v.a.send("VKWebAppGetUserInfo",{}).then(function(t){return e.setState({fetchedUser:t.data})})}},{key:"render",value:function(){return r.a.createElement(f.Epic,{activeStory:this.state.activeStory,tabbar:r.a.createElement(f.Tabbar,null,r.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"user"===this.state.activeStory,"data-story":"user",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(U.a,null)),r.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"shop"===this.state.activeStory,"data-story":"shop",text:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"},r.a.createElement(w.a,null)),r.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages",text:"\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430"},r.a.createElement(j.a,null)),r.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"rates"===this.state.activeStory,"data-story":"rates",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433\u0438"},r.a.createElement(O.a,null)),r.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"more"===this.state.activeStory,"data-story":"more",text:"\u0415\u0449\u0451"},r.a.createElement(V.a,null)))},r.a.createElement(f.View,{id:"user",activePanel:"home"},r.a.createElement(p,{id:"home",go:this.go,appState:this.state,fetchedUser:this.state.fetchedUser}),r.a.createElement(C,{id:"info",go:this.go})),r.a.createElement(f.View,{id:"discover",activePanel:"discover"},r.a.createElement(f.Panel,{id:"discover"},r.a.createElement(f.PanelHeader,null,"Discover"))),r.a.createElement(f.View,{id:"messages",activePanel:"messages"},r.a.createElement(f.Panel,{id:"messages"},r.a.createElement(f.PanelHeader,null,"Messages"))),r.a.createElement(f.View,{id:"notifications",activePanel:"notifications"},r.a.createElement(f.Panel,{id:"notifications"},r.a.createElement(f.PanelHeader,null,"Notifications"))),r.a.createElement(f.View,{id:"more",activePanel:"more"},r.a.createElement(f.Panel,{id:"more"},r.a.createElement(f.PanelHeader,null,"More"))))}}]),t}(r.a.Component);i.a.send("VKWebAppInit",{}),i.a.subscribe(function(e){return console.log(e)}),l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.e17e2729.chunk.js.map