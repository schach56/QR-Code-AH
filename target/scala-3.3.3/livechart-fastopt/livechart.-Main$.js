'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00241 from "./livechart.-Main$$anon$1.js";
import * as $j_livechart$002e$002dMain$0024$0024anon$00243 from "./livechart.-Main$$anon$3.js";
import * as $j_livechart$002e$002dMain$0024$002dChapter$002dData from "./livechart.-Main$-Chapter-Data.js";
import * as $j_livechart$002e$002dMain$0024$002dExercise$002dResponse from "./livechart.-Main$-Exercise-Response.js";
import * as $j_livechart$002e$002dMain$0024$002dRating$002dData from "./livechart.-Main$-Rating-Data.js";
import * as $j_livechart$002e$002dSimple$002dText$002dEditor from "./livechart.-Simple-Text-Editor.js";
function $p_Llivechart_Main$__getErrorCorrectionPixels$1__sci_Map__T__sci_Set($thiz, allErrorCorrectionZones$1, text) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text);
  var len = this$3.length;
  var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len);
  var i = 0;
  while ((i < len)) {
    var $x_1 = i;
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text);
    var index = i;
    var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$4, index);
    dst.set($x_1, x0);
    i = ((1 + i) | 0);
  }
  var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
  var num = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_math_Numeric$IntIsIntegral$();
  var checksum = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__sum__s_math_Numeric__O(this$5, num));
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(1, 1, 7, false);
  while (it.sci_RangeIterator__f__hasNext) {
    var elem = it.next__I();
    if (((((((checksum + elem) | 0) % 7) | 0) < 4) !== false)) {
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b);
      this$10.addOne__O__scm_Growable(elem);
    }
  }
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b).result__O()));
  var zoneIndices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce(this$11));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(zoneIndices).flatMap__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((zoneIdx) => {
    var zoneIdx$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(zoneIdx);
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allErrorCorrectionZones$1).getOrElse__O__F0__O(zoneIdx$1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([])));
      return this$12.from__sc_IterableOnce__sci_Set(elems);
    }))))).toList__sci_List());
    var ord = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_math_Ordering$Int$();
    var allPixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_SeqOps__sorted__s_math_Ordering__O(this$13, ord));
    var y = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$doubleToInt((0.4 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allPixels).length__I()));
    var numPixelsToSelect = ((y < 1) ? 1 : y);
    var seed = ((((Math.imul(17, checksum) + Math.imul(31, zoneIdx$1)) | 0) % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allPixels).length__I())) | 0);
    var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allPixels);
    var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$16)));
    var f = ((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
      if ((x$1$1 !== null)) {
        var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
        return (((((idx + seed) | 0) % $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$checkIntDivisor($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allPixels).length__I())) | 0) < numPixelsToSelect);
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
    });
    var l = this$17;
    block: {
      var result;
      while (true) {
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
          var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
          break;
        } else {
          var h = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
          var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(h)) === false)) {
            l = t;
            continue;
          }
          var start = l;
          var remaining = t;
          while (true) {
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).isEmpty__Z()) {
              var result = start;
              break block;
            } else {
              var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
              if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x)) !== false)) {
                remaining = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).tail__O());
                continue;
              }
              var firstMiss = remaining;
              var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
              var toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).tail__O());
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem;
                currentLast = newElem;
                toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).tail__O());
              }
              var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(firstMiss).tail__O());
              var nextToCopy = next;
              while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).isEmpty__Z())) {
                var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).head__O();
                if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(head)) !== false)) {
                  next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).tail__O());
                  }
                  nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                  next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                }
              }
              if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).isEmpty__Z())) {
                $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = nextToCopy;
              }
              var result = newHead;
              break block;
            }
          }
        }
      }
    }
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
    var f$1 = ((_$4) => {
      var _$4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(_$4);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$4$1)._1__O());
    });
    if ((this$18 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$1 = this$18.head__O();
      var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$1 = h$1;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$18.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx;
        t$1 = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      var this$19 = h$1;
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$19);
  }))));
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
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$2).get(((startRow + x0) | 0))).set(((startCol + x0$1) | 0), 1);
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
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$22).get(((startRow + x0) | 0))).set(((startCol + x0$1) | 0), 1);
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
function $p_Llivechart_Main$__isCorrect1$1__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase()));
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("wei\u00df")) !== (-1))) {
    return true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$3.toLowerCase()));
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("white")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect1$1__T__Z as $p_Llivechart_Main$__isCorrect1$1__T__Z };
function $p_Llivechart_Main$__isCorrect2$1__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase()));
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("schwarz")) !== (-1))) {
    return true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$3.toLowerCase()));
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("black")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect2$1__T__Z as $p_Llivechart_Main$__isCorrect2$1__T__Z };
function $p_Llivechart_Main$__isCorrect3$1__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase()));
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("schwarz")) !== (-1))) {
    return true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$3.toLowerCase()));
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("black")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect3$1__T__Z as $p_Llivechart_Main$__isCorrect3$1__T__Z };
function $p_Llivechart_Main$__isCorrect4$1__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase()));
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("wei\u00df")) !== (-1))) {
    return true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$3.toLowerCase()));
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("white")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect4$1__T__Z as $p_Llivechart_Main$__isCorrect4$1__T__Z };
function $p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal($thiz, checkVar) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(checkVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1);
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x176 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$1)).s_Some__f_value);
      if ((x176 === true)) {
        return "background-color: rgba(76, 175, 80, 0.2); border-left: 4px solid #4CAF50;";
      }
      if ((x176 === false)) {
        return "background-color: rgba(244, 67, 54, 0.2); border-left: 4px solid #f44336;";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$2, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
}
export { $p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal as $p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal };
function $p_Llivechart_Main$__isCorrect1$2__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase())));
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("gr\u00f6\u00dfer")) !== (-1))) {
    return true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$3.indexOf("h\u00f6her")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect1$2__T__Z as $p_Llivechart_Main$__isCorrect1$2__T__Z };
function $p_Llivechart_Main$__isCorrect2$2__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase())));
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("schwerer")) !== (-1))) {
    return true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$3.indexOf("aufw\u00e4ndiger")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect2$2__T__Z as $p_Llivechart_Main$__isCorrect2$2__T__Z };
function $p_Llivechart_Main$__isCorrect3$2__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase())));
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("Fehlererkennung")) !== (-1))) {
    var $x_1 = true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
    var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$3.indexOf("fehlererkennung")) !== (-1));
  }
  if ($x_1) {
    return true;
  } else {
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("erkennung")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect3$2__T__Z as $p_Llivechart_Main$__isCorrect3$2__T__Z };
function $p_Llivechart_Main$__isCorrect4$2__T__Z($thiz, answer) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
  var lower = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$1.toLowerCase())));
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("Fehlerkorrektur")) !== (-1))) {
    var $x_1 = true;
  } else {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
    var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$3.indexOf("fehlerkorrektur")) !== (-1));
  }
  if ($x_1) {
    return true;
  } else {
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lower);
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("korrektur")) !== (-1));
  }
}
export { $p_Llivechart_Main$__isCorrect4$2__T__Z as $p_Llivechart_Main$__isCorrect4$2__T__Z };
function $p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal($thiz, checkVar) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(checkVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1);
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x243 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$1)).s_Some__f_value);
      if ((x243 === true)) {
        return "background-color: rgba(76, 175, 80, 0.2); border-left: 4px solid #4CAF50;";
      }
      if ((x243 === false)) {
        return "background-color: rgba(244, 67, 54, 0.2); border-left: 4px solid #f44336;";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$2, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
}
export { $p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal as $p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal };
function $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement($thiz, chapter$15, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$6, currentVar, maxRating) {
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-stars");
  var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var isEmpty = (maxRating < 1);
  var gap = (((-1) + maxRating) | 0);
  var scala$collection$immutable$Range$$numRangeElements = ((1 + gap) | 0);
  if (((scala$collection$immutable$Range$$numRangeElements <= 0) && (!isEmpty))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(1, maxRating, 1, true);
  }
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(1, 1, maxRating, isEmpty);
  while (it.sci_RangeIterator__f__hasNext) {
    var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b);
    var x0 = it.next__I();
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls);
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
    var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x0) => ((current) => {
      var current$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(current);
      return ((current$1 >= x0) ? "star filled" : "star");
    }))(x0));
    var $x_2 = $x_3.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$6, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$());
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$7, "\u2605", r);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
    var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
    var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((currentVar, x0, chapter$15, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$6) => ((_$71) => {
      var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentVar);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$9, x0);
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter$15);
      if ((!(this$12 === ""))) {
        var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Llivechart_Main$__f_allResponsesVar);
        var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
          var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
          var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter$15, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
            var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
            var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
            var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
            return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$15, exercises, rating);
          }))));
          var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(understandingVar$3);
          var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$16.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var understanding = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$17.tryNow__s_util_Try()).get__O());
          var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(difficultyVar$3);
          var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$18.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var difficulty = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$19.tryNow__s_util_Try()).get__O());
          var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(qualityVar$3);
          var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$20.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var quality = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$21.tryNow__s_util_Try()).get__O());
          var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(scopeVar$3);
          var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$22.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$23.tryNow__s_util_Try()).get__O());
          var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar$6);
          var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$24.Lcom_raquo_airstream_state_SourceVar__f_signal);
          var feedback = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$25.tryNow__s_util_Try()).get__O());
          var updatedRating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(understanding, difficulty, quality, scope, feedback);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
          var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
          var chapter = this$27.Llivechart_Main$ChapterData__f_chapter;
          var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
          var exercises$1 = this$28.Llivechart_Main$ChapterData__f_exercises;
          var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises$1, updatedRating);
          $thiz.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter$15, updatedChapter);
          var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$32.updated__O__O__sci_MapOps(chapter$15, updatedChapter));
        }));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$33, mod);
      }
    }))(currentVar, x0, chapter$15, understandingVar$3, difficultyVar$3, qualityVar$3, scopeVar$3, feedbackVar$6));
    var elem = $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$34, onNext)])));
    this$35.addOne__O__scm_Growable(elem);
  }
  var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b).result__O());
  var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  return $x_8.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$36, nodes, renderableSeq)])));
}
export { $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement as $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement };
/** @constructor */
function $c_Llivechart_Main$() {
  this.Llivechart_Main$__f_currentHashVar = null;
  this.Llivechart_Main$__f_chapterExercises = null;
  this.Llivechart_Main$__f_allResponsesVar = null;
  $n_Llivechart_Main$ = this;
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i = 0;
  while ((i < 16)) {
    b.addOne__O__sci_VectorBuilder(false);
    i = ((1 + i) | 0);
  }
  $x_1.apply__O__Lcom_raquo_airstream_state_Var(b.result__sci_Vector());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("Hier stehen die QR Daten");
  this.Llivechart_Main$__f_currentHashVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(window.location.hash));
  try {
    window.addEventListener("hashchange", ((_$1) => {
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_currentHashVar);
      var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(window.location.hash);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$3, value);
    }));
  } catch (e) {
  }
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Scanne die QR Codes und beschreibe deren Inhalte. Beschreibe zus\u00e4tzlich, die Gemeinsamkeiten.", "Welche Aussage trifft zu QR-Codes?", "Beschreibe, welche Vorstellungen du hast, wie QR Codes funktionieren."]));
  var y = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("einfuehrung", y);
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Erkl\u00e4re, was ein QR-Code ist und zu welchem Zweck er verwendet wird.", "Erstelle eine eigene Kodierung f\u00fcr die Buchstaben B, e, t (je 8 Pixel).", "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung.", "Erkl\u00e4re die Nachteile einer eigenen, nicht standardisierten Kodierung.", "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle.", "Erl\u00e4utere einen Vorteile der festen L\u00e4nge von 8 Pixeln pro Buchstabe. Wie viele verschiedene Zeichen k\u00f6nnen mit 8 Pixeln dargestellt werden?", "Verschl\u00fcssele eine Nachricht mit QR-Code.", "Beschreibe, was dir bei der QR-Code Darstellung aufgefallen ist. Wie wird ein Buchstabe in Pixel umgewandelt? Wie bilden sich die W\u00f6rter? Gibt es Beschr\u00e4nkungen?", "Erkl\u00e4re, wie du wei\u00dft, wann ein neuer Buchstabe anf\u00e4ngt, wenn du nur die Pixel siehst.", "Beschreibe, welche Bereiche des QR-Codes festgelegt sind und nicht ver\u00e4ndert werden.", "Erkl\u00e4re einem Mitsch\u00fcler, wie eine Nachricht in einen QR-Code geschrieben wird."]));
  var y$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("nachricht", y$1);
  var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Versuche den QR-Code zu scannen und stelle begr\u00fcndete Vermutungen dazu an.", "Erkl\u00e4re die Berechnungsvorschrift einer Maske deiner Wahl.", "Wende die Maske 2 auf die folgende Nachricht an: 'HELLO'. Beschreibe den Prozess Schritt f\u00fcr Schritt.", "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschlie\u00dfend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.", "Erkl\u00e4re, warum die XOR-Operation sich selbst invertiert (A XOR B XOR B = A) und was dies f\u00fcr die Demaskierung im QR-Code bedeutet.", "Vermute, woher der Scanner wei\u00df, welche Maske angewandt wurde.", "Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkl\u00e4re, wof\u00fcr diese Eigenschaft n\u00fctzlich sein k\u00f6nnte.", "Erl\u00e4utere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zus\u00e4tzlich eine m\u00f6gliche L\u00f6sung, um diese Probleme zu umgehen.", "Fasse zusammen, warum die Maskierung ein wichtiger Teil des QR-Code-Systems ist und welche Vorteile sie mit sich bringt."]));
  var y$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("maskierung", y$2);
  var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Hin und wieder kommt es vor, dass Leute Sticker auf QR Codes kleben, welche in der \u00d6ffentlichkeit zu sehen sind. Vergleiche die beiden QR-Codes. Vermute, welcher der beiden QR Codes durch einen Scanner gelesen werden kann. Begr\u00fcnde deine Vermutung.", "Versuche nun beide QR Codes zu scannen. Beschreibe deine Beobachtungen.", "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider hast du dich bei der Hausnummer vertippt und statt 23 steht dort 32.", "Eine M\u00f6glichkeit mit Fehlern umzugehen ist es, eine Pr\u00fcfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gez\u00e4hlt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel w\u00e4re, dass die Zeichenanzahl gez\u00e4hlt wird. Aus der Nachricht 'Hallo' w\u00fcrde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt oder korrigiert werden k\u00f6nnen. Begr\u00fcnde deine Antwort.", "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden k\u00f6nnen am Beispiel der Nachricht '12345'. (Tipp: \u00dcberlege dir, was du machst, wenn eine Information von einer Person im Gespr\u00e4ch nicht verstanden wurde.)", "Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein d\u00fcrfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Urspr\u00fcngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Urspr\u00fcngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Urspr\u00fcngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'", "L\u00fcckentext", "In dem folgenden QR Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zus\u00e4tzlich die Metadaten in den QR Code laden. Durch einen klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben.", "Erkl\u00e4re in eigenen Worten, wie die Fehlerkorrektur in QR Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zus\u00e4tzlichen Daten und Korrekturlevel ein. Erl\u00e4utere Zus\u00e4tzlich, wie die Fehlerkorrektur im QR Code dargestellt wird."]));
  var y$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("fehlerkorrektur", y$3);
  var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begr\u00fcnde jeweils kurz. Nenne auch ein Beispiel, wo QR-Codes ungeeignet sind und begr\u00fcnde.", "Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung.", "Die Schulleitung \u00fcberlegt, wie man Erfassen k\u00f6nnte, welche Sch\u00fcler das Gel\u00e4nde verlassen. Momentan wird daf\u00fcr eine Lehrkraft eingesetzt, welches sich die Hausaufgabenhefte zeigen l\u00e4sst. \nIn dem Hausaufgabenheft werden Name und Geburtsdatum des Sch\u00fclers \u00fcberpr\u00fcft. Ein Sch\u00fcler darf das Gel\u00e4nde verlassen, wenn er \u00fcber 16 Jahre alt ist. \nErl\u00e4utere je 2 Vor- und Nachteile dieser Methode.", "Erl\u00e4utere, wie du den Sachverhalt aus Aufgabe 3 mit einem QR-Code l\u00f6sen w\u00fcrdest. Gehe dabei auch darauf ein, welche Daten im QR Code gespeichert werden m\u00fcssen.", "Nimm begr\u00fcndet Stellung zum Nutzen von QR Codes im Anwendungsfall von Aufgabe 3.", "Eine Lehrkraft \u00e4u\u00dfert Bedenken dar\u00fcber, dass Sch\u00fcler zum einen die QR Codes Manipulieren k\u00f6nnten, um falsche Daten zu speichern. Zum anderen bef\u00fcrchtet die Lehrkraft, dass die QR Codes nach einem Jahr verschmutzen oder besch\u00e4digt sind, da das Lesen eines QR Codes nicht mehr m\u00f6glich ist, wenn schon ein Pixel umgef\u00e4rbt ist.  \nErl\u00e4utere, wie du auf diese Bedenken reagierst. Begr\u00fcnde deine Antworten.", "Um das Speichern der Daten einmal auszuprobieren, erstelle einen QR Code mit deinen Daten(Du kannst dir daf\u00fcr nat\u00fcrlich auch welche ausdenken). \nGehe daf\u00fcr auf die Webseite 'https://www.qrcode-generator.de/' und w\u00e4hle dort den Typ 'VCard' aus. und F\u00fclle die Informationen aus. \n\u00dcberpr\u00fcfe, ob der QR Code funktioniert, indem du ihn mit deinem Smartphone scannst. Wenn alles funktioniert hat, kannst du dir den QR Code als Bild speichern, Ausdrucken und in deine Handyh\u00fclle legen. \nBeschreibe, welche Daten du auserdem in einer VCard speichern k\u00f6nntest und welche Vorteile dies hat."]));
  var y$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
  var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("anwendung", y$4);
  var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var y$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$5);
  var elems$6 = $x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_6, $x_5, $x_4, $x_3, $x_2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("zusammenfassung", y$5)]));
  this.Llivechart_Main$__f_chapterExercises = this$22.from__sc_IterableOnce__sci_Map(elems$6);
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var;
  var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung"]));
  var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$7));
  var rest = this$24;
  var h = null;
  var t = null;
  while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
    var chapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
    var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.loadFromLocalStorage__T__s_Option(chapter));
    if (this$25.isEmpty__Z()) {
      var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0$1 = this$25.get__O();
      var _$2 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0$1);
      var $x_8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(chapter, _$2));
    }
    var it = $x_8.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      }
      t = nx;
    }
    rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
  }
  var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(((h === null) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$() : h));
  this.Llivechart_Main$__f_allResponsesVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_9).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$29));
}
export { $c_Llivechart_Main$ as $c_Llivechart_Main$ };
$c_Llivechart_Main$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$.prototype.constructor = $c_Llivechart_Main$;
/** @constructor */
function $h_Llivechart_Main$() {
}
export { $h_Llivechart_Main$ as $h_Llivechart_Main$ };
$h_Llivechart_Main$.prototype = $c_Llivechart_Main$.prototype;
$c_Llivechart_Main$.prototype.renderQRCodeExercise__I__T__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(exerciseNumber, taskText, explanation) {
  var messageTextVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var exceedsLimitVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-text-input-section");
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var value = ("Aufgabe " + exerciseNumber);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_17 = $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, value, r)])));
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_14 = $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$2, explanation, r$1)])));
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-input-container");
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Deine Nachricht hier...");
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("message-input");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(messageTextVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor()).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var text$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text);
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text$1);
    if ((this$5.length > 17)) {
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceedsLimitVar);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$6, true);
    } else {
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceedsLimitVar);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$7, false);
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().take$extension__T__I__T(text$1, 17);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(messageTextVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$9, onNext);
  var $x_5 = $x_10.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_8, $x_7, $x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceedsLimitVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((exceeds) => {
    var exceeds$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(exceeds);
    if (exceeds$1) {
      var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("color: red; font-weight: bold; margin-top: 0.5rem;");
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_4.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "Maximale Anzahl an Zeichen f\u00fcr den QR Code Typen erreicht", r$2)])));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$13, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_1 = $x_13.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_11, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(messageTextVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text$2) => {
    var text$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text$2);
    return this.renderQRCodeSimulation__T__I__Lcom_raquo_laminar_nodes_ReactiveElement(text$3, 21);
  }));
  var childSource$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$15, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_22.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_21.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_20, $x_17, $x_14, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.renderQRCodeExerciseWithMetadata__I__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement = (function(exerciseNumber, taskText, explanation, sharedMessageVar) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sharedMessageVar);
  var messageTextVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_airstream_state_Var((this$1.isEmpty__Z() ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("") : this$1.get__O()));
  var exceedsLimitVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  var showMetadata = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  var metadataActive = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  var errorCorrectionActive = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([8, 29, 92, 113, 155, 176, 173, 168, 169, 170, 181, 182, 183, 184, 187, 188, 302, 365, 386, 407, 428])));
  var darkRedPixels = this$2.from__sc_IterableOnce__sci_Set(elems);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([50, 71, 175, 172, 171, 323, 344, 185, 186])));
  var lightRedPixels = this$3.from__sc_IterableOnce__sci_Set(elems$1);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([198, 199, 219, 220, 240, 241, 261, 262])));
  var e1Pixels = this$4.from__sc_IterableOnce__sci_Set(elems$2);
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([282, 283, 303, 304, 324, 325, 345, 346])));
  var e2Pixels = this$5.from__sc_IterableOnce__sci_Set(elems$3);
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([366, 367, 387, 388, 408, 409, 429, 430])));
  var e3Pixels = this$6.from__sc_IterableOnce__sci_Set(elems$4);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([196, 197, 217, 218, 238, 239, 259, 260])));
  var e4Pixels = this$7.from__sc_IterableOnce__sci_Set(elems$5);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([193, 194, 214, 215, 235, 236, 256, 257])));
  var e5Pixels = this$8.from__sc_IterableOnce__sci_Set(elems$6);
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([191, 192, 212, 213, 233, 234, 254, 255])));
  var e6Pixels = this$9.from__sc_IterableOnce__sci_Set(elems$7);
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([189, 190, 210, 211, 231, 232, 252, 253])));
  var e7Pixels = this$10.from__sc_IterableOnce__sci_Set(elems$8);
  var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var elems$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, e1Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, e2Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(3, e3Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(4, e4Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(5, e5Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(6, e6Pixels), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(7, e7Pixels)]));
  var allErrorCorrectionZones = this$25.from__sc_IterableOnce__sci_Map(elems$9);
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-text-input-section");
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var value = ("Aufgabe " + exerciseNumber);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_30 = $x_32.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_31.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, value, r)])));
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_27 = $x_29.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_28.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$27, explanation, r$1)])));
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-input-container");
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Deine Nachricht hier...");
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("message-input");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(messageTextVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor()).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var text$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text);
    var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text$1);
    if ((this$29.length > 17)) {
      var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceedsLimitVar);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$30, true);
    } else {
      var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceedsLimitVar);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$31, false);
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().take$extension__T__I__T(text$1, 17);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(messageTextVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$33, onNext);
  var $x_18 = $x_23.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_21, $x_20, $x_19, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceedsLimitVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((exceeds) => {
    var exceeds$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(exceeds);
    if (exceeds$1) {
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("color: red; font-weight: bold; margin-top: 0.5rem;");
      var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$35, "Maximale Anzahl an Zeichen f\u00fcr den QR Code Typen erreicht", r$2)])));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$37, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_14 = $x_26.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_25.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_24, $x_18, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_StaticSignalCombineOps$()).combine__Lcom_raquo_airstream_core_Source$SignalSource__Lcom_raquo_airstream_core_Source$SignalSource__Lcom_raquo_airstream_core_Source$SignalSource__Lcom_raquo_airstream_core_Signal($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(messageTextVar).Lcom_raquo_airstream_state_SourceVar__f_signal, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(metadataActive).Lcom_raquo_airstream_state_SourceVar__f_signal, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errorCorrectionActive).Lcom_raquo_airstream_state_SourceVar__f_signal));
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T3(x$1);
    if ((x$1$1 !== null)) {
      var x17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1).T3__f__1);
      var x18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1).T3__f__2);
      var x19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1).T3__f__3);
      if ((x17 !== null)) {
        return this.renderQRCodeSimulationWithBothMetadata__T__sci_Set__sci_Set__Z__sci_Set__Z__sci_Map__I__Lcom_raquo_laminar_nodes_ReactiveElement(x17, darkRedPixels, lightRedPixels, x18, $p_Llivechart_Main$__getErrorCorrectionPixels$1__sci_Map__T__sci_Set(this, allErrorCorrectionZones, x17), x19, allErrorCorrectionZones, 21);
      }
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  var childSource$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$41, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 1rem; display: flex; gap: 1rem;");
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$43, "Metadaten hinzuf\u00fcgen", r$3);
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.5rem 1rem; background-color: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => {
    var this$45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(metadataActive);
    var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$6) => {
      var _$6$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(_$6);
      return (!_$6$1);
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$45, mod);
    var this$46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMetadata);
    var mod$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => {
      var _$7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(_$7);
      return (!_$7$1);
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$46, mod$1);
  }));
  var $x_5 = $x_9.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_7, $x_6, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$47, onNext$1)])));
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$48, "Fehlerkorrektur hinzuf\u00fcgen", r$4);
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.5rem 1rem; background-color: #1976D2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$2, false, false));
  var onNext$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$8) => {
    var this$50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errorCorrectionActive);
    var mod$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$9) => {
      var _$9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(_$9);
      return (!_$9$1);
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$50, mod$2);
  }));
  return $x_35.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_34.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_33, $x_30, $x_27, $x_14, $x_13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_12).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_4).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$51, onNext$2)])))])))])));
});
$c_Llivechart_Main$.prototype.charToAsciBits__C__sci_List = (function(char) {
  var asciiCode = char;
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(7, (-1), 0, false);
  while (it.sci_RangeIterator__f__hasNext) {
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b);
    var x0 = it.next__I();
    var elem = (1 & (asciiCode >> x0));
    this$6.addOne__O__scm_Growable(elem);
  }
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b).result__O()));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$7);
});
$c_Llivechart_Main$.prototype.encodeTextToPixels__T__sci_Map__sci_Map = (function(text, charPixelMap) {
  var encodedMap = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Map($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Map$().apply__sci_Seq__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]))));
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapString__T__sci_WrappedString(text));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOps__zipWithIndex__O(this$1))).withFilter__F1__sc_WithFilter(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    return ((x$1$1 !== null) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O()), true));
  })))).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2);
    matchResult15: {
      if ((x$1$3 !== null)) {
        var char$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
        var charIndex$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
        var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(charPixelMap).get__O__s_Option(charIndex$1));
        if ((!this$3.isEmpty__Z())) {
          var x0 = this$3.get__O();
          var allPixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(x0);
          var bits = this.charToAsciBits__C__sci_List(char$1);
          var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allPixels);
          var filledPixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$4))).collect__s_PartialFunction__sci_List(new $j_livechart$002e$002dMain$0024$0024anon$00241.$c_Llivechart_Main$$anon$1(bits));
          var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(encodedMap);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_scm_HashMap__put0__O__O__Z__s_Some(this$5, charIndex$1, filledPixels, false);
          break matchResult15;
        } else {
          break matchResult15;
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
    }
  })));
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(encodedMap);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$7);
});
$c_Llivechart_Main$.prototype.renderQRCodeSimulation__T__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(text, gridSize) {
  if ((gridSize <= 0)) {
    var grid = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.getArrayOf().getArrayOf().constr)(0);
  } else {
    var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.getArrayOf().getArrayOf().constr)(gridSize);
    var i = 0;
    while ((i < gridSize)) {
      var $x_2 = i;
      if ((gridSize <= 0)) {
        var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(0);
      } else {
        var array$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(gridSize);
        var i$1 = 0;
        while ((i$1 < gridSize)) {
          array$1.set(i$1, 0);
          i$1 = ((1 + i$1) | 0);
        }
        var $x_1 = array$1;
      }
      array.set($x_2, $x_1);
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
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(6)).set(x0$1, 1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$1)).set(6, 1);
      }
      if ((i$2 === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$2 = ((1 + i$2) | 0);
    }
  }
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([106, 163, 188])));
  var forbiddenPositions = this$14.from__sc_IterableOnce__sci_Set(elems);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_ArrayBuffer$();
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  var dataPositions = this$15.from__sc_IterableOnce__scm_ArrayBuffer(elems$1);
  var col = (((-1) + gridSize) | 0);
  var goingUp = true;
  var elem = 0;
  elem = 0;
  while ((col > 6)) {
    var col1 = col;
    var col2 = (((-1) + col) | 0);
    if (goingUp) {
      var x = (((-1) + gridSize) | 0);
      var isEmpty$2 = (x < 0);
      if ((!isEmpty$2)) {
        var i$3 = x;
        while (true) {
          var x0$2 = i$3;
          if ((((x0$2 >= 9) || (col1 >= 9)) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$2)).get(col1) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col1);
              this$23.addOne__O__scm_ArrayBuffer(elem$1);
            }
            var ev$92 = ((1 + elem) | 0);
            elem = ev$92;
          }
          if ((((col2 >= 0) && ((x0$2 >= 9) || (col2 >= 9))) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$2)).get(col2) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col2);
              this$25.addOne__O__scm_ArrayBuffer(elem$2);
            }
            var ev$93 = ((1 + elem) | 0);
            elem = ev$93;
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
          if ((((x0$3 >= 9) || (col1 >= 9)) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$3)).get(col1) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col1);
              this$31.addOne__O__scm_ArrayBuffer(elem$3);
            }
            var ev$94 = ((1 + elem) | 0);
            elem = ev$94;
          }
          if ((((col2 >= 0) && ((x0$3 >= 9) || (col2 >= 9))) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$3)).get(col2) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col2);
              this$33.addOne__O__scm_ArrayBuffer(elem$4);
            }
            var ev$95 = ((1 + elem) | 0);
            elem = ev$95;
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
  var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text);
  var textLength = this$34.length;
  var i$5 = 0;
  while (true) {
    var x0$4 = i$5;
    var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
    if ((x0$4 < this$39.scm_ArrayBuffer__f_size0)) {
      matchResult16: {
        var \u03b41$___1;
        var \u03b41$___2;
        var x35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions).apply__I__O(x0$4));
        if ((x35 !== null)) {
          var row = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x35)._1__O());
          var col$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x35)._2__O());
          var \u03b41$___1 = row;
          var \u03b41$___2 = col$1;
          break matchResult16;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x35);
      }
      var row$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b41$___1);
      var col$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b41$___2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2)).set(col$2, 0);
    }
    if ((i$5 === 3)) {
      break;
    }
    i$5 = ((1 + i$5) | 0);
  }
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(7, (-1), 0, false);
  while (it.sci_RangeIterator__f__hasNext) {
    var this$46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b);
    var x0$5 = it.next__I();
    var elem$5 = (1 & (textLength >> x0$5));
    this$46.addOne__O__scm_Growable(elem$5);
  }
  var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b).result__O()));
  var lengthBits = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$47);
  var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lengthBits);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$49))).withFilter__F1__sc_WithFilter(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    return ((x$1$1 !== null) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O()), true));
  })))).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2);
    matchResult19: {
      if ((x$1$3 !== null)) {
        var bit$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
        var idx$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
        var posIdx = ((4 + idx$1) | 0);
        var this$50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
        if ((posIdx < this$50.scm_ArrayBuffer__f_size0)) {
          matchResult18: {
            var \u03b42$___1;
            var \u03b42$___2;
            var x41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions).apply__I__O(posIdx));
            if ((x41 !== null)) {
              var row$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x41)._1__O());
              var col$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x41)._2__O());
              var \u03b42$___1 = row$1;
              var \u03b42$___2 = col$3;
              break matchResult18;
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x41);
          }
          var row$2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b42$___1);
          var col$2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b42$___2);
          if ((bit$1 === 1)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2$1)).set(col$2$1, 2);
            break matchResult19;
          } else {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2$1)).set(col$2$1, 0);
            break matchResult19;
          }
        } else {
          break matchResult19;
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
    }
  })));
  var this$103 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([12, 13, 14, 15, 16, 17, 18, 19])));
  var y = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  var $x_18 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, y);
  var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([20, 21, 22, 23, 41, 42, 43, 44])));
  var y$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
  var $x_17 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, y$1);
  var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([45, 46, 47, 48, 49, 50, 51, 52])));
  var y$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
  var $x_16 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, y$2);
  var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([53, 54, 55, 56, 57, 58, 59, 60])));
  var y$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$5);
  var $x_15 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(3, y$3);
  var elems$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([61, 62, 63, 64, 65, 66, 67, 68])));
  var y$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$6);
  var $x_14 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(4, y$4);
  var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([69, 70, 71, 72, 73, 74, 75, 76])));
  var y$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$7);
  var $x_13 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(5, y$5);
  var elems$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([77, 78, 79, 80, 81, 82, 83, 84])));
  var y$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$8);
  var $x_12 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(6, y$6);
  var elems$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([85, 86, 87, 88, 110, 111, 112, 113])));
  var y$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$9);
  var $x_11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(7, y$7);
  var elems$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([114, 115, 116, 117, 118, 119, 120, 121])));
  var y$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$10);
  var $x_10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(8, y$8);
  var elems$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([122, 123, 124, 125, 126, 127, 128, 129])));
  var y$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$11);
  var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(9, y$9);
  var elems$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([130, 131, 132, 133, 134, 135, 136, 137])));
  var y$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$12);
  var $x_8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(10, y$10);
  var elems$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([138, 139, 140, 141, 142, 143, 144, 145])));
  var y$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$13);
  var $x_7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(11, y$11);
  var elems$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([146, 147, 148, 149, 150, 151, 152, 153])));
  var y$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$14);
  var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(12, y$12);
  var elems$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([154, 155, 156, 157, 158, 159, 160, 161])));
  var y$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$15);
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(13, y$13);
  var elems$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([162, 163, 164, 165, 166, 167, 168, 169])));
  var y$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$16);
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(14, y$14);
  var elems$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([170, 171, 172, 173, 174, 175, 176, 177])));
  var y$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$17);
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(15, y$15);
  var elems$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([178, 179, 180, 181, 182, 183, 184, 185])));
  var y$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$18);
  var elems$19 = $x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_18, $x_17, $x_16, $x_15, $x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, $x_4, $x_3, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(16, y$16)]));
  var charPixelMap = this$103.from__sc_IterableOnce__sci_Map(elems$19);
  var encodedPixels = this.encodeTextToPixels__T__sci_Map__sci_Map(text, charPixelMap);
  var this$104 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(encodedPixels);
  var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3$1) => {
    var x$1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$3$1);
    return ((x$1$4 !== null) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$4)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$4)._2__O()), true));
  }));
  var this$108 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_MapOps$WithFilter(this$104, p);
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4$1) => {
    var x$1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$4$1);
    matchResult22: {
      if ((x$1$5 !== null)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$5)._1__O());
        var filledPixels$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$5)._2__O());
        var this$105 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(filledPixels$1);
        var these = this$105;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
          var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
          var pixelIdx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x0$6);
          var this$106 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
          if ((pixelIdx < this$106.scm_ArrayBuffer__f_size0)) {
            matchResult21: {
              var \u03b43$___1;
              var \u03b43$___2;
              var x50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions).apply__I__O(pixelIdx));
              if ((x50 !== null)) {
                var row$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x50)._1__O());
                var col$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x50)._2__O());
                var \u03b43$___1 = row$3;
                var \u03b43$___2 = col$4;
                break matchResult21;
              }
              throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x50);
            }
            var row$2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b43$___1);
            var col$2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b43$___2);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2$2)).set(col$2$2, 2);
          }
          these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
        }
        break matchResult22;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$5);
    }
  }));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$108.filtered__sc_Iterable()).foreach__F1__V(f);
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-simulation");
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-grid");
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("display: grid; grid-template-columns: repeat(" + gridSize) + ", 24px); gap: 1px; background: #ccc; padding: 10px;"));
  var this$126 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().zipWithIndex$extension__O__AT2(grid);
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  capacity = 0;
  size = 0;
  jsElems = [];
  var i$6 = 0;
  while ((i$6 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
    var x1 = i$6;
    var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
    matchResult24: {
      var x0$16;
      if ((x0$7 !== null)) {
        var row$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$7)._1__O(), 1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$7)._2__O());
        var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().zipWithIndex$extension__O__AT2(row$4);
        var f$1 = ((x$1$2$1) => {
          var x$1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2$1);
          if ((x$1$6 !== null)) {
            var cellValue = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$6)._1__O());
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$6)._2__O());
            var isBlack = (cellValue > 0);
            var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
            var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
            var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((((("width: 24px; height: 24px; background: " + (isBlack ? "black" : "white")) + "; display: flex; align-items: center; justify-content: center; font-size: 8px; color: ") + (isBlack ? "white" : "gray")) + "; font-weight: bold; overflow: hidden;"));
            var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-pixel");
            var this$119 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
            var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
            return $x_23.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_21, $x_20, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$119, "", r)])));
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$6);
        });
        var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).u.length;
        var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.getArrayOf().constr)(len);
        if ((len > 0)) {
          var i$7 = 0;
          if ((xs$1 !== null)) {
            while ((i$7 < len)) {
              var $x_24 = i$7;
              var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).get(i$7);
              ys.set($x_24, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$8)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
            var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs$1, 1);
            while ((i$7 < len)) {
              var $x_25 = i$7;
              var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i$7);
              ys.set($x_25, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$9)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
            var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs$1, 1);
            while ((i$7 < len)) {
              var $x_26 = i$7;
              var x0$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i$7);
              ys.set($x_26, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$10)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
            var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs$1, 1);
            while ((i$7 < len)) {
              var $x_27 = i$7;
              var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i$7);
              var lo = t.RTLong__f_lo;
              var hi = t.RTLong__f_hi;
              ys.set($x_27, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
            var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs$1, 1);
            while ((i$7 < len)) {
              var $x_28 = i$7;
              var x0$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i$7);
              ys.set($x_28, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$11)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
            var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs$1, 1);
            while ((i$7 < len)) {
              var $x_29 = i$7;
              var x0$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i$7);
              ys.set($x_29, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$12))));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
            var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs$1, 1);
            while ((i$7 < len)) {
              var $x_30 = i$7;
              var x0$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i$7);
              ys.set($x_30, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$13)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
            var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs$1, 1);
            while ((i$7 < len)) {
              var $x_31 = i$7;
              var x0$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i$7);
              ys.set($x_31, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$14)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
            var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs$1, 1);
            while ((i$7 < len)) {
              var $x_32 = i$7;
              var x0$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i$7);
              ys.set($x_32, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$15)));
              i$7 = ((1 + i$7) | 0);
            }
          } else {
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs$1);
          }
        }
        var x0$16 = ys;
        break matchResult24;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x0$7);
    }
    var elems$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(x0$16);
    var this$123 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(elems$20);
    var it$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_ArrayOps$ArrayIterator__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator(), this$123.scm_ArraySeq$ofRef__f_array);
    while (it$1.hasNext__Z()) {
      var elem$6 = it$1.next__O();
      var unboxedElem = ((elem$6 === null) ? null : elem$6);
      jsElems.push(unboxedElem);
    }
    i$6 = ((1 + i$6) | 0);
  }
  var modifiers = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.getArrayOf().constr)(jsElems);
  var asModifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((component) => {
    var component$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(component);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r$1);
    return component$1;
  }));
  var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$();
  return $x_39.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_38.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_37, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_36).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_35.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_34, $x_33, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$126, modifiers, asModifier, renderableSeq)])))])));
});
$c_Llivechart_Main$.prototype.renderQRCodeSimulationWithBothMetadata__T__sci_Set__sci_Set__Z__sci_Set__Z__sci_Map__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(text, darkRedPixels, lightRedPixels, showMetadata, errorCorrectionPixels, showErrorCorrection, allErrorCorrectionZones, gridSize) {
  if ((gridSize <= 0)) {
    var grid = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.getArrayOf().getArrayOf().constr)(0);
  } else {
    var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_I.getArrayOf().getArrayOf().constr)(gridSize);
    var i = 0;
    while ((i < gridSize)) {
      var $x_2 = i;
      if ((gridSize <= 0)) {
        var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(0);
      } else {
        var array$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(gridSize);
        var i$1 = 0;
        while ((i$1 < gridSize)) {
          array$1.set(i$1, 0);
          i$1 = ((1 + i$1) | 0);
        }
        var $x_1 = array$1;
      }
      array.set($x_2, $x_1);
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
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(6)).set(x0$1, 1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$1)).set(6, 1);
      }
      if ((i$2 === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$2 = ((1 + i$2) | 0);
    }
  }
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([106, 163, 188])));
  var forbiddenPositions = this$14.from__sc_IterableOnce__sci_Set(elems);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_ArrayBuffer$();
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  var dataPositions = this$15.from__sc_IterableOnce__scm_ArrayBuffer(elems$1);
  var col = (((-1) + gridSize) | 0);
  var goingUp = true;
  var elem = 0;
  elem = 0;
  while ((col > 6)) {
    var col1 = col;
    var col2 = (((-1) + col) | 0);
    if (goingUp) {
      var x = (((-1) + gridSize) | 0);
      var isEmpty$2 = (x < 0);
      if ((!isEmpty$2)) {
        var i$3 = x;
        while (true) {
          var x0$2 = i$3;
          if ((((x0$2 >= 9) || (col1 >= 9)) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$2)).get(col1) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col1);
              this$23.addOne__O__scm_ArrayBuffer(elem$1);
            }
            var ev$100 = ((1 + elem) | 0);
            elem = ev$100;
          }
          if ((((col2 >= 0) && ((x0$2 >= 9) || (col2 >= 9))) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$2)).get(col2) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$2, col2);
              this$25.addOne__O__scm_ArrayBuffer(elem$2);
            }
            var ev$101 = ((1 + elem) | 0);
            elem = ev$101;
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
          if ((((x0$3 >= 9) || (col1 >= 9)) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$3)).get(col1) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col1);
              this$31.addOne__O__scm_ArrayBuffer(elem$3);
            }
            var ev$102 = ((1 + elem) | 0);
            elem = ev$102;
          }
          if ((((col2 >= 0) && ((x0$3 >= 9) || (col2 >= 9))) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(x0$3)).get(col2) === 0))) {
            if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(forbiddenPositions).contains__O__Z(elem))) {
              var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
              var elem$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(x0$3, col2);
              this$33.addOne__O__scm_ArrayBuffer(elem$4);
            }
            var ev$103 = ((1 + elem) | 0);
            elem = ev$103;
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
  var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text);
  var textLength = this$34.length;
  var i$5 = 0;
  while (true) {
    var x0$4 = i$5;
    var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
    if ((x0$4 < this$39.scm_ArrayBuffer__f_size0)) {
      matchResult34: {
        var \u03b47$___1;
        var \u03b47$___2;
        var x89 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions).apply__I__O(x0$4));
        if ((x89 !== null)) {
          var row = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x89)._1__O());
          var col$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x89)._2__O());
          var \u03b47$___1 = row;
          var \u03b47$___2 = col$1;
          break matchResult34;
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x89);
      }
      var row$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b47$___1);
      var col$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b47$___2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2)).set(col$2, 0);
    }
    if ((i$5 === 3)) {
      break;
    }
    i$5 = ((1 + i$5) | 0);
  }
  var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(7, (-1), 0, false);
  while (it.sci_RangeIterator__f__hasNext) {
    var this$46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b);
    var x0$5 = it.next__I();
    var elem$5 = (1 & (textLength >> x0$5));
    this$46.addOne__O__scm_Growable(elem$5);
  }
  var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_IndexedSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(b).result__O()));
  var lengthBits = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$47);
  var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lengthBits);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$49))).withFilter__F1__sc_WithFilter(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    return ((x$1$1 !== null) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O()), true));
  })))).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2);
    matchResult37: {
      if ((x$1$3 !== null)) {
        var bit$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
        var idx$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
        var posIdx = ((4 + idx$1) | 0);
        var this$50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
        if ((posIdx < this$50.scm_ArrayBuffer__f_size0)) {
          matchResult36: {
            var \u03b48$___1;
            var \u03b48$___2;
            var x95 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions).apply__I__O(posIdx));
            if ((x95 !== null)) {
              var row$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x95)._1__O());
              var col$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x95)._2__O());
              var \u03b48$___1 = row$1;
              var \u03b48$___2 = col$3;
              break matchResult36;
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x95);
          }
          var row$2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b48$___1);
          var col$2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b48$___2);
          if ((bit$1 === 1)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2$1)).set(col$2$1, 2);
            break matchResult37;
          } else {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2$1)).set(col$2$1, 0);
            break matchResult37;
          }
        } else {
          break matchResult37;
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
    }
  })));
  var this$103 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([12, 13, 14, 15, 16, 17, 18, 19])));
  var y = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  var $x_18 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(0, y);
  var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([20, 21, 22, 23, 41, 42, 43, 44])));
  var y$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
  var $x_17 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(1, y$1);
  var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([45, 46, 47, 48, 49, 50, 51, 52])));
  var y$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
  var $x_16 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(2, y$2);
  var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([53, 54, 55, 56, 57, 58, 59, 60])));
  var y$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$5);
  var $x_15 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(3, y$3);
  var elems$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([61, 62, 63, 64, 65, 66, 67, 68])));
  var y$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$6);
  var $x_14 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(4, y$4);
  var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([69, 70, 71, 72, 73, 74, 75, 76])));
  var y$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$7);
  var $x_13 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(5, y$5);
  var elems$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([77, 78, 79, 80, 81, 82, 83, 84])));
  var y$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$8);
  var $x_12 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(6, y$6);
  var elems$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([85, 86, 87, 88, 110, 111, 112, 113])));
  var y$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$9);
  var $x_11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(7, y$7);
  var elems$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([114, 115, 116, 117, 118, 119, 120, 121])));
  var y$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$10);
  var $x_10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(8, y$8);
  var elems$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([122, 123, 124, 125, 126, 127, 128, 129])));
  var y$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$11);
  var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(9, y$9);
  var elems$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([130, 131, 132, 133, 134, 135, 136, 137])));
  var y$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$12);
  var $x_8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(10, y$10);
  var elems$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([138, 139, 140, 141, 142, 143, 144, 145])));
  var y$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$13);
  var $x_7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(11, y$11);
  var elems$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([146, 147, 148, 149, 150, 151, 152, 153])));
  var y$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$14);
  var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(12, y$12);
  var elems$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([154, 155, 156, 157, 158, 159, 160, 161])));
  var y$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$15);
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(13, y$13);
  var elems$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([162, 163, 164, 165, 166, 167, 168, 169])));
  var y$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$16);
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(14, y$14);
  var elems$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([170, 171, 172, 173, 174, 175, 176, 177])));
  var y$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$17);
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(15, y$15);
  var elems$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([178, 179, 180, 181, 182, 183, 184, 185])));
  var y$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$18);
  var elems$19 = $x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_18, $x_17, $x_16, $x_15, $x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, $x_4, $x_3, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(16, y$16)]));
  var charPixelMap = this$103.from__sc_IterableOnce__sci_Map(elems$19);
  var encodedPixels = this.encodeTextToPixels__T__sci_Map__sci_Map(text, charPixelMap);
  var this$104 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(encodedPixels);
  var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3$1) => {
    var x$1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$3$1);
    return ((x$1$4 !== null) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$4)._1__O()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$4)._2__O()), true));
  }));
  var this$108 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_MapOps$WithFilter(this$104, p);
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4$1) => {
    var x$1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$4$1);
    matchResult40: {
      if ((x$1$5 !== null)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$5)._1__O());
        var filledPixels$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$5)._2__O());
        var this$105 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(filledPixels$1);
        var these = this$105;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
          var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
          var pixelIdx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x0$6);
          var this$106 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions);
          if ((pixelIdx < this$106.scm_ArrayBuffer__f_size0)) {
            matchResult39: {
              var \u03b49$___1;
              var \u03b49$___2;
              var x104 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataPositions).apply__I__O(pixelIdx));
              if ((x104 !== null)) {
                var row$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x104)._1__O());
                var col$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x104)._2__O());
                var \u03b49$___1 = row$3;
                var \u03b49$___2 = col$4;
                break matchResult39;
              }
              throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x104);
            }
            var row$2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b49$___1);
            var col$2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(\u03b49$___2);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid.get(row$2$2)).set(col$2$2, 2);
          }
          these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
        }
        break matchResult40;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$5);
    }
  }));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$108.filtered__sc_Iterable()).foreach__F1__V(f);
  var this$109 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allErrorCorrectionZones);
  var this$112 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_MapOps$$anon$1(this$109);
  var this$111 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var asIterable = this$111.s_$less$colon$less$__f_singleton;
  var this$113 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOps__flatMap__F1__O(this$112, asIterable)));
  var allZonePixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce(this$113));
  if (showErrorCorrection) {
    var this$114 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allZonePixels);
    var inactiveErrorCorrectionPixels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$114.removedAll__sc_IterableOnce__sci_SetOps(errorCorrectionPixels));
  } else {
    var this$115 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
    var elems$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([])));
    var inactiveErrorCorrectionPixels = this$115.from__sc_IterableOnce__sci_Set(elems$20);
  }
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-simulation");
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-grid");
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("display: grid; grid-template-columns: repeat(" + gridSize) + ", 24px); gap: 1px; background: #ccc; padding: 10px;"));
  var this$133 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().zipWithIndex$extension__O__AT2(grid);
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  capacity = 0;
  size = 0;
  jsElems = [];
  var i$6 = 0;
  while ((i$6 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
    var x1 = i$6;
    var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
    matchResult42: {
      var x0$16;
      if ((x0$7 !== null)) {
        var row$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$7)._1__O(), 1);
        var rowIdx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$7)._2__O());
        var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().zipWithIndex$extension__O__AT2(row$4);
        var f$1 = ((rowIdx, gridSize, showErrorCorrection, errorCorrectionPixels, inactiveErrorCorrectionPixels, showMetadata, darkRedPixels, lightRedPixels) => ((x$1$2$1) => {
          var x$1$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2$1);
          if ((x$1$6 !== null)) {
            var cellValue = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$6)._1__O());
            var colIdx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$6)._2__O());
            var isBlack = (cellValue > 0);
            var pixelNumber = ((Math.imul(rowIdx, gridSize) + colIdx) | 0);
            var bgColor = ((showErrorCorrection && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errorCorrectionPixels).contains__O__Z(pixelNumber)) ? "#00008B" : ((showErrorCorrection && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(inactiveErrorCorrectionPixels).contains__O__Z(pixelNumber)) ? "#87CEEB" : (showMetadata ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(darkRedPixels).contains__O__Z(pixelNumber) ? "#8b0000" : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lightRedPixels).contains__O__Z(pixelNumber) ? "#ff6666" : (isBlack ? "black" : "white"))) : (isBlack ? "black" : "white"))));
            var textColor = (((showMetadata && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(darkRedPixels).contains__O__Z(pixelNumber) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lightRedPixels).contains__O__Z(pixelNumber))) || (showErrorCorrection && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errorCorrectionPixels).contains__O__Z(pixelNumber) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(inactiveErrorCorrectionPixels).contains__O__Z(pixelNumber)))) ? "white" : (isBlack ? "white" : "gray"));
            var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
            var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
            var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((((("width: 24px; height: 24px; background: " + bgColor) + "; display: flex; align-items: center; justify-content: center; font-size: 8px; color: ") + textColor) + "; font-weight: bold; overflow: hidden;"));
            var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-pixel");
            var this$126 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
            var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
            return $x_23.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_21, $x_20, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$126, "", r)])));
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$6);
        }))(rowIdx, gridSize, showErrorCorrection, errorCorrectionPixels, inactiveErrorCorrectionPixels, showMetadata, darkRedPixels, lightRedPixels);
        var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).u.length;
        var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.getArrayOf().constr)(len);
        if ((len > 0)) {
          var i$7 = 0;
          if ((xs$1 !== null)) {
            while ((i$7 < len)) {
              var $x_24 = i$7;
              var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs$1).get(i$7);
              ys.set($x_24, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$8)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
            var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs$1, 1);
            while ((i$7 < len)) {
              var $x_25 = i$7;
              var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i$7);
              ys.set($x_25, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$9)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
            var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs$1, 1);
            while ((i$7 < len)) {
              var $x_26 = i$7;
              var x0$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i$7);
              ys.set($x_26, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$10)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
            var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs$1, 1);
            while ((i$7 < len)) {
              var $x_27 = i$7;
              var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i$7);
              var lo = t.RTLong__f_lo;
              var hi = t.RTLong__f_hi;
              ys.set($x_27, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
            var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs$1, 1);
            while ((i$7 < len)) {
              var $x_28 = i$7;
              var x0$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i$7);
              ys.set($x_28, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$11)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
            var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs$1, 1);
            while ((i$7 < len)) {
              var $x_29 = i$7;
              var x0$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i$7);
              ys.set($x_29, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$12))));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
            var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs$1, 1);
            while ((i$7 < len)) {
              var $x_30 = i$7;
              var x0$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i$7);
              ys.set($x_30, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$13)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
            var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs$1, 1);
            while ((i$7 < len)) {
              var $x_31 = i$7;
              var x0$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i$7);
              ys.set($x_31, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$14)));
              i$7 = ((1 + i$7) | 0);
            }
          } else if ((xs$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
            var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs$1, 1);
            while ((i$7 < len)) {
              var $x_32 = i$7;
              var x0$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i$7);
              ys.set($x_32, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(f$1(x0$15)));
              i$7 = ((1 + i$7) | 0);
            }
          } else {
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs$1);
          }
        }
        var x0$16 = ys;
        break matchResult42;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x0$7);
    }
    var elems$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(x0$16);
    var this$130 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(elems$21);
    var it$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_ArrayOps$ArrayIterator__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_ArrayOps$ArrayIterator(), this$130.scm_ArraySeq$ofRef__f_array);
    while (it$1.hasNext__Z()) {
      var elem$6 = it$1.next__O();
      var unboxedElem = ((elem$6 === null) ? null : elem$6);
      jsElems.push(unboxedElem);
    }
    i$6 = ((1 + i$6) | 0);
  }
  var modifiers = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.getArrayOf().constr)(jsElems);
  var asModifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((component) => {
    var component$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(component);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r$1);
    return component$1;
  }));
  var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$();
  return $x_39.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_38.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_37, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_36).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_35.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_34, $x_33, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$133, modifiers, asModifier, renderableSeq)])))])));
});
$c_Llivechart_Main$.prototype.ensureAllExercises__T__Llivechart_Main$ChapterData__Llivechart_Main$ChapterData = (function(chapter, data) {
  var allExercisesForChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_chapterExercises).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  }))));
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data).Llivechart_Main$ChapterData__f_exercises);
  var f = ((ex) => {
    var ex$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(ex);
    var self = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_task;
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(self, ex$1);
  });
  if ((this$5 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0 = this$5.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$5.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
    }
    var this$7 = h;
  }
  var exerciseMap = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$7);
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allExercisesForChapter);
  var f$1 = ((task) => {
    var task$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(task);
    return $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exerciseMap).getOrElse__O__F0__O(task$1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
      var answer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      return new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task$1, answer);
    }))));
  });
  if ((this$9 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var sortedExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0$2 = this$9.head__O();
    var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$9.tail__O());
    while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
      var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx$1;
      t$1 = nx$1;
      rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
    }
    var sortedExercises = h$1;
  }
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data);
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data);
  var chapter$1 = this$10.Llivechart_Main$ChapterData__f_chapter;
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data);
  var rating = this$11.Llivechart_Main$ChapterData__f_rating;
  return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, sortedExercises, rating);
});
$c_Llivechart_Main$.prototype.persistExerciseAnswer__T__T__T__V = (function(chapter, taskText, answer) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_allResponsesVar);
    var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
      var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
      var allTasksForChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_chapterExercises).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
      }))));
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTasksForChapter);
      var f = ((task) => {
        var task$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(task);
        var answer$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
        return new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task$1, answer$1);
      });
      if ((this$7 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var emptyExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0 = this$7.head__O();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$7.tail__O());
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
        }
        var emptyExercises = h;
      }
      var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
        return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, emptyExercises, rating);
      }))));
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing).Llivechart_Main$ChapterData__f_exercises);
      var f$1 = ((_$10) => {
        var _$10$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(_$10);
        return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$10$1).Llivechart_Main$ExerciseResponse__f_task === taskText);
      });
      var l = this$10;
      block: {
        var result;
        while (true) {
          if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
            var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
            break;
          } else {
            var h$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
            var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
            if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(h$1)) === true)) {
              l = t$1;
              continue;
            }
            var start = l;
            var remaining = t$1;
            while (true) {
              if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).isEmpty__Z()) {
                var result = start;
                break block;
              } else {
                var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
                if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(x)) !== true)) {
                  remaining = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).tail__O());
                  continue;
                }
                var firstMiss = remaining;
                var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                var toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).tail__O());
                var currentLast = newHead;
                while ((toProcess !== firstMiss)) {
                  var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem;
                  currentLast = newElem;
                  toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).tail__O());
                }
                var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(firstMiss).tail__O());
                var nextToCopy = next;
                while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).isEmpty__Z())) {
                  var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).head__O();
                  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$1(head)) !== true)) {
                    next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                  } else {
                    while ((nextToCopy !== next)) {
                      var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                      currentLast = newElem$2;
                      nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).tail__O());
                    }
                    nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                  }
                }
                if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).isEmpty__Z())) {
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = nextToCopy;
                }
                var result = newHead;
                break block;
              }
            }
          }
        }
      }
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
      var answer$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(answer);
      var elem = new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(taskText, answer$2);
      var updatedExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$13, elem));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
      var chapter$1 = this$14.Llivechart_Main$ChapterData__f_chapter;
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
      var rating$1 = this$15.Llivechart_Main$ChapterData__f_rating;
      var sortedChapter = this.ensureAllExercises__T__Llivechart_Main$ChapterData__Llivechart_Main$ChapterData(chapter, new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, updatedExercises, rating$1));
      this.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter, sortedChapter);
      var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$19.updated__O__O__sci_MapOps(chapter, sortedChapter));
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$20, mod);
  }
});
$c_Llivechart_Main$.prototype.saveToLocalStorage__T__Llivechart_Main$ChapterData__V = (function(chapter, data) {
  try {
    var completeData = this.ensureAllExercises__T__Llivechart_Main$ChapterData__Llivechart_Main$ChapterData(chapter, data);
    var $x_11 = JSON;
    var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_exercises);
    var f = ((ex) => {
      var ex$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(ex);
      var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_task;
      var $x_7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("task", s);
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_answer);
      var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
      var ev = this$4.s_$less$colon$less$__f_singleton;
      var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$5.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$5.get__O()));
      var fields = $x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_7, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer", s$1)]));
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
    });
    if ((this$10 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var seq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0 = this$10.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$10.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      var seq = h;
    }
    var _2 = [...$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq)];
    var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("exercises", _2);
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_understanding;
    var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("understanding", value);
    var value$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_difficulty;
    var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("difficulty", value$1);
    var value$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_quality;
    var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("quality", value$2);
    var value$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_scope;
    var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("scope", value$3);
    var s$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(completeData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_feedback;
    var fields$1 = $x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_5, $x_4, $x_3, $x_2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("feedback", s$2)]));
    var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
    var fields$2 = $x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_9, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("rating", _2$1)]));
    var $x_1 = $x_11.stringify($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2));
    var json = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1);
    window.localStorage.setItem(("qr-chapter-" + chapter), json);
  } catch (e) {
  }
});
$c_Llivechart_Main$.prototype.loadFromLocalStorage__T__s_Option = (function(chapter) {
  try {
    var stored = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(window.localStorage.getItem(("qr-chapter-" + chapter)));
    if ((stored !== null)) {
      var parsed = JSON.parse(stored);
      matchResult43: {
        var exercises;
        var arg = parsed.exercises;
        var x116 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(Array.isArray(arg));
        if ((x116 === true)) {
          var array = parsed.exercises;
          var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_WrappedArray(), array);
          var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$3));
          var f = ((ex) => {
            var answerValue = ex.answer;
            if (((answerValue === null) || ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answerValue)) === "null"))) {
              var answer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
            } else {
              var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answerValue));
              var answer = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
            }
            var task = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex.task));
            return new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task, answer);
          });
          if ((this$8 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
            break matchResult43;
          } else {
            var x0 = this$8.head__O();
            var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            var t = h;
            var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$8.tail__O());
            while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
              var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
              var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
              t = nx;
              rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
            }
            var exercises = h;
            break matchResult43;
          }
        }
        var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
        var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
      }
      var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.understanding));
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x));
      var understanding = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$12.isEmpty__Z() ? 0 : this$12.get__O()));
      var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.difficulty));
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$1));
      var difficulty = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$15.isEmpty__Z() ? 0 : this$15.get__O()));
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.quality));
      var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$2));
      var quality = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$18.isEmpty__Z() ? 0 : this$18.get__O()));
      var scopeValue = parsed.rating.scope;
      if (((scopeValue === null) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_BoxesRunTime$().equals__O__O__Z(scopeValue, (void 0)))) {
        var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.quality));
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$3));
        var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$21.isEmpty__Z() ? 0 : this$21.get__O()));
      } else {
        var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(scopeValue));
        var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(x$4));
        var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI((this$24.isEmpty__Z() ? 0 : this$24.get__O()));
      }
      var feedback = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_toString__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(parsed.rating.feedback));
      var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(understanding, difficulty, quality, scope, feedback);
      var value$1 = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises, rating);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$1);
    } else {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    }
  } catch (e) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
});
$c_Llivechart_Main$.prototype.dataToJsObject__sci_Map__sjs_js_Any = (function(data) {
  var fields = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  var jsObj = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung"]));
  var chapterOrder = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterOrder);
  var these = this$3;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
    var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
    var chapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data).get__O__s_Option(chapter));
    if ((!this$4.isEmpty__Z())) {
      var x0$1 = this$4.get__O();
      var chapterData = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0$1);
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_exercises);
      var f = ((ex) => {
        var ex$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(ex);
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_task;
        var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("task", s);
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex$1).Llivechart_Main$ExerciseResponse__f_answer);
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
        var ev = this$8.s_$less$colon$less$__f_singleton;
        var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$9.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$9.get__O()));
        var fields$1 = $x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("answer", s$1)]));
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
      });
      if ((this$14 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var seq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$2 = this$14.head__O();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$14.tail__O());
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
        }
        var seq = h;
      }
      var exercises = [...$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq)];
      var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_understanding;
      var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("understanding", value);
      var value$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_difficulty;
      var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("difficulty", value$1);
      var value$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_quality;
      var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("quality", value$2);
      var value$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_scope;
      var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("scope", value$3);
      var s$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapterData).Llivechart_Main$ChapterData__f_rating).Llivechart_Main$RatingData__f_feedback;
      var fields$2 = $x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_6, $x_5, $x_4, $x_3, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("feedback", s$2)]));
      var rating = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$2);
      var fields$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("chapter", chapter), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("exercises", exercises), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("rating", rating)]));
      jsObj[chapter] = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$3);
    }
    these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
  }
  return jsObj;
});
$c_Llivechart_Main$.prototype.appElement__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_215 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_214 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_213 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("app-container");
  var $x_212 = this.renderMenu__Lcom_raquo_laminar_nodes_ReactiveElement();
  var $x_211 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_210 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_209 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("main-content");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$160 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_currentHashVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((h) => {
    var h$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(h);
    var hash = ((h$1 === null) ? "" : h$1);
    if ((hash === "#nachricht")) {
      var showInfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var showAsciiInfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var $x_94 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_93 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_92 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_91 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_90 = $x_92.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_91.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$2, "Nachrichten schreiben", r)])));
      var $x_89 = this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(70);
      var $x_88 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("nachricht-section");
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["pixel", "schwarz", "wei\u00df"]));
      var $x_87 = this$3.from__sc_IterableOnce__sci_Set(elems);
      var value = this.generateQRCode__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("Hallo Welt", 200);
      var $x_86 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
      var value$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showInfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$5, true);
      }));
      var $x_85 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe, wie ein QR-Code aufgebaut ist. Vermute, wie die Daten im QR-Code dargestellt werden.", $x_87, 1, $x_86, "nachricht", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$1));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showInfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show) => {
        var show$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show);
        return (show$1 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Kodierung", "Eine Kodierung ist eine Vorschrift, wie Informationen (z.B. Buchstaben) in eine andere Form (z.B. Pixel) umgewandelt werden. Bei QR-Codes werden Buchstaben in schwarze und wei\u00dfe Pixel kodiert. Jeder Buchstabe bekommt dabei ein bestimmtes Muster. Wichtig ist, dass die Kodierung eindeutig ist: Jeder Buchstabe muss ein eindeutiges Muster haben, damit man die Nachricht sp\u00e4ter wieder dekodieren kann.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$8, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_84 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var encodingPatternVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector0$()));
      var $x_83 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_82 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_80 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_79 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_78 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_77 = $x_79.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_78.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "Aufgabe 2", r$1)])));
      var $x_76 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_75 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_74 = $x_76.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_75.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$12, "\u00dcberlege dir eine eigene Kodierung f\u00fcr die Buchstaben 'B', 'e', 't'. Nutze die Pixel, um deine Kodierung darzustellen.", r$2)])));
      var $x_73 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; align-items: center; gap: 10px;");
      var $x_70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; flex-direction: column; gap: 4px; font-size: 24px; font-weight: bold;");
      var $x_67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_65 = $x_67.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_66.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$13, "B", r$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("height: 28px; line-height: 28px;")])));
      var $x_64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_63 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_62 = $x_64.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_63.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$14, "e", r$4), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("height: 28px; line-height: 28px;")])));
      var $x_61 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_59 = $x_81.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_80.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_77, $x_74, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_73).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_72.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_71, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_70).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_69.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_68, $x_65, $x_62, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_61).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_60.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$15, "t", r$5), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("height: 28px; line-height: 28px;")])))]))), this.renderPixelAreaWithSave__I__I__T__Lcom_raquo_airstream_state_Var__T__T__Lcom_raquo_laminar_nodes_ReactiveElement(10, 3, "Eigene Kodierung", encodingPatternVar, "nachricht", "Erstelle eine eigene Kodierung f\u00fcr die Buchstaben B, e, t (je 8 Pixel).")])))])));
      var $x_58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_54 = $x_56.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_55.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "Aufgabe 3", r$6)])));
      var $x_53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_51 = $x_83.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_82.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_59, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_58).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_57.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_54, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_53).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_52.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung aus Aufgabe 2.", r$7)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; align-items: center; gap: 10px;"), this.renderPixelAreaWithValidation__I__I__T__Lcom_raquo_airstream_state_Var__I__T__T__Lcom_raquo_laminar_nodes_ReactiveElement(10, 4, "Wort 'Bett' mit eigener Kodierung", encodingPatternVar, 1, "nachricht", "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung.")])))])))])));
      var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["eindeutig", "speichern", "pixel"]));
      var $x_50 = this$18.from__sc_IterableOnce__sci_Set(elems$1);
      var $x_49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      var value$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showAsciiInfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$19, true);
      }));
      var $x_48 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erkl\u00e4re die Nachteile einer eigenen, nicht standardisierten Kodierung.", $x_50, 4, $x_49, "nachricht", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$2));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showAsciiInfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$2) => {
        var show$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$2);
        return (show$3 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("ASCII als Standard", "ASCII ist ein verbreiteter Standard, bei dem jeder Buchstabe einer eindeutigen 7- oder 8-Bit-Kombination zugeordnet ist. Das verhindert Mehrdeutigkeiten, erleichtert das gemeinsame Verst\u00e4ndnis und f\u00fchrt dazu, dass die Kodierung nicht \u00fcbergeben werden muss, da diese bekannt ist.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$22, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("A", "01000001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("B", "01000010"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("C", "01000011"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("D", "01000100"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("E", "01000101"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("F", "01000110"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("G", "01000111"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("H", "01001000"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("I", "01001001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("J", "01001010"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("K", "01001011"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("L", "01001100"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("M", "01001101"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("N", "01001110"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("O", "01001111"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("P", "01010000"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Q", "01010001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("R", "01010010"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("S", "01010011"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("T", "01010100"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("U", "01010101"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("V", "01010110"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("W", "01010111"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("X", "01011000"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Y", "01011001"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Z", "01011010")]));
      var asciiTable = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
      var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_42 = $x_44.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_43.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$51, "Aufgabe 5", r$8)])));
      var $x_41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_39 = $x_41.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_40.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$52, "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle. Rechts siehst du die ASCII-Tabelle, links kodierst du jeden Buchstaben (0 = wei\u00df, 1 = schwarz).", r$9)])));
      var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("aufgabe5-container");
      var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["I", "N", "F", "O", "R", "M", "A", "T", "I", "K"]));
      var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
      var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["01001001", "01001110", "01000110", "01001111", "01010010", "01001101", "01000001", "01010100", "01001001", "01001011"]));
      var $x_34 = this.renderPixelAreaWithLabels__I__I__T__sci_List__sci_List__T__T__Lcom_raquo_laminar_nodes_ReactiveElement(8, 10, "Buchstaben zum kodieren", $x_35, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4), "nachricht", "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle.");
      var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).table__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("ascii-table aufgabe5-ascii-table");
      var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).thead__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tr__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).th__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_24 = $x_26.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_25.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$55, "Buchstabe", r$10)])));
      var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).th__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_21 = $x_30.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_28).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_24, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_23).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$56, "ASCII (8 Bit)", r$11)])))])))])));
      var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tbody__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var this$59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(asciiTable);
      var f = ((x$1) => {
        var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
        if ((x$1$1 !== null)) {
          var ch = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
          var bits = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
          var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tr__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var this$57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var r$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
          var $x_14 = $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$57, ch, r$12)])));
          var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag();
          var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var this$58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var r$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
          return $x_18.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_17.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_13).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$58, bits, r$13)])))])));
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
      });
      if ((this$59 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0 = this$59.head__O();
        var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h$2;
        var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$59.tail__O());
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
        }
        var nodes = h$2;
      }
      var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
      var $x_11 = $x_46.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_45.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_42, $x_39, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_38).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_37.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_36, $x_34, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_33).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_32.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_31, $x_21, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_20).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$60, nodes, renderableSeq)])))])))])))])));
      var this$61 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["256", "vorteil", "eindeutig"]));
      var $x_10 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erl\u00e4utere Vorteile der festen L\u00e4nge von 8 Pixeln pro Buchstabe. Wie viele verschiedene Zeichen k\u00f6nnen mit 8 Pixeln dargestellt werden?", this$61.from__sc_IterableOnce__sci_Set(elems$5), 6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_9 = this.renderQRCodeExercise__I__T__T__Lcom_raquo_laminar_nodes_ReactiveElement(7, "Verschl\u00fcssele eine Nachricht mit QR-Code.", "Als n\u00e4chstes \u00fcberf\u00fchren wir das Gelernte in eine QR-Code Darstellung. Daf\u00fcr schauen wir uns an, wie Nachrichten in QR-Codes dargestellt werden. Gib eine Nachricht ein und beobachte, wie diese als QR-Code in Pixel umgewandelt wird. Jeder Buchstabe wird dabei in 8 Bits (seine ASCII-Kodierung) \u00fcbersetzt und f\u00e4rbt entsprechende Pixel schwarz.");
      var this$62 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["ascii", "pixel"]));
      var $x_8 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erkl\u00e4re, was dir bei der QR-Code Darstellung aufgefallen ist. Gehe dabei auf folgende Fragen ein: Wie wird ein Buchstabe in Pixel umgewandelt? Wie bilden sich die W\u00f6rter? Gibt es Beschr\u00e4nkungen?", this$62.from__sc_IterableOnce__sci_Set(elems$6), 8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$63 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["8"]));
      var $x_7 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erkl\u00e4re, anhand welcher Merkmale sich erkennen l\u00e4sst, wo bei einer Pixelabbildung ein neuer Buchstabe beginnt.", this$63.from__sc_IterableOnce__sci_Set(elems$7), 9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var showQRFixedAreasInfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["position", "fest", "fixiert", "erkennung"]));
      var $x_4 = this$64.from__sc_IterableOnce__sci_Set(elems$8);
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      var value$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showQRFixedAreasInfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$65, true);
      }));
      var $x_2 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe, welche Bereiche des QR-Codes festgelegt sind und nicht ver\u00e4ndert werden.", $x_4, 10, $x_3, "nachricht", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$3));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showQRFixedAreasInfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$3$1) => {
        var show$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$3$1);
        return (show$4 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Festgelegte Bereiche im QR-Code", "Ein QR-Code hat mehrere festgelegte Bereiche, die f\u00fcr die Erkennung und Dekodierung essentiell sind. Die drei Positionsmarker (auch Position Detection Patterns genannt) befinden sich in den drei Ecken des QR-Codes und sind 7\u00d77 Pixel gro\u00dfe Quadrate mit einem schwarzen 3x3 Quadrat im Inneren. Sie erm\u00f6glichen es Scannern, die Ausrichtung und Lage des QR-Codes zu erkennen. Die Timing Pattern sind abwechselnde schwarze und wei\u00dfe Bereiche, die sich horizontal und vertikal an bestimmten Stellen im QR-Codes befinden. Diese helfen, die Gr\u00f6\u00dfe und Position der einzelnen Pixel zu bestimmen. Diese beiden festgelegten Bereiche d\u00fcrfen nie mit Daten \u00fcberschrieben werden, da diese daf\u00fcr sorgen, dass ein QR-Code \u00fcberhaupt von einer Kamera erkannt werden kann. Weiterhin gibt es am Anfang der Nachricht noch einen festen Bereich, der die L\u00e4nge der Nachricht kodiert. Hier wird in 8 Bits angegeben, wie viele Zeichen die Nachricht hat.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$68, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_1 = $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
      var this$70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["ascii", "kodierung", "nachricht", "l\u00e4nge", "position"]));
      return $x_94.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_93.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_90, $x_89, $x_88, $x_85, $x_84, $x_51, $x_48, $x_47, $x_11, $x_10, $x_9, $x_8, $x_7, $x_1, this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erkl\u00e4re einem Mitsch\u00fcler, wie eine Nachricht in einen QR-Code geschrieben wird.", this$70.from__sc_IterableOnce__sci_Set(elems$9), 11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "nachricht", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("nachricht"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#nachricht")])));
    } else if ((hash === "#maskierung")) {
      var showMaskierungInfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var showMaskierungAufgabe4InfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var showMaskierungAufgabe6InfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var showMaskierungAufgabe8InfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var $x_120 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_119 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_118 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_117 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_116 = $x_118.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_117.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$71, "Maskierung", r$14)])));
      var $x_115 = this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(45);
      var this$72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["unlesbar", "schwarze"]));
      var $x_114 = this$72.from__sc_IterableOnce__sci_Set(elems$10);
      var value$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("/qr-unlesbar.png"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Unlesbar QR-Code"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("300"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("300")])));
      var $x_113 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$4);
      var value$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$74 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungInfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$74, true);
      }));
      var $x_112 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Versuche den QR-Code zu scannen und stelle begr\u00fcndete Vermutungen dazu an.", $x_114, 1, $x_113, "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$5));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$77 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungInfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$4$1) => {
        var show$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$4$1);
        return (show$5 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Maskierung im QR-Code", "Wie du vielleicht bemerkt hast, war der QR-Code schwer zu scannen. Um dies zu verhindern, werden nach einem bestimmten Muster die einzelnen Pixel umgef\u00e4rbt. Diesen Prozess nennt man Maskierung. Die Maskierung sorgt daf\u00fcr, dass der QR-Code besser lesbar ist und von Scannern zuverl\u00e4ssiger erkannt werden kann.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$77, project$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_111 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var $x_110 = this.renderMaskierungAufgabe__Lcom_raquo_laminar_nodes_ReactiveElement();
      var $x_109 = this.renderMaskierungAufgabe3__Lcom_raquo_laminar_nodes_ReactiveElement();
      var this$79 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      var $x_108 = this$79.from__sc_IterableOnce__sci_Set(elems$11);
      var $x_107 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      var value$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$80 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungAufgabe4InfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$80, true);
      }));
      var $x_106 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erl\u00e4utere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zus\u00e4tzlich eine m\u00f6gliche L\u00f6sung, um diese Probleme zu umgehen.", $x_108, 4, $x_107, "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$6));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$84 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungAufgabe4InfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$5$1) => {
        var show$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$5$1);
        return (show$6 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Mehrere Masken in QR-Codes", "Um das Problem einer festen Maske zu l\u00f6sen, werden in QR-Codes 8 verschiedene Masken nacheinander angewandt. Daraufhin wird jeweils bewertet, welche Maske den gr\u00f6\u00dften Kontrast zwischen schwarzen und wei\u00dfen Pixeln generiert. Zus\u00e4tzlich werden andere Kriterien, wie das Vermeiden des Timingpatterns, ber\u00fccksichtigt. Die Maske die am Besten alle Kriterien erf\u00fcllt, wird ausgew\u00e4hlt. Diese Maske wird anschlie\u00dfend auf den QR-Code angewandt. Dadurch wird sichergestellt, dass der QR-Code optimal lesbar ist. Die verschiedenen Masken sind im Bild dargestellt. Unter jeder Maske steht hierbei die Berechnungsvorschrift, die angibt, welche Pixel umgef\u00e4rbt werden. Das \"%\" Zeichen steht hierbei f\u00fcr den Modulo-Operator - also den Rest einer Division.", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some("/qr-masken.png")) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$84, project$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_105 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var this$86 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      var $x_104 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erkl\u00e4re die Berechnungsvorschrift einer Maske deiner Wahl.", this$86.from__sc_IterableOnce__sci_Set(elems$12), 5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "maskierung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$87 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      var $x_103 = this$87.from__sc_IterableOnce__sci_Set(elems$13);
      var $x_102 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      var value$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$88 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungAufgabe6InfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$88, true);
      }));
      var $x_101 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Vermute, woher der Scanner wei\u00df, welche Maske angewandt wurde.", $x_103, 6, $x_102, "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$7));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$91 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungAufgabe6InfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$6$1) => {
        var show$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$6$1);
        return (show$7 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Metadaten in QR-Codes", "Der Scanner wei\u00df deshalb, welche Maske angewandt wurde, weil Metadaten (Daten \u00fcber die Daten) auch in Form von Pixeln an bestimmten Stellen im QR-Code festgehalten werden. Zu diesen Metadaten z\u00e4hlt unter anderem die Nummer der verwendeten Maske. Diese Information wird an spezifischen Positionen im QR-Code kodiert, damit der Scanner diese auslesen und die entsprechende Maske r\u00fcckg\u00e4ngig machen kann, um die urspr\u00fcnglichen Daten zu rekonstruieren. Weitere Metadaten sind beispielsweise die verwendete Fehlerkorrektur-Stufe und die Versionsnummer des QR-Codes.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$91, project$5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_100 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var $x_99 = this.renderMaskierungAufgabe7__Lcom_raquo_laminar_nodes_ReactiveElement();
      var this$93 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Daten"]));
      var $x_98 = this$93.from__sc_IterableOnce__sci_Set(elems$14);
      var $x_97 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      var value$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$94 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungAufgabe8InfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$94, true);
      }));
      var $x_96 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkl\u00e4re, wof\u00fcr diese Eigenschaft n\u00fctzlich sein k\u00f6nnte.", $x_98, 8, $x_97, "maskierung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$8));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$97 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showMaskierungAufgabe8InfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$7$1) => {
        var show$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$7$1);
        return (show$8 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Vorteile der XOR-Operation", "Die Tatsache, dass die XOR-Operation ihre eigene Umkehrfunktion ist, ist sehr praktisch. Dies f\u00fchrt dazu, dass durch 2-maliges Anwenden der gleichen Maske die urspr\u00fcnglichen Daten wiederhergestellt werden. Der Scanner muss dadurch keine zwei verschiedenen Funktionen implementieren - eine zum Maskieren und eine zum Demaskieren. Stattdessen kann er einfach die gleiche XOR-Funktion ein zweites Mal anwenden. Dies spart Speicherplatz und reduziert Komplexit\u00e4t. Diese Eigenschaft macht XOR zu einer effizienten Wahl f\u00fcr die Maskierung in QR-Codes. ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$97, project$6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_95 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var this$99 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      return $x_120.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_119.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_116, $x_115, $x_112, $x_111, $x_110, $x_109, $x_106, $x_105, $x_104, $x_101, $x_100, $x_99, $x_96, $x_95, this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Fasse in eigenen Worten zusammen, warum die Maskierung ein wichtiger Teil des QR-Code-Systems ist. Erl\u00e4utere dabei an einem Beispiel, wie die Maskierung und Demaskierung funktioniert.", this$99.from__sc_IterableOnce__sci_Set(elems$15), 9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "maskierung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("maskierung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#maskierung")])));
    } else if ((hash === "#fehlerkorrektur")) {
      var $x_159 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_158 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_157 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_156 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$100 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_155 = $x_157.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_156.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$100, "Fehlerkorrektur", r$15)])));
      var $x_154 = this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(45);
      var showFehlerkorrekturAufgabe2InfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var showFehlerkorrekturAufgabe3InfoVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var $x_153 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_152 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$101 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Sticker", "lesbar"]));
      var $x_151 = this$101.from__sc_IterableOnce__sci_Set(elems$16);
      var $x_150 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_149 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_148 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; gap: 20px; justify-content: center; align-items: flex-start;");
      var $x_147 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_146 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_145 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center;");
      var $x_144 = this.imageWithFallback__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("qr-mitfehler", "QR-Code mit Stickern", 220);
      var $x_143 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_142 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$102 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_141 = $x_147.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_146.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_145, $x_144, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_143).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_142.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$102, "QR-Code mit Stickern", r$16)])))])));
      var $x_140 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_139 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_138 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center;");
      var $x_137 = this.imageWithFallback__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("qr-ohnefehler", "QR-Code ohne Sticker", 220);
      var $x_136 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_135 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$103 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var value$9 = $x_150.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_149.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_148, $x_141, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_140).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_139.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_138, $x_137, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_136).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_135.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$103, "QR-Code ohne Sticker", r$17)])))])))])));
      var $x_134 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Hin und wieder kommt es vor, dass Leute Sticker auf QR-Codes kleben, welche in der \u00d6ffentlichkeit zu sehen sind. Vergleiche die beiden QR-Codes. Vermute, welcher der beiden QR-Codes durch einen Scanner gelesen werden kann. Begr\u00fcnde deine Vermutung.", $x_151, 1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$9), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$105 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["lesbar"]));
      var $x_133 = this$105.from__sc_IterableOnce__sci_Set(elems$17);
      var $x_132 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      var value$10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$106 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showFehlerkorrekturAufgabe2InfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$106, true);
      }));
      var $x_131 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Versuche nun beide QR-Codes zu scannen. Beschreibe deine Beobachtungen.", $x_133, 2, $x_132, "fehlerkorrektur", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$10));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$109 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showFehlerkorrekturAufgabe2InfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$8$1) => {
        var show$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$8$1);
        return (show$9 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Hinweis zur Fehlerkorrektur", "Wie dir vielleicht aufgefallen ist, konnte der QR-Code mit den Stickern trotzdem gescannt werden. Wie genau das m\u00f6glich ist und welche Grenzen es dabei gibt, schauen wir uns im Folgenden an. Daf\u00fcr gehen wir erst einmal weg von QR-Codes und betrachten ein einfaches Beispiel einer Textnachricht. ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$109, project$7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_130 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var this$111 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      var $x_129 = this$111.from__sc_IterableOnce__sci_Set(elems$18);
      var $x_128 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      var value$11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$112 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showFehlerkorrekturAufgabe3InfoVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$112, true);
      }));
      var $x_127 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider hast du dich bei der Hausnummer verschrieben und statt 23 steht dort 32.", $x_129, 3, $x_128, "fehlerkorrektur", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$11));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$115 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showFehlerkorrekturAufgabe3InfoVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$9$1) => {
        var show$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$9$1);
        return (show$10 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Fehlertypen erkennen", "Es gibt zwei Haupttypen von Fehlern: Ausfallsfehler (auch L\u00f6schfehler genannt): Ein Zeichen wird vollst\u00e4ndig entfernt oder ist unlesbar. Substitutionsfehler: Ein Zeichen wird durch ein anderes ersetzt. Substitutionsfehler sind oft schwieriger zu erkennen, da der Text syntaktisch korrekt bleibt, aber semantisch falsch ist. Durch Redundanz (zus\u00e4tzliche Informationen) k\u00f6nnen beide Fehlertypen erkannt und teilweise korrigiert werden.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$115, project$8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_126 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
      var this$117 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Ausfallsfehler"]));
      var $x_125 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Eine M\u00f6glichkeit mit Fehlern umzugehen ist es, eine Pr\u00fcfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gez\u00e4hlt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel w\u00e4re, dass die Zeichenanzahl gez\u00e4hlt wird. Aus der Nachricht 'Hallo' w\u00fcrde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt oder korrigiert werden k\u00f6nnen. Begr\u00fcnde deine Antwort.", this$117.from__sc_IterableOnce__sci_Set(elems$19), 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$118 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["1234512345"]));
      var $x_124 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden k\u00f6nnen am Beispiel der Nachricht '12345'. (Tipp: \u00dcberlege dir, was du machst, wenn eine Information von einer Person im Gespr\u00e4ch nicht verstanden wurde.)", this$118.from__sc_IterableOnce__sci_Set(elems$20), 5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$119 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["50", "66", "90"]));
      var $x_123 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein d\u00fcrfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Urspr\u00fcngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Urspr\u00fcngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Urspr\u00fcngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'", this$119.from__sc_IterableOnce__sci_Set(elems$21), 6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_122 = this.renderFehlerkorrekturLueckentext__Lcom_raquo_laminar_nodes_ReactiveElement();
      var $x_121 = this.renderQRCodeExerciseWithMetadata__I__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement(8, "fehlerkorrektur", "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zus\u00e4tzlich die Metadaten in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$120 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      return $x_159.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_158.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_155, $x_154, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_153).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_152.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_134, $x_131, $x_130, $x_127, $x_126, $x_125, $x_124, $x_123, $x_122, $x_121, this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erkl\u00e4re in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zus\u00e4tzlichen Daten und dem Korrekturlevel ein. Erl\u00e4utere zus\u00e4tzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird.", this$120.from__sc_IterableOnce__sci_Set(elems$22), 9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "fehlerkorrektur", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())]))), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("fehlerkorrektur"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#fehlerkorrektur")])));
    } else if ((hash === "#anwendung")) {
      var $x_171 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_170 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_169 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_168 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$121 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_167 = $x_169.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_168.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$121, "Anwendung", r$18)])));
      var $x_166 = this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(45);
      var this$122 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["sinnvoll"]));
      var $x_165 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begr\u00fcnde jeweils kurz.", this$122.from__sc_IterableOnce__sci_Set(elems$23), 1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$123 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Schule", "Ziel", "Platzierung"]));
      var $x_164 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung.", this$123.from__sc_IterableOnce__sci_Set(elems$24), 2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$124 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Vorteil", "Nachteil"]));
      var $x_163 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Die Schulleitung \u00fcberlegt, wie man erfassen k\u00f6nnte, welche Sch\u00fcler das Gel\u00e4nde verlassen. Momentan wird daf\u00fcr eine Lehrkraft eingesetzt, welche sich die Hausaufgabenhefte zeigen l\u00e4sst. \nIn dem Hausaufgabenheft werden Name und Geburtsdatum des Sch\u00fclers \u00fcberpr\u00fcft. Ein Sch\u00fcler darf das Gel\u00e4nde verlassen, wenn er \u00fcber 16 Jahre alt ist. \nErl\u00e4utere je 2 Vor- und Nachteile dieser Methode.", this$124.from__sc_IterableOnce__sci_Set(elems$25), 3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$125 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      var $x_162 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erl\u00e4utere, wie du den Sachverhalt aus Aufgabe 3 mit einem QR-Code l\u00f6sen w\u00fcrdest. Gehe dabei auch darauf ein, welche Daten im QR-Code gespeichert werden m\u00fcssen.", this$125.from__sc_IterableOnce__sci_Set(elems$26), 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$126 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      var $x_161 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Nimm begr\u00fcndet Stellung zum Nutzen von QR-Codes im Anwendungsfall von Aufgabe 3.", this$126.from__sc_IterableOnce__sci_Set(elems$27), 5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$127 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      var $x_160 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Eine Lehrkraft \u00e4u\u00dfert Bedenken dar\u00fcber, dass Sch\u00fcler zum einen die QR-Codes manipulieren k\u00f6nnten, um falsche Daten zu speichern. Zum anderen bef\u00fcrchtet die Lehrkraft, dass die QR-Codes nach einem Jahr verschmutzen oder besch\u00e4digt sind, da das Lesen eines QR-Codes nicht mehr m\u00f6glich ist, wenn schon ein Pixel umgef\u00e4rbt ist.  \nErl\u00e4utere, wie du auf diese Bedenken reagierst. Begr\u00fcnde deine Antworten.", this$127.from__sc_IterableOnce__sci_Set(elems$28), 6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var this$128 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      return $x_171.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_170.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_167, $x_166, $x_165, $x_164, $x_163, $x_162, $x_161, $x_160, this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Um das Speichern der Daten einmal auszuprobieren, erstelle einen QR-Code mit deinen Daten (Du kannst dir daf\u00fcr nat\u00fcrlich auch welche ausdenken). \nGehe daf\u00fcr auf die Webseite 'https://www.qrcode-generator.de/' und w\u00e4hle dort den Typ 'VCard' aus. F\u00fclle die Informationen aus. \n\u00dcberpr\u00fcfe, ob der QR-Code funktioniert, indem du ihn mit deinem Smartphone scannst. Wenn alles funktioniert hat, kannst du dir den QR-Code als Bild speichern, ausdrucken und in deine Handyh\u00fclle legen. \nBeschreibe, welche Daten du au\u00dferdem in einer VCard speichern k\u00f6nntest und welche Vorteile dies hat.", this$128.from__sc_IterableOnce__sci_Set(elems$29), 7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("anwendung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#anwendung")])));
    } else if ((hash === "#zusammenfassung")) {
      var $x_192 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_191 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_190 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_189 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$129 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_188 = $x_190.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_189.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$129, "Zusammenfassung", r$19)])));
      var $x_187 = this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(60);
      var zusammenfassungMessageVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
      var generatedQrTextVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_186 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_185 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_184 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; margin-bottom: 2rem;");
      var $x_183 = this.renderQRCodeExerciseWithMetadata__I__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement(1, "fehlerkorrektur", "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zus\u00e4tzlich die Metadaten in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Durch einen Klick auf 'Maske anwenden' wird die Maske auf den QR-Code angewandt. Teste verschiedene Eingaben und \u00fcberpr\u00fcfe das Ergebnis mit einem QR-Code Scanner.", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(zusammenfassungMessageVar));
      var $x_182 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_181 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$132 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_180 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$132, "Maske anwenden", r$20);
      var $x_179 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 1rem 2rem; background-color: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1rem;");
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
      var this$141 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
      var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$11) => {
        var this$134 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(zusammenfassungMessageVar);
        var this$135 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$134.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var current = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$135.tryNow__s_util_Try()).get__O())));
        var this$138 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current);
        if ((!(this$138 === ""))) {
          var this$140 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(generatedQrTextVar);
          var value$12 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(current);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$140, value$12);
        }
      }));
      var $x_178 = $x_182.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_181.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_180, $x_179, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$141, onNext)])));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$144 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(generatedQrTextVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
        var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2);
        if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
          var txt = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
          var $x_177 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_176 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_175 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;");
          var $x_174 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h4__Lcom_raquo_laminar_tags_HtmlTag();
          var $x_173 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var this$142 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var r$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
          return $x_177.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_176.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_175, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_174).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_173.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$142, "Generierter QR-Code", r$21)]))), this.generateQRCode__T__I__Lcom_raquo_laminar_nodes_ReactiveElement(txt, 220)])));
        }
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
        if ((x === x$1$3)) {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
      }));
      var childSource$9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$144, project$9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_172 = $x_186.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_185.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_184, $x_183, $x_178, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
      var this$146 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      return $x_192.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_191.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_188, $x_187, $x_172, this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Erkl\u00e4re anhand von Aufgabe 1, wie genau der QR-Code erstellt wird. Gehe dabei auf die einzelnen Schritte ein, die notwendig sind, um aus einer Nachricht einen QR-Code zu generieren.", this$146.from__sc_IterableOnce__sci_Set(elems$30), 2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "anwendung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.renderZusammenfassungQuiz__Lcom_raquo_laminar_nodes_ReactiveElement(), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("zusammenfassung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#zusammenfassung")])));
    } else {
      var $x_208 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_207 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_206 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_205 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$147 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_204 = $x_206.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_205.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$147, "Einleitung", r$22)])));
      var $x_203 = this.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement(15);
      var $x_202 = this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Einleitung", "Du kennst das bestimmt, dass du mit deinem Smartphone kurz einen QR-Code scannst und  anschlie\u00dfend zu einer Webseite weitergeleitet wirst. Doch was genau passiert dabei? F\u00fcr welche Anwendungen ist es sinnvoll einen QR-Code zu nutzen und f\u00fcr welche nicht? Die Antworten auf diese Fragen findest du in den folgenden Kapiteln, welche du auf der linken Seite ausw\u00e4hlen kannst. In der rechten oberen Ecke findest du jeweils eine Zeitabsch\u00e4tzung, wie lange das Kapitel dauert.\nViel Spa\u00df!", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_201 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_200 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var showInfoBoxVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
      var $x_199 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_198 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$148 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["qr"]));
      var $x_197 = this$148.from__sc_IterableOnce__sci_Set(elems$31);
      var value$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-codes-grid"), this.generateQRCodeWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("https://example.com", "Beispiel QR-Code 1", 150), this.imageWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("/qr-example.png", "Beispiel QR-Code 2", 150), this.generateQRCodeWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement("Benutze das Wort: QRCode in deiner Abgabe", "Beispiel QR-Code 3", 150)])));
      var $x_196 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$13);
      var value$14 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var this$150 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showInfoBoxVar);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$150, true);
      }));
      var $x_195 = this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Scanne die QR-Codes und beschreibe deren Inhalte. Beschreibe zus\u00e4tzlich die Gemeinsamkeiten.", $x_197, 1, $x_196, "einfuehrung", new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$14));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
      var this$153 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showInfoBoxVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
      var project$10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show$10$1) => {
        var show$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show$10$1);
        return (show$11 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Informationen zur Bearbeitung", "Durch das Klicken auf den \"Abgeben\" Button bei den Aufgaben werden deine Antworten lokal in deinem Browser gespeichert. Dieser f\u00e4rbt sich gr\u00fcn, wenn alle Schl\u00fcsselw\u00f6rter, welche gefordert waren, im Text vorhanden sind. Ansonsten f\u00e4rbt er sich rot. Zus\u00e4tzlich gibt es im Arbeitsheft immer wieder Informationsboxen, welche nach dem Klicken des \"Abgeben\" Buttons angezeigt werden. ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
      }));
      var childSource$10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$153, project$10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
      var $x_194 = $x_199.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_198.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_195, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
      var elems$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("QR-Codes haben eine feste Gr\u00f6\u00dfe.", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("QR-Codes k\u00f6nnen ausschlie\u00dflich Links speichern.", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Man kann sich bei der Erstellung eines QR-Codes den Text selbst aussuchen.", true)]));
      var $x_193 = this.renderExerciseMC__T__sci_List__I__T__Lcom_raquo_laminar_nodes_ReactiveElement("Welche Aussage trifft auf QR-Codes zu?", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$32), 2, "einfuehrung");
      var this$159 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
      var elems$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
      return $x_208.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_207.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_204, $x_203, $x_202, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_201).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_200.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_194, $x_193, this.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Beschreibe, welche Vorstellungen du davon hast, wie QR-Codes funktionieren.", this$159.from__sc_IterableOnce__sci_Set(elems$33), 3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), "einfuehrung", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$())]))), this.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement("einfuehrung"), this.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement("#einfuehrung")])));
    }
  }));
  var childSource$11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$160, project$11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_215.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_214.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_213, $x_212, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_211).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_210.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_209, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource$11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])))])));
});
$c_Llivechart_Main$.prototype.renderPixelAreaWithSave__I__I__T__Lcom_raquo_airstream_state_Var__T__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(cols, rows, title, savedPattern, chapter, taskText) {
  var total = Math.imul(cols, rows);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskText);
    var $x_1 = (!(this$6 === ""));
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.loadFromLocalStorage__T__s_Option(chapter));
    if (this$7.isEmpty__Z()) {
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0 = this$7.get__O();
      var _$12 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$12).Llivechart_Main$ChapterData__f_exercises);
      _return: {
        var these = this$8;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
          var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
          var _$13 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$1);
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$13).Llivechart_Main$ExerciseResponse__f_task === taskText)) {
            var this$9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
            break _return;
          }
          these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
        }
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      if (this$9.isEmpty__Z()) {
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0$2 = this$9.get__O();
        var _$14 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$2);
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$14).Llivechart_Main$ExerciseResponse__f_answer;
      }
    }
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2);
    if (this$10.isEmpty__Z()) {
      var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0$3 = this$10.get__O();
      var answer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0$3);
      var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
      var len = this$13.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
      var i = 0;
      while ((i < len)) {
        var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer);
        var index = i;
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$14, index);
        if (((x === 48) || (x === 49))) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
          sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (sb.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
        }
        i = ((1 + i) | 0);
      }
      var x$1 = ((len === sb.length__I()) ? answer : sb.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      var x$2 = $x_3.padTo$extension__T__I__C__T(x$1, total, 48);
      var x$3 = $x_4.take$extension__T__I__T(x$2, total);
      var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3);
      var len$1 = this$20.length;
      var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        var $x_5 = i$1;
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3);
        var index$1 = i$1;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$21, index$1);
        dst.set($x_5, (x0$4 === 49));
        i$1 = ((1 + i$1) | 0);
      }
      var this$22 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
      var storedGrid = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().from__sc_IterableOnce__sci_Vector(this$22));
    }
  } else {
    var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (storedGrid.isEmpty__Z()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < total)) {
      b.addOne__O__sci_VectorBuilder(false);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_6 = b.result__sci_Vector();
  } else {
    var $x_6 = storedGrid.get__O();
  }
  var initialGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($x_6);
  var pixelGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(initialGrid);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(initialGrid);
  if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_SeqOps__isEmpty__Z(this$24))) {
    var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(savedPattern);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$25, initialGrid);
  }
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_24 = $x_26.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_25.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, title, r)])));
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid");
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px;"));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => {
    var grid$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(grid);
    var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$28))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
      var x$1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$1);
      if ((x$1$2 !== null)) {
        var isOn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$2)._1__O());
        var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$2)._2__O());
        var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter((isOn ? "pixel on" : "pixel"));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
        var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
        var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$16) => {
          var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
          var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => {
            var g$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).updated__I__O__sci_Vector(idx, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).apply__I__O(idx))));
          }));
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$30, mod);
        }));
        return $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_17, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$31, onNext)])));
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
    }))));
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$32, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_16 = $x_23.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_21, $x_20, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-submit-area");
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$34, "Abgeben", r$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$17) => {
    var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
    var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$36.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var current = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$37.tryNow__s_util_Try()).get__O());
    var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(savedPattern);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$38, current);
    var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$1) => {
      var b$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(b$1);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((b$2 ? 49 : 48));
    })))));
    var binary = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$39, "", "", "");
    var this$42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$42 === ""))) {
      var this$45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskText);
      var $x_8 = (!(this$45 === ""));
    } else {
      var $x_8 = false;
    }
    if ($x_8) {
      this.persistExerciseAnswer__T__T__T__V(chapter, taskText, binary);
    }
    return current;
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$18) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(_$18);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(true);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$47, onNext$1);
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3) => {
    var x$1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$3);
    if ((x$1$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x130 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$4)).s_Some__f_value);
      if ((x130 === true)) {
        return "btn-success";
      }
      if ((x130 === false)) {
        return "btn-error";
      }
    }
    var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$4 === x$1$4)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
  }));
  return $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_24, $x_16, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_15).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_14.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_12).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_7).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$48, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])))])));
});
$c_Llivechart_Main$.prototype.renderPixelAreaWithValidation__I__I__T__Lcom_raquo_airstream_state_Var__I__T__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(cols, rows, title, expectedPattern, rowsPerChar, chapter, taskText) {
  var total = Math.imul(cols, rows);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskText);
    var $x_1 = (!(this$6 === ""));
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.loadFromLocalStorage__T__s_Option(chapter));
    if (this$7.isEmpty__Z()) {
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0 = this$7.get__O();
      var _$19 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$19).Llivechart_Main$ChapterData__f_exercises);
      _return: {
        var these = this$8;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
          var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
          var _$20 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$1);
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$20).Llivechart_Main$ExerciseResponse__f_task === taskText)) {
            var this$9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
            break _return;
          }
          these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
        }
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      if (this$9.isEmpty__Z()) {
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0$2 = this$9.get__O();
        var _$21 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$2);
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$21).Llivechart_Main$ExerciseResponse__f_answer;
      }
    }
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2);
    if (this$10.isEmpty__Z()) {
      var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0$3 = this$10.get__O();
      var ans = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0$3);
      var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ans);
      var len = this$13.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
      var i = 0;
      while ((i < len)) {
        var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ans);
        var index = i;
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$14, index);
        if (((x === 48) || (x === 49))) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
          sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (sb.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
        }
        i = ((1 + i) | 0);
      }
      var x$1 = ((len === sb.length__I()) ? ans : sb.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      var x$2 = $x_3.padTo$extension__T__I__C__T(x$1, total, 48);
      var x$3 = $x_4.take$extension__T__I__T(x$2, total);
      var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3);
      var len$1 = this$20.length;
      var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        var $x_5 = i$1;
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3);
        var index$1 = i$1;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$21, index$1);
        dst.set($x_5, (x0$4 === 49));
        i$1 = ((1 + i$1) | 0);
      }
      var this$22 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
      var storedGrid = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().from__sc_IterableOnce__sci_Vector(this$22));
    }
  } else {
    var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  if (storedGrid.isEmpty__Z()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < total)) {
      b.addOne__O__sci_VectorBuilder(false);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_6 = b.result__sci_Vector();
  } else {
    var $x_6 = storedGrid.get__O();
  }
  var pixelGrid = $x_7.apply__O__Lcom_raquo_airstream_state_Var($x_6);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_26 = $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$24, title, r)])));
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid");
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px;"));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => {
    var grid$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(grid);
    var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$26))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
      var x$1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$1);
      if ((x$1$2 !== null)) {
        var isOn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$2)._1__O());
        var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$2)._2__O());
        var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter((isOn ? "pixel on" : "pixel"));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
        var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
        var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$23) => {
          var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
          var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => {
            var g$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).updated__I__O__sci_Vector(idx, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).apply__I__O(idx))));
          }));
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$28, mod);
        }));
        return $x_21.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_19, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$29, onNext)])));
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
    }))));
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$30, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_18 = $x_25.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_24.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_23, $x_22, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-submit-area");
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$32, "Abgeben", r$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$24) => {
    var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
    var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$34.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var current = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$35.tryNow__s_util_Try()).get__O());
    var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$38 === ""))) {
      var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskText);
      var $x_9 = (!(this$41 === ""));
    } else {
      var $x_9 = false;
    }
    if ($x_9) {
      var this$42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$1) => {
        var b$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(b$1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((b$2 ? 49 : 48));
      })))));
      var binary = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$42, "", "", "");
      this.persistExerciseAnswer__T__T__T__V(chapter, taskText, binary);
    }
    var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedPattern);
    var this$44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$43.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var expected = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$44.tryNow__s_util_Try()).get__O());
    var this$45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expected);
    if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_SeqOps__isEmpty__Z(this$45))) {
      var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array([0, 1, 2, 2])));
      var chars = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
      var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chars);
      var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$47)));
      _return$1: {
        var these$1 = this$48;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).isEmpty__Z())) {
          var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O();
          var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x0$5);
          matchResult49: {
            var $x_10;
            if ((x$1$3 !== null)) {
              var charIdx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
              var wordIdx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
              var rowStart = Math.imul(charIdx, cols);
              var rowEnd = ((rowStart + cols) | 0);
              var targetStart = Math.imul(wordIdx, cols);
              var targetEnd = ((targetStart + cols) | 0);
              if (((rowEnd <= $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expected).length__I()) && (targetEnd <= $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current).length__I()))) {
                var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expected);
                var expectedRow = this$49.slice__I__I__sci_Vector(rowStart, rowEnd);
                var this$50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current);
                var currentRow = this$50.slice__I__I__sci_Vector(targetStart, targetEnd);
                var $x_10 = ((expectedRow === null) ? (currentRow === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedRow).equals__O__Z(currentRow));
                break matchResult49;
              } else {
                var $x_10 = false;
                break matchResult49;
              }
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
          }
          if ((!$x_10)) {
            var correct = false;
            break _return$1;
          }
          these$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).tail__O());
        }
        var correct = true;
      }
      return correct;
    } else {
      return false;
    }
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => {
    var ok$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(ok$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$52, onNext$1);
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => {
    var x$1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$4);
    if ((x$1$5 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x141 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$5)).s_Some__f_value);
      if ((x141 === true)) {
        return "btn-success";
      }
      if ((x141 === false)) {
        return "btn-error";
      }
    }
    var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$4 === x$1$5)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$5);
  }));
  return $x_30.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_26, $x_18, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_17).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_14).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_12, $x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$53, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])))])));
});
$c_Llivechart_Main$.prototype.renderPixelAreaWithLabels__I__I__T__sci_List__sci_List__T__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(cols, rows, title, labels, expectedPatterns, chapter, taskText) {
  var total = Math.imul(cols, rows);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskText);
    var $x_1 = (!(this$6 === ""));
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.loadFromLocalStorage__T__s_Option(chapter));
    if (this$7.isEmpty__Z()) {
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0 = this$7.get__O();
      var _$28 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$28).Llivechart_Main$ChapterData__f_exercises);
      _return: {
        var these = this$8;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
          var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
          var _$29 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$1);
          if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$29).Llivechart_Main$ExerciseResponse__f_task === taskText)) {
            var this$9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
            break _return;
          }
          these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
        }
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      if (this$9.isEmpty__Z()) {
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0$2 = this$9.get__O();
        var _$30 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$2);
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$30).Llivechart_Main$ExerciseResponse__f_answer;
      }
    }
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2);
    if (this$10.isEmpty__Z()) {
      var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    } else {
      var x0$3 = this$10.get__O();
      var ans = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0$3);
      var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ans);
      var len = this$13.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len);
      var i = 0;
      while ((i < len)) {
        var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ans);
        var index = i;
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$14, index);
        if (((x === 48) || (x === 49))) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x));
          sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (sb.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
        }
        i = ((1 + i) | 0);
      }
      var x$1 = ((len === sb.length__I()) ? ans : sb.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      var x$2 = $x_3.padTo$extension__T__I__C__T(x$1, total, 48);
      var x$3 = $x_4.take$extension__T__I__T(x$2, total);
      var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3);
      var len$1 = this$20.length;
      var dst = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        var $x_5 = i$1;
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3);
        var index$1 = i$1;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$21, index$1);
        dst.set($x_5, (x0$4 === 49));
        i$1 = ((1 + i$1) | 0);
      }
      var this$22 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst);
      var storedGrid = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().from__sc_IterableOnce__sci_Vector(this$22));
    }
  } else {
    var storedGrid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  if (storedGrid.isEmpty__Z()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
    var i$2 = 0;
    while ((i$2 < total)) {
      b.addOne__O__sci_VectorBuilder(false);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_6 = b.result__sci_Vector();
  } else {
    var $x_6 = storedGrid.get__O();
  }
  var pixelGrid = $x_7.apply__O__Lcom_raquo_airstream_state_Var($x_6);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i$3 = 0;
  while ((i$3 < rows)) {
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    b$1.addOne__O__sci_VectorBuilder(elem);
    i$3 = ((1 + i$3) | 0);
  }
  var rowStatusVar = $x_8.apply__O__Lcom_raquo_airstream_state_Var(b$1.result__sci_Vector());
  var $x_45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_41 = $x_43.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_42.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$25, title, r)])));
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid-labeled");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var signal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid).Lcom_raquo_airstream_state_SourceVar__f_signal;
  var this$55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().combineWith$extension__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Source$SignalSource__Lapp_tulz_tuplez_Composition__Lcom_raquo_airstream_core_Signal(signal, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar).Lcom_raquo_airstream_state_SourceVar__f_signal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()));
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$1) => {
    var x$1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$1);
    if ((x$1$2 !== null)) {
      var grid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$2)._1__O());
      var rowStatus = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$2)._2__O());
      var isEmpty = (rows <= 0);
      var scala$collection$immutable$Range$$lastElement = (((-1) + rows) | 0);
      var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      if (isEmpty) {
        var $x_22 = 0;
      } else {
        if ((rows <= 0)) {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, rows, 1, false);
        }
        var $x_22 = rows;
      }
      if (($x_22 === 0)) {
        var this$54 = this$34;
      } else {
        var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
        if (iter.sci_RangeIterator__f__hasNext) {
          var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.next__I(), this$34);
          var curr = result;
          while (iter.sci_RangeIterator__f__hasNext) {
            var temp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.next__I(), this$34);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(curr).sci_$colon$colon__f_next = temp;
            curr = temp;
          }
          var this$54 = result;
        } else {
          var this$54 = this$34;
        }
      }
      var f$1 = ((r$1) => {
        var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(r$1);
        var rowStart = Math.imul(r$2, cols);
        var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatus);
        var this$36 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(this$35);
        var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$36.apply__O__s_Option(r$2));
        var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
        var status = $x_23.flatten__s_$less$colon$less__s_Option(this$37.s_$less$colon$less$__f_singleton);
        matchResult55: {
          var rowBg;
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x160 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(status)).s_Some__f_value);
            if ((x160 === true)) {
              var rowBg = "background: rgba(46, 204, 113, 0.2); border-radius: 4px; padding: 2px;";
              break matchResult55;
            }
            if ((x160 === false)) {
              var rowBg = "background: rgba(231, 76, 60, 0.2); border-radius: 4px; padding: 2px;";
              break matchResult55;
            }
          }
          var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
          if ((x$4 === status)) {
            var rowBg = "";
            break matchResult55;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }
        var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("display: flex; align-items: center; gap: 6px; margin-bottom: 4px; " + rowBg));
        var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var this$42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
        var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(labels);
        var this$39 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(this$38);
        var this$40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$39.apply__O__s_Option(r$2));
        var x$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$40.isEmpty__Z() ? "" : this$40.get__O()));
        var value = $x_32.take$extension__T__I__T(x$5, 1);
        var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
        var $x_31 = $x_34.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_33.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$42, value, r$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("width: 18px; text-align: center; font-weight: bold;")])));
        var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
        var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("display: grid; grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px; gap: 1px;"));
        var this$53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var isEmpty$1 = (cols <= 0);
        var scala$collection$immutable$Range$$lastElement$1 = (((-1) + cols) | 0);
        var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        if (isEmpty$1) {
          var $x_24 = 0;
        } else {
          if ((cols <= 0)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, cols, 1, false);
          }
          var $x_24 = cols;
        }
        if (($x_24 === 0)) {
          var this$52 = this$48;
        } else {
          var iter$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement$1, isEmpty$1);
          if (iter$1.sci_RangeIterator__f__hasNext) {
            var result$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.next__I(), this$48);
            var curr$1 = result$1;
            while (iter$1.sci_RangeIterator__f__hasNext) {
              var temp$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.next__I(), this$48);
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(curr$1).sci_$colon$colon__f_next = temp$1;
              curr$1 = temp$1;
            }
            var this$52 = result$1;
          } else {
            var this$52 = this$48;
          }
        }
        var f = ((c) => {
          var c$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(c);
          var idx = ((rowStart + c$1) | 0);
          var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid).apply__I__O(idx)) ? "pixel on" : "pixel"));
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
          var this$51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
          var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$32) => {
            var this$50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
            var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => {
              var g$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g);
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).updated__I__O__sci_Vector(idx, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).apply__I__O(idx))));
            }));
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$50, mod);
          }));
          return $x_27.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_26.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_25, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$51, onNext)])));
        });
        if ((this$52 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        } else {
          var x0$5 = this$52.head__O();
          var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$5), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          var t = h;
          var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$52.tail__O());
          while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
            var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
            t = nx;
            rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
          }
          var nodes = h;
        }
        var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
        return $x_37.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_36.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_35, $x_31, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_30).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_28, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$53, nodes, renderableSeq)])))])));
      });
      if ((this$54 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$7 = this$54.head__O();
        var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t$1 = h$1;
        var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$54.tail__O());
        while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
          var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$8), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx$1;
          t$1 = nx$1;
          rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
        }
        return h$1;
      }
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$2);
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$55, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_21 = $x_40.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_39.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_38, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-submit-area");
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$57, "Abgeben", r$4);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$94 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$33) => {
    var this$59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(pixelGrid);
    var this$60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$59.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var current = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$60.tryNow__s_util_Try()).get__O());
    var this$73 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedPatterns).take__I__sci_List(rows));
    var f$2 = ((bits) => {
      var bits$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(bits);
      var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
      var x$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bits$1));
      var this$63 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$6);
      var len$2 = this$63.length;
      var sb$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len$2);
      var i$4 = 0;
      while ((i$4 < len$2)) {
        var this$64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$6);
        var index$2 = i$4;
        var x$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$64, index$2);
        if (((x$7 === 48) || (x$7 === 49))) {
          var str$1 = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x$7));
          sb$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (sb$1.jl_StringBuilder__f_java$lang$StringBuilder$$content + str$1);
        }
        i$4 = ((1 + i$4) | 0);
      }
      var x$8 = ((len$2 === sb$1.length__I()) ? x$6 : sb$1.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      var x$9 = $x_10.padTo$extension__T__I__C__T(x$8, cols, 48);
      var x$10 = $x_11.take$extension__T__I__T(x$9, cols);
      var this$70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$10);
      var len$3 = this$70.length;
      var dst$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(len$3);
      var i$5 = 0;
      while ((i$5 < len$3)) {
        var $x_12 = i$5;
        var this$71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$10);
        var index$3 = i$5;
        var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$71, index$3);
        dst$1.set($x_12, (x0$9 === 49));
        i$5 = ((1 + i$5) | 0);
      }
      var this$72 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_ArraySeq$ofRef(dst$1);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().from__sc_IterableOnce__sci_Vector(this$72);
    });
    if ((this$73 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var expectedRows = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$10 = this$73.head__O();
      var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$10), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$2 = h$2;
      var rest$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$73.tail__O());
      while ((rest$2 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$2).head__O();
        var nx$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$11), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).sci_$colon$colon__f_next = nx$2;
        t$2 = nx$2;
        rest$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$2).tail__O());
      }
      var expectedRows = h$2;
    }
    var this$77 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Range$Exclusive(0, rows, 1);
    var statuses = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$().from__sc_IterableOnce__sci_Vector(this$77)).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((r$5) => {
      var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(r$5);
      var this$78 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current);
      var from = Math.imul(r$6, cols);
      var until = Math.imul(((1 + r$6) | 0), cols);
      var rowSlice = this$78.slice__I__I__sci_Vector(from, until);
      var this$79 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(expectedRows);
      var this$80 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$79.apply__O__s_Option(r$6));
      if (this$80.isEmpty__Z()) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0$12 = this$80.get__O();
        var exp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(x0$12);
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(((rowSlice === null) ? (exp === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowSlice).equals__O__Z(exp)));
      }
    }))));
    var this$81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$81, statuses);
    var this$82 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((b$2) => {
      var b$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(b$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((b$3 ? 49 : 48));
    })))));
    var binary = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$82, "", "", "");
    var this$85 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$85 === ""))) {
      var this$88 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskText);
      var $x_13 = (!(this$88 === ""));
    } else {
      var $x_13 = false;
    }
    if ($x_13) {
      this.persistExerciseAnswer__T__T__T__V(chapter, taskText, binary);
    }
    var this$91 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(statuses);
    var this$90 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
    var toIterableOnce = this$90.s_$less$colon$less$__f_singleton;
    var value$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__flatten__F1__O(this$91, toIterableOnce))).forall__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$11) => {
      var x$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(x$11);
      return x$12;
    })));
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_14 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$94, onNext$1);
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$95 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2$1) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2$1);
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x168 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
      if ((x168 === true)) {
        return "btn-success";
      }
      if ((x168 === false)) {
        return "btn-error";
      }
    }
    var x$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$13 === x$1$3)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  return $x_45.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_44.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_41, $x_21, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_20).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_18, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_17).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_15, $x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_9).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$95, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])))])));
});
$c_Llivechart_Main$.prototype.renderMenu__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#einfuehrung", "Einf\u00fchrung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#nachricht", "Nachrichten schreiben"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#maskierung", "Maskierung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#fehlerkorrektur", "Fehlerkorrektur"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#anwendung", "Anwendung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#zusammenfassung", "Zusammenfassung")]));
  var menuItems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar");
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar-header");
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_26 = $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$8, "QR-Code", r)])));
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_23 = $x_31.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_29, $x_26, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_25).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_24.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, "Wie wird ein QR-Code erstellt?", r$1)])))])));
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar-nav");
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(menuItems);
  var f = ((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    if ((x$1$1 !== null)) {
      var hash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
      var label = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).a__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).href__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(hash);
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, label, r$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onMouseEnter__Lcom_raquo_laminar_keys_EventProp();
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
      var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$35) => (void 0)));
      return $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_17).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_15, $x_14, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$13, onNext)])))])));
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  });
  if ((this$14 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0 = this$14.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$14.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
    }
    var nodes = h;
  }
  var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  var $x_13 = $x_22.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_21.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_20, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$15, nodes, renderableSeq)])));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("navbar-footer");
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "\ud83d\udcbe Speichern", r$3);
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("save-button");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$36) => {
    var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung"]));
    var chapters = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
    var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_allResponsesVar);
    var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$19.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var currentData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$20.tryNow__s_util_Try()).get__O());
    var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
    var f$1 = ((chapter) => {
      var chapter$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(chapter);
      var data = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentData).getOrElse__O__F0__O(chapter$1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
        var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
        var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
        var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
        return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, exercises, rating);
      }))));
      var y = this.ensureAllExercises__T__Llivechart_Main$ChapterData__Llivechart_Main$ChapterData(chapter$1, data);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(chapter$1, y);
    });
    if ((this$26 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$2 = this$26.head__O();
      var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$1 = h$1;
      var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$26.tail__O());
      while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
        var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx$1;
        t$1 = nx$1;
        rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
      }
      var this$28 = h$1;
    }
    var allData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$28);
    var $x_4 = JSON;
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(new Date().toISOString());
    var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("timestamp", s);
    var _2 = this.dataToJsObject__sci_Map__sjs_js_Any(allData);
    var fields = $x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([$x_2, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("data", _2)]));
    var $x_1 = $x_4.stringify($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields), null, 2);
    var json = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1);
    var $x_5 = Blob;
    var fields$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("contentType", "application/json")]));
    var blob = new $x_5([json], $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1));
    var url = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(URL.createObjectURL(blob));
    var link = document.createElement("a");
    link.href = url;
    link.download = (("qr-kurs-antworten-" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(new Date().getTime())) + ".json");
    link.click();
    URL.revokeObjectURL(url);
  }));
  return $x_34.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_33.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_32, $x_23, $x_13, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_12).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_9).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_7, $x_6, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$36, onNext$1)])))])))])));
});
$c_Llivechart_Main$.prototype.renderMaskierungAufgabe__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapBooleanArray__AZ__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, false, true, false, false, true, false, true, true, false, true, false, false, true, false, true]));
  var originalData = $x_1.apply__O__Lcom_raquo_airstream_state_Var(this$1.from__sc_IterableOnce__sci_Vector(elems));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i = 0;
  while ((i < 16)) {
    b.addOne__O__sci_VectorBuilder(false);
    i = ((1 + i) | 0);
  }
  var maskPattern = $x_2.apply__O__Lcom_raquo_airstream_state_Var(b.result__sci_Vector());
  var answer1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var answer2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var answer3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var answer4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var check1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_102 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_101 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_100 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_99 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_98 = $x_100.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_99.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, "Aufgabe 2", r)])));
  var $x_97 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_96 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_95 = $x_97.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_96.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$4, "Links sind die urspr\u00fcnglichen Daten dargestellt. In der Mitte kannst du die Maske definieren. Rechts wird das Ergebnis der Maskierung, welche durch eine XOR-Operation realisiert wird, angezeigt.", r$1)])));
  var $x_94 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_93 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_92 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; gap: 20px; justify-content: center; align-items: flex-start;");
  var $x_91 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_90 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_89 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center;");
  var $x_88 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_87 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_86 = $x_91.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_90.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_89, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_88).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_87.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$5, "Urspr\u00fcngliche Daten", r$2)]))), this.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement(4, 4, originalData, false)])));
  var $x_85 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_84 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_83 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center;");
  var $x_82 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_80 = $x_85.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_84.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_83, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_82).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_81.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$6, "Maske", r$3)]))), this.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement(4, 4, maskPattern, false)])));
  var $x_79 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_78 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_77 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center;");
  var $x_76 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_75 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_74 = $x_76.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_75.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$7, "Maskierte Daten", r$4)])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var signal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(originalData).Lcom_raquo_airstream_state_SourceVar__f_signal;
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().combineWith$extension__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Source$SignalSource__Lapp_tulz_tuplez_Composition__Lcom_raquo_airstream_core_Signal(signal, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(maskPattern).Lcom_raquo_airstream_state_SourceVar__f_signal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()));
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    if ((x$1$1 !== null)) {
      var orig = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
      var mask = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(orig);
      var maskedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this$10, mask))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
        var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2);
        if ((x$1$3 !== null)) {
          var o = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
          var m = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
          return (o !== m);
        }
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
      }))));
      return this.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement(4, 4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(maskedData), true);
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$11, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_73 = $x_94.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_93.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_92, $x_86, $x_80, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_79).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_78.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_77, $x_74, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])))])));
  var $x_72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 2rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;");
  var $x_69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_67 = $x_69.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_68.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$13, "Maskierung beschreiben", r$5)])));
  var $x_66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_64 = $x_66.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_65.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$14, "Beschreibe, wie die Maskierung funktioniert. Erg\u00e4nze die S\u00e4tze.", r$6)])));
  var $x_63 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_62 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_61 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 1rem 0;");
  var $x_60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check1));
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => {
    var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s);
    return ("margin-bottom: 1rem; padding: 0.5rem; " + s$1);
  }));
  var $x_57 = $x_58.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$15, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_54 = $x_56.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_55.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "Wenn urspr\u00fcngliche Daten schwarz und die Maske schwarz dargestellt sind, dann ist das Ergebnis: ", r$7)])));
  var $x_53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer1).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer1).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$18, onNext);
  var $x_48 = $x_60.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_59.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_57, $x_54, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_53).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_52.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_51, $x_50, $x_49, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])))])));
  var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check2));
  var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$2) => {
    var s$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$2);
    return ("margin-bottom: 1rem; padding: 0.5rem; " + s$3);
  }));
  var $x_44 = $x_45.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$20, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_41 = $x_43.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_42.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$21, "Wenn urspr\u00fcngliche Daten schwarz und die Maske wei\u00df dargestellt sind, dann ist das Ergebnis: ", r$8)])));
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer2).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer2).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$1).onNext__O__V(_$1$1);
  }));
  var listener$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$23, onNext$1);
  var $x_35 = $x_47.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_46.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_44, $x_41, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_40).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_39.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_38, $x_37, $x_36, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener$1, updater$1)])))])));
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check3));
  var project$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$3$1) => {
    var s$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$3$1);
    return ("margin-bottom: 1rem; padding: 0.5rem; " + s$4);
  }));
  var $x_31 = $x_32.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$25, project$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_28 = $x_30.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, "Wenn urspr\u00fcngliche Daten wei\u00df und die Maske schwarz dargestellt sind, dann ist das Ergebnis: ", r$9)])));
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer3).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$2, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer3).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$2).onNext__O__V(_$1$2);
  }));
  var listener$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$28, onNext$2);
  var $x_22 = $x_34.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_33.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_31, $x_28, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_27).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_26.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_25, $x_24, $x_23, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener$2, updater$2)])))])));
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Llivechart_Main$__getLineStyle$1__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check4));
  var project$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$4$1) => {
    var s$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$4$1);
    return ("margin-bottom: 1rem; padding: 0.5rem; " + s$5);
  }));
  var $x_18 = $x_19.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$30, project$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_15 = $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$31, "Wenn urspr\u00fcngliche Daten wei\u00df und die Maske wei\u00df dargestellt sind, dann ist das Ergebnis: ", r$10)])));
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer4).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$3, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer4).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$3) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$3).onNext__O__V(_$1$3);
  }));
  var listener$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$33, onNext$3);
  var $x_9 = $x_63.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_62.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_61, $x_48, $x_35, $x_22, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_21).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_18, $x_15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_14).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_12, $x_11, $x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener$3, updater$3)])))])))])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$35, "Abgeben", r$11);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$4, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$37) => {
    var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer1);
    var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$37.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$38.tryNow__s_util_Try()).get__O());
    var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer2);
    var this$40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$39.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$40.tryNow__s_util_Try()).get__O());
    var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer3);
    var this$42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$41.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$42.tryNow__s_util_Try()).get__O());
    var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer4);
    var this$44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$43.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$44.tryNow__s_util_Try()).get__O());
    var this$46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check1);
    var value = $p_Llivechart_Main$__isCorrect1$1__T__Z(this, a1);
    var value$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$46, value$1);
    var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check2);
    var value$2 = $p_Llivechart_Main$__isCorrect2$1__T__Z(this, a2);
    var value$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$48, value$3);
    var this$50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check3);
    var value$4 = $p_Llivechart_Main$__isCorrect3$1__T__Z(this, a3);
    var value$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$4);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$50, value$5);
    var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check4);
    var value$6 = $p_Llivechart_Main$__isCorrect4$1__T__Z(this, a4);
    var value$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$6);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$52, value$7);
    var allCorrect = ((($p_Llivechart_Main$__isCorrect1$1__T__Z(this, a1) && $p_Llivechart_Main$__isCorrect2$1__T__Z(this, a2)) && $p_Llivechart_Main$__isCorrect3$1__T__Z(this, a3)) && $p_Llivechart_Main$__isCorrect4$1__T__Z(this, a4));
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(allCorrect);
  }))));
  var sink$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$4) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$4).onNext__O__V(_$1$4);
  }));
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$54, onNext$4);
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 1rem; padding: 0.5rem 1rem;");
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2$1) => {
    var x$1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2$1);
    if ((x$1$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x187 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$4)).s_Some__f_value);
      if ((x187 === true)) {
        return "btn-success";
      }
      if ((x187 === false)) {
        return "btn-error";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$4)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
  }));
  return $x_102.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_101.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_98, $x_95, $x_73, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_72).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_71.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_70, $x_67, $x_64, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_6, $x_5, $x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$55, project$5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])))])));
});
$c_Llivechart_Main$.prototype.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement = (function(cols, rows, gridVar, isReadOnly) {
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid");
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("grid-template-columns: repeat(" + cols) + ", 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;"));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(gridVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => {
    var grid$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(grid);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$3))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
      if ((x$1$1 !== null)) {
        var isOn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
        var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
        var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter((isOn ? "pixel on" : "pixel"));
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter((("width: 28px; height: 28px; cursor: " + (isReadOnly ? "default" : "pointer")) + ";"));
        if ((!isReadOnly)) {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
          var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
          var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$38) => {
            var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(gridVar);
            var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => {
              var g$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g);
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).updated__I__O__sci_Vector(idx, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).apply__I__O(idx))));
            }));
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$5, mod);
          }));
          var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$6, onNext);
        } else {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
        }
        return $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_3, $x_2, $x_1])));
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
    }))));
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$8, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_9.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_7, $x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.renderMaskierungAufgabe3__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapBooleanArray__AZ__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, false, true, false, false, true, false, true, true, true, false, false, false, false, true, true]));
  var originalData = $x_1.apply__O__Lcom_raquo_airstream_state_Var(this$1.from__sc_IterableOnce__sci_Vector(elems));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapBooleanArray__AZ__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([false, true, false, true, true, false, true, false, false, false, true, true, true, true, false, false]));
  var maskPattern = $x_2.apply__O__Lcom_raquo_airstream_state_Var(this$2.from__sc_IterableOnce__sci_Vector(elems$1));
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i = 0;
  while ((i < 16)) {
    b.addOne__O__sci_VectorBuilder(false);
    i = ((1 + i) | 0);
  }
  var userMaskedData = $x_3.apply__O__Lcom_raquo_airstream_state_Var(b.result__sci_Vector());
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i$1 = 0;
  while ((i$1 < 4)) {
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    b$1.addOne__O__sci_VectorBuilder(elem);
    i$1 = ((1 + i$1) | 0);
  }
  var rowStatusVar = $x_4.apply__O__Lcom_raquo_airstream_state_Var(b$1.result__sci_Vector());
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(originalData);
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.Lcom_raquo_airstream_state_SourceVar__f_signal);
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$6.tryNow__s_util_Try()).get__O());
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(maskPattern);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$7.Lcom_raquo_airstream_state_SourceVar__f_signal);
  var correctMaskedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_5).zip__sc_IterableOnce__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$8.tryNow__s_util_Try()).get__O())))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    if ((x$1$1 !== null)) {
      var o = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
      var m = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
      return (o !== m);
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }))));
  var $x_70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_66 = $x_68.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_67.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, "Aufgabe 3", r)])));
  var $x_65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_63 = $x_65.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_64.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$10, "Links und in der Mitte sind die urspr\u00fcnglichen Daten und die Maske vorgegeben. Rechts kannst du die maskierten Daten eintragen. Bestimme durch Anwenden der XOR-Operation die korrekten maskierten Daten.", r$1)])));
  var $x_62 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_61 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; gap: 20px; justify-content: center; align-items: flex-start;");
  var $x_59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; display: flex; flex-direction: column; align-items: center;");
  var $x_56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 0 0 0.5rem 0;");
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_53 = $x_59.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_58.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_57, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_56).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_55.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_54, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "Urspr\u00fcngliche Daten", r$2)]))), this.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement(4, 4, originalData, true)])));
  var $x_52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; display: flex; flex-direction: column; align-items: center;");
  var $x_49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 0 0 0.5rem 0;");
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_46 = $x_52.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_51.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_50, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_49).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_48.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_47, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$12, "Maske", r$3)]))), this.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement(4, 4, maskPattern, true)])));
  var $x_45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; display: flex; flex-direction: column; align-items: center;");
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 0 0 0.5rem 0;");
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_39 = $x_42.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_41.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_40, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$13, "maskierte Daten", r$4)])));
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid");
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var signal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData).Lcom_raquo_airstream_state_SourceVar__f_signal;
  var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_combine_generated_CombinableSignal$().combineWith$extension__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Source$SignalSource__Lapp_tulz_tuplez_Composition__Lcom_raquo_airstream_core_Signal(signal, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar).Lcom_raquo_airstream_state_SourceVar__f_signal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lapp_tulz_tuplez_Composition\uff3fPri0$$anon$1()));
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2);
    if ((x$1$3 !== null)) {
      var grid = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
      var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      var this$23;
      var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
      if (iter.sci_RangeIterator__f__hasNext) {
        var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.next__I(), this$22);
        var curr = result;
        while (iter.sci_RangeIterator__f__hasNext) {
          var temp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.next__I(), this$22);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(curr).sci_$colon$colon__f_next = temp;
          curr = temp;
        }
        var this$23 = result;
      } else {
        var this$23 = this$22;
      }
      var rest = this$23;
      var h = null;
      var t = null;
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x0);
        var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        var this$33;
        var iter$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
        if (iter$1.sci_RangeIterator__f__hasNext) {
          var result$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.next__I(), this$29);
          var curr$1 = result$1;
          while (iter$1.sci_RangeIterator__f__hasNext) {
            var temp$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$1.next__I(), this$29);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(curr$1).sci_$colon$colon__f_next = temp$1;
            curr$1 = temp$1;
          }
          var this$33 = result$1;
        } else {
          var this$33 = this$29;
        }
        var f = ((r$5, grid, userMaskedData) => ((c) => {
          var c$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(c);
          var idx = (((r$5 << 2) + c$1) | 0);
          var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid).apply__I__O(idx)) ? "pixel on" : "pixel"));
          var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("width: 28px; height: 28px; cursor: pointer;");
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
          var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
          var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$39) => {
            var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData);
            var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => {
              var g$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g);
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).updated__I__O__sci_Vector(idx, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).apply__I__O(idx))));
            }));
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$31, mod);
          }));
          return $x_33.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_32.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_31, $x_30, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$32, onNext)])));
        }))(r$5, grid, userMaskedData);
        if ((this$33 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        } else {
          var x0$1 = this$33.head__O();
          var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          var t$1 = h$1;
          var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$33.tail__O());
          while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
            var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx;
            t$1 = nx;
            rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
          }
          var $x_34 = h$1;
        }
        var it = $x_34.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
          var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          if ((t === null)) {
            h = nx$1;
          } else {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx$1;
          }
          t = nx$1;
        }
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      return ((h === null) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$() : h);
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$34, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_29 = $x_45.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_44.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_43, $x_39, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_38).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_37.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_36, $x_35, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])))])));
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$36, "Abgeben", r$6);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$40) => {
    var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData);
    var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$38.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var current = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$39.tryNow__s_util_Try()).get__O());
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var a1$3;
    var a1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(4);
    var it$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
    var i$2 = 0;
    var y = a1.u.length;
    while (((i$2 < y) && it$1.sci_RangeIterator__f__hasNext)) {
      a1.set(i$2, it$1.next__I());
      i$2 = ((1 + i$2) | 0);
    }
    var a1$3 = a1;
    var this$50 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1(a1$3);
    var f$1 = ((r$7) => {
      var r$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(r$7);
      var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current);
      var from = (r$8 << 2);
      var until = (((1 + r$8) | 0) << 2);
      var rowSlice = this$47.slice__I__I__sci_Vector(from, until);
      var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(correctMaskedData);
      var from$1 = (r$8 << 2);
      var until$1 = (((1 + r$8) | 0) << 2);
      var expectedRow = this$48.slice__I__I__sci_Vector(from$1, until$1);
      var value = ((rowSlice === null) ? (expectedRow === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowSlice).equals__O__Z(expectedRow));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
    });
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_VectorStatics$();
    var a = this$50.sci_Vector__f_prefix1;
    _return: {
      var i$3 = 0;
      while ((i$3 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).u.length)) {
        var v1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).get(i$3);
        var v2 = f$1(v1);
        if ((!Object.is(v1, v2))) {
          var at = i$3;
          var ac = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).u.length);
          if ((at > 0)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemArraycopyRefs($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a), 0, ac, 0, at);
          }
          ac.set(at, v2);
          var i$4 = ((1 + at) | 0);
          while ((i$4 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).u.length)) {
            var $x_24 = i$4;
            var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).get(i$4);
            ac.set($x_24, f$1(x0$3));
            i$4 = ((1 + i$4) | 0);
          }
          var $x_23 = ac;
          break _return;
        }
        i$3 = ((1 + i$3) | 0);
      }
      var $x_23 = a;
    }
    var statuses = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_23);
    var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$52, statuses);
    var this$54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
    var toIterableOnce = this$54.s_$less$colon$less$__f_singleton;
    var value$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__flatten__F1__O(statuses, toIterableOnce))).forall__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => {
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(x);
      return x$2;
    })));
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_25 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$57, onNext$1);
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.5rem 1rem; align-self: flex-start; margin-top: 2rem;");
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3$1) => {
    var x$1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$3$1);
    if ((x$1$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x201 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$4)).s_Some__f_value);
      if ((x201 === true)) {
        return "btn-success";
      }
      if ((x201 === false)) {
        return "btn-error";
      }
    }
    var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$3 === x$1$4)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
  }));
  var $x_20 = $x_62.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_61.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_60, $x_53, $x_46, $x_29, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_28).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_26, $x_25, $x_22, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_21).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$58, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$76 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((statuses$1) => {
    var statuses$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(statuses$1);
    var this$59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(statuses$2);
    var res = false;
    var it$2 = this$59.iterator__sc_Iterator();
    while (((!res) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).hasNext__Z())) {
      var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).next__O();
      var _$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x0$4);
      var this$60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$41);
      res = (!this$60.isEmpty__Z());
    }
    if (res) {
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;");
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$61 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_14 = $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$61, "Ergebnisse pro Reihe:", r$9)])));
      var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).ul__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$74 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var this$67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      var this$73;
      var iter$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
      if (iter$2.sci_RangeIterator__f__hasNext) {
        var result$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$2.next__I(), this$67);
        var curr$2 = result$2;
        while (iter$2.sci_RangeIterator__f__hasNext) {
          var temp$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter$2.next__I(), this$67);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(curr$2).sci_$colon$colon__f_next = temp$2;
          curr$2 = temp$2;
        }
        var this$73 = result$2;
      } else {
        var this$73 = this$67;
      }
      var f$2 = ((r$10) => {
        var r$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(r$10);
        var this$68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(statuses$2);
        var this$69 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(this$68);
        var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$69.apply__O__s_Option(r$11));
        var this$70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
        var status = $x_6.flatten__s_$less$colon$less__s_Option(this$70.s_$less$colon$less$__f_singleton);
        var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).li__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
        var this$71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
        var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$42) => {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(_$42);
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x206 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(status)).s_Some__f_value);
            if ((x206 === true)) {
              return "color: green; font-weight: bold;";
            }
            if ((x206 === false)) {
              return "color: red; font-weight: bold;";
            }
          }
          var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
          if ((x$4 === status)) {
            return "";
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }));
        var $x_8 = $x_9.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$71, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
        var this$72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        matchResult68: {
          var $x_7;
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x211 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(status)).s_Some__f_value);
            if ((x211 === true)) {
              var $x_7 = "Richtig!";
              break matchResult68;
            }
            if ((x211 === false)) {
              var $x_7 = "Falsch";
              break matchResult68;
            }
          }
          var x$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
          if ((x$5 === status)) {
            var $x_7 = "";
            break matchResult68;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }
        var value$2 = ((("Reihe " + ((1 + r$11) | 0)) + ": ") + $x_7);
        var r$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
        return $x_11.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$72, value$2, r$12)])));
      });
      if ((this$73 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$5 = this$73.head__O();
        var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$5), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t$2 = h$2;
        var rest$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$73.tail__O());
        while ((rest$2 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$2).head__O();
          var nx$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).sci_$colon$colon__f_next = nx$2;
          t$2 = nx$2;
          rest$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$2).tail__O());
        }
        var nodes = h$2;
      }
      var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
      return $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_17, $x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_13).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_12.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$74, nodes, renderableSeq)])))])));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$76, project$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_70.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_69.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_66, $x_63, $x_20, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.renderMaskierungAufgabe7__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapBooleanArray__AZ__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, true, false, false, false, false, true, true, true, false, true, false, false, true, false, true]));
  var originalData = $x_1.apply__O__Lcom_raquo_airstream_state_Var(this$1.from__sc_IterableOnce__sci_Vector(elems));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapBooleanArray__AZ__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z([true, false, true, false, true, false, true, false, false, true, false, true, false, true, false, true]));
  var maskPattern = $x_2.apply__O__Lcom_raquo_airstream_state_Var(this$2.from__sc_IterableOnce__sci_Vector(elems$1));
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(originalData);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.Lcom_raquo_airstream_state_SourceVar__f_signal);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$4.tryNow__s_util_Try()).get__O());
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(maskPattern);
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.Lcom_raquo_airstream_state_SourceVar__f_signal);
  var correctMaskedData1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3).zip__sc_IterableOnce__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$6.tryNow__s_util_Try()).get__O())))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
    if ((x$1$1 !== null)) {
      var o = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
      var m = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
      return (o !== m);
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }))));
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(correctMaskedData1);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(maskPattern);
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$8.Lcom_raquo_airstream_state_SourceVar__f_signal);
  var that = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$9.tryNow__s_util_Try()).get__O());
  var correctMaskedData2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this$10, that))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$2);
    if ((x$1$3 !== null)) {
      var m$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._1__O());
      var mask = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$3)._2__O());
      return (m$1 !== mask);
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }))));
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i = 0;
  while ((i < 16)) {
    b.addOne__O__sci_VectorBuilder(false);
    i = ((1 + i) | 0);
  }
  var userMaskedData1 = $x_4.apply__O__Lcom_raquo_airstream_state_Var(b.result__sci_Vector());
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i$1 = 0;
  while ((i$1 < 16)) {
    b$1.addOne__O__sci_VectorBuilder(false);
    i$1 = ((1 + i$1) | 0);
  }
  var userMaskedData2 = $x_5.apply__O__Lcom_raquo_airstream_state_Var(b$1.result__sci_Vector());
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
  var b$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_VectorBuilder();
  var i$2 = 0;
  while ((i$2 < 8)) {
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    b$2.addOne__O__sci_VectorBuilder(elem);
    i$2 = ((1 + i$2) | 0);
  }
  var rowStatusVar = $x_6.apply__O__Lcom_raquo_airstream_state_Var(b$2.result__sci_Vector());
  var $x_88 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_87 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_86 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_85 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_84 = $x_86.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_85.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$14, "Aufgabe 7", r)])));
  var $x_83 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_82 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_81 = $x_83.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_82.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$15, "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschlie\u00dfend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.", r$1)])));
  var $x_80 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_79 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_78 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: wrap;");
  var $x_77 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_76 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_75 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; display: flex; flex-direction: column; align-items: center;");
  var $x_74 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_73 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 0 0 0.5rem 0;");
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_71 = $x_77.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_76.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_75, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_74).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_73.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_72, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "Urspr\u00fcngliche Daten", r$2)]))), this.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement(4, 4, originalData, true)])));
  var $x_70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; display: flex; flex-direction: column; align-items: center;");
  var $x_67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 0 0 0.5rem 0;");
  var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_64 = $x_70.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_69.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_68, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_67).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_66.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_65, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, "Maske", r$3)]))), this.renderSimplePixelGrid__I__I__Lcom_raquo_airstream_state_Var__Z__Lcom_raquo_laminar_nodes_ReactiveElement(4, 4, maskPattern, true)])));
  var $x_63 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_62 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_61 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; display: flex; flex-direction: column; align-items: center;");
  var $x_60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 0 0 0.5rem 0;");
  var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_57 = $x_60.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_59.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_58, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$18, "1x maskiert", r$4)])));
  var $x_56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid");
  var $x_53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData1).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid) => {
    var grid$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(grid);
    var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$20))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$4) => {
      var x$1$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$4);
      if ((x$1$5 !== null)) {
        var isOn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$5)._1__O());
        var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$5)._2__O());
        var $x_52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter((isOn ? "pixel on" : "pixel"));
        var $x_49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("width: 28px; height: 28px; cursor: pointer;");
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
        var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
        var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$43) => {
          var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData1);
          var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g) => {
            var g$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).updated__I__O__sci_Vector(idx, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$1).apply__I__O(idx))));
          }));
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$22, mod);
        }));
        return $x_52.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_51.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_50, $x_49, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$23, onNext)])));
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$5);
    }))));
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$24, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_48 = $x_63.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_62.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_61, $x_57, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_56).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_55.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_54, $x_53, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])))])));
  var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_45 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text-align: center; display: flex; flex-direction: column; align-items: center;");
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 0 0 0.5rem 0;");
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_41 = $x_44.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_43.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_42, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, "2x maskiert", r$5)])));
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("pixel-grid");
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData2).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((grid$2) => {
    var grid$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(grid$2);
    var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(grid$3);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_StrictOptimizedIterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$28))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$6) => {
      var x$1$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1$6);
      if ((x$1$7 !== null)) {
        var isOn$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$7)._1__O());
        var idx$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$7)._2__O());
        var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter((isOn$1 ? "pixel on" : "pixel"));
        var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("width: 28px; height: 28px; cursor: pointer;");
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
        var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
        var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$44) => {
          var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData2);
          var mod$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((g$2) => {
            var g$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(g$2);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$3).updated__I__O__sci_Vector(idx$1, (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(g$3).apply__I__O(idx$1))));
          }));
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$30, mod$1);
        }));
        return $x_36.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_35.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_34, $x_33, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$31, onNext$1)])));
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$7);
    }))));
  }));
  var childrenSource$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$32, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_32 = $x_47.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_46.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_45, $x_41, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_40).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_39.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_38, $x_37, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])))])));
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$34, "Abgeben", r$6);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$2, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$45) => {
    var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData1);
    var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$36.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var current1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$37.tryNow__s_util_Try()).get__O());
    var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(userMaskedData2);
    var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$38.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var current2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$39.tryNow__s_util_Try()).get__O());
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var a1$3;
    var a1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(4);
    var it = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
    var i$3 = 0;
    var y = a1.u.length;
    while (((i$3 < y) && it.sci_RangeIterator__f__hasNext)) {
      a1.set(i$3, it.next__I());
      i$3 = ((1 + i$3) | 0);
    }
    var a1$3 = a1;
    var this$50 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1(a1$3);
    var f = ((r$7) => {
      var r$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(r$7);
      var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current1);
      var from = (r$8 << 2);
      var until = (((1 + r$8) | 0) << 2);
      var rowSlice = this$47.slice__I__I__sci_Vector(from, until);
      var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(correctMaskedData1);
      var from$1 = (r$8 << 2);
      var until$1 = (((1 + r$8) | 0) << 2);
      var expectedRow = this$48.slice__I__I__sci_Vector(from$1, until$1);
      var value = ((rowSlice === null) ? (expectedRow === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowSlice).equals__O__Z(expectedRow));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
    });
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_VectorStatics$();
    var a = this$50.sci_Vector__f_prefix1;
    _return: {
      var i$4 = 0;
      while ((i$4 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).u.length)) {
        var v1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).get(i$4);
        var v2 = f(v1);
        if ((!Object.is(v1, v2))) {
          var at = i$4;
          var ac = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).u.length);
          if ((at > 0)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemArraycopyRefs($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a), 0, ac, 0, at);
          }
          ac.set(at, v2);
          var i$5 = ((1 + at) | 0);
          while ((i$5 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).u.length)) {
            var $x_25 = i$5;
            var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a).get(i$5);
            ac.set($x_25, f(x0));
            i$5 = ((1 + i$5) | 0);
          }
          var $x_24 = ac;
          break _return;
        }
        i$4 = ((1 + i$4) | 0);
      }
      var $x_24 = a;
    }
    var statuses1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_24);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Vector$();
    var a1$3$1;
    var a1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O(4);
    var it$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 3, false);
    var i$6 = 0;
    var y$1 = a1$1.u.length;
    while (((i$6 < y$1) && it$1.sci_RangeIterator__f__hasNext)) {
      a1$1.set(i$6, it$1.next__I());
      i$6 = ((1 + i$6) | 0);
    }
    var a1$3$1 = a1$1;
    var this$62 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1(a1$3$1);
    var f$1 = ((r$2$1) => {
      var r$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(r$2$1);
      var this$59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(current2);
      var from$2 = (r$9 << 2);
      var until$2 = (((1 + r$9) | 0) << 2);
      var rowSlice$1 = this$59.slice__I__I__sci_Vector(from$2, until$2);
      var this$60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(correctMaskedData2);
      var from$3 = (r$9 << 2);
      var until$3 = (((1 + r$9) | 0) << 2);
      var expectedRow$1 = this$60.slice__I__I__sci_Vector(from$3, until$3);
      var value$1 = ((rowSlice$1 === null) ? (expectedRow$1 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowSlice$1).equals__O__Z(expectedRow$1));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$1);
    });
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_VectorStatics$();
    var a$1 = this$62.sci_Vector__f_prefix1;
    _return$1: {
      var i$7 = 0;
      while ((i$7 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a$1).u.length)) {
        var v1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a$1).get(i$7);
        var v2$1 = f$1(v1$1);
        if ((!Object.is(v1$1, v2$1))) {
          var at$1 = i$7;
          var ac$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a$1).u.length);
          if ((at$1 > 0)) {
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemArraycopyRefs($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a$1), 0, ac$1, 0, at$1);
          }
          ac$1.set(at$1, v2$1);
          var i$8 = ((1 + at$1) | 0);
          while ((i$8 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a$1).u.length)) {
            var $x_27 = i$8;
            var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(a$1).get(i$8);
            ac$1.set($x_27, f$1(x0$1));
            i$8 = ((1 + i$8) | 0);
          }
          var $x_26 = ac$1;
          break _return$1;
        }
        i$7 = ((1 + i$7) | 0);
      }
      var $x_26 = a$1;
    }
    var statuses2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_Vector1($x_26);
    var allStatuses = statuses1.appendedAll__sc_IterableOnce__sci_Vector(statuses2);
    var this$64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$64, allStatuses);
    var this$67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allStatuses);
    var this$66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
    var toIterableOnce = this$66.s_$less$colon$less$__f_singleton;
    var allCorrect = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__flatten__F1__O(this$67, toIterableOnce))).forall__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x) => {
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(x);
      return x$2;
    })));
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(allCorrect);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_28 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$70, onNext$2);
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.5rem 1rem; align-self: flex-start; margin-top: 2rem;");
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$71 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$3$1) => {
    var x$1$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$3$1);
    if ((x$1$8 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x228 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$8)).s_Some__f_value);
      if ((x228 === true)) {
        return "btn-success";
      }
      if ((x228 === false)) {
        return "btn-error";
      }
    }
    var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$3 === x$1$8)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$8);
  }));
  var $x_21 = $x_80.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_79.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_78, $x_71, $x_64, $x_48, $x_32, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_31).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_29, $x_28, $x_23, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_22).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$71, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$89 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((statuses) => {
    var statuses$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(statuses);
    var this$72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(statuses$1);
    var res = false;
    var it$2 = this$72.iterator__sc_Iterator();
    while (((!res) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).hasNext__Z())) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).next__O();
      var _$46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x0$2);
      var this$73 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$46);
      res = (!this$73.isEmpty__Z());
    }
    if (res) {
      var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;");
      var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$74 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_15 = $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$74, "Ergebnisse pro Reihe:", r$10)])));
      var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).ul__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$87 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var this$80 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      var this$86;
      var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_RangeIterator(0, 1, 7, false);
      if (iter.sci_RangeIterator__f__hasNext) {
        var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.next__I(), this$80);
        var curr = result;
        while (iter.sci_RangeIterator__f__hasNext) {
          var temp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(iter.next__I(), this$80);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(curr).sci_$colon$colon__f_next = temp;
          curr = temp;
        }
        var this$86 = result;
      } else {
        var this$86 = this$80;
      }
      var f$2 = ((idx$2) => {
        var idx$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(idx$2);
        var this$81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(statuses$1);
        var this$82 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(this$81);
        var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$82.apply__O__s_Option(idx$3));
        var this$83 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
        var status = $x_7.flatten__s_$less$colon$less__s_Option(this$83.s_$less$colon$less$__f_singleton);
        var section = ((idx$3 < 4) ? "1x maskiert" : "2x maskiert");
        var rowNum = ((1 + ((idx$3 % 4) | 0)) | 0);
        var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).li__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
        var this$84 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rowStatusVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
        var project$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$47) => {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Vector(_$47);
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x233 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(status)).s_Some__f_value);
            if ((x233 === true)) {
              return "color: green; font-weight: bold;";
            }
            if ((x233 === false)) {
              return "color: red; font-weight: bold;";
            }
          }
          var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
          if ((x$4 === status)) {
            return "";
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }));
        var $x_9 = $x_10.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$84, project$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
        var this$85 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        matchResult75: {
          var $x_8;
          if ((status instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
            var x238 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(status)).s_Some__f_value);
            if ((x238 === true)) {
              var $x_8 = "Richtig!";
              break matchResult75;
            }
            if ((x238 === false)) {
              var $x_8 = "Falsch";
              break matchResult75;
            }
          }
          var x$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
          if ((x$5 === status)) {
            var $x_8 = "";
            break matchResult75;
          }
          throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(status);
        }
        var value$2 = ((((section + ", Reihe ") + rowNum) + ": ") + $x_8);
        var r$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
        return $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$85, value$2, r$11)])));
      });
      if ((this$86 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$3 = this$86.head__O();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$86.tail__O());
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$4), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
        }
        var nodes = h;
      }
      var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
      return $x_20.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_18, $x_15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_14).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeSeqToModifier__O__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$87, nodes, renderableSeq)])))])));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$89, project$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_88.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_87.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_84, $x_81, $x_21, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.renderFehlerkorrekturLueckentext__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var answer1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var answer2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var answer3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var answer4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var check1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var check4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var showInfotext = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(false);
  var $x_78 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_77 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_76 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_75 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_74 = $x_76.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_75.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "Aufgabe 7", r)])));
  var $x_73 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_71 = $x_73.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_72.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$2, "Erg\u00e4nze die L\u00fccken im folgenden Text:", r$1)])));
  var $x_70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_68 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 1.5rem; padding: 1rem; background: #f9f9f9; border-radius: 8px;");
  var $x_67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin: 1rem 0;");
  var $x_64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_63 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_62 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check1));
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s) => {
    var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s);
    return ("margin-bottom: 1rem; padding: 0.5rem; " + s$1);
  }));
  var $x_61 = $x_62.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$4, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_58 = $x_60.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_59.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$5, "Je mehr Daten zur Fehlererkennung und -korrektur genutzt werden, desto ", r$2)])));
  var $x_57 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer1).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer1).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$7, onNext);
  var $x_52 = $x_57.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_56.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_55, $x_54, $x_53, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])));
  var $x_51 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_49 = $x_64.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_63.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_61, $x_58, $x_52, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_51).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_50.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, " ist die Wahrscheinlichkeit, Fehler zu erkennen und zu korrigieren.", r$3)])))])));
  var $x_48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check2));
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$2) => {
    var s$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$2);
    return ("margin-bottom: 1rem; padding: 0.5rem; " + s$3);
  }));
  var $x_45 = $x_46.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$10, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_42 = $x_44.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_43.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "Substutionsfehler lassen sich  ", r$4)])));
  var $x_41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer2).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer2).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$1).onNext__O__V(_$1$1);
  }));
  var listener$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$13, onNext$1);
  var $x_36 = $x_41.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_40.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_39, $x_38, $x_37, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener$1, updater$1)])));
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_33 = $x_48.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_47.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_45, $x_42, $x_36, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_35).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_34.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$15, "verbessern, als L\u00f6schfehler.", r$5)])))])));
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Llivechart_Main$__getLineStyle$2__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_core_Signal(this, check3));
  var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((s$3$1) => {
    var s$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$3$1);
    return ("margin-bottom: 1rem; padding: 0.5rem; " + s$4);
  }));
  var $x_29 = $x_30.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$16, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_26 = $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, "Pr\u00fcfsummen dienen vor allem zur ", r$6)])));
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer3).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$2, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer3).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$2).onNext__O__V(_$1$2);
  }));
  var listener$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$19, onNext$2);
  var $x_20 = $x_25.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_24.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_23, $x_22, $x_21, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener$2, updater$2)])));
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_17 = $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$21, "und nicht zur", r$7)])));
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("");
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer4).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$3, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var sink$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer4).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$3) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$3).onNext__O__V(_$1$3);
  }));
  var listener$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$23, onNext$3);
  var $x_11 = $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_14, $x_13, $x_12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener$3, updater$3)])));
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_8 = $x_67.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_66.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_65, $x_49, $x_33, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_32).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_31.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_29, $x_26, $x_20, $x_17, $x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$25, ".", r$8)])))])))])));
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, "Abgeben", r$9);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$4, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$49) => {
    var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer1);
    var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$28.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$29.tryNow__s_util_Try()).get__O());
    var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer2);
    var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$30.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$31.tryNow__s_util_Try()).get__O());
    var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer3);
    var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$32.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$33.tryNow__s_util_Try()).get__O());
    var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answer4);
    var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$34.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var a4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$35.tryNow__s_util_Try()).get__O());
    var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check1);
    var value = $p_Llivechart_Main$__isCorrect1$2__T__Z(this, a1);
    var value$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$37, value$1);
    var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check2);
    var value$2 = $p_Llivechart_Main$__isCorrect2$2__T__Z(this, a2);
    var value$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$39, value$3);
    var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check3);
    var value$4 = $p_Llivechart_Main$__isCorrect3$2__T__Z(this, a3);
    var value$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$4);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$41, value$5);
    var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(check4);
    var value$6 = $p_Llivechart_Main$__isCorrect4$2__T__Z(this, a4);
    var value$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(value$6);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$43, value$7);
    var allCorrect = (($p_Llivechart_Main$__isCorrect1$2__T__Z(this, a1) && $p_Llivechart_Main$__isCorrect2$2__T__Z(this, a2)) && $p_Llivechart_Main$__isCorrect3$2__T__Z(this, a3));
    var this$44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showInfotext);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$44, true);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(allCorrect);
  }))));
  var sink$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1$4) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink$4).onNext__O__V(_$1$4);
  }));
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$46, onNext$4);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("margin-top: 1rem; padding: 0.5rem 1rem;");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1);
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x248 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$1)).s_Some__f_value);
      if ((x248 === true)) {
        return "btn-success";
      }
      if ((x248 === false)) {
        return "btn-error";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  var $x_1 = $x_70.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_69.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_68, $x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_7).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_5, $x_4, $x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$47, project$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(showInfotext).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((show) => {
    var show$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(show);
    return (show$1 ? this.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement("Fehlerkorrektur in QR-Codes", "In QR-Codes wird Reed-Solomon-Codes zur Fehlerkorrektur genutzt. Dies ist ein besonders leistungsf\u00e4higes Verfahren, das beide Fehlerarten zum Teil korrigieren kann. Die Fehlerkorrektur wird dabei sowohl auf die Daten, als auch auf die Metadaten (z.B. Formatinformationen, Maske) angewendet.\r\n\r\nDabei werden QR-Codes nach Fehlertoleranzstufen klassifiziert. Die Fehlertoleranz liegt dabei zwischen 7% und 30% und gibt an wieviel % des QR-Codes besch\u00e4digt sein k\u00f6nnen, ohne dass die Information verloren geht. Die vier Stufen sind:\r\n\u2022 Level L: 7% Fehlertoleranz (niedrig) \r\n\u2022 Level M: 15% Fehlertoleranz (mittel) \r\n\u2022 Level Q: 25% Fehlertoleranz (hoch)   \r\n\u2022 Level H: 30% Fehlertoleranz (sehr hoch) \r\n\r\nDer Reed-Solomon-Code arbeitet mit mathematischen Gleichungen und kann sowohl Substitutionsfehler (falsche Pixel) als auch L\u00f6schfehler (fehlende Bereiche) korrigieren. Dies macht QR-Codes sehr robust gegen\u00fcber Verschmutzung, Besch\u00e4digung oder teilweiser Verdeckung.", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()) : ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("")));
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$49, project$4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_78.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_77.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_74, $x_71, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.generateQRCode__T__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(text, size) {
  var encodedText = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(encodeURIComponent(text));
  var qrUrl = ((((("https://api.qrserver.com/v1/create-qr-code/?size=" + size) + "x") + size) + "&data=") + encodedText);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(qrUrl), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("QR Code f\u00fcr: " + text)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code")])));
});
$c_Llivechart_Main$.prototype.generateQRCodeWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(text, caption, size) {
  var encodedText = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(encodeURIComponent(text));
  var qrUrl = ((((("https://api.qrserver.com/v1/create-qr-code/?size=" + size) + "x") + size) + "&data=") + encodedText);
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code-with-caption");
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(qrUrl), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("QR Code f\u00fcr: " + text)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code")])));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, caption, r), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-caption")])))])));
});
$c_Llivechart_Main$.prototype.imageWithCaption__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(imageSrc, caption, size) {
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code-with-caption");
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(imageSrc), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(caption), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size)), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-code")])));
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, caption, r), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("qr-caption")])))])));
});
$c_Llivechart_Main$.prototype.imageWithFallback__T__T__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(baseName, altText, size) {
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([(("/" + baseName) + ".png"), (("/" + baseName) + ".jpg"), (("/public/" + baseName) + ".png"), (("/public/" + baseName) + ".jpg")]));
  var candidates = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var idxVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(0);
  var srcVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(candidates).head__O());
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(srcVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(altText);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size));
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + size));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onError__Lcom_raquo_laminar_keys_EventProp();
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$50) => {
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(idxVar);
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$6.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var next = ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$7.tryNow__s_util_Try()).get__O())) | 0);
    if ((next < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(candidates).length__I())) {
      var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(idxVar);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$8, next);
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(srcVar);
      var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(candidates);
      var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$9, next);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$10, value);
    }
  }));
  return $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $x_3, $x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$11, onNext)])));
});
$c_Llivechart_Main$.prototype.renderExercise__T__sci_Set__I__s_Option__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement = (function(taskText, keywords, index, image, chapter, submitCallback) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var storedData = this.loadFromLocalStorage__T__s_Option(chapter);
  } else {
    var storedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedData);
  if (this$4.isEmpty__Z()) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$4.get__O();
    var _$51 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
    var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$51).Llivechart_Main$ChapterData__f_exercises);
  }
  if (this$5.isEmpty__Z()) {
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  } else {
    var $x_1 = this$5.get__O();
  }
  var storedAnswers = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($x_1);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswers);
  _return: {
    var these = this$7;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var _$52 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$52).Llivechart_Main$ExerciseResponse__f_task === taskText)) {
        var this$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
        break _return;
      }
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (this$8.isEmpty__Z()) {
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$2 = this$8.get__O();
    var _$53 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$2);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$53).Llivechart_Main$ExerciseResponse__f_answer;
  }
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2);
  var initialText = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$9.isEmpty__Z() ? "" : this$9.get__O()));
  var textVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(initialText);
  var editor = new $j_livechart$002e$002dSimple$002dText$002dEditor.$c_Llivechart_SimpleTextEditor(textVar);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_className).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("exercise-content");
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  if ((index === (-1))) {
    var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "Aufgabe", r);
  } else {
    var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value = ("Aufgabe " + index);
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$12, value, r$1);
  }
  var $x_14 = $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_15])));
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(image);
  if (this$13.isEmpty__Z()) {
    var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$3 = this$13.get__O();
    var img = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveElement(x0$3);
    var nodes = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("exercise-image"), img]))));
  }
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeOptionToModifier__s_Option__Lcom_raquo_laminar_modifiers_Modifier(this$14, nodes);
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_10 = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$15, taskText, r$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("white-space: pre-wrap;")])));
  var $x_9 = editor.Llivechart_SimpleTextEditor__f_domElement;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(textVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var text$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text);
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$18 === ""))) {
      this.persistExerciseAnswer__T__T__T__V(chapter, taskText, text$1);
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$20, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$22, "Abgeben", r$3);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$54) => {
    var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(textVar);
    var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$24.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var text$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$25.tryNow__s_util_Try()).get__O());
    var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(submitCallback);
    if ((!this$26.isEmpty__Z())) {
      var x0$4 = this$26.get__O();
      var callback = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F0(x0$4);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(callback).apply__O();
    }
    return text$2;
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text$2$1) => {
    var text$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text$2$1);
    return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(keywords).isEmpty__Z() || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(keywords).exists__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((k) => {
      var k$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(k);
      var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text$3);
      var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$27.toLowerCase()));
      var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(k$1);
      var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$28.toLowerCase());
      var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
      return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$29.indexOf(this$30)) !== (-1));
    }))));
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => {
    var ok$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(ok$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$32, onNext);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1);
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x253 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$1)).s_Some__f_value);
      if ((x253 === true)) {
        return "btn-success";
      }
      if ((x253 === false)) {
        return "btn-error";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  return $x_20.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_18, $x_14, $x_13, $x_10, $x_9, $x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_7).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_5, $x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$33, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])));
});
$c_Llivechart_Main$.prototype.renderExerciseMC__T__sci_List__I__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(taskText, choices, index, chapter) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var storedData = this.loadFromLocalStorage__T__s_Option(chapter);
  } else {
    var storedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedData);
  if (this$4.isEmpty__Z()) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$4.get__O();
    var _$55 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
    var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$55).Llivechart_Main$ChapterData__f_exercises);
  }
  if (this$5.isEmpty__Z()) {
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  } else {
    var $x_1 = this$5.get__O();
  }
  var storedAnswers = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($x_1);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswers);
  _return: {
    var these = this$7;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var _$56 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$56).Llivechart_Main$ExerciseResponse__f_task === taskText)) {
        var this$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
        break _return;
      }
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  if (this$8.isEmpty__Z()) {
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$2 = this$8.get__O();
    var _$57 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(x0$2);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$57).Llivechart_Main$ExerciseResponse__f_answer;
  }
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2);
  var storedAnswer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$9.isEmpty__Z() ? "" : this$9.get__O()));
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswer);
  if ((!(this$12 === ""))) {
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedAnswer);
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(this$13, ", ", 0);
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
      var x1 = i;
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
      var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
      var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$19)));
      _return$1: {
        var these$1 = this$20;
        while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).isEmpty__Z())) {
          var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O();
          var _$58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x0$4);
          var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$58)._1__O()))._1__O();
          if (((x === null) ? (x0$3 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_equals__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x), x0$3))) {
            var this$21 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O());
            break _return$1;
          }
          these$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).tail__O());
        }
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      }
      if (this$21.isEmpty__Z()) {
        var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0$5 = this$21.get__O();
        var _$59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x0$5);
        var elems$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$59)._2__O()));
      }
      var it = elems$1.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
        var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
        var unboxedElem = ((elem === null) ? 0 : elem);
        jsElems.push(unboxedElem);
      }
      i = ((1 + i) | 0);
    }
    var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3.wrapIntArray__AI__scm_ArraySeq$ofInt(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I(new Int32Array(jsElems))));
    var initialSelected = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$22);
  } else {
    var initialSelected = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  }
  var selectedVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(initialSelected);
  var lastCheckVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_className).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("exercise-content");
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  if ((index === (-1))) {
    var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$24, "Aufgabe", r);
  } else {
    var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value = ("Aufgabe " + index);
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$25, value, r$1);
  }
  var $x_25 = $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_26])));
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_22 = $x_24.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_23.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$26, taskText, r$2)])));
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_state_Val$().apply__O__Lcom_raquo_airstream_state_Val(choices)));
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$60) => {
    var _$60$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(_$60);
    var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$60$1);
    var this$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$30)));
    var f = ((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
      if ((x$1$1 !== null)) {
        var x255 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
        if ((x255 !== null)) {
          var label = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x255)._1__O());
          var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
          var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("checkbox");
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onChange__Lcom_raquo_laminar_keys_EventProp();
          var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
          var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$61) => {
            var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar);
            var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => {
              var selected$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(selected);
              if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$1).contains__O__Z(idx)) {
                var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$1);
                return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$32.excl__O__sci_SetOps(idx));
              } else {
                var this$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$1);
                return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$33.incl__O__sci_SetOps(idx));
              }
            }));
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$34, mod);
          }));
          var $x_14 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$35, onNext);
          var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).checked__Lcom_raquo_laminar_keys_HtmlProp();
          var this$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
          var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$62) => {
            var _$62$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(_$62);
            return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$62$1).contains__O__Z(idx);
          }));
          var $x_12 = $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_15, $x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_13).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$36, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()))])));
          var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
          var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var this$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var value$1 = (" " + label);
          var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
          return $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_11).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_10.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$37, value$1, r$3)])))])));
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
    });
    if ((this$38 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$6 = this$38.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$38.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      return h;
    }
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$39, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_9 = $x_21.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$41, "Abgeben", r$4);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false)).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$63) => {
    var this$43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar);
    var this$44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$43.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var selected$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$44.tryNow__s_util_Try()).get__O());
    var this$47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$47 === ""))) {
      var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$2).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((idx$1) => {
        var idx$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(idx$1);
        var this$48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$48, idx$2)))._1__O());
      })))));
      var selectedChoices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$49, "", ", ", "");
      var this$65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_allResponsesVar);
      var mod$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
        var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
        var allTasksForChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_chapterExercises).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
          var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
        }))));
        var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTasksForChapter);
        var f$1 = ((task) => {
          var task$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(task);
          var answer = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
          return new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(task$1, answer);
        });
        if ((this$52 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var emptyExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
        } else {
          var x0$8 = this$52.head__O();
          var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$8), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          var t$1 = h$1;
          var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$52.tail__O());
          while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
            var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
            var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$9), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx$1;
            t$1 = nx$1;
            rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
          }
          var emptyExercises = h$1;
        }
        var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
          var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
          return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, emptyExercises, rating);
        }))));
        var this$55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing).Llivechart_Main$ChapterData__f_exercises);
        var f$2 = ((_$64) => {
          var _$64$1 = $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$as_Llivechart_Main$ExerciseResponse(_$64);
          return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$64$1).Llivechart_Main$ExerciseResponse__f_task === taskText);
        });
        var l = this$55;
        block: {
          var result;
          while (true) {
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
              var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
              break;
            } else {
              var h$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
              var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
              if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$2(h$2)) === true)) {
                l = t$2;
                continue;
              }
              var start = l;
              var remaining = t$2;
              while (true) {
                if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).isEmpty__Z()) {
                  var result = start;
                  break block;
                } else {
                  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
                  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$2(x$2)) !== true)) {
                    remaining = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).tail__O());
                    continue;
                  }
                  var firstMiss = remaining;
                  var newHead = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                  var toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(start).tail__O());
                  var currentLast = newHead;
                  while ((toProcess !== firstMiss)) {
                    var newElem = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem;
                    currentLast = newElem;
                    toProcess = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(toProcess).tail__O());
                  }
                  var next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(firstMiss).tail__O());
                  var nextToCopy = next;
                  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).isEmpty__Z())) {
                    var head = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).head__O();
                    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f$2(head)) !== true)) {
                      next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    } else {
                      while ((nextToCopy !== next)) {
                        var newElem$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).head__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
                        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                        currentLast = newElem$2;
                        nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).tail__O());
                      }
                      nextToCopy = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                      next = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(next).tail__O());
                    }
                  }
                  if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextToCopy).isEmpty__Z())) {
                    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(currentLast).sci_$colon$colon__f_next = nextToCopy;
                  }
                  var result = newHead;
                  break block;
                }
              }
            }
          }
        }
        var this$58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
        var answer$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(selectedChoices);
        var elem$1 = new $j_livechart$002e$002dMain$0024$002dExercise$002dResponse.$c_Llivechart_Main$ExerciseResponse(taskText, answer$1);
        var updatedExercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$58, elem$1));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var this$59 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var chapter$1 = this$59.Llivechart_Main$ChapterData__f_chapter;
        var this$60 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var rating$1 = this$60.Llivechart_Main$ChapterData__f_rating;
        var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, updatedExercises, rating$1);
        this.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter, updatedChapter);
        var this$64 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$64.updated__O__O__sci_MapOps(chapter, updatedChapter));
      }));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$65, mod$1);
    }
    return selected$2;
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected$3) => {
    var selected$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(selected$3);
    var this$66 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
    var this$67 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$66))).collect__s_PartialFunction__sci_List(new $j_livechart$002e$002dMain$0024$0024anon$00243.$c_Llivechart_Main$$anon$3()));
    var correctIndices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$67);
    return ((selected$4 === null) ? (correctIndices === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$4).equals__O__Z(correctIndices));
  })))).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((ok) => {
    var ok$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(ok$1);
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$69, onNext$1);
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$70 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(lastCheckVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2);
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x273 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
      if ((x273 === true)) {
        return "btn-success";
      }
      if ((x273 === false)) {
        return "btn-error";
      }
    }
    var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$3 === x$1$3)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  return $x_31.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_29, $x_25, $x_22, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_6, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_4).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$70, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])))])));
});
$c_Llivechart_Main$.prototype.renderZusammenfassungQuiz__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["schwarz", "wei\u00df"]));
  var _4 = this$2.from__sc_IterableOnce__sci_Set(elems$1);
  var $x_19 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("In welcher Form liegen die Daten in einem QR-Code vor?", "text", _3, _4);
  var elems$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["position", "meta", "daten"]));
  var _4$1 = this$5.from__sc_IterableOnce__sci_Set(elems$3);
  var $x_18 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Nenne die drei Elemente eines QR-Codes.", "text", _3$1, _4$1);
  var elems$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["256"]));
  var _4$2 = this$8.from__sc_IterableOnce__sci_Set(elems$5);
  var $x_17 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Wie viele verschiedene Zeichen k\u00f6nnen mit 8 Bits dargestellt werden?", "text", _3$2, _4$2);
  var elems$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$6);
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["lesbar", "kontrast", "erkennung"]));
  var _4$3 = this$11.from__sc_IterableOnce__sci_Set(elems$7);
  var $x_16 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Erkl\u00e4re, warum Maskierung in QR-Codes wichtig ist.", "text", _3$3, _4$3);
  var elems$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$8);
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["unleserlich", "besch\u00e4digt"]));
  var _4$4 = this$14.from__sc_IterableOnce__sci_Set(elems$9);
  var $x_15 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Wof\u00fcr ist die Fehlerkorrektur in QR-Codes wichtig?", "text", _3$4, _4$4);
  var elems$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Quadrate", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Raute", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Kreise", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Dreiecke", false)]));
  var _3$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$10);
  var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
  var _4$5 = this$21.from__sc_IterableOnce__sci_Set(elems$11);
  var $x_14 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Welche Form haben die Positionsmarker im QR-Code?", "mc", _3$5, _4$5);
  var elems$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Gr\u00f6\u00dfe und Position der Pixel bestimmen", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Daten speichern", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Fehler korrigieren", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Masken anwenden", false)]));
  var _3$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$12);
  var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
  var _4$6 = this$28.from__sc_IterableOnce__sci_Set(elems$13);
  var $x_13 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Was ist die Hauptaufgabe des Timing Patterns?", "mc", _3$6, _4$6);
  var elems$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII kodiert Buchstaben mit 7 oder 8 Bits", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII kann beliebig lange Zeichenketten speichern", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII ist nur f\u00fcr Zahlen", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("ASCII wurde f\u00fcr QR-Codes erfunden", false)]));
  var _3$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$14);
  var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
  var _4$7 = this$35.from__sc_IterableOnce__sci_Set(elems$15);
  var $x_12 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Welche Aussage zu ASCII ist richtig?", "mc", _3$7, _4$7);
  var elems$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("1 Maske", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("8 Masken", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("300 Masken", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Unbegrenzt viele", false)]));
  var _3$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$16);
  var this$42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
  var _4$8 = this$42.from__sc_IterableOnce__sci_Set(elems$17);
  var $x_11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Wie viele Masken werden in einem QR-Code probiert?", "mc", _3$8, _4$8);
  var elems$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR ist eine logische Operation, die ihre eigene Umkehrfunktion ist", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR kann nur f\u00fcr Zahlen verwendet werden", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR wurde f\u00fcr QR-Codes erfunden", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("XOR hat keine praktische Anwendung", false)]));
  var _3$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$18);
  var this$49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
  var _4$9 = this$49.from__sc_IterableOnce__sci_Set(elems$19);
  var $x_10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Was ist XOR und seine Besonderheit?", "mc", _3$9, _4$9);
  var elems$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$20);
  var this$52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["ascii", "buchstabe", "pixel"]));
  var _4$10 = this$52.from__sc_IterableOnce__sci_Set(elems$21);
  var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Beschreibe den Prozess der Kodierung einer Nachricht in einen QR-Code.", "text", _3$10, _4$10);
  var elems$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$22);
  var this$55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["wiederholung"]));
  var _4$11 = this$55.from__sc_IterableOnce__sci_Set(elems$23);
  var $x_8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Was versteht man unter Redundanz bei der Fehlerkorrektur?", "text", _3$11, _4$11);
  var elems$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$24);
  var this$58 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["standard", "kodierung"]));
  var _4$12 = this$58.from__sc_IterableOnce__sci_Set(elems$25);
  var $x_7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Nenne zwei Vorteile, ASCII als Kodierung zu benutzen, im Gegensatz zu einer eigenen Kodierung.", "text", _3$12, _4$12);
  var elems$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("L (7%), M (15%), Q (25%), H (30%)", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("L (10%), M (20%), Q (30%), H (80%)", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Nur L und H", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Es gibt nur eine Ebene", false)]));
  var _3$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$26);
  var this$65 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
  var _4$13 = this$65.from__sc_IterableOnce__sci_Set(elems$27);
  var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Welche Fehlerkorrektur-Level gibt es in QR-Codes?", "mc", _3$13, _4$13);
  var elems$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um den Scanner dar\u00fcber zu informieren, welche Maske, Fehlerkorrektur und Version verwendet wurde", true), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um die Nachricht zu verschl\u00fcsseln", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um Platz zu sparen", false), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("Um die Lesbarkeit zu verbessern", false)]));
  var _3$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$28);
  var this$72 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)([]));
  var _4$14 = this$72.from__sc_IterableOnce__sci_Set(elems$29);
  var $x_5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Warum m\u00fcssen die Metadaten in einem QR-Code gespeichert werden?", "mc", _3$14, _4$14);
  var elems$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$30);
  var this$75 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["erkennung"]));
  var _4$15 = this$75.from__sc_IterableOnce__sci_Set(elems$31);
  var $x_4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Warum d\u00fcrfen in den Positionsmarkern keine Daten gespeichert werden?", "text", _3$15, _4$15);
  var elems$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$32);
  var this$78 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["ernut", "gleiche"]));
  var _4$16 = this$78.from__sc_IterableOnce__sci_Set(elems$33);
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Beschreibe, wie die Maske wieder r\u00fcckg\u00e4ngig gemacht wird.", "text", _3$16, _4$16);
  var elems$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$34);
  var this$81 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["66"]));
  var _4$17 = this$81.from__sc_IterableOnce__sci_Set(elems$35);
  var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Durch das dreifache Schreiben einer Nachricht k\u00f6nnen wie viel % der Nachricht unleserlich sein? ", "text", _3$17, _4$17);
  var elems$36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$36);
  var this$84 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["Text", "URL", "VCard"]));
  var _4$18 = this$84.from__sc_IterableOnce__sci_Set(elems$37);
  var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Nenne 3 Anwendungen f\u00fcr QR-Codes, welche du bei der Erstellung der Visitenkarte gesehen hast.", "text", _3$18, _4$18);
  var elems$38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
  var _3$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$38);
  var this$87 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var elems$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(["schule", "einsatz"]));
  var _4$19 = this$87.from__sc_IterableOnce__sci_Set(elems$39);
  var elems$40 = $x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T4.getArrayOf().constr)([$x_19, $x_18, $x_17, $x_16, $x_15, $x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, $x_4, $x_3, $x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T4("Beschreibe ein Szenario aus dem Schulalltag, in dem QR-Codes sinnvoll eingesetzt werden k\u00f6nnten.", "text", _3$19, _4$19)]));
  var quizQuestions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$40);
  var questionsVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(quizQuestions);
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var);
  var this$90 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Map$();
  var elems$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([]));
  var answersVar = $x_21.apply__O__Lcom_raquo_airstream_state_Var(this$90.from__sc_IterableOnce__sci_Map(elems$41));
  var resultsVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("quiz-container");
  var $x_41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h2__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$91 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_39 = $x_41.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_40.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$91, "QR Code Quiz", r)])));
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$92 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_36 = $x_38.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_37.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$92, "Beantworte die folgenden 20 Fragen. Textfragen erfordern bestimmte Schl\u00fcsselw\u00f6rter, Multiple-Choice-Fragen haben nur eine richtige Antwort.", r$1)])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$97 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(questionsVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((questions) => {
    var questions$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(questions);
    var this$95 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(questions$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$95))).map__F1__sci_List(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
      if ((x$1$1 !== null)) {
        var x275 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T4($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
        if ((x275 !== null)) {
          var question = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x275).T4__f__1);
          var qType = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x275).T4__f__2);
          var choices = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x275).T4__f__3);
          var keywords = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x275).T4__f__4);
          var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
          var questionNum = ((1 + idx) | 0);
          var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("quiz-question");
          var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h4__Lcom_raquo_laminar_tags_HtmlTag();
          var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var this$96 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var value = ((("Frage " + questionNum) + ": ") + question);
          var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
          return $x_34.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_33.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_32, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_31).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$96, value, r$2)]))), ((qType === "text") ? this.renderQuizTextQuestion__T__I__Lcom_raquo_airstream_state_Var__sci_Set__Lcom_raquo_laminar_nodes_ReactiveElement(question, idx, answersVar, keywords) : this.renderQuizMCQuestion__T__I__sci_List__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveElement(question, idx, choices, answersVar))])));
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
    })));
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$97, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$102 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(resultsVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2);
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
      var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("quiz-result");
      var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$99 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      var $x_24 = $x_26.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_25.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$99, "Ergebnis", r$3)])));
      var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
      var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$100 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_29.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_28.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_27, $x_24, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_23).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$100, result, r$4)])))])));
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$3)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$102, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_44.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_43.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_42, $x_39, $x_36, $x_35, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.renderQuizTextQuestion__T__I__Lcom_raquo_airstream_state_Var__sci_Set__Lcom_raquo_laminar_nodes_ReactiveElement = (function(question, questionIndex, answersVar, keywords) {
  var textVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var feedbackVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("quiz-text-answer");
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).textArea__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).rows__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(6);
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).cols__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(60);
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Deine Antwort hier...");
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("font-size: 1rem; padding: 0.75rem;");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(textVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var text$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(textVar);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$3, text$1);
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answersVar);
    var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((answers) => {
      var answers$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(answers);
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answers$1);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$6.updated__O__O__sci_MapOps(questionIndex, text$1));
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$7, mod);
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$8, onNext);
  var $x_13 = $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_17, $x_16, $x_15, $x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$10, "Antwort \u00fcberpr\u00fcfen", r);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$65) => {
    var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(textVar);
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$12.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var text$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$13.tryNow__s_util_Try()).get__O());
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(keywords);
    if ((!this$14.isEmpty__Z())) {
      var isCorrect = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(keywords).exists__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((k) => {
        var k$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(k);
        var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text$2);
        var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$15.toLowerCase()));
        var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(k$1);
        var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$16.toLowerCase());
        var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
        return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$17.indexOf(this$18)) !== (-1));
      })));
    } else {
      var isCorrect = false;
    }
    var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar);
    var value = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(isCorrect);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$20, value);
  }));
  var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$21, onNext$1);
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1);
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x288 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$1)).s_Some__f_value);
      if ((x288 === true)) {
        return "btn-success";
      }
      if ((x288 === false)) {
        return "btn-error";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  var $x_7 = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$22, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2);
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x293 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
      if ((x293 === true)) {
        var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("feedback-correct");
        var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
        return $x_3.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$23, " Richtig!", r$1)])));
      }
      if ((x293 === false)) {
        var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("feedback-incorrect");
        var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
        return $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$24, "Nicht ganz richtig. Versuche es nochmal!", r$2)])));
      }
    }
    var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$2 === x$1$3)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$26, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_22.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_21.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_20, $x_13, $x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.renderQuizMCQuestion__T__I__sci_List__Lcom_raquo_airstream_state_Var__Lcom_raquo_laminar_nodes_ReactiveElement = (function(question, questionIndex, choices, answersVar) {
  var selectedVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var feedbackVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("quiz-mc-answer");
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((selected) => {
    var selected$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(selected);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$3)));
    var f = ((x$1) => {
      var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$1);
      if ((x$1$1 !== null)) {
        var x295 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._1__O());
        if ((x295 !== null)) {
          var labelText = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x295)._1__O());
          var idx = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1$1)._2__O());
          var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("quiz-radio-option");
          var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
          var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("radio");
          var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).idAttr__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(((("question-" + questionIndex) + "-") + idx));
          var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(("" + idx));
          var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).checked__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selected$1).contains__O__Z(idx));
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onChange__Lcom_raquo_laminar_keys_EventProp();
          var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
          var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$66) => {
            var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar);
            var value = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(idx);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$7, value);
            var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answersVar);
            var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((answers) => {
              var answers$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(answers);
              var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(answers$1);
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$10.updated__O__O__sci_MapOps(questionIndex, labelText));
            }));
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$11, mod);
          }));
          var $x_17 = $x_23.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_22.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_21, $x_20, $x_19, $x_18, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$12, onNext)])));
          var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag();
          var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
          var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).forId__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(((("question-" + questionIndex) + "-") + idx));
          var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
          var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
          return $x_26.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_25.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_24, $x_17, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_16).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_14, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$13, labelText, r)])))])));
        }
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
    });
    if ((this$14 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0 = this$14.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$14.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      return h;
    }
  }));
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$15, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_13 = $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, "Antwort \u00fcberpr\u00fcfen", r$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$67) => {
    var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(selectedVar);
    var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$19.Lcom_raquo_airstream_state_SourceVar__f_signal);
    var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$20.tryNow__s_util_Try()).get__O()));
    if ((!this$21.isEmpty__Z())) {
      var x0$2 = this$21.get__O();
      var idx$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x0$2);
      var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(choices);
      var isCorrect = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$22, idx$1)))._2__O());
      var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar);
      var value$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(isCorrect);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$24, value$1);
    }
  }));
  var $x_9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$25, onNext$1);
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls;
  var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2);
    if ((x$1$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x303 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$3)).s_Some__f_value);
      if ((x303 === true)) {
        return "btn-success";
      }
      if ((x303 === false)) {
        return "btn-error";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$3)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$3);
  }));
  var $x_7 = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_8).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMapper__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$26, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).StringValueMapper__Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$())])));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2$1) => {
    var x$1$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1$2$1);
    if ((x$1$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x308 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$4)).s_Some__f_value);
      if ((x308 === true)) {
        var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("feedback-correct");
        var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
        return $x_3.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$27, "Richtig!", r$2)])));
      }
      if ((x308 === false)) {
        var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag());
        var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
        var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("feedback-incorrect");
        var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
        var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
        return $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$28, "Nicht ganz richtig. Versuche es nochmal!", r$3)])));
      }
    }
    var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x$2 === x$1$4)) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$4);
  }));
  var childSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$30, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_31.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_29, $x_13, $x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
});
$c_Llivechart_Main$.prototype.Infotext__T__T__s_Option__Lcom_raquo_laminar_nodes_ReactiveElement = (function(title, text, image) {
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("infotext");
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_13 = $x_15.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_14.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, title, r)])));
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(image);
  if (this$2.isEmpty__Z()) {
    var nodes = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$2.get__O();
    var imageSrc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
    var nodes = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).img__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).alt__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(title), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).src__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(imageSrc), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("max-width: 100%; margin: 1rem 0; border-radius: 4px;")]))));
  }
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__nodeOptionToModifier__s_Option__Lcom_raquo_laminar_modifiers_Modifier(this$3, nodes);
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text);
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(this$4, "\n", 0);
  var f = ((line) => {
    var line$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(line);
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1));
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
    if ((!(this$8 === ""))) {
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag());
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
      var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      var value = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__trim__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(line$1));
      var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
      return $x_2.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, value, r$1)])));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_CommentNode("");
    }
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_nodes_ChildNode.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_3 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_7 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(x0$4)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$5))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_10 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_11 = i;
        var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(f(x0$8)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var asModifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((component) => {
    var component$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ChildNode(component);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r$2);
    return component$1;
  }));
  var renderableSeq = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$scalaArrayRenderable$();
  return $x_18.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_17.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_16, $x_13, $x_12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__seqToModifier__O__F1__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_Modifier(this$16, ys, asModifier, renderableSeq)])));
});
$c_Llivechart_Main$.prototype.TimeBadge__I__Lcom_raquo_laminar_nodes_ReactiveElement = (function(minutes) {
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("time-badge");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var value = (("\u23f1 ca. " + minutes) + " min");
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, value, r)])))])));
});
$c_Llivechart_Main$.prototype.chapterNavigation__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(currentHash) {
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T2.getArrayOf().constr)([new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#einfuehrung", "Einf\u00fchrung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#nachricht", "Nachrichten schreiben"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#maskierung", "Maskierung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#fehlerkorrektur", "Fehlerkorrektur"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#anwendung", "Anwendung"), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("#zusammenfassung", "Zusammenfassung")]));
  var chapters = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
  _return: {
    var i = 0;
    var these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this$8, 0, this$8);
    while (true) {
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these);
      if ((!this$11.isEmpty__Z())) {
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
        var _$69 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x0);
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$69)._1__O();
        if (((x === null) ? (currentHash === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_equals__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x), currentHash))) {
          var currentIndex = i;
          break _return;
        }
        i = ((1 + i) | 0);
        these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_LinearSeq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
      } else {
        break;
      }
    }
    var currentIndex = (-1);
  }
  var hasPrev = (currentIndex > 0);
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
  var hasNext = (currentIndex < (((-1) + this$12.length__I()) | 0));
  if (hasPrev) {
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
    var n = (((-1) + currentIndex) | 0);
    var prevChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$13, n));
  } else {
    var prevChapter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("", "");
  }
  if (hasNext) {
    var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapters);
    var n$1 = ((1 + currentIndex) | 0);
    var nextChapter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_LinearSeqOps__apply__I__O(this$15, n$1));
  } else {
    var nextChapter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2("", "");
  }
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("chapter-navigation");
  if (hasPrev) {
    var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).a__Lcom_raquo_laminar_tags_HtmlTag());
    var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).href__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prevChapter)._1__O());
    var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
    var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value = ("\u2190 " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prevChapter)._2__O());
    var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_7 = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_9).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_8.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$17, value, r), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("btn-primary")])))])));
  } else {
    var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([])));
  }
  if (hasNext) {
    var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).a__Lcom_raquo_laminar_tags_HtmlTag());
    var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).href__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextChapter)._1__O());
    var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
    var value$1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nextChapter)._2__O()) + " \u2192");
    var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
    var $x_1 = $x_6.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_5.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$18, value$1, r$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("btn-primary")])))])));
  } else {
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).span__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([])));
  }
  return $x_15.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_14.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_13, $x_7, $x_1])));
});
$c_Llivechart_Main$.prototype.Rating__T__Lcom_raquo_laminar_nodes_ReactiveElement = (function(chapter) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
  if ((!(this$3 === ""))) {
    var storedData = this.loadFromLocalStorage__T__s_Option(chapter);
  } else {
    var storedData = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedData);
  if (this$4.isEmpty__Z()) {
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0 = this$4.get__O();
    var _$70 = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData(x0);
    var this$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$70).Llivechart_Main$ChapterData__f_rating);
  }
  var storedRating = $j_livechart$002e$002dMain$0024$002dRating$002dData.$as_Llivechart_Main$RatingData((this$5.isEmpty__Z() ? new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "") : this$5.get__O()));
  var understandingVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_understanding);
  var difficultyVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_difficulty);
  var qualityVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_quality);
  var scopeVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_scope);
  var feedbackVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(storedRating).Llivechart_Main$RatingData__f_feedback);
  var $x_56 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_55 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_54 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-component");
  var $x_53 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h3__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_52 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_51 = $x_53.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_52.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$7, "Bewertung dieses Kapitels", r)])));
  var $x_50 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_49 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_48 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_47 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_46 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_45 = $x_47.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_46.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$8, "Ich habe den Inhalt verstanden", r$1)])));
  var $x_44 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_43 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_42 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_41 = $x_50.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_49.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_48, $x_45, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_44).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_43.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_42, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$9, "5 Sterne = vollst\u00e4ndige Zustimmung, 1 Stern = \u00fcberhaupt nicht", r$2)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, understandingVar, 5)])));
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_35 = $x_37.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_36.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$10, "Die Schwierigkeit der Inhalte war", r$3)])));
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_31 = $x_40.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_39.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_38, $x_35, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_34).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_33.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_32, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$11, "5 Sterne = sehr schwierig, 1 Stern = sehr leicht", r$4)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, difficultyVar, 5)])));
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_25 = $x_27.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_26.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$12, "Die Aufgaben haben mir Spa\u00df gemacht", r$5)])));
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_21 = $x_30.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_29.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_28, $x_25, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_24).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_23.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_22, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$13, "5 Sterne = viel Spa\u00df, 1 Stern = wenig Spa\u00df", r$6)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, qualityVar, 5)])));
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_15 = $x_17.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_16.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$14, "Der Umfang der Aufgaben war angemessen", r$7)])));
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).p__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-hint");
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_11 = $x_20.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_19.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_18, $x_15, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_14).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_12, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$15, "5 Sterne = Die Aufgaben hatten eine gute L\u00e4nge, 1 Stern = Die Aufgaben waren zu lang/zu kurz", r$8)]))), $p_Llivechart_Main$__ratingStars$1__T__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__Lcom_raquo_airstream_state_Var__I__Lcom_raquo_laminar_nodes_ReactiveElement(this, chapter, understandingVar, difficultyVar, qualityVar, scopeVar, feedbackVar, scopeVar, 5)])));
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("rating-category");
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).label__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_5 = $x_7.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$16, "Zus\u00e4tzliche Anmerkungen:", r$9)])));
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).textArea__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).rows__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(4);
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).placeholder__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("Deine Anmerkungen hier...");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$41 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var text$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text);
    var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(feedbackVar);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__set__O__V(this$18, text$1);
    var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(chapter);
    if ((!(this$21 === ""))) {
      var this$40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_allResponsesVar);
      var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
        var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(data);
        var existing = $j_livechart$002e$002dMain$0024$002dChapter$002dData.$as_Llivechart_Main$ChapterData($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1).getOrElse__O__F0__O(chapter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => {
          var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_sr_Nothing$.getArrayOf().constr)([]));
          var exercises = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
          var rating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(0, 0, 0, 0, "");
          return new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter, exercises, rating);
        }))));
        var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(understandingVar);
        var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$25.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var understanding = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$26.tryNow__s_util_Try()).get__O());
        var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(difficultyVar);
        var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$27.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var difficulty = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$28.tryNow__s_util_Try()).get__O());
        var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(qualityVar);
        var this$30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$29.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var quality = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$30.tryNow__s_util_Try()).get__O());
        var this$31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(scopeVar);
        var this$32 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$31.Lcom_raquo_airstream_state_SourceVar__f_signal);
        var scope = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$32.tryNow__s_util_Try()).get__O());
        var updatedRating = new $j_livechart$002e$002dMain$0024$002dRating$002dData.$c_Llivechart_Main$RatingData(understanding, difficulty, quality, scope, text$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var this$34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var chapter$1 = this$34.Llivechart_Main$ChapterData__f_chapter;
        var this$35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(existing);
        var exercises$1 = this$35.Llivechart_Main$ChapterData__f_exercises;
        var updatedChapter = new $j_livechart$002e$002dMain$0024$002dChapter$002dData.$c_Llivechart_Main$ChapterData(chapter$1, exercises$1, updatedRating);
        this.saveToLocalStorage__T__Llivechart_Main$ChapterData__V(chapter, updatedChapter);
        var this$39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Map(this$39.updated__O__O__sci_MapOps(chapter, updatedChapter));
      }));
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$40, mod);
    }
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$41, onNext);
  return $x_56.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_55.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_54, $x_51, $x_41, $x_31, $x_21, $x_11, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_8, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_4).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])))])))])));
});
var $d_Llivechart_Main$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$, "livechart.Main$", ({
  Llivechart_Main$: 1
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
