"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[6808],{28995:function(e,t,a){var n=a(74962),r=a(64030),u=a(34571),i=a(9783),d="number",l="yyyy/MM/dd",s="yyyy/MM/dd HH:mm:ss",o=/^(\d{4,})(-)?(\d{2})(-)?(\d{2})(?:T(\d{2})(:)?(\d{2})?(:)?(\d{2}(?:\.(\d{1,3})\d*)?)?)?(Z|([+-])(\d{2})(:)?(\d{2})?)?$/,m=/^(\d{2}):(\d{2})(:(\d{2}))?$/,f=["","yyyy","","MM","","dd","THH","","mm","","ss",".SSS"],c=/^(\d{4})\/(\d{2})\/(\d{2})$/,D=3,v=function(e,t){var a;return(0,i.HD)(e)&&!t&&(a=b(e)),a||S(e)};function x(e){return+e||0}function S(e){var t=y(e)===l,a=!(0,i.J_)(e)&&Date.parse(e);if(!a&&t){var n=e.match(c);if(n){var r=new Date(x(n[1]),x(n[2]),x(n[3]));return r.setFullYear(x(n[1])),r.setMonth(x(n[2])-1),r.setDate(x(n[3])),r}}return(0,i.kE)(a)?new Date(a):e}function b(e){var t=e.match(o);if(!t)return t=e.match(m),t?new Date(0,0,0,x(t[1]),x(t[2]),x(t[4])):void 0;var a=x(t[1]),n=--t[3],r=t[5],u=0,i=0,d=e=>(a<100&&e.setFullYear(a),e);u=x(t[14]),i=x(t[16]),"-"===t[13]&&(u=-u,i=-i);var l=x(t[6])-u,s=x(t[8])-i,f=x(t[10]),c=function(e){return e=e||"",x(e)*Math.pow(10,D-e.length)}(t[11]);return t[12]?d(new Date(Date.UTC(a,n,r,l,s,f,c))):d(new Date(a,n,r,l,s,f,c))}var p=function(e,t){var a=e.match(o),n="";if(!a)return a=e.match(m),a?a[3]?"HH:mm:ss":"HH:mm":void 0;for(var r=1;r<f.length;r++)a[r]&&(n+=f[r]||a[r]);return"Z"===a[12]&&(n+="'Z'"),a[14]&&(a[15]?n+="xxx":a[16]?n+="xx":n+="x"),n},g=function(e){return"number"===typeof e?new Date(e):v(e,!(0,n.Z)().forceIsoDateParsing)},Z=function(e,t){return t?(0,i.J_)(e)?t===d?e&&e.valueOf?e.valueOf():null:(0,r.P)(t,u.Z)(e):null:e},y=function(e){return"number"===typeof e?d:(0,i.HD)(e)?((0,n.Z)().forceIsoDateParsing&&(t=p(e)),t||(e.indexOf(":")>=0?s:l)):e?null:void 0;var t};t["Z"]={dateParser:v,deserializeDate:g,serializeDate:Z,getDateSerializationFormat:y}},23142:function(e,t,a){a.d(t,{p6:function(){return l},uf:function(){return d}});var n=a(70326),r=a(19231),u=a(74933),i=a(93140),d=(a(31490),n.Z.locale.bind(n.Z),r.Z.load.bind(r.Z),r.Z.format.bind(r.Z),u.Z.format.bind(u.Z)),l=(u.Z.parse.bind(u.Z),i.Z.format.bind(i.Z));i.Z.parse.bind(i.Z)},96859:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(73396),r=a(44870),u=a(37081),i=a(75699),d=a(70870),l=(0,n.aZ)({__name:"sales-by-range-card",props:{data:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.j4)(d["default"],{title:"Product Sale by Range"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(u.DxPieChart),{class:"sales-pie","data-source":t.data,type:"doughnut",diameter:.8,"inner-radius":.6},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(u.DxSeries),{"argument-field":"name","value-field":"value"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(u.DxLabel),{"background-color":"none","radial-offset":-20,visible:!0,"customize-text":e=>e.percentText},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(u.DxFont),{color:"#757575",size:15})])),_:1},8,["customize-text"])])),_:1}),(0,n.Wm)((0,r.SU)(u.DxLegend),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(u.DxMargin),{top:70})])),_:1}),(0,n.Wm)((0,r.SU)(u.DxSize),{height:270}),(0,n.Wm)((0,r.SU)(u.DxLegend),{visible:!1})])),_:1},8,["data-source","diameter","inner-radius"]),(0,n.Wm)((0,r.SU)(i.DxChart),{class:"sales-bars","data-source":t.data,rotated:!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(i.DxCommonAxisSettings),{visible:!1},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(i.DxTick),{visible:!1})])),_:1}),(0,n.Wm)((0,r.SU)(i.DxLegend),{visible:!1}),(0,n.Wm)((0,r.SU)(i.DxCommonSeriesSettings),{"argument-field":"name","value-field":"value",type:"bar","ignore-empty-points":!0}),(0,n.Wm)((0,r.SU)(i.DxSeriesTemplate),{"name-field":"name"}),(0,n.Wm)((0,r.SU)(i.DxValueAxis),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(i.DxLabel),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(i.DxFormat),{type:"largeNumber"})])),_:1})])),_:1})])),_:1},8,["data-source"])])),_:1}))}}),s=a(40089);const o=(0,s.Z)(l,[["__scopeId","data-v-6743fcee"]]);var m=o}}]);