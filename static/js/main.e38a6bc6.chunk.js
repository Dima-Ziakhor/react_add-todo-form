(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var s=a(10),i=a.n(s),n=a(8),o=a(3),r=a(4),c=a(6),l=a(5),d=a(7),u=a(1),m=a.n(u),p=a(2),h=a.n(p),b=(a(16),a(0)),j=function(e){var t=e.name,a=e.email;return Object(b.jsxs)("div",{className:"todoList__userInfo",children:[Object(b.jsx)("h3",{className:"todoList__userName",children:"Name: ".concat(t)}),Object(b.jsx)("div",{className:"todoList__userEmail",children:"E-mail: ".concat(a)})]})},y=(a(18),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={completed:e.props.todoPrepared.completed},e.changeStatus=function(){e.setState((function(e){return{completed:!e.completed}}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.todoPrepared,t=e.title,a=e.completed,s=e.user;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"todoList__info",children:[Object(b.jsx)("h2",{className:"todoList__title",children:"Task: ".concat(t)}),Object(b.jsxs)("div",{className:h()("todoList__status",{todoList__status__completed:a}),children:[Object(b.jsx)("span",{style:this.state.completed?{color:"green"}:{color:"red"},children:"Completed:"})," ",Object(b.jsx)("input",{type:"checkbox",onChange:this.changeStatus,checked:this.state.completed})]})]}),s&&Object(b.jsx)(j,Object(d.a)({},s))]})}}]),a}(m.a.Component)),g=(a(19),function(e){var t=e.todoList;return Object(b.jsx)("ul",{className:"todoList",children:t.map((function(e){return Object(b.jsx)("li",{className:"todoList__item",children:Object(b.jsx)(y,{todoPrepared:e})},e.id)}))})}),f=(a(20),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),_=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){var t=f.find((function(t){return t.id===e.userId}));return Object(d.a)({user:t||null},e)})),v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={usersCopy:Object(n.a)(f),todosCopy:Object(n.a)(_),todoTitle:"",selectedUserId:0,isSelectUser:!1,isEnterTitle:!1},e.handleValidation=function(){return e.state.todoTitle?e.state.selectedUserId||e.setState({isSelectUser:!0}):e.setState({isEnterTitle:!0}),e.state.selectedUserId&&e.state.todoTitle},e.handleAddTitle=function(t){e.setState({todoTitle:t.target.value,isEnterTitle:!1})},e.handleSelecte=function(t){e.setState({selectedUserId:Number(t.target.value),isSelectUser:!1})},e.handleSubmit=function(t){t.preventDefault(),e.handleValidation()&&e.setState((function(e){return{todoTitle:"",selectedUserId:0,isSelectUser:!1,isEnterTitle:!1,todosCopy:[].concat(Object(n.a)(e.todosCopy),[{userId:e.selectedUserId,id:e.todosCopy.sort((function(e,t){return e.id-t.id}))[e.todosCopy.length-1].id,title:e.todoTitle,completed:!1,user:f.find((function(t){return t.id===e.selectedUserId}))||null}])}}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todoTitle,a=e.selectedUserId,s=e.isSelectUser,i=e.isEnterTitle,n=e.usersCopy,o=e.todosCopy;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"App__form-wrapper",children:Object(b.jsxs)("form",{className:"App__form",onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{className:"App__title",htmlFor:"title",children:["Enter todo title:",Object(b.jsx)("input",{id:"title",className:"App__input-title",type:"text",name:"title",placeholder:"Todo title",onChange:this.handleAddTitle,value:t}),Object(b.jsx)("span",{className:h()("App__error",{"App__error--active":i}),children:"Please enter the title"})]}),Object(b.jsxs)("label",{className:"App__select-user",htmlFor:"users",children:["Select user:",Object(b.jsxs)("select",{className:"App__select",name:"users",id:"users",onChange:this.handleSelecte,value:a,children:[Object(b.jsx)("option",{className:"App__option",value:"0",children:"Choose a user"},"0"),n.map((function(e){return Object(b.jsx)("option",{className:"App__option",value:e.id,children:e.name},e.id)}))]}),Object(b.jsx)("span",{className:h()("App__error",{"App__error--active":s}),children:"Please choose a user"})]}),Object(b.jsx)("button",{className:"App__button",type:"submit",children:"Add"})]})}),Object(b.jsx)("div",{className:"App__todos-wrapper",children:Object(b.jsx)(g,{todoList:o})})]})}}]),a}(m.a.Component),O=v;i.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.e38a6bc6.chunk.js.map