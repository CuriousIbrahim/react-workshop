(this["webpackJsonponline-dictionary"]=this["webpackJsonponline-dictionary"]||[]).push([[0],{25:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n.n(i),s=n(15),c=n.n(s),r=(n(25),n(16)),o=n(17),d=n(3),h=n(20),u=n(19),j=n(18),l=n.n(j),b=(n(44),n(45),n(0));n(47);function p(t){return Object(b.jsxs)("form",{className:"Form",onSubmit:t.onSubmit,children:[Object(b.jsx)("input",{type:"text",value:t.word,onChange:t.onChange,name:"word"}),Object(b.jsx)("input",{type:"submit",value:"Search"})]})}function O(){return Object(b.jsx)("h1",{children:"My Dictionary App :)"})}var v=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={wordObject:null,word:"",exists:!0},i.handleInputChange=i.handleInputChange.bind(Object(d.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(d.a)(i)),i}return Object(o.a)(n,[{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n=this.state.word;l.a.get("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(n)).then((function(t){var n=t.data[0];e.setState({wordObject:n,exists:!0})})).catch((function(t){404===t.response.status&&e.setState({exists:!1})}))}},{key:"handleInputChange",value:function(t){var e=t.target;this.setState({word:e.value})}},{key:"render",value:function(){var t,e,n;return this.state.exists?null!==this.state.wordObject?(e=this.state.wordObject,t=Object(b.jsxs)("div",{className:"DictionaryEntry",children:[Object(b.jsx)("h2",{children:e.word}),Object(b.jsxs)("h3",{children:[e.phonetic,"/"]}),Object(b.jsx)("p",{children:e.origin}),Object(b.jsx)("div",{className:"Meanings",children:e.meanings.map((function(t){return Object(b.jsx)("div",{className:"Meaning",children:Object(b.jsx)("p",{children:t.definitions[0].definition})})}))})]})):t=Object(b.jsx)("div",{}):(n=this.state.word,t=Object(b.jsxs)("h1",{children:["Error: The word `",n,"` does not exist!"]})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)(p,{word:this.state.word,onChange:this.handleInputChange,onSubmit:this.handleSubmit}),t]})}}]),n}(a.a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),x()}},[[48,1,2]]]);
//# sourceMappingURL=main.875599aa.chunk.js.map