(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/logo.1fa582f8.svg"},54:function(e,t,a){e.exports=a(96)},59:function(e,t,a){},72:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),s=(a(59),a(50)),o=a.n(s),i=(a(34),a(6)),m=a(17),u=a(11),h=a(12),b=a(14),p=a(13),E=a(15),d=a(23),v=a.n(d),y=a(20),f=a.n(y),g=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v.a,{className:"mainJumbo"},l.a.createElement("div",{className:"mainJumboContent"},l.a.createElement("h1",null,"Welcome to EFweb"),l.a.createElement("br",null),l.a.createElement("h4",null,"Where would you like to go?"))),l.a.createElement("div",{className:"main"},l.a.createElement(v.a,{className:"mainJumbos flynnbotBG"},l.a.createElement("div",{className:"mainJumbosCenter"},l.a.createElement("div",{className:"mainJumbosContent"},l.a.createElement("h1",null,"FlynnBot"),l.a.createElement("br",null),l.a.createElement("h4",null,"Try my work-in-progress virtual assistant, FlynnBot"),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/blog"},l.a.createElement(f.a,{href:"/playerpixel"},"Try it out!"))))),l.a.createElement(v.a,{className:"mainJumbos blogBG"},l.a.createElement("div",{className:"mainJumbosCenter"},l.a.createElement("div",{className:"mainJumbosContent"},l.a.createElement("h1",null,"EFweb Blog"),l.a.createElement("br",null),l.a.createElement("h4",null,"Check out my new blog with my tech tutorials"),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/blog"},l.a.createElement(f.a,{href:"/playerpixel"},"Check it out!"))))),l.a.createElement(v.a,{className:"mainJumbos playerpixelBG"},l.a.createElement("div",{className:"mainJumbosCenter"},l.a.createElement("div",{className:"mainJumbosContent"},l.a.createElement("h1",null,"PlayerPixel Development"),l.a.createElement("br",null),l.a.createElement("h4",null,"Check out the development of a new 2d game by AEI Games here"),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/playerpixel"},l.a.createElement(f.a,{href:"/playerpixel"},"Play now!"))))),l.a.createElement(v.a,{className:"mainJumbos cubicleBG"},l.a.createElement("div",{className:"mainJumbosCenter"},l.a.createElement("div",{className:"mainJumbosContent"},l.a.createElement("h1",null,"Cubicle Trial"),l.a.createElement("br",null),l.a.createElement("h4",null,"Try my 3d platformer Cubicle here"),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/cubicle"},l.a.createElement(f.a,{href:"/cubicle"},"Play now!")))))))}}]),t}(l.a.Component),N=a(22),C=a.n(N),j=a(53),w=a.n(j),O=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"article-container"},l.a.createElement(w.a.DiscussionEmbed,{shortname:"EFweb",identifier:this.props.identifier}))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).unityContent=new N.UnityContent("/cubicle/Build/Cubicle for Web Build.json","/cubicle/Build/UnityLoader.js"),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(C.a,{unityContent:this.unityContent}),l.a.createElement(O,{identifier:"cubicle"}))}}]),t}(l.a.Component),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).unityContent=new N.UnityContent("/playerpixel/Build/PlayerPixel for Web Build.json","/playerpixel/Build/UnityLoader.js"),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(C.a,{unityContent:this.unityContent}),l.a.createElement(O,{identifier:"playerpixel"}))}}]),t}(l.a.Component);var S=function(){return l.a.createElement("div",{className:"main text-center"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Blog down for redesign"),l.a.createElement("br",null),l.a.createElement(f.a,{href:"/legacy/blog"},"Click here to go to the old blog"))},B=a(19),J=(a(72),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={value:"",response:""},a.handleChange=a.handleChange.bind(Object(B.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(B.a)(a)),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=this.state.value;this.setState({value:"",response:"Loading..."});var n="https://cors-anywhere.herokuapp.com/http://75.139.196.30:5000/response/"+a,l="",r=new XMLHttpRequest;r.onreadystatechange=function(e){4===r.readyState&&(200===r.status?(console.log("success",r.responseText),l=(l=(l=(l=r.responseText).substring(1,l.length-2)).replace(/(?:\\n)/g,"\n").replace(/(?:\\")/g,'"')).replace(/\\u[\dA-F]{4}/gi,function(e){return String.fromCharCode(parseInt(e.replace(/\\u/g,""),16))}),t.setState({response:l})):(console.warn("error"),t.setState({response:"An error has occurred"})))},r.open("GET",n),r.send(),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"flynnbotFrame"},l.a.createElement("h1",{className:"text-center"},"FlynnBot"),l.a.createElement("div",{className:"flynnbotInput"},l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Type message..."}))),l.a.createElement("div",{className:"flynnbotButtonDiv"},l.a.createElement("input",{className:"flynnbotButton",type:"submit",value:"Submit"})),l.a.createElement("div",{className:"flynnbotResponseDiv"},l.a.createElement("h4",{className:"text-center flynnbotResponse"},this.state.response)))}}]),t}(l.a.Component)),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={value:"",response:""},a.handleChange=a.handleChange.bind(Object(B.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(B.a)(a)),a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=this.state.value;this.setState({value:"",response:"Sending..."}),fetch("https://cors-anywhere.herokuapp.com/http://75.139.196.30:5000/response/"+a,{method:"POST"}).then(function(e){201===e.status?(t.setState({response:'Successfully requested "'+a+'"'}),console.info("Server responded with: "+e.status)):(e.json().then(function(e){t.setState({response:e}),console.info("result is "+e)}),console.warn("Server responded with: "+e.status))}).catch(function(e){t.setState({response:"An error has occurred: "+e})}),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"requestFrame"},l.a.createElement("h1",{className:"text-center"},"Requests"),l.a.createElement("p",{className:"text-center requestDescription"},"Here you can send anonymous requests for questions, messages, etc."),l.a.createElement("div",{className:"flynnbotInput"},l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Type request..."}))),l.a.createElement("div",{className:"flynnbotButtonDiv"},l.a.createElement("input",{className:"flynnbotButton",type:"submit",value:"Send"})),l.a.createElement("div",{className:"flynnbotResponseDiv"},l.a.createElement("h4",{className:"text-center flynnbotResponse"},this.state.response)))}}]),t}(l.a.Component);var F=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"flynnbotApp"},l.a.createElement(J,null),l.a.createElement(L,null)),l.a.createElement(O,{identifier:"flynnbot"}))};var T=function(){return l.a.createElement("div",{className:"main text-center"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Looks like that page doesn't exist..."))},D=a(25),P=a.n(D),q=a(24),A=a.n(q);var G=function(){return l.a.createElement("div",null,l.a.createElement(P.a,{bg:"light",expand:"lg",className:"headerNav"},l.a.createElement(P.a.Brand,null,l.a.createElement(i.c,{to:"/",className:"navBrand"},l.a.createElement("img",{alt:"EFweb Logo",src:o.a,width:"30",height:"30",className:"d-inline-block align-top"}),"  EFweb")),l.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(A.a,{className:"ml-auto"},l.a.createElement(A.a.Link,null,l.a.createElement(i.c,{to:"/cubicle",className:"navLink"},"Cubicle Trial")),l.a.createElement(A.a.Link,null,l.a.createElement(i.c,{to:"/playerpixel",className:"navLink"},"PlayerPixel Development")),l.a.createElement(A.a.Link,null,l.a.createElement(i.c,{to:"/flynnbot",className:"navLink"},"FlynnBot")),l.a.createElement(A.a.Link,null,l.a.createElement(i.c,{to:"/blog",className:"navLink"},"Blog"))))),l.a.createElement("div",{className:"content"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:g}),l.a.createElement(m.a,{path:"/cubicle",component:k}),l.a.createElement(m.a,{path:"/playerpixel",component:x}),l.a.createElement(m.a,{path:"/flynnbot",component:F}),l.a.createElement(m.a,{path:"/blog",component:S}),l.a.createElement(m.a,{component:T}))),l.a.createElement("div",{className:"footer text-center"},l.a.createElement("p",{className:"footerText"},"Copyright \xa9 2019 All rights reserved. ",l.a.createElement("a",{className:"lightBlueLink",href:"https://outmodedchip64.github.io"},"EFweb"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,{basename:""},l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.dd08d90d.chunk.js.map