'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$$anon$3(idx$28, pattern$2) {
  this.Llivechart_Main$$anon$3__f_idx$1 = 0;
  this.Llivechart_Main$$anon$3__f_pattern$1 = null;
  this.Llivechart_Main$$anon$3__f_idx$1 = idx$28;
  this.Llivechart_Main$$anon$3__f_pattern$1 = pattern$2;
}
export { $c_Llivechart_Main$$anon$3 as $c_Llivechart_Main$$anon$3 };
$c_Llivechart_Main$$anon$3.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Llivechart_Main$$anon$3.prototype.constructor = $c_Llivechart_Main$$anon$3;
/** @constructor */
function $h_Llivechart_Main$$anon$3() {
}
export { $h_Llivechart_Main$$anon$3 as $h_Llivechart_Main$$anon$3 };
$h_Llivechart_Main$$anon$3.prototype = $c_Llivechart_Main$$anon$3.prototype;
$c_Llivechart_Main$$anon$3.prototype.isDefinedAt__T2__Z = (function(x) {
  if ((x !== null)) {
    var p = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._1__O());
    var i = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._2__O());
    if ((i !== this.Llivechart_Main$$anon$3__f_idx$1)) {
      var x$3 = this.Llivechart_Main$$anon$3__f_pattern$1;
      var $x_1 = ((p === null) ? (x$3 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).equals__O__Z(x$3));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return true;
    }
  }
  return false;
});
$c_Llivechart_Main$$anon$3.prototype.applyOrElse__T2__F1__O = (function(x, default$1) {
  if ((x !== null)) {
    var p = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._1__O());
    var i = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x)._2__O());
    if ((i !== this.Llivechart_Main$$anon$3__f_idx$1)) {
      var x$3 = this.Llivechart_Main$$anon$3__f_pattern$1;
      var $x_1 = ((p === null) ? (x$3 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).equals__O__Z(x$3));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return i;
    }
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x);
});
$c_Llivechart_Main$$anon$3.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__T2__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x));
});
$c_Llivechart_Main$$anon$3.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__T2__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x), default$1);
});
var $d_Llivechart_Main$$anon$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$$anon$3, "livechart.Main$$anon$3", ({
  Llivechart_Main$$anon$3: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Main$$anon$3 as $d_Llivechart_Main$$anon$3 };
//# sourceMappingURL=livechart.-Main$$anon$3.js.map
