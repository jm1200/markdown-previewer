(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,n,t){e.exports=t(84)},47:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(32),i=t.n(r),c=(t(47),t(33)),l=t(34),s=t(40),m=t(35),u=t(41),d=t(88),p=t(86),w=t(87),h=t(49);h.setOptions({breaks:!0,gfm:!0});var v='\n# Welcome to Markdown viewer  \n\n## Subheading   \n`<div>Code</div>`\n[Link to free code camp! ](https://www.freecodecamp.com)\n```\n//multiline code block\nfunction multiline(){\n  return {\n    console.log("This is mulitline code")\n  }\n}\n```\n**bold** text\n> this is a block quote!\n- list\n  - item1\n  - item2\n  - item3\n\n  ![picture of superman](https://vignette.wikia.nocookie.net/superman/images/b/b1/Superman_Action_976_Gary_Frank.png/revision/latest?cb=20170501140424)\n',k=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).state={markdown:v},t.handleChange=function(e){this.setState({markdown:e})},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:"textInput"},o.a.createElement("p",null,"Markdown Previewer"),o.a.createElement(d.a,{controlId:"markdown"},o.a.createElement(p.a,null,"Enter markdown here:"),o.a.createElement(w.a,{componentClass:"textarea",id:"editor",value:this.state.markdown,onChange:function(n){return e.handleChange(n.target.value)}}))),o.a.createElement("div",{id:"output"},o.a.createElement("p",null,"HTML output"),o.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:h(this.state.markdown)}})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.88bf6897.chunk.js.map