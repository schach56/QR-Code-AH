'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Llivechart_Main$ExerciseStatus(lastCheck, showSolution, wrongAttempts) {
  this.gD = null;
  this.hE = false;
  this.hF = 0;
  this.gD = lastCheck;
  this.hE = showSolution;
  this.hF = wrongAttempts;
}
export { $c_Llivechart_Main$ExerciseStatus as $c_Llivechart_Main$ExerciseStatus };
$p = $c_Llivechart_Main$ExerciseStatus.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_Main$ExerciseStatus;
/** @constructor */
function $h_Llivechart_Main$ExerciseStatus() {
}
export { $h_Llivechart_Main$ExerciseStatus as $h_Llivechart_Main$ExerciseStatus };
$h_Llivechart_Main$ExerciseStatus.prototype = $p;
$p.c1 = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.V = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().x(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("ExerciseStatus"));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().x(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ae(this.gD));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().x(acc, (this.hE ? 1231 : 1237));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().x(acc, this.hF);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().aj(acc, 3);
});
$p.C = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Main$ExerciseStatus)) {
    if (((this.hE === x$0.hE) && (this.hF === x$0.hF))) {
      var x = this.gD;
      var x$2 = x$0.gD;
      return ((x === null) ? (x$2 === null) : x.C(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.R = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().hd(this);
});
$p.bK = (function() {
  return 3;
});
$p.bM = (function() {
  return "ExerciseStatus";
});
$p.bL = (function(n) {
  switch (n) {
    case 0: {
      return this.gD;
      break;
    }
    case 1: {
      return this.hE;
      break;
    }
    case 2: {
      return this.hF;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Llivechart_Main$ExerciseStatus(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
export { $isArrayOf_Llivechart_Main$ExerciseStatus as $isArrayOf_Llivechart_Main$ExerciseStatus };
var $d_Llivechart_Main$ExerciseStatus = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_Main$ExerciseStatus, "livechart.Main$ExerciseStatus", ({
  c2: 1,
  d: 1,
  x: 1,
  a: 1
}));
export { $d_Llivechart_Main$ExerciseStatus as $d_Llivechart_Main$ExerciseStatus };
//# sourceMappingURL=livechart.-Main$-Exercise-Status.js.map
