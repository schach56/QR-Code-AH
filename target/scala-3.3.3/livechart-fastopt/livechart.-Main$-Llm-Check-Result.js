'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$LlmCheckResult(isCorrect, score, feedback, usedFallback, llmAvailable) {
  this.Llivechart_Main$LlmCheckResult__f_isCorrect = false;
  this.Llivechart_Main$LlmCheckResult__f_score = null;
  this.Llivechart_Main$LlmCheckResult__f_feedback = null;
  this.Llivechart_Main$LlmCheckResult__f_usedFallback = false;
  this.Llivechart_Main$LlmCheckResult__f_llmAvailable = false;
  this.Llivechart_Main$LlmCheckResult__f_isCorrect = isCorrect;
  this.Llivechart_Main$LlmCheckResult__f_score = score;
  this.Llivechart_Main$LlmCheckResult__f_feedback = feedback;
  this.Llivechart_Main$LlmCheckResult__f_usedFallback = usedFallback;
  this.Llivechart_Main$LlmCheckResult__f_llmAvailable = llmAvailable;
}
export { $c_Llivechart_Main$LlmCheckResult as $c_Llivechart_Main$LlmCheckResult };
$c_Llivechart_Main$LlmCheckResult.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$LlmCheckResult.prototype.constructor = $c_Llivechart_Main$LlmCheckResult;
/** @constructor */
function $h_Llivechart_Main$LlmCheckResult() {
}
export { $h_Llivechart_Main$LlmCheckResult as $h_Llivechart_Main$LlmCheckResult };
$h_Llivechart_Main$LlmCheckResult.prototype = $c_Llivechart_Main$LlmCheckResult.prototype;
$c_Llivechart_Main$LlmCheckResult.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_Main$LlmCheckResult.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("LlmCheckResult");
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = (this.Llivechart_Main$LlmCheckResult__f_isCorrect ? 1231 : 1237);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x = this.Llivechart_Main$LlmCheckResult__f_score;
  var data$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var x$1 = this.Llivechart_Main$LlmCheckResult__f_feedback;
  var data$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x$1);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var data$4 = (this.Llivechart_Main$LlmCheckResult__f_usedFallback ? 1231 : 1237);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  var data$5 = (this.Llivechart_Main$LlmCheckResult__f_llmAvailable ? 1231 : 1237);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$5, data$5);
  var hash$6 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$6, 5);
});
$c_Llivechart_Main$LlmCheckResult.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Main$LlmCheckResult)) {
    var x$0$2 = $as_Llivechart_Main$LlmCheckResult(x$0);
    if ((((this.Llivechart_Main$LlmCheckResult__f_isCorrect === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmCheckResult__f_isCorrect) && (this.Llivechart_Main$LlmCheckResult__f_usedFallback === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmCheckResult__f_usedFallback)) && (this.Llivechart_Main$LlmCheckResult__f_llmAvailable === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmCheckResult__f_llmAvailable))) {
      var x = this.Llivechart_Main$LlmCheckResult__f_score;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmCheckResult__f_score;
      var $x_2 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.Llivechart_Main$LlmCheckResult__f_feedback;
      var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmCheckResult__f_feedback;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3).equals__O__Z(x$4));
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
$c_Llivechart_Main$LlmCheckResult.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_Main$LlmCheckResult.prototype.productArity__I = (function() {
  return 5;
});
$c_Llivechart_Main$LlmCheckResult.prototype.productPrefix__T = (function() {
  return "LlmCheckResult";
});
$c_Llivechart_Main$LlmCheckResult.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llivechart_Main$LlmCheckResult__f_isCorrect;
      break;
    }
    case 1: {
      return this.Llivechart_Main$LlmCheckResult__f_score;
      break;
    }
    case 2: {
      return this.Llivechart_Main$LlmCheckResult__f_feedback;
      break;
    }
    case 3: {
      return this.Llivechart_Main$LlmCheckResult__f_usedFallback;
      break;
    }
    case 4: {
      return this.Llivechart_Main$LlmCheckResult__f_llmAvailable;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Llivechart_Main$LlmCheckResult(obj) {
  return (((obj instanceof $c_Llivechart_Main$LlmCheckResult) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.Main$LlmCheckResult"));
}
export { $as_Llivechart_Main$LlmCheckResult as $as_Llivechart_Main$LlmCheckResult };
function $isArrayOf_Llivechart_Main$LlmCheckResult(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_Main$LlmCheckResult)));
}
export { $isArrayOf_Llivechart_Main$LlmCheckResult as $isArrayOf_Llivechart_Main$LlmCheckResult };
function $asArrayOf_Llivechart_Main$LlmCheckResult(obj, depth) {
  return (($isArrayOf_Llivechart_Main$LlmCheckResult(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.Main$LlmCheckResult;", depth));
}
export { $asArrayOf_Llivechart_Main$LlmCheckResult as $asArrayOf_Llivechart_Main$LlmCheckResult };
var $d_Llivechart_Main$LlmCheckResult = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$LlmCheckResult, "livechart.Main$LlmCheckResult", ({
  Llivechart_Main$LlmCheckResult: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Main$LlmCheckResult as $d_Llivechart_Main$LlmCheckResult };
//# sourceMappingURL=livechart.-Main$-Llm-Check-Result.js.map
