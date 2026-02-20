'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00241 from "./livechart.-Main$$anon$1.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00243 from "./livechart.-Main$$anon$3.js";
import * as $j_livechart$002e$002dMain$0024$002dChapter$002dData from "./livechart.-Main$-Chapter-Data.js";
import * as $j_livechart$002e$002dMain$0024$002dExercise$002dResponse from "./livechart.-Main$-Exercise-Response.js";
import * as $j_livechart$002e$002dMain$0024$002dRating$002dData from "./livechart.-Main$-Rating-Data.js";
import * as $j_livechart$002e$002dSimple$002dText$002dEditor from "./livechart.-Simple-Text-Editor.js";
var $p;
function $p_Llivechart_Main$__getErrorCorrectionPixels$1__sci_Map__T__sci_Set($thiz, allErrorCorrectionZones$1, text) {
  var len = text.length;
  var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len);
  var i = 0;
  while ((i < len)) {
    dst.a[i] = text.charCodeAt(i);
    i = ((1 + i) | 0);
  }
  var checksum = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__sum__s_math_Numeric__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_math_Numeric$IntIsIntegral$()) | 0);
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().al();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(1, 1, 7, false);
  while (it.bl) {
    var elem = it.cg();
    if (((((((checksum + elem) | 0) % 7) | 0) < 4) !== false)) {
      b.aj(elem);
    }
  }
  return $x_1.P(b.az()).bK(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((zoneIdx) => {
    var zoneIdx$1 = (zoneIdx | 0);
    var allPixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_SeqOps__sorted__s_math_Ordering__O(allErrorCorrectionZones$1.cv(zoneIdx$1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([]))))))).gA(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_math_Ordering$Int$());
    var y = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$doubleToInt((0.4 * allPixels.u()));
    var numPixelsToSelect = ((y < 1) ? 1 : y);
    var seed = ((((Math.imul(17, checksum) + Math.imul(31, zoneIdx$1)) | 0) % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor(allPixels.u())) | 0);
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(allPixels);
    var f = ((x$1) => {
      if ((x$1 !== null)) {
        return ((((((x$1.M() | 0) + seed) | 0) % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor(allPixels.u())) | 0) < numPixelsToSelect);
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
    });
    var l = this$13;
    block: {
      var result;
      while (true) {
        if (l.e()) {
          var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
          break;
        } else {
          var h = l.i();
          var t = l.o();
          if (((!(!f(h))) === false)) {
            l = t;
            continue;
          }
          var start = l;
          var remaining = t;
          while (true) {
            if (remaining.e()) {
              var result = start;
              break block;
            } else {
              var x = remaining.i();
              if (((!(!f(x))) !== false)) {
                remaining = remaining.o();
                continue;
              }
              var firstMiss = remaining;
              var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(start.i(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
              var toProcess = start.o();
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(toProcess.i(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                currentLast.S = newElem;
                currentLast = newElem;
                toProcess = toProcess.o();
              }
              var next = firstMiss.o();
              var nextToCopy = next;
              while ((!next.e())) {
                var head = next.i();
                if (((!(!f(head))) !== false)) {
                  next = next.o();
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(nextToCopy.i(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                    currentLast.S = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.o();
                  }
                  nextToCopy = next.o();
                  next = next.o();
                }
              }
              if ((!nextToCopy.e())) {
                currentLast.S = nextToCopy;
              }
              var result = newHead;
              break block;
            }
          }
        }
      }
    }
    var f$1 = ((_$4) => (_$4.K() | 0));
    if ((result === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$1 = result.i();
      var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$1 = h$1;
      var rest = result.o();
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$2 = rest.i();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        t$1.S = nx;
        t$1 = nx;
        rest = rest.o();
      }
      var $x_2 = h$1;
    }
    return $x_3.P($x_2);
  })));
}
export { $p_Llivechart_Main$__getErrorCorrectionPixels$1__sci_Map__T__sci_Set as $p_Llivechart_Main$__getErrorCorrectionPixels$1__sci_Map__T__sci_Set };
function $p_Llivechart_Main$__drawPositionPattern$1__AAI__I__I__V($thiz, grid$2, startRow, startCol) {
  var i = 0;
  while (true) {
    var x0 = i;
    var i$1 = 0;
    while (true) {
      var x0$1 = i$1;
      if ((((((x0 === 0) || (x0 === 6)) || (x0$1 === 0)) || (x0$1 === 6)) || ((((x0 >= 2) && (x0 <= 4)) && (x0$1 >= 2)) && (x0$1 <= 4)))) {
        grid$2.a[((startRow + x0) | 0)].a[((startCol + x0$1) | 0)] = 1;
      }
      if ((i$1 === 6)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
    if ((i === 6)) {
      return (void 0);
    }
    i = ((1 + i) | 0);
  }
}
export { $p_Llivechart_Main$__drawPositionPattern$1__AAI__I__I__V as $p_Llivechart_Main$__drawPositionPattern$1__AAI__I__I__V };
function $p_Llivechart_Main$__drawPositionPattern$3__AAI__I__I__V($thiz, grid$22, startRow, startCol) {
  var i = 0;
  while (true) {
    var x0 = i;
    var i$1 = 0;
    while (true) {
      var x0$1 = i$1;
      if ((((((x0 === 0) || (x0 === 6)) || (x0$1 === 0)) || (x0$1 === 6)) || ((((x0 >= 2) && (x0 <= 4)) && (x0$1 >= 2)) && (x0$1 <= 4)))) {
        grid$22.a[((startRow + x0) | 0)].a[((startCol + x0$1) | 0)] = 1;
      }
      if ((i$1 === 6)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
    if ((i === 6)) {
      return (void 0);
    }
    i = ((1 + i) | 0);
  }
}
export { $p_Llivechart_Main$__drawPositionPattern$3__AAI__I__I__V as $p_Llivechart_Main$__drawPositionPattern$3__AAI__I__I__V };
function $p_Llivechart_Main$__liftedTree1$1__T__T6($thiz, json$1) {
  try {
    var parsed = JSON.parse(json$1);
    var origStr = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.original, (void 0)) ? "1010011010100101" : parsed.original);
    var maskStr = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.mask, (void 0)) ? "0000000000000000" : parsed.mask);
    var a1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer1, (void 0)) ? "" : parsed.answer1);
    var a2 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer2, (void 0)) ? "" : parsed.answer2);
    var a3 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer3, (void 0)) ? "" : parsed.answer3);
    var a4 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer4, (void 0)) ? "" : parsed.answer4);
    console.log(((((((("Parsed Maskierung answers: a1=" + a1) + ", a2=") + a2) + ", a3=") + a3) + ", a4=") + a4));
    var len = origStr.length;
    var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len);
    var i = 0;
    while ((i < len)) {
      dst.a[i] = (origStr.charCodeAt(i) === 49);
      i = ((1 + i) | 0);
    }
    var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$3);
    var len$1 = maskStr.length;
    var dst$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      dst$1.a[i$1] = (maskStr.charCodeAt(i$1) === 49);
      i$1 = ((1 + i$1) | 0);
    }
    var this$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst$1);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T6($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$6), a1, a2, a3, a4);
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
    console.error(("Error parsing Maskierung data: " + e$2.cu()));
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().iP(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, false, true, false, false, true, false, true, true, false, true, false, false, true, false, true])));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < 16)) {
      b.ct(false);
      i$2 = ((1 + i$2) | 0);
    }
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T6($x_2, b.bz(), "", "", "", "");
  }
}
export { $p_Llivechart_Main$__liftedTree1$1__T__T6 as $p_Llivechart_Main$__liftedTree1$1__T__T6 };
function $p_Llivechart_Main$__isCorrect1$1__T__Z($thiz, answer) {
  var this$1 = answer.toLowerCase();
  if (((this$1.indexOf("wei\u00df") | 0) !== (-1))) {
    return true;
  } else {
    var this$2 = answer.toLowerCase();
    return ((this$2.indexOf("white") | 0) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect1$1__T__Z as $p_Llivechart_Main$__isCorrect1$1__T__Z };
function $p_Llivechart_Main$__isCorrect2$1__T__Z($thiz, answer) {
  var this$1 = answer.toLowerCase();
  if (((this$1.indexOf("schwarz") | 0) !== (-1))) {
    return true;
  } else {
    var this$2 = answer.toLowerCase();
    return ((this$2.indexOf("black") | 0) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect2$1__T__Z as $p_Llivechart_Main$__isCorrect2$1__T__Z };
function $p_Llivechart_Main$__isCorrect3$1__T__Z($thiz, answer) {
  var this$1 = answer.toLowerCase();
  if (((this$1.indexOf("schwarz") | 0) !== (-1))) {
    return true;
  } else {
    var this$2 = answer.toLowerCase();
    return ((this$2.indexOf("black") | 0) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect3$1__T__Z as $p_Llivechart_Main$__isCorrect3$1__T__Z };
function $p_Llivechart_Main$__isCorrect4$1__T__Z($thiz, answer) {
  var this$1 = answer.toLowerCase();
  if (((this$1.indexOf("wei\u00df") | 0) !== (-1))) {
    return true;
  } else {
    var this$2 = answer.toLowerCase();
    return ((this$2.indexOf("white") | 0) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect4$1__T__Z as $p_Llivechart_Main$__isCorrect4$1__T__Z };
function $p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal($thiz, checkVar) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(checkVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x205 = (!(!x$1.an));
      if ((x205 === true)) {
        return "background-color: rgba(76, 175, 80, 0.2); border-left: 4px solid #4CAF50;";
      }
      if ((x205 === false)) {
        return "background-color: rgba(244, 67, 54, 0.2); border-left: 4px solid #f44336;";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
}
export { $p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal as $p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal };
function $p_Llivechart_Main$__liftedTree2$1__T__T2($thiz, json$2) {
  try {
    var parsed = JSON.parse(json$2);
    var data1Str = parsed.masked1;
    var data2Str = parsed.masked2;
    var len = data1Str.length;
    var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
    var i = 0;
    while ((i < len)) {
      var index = i;
      var x = data1Str.charCodeAt(index);
      if (((x === 48) || (x === 49))) {
        var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
        sb.A = (sb.A + str);
      }
      i = ((1 + i) | 0);
    }
    var x$1 = ((len === sb.u()) ? data1Str : sb.A);
    var len$1 = x$1.length;
    var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      dst.a[i$1] = (x$1.charCodeAt(i$1) === 49);
      i$1 = ((1 + i$1) | 0);
    }
    var this$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$6);
    var len$2 = data2Str.length;
    var sb$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len$2);
    var i$2 = 0;
    while ((i$2 < len$2)) {
      var index$2 = i$2;
      var x$2 = data2Str.charCodeAt(index$2);
      if (((x$2 === 48) || (x$2 === 49))) {
        var str$1 = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x$2));
        sb$1.A = (sb$1.A + str$1);
      }
      i$2 = ((1 + i$2) | 0);
    }
    var x$3 = ((len$2 === sb$1.u()) ? data2Str : sb$1.A);
    var len$3 = x$3.length;
    var dst$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$3);
    var i$3 = 0;
    while ((i$3 < len$3)) {
      dst$1.a[i$3] = (x$3.charCodeAt(i$3) === 49);
      i$3 = ((1 + i$3) | 0);
    }
    var this$12 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst$1);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$12));
  } catch (e) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$4 = 0;
    while ((i$4 < 16)) {
      b.ct(false);
      i$4 = ((1 + i$4) | 0);
    }
    var $x_2 = b.bz();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$5 = 0;
    while ((i$5 < 16)) {
      b$1.ct(false);
      i$5 = ((1 + i$5) | 0);
    }
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2($x_2, b$1.bz());
  }
}
export { $p_Llivechart_Main$__liftedTree2$1__T__T2 as $p_Llivechart_Main$__liftedTree2$1__T__T2 };
function $p_Llivechart_Main$__liftedTree3$1__T__T4($thiz, json$3) {
  try {
    var parsed = JSON.parse(json$3);
    var a1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer1, (void 0)) ? "" : parsed.answer1);
    var a2 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer2, (void 0)) ? "" : parsed.answer2);
    var a3 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer3, (void 0)) ? "" : parsed.answer3);
    var a4 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(parsed.answer4, (void 0)) ? "" : parsed.answer4);
    console.log(((((((("Parsed answers: a1=" + a1) + ", a2=") + a2) + ", a3=") + a3) + ", a4=") + a4));
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4(a1, a2, a3, a4);
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
    console.error(("Error parsing L\u00fcckentext data: " + e$2.cu()));
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("", "", "", "");
  }
}
export { $p_Llivechart_Main$__liftedTree3$1__T__T4 as $p_Llivechart_Main$__liftedTree3$1__T__T4 };
function $p_Llivechart_Main$__isCorrect1$2__T__Z($thiz, answer) {
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(answer.toLowerCase());
  return (((lower.indexOf("gr\u00f6\u00dfer") | 0) !== (-1)) || ((lower.indexOf("h\u00f6her") | 0) !== (-1)));
}
export { $p_Llivechart_Main$__isCorrect1$2__T__Z as $p_Llivechart_Main$__isCorrect1$2__T__Z };
function $p_Llivechart_Main$__isCorrect2$2__T__Z($thiz, answer) {
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(answer.toLowerCase());
  return (((lower.indexOf("schwerer") | 0) !== (-1)) || ((lower.indexOf("aufw\u00e4ndiger") | 0) !== (-1)));
}
export { $p_Llivechart_Main$__isCorrect2$2__T__Z as $p_Llivechart_Main$__isCorrect2$2__T__Z };
function $p_Llivechart_Main$__isCorrect3$2__T__Z($thiz, answer) {
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(answer.toLowerCase());
  return ((((lower.indexOf("Fehlererkennung") | 0) !== (-1)) || ((lower.indexOf("fehlererkennung") | 0) !== (-1))) || ((lower.indexOf("erkennung") | 0) !== (-1)));
}
export { $p_Llivechart_Main$__isCorrect3$2__T__Z as $p_Llivechart_Main$__isCorrect3$2__T__Z };
function $p_Llivechart_Main$__isCorrect4$2__T__Z($thiz, answer) {
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(answer.toLowerCase());
  return ((((lower.indexOf("Fehlerkorrektur") | 0) !== (-1)) || ((lower.indexOf("fehlerkorrektur") | 0) !== (-1))) || ((lower.indexOf("korrektur") | 0) !== (-1)));
}
export { $p_Llivechart_Main$__isCorrect4$2__T__Z as $p_Llivechart_Main$__isCorrect4$2__T__Z };
function $p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal($thiz, checkVar) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(checkVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x289 = (!(!x$1.an));
      if ((x289 === true)) {
        return "background-color: rgba(76, 175, 80, 0.2); border-left: 4px solid #4CAF50;";
      }
      if ((x289 === false)) {
        return "background-color: rgba(244, 67, 54, 0.2); border-left: 4px solid #f44336;";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
}
export { $p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal as $p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal };
function $p_Llivechart_Main$__countWords$1__T__I($thiz, text) {
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(text, "\\s+", 0);
  var i = 0;
  var res = 0;
  var len = xs.a.length;
  while ((i < len)) {
    var x1 = i;
    if ((xs.a[x1] !== "")) {
      res = ((1 + res) | 0);
    }
    i = ((1 + i) | 0);
  }
  return res;
}
export { $p_Llivechart_Main$__countWords$1__T__I as $p_Llivechart_Main$__countWords$1__T__I };
function $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement($thiz, chapter$28, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$6, currentVar, maxRating) {
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-stars");
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  var isEmpty = (maxRating < 1);
  if (((((1 + (((-1) + maxRating) | 0)) | 0) <= 0) && (!isEmpty))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().k4(1, maxRating, 1, true);
  }
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().al();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(1, 1, maxRating, isEmpty);
  while (it.bl) {
    var x0 = it.cg();
    b.aj($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(currentVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((current) => (((current | 0) >= x0) ? "star filled" : "star")))(x0)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "\u2605", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((currentVar, x0, chapter$28, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$6) => ((_$94) => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(currentVar, x0);
      if ((chapter$28 !== "")) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V($thiz.ja, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
          var existing = data.cv(chapter$28, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$28, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "")))));
          var updatedRating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData((understandingVar$3.g.G().j() | 0), (difficultyVar$3.g.G().j() | 0), (qualityVar$3.g.G().j() | 0), (scopeVar$3.g.G().j() | 0), feedbackVar$6.g.G().j());
          var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(existing.fS, existing.cn, updatedRating);
          $thiz.ou(chapter$28, updatedChapter);
          return data.dJ(chapter$28, updatedChapter);
        })));
      }
    }))(currentVar, x0, chapter$28, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$6)))]))));
  }
  return $x_4.d($x_3.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_1, b.az(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])));
}
export { $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement as $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement };
/** @constructor */
function $c_Llivechart_Main$() {
  this.mG = null;
  this.mF = null;
  this.ja = null;
  this.dn = null;
  $n_Llivechart_Main$ = this;
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i = 0;
  while ((i < 16)) {
    b.ct(false);
    i = ((1 + i) | 0);
  }
  $x_1.Q(b.bz());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q("Hier stehen die QR Daten");
  this.mG = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(window.location.hash);
  try {
    window.addEventListener("hashchange", ((_$1) => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this.mG, window.location.hash);
    }));
  } catch (e) {
  }
  this.mF = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().eu($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("einfuehrung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Scanne die QR-Codes und beschreibe deren Inhalte. Beschreibe zus\u00e4tzlich die Gemeinsamkeiten.", "Welche Aussage trifft auf QR-Codes zu?", "Beschreibe, welche Vorstellungen du davon hast, wie QR-Codes funktionieren."])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Beschreibe, wie ein QR-Code aufgebaut ist. Vermute, wie die Daten im QR-Code dargestellt werden.", "\u00dcberlege dir eine eigene Kodierung f\u00fcr die Buchstaben 'B', 'e', 't'. Nutze die Pixel, um deine Kodierung darzustellen.", "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung aus Aufgabe 2.", "Erkl\u00e4re die Nachteile einer eigenen, nicht standardisierten Kodierung.", "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle.", "Erl\u00e4utere Vorteile der festen L\u00e4nge von 8 Pixeln pro Buchstabe. Wie viele verschiedene Zeichen k\u00f6nnen mit 8 Pixeln dargestellt werden?", "Verschl\u00fcssele eine Nachricht mit QR-Code.", "Erkl\u00e4re, was dir bei der QR-Code Darstellung aufgefallen ist. Gehe dabei auf folgende Fragen ein: Wie wird ein Buchstabe in Pixel umgewandelt? Wie bilden sich die W\u00f6rter? Gibt es Beschr\u00e4nkungen?", "Erkl\u00e4re, anhand welcher Merkmale sich erkennen l\u00e4sst, wo bei einer Pixelabbildung ein neuer Buchstabe beginnt.", "Beschreibe, welche Bereiche des QR-Codes festgelegt sind und nicht ver\u00e4ndert werden.", "Erkl\u00e4re einem Mitsch\u00fcler, wie eine Nachricht in einen QR-Code geschrieben wird."])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("maskierung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Versuche den QR-Code zu scannen und stelle begr\u00fcndete Vermutungen dazu an.", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten.", "Erl\u00e4utere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zus\u00e4tzlich eine m\u00f6gliche L\u00f6sung, um diese Probleme zu umgehen.", "Erkl\u00e4re die Berechnungsvorschrift einer Maske deiner Wahl.", "Vermute, woher der Scanner wei\u00df, welche Maske angewandt wurde.", "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschlie\u00dfend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.", "Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkl\u00e4re, wof\u00fcr diese Eigenschaft n\u00fctzlich sein k\u00f6nnte.", "Fasse in eigenen Worten zusammen, warum die Maskierung ein wichtiger Teil des QR-Code-Systems ist. Erl\u00e4utere dabei an einem Beispiel, wie die Maskierung und Demaskierung funktioniert."])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Hin und wieder kommt es vor, dass Leute Sticker auf QR-Codes kleben, welche in der \u00d6ffentlichkeit zu sehen sind. Vergleiche die beiden QR-Codes. Vermute, welcher der beiden QR-Codes durch einen Scanner gelesen werden kann. Begr\u00fcnde deine Vermutung.", "Versuche nun beide QR-Codes zu scannen. Beschreibe deine Beobachtungen.", "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider hast du dich bei der Hausnummer verschrieben und statt 23 steht dort 32.", "Eine M\u00f6glichkeit mit Fehlern umzugehen ist es, eine Pr\u00fcfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gez\u00e4hlt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel w\u00e4re, dass die Zeichenanzahl gez\u00e4hlt wird. Aus der Nachricht 'Hallo' w\u00fcrde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt oder korrigiert werden k\u00f6nnen. Begr\u00fcnde deine Antwort.", "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden k\u00f6nnen am Beispiel der Nachricht '12345'. (Tipp: \u00dcberlege dir, was du machst, wenn eine Information von einer Person im Gespr\u00e4ch nicht verstanden wurde.)", "Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein d\u00fcrfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Urspr\u00fcngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Urspr\u00fcngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Urspr\u00fcngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'", "Erg\u00e4nze die L\u00fccken im folgenden Text:", "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zus\u00e4tzlich die Metadaten in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben.", "Erkl\u00e4re in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zus\u00e4tzlichen Daten und dem Korrekturlevel ein. Erl\u00e4utere zus\u00e4tzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird."])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begr\u00fcnde jeweils kurz.", "Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung.", "Die Schulleitung \u00fcberlegt, wie man erfassen k\u00f6nnte, welche Sch\u00fcler das Gel\u00e4nde verlassen. Momentan wird daf\u00fcr eine Lehrkraft eingesetzt, welche sich die Hausaufgabenhefte zeigen l\u00e4sst. \nIn dem Hausaufgabenheft werden Name und Geburtsdatum des Sch\u00fclers \u00fcberpr\u00fcft. Ein Sch\u00fcler darf das Gel\u00e4nde verlassen, wenn er \u00fcber 16 Jahre alt ist. \nErl\u00e4utere je 2 Vor- und Nachteile dieser Methode.", "Erl\u00e4utere, wie du den Sachverhalt aus Aufgabe 3 mit einem QR-Code l\u00f6sen w\u00fcrdest. Gehe dabei auch darauf ein, welche Daten im QR-Code gespeichert werden m\u00fcssen.", "Nimm begr\u00fcndet Stellung zum Nutzen von QR-Codes im Anwendungsfall von Aufgabe 3.", "Eine Lehrkraft \u00e4u\u00dfert Bedenken dar\u00fcber, dass Sch\u00fcler zum einen die QR-Codes manipulieren k\u00f6nnten, um falsche Daten zu speichern. Zum anderen bef\u00fcrchtet die Lehrkraft, dass die QR-Codes nach einem Jahr verschmutzen oder besch\u00e4digt sind, da das Lesen eines QR-Codes nicht mehr m\u00f6glich ist, wenn schon ein Pixel umgef\u00e4rbt ist. \nErl\u00e4utere, wie du auf diese Bedenken reagierst. Begr\u00fcnde deine Antworten.", "Um das Speichern der Daten einmal auszuprobieren, erstelle einen QR-Code mit deinen Daten (Du kannst dir daf\u00fcr nat\u00fcrlich auch welche ausdenken). \nGehe daf\u00fcr auf die Webseite 'https://www.qrcode-generator.de/' und w\u00e4hle dort den Typ 'VCard' aus. F\u00fclle die Informationen aus. \n\u00dcberpr\u00fcfe, ob der QR-Code funktioniert, indem du ihn mit deinem Smartphone scannst. Wenn alles funktioniert hat, kannst du dir den QR-Code als Bild speichern, ausdrucken und in deine Handyh\u00fclle legen. \nBeschreibe, welche Daten du au\u00dferdem in einer VCard speichern k\u00f6nntest und welche Vorteile dies hat."])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("zusammenfassung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zus\u00e4tzlich die Metadaten in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Durch einen Klick auf 'Maske anwenden' wird die Maske auf den QR-Code angewandt. Teste verschiedene Eingaben und \u00fcberpr\u00fcfe das Ergebnis mit einem QR-Code Scanner.", "Erkl\u00e4re anhand von Aufgabe 1, wie genau der QR-Code erstellt wird. Gehe dabei auf die einzelnen Schritte ein, die notwendig sind, um aus einer Nachricht einen QR-Code zu generieren.", "QR-Code Quiz mit 20 Fragen"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("barcodes", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Erkl\u00e4re den Unterschied zwischen eindimensionalen Barcodes und QR-Codes.", "Nenne drei typische Einsatzbereiche von Barcodes.", "Beschreibe, welche Informationen ein klassischer Barcode typischerweise enth\u00e4lt und welche nicht."]))))])));
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O;
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "praxisanwendungen", "zusammenfassung", "barcodes"])));
  var rest = this$27;
  var h = null;
  var t = null;
  while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var x0 = rest.i();
    var this$28 = this.ez(x0);
    var it = (this$28.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0, this$28.j()))).p();
    while (it.s()) {
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(it.l(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        t.S = nx;
      }
      t = nx;
    }
    rest = rest.o();
  }
  this.ja = $x_3.Q($x_2.eu(((h === null) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$() : h)));
  this.dn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(this.ya());
}
export { $c_Llivechart_Main$ as $c_Llivechart_Main$ };
$p = $c_Llivechart_Main$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_Main$;
/** @constructor */
function $h_Llivechart_Main$() {
}
export { $h_Llivechart_Main$ as $h_Llivechart_Main$ };
$h_Llivechart_Main$.prototype = $p;
$p.ya = (function() {
  try {
    var stored = window.localStorage.getItem("qr-completed-chapters");
    return ((stored !== null) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), JSON.parse(stored))) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$());
  } catch (e) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  }
});
$p.za = (function(completed) {
  try {
    var arr = [...$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjsr_Compat$().lv($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Seq$().nW(completed))];
    var json = JSON.stringify(arr);
    window.localStorage.setItem("qr-completed-chapters", json);
  } catch (e) {
  }
});
$p.hq = (function(chapter) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this.dn, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((current) => {
    var next = current.gv(chapter);
    this.za(next);
    return next;
  })));
});
$p.yZ = (function(exerciseNumber, taskText, explanation) {
  var messageTextVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q("");
  var exceedsLimitVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(false);
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-text-input-section");
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ("Aufgabe " + exerciseNumber), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, explanation, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-input-container");
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("Deine Nachricht hier...");
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("message-input");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(messageTextVar.g);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH().dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    if ((text.length > 17)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(exceedsLimitVar, true);
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(exceedsLimitVar, false);
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().hx(text, 17);
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(messageTextVar.c5)));
  return $x_13.d($x_12.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_11, $x_10, $x_9, $x_8.d($x_7.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_6, $x_5.d($x_4.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener, updater)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(exceedsLimitVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((exceeds) => ((!(!exceeds)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("color: red; font-weight: bold; margin-top: 0.5rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maximale Anzahl an Zeichen f\u00fcr den QR Code Typen erreicht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(messageTextVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text$2) => this.z0(text$2, 21))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.v3 = (function(exerciseNumber, taskText, explanation, sharedMessageVar) {
  var messageTextVar = (sharedMessageVar.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q("") : sharedMessageVar.j());
  var exceedsLimitVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(false);
  var showMetadata = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(false);
  var metadataActive = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(false);
  var errorCorrectionActive = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(false);
  var darkRedPixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([8, 29, 92, 113, 155, 176, 173, 168, 169, 170, 181, 182, 183, 184, 187, 188, 302, 365, 386, 407, 428]))));
  var lightRedPixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([50, 71, 175, 172, 171, 323, 344, 185, 186]))));
  var e1Pixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([198, 199, 219, 220, 240, 241, 261, 262]))));
  var e2Pixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([282, 283, 303, 304, 324, 325, 345, 346]))));
  var e3Pixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([366, 367, 387, 388, 408, 409, 429, 430]))));
  var e4Pixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([196, 197, 217, 218, 238, 239, 259, 260]))));
  var e5Pixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([193, 194, 214, 215, 235, 236, 256, 257]))));
  var e6Pixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([191, 192, 212, 213, 233, 234, 254, 255]))));
  var e7Pixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([189, 190, 210, 211, 231, 232, 252, 253]))));
  var allErrorCorrectionZones = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().eu($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, e1Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, e2Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(3, e3Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(4, e4Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(5, e5Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(6, e6Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(7, e7Pixels)])));
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-text-input-section");
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ("Aufgabe " + exerciseNumber), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, explanation, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-input-container");
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("Deine Nachricht hier...");
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("message-input");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(messageTextVar.g);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH().dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    if ((text.length > 17)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(exceedsLimitVar, true);
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(exceedsLimitVar, false);
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().hx(text, 17);
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(messageTextVar.c5)));
  return $x_13.d($x_12.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_11, $x_10, $x_9, $x_8.d($x_7.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_6, $x_5.d($x_4.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener, updater)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(exceedsLimitVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((exceeds) => ((!(!exceeds)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("color: red; font-weight: bold; margin-top: 0.5rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maximale Anzahl an Zeichen f\u00fcr den QR Code Typen erreicht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$()).wL(messageTextVar.g, metadataActive.g, errorCorrectionActive.g), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 !== null)) {
      var x17 = x$1.gI;
      var x18 = (!(!x$1.gJ));
      var x19 = (!(!x$1.gK));
      if ((x17 !== null)) {
        return this.z1(x17, darkRedPixels, lightRedPixels, x18, $p_Llivechart_Main$__getErrorCorrectionPixels$1__sci_Map__T__sci_Set(this, allErrorCorrectionZones, x17), x19, allErrorCorrectionZones, 21);
      }
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1rem; display: flex; gap: 1rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Metadaten hinzuf\u00fcgen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.5rem 1rem; background-color: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(metadataActive, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => (!(!(!_$6))))));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(showMetadata, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => (!(!(!_$7))))));
  })))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Fehlerkorrektur hinzuf\u00fcgen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.5rem 1rem; background-color: #1976D2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$8) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(errorCorrectionActive, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$9) => (!(!(!_$9))))));
  })))])))])))])));
});
$p.wG = (function(char) {
  var asciiCode = char;
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().al();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(7, (-1), 0, false);
  while (it.bl) {
    b.aj((1 & (asciiCode >> it.cg())));
  }
  return $x_1.E(b.az());
});
$p.u6 = (function(text, charPixelMap) {
  var encodedMap = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Map$().cF($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOps__zipWithIndex__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().zO(text)).iO(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => ((x$1 !== null) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(x$1.K()), (x$1.M() | 0), true))))).Y(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    matchResult15: {
      if ((x$1$2 !== null)) {
        var char$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(x$1$2.K());
        var charIndex$1 = (x$1$2.M() | 0);
        var this$3 = charPixelMap.fF(charIndex$1);
        if ((!this$3.e())) {
          var x0 = this$3.j();
          var bits = this.wG(char$1);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_scm_HashMap__put0__O__O__Z__s_Some(encodedMap, charIndex$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(x0).nz(new $j_livechart$002e$002dMain$0024$0024anon$00241.$c_Llivechart_Main$$anon$1(bits)), false);
          break matchResult15;
        } else {
          break matchResult15;
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
    }
  })));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().eu(encodedMap);
});
$p.z0 = (function(text, gridSize) {
  if ((gridSize <= 0)) {
    var grid = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.r().r().C)(0);
  } else {
    var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.r().r().C)(gridSize);
    var i = 0;
    while ((i < gridSize)) {
      var $x_2 = i;
      if ((gridSize <= 0)) {
        var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(0);
      } else {
        var array$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(gridSize);
        var i$1 = 0;
        while ((i$1 < gridSize)) {
          array$1.a[i$1] = 0;
          i$1 = ((1 + i$1) | 0);
        }
        var $x_1 = array$1;
      }
      array.a[$x_2] = $x_1;
      i = ((1 + i) | 0);
    }
    var grid = array;
  }
  $p_Llivechart_Main$__drawPositionPattern$1__AAI__I__I__V(this, grid, 0, 0);
  $p_Llivechart_Main$__drawPositionPattern$1__AAI__I__I__V(this, grid, 0, (((-7) + gridSize) | 0));
  $p_Llivechart_Main$__drawPositionPattern$1__AAI__I__I__V(this, grid, (((-7) + gridSize) | 0), 0);
  var end = (((-8) + gridSize) | 0);
  var isEmpty = (end <= 8);
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  if ((!isEmpty)) {
    var i$2 = 8;
    while (true) {
      var x0$1 = i$2;
      if ((((x0$1 % 2) | 0) === 0)) {
        grid.a[6].a[x0$1] = 1;
        grid.a[x0$1].a[6] = 1;
      }
      if ((i$2 === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$2 = ((1 + i$2) | 0);
    }
  }
  var forbiddenPositions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([106, 163, 188]))));
  var dataPositions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_ArrayBuffer$().le($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([])));
  var col = (((-1) + gridSize) | 0);
  var goingUp = true;
  var elem = 0;
  elem = 0;
  while ((col > 6)) {
    var col1 = col;
    var col2 = (((-1) + col) | 0);
    if (goingUp) {
      var x = (((-1) + gridSize) | 0);
      if ((!(x < 0))) {
        var i$3 = x;
        while (true) {
          var x0$2 = i$3;
          if ((((x0$2 >= 9) || (col1 >= 9)) && (grid.a[x0$2].a[col1] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col1));
            }
            var ev$102 = ((1 + elem) | 0);
            elem = ev$102;
          }
          if ((((col2 >= 0) && ((x0$2 >= 9) || (col2 >= 9))) && (grid.a[x0$2].a[col2] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col2));
            }
            var ev$103 = ((1 + elem) | 0);
            elem = ev$103;
          }
          if ((i$3 === 0)) {
            break;
          }
          i$3 = (((-1) + i$3) | 0);
        }
      }
    } else {
      var isEmpty$3 = (gridSize <= 0);
      var scala$collection$immutable$Range$$lastElement$1 = (((-1) + gridSize) | 0);
      if ((!isEmpty$3)) {
        var i$4 = 0;
        while (true) {
          var x0$3 = i$4;
          if ((((x0$3 >= 9) || (col1 >= 9)) && (grid.a[x0$3].a[col1] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col1));
            }
            var ev$104 = ((1 + elem) | 0);
            elem = ev$104;
          }
          if ((((col2 >= 0) && ((x0$3 >= 9) || (col2 >= 9))) && (grid.a[x0$3].a[col2] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col2));
            }
            var ev$105 = ((1 + elem) | 0);
            elem = ev$105;
          }
          if ((i$4 === scala$collection$immutable$Range$$lastElement$1)) {
            break;
          }
          i$4 = ((1 + i$4) | 0);
        }
      }
    }
    goingUp = (!goingUp);
    col = (((-2) + col) | 0);
    if ((col === 6)) {
      col = (((-1) + col) | 0);
    }
  }
  var textLength = text.length;
  var i$5 = 0;
  while (true) {
    var x0$4 = i$5;
    if ((x0$4 < dataPositions.aU)) {
      matchResult16: {
        var \u03b41$___1;
        var \u03b41$___2;
        var x35 = dataPositions.D(x0$4);
        if ((x35 !== null)) {
          var \u03b41$___1 = (x35.K() | 0);
          var \u03b41$___2 = (x35.M() | 0);
          break matchResult16;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x35);
      }
      var row$2 = (\u03b41$___1 | 0);
      var col$2 = (\u03b41$___2 | 0);
      grid.a[row$2].a[col$2] = 0;
    }
    if ((i$5 === 3)) {
      break;
    }
    i$5 = ((1 + i$5) | 0);
  }
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().al();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(7, (-1), 0, false);
  while (it.bl) {
    b.aj((1 & (textLength >> it.cg())));
  }
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O($x_3.E(b.az())).iO(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => ((x$1 !== null) && ((x$1.K() | 0), (x$1.M() | 0), true))))).Y(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    matchResult19: {
      if ((x$1$2 !== null)) {
        var bit$1 = (x$1$2.K() | 0);
        var idx$1 = (x$1$2.M() | 0);
        var posIdx = ((4 + idx$1) | 0);
        if ((posIdx < dataPositions.aU)) {
          matchResult18: {
            var \u03b42$___1;
            var \u03b42$___2;
            var x41 = dataPositions.D(posIdx);
            if ((x41 !== null)) {
              var \u03b42$___1 = (x41.K() | 0);
              var \u03b42$___2 = (x41.M() | 0);
              break matchResult18;
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x41);
          }
          var row$2$1 = (\u03b42$___1 | 0);
          var col$2$1 = (\u03b42$___2 | 0);
          if ((bit$1 === 1)) {
            grid.a[row$2$1].a[col$2$1] = 2;
            break matchResult19;
          } else {
            grid.a[row$2$1].a[col$2$1] = 0;
            break matchResult19;
          }
        } else {
          break matchResult19;
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
    }
  })));
  var charPixelMap = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().eu($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([12, 13, 14, 15, 16, 17, 18, 19]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([20, 21, 22, 23, 41, 42, 43, 44]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([45, 46, 47, 48, 49, 50, 51, 52]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([53, 54, 55, 56, 57, 58, 59, 60]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([61, 62, 63, 64, 65, 66, 67, 68]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([69, 70, 71, 72, 73, 74, 75, 76]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([77, 78, 79, 80, 81, 82, 83, 84]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([85, 86, 87, 88, 110, 111, 112, 113]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([114, 115, 116, 117, 118, 119, 120, 121]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([122, 123, 124, 125, 126, 127, 128, 129]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([130, 131, 132, 133, 134, 135, 136, 137]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([138, 139, 140, 141, 142, 143, 144, 145]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([146, 147, 148, 149, 150, 151, 152, 153]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([154, 155, 156, 157, 158, 159, 160, 161]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([162, 163, 164, 165, 166, 167, 168, 169]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([170, 171, 172, 173, 174, 175, 176, 177]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(16, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([178, 179, 180, 181, 182, 183, 184, 185])))))])));
  var encodedPixels = this.u6(text, charPixelMap);
  var this$96 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_MapOps$WithFilter(encodedPixels, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => ((x$1$3 !== null) && ((x$1$3.K() | 0), x$1$3.M(), true)))));
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => {
    matchResult22: {
      if ((x$1$4 !== null)) {
        (x$1$4.K() | 0);
        var filledPixels$1 = x$1$4.M();
        var these = filledPixels$1;
        while ((!these.e())) {
          var x0$6 = these.i();
          var pixelIdx = (x0$6 | 0);
          if ((pixelIdx < dataPositions.aU)) {
            matchResult21: {
              var \u03b43$___1;
              var \u03b43$___2;
              var x50 = dataPositions.D(pixelIdx);
              if ((x50 !== null)) {
                var \u03b43$___1 = (x50.K() | 0);
                var \u03b43$___2 = (x50.M() | 0);
                break matchResult21;
              }
              throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x50);
            }
            var row$2$2 = (\u03b43$___1 | 0);
            var col$2$2 = (\u03b43$___2 | 0);
            grid.a[row$2$2].a[col$2$2] = 2;
          }
          these = these.o();
        }
        break matchResult22;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
    }
  }));
  this$96.nO().Y(f);
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-simulation");
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-grid");
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("display: grid; grid-template-columns: repeat(" + gridSize) + ", 24px); gap: 1px; background: #ccc; padding: 10px;"));
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().lz(grid);
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  capacity = 0;
  size = 0;
  jsElems = [];
  var i$6 = 0;
  while ((i$6 < xs.a.length)) {
    var x1 = i$6;
    var x0$7 = xs.a[x1];
    var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    matchResult24: {
      var $x_4;
      if ((x0$7 !== null)) {
        var row$4 = x0$7.K();
        (x0$7.M() | 0);
        var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().lz(row$4);
        var f$1 = ((x$1$2$1) => {
          if ((x$1$2$1 !== null)) {
            var cellValue = (x$1$2$1.K() | 0);
            (x$1$2$1.M() | 0);
            var isBlack = (cellValue > 0);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((((("width: 24px; height: 24px; background: " + (isBlack ? "black" : "white")) + "; display: flex; align-items: center; justify-content: center; font-size: 8px; color: ") + (isBlack ? "white" : "gray")) + "; font-weight: bold; overflow: hidden;")), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-pixel"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2$1);
        });
        var len = xs$1.a.length;
        var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
        if ((len > 0)) {
          var i$7 = 0;
          if ((xs$1 !== null)) {
            while ((i$7 < len)) {
              var $x_5 = i$7;
              var x0$8 = xs$1.a[i$7];
              ys.a[$x_5] = f$1(x0$8);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
            while ((i$7 < len)) {
              var $x_6 = i$7;
              var x0$9 = xs$1.a[i$7];
              ys.a[$x_6] = f$1(x0$9);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
            while ((i$7 < len)) {
              var $x_7 = i$7;
              var x0$10 = xs$1.a[i$7];
              ys.a[$x_7] = f$1(x0$10);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
            while ((i$7 < len)) {
              var $x_8 = i$7;
              var t = xs$1.a[i$7];
              var lo = t.C;
              var hi = t.F;
              ys.a[$x_8] = f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
            while ((i$7 < len)) {
              var $x_9 = i$7;
              var x0$11 = xs$1.a[i$7];
              ys.a[$x_9] = f$1(x0$11);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
            while ((i$7 < len)) {
              var $x_10 = i$7;
              var x0$12 = xs$1.a[i$7];
              ys.a[$x_10] = f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$12));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
            while ((i$7 < len)) {
              var $x_11 = i$7;
              var x0$13 = xs$1.a[i$7];
              ys.a[$x_11] = f$1(x0$13);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
            while ((i$7 < len)) {
              var $x_12 = i$7;
              var x0$14 = xs$1.a[i$7];
              ys.a[$x_12] = f$1(x0$14);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
            while ((i$7 < len)) {
              var $x_13 = i$7;
              var x0$15 = xs$1.a[i$7];
              ys.a[$x_13] = f$1(x0$15);
              i$7 = ((1 + i$7) | 0);
            }
          } else {
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs$1);
          }
        }
        var $x_4 = ys;
        break matchResult24;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x0$7);
    }
    var elems$20 = $x_14.oC($x_4);
    var it$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_ArrayOps$ArrayIterator__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator(), elems$20.em);
    while (it$1.s()) {
      var elem$6 = it$1.l();
      var unboxedElem = ((elem$6 === null) ? null : elem$6);
      jsElems.push(unboxedElem);
    }
    i$6 = ((1 + i$6) | 0);
  }
  return $x_22.d($x_21.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_20, $x_19.d($x_18.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_17, $x_16, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_15, new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(jsElems), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((component) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return component;
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())])))])));
});
$p.z1 = (function(text, darkRedPixels, lightRedPixels, showMetadata, errorCorrectionPixels, showErrorCorrection, allErrorCorrectionZones, gridSize) {
  if ((gridSize <= 0)) {
    var grid = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.r().r().C)(0);
  } else {
    var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.r().r().C)(gridSize);
    var i = 0;
    while ((i < gridSize)) {
      var $x_2 = i;
      if ((gridSize <= 0)) {
        var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(0);
      } else {
        var array$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(gridSize);
        var i$1 = 0;
        while ((i$1 < gridSize)) {
          array$1.a[i$1] = 0;
          i$1 = ((1 + i$1) | 0);
        }
        var $x_1 = array$1;
      }
      array.a[$x_2] = $x_1;
      i = ((1 + i) | 0);
    }
    var grid = array;
  }
  $p_Llivechart_Main$__drawPositionPattern$3__AAI__I__I__V(this, grid, 0, 0);
  $p_Llivechart_Main$__drawPositionPattern$3__AAI__I__I__V(this, grid, 0, (((-7) + gridSize) | 0));
  $p_Llivechart_Main$__drawPositionPattern$3__AAI__I__I__V(this, grid, (((-7) + gridSize) | 0), 0);
  var end = (((-8) + gridSize) | 0);
  var isEmpty = (end <= 8);
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  if ((!isEmpty)) {
    var i$2 = 8;
    while (true) {
      var x0$1 = i$2;
      if ((((x0$1 % 2) | 0) === 0)) {
        grid.a[6].a[x0$1] = 1;
        grid.a[x0$1].a[6] = 1;
      }
      if ((i$2 === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$2 = ((1 + i$2) | 0);
    }
  }
  var forbiddenPositions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([106, 163, 188]))));
  var dataPositions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_ArrayBuffer$().le($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([])));
  var col = (((-1) + gridSize) | 0);
  var goingUp = true;
  var elem = 0;
  elem = 0;
  while ((col > 6)) {
    var col1 = col;
    var col2 = (((-1) + col) | 0);
    if (goingUp) {
      var x = (((-1) + gridSize) | 0);
      if ((!(x < 0))) {
        var i$3 = x;
        while (true) {
          var x0$2 = i$3;
          if ((((x0$2 >= 9) || (col1 >= 9)) && (grid.a[x0$2].a[col1] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col1));
            }
            var ev$110 = ((1 + elem) | 0);
            elem = ev$110;
          }
          if ((((col2 >= 0) && ((x0$2 >= 9) || (col2 >= 9))) && (grid.a[x0$2].a[col2] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col2));
            }
            var ev$111 = ((1 + elem) | 0);
            elem = ev$111;
          }
          if ((i$3 === 0)) {
            break;
          }
          i$3 = (((-1) + i$3) | 0);
        }
      }
    } else {
      var isEmpty$3 = (gridSize <= 0);
      var scala$collection$immutable$Range$$lastElement$1 = (((-1) + gridSize) | 0);
      if ((!isEmpty$3)) {
        var i$4 = 0;
        while (true) {
          var x0$3 = i$4;
          if ((((x0$3 >= 9) || (col1 >= 9)) && (grid.a[x0$3].a[col1] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col1));
            }
            var ev$112 = ((1 + elem) | 0);
            elem = ev$112;
          }
          if ((((col2 >= 0) && ((x0$3 >= 9) || (col2 >= 9))) && (grid.a[x0$3].a[col2] === 0))) {
            if ((!forbiddenPositions.U(elem))) {
              dataPositions.fB(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col2));
            }
            var ev$113 = ((1 + elem) | 0);
            elem = ev$113;
          }
          if ((i$4 === scala$collection$immutable$Range$$lastElement$1)) {
            break;
          }
          i$4 = ((1 + i$4) | 0);
        }
      }
    }
    goingUp = (!goingUp);
    col = (((-2) + col) | 0);
    if ((col === 6)) {
      col = (((-1) + col) | 0);
    }
  }
  var textLength = text.length;
  var i$5 = 0;
  while (true) {
    var x0$4 = i$5;
    if ((x0$4 < dataPositions.aU)) {
      matchResult34: {
        var \u03b47$___1;
        var \u03b47$___2;
        var x89 = dataPositions.D(x0$4);
        if ((x89 !== null)) {
          var \u03b47$___1 = (x89.K() | 0);
          var \u03b47$___2 = (x89.M() | 0);
          break matchResult34;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x89);
      }
      var row$2 = (\u03b47$___1 | 0);
      var col$2 = (\u03b47$___2 | 0);
      grid.a[row$2].a[col$2] = 0;
    }
    if ((i$5 === 3)) {
      break;
    }
    i$5 = ((1 + i$5) | 0);
  }
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().al();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(7, (-1), 0, false);
  while (it.bl) {
    b.aj((1 & (textLength >> it.cg())));
  }
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O($x_3.E(b.az())).iO(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => ((x$1 !== null) && ((x$1.K() | 0), (x$1.M() | 0), true))))).Y(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    matchResult37: {
      if ((x$1$2 !== null)) {
        var bit$1 = (x$1$2.K() | 0);
        var idx$1 = (x$1$2.M() | 0);
        var posIdx = ((4 + idx$1) | 0);
        if ((posIdx < dataPositions.aU)) {
          matchResult36: {
            var \u03b48$___1;
            var \u03b48$___2;
            var x95 = dataPositions.D(posIdx);
            if ((x95 !== null)) {
              var \u03b48$___1 = (x95.K() | 0);
              var \u03b48$___2 = (x95.M() | 0);
              break matchResult36;
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x95);
          }
          var row$2$1 = (\u03b48$___1 | 0);
          var col$2$1 = (\u03b48$___2 | 0);
          if ((bit$1 === 1)) {
            grid.a[row$2$1].a[col$2$1] = 2;
            break matchResult37;
          } else {
            grid.a[row$2$1].a[col$2$1] = 0;
            break matchResult37;
          }
        } else {
          break matchResult37;
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
    }
  })));
  var charPixelMap = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().eu($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([12, 13, 14, 15, 16, 17, 18, 19]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([20, 21, 22, 23, 41, 42, 43, 44]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([45, 46, 47, 48, 49, 50, 51, 52]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([53, 54, 55, 56, 57, 58, 59, 60]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([61, 62, 63, 64, 65, 66, 67, 68]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([69, 70, 71, 72, 73, 74, 75, 76]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([77, 78, 79, 80, 81, 82, 83, 84]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([85, 86, 87, 88, 110, 111, 112, 113]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([114, 115, 116, 117, 118, 119, 120, 121]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([122, 123, 124, 125, 126, 127, 128, 129]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([130, 131, 132, 133, 134, 135, 136, 137]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([138, 139, 140, 141, 142, 143, 144, 145]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([146, 147, 148, 149, 150, 151, 152, 153]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([154, 155, 156, 157, 158, 159, 160, 161]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([162, 163, 164, 165, 166, 167, 168, 169]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([170, 171, 172, 173, 174, 175, 176, 177]))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(16, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([178, 179, 180, 181, 182, 183, 184, 185])))))])));
  var encodedPixels = this.u6(text, charPixelMap);
  var this$96 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_MapOps$WithFilter(encodedPixels, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => ((x$1$3 !== null) && ((x$1$3.K() | 0), x$1$3.M(), true)))));
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => {
    matchResult40: {
      if ((x$1$4 !== null)) {
        (x$1$4.K() | 0);
        var filledPixels$1 = x$1$4.M();
        var these = filledPixels$1;
        while ((!these.e())) {
          var x0$6 = these.i();
          var pixelIdx = (x0$6 | 0);
          if ((pixelIdx < dataPositions.aU)) {
            matchResult39: {
              var \u03b49$___1;
              var \u03b49$___2;
              var x104 = dataPositions.D(pixelIdx);
              if ((x104 !== null)) {
                var \u03b49$___1 = (x104.K() | 0);
                var \u03b49$___2 = (x104.M() | 0);
                break matchResult39;
              }
              throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x104);
            }
            var row$2$2 = (\u03b49$___1 | 0);
            var col$2$2 = (\u03b49$___2 | 0);
            grid.a[row$2$2].a[col$2$2] = 2;
          }
          these = these.o();
        }
        break matchResult40;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
    }
  }));
  this$96.nO().Y(f);
  var allZonePixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOps__flatMap__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_MapOps$$anon$1(allErrorCorrectionZones), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$().ee));
  var inactiveErrorCorrectionPixels = (showErrorCorrection ? allZonePixels.oq(errorCorrectionPixels) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([])))));
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-simulation");
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-grid");
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("display: grid; grid-template-columns: repeat(" + gridSize) + ", 24px); gap: 1px; background: #ccc; padding: 10px;"));
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().lz(grid);
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  capacity = 0;
  size = 0;
  jsElems = [];
  var i$6 = 0;
  while ((i$6 < xs.a.length)) {
    var x1 = i$6;
    var x0$7 = xs.a[x1];
    var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    matchResult42: {
      var $x_4;
      if ((x0$7 !== null)) {
        var row$4 = x0$7.K();
        var rowIdx = (x0$7.M() | 0);
        var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().lz(row$4);
        var f$1 = ((rowIdx, gridSize, showErrorCorrection, errorCorrectionPixels, inactiveErrorCorrectionPixels, showMetadata, darkRedPixels, lightRedPixels) => ((x$1$2$1) => {
          if ((x$1$2$1 !== null)) {
            var cellValue = (x$1$2$1.K() | 0);
            var colIdx = (x$1$2$1.M() | 0);
            var isBlack = (cellValue > 0);
            var pixelNumber = ((Math.imul(rowIdx, gridSize) + colIdx) | 0);
            var bgColor = ((showErrorCorrection && errorCorrectionPixels.U(pixelNumber)) ? "#00008B" : ((showErrorCorrection && inactiveErrorCorrectionPixels.U(pixelNumber)) ? "#87CEEB" : (showMetadata ? (darkRedPixels.U(pixelNumber) ? "#8b0000" : (lightRedPixels.U(pixelNumber) ? "#ff6666" : (isBlack ? "black" : "white"))) : (isBlack ? "black" : "white"))));
            var textColor = (((showMetadata && (darkRedPixels.U(pixelNumber) || lightRedPixels.U(pixelNumber))) || (showErrorCorrection && (errorCorrectionPixels.U(pixelNumber) || inactiveErrorCorrectionPixels.U(pixelNumber)))) ? "white" : (isBlack ? "white" : "gray"));
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((((("width: 24px; height: 24px; background: " + bgColor) + "; display: flex; align-items: center; justify-content: center; font-size: 8px; color: ") + textColor) + "; font-weight: bold; overflow: hidden;")), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-pixel"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2$1);
        }))(rowIdx, gridSize, showErrorCorrection, errorCorrectionPixels, inactiveErrorCorrectionPixels, showMetadata, darkRedPixels, lightRedPixels);
        var len = xs$1.a.length;
        var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(len);
        if ((len > 0)) {
          var i$7 = 0;
          if ((xs$1 !== null)) {
            while ((i$7 < len)) {
              var $x_5 = i$7;
              var x0$8 = xs$1.a[i$7];
              ys.a[$x_5] = f$1(x0$8);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
            while ((i$7 < len)) {
              var $x_6 = i$7;
              var x0$9 = xs$1.a[i$7];
              ys.a[$x_6] = f$1(x0$9);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
            while ((i$7 < len)) {
              var $x_7 = i$7;
              var x0$10 = xs$1.a[i$7];
              ys.a[$x_7] = f$1(x0$10);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
            while ((i$7 < len)) {
              var $x_8 = i$7;
              var t = xs$1.a[i$7];
              var lo = t.C;
              var hi = t.F;
              ys.a[$x_8] = f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
            while ((i$7 < len)) {
              var $x_9 = i$7;
              var x0$11 = xs$1.a[i$7];
              ys.a[$x_9] = f$1(x0$11);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
            while ((i$7 < len)) {
              var $x_10 = i$7;
              var x0$12 = xs$1.a[i$7];
              ys.a[$x_10] = f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$12));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
            while ((i$7 < len)) {
              var $x_11 = i$7;
              var x0$13 = xs$1.a[i$7];
              ys.a[$x_11] = f$1(x0$13);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
            while ((i$7 < len)) {
              var $x_12 = i$7;
              var x0$14 = xs$1.a[i$7];
              ys.a[$x_12] = f$1(x0$14);
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
            while ((i$7 < len)) {
              var $x_13 = i$7;
              var x0$15 = xs$1.a[i$7];
              ys.a[$x_13] = f$1(x0$15);
              i$7 = ((1 + i$7) | 0);
            }
          } else {
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs$1);
          }
        }
        var $x_4 = ys;
        break matchResult42;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x0$7);
    }
    var elems$21 = $x_14.oC($x_4);
    var it$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_ArrayOps$ArrayIterator__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator(), elems$21.em);
    while (it$1.s()) {
      var elem$6 = it$1.l();
      var unboxedElem = ((elem$6 === null) ? null : elem$6);
      jsElems.push(unboxedElem);
    }
    i$6 = ((1 + i$6) | 0);
  }
  return $x_22.d($x_21.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_20, $x_19.d($x_18.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_17, $x_16, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_15, new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.r().C)(jsElems), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((component) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return component;
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())])))])));
});
$p.nJ = (function(chapter, data) {
  var allExercisesForChapter = this.mF.cv(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))))));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var this$5 = data.cn;
  var f = ((ex) => new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(ex.cC, ex));
  if ((this$5 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0 = this$5.i();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = this$5.o();
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$1 = rest.i();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      t.S = nx;
      t = nx;
      rest = rest.o();
    }
    var $x_1 = h;
  }
  var exerciseMap = $x_2.eu($x_1);
  var f$1 = ((task) => exerciseMap.cv(task, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((task$2) => (() => new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())))(task))));
  if ((allExercisesForChapter === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var sortedExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0$2 = allExercisesForChapter.i();
    var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = allExercisesForChapter.o();
    while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$3 = rest$1.i();
      var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      t$1.S = nx$1;
      t$1 = nx$1;
      rest$1 = rest$1.o();
    }
    var sortedExercises = h$1;
  }
  return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(data.fS, sortedExercises, data.cB);
});
$p.cw = (function(chapter, taskText, answer) {
  if ((chapter !== "")) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this.ja, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
      var allTasksForChapter = this.mF.cv(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))))));
      var f = ((task) => new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
      if ((allTasksForChapter === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var emptyExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0 = allTasksForChapter.i();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = allTasksForChapter.o();
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$1 = rest.i();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          t.S = nx;
          t = nx;
          rest = rest.o();
        }
        var emptyExercises = h;
      }
      var existing = data.cv(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, emptyExercises, new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "")))));
      var this$8 = existing.cn;
      var f$1 = ((_$10) => (_$10.cC === taskText));
      var l = this$8;
      block: {
        var $x_1;
        while (true) {
          if (l.e()) {
            var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
            break;
          } else {
            var h$1 = l.i();
            var t$1 = l.o();
            if (((!(!f$1(h$1))) === true)) {
              l = t$1;
              continue;
            }
            var start = l;
            var remaining = t$1;
            while (true) {
              if (remaining.e()) {
                var $x_1 = start;
                break block;
              } else {
                var x = remaining.i();
                if (((!(!f$1(x))) !== true)) {
                  remaining = remaining.o();
                  continue;
                }
                var firstMiss = remaining;
                var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(start.i(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                var toProcess = start.o();
                var currentLast = newHead;
                while ((toProcess !== firstMiss)) {
                  var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(toProcess.i(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                  currentLast.S = newElem;
                  currentLast = newElem;
                  toProcess = toProcess.o();
                }
                var next = firstMiss.o();
                var nextToCopy = next;
                while ((!next.e())) {
                  var head = next.i();
                  if (((!(!f$1(head))) !== true)) {
                    next = next.o();
                  } else {
                    while ((nextToCopy !== next)) {
                      var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(nextToCopy.i(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                      currentLast.S = newElem$2;
                      currentLast = newElem$2;
                      nextToCopy = nextToCopy.o();
                    }
                    nextToCopy = next.o();
                    next = next.o();
                  }
                }
                if ((!nextToCopy.e())) {
                  currentLast.S = nextToCopy;
                }
                var $x_1 = newHead;
                break block;
              }
            }
          }
        }
      }
      var updatedExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O($x_1, new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(taskText, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(answer)));
      var sortedChapter = this.nJ(chapter, new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(existing.fS, updatedExercises, existing.cB));
      this.ou(chapter, sortedChapter);
      return data.dJ(chapter, sortedChapter);
    })));
  }
});
$p.ou = (function(chapter, data) {
  try {
    var completeData = this.nJ(chapter, data);
    var $x_9 = JSON;
    var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$();
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjsr_Compat$();
    var this$9 = completeData.cn;
    var f = ((ex) => {
      var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$();
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("task", ex.cC);
      var this$5 = ex.cW;
      return $x_4.ch($x_3.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([$x_2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer", (this$5.e() ? null : this$5.j()))])));
    });
    if ((this$9 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0 = this$9.i();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = this$9.o();
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$1 = rest.i();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        t.S = nx;
        t = nx;
        rest = rest.o();
      }
      var $x_5 = h;
    }
    var $x_1 = $x_9.stringify($x_8.ch($x_7.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("exercises", [...$x_6.lv($x_5)]), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("rating", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("understanding", completeData.cB.fX), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("difficulty", completeData.cB.fT), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("quality", completeData.cB.fV), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("scope", completeData.cB.fW), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("feedback", completeData.cB.fU)]))))]))));
    var json = $x_1;
    window.localStorage.setItem(("qr-chapter-" + chapter), json);
  } catch (e) {
  }
});
$p.ez = (function(chapter) {
  try {
    var stored = window.localStorage.getItem(("qr-chapter-" + chapter));
    if ((stored !== null)) {
      var parsed = JSON.parse(stored);
      var arg = parsed.exercises;
      if (((!(!Array.isArray(arg))) === true)) {
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), parsed.exercises));
        var f = ((ex) => {
          var answerValue = ex.answer;
          var answer = (((answerValue === null) || ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(answerValue) === "null")) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(answerValue)));
          return new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(ex.task), answer);
        });
        if ((this$8 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        } else {
          var x0 = this$8.i();
          var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          var t = h;
          var rest = this$8.o();
          while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var x0$1 = rest.i();
            var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            t.S = nx;
            t = nx;
            rest = rest.o();
          }
          var $x_5 = h;
        }
      } else {
        var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([])));
      }
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().k0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(parsed.rating.understanding));
      var $x_4 = (this$12.e() ? 0 : this$12.j());
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().k0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(parsed.rating.difficulty));
      var $x_3 = (this$15.e() ? 0 : this$15.j());
      var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().k0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(parsed.rating.quality));
      var $x_2 = (this$18.e() ? 0 : this$18.j());
      var scopeValue = parsed.rating.scope;
      if (((scopeValue === null) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().q(scopeValue, (void 0)))) {
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().k0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(parsed.rating.quality));
        var $x_1 = ((this$21.e() ? 0 : this$21.j()) | 0);
      } else {
        var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().k0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(scopeValue));
        var $x_1 = ((this$24.e() ? 0 : this$24.j()) | 0);
      }
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, $x_5, new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(($x_4 | 0), ($x_3 | 0), ($x_2 | 0), $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T(parsed.rating.feedback))));
    } else {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } catch (e) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
});
$p.x6 = (function(data) {
  var jsObj = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([])));
  var chapterOrder = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "praxisanwendungen", "zusammenfassung", "barcodes"])));
  var these = chapterOrder;
  while ((!these.e())) {
    var x0 = these.i();
    var this$3 = data.fF(x0);
    if ((!this$3.e())) {
      var x0$1 = this$3.j();
      var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjsr_Compat$();
      var this$12 = x0$1.cn;
      var f = ((ex) => {
        var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$();
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("task", ex.cC);
        var this$8 = ex.cW;
        return $x_3.ch($x_2.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([$x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer", (this$8.e() ? null : this$8.j()))])));
      });
      if ((this$12 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$2 = this$12.i();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = this$12.o();
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$3 = rest.i();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          t.S = nx;
          t = nx;
          rest = rest.o();
        }
        var $x_4 = h;
      }
      var exercises = [...$x_5.lv($x_4)];
      var rating = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("understanding", x0$1.cB.fX), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("difficulty", x0$1.cB.fT), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("quality", x0$1.cB.fV), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("scope", x0$1.cB.fW), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("feedback", x0$1.cB.fU)])));
      jsObj[x0] = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("chapter", x0), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("exercises", exercises), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("rating", rating)])));
    }
    these = these.o();
  }
  return jsObj;
});
$p.wo = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("app-container"), this.yV(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("main-content"), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.mG.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((h) => {
    var hash = ((h === null) ? "" : h);
    if ((hash === "#nachricht")) {
      var showInfoVar = this.ex("qr-infobox-nachricht-1");
      var showAsciiInfoVar = this.ex("qr-infobox-nachricht-4");
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
      var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.hk().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Nachrichten schreiben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      var $x_12 = this.h8(70);
      var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("nachricht-section");
      var $x_10 = this.aH("Beschreibe, wie ein QR-Code aufgebaut ist. Vermute, wie die Daten im QR-Code dargestellt werden.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["pixel", "schwarz", "wei\u00df"]))), 1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(this.uw("Hallo Welt", 200)), "nachricht", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-nachricht-1", showInfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showInfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show) => ((!(!show)) ? this.dY("Kodierung", "Eine Kodierung ist eine Vorschrift, wie Informationen (z.B. Buchstaben) in eine andere Form (z.B. Pixel) umgewandelt werden. Bei QR-Codes werden Buchstaben in schwarze und wei\u00dfe Pixel kodiert. Jeder Buchstabe bekommt dabei ein bestimmtes Muster. Wichtig ist, dass die Kodierung eindeutig ist: Jeder Buchstabe muss ein eindeutiges Muster haben, damit man die Nachricht sp\u00e4ter wieder dekodieren kann.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0));
      var encodingPatternVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector0$()));
      var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe 2", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "\u00dcberlege dir eine eigene Kodierung f\u00fcr die Buchstaben 'B', 'e', 't'. Nutze die Pixel, um deine Kodierung darzustellen.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; align-items: center; gap: 10px;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; flex-direction: column; gap: 4px; font-size: 24px; font-weight: bold;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "B", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("height: 28px; line-height: 28px;")]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "e", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("height: 28px; line-height: 28px;")]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "t", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("height: 28px; line-height: 28px;")])))]))), this.yX(10, 3, "Eigene Kodierung", encodingPatternVar, "nachricht", "\u00dcberlege dir eine eigene Kodierung f\u00fcr die Buchstaben 'B', 'e', 't'. Nutze die Pixel, um deine Kodierung darzustellen.")])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe 3", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung aus Aufgabe 2.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; align-items: center; gap: 10px;"), this.yY(10, 4, "Wort 'Bett' mit eigener Kodierung", encodingPatternVar, 1, "nachricht", "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung aus Aufgabe 2.")])))])))])));
      var $x_7 = this.aH("Erkl\u00e4re die Nachteile einer eigenen, nicht standardisierten Kodierung.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["eindeutig", "speichern", "pixel"]))), 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-nachricht-4", showAsciiInfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showAsciiInfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$2) => ((!(!show$2)) ? this.dY("ASCII als Standard", "ASCII ist ein verbreiteter Standard, bei dem jeder Buchstabe einer eindeutigen 7- oder 8-Bit-Kombination zugeordnet ist. Das verhindert Mehrdeutigkeiten, erleichtert das gemeinsame Verst\u00e4ndnis und f\u00fchrt dazu, dass die Kodierung nicht \u00fcbergeben werden muss, da diese bekannt ist.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0));
      var asciiTable = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("A", "01000001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("B", "01000010"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("C", "01000011"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("D", "01000100"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("E", "01000101"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("F", "01000110"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("G", "01000111"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("H", "01001000"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("I", "01001001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("J", "01001010"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("K", "01001011"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("L", "01001100"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("M", "01001101"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("N", "01001110"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("O", "01001111"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("P", "01010000"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Q", "01010001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("R", "01010010"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("S", "01010011"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("T", "01010100"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("U", "01010101"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("V", "01010110"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("W", "01010111"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("X", "01011000"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Y", "01011001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Z", "01011010")])));
      var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe 5", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle. Rechts siehst du die ASCII-Tabelle, links kodierst du jeden Buchstaben (0 = wei\u00df, 1 = schwarz).", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("aufgabe5-container"), this.yW(8, 10, "Buchstaben zum kodieren", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["I", "N", "F", "O", "R", "M", "A", "T", "I", "K"]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["01001001", "01001110", "01000110", "01001111", "01010010", "01001101", "01000001", "01010100", "01001001", "01001011"]))), "nachricht", "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle."), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.zy().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("ascii-table aufgabe5-ascii-table"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.zD().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.vo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.vm().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Buchstabe", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.vm().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "ASCII (8 Bit)", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.zB().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, asciiTable.od(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
        if ((x$1 !== null)) {
          var ch = x$1.K();
          var bits = x$1.M();
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.vo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.vl().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ch, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.vl().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, bits, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])))])))])));
      var $x_4 = this.aH("Erl\u00e4utere Vorteile der festen L\u00e4nge von 8 Pixeln pro Buchstabe. Wie viele verschiedene Zeichen k\u00f6nnen mit 8 Pixeln dargestellt werden?", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["256", "vorteil", "eindeutig"]))), 6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_3 = this.yZ(7, "Verschl\u00fcssele eine Nachricht mit QR-Code.", "Als n\u00e4chstes \u00fcberf\u00fchren wir das Gelernte in eine QR-Code Darstellung. Daf\u00fcr schauen wir uns an, wie Nachrichten in QR-Codes dargestellt werden. Gib eine Nachricht ein und beobachte, wie diese als QR-Code in Pixel umgewandelt wird. Jeder Buchstabe wird dabei in 8 Bits (seine ASCII-Kodierung) \u00fcbersetzt und f\u00e4rbt entsprechende Pixel schwarz.");
      var $x_2 = this.aH("Erkl\u00e4re, was dir bei der QR-Code Darstellung aufgefallen ist. Gehe dabei auf folgende Fragen ein: Wie wird ein Buchstabe in Pixel umgewandelt? Wie bilden sich die W\u00f6rter? Gibt es Beschr\u00e4nkungen?", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["ascii", "pixel"]))), 8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_1 = this.aH("Erkl\u00e4re, anhand welcher Merkmale sich erkennen l\u00e4sst, wo bei einer Pixelabbildung ein neuer Buchstabe beginnt.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["8"]))), 9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var showQRFixedAreasInfoVar = this.ex("qr-infobox-nachricht-10");
      return $x_15.d($x_14.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, $x_4, $x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([this.aH("Beschreibe, welche Bereiche des QR-Codes festgelegt sind und nicht ver\u00e4ndert werden.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["position", "fest", "fixiert", "erkennung"]))), 10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-nachricht-10", showQRFixedAreasInfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showQRFixedAreasInfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$3$1) => ((!(!show$3$1)) ? this.dY("Festgelegte Bereiche im QR-Code", "Ein QR-Code hat mehrere festgelegte Bereiche, die f\u00fcr die Erkennung und Dekodierung essentiell sind. Die drei Positionsmarker (auch Position Detection Patterns genannt) befinden sich in den drei Ecken des QR-Codes und sind 7\u00d77 Pixel gro\u00dfe Quadrate mit einem schwarzen 3x3 Quadrat im Inneren. Sie erm\u00f6glichen es Scannern, die Ausrichtung und Lage des QR-Codes zu erkennen. Die Timing Pattern sind abwechselnde schwarze und wei\u00dfe Bereiche, die sich horizontal und vertikal an bestimmten Stellen im QR-Codes befinden. Diese helfen, die Gr\u00f6\u00dfe und Position der einzelnen Pixel zu bestimmen. Diese beiden festgelegten Bereiche d\u00fcrfen nie mit Daten \u00fcberschrieben werden, da diese daf\u00fcr sorgen, dass ein QR-Code \u00fcberhaupt von einer Kamera erkannt werden kann. Weiterhin gibt es am Anfang der Nachricht noch einen festen Bereich, der die L\u00e4nge der Nachricht kodiert. Hier wird in 8 Bits angegeben, wie viele Zeichen die Nachricht hat.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), this.aH("Erkl\u00e4re einem Mitsch\u00fcler, wie eine Nachricht in einen QR-Code geschrieben wird.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["ascii", "kodierung", "nachricht", "l\u00e4nge", "position"]))), 11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.hq("nachricht");
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.h7("nachricht"), this.he("#nachricht")])));
    } else if ((hash === "#maskierung")) {
      var showMaskierungInfoVar = this.ex("qr-infobox-maskierung-1");
      var showMaskierungAufgabe4InfoVar = this.ex("qr-infobox-maskierung-4");
      var showMaskierungAufgabe6InfoVar = this.ex("qr-infobox-maskierung-6");
      var showMaskierungAufgabe8InfoVar = this.ex("qr-infobox-maskierung-8");
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.hk().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maskierung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.h8(45), this.aH("Beschreibe was beim scannen des QR Codes passiert und stelle begr\u00fcndete Vermutungen dazu an.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["unlesbar", "schwarze"]))), 1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ir().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iH().k("/qr_unlesbar.png"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ib().k("Unlesbar QR-Code"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.k7().k("300"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.jQ().k("300")])))), "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-maskierung-1", showMaskierungInfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showMaskierungInfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$4$1) => ((!(!show$4$1)) ? this.dY("Maskierung im QR-Code", "Wie du vielleicht bemerkt hast, war der QR-Code schwer zu scannen. Um dies zu verhindern, werden nach einem bestimmten Muster die einzelnen Pixel umgef\u00e4rbt. Diesen Prozess nennt man Maskierung. Die Maskierung sorgt daf\u00fcr, dass der QR-Code besser lesbar ist und von Scannern zuverl\u00e4ssiger erkannt werden kann.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), this.yS(), this.yT(), this.aH("Erl\u00e4utere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zus\u00e4tzlich eine m\u00f6gliche L\u00f6sung, um diese Probleme zu umgehen.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-maskierung-4", showMaskierungAufgabe4InfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showMaskierungAufgabe4InfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$5$1) => ((!(!show$5$1)) ? this.dY("Mehrere Masken in QR-Codes", "Um das Problem einer festen Maske zu l\u00f6sen, werden in QR-Codes 8 verschiedene Masken nacheinander angewandt. Daraufhin wird jeweils bewertet, welche Maske den gr\u00f6\u00dften Kontrast zwischen schwarzen und wei\u00dfen Pixeln generiert. Zus\u00e4tzlich werden andere Kriterien, wie das Vermeiden des Timingpatterns, ber\u00fccksichtigt. Die Maske die am Besten alle Kriterien erf\u00fcllt, wird ausgew\u00e4hlt. Diese Maske wird anschlie\u00dfend auf den QR-Code angewandt. Dadurch wird sichergestellt, dass der QR-Code optimal lesbar ist. Die verschiedenen Masken sind im Bild dargestellt. Unter jeder Maske steht hierbei die Berechnungsvorschrift, die angibt, welche Pixel umgef\u00e4rbt werden. Das \"%\" Zeichen steht hierbei f\u00fcr den Modulo-Operator - also den Rest einer Division.", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some("/qr_masken.png")) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), this.aH("Erkl\u00e4re die Berechnungsvorschrift einer Maske deiner Wahl.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "maskierung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Vermute, woher der Scanner wei\u00df, welche Maske angewandt wurde.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-maskierung-6", showMaskierungAufgabe6InfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showMaskierungAufgabe6InfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$6$1) => ((!(!show$6$1)) ? this.dY("Metadaten in QR-Codes", "Der Scanner wei\u00df deshalb, welche Maske angewandt wurde, weil Metadaten (Daten \u00fcber die Daten) auch in Form von Pixeln an bestimmten Stellen im QR-Code festgehalten werden. Zu diesen Metadaten z\u00e4hlt unter anderem die Nummer der verwendeten Maske. Diese Information wird an spezifischen Positionen im QR-Code kodiert, damit der Scanner diese auslesen und die entsprechende Maske r\u00fcckg\u00e4ngig machen kann, um die urspr\u00fcnglichen Daten zu rekonstruieren. Weitere Metadaten sind beispielsweise die verwendete Fehlerkorrektur-Stufe und die Versionsnummer des QR-Codes.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), this.yU(), this.aH("Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkl\u00e4re, wof\u00fcr diese Eigenschaft n\u00fctzlich sein k\u00f6nnte.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Daten"]))), 8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-maskierung-8", showMaskierungAufgabe8InfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showMaskierungAufgabe8InfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$7$1) => ((!(!show$7$1)) ? this.dY("Vorteile der XOR-Operation", "Die Tatsache, dass die XOR-Operation ihre eigene Umkehrfunktion ist, ist sehr praktisch. Dies f\u00fchrt dazu, dass durch 2-maliges Anwenden der gleichen Maske die urspr\u00fcnglichen Daten wiederhergestellt werden. Der Scanner muss dadurch keine zwei verschiedenen Funktionen implementieren - eine zum Maskieren und eine zum Demaskieren. Stattdessen kann er einfach die gleiche XOR-Funktion ein zweites Mal anwenden. Dies spart Speicherplatz und reduziert Komplexit\u00e4t. Diese Eigenschaft macht XOR zu einer effizienten Wahl f\u00fcr die Maskierung in QR-Codes. ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), this.aH("Fasse in eigenen Worten zusammen, warum die Maskierung ein wichtiger Teil des QR-Code-Systems ist. Erl\u00e4utere dabei an einem Beispiel, wie die Maskierung und Demaskierung funktioniert.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.hq("maskierung");
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.h7("maskierung"), this.he("#maskierung")])));
    } else if ((hash === "#fehlerkorrektur")) {
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.hk().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      var $x_16 = this.h8(45);
      var showFehlerkorrekturAufgabe2InfoVar = this.ex("qr-infobox-fehlerkorrektur-2");
      var showFehlerkorrekturAufgabe3InfoVar = this.ex("qr-infobox-fehlerkorrektur-3");
      return $x_19.d($x_18.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_17, $x_16, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([this.aH("Hin und wieder kommt es vor, dass Leute Sticker auf QR-Codes kleben, welche in der \u00d6ffentlichkeit zu sehen sind. Vergleiche die beiden QR-Codes. Vermute, welcher der beiden QR-Codes durch einen Scanner gelesen werden kann. Begr\u00fcnde deine Vermutung.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Sticker", "lesbar"]))), 1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; gap: 20px; justify-content: center; align-items: flex-start;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center;"), this.uD("qr_mitfehler", "QR-Code mit Stickern", 220), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "QR-Code mit Stickern", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center;"), this.uD("qr_ohnefehler", "QR-Code ohne Sticker", 220), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "QR-Code ohne Sticker", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])))])))), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Versuche nun beide QR-Codes zu scannen. Beschreibe deine Beobachtungen.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["lesbar"]))), 2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-fehlerkorrektur-2", showFehlerkorrekturAufgabe2InfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showFehlerkorrekturAufgabe2InfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$8$1) => ((!(!show$8$1)) ? this.dY("Hinweis zur Fehlerkorrektur", "Wie dir vielleicht aufgefallen ist, konnte der QR-Code mit den Stickern trotzdem gescannt werden. Wie genau das m\u00f6glich ist und welche Grenzen es dabei gibt, schauen wir uns im Folgenden an. Daf\u00fcr gehen wir erst einmal weg von QR-Codes und betrachten ein einfaches Beispiel einer Textnachricht. ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), this.aH("Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider hast du dich bei der Hausnummer verschrieben und statt 23 steht dort 32.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-fehlerkorrektur-3", showFehlerkorrekturAufgabe3InfoVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showFehlerkorrekturAufgabe3InfoVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$9$1) => ((!(!show$9$1)) ? this.dY("Fehlertypen erkennen", "Es gibt zwei Haupttypen von Fehlern: Ausfallsfehler (auch L\u00f6schfehler genannt): Ein Zeichen wird vollst\u00e4ndig entfernt oder ist unlesbar. Substitutionsfehler: Ein Zeichen wird durch ein anderes ersetzt. Substitutionsfehler sind oft schwieriger zu erkennen, da der Text syntaktisch korrekt bleibt, aber semantisch falsch ist. Durch Redundanz (zus\u00e4tzliche Informationen) k\u00f6nnen beide Fehlertypen erkannt und teilweise korrigiert werden.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), this.aH("Eine M\u00f6glichkeit mit Fehlern umzugehen ist es, eine Pr\u00fcfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gez\u00e4hlt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel w\u00e4re, dass die Zeichenanzahl gez\u00e4hlt wird. Aus der Nachricht 'Hallo' w\u00fcrde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt oder korrigiert werden k\u00f6nnen. Begr\u00fcnde deine Antwort.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Ausfallsfehler"]))), 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden k\u00f6nnen am Beispiel der Nachricht '12345'. (Tipp: \u00dcberlege dir, was du machst, wenn eine Information von einer Person im Gespr\u00e4ch nicht verstanden wurde.)", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["1234512345"]))), 5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein d\u00fcrfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Urspr\u00fcngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Urspr\u00fcngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Urspr\u00fcngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["50", "66", "90"]))), 6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.yR(), this.v3(8, "fehlerkorrektur", "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zus\u00e4tzlich die Metadaten in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Erkl\u00e4re in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zus\u00e4tzlichen Daten und dem Korrekturlevel ein. Erl\u00e4utere zus\u00e4tzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.hq("fehlerkorrektur");
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())]))), this.h7("fehlerkorrektur"), this.he("#fehlerkorrektur")])));
    } else if ((hash === "#praxisanwendungen")) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.hk().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.h8(45), this.aH("Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begr\u00fcnde jeweils kurz.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["sinnvoll"]))), 1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Schule", "Ziel", "Platzierung"]))), 2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Die Schulleitung \u00fcberlegt, wie man erfassen k\u00f6nnte, welche Sch\u00fcler das Gel\u00e4nde verlassen. Momentan wird daf\u00fcr eine Lehrkraft eingesetzt, welche sich die Hausaufgabenhefte zeigen l\u00e4sst. \nIn dem Hausaufgabenheft werden Name und Geburtsdatum des Sch\u00fclers \u00fcberpr\u00fcft. Ein Sch\u00fcler darf das Gel\u00e4nde verlassen, wenn er \u00fcber 16 Jahre alt ist. \nErl\u00e4utere je 2 Vor- und Nachteile dieser Methode.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Vorteil", "Nachteil"]))), 3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Erl\u00e4utere, wie du den Sachverhalt aus Aufgabe 3 mit einem QR-Code l\u00f6sen w\u00fcrdest. Gehe dabei auch darauf ein, welche Daten im QR-Code gespeichert werden m\u00fcssen.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Nimm begr\u00fcndet Stellung zum Nutzen von QR-Codes im Anwendungsfall von Aufgabe 3.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Eine Lehrkraft \u00e4u\u00dfert Bedenken dar\u00fcber, dass Sch\u00fcler zum einen die QR-Codes manipulieren k\u00f6nnten, um falsche Daten zu speichern. Zum anderen bef\u00fcrchtet die Lehrkraft, dass die QR-Codes nach einem Jahr verschmutzen oder besch\u00e4digt sind, da das Lesen eines QR-Codes nicht mehr m\u00f6glich ist, wenn schon ein Pixel umgef\u00e4rbt ist. \nErl\u00e4utere, wie du auf diese Bedenken reagierst. Begr\u00fcnde deine Antworten.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Um das Speichern der Daten einmal auszuprobieren, erstelle einen QR-Code mit deinen Daten (Du kannst dir daf\u00fcr nat\u00fcrlich auch welche ausdenken). \nGehe daf\u00fcr auf die Webseite 'https://www.qrcode-generator.de/' und w\u00e4hle dort den Typ 'VCard' aus. F\u00fclle die Informationen aus. \n\u00dcberpr\u00fcfe, ob der QR-Code funktioniert, indem du ihn mit deinem Smartphone scannst. Wenn alles funktioniert hat, kannst du dir den QR-Code als Bild speichern, ausdrucken und in deine Handyh\u00fclle legen. \nBeschreibe, welche Daten du au\u00dferdem in einer VCard speichern k\u00f6nntest und welche Vorteile dies hat.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.hq("praxisanwendungen");
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.h7("praxisanwendungen"), this.he("#praxisanwendungen")])));
    } else if ((hash === "#zusammenfassung")) {
      var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
      var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.hk().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Zusammenfassung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      var $x_20 = this.h8(60);
      var zusammenfassungMessageVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q("");
      var generatedQrTextVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      return $x_23.d($x_22.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_21, $x_20, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; margin-bottom: 2rem;"), this.v3(1, "fehlerkorrektur", "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zus\u00e4tzlich die Metadaten in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Durch einen Klick auf 'Maske anwenden' wird die Maske auf den QR-Code angewandt. Teste verschiedene Eingaben und \u00fcberpr\u00fcfe das Ergebnis mit einem QR-Code Scanner.", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(zusammenfassungMessageVar)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maske anwenden", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 1rem 2rem; background-color: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1rem;"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$11) => {
        var current = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(zusammenfassungMessageVar.g.G().j());
        if ((current !== "")) {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(generatedQrTextVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(current));
        }
      })))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(generatedQrTextVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
        if ((x$1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
          var txt = x$1$2.an;
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.uA().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Generierter QR-Code", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.uw(txt, 220)])));
        }
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$2)) {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
          return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
      })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), this.aH("Erkl\u00e4re anhand von Aufgabe 1, wie genau der QR-Code erstellt wird. Gehe dabei auf die einzelnen Schritte ein, die notwendig sind, um aus einer Nachricht einen QR-Code zu generieren.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.z4(), this.h7("zusammenfassung"), this.he("#zusammenfassung")])));
    } else if ((hash === "#barcodes")) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.hk().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Barcode", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.h8(30), this.aH("Erkl\u00e4re den Unterschied zwischen eindimensionalen Barcodes und QR-Codes.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["eindimensional", "zweidimensional"]))), 1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "barcodes", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Nenne drei typische Einsatzbereiche von Barcodes.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["handel", "logistik", "lager"]))), 2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "barcodes", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.aH("Beschreibe, welche Informationen ein klassischer Barcode typischerweise enth\u00e4lt und welche nicht.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["artikel", "nummer", "id"]))), 3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "barcodes", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.hq("barcodes");
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.h7("barcodes"), this.he("#barcodes")])));
    } else {
      var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
      var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.hk().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Einleitung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      var $x_30 = this.h8(15);
      var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 2rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 1.25rem; background: #eef5ff; border-radius: 10px; border-left: 4px solid #4a78d3;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 0; color: #1f3b73;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Ben\u00f6tigte Arbeitsmaterialien", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0.5rem 0; color: #2d4a7a;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Ger\u00e4te", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.lx().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0.5rem 0; padding-left: 1.25rem; color: #2d4a7a;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ix().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Computer mit Internetzugang", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ix().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Smartphone mit Kamera", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 1.25rem; background: #eef8f2; border-radius: 10px; border-left: 4px solid #2f7d4e;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 0; color: #1d4b2f;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Scanner-Tools", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0.5rem 0; color: #2b5a3d;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Apps und Kamera", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.lx().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0.5rem 0; padding-left: 1.25rem; color: #2b5a3d;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ix().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "QR-Code-Scanner-App", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ix().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Alternativ: Kamera-App mit QR-Scan", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])))])))])));
      var $x_28 = this.tv("QR-Code-Scanner installieren und verwenden", "Um QR-Codes mit deinem Smartphone zu scannen, ben\u00f6tigst du eine Scanner-App:\nDas Arbeitsheft wurde mit der App 'QR- & Barcode- Scanner'aus dem Appstore von TeaCapps getestet. F\u00fcr eine reibungslose Bearbeitung wird empfohlen, diese App zu verwenden.\nDie meisten Handys haben heute auch in der Kamera einen eingebauten QR-Code Scanner. Dieser kann auch benutzt werden.\nUm einen QR-Code zu scannen, \u00f6ffne die Scanner-App oder die Kamera deines Smartphones und richte sie auf den QR-Code. Die App oder Kamera erkennt den Code automatisch und zeigt dir den Inhalt an.\nTipp: Achte darauf, dass der QR-Code gut beleuchtet und nicht zu verdeckt ist, damit der Scanner ihn schnell erkennen kann.");
      var $x_27 = this.tv("Abgabe der JSON-Datei am Ende", "Am Ende des Arbeitsheftes gibst du deine Ergebnisse als JSON-Datei ab.\nKlicke dazu auf den Button \"Ergebnisse Abgeben\" in der Navigation. Dadurch wird eine Datei mit deinen Antworten heruntergeladen.\nLade diese Datei nach der Bearbeitung des Arbeitsheftes in den Abgabeordner hoch.");
      var $x_26 = this.dY("Einleitung", "Du kennst das bestimmt, dass du mit deinem Smartphone kurz einen QR-Code scannst und  anschlie\u00dfend zu einer Webseite weitergeleitet wirst. Doch was genau passiert dabei? F\u00fcr welche Anwendungen ist es sinnvoll einen QR-Code zu nutzen und f\u00fcr welche nicht? Die Antworten auf diese Fragen findest du in den folgenden Kapiteln, welche du auf der linken Seite ausw\u00e4hlen kannst. In der rechten oberen Ecke findest du jeweils eine Zeitabsch\u00e4tzung, wie lange das Kapitel dauert.\nViel Spa\u00df!", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
      var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var showInfoBoxVar = this.ex("qr-infobox-einfuehrung-1");
      return $x_33.d($x_32.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_31, $x_30, $x_29, $x_28, $x_27, $x_26, $x_25.d($x_24.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([this.aH("Scanne die QR-Codes und beschreibe deren Inhalte. Beschreibe zus\u00e4tzlich die Gemeinsamkeiten.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["qr"]))), 1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-codes-grid"), this.ux("https://example.com", "Beispiel QR-Code 1", 150), this.xT("/qr_example.png", "Beispiel QR-Code 2", 150), this.ux("Benutze das Wort: QRCode in deiner Abgabe", "Beispiel QR-Code 3", 150)])))), "einfuehrung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.eB("qr-infobox-einfuehrung-1", showInfoBoxVar);
      }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showInfoBoxVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$10$1) => ((!(!show$10$1)) ? this.dY("Informationen zur Bearbeitung", "Durch das Klicken auf den \"Abgeben\" Button bei den Aufgaben werden deine Antworten lokal in deinem Browser gespeichert. Dieser f\u00e4rbt sich gr\u00fcn, wenn alle Schl\u00fcsselw\u00f6rter, welche gefordert waren, im Text vorhanden sind. Ansonsten f\u00e4rbt er sich rot. Zus\u00e4tzlich gibt es im Arbeitsheft immer wieder Informationsboxen, welche nach dem Klicken des \"Abgeben\" Buttons angezeigt werden. ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), this.yQ("Welche Aussage trifft auf QR-Codes zu?", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("QR-Codes haben immer gleich viele wei\u00dfe und schwarze Pixel.", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("QR-Codes k\u00f6nnen ausschlie\u00dflich Links speichern.", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("QR-Codes k\u00f6nnen verschiedene Arten von Informationen speichern, nicht nur Links.", true)]))), 2, "einfuehrung"), this.aH("Beschreibe in 50 Worten, welche Vorstellungen du davon hast, wie QR-Codes funktionieren.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([]))), 3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "einfuehrung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        this.hq("einfuehrung");
      }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(50))]))), this.h7("einfuehrung"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1.5rem; padding: 1rem; background: #f7f7f7; border-radius: 10px; border: 1px solid #e0e0e0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Was kommt als N\u00e4chstes?", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Nun kannst du frei w\u00e4hlen, in welcher Reihenfolge du die Kapitel Nachrichten schreiben, Maskierung und Fehlerkorrektur bearbeitest. \n\nWenn du alle drei Kapitel bearbeitet hast, kannst du zum Kapitel Praxisanwendungen \u00fcbergehen, in welchem du dein Wissen auf konkrete Anwendungsf\u00e4lle \u00fcbertragen kannst. \n\nIm Kapitel Zusammenfassung erstellst du dir zum Schluss dann deinen eigenen Spickzettel, auf dem die wichtigsten Informationen zu QR-Codes \u00fcbersichtlich dargestellt sind. ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: grid; gap: 0.5rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k("#nachricht"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Nachrichten schreiben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-primary")])))])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k("#maskierung"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maskierung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-primary")])))])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k("#fehlerkorrektur"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-primary")])))])))])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("font-weight: 700; color: #607d8b;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "->", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k("#praxisanwendungen"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Praxisanwendungen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-primary")])))])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("font-weight: 700; color: #607d8b;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "->", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k("#zusammenfassung"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Zusammenfassung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-primary")])))])))])))])))]))), this.he("#einfuehrung")])));
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])))])));
});
$p.yX = (function(cols, rows, title, savedPattern, chapter, taskText) {
  var total = Math.imul(cols, rows);
  if (((chapter !== "") && (taskText !== ""))) {
    var this$5 = this.ez(chapter);
    if (this$5.e()) {
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0 = this$5.j();
      var this$6 = x0.cn;
      _return: {
        var these = this$6;
        while ((!these.e())) {
          if ((these.i().cC === taskText)) {
            var this$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
            break _return;
          }
          these = these.o();
        }
        var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      var $x_1 = (this$7.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$7.j().cW);
    }
    var this$8 = $x_1;
    if (this$8.e()) {
      var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0$3 = this$8.j();
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var len = x0$3.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
      var i = 0;
      while ((i < len)) {
        var index = i;
        var x = x0$3.charCodeAt(index);
        if (((x === 48) || (x === 49))) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
          sb.A = (sb.A + str);
        }
        i = ((1 + i) | 0);
      }
      var x$3 = $x_3.hx($x_2.lp(((len === sb.u()) ? x0$3 : sb.A), total, 48), total);
      var len$1 = x$3.length;
      var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        dst.a[i$1] = (x$3.charCodeAt(i$1) === 49);
        i$1 = ((1 + i$1) | 0);
      }
      var this$16 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
      var storedGrid = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$16));
    }
  } else {
    var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (storedGrid.e()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < total)) {
      b.ct(false);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_4 = b.bz();
  } else {
    var $x_4 = storedGrid.j();
  }
  var initialGrid = $x_4;
  var pixelGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(initialGrid);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_SeqOps__isEmpty__Z(initialGrid))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(savedPattern, initialGrid);
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, title, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-grid"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px;")), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(pixelGrid.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(grid).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 !== null)) {
      var isOn = (!(!x$1$1.K()));
      var idx = (x$1$1.M() | 0);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J((isOn ? "pixel on" : "pixel")), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$16) => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(pixelGrid, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => g.cU(idx, (!(!(!g.D(idx))))))));
      })))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(pixelGrid.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid$2) => {
    var binary = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(grid$2.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$1) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$1)) ? 49 : 48))))), "", "", "");
    if (((chapter !== "") && (taskText !== ""))) {
      this.cw(chapter, taskText, binary);
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-submit-area"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$17) => {
    var current = pixelGrid.g.G().j();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(savedPattern, current);
    return current;
  }))).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$18) => new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(true)))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x130 = (!(!x$1$2.an));
      if ((x130 === true)) {
        return "btn-success";
      }
      if ((x130 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$2)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))])))])));
});
$p.yY = (function(cols, rows, title, expectedPattern, rowsPerChar, chapter, taskText) {
  var total = Math.imul(cols, rows);
  if (((chapter !== "") && (taskText !== ""))) {
    var this$5 = this.ez(chapter);
    if (this$5.e()) {
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0 = this$5.j();
      var this$6 = x0.cn;
      _return: {
        var these = this$6;
        while ((!these.e())) {
          if ((these.i().cC === taskText)) {
            var this$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
            break _return;
          }
          these = these.o();
        }
        var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      var $x_1 = (this$7.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$7.j().cW);
    }
    var this$8 = $x_1;
    if (this$8.e()) {
      var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0$3 = this$8.j();
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var len = x0$3.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
      var i = 0;
      while ((i < len)) {
        var index = i;
        var x = x0$3.charCodeAt(index);
        if (((x === 48) || (x === 49))) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
          sb.A = (sb.A + str);
        }
        i = ((1 + i) | 0);
      }
      var x$3 = $x_3.hx($x_2.lp(((len === sb.u()) ? x0$3 : sb.A), total, 48), total);
      var len$1 = x$3.length;
      var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        dst.a[i$1] = (x$3.charCodeAt(i$1) === 49);
        i$1 = ((1 + i$1) | 0);
      }
      var this$16 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
      var storedGrid = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$16));
    }
  } else {
    var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O;
  if (storedGrid.e()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < total)) {
      b.ct(false);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_4 = b.bz();
  } else {
    var $x_4 = storedGrid.j();
  }
  var pixelGrid = $x_5.Q($x_4);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, title, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-grid"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px;")), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(pixelGrid.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(grid).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 !== null)) {
      var isOn = (!(!x$1$1.K()));
      var idx = (x$1$1.M() | 0);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J((isOn ? "pixel on" : "pixel")), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$23) => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(pixelGrid, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => g.cU(idx, (!(!(!g.D(idx))))))));
      })))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(pixelGrid.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid$2) => {
    var binary = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(grid$2.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$1) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$1)) ? 49 : 48))))), "", "", "");
    if (((chapter !== "") && (taskText !== ""))) {
      this.cw(chapter, taskText, binary);
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-submit-area"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$24) => {
    var current = pixelGrid.g.G().j();
    var expected = expectedPattern.g.G().j();
    if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_SeqOps__isEmpty__Z(expected))) {
      var chars = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().a8(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([0, 1, 2, 2]))));
      var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(chars);
      var these$1 = this$37;
      while ((!these$1.e())) {
        var x0$5 = these$1.i();
        matchResult49: {
          var $x_6;
          if ((x0$5 !== null)) {
            var charIdx = (x0$5.K() | 0);
            var wordIdx = (x0$5.M() | 0);
            var rowStart = Math.imul(charIdx, cols);
            var rowEnd = ((rowStart + cols) | 0);
            var targetStart = Math.imul(wordIdx, cols);
            var targetEnd = ((targetStart + cols) | 0);
            if (((rowEnd <= expected.u()) && (targetEnd <= current.u()))) {
              var expectedRow = expected.fJ(rowStart, rowEnd);
              var currentRow = current.fJ(targetStart, targetEnd);
              var $x_6 = ((expectedRow === null) ? (currentRow === null) : expectedRow.z(currentRow));
              break matchResult49;
            } else {
              var $x_6 = false;
              break matchResult49;
            }
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x0$5);
        }
        if ((!$x_6)) {
          return false;
        }
        these$1 = these$1.o();
      }
      return true;
    } else {
      return false;
    }
  }))).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some((!(!ok)))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x141 = (!(!x$1$2.an));
      if ((x141 === true)) {
        return "btn-success";
      }
      if ((x141 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$2)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))])))])));
});
$p.yW = (function(cols, rows, title, labels, expectedPatterns, chapter, taskText) {
  var total = Math.imul(cols, rows);
  if (((chapter !== "") && (taskText !== ""))) {
    var this$5 = this.ez(chapter);
    if (this$5.e()) {
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0 = this$5.j();
      var this$6 = x0.cn;
      _return: {
        var these = this$6;
        while ((!these.e())) {
          if ((these.i().cC === taskText)) {
            var this$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
            break _return;
          }
          these = these.o();
        }
        var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      var $x_1 = (this$7.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$7.j().cW);
    }
    var this$8 = $x_1;
    if (this$8.e()) {
      var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0$3 = this$8.j();
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var len = x0$3.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
      var i = 0;
      while ((i < len)) {
        var index = i;
        var x = x0$3.charCodeAt(index);
        if (((x === 48) || (x === 49))) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
          sb.A = (sb.A + str);
        }
        i = ((1 + i) | 0);
      }
      var x$3 = $x_3.hx($x_2.lp(((len === sb.u()) ? x0$3 : sb.A), total, 48), total);
      var len$1 = x$3.length;
      var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        dst.a[i$1] = (x$3.charCodeAt(i$1) === 49);
        i$1 = ((1 + i$1) | 0);
      }
      var this$16 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
      var storedGrid = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$16));
    }
  } else {
    var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O;
  if (storedGrid.e()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < total)) {
      b.ct(false);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_4 = b.bz();
  } else {
    var $x_4 = storedGrid.j();
  }
  var pixelGrid = $x_5.Q($x_4);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i$3 = 0;
  while ((i$3 < rows)) {
    b$1.ct($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
    i$3 = ((1 + i$3) | 0);
  }
  var rowStatusVar = $x_6.Q(b$1.bz());
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, title, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-grid-labeled"), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(pixelGrid.g, rowStatusVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 !== null)) {
      var grid = x$1$1.K();
      var rowStatus = x$1$1.M();
      var isEmpty = (rows <= 0);
      var scala$collection$immutable$Range$$lastElement = (((-1) + rows) | 0);
      var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      if (isEmpty) {
        var $x_7 = 0;
      } else {
        if ((rows <= 0)) {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().k4(0, rows, 1, false);
        }
        var $x_7 = rows;
      }
      if (($x_7 === 0)) {
        var this$45 = this$28;
      } else {
        var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
        if (iter.bl) {
          var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.cg(), this$28);
          var curr = result;
          while (iter.bl) {
            var temp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.cg(), this$28);
            curr.S = temp;
            curr = temp;
          }
          var this$45 = result;
        } else {
          var this$45 = this$28;
        }
      }
      var f$1 = ((r$1) => {
        var r$2 = (r$1 | 0);
        var rowStart = Math.imul(r$2, cols);
        var status = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(rowStatus).id(r$2).nP($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$().ee);
        matchResult55: {
          var rowBg;
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x160 = (!(!status.an));
            if ((x160 === true)) {
              var rowBg = "background: rgba(46, 204, 113, 0.2); border-radius: 4px; padding: 2px;";
              break matchResult55;
            }
            if ((x160 === false)) {
              var rowBg = "background: rgba(231, 76, 60, 0.2); border-radius: 4px; padding: 2px;";
              break matchResult55;
            }
          }
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === status)) {
            var rowBg = "";
            break matchResult55;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }
        var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
        var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k(("display: flex; align-items: center; gap: 6px; margin-bottom: 4px; " + rowBg));
        var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah();
        var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
        var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
        var this$32 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(labels).id(r$2);
        var $x_14 = $x_18.d($x_17.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($x_16, $x_15.hx((this$32.e() ? "" : this$32.j()), 1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("width: 18px; text-align: center; font-weight: bold;")])));
        var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
        var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("display: grid; grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px; gap: 1px;"));
        var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
        var isEmpty$1 = (cols <= 0);
        var scala$collection$immutable$Range$$lastElement$1 = (((-1) + cols) | 0);
        var this$40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        if (isEmpty$1) {
          var $x_8 = 0;
        } else {
          if ((cols <= 0)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().k4(0, cols, 1, false);
          }
          var $x_8 = cols;
        }
        if (($x_8 === 0)) {
          var this$43 = this$40;
        } else {
          var iter$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement$1, isEmpty$1);
          if (iter$1.bl) {
            var result$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.cg(), this$40);
            var curr$1 = result$1;
            while (iter$1.bl) {
              var temp$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.cg(), this$40);
              curr$1.S = temp$1;
              curr$1 = temp$1;
            }
            var this$43 = result$1;
          } else {
            var this$43 = this$40;
          }
        }
        var f = ((c) => {
          var c$1 = (c | 0);
          var idx = ((rowStart + c$1) | 0);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J(((!(!grid.D(idx))) ? "pixel on" : "pixel")), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$32) => {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(pixelGrid, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => g.cU(idx, (!(!(!g.D(idx))))))));
          })))])));
        });
        if ((this$43 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        } else {
          var x0$5 = this$43.i();
          var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$5), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          var t = h;
          var rest = this$43.o();
          while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var x0$6 = rest.i();
            var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            t.S = nx;
            t = nx;
            rest = rest.o();
          }
          var $x_9 = h;
        }
        return $x_21.d($x_20.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_19, $x_14, $x_13.d($x_12.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_10, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])));
      });
      if ((this$45 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$7 = this$45.i();
        var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t$1 = h$1;
        var rest$1 = this$45.o();
        while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$8 = rest$1.i();
          var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$8), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          t$1.S = nx$1;
          t$1 = nx$1;
          rest$1 = rest$1.o();
        }
        return h$1;
      }
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(pixelGrid.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid$1) => {
    var binary = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(grid$1.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2)) ? 49 : 48))))), "", "", "");
    if (((chapter !== "") && (taskText !== ""))) {
      this.cw(chapter, taskText, binary);
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-submit-area"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$33) => {
    var current = pixelGrid.g.G().j();
    var this$67 = expectedPatterns.zA(rows);
    var f$2 = ((bits) => {
      var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var x$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(bits);
      var len$2 = x$6.length;
      var sb$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len$2);
      var i$4 = 0;
      while ((i$4 < len$2)) {
        var index$2 = i$4;
        var x$7 = x$6.charCodeAt(index$2);
        if (((x$7 === 48) || (x$7 === 49))) {
          var str$1 = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x$7));
          sb$1.A = (sb$1.A + str$1);
        }
        i$4 = ((1 + i$4) | 0);
      }
      var x$10 = $x_23.hx($x_22.lp(((len$2 === sb$1.u()) ? x$6 : sb$1.A), cols, 48), cols);
      var len$3 = x$10.length;
      var dst$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$3);
      var i$5 = 0;
      while ((i$5 < len$3)) {
        dst$1.a[i$5] = (x$10.charCodeAt(i$5) === 49);
        i$5 = ((1 + i$5) | 0);
      }
      var this$66 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst$1);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$66);
    });
    if ((this$67 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var expectedRows = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$10 = this$67.i();
      var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$10), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$2 = h$2;
      var rest$2 = this$67.o();
      while ((rest$2 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$11 = rest$2.i();
        var nx$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$11), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        t$2.S = nx$2;
        t$2 = nx$2;
        rest$2 = rest$2.o();
      }
      var expectedRows = h$2;
    }
    var this$71 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Range$Exclusive(0, rows, 1);
    var statuses = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$71).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((r$5) => {
      var r$6 = (r$5 | 0);
      var rowSlice = current.fJ(Math.imul(r$6, cols), Math.imul(((1 + r$6) | 0), cols));
      var this$73 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(expectedRows).id(r$6);
      if (this$73.e()) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0$12 = this$73.j();
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(((rowSlice === null) ? (x0$12 === null) : rowSlice.z(x0$12)));
      }
    })));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(rowStatusVar, statuses);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__flatten__F1__O(statuses, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$().ee).cH(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$11) => (!(!x$11))))));
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x168 = (!(!x$1$2.an));
      if ((x168 === true)) {
        return "btn-success";
      }
      if ((x168 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$2)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))])))])));
});
$p.yV = (function() {
  var menuItems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T3.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3("#einfuehrung", "Einf\u00fchrung", "einfuehrung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3("#nachricht", "Nachrichten schreiben", "nachricht"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3("#maskierung", "Maskierung", "maskierung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3("#fehlerkorrektur", "Fehlerkorrektur", "fehlerkorrektur"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3("#praxisanwendungen", "Praxisanwendungen", "praxisanwendungen"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3("#zusammenfassung", "Zusammenfassung", "zusammenfassung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T3("#barcodes", "Barcode", "barcodes")])));
  var praxisPrereq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["nachricht", "maskierung", "fehlerkorrektur"])));
  var praxisUnlockedSignal = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.dn.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((completed) => praxisPrereq.lu(completed))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var zusammenfassungUnlockedSignal = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.dn.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$35) => _$35.U("praxisanwendungen"))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var barcodesUnlockedSignal = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.dn.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$36) => _$36.U("zusammenfassung"))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("navbar");
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("navbar-header"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "QR-Code", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Wie wird ein QR-Code erstellt?", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("navbar-nav");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  var f = ((x$1) => {
    if ((x$1 !== null)) {
      var hash = x$1.gI;
      var label = x$1.gJ;
      var chapterKey = x$1.gK;
      var isPraxis = (chapterKey === "praxisanwendungen");
      var isZusammenfassung = (chapterKey === "zusammenfassung");
      var isBarcodes = (chapterKey === "barcodes");
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC((isPraxis ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(this.dn.g, praxisUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
        if ((x$1$2 !== null)) {
          var completed$1 = x$1$2.K();
          return ((!(!(!x$1$2.M()))) ? "menu-item locked" : (completed$1.U(chapterKey) ? "menu-item completed" : "menu-item"));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
      })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : (isZusammenfassung ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(this.dn.g, zusammenfassungUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => {
        if ((x$1$3 !== null)) {
          var completed$2 = x$1$3.K();
          return ((!(!(!x$1$3.M()))) ? "menu-item locked" : (completed$2.U(chapterKey) ? "menu-item completed" : "menu-item"));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
      })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : (isBarcodes ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(this.dn.g, barcodesUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => {
        if ((x$1$4 !== null)) {
          var completed$3 = x$1$4.K();
          return ((!(!(!x$1$4.M()))) ? "menu-item locked" : (completed$3.U(chapterKey) ? "menu-item completed" : "menu-item"));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
      })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.dn.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((completed$4) => (completed$4.U(chapterKey) ? "menu-item completed" : "menu-item"))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de()), (isPraxis ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(praxisUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((unlocked$3) => ((!(!unlocked$3)) ? hash : "#"))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, label, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(praxisUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((unlocked$2$1) => ((!(!unlocked$2$1)) ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "locked", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(this.dn.g, praxisUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$5) => {
        if ((x$1$5 !== null)) {
          var completed$5 = x$1$5.K();
          return (((!(!x$1$5.M())) && completed$5.U(chapterKey)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-left: 0.5rem; color: #123a7a; font-weight: 700;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "\u2713", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$5);
      })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ln(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$37) => (void 0))))]))) : (isZusammenfassung ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(zusammenfassungUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((unlocked$3$1) => ((!(!unlocked$3$1)) ? hash : "#"))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, label, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(zusammenfassungUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((unlocked$4$1) => ((!(!unlocked$4$1)) ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "locked", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(this.dn.g, zusammenfassungUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$6) => {
        if ((x$1$6 !== null)) {
          var completed$6 = x$1$6.K();
          return (((!(!x$1$6.M())) && completed$6.U(chapterKey)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-left: 0.5rem; color: #123a7a; font-weight: 700;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "\u2713", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$6);
      })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ln(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$38) => (void 0))))]))) : (isBarcodes ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(barcodesUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((unlocked$5$1) => ((!(!unlocked$5$1)) ? hash : "#"))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, label, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(barcodesUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((unlocked$6$1) => ((!(!unlocked$6$1)) ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "locked", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(this.dn.g, barcodesUnlockedSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$7) => {
        if ((x$1$7 !== null)) {
          var completed$7 = x$1$7.K();
          return (((!(!x$1$7.M())) && completed$7.U(chapterKey)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-left: 0.5rem; color: #123a7a; font-weight: 700;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "\u2713", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$7);
      })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ln(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$39) => (void 0))))]))) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k(hash), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, label, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this.dn.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((completed$2$1) => (completed$2$1.U(chapterKey) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-left: 0.5rem; color: #123a7a; font-weight: 700;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "\u2713", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ln(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$40) => (void 0))))]))))))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  });
  if ((menuItems === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0 = menuItems.i();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = menuItems.o();
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$1 = rest.i();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      t.S = nx;
      t = nx;
      rest = rest.o();
    }
    var $x_1 = h;
  }
  return $x_9.d($x_8.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_7, $x_6, $x_5.d($x_4.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("navbar-footer"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Ergebnisse Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("save-button"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$41) => {
    var chapters = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "praxisanwendungen", "zusammenfassung", "barcodes"])));
    var currentData = this.ja.g.G().j();
    var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
    var f$1 = ((chapter) => new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(chapter, this.nJ(chapter, currentData.cv(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1(((chapter$2) => (() => new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, ""))))(chapter))))));
    if ((chapters === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$2 = chapters.i();
      var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$1 = h$1;
      var rest$1 = chapters.o();
      while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$3 = rest$1.i();
        var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        t$1.S = nx$1;
        t$1 = nx$1;
        rest$1 = rest$1.o();
      }
      var $x_10 = h$1;
    }
    var allData = $x_11.eu($x_10);
    var json = JSON.stringify($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("timestamp", new Date().toISOString()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("data", this.x6(allData))]))), null, 2);
    var blob = new Blob([json], $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("contentType", "application/json")]))));
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = (("qr-kurs-antworten-" + (+new Date().getTime())) + ".json");
    link.click();
    URL.revokeObjectURL(url);
  })))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 0.75rem; text-align: center; font-size: 0.85rem; color: rgba(255, 255, 255, 0.8);"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Autor: Lucas Reisig", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])))])));
});
$p.yS = (function() {
  var this$1 = this.ez("maskierung");
  if (this$1.e()) {
    var savedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$1.j();
    var this$2 = x0.cn;
    _return: {
      var these = this$2;
      while ((!these.e())) {
        if ((these.i().cC === "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.")) {
          var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
          break _return;
        }
        these = these.o();
      }
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
    var savedData = (this$3.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$3.j().cW);
  }
  if ((!savedData.e())) {
    var x0$3 = savedData.j();
    console.log(("Loading Maskierung Aufgabe 2 data: " + x0$3));
  }
  matchResult66: {
    var \u03b410$___1;
    var \u03b410$___2;
    var \u03b410$___3;
    var \u03b410$___4;
    var \u03b410$___5;
    var \u03b410$___6;
    matchResult65$1: {
      var x194;
      if ((savedData instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
        var x194 = $p_Llivechart_Main$__liftedTree1$1__T__T6(this, savedData.an);
        break matchResult65$1;
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === savedData)) {
        console.log("No saved data found for Maskierung Aufgabe 2");
        var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().iP(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, false, true, false, false, true, false, true, true, false, true, false, false, true, false, true])));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
        var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
        var i = 0;
        while ((i < 16)) {
          b.ct(false);
          i = ((1 + i) | 0);
        }
        var x194 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T6($x_1, b.bz(), "", "", "", "");
        break matchResult65$1;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(savedData);
    }
    if ((x194 !== null)) {
      var \u03b410$___1 = x194.hQ;
      var \u03b410$___2 = x194.hR;
      var \u03b410$___3 = x194.hS;
      var \u03b410$___4 = x194.hT;
      var \u03b410$___5 = x194.hU;
      var \u03b410$___6 = x194.hV;
      break matchResult66;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x194);
  }
  var loadedOriginal$2 = \u03b410$___1;
  var loadedMask$2 = \u03b410$___2;
  var loadedA1$2 = \u03b410$___3;
  var loadedA2$2 = \u03b410$___4;
  var loadedA3$2 = \u03b410$___5;
  var loadedA4$2 = \u03b410$___6;
  var originalData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedOriginal$2);
  var maskPattern = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedMask$2);
  var answer1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA1$2);
  var answer2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA2$2);
  var answer3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA3$2);
  var answer4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA4$2);
  var check1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe 2", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Links sind die urspr\u00fcnglichen Daten dargestellt. In der Mitte kannst du die Maske definieren. Rechts wird das Ergebnis der Maskierung, welche durch eine XOR-Operation realisiert wird, angezeigt.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; gap: 20px; justify-content: center; align-items: flex-start;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Urspr\u00fcngliche Daten", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.hu(4, 4, originalData, false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maske", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.hu(4, 4, maskPattern, false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maskierte Daten", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(originalData.g, maskPattern.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 !== null)) {
      var orig = x$1.K();
      var mask = x$1.M();
      var maskedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(orig, mask).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
        if ((x$1$2 !== null)) {
          return ((!(!x$1$2.K())) !== (!(!x$1$2.M())));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
      })));
      return this.hu(4, 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(maskedData), true);
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])))])));
  var $x_48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 2rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;");
  var $x_45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maskierung beschreiben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 1rem 0;");
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => ("margin-bottom: 1rem; padding: 0.5rem; " + s))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Wenn urspr\u00fcngliche Daten schwarz und die Maske schwarz dargestellt sind, dann ist das Ergebnis: ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer1.g);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(answer1.c5)));
  var $x_31 = $x_40.d($x_39.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_38, $x_37, $x_36.d($x_35.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_34, $x_33, $x_32, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener, updater)])))])));
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$2) => ("margin-bottom: 1rem; padding: 0.5rem; " + s$2))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Wenn urspr\u00fcngliche Daten schwarz und die Maske wei\u00df dargestellt sind, dann ist das Ergebnis: ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer2.g);
  var listener$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$1) => ((_$1$1) => {
    sink$1.bG(_$1$1);
  }))(answer2.c5)));
  var $x_21 = $x_30.d($x_29.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_28, $x_27, $x_26.d($x_25.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_24, $x_23, $x_22, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener$1, updater$1)])))])));
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$3) => ("margin-bottom: 1rem; padding: 0.5rem; " + s$3))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Wenn urspr\u00fcngliche Daten wei\u00df und die Maske schwarz dargestellt sind, dann ist das Ergebnis: ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer3.g);
  var listener$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$2) => ((_$1$2) => {
    sink$2.bG(_$1$2);
  }))(answer3.c5)));
  var $x_11 = $x_20.d($x_19.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_18, $x_17, $x_16.d($x_15.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_14, $x_13, $x_12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener$2, updater$2)])))])));
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check4), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$4) => ("margin-bottom: 1rem; padding: 0.5rem; " + s$4))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Wenn urspr\u00fcngliche Daten wei\u00df und die Maske wei\u00df dargestellt sind, dann ist das Ergebnis: ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer4.g);
  var listener$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$3) => ((_$1$3) => {
    sink$3.bG(_$1$3);
  }))(answer4.c5)));
  return $x_53.d($x_52.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_51, $x_50, $x_49, $x_48.d($x_47.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_46, $x_45, $x_44, $x_43.d($x_42.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_41, $x_31, $x_21, $x_11, $x_10.d($x_9.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_8, $x_7, $x_6.d($x_5.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener$3, updater$3)])))])))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(originalData.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((orig$1) => {
    var origStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(orig$1.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$1) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$1)) ? 49 : 48))))), "", "", "");
    var maskStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(maskPattern.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$1) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$1)) ? 49 : 48))))), "", "", "");
    var a1 = answer1.g.G().j();
    var a2 = answer2.g.G().j();
    var a3 = answer3.g.G().j();
    var a4 = answer4.g.G().j();
    var jsonData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("original", origStr), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("mask", maskStr), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4)])));
    var jsonStr = JSON.stringify(jsonData);
    console.log(("Saving Maskierung (from originalData): " + jsonStr));
    this.cw("maskierung", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", jsonStr);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(maskPattern.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((mask$1) => {
    var origStr$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(originalData.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$4) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$4)) ? 49 : 48))))), "", "", "");
    var maskStr$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(mask$1.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$2) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$2)) ? 49 : 48))))), "", "", "");
    var a1$1 = answer1.g.G().j();
    var a2$1 = answer2.g.G().j();
    var a3$1 = answer3.g.G().j();
    var a4$1 = answer4.g.G().j();
    var jsonData$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("original", origStr$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("mask", maskStr$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$1)])));
    var jsonStr$1 = JSON.stringify(jsonData$1);
    console.log(("Saving Maskierung (from maskPattern): " + jsonStr$1));
    this.cw("maskierung", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", jsonStr$1);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer1.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a1$2) => {
    var origStr$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(originalData.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$7) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$7)) ? 49 : 48))))), "", "", "");
    var maskStr$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(maskPattern.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$3) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$3)) ? 49 : 48))))), "", "", "");
    var a2$2 = answer2.g.G().j();
    var a3$2 = answer3.g.G().j();
    var a4$2 = answer4.g.G().j();
    var jsonData$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("original", origStr$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("mask", maskStr$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$2)])));
    var jsonStr$2 = JSON.stringify(jsonData$2);
    console.log(("Saving Maskierung (from answer1): " + jsonStr$2));
    this.cw("maskierung", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", jsonStr$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer2.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a2$3) => {
    var origStr$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(originalData.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$10) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$10)) ? 49 : 48))))), "", "", "");
    var maskStr$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(maskPattern.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$4) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$4)) ? 49 : 48))))), "", "", "");
    var a1$3 = answer1.g.G().j();
    var a3$3 = answer3.g.G().j();
    var a4$3 = answer4.g.G().j();
    var jsonData$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("original", origStr$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("mask", maskStr$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$3)])));
    var jsonStr$3 = JSON.stringify(jsonData$3);
    console.log(("Saving Maskierung (from answer2): " + jsonStr$3));
    this.cw("maskierung", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", jsonStr$3);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer3.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a3$4) => {
    var origStr$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(originalData.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$13) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$13)) ? 49 : 48))))), "", "", "");
    var maskStr$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(maskPattern.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$5) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$5)) ? 49 : 48))))), "", "", "");
    var a1$4 = answer1.g.G().j();
    var a2$4 = answer2.g.G().j();
    var a4$4 = answer4.g.G().j();
    var jsonData$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("original", origStr$4), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("mask", maskStr$4), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$4), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$4), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$4), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$4)])));
    var jsonStr$4 = JSON.stringify(jsonData$4);
    console.log(("Saving Maskierung (from answer3): " + jsonStr$4));
    this.cw("maskierung", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", jsonStr$4);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer4.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a4$5) => {
    var origStr$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(originalData.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$16) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$16)) ? 49 : 48))))), "", "", "");
    var maskStr$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(maskPattern.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$6) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$6)) ? 49 : 48))))), "", "", "");
    var a1$5 = answer1.g.G().j();
    var a2$5 = answer2.g.G().j();
    var a3$5 = answer3.g.G().j();
    var jsonData$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("original", origStr$5), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("mask", maskStr$5), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$5), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$5), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$5), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$5)])));
    var jsonStr$5 = JSON.stringify(jsonData$5);
    console.log(("Saving Maskierung (from answer4): " + jsonStr$5));
    this.cw("maskierung", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", jsonStr$5);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$47) => {
    var a1$6 = answer1.g.G().j();
    var a2$6 = answer2.g.G().j();
    var a3$6 = answer3.g.G().j();
    var a4$6 = answer4.g.G().j();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect1$1__T__Z(this, a1$6)));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect2$1__T__Z(this, a2$6)));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check3, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect3$1__T__Z(this, a3$6)));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check4, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect4$1__T__Z(this, a4$6)));
    var allCorrect = ((($p_Llivechart_Main$__isCorrect1$1__T__Z(this, a1$6) && $p_Llivechart_Main$__isCorrect2$1__T__Z(this, a2$6)) && $p_Llivechart_Main$__isCorrect3$1__T__Z(this, a3$6)) && $p_Llivechart_Main$__isCorrect4$1__T__Z(this, a4$6));
    var origStr$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(originalData.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$19) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$19)) ? 49 : 48))))), "", "", "");
    var maskStr$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(maskPattern.g.G().j().R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$7) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$7)) ? 49 : 48))))), "", "", "");
    var jsonData$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("original", origStr$6), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("mask", maskStr$6), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$6), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$6), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$6), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$6)])));
    this.cw("maskierung", "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", JSON.stringify(jsonData$6));
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(allCorrect);
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$4) => ((_$1$4) => {
    sink$4.bG(_$1$4);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1rem; padding: 0.5rem 1rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2$1) => {
    if ((x$1$2$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x216 = (!(!x$1$2$1.an));
      if ((x216 === true)) {
        return "btn-success";
      }
      if ((x216 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$2$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))])))])));
});
$p.hu = (function(cols, rows, gridVar, isReadOnly) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-grid"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;")), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(gridVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(grid).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 !== null)) {
      var isOn = (!(!x$1.K()));
      var idx = (x$1.M() | 0);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J((isOn ? "pixel on" : "pixel")), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("width: 28px; height: 28px; cursor: " + (isReadOnly ? "default" : "pointer")) + ";")), ((!isReadOnly) ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$48) => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(gridVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => g.cU(idx, (!(!(!g.D(idx))))))));
      }))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  }))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.yT = (function() {
  var this$1 = this.ez("maskierung");
  if (this$1.e()) {
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$1.j();
    var this$2 = x0.cn;
    _return: {
      var these = this$2;
      while ((!these.e())) {
        if ((these.i().cC === "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten.")) {
          var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
          break _return;
        }
        these = these.o();
      }
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
    var $x_1 = (this$3.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$3.j().cW);
  }
  var this$4 = $x_1;
  if (this$4.e()) {
    var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$3 = this$4.j();
    var len = x0$3.length;
    var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
    var i = 0;
    while ((i < len)) {
      var index = i;
      var x = x0$3.charCodeAt(index);
      if (((x === 48) || (x === 49))) {
        var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
        sb.A = (sb.A + str);
      }
      i = ((1 + i) | 0);
    }
    var x$1 = ((len === sb.u()) ? x0$3 : sb.A);
    var len$1 = x$1.length;
    var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      dst.a[i$1] = (x$1.charCodeAt(i$1) === 49);
      i$1 = ((1 + i$1) | 0);
    }
    var this$10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
    var this$11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce(this$10));
  }
  var this$12 = ((this$11.e() || (this$11.j().u() === 16)) ? this$11 : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  if (this$12.e()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < 16)) {
      b.ct(false);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_2 = b.bz();
  } else {
    var $x_2 = this$12.j();
  }
  var savedUserData = $x_2;
  var originalData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().iP(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, false, true, false, false, true, false, true, true, true, false, false, false, false, true, true]))));
  var maskPattern = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().iP(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([false, true, false, true, true, false, true, false, false, false, true, true, true, true, false, false]))));
  var userMaskedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(savedUserData);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i$3 = 0;
  while ((i$3 < 4)) {
    b$1.ct($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
    i$3 = ((1 + i$3) | 0);
  }
  var rowStatusVar = $x_3.Q(b$1.bz());
  var correctMaskedData = originalData.g.G().j().bW(maskPattern.g.G().j()).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 !== null)) {
      return ((!(!x$1$1.K())) !== (!(!x$1$1.M())));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  })));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe 3", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Links und in der Mitte sind die urspr\u00fcnglichen Daten und die Maske vorgegeben. Rechts kannst du die maskierten Daten eintragen. Bestimme durch Anwenden der XOR-Operation die korrekten maskierten Daten.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; gap: 20px; justify-content: center; align-items: flex-start;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center; display: flex; flex-direction: column; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0 0 0.5rem 0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Urspr\u00fcngliche Daten", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.hu(4, 4, originalData, true)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center; display: flex; flex-direction: column; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0 0 0.5rem 0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maske", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.hu(4, 4, maskPattern, true)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center; display: flex; flex-direction: column; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0 0 0.5rem 0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "maskierte Daten", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-grid"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;"), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(userMaskedData.g, rowStatusVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 !== null)) {
      var grid = x$1$2.K();
      x$1$2.M();
      var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      var this$33;
      var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
      if (iter.bl) {
        var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.cg(), this$32);
        var curr = result;
        while (iter.bl) {
          var temp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.cg(), this$32);
          curr.S = temp;
          curr = temp;
        }
        var this$33 = result;
      } else {
        var this$33 = this$32;
      }
      var rest = this$33;
      var h = null;
      var t = null;
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$6 = rest.i();
        var r$5 = (x0$6 | 0);
        var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        var this$42;
        var iter$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
        if (iter$1.bl) {
          var result$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.cg(), this$39);
          var curr$1 = result$1;
          while (iter$1.bl) {
            var temp$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.cg(), this$39);
            curr$1.S = temp$1;
            curr$1 = temp$1;
          }
          var this$42 = result$1;
        } else {
          var this$42 = this$39;
        }
        var f = ((r$5, grid, userMaskedData) => ((c) => {
          var c$1 = (c | 0);
          var idx = (((r$5 << 2) + c$1) | 0);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J(((!(!grid.D(idx))) ? "pixel on" : "pixel")), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("width: 28px; height: 28px; cursor: pointer;"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$54) => {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(userMaskedData, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => g.cU(idx, (!(!(!g.D(idx))))))));
          })))])));
        }))(r$5, grid, userMaskedData);
        if ((this$42 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        } else {
          var x0$7 = this$42.i();
          var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          var t$1 = h$1;
          var rest$1 = this$42.o();
          while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var x0$8 = rest$1.i();
            var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$8), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            t$1.S = nx;
            t$1 = nx;
            rest$1 = rest$1.o();
          }
          var $x_4 = h$1;
        }
        var it = $x_4.p();
        while (it.s()) {
          var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(it.l(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          if ((t === null)) {
            h = nx$1;
          } else {
            t.S = nx$1;
          }
          t = nx$1;
        }
        rest = rest.o();
      }
      return ((h === null) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$() : h);
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(userMaskedData.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((current) => {
    this.cw("maskierung", "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(current.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2)) ? 49 : 48))))), "", "", ""));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$55) => {
    var current$1 = userMaskedData.g.G().j();
    this.cw("maskierung", "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(current$1.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$4) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$4)) ? 49 : 48))))), "", "", ""));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var $x_5;
    var a1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(4);
    var it$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
    var i$4 = 0;
    var y = a1.a.length;
    while (((i$4 < y) && it$1.bl)) {
      a1.a[i$4] = it$1.cg();
      i$4 = ((1 + i$4) | 0);
    }
    var $x_5 = a1;
    var this$61 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_5);
    var f$1 = ((r$7) => {
      var r$8 = (r$7 | 0);
      var rowSlice = current$1.fJ((r$8 << 2), (((1 + r$8) | 0) << 2));
      var expectedRow = correctMaskedData.fJ((r$8 << 2), (((1 + r$8) | 0) << 2));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(((rowSlice === null) ? (expectedRow === null) : rowSlice.z(expectedRow)));
    });
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_VectorStatics$();
    var a = this$61.m;
    _return$1: {
      var i$5 = 0;
      while ((i$5 < a.a.length)) {
        var v1 = a.a[i$5];
        var v2 = f$1(v1);
        if ((!Object.is(v1, v2))) {
          var at = i$5;
          var ac = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(a.a.length);
          if ((at > 0)) {
            a.I(0, ac, 0, at);
          }
          ac.a[at] = v2;
          var i$6 = ((1 + at) | 0);
          while ((i$6 < a.a.length)) {
            var $x_7 = i$6;
            var x0$9 = a.a[i$6];
            ac.a[$x_7] = f$1(x0$9);
            i$6 = ((1 + i$6) | 0);
          }
          var $x_6 = ac;
          break _return$1;
        }
        i$5 = ((1 + i$5) | 0);
      }
      var $x_6 = a;
    }
    var statuses = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_6);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(rowStatusVar, statuses);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__flatten__F1__O(statuses, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$().ee).cH(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$2) => (!(!x$2))))));
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.5rem 1rem; align-self: flex-start; margin-top: 2rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => {
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x230 = (!(!x$1$3.an));
      if ((x230 === true)) {
        return "btn-success";
      }
      if ((x230 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$3)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(rowStatusVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((statuses$1) => {
    var res = false;
    var it$2 = statuses$1.p();
    while (((!res) && it$2.s())) {
      res = (!it$2.l().e());
    }
    if (res) {
      var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;");
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Ergebnisse pro Reihe:", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.lx();
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
      var this$75 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      var this$80;
      var iter$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
      if (iter$2.bl) {
        var result$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$2.cg(), this$75);
        var curr$2 = result$2;
        while (iter$2.bl) {
          var temp$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$2.cg(), this$75);
          curr$2.S = temp$2;
          curr$2 = temp$2;
        }
        var this$80 = result$2;
      } else {
        var this$80 = this$75;
      }
      var f$2 = ((statuses$2) => ((r$10) => {
        var r$11 = (r$10 | 0);
        var status = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(statuses$2).id(r$11).nP($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$().ee);
        var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ix();
        var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(rowStatusVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$57) => {
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x235 = (!(!status.an));
            if ((x235 === true)) {
              return "color: green; font-weight: bold;";
            }
            if ((x235 === false)) {
              return "color: red; font-weight: bold;";
            }
          }
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === status)) {
            return "";
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
        var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
        matchResult76: {
          var $x_8;
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x240 = (!(!status.an));
            if ((x240 === true)) {
              var $x_8 = "Richtig!";
              break matchResult76;
            }
            if ((x240 === false)) {
              var $x_8 = "Falsch";
              break matchResult76;
            }
          }
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === status)) {
            var $x_8 = "";
            break matchResult76;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }
        return $x_12.d($x_11.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($x_9, ((("Reihe " + ((1 + r$11) | 0)) + ": ") + $x_8), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      }))(statuses$1);
      if ((this$80 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$11 = this$80.i();
        var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$11), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t$2 = h$2;
        var rest$2 = this$80.o();
        while ((rest$2 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$12 = rest$2.i();
          var nx$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$12), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          t$2.S = nx$2;
          t$2 = nx$2;
          rest$2 = rest$2.o();
        }
        var $x_13 = h$2;
      }
      return $x_20.d($x_19.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_18, $x_17, $x_16.d($x_15.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_14, $x_13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.yU = (function() {
  var this$1 = this.ez("maskierung");
  if (this$1.e()) {
    var savedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$1.j();
    var this$2 = x0.cn;
    _return: {
      var these = this$2;
      while ((!these.e())) {
        if ((these.i().cC === "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschlie\u00dfend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.")) {
          var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
          break _return;
        }
        these = these.o();
      }
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
    var savedData = (this$3.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$3.j().cW);
  }
  matchResult78: {
    var \u03b411$___1;
    var \u03b411$___2;
    matchResult77$1: {
      var x244;
      if ((savedData instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
        var x244 = $p_Llivechart_Main$__liftedTree2$1__T__T2(this, savedData.an);
        break matchResult77$1;
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === savedData)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
        var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
        var i = 0;
        while ((i < 16)) {
          b.ct(false);
          i = ((1 + i) | 0);
        }
        var $x_1 = b.bz();
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
        var b$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
        var i$1 = 0;
        while ((i$1 < 16)) {
          b$1.ct(false);
          i$1 = ((1 + i$1) | 0);
        }
        var x244 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2($x_1, b$1.bz());
        break matchResult77$1;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(savedData);
    }
    if ((x244 !== null)) {
      var \u03b411$___1 = x244.K();
      var \u03b411$___2 = x244.M();
      break matchResult78;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x244);
  }
  var loadedData1$2 = \u03b411$___1;
  var loadedData2$2 = \u03b411$___2;
  var originalData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().iP(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, true, false, false, false, false, true, true, true, false, true, false, false, true, false, true]))));
  var maskPattern = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().ce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().iP(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, false, true, false, true, false, true, false, false, true, false, true, false, true, false, true]))));
  var correctMaskedData1 = originalData.g.G().j().bW(maskPattern.g.G().j()).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 !== null)) {
      return ((!(!x$1.K())) !== (!(!x$1.M())));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })));
  var correctMaskedData2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(correctMaskedData1, maskPattern.g.G().j()).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 !== null)) {
      return ((!(!x$1$2.K())) !== (!(!x$1$2.M())));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  })));
  var userMaskedData1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedData1$2);
  var userMaskedData2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedData2$2);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i$2 = 0;
  while ((i$2 < 8)) {
    b$2.ct($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
    i$2 = ((1 + i$2) | 0);
  }
  var rowStatusVar = $x_2.Q(b$2.bz());
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe 7", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschlie\u00dfend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: wrap;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center; display: flex; flex-direction: column; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0 0 0.5rem 0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Urspr\u00fcngliche Daten", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.hu(4, 4, originalData, true)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center; display: flex; flex-direction: column; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0 0 0.5rem 0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Maske", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), this.hu(4, 4, maskPattern, true)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center; display: flex; flex-direction: column; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0 0 0.5rem 0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "1x maskiert", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-grid"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;"), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(userMaskedData1.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(grid).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 !== null)) {
      var isOn = (!(!x$1$1.K()));
      var idx = (x$1$1.M() | 0);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J((isOn ? "pixel on" : "pixel")), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("width: 28px; height: 28px; cursor: pointer;"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$63) => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(userMaskedData1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => g.cU(idx, (!(!(!g.D(idx))))))));
      })))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("text-align: center; display: flex; flex-direction: column; align-items: center;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 0 0 0.5rem 0;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "2x maskiert", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("pixel-grid"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;"), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(userMaskedData2.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid$2) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(grid$2).R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => {
    if ((x$1$3 !== null)) {
      var isOn$1 = (!(!x$1$3.K()));
      var idx$1 = (x$1$3.M() | 0);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J((isOn$1 ? "pixel on" : "pixel")), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("width: 28px; height: 28px; cursor: pointer;"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$64) => {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(userMaskedData2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g$1) => g$1.cU(idx$1, (!(!(!g$1.D(idx$1))))))));
      })))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(userMaskedData1.g, userMaskedData2.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3$1) => {
    if ((x$1$3$1 !== null)) {
      var data1 = x$1$3$1.K();
      var data2 = x$1$3$1.M();
      var data1Str = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(data1.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$3) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$3)) ? 49 : 48))))), "", "", "");
      var data2Str = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(data2.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2$1) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(((!(!b$2$1)) ? 49 : 48))))), "", "", "");
      var jsonData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("masked1", data1Str), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("masked2", data2Str)])));
      this.cw("maskierung", "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschlie\u00dfend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.", JSON.stringify(jsonData));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$65) => {
    var current1 = userMaskedData1.g.G().j();
    var current2 = userMaskedData2.g.G().j();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var $x_3;
    var a1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(4);
    var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
    var i$3 = 0;
    var y = a1.a.length;
    while (((i$3 < y) && it.bl)) {
      a1.a[i$3] = it.cg();
      i$3 = ((1 + i$3) | 0);
    }
    var $x_3 = a1;
    var this$54 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_3);
    var f = ((r$7) => {
      var r$8 = (r$7 | 0);
      var rowSlice = current1.fJ((r$8 << 2), (((1 + r$8) | 0) << 2));
      var expectedRow = correctMaskedData1.fJ((r$8 << 2), (((1 + r$8) | 0) << 2));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(((rowSlice === null) ? (expectedRow === null) : rowSlice.z(expectedRow)));
    });
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_VectorStatics$();
    var a = this$54.m;
    _return$1: {
      var i$4 = 0;
      while ((i$4 < a.a.length)) {
        var v1 = a.a[i$4];
        var v2 = f(v1);
        if ((!Object.is(v1, v2))) {
          var at = i$4;
          var ac = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(a.a.length);
          if ((at > 0)) {
            a.I(0, ac, 0, at);
          }
          ac.a[at] = v2;
          var i$5 = ((1 + at) | 0);
          while ((i$5 < a.a.length)) {
            var $x_5 = i$5;
            var x0$3 = a.a[i$5];
            ac.a[$x_5] = f(x0$3);
            i$5 = ((1 + i$5) | 0);
          }
          var $x_4 = ac;
          break _return$1;
        }
        i$4 = ((1 + i$4) | 0);
      }
      var $x_4 = a;
    }
    var statuses1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_4);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var $x_6;
    var a1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(4);
    var it$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
    var i$6 = 0;
    var y$1 = a1$1.a.length;
    while (((i$6 < y$1) && it$1.bl)) {
      a1$1.a[i$6] = it$1.cg();
      i$6 = ((1 + i$6) | 0);
    }
    var $x_6 = a1$1;
    var this$64 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_6);
    var f$1 = ((r$2$1) => {
      var r$9 = (r$2$1 | 0);
      var rowSlice$1 = current2.fJ((r$9 << 2), (((1 + r$9) | 0) << 2));
      var expectedRow$1 = correctMaskedData2.fJ((r$9 << 2), (((1 + r$9) | 0) << 2));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(((rowSlice$1 === null) ? (expectedRow$1 === null) : rowSlice$1.z(expectedRow$1)));
    });
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_VectorStatics$();
    var a$1 = this$64.m;
    _return$2: {
      var i$7 = 0;
      while ((i$7 < a$1.a.length)) {
        var v1$1 = a$1.a[i$7];
        var v2$1 = f$1(v1$1);
        if ((!Object.is(v1$1, v2$1))) {
          var at$1 = i$7;
          var ac$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(a$1.a.length);
          if ((at$1 > 0)) {
            a$1.I(0, ac$1, 0, at$1);
          }
          ac$1.a[at$1] = v2$1;
          var i$8 = ((1 + at$1) | 0);
          while ((i$8 < a$1.a.length)) {
            var $x_8 = i$8;
            var x0$4 = a$1.a[i$8];
            ac$1.a[$x_8] = f$1(x0$4);
            i$8 = ((1 + i$8) | 0);
          }
          var $x_7 = ac$1;
          break _return$2;
        }
        i$7 = ((1 + i$7) | 0);
      }
      var $x_7 = a$1;
    }
    var statuses2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_7);
    var allStatuses = statuses1.wr(statuses2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(rowStatusVar, allStatuses);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__flatten__F1__O(allStatuses, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$().ee).cH(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$2) => (!(!x$2))))));
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.5rem 1rem; align-self: flex-start; margin-top: 2rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => {
    if ((x$1$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x266 = (!(!x$1$4.an));
      if ((x266 === true)) {
        return "btn-success";
      }
      if ((x266 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$4)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(rowStatusVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((statuses) => {
    var res = false;
    var it$2 = statuses.p();
    while (((!res) && it$2.s())) {
      res = (!it$2.l().e());
    }
    if (res) {
      var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
      var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;");
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Ergebnisse pro Reihe:", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.lx();
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
      var this$78 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      var this$83;
      var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 7, false);
      if (iter.bl) {
        var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.cg(), this$78);
        var curr = result;
        while (iter.bl) {
          var temp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.cg(), this$78);
          curr.S = temp;
          curr = temp;
        }
        var this$83 = result;
      } else {
        var this$83 = this$78;
      }
      var f$2 = ((statuses$2) => ((idx$2) => {
        var idx$3 = (idx$2 | 0);
        var status = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(statuses$2).id(idx$3).nP($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$().ee);
        var section = ((idx$3 < 4) ? "1x maskiert" : "2x maskiert");
        var rowNum = ((1 + ((idx$3 % 4) | 0)) | 0);
        var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ix();
        var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(rowStatusVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$67) => {
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x271 = (!(!status.an));
            if ((x271 === true)) {
              return "color: green; font-weight: bold;";
            }
            if ((x271 === false)) {
              return "color: red; font-weight: bold;";
            }
          }
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === status)) {
            return "";
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
        var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
        matchResult86: {
          var $x_9;
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x276 = (!(!status.an));
            if ((x276 === true)) {
              var $x_9 = "Richtig!";
              break matchResult86;
            }
            if ((x276 === false)) {
              var $x_9 = "Falsch";
              break matchResult86;
            }
          }
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === status)) {
            var $x_9 = "";
            break matchResult86;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }
        return $x_13.d($x_12.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($x_10, ((((section + ", Reihe ") + rowNum) + ": ") + $x_9), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      }))(statuses);
      if ((this$83 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$6 = this$83.i();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = this$83.o();
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$7 = rest.i();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          t.S = nx;
          t = nx;
          rest = rest.o();
        }
        var $x_14 = h;
      }
      return $x_21.d($x_20.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_19, $x_18, $x_17.d($x_16.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier($x_15, $x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$())])))])));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.yR = (function() {
  var this$1 = this.ez("fehlerkorrektur");
  if (this$1.e()) {
    var savedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$1.j();
    var this$2 = x0.cn;
    _return: {
      var these = this$2;
      while ((!these.e())) {
        if ((these.i().cC === "Erg\u00e4nze die L\u00fccken im folgenden Text:")) {
          var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
          break _return;
        }
        these = these.o();
      }
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
    var savedData = (this$3.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$3.j().cW);
  }
  if ((!savedData.e())) {
    var x0$3 = savedData.j();
    console.log(("Loading L\u00fcckentext data: " + x0$3));
  }
  matchResult88: {
    var \u03b412$___1;
    var \u03b412$___2;
    var \u03b412$___3;
    var \u03b412$___4;
    matchResult87$1: {
      var x280;
      if ((savedData instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
        var x280 = $p_Llivechart_Main$__liftedTree3$1__T__T4(this, savedData.an);
        break matchResult87$1;
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === savedData)) {
        console.log("No saved data found for L\u00fcckentext");
        var x280 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("", "", "", "");
        break matchResult87$1;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(savedData);
    }
    if ((x280 !== null)) {
      var \u03b412$___1 = x280.gL;
      var \u03b412$___2 = x280.gM;
      var \u03b412$___3 = x280.gN;
      var \u03b412$___4 = x280.gO;
      break matchResult88;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x280);
  }
  var loadedA1$2 = \u03b412$___1;
  var loadedA2$2 = \u03b412$___2;
  var loadedA3$2 = \u03b412$___3;
  var loadedA4$2 = \u03b412$___4;
  var answer1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA1$2);
  var answer2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA2$2);
  var answer3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA3$2);
  var answer4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(loadedA4$2);
  var check1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var showInfotext = this.ex("qr-infobox-fehlerkorrektur-7");
  var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe 7", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Erg\u00e4nze die L\u00fccken im folgenden Text:", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1.5rem; padding: 1rem; background: #f9f9f9; border-radius: 8px;");
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin: 1rem 0;");
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => ("margin-bottom: 1rem; padding: 0.5rem; " + s))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Je mehr Daten zur Fehlererkennung und -korrektur genutzt werden, desto ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer1.g);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(answer1.c5)));
  var $x_27 = $x_36.d($x_35.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_34, $x_33, $x_32.d($x_31.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_30, $x_29, $x_28, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener, updater)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, " ist die Wahrscheinlichkeit, Fehler zu erkennen und zu korrigieren.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$2) => ("margin-bottom: 1rem; padding: 0.5rem; " + s$2))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Substutionsfehler lassen sich  ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer2.g);
  var listener$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$1) => ((_$1$1) => {
    sink$1.bG(_$1$1);
  }))(answer2.c5)));
  var $x_17 = $x_26.d($x_25.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_24, $x_23, $x_22.d($x_21.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_20, $x_19, $x_18, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener$1, updater$1)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "verbessern, als L\u00f6schfehler.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$3) => ("margin-bottom: 1rem; padding: 0.5rem; " + s$3))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Pr\u00fcfsummen dienen vor allem zur ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer3.g);
  var listener$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$2) => ((_$1$2) => {
    sink$2.bG(_$1$2);
  }))(answer3.c5)));
  var $x_7 = $x_12.d($x_11.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_10, $x_9, $x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener$2, updater$2)])));
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "und nicht zur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("text");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("");
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(answer4.g);
  var listener$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$3) => ((_$1$3) => {
    sink$3.bG(_$1$3);
  }))(answer4.c5)));
  return $x_46.d($x_45.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_44, $x_43, $x_42.d($x_41.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_40, $x_39.d($x_38.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_37, $x_27, $x_17, $x_16.d($x_15.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_14, $x_13, $x_7, $x_6, $x_5.d($x_4.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener$3, updater$3)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ".", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer1.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a1) => {
    var a2 = answer2.g.G().j();
    var a3 = answer3.g.G().j();
    var a4 = answer4.g.G().j();
    var jsonData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4)])));
    var jsonStr = JSON.stringify(jsonData);
    console.log(("Saving L\u00fcckentext (from answer1): " + jsonStr));
    this.cw("fehlerkorrektur", "Erg\u00e4nze die L\u00fccken im folgenden Text:", jsonStr);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer2.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a2$1) => {
    var a1$1 = answer1.g.G().j();
    var a3$1 = answer3.g.G().j();
    var a4$1 = answer4.g.G().j();
    var jsonData$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$1), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$1)])));
    this.cw("fehlerkorrektur", "Erg\u00e4nze die L\u00fccken im folgenden Text:", JSON.stringify(jsonData$1));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer3.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a3$2) => {
    var a1$2 = answer1.g.G().j();
    var a2$2 = answer2.g.G().j();
    var a4$2 = answer4.g.G().j();
    var jsonData$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$2), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$2)])));
    this.cw("fehlerkorrektur", "Erg\u00e4nze die L\u00fccken im folgenden Text:", JSON.stringify(jsonData$2));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(answer4.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((a4$3) => {
    var a1$3 = answer1.g.G().j();
    var a2$3 = answer2.g.G().j();
    var a3$3 = answer3.g.G().j();
    var jsonData$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().ch($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer1", a1$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer2", a2$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer3", a3$3), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer4", a4$3)])));
    this.cw("fehlerkorrektur", "Erg\u00e4nze die L\u00fccken im folgenden Text:", JSON.stringify(jsonData$3));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$72) => {
    var a1$4 = answer1.g.G().j();
    var a2$4 = answer2.g.G().j();
    var a3$4 = answer3.g.G().j();
    var a4$4 = answer4.g.G().j();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect1$2__T__Z(this, a1$4)));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect2$2__T__Z(this, a2$4)));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check3, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect3$2__T__Z(this, a3$4)));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(check4, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($p_Llivechart_Main$__isCorrect4$2__T__Z(this, a4$4)));
    var allCorrect = ((($p_Llivechart_Main$__isCorrect1$2__T__Z(this, a1$4) && $p_Llivechart_Main$__isCorrect2$2__T__Z(this, a2$4)) && $p_Llivechart_Main$__isCorrect3$2__T__Z(this, a3$4)) && $p_Llivechart_Main$__isCorrect4$2__T__Z(this, a4$4));
    if (allCorrect) {
      this.eB("qr-infobox-fehlerkorrektur-7", showInfotext);
    }
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(allCorrect);
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink$4) => ((_$1$4) => {
    sink$4.bG(_$1$4);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1rem; padding: 0.5rem 1rem;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x294 = (!(!x$1.an));
      if ((x294 === true)) {
        return "btn-success";
      }
      if ((x294 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(showInfotext.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show) => ((!(!show)) ? this.dY("Fehlerkorrektur in QR-Codes", "In QR-Codes wird Reed-Solomon-Codes zur Fehlerkorrektur genutzt. Dies ist ein besonders leistungsf\u00e4higes Verfahren, das beide Fehlerarten zum Teil korrigieren kann. Die Fehlerkorrektur wird dabei sowohl auf die Daten, als auch auf die Metadaten (z.B. Formatinformationen, Maske) angewendet.\r\n\r\nDabei werden QR-Codes nach Fehlertoleranzstufen klassifiziert. Die Fehlertoleranz liegt dabei zwischen 7% und 30% und gibt an wieviel % des QR-Codes besch\u00e4digt sein k\u00f6nnen, ohne dass die Information verloren geht. Die vier Stufen sind:\r\n\u2022 Level L: 7% Fehlertoleranz (niedrig) \r\n\u2022 Level M: 15% Fehlertoleranz (mittel) \r\n\u2022 Level Q: 25% Fehlertoleranz (hoch)   \r\n\u2022 Level H: 30% Fehlertoleranz (sehr hoch) \r\n\r\nDer Reed-Solomon-Code arbeitet mit mathematischen Gleichungen und kann sowohl Substitutionsfehler (falsche Pixel) als auch L\u00f6schfehler (fehlende Bereiche) korrigieren. Dies macht QR-Codes sehr robust gegen\u00fcber Verschmutzung, Besch\u00e4digung oder teilweiser Verdeckung.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.uw = (function(text, size) {
  var encodedText = encodeURIComponent(text);
  var qrUrl = ((((("https://api.qrserver.com/v1/create-qr-code/?size=" + size) + "x") + size) + "&data=") + encodedText);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ir().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iH().k(qrUrl), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ib().k(("QR Code f\u00fcr: " + text)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.k7().k(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.jQ().k(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-code")])));
});
$p.ux = (function(text, caption, size) {
  var encodedText = encodeURIComponent(text);
  var qrUrl = ((((("https://api.qrserver.com/v1/create-qr-code/?size=" + size) + "x") + size) + "&data=") + encodedText);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-code-with-caption"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ir().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iH().k(qrUrl), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ib().k(("QR Code f\u00fcr: " + text)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.k7().k(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.jQ().k(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-code")]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, caption, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-caption")])))])));
});
$p.xT = (function(imageSrc, caption, size) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-code-with-caption"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ir().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iH().k(imageSrc), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ib().k(caption), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.k7().k(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.jQ().k(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-code")]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, caption, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("qr-caption")])))])));
});
$p.uD = (function(baseName, altText, size) {
  var candidates = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([(("/" + baseName) + ".png"), (("/" + baseName) + ".jpg"), (("/public/" + baseName) + ".png"), (("/public/" + baseName) + ".jpg")])));
  var idxVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(0);
  var srcVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(candidates.i());
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ir().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iH().b4(srcVar.g), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ib().k(altText), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.k7().k(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.jQ().k(("" + size)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.yC(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$73) => {
    var next = ((1 + (idxVar.g.G().j() | 0)) | 0);
    if ((next < candidates.u())) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(idxVar, next);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(srcVar, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(candidates, next));
    }
  })))])));
});
$p.aH = (function(taskText, keywords, index, image, chapter, submitCallback, minWordCount) {
  var storedData = ((chapter !== "") ? this.ez(chapter) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var this$3 = (storedData.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(storedData.j().cn));
  var storedAnswers = (this$3.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))) : this$3.j());
  _return: {
    var these = storedAnswers;
    while ((!these.e())) {
      if ((these.i().cC === taskText)) {
        var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
        break _return;
      }
      these = these.o();
    }
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$6 = (this$5.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$5.j().cW);
  var initialText = (this$6.e() ? "" : this$6.j());
  var textVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(initialText);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var editor = new $j_livechart$002e$002dSimple$002dText$002dEditor.$c_Llivechart_SimpleTextEditor(textVar, lastCheckVar.g);
  var wordCountSignal = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(textVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => $p_Llivechart_Main$__countWords$1__T__I(this, text))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var buttonClassSignal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_state_Val$().tC("");
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.kk.J("exercise-content");
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([((index === (-1)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ("Aufgabe " + index), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n))])));
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  if (image.e()) {
    var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$3 = image.j();
    var $x_13 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("exercise-image"), x0$3]))));
  }
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeOptionToModifier__s_Option__Lcom_raquo_laminar_modifiers_Modifier($x_14, $x_13);
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, taskText, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("white-space: pre-wrap;")])));
  var $x_10 = editor.sl;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(textVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text$2) => {
    if ((chapter !== "")) {
      this.cw(chapter, taskText, text$2);
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0));
  if ((((!keywords.e()) || (!minWordCount.e())) || (!submitCallback.e()))) {
    var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("display: flex; gap: 0.75rem; align-items: center;");
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildTextInserter$().ws(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => (((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some) && ((!(!x$1.an)) === false)) ? "Nochmal versuchen" : "Abgeben"))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$78) => {
      if (lastCheckVar.g.G().j().U(false)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(lastCheckVar, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      } else {
        var text$1 = textVar.g.G().j();
        var keywordOk = (keywords.e() || keywords.f2(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((k) => {
          var this$25 = text$1.toLowerCase();
          var s = k.toLowerCase();
          return ((this$25.indexOf(s) | 0) !== (-1));
        }))));
        matchResult92: {
          var ok;
          if ((minWordCount instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var min = (minWordCount.an | 0);
            var ok = (keywordOk && ($p_Llivechart_Main$__countWords$1__T__I(this, text$1) >= min));
            break matchResult92;
          }
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === minWordCount)) {
            var ok = keywordOk;
            break matchResult92;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(minWordCount);
        }
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(lastCheckVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(ok));
        if (ok) {
          if ((!submitCallback.e())) {
            submitCallback.j().ak();
          }
        }
      }
    }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-time"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(buttonClassSignal, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => (((x$1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some) && ((!(!x$1$2.an)) === true)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("color: #2e7d32; font-weight: 600;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Richtig! Sehr gut", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => (((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some) && ((!(!x$1$3.an)) === false)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "L\u00f6sung zeigen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-time")]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0));
    matchResult97: {
      var $x_2;
      if ((minWordCount instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
        var min$1 = (minWordCount.an | 0);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().ep(lastCheckVar.g, wordCountSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => {
          if ((x$1$4 !== null)) {
            var status = x$1$4.K();
            var count = (x$1$4.M() | 0);
            if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
              var color = ((count < min$1) ? "#b71c1c" : "#2e7d32");
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k((("color: " + color) + ";")), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, (((("Mindestwortzahl sind " + min$1) + ", du hast ") + count) + " geschrieben."), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
            }
            if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === status)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
              return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
        })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0));
        break matchResult97;
      }
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === minWordCount)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
        var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
        break matchResult97;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(minWordCount);
    }
    var $x_1 = $x_8.d($x_7.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_6, $x_5, $x_4, $x_3, $x_2])));
  } else {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  }
  return $x_18.d($x_17.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_16, $x_15, $x_12, $x_11, $x_10, $x_9, $x_1])));
});
$p.yQ = (function(taskText, choices, index, chapter) {
  var storedData = ((chapter !== "") ? this.ez(chapter) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var this$3 = (storedData.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(storedData.j().cn));
  var storedAnswers = (this$3.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))) : this$3.j());
  _return: {
    var these = storedAnswers;
    while ((!these.e())) {
      if ((these.i().cC === taskText)) {
        var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these.i());
        break _return;
      }
      these = these.o();
    }
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$6 = (this$5.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : this$5.j().cW);
  var storedAnswer = (this$6.e() ? "" : this$6.j());
  if ((storedAnswer !== "")) {
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(storedAnswer, ", ", 0);
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var i = 0;
    while ((i < xs.a.length)) {
      var x1 = i;
      var x0$3 = xs.a[x1];
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(choices);
      _return$1: {
        var these$1 = this$14;
        while ((!these$1.e())) {
          var x0$4 = these$1.i();
          var x = x0$4.K().K();
          if (((x === null) ? (x0$3 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_equals__O__Z(x, x0$3))) {
            var this$15 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(these$1.i());
            break _return$1;
          }
          these$1 = these$1.o();
        }
        var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      var elems$1 = (this$15.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some((this$15.j().M() | 0)));
      var it = elems$1.p();
      while (it.s()) {
        var elem = it.l();
        var unboxedElem = ((elem === null) ? 0 : elem);
        jsElems.push(unboxedElem);
      }
      i = ((1 + i) | 0);
    }
    var initialSelected = $x_2.P($x_1.zN(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array(jsElems))));
  } else {
    var initialSelected = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  }
  var selectedVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(initialSelected);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.kk.J("exercise-content"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([((index === (-1)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Aufgabe", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ("Aufgabe " + index), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, taskText, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_state_Val$().tC(choices)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$84) => {
    var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(_$84);
    var f = ((x$1) => {
      if ((x$1 !== null)) {
        var x317 = x$1.K();
        if ((x317 !== null)) {
          var label = x317.K();
          var idx = (x$1.M() | 0);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("checkbox"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ok(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$85) => {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(selectedVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => (selected.U(idx) ? selected.hi(idx) : selected.gv(idx)))));
          }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ny().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(selectedVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$86) => _$86.U(idx))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, (" " + label), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
    });
    if ((this$28 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$6 = this$28.i();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = this$28.o();
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$7 = rest.i();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        t.S = nx;
        t = nx;
        rest = rest.o();
      }
      return h;
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(selectedVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected$1) => {
    if ((chapter !== "")) {
      this.cw(chapter, taskText, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(selected$1.R(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((idx$1) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(choices, (idx$1 | 0)).K()))), "", ", ", ""));
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Abgeben", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$87) => {
    var selected$2 = selectedVar.g.G().j();
    var correctIndices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(choices).nz(new $j_livechart$002e$002dMain$0024$0024anon$00243.$c_Llivechart_Main$$anon$3()));
    return ((selected$2 === null) ? (correctIndices === null) : selected$2.z(correctIndices));
  }))).dG(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some((!(!ok)))))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(lastCheckVar.c5))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(lastCheckVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x335 = (!(!x$1$1.an));
      if ((x335 === true)) {
        return "btn-success";
      }
      if ((x335 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())])))])));
});
$p.z4 = (function() {
  var quizQuestions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T4.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("In welcher Form liegen die Daten in einem QR-Code vor?", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["schwarz", "wei\u00df"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Nenne die drei Elemente eines QR-Codes.", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["position", "meta", "daten"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Wie viele verschiedene Zeichen k\u00f6nnen mit 8 Bits dargestellt werden?", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["256"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Erkl\u00e4re, warum Maskierung in QR-Codes wichtig ist.", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["lesbar", "kontrast", "erkennung"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Wof\u00fcr ist die Fehlerkorrektur in QR-Codes wichtig?", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["unleserlich", "besch\u00e4digt"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Welche Form haben die Positionsmarker im QR-Code?", "mc", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Quadrate", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Raute", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Kreise", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Dreiecke", false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Was ist die Hauptaufgabe des Timing Patterns?", "mc", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Gr\u00f6\u00dfe und Position der Pixel bestimmen", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Daten speichern", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Fehler korrigieren", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Masken anwenden", false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Welche Aussage zu ASCII ist richtig?", "mc", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII kodiert Buchstaben mit 7 oder 8 Bits", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII kann beliebig lange Zeichenketten speichern", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII ist nur f\u00fcr Zahlen", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII wurde f\u00fcr QR-Codes erfunden", false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Wie viele Masken werden in einem QR-Code probiert?", "mc", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("1 Maske", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("8 Masken", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("300 Masken", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Unbegrenzt viele", false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Was ist XOR und seine Besonderheit?", "mc", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR ist eine logische Operation, die ihre eigene Umkehrfunktion ist", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR kann nur f\u00fcr Zahlen verwendet werden", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR wurde f\u00fcr QR-Codes erfunden", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR hat keine praktische Anwendung", false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Beschreibe den Prozess der Kodierung einer Nachricht in einen QR-Code.", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["ascii", "buchstabe", "pixel"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Was versteht man unter Redundanz bei der Fehlerkorrektur?", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["wiederholung"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Nenne zwei Vorteile, ASCII als Kodierung zu benutzen, im Gegensatz zu einer eigenen Kodierung.", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["standard", "kodierung"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Welche Fehlerkorrektur-Level gibt es in QR-Codes?", "mc", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("L (7%), M (15%), Q (25%), H (30%)", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("L (10%), M (20%), Q (30%), H (80%)", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Nur L und H", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Es gibt nur eine Ebene", false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Warum m\u00fcssen die Metadaten in einem QR-Code gespeichert werden?", "mc", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um den Scanner dar\u00fcber zu informieren, welche Maske, Fehlerkorrektur und Version verwendet wurde", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um die Nachricht zu verschl\u00fcsseln", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um Platz zu sparen", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um die Lesbarkeit zu verbessern", false)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)([])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Warum d\u00fcrfen in den Positionsmarkern keine Daten gespeichert werden?", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["erkennung"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Beschreibe, wie die Maske wieder r\u00fcckg\u00e4ngig gemacht wird.", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["ernut", "gleiche"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Durch das dreifache Schreiben einer Nachricht k\u00f6nnen wie viel % der Nachricht unleserlich sein? ", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["66"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Nenne 3 Anwendungen f\u00fcr QR-Codes, welche du bei der Erstellung der Visitenkarte gesehen hast.", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["Text", "URL", "VCard"])))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Beschreibe ein Szenario aus dem Schulalltag, in dem QR-Codes sinnvoll eingesetzt werden k\u00f6nnten.", "text", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().P($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.r().C)(["schule", "einsatz"]))))])));
  var questionsVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(quizQuestions);
  var answersVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().eu($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([]))));
  var resultsVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("quiz-container"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dg().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "QR Code Quiz", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Beantworte die folgenden 20 Fragen. Textfragen erfordern bestimmte Schl\u00fcsselw\u00f6rter, Multiple-Choice-Fragen haben nur eine richtige Antwort.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(questionsVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((questions) => $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(questions).od(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((questions$2) => ((x$1) => {
    if ((x$1 !== null)) {
      var x337 = x$1.K();
      if ((x337 !== null)) {
        var question = x337.gL;
        var qType = x337.gM;
        var choices = x337.gN;
        var keywords = x337.gO;
        var idx = (x$1.M() | 0);
        var questionNum = ((1 + idx) | 0);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("quiz-question"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.uA().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ((("Frage " + questionNum) + ": ") + question), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), ((qType === "text") ? this.z3(question, idx, answersVar, keywords, ((idx === (((-1) + questions$2.u()) | 0)) ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
          this.hq("zusammenfassung");
        }))) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())) : this.z2(question, idx, choices, answersVar))])));
      }
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  }))(questions))))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(resultsVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var result = x$1$1.an;
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("quiz-result"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Ergebnis", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, result, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$1)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.z3 = (function(question, questionIndex, answersVar, keywords, onCorrect) {
  var textVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q("");
  var feedbackVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("quiz-text-answer");
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.oA();
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ot().k(6);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.tS().k(60);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("Deine Antwort hier...");
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("font-size: 1rem; padding: 0.75rem;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(textVar.g);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(textVar, text);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(answersVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text$2) => ((answers) => answers.dJ(questionIndex, text$2)))(text)));
  })));
  return $x_9.d($x_8.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_7, $x_6.d($x_5.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener, updater)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Antwort \u00fcberpr\u00fcfen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$88) => {
    var text$1 = textVar.g.G().j();
    var isCorrect = ((!keywords.e()) && keywords.f2(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((k) => {
      var this$10 = text$1.toLowerCase();
      var s = k.toLowerCase();
      return ((this$10.indexOf(s) | 0) !== (-1));
    }))));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(feedbackVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(isCorrect));
    if (isCorrect) {
      if ((!onCorrect.e())) {
        onCorrect.j().ak();
      }
    }
  }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(feedbackVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x350 = (!(!x$1.an));
      if ((x350 === true)) {
        return "btn-success";
      }
      if ((x350 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(feedbackVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x355 = (!(!x$1$2.an));
      if ((x355 === true)) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("feedback-correct"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, " Richtig!", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      }
      if ((x355 === false)) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("feedback-incorrect"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Nicht ganz richtig. Versuche es nochmal!", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$2)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.z2 = (function(question, questionIndex, choices, answersVar) {
  var selectedVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var feedbackVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("quiz-mc-answer"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().eZ(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(selectedVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => {
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(choices);
    var f = ((selected$2) => ((x$1) => {
      if ((x$1 !== null)) {
        var x357 = x$1.K();
        if ((x357 !== null)) {
          var labelText = x357.K();
          var idx = (x$1.M() | 0);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("quiz-radio-option"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e5().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dI().k("radio"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.xS().k(((("question-" + questionIndex) + "-") + idx)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().k(("" + idx)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ny().k(selected$2.U(idx)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ok(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$89) => {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(selectedVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(idx));
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(answersVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((answers) => answers.dJ(questionIndex, labelText))));
          })))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iw().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.xu().k(((("question-" + questionIndex) + "-") + idx)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, labelText, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
    }))(selected);
    if ((this$10 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0 = this$10.i();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = this$10.o();
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$1 = rest.i();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        t.S = nx;
        t = nx;
        rest = rest.o();
      }
      return h;
    }
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Antwort \u00fcberpr\u00fcfen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bL(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$90) => {
    var this$16 = selectedVar.g.G().j();
    if ((!this$16.e())) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(feedbackVar, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some((!(!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(choices, (this$16.j() | 0)).M()))));
    }
  }))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.dC(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(feedbackVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x365 = (!(!x$1$1.an));
      if ((x365 === true)) {
        return "btn-success";
      }
      if ((x365 === false)) {
        return "btn-error";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.de())]))), ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(feedbackVar.g, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    if ((x$1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x370 = (!(!x$1$2.an));
      if ((x370 === true)) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("feedback-correct"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Richtig!", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      }
      if ((x370 === false)) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("feedback-incorrect"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Nicht ganz richtig. Versuche es nochmal!", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1$2)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().V, (void 0)))])));
});
$p.ex = (function(storageKey) {
  try {
    var initial = (window.localStorage.getItem(storageKey) === "true");
  } catch (e) {
    var initial = false;
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(initial);
});
$p.eB = (function(storageKey, infoVar) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(infoVar, true);
  try {
    window.localStorage.setItem(storageKey, "true");
  } catch (e) {
  }
});
$p.dY = (function(title, text, image) {
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("infotext");
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, title, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  if (image.e()) {
    var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = image.j();
    var $x_11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ir().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ib().k(title), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iH().k(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("max-width: 100%; margin: 1rem 0; border-radius: 4px;")]))));
  }
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeOptionToModifier__s_Option__Lcom_raquo_laminar_modifiers_Modifier($x_12, $x_11);
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(text, "\n", 0);
  var f = ((line) => (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(line) !== "") ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(line), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))));
  var len = xs.a.length;
  var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ChildNode.r().C)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0$1 = xs.a[i];
        ys.a[$x_1] = f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      while ((i < len)) {
        var $x_2 = i;
        var x0$2 = xs.a[i];
        ys.a[$x_2] = f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      while ((i < len)) {
        var $x_3 = i;
        var x0$3 = xs.a[i];
        ys.a[$x_3] = f(x0$3);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      while ((i < len)) {
        var $x_4 = i;
        var t = xs.a[i];
        var lo = t.C;
        var hi = t.F;
        ys.a[$x_4] = f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      while ((i < len)) {
        var $x_5 = i;
        var x0$4 = xs.a[i];
        ys.a[$x_5] = f(x0$4);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      while ((i < len)) {
        var $x_6 = i;
        var x0$5 = xs.a[i];
        ys.a[$x_6] = f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$5));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$6 = xs.a[i];
        ys.a[$x_7] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      while ((i < len)) {
        var $x_8 = i;
        var x0$7 = xs.a[i];
        ys.a[$x_8] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      while ((i < len)) {
        var $x_9 = i;
        var x0$8 = xs.a[i];
        ys.a[$x_9] = f(x0$8);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  return $x_16.d($x_15.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_14, $x_13, $x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$12, ys, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((component) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return component;
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())])));
});
$p.tv = (function(title, text) {
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 1rem; padding: 1.25rem; background: #f2f7ff; border-radius: 12px; border: 1px solid #b8c9e6; box-shadow: 0 6px 16px rgba(30, 60, 120, 0.08);");
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("margin-top: 0; color: #1f3b73;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, title, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("height: 2px; width: 60px; background: #1f3b73; margin: 0.25rem 0 0.75rem 0;")])));
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b;
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(text, "\n", 0);
  var f = ((line) => (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(line) !== "") ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().k("color: #2d4a7a; margin: 0.3rem 0; line-height: 1.35;"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T(line), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode(""))));
  var len = xs.a.length;
  var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ChildNode.r().C)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = xs.a[i];
        ys.a[$x_1] = f(x0);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = xs.a[i];
        ys.a[$x_2] = f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = xs.a[i];
        ys.a[$x_3] = f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      while ((i < len)) {
        var $x_4 = i;
        var t = xs.a[i];
        var lo = t.C;
        var hi = t.F;
        ys.a[$x_4] = f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = xs.a[i];
        ys.a[$x_5] = f(x0$3);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = xs.a[i];
        ys.a[$x_6] = f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = xs.a[i];
        ys.a[$x_7] = f(x0$5);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = xs.a[i];
        ys.a[$x_8] = f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = xs.a[i];
        ys.a[$x_9] = f(x0$7);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  return $x_14.d($x_13.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_12, $x_11, $x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$12, ys, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((component) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
    return component;
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$())])));
});
$p.h8 = (function(minutes) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("time-badge"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, (("\u23f1 ca. " + minutes) + " min"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])))])));
});
$p.he = (function(currentHash) {
  var chapters = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.r().C)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#einfuehrung", "Einf\u00fchrung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#nachricht", "Nachrichten schreiben"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#maskierung", "Maskierung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#fehlerkorrektur", "Fehlerkorrektur"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#praxisanwendungen", "Praxisanwendungen"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#zusammenfassung", "Zusammenfassung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#barcodes", "Barcode")])));
  _return: {
    var i = 0;
    var these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(chapters, 0, chapters);
    while ((!these.e())) {
      var x0 = these.i();
      var x = x0.K();
      if (((x === null) ? (currentHash === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_equals__O__Z(x, currentHash))) {
        var currentIndex = i;
        break _return;
      }
      i = ((1 + i) | 0);
      these = these.o();
    }
    var currentIndex = (-1);
  }
  var hasPrev = (currentIndex > 0);
  var hasNext = (currentIndex < (((-1) + chapters.u()) | 0));
  var prevChapter = (hasPrev ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(chapters, (((-1) + currentIndex) | 0)) : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("", ""));
  var nextChapter = (hasNext ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(chapters, ((1 + currentIndex) | 0)) : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("", ""));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("chapter-navigation"), (hasPrev ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k(prevChapter.K()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, ("\u2190 " + prevChapter.M()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-primary")])))]))) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([])))), (hasNext ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.eo().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ew().k(nextChapter.K()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bT().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, (nextChapter.M() + " \u2192"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("btn-primary")])))]))) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ah().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([]))))])));
});
$p.h7 = (function(chapter) {
  var storedData = ((chapter !== "") ? this.ez(chapter) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var this$3 = (storedData.e() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(storedData.j().cB));
  var storedRating = (this$3.e() ? new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "") : this$3.j());
  var understandingVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(storedRating.fX);
  var difficultyVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(storedRating.fT);
  var qualityVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(storedRating.fV);
  var scopeVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(storedRating.fW);
  var feedbackVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.O.Q(storedRating.fU);
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-component");
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.c1().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Bewertung dieses Kapitels", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-category"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iw().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Ich habe den Inhalt verstanden", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-hint"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "5 Sterne = vollst\u00e4ndige Zustimmung, 1 Stern = \u00fcberhaupt nicht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, understandingVar, 5)])));
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-category"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iw().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Die Schwierigkeit der Inhalte war", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-hint"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "5 Sterne = sehr schwierig, 1 Stern = sehr leicht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, difficultyVar, 5)])));
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-category"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iw().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Die Aufgaben haben mir Spa\u00df gemacht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-hint"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "5 Sterne = viel Spa\u00df, 1 Stern = wenig Spa\u00df", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, qualityVar, 5)])));
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-category"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iw().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Der Umfang der Aufgaben war angemessen", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.bi().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-hint"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "5 Sterne = Die Aufgaben hatten eine gute L\u00e4nge, 1 Stern = Die Aufgaben waren zu lang/zu kurz", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, scopeVar, 5)])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("rating-category");
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.iw().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b, "Zus\u00e4tzliche Anmerkungen:", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().n)])));
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.oA();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ot().k(4);
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.e8().k("Deine Anmerkungen hier...");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(feedbackVar.g);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(feedbackVar, text);
    if ((chapter !== "")) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this.ja, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text$2) => ((data) => {
        var existing = data.cv(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().E($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c0(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.r().C)([]))), new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "")))));
        var updatedRating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData((understandingVar.g.G().j() | 0), (difficultyVar.g.G().j() | 0), (qualityVar.g.G().j() | 0), (scopeVar.g.G().j() | 0), text$2);
        var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(existing.fS, existing.cn, updatedRating);
        this.ou(chapter, updatedChapter);
        return data.dJ(chapter, updatedChapter);
      }))(text)));
    }
  })));
  return $x_16.d($x_15.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8.d($x_7.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_6, $x_5, $x_4.d($x_3.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener, updater)])))])))])));
});
var $d_Llivechart_Main$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_Main$, "livechart.Main$", ({
  gK: 1
}));
export { $d_Llivechart_Main$ as $d_Llivechart_Main$ };
var $n_Llivechart_Main$;
function $m_Llivechart_Main$() {
  if ((!$n_Llivechart_Main$)) {
    $n_Llivechart_Main$ = new $c_Llivechart_Main$();
  }
  return $n_Llivechart_Main$;
}
export { $m_Llivechart_Main$ as $m_Llivechart_Main$ };
//# sourceMappingURL=livechart.-Main$.js.map
