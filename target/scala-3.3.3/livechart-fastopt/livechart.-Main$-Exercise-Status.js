'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$ExerciseStatus(lastCheck, showSolution, wrongAttempts) {
  this.Llivechart_Main$ExerciseStatus__f_lastCheck = null;
  this.Llivechart_Main$ExerciseStatus__f_showSolution = false;
  this.Llivechart_Main$ExerciseStatus__f_wrongAttempts = 0;
  this.Llivechart_Main$ExerciseStatus__f_lastCheck = lastCheck;
  this.Llivechart_Main$ExerciseStatus__f_showSolution = showSolution;
  this.Llivechart_Main$ExerciseStatus__f_wrongAttempts = wrongAttempts;
}
export { $c_Llivechart_Main$ExerciseStatus as $c_Llivechart_Main$ExerciseStatus };
$c_Llivechart_Main$ExerciseStatus.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$ExerciseStatus.prototype.constructor = $c_Llivechart_Main$ExerciseStatus;
/** @constructor */
function $h_Llivechart_Main$ExerciseStatus() {
}
export { $h_Llivechart_Main$ExerciseStatus as $h_Llivechart_Main$ExerciseStatus };
$h_Llivechart_Main$ExerciseStatus.prototype = $c_Llivechart_Main$ExerciseStatus.prototype;
$c_Llivechart_Main$ExerciseStatus.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_Main$ExerciseStatus.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("ExerciseStatus");
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Llivechart_Main$ExerciseStatus__f_lastCheck;
  var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var data$2 = (this.Llivechart_Main$ExerciseStatus__f_showSolution ? 1231 : 1237);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var data$3 = this.Llivechart_Main$ExerciseStatus__f_wrongAttempts;
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3);
});
$c_Llivechart_Main$ExerciseStatus.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Main$ExerciseStatus)) {
    var x$0$2 = $as_Llivechart_Main$ExerciseStatus(x$0);
    if (((this.Llivechart_Main$ExerciseStatus__f_showSolution === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ExerciseStatus__f_showSolution) && (this.Llivechart_Main$ExerciseStatus__f_wrongAttempts === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ExerciseStatus__f_wrongAttempts))) {
      var x = this.Llivechart_Main$ExerciseStatus__f_lastCheck;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ExerciseStatus__f_lastCheck;
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
$c_Llivechart_Main$ExerciseStatus.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_Main$ExerciseStatus.prototype.productArity__I = (function() {
  return 3;
});
$c_Llivechart_Main$ExerciseStatus.prototype.productPrefix__T = (function() {
  return "ExerciseStatus";
});
$c_Llivechart_Main$ExerciseStatus.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llivechart_Main$ExerciseStatus__f_lastCheck;
      break;
    }
    case 1: {
      return this.Llivechart_Main$ExerciseStatus__f_showSolution;
      break;
    }
    case 2: {
      return this.Llivechart_Main$ExerciseStatus__f_wrongAttempts;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Llivechart_Main$ExerciseStatus(obj) {
  return (((obj instanceof $c_Llivechart_Main$ExerciseStatus) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.Main$ExerciseStatus"));
}
export { $as_Llivechart_Main$ExerciseStatus as $as_Llivechart_Main$ExerciseStatus };
function $isArrayOf_Llivechart_Main$ExerciseStatus(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_Main$ExerciseStatus)));
}
export { $isArrayOf_Llivechart_Main$ExerciseStatus as $isArrayOf_Llivechart_Main$ExerciseStatus };
function $asArrayOf_Llivechart_Main$ExerciseStatus(obj, depth) {
  return (($isArrayOf_Llivechart_Main$ExerciseStatus(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.Main$ExerciseStatus;", depth));
}
export { $asArrayOf_Llivechart_Main$ExerciseStatus as $asArrayOf_Llivechart_Main$ExerciseStatus };
var $d_Llivechart_Main$ExerciseStatus = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$ExerciseStatus, "livechart.Main$ExerciseStatus", ({
  Llivechart_Main$ExerciseStatus: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Main$ExerciseStatus as $d_Llivechart_Main$ExerciseStatus };
//# sourceMappingURL=livechart.-Main$-Exercise-Status.js.map
