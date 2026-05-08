'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Llivechart_Main$$anon$1(zigzagMapping$4, allPixels$4) {
  this.v4 = null;
  this.v3 = null;
  this.v4 = zigzagMapping$4;
  this.v3 = allPixels$4;
}
export { $c_Llivechart_Main$$anon$1 as $c_Llivechart_Main$$anon$1 };
$p = $c_Llivechart_Main$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$p.constructor = $c_Llivechart_Main$$anon$1;
/** @constructor */
function $h_Llivechart_Main$$anon$1() {
}
export { $h_Llivechart_Main$$anon$1 as $h_Llivechart_Main$$anon$1 };
$h_Llivechart_Main$$anon$1.prototype = $p;
$p.iy = (function(x) {
  if ((x !== null)) {
    var bit = (x.C() | 0);
    (x.D() | 0);
    if ((bit === 1)) {
      return true;
    }
  }
  return false;
});
$p.im = (function(x, default$1) {
  if ((x !== null)) {
    var bit = (x.C() | 0);
    var bitIndex = (x.D() | 0);
    if ((bit === 1)) {
      var pixelPos = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this.v4, bitIndex) | 0);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this.v3, pixelPos);
    }
  }
  return default$1.m(x);
});
$p.dw = (function(x) {
  return this.iy(x);
});
$p.cX = (function(x, default$1) {
  return this.im(x, default$1);
});
var $d_Llivechart_Main$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_Main$$anon$1, "livechart.Main$$anon$1", ({
  h5: 1,
  al: 1,
  i: 1,
  l: 1,
  a: 1
}));
export { $d_Llivechart_Main$$anon$1 as $d_Llivechart_Main$$anon$1 };
//# sourceMappingURL=livechart.-Main$$anon$1.js.map
