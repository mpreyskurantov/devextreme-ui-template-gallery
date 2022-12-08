"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[527],{93527:function(t,e,a){
/*!
 * devextreme-vue
 * Version: 22.2.1-alpha-22313-0309
 * Build date: Wed Nov 09 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DxTooltip=e.DxSize=e.DxShadow=e.DxMargin=e.DxFormat=e.DxFont=e.DxBorder=e.DxBullet=void 0;var o=n(a(36810)),i=a(35535),l=a(35535),r=i.createComponent({props:{color:String,disabled:Boolean,elementAttr:Object,endScaleValue:Number,margin:Object,onDisposing:Function,onDrawn:Function,onExported:Function,onExporting:Function,onFileSaving:Function,onIncidentOccurred:Function,onInitialized:Function,onOptionChanged:Function,onTooltipHidden:Function,onTooltipShown:Function,pathModified:Boolean,rtlEnabled:Boolean,showTarget:Boolean,showZeroLevel:Boolean,size:Object,startScaleValue:Number,target:Number,targetColor:String,targetWidth:Number,theme:String,tooltip:Object,value:Number},emits:{"update:isActive":null,"update:hoveredElement":null,"update:color":null,"update:disabled":null,"update:elementAttr":null,"update:endScaleValue":null,"update:margin":null,"update:onDisposing":null,"update:onDrawn":null,"update:onExported":null,"update:onExporting":null,"update:onFileSaving":null,"update:onIncidentOccurred":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onTooltipHidden":null,"update:onTooltipShown":null,"update:pathModified":null,"update:rtlEnabled":null,"update:showTarget":null,"update:showZeroLevel":null,"update:size":null,"update:startScaleValue":null,"update:target":null,"update:targetColor":null,"update:targetWidth":null,"update:theme":null,"update:tooltip":null,"update:value":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=o.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={margin:{isCollectionItem:!1,optionName:"margin"},size:{isCollectionItem:!1,optionName:"size"},tooltip:{isCollectionItem:!1,optionName:"tooltip"}}}});e.DxBullet=r;var u=l.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:color":null,"update:dashStyle":null,"update:opacity":null,"update:visible":null,"update:width":null},props:{color:String,dashStyle:String,opacity:Number,visible:Boolean,width:Number}});e.DxBorder=u,u.$_optionName="border";var s=l.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:color":null,"update:family":null,"update:opacity":null,"update:size":null,"update:weight":null},props:{color:String,family:String,opacity:Number,size:[Number,String],weight:Number}});e.DxFont=s,s.$_optionName="font";var p=l.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:currency":null,"update:formatter":null,"update:parser":null,"update:precision":null,"update:type":null,"update:useCurrencyAccountingStyle":null},props:{currency:String,formatter:Function,parser:Function,precision:Number,type:String,useCurrencyAccountingStyle:Boolean}});e.DxFormat=p,p.$_optionName="format";var d=l.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:bottom":null,"update:left":null,"update:right":null,"update:top":null},props:{bottom:Number,left:Number,right:Number,top:Number}});e.DxMargin=d,d.$_optionName="margin";var h=l.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:blur":null,"update:color":null,"update:offsetX":null,"update:offsetY":null,"update:opacity":null},props:{blur:Number,color:String,offsetX:Number,offsetY:Number,opacity:Number}});e.DxShadow=h,h.$_optionName="shadow";var c=l.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:height":null,"update:width":null},props:{height:Number,width:Number}});e.DxSize=c,c.$_optionName="size";var _=l.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:arrowLength":null,"update:border":null,"update:color":null,"update:container":null,"update:contentTemplate":null,"update:cornerRadius":null,"update:customizeTooltip":null,"update:enabled":null,"update:font":null,"update:format":null,"update:interactive":null,"update:opacity":null,"update:paddingLeftRight":null,"update:paddingTopBottom":null,"update:shadow":null,"update:zIndex":null},props:{arrowLength:Number,border:Object,color:String,container:{},contentTemplate:{},cornerRadius:Number,customizeTooltip:Function,enabled:Boolean,font:Object,format:[Object,Function,String],interactive:Boolean,opacity:Number,paddingLeftRight:Number,paddingTopBottom:Number,shadow:Object,zIndex:Number}});e.DxTooltip=_,_.$_optionName="tooltip",_.$_expectedChildren={border:{isCollectionItem:!1,optionName:"border"},font:{isCollectionItem:!1,optionName:"font"},format:{isCollectionItem:!1,optionName:"format"},shadow:{isCollectionItem:!1,optionName:"shadow"}},e["default"]=r},36810:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(12145),o=a(94723),i=a(70732),l=.02,r=.98,u=.1,s=.9,p=300,d=30,h=1,c=2,_=Number,g=isFinite,m=o.Z.inherit({_rootClassPrefix:"dxb",_rootClass:"dxb-bullet",_themeSection:"bullet",_defaultSize:{width:p,height:d,left:h,right:h,top:c,bottom:c},_disposeWidgetElements:function(){delete this._zeroLevelPath,delete this._targetPath,delete this._barValuePath},_cleanWidgetElements:function(){this._zeroLevelPath.remove(),this._targetPath.remove(),this._barValuePath.remove()},_drawWidgetElements:function(){this._drawBullet(),this._drawn()},_createHtmlElements:function(){var t=this._renderer;this._zeroLevelPath=t.path(void 0,"line").attr({class:"dxb-zero-level","stroke-linecap":"square"}),this._targetPath=t.path(void 0,"line").attr({class:"dxb-target","stroke-linecap":"square"}),this._barValuePath=t.path(void 0,"line").attr({class:"dxb-bar-value","stroke-linecap":"square"})},_prepareOptions:function(){var t,e,a,n,o,i;this._allOptions=t=this.callBase();var l=void 0===this._allOptions.value,r=void 0===this._allOptions.target;this._tooltipEnabled=!(l&&r),l&&(this._allOptions.value=0),r&&(this._allOptions.target=0),t.value=o=_(t.value),t.target=i=_(t.target),void 0===this._allOptions.startScaleValue&&(this._allOptions.startScaleValue=i<o?i:o,this._allOptions.startScaleValue=this._allOptions.startScaleValue<0?this._allOptions.startScaleValue:0),void 0===this._allOptions.endScaleValue&&(this._allOptions.endScaleValue=i>o?i:o),t.startScaleValue=e=_(t.startScaleValue),t.endScaleValue=a=_(t.endScaleValue),a<e&&(n=a,this._allOptions.endScaleValue=e,this._allOptions.startScaleValue=n,this._allOptions.inverted=!0)},_updateRange:function(){var t=this._allOptions;this._ranges={arg:{invert:t.rtlEnabled?!t.inverted:t.inverted,min:t.startScaleValue,max:t.endScaleValue,axisType:"continuous",dataType:"numeric"},val:{min:0,max:1,axisType:"continuous",dataType:"numeric"}}},_drawBullet:function(){var t=this._allOptions,e=t.startScaleValue!==t.endScaleValue,a=g(t.startScaleValue),n=g(t.endScaleValue),o=g(t.value),i=g(t.target);e&&n&&a&&i&&o&&(this._drawBarValue(),this._drawTarget(),this._drawZeroLevel())},_getTargetParams:function(){var t=this._allOptions,e=this._valueAxis.getTranslator(),a=this._argumentAxis.getTranslator().translate(t.target);return{points:[a,e.translate(l),a,e.translate(r)],stroke:t.targetColor,"stroke-width":t.targetWidth}},_getBarValueParams:function(){var t,e,a=this._allOptions,n=this._argumentAxis.getTranslator(),o=this._valueAxis.getTranslator(),i=a.startScaleValue,l=a.endScaleValue,r=a.value,p=o.translate(u),d=o.translate(s);return r>0?(t=i<=0?0:i,e=r>=l?l:r<t?t:r):(t=l>=0?0:l,e=r<i?i:r>t?t:r),t=n.translate(t),e=n.translate(e),{points:[t,d,e,d,e,p,t,p],fill:a.color}},_getCorrectCanvas:function(){return this._canvas},_getZeroLevelParams:function(){var t=this._valueAxis.getTranslator(),e=this._argumentAxis.getTranslator().translate(0);return{points:[e,t.translate(l),e,t.translate(r)],stroke:this._allOptions.targetColor,"stroke-width":1}},_drawZeroLevel:function(){var t=this._allOptions;0>t.endScaleValue||0<t.startScaleValue||!t.showZeroLevel||this._zeroLevelPath.attr(this._getZeroLevelParams()).sharp().append(this._renderer.root)},_drawTarget:function(){var t=this._allOptions,e=t.target;e>t.endScaleValue||e<t.startScaleValue||!t.showTarget||this._targetPath.attr(this._getTargetParams()).sharp().append(this._renderer.root)},_drawBarValue:function(){this._barValuePath.attr(this._getBarValueParams()).append(this._renderer.root)},_getTooltipCoords:function(){var t=this._canvas,e=this._renderer.getRootOffset(),a=this._barValuePath.getBBox();return{x:a.x+a.width/2+e.left,y:t.height/2+e.top}},_getTooltipData:function(){var t=this._tooltip,e=this._allOptions,a=e.value,n=e.target,o=t.formatValue(a),i=t.formatValue(n);return{originalValue:a,originalTarget:n,value:o,target:i,valueText:["Actual Value:",o,"Target Value:",i]}},_isTooltipEnabled:function(){return this._tooltipEnabled}});(0,n.S6)(["color","targetColor","targetWidth","showTarget","showZeroLevel","value","target","startScaleValue","endScaleValue"],(function(t,e){m.prototype._optionChangesMap[e]="OPTIONS"})),(0,i.Z)("dxBullet",m);var v=m,f=v},94723:function(t,e,a){var n,o=a(66487),i=a(33158),l=a(9783),r=a(66060),u=a(72602),s=a(84518),p=a(12901),d=a(77344),h=a(83147),c=a(84392),_=a(53151),g=a(21979),m=2,v="sparkline-tooltip",f=(0,s.V4)([p.Z.down,p.Z.move],v),b=u.l,T=Math.floor;function S(t,e,a){var{width:n,height:o}=t;return(0,d.kY)({left:0,top:0,right:n,bottom:o,width:n,height:o},e,a)}function O(t){var{data:e}=t,a=e.widget;a._enableOutHandler(),a._showTooltip()}function w(t,e){var a=t.lineSpacing,n=(void 0!==a&&null!==a?a:m)+t.size;return function(t){for(var a="",o=t.valueText,i=0;i<o.length;i+=2)a+="<tr><td>"+o[i]+"</td><td style='width: 15px'></td><td style='text-align: "+(e?"left":"right")+"'>"+o[i+1]+"</td></tr>";return{html:"<table style='border-spacing:0px; line-height: "+n+"px'>"+a+"</table>"}}}function x(t,e,a){var n=w(e,a);return(0,l.mf)(t)?function(e){var a=t.call(e,e);return"html"in a||"text"in a||b(a,n.call(e,e)),a}:n}function C(t){var e=new h.r({},{},{shiftZeroValue:!t,isHorizontal:!!t});return{getTranslator:function(){return e},update:function(t,a,n){e.update(t,a,n)},getVisibleArea(){var t=e.getCanvasVisibleArea();return[t.min,t.max]},visualRange:c.ZT,calculateInterval:c.ZT,getMarginOptions:()=>({}),aggregatedPointBetweenTicks:()=>!1}}var V=r.Z.inherit({_getLayoutItems:c.ZT,_useLinks:!1,_themeDependentChanges:["OPTIONS"],_initCore:function(){this._tooltipTracker=this._renderer.root,this._tooltipTracker.attr({"pointer-events":"visible"}),this._createHtmlElements(),this._initTooltipEvents(),this._argumentAxis=C(!0),this._valueAxis=C()},_getDefaultSize:function(){return this._defaultSize},_disposeCore:function(){this._disposeWidgetElements(),this._disposeTooltipEvents(),this._ranges=null},_optionChangesOrder:["OPTIONS"],_change_OPTIONS:function(){this._prepareOptions(),this._change(["UPDATE"])},_customChangesOrder:["UPDATE"],_change_UPDATE:function(){this._update()},_update:function(){this._tooltipShown&&(this._tooltipShown=!1,this._tooltip.hide()),this._cleanWidgetElements(),this._updateWidgetElements(),this._drawWidgetElements()},_updateWidgetElements:function(){var t=this._getCorrectCanvas();this._updateRange(),this._argumentAxis.update(this._ranges.arg,t,this._getStick()),this._valueAxis.update(this._ranges.val,t)},_getStick:function(){},_applySize:function(t){this._allOptions.size={width:t[2]-t[0],height:t[3]-t[1]},this._change(["UPDATE"])},_setupResizeHandler:c.ZT,_prepareOptions:function(){return b(!0,{},this._themeManager.theme(),this.option())},_getTooltipCoords:function(){var t=this._canvas,e=this._renderer.getRootOffset();return{x:t.width/2+e.left,y:t.height/2+e.top}},_initTooltipEvents(){var t={widget:this};this._renderer.root.off("."+v).on(f,t,O)},_showTooltip(){var t;this._tooltipShown||(this._tooltipShown=!0,t=this._getTooltip(),t.isEnabled()&&this._tooltip.show(this._getTooltipData(),this._getTooltipCoords(),{}))},_hideTooltip(){this._tooltipShown&&(this._tooltipShown=!1,this._tooltip.hide())},_stopCurrentHandling(){this._hideTooltip()},_enableOutHandler(){var t=this;if(!t._outHandler){var e=e=>{var{pageX:a,pageY:n}=e,{left:o,top:i}=t._renderer.getRootOffset(),l=T(a-o),r=T(n-i);S(t._canvas,l,r)||(t._hideTooltip(),t._disableOutHandler())};o.Z.on(i["default"].getDocument(),f,e),this._outHandler=e}},_disableOutHandler(){this._outHandler&&o.Z.off(i["default"].getDocument(),f,this._outHandler),this._outHandler=null},_disposeTooltipEvents:function(){this._tooltipTracker.off(),this._disableOutHandler(),this._renderer.root.off("."+v)},_getTooltip:function(){var t=this;return t._tooltip||(n.apply(this,arguments),t._setTooltipRendererOptions(t._tooltipRendererOptions),t._tooltipRendererOptions=null,t._setTooltipOptions()),t._tooltip}});e["Z"]=V,V.addPlugin(_.B),n=V.prototype._initTooltip,V.prototype._initTooltip=c.ZT;var N=V.prototype._disposeTooltip;V.prototype._disposeTooltip=function(){this._tooltip&&N.apply(this,arguments)},V.prototype._setTooltipRendererOptions=function(){var t=this._getRendererOptions();this._tooltip?this._tooltip.setRendererOptions(t):this._tooltipRendererOptions=t},V.prototype._setTooltipOptions=function(){var t=this._tooltip,e=t&&this._getOption("tooltip");t&&t.update(b({},e,{customizeTooltip:x(e.customizeTooltip,e.font,this.option("rtlEnabled")),enabled:e.enabled&&this._isTooltipEnabled()}))};var y=(0,u.l)(!0,{},g.BA,{init:c.ZT,dispose:c.ZT,customize:null,members:{_getExportMenuOptions:null}});V.addPlugin(y)}}]);