"use strict";(self["webpackChunkvue_ts4"]=self["webpackChunkvue_ts4"]||[]).push([[92],{44629:function(t,a,e){e.d(a,{Z:function(){return f}});var n=e(73396),i=e(44870),s=e(87139),l=e(4702),o=e(6224),d=e(99660),c=e(85219);const u={id:"activities-list"},r={class:"activity"},v={class:"name"},m={key:0};var p=(0,n.aZ)({__name:"contact-activities",props:{isLoading:{type:Boolean,default:!0},showBy:{type:Boolean,default:!1},items:null},setup(t){const a=t;return(t,e)=>((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(c.Z,{"is-loading":a.isLoading,"container-selector":"#activities-list"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxList),{class:"activities-list",items:a.items,scrollingEnabled:!1},{item:(0,n.w5)((({data:t})=>[(0,n._)("div",null,[(0,n._)("div",r,[(0,n._)("div",v,(0,s.zw)(t.name),1),(0,n._)("div",{class:(0,s.C_)(["date",{by:a.showBy}])},[(0,n._)("span",null,(0,s.zw)((0,i.SU)(d.p6)(new Date(t.date))),1),a.showBy?((0,n.wg)(),(0,n.iD)("span",m,"by")):(0,n.kq)("",!0),(0,n._)("span",null,(0,s.zw)(t.manager),1)],2),(0,n.Wm)((0,i.SU)(o.DxButton),{icon:"overflow"})])])])),_:1},8,["items"])])),_:1},8,["is-loading"])]))}});const g=p;var f=g},23373:function(t,a,e){e.r(a),e.d(a,{default:function(){return S}});var n=e(73396),i=e(44870),s=e(53898),l=e(6224),o=e(85219),d=e(88707),c=e(12081);const u=t=>((0,n.dD)("data-v-cfb99edc"),t=t(),(0,n.Cn)(),t),r={id:"card-opportunies"},v={class:"opportunities-block"},m=u((()=>(0,n._)("div",{class:"dx-form-group-caption"},"Active",-1))),p={class:"opportunities-container"},g={class:"opportunities"},f={class:"opportunities-block"},w=u((()=>(0,n._)("div",{class:"dx-form-group-caption"},"Closed",-1))),_={class:"opportunities-container"},x={class:"opportunities"};var D=(0,n.aZ)({__name:"card-opportunities",props:{contactId:{default:null}},setup(t){const a=t,e=(0,i.iH)([]),u=(0,i.iH)([]),D=(0,i.iH)(!1);async function y(){if(!a.contactId)return;D.value=!0;const t=(0,d.mj)(a.contactId),n=(0,d.dY)(a.contactId);[e.value,u.value]=await Promise.all([t,n]),D.value=!1}function W(){(0,s.Z)("Add opportunity event")}return(0,n.bv)((()=>{y()})),(t,a)=>((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(o.Z,{"is-loading":D.value,"container-selector":"#card-opportunies"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxButton),{text:"Add Opportunity",icon:"add",width:"300",height:"60","styling-mode":"outlined",type:"default",class:"add-tile",onClick:W}),(0,n._)("div",null,[(0,n._)("div",v,[m,(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.value,(t=>((0,n.wg)(),(0,n.iD)("div",g,[(0,n.Wm)(c["default"],{data:t},null,8,["data"])])))),256))])]),(0,n._)("div",f,[w,(0,n._)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.value,(t=>((0,n.wg)(),(0,n.iD)("div",x,[(0,n.Wm)(c["default"],{data:t},null,8,["data"])])))),256))])])])])),_:1},8,["is-loading"])]))}}),y=e(40089);const W=(0,y.Z)(D,[["__scopeId","data-v-cfb99edc"]]);var S=W},26793:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var n=e(73396),i=e(44870),s=e(87139),l=e(69119),o=e.n(l),d=e(85219);const c={id:"card-tasks"};var u=(0,n.aZ)({__name:"card-tasks",props:{isLoading:{type:Boolean,default:!0},manager:{default:""},tasks:{default:()=>[]}},setup(t){const a=t,e=(0,n.Fl)((()=>a.tasks.filter((t=>!!t.status&&!!t.priority))));return(t,u)=>((0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(d.Z,{"is-loading":a.isLoading,"container-selector":"#card-tasks"},{default:(0,n.w5)((()=>[a.isLoading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)((0,i.SU)(o()),{key:0,"data-source":(0,i.SU)(e),"column-auto-width":!0,"selection-filter":["done","=",!0]},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxSelection),{deferred:!0,"show-check-boxes-mode":"always",mode:"multiple"}),(0,n.Wm)((0,i.SU)(l.DxColumn),{dataField:"text",caption:"Subject","hiding-priority":3}),(0,n.Wm)((0,i.SU)(l.DxColumn),{dataField:"date",dataType:"date",caption:"Due Date","hiding-priority":1}),(0,n.Wm)((0,i.SU)(l.DxColumn),{caption:"Assigned To",cellTemplate:"assignTemplate","hiding-priority":0},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,s.zw)(a.manager),1)])),_:1})])),_:1},8,["data-source"]))])),_:1},8,["is-loading"])]))}}),r=e(40089);const v=(0,r.Z)(u,[["__scopeId","data-v-06702cf2"]]);var m=v},12081:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var n=e(73396),i=e(87139),s=e(44870),l=e(99660);const o={class:"name"},d={class:"product-info"},c={class:"total"},u={class:"owner"},r=(0,n.Uk)(" Owner: "),v={class:"owner-name"};var m=(0,n.aZ)({__name:"opportunity-tile",props:{data:{default:()=>({})}},setup(t){const a=t;return(t,e)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,(0,i.zw)(a.data.name),1),(0,n._)("div",d,[(0,n.Uk)("Products: "+(0,i.zw)(a.data.products)+", total: ",1),(0,n._)("span",c,(0,i.zw)((0,s.SU)(l.T4)(a.data.total)),1)]),(0,n._)("div",u,[r,(0,n._)("span",v,(0,i.zw)(a.data.manager),1)])],64))}}),p=e(40089);const g=(0,p.Z)(m,[["__scopeId","data-v-08b54e0e"]]);var f=g},18092:function(t,a,e){e.r(a),e.d(a,{default:function(){return P}});var n=e(73396),i=e(44870),s=e(32583),l=e(70369),o=e(44629),d=e(87139),c=e(86050),u=e(6224),r=e(68389),v=e(99660),m=e(88707),p=e(85219);const g={class:"notes",id:"card-notes"},f={class:"input-content"},w={class:"notes-content"},_={class:"note dx-card"},x={class:"note-title"},D={class:"note-text"};var y=(0,n.aZ)({__name:"card-notes",props:{contactName:{default:""},contactId:{default:null}},setup(t){const a=t,e=(0,i.iH)(!0),s=(0,i.iH)([]),l=(0,i.iH)("");function o(){l.value=""}function y(){if(""===l.value)return;const t={manager:a.contactName,date:new Date,text:l.value};s.value.push(t),o()}async function W(){null!=a.contactId&&(e.value=!0,s.value=await(0,m.$f)(a.contactId),e.value=!1)}return(0,n.bv)((()=>{W()})),(t,a)=>((0,n.wg)(),(0,n.iD)("div",g,[(0,n.Wm)(p.Z,{"is-loading":e.value,"container-selector":"#card-notes"},{default:(0,n.w5)((()=>[(0,n._)("div",f,[(0,n.Wm)((0,i.SU)(c.DxTextArea),{label:"New Note",stylingMode:"outlined",value:l.value,onValueChanged:a[0]||(a[0]=t=>l.value=t.value)},null,8,["value"]),(0,n.Wm)((0,i.SU)(r.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxItem),{location:"after",widget:"dxButton",options:{text:"Add",stylingMode:"outlined",type:"default",onClick:y}},null,8,["options"])])),_:1})]),(0,n._)("div",w,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.value,(t=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",x,[(0,n._)("div",null,(0,d.zw)((0,i.SU)(v.p6)(new Date(t.date)))+" - "+(0,d.zw)(t.manager),1),(0,n.Wm)((0,i.SU)(u.DxButton),{icon:"overflow"})]),(0,n._)("div",D,(0,d.zw)(t.text),1)])))),256))])])),_:1},8,["is-loading"])]))}}),W=e(40089);const S=(0,W.Z)(y,[["__scopeId","data-v-1fe3238c"]]);var U=S,b=e(16453);const k={class:"messages",id:"card-messages"},h={class:"input-content"},I={class:"messages-content"},Z={class:"message-container"},z={class:"avatar"},B={class:"message dx-card"},H={class:"message-title"},C={class:"left-title"},L={class:"subject"},N={class:"message-text"};var T=(0,n.aZ)({__name:"card-messages",props:{isLoading:{type:Boolean,default:!0},contactName:{default:""},messages:{default:()=>[]}},setup(t){const a=t,e=(0,n.Fl)((()=>[...a.messages])),s=(0,i.iH)(""),l=(0,i.iH)("");function o(){l.value="",s.value=""}function m(t){return t.split(" ").map((t=>t[0])).join("")}function g(t){return t.replace("{username}",a.contactName)}function f(){if(""===s.value||""===l.value)return;const t={subject:l.value,text:s.value,manager:a.contactName,date:new Date};e.value.push(t),o()}return(a,o)=>((0,n.wg)(),(0,n.iD)("div",k,[(0,n.Wm)(p.Z,{"is-loading":t.isLoading,"container-selector":"#card-messages"},{default:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n.Wm)((0,i.SU)(b.DxTextBox),{label:"Subject","styling-mode":"outlined",value:l.value,onValueChanged:o[0]||(o[0]=t=>l.value=t.value)},null,8,["value"]),(0,n.Wm)((0,i.SU)(c.DxTextArea),{label:"Message","styling-mode":"outlined",value:s.value,onValueChanged:o[1]||(o[1]=t=>s.value=t.value)},null,8,["value"]),(0,n.Wm)((0,i.SU)(r.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxItem),{location:"before",widget:"dxButton",options:{text:"Attach File",stylingMode:"contained",type:"default",icon:"attach"}}),(0,n.Wm)((0,i.SU)(r.DxItem),{location:"after",widget:"dxButton",options:{text:"Send",stylingMode:"outlined",type:"default",onClick:f}},null,8,["options"])])),_:1})]),(0,n._)("div",I,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(e),(t=>((0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("div",z,(0,d.zw)(m(t.manager)),1),(0,n._)("div",B,[(0,n._)("div",H,[(0,n._)("div",C,[(0,n._)("div",L,(0,d.zw)(t.subject),1),(0,n._)("div",null,(0,d.zw)((0,i.SU)(v.p6)(new Date(t.date)))+" - "+(0,d.zw)(t.manager),1)]),(0,n.Wm)((0,i.SU)(u.DxButton),{icon:"overflow"})]),(0,n._)("div",N,(0,d.zw)(g(t.text)),1)])])))),256))])])),_:1},8,["is-loading"])]))}});const A=(0,W.Z)(T,[["__scopeId","data-v-2765d617"]]);var j=A,M=e(26793),Y=e(23373);const F={class:"dx-card"};var K=(0,n.aZ)({__name:"contact-cards",props:{contactId:{default:null},isLoading:{type:Boolean,default:!0},contactName:{default:""},tasks:{default:()=>[]},activities:{default:()=>[]}},setup(t){const a=t,e=(0,i.iH)(!0),d=(0,i.iH)([]);async function c(){a.contactId&&(e.value=!0,d.value=await(0,m.vz)(a.contactId),e.value=!1)}return(0,n.bv)((()=>{c()})),(t,c)=>((0,n.wg)(),(0,n.iD)("div",F,[(0,n.Wm)((0,i.SU)(s.DxTabPanel),{"show-nav-buttons":!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxItem),{title:"Tasks"},{default:(0,n.w5)((()=>[(0,n.Wm)(M["default"],{tasks:a.tasks,"is-loading":a.isLoading,manager:a.contactName},null,8,["tasks","is-loading","manager"])])),_:1}),(0,n.Wm)((0,i.SU)(l.DxItem),{title:"Activities"},{default:(0,n.w5)((()=>[(0,n.Wm)(o.Z,{"is-loading":a.isLoading,items:a.activities,"show-by":!0},null,8,["is-loading","items"])])),_:1}),(0,n.Wm)((0,i.SU)(l.DxItem),{title:"Opportunities"},{default:(0,n.w5)((()=>[(0,n.Wm)(Y["default"],{"contact-id":a.contactId},null,8,["contact-id"])])),_:1}),(0,n.Wm)((0,i.SU)(l.DxItem),{title:"Notes"},{default:(0,n.w5)((()=>[(0,n.Wm)(U,{"contact-name":a.contactName,"contact-id":a.contactId},null,8,["contact-name","contact-id"])])),_:1}),(0,n.Wm)((0,i.SU)(l.DxItem),{title:"Messages",badge:d.value?.length+""},{default:(0,n.w5)((()=>[(0,n.Wm)(j,{"contact-name":a.contactName,messages:d.value,isLoading:e.value},null,8,["contact-name","messages","isLoading"])])),_:1},8,["badge"])])),_:1})]))}});const O=K;var P=O}}]);