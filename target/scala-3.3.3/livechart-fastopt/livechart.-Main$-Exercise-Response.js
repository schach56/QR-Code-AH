'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$ExerciseResponse(task, answer) {
  this.Llivechart_Main$ExerciseResponse__f_task = null;
  this.Llivechart_Main$ExerciseResponse__f_answer = null;
  this.Llivechart_Main$ExerciseResponse__f_task = task;
  this.Llivechart_Main$ExerciseResponse__f_answer = answer;
}
export { $c_Llivechart_Main$ExerciseResponse as $c_Llivechart_Main$ExerciseResponse };
$c_Llivechart_Main$ExerciseResponse.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$ExerciseResponse.prototype.constructor = $c_Llivechart_Main$ExerciseResponse;
/** @constructor */
function $h_Llivechart_Main$ExerciseResponse() {
}
export { $h_Llivechart_Main$ExerciseResponse as $h_Llivechart_Main$ExerciseResponse };
$h_Llivechart_Main$ExerciseResponse.prototype = $c_Llivechart_Main$ExerciseResponse.prototype;
$c_Llivechart_Main$ExerciseResponse.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_Main$ExerciseResponse.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Llivechart_Main$ExerciseResponse.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Main$ExerciseResponse)) {
    var x$0$2 = $as_Llivechart_Main$ExerciseResponse(x$0);
    if ((this.Llivechart_Main$ExerciseResponse__f_task === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ExerciseResponse__f_task)) {
      var x = this.Llivechart_Main$ExerciseResponse__f_answer;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ExerciseResponse__f_answer;
      var $x_1 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Llivechart_Main$ExerciseResponse.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_Main$ExerciseResponse.prototype.productArity__I = (function() {
  return 2;
});
$c_Llivechart_Main$ExerciseResponse.prototype.productPrefix__T = (function() {
  return "ExerciseResponse";
});
$c_Llivechart_Main$ExerciseResponse.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Llivechart_Main$ExerciseResponse__f_task;
  }
  if ((n === 1)) {
    return this.Llivechart_Main$ExerciseResponse__f_answer;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Llivechart_Main$ExerciseResponse(obj) {
  return (((obj instanceof $c_Llivechart_Main$ExerciseResponse) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.Main$ExerciseResponse"));
}
export { $as_Llivechart_Main$ExerciseResponse as $as_Llivechart_Main$ExerciseResponse };
function $isArrayOf_Llivechart_Main$ExerciseResponse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_Main$ExerciseResponse)));
}
export { $isArrayOf_Llivechart_Main$ExerciseResponse as $isArrayOf_Llivechart_Main$ExerciseResponse };
function $asArrayOf_Llivechart_Main$ExerciseResponse(obj, depth) {
  return (($isArrayOf_Llivechart_Main$ExerciseResponse(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.Main$ExerciseResponse;", depth));
}
export { $asArrayOf_Llivechart_Main$ExerciseResponse as $asArrayOf_Llivechart_Main$ExerciseResponse };
var $d_Llivechart_Main$ExerciseResponse = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$ExerciseResponse, "livechart.Main$ExerciseResponse", ({
  Llivechart_Main$ExerciseResponse: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Main$ExerciseResponse as $d_Llivechart_Main$ExerciseResponse };
//# sourceMappingURL=livechart.-Main$-Exercise-Response.js.map
