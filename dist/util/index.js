"use strict";var _d=require("d3");Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculateNeedleHeight=calculateNeedleHeight,exports.calculateSegmentLabelCount=calculateSegmentLabelCount,exports.calculateScale=calculateScale,exports.calculateTicks=calculateTicks;function calculateNeedleHeight(a,b){if(0>a||1<a)throw new Error("Invalid needleHeightRatio given - ".concat(a));return Math.round(b*a)}function calculateSegmentLabelCount(a,b){var c=parseInt(a,10),d=parseInt(b,10);return c&&0<c&&c<=b?c:b}function calculateScale(a){var b=a.min,c=a.max,d=a.segments;return(0,_d.scaleLinear)().range([0,1]).domain([b,c]).nice(d)}function calculateTicks(a,b){var c=b.min,d=b.max,e=b.segments,f=[];return f=a.ticks(e),1===f.length&&(f=[c,d]),f}