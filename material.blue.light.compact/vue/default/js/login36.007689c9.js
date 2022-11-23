"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[1433],{24754:function(e,t,a){a.d(t,{d:function(){return l},r:function(){return n}});const l=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],n=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},99660:function(e,t,a){a.d(t,{CN:function(){return n},T4:function(){return o},p6:function(){return i}});var l=a(23142);function n(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function o(e,t){return(0,l.uf)(e,{type:"currency",precision:t||0,currency:"USD"})}function i(e){return(0,l.p6)(new Date(e),"MM/dd/yyyy")}},70823:function(e,t,a){a.d(t,{Z:function(){return u}});var l=a(73396),n=a(44870),o=a(83835),i=a.n(o),s=(0,l.aZ)({__name:"card-menu",props:{items:null,visible:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(i()),{items:t.items,visible:t.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const d=s;var u=d},99080:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(73396),n=a(44870),o=a(64399),i=a(19647),s=a(67121),d=a(34646),u=(0,l.aZ)({__name:"form-popup",props:{title:null,isVisible:{type:Boolean,default:!1}},emits:["save","update:isVisible"],setup(e,{emit:t}){const a=e,u=(0,n.iH)(),r=(0,n.iH)(a.isVisible),c=(0,n.iH)();(0,l.YP)((()=>a.isVisible),(e=>{r.value=e}));const m=()=>{d.Z.validateGroup(u.value?.instance).isValid&&t("save")},v=()=>{r.value=!1,t("update:isVisible",!1)};return(e,t)=>r.value?((0,l.wg)(),(0,l.j4)((0,n.SU)(o.DxPopup),{key:0,ref_key:"popup",ref:c,title:a.title,visible:r.value,"full-screen":(0,n.SU)(i.Br).isSmall||(0,n.SU)(i.Br).isXSmall,width:"auto",height:"auto",onOptionChanged:t[0]||(t[0]=()=>c.value?.instance?.repaint())},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(o.DxToolbarItem),{widget:"dxButton",toolbar:"bottom",location:"after",options:{text:"Save",stylingMode:"outlined",type:"default",onClick:m}},null,8,["options"]),(0,l.Wm)((0,n.SU)(o.DxToolbarItem),{widget:"dxButton",toolbar:"bottom",location:"after",options:{text:"Cancel",stylingMode:"text",type:"default",onClick:v}},null,8,["options"]),(0,l.Wm)((0,n.SU)(s.Gf),{ref_key:"validationGroup",ref:u},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3},512)])),_:3},8,["title","visible","full-screen"])):(0,l.kq)("",!0)}});const r=u;var c=r},86490:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var l=a(73396),n=a(44870),o=a(87139),i=a(30183),s=a(6224),d=a(86050),u=a(71793),r=a(68389),c=a(94969),m=a(34774),v=a(85219),p=a(63402),f=a(50585),x=a(7002),w=(0,l.aZ)({__name:"form-datebox",props:{modelValue:null,isEditing:{type:Boolean},label:null},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,o=(0,l.Fl)({get(){return a.modelValue},set(e){t("update:modelValue",e)}});return(e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(f.DxDateBox),(0,l.dG)({label:a.label,modelValue:(0,n.SU)(o),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,n.dq)(o)?o.value=e:null),"read-only":!a.isEditing,placeholder:"MM/dd/y","display-format":"MM/dd/y"},(0,n.SU)(x.T)),null,16,["label","modelValue","read-only"]))}});const D=w;var S=D;const k=e=>((0,l.dD)("data-v-27482eac"),e=e(),(0,l.Cn)(),e),g={id:"task-form"},_=k((()=>(0,l._)("span",{class:"dx-form-group-caption"},"Details",-1))),U={class:"task-editor-field"},b={class:"task-editor-field"};var W=(0,l.aZ)({__name:"task-form",props:{isCreateMode:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},data:{default:()=>({...u.nJ})},contentByScreen:null,validationGroup:{default:void 0}},setup(e){const t=e,a=(0,n.iH)(t.isCreateMode),f=(0,n.iH)(t.data);(0,l.YP)((()=>t.data),(e=>{f.value=e}));let w=null;function D(){w={...f.value},a.value=!0}function k({validationGroup:e}){e.validate().isValid&&(a.value=!1)}function W(){w&&(f.value=w),a.value=!1}return(w,y)=>((0,l.wg)(),(0,l.iD)("div",g,[e.isCreateMode?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)((0,n.SU)(r.DxToolbar),{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(r.DxItem),{location:"before"},{default:(0,l.w5)((()=>[_])),_:1}),(0,l.Wm)((0,n.SU)(r.DxItem),{location:"after","locate-in-menu":"after",visible:!a.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.DxButton),{text:"Edit",icon:"edit","styling-mode":"outlined",type:"default",visible:!t.isLoading,onClick:D},null,8,["visible"])])),_:1},8,["visible"]),(0,l.Wm)((0,n.SU)(r.DxItem),{location:"after","locate-in-menu":"after",visible:a.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.DxButton),{text:"Save","styling-mode":"outlined",type:"default",onClick:k})])),_:1},8,["visible"]),(0,l.Wm)((0,n.SU)(r.DxItem),{location:"after","locate-in-menu":"after",visible:a.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(s.DxButton),{text:"Cancel",onClick:W,"styling-mode":"text"})])),_:1},8,["visible"])])),_:1})),(0,l.Wm)(v.Z,{"is-loading":e.isLoading,"container-selector":"#task-form"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.DxForm),{"form-data":f.value,class:(0,o.C_)(["plain-styled-form",{"view-mode":!a.value}]),"label-mode":"floating"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.DxItem),{visible:e.isCreateMode,"col-span":2},{default:(0,l.w5)((()=>[(0,l.Wm)(p.Z,{label:"Subject",modelValue:f.value.text,"onUpdate:modelValue":y[0]||(y[0]=e=>f.value.text=e),"is-editing":a.value},null,8,["modelValue","is-editing"])])),_:1},8,["visible"]),(0,l.Wm)((0,n.SU)(c.DxGroupItem),{"col-count":2},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.DxColCountByScreen),{xs:t.contentByScreen.xs,sm:t.contentByScreen.sm,md:2,lg:2},null,8,["xs","sm"]),(0,l.Wm)((0,n.SU)(c.DxItem),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(p.Z,{label:"Company",modelValue:f.value.company,"onUpdate:modelValue":y[1]||(y[1]=e=>f.value.company=e),"is-editing":a.value,validators:[]},null,8,["modelValue","is-editing"])])),_:1}),(0,l.Wm)((0,n.SU)(c.DxItem),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(p.Z,{label:"Assigned to",modelValue:f.value.owner,"onUpdate:modelValue":y[2]||(y[2]=e=>f.value.owner=e),"is-editing":a.value},null,8,["modelValue","is-editing"])])),_:1}),(0,l.Wm)((0,n.SU)(c.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(m.DxSelectBox),(0,l.dG)({label:"Priority",modelValue:f.value.priority,"onUpdate:modelValue":y[3]||(y[3]=e=>f.value.priority=e),items:(0,n.SU)(u.Lu),"read-only":!a.value,"field-template":"field","item-template":"item"},(0,n.SU)(x.m)),{field:(0,l.w5)((()=>[(0,l._)("div",U,[(0,l.Wm)(i.Z,{"is-field":!0,"show-bar":!0,value:f.value.priority},null,8,["value"])])])),item:(0,l.w5)((({data:e})=>[(0,l.Wm)(i.Z,{"show-bar":!0,value:e},null,8,["value"])])),_:1},16,["modelValue","items","read-only"])])),_:1}),(0,l.Wm)((0,n.SU)(c.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(m.DxSelectBox),(0,l.dG)({label:"Status",modelValue:f.value.status,"onUpdate:modelValue":y[4]||(y[4]=e=>f.value.status=e),items:(0,n.SU)(u.Ww),"read-only":!a.value,"field-template":"field","item-template":"item"},(0,n.SU)(x.m)),{field:(0,l.w5)((()=>[(0,l._)("div",b,[(0,l.Wm)(i.Z,{"is-field":!0,value:f.value.status},null,8,["value"])])])),item:(0,l.w5)((({data:e})=>[(0,l.Wm)(i.Z,{value:e},null,8,["value"])])),_:1},16,["modelValue","items","read-only"])])),_:1}),(0,l.Wm)((0,n.SU)(c.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:"Start Date",modelValue:f.value.startDate,"onUpdate:modelValue":y[5]||(y[5]=e=>f.value.startDate=e),"is-editing":a.value},null,8,["modelValue","is-editing"])])),_:1}),(0,l.Wm)((0,n.SU)(c.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:"Due Date",modelValue:f.value.dueDate,"onUpdate:modelValue":y[6]||(y[6]=e=>f.value.dueDate=e),"is-editing":a.value},null,8,["modelValue","is-editing"])])),_:1})])),_:1}),(0,l.Wm)((0,n.SU)(c.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.DxTextArea),{label:"Details","styling-mode":"filled",modelValue:f.value.description,"onUpdate:modelValue":y[7]||(y[7]=e=>f.value.description=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["form-data","class"])])),_:1},8,["is-loading"])]))}}),y=a(40089);const h=(0,y.Z)(W,[["__scopeId","data-v-27482eac"]]);var I=h},98819:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=a(73396),n=a(44870),o=a(3255),i=a(1175),s=a(21164),d=a(70085),u=(0,l.aZ)({__name:"task-list-gantt",props:{tasks:{default:()=>[]}},setup(e,{expose:t}){const a=e,u=(0,n.iH)(null),r=()=>{const e=new s.jsPDF;(0,d.AI)({jsPDFDocument:e,component:u.value.instance}).then((()=>{e.save("Tasks.pdf")}))},c=()=>{o.N.push("/planning-task-details")},m=e=>{e.event?.target?.closest(".dx-treelist-expanded, .dx-treelist-collapsed")||c()};return t({onExporting:r}),(e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(i.DxGantt),{ref_key:"dxGanttCmp",ref:u,"task-list-width":500,"scale-type":"weeks",onTaskClick:m,height:700},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(i.DxTasks),{"data-source":a.tasks,"start-expr":"startDate","end-expr":"dueDate","title-expr":"text"},null,8,["data-source"]),(0,l.Wm)((0,n.SU)(i.DxColumn),{"data-field":"text",caption:"Subject",width:300}),(0,l.Wm)((0,n.SU)(i.DxColumn),{"data-field":"startDate",caption:"Start Date","data-type":"date","sort-order":"asc"}),(0,l.Wm)((0,n.SU)(i.DxColumn),{"data-field":"dueDate",caption:"Due Date","data-type":"date"}),(0,l.Wm)((0,n.SU)(i.DxToolbar),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(i.DxItem),{name:"undo"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"redo"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"separator"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"collapseAll"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"expandAll"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"separator"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"addTask"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"deleteTask"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"separator"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"zoomIn"}),(0,l.Wm)((0,n.SU)(i.DxItem),{name:"zoomOut"})])),_:1}),(0,l.Wm)((0,n.SU)(i.DxValidation),{"auto-update-parent-tasks":!0}),(0,l.Wm)((0,n.SU)(i.DxEditing),{enabled:!0})])),_:1},512))}});const r=u;var c=r},50629:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var l=a(73396),n=a(87139),o=a(44870),i=a(53898),s=a(6224),d=a(99660),u=a(3255);const r=e=>((0,l.dD)("data-v-5755e7bf"),e=e(),(0,l.Cn)(),e),c=r((()=>(0,l._)("div",{class:"card-priority"},null,-1))),m={class:"card-content"},v={class:"card-subject dx-theme-text-color"},p={class:"card-data"},f={class:"priority"},x={class:"date dx-theme-text-color"},w={class:"card-assignee"},D={class:"company dx-theme-text-color"},S=["data-letters"];var k=(0,l.aZ)({__name:"task-kanban-card",props:{task:{default:()=>null}},setup(e){const t=e,a=e=>e.split(" ").map((e=>e[0])).join(""),r=e=>{e.event.stopPropagation(),(0,i.Z)(`Edit '${t.task?.text}' card event`)},k=()=>{u.N.push("/planning-task-details")};return(t,i)=>((0,l.wg)(),(0,l.iD)("div",{class:"card dx-theme-text-color dx-theme-background-color",onClick:i[0]||(i[0]=e=>k())},[(0,l._)("div",{class:(0,n.C_)(["card-wrapper",`priority-${e.task.priority.toLowerCase()}`])},[c,(0,l.Wm)((0,o.SU)(s.DxButton),{icon:"edit",onClick:r}),(0,l._)("div",m,[(0,l._)("div",v,(0,n.zw)(e.task.text),1),(0,l._)("div",p,[(0,l._)("span",f,(0,n.zw)(e.task.priority),1),(0,l._)("span",x,(0,n.zw)((0,o.SU)(d.p6)(e.task.dueDate)),1)]),(0,l._)("div",w,[(0,l._)("span",D,(0,n.zw)(e.task.company),1),(0,l._)("div",{class:"circle","data-letters":a(e.task.owner)},null,8,S)])])],2)]))}}),g=a(40089);const _=(0,g.Z)(k,[["__scopeId","data-v-5755e7bf"]]);var U=_},62743:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var l=a(73396),n=a(44870),o=a(87139),i=(a(43579),a(71793)),s=a(45903),d=a(64393),u=a(6224),r=a(70823),c=a(50629);const m={class:"list"},v={class:"list-title dx-theme-text-color"},p={class:"add-task"};var f=(0,l.aZ)({__name:"task-list-kanban",props:{tasks:{default:()=>[]}},emits:["add-task"],setup(e,{emit:t}){const a=e,f=i.Ww,x=[{text:"Add card"},{text:"Copy list"},{text:"Move list"}],w=e=>{const t=[];return f.forEach((a=>{const l=e.filter((e=>e.status===a));t.push({name:a,cards:l})})),t},D=(0,l.Fl)((()=>a.tasks?w(a.tasks):[]));function S(e){const{fromIndex:t,toIndex:a}=e,l=D.value.splice(t,1)[0];D.value.splice(a,0,l)}function k(e){const{fromData:t,fromIndex:a}=e;e.itemData=t.cards[a]}function g(e){const{fromData:t,toData:a,fromIndex:l,toIndex:n,itemData:o}=e;o.status=a.name,t.cards.splice(l,1),a.cards.splice(n,0,o)}const _=e=>{t("add-task")};return(e,t)=>((0,l.wg)(),(0,l.j4)((0,n.SU)(s.DxScrollView),{class:"scrollable-board",direction:"horizontal","show-scrollbar":"always"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.DxSortable),{class:"sortable-lists","item-orientation":"horizontal",handle:".list-title",onReorder:S},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(D),(e=>((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",v,[(0,l._)("span",null,(0,o.zw)(e.name),1),(0,l.Wm)(r.Z,{items:x})]),(0,l.Wm)((0,n.SU)(s.DxScrollView),{class:"scrollable-list",direction:"vertical","show-scrollbar":"always"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.DxSortable),{class:"sortable-cards",group:"cardsGroup",data:e,onDragStart:k,onReorder:g,onAdd:g},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.cards,(e=>((0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(c["default"],{class:"dx-card",task:e},null,8,["task"])])))),256))])),_:2},1032,["data"]),(0,l._)("div",p,[(0,l.Wm)((0,n.SU)(u.DxButton),{icon:"plus",text:"Add Task","styling-mode":"text",width:"100%",onClick:_})])])),_:2},1024)])))),256))])),_:1})])),_:1}))}}),x=a(40089);const w=(0,x.Z)(f,[["__scopeId","data-v-44469986"]]);var D=w},68930:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var l=a(73396),n=a(44870),o=a(6224),i=a.n(o),s=a(70369),d=a.n(s),u=a(68389),r=a(59450),c=a(24754),m=a(99080),v=a(85219),p=a(86490),f=a(94469),x=a(62743),w=a(98819);const D=e=>((0,l.dD)("data-v-02e2c73e"),e=e(),(0,l.Cn)(),e),S={class:"view-wrapper"},k=D((()=>(0,l._)("span",{class:"toolbar-header"},"Task",-1))),g=D((()=>(0,l._)("div",null,[(0,l._)("div",{class:"separator"})],-1))),_={class:"task-list"},U={key:0,class:"grid"},b={key:1,class:"kanban"},W={key:2,class:"gantt"};var y=(0,l.aZ)({__name:"planning-task-list",setup(e){const t=(0,n.iH)(!0),a=(0,n.iH)(c.d[0].text),o=(0,n.iH)("grid"),s=(0,n.iH)(null),D=(0,n.iH)(null),y=(0,n.iH)([]),h=(0,n.iH)([]),I=(0,n.iH)([]),C=(0,n.iH)(!1),V=()=>{C.value=!0},B=()=>s.value.showColumnChooser(),Z=e=>s.value.search(e.component.option("text")),T=()=>{({grid:s,gantt:D,kanban:null})[o.value]?.value.exportToPdf()},H=()=>{s.value.exportToXlsx()},M=async()=>{t.value=!0;const e=await(0,r.wH)();h.value=[...e],I.value=e,t.value=!1},G=async()=>{t.value=!0;const e=await(0,r.Ak)();y.value=e.filter((e=>!!e.status&&!!e.priority)),t.value=!1},j=e=>{const{itemData:t}=e;a.value=t.text;const l=c.d.find((e=>a.value===e.text))?.id;o.value=l||"grid","grid"!==l&&0===h.value.length?M():"grid"===l&&0===y.value.length&&G()},A=()=>{t.value=!0,"grid"===o.value?(G(),I.value=[],h.value=[]):(y.value=[],M())},E=()=>{C.value=!1};return G(),(e,r)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",S,[(0,l.Wm)((0,n.SU)(u.DxToolbar),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(u.DxItem),{location:"before"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)((0,n.SU)(u.DxItem),{location:"before"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d()),{"selected-index":0,items:(0,n.SU)(c.d),onItemClick:j},null,8,["items"])])),_:1}),(0,l.Wm)((0,n.SU)(u.DxItem),{location:"after","locate-in-menu":"auto","css-class":"add-grid-row"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)((0,n.SU)(i()),{icon:"plus",text:"Add Task",type:"default","styling-mode":"contained",onClick:V})])])),_:1}),(0,l.Wm)((0,n.SU)(u.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Refresh",icon:"refresh",onClick:A}},null,8,["options"]),(0,l.Wm)((0,n.SU)(u.DxItem),{disabled:"grid"!==o.value,location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Column Chooser",icon:"columnchooser",onClick:B}},null,8,["disabled","options"]),(0,l.Wm)((0,n.SU)(u.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[g])),_:1}),(0,l.Wm)((0,n.SU)(u.DxItem),{disabled:!["grid","gantt"].includes(o.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Export to PDF",icon:"exportpdf",onClick:T}},null,8,["disabled","options"]),(0,l.Wm)((0,n.SU)(u.DxItem),{disabled:!["grid"].includes(o.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Export to Exel",icon:"exportxlsx",onClick:H}},null,8,["disabled","options"]),(0,l.Wm)((0,n.SU)(u.DxItem),{disabled:!["grid"].includes(o.value),location:"after","locate-in-menu":"auto",widget:"dxTextBox",options:{placeholder:"Task Search",mode:"search",onInput:Z}},null,8,["disabled","options"])])),_:1}),(0,l.Wm)(v.Z,{"is-loading":t.value},{default:(0,l.w5)((()=>[(0,l._)("div",_,[(0,n.SU)(c.d)[0].text===a.value?((0,l.wg)(),(0,l.iD)("div",U,[(0,l.Wm)(f["default"],{ref_key:"tasksGridCmp",ref:s,"data-source":y.value},null,8,["data-source"])])):(0,n.SU)(c.d)[1].text===a.value?((0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)(x["default"],{tasks:h.value,onAddTask:V},null,8,["tasks"])])):(0,n.SU)(c.d)[2].text===a.value?((0,l.wg)(),(0,l.iD)("div",W,[(0,l.Wm)(w["default"],{ref_key:"tasksGanttCmp",ref:D,tasks:I.value},null,8,["tasks"])])):(0,l.kq)("",!0)])])),_:1},8,["is-loading"])]),(0,l.Wm)(m.Z,{title:"New Task","is-visible":C.value,"onUpdate:is-visible":r[0]||(r[0]=e=>C.value=e),onSave:E},{default:(0,l.w5)((()=>[(0,l.Wm)(p["default"],{"content-by-screen":{xs:1,sm:1},"is-create-mode":!0})])),_:1},8,["is-visible"])],64))}}),h=a(40089);const I=(0,h.Z)(y,[["__scopeId","data-v-02e2c73e"]]);var C=I}}]);