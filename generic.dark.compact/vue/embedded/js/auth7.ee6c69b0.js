"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[2919],{99660:function(e,t,n){n.d(t,{CN:function(){return l},T4:function(){return u},p6:function(){return i}});var a=n(23142);function l(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function u(e,t){return(0,a.uf)(e,{type:"currency",precision:t||0,currency:"USD"})}function i(e){return(0,a.p6)(new Date(e),"MM/dd/yyyy")}},11267:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(73396),l=n(44870),u=n(87139),i=n(86050),o=n(6224),d=n(68389),r=n(45944),c=n(36657),s=n.n(c),v=n(45903),f=n(99660),p=n(59450),w=n(26898),_=n.n(w);const m={id:"card-notes"},g={class:"input-content"},y={class:"messages-content"},x={class:"message-list"},D={class:"note dx-card"},S={class:"note-title"},U={class:"note-text"};var h=(0,a.aZ)({__name:"card-notes",props:{user:{default:""},contactId:{default:null},items:{default:void 0}},setup(e){const t=e,n=(0,l.iH)(!0),w=(0,l.iH)(t.items),h=(0,l.iH)("");function k(e){if(!e.validationGroup.validate().isValid)return;const n={manager:t.user,date:new Date,text:h.value};w.value.push(n),e.validationGroup.reset()}async function W(){null!=t.contactId&&(n.value=!0,w.value=await(0,p.$f)(t.contactId),n.value=!1)}return(0,a.YP)((()=>t.items),(e=>{e&&e.length>0&&(w.value=e,n.value=!1)})),(0,a.bv)((()=>{t.contactId&&W()})),(e,t)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(r.DxValidationGroup),null,{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.Wm)((0,l.SU)(_()),{visible:n.value,"show-pane":!1,width:"auto",container:"#card-notes",position:{of:"#card-notes"}},null,8,["visible"]),n.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",g,[(0,a.Wm)((0,l.SU)(i.DxTextArea),{label:"New Note","styling-mode":"outlined",value:h.value,"value-change-event":"keyup",onValueChanged:t[0]||(t[0]=e=>h.value=e.value)},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(s()),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(c.DxRequiredRule))])),_:1})])),_:1},8,["value"]),(0,a.Wm)((0,l.SU)(d.DxToolbar),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(d.DxItem),{widget:"dxButton",location:"after",options:{text:"Add",stylingMode:"outlined",type:"default",onClick:k}},null,8,["options"])])),_:1})]),(0,a._)("div",y,[(0,a.Wm)((0,l.SU)(v.DxScrollView),null,{default:(0,a.w5)((()=>[(0,a._)("div",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.value,(e=>((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",S,[(0,a._)("div",null,(0,u.zw)((0,l.SU)(f.p6)(new Date(e.date)))+" - "+(0,u.zw)(e.manager),1),(0,a.Wm)((0,l.SU)(o.DxButton),{icon:"overflow"})]),(0,a._)("div",U,(0,u.zw)(e.text),1)])))),256))])])),_:1})])],64))])])),_:1}))}}),k=n(40089);const W=(0,k.Z)(h,[["__scopeId","data-v-94258e72"]]);var b=W}}]);