(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){e.exports=n(42)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(22),r=n.n(l),c=(n(31),n(32),n(33),n(5));function i(){return o.a.createElement("div",{id:"navBar"},o.a.createElement("div",{id:"logo"},o.a.createElement("h2",null,"Shawn Morreau")),o.a.createElement("div",{id:"links"},o.a.createElement(c.b,{to:"/"},"Home"),o.a.createElement(c.b,{to:"/about"},"About"),o.a.createElement(c.b,{to:"/contact"},"Contact Me"),o.a.createElement(c.b,{to:"/blog"},"Blog")))}n(39),n(40);function s(){return o.a.createElement("div",{id:"footer"},o.a.createElement("a",{href:"https://github.com/ShawnMorreau/shawnmorreau.github.io",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"github fa-2x fa fa-github"})),o.a.createElement("span",{className:"callToAction"},"For updates and news follow us on our social media! "))}var u=n(6);n(41);function m(){return o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"Welcome to the underground"),o.a.createElement("p",null," rrebuild"))}function p(){return o.a.createElement("div",{className:"main"},"Ma name is Shawn and I love Jaymee Maaghop oh oh oh oh oh so much!!!!")}var h=n(9),f=n(10),d=n(13),E=n(11),b=n(14);n(20);function v(e){return o.a.createElement("div",null,o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,e.title),o.a.createElement("p",null,e.content),o.a.createElement("p",null,e.id)),o.a.createElement("button",{onClick:function(){e.deletePost(e.id)}},"X"))}var g=n(12),w=n(25),y=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={postDetails:{title:"",content:""}},n.updateValue=function(e){var t=e.target.name,a=e.target.value;n.setState((function(e){return{postDetails:Object(w.a)({},e.postDetails,Object(g.a)({},t,a))}}))},n.handleChange=function(e){e.preventDefault(),n.props.createNewPost({title:n.state.postDetails.title,content:n.state.postDetails.content}),n.setState({postDetails:{title:"",content:""}})},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"BlogInput"},o.a.createElement("form",null,o.a.createElement("label",null,"Title:",o.a.createElement("input",{type:"text",name:"title",value:this.state.postDetails.title,onChange:this.updateValue})),o.a.createElement("br",null),o.a.createElement("label",null,"Content:",o.a.createElement("input",{type:"text",name:"content",value:this.state.postDetails.content,onChange:this.updateValue})),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Submit",onClick:this.handleChange})))}}]),t}(o.a.Component),j=(n(21),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={posts:[]},n.getLastIndexOfPosts=function(){return n.state.posts[n.state.posts.length-1]},n.createNewPost=function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("api/blog/add",t).then((function(e){return e.json()})).then((function(e){return n.setState({posts:e})}))},n.deletePost=function(e){var t=n.state.posts.filter((function(t){return t.id!==e})),a={method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e})};fetch("api/blog",a).then(n.setState({posts:t}))},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/blog/").then((function(e){return e.json()})).then((function(t){return e.setState({posts:t})}))}},{key:"render",value:function(){var e=this,t=this.state.posts.map((function(t,n){return o.a.createElement(v,{key:n,id:t.id,title:t.title,content:t.content,deletePost:e.deletePost})}));return o.a.createElement(o.a.Fragment,null,t,o.a.createElement(y,{createNewPost:this.createNewPost}))}}]),t}(o.a.Component));function O(){return o.a.createElement("div",{className:"main"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/"},"component=",m),o.a.createElement(u.a,{path:"/about"},"component=",p),o.a.createElement(u.a,{path:"/contact"},"component=",p),o.a.createElement(u.a,{path:"/blog"},"component=",j)))}var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement("hr",null),o.a.createElement(O,null),o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(c.a,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.31b79318.chunk.js.map