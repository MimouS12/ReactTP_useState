(this.webpackJsonptp1=this.webpackJsonptp1||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),u=(a(10),a(4)),i=a(1);a(11);var o=Object(n.memo)((function(e){var t=e.addTask,a=Object(n.useState)(!0),r=Object(i.a)(a,2),c=r[0],u=r[1],o=Object(n.useState)("Learn "),s=Object(i.a)(o,2),m=s[0],d=s[1],p=Object(n.useState)(0),b=Object(i.a)(p,2),v=b[0],E=b[1],f=Object(n.useState)("IT "),j=Object(i.a)(f,2),O=j[0],g=j[1],k=Object(n.useState)(),y=Object(i.a)(k,2),h=y[0],N=y[1],T=Object(n.useState)("INMA "),C=Object(i.a)(T,2),S=C[0],I=C[1],w=Object(n.useRef)(null),x=Object(n.useRef)(null),A=Object(n.useRef)(null),D=Object(n.useRef)(null);return l.a.createElement("div",null,l.a.createElement("button",{className:"button tog",onClick:function(){u(!c)}},"Ajouter Task (ouvrir formulaire)"),l.a.createElement("div",null,!c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-body"},l.a.createElement("div",{className:"task-elem"},l.a.createElement("label",null,"Titre :"),l.a.createElement("input",{type:"text",name:"title",className:"nomrech",ref:w,value:m,onChange:function(e){return d(e.target.value)}})),l.a.createElement("div",{className:"task-elem"},l.a.createElement("label",null,"Duration :"),l.a.createElement("input",{type:"number",value:v,name:"duration",className:"numrech",onChange:function(e){return E(e.target.value)}})),l.a.createElement("div",{className:"task-elem"},l.a.createElement("label",null,"Description : "),l.a.createElement("input",{type:"text",name:"description",ref:D,value:S,onChange:function(e){return I(e.target.value)}})),l.a.createElement("div",{className:"task-elem "},l.a.createElement("b",null,"Details"),l.a.createElement("div",{className:"type-date"},l.a.createElement("label",null,"Type :"),l.a.createElement("input",{type:"text",name:"type",ref:x,value:O,onChange:function(e){return g(e.target.value)}})),l.a.createElement("div",{className:"type-date"},l.a.createElement("label",null," Date :"),l.a.createElement("input",{type:"date",name:"date",ref:A,onChange:function(e){return N(e.target.value)}}))),l.a.createElement("button",{className:"button add",onClick:function(){t(m,v,{type:O,date:h},S)}},"Add a task")))))}));a(12);var s=function(e){var t=e.id,a=e.title,r=e.duration,c=e.details,u=e.children,o=e.deleteTask,s=e.updateTask,m=Object(n.useState)(!1),d=Object(i.a)(m,2),p=d[0],b=d[1],v=Object(n.useState)(a),E=Object(i.a)(v,2),f=E[0],j=E[1],O=Object(n.useState)(r),g=Object(i.a)(O,2),k=g[0],y=g[1],h=Object(n.useState)(c.type),N=Object(i.a)(h,2),T=N[0],C=N[1],S=Object(n.useState)(c.date),I=Object(i.a)(S,2),w=I[0],x=I[1],A=Object(n.useState)(u),D=Object(i.a)(A,2),L=D[0],M=D[1];return l.a.createElement("div",{className:"form-elem"},p?l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"title",value:f,onChange:function(e){return j(e.target.value)}}),l.a.createElement("input",{type:"number",value:k,name:"duration",onChange:function(e){return y(e.target.value)}}),l.a.createElement("input",{type:"text",value:T,name:"type",onChange:function(e){return C(e.target.value)}}),l.a.createElement("input",{type:"date",value:w,name:"date",onChange:function(e){return x(e.target.value)}}),l.a.createElement("input",{type:"text",value:L,name:"description",onChange:function(e){return M(e.target.value)}}),l.a.createElement("button",{className:"button update",onClick:function(){c.type=T,c.date=w,s(t,f,k,c,L),b(!1)}},"Update a task")):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,a," ( ",r," m) "),c&&l.a.createElement("div",null,c.type," - ",c.date),l.a.createElement("div",null,u),l.a.createElement("div",null,l.a.createElement("button",{className:"button update",onClick:function(){return b(!0)}}," Update "),l.a.createElement("button",{className:"button delete",onClick:function(){return o(t)}}," Delete "))))};var m=function(e){var t=e.tasks,a=e.deleteTask,r=e.updateTask,c=Object(n.useState)(!0),u=Object(i.a)(c,2),o=u[0],m=u[1];return l.a.createElement("div",null,l.a.createElement("button",{className:"button tog",onClick:function(){m(!o)}},"Toggle visibility "),l.a.createElement("div",null,!o&&t.map((function(e){return l.a.createElement(s,{key:e.id,id:e.id,title:e.title,duration:e.duration,details:e.details,deleteTask:a,updateTask:r},e.description)}))))};a(13);var d=function(){var e=Object(n.useState)([{id:"1",title:"Learn HTML",duration:60,details:{type:"IT",date:"2020-03-06"},description:"INMA hello!!!!!!!!!!!!!!"},{id:"2",title:"Learn react",duration:120,details:{type:"IT",date:"2020-03-06"},description:"INMA only  !!!!!!!!"},{id:"3",title:"Learn node",duration:30,details:{type:"IT",date:"2020-03-06"},description:"INMA dream !!!!!!!!!"}]),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"App"},!1,l.a.createElement("div",null,l.a.createElement(o,{addTask:function(e,t,n,l){r([].concat(Object(u.a)(a),[{title:e,duration:t,details:n,description:l}]))}}),l.a.createElement(m,{tasks:a,deleteTask:function(e){var t=a.filter((function(t){return t.id!==e}));r(t)},updateTask:function(e,t,n,l,c){var u=a.map((function(a){return a.id===e?{title:t,duration:n,details:l,description:c}:a}));r(u)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4cee7bb1.chunk.js.map