(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={input:"Filter_input__1iLPn"}},14:function(t,e,n){t.exports={section:"Section_section__3LcM6"}},2:function(t,e,n){t.exports={form:"ContactForm_form__XsTLm",button:"ContactForm_button__3Z86s",input:"ContactForm_input__2v5bx",container:"ContactForm_container__pLfgY",label:"ContactForm_label__2CvMd"}},21:function(t,e,n){},3:function(t,e,n){t.exports={item:"ContactList_item__2YB4o",text:"ContactList_text__3VvoB",button:"ContactList_button__2Mo4o",container:"ContactList_container__3d-tz",list:"ContactList_list__8SY7M"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(10),i=n.n(o),s=(n(21),n(15)),l=n(5),u=n(6),b=n(8),m=n(7),d=n(11),h=n.n(d),j=n(12),f=n(2),p=n.n(f),v=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.contactValidation=function(){var e=t.state,n=e.name,a=e.number;return t.props.contacts.find((function(t){return n===t.name}))?(alert("".concat(n," is already in contacts")),!0):""===n||""===a?(alert("Please enter all data"),!0):void 0},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.contactValidation()||(t.props.onSubmit(a,c),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:p.a.container,children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(a.jsxs)("label",{className:p.a.label,children:["Name",Object(a.jsx)("input",{className:p.a.input,type:"text",name:"name",value:this.state.name,placeholder:"\u0421ontact name",onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{className:p.a.input,type:"tel",name:"number",value:this.state.number,placeholder:"\u0421ontact number",onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:p.a.button,children:"Add contact"})]})})}}]),n}(c.Component),_=n(13),x=n.n(_);var C=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:x.a.input,type:"text",value:e,onChange:n,placeholder:" Fined contacts by name"})})},O=n(3),g=n.n(O);function N(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("div",{className:g.a.container,children:Object(a.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:g.a.item,children:[Object(a.jsxs)("p",{className:g.a.text,children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:g.a.button,children:"Delete"})]},e)}))})})}var y=n(14),S=n.n(y);var L=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:S.a.section,children:[Object(a.jsx)("h1",{children:e}),n]})},k=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:h.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}}))},t.makeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.visibleContacts();return Object(a.jsx)(L,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(v,{onSubmit:this.addContact,contacts:n}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(C,{value:e,onChange:this.makeFilter}),Object(a.jsx)(N,{contacts:c,onDeleteContact:this.deleteContact})]})})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.858973cb.chunk.js.map