(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[3],{290:function(e,t,a){e.exports=a.p+"static/media/user-profile-icon-png.b3e90dfe.png"},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(88);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},294:function(e,t,a){e.exports={item:"Profile_item__rxeZm"}},295:function(e,t,a){e.exports={item:"ProfileInfo_item__KyvD9",ava:"ProfileInfo_ava__2Yzge",job:"ProfileInfo_job__1vldL"}},296:function(e,t,a){e.exports={item:"MyPosts_item__1TYte",posts:"MyPosts_posts__1U0pU",text:"MyPosts_text__2pAJb",button:"MyPosts_button__1PCPA"}},297:function(e,t,a){e.exports={item:"Post_item__2Kqhl",like:"Post_like__1JT1c",delete:"Post_delete__15KiY"}},299:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(49),o=a(51),s=a(50),l=a(0),i=a.n(l),u=a(294),c=a.n(u),m=a(295),p=a.n(m),f=a(65),d=a(290),h=a.n(d),b=a(291),v=function(e){var t=Object(l.useState)(!1),a=Object(b.a)(t,2),n=a[0],r=a[1],o=Object(l.useState)(e.status),s=Object(b.a)(o,2),u=s[0],c=s[1];Object(l.useEffect)((function(){c(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: "),i.a.createElement("span",{onDoubleClick:function(){return r(!0)}},e.status||"Your status:")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(u)},value:u})))},E=function(e){var t=e.profile;return i.a.createElement("div",null,t&&i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h2",null,t.fullName)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: ")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills: ")," ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts: ")," ",Object.keys(t.contacts).map((function(e){return i.a.createElement(g,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))))},g=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("b",null,t,": ")," ",a))},P=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=e.isOwner,o=e.savePhoto;return t?i.a.createElement("div",{className:p.a.item},i.a.createElement("div",null,i.a.createElement("img",{className:p.a.ava,src:t.photos.large?t.photos.large:h.a,alt:"avatar"}),r&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&o(e.target.files[0])}})),i.a.createElement(v,{status:a,updateStatus:n}),i.a.createElement(E,{profile:t})):i.a.createElement(f.a,null)},y=a(90),_=a(296),j=a.n(_),O=a(297),k=a.n(O),S=function(e){return i.a.createElement("div",{className:k.a.item},i.a.createElement("img",{src:"https://mygamehunter.ru/images/thumbnail/54027/550",alt:"avatar"}),e.message,i.a.createElement("div",{onClick:function(){e.deletePost&&e.deletePost(e.id)},className:k.a.delete},"Delete post"),i.a.createElement("div",{className:k.a.like},i.a.createElement("span",null,"like")," ",e.likesCount))},w=a(82),A=a(119),C=a(78),I=a(89),N=i.a.memo((function(e){var t=e.posts.map((function(t){return i.a.createElement(S,{key:t.id,id:t.id,message:t.message,likesCount:t.likesCount,deletePost:e.deletePost})}));return i.a.createElement("div",{className:j.a.item},i.a.createElement("div",null,i.a.createElement("h3",null,"My posts")),i.a.createElement("div",null,i.a.createElement(F,{onSubmit:function(t){e.addPost(t.newPostBody)}})),i.a.createElement("div",{className:j.a.posts},t))})),x=Object(C.a)(10),F=Object(A.a)({form:"profileAddPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(w.a,{validate:[C.b,x],component:I.b,className:j.a.text,name:"newPostBody",placeholder:"What's new?"})),i.a.createElement("div",{className:j.a.button},i.a.createElement("button",null,"Add post")))})),J=N,M=a(15),U=Object(M.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(y.a)(t))},deletePost:function(t){e(Object(y.c)(t))}}}))(J),D=function(e){return i.a.createElement("div",{className:c.a.item},i.a.createElement(P,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto}),i.a.createElement(U,null))},T=a(289),Y=a(286),B=function(e){return{isAuth:e.auth.isAuth}},K=a(7),L=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=String(this.props.authorisedUserId)),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(f.a,null):i.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})))}}]),a}(i.a.Component);t.default=Object(K.d)((function(e){var t=function(t){Object(o.a)(l,t);var a=Object(s.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(r.a)(l,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(Y.a,{to:"/login"})}}]),l}(i.a.Component);return Object(M.b)(B)(t)}),T.a,Object(M.b)((function(e){return{profile:e.profilePage.profile,isFetching:e.profilePage.isFetching,status:e.profilePage.status,authorisedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:y.e,getStatus:y.d,updateStatus:y.g,savePhoto:y.f}))(L)}}]);
//# sourceMappingURL=3.63a49935.chunk.js.map