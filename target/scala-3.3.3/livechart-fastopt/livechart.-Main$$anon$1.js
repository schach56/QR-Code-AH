'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$$anon$1(zigzagMapping$4, allPixels$4) {
  this.Llivechart_Main$$anon$1__f_zigzagMapping$3 = null;
  this.Llivechart_Main$$anon$1__f_allPixels$2 = null;
  this.Llivechart_Main$$anon$1__f_zigzagMapping$3 = zigzagMapping$4;
  this.Llivechart_Main$$anon$1__f_allPixels$2 = allPixels$4;
}
export { $c_Llivechart_Main$$anon$1 as $c_Llivechart_Main$$anon$1 };
$c_Llivechart_Main$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Llivechart_Main$$anon$1.prototype.constructor = $c_Llivechart_Main$$anon$1;
/** @constructor */
function $h_Llivechart_Main$$anon$1() {
}
export { $h_Llivechart_Main$$anon$1 as $h_Llivechart_Main$$anon$1 };
$h_Llivechart_Main$$anon$1.prototype = $c_Llivechart_Main$$anon$1.prototype;
$c_Llivechart_Main$$anon$1.prototype.isDefinedAt__T2__Z = (function(x) {
  if ((x !== null)) {
    var bit = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._1__O());
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._2__O());
    if ((bit === 1)) {
      return true;
    }
  }
  return false;
});
$c_Llivechart_Main$$anon$1.prototype.applyOrElse__T2__F1__O = (function(x, default$1) {
  if ((x !== null)) {
    var bit = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._1__O());
    var bitIndex = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._2__O());
    if ((bit === 1)) {
      var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$$anon$1__f_zigzagMapping$3);
      var pixelPos = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$1, bitIndex));
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$$anon$1__f_allPixels$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$2, pixelPos);
    }
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x);
});
$c_Llivechart_Main$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__T2__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x));
});
$c_Llivechart_Main$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__T2__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x), default$1);
});
var $d_Llivechart_Main$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$$anon$1, "livechart.Main$$anon$1", ({
  Llivechart_Main$$anon$1: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Main$$anon$1 as $d_Llivechart_Main$$anon$1 };
//# sourceMappingURL=livechart.-Main$$anon$1.js.map
