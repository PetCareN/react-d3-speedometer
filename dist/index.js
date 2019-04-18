"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_d=require("d3"),_util=require("./util/"),ReactSpeedometer=function(a){function b(a){var c;return(0,_classCallCheck2.default)(this,b),c=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(b).call(this,a)),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(c),"render",function(){return _react.default.createElement("div",{ref:function b(a){return c.gaugeDiv=a}})}),c._d3_refs={powerGauge:!1},c.initialValue=0,c}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"componentWillMount",value:function a(){}},{key:"componentDidMount",value:function a(){this.renderGauge()}},{key:"componentWillReceiveProps",value:function a(){this.initialValue=this.props.value||0}},{key:"shouldComponentUpdate",value:function b(a){return!0}},{key:"componentWillUpdate",value:function a(){}},{key:"componentDidUpdate",value:function a(){this.props.forceRender?this.renderGauge():this.updateReadings()}},{key:"getGauge",value:function c(){var a=this,b=this.props;return function(c){function e(a){var b=Math.PI;return a*b/180}function f(){n=m.maxAngle-m.minAngle,o=m.width/2,d=(0,_util.calculateNeedleHeight)(m.needleHeightRatio,o),s=(0,_util.calculateScale)({min:m.minValue,max:m.maxValue,segments:m.maxSegmentLabels}),t=(0,_util.calculateTicks)(s,{min:m.minValue,max:m.maxValue,segments:m.maxSegmentLabels}),u=(0,_d.range)(m.majorTicks).map(function(){return 1/m.majorTicks}),q=(0,_d.arc)().innerRadius(o-m.ringWidth-m.ringInset).outerRadius(o-m.ringInset).startAngle(function(a,b){return e(m.minAngle+a*b*n)}).endAngle(function(a,b){return e(m.minAngle+a*(b+1)*n)})}function g(){return"translate("+o+","+o+")"}function h(){return void 0!==p}function i(){p=(0,_d.select)(c).append("svg:svg").attr("class","speedometer").attr("width",m.width).attr("height",m.height);var b=g(),e=p.append("g").attr("class","arc").attr("transform",b);e.selectAll("path").data(u).enter().append("path").attr("class","speedo-segment").attr("fill",function(a,b){return m.arcColorFn(a*b)}).attr("d",q);var f=p.append("g").attr("class","label").attr("transform",b);f.selectAll("text").data(t).enter().append("text").attr("transform",function(a){var b=s(a),c=m.minAngle+b*n;return"rotate("+c+") translate(0,"+(m.labelInset-o)+")"}).text(m.labelFormat).attr("class","segment-value").style("text-anchor","middle").style("font-size","14px").style("font-weight","bold").style("fill",m.textColor),a._d3_refs.current_value_text=p.append("g").attr("transform","translate("+m.width/2+","+m.width/2+")").append("text").attr("class","current-value").attr("text-anchor","middle").attr("y",23).text(m.currentValue||"").style("font-size","16px").style("font-weight","bold").style("fill",m.textColor);var h=[[m.pointerWidth/2,0],[0,-d],[-(m.pointerWidth/2),0],[0,m.pointerTailLength],[m.pointerWidth/2,0]],i=(0,_d.line)().curve(_d.curveMonotoneX),j=p.append("g").data([h]).attr("class","pointer").attr("transform",b).style("fill",m.needleColor);a._d3_refs.pointer=j.append("path").attr("d",i).attr("transform","rotate("+m.minAngle+")")}function j(a){var b=m.labelFormat(a),c=m.currentValuePlaceholderStyle;return m.currentValueText.replace(c,b)}function k(b){var c=s(b),d=m.minAngle+c*n;a._d3_refs.pointer.transition().duration(m.needleTransitionDuration).ease(a.getTransitionMethod(m.needleTransition)).attr("transform","rotate("+d+")"),a._d3_refs.current_value_text.text(j(b))}var l={ringInset:20,pointerWidth:10,pointerTailLength:5,minAngle:-90,maxAngle:90,labelInset:10,parentWidth:a.gaugeDiv.parentNode.clientWidth,parentHeight:a.gaugeDiv.parentNode.clientHeight},m={width:b.fluidWidth?l.parentWidth:b.width,height:b.fluidWidth?l.parentHeight:b.height,ringWidth:b.ringWidth,minValue:b.minValue,maxValue:b.maxValue,needleColor:b.needleColor,majorTicks:b.segments,maxSegmentLabels:(0,_util.calculateSegmentLabelCount)(b.maxSegmentLabels,b.segments),arcColorFn:b.arcColorFn||(0,_d.interpolateHsl)((0,_d.rgb)(b.startColor),(0,_d.rgb)(b.endColor)),needleTransition:b.needleTransition,needleTransitionDuration:b.needleTransitionDuration,needleHeightRatio:b.needleHeightRatio,textColor:b.textColor,labelFormat:(0,_d.format)(b.valueFormat),currentValueText:b.currentValueText,currentValuePlaceholderStyle:b.currentValuePlaceholderStyle};m=Object.assign({},l,m);var n=void 0,o=void 0,d=void 0,p=void 0,q=void 0,s=void 0,t=void 0,u=void 0,v=(0,_d.pie)();return f(),{configure:f,isRendered:h,render:i,update:k,config:m}}}},{key:"renderGauge",value:function a(){(0,_d.select)(this.gaugeDiv).select("svg").remove(),this._d3_refs.powerGauge=this.getGauge()(this.gaugeDiv),this._d3_refs.powerGauge.render(this.initialValue),this.updateReadings()}},{key:"updateReadings",value:function a(){this._d3_refs.powerGauge.config.labelFormat=(0,_d.format)(this.props.valueFormat||""),this._d3_refs.powerGauge.config.currentValueText=this.props.currentValueText||"${value}",this._d3_refs.powerGauge.update(this.props.value||0)}},{key:"getTransitionMethod",value:function b(a){switch(a){case"easeLinear":return _d.easeLinear;break;case"easeQuadIn":return _d.easeQuadIn;break;case"easeQuadOut":return _d.easeQuadOut;break;case"easeQuadInOut":return _d.easeQuadInOut;break;case"easeCubicIn":return _d.easeCubicIn;break;case"easeCubicOut":return _d.easeCubicOut;break;case"easeCubicInOut":return _d.easeCubicInOut;break;case"easePolyIn":return _d.easePolyIn;break;case"easePolyOut":return _d.easePolyOut;break;case"easePolyInOut":return _d.easePolyInOut;break;case"easeSinIn":return _d.easeSinIn;break;case"easeSinOut":return _d.easeSinOut;break;case"easeSinInOut":return _d.easeSinInOut;break;case"easeExpIn":return _d.easeExpIn;break;case"easeExpOut":return _d.easeExpOut;break;case"easeExpInOut":return _d.easeExpInOut;break;case"easeCircleIn":return _d.easeCircleIn;break;case"easeCircleOut":return _d.easeCircleOut;break;case"easeCircleInOut":return _d.easeCircleInOut;break;case"easeBounceIn":return _d.easeBounceIn;break;case"easeBounceOut":return _d.easeBounceOut;break;case"easeBounceInOut":return _d.easeBounceInOut;break;case"easeBackIn":return _d.easeBackIn;break;case"easeBackOut":return _d.easeBackOut;break;case"easeBackInOut":return _d.easeBackInOut;break;case"easeElasticIn":return _d.easeElasticIn;break;case"easeElasticOut":return _d.easeElasticOut;break;case"easeElasticInOut":return _d.easeElasticInOut;break;case"easeElastic":return _d.easeElastic;break;case"easeElastic":return _d.easeElastic;break;default:return _d.easeQuadInOut;}}}]),b}(_react.default.Component);(0,_defineProperty2.default)(ReactSpeedometer,"displayName","ReactSpeedometer"),ReactSpeedometer.propTypes={value:_propTypes.default.number.isRequired,minValue:_propTypes.default.number.isRequired,maxValue:_propTypes.default.number.isRequired,forceRender:_propTypes.default.bool.isRequired,width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,fluidWidth:_propTypes.default.bool.isRequired,segments:_propTypes.default.number.isRequired,maxSegmentLabels:_propTypes.default.number.isRequired,needleColor:_propTypes.default.string.isRequired,startColor:_propTypes.default.string.isRequired,endColor:_propTypes.default.string.isRequired,arcColorFn:_propTypes.default.function,needleTransition:_propTypes.default.string.isRequired,needleTransitionDuration:_propTypes.default.number.isRequired,needleHeightRatio:_propTypes.default.number.isRequired,ringWidth:_propTypes.default.number.isRequired,textColor:_propTypes.default.string.isRequired,valueFormat:_propTypes.default.string.isRequired,currentValueText:_propTypes.default.string.isRequired,currentValuePlaceholderStyle:_propTypes.default.string.isRequired},ReactSpeedometer.defaultProps={value:0,minValue:0,maxValue:1e3,forceRender:!1,width:300,height:300,fluidWidth:!1,segments:5,maxSegmentLabels:0,needleColor:"steelblue",startColor:"#FF471A",endColor:"#33CC33",needleTransition:"easeQuadInOut",needleTransitionDuration:500,needleHeightRatio:.9,ringWidth:60,textColor:"#666",valueFormat:"",currentValueText:"${value}",currentValuePlaceholderStyle:"${value}"};var _default=ReactSpeedometer;exports.default=_default;