"use strict";(self["webpackChunkvue_ts4"]=self["webpackChunkvue_ts4"]||[]).push([[868],{58719:function(e,t,n){n.d(t,{b:function(){return l}});const l=["Salaried","Commission","Terminated"]},83835:function(e,t,n){
/*!
 * devextreme-vue
 * Version: 22.1.4
 * Build date: Fri Jul 22 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxToolbarItem=t.DxTo=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxItem=t.DxHide=t.DxFrom=t.DxDropDownOptions=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxDropDownButton=void 0;var a=l(n(61659)),o=n(35535),i=n(35535),u=o.createComponent({props:{accessKey:String,activeStateEnabled:Boolean,dataSource:{},deferRendering:Boolean,disabled:Boolean,displayExpr:[Function,String],dropDownContentTemplate:{},dropDownOptions:Object,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,icon:String,items:Array,itemTemplate:{},keyExpr:String,noDataText:String,onButtonClick:Function,onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onOptionChanged:Function,onSelectionChanged:Function,opened:Boolean,rtlEnabled:Boolean,selectedItem:{},selectedItemKey:[Number,String],showArrowIcon:Boolean,splitButton:Boolean,stylingMode:String,tabIndex:Number,text:String,useItemTextAsTitle:Boolean,useSelectMode:Boolean,visible:Boolean,width:[Function,Number,String],wrapItemText:Boolean},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:dataSource":null,"update:deferRendering":null,"update:disabled":null,"update:displayExpr":null,"update:dropDownContentTemplate":null,"update:dropDownOptions":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:icon":null,"update:items":null,"update:itemTemplate":null,"update:keyExpr":null,"update:noDataText":null,"update:onButtonClick":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:opened":null,"update:rtlEnabled":null,"update:selectedItem":null,"update:selectedItemKey":null,"update:showArrowIcon":null,"update:splitButton":null,"update:stylingMode":null,"update:tabIndex":null,"update:text":null,"update:useItemTextAsTitle":null,"update:useSelectMode":null,"update:visible":null,"update:width":null,"update:wrapItemText":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=a.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={dropDownOptions:{isCollectionItem:!1,optionName:"dropDownOptions"},item:{isCollectionItem:!0,optionName:"items"}}}});t.DxDropDownButton=u;var d=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var s=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=s,s.$_optionName="at";var p=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=p,p.$_optionName="boundaryOffset";var r=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=r,r.$_optionName="collision";var m=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:animation":null,"update:bindingOptions":null,"update:closeOnOutsideClick":null,"update:container":null,"update:contentTemplate":null,"update:copyRootClassesToWrapper":null,"update:deferRendering":null,"update:disabled":null,"update:dragAndResizeArea":null,"update:dragEnabled":null,"update:dragOutsideBoundary":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:fullScreen":null,"update:height":null,"update:hideOnOutsideClick":null,"update:hideOnParentScroll":null,"update:hint":null,"update:hoverStateEnabled":null,"update:maxHeight":null,"update:maxWidth":null,"update:minHeight":null,"update:minWidth":null,"update:onContentReady":null,"update:onDisposing":null,"update:onFocusIn":null,"update:onFocusOut":null,"update:onHidden":null,"update:onHiding":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onResize":null,"update:onResizeEnd":null,"update:onResizeStart":null,"update:onShowing":null,"update:onShown":null,"update:onTitleRendered":null,"update:position":null,"update:resizeEnabled":null,"update:restorePosition":null,"update:rtlEnabled":null,"update:shading":null,"update:shadingColor":null,"update:showCloseButton":null,"update:showTitle":null,"update:tabIndex":null,"update:title":null,"update:titleTemplate":null,"update:toolbarItems":null,"update:visible":null,"update:width":null,"update:wrapperAttr":null},props:{accessKey:String,activeStateEnabled:Boolean,animation:Object,bindingOptions:Object,closeOnOutsideClick:[Boolean,Function],container:{},contentTemplate:{},copyRootClassesToWrapper:Boolean,deferRendering:Boolean,disabled:Boolean,dragAndResizeArea:{},dragEnabled:Boolean,dragOutsideBoundary:Boolean,elementAttr:{},focusStateEnabled:Boolean,fullScreen:Boolean,height:[Function,Number,String],hideOnOutsideClick:[Boolean,Function],hideOnParentScroll:Boolean,hint:String,hoverStateEnabled:Boolean,maxHeight:[Function,Number,String],maxWidth:[Function,Number,String],minHeight:[Function,Number,String],minWidth:[Function,Number,String],onContentReady:Function,onDisposing:Function,onFocusIn:Function,onFocusOut:Function,onHidden:Function,onHiding:Function,onInitialized:Function,onOptionChanged:Function,onResize:Function,onResizeEnd:Function,onResizeStart:Function,onShowing:Function,onShown:Function,onTitleRendered:Function,position:[Function,Object,String],resizeEnabled:Boolean,restorePosition:Boolean,rtlEnabled:Boolean,shading:Boolean,shadingColor:String,showCloseButton:Boolean,showTitle:Boolean,tabIndex:Number,title:String,titleTemplate:{},toolbarItems:Array,visible:Boolean,width:[Function,Number,String],wrapperAttr:{}}});t.DxDropDownOptions=m,m.$_optionName="dropDownOptions",m.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},position:{isCollectionItem:!1,optionName:"position"},toolbarItem:{isCollectionItem:!0,optionName:"toolbarItems"}};var c=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=c,c.$_optionName="from",c.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var g=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=g,g.$_optionName="hide",g.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var v=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:badge":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:onClick":null,"update:showChevron":null,"update:template":null,"update:text":null,"update:visible":null},props:{badge:String,disabled:Boolean,html:String,icon:String,onClick:Function,showChevron:Boolean,template:{},text:String,visible:Boolean}});t.DxItem=v,v.$_optionName="items",v.$_isCollectionItem=!0;var S=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=S,S.$_optionName="my";var b=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=b,b.$_optionName="offset";var f=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=f,f.$_optionName="position";var x=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=x,x.$_optionName="show";var h=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=h,h.$_optionName="to";var w=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:disabled":null,"update:html":null,"update:location":null,"update:options":null,"update:template":null,"update:text":null,"update:toolbar":null,"update:visible":null,"update:widget":null},props:{disabled:Boolean,html:String,location:String,options:{},template:{},text:String,toolbar:String,visible:Boolean,widget:String}});t.DxToolbarItem=w,w.$_optionName="toolbarItems",w.$_isCollectionItem=!0,t["default"]=u},38563:function(e,t,n){var l=n(70004);t["Z"]=l.o},44629:function(e,t,n){n.d(t,{Z:function(){return S}});var l=n(73396),a=n(44870),o=n(87139),i=n(4702),u=n(6224),d=n(99660),s=n(85219);const p={id:"activities-list"},r={class:"activity"},m={class:"name"},c={key:0};var g=(0,l.aZ)({__name:"contact-activities",props:{isLoading:{type:Boolean,default:!0},showBy:{type:Boolean,default:!1},items:null},setup(e){const t=e;return(e,n)=>((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(s.Z,{"is-loading":t.isLoading,"container-selector":"#activities-list"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(i.DxList),{class:"activities-list",items:t.items,scrollingEnabled:!1},{item:(0,l.w5)((({data:e})=>[(0,l._)("div",null,[(0,l._)("div",r,[(0,l._)("div",m,(0,o.zw)(e.name),1),(0,l._)("div",{class:(0,o.C_)(["date",{by:t.showBy}])},[(0,l._)("span",null,(0,o.zw)((0,a.SU)(d.p6)(new Date(e.date))),1),t.showBy?((0,l.wg)(),(0,l.iD)("span",c,"by")):(0,l.kq)("",!0),(0,l._)("span",null,(0,o.zw)(e.manager),1)],2),(0,l.Wm)((0,a.SU)(u.DxButton),{icon:"overflow"})])])])),_:1},8,["items"])])),_:1},8,["is-loading"])]))}});const v=g;var S=v},51508:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var l=n(73396),a=n(87139),o=n(44870),i=n(88707),u=n(55897),d=n(6224),s=n(94969),p=n(45903),r=n(68389),m=n(81011),c=n(3951),g=n(19647),v=n(99660),S=n(44629),b=n(85219),f=n(92505);const x=e=>((0,l.dD)("data-v-a179f26e"),e=e(),(0,l.Cn)(),e),h={class:"data-wrapper"},w={class:"data-part"},C={class:"contact-name"},D={class:"data-part border form-compact"},y={class:"data-part border"},_={class:"data-part"},I={class:"accordion-title"},W={class:"value"},B=x((()=>(0,l._)("br",null,null,-1))),U={class:"value black small"},O=x((()=>(0,l._)("br",null,null,-1)));var N=(0,l.aZ)({__name:"contact-panel",props:{isPanelOpen:{type:Boolean,default:!1},userId:{default:null}},emits:["close"],setup(e,{emit:t}){const n=e,x=(0,o.iH)(!1),N=(0,o.iH)(!1),E=(0,o.iH)(!1),F=(0,o.iH)(!0),A=(0,o.iH)(null),k=()=>{x.value=!x.value},T=[{name:"phone",editorOptions:{mask:"+1(000)000-0000",icon:"tel"}},{name:"email",editorOptions:{icon:"email"}},{name:"address",editorOptions:{icon:"home"}}];(0,l.YP)(g.Br,(e=>{F.value=e.isLarge||e.isMedium,!1===F.value&&(E.value=!1)}));const R=async e=>{N.value=!0,A.value=await(0,i.vS)(e),N.value=!1};function z(){}return(0,l.YP)((()=>n.userId),(e=>{null!==e&&R(e)})),(e,i)=>((0,l.wg)(),(0,l.iD)("div",{id:"contact-panel",class:(0,a.C_)(["panel",{pin:E.value,open:n.isPanelOpen}])},[(0,l._)("div",h,[(0,l.Wm)(b.Z,{width:300,"container-selector":"#contact-panel","is-loading":N.value},{default:(0,l.w5)((()=>[A.value?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("div",w,[(0,l.Wm)((0,o.SU)(r.DxToolbar),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(r.DxItem),{location:"before"},{default:(0,l.w5)((()=>[(0,l._)("div",C,(0,a.zw)(A.value?.name),1)])),_:1}),(0,l.Wm)((0,o.SU)(r.DxItem),{location:"before"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.Z,{status:A.value?.status},null,8,["status"])])),_:1}),(0,l.Wm)((0,o.SU)(r.DxItem),{location:"after",widget:"dxButton",visible:F.value,options:{icon:E.value?"unpin":"pin",onClick:()=>E.value=!E.value}},null,8,["visible","options"]),(0,l.Wm)((0,o.SU)(r.DxItem),{location:"after",widget:"dxButton",options:{icon:"close",onClick:()=>t("close")}},null,8,["options"])])),_:1})]),(0,l.Wm)((0,o.SU)(p.DxScrollView),{class:"panel-scroll"},{default:(0,l.w5)((()=>[(0,l._)("div",D,[(0,l.Wm)((0,o.SU)(s.DxForm),{formData:A.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.DxGroupItem),{colCount:2,cssClass:"photo-row"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.DxItem),{cssClass:"photo-box"},{default:(0,l.w5)((()=>[(0,l.Wm)(m.Z,{link:A.value.image},null,8,["link"])])),_:1}),(0,l.Wm)((0,o.SU)(s.DxGroupItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(f.Z,{class:"accent",modelValue:A.value["company"],"onUpdate:modelValue":i[0]||(i[0]=e=>A.value["company"]=e),label:"Company",isEditing:x.value},null,8,["modelValue","isEditing"])])),_:1}),(0,l.Wm)((0,o.SU)(s.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(f.Z,{modelValue:A.value["position"],"onUpdate:modelValue":i[1]||(i[1]=e=>A.value["position"]=e),label:"Position",isEditing:x.value},null,8,["modelValue","isEditing"])])),_:1}),(0,l.Wm)((0,o.SU)(s.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(f.Z,{class:"accent",modelValue:A.value["manager"],"onUpdate:modelValue":i[2]||(i[2]=e=>A.value["manager"]=e),label:"Assigned to",isEditing:x.value},null,8,["modelValue","isEditing"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)((0,o.SU)(s.DxGroupItem),null,{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(T,((e,t)=>(0,l.Wm)((0,o.SU)(s.DxItem),{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(f.Z,{icon:e.editorOptions?.icon,modelValue:A.value[e.name],"onUpdate:modelValue":t=>A.value[e.name]=t,isEditing:x.value,mask:e.editorOptions.mask,"rendered-value":"phone"===e.name?(0,o.SU)(v.CN)(A.value[e.name]):A.value[e.name]},null,8,["icon","modelValue","onUpdate:modelValue","isEditing","mask","rendered-value"])])),_:2},1024))),64))])),_:1})])),_:1},8,["formData"])]),(0,l._)("div",y,[(0,l.Wm)((0,o.SU)(r.DxToolbar),{class:"panel-toolbar"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(r.DxItem),{location:"before",widget:"dxButton",options:x.value?{icon:!1,stylingMode:"outlined",text:"Save",type:"default",onClick:k}:{icon:"edit",stylingMode:"outlined",text:"Edit",type:"default",onClick:k}},null,8,["options"]),(0,l.Wm)((0,o.SU)(r.DxItem),{location:"before",visible:x.value,widget:"dxButton",options:{icon:!1,stylingMode:"text",text:"Cancel",onClick:k}},null,8,["visible","options"]),(0,l.Wm)((0,o.SU)(r.DxItem),{location:"after",widget:"dxDropDownButton",options:{text:"Actions",stylingMode:"contained",items:["Call","Send Fax","Send Email","Make a Meeting"]}})])),_:1})]),(0,l._)("div",_,[(0,l.Wm)((0,o.SU)(u.DxAccordion),{multiple:!0,collapsible:!0},{title:(0,l.w5)((({data:e})=>[(0,l._)("span",I,(0,a.zw)(e.title),1),(0,l.Wm)((0,o.SU)(d.DxButton),{icon:"add",type:"default",stylingMode:"text",onClick:i[3]||(i[3]=e=>{e.event.stopPropagation(),z(e)})})])),default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(u.DxItem),{title:"Opportunities"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(A.value.opportunities,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"opportunities"},[(0,l._)("span",W,(0,a.zw)(e.name),1),B,(0,l._)("span",U,(0,a.zw)((0,o.SU)(v.T4)(e.price)),1),O])))),128))])),_:1}),(0,l.Wm)((0,o.SU)(r.DxItem),{title:"Activities"},{default:(0,l.w5)((()=>[(0,l.Wm)(S.Z,{items:A.value.activities,"is-loading":!1},null,8,["items"])])),_:1})])),_:1})])])),_:1})],64)):(0,l.kq)("",!0)])),_:1},8,["is-loading"])])],2))}}),E=n(40089);const F=(0,E.Z)(N,[["__scopeId","data-v-a179f26e"]]);var A=F},30170:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var l=n(73396),a=n(44870),o=n(87139),i=n(83835),u=n.n(i),d=n(69119),s=n.n(d),p=n(88707),r=n(58719),m=n(38563),c=n(99660),g=n(3951),v=n(51508);const S=e=>((0,l.dD)("data-v-34d1bdb5"),e=e(),(0,l.Cn)(),e),b={class:"view-wrapper"},f=S((()=>(0,l._)("div",{class:"grid-header"},"Contact List",-1))),x=S((()=>(0,l._)("div",{class:"separator"},null,-1))),h=S((()=>(0,l._)("div",{class:"separator"},null,-1))),w={class:"name-template"},C={class:"position"};var D=(0,l.aZ)({__name:"crm-contact-list",setup(e){const t=(0,a.iH)(null),n=(0,a.iH)(!1),i=(0,a.iH)(null),S=["All Contacts",...r.b],D=new m.Z({key:"id",load:()=>(0,p.K2)()}),y=e=>{e.data.id&&(t.value=e.data,n.value=!0)},_=()=>{i.value?.instance.addRow()},I=e=>{const{item:t}=e;"All Contacts"===t?i.value?.instance.clearFilter():i.value?.instance.filter(["status","=",t])},W=()=>{D.reload()},B=e=>{const{value:t}=e;if(t)return(0,c.CN)(t.toString())};return(e,i)=>((0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)((0,a.SU)(s()),{"data-source":(0,a.SU)(D),height:"100%",class:"grid",onRowClick:y},{nameCellTemplate:(0,l.w5)((({data:e})=>[(0,l._)("div",w,[(0,l._)("div",null,(0,o.zw)(e.data.name),1),(0,l._)("div",C,(0,o.zw)(e.data.position),1)])])),statusCellTemplate:(0,l.w5)((({data:e})=>[(0,l.Wm)(g.Z,{status:e.data?.status},null,8,["status"])])),default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxScrolling),{mode:"virtual"}),(0,l.Wm)((0,a.SU)(d.DxColumnChooser),{enabled:!0}),(0,l.Wm)((0,a.SU)(d.DxSorting),{mode:"multiple"}),(0,l.Wm)((0,a.SU)(d.DxHeaderFilter),{visible:!0}),(0,l.Wm)((0,a.SU)(d.DxLoadPanel),{enabled:!0,"show-pane":!1}),(0,l.Wm)((0,a.SU)(d.DxSelection),{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),(0,l.Wm)((0,a.SU)(d.DxSearchPanel),{visible:!0,placeholder:"Contact Search"}),(0,l.Wm)((0,a.SU)(d.DxExport),{enabled:!0,"allow-export-selected-data":!0}),(0,l.Wm)((0,a.SU)(d.DxToolbar),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxItem),{location:"before"},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"before",locateInMenu:"auto"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(u()),{stylingMode:"text",width:160,useSelectMode:!0,items:S,selectedItemKey:S[0],onSelectionChanged:I},null,8,["selectedItemKey"])])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton",options:{icon:"plus",text:"Add Contact",type:"default",stylingMode:"contained",onClick:_}},null,8,["options"]),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto","show-text":"inMenu",widget:"dxButton",options:{text:"Refresh",icon:"refresh",onClick:W}},null,8,["options"]),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{name:"exportButton"}),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{name:"columnChooserButton",locateInMenu:"auto"}),(0,l.Wm)((0,a.SU)(d.DxItem),{name:"searchPanel",locateInMenu:"auto"})])),_:1}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"name",caption:"Name",sortOrder:"asc","cell-template":"nameCellTemplate","hiding-priority":5,"min-width":150},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxRequiredRule))])),_:1}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"company",caption:"Company","hiding-priority":5,"min-width":150}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"status",caption:"Status","data-type":"string","cell-template":"statusCellTemplate","hiding-priority":3,"min-width":100}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"assignedTo",caption:"Assigned to","hiding-priority":4}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"phone",caption:"Phone","hiding-priority":2,customizeText:B},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxRequiredRule))])),_:1}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"email",caption:"Email","hiding-priority":1},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxRequiredRule))])),_:1})])),_:1},8,["data-source"]),(0,l.Wm)(v["default"],{"user-id":t.value?.id,"is-panel-open":n.value,onClose:i[0]||(i[0]=e=>n.value=!1)},null,8,["user-id","is-panel-open"])]))}}),y=n(40089);const _=(0,y.Z)(D,[["__scopeId","data-v-34d1bdb5"]]);var I=_}}]);