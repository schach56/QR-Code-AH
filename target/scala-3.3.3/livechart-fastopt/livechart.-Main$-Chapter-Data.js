'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$ChapterData(chapter, exercises, rating) {
  this.Llivechart_Main$ChapterData__f_chapter = null;
  this.Llivechart_Main$ChapterData__f_exercises = null;
  this.Llivechart_Main$ChapterData__f_rating = null;
  this.Llivechart_Main$ChapterData__f_chapter = chapter;
  this.Llivechart_Main$ChapterData__f_exercises = exercises;
  this.Llivechart_Main$ChapterData__f_rating = rating;
}
export { $c_Llivechart_Main$ChapterData as $c_Llivechart_Main$ChapterData };
$c_Llivechart_Main$ChapterData.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$ChapterData.prototype.constructor = $c_Llivechart_Main$ChapterData;
/** @constructor */
function $h_Llivechart_Main$ChapterData() {
}
export { $h_Llivechart_Main$ChapterData as $h_Llivechart_Main$ChapterData };
$h_Llivechart_Main$ChapterData.prototype = $c_Llivechart_Main$ChapterData.prototype;
$c_Llivechart_Main$ChapterData.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_Main$ChapterData.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Llivechart_Main$ChapterData.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Main$ChapterData)) {
    var x$0$2 = $as_Llivechart_Main$ChapterData(x$0);
    if ((this.Llivechart_Main$ChapterData__f_chapter === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ChapterData__f_chapter)) {
      var x = this.Llivechart_Main$ChapterData__f_exercises;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ChapterData__f_exercises;
      var $x_2 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.Llivechart_Main$ChapterData__f_rating;
      var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$ChapterData__f_rating;
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
$c_Llivechart_Main$ChapterData.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_Main$ChapterData.prototype.productArity__I = (function() {
  return 3;
});
$c_Llivechart_Main$ChapterData.prototype.productPrefix__T = (function() {
  return "ChapterData";
});
$c_Llivechart_Main$ChapterData.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llivechart_Main$ChapterData__f_chapter;
      break;
    }
    case 1: {
      return this.Llivechart_Main$ChapterData__f_exercises;
      break;
    }
    case 2: {
      return this.Llivechart_Main$ChapterData__f_rating;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Llivechart_Main$ChapterData(obj) {
  return (((obj instanceof $c_Llivechart_Main$ChapterData) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.Main$ChapterData"));
}
export { $as_Llivechart_Main$ChapterData as $as_Llivechart_Main$ChapterData };
function $isArrayOf_Llivechart_Main$ChapterData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_Main$ChapterData)));
}
export { $isArrayOf_Llivechart_Main$ChapterData as $isArrayOf_Llivechart_Main$ChapterData };
function $asArrayOf_Llivechart_Main$ChapterData(obj, depth) {
  return (($isArrayOf_Llivechart_Main$ChapterData(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.Main$ChapterData;", depth));
}
export { $asArrayOf_Llivechart_Main$ChapterData as $asArrayOf_Llivechart_Main$ChapterData };
var $d_Llivechart_Main$ChapterData = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$ChapterData, "livechart.Main$ChapterData", ({
  Llivechart_Main$ChapterData: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Main$ChapterData as $d_Llivechart_Main$ChapterData };
//# sourceMappingURL=livechart.-Main$-Chapter-Data.js.map
