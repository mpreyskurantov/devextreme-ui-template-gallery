(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{629:function(e,t,n){},631:function(e,t,n){},654:function(e,t,n){},655:function(e,t,n){},661:function(e,t,n){},662:function(e,t,n){},663:function(e,t,n){},664:function(e,t,n){},665:function(e,t,n){},666:function(e,t,n){},667:function(e,t,n){},668:function(e,t,n){},669:function(e,t,n){},671:function(e,t,n){"use strict";n.r(t);n(430),n(442);var s=n(22),a=n.n(s),c=n(281),i=n.n(c),r=(n(629),n(423)),o=n(13),d=n(14);(new(function(){function e(){var t=this;Object(o.a)(this,e),this.resizeObserver=new ResizeObserver((function(e){var t,n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.contentRect&&s.contentRect.height&&window.parent.postMessage({type:"frame-height",height:s.contentRect.height},"*")}}catch(a){n.e(a)}finally{n.f()}})),this.mutationObserver=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes&&(e.target&&t.isValidNode(e.target)?t.subscribe(e.target):e.addedNodes.forEach((function(e){t.isValidNode(e)&&t.subscribe(e)})))}))}))}return Object(d.a)(e,[{key:"isValidNode",value:function(e){return e.classList&&e.classList.contains("content")}},{key:"subscribe",value:function(e){this.mutationObserver.disconnect(),e.style.alignSelf="flex-start",this.resizeObserver.observe(e)}},{key:"listen",value:function(){this.mutationObserver.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1})}}]),e}())).listen();n(630);var l=n(122),u=(n(631),n(424)),j=n.n(u),b=n(145),x=n(65),O=n(9),p=Object(s.createContext)({}),h=function(){return Object(s.useContext)(p)};function m(e){var t=Object(s.useState)({}),n=Object(x.a)(t,2),a=n[0],c=n[1];return Object(O.jsx)(p.Provider,Object(b.a)({value:{navigationData:a,setNavigationData:c}},e))}var f=n(74),v=n.n(f),g=n(109),w={email:"sandra@example.com",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"};function y(e,t){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0,data:w});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Authentication failed"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function I(){return S.apply(this,arguments)}function S(){return(S=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",{isOk:!0,data:w});case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",{isOk:!1});case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function N(e,t){return C.apply(this,arguments)}function C(){return(C=Object(g.a)(v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to create account"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function R(e,t){return B.apply(this,arguments)}function B(){return(B=Object(g.a)(v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to change password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function M(e){return P.apply(this,arguments)}function P(){return(P=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to reset password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function T(e){var t=Object(s.useState)(),n=Object(x.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(!0),r=Object(x.a)(i,2),o=r[0],d=r[1];Object(s.useEffect)((function(){Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:(t=e.sent).isOk&&c(t.data),d(!1);case 5:case"end":return e.stop()}}),e)})))()}),[]);var l=Object(s.useCallback)(function(){var e=Object(g.a)(v.a.mark((function e(t,n){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,n);case 2:return(s=e.sent).isOk&&c(s.data),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),u=Object(s.useCallback)((function(){c()}),[]);return Object(O.jsx)(E.Provider,Object(b.a)({value:{user:a,signIn:l,signOut:u,loading:o}},e))}var E=Object(s.createContext)({}),F=function(){return Object(s.useContext)(E)},L=function(){var e=Object(s.useState)(U()),t=Object(x.a)(e,2),n=t[0],a=t[1],c=Object(s.useCallback)((function(){a(U())}),[]);return Object(s.useEffect)((function(){return W(c),function(){J(c)}}),[c]),n},D=[],q=window.matchMedia("(max-width: 599.99px)"),A=window.matchMedia("(min-width: 600px) and (max-width: 959.99px)"),z=window.matchMedia("(min-width: 960px) and (max-width: 1279.99px)"),V=window.matchMedia("(min-width: 1280px)");[q,A,z,V].forEach((function(e){e.addListener((function(e){e.matches&&D.forEach((function(e){return e()}))}))}));var W=function(e){return D.push(e)},J=function(e){D=D.filter((function(t){return t!==e}))};function U(){return{isXSmall:q.matches,isSmall:A.matches,isMedium:z.matches,isLarge:V.matches}}var G=n(76),H=n(96),X=n.n(H),$=n(100),K=n.n($),Q=n(187),Y=n.n(Q),Z=n(257),_=n.n(Z),ee=(n(654),[{path:"/crm-contact-list",component:function(){var e=[{name:"Robert Reaga",status:1,id:120545,products:[{productId:1,productStatus:1},{productId:2,productStatus:2}],manager:"Sarah Davix",organization:"SV Consult",address:"69 Ruthven St #24, Boston, MA 02121, United States of America",email:"1@2"},{name:"Samuel Browick",status:2,id:120545,products:[{productId:1,productStatus:2},{productId:2,productStatus:1}],manager:"Brett Johnson",organization:"SV Consult",address:"69 Ruthven St #24, Boston, MA 02121, United States of America",email:"2@2"}],t={1:"New",2:"Active"},n={1:"CRM System",2:"Task Management"},c={1:"Lead",2:"Trial sent"},i=Object(s.useState)(!1),r=Object(x.a)(i,2),o=r[0],d=r[1],l=Object(s.useState)(!1),u=Object(x.a)(l,2),j=u[0],b=u[1],p=Object(s.useState)(e[0]),h=Object(x.a)(p,2),m=h[0],f=h[1],v=L(),g=v.isMedium,w=v.isLarge;return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsxs)("div",{className:"view-wrapper",children:[Object(O.jsxs)(X.a,{dataSource:e,height:"100%",onRowClick:function(e){f(e.data),d(!0)},children:[Object(O.jsx)(H.SearchPanel,{visible:!0,width:240,placeholder:"Contact Search"}),Object(O.jsx)(H.Export,{enabled:!0,allowExportSelectedData:!0}),Object(O.jsxs)(H.Toolbar,{children:[Object(O.jsx)(H.Item,{location:"before",children:Object(O.jsx)("div",{className:"grid-header",children:"Contact List"})}),Object(O.jsx)(H.Item,{location:"after",locateInMenu:"auto",widget:"dxButton",options:{text:"Add Contact",icon:"plus",type:"default",stylingMode:"contained"}}),Object(O.jsx)(H.Item,{location:"after",locateInMenu:"auto",showText:"inMenu",widget:"dxButton",options:{text:"Refresh",icon:"refresh"}}),Object(O.jsx)(H.Item,{location:"after",locateInMenu:"auto",children:Object(O.jsx)("div",{className:"separator"})}),Object(O.jsx)(H.Item,{name:"exportButton"}),Object(O.jsx)(H.Item,{location:"after",locateInMenu:"auto",children:Object(O.jsx)("div",{className:"separator"})}),Object(O.jsx)(H.Item,{location:"after",locateInMenu:"auto",showText:"inMenu",widget:"dxButton",options:{text:"Remove",icon:"trash"}}),Object(O.jsx)(H.Item,{name:"searchPanel"})]}),Object(O.jsx)(H.Selection,{selectAllMode:"allPages",showCheckBoxesMode:"always",mode:"multiple"}),Object(O.jsx)(H.Column,{dataField:"name",caption:"Name",hidingPriority:5,minWidth:150}),Object(O.jsx)(H.Column,{dataField:"status",caption:"Status",dataType:"string",cellRender:function(e){return Object(O.jsx)("span",{className:"status status-"+e.data.status,children:t[e.data.status]})},hidingPriority:3,minWidth:100}),Object(O.jsx)(H.Column,{dataField:"id",caption:"ID",hidingPriority:1}),Object(O.jsx)(H.Column,{dataField:"Products",caption:"Products",hidingPriority:0,minWidth:400,cellRender:function(e){return Object(O.jsx)("span",{children:e.data.products.map((function(e,t){return Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[n[e.productId]," "]}),Object(O.jsx)("span",{className:"cloud cloud-"+e.productStatus,children:c[e.productStatus]})]},t)}))})}}),Object(O.jsx)(H.Column,{dataField:"manager",caption:"Manager",hidingPriority:4}),Object(O.jsx)(H.Column,{dataField:"organization",caption:"Organization",hidingPriority:2})]}),Object(O.jsx)("div",{className:"panel "+(j?"pin ":"")+(o?"open":""),children:m&&Object(O.jsxs)("div",{className:"data-wrapper",children:[Object(O.jsxs)(K.a,{children:[Object(O.jsx)($.Item,{location:"before",children:Object(O.jsx)("div",{className:"contact-name",children:m.name})}),Object(O.jsx)($.Item,{location:"before",children:Object(O.jsx)("span",{className:"status status-"+m.status,children:t[m.status]})}),Object(O.jsx)($.Item,{location:"after",widget:"dxButton",visible:w||g,options:{icon:j?"unpin":"pin",onClick:function(){b(!j)}}}),Object(O.jsx)($.Item,{location:"after",widget:"dxButton",options:{icon:"close",onClick:function(){d(!1)}}})]}),Object(O.jsxs)(Y.a,{children:[Object(O.jsxs)("div",{className:"user-info",children:[Object(O.jsx)("div",{className:"photo"}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("div",{children:m.id}),Object(O.jsxs)("div",{children:[Object(O.jsx)("i",{className:"dx-icon-user"})," ",Object(O.jsx)("span",{children:m.manager})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("i",{className:"dx-icon-product"})," ",Object(O.jsx)("span",{children:m.organization})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("i",{className:"dx-icon-email"})," ",Object(O.jsx)("span",{children:m.email})]})]})]}),Object(O.jsx)("div",{children:m.address}),Object(O.jsxs)(K.a,{children:[Object(O.jsx)($.Item,{location:"before",widget:"dxButton",options:{icon:"edit",stylingMode:"outlined",text:"Edit"}}),Object(O.jsx)($.Item,{location:"center",widget:"dxButton",options:{stylingMode:"text",text:"Send email"}}),Object(O.jsx)($.Item,{location:"after",widget:"dxDropDownButton",options:{text:"Action"}})]}),Object(O.jsxs)(_.a,{multiple:!0,collapsible:!0,children:[Object(O.jsx)(Z.Item,{title:"Licenses",children:Object(O.jsxs)("div",{className:"licenses",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"caption",children:"Income"}),Object(O.jsx)("div",{className:"value",children:"$1,650,00"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"caption",children:"Licences"}),Object(O.jsx)("div",{className:"value",children:"1"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"caption",children:"Active Licences"}),Object(O.jsx)("div",{className:"value",children:"1"})]})]})}),Object(O.jsx)(Z.Item,{title:"Opportunities",children:m.products.map((function(e,t){return Object(O.jsxs)("span",{className:"oportunities",children:[Object(O.jsxs)("span",{className:"item",children:[n[e.productId]," "]}),Object(O.jsx)("span",{className:"cloud cloud-"+e.productStatus,children:c[e.productStatus]}),Object(O.jsx)("br",{})]},t)}))}),Object(O.jsx)(Z.Item,{title:"Activities",children:"c"})]})]})]})})]})})}}].map((function(e){return Object(b.a)(Object(b.a)({},e),{},{component:(t=e.component,function(e){var n=e.match.path,c=h().setNavigationData;return Object(s.useEffect)((function(){c({currentPath:n})}),[n,c]),a.a.createElement(t,e)})});var t}))),te=(n(302),n(255),n(343),n(426),n(655),n(661),n(201),n(662),n(47)),ne=n.n(te),se=n(188),ae=n.n(se),ce=n(170),ie=(n(663),function(){var e=Object(G.g)(),t=F().signIn,n=Object(s.useState)(!1),a=Object(x.a)(n,2),c=a[0],i=a[1],r=Object(s.useRef)({}),o=Object(s.useCallback)(function(){var e=Object(g.a)(v.a.mark((function e(n){var s,a,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=r.current,a=s.email,c=s.password,i(!0),e.next=5,t(a,c);case 5:(o=e.sent).isOk||(i(!1),Object(ce.a)(o.message,"error",2e3));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),d=Object(s.useCallback)((function(){e.push("/create-account")}),[e]);return Object(O.jsx)("form",{className:"login-form",onSubmit:o,children:Object(O.jsxs)(ne.a,{formData:r.current,disabled:c,children:[Object(O.jsxs)(te.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:re,children:[Object(O.jsx)(te.RequiredRule,{message:"Email is required"}),Object(O.jsx)(te.EmailRule,{message:"Email is invalid"}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsxs)(te.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:oe,children:[Object(O.jsx)(te.RequiredRule,{message:"Password is required"}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsx)(te.Item,{dataField:"rememberMe",editorType:"dxCheckBox",editorOptions:de,children:Object(O.jsx)(te.Label,{visible:!1})}),Object(O.jsx)(te.ButtonItem,{children:Object(O.jsx)(te.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(O.jsx)("span",{className:"dx-button-text",children:c?Object(O.jsx)(ae.a,{width:"24px",height:"24px",visible:!0}):"Sign In"})})}),Object(O.jsx)(te.Item,{children:Object(O.jsx)("div",{className:"link",children:Object(O.jsx)(l.b,{to:"/reset-password",children:"Forgot password?"})})}),Object(O.jsx)(te.ButtonItem,{children:Object(O.jsx)(te.ButtonOptions,{text:"Create an account",width:"100%",onClick:d})})]})})}),re={stylingMode:"filled",placeholder:"Email",mode:"email"},oe={stylingMode:"filled",placeholder:"Password",mode:"password"},de={text:"Remember me",elementAttr:{class:"form-text"}},le=(n(664),function(e){var t=Object(G.g)(),n=Object(s.useState)(!1),a=Object(x.a)(n,2),c=a[0],i=a[1],r=Object(s.useRef)({}),o=Object(s.useCallback)(function(){var e=Object(g.a)(v.a.mark((function e(n){var s,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=r.current.email,i(!0),e.next=5,M(s);case 5:a=e.sent,i(!1),a.isOk?(t.push("/login"),Object(ce.a)("We've sent a link to reset your password. Check your inbox.","success",2500)):Object(ce.a)(a.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(O.jsx)("form",{className:"reset-password-form",onSubmit:o,children:Object(O.jsxs)(ne.a,{formData:r.current,disabled:c,children:[Object(O.jsxs)(te.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:ue,children:[Object(O.jsx)(te.RequiredRule,{message:"Email is required"}),Object(O.jsx)(te.EmailRule,{message:"Email is invalid"}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsx)(te.ButtonItem,{children:Object(O.jsx)(te.ButtonOptions,{elementAttr:je,width:"100%",type:"default",useSubmitBehavior:!0,children:Object(O.jsx)("span",{className:"dx-button-text",children:c?Object(O.jsx)(ae.a,{width:"24px",height:"24px",visible:!0}):"Reset my password"})})}),Object(O.jsx)(te.Item,{children:Object(O.jsxs)("div",{className:"login-link",children:["Return to ",Object(O.jsx)(l.b,{to:"/login",children:"Sign In"})]})})]})})}),ue={stylingMode:"filled",placeholder:"Email",mode:"email"},je={class:"submit-button"},be=(n(665),function(e){var t=Object(G.g)(),n=Object(s.useState)(!1),a=Object(x.a)(n,2),c=a[0],i=a[1],r=Object(s.useRef)({}),o=Object(s.useCallback)(function(){var e=Object(g.a)(v.a.mark((function e(n){var s,a,c,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=r.current,a=s.email,c=s.password,i(!0),e.next=5,N(a,c);case 5:o=e.sent,i(!1),o.isOk?t.push("/login"):Object(ce.a)(o.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),d=Object(s.useCallback)((function(e){return e.value===r.current.password}),[]);return Object(O.jsx)("form",{className:"create-account-form",onSubmit:o,children:Object(O.jsxs)(ne.a,{formData:r.current,disabled:c,children:[Object(O.jsxs)(te.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:xe,children:[Object(O.jsx)(te.RequiredRule,{message:"Email is required"}),Object(O.jsx)(te.EmailRule,{message:"Email is invalid"}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsxs)(te.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:Oe,children:[Object(O.jsx)(te.RequiredRule,{message:"Password is required"}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsxs)(te.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:pe,children:[Object(O.jsx)(te.RequiredRule,{message:"Password is required"}),Object(O.jsx)(te.CustomRule,{message:"Passwords do not match",validationCallback:d}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsx)(te.Item,{children:Object(O.jsxs)("div",{className:"policy-info",children:["By creating an account, you agree to the ",Object(O.jsx)(l.b,{to:"#",children:"Terms of Service"})," and ",Object(O.jsx)(l.b,{to:"#",children:"Privacy Policy"})]})}),Object(O.jsx)(te.ButtonItem,{children:Object(O.jsx)(te.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(O.jsx)("span",{className:"dx-button-text",children:c?Object(O.jsx)(ae.a,{width:"24px",height:"24px",visible:!0}):"Create a new account"})})}),Object(O.jsx)(te.Item,{children:Object(O.jsxs)("div",{className:"login-link",children:["Have an account? ",Object(O.jsx)(l.b,{to:"/login",children:"Sign In"})]})})]})})}),xe={stylingMode:"filled",placeholder:"Email",mode:"email"},Oe={stylingMode:"filled",placeholder:"Password",mode:"password"},pe={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"},he=function(e){var t=Object(G.g)(),n=Object(s.useState)(!1),a=Object(x.a)(n,2),c=a[0],i=a[1],r=Object(s.useRef)({}),o=Object(G.h)().recoveryCode,d=Object(s.useCallback)(function(){var e=Object(g.a)(v.a.mark((function e(n){var s,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=r.current.password,i(!0),e.next=5,R(s,o);case 5:a=e.sent,i(!1),a.isOk?t.push("/login"):Object(ce.a)(a.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,o]),l=Object(s.useCallback)((function(e){return e.value===r.current.password}),[]);return Object(O.jsx)("form",{onSubmit:d,children:Object(O.jsxs)(ne.a,{formData:r.current,disabled:c,children:[Object(O.jsxs)(te.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:me,children:[Object(O.jsx)(te.RequiredRule,{message:"Password is required"}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsxs)(te.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:fe,children:[Object(O.jsx)(te.RequiredRule,{message:"Password is required"}),Object(O.jsx)(te.CustomRule,{message:"Passwords do not match",validationCallback:l}),Object(O.jsx)(te.Label,{visible:!1})]}),Object(O.jsx)(te.ButtonItem,{children:Object(O.jsx)(te.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(O.jsx)("span",{className:"dx-button-text",children:c?Object(O.jsx)(ae.a,{width:"24px",height:"24px",visible:!0}):"Continue"})})})]})})},me={stylingMode:"filled",placeholder:"Password",mode:"password"},fe={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"};n(429),n(666),n(245),n(667);n(668),n(669);var ve=function(e){var t=e.title,n=e.description,s=e.children;return Object(O.jsx)(Y.a,{height:"100%",width:"100%",className:"with-footer single-card",children:Object(O.jsxs)("div",{className:"dx-card content",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{className:"title",children:t}),Object(O.jsx)("div",{className:"description",children:n})]}),s]})})},ge=function(){return Object(O.jsx)("div",{class:"content",children:Object(O.jsxs)(G.d,{children:[ee.map((function(e){var t=e.path,n=e.component;return Object(O.jsx)(G.b,{exact:!0,path:t,component:n},t)})),Object(O.jsx)(G.a,{to:"/crm-contact-list"})]})})},we=function(){return Object(O.jsxs)(G.d,{children:[Object(O.jsx)(G.b,{exact:!0,path:"/login",children:Object(O.jsx)(ve,{title:"Sign In",children:Object(O.jsx)(ie,{})})}),Object(O.jsx)(G.b,{exact:!0,path:"/create-account",children:Object(O.jsx)(ve,{title:"Sign Up",children:Object(O.jsx)(be,{})})}),Object(O.jsx)(G.b,{exact:!0,path:"/reset-password",children:Object(O.jsx)(ve,{title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email.",children:Object(O.jsx)(le,{})})}),Object(O.jsx)(G.b,{exact:!0,path:"/change-password/:recoveryCode",children:Object(O.jsx)(ve,{title:"Change Password",children:Object(O.jsx)(he,{})})}),Object(O.jsx)(G.a,{to:"/login"})]})};function ye(){var e=F(),t=e.user;return e.loading?Object(O.jsx)(j.a,{visible:!0}):t?Object(O.jsx)(ge,{}):Object(O.jsx)(we,{})}var ke=function(){var e=function(){var e=L();return e.isLarge?"screen-large":e.isMedium?"screen-medium":e.isSmall?"screen-small":"screen-x-small"}();return Object(O.jsx)(l.a,{children:Object(O.jsx)(T,{children:Object(O.jsx)(m,{children:Object(O.jsx)("div",{className:"app ".concat(e),children:Object(O.jsx)(ye,{})})})})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,674)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(ke,{})}),document.getElementById("root")),Ie()}},[[671,1,2]]]);