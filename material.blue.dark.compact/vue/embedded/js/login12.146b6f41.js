"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[1703],{28995:function(e,t,a){var n=a(74962),r=a(64030),i=a(34571),l=a(9783),s="number",o="yyyy/MM/dd",u="yyyy/MM/dd HH:mm:ss",d=/^(\d{4,})(-)?(\d{2})(-)?(\d{2})(?:T(\d{2})(:)?(\d{2})?(:)?(\d{2}(?:\.(\d{1,3})\d*)?)?)?(Z|([+-])(\d{2})(:)?(\d{2})?)?$/,c=/^(\d{2}):(\d{2})(:(\d{2}))?$/,m=["","yyyy","","MM","","dd","THH","","mm","","ss",".SSS"],f=/^(\d{4})\/(\d{2})\/(\d{2})$/,v=3,p=function(e,t){var a;return(0,l.HD)(e)&&!t&&(a=y(e)),a||D(e)};function g(e){return+e||0}function D(e){var t=x(e)===o,a=!(0,l.J_)(e)&&Date.parse(e);if(!a&&t){var n=e.match(f);if(n){var r=new Date(g(n[1]),g(n[2]),g(n[3]));return r.setFullYear(g(n[1])),r.setMonth(g(n[2])-1),r.setDate(g(n[3])),r}}return(0,l.kE)(a)?new Date(a):e}function y(e){var t=e.match(d);if(!t)return t=e.match(c),t?new Date(0,0,0,g(t[1]),g(t[2]),g(t[4])):void 0;var a=g(t[1]),n=--t[3],r=t[5],i=0,l=0,s=e=>(a<100&&e.setFullYear(a),e);i=g(t[14]),l=g(t[16]),"-"===t[13]&&(i=-i,l=-l);var o=g(t[6])-i,u=g(t[8])-l,m=g(t[10]),f=function(e){return e=e||"",g(e)*Math.pow(10,v-e.length)}(t[11]);return t[12]?s(new Date(Date.UTC(a,n,r,o,u,m,f))):s(new Date(a,n,r,o,u,m,f))}var w=function(e,t){var a=e.match(d),n="";if(!a)return a=e.match(c),a?a[3]?"HH:mm:ss":"HH:mm":void 0;for(var r=1;r<m.length;r++)a[r]&&(n+=m[r]||a[r]);return"Z"===a[12]&&(n+="'Z'"),a[14]&&(a[15]?n+="xxx":a[16]?n+="xx":n+="x"),n},h=function(e){return"number"===typeof e?new Date(e):p(e,!(0,n.Z)().forceIsoDateParsing)},_=function(e,t){return t?(0,l.J_)(e)?t===s?e&&e.valueOf?e.valueOf():null:(0,r.P)(t,i.Z)(e):null:e},x=function(e){return"number"===typeof e?s:(0,l.HD)(e)?((0,n.Z)().forceIsoDateParsing&&(t=w(e)),t||(e.indexOf(":")>=0?u:o)):e?null:void 0;var t};t["Z"]={dateParser:p,deserializeDate:h,serializeDate:_,getDateSerializationFormat:x}},70823:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(73396),r=a(44870),i=a(83835),l=a.n(i),s=(0,n.aZ)({__name:"card-menu",props:{items:null,visible:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)((0,r.SU)(l()),{items:t.items,visible:t.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const o=s;var u=o},81218:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(73396),r=a(44870),i=a(75699),l=a(83835),s=a(48);const o={class:"sales-filter"};var u=(0,n.aZ)({__name:"sales-performance-card",props:{visualRange:null,groupByPeriods:null,data:null},emits:["performance-period-changed"],setup(e,{emit:t}){const a=e;return(u,d)=>((0,n.wg)(),(0,n.j4)(s["default"],{title:"Sales Performance","content-class":"sales"},{filter:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n.Wm)((0,r.SU)(l.DxDropDownButton),{"styling-mode":"text","use-select-mode":!0,items:a.groupByPeriods,"selected-item-key":a.groupByPeriods[1],onSelectionChanged:d[0]||(d[0]=e=>t("performance-period-changed",e))},null,8,["items","selected-item-key"])])])),default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(i.DxChart),{"data-source":e.data},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(i.DxArgumentAxis),{"visual-range":a.visualRange},null,8,["visual-range"]),(0,n.Wm)((0,r.SU)(i.DxTooltip),{enabled:!0,"customize-tooltip":e=>({text:e})},null,8,["customize-tooltip"]),(0,n.Wm)((0,r.SU)(i.DxSeriesTemplate),{"name-field":"category"}),(0,n.Wm)((0,r.SU)(i.DxCommonSeriesSettings),{"argument-field":"date","value-field":"total","hover-mode":"includePoints"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(i.DxPoint),{"hover-mode":"allArgumentPoints"})])),_:1}),(0,n.Wm)((0,r.SU)(i.DxArgumentAxis),{"argument-type":"datetime","value-margins-enabled":!1}),(0,n.Wm)((0,r.SU)(i.DxLegend),{visible:!1}),(0,n.Wm)((0,r.SU)(i.DxSize),{height:270})])),_:1},8,["data-source"])])),_:1}))}}),d=a(40089);const c=(0,d.Z)(u,[["__scopeId","data-v-1a140b79"]]);var m=c},48:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(73396),r=a(87139),i=a(70823);const l={class:"card-wrapper"},s={class:"header"},o={key:0,class:"title"},u={key:0,class:"content"};var d=(0,n.aZ)({__name:"card-analytics",props:{title:{default:""},contentClass:{default:""},showData:{type:Boolean,default:!0},isMenuVisible:{type:Boolean,default:!0}},setup(e){const t=e,a=[{text:"Configure"},{text:"Remove"}];return(d,c)=>((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",{class:(0,r.C_)(["card",t.contentClass])},[(0,n._)("div",s,[(0,n.Wm)(i.Z,{visible:t.isMenuVisible,class:"overflow-menu",items:a},null,8,["visible"]),t.title?((0,n.wg)(),(0,n.iD)("div",o,(0,r.zw)(t.title),1)):(0,n.kq)("",!0),(0,n.WI)(d.$slots,"filter")]),e.showData?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.WI)(d.$slots,"default")])):(0,n.kq)("",!0)],2)]))}}),c=a(40089);const m=(0,c.Z)(d,[["__scopeId","data-v-0419149a"]]);var f=m}}]);