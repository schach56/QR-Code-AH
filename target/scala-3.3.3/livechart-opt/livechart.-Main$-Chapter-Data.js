'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Llivechart_Main$ChapterData(chapter, exercises, rating) {
  this.fS = null;
  this.cn = null;
  this.cB = null;
  this.fS = chapter;
  this.cn = exercises;
  this.cB = rating;
}
export { $c_Llivechart_Main$ChapterData as $c_Llivechart_Main$ChapterData };
$p = $c_Llivechart_Main$ChapterData.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_Main$ChapterData;
/** @constructor */
function $h_Llivechart_Main$ChapterData() {
}
export { $h_Llivechart_Main$ChapterData as $h_Llivechart_Main$ChapterData };
$h_Llivechart_Main$ChapterData.prototype = $p;
$p.c4 = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.N = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().cK(this, (-889275714), false);
});
$p.z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Main$ChapterData)) {
    if ((this.fS === x$0.fS)) {
      var x = this.cn;
      var x$2 = x$0.cn;
      var $x_1 = ((x === null) ? (x$2 === null) : x.z(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.cB;
      var x$4 = x$0.cB;
      return ((x$3 === null) ? (x$4 === null) : x$3.z(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.L = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().ha(this);
});
$p.bM = (function() {
  return 3;
});
$p.bO = (function() {
  return "ChapterData";
});
$p.bN = (function(n) {
  switch (n) {
    case 0: {
      return this.fS;
      break;
    }
    case 1: {
      return this.cn;
      break;
    }
    case 2: {
      return this.cB;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Llivechart_Main$ChapterData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bS)));
}
export { $isArrayOf_Llivechart_Main$ChapterData as $isArrayOf_Llivechart_Main$ChapterData };
var $d_Llivechart_Main$ChapterData = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_Main$ChapterData, "livechart.Main$ChapterData", ({
  bS: 1,
  d: 1,
  z: 1,
  a: 1
}));
export { $d_Llivechart_Main$ChapterData as $d_Llivechart_Main$ChapterData };
//# sourceMappingURL=livechart.-Main$-Chapter-Data.js.map
