(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{11:function(e,t,a){e.exports={nav:"Navbar_nav__1gWkt",item:"Navbar_item__3jhBU",activeLink:"Navbar_activeLink__2cDz0"}},118:function(e,t,a){e.exports={dialog:"DialogsItem_dialog__3YB8l"}},119:function(e,t,a){e.exports={mes:"Message_mes__2SJ4f"}},123:function(e,t,a){e.exports=a.p+"static/media/loader.dc9a5222.svg"},124:function(e,t,a){e.exports={item:"Profile_item__rxeZm"}},152:function(e,t,a){e.exports=a(278)},157:function(e,t,a){},158:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),s=a(116),o=a.n(s),i=(a(157),a(117)),l=(a(158),a(11)),c=a.n(l),u=a(282),m=function(){return r.a.createElement("nav",{className:c.a.nav},r.a.createElement("div",{className:c.a.item},r.a.createElement(u.a,{to:"/profile",activeClassName:c.a.activeLink},"Profile")),r.a.createElement("div",{className:c.a.item},r.a.createElement(u.a,{to:"/users",activeClassName:c.a.activeLink},"Users")),r.a.createElement("div",{className:c.a.item},r.a.createElement(u.a,{to:"/dialogs",activeClassName:c.a.activeLink},"Messages")),r.a.createElement("div",{className:c.a.item},r.a.createElement(u.a,{to:"/news",activeClassName:c.a.activeLink},"News")),r.a.createElement("div",{className:c.a.item},r.a.createElement(u.a,{to:"/music",activeClassName:c.a.activeLink},"Music")),r.a.createElement("div",{className:c.a.item},r.a.createElement(u.a,{to:"/settings",activeClassName:c.a.activeLink},"Settings")))},d=function(){return r.a.createElement("div",null,"News")},p=function(){return r.a.createElement("div",null,"Music")},g=function(){return r.a.createElement("div",null,"Settings")},f=a(35),h=a(5),E={dialogs:[{id:1,name:"\u0410\u0440\u0442\u0451\u043c",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRltvBEVwZUC1nI-q-4QnueJjvDFPOrHqBWig&usqp=CAU"},{id:2,name:"\u0410\u043b\u0451\u043d\u0430",img:"https://topmsg.ru/wp-content/uploads/paren-v-pidzhake-i-kepke.jpg"},{id:3,name:"\u0412\u0430\u043b\u0435\u0440\u0438\u044f",img:"https://pubg.best/data/avatars/l/0/721.jpg?1531143739"},{id:4,name:"\u041a\u0438\u0440\u0438\u043b\u043b",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_RfqA1o6QkxYWBxk_-TCF28EBlasrxI-wWQ&usqp=CAU"},{id:5,name:"\u0422\u0430\u043d\u044f",img:"https://f1.upet.com/A_r2u6uZhnxA_x.jpg"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How is your IT-incubator?"},{id:3,message:"Yo"},{id:4,message:"Yo"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var a=t.newMessageBody;return Object(h.a)(Object(h.a)({},e),{},{messages:[].concat(Object(f.a)(e.messages),[{id:5,message:a}])});default:return e}},b=a(38),_=a.n(b),O=a(118),S=a.n(O),j=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",null,r.a.createElement(u.a,{className:S.a.dialog,to:t},r.a.createElement("img",{src:e.img}),e.name))},P=a(119),y=a.n(P),w=function(e){return r.a.createElement("div",{className:y.a.mes},e.message)},C=a(280),N=a(113),k=a(114),A=a(64),I=a(36),U=a.n(I),T=function(e){e.input;var t=e.meta,a=(e.child,e.element,Object(A.a)(e,["input","meta","child","element"])),n=t.touched&&t.error,s=n?"".concat(U.a.formControl," ").concat(U.a.error):U.a.formControl;return r.a.createElement("div",{className:s},r.a.createElement("div",null,a.children),r.a.createElement("div",null,n&&r.a.createElement("span",null,t.error)))},F=function(e){var t=e.input,a=(e.meta,e.child,e.element,Object(A.a)(e,["input","meta","child","element"]));return r.a.createElement(T,e,r.a.createElement("textarea",Object.assign({},t,a)))},L=function(e){var t=e.input,a=(e.meta,e.child,e.element,Object(A.a)(e,["input","meta","child","element"]));return r.a.createElement(T,e,r.a.createElement("input",Object.assign({},t,a)))},M=function(e){if(!e)return"Field is required"},x=function(e){return function(t){if(t&&t.length>e)return"max length is ".concat(e," symbols")}},D=x(15),G=Object(k.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(N.a,{validate:[M,D],component:F,className:_.a.text,name:"newMessageBody",placeholder:"Enter your message"}),r.a.createElement("button",{className:_.a.button},"\u27a4")))})),B=function(e){var t=e.dialogsPage,a=t.messages.map((function(e){return r.a.createElement(w,{key:e.id,id:e.id,message:e.message})})),n=t.dialogs.map((function(e){return r.a.createElement(j,{key:e.id,name:e.name,id:e.id,img:e.img})}));return e.isAuth?r.a.createElement("div",null,r.a.createElement("div",{className:_.a.dialogs},r.a.createElement("div",{className:_.a.dialogsItems},n),r.a.createElement("div",{className:_.a.messages},a)),r.a.createElement(G,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})):r.a.createElement(C.a,{to:"/login"})},R=a(8),z=a(18),W=a(19),H=a(21),q=a(20),J=function(e){return{isAuth:e.auth.isAuth}},Y=function(e){var t=function(t){Object(H.a)(n,t);var a=Object(q.a)(n);function n(){return Object(z.a)(this,n),a.apply(this,arguments)}return Object(W.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(C.a,{to:"/login"})}}]),n}(r.a.Component);return Object(R.b)(J)(t)},Z=a(7),K=Object(Z.d)(Y,Object(R.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",newMessageBody:e}}(t))}}})))(B),Q=a(122),V=a.n(Q).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"cdeea33e-f7dc-46e4-8742-31d419028410"}}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return V.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},$=function(e){return V.post("follow/".concat(e),{}).then((function(e){return e.data.resultCode}))},ee=function(e){return V.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},te=function(e){return console.warn("Obsolete method. Please profileAPI objet."),ae.getProfile(e)},ae={getProfile:function(e){return V.get("profile/"+e)},getStatus:function(e){return V.get("profile/status/"+e)},updateStatus:function(e){return V.put("profile/status/",{status:e})}},ne=function(){return V.get("auth/me")},re=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return V.post("auth/login/",{email:e,password:t,rememberMe:a})},se=function(){return V.delete("auth/login/")},oe={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},ie=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},le=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(h.a)(Object(h.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(h.a)(Object(h.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USER_COUNT":return Object(h.a)(Object(h.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(h.a)(Object(h.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ue=a(39),me=a.n(ue),de=a(60),pe=a.n(de),ge=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);return r.a.createElement("div",{className:me.a.item},r.a.createElement("div",{className:me.a.item1},a.map((function(t){var a=e.currentPage===t?me.a.selectedPage:me.a.pages;return r.a.createElement("span",{onClick:function(a){return e.onPageChanged(t)},className:a},t)}))),e.users.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(u.a,{to:"/profile/"+t.id},r.a.createElement("img",{src:t.photos.small?t.photos.small:pe.a,className:me.a.photo,alt:"avatar"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,'"u.location.country"'),r.a.createElement("div",null,'"u.location.city"')))})))},fe=a(123),he=a.n(fe),Ee=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:he.a,alt:"preloader"}))},ve=function(e){Object(H.a)(a,e);var t=Object(q.a)(a);function a(){var e;Object(z.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Ee,null):r.a.createElement(ge,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),a}(r.a.Component),be=Object(Z.d)(Object(R.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(le(!0,e)),$(e).then((function(a){0===a&&t(function(e){return{type:"FOLLOW",userID:e}}(e)),t(le(!1,e))}))}},unfollow:function(e){return function(t){t(le(!0,e)),ee(e).then((function(a){0===a&&t(function(e){return{type:"UNFOLLOW",userID:e}}(e)),t(le(!1,e))}))}},getUsers:function(e,t){return function(a){a(ie(!0)),X(e,t).then((function(t){a(ie(!1)),a({type:"SET_USERS",users:t.items}),a({type:"SET_TOTAL_USER_COUNT",count:t.totalCount}),a(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(e))}))}}}))(ve),_e=a(124),Oe=a.n(_e),Se=a(63),je=a.n(Se),Pe=function(e){Object(H.a)(a,e);var t=Object(q.a)(a);function a(){var e;Object(z.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deActivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(W.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,!this.state.editMode&&r.a.createElement("span",{onDoubleClick:this.activateEditMode},this.props.status||"Your status:")),r.a.createElement("div",null,this.state.editMode&&r.a.createElement("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deActivateEditMode,value:this.state.status})))}}]),a}(r.a.Component),ye=function(e){return e.profile?r.a.createElement("div",{className:je.a.item},r.a.createElement("div",null,r.a.createElement("img",{className:je.a.ava,src:e.profile.photos.large?e.profile.photos.large:pe.a,alt:"avatar"})),r.a.createElement("div",{className:je.a.fullName},r.a.createElement("h2",null,e.profile.fullName)),r.a.createElement(Pe,{status:e.status,updateStatus:e.updateStatus}),r.a.createElement("div",null,e.profile.lookingForAJobDescription)):r.a.createElement(Ee,null)},we={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post.",likesCount:11},{id:3,message:"abracadabra",likesCount:999}],profile:null,isFetching:!1,status:""},Ce=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Ne=function(e){return{type:"SET_STATUS",status:e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:4,message:t.newPostBody,likesCount:0};return Object(h.a)(Object(h.a)({},e),{},{posts:[].concat(Object(f.a)(e.posts),[a]),newPostText:""});case"SET_USER_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{profile:t.profile});case"TOGGLE_IS_FETCHING":return Object(h.a)(Object(h.a)({},e),{},{isFetching:t.isFetching});case"SET_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.status});default:return e}},Ae=a(48),Ie=a.n(Ae),Ue=a(83),Te=a.n(Ue),Fe=function(e){return r.a.createElement("div",{className:Te.a.item},r.a.createElement("img",{src:"https://mygamehunter.ru/images/thumbnail/54027/550",alt:"avatar"}),e.message,r.a.createElement("div",{className:Te.a.like},r.a.createElement("span",null,"like")," ",e.likesCount))},Le=x(10),Me=Object(k.a)({form:"profileAddPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(N.a,{validate:[M,Le],component:F,className:Ie.a.text,name:"newPostBody",placeholder:"What's new?"})),r.a.createElement("div",{className:Ie.a.button},r.a.createElement("button",null,"Add post")))})),xe=function(e){var t=e.posts.map((function(e){return r.a.createElement(Fe,{key:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Ie.a.item},r.a.createElement("div",null,r.a.createElement("h3",null,"My posts")),r.a.createElement("div",null,r.a.createElement(Me,{onSubmit:function(t){e.addPost(t.newPostBody)}})),r.a.createElement("div",{className:Ie.a.posts},t))},De=Object(R.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostBody:e}}(t))}}}))(xe),Ge=function(e){return r.a.createElement("div",{className:Oe.a.item},r.a.createElement(ye,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(De,null))},Be=a(283),Re=function(e){Object(H.a)(a,e);var t=Object(q.a)(a);function a(){return Object(z.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=String(this.props.authorisedUserId)),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Ee,null):r.a.createElement(Ge,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),a}(r.a.Component),ze=Object(Z.d)(Y,Be.a,Object(R.b)((function(e){return{profile:e.profilePage.profile,isFetching:e.profilePage.isFetching,status:e.profilePage.status,authorisedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){t(Ce(!0)),te(e).then((function(e){t(Ce(!1)),t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){ae.getStatus(e).then((function(e){t(Ne(e.data))}))}},updateStatus:function(e){return function(t){ae.updateStatus(e).then((function(a){0===a.data.resultCode&&t(Ne(e))}))}}}))(Re),We=a(84),He=a.n(We),qe=function(e){return r.a.createElement("header",{className:He.a.header},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/ru/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png",alt:"avatar"}),r.a.createElement("div",{className:He.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,"  ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(u.a,{to:"/login"},"Login")))},Je=a(31),Ye={id:null,email:null,login:null,isAuth:!1},Ze=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},Ke=function(){return function(e){ne().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.email,s=a.login;e(Ze(n,r,s,!0))}}))}},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(h.a)(Object(h.a)({},e),t.payload);default:return e}},Ve=function(e){Object(H.a)(a,e);var t=Object(q.a)(a);function a(){return Object(z.a)(this,a),t.apply(this,arguments)}return Object(W.a)(a,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return r.a.createElement(qe,this.props)}}]),a}(r.a.Component),Xe=Object(R.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:Ke,logout:function(){return function(e){se().then((function(t){0===t.data.resultCode&&e(Ze(null,null,null,!1))}))}}})(Ve),$e=x(40),et=Object(k.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(N.a,{validate:[M,$e],component:L,name:"email",placeholder:"Email"})),r.a.createElement("div",null,r.a.createElement(N.a,{validate:[M,$e],component:L,name:"password",type:"password",placeholder:"Password"})),r.a.createElement("div",null,r.a.createElement(N.a,{component:L,name:"rememberMe",type:"checkbox"})," remember me"),e.error&&r.a.createElement("div",{className:U.a.formSummaryError},e.error),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),tt=Object(R.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(n){re(e,t,a).then((function(e){if(0===e.data.resultCode)n(Ke());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";n(Object(Je.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?r.a.createElement(C.a,{to:"profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(et,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),at=function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Xe,null),r.a.createElement(m,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(i.a,{path:"/profile/:userId?",render:function(){return r.a.createElement(ze,null)}}),r.a.createElement(i.a,{path:"/users",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(i.a,{path:"/dialogs",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(i.a,{path:"/news",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(i.a,{path:"/music",render:function(){return r.a.createElement(p,null)}}),r.a.createElement(i.a,{path:"/settings",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(i.a,{path:"/login",render:function(){return r.a.createElement(tt,null)}})))},nt=a(281),rt=a(126),st=a(115),ot=Object(Z.c)({profilePage:ke,dialogsPage:v,usersPage:ce,auth:Qe,form:st.a}),it=Object(Z.e)(ot,Object(Z.a)(rt.a));o.a.render(r.a.createElement(nt.a,null,r.a.createElement(R.a,{store:it},r.a.createElement(at,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports={formControl:"FormsControls_formControl__2x2Pb",error:"FormsControls_error__1NuZ5",formSummaryError:"FormsControls_formSummaryError__ytgZ7"}},38:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1PpnL",dialogsItems:"Dialogs_dialogsItems__2CzU1",messages:"Dialogs_messages__2F0gY",dialog:"Dialogs_dialog__27aTc",text:"Dialogs_text__2ddsK",button:"Dialogs_button__3iZil"}},39:function(e,t,a){e.exports={photo:"Users_photo__hC89A",pages:"Users_pages__2yck5",selectedPage:"Users_selectedPage__2rBpW",item1:"Users_item1__2zN0B"}},48:function(e,t,a){e.exports={item:"MyPosts_item__1TYte",posts:"MyPosts_posts__1U0pU",text:"MyPosts_text__2pAJb",button:"MyPosts_button__1PCPA"}},60:function(e,t,a){e.exports=a.p+"static/media/user-profile-icon-png.b3e90dfe.png"},63:function(e,t,a){e.exports={item:"ProfileInfo_item__KyvD9",ava:"ProfileInfo_ava__2Yzge",fullName:"ProfileInfo_fullName__2tX4D",job:"ProfileInfo_job__1vldL"}},83:function(e,t,a){e.exports={item:"Post_item__2Kqhl",like:"Post_like__1JT1c"}},84:function(e,t,a){e.exports={header:"Header_header__3K1r5",loginBlock:"Header_loginBlock__1zz0x"}}},[[152,1,2]]]);
//# sourceMappingURL=main.0f5ed229.chunk.js.map