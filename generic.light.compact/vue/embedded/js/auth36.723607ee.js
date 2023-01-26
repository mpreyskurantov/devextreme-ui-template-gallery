"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[3678],{28995:function(e,t,n){var a=n(74962),r=n(64030),i=n(34571),u=n(9783),o="number",l="yyyy/MM/dd",d="yyyy/MM/dd HH:mm:ss",s=/^(\d{4,})(-)?(\d{2})(-)?(\d{2})(?:T(\d{2})(:)?(\d{2})?(:)?(\d{2}(?:\.(\d{1,3})\d*)?)?)?(Z|([+-])(\d{2})(:)?(\d{2})?)?$/,m=/^(\d{2}):(\d{2})(:(\d{2}))?$/,c=["","yyyy","","MM","","dd","THH","","mm","","ss",".SSS"],f=/^(\d{4})\/(\d{2})\/(\d{2})$/,v=3,p=function(e,t){var n;return(0,u.HD)(e)&&!t&&(n=y(e)),n||D(e)};function g(e){return+e||0}function D(e){var t=S(e)===l,n=!(0,u.J_)(e)&&Date.parse(e);if(!n&&t){var a=e.match(f);if(a){var r=new Date(g(a[1]),g(a[2]),g(a[3]));return r.setFullYear(g(a[1])),r.setMonth(g(a[2])-1),r.setDate(g(a[3])),r}}return(0,u.kE)(n)?new Date(n):e}function y(e){var t=e.match(s);if(!t)return t=e.match(m),t?new Date(0,0,0,g(t[1]),g(t[2]),g(t[4])):void 0;var n=g(t[1]),a=--t[3],r=t[5],i=0,u=0,o=e=>(n<100&&e.setFullYear(n),e);i=g(t[14]),u=g(t[16]),"-"===t[13]&&(i=-i,u=-u);var l=g(t[6])-i,d=g(t[8])-u,c=g(t[10]),f=function(e){return e=e||"",g(e)*Math.pow(10,v-e.length)}(t[11]);return t[12]?o(new Date(Date.UTC(n,a,r,l,d,c,f))):o(new Date(n,a,r,l,d,c,f))}var Z=function(e,t){var n=e.match(s),a="";if(!n)return n=e.match(m),n?n[3]?"HH:mm:ss":"HH:mm":void 0;for(var r=1;r<c.length;r++)n[r]&&(a+=c[r]||n[r]);return"Z"===n[12]&&(a+="'Z'"),n[14]&&(n[15]?a+="xxx":n[16]?a+="xx":a+="x"),a},x=function(e){return"number"===typeof e?new Date(e):p(e,!(0,a.Z)().forceIsoDateParsing)},h=function(e,t){return t?(0,u.J_)(e)?t===o?e&&e.valueOf?e.valueOf():null:(0,r.P)(t,i.Z)(e):null:e},S=function(e){return"number"===typeof e?o:(0,u.HD)(e)?((0,a.Z)().forceIsoDateParsing&&(t=Z(e)),t||(e.indexOf(":")>=0?d:l)):e?null:void 0;var t};t["Z"]={dateParser:p,deserializeDate:x,serializeDate:h,getDateSerializationFormat:S}},23142:function(e,t,n){n.d(t,{p6:function(){return l},uf:function(){return o}});var a=n(70326),r=n(19231),i=n(74933),u=n(93140),o=(n(31490),a.Z.locale.bind(a.Z),r.Z.load.bind(r.Z),r.Z.format.bind(r.Z),i.Z.format.bind(i.Z)),l=(i.Z.parse.bind(i.Z),u.Z.format.bind(u.Z));u.Z.parse.bind(u.Z)},15989:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(73396),r=n(44870),i=n(75699),u=n(83835),o=n(70870);const l={class:"sales-filter"};var d=(0,a.aZ)({__name:"sales-performance-card",props:{visualRange:null,groupByPeriods:null,data:null},emits:["performance-period-changed"],setup(e,{emit:t}){const n=e;return(d,s)=>((0,a.wg)(),(0,a.j4)(o["default"],{title:"Sales Performance","content-class":"sales"},{filter:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a.Wm)((0,r.SU)(u.DxDropDownButton),{"styling-mode":"text","use-select-mode":!0,items:n.groupByPeriods,"selected-item-key":n.groupByPeriods[1],onSelectionChanged:s[0]||(s[0]=e=>t("performance-period-changed",e))},null,8,["items","selected-item-key"])])])),default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(i.DxChart),{"data-source":e.data},{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(i.DxArgumentAxis),{"visual-range":n.visualRange},null,8,["visual-range"]),(0,a.Wm)((0,r.SU)(i.DxTooltip),{enabled:!0,"customize-tooltip":e=>({text:e})},null,8,["customize-tooltip"]),(0,a.Wm)((0,r.SU)(i.DxSeriesTemplate),{"name-field":"category"}),(0,a.Wm)((0,r.SU)(i.DxCommonSeriesSettings),{"argument-field":"date","value-field":"total","hover-mode":"includePoints"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,r.SU)(i.DxPoint),{"hover-mode":"allArgumentPoints"})])),_:1}),(0,a.Wm)((0,r.SU)(i.DxArgumentAxis),{"argument-type":"datetime","value-margins-enabled":!1}),(0,a.Wm)((0,r.SU)(i.DxLegend),{visible:!1}),(0,a.Wm)((0,r.SU)(i.DxSize),{height:270})])),_:1},8,["data-source"])])),_:1}))}}),s=n(40089);const m=(0,s.Z)(d,[["__scopeId","data-v-fee7f332"]]);var c=m}}]);