(this["webpackJsonpmovies-scores"]=this["webpackJsonpmovies-scores"]||[]).push([[0],{102:function(e){e.exports=JSON.parse('{"account":{"eng":"Account","heb":"\u05de\u05e9\u05ea\u05de\u05e9"},"accountUpdatePageTitle":{"eng":"Account Update"},"ascending":{"eng":"Ascending"},"cancel":{"eng":"Cancel"},"date":{"eng":"Date"},"delete":{"eng":"Delete"},"deleteUser":{"eng":"Delete user"},"deleteUserDialogText":{"eng":"Are you sure you want to delete this user?"},"detailsError":{"eng":"Something is wrong with the details"},"descending":{"eng":"Descending"},"email":{"eng":"Email"},"emailError":{"eng":"Email allready taken"},"firstName":{"eng":"First Name"},"firstScoreMessage":{"eng":"Be the first to rate this movie"},"footerMessage":{"eng":"This is an application for giving scores to movies which will be stored on a mongoDb instance. Using Material-ui and TMDB API to supply the movies."},"genres":{"eng":"Genres"},"home":{"eng":"Home"},"lastName":{"eng":"Last Name"},"login":{"eng":"Login"},"loginPageTitle":{"eng":"Login Page"},"logout":{"eng":"Logout"},"mainPage":{"eng":"Main Page"},"mainPageTitle":{"eng":"Movies Score"},"max":{"eng":"Maximum"},"management":{"eng":"Management"},"min":{"eng":"Minimum"},"movies":{"eng":"Movies"},"muiLogo":{"eng":"Material-UI Logo"},"name":{"eng":"Name"},"needToLogin":{"eng":"You need to login in order to do this"},"page":{"eng":"Page"},"pageNotFoundTitle":{"eng":"Page not found"},"pageNotFound":{"eng":"Were sorry, but it looks like the page you\'re trying to reach a page that doesn\'t exist yet, and probably never will. How about going back to the Main Page and trying to find what ever it is you were looking for from there?"},"pageNotFoundMobile":{"eng":"Go back to the Main Page"},"password":{"eng":"Password"},"query":{"eng":"Query"},"releaseYear":{"eng":"Release Year"},"reset":{"eng":"Reset"},"score":{"eng":"Score"},"scoreCountMessage":{"eng":"People have rated this movie"},"scores":{"eng":"Scrores"},"search":{"eng":"Search"},"searchOptions":{"eng":"Search options"},"searchBy":{"eng":"Search by"},"serverError":{"eng":"Server error"},"signUp":{"eng":"Sign up"},"signUpPageTitle":{"eng":"Sign Up Page"},"sortBy":{"eng":"Sort By"},"tmdbLogo":{"eng":"TMDB Logo"},"update":{"eng":"Update"},"userDosentExist":{"eng":"Credentials do not match"},"year":{"eng":"Year"}}')},112:function(e){e.exports=JSON.parse('["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy","History","Horror","Music","Mystery","Romance","Science Fiction","TV Movie","Thriller","War","Western"]')},131:function(e,t,a){e.exports=a(195)},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),u=a(6),i=a.n(u),l=a(8),s=a(17),m=a(20),p=a.n(m),g=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/users",t);case 3:return a=e.sent,n=a.data,e.abrupt("return",{data:n});case 8:return e.prev=8,e.t0=e.catch(0),e.t0.toString().includes("400")&&(r={status:400}),e.t0.toString().includes("409")&&(r={status:409}),e.t0.toString().includes("500")&&(r={status:500}),e.abrupt("return",r);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=Object(l.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage,a=t.token,e.next=4,p.a.delete("/api/user",{headers:{Authorization:"Bearer ".concat(a)}});case 4:return n=e.sent,r=n.status,e.abrupt("return",204===r?{}:{status:500});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.toString().includes("500")?{status:500}:{});case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),f=Object(l.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage,a=t.token,e.next=4,p.a.get("/api/user",{headers:{Authorization:"Bearer ".concat(a)}});case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),E=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.prev=1,e.next=4,p.a.post("/api/login",{email:a,password:n});case 4:return r=e.sent,c=r.data,e.abrupt("return",{data:c});case 9:return e.prev=9,e.t0=e.catch(1),e.t0.toString().includes("401")&&(o={status:401}),e.t0.toString().includes("500")&&(o={status:500}),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage,n=a.token,e.next=4,p.a.patch("/api/user",t,{headers:{Authorization:"Bearer ".concat(n)}});case 4:return r=e.sent,c=r.data,r.status,e.abrupt("return",{data:c});case 10:return e.prev=10,e.t0=e.catch(0),e.t0.toString().includes("400")&&(o={status:400}),e.t0.toString().includes("409")&&(o={status:409}),e.t0.toString().includes("500")&&(o={status:500}),e.abrupt("return",o);case 16:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),b=a(62),h=a(14),O=Object(n.createContext)(),x=function(e){var t=localStorage.token,a=Object(n.useState)({}),c=Object(s.a)(a,2),o=c[0],u=c[1],m=Object(n.useState)(!!t),p=Object(s.a)(m,2),x=p[0],k=p[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,f();case 3:a=e.sent,u(a),k(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var j=function(e){if(e){var t=e.token;localStorage.setItem("token",t),u(e)}},C=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return a=e.sent,n=a.data,r=a.status,n&&j(n),e.abrupt("return",{data:n,status:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return a=e.sent,n=a.data,r=a.status,e.abrupt("return",n?j(n):r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return t=e.sent,a=t.status,u({}),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return a=e.sent,n=a.data,r=a.status,e.abrupt("return",n?u(n):r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return x?r.a.createElement(b.HashLoader,null):r.a.createElement(O.Provider,Object.assign({value:{user:o,login:C,logout:function(){Object(h.navigate)("/"),localStorage.removeItem("token"),u({})},signUp:y,deleteUser:w,updateUser:S}},e))},k=function(){return Object(n.useContext)(O)},j=a(224),C=a(227),y=a(197),w=a(228),S=a(199),F=a(229),N=a(230),T=a(106),M=a.n(T),P=a(107),B=a.n(P),U=a(102),D=function(e){return U[e].eng},L=Object(j.a)({list:{width:250}}),Y=function(e){var t=e.open,a=e.setOpen,n=L(),c=[{text:D("home"),icon:r.a.createElement(M.a,null),clickHandler:function(){return Object(h.navigate)("/")}},{text:D("account"),icon:r.a.createElement(B.a,null),clickHandler:function(){return Object(h.navigate)("/account")}}],o=function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&a(!t)};return r.a.createElement(C.a,{open:t,onClose:o},r.a.createElement(y.a,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("div",{className:n.list,onClick:o,onKeyDown:o},r.a.createElement(w.a,null,c.map((function(e){var t=e.text,a=e.icon,n=e.clickHandler;return r.a.createElement(S.a,{button:!0,key:t,onClick:n},r.a.createElement(F.a,null,a),r.a.createElement(N.a,{primary:t}))}))))))},A=a(232),V=a(233),H=a(234),R=a(49),W=a(109),I=a.n(W),J=a(231),G=function(){var e=k().user,t=e&&Object.keys(e).length>0&&e.constructor===Object,a=k().logout;return t?r.a.createElement(J.a,{color:"inherit",onClick:a},D("logout")):r.a.createElement(J.a,{color:"inherit",onClick:function(){return Object(h.navigate)("/login")}},D("login"))},z=Object(j.a)((function(e){return{root:{flexGrow:1},toolbar:{backgroundColor:"green"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),q=function(e){var t=e.setOpen,a=e.title,n=z();return r.a.createElement("div",{className:n.root},r.a.createElement(A.a,{position:"sticky"},r.a.createElement(V.a,{className:n.toolbar},r.a.createElement(H.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return t(!0)}},r.a.createElement(I.a,null)),r.a.createElement(R.a,{variant:"h6",className:n.title,id:"title"},a),r.a.createElement(G,null))))},K=function(){return r.a.createElement(R.a,{component:"div",id:"footerContainer"},r.a.createElement("img",{src:"/images/TMDBLogo.svg",alt:D("tmdbLogo")}),r.a.createElement("span",null,D("footerMessage")),r.a.createElement("img",{src:"/images/MuiLogo.svg",alt:D("muiLogo")}))},Q=function(e){var t=e.Content,a=e.title,c=Object(n.useState)(!1),o=Object(s.a)(c,2),u=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,u&&r.a.createElement(Y,{open:u,setOpen:i}),r.a.createElement("div",{id:"innerPageContainer"},r.a.createElement(q,{setOpen:i,title:a}),r.a.createElement(t,null),r.a.createElement(K,null)))},$=a(235),_=a(236),X=a(237),Z=a(238),ee=a(239),te=a(240),ae=function(){var e=k(),t=e.user.userDetails,a=(t=void 0===t?{}:t).firstName,c=t.lastName,o=t.email,u=e.deleteUser,m=Object(n.useState)(!1),p=Object(s.a)(m,2),g=p[0],d=p[1],f=Object(n.useState)(!1),E=Object(s.a)(f,2),v=E[0],b=E[1],O=function(){b(!1),d(!1)},x=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:if(500!==e.sent){e.next=5;break}return e.abrupt("return",b(!0));case 5:Object(h.navigate)("/");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Q,{title:D("account"),Content:function(){return r.a.createElement($.a,{id:"accountPage"},r.a.createElement(R.a,{variant:"h4",id:"title"},D("management")),r.a.createElement("div",{id:"detailsContainer"},r.a.createElement(R.a,null,"".concat(D("firstName"),": ").concat(a)),r.a.createElement(R.a,null,"".concat(D("lastName"),": ").concat(c)),r.a.createElement(R.a,null,"".concat(D("email"),": ").concat(o))),r.a.createElement("div",{id:"buttonsContainer"},r.a.createElement(J.a,{id:"updateButton",onClick:function(){return Object(h.navigate)("/account/update")}},D("update")),r.a.createElement(J.a,{id:"deleteButton",onClick:function(){return d(!g)}},D("delete")),r.a.createElement(_.a,{open:g,onClose:O},r.a.createElement(X.a,null,D("deleteUser")),r.a.createElement(Z.a,null,v&&r.a.createElement(R.a,{id:"deleteUserServerErrorMessageContainer"},D("serverError")),r.a.createElement(ee.a,null,D("deleteUserDialogText"))),r.a.createElement(te.a,null,r.a.createElement(J.a,{onClick:O},D("cancel")),r.a.createElement(J.a,{onClick:x,autoFocus:!0},D("delete"))))))}})},ne=a(22),re=a(241),ce=function(e){var t=e.initialValues,a=void 0===t?{}:t,n=e.onSubmit,c=e.Fields,o=e.Buttons;return r.a.createElement("div",{id:"formTemplate"},r.a.createElement(ne.c,{initialValues:a,onSubmit:n},r.a.createElement(ne.b,null,r.a.createElement(re.a,{id:"formGroupTemplate"},r.a.createElement(c,null),r.a.createElement(o,null)))))},oe=function(e,t){var a=t.target;e(a.name,a.value)},ue=a(260),ie=function(){var e=k(),t=e.user.userDetails,a=t.firstName,c=t.lastName,o=t.email,u=e.updateUser,m=Object(n.useState)(!1),p=Object(s.a)(m,2),g=p[0],d=p[1],f=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",Object(h.navigate)("/account"));case 5:e.t0=a,e.next=400===e.t0?8:409===e.t0?10:500===e.t0?12:14;break;case 8:return d(D("detailsError")),e.abrupt("break",15);case 10:return d(D("emailError")),e.abrupt("break",15);case 12:return d(D("serverError")),e.abrupt("break",15);case 14:alert("Unkown error has occurred, please try again later");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(ne.d)().setFieldValue,t=function(t){oe(e,t)};return r.a.createElement($.a,{id:"accountFieldsContainer"},r.a.createElement(R.a,{id:"errorMessageContainer"},g),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("firstName"),": ")),r.a.createElement(ue.a,{name:"firstName",defaultValue:a,onChange:t})),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("lastName"),": ")),r.a.createElement(ue.a,{name:"lastName",defaultValue:c,onChange:t})),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("email"),": ")),r.a.createElement(ue.a,{name:"email",defaultValue:o,onChange:t})),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("password"),": ")),r.a.createElement(ue.a,{name:"password",type:"password",onChange:t})))},v=function(){return r.a.createElement(J.a,{type:"submit",id:"updateButton"},D("update"))};return r.a.createElement(Q,{title:D("accountUpdatePageTitle"),Content:function(){return r.a.createElement($.a,{id:"accountUpdatePageContainer"},r.a.createElement(ce,{Fields:E,Buttons:v,onSubmit:f,initialValues:{firstName:a,lastName:c,email:o}}))}})},le=a(244),se=a(262),me=a(261),pe=a(245),ge=a(246),de=a(247),fe=function(){var e=k().login,t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(),m=Object(s.a)(u,2),p=m[0],g=m[1],d=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(a);case 2:if(n=t.sent,r=n.data,c=n.status,r){t.next=11;break}if(401!==c){t.next=8;break}return t.abrupt("return",g(D("userDosentExist")));case 8:if(500!==c){t.next=10;break}return t.abrupt("return",g(D("serverError")));case 10:return t.abrupt("return",g(D("serverError")));case 11:Object(h.navigate)("/");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(e){var t=e.field;return r.a.createElement(ue.a,Object.assign({},t,{variant:"outlined",label:D("email")}))},E=function(e){var t=e.field;return r.a.createElement(le.a,{variant:"outlined"},r.a.createElement(se.a,null,D("password")),r.a.createElement(me.a,Object.assign({},t,{type:c?"text":"password",endAdornment:r.a.createElement(pe.a,{position:"end"},r.a.createElement(H.a,{onClick:function(){return o(!c)},edge:"end"},c?r.a.createElement(ge.a,null):r.a.createElement(de.a,null))),labelWidth:70})))};return r.a.createElement(ce,{Fields:function(){return r.a.createElement("div",{id:"fields"},p&&r.a.createElement(R.a,{id:"errorMessage"},p),r.a.createElement(ne.a,{component:f,name:"email"}),r.a.createElement(ne.a,{component:E,name:"password"}))},Buttons:function(){return r.a.createElement("div",{id:"buttonsContainer"},r.a.createElement(J.a,{type:"submit"},D("login")),r.a.createElement(J.a,{onClick:function(){return Object(h.navigate)("/sign-up")}},D("signUp")))},onSubmit:d,initialValues:{email:"",password:""}})},Ee=function(){return r.a.createElement(Q,{Content:function(){return r.a.createElement($.a,{id:"loginPageContentContainer"},r.a.createElement(fe,null))},title:D("loginPageTitle")})},ve=a(257),be=a(248),he=a(258),Oe=function(e){var t=e.labelText,a=e.formControlId,n=void 0===a?"":a,c=e.Component;return r.a.createElement(le.a,{id:n},r.a.createElement(se.a,null,t),r.a.createElement(c,null))},xe=a(112),ke=function(){for(var e=Object(ne.d)(),t=e.setFieldValue,a=e.values,n=a.score,c=n.min,o=n.max,u=a.sortBy,i=a.genres,l=a.releaseYear,s=l.min,m=l.max,p=e.values,g=function(e){oe(t,e),console.log(p)},d=[],f=0;f<11;f++)d.push(f);for(var E=[],v=1900;v<2501;v++)E.push(v);var b=d.filter((function(e){return!o||e<o})),h=d.filter((function(e){return!c||e>c})),O=E.filter((function(e){return!m||e<m})),x=E.filter((function(e){return!s||e>s}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{id:"scoreTitle"},D("score")+":"),r.a.createElement("div",{id:"scoreFieldsContainer"},r.a.createElement(Oe,{labelText:D("min"),Component:function(){return r.a.createElement(ve.a,{name:"score.min",onChange:g,value:c||0},b.map((function(e){return r.a.createElement(be.a,{key:"minScore".concat(e),value:e},e)})))}}),r.a.createElement(Oe,{labelText:D("max"),Component:function(){return r.a.createElement(ve.a,{name:"score.max",onChange:g,value:o||10},h.map((function(e){return r.a.createElement(be.a,{key:"maxScore".concat(e),value:e},e)})))}})))),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{id:"releaseYearTitle"},D("releaseYear")+":"),r.a.createElement("div",{id:"releaseYearFieldsContainer"},r.a.createElement(Oe,{labelText:D("min"),Component:function(){return r.a.createElement(ve.a,{name:"releaseYear.min",onChange:g,value:s||1900},O.map((function(e){return r.a.createElement(be.a,{key:"minReleaseYear".concat(e),value:e},e)})))}}),r.a.createElement(Oe,{labelText:D("max"),Component:function(){return r.a.createElement(ve.a,{name:"releaseYear.max",onChange:g,value:m||2500},x.map((function(e){return r.a.createElement(be.a,{key:"maxReleaseYear".concat(e),value:e},e)})))}})))),r.a.createElement(Oe,{labelText:D("genres"),formControlId:"genreSelectorContainer",Component:function(){return r.a.createElement(ve.a,{id:"genreSelector",renderValue:function(e){return e.join(", ")},name:"genres",multiple:!0,onChange:g,value:i||[]},xe.map((function(e){return r.a.createElement(be.a,{key:e,value:e},r.a.createElement(he.a,{checked:i.includes(e)}),r.a.createElement(N.a,{primary:e}))})))}}),r.a.createElement(Oe,{labelText:D("sortBy"),Component:function(){return r.a.createElement(ve.a,{name:"sortBy",onChange:g,value:u||"desc"},r.a.createElement(be.a,{value:"-releaseYear"},"".concat(D("releaseYear")," ").concat(D("descending"))),r.a.createElement(be.a,{value:"releaseYear"},"".concat(D("releaseYear")," ").concat(D("ascending"))),r.a.createElement(be.a,{value:"-averageScoreObj.average"},"".concat(D("score")," ").concat(D("descending"))),r.a.createElement(be.a,{value:"averageScoreObj.average"},"".concat(D("score")," ").concat(D("ascending"))))}}))},je=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/movies",t);case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Ce=a(81),ye=Object(n.createContext)(),we=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(),m=Object(s.a)(u,2),p=m[0],g=m[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Ce);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,je(t);case 3:a=e.sent,g(a),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ye.Provider,Object.assign({value:{getMovies:d,gettingRecords:c,movies:p,queryDefault:Ce}},e))},Se=function(){return Object(n.useContext)(ye)},Fe=function(){var e=Object(ne.d)(),t=e.submitForm,a=e.resetForm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{onClick:t}," ",D("search")," "),r.a.createElement(J.a,{onClick:a}," ",D("reset")," "))},Ne=function(){var e=Se(),t=e.getMovies,a=e.queryDefault,n=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement($.a,{id:"filtersContainer"},r.a.createElement(R.a,null,D("searchOptions")),r.a.createElement(ce,{Fields:ke,onSubmit:n,Buttons:Fe,initialValues:a}))},Te=a(82),Me=a(250),Pe=a(251),Be=a(252),Ue=a(253),De=a(254),Le=a(255),Ye=a(113),Ae=a.n(Ye),Ve=a(249),He=a(116),Re=a(83),We=a(256),Ie=a(259),Je=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/movie-score/".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage,n=a.token,e.next=4,p.a.patch("/api/movie-score",t,{headers:{Authorization:"Bearer ".concat(n)}});case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(e){var t=e.movie,a=t.averageScoreObj,c=(a=void 0===a?{}:a).average,o=a.count,u=t.name,m=Object(n.useState)(c),p=Object(s.a)(m,2),g=p[0],d=p[1],f=Object(n.useState)(o),E=Object(s.a)(f,2),v=E[0],b=E[1],h=Object(n.useState)(null),O=Object(s.a)(h,2),x=O[0],j=O[1],C=k().user,y=Object.keys(C).length>0,w=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.persist(),void 0!==g){e.next=9;break}return e.next=4,Je(u);case 4:a=e.sent,n=a.average,r=a.count,d(n),b(r);case 9:j(x?null:t.currentTarget);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return",alert(D("needToLogin")));case 2:return e.next=4,Ge({name:u,score:t.target.value});case 4:a=e.sent,n=a.average,r=a.count,d(n),b(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Boolean(x),N=function(){return r.a.createElement("div",{id:"messageContainer"},r.a.createElement(R.a,null,v+" "+D("scoreCountMessage")),r.a.createElement(R.a,null,D("score")+": "+g))},T=function(){return r.a.createElement(R.a,{id:"messageContainer"},D("firstScoreMessage"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae.a,{onClick:w}),r.a.createElement(Ve.a,{open:F,anchorEl:x,transition:!0},(function(e){var t=e.TransitionProps;return r.a.createElement(He.a,Object.assign({},t,{timeout:350}),r.a.createElement(Re.a,{id:"scorePoper"},v>0?r.a.createElement(N,null):r.a.createElement(T,null),r.a.createElement(We.a,{component:"fieldset",borderColor:"transparent"},r.a.createElement(Ie.a,{max:10,onChange:S,name:u}))))})))},qe=function(){var e=Se(),t=e.gettingRecords,a=e.movies,n=function(){return r.a.createElement(Me.a,{id:"recordsListContainer"},r.a.createElement(Pe.a,{id:"recordsList"},r.a.createElement(Be.a,{id:"recordsListHeader"},r.a.createElement(Ue.a,null,r.a.createElement(De.a,null,D("movies")),r.a.createElement(De.a,null,D("genres")),r.a.createElement(De.a,null,D("releaseYear")),r.a.createElement(De.a,{id:"scoresHeadCell"},D("scores")))),r.a.createElement(Le.a,null,a&&a.map((function(e,t){var a=e.name,n=e.averageScoreObj,c=e.genre_ids,o=e.releaseYear,u="";return c.forEach((function(e,t){if(t===c.length-1)return u+="".concat(Te[e]);u+="".concat(Te[e],"/")})),r.a.createElement(Ue.a,{key:t},r.a.createElement(De.a,{key:a},a),r.a.createElement(De.a,null,u),r.a.createElement(De.a,null,o),r.a.createElement(De.a,{id:"showScoresColumn"},r.a.createElement(ze,{averageScoreObj:n,movie:e,name:a})))})))))};return t?r.a.createElement(b.HashLoader,null):r.a.createElement(n,null)},Ke=function(){return r.a.createElement($.a,{id:"mainPageContentContainer"},r.a.createElement(we,null,r.a.createElement(Ne,null),r.a.createElement(qe,null)))},Qe=function(){return r.a.createElement(Q,{Content:Ke,title:D("mainPageTitle")})},$e=function(){var e=window.innerWidth<600?"pageNotFoundMobile":"pageNotFound",t=D(e),a=D("mainPage"),n=t.split(a),c=function(){return r.a.createElement(R.a,{id:"textContainer",variant:"h6"},n[0],r.a.createElement(h.A,{href:"/"},a),n[1])};return r.a.createElement($.a,{id:"pageNotFoundContentContainer"},r.a.createElement(c,null))},_e=function(){return r.a.createElement(Q,{title:D("pageNotFoundTitle"),Content:$e})},Xe=function(e){var t=e.Page,a=k().user;return a&&0!==!Object.keys(a).length&&a.constructor===Object?r.a.createElement(t,null):(Object(h.navigate)("/login"),r.a.createElement(Ee,null))},Ze=function(){var e=k().signUp,t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],u=function(){var t=Object(l.a)(i.a.mark((function t(a,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(a);case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",Object(h.navigate)("/account"));case 5:t.t0=r,t.next=400===t.t0?8:409===t.t0?10:500===t.t0?12:14;break;case 8:return o(D("detailsError")),t.abrupt("break",15);case 10:return o(D("emailError")),t.abrupt("break",15);case 12:return o(D("serverError")),t.abrupt("break",15);case 14:alert("Unkown error has occurred, please try again later");case 15:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement(ce,{Fields:function(){var e=Object(ne.d)().setFieldValue,t=function(t){oe(e,t)};return r.a.createElement($.a,{id:"signUpFieldsContainer"},r.a.createElement(R.a,{id:"errorMessageContainer"},c),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("firstName"),": ")),r.a.createElement(ue.a,{name:"firstName",onChange:t})),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("lastName"),": ")),r.a.createElement(ue.a,{name:"lastName",onChange:t})),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("email"),": ")),r.a.createElement(ue.a,{name:"email",onChange:t})),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,"".concat(D("password"),": ")),r.a.createElement(ue.a,{name:"password",type:"password",onChange:t})))},Buttons:function(){return r.a.createElement(J.a,{type:"submit",id:"signUpButton"},D("signUp"))},onSubmit:u})},et=function(){return r.a.createElement(Q,{Content:function(){return r.a.createElement($.a,{id:"signUpPageConetentContainer"},r.a.createElement(Ze,null))},title:D("signUpPageTitle")})},tt={"/":function(){return r.a.createElement(Qe,null)},"/login":function(){return r.a.createElement(Ee,null)},"/sign-up":function(){return r.a.createElement(et,null)},"/account":function(){return r.a.createElement(Xe,{Page:ae})},"/account/update":function(){return r.a.createElement(Xe,{Page:ie})},"/*":function(){return r.a.createElement(_e,null)}},at=function(){var e=Object(h.useRoutes)(tt);return r.a.createElement(x,null,e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(193),a(194);o.a.render(r.a.createElement(at,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e){e.exports=JSON.parse('{"sortBy":"averageScoreObj.average","score":{"min":0,"max":10},"releaseYear":{"min":1900,"max":2500},"genres":[]}')},82:function(e){e.exports=JSON.parse('{"12":"Adventure","14":"Fantasy","16":"Animation","18":"Drama","27":"Horror","28":"Action","35":"Comedy","36":"History","37":"Western","53":"Thriller","80":"Crime","99":"Documentary","878":"Science Fiction","9648":"Mystery","10402":"Music","10749":"Romance","10751":"Family","10752":"War","10770":"TV Movie"}')}},[[131,1,2]]]);
//# sourceMappingURL=main.693dada6.chunk.js.map