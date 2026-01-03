'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dModel$002dTest from "./livechart.-Model-Test.js";
/** @constructor */
function $c_jl_ClassLoader() {
}
$c_jl_ClassLoader.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_jl_ClassLoader.prototype.constructor = $c_jl_ClassLoader;
/** @constructor */
function $h_jl_ClassLoader() {
}
$h_jl_ClassLoader.prototype = $c_jl_ClassLoader.prototype;
/** @constructor */
function $c_jl_System$NanoTime$() {
  this.jl_System$NanoTime$__f_highPrecisionTimer = null;
  $n_jl_System$NanoTime$ = this;
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((typeof performance)) !== "undefined")) {
    var x = performance.now;
    var $x_1 = (!(x === (void 0)));
  } else {
    var $x_1 = false;
  }
  this.jl_System$NanoTime$__f_highPrecisionTimer = ($x_1 ? performance : Date);
}
$c_jl_System$NanoTime$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_jl_System$NanoTime$.prototype.constructor = $c_jl_System$NanoTime$;
/** @constructor */
function $h_jl_System$NanoTime$() {
}
$h_jl_System$NanoTime$.prototype = $c_jl_System$NanoTime$.prototype;
var $d_jl_System$NanoTime$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_jl_System$NanoTime$, "java.lang.System$NanoTime$", ({
  jl_System$NanoTime$: 1
}));
var $n_jl_System$NanoTime$;
function $m_jl_System$NanoTime$() {
  if ((!$n_jl_System$NanoTime$)) {
    $n_jl_System$NanoTime$ = new $c_jl_System$NanoTime$();
  }
  return $n_jl_System$NanoTime$;
}
/** @constructor */
function $c_Lmunit_internal_junitinterface_CustomRunners(runners) {
  this.Lmunit_internal_junitinterface_CustomRunners__f_runners = null;
  this.Lmunit_internal_junitinterface_CustomRunners__f_runners = runners;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runners).iterator__sc_Iterator());
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    var _$1$1 = $as_Lmunit_internal_junitinterface_CustomFingerprint(_$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$1$1).Lmunit_internal_junitinterface_CustomFingerprint__f_suite;
  }));
  var this$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$$anon$9(this$1, f);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$2);
}
$c_Lmunit_internal_junitinterface_CustomRunners.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_CustomRunners.prototype.constructor = $c_Lmunit_internal_junitinterface_CustomRunners;
/** @constructor */
function $h_Lmunit_internal_junitinterface_CustomRunners() {
}
$h_Lmunit_internal_junitinterface_CustomRunners.prototype = $c_Lmunit_internal_junitinterface_CustomRunners.prototype;
var $d_Lmunit_internal_junitinterface_CustomRunners = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_CustomRunners, "munit.internal.junitinterface.CustomRunners", ({
  Lmunit_internal_junitinterface_CustomRunners: 1
}));
function $p_Lmunit_internal_junitinterface_JUnitReporter__trace__jl_Throwable__V($thiz, t) {
  if (((!(t instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError)) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_logAssert)) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__logTrace__jl_Throwable__V($thiz, t);
  }
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V($thiz, method, status, throwable) {
  var testName = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).decodeName__T__T(method));
  var selector = new $c_Lsbt_testing_TestSelector(testName);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_eventHandler).handle__Lsbt_testing_Event__V(new $c_Lmunit_internal_junitinterface_JUnitEvent($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef, testName, status, selector, throwable, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong((-1), (-1))));
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, level, s) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_useSbtLoggers) {
    var xs = $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_loggers;
    var f = ((l) => {
      var l$1 = $as_Lsbt_testing_Logger(l);
      var msg = $p_Lmunit_internal_junitinterface_JUnitReporter__filterAnsiIfNeeded__Z__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).ansiCodesSupported__Z(), s);
      if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Debug === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).debug__T__V(msg);
      } else if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Info === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).info__T__V(msg);
      } else if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Warn === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).warn__T__V(msg);
      } else if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error === level)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).error__T__V(msg);
      } else {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l$1).error__T__V(msg);
      }
    });
    var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        f(x0);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        f(x0$1);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        f(x0$2);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        f(x0$3);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len)) {
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        f(x0$5);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        f(x0$6);
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        f(x0$7);
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  } else {
    matchResult2: {
      matchAlts1: {
        matchAlts2: {
          if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Debug === level)) {
            break matchAlts2;
          }
          if (($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Trace === level)) {
            break matchAlts2;
          }
          break matchAlts1;
        }
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_verbose)) {
          break matchResult2;
        }
      }
      var x = $p_Lmunit_internal_junitinterface_JUnitReporter__filterAnsiIfNeeded__Z__T__T($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_isAnsiSupported, s);
      var this$5 = $m_s_Console$();
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.out__Ljava_io_PrintStream());
      this$6.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
    }
  }
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__filterAnsiIfNeeded__Z__T__T($thiz, isColorSupported, s) {
  return ((isColorSupported && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_color) ? s : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().filterAnsi__T__T(s));
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__logTrace__jl_Throwable__V($thiz, t) {
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
  _return: {
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
      var x1 = i;
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_fileName !== null)) {
        var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_fileName);
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("StackTrace.scala")) !== (-1))) {
          var $x_1 = true;
        } else {
          var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_fileName);
          var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$5.indexOf("Throwables.scala")) !== (-1));
        }
      } else {
        var $x_1 = false;
      }
      if ((!$x_1)) {
        var i$1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var i$1 = (-1);
  }
  var lo = ((i$1 < 0) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length : i$1);
  var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_jl_StackTraceElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().slice$extension__O__I__I__O(xs, lo, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length), 1);
  var testFileName = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_color ? $p_Lmunit_internal_junitinterface_JUnitReporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) : null);
  _return$1: {
    var i$2 = 0;
    while ((i$2 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1$1 = i$2;
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$1).jl_StackTraceElement__f_fileName !== null)) {
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$1).jl_StackTraceElement__f_fileName);
        var $x_3 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$8.indexOf("JUnitExecuteTest.scala")) !== (-1));
      } else {
        var $x_3 = false;
      }
      if ($x_3) {
        var $x_2 = i$2;
        break _return$1;
      }
      i$2 = ((1 + i$2) | 0);
    }
    var $x_2 = (-1);
  }
  var i$3 = (((-1) + $x_2) | 0);
  var m = ((i$3 > 0) ? i$3 : (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0));
  $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((-1) + (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length - m) | 0)) | 0), t, testFileName);
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, framesInCommon, t, testFileName) {
  var m2 = m;
  var top = 0;
  var i = top;
  while ((i <= m2)) {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
    if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$1.startsWith("org.junit."))) {
      var $x_1 = true;
    } else {
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$2.startsWith("org.hamcrest."));
    }
    if ($x_1) {
      if ((i === top)) {
        top = ((1 + top) | 0);
      } else {
        m2 = (((-1) + i) | 0);
        var break$1 = false;
        while (((m2 > top) && (!break$1))) {
          var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m2)).toString__T();
          var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
          if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$3.startsWith("java.lang.reflect.")))) {
            var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
            var $x_2 = (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$4.startsWith("sun.reflect.")));
          } else {
            var $x_2 = false;
          }
          if ($x_2) {
            break$1 = true;
          } else {
            m2 = (((-1) + m2) | 0);
          }
        }
        i = m2;
      }
    }
    i = ((1 + i) | 0);
  }
  var x = top;
  var end = m2;
  var isEmpty = (x > end);
  if ((!isEmpty)) {
    var i$1 = x;
    while (true) {
      var x0 = i$1;
      $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, $p_Lmunit_internal_junitinterface_JUnitReporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x0), testFileName));
      if ((i$1 === end)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
  if ((m !== m2)) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, "    ...");
  } else if ((framesInCommon !== 0)) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, (("    ... " + framesInCommon) + " more"));
  }
  $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, trace, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getCause__jl_Throwable(), testFileName);
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, causedTrace, t, testFileName) {
  if ((t !== null)) {
    var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
    var m = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0);
    var n = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).u.length) | 0);
    while (true) {
      if (((m >= 0) && (n >= 0))) {
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m);
        var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).get(n);
        var $x_1 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        m = (((-1) + m) | 0);
        n = (((-1) + n) | 0);
      } else {
        break;
      }
    }
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V($thiz, $thiz.Lmunit_internal_junitinterface_JUnitReporter__f_Error, ("Caused by: " + t));
    $p_Lmunit_internal_junitinterface_JUnitReporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0) - m) | 0), t, testFileName);
  }
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) {
  _return: {
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1 = i;
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_declaringClass === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName)) {
        var idx = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var idx = (-1);
  }
  var this$4 = ((idx === (-1)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(idx)));
  if (this$4.isEmpty__Z()) {
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$1 = this$4.get__O();
    var _$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(x0$1);
    var this$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$3).jl_StackTraceElement__f_fileName);
  }
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$5.s_$less$colon$less$__f_singleton;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$6.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$6.get__O()));
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, e, testFileName) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_color) {
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName !== null)) {
      var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
      var highlight = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$1.indexOf("file:/")) !== (-1));
    } else {
      var highlight = false;
    }
  } else {
    var highlight = false;
  }
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder()).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().use__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_Reset))).append__T__scm_StringBuilder((highlight ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().use__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_Bold) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().use__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_DarkGrey)))).append__T__scm_StringBuilder("    at ")).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lmunit_internal_junitinterface_JUnitReporter__f_settings).decodeName__T__T((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_declaringClass + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_methodName)))).append__C__scm_StringBuilder(40);
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e), false)) {
    var $x_1 = "Native Method";
  } else if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName === null)) {
    var $x_1 = "Unknown Source";
  } else {
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
    var file = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.indexOf("file:/"));
    if ((file >= 0)) {
      var https = file;
    } else {
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
      var https = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$3.indexOf("https:/"));
    }
    if ((https >= 0)) {
      var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName);
      if (((https < 0) || (https > this$4.length))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$4, https);
      }
      var filename = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$4.substring(https));
    } else {
      var filename = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName;
    }
    var $x_1 = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber >= 0) ? ((filename + ":") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber) : filename);
  }
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).append__T__scm_StringBuilder($x_1)).append__C__scm_StringBuilder(41)).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().use__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_Reset)));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$5.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
}
function $p_Lmunit_internal_junitinterface_JUnitReporter__formatTime__D__T($thiz, elapsedMillis) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().c__T__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().format$extension__T__sci_Seq__T("%.2fs", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O([(elapsedMillis / 1000.0)]))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_DarkGrey);
}
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitReporter(eventHandler, loggers, settings, taskDef) {
  this.Lmunit_internal_junitinterface_JUnitReporter__f_eventHandler = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_loggers = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_settings = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef = null;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_isAnsiSupported = false;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Trace = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Debug = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Info = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Warn = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Error = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_eventHandler = eventHandler;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_loggers = loggers;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_settings = settings;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef = taskDef;
  _return: {
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(loggers).u.length)) {
      var x1 = i;
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(loggers).get(x1);
      if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).ansiCodesSupported__Z())) {
        var $x_1 = false;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = true;
  }
  this.Lmunit_internal_junitinterface_JUnitReporter__f_isAnsiSupported = ($x_1 && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(settings).Lmunit_internal_junitinterface_RunSettings__f_color);
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Trace = 0;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Debug = 1;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Info = 2;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Warn = 3;
  this.Lmunit_internal_junitinterface_JUnitReporter__f_Error = 4;
}
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitReporter;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitReporter() {
}
$h_Lmunit_internal_junitinterface_JUnitReporter.prototype = $c_Lmunit_internal_junitinterface_JUnitReporter.prototype;
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestSuiteStarted__V = (function() {
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().c__T__T__T(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + ":"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_GREEN));
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestStarted__T__V = (function(method) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_settings).Lmunit_internal_junitinterface_RunSettings__f_verbose) {
    $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, (method + " started"));
  }
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestIgnored__T__V = (function(method) {
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().c__T__T__T((("==> i " + method) + " ignored"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_YELLOW));
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Ignored, $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable()));
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportAssumptionViolation__T__D__jl_Throwable__V = (function(method, timeInSeconds, e) {
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().c__T__T__T((("==> s " + method) + " skipped"), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_YELLOW));
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Skipped, $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__(new $c_Lsbt_testing_OptionalThrowable(), e));
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestPassed__T__D__V = (function(method, elapsedMillis) {
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, this.Lmunit_internal_junitinterface_JUnitReporter__f_Info, (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().c__T__T__T(("  + " + method), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_GREEN) + " ") + $p_Lmunit_internal_junitinterface_JUnitReporter__formatTime__D__T(this, elapsedMillis)));
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Success, $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable()));
});
$c_Lmunit_internal_junitinterface_JUnitReporter.prototype.reportTestFailed__T__jl_Throwable__D__V = (function(method, ex, elapsedMillis) {
  var $x_2 = this.Lmunit_internal_junitinterface_JUnitReporter__f_Info;
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder()).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().c__T__T__T(((("==> X " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitReporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName) + ".") + method), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_diff_console_AnsiColors$().Lmunit_diff_console_AnsiColors$__f_LightRed))).append__T__scm_StringBuilder(" ")).append__T__scm_StringBuilder($p_Lmunit_internal_junitinterface_JUnitReporter__formatTime__D__T(this, elapsedMillis))).append__T__scm_StringBuilder(" ");
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$1);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_1).append__T__scm_StringBuilder(this$2.data.name)).append__T__scm_StringBuilder(": ")).append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).getMessage__T()));
  $p_Lmunit_internal_junitinterface_JUnitReporter__log__I__T__V(this, $x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content);
  $p_Lmunit_internal_junitinterface_JUnitReporter__trace__jl_Throwable__V(this, ex);
  $p_Lmunit_internal_junitinterface_JUnitReporter__emitEvent__T__Lsbt_testing_Status__Lsbt_testing_OptionalThrowable__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Failure, $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__(new $c_Lsbt_testing_OptionalThrowable(), ex));
});
var $d_Lmunit_internal_junitinterface_JUnitReporter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_JUnitReporter, "munit.internal.junitinterface.JUnitReporter", ({
  Lmunit_internal_junitinterface_JUnitReporter: 1
}));
function $is_Lmunit_internal_junitinterface_Tag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lmunit_internal_junitinterface_Tag)));
}
function $as_Lmunit_internal_junitinterface_Tag(obj) {
  return (($is_Lmunit_internal_junitinterface_Tag(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "munit.internal.junitinterface.Tag"));
}
function $isArrayOf_Lmunit_internal_junitinterface_Tag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmunit_internal_junitinterface_Tag)));
}
function $asArrayOf_Lmunit_internal_junitinterface_Tag(obj, depth) {
  return (($isArrayOf_Lmunit_internal_junitinterface_Tag(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmunit.internal.junitinterface.Tag;", depth));
}
/** @constructor */
function $c_Lorg_junit_runner_manipulation_Filter() {
}
$c_Lorg_junit_runner_manipulation_Filter.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_junit_runner_manipulation_Filter.prototype.constructor = $c_Lorg_junit_runner_manipulation_Filter;
/** @constructor */
function $h_Lorg_junit_runner_manipulation_Filter() {
}
$h_Lorg_junit_runner_manipulation_Filter.prototype = $c_Lorg_junit_runner_manipulation_Filter.prototype;
/** @constructor */
function $c_Lorg_scalajs_junit_Ansi$() {
}
$c_Lorg_scalajs_junit_Ansi$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_Ansi$.prototype.constructor = $c_Lorg_scalajs_junit_Ansi$;
/** @constructor */
function $h_Lorg_scalajs_junit_Ansi$() {
}
$h_Lorg_scalajs_junit_Ansi$.prototype = $c_Lorg_scalajs_junit_Ansi$.prototype;
$c_Lorg_scalajs_junit_Ansi$.prototype.c__T__T__T = (function(s, colorSequence) {
  return ((colorSequence === null) ? s : ((("" + colorSequence) + s) + "\u001b[0m"));
});
$c_Lorg_scalajs_junit_Ansi$.prototype.filterAnsi__T__T = (function(s) {
  if ((s === null)) {
    return null;
  } else {
    var r = "";
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
    var len = this$1.length;
    var i = 0;
    while ((i < len)) {
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
      var index = i;
      var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$2, index);
      if ((c === 27)) {
        i = ((1 + i) | 0);
        while (true) {
          if ((i < len)) {
            var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
            var index$1 = i;
            var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$3, index$1) !== 109);
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            i = ((1 + i) | 0);
          } else {
            break;
          }
        }
      } else {
        r = (r + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(c));
      }
      i = ((1 + i) | 0);
    }
    return r;
  }
});
var $d_Lorg_scalajs_junit_Ansi$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_Ansi$, "org.scalajs.junit.Ansi$", ({
  Lorg_scalajs_junit_Ansi$: 1
}));
var $n_Lorg_scalajs_junit_Ansi$;
function $m_Lorg_scalajs_junit_Ansi$() {
  if ((!$n_Lorg_scalajs_junit_Ansi$)) {
    $n_Lorg_scalajs_junit_Ansi$ = new $c_Lorg_scalajs_junit_Ansi$();
  }
  return $n_Lorg_scalajs_junit_Ansi$;
}
function $is_Lorg_scalajs_junit_Bootstrapper(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_junit_Bootstrapper)));
}
function $as_Lorg_scalajs_junit_Bootstrapper(obj) {
  return (($is_Lorg_scalajs_junit_Bootstrapper(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.junit.Bootstrapper"));
}
function $isArrayOf_Lorg_scalajs_junit_Bootstrapper(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_junit_Bootstrapper)));
}
function $asArrayOf_Lorg_scalajs_junit_Bootstrapper(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_junit_Bootstrapper(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.junit.Bootstrapper;", depth));
}
function $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V($thiz, level, method, msg) {
  $thiz.log__F1__T__V(level, ((("Test " + $p_Lorg_scalajs_junit_Reporter__formatTest__s_Option__T__T($thiz, method, "\u001b[36m")) + " ") + msg));
}
function $p_Lorg_scalajs_junit_Reporter__logTestException__F1__T__s_Option__jl_Throwable__D__V($thiz, level, prefix, method, ex, timeInSeconds) {
  var logException = ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_notLogExceptionClass) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_logAssert || (!(ex instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError))));
  if (logException) {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$1);
    var fmtName = ($p_Lorg_scalajs_junit_Reporter__formatClass__T__T__T($thiz, this$2.data.name, "\u001b[31m") + ": ");
  } else {
    var fmtName = "";
  }
  var m = $p_Lorg_scalajs_junit_Reporter__formatTest__s_Option__T__T($thiz, method, "\u001b[31m");
  var msg = (((((((("" + prefix) + m) + " failed: ") + fmtName) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).getMessage__T()) + ", took ") + timeInSeconds) + " sec");
  $thiz.log__F1__T__V(level, msg);
}
function $p_Lorg_scalajs_junit_Reporter__trace__jl_Throwable__V($thiz, t) {
  if (((!(t instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError)) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_logAssert)) {
    $p_Lorg_scalajs_junit_Reporter__logTrace__jl_Throwable__V($thiz, t);
  }
}
function $p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1($thiz) {
  return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_verbose ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$5$2) => {
    var x$5 = $as_Lsbt_testing_Logger(x$5$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$5).info__T__V(msg);
    }));
  })) : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$6$2) => {
    var x$6 = $as_Lsbt_testing_Logger(x$6$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2$1) => {
      var msg$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$1);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$6).debug__T__V(msg$1);
    }));
  })));
}
function $p_Lorg_scalajs_junit_Reporter__formatTest__s_Option__T__T($thiz, method, color) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(method);
  if (this$1.isEmpty__Z()) {
    var $x_1 = $p_Lorg_scalajs_junit_Reporter__formattedTestClass__T($thiz);
  } else {
    var x0 = this$1.get__O();
    var method$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
    var fmtMethod = $m_Lorg_scalajs_junit_Ansi$().c__T__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).decodeName__T__T(method$2), color);
    var $x_1 = (($p_Lorg_scalajs_junit_Reporter__formattedTestClass__T($thiz) + ".") + fmtMethod);
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1);
}
function $p_Lorg_scalajs_junit_Reporter__formattedTestClass$lzycompute__T($thiz) {
  if ((!$thiz.Lorg_scalajs_junit_Reporter__f_bitmap$0)) {
    $thiz.Lorg_scalajs_junit_Reporter__f_formattedTestClass = $p_Lorg_scalajs_junit_Reporter__formatClass__T__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName, "\u001b[33m");
    $thiz.Lorg_scalajs_junit_Reporter__f_bitmap$0 = true;
  }
  return $thiz.Lorg_scalajs_junit_Reporter__f_formattedTestClass;
}
function $p_Lorg_scalajs_junit_Reporter__formattedTestClass__T($thiz) {
  return ((!$thiz.Lorg_scalajs_junit_Reporter__f_bitmap$0) ? $p_Lorg_scalajs_junit_Reporter__formattedTestClass$lzycompute__T($thiz) : $thiz.Lorg_scalajs_junit_Reporter__f_formattedTestClass);
}
function $p_Lorg_scalajs_junit_Reporter__formatClass__T__T__T($thiz, fullName, color) {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fullName);
  var x1 = $x_1.splitAt$extension__T__I__T2(fullName, ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$2.lastIndexOf("."))) | 0));
  if ((x1 === null)) {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
  }
  var prefix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1)._1__O());
  var name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1)._2__O());
  return (("" + prefix) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T(name, color));
}
function $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V($thiz, method, status) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(method);
  if (this$1.isEmpty__Z()) {
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName;
  } else {
    var x0 = this$1.get__O();
    var method$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
    var $x_1 = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).decodeName__T__T(method$2));
  }
  var testName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1);
  var selector = new $c_Lsbt_testing_TestSelector(testName);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_eventHandler).handle__Lsbt_testing_Event__V(new $c_Lorg_scalajs_junit_JUnitEvent($thiz.Lorg_scalajs_junit_Reporter__f_taskDef, status, selector, $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable()), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong((-1), (-1))));
}
function $p_Lorg_scalajs_junit_Reporter__filterAnsiIfNeeded__Lsbt_testing_Logger__T__T($thiz, l, s) {
  return (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).ansiCodesSupported__Z() && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_color) ? s : $m_Lorg_scalajs_junit_Ansi$().filterAnsi__T__T(s));
}
function $p_Lorg_scalajs_junit_Reporter__logTrace__jl_Throwable__V($thiz, t) {
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
  _return: {
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length)) {
      var x1 = i;
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(x1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_fileName !== null)) {
        var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_fileName);
        if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$4.indexOf("StackTrace.scala")) !== (-1))) {
          var $x_1 = true;
        } else {
          var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_fileName);
          var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$5.indexOf("Throwables.scala")) !== (-1));
        }
      } else {
        var $x_1 = false;
      }
      if ((!$x_1)) {
        var i$1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var i$1 = (-1);
  }
  var lo = ((i$1 < 0) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length : i$1);
  var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_jl_StackTraceElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_ArrayOps$().slice$extension__O__I__I__O(xs, lo, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length), 1);
  var testFileName = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_color ? $p_Lorg_scalajs_junit_Reporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) : null);
  _return$1: {
    var i$2 = 0;
    while ((i$2 < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1$1 = i$2;
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1$1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$1).jl_StackTraceElement__f_fileName !== null)) {
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0$1).jl_StackTraceElement__f_fileName);
        var $x_3 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$8.indexOf("JUnitExecuteTest.scala")) !== (-1));
      } else {
        var $x_3 = false;
      }
      if ($x_3) {
        var $x_2 = i$2;
        break _return$1;
      }
      i$2 = ((1 + i$2) | 0);
    }
    var $x_2 = (-1);
  }
  var i$3 = (((-1) + $x_2) | 0);
  var m = ((i$3 > 0) ? i$3 : (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0));
  $p_Lorg_scalajs_junit_Reporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((-1) + (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length - m) | 0)) | 0), t, testFileName);
}
function $p_Lorg_scalajs_junit_Reporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, framesInCommon, t, testFileName) {
  var m2 = m;
  var top = 0;
  var i = top;
  while ((i <= m2)) {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
    if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$1.startsWith("org.junit."))) {
      var $x_1 = true;
    } else {
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(i)).toString__T());
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$2.startsWith("org.hamcrest."));
    }
    if ($x_1) {
      if ((i === top)) {
        top = ((1 + top) | 0);
      } else {
        m2 = (((-1) + i) | 0);
        var break$1 = false;
        while (((m2 > top) && (!break$1))) {
          var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m2)).toString__T();
          var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
          if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$3.startsWith("java.lang.reflect.")))) {
            var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s);
            var $x_2 = (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$4.startsWith("sun.reflect.")));
          } else {
            var $x_2 = false;
          }
          if ($x_2) {
            break$1 = true;
          } else {
            m2 = (((-1) + m2) | 0);
          }
        }
        i = m2;
      }
    }
    i = ((1 + i) | 0);
  }
  var x = top;
  var end = m2;
  var isEmpty = (x > end);
  if ((!isEmpty)) {
    var i$1 = x;
    while (true) {
      var v1 = i$1;
      $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$8$2) => {
        var x$8 = $as_Lsbt_testing_Logger(x$8$2);
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
          var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8).error__T__V(msg);
        }));
      })), ("    at " + $p_Lorg_scalajs_junit_Reporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(v1), testFileName)));
      if ((i$1 === end)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
  if ((m !== m2)) {
    $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$9$2) => {
      var x$9 = $as_Lsbt_testing_Logger(x$9$2);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2$1) => {
        var msg$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$9).error__T__V(msg$1);
      }));
    })), "    ...");
  } else if ((framesInCommon !== 0)) {
    $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$10$2) => {
      var x$10 = $as_Lsbt_testing_Logger(x$10$2);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2$2) => {
        var msg$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$10).error__T__V(msg$3);
      }));
    })), (("    ... " + framesInCommon) + " more"));
  }
  $p_Lorg_scalajs_junit_Reporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, trace, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getCause__jl_Throwable(), testFileName);
}
function $p_Lorg_scalajs_junit_Reporter__logStackTraceAsCause__Ajl_StackTraceElement__jl_Throwable__T__V($thiz, causedTrace, t, testFileName) {
  if ((t !== null)) {
    var trace = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).getStackTrace__Ajl_StackTraceElement();
    var m = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0);
    var n = (((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).u.length) | 0);
    while (true) {
      if (((m >= 0) && (n >= 0))) {
        var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(m);
        var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(causedTrace).get(n);
        var $x_1 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        m = (((-1) + m) | 0);
        n = (((-1) + n) | 0);
      } else {
        break;
      }
    }
    $thiz.log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$11$2) => {
      var x$11 = $as_Lsbt_testing_Logger(x$11$2);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
        var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$11).error__T__V(msg);
      }));
    })), ("Caused by: " + t));
    $p_Lorg_scalajs_junit_Reporter__logStackTracePart__Ajl_StackTraceElement__I__I__jl_Throwable__T__V($thiz, trace, m, (((((-1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length) | 0) - m) | 0), t, testFileName);
  }
}
function $p_Lorg_scalajs_junit_Reporter__findTestFileName__Ajl_StackTraceElement__T($thiz, trace) {
  _return: {
    var i = 0;
    while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).u.length)) {
      var x1 = i;
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(x1);
      if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).jl_StackTraceElement__f_declaringClass === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName)) {
        var idx = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var idx = (-1);
  }
  var this$4 = ((idx === (-1)) ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace).get(idx)));
  if (this$4.isEmpty__Z()) {
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  } else {
    var x0$1 = this$4.get__O();
    var x$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(x0$1);
    var this$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$13).jl_StackTraceElement__f_fileName);
  }
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$5.s_$less$colon$less$__f_singleton;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$6.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$6.get__O()));
}
function $p_Lorg_scalajs_junit_Reporter__stackTraceElementToString__jl_StackTraceElement__T__T($thiz, e, testFileName) {
  var highlight = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).Lorg_scalajs_junit_RunSettings__f_color && (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_declaringClass) || ((testFileName !== null) && (testFileName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName))));
  var r = "";
  r = (("" + r) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_Reporter__f_settings).decodeName__T__T((($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_declaringClass + ".") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_methodName)));
  r = (r + "(");
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e), false)) {
    r = (("" + r) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Native Method", (highlight ? "\u001b[33m" : null)));
  } else if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName === null)) {
    r = (("" + r) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Unknown Source", (highlight ? "\u001b[33m" : null)));
  } else {
    r = (("" + r) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_fileName, (highlight ? "\u001b[35m" : null)));
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber >= 0)) {
      r = (r + ":");
      var $x_2 = r;
      var $x_1 = $m_Lorg_scalajs_junit_Ansi$();
      var i = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(e).jl_StackTraceElement__f_lineNumber;
      r = (("" + $x_2) + $x_1.c__T__T__T(("" + i), (highlight ? "\u001b[33m" : null)));
    }
  }
  r = (r + ")");
  return r;
}
function $p_Lorg_scalajs_junit_Reporter__emit$1__jl_Throwable__T__s_Option__D__V($thiz, t, prefix$1, method$1, timeInSeconds$1) {
  $p_Lorg_scalajs_junit_Reporter__logTestException__F1__T__s_Option__jl_Throwable__D__V($thiz, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$3$2) => {
    var x$3 = $as_Lsbt_testing_Logger(x$3$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3).error__T__V(msg);
    }));
  })), prefix$1, method$1, t, timeInSeconds$1);
  $p_Lorg_scalajs_junit_Reporter__trace__jl_Throwable__V($thiz, t);
}
/** @constructor */
function $c_Lorg_scalajs_junit_Reporter(eventHandler, loggers, settings, taskDef) {
  this.Lorg_scalajs_junit_Reporter__f_formattedTestClass = null;
  this.Lorg_scalajs_junit_Reporter__f_eventHandler = null;
  this.Lorg_scalajs_junit_Reporter__f_loggers = null;
  this.Lorg_scalajs_junit_Reporter__f_settings = null;
  this.Lorg_scalajs_junit_Reporter__f_taskDef = null;
  this.Lorg_scalajs_junit_Reporter__f_bitmap$0 = false;
  this.Lorg_scalajs_junit_Reporter__f_eventHandler = eventHandler;
  this.Lorg_scalajs_junit_Reporter__f_loggers = loggers;
  this.Lorg_scalajs_junit_Reporter__f_settings = settings;
  this.Lorg_scalajs_junit_Reporter__f_taskDef = taskDef;
}
$c_Lorg_scalajs_junit_Reporter.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_Reporter.prototype.constructor = $c_Lorg_scalajs_junit_Reporter;
/** @constructor */
function $h_Lorg_scalajs_junit_Reporter() {
}
$h_Lorg_scalajs_junit_Reporter.prototype = $c_Lorg_scalajs_junit_Reporter.prototype;
$c_Lorg_scalajs_junit_Reporter.prototype.reportRunStarted__V = (function() {
  this.log__F1__T__V($p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1(this), $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Test run started", "\u001b[34m"));
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportRunFinished__I__I__I__D__V = (function(failed, ignored, total, timeInSeconds) {
  var msg = ((((("" + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T("Test run finished: ", "\u001b[34m")) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T((failed + " failed"), ((failed === 0) ? "\u001b[34m" : "\u001b[31m"))) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T(", ", "\u001b[34m")) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T((ignored + " ignored"), ((ignored === 0) ? "\u001b[34m" : "\u001b[33m"))) + $m_Lorg_scalajs_junit_Ansi$().c__T__T__T(((((", " + total) + " total, ") + timeInSeconds) + "s"), "\u001b[34m"));
  this.log__F1__T__V($p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1(this), msg);
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportIgnored__s_Option__V = (function(method) {
  $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    var x$1 = $as_Lsbt_testing_Logger(x$1$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1).info__T__V(msg);
    }));
  })), method, "ignored");
  $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Skipped);
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportTestStarted__T__V = (function(method) {
  $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V(this, $p_Lorg_scalajs_junit_Reporter__infoOrDebug__F1(this), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(method), "started");
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportTestFinished__T__Z__D__V = (function(method, succeeded, timeInSeconds) {
  $p_Lorg_scalajs_junit_Reporter__logTestInfo__F1__s_Option__T__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$2$2) => {
    var x$2 = $as_Lsbt_testing_Logger(x$2$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2).debug__T__V(msg);
    }));
  })), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(method), (("finished, took " + timeInSeconds) + " sec"));
  if (succeeded) {
    $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(method), $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Success);
  }
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportErrors__T__s_Option__D__sci_List__V = (function(prefix, method, timeInSeconds, errors) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors);
  if ((!this$1.isEmpty__Z())) {
    $p_Lorg_scalajs_junit_Reporter__emit$1__jl_Throwable__T__s_Option__D__V(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors).head__O()), prefix, method, timeInSeconds);
    $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Failure);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors).tail__O()));
    var these = this$2;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x0);
      $p_Lorg_scalajs_junit_Reporter__emit$1__jl_Throwable__T__s_Option__D__V(this, t, prefix, method, timeInSeconds);
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
  }
});
$c_Lorg_scalajs_junit_Reporter.prototype.reportAssumptionViolation__s_Option__D__jl_Throwable__V = (function(method, timeInSeconds, e) {
  $p_Lorg_scalajs_junit_Reporter__logTestException__F1__T__s_Option__jl_Throwable__D__V(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$4$2) => {
    var x$4 = $as_Lsbt_testing_Logger(x$4$2);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
      var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$4).warn__T__V(msg);
    }));
  })), "Test assumption in test ", method, e, timeInSeconds);
  $p_Lorg_scalajs_junit_Reporter__emitEvent__s_Option__Lsbt_testing_Status__V(this, method, $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Skipped);
});
$c_Lorg_scalajs_junit_Reporter.prototype.log__F1__T__V = (function(level, s) {
  var xs = this.Lorg_scalajs_junit_Reporter__f_loggers;
  var f = ((l$2) => {
    var l = $as_Lsbt_testing_Logger(l$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(level).apply__O__O(l))).apply__O__O($p_Lorg_scalajs_junit_Reporter__filterAnsiIfNeeded__Lsbt_testing_Logger__T__T(this, l, s));
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var i = 0;
  if ((xs !== null)) {
    while ((i < len)) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
      f(x0);
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
    while ((i < len)) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
      f(x0$1);
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
    while ((i < len)) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
      f(x0$2);
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
    while ((i < len)) {
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
    while ((i < len)) {
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
      f(x0$3);
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
    while ((i < len)) {
      var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
      f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4));
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
    while ((i < len)) {
      var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
      f(x0$5);
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
    while ((i < len)) {
      var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
      f(x0$6);
      i = ((1 + i) | 0);
    }
  } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
    while ((i < len)) {
      var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
      f(x0$7);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
  }
});
var $d_Lorg_scalajs_junit_Reporter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_Reporter, "org.scalajs.junit.Reporter", ({
  Lorg_scalajs_junit_Reporter: 1
}));
/** @constructor */
function $c_Lorg_scalajs_junit_RunSettings(color, decodeScalaNames, verbose, logAssert, notLogExceptionClass) {
  this.Lorg_scalajs_junit_RunSettings__f_color = false;
  this.Lorg_scalajs_junit_RunSettings__f_decodeScalaNames = false;
  this.Lorg_scalajs_junit_RunSettings__f_verbose = false;
  this.Lorg_scalajs_junit_RunSettings__f_logAssert = false;
  this.Lorg_scalajs_junit_RunSettings__f_notLogExceptionClass = false;
  this.Lorg_scalajs_junit_RunSettings__f_color = color;
  this.Lorg_scalajs_junit_RunSettings__f_decodeScalaNames = decodeScalaNames;
  this.Lorg_scalajs_junit_RunSettings__f_verbose = verbose;
  this.Lorg_scalajs_junit_RunSettings__f_logAssert = logAssert;
  this.Lorg_scalajs_junit_RunSettings__f_notLogExceptionClass = notLogExceptionClass;
}
$c_Lorg_scalajs_junit_RunSettings.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_RunSettings.prototype.constructor = $c_Lorg_scalajs_junit_RunSettings;
/** @constructor */
function $h_Lorg_scalajs_junit_RunSettings() {
}
$h_Lorg_scalajs_junit_RunSettings.prototype = $c_Lorg_scalajs_junit_RunSettings.prototype;
$c_Lorg_scalajs_junit_RunSettings.prototype.decodeName__T__T = (function(name) {
  if (this.Lorg_scalajs_junit_RunSettings__f_decodeScalaNames) {
    try {
      var r1 = $m_s_reflect_NameTransformer$().decode__T__T(name);
      var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1);
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
      }
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1.getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => name))));
  } else {
    return name;
  }
});
var $d_Lorg_scalajs_junit_RunSettings = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_RunSettings, "org.scalajs.junit.RunSettings", ({
  Lorg_scalajs_junit_RunSettings: 1
}));
function $as_Lorg_scalajs_junit_TestMetadata(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.junit.TestMetadata"));
}
function $isArrayOf_Lorg_scalajs_junit_TestMetadata(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_junit_TestMetadata)));
}
function $asArrayOf_Lorg_scalajs_junit_TestMetadata(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_junit_TestMetadata(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.junit.TestMetadata;", depth));
}
function $s_Lorg_scalajs_testing_bridge_Bridge__start__V() {
  $m_Lorg_scalajs_testing_bridge_Bridge$().start__V();
}
function $p_Lorg_scalajs_testing_bridge_Bridge$__mode__Lorg_scalajs_testing_common_TestBridgeMode($thiz) {
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((typeof __ScalaJSTestBridgeMode)) === "undefined")) {
    return $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
  } else {
    var modeStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(__ScalaJSTestBridgeMode);
    return $as_Lorg_scalajs_testing_common_TestBridgeMode($m_Lorg_scalajs_testing_common_Serializer$().deserialize__T__Lorg_scalajs_testing_common_Serializer__O(modeStr, $m_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$()));
  }
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_Bridge$() {
}
$c_Lorg_scalajs_testing_bridge_Bridge$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_Bridge$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_Bridge$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_Bridge$() {
}
$h_Lorg_scalajs_testing_bridge_Bridge$.prototype = $c_Lorg_scalajs_testing_bridge_Bridge$.prototype;
$c_Lorg_scalajs_testing_bridge_Bridge$.prototype.start__V = (function() {
  var x1 = $p_Lorg_scalajs_testing_bridge_Bridge$__mode__Lorg_scalajs_testing_common_TestBridgeMode(this);
  var x = $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
  if ((x === x1)) {
    $m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().start__V();
  } else if ((x1 instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)) {
    var x3 = $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(x1);
    var tests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    $m_Lorg_scalajs_testing_bridge_HTMLRunner$().start__Lorg_scalajs_testing_common_IsolatedTestSet__V(tests);
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
  }
});
var $d_Lorg_scalajs_testing_bridge_Bridge$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_Bridge$, "org.scalajs.testing.bridge.Bridge$", ({
  Lorg_scalajs_testing_bridge_Bridge$: 1
}));
var $n_Lorg_scalajs_testing_bridge_Bridge$;
function $m_Lorg_scalajs_testing_bridge_Bridge$() {
  if ((!$n_Lorg_scalajs_testing_bridge_Bridge$)) {
    $n_Lorg_scalajs_testing_bridge_Bridge$ = new $c_Lorg_scalajs_testing_bridge_Bridge$();
  }
  return $n_Lorg_scalajs_testing_bridge_Bridge$;
}
function $ps_Lorg_scalajs_testing_bridge_FrameworkLoader$__frameworkExists$1__T__Z(name) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.sjs_reflect_Reflect$__f_instantiatableClasses).get__O__s_Option(name));
  if ((!this$2.isEmpty__Z())) {
    var x0 = this$2.get__O();
    var clazz$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(x0);
    var that = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(clazz$2).sjs_reflect_InstantiatableClass__f_runtimeClass;
    return $d_Lsbt_testing_Framework.isAssignableFrom($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(that).data);
  } else {
    return false;
  }
}
function $ps_Lorg_scalajs_testing_bridge_FrameworkLoader$__tryLoad$1__T__s_Option(name) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.sjs_reflect_Reflect$__f_instantiatableClasses).get__O__s_Option(name));
  var pf = new $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1();
  if ((!this$2.isEmpty__Z())) {
    var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_PartialFunction$Lifted(pf);
    var v1 = this$2.get__O();
    return this$3.apply__O__s_Option(v1);
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_FrameworkLoader$() {
}
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_FrameworkLoader$() {
}
$h_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype;
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.loadFramework__T__Lsbt_testing_Framework = (function(frameworkName) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.sjs_reflect_Reflect$__f_instantiatableClasses).get__O__s_Option(frameworkName));
  if (this$2.isEmpty__Z()) {
    throw new $c_jl_InstantiationError(frameworkName);
  }
  var clazz = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(this$2.get__O());
  return $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(clazz).newInstance__O());
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.detectFrameworkNames__sci_List__sci_List = (function(names) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(names);
  var f = ((frameworkNames$2$2) => {
    var frameworkNames$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(frameworkNames$2$2);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(frameworkNames$2);
    var these = this$1;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var x$1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
      if ($ps_Lorg_scalajs_testing_bridge_FrameworkLoader$__frameworkExists$1__T__Z(x$1$2)) {
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O());
      }
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  });
  if ((this$2 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0$1 = this$2.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$2.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
    }
    return h;
  }
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$.prototype.tryLoadFramework__sci_List__s_Option = (function(names) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(names).iterator__sc_Iterator());
  var f = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((name$2$2) => {
    var name$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(name$2$2);
    return $ps_Lorg_scalajs_testing_bridge_FrameworkLoader$__tryLoad$1__T__s_Option(name$2);
  }));
  var this$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_Iterator$$anon$9(this$1, f);
  var pf = new $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2();
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__collectFirst__s_PartialFunction__s_Option(this$2, pf);
});
var $d_Lorg_scalajs_testing_bridge_FrameworkLoader$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_FrameworkLoader$, "org.scalajs.testing.bridge.FrameworkLoader$", ({
  Lorg_scalajs_testing_bridge_FrameworkLoader$: 1
}));
var $n_Lorg_scalajs_testing_bridge_FrameworkLoader$;
function $m_Lorg_scalajs_testing_bridge_FrameworkLoader$() {
  if ((!$n_Lorg_scalajs_testing_bridge_FrameworkLoader$)) {
    $n_Lorg_scalajs_testing_bridge_FrameworkLoader$ = new $c_Lorg_scalajs_testing_bridge_FrameworkLoader$();
  }
  return $n_Lorg_scalajs_testing_bridge_FrameworkLoader$;
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__onLoad__Lorg_scalajs_testing_common_IsolatedTestSet__V($thiz, tests) {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(document.location.search);
  var search = $x_1.stripPrefix$extension__T__T__T(x, "?");
  var rc11 = false;
  var x2 = null;
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(search);
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__split__T__I__AT(this$2, "&", 0);
  var f = ((encodedURIComponent$2$2) => {
    var encodedURIComponent$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(encodedURIComponent$2$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(decodeURIComponent(encodedURIComponent$2));
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_2 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_7 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_10 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_10, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_11.wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$7);
  matchEnd12: {
    var x1$2___1;
    var x1$2___2;
    if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon)) {
      rc11 = true;
      x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(x1);
      var p3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_head);
      var p4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_next;
      if (((p3 === "i") && (p4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon))) {
        var x5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(p4);
        var excludedHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).sci_$colon$colon__f_head);
        var included = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).sci_$colon$colon__f_next;
        var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(included);
        var includeSet = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$9);
        var _1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2) => {
          var t$2 = $as_Lsbt_testing_TaskDef(t$2$2);
          return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(includeSet).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).Lsbt_testing_TaskDef__f__fullyQualifiedName);
        }));
        var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Integer$();
        var _2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(this$12.java$lang$Integer$$parseIntImpl__T__I__I__I(excludedHash, 10, 214748364));
        var x1$2___1 = _1;
        var x1$2___2 = _2;
        break matchEnd12;
      }
    }
    if (rc11) {
      var p8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_head);
      var excluded = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_next;
      if ((p8 === "e")) {
        var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded);
        var excludeSet = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set(this$13);
        var _1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2$1) => {
          var t$2$1 = $as_Lsbt_testing_TaskDef(t$2$2$1);
          return (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludeSet).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2$1).Lsbt_testing_TaskDef__f__fullyQualifiedName));
        }));
        var _2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
        var x1$2___1 = _1$1;
        var x1$2___2 = _2$1;
        break matchEnd12;
      }
    }
    var _1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$1$2$2) => {
      $as_Lsbt_testing_TaskDef(x$1$2$2);
      return true;
    }));
    var _2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    var x1$2___1 = _1$2;
    var x1$2___2 = _2$2;
  }
  var testFilter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(x1$2___1);
  var optExcludedHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x1$2___2);
  var allTests = $m_Lorg_scalajs_testing_bridge_TestLoader$().loadTests__Lorg_scalajs_testing_common_IsolatedTestSet__sci_Seq(tests);
  var totalTestCount = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTests).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$3$2$2) => {
    var x$3$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$3$2$2);
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_SeqOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3$2)._2__O()));
    return this$14.length__I();
  }))))).sum__s_math_Numeric__O($m_s_math_Numeric$IntIsIntegral$()));
  var excludedTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTests).flatMap__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$4$2$2) => {
    var x$4$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$4$2$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$4$2)._2__O())).filterNot__F1__O(testFilter));
  }))));
  var ui = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI(excludedTests, totalTestCount);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(optExcludedHash);
  if ((!this$15.isEmpty__Z())) {
    var x0$8 = this$15.get__O();
    var x$6$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x0$8);
    var $x_12 = (x$6$2 !== $ps_Lorg_scalajs_testing_bridge_HTMLRunner$__excludedHash$1__sci_Seq__I(excludedTests));
  } else {
    var $x_12 = false;
  }
  if ($x_12) {
    ui.warnTestSetChanged__V();
  }
  var oks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(allTests).withFilter__F1__sc_WithFilter(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((check$ifrefutable$1$2$2) => {
    var check$ifrefutable$1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$1$2$2);
    return (check$ifrefutable$1$2 !== null);
  })))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$7$2$2) => {
    var x$7$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$7$2$2);
    if ((x$7$2 !== null)) {
      var framework = $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7$2)._1__O());
      var taskDefs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7$2)._2__O());
      return $p_Lorg_scalajs_testing_bridge_HTMLRunner$__runTests__Lsbt_testing_Framework__sci_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), framework, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).filter__F1__O(testFilter)), ui);
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$7$2);
    }
  }))));
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
  var this$16 = $m_sc_BuildFrom$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_13.sequence__sc_IterableOnce__sc_BuildFrom__s_concurrent_ExecutionContext__s_concurrent_Future(oks, new $c_sc_BuildFromLowPriority2$$anon$11(this$16), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((xs$2$2) => {
    var xs$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(xs$2$2);
    return $p_Lorg_scalajs_testing_bridge_HTMLRunner$__and__sc_Seq__Z($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), xs$2);
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).onComplete__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((ok$2$2) => {
    var ok$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(ok$2$2);
    ui.done__s_util_Try__V(ok$2);
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__runTests__Lsbt_testing_Framework__sci_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($thiz, framework, taskDefs, ui) {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework);
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var len = xs.length__I();
  var array = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
  var iterator = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  var i = 0;
  while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).hasNext__Z()) {
    array.set(i, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).next__O()));
    i = ((1 + i) | 0);
  }
  var xs$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var len$1 = xs$1.length__I();
  var array$1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$1);
  var iterator$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  var i$1 = 0;
  while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator$1).hasNext__Z()) {
    array$1.set(i$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator$1).next__O()));
    i$1 = ((1 + i$1) | 0);
  }
  var runner = $x_1.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner(array, array$1, $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$__f_classLoader);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner);
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs);
  if ((this$8.knownSize__I() >= 0)) {
    var len$2 = this$8.knownSize__I();
    var destination = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(len$2);
    this$8.copyToArray__O__I__I__I(destination, 0, 2147483647);
    var $x_2 = destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var it = this$8.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem);
    }
    var $x_2 = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(jsElems);
  }
  var tasks = $x_3.tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task($x_2);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($ps_Lorg_scalajs_testing_bridge_HTMLRunner$__runAllTasks$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(tasks), ui)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((ok$2$2) => {
    var ok$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(ok$2$2);
    var resultStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).done__T();
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(resultStr);
    if ((!(this$14 === ""))) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ui).reportFrameworkResult__Z__T__T__V(ok$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework).name__T(), resultStr);
    }
    return ok$2;
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__scheduleTask__Lsbt_testing_Task__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($thiz, task, ui) {
  var uiBox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ui).newTestTask__T__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestTask($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef()).Lsbt_testing_TaskDef__f__fullyQualifiedName);
  var handler = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler();
  var newTasks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_s_concurrent_impl_Promise$DefaultPromise__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_concurrent_impl_Promise$DefaultPromise());
  var invocation = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().apply__F0__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V(handler, new ($d_Lsbt_testing_Logger.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(uiBox).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger]), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((value$2$2) => {
      var value$2 = $asArrayOf_Lsbt_testing_Task(value$2$2, 1);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_s_concurrent_Promise__success__O__s_concurrent_Promise(newTasks, value$2);
    })));
  })), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext());
  var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(invocation).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$9$2$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$9$2$2);
    return newTasks.map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((tasks$2$2) => {
      var tasks$2 = $asArrayOf_Lsbt_testing_Task(tasks$2$2, 1);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2((!handler.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors), tasks$2);
    })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$10$2$2) => {
    var x$10$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$10$2$2);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$10$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$3._1__O());
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).onComplete__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((ok$2$2) => {
    var ok$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(ok$2$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(uiBox).done__s_util_Try__V(ok$2);
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).recover__s_PartialFunction__s_concurrent_ExecutionContext__s_concurrent_Future(new $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7(), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
}
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$__and__sc_Seq__Z($thiz, xs) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).forall__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
    var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(x$2$2);
    return x$2;
  })));
}
function $ps_Lorg_scalajs_testing_bridge_HTMLRunner$__excludedHash$1__sci_Seq__I(excludedTests$1) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludedTests$1).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$5$2$2) => {
    var x$5$2 = $as_Lsbt_testing_TaskDef(x$5$2$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$5$2).Lsbt_testing_TaskDef__f__fullyQualifiedName;
  })))));
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce(this$1));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
}
function $ps_Lorg_scalajs_testing_bridge_HTMLRunner$__runAllTasks$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future(tasks, ui$2) {
  var oks = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((task$2$2) => {
    var task$2 = $as_Lsbt_testing_Task(task$2$2);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_bridge_HTMLRunner$__scheduleTask__Lsbt_testing_Task__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), task$2, ui$2));
    var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((check$ifrefutable$2$2$2) => {
      var check$ifrefutable$2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$2$2$2);
      return (check$ifrefutable$2$2 !== null);
    }));
    var executor = $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue;
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.filter__F1__s_concurrent_ExecutionContext__s_concurrent_Future(p, executor)).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$8$2$2) => {
      var x$8$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$8$2$2);
      if ((x$8$2 !== null)) {
        var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8$2);
        var ok = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$2._1__O());
        var newTasks = $asArrayOf_Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8$2)._2__O(), 1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($ps_Lorg_scalajs_testing_bridge_HTMLRunner$__runAllTasks$1__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$UI__s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(newTasks), ui$2)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((newOk$2$2) => {
          var newOk$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(newOk$2$2);
          return (ok && newOk$2);
        })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$8$2);
      }
    })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  }))));
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
  var this$3 = $m_sc_BuildFrom$();
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_1.sequence__sc_IterableOnce__sc_BuildFrom__s_concurrent_ExecutionContext__s_concurrent_Future(oks, new $c_sc_BuildFromLowPriority2$$anon$11(this$3), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((xs$2$2) => {
    var xs$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(xs$2$2);
    return $p_Lorg_scalajs_testing_bridge_HTMLRunner$__and__sc_Seq__Z($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), xs$2);
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$() {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$__f_classLoader = null;
  $n_Lorg_scalajs_testing_bridge_HTMLRunner$ = this;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$__f_classLoader = new $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader();
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$.prototype.start__Lorg_scalajs_testing_common_IsolatedTestSet__V = (function(tests) {
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(document.readyState) === "loading")) {
    window.addEventListener("DOMContentLoaded", (() => {
      $p_Lorg_scalajs_testing_bridge_HTMLRunner$__onLoad__Lorg_scalajs_testing_common_IsolatedTestSet__V($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), tests);
    }));
  } else {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().apply__F0__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
      $p_Lorg_scalajs_testing_bridge_HTMLRunner$__onLoad__Lorg_scalajs_testing_common_IsolatedTestSet__V($m_Lorg_scalajs_testing_bridge_HTMLRunner$(), tests);
    })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  }
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$, "org.scalajs.testing.bridge.HTMLRunner$", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$: 1
}));
var $n_Lorg_scalajs_testing_bridge_HTMLRunner$;
function $m_Lorg_scalajs_testing_bridge_HTMLRunner$() {
  if ((!$n_Lorg_scalajs_testing_bridge_HTMLRunner$)) {
    $n_Lorg_scalajs_testing_bridge_HTMLRunner$ = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$();
  }
  return $n_Lorg_scalajs_testing_bridge_HTMLRunner$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$() {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_org$scalajs$testing$bridge$HTMLRunner$EventCounter$$isErrorStatus = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts = null;
  $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$ = this;
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$();
  var x0 = $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Error;
  var x1 = $m_Lsbt_testing_Status$().Lsbt_testing_Status$__f_Failure;
  var array = [x0, x1];
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_org$scalajs$testing$bridge$HTMLRunner$EventCounter$$isErrorStatus = this$4.from__sc_IterableOnce__sci_Set(elems);
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Map($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Map$().empty__O()));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_scm_Map__withDefaultValue__O__scm_Map(this$5, 0);
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$.prototype;
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$, "org.scalajs.testing.bridge.HTMLRunner$EventCounter$", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$: 1
}));
var $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$;
function $m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$() {
  if ((!$n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$)) {
    $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$ = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$();
  }
  return $n_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI(excludedTaskDefs, totalTestCount) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$container = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs = excludedTaskDefs;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Buffer$().empty__sc_SeqOps());
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Buffer$().empty__sc_SeqOps());
  var element = document.body;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$container = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element, "", "", "div");
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludedTaskDefs);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox(this, this$2.length__I(), totalTestCount);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excludedTaskDefs);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation = ((!this$3.isEmpty__Z()) ? new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox(this) : this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
  this.org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V();
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.newTestTask__T__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestTask = (function(testName) {
  var task = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest(this, testName);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests);
  this$1.addOne__O__scm_Growable(task);
  return task;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.done__s_util_Try__V = (function(ok) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done = true;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).failed__s_util_Try()).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2) => {
    var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(t$2$2);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("Test framework crashed during execution:", "error");
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
    var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).toString__T();
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "error");
  })));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).done__Z__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => false)))));
  this.org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V();
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.warnTestSetChanged__V = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
  var line = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("", "warn");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(line, "There are new excluded tests in your project. You may wish to ");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(line, "?", "Run all");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(line, " to rediscover all available tests.");
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.reportFrameworkResult__Z__T__T__V = (function(ok, framework, result) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox);
  var msg = ((framework + " reported ") + result);
  var clss = this.org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, clss);
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts);
  var this$2 = new $c_sc_MapOps$$anon$1(this$1);
  var num = $m_s_math_Numeric$IntIsIntegral$();
  var total = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__sum__s_math_Numeric__O(this$2, num));
  var rassoc$1 = ("Total: " + total);
  var xs = $m_Lsbt_testing_Status$().values__ALsbt_testing_Status();
  var f = ((status$2$2) => {
    var status$2 = $as_Lsbt_testing_Status(status$2$2);
    return ((status$2 + ": ") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts).apply__O__O(status$2));
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var len$1 = ((1 + ys.u.length) | 0);
  var dest = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$1);
  dest.set(0, rassoc$1);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Array$().copy__O__I__O__I__I__V(ys, 0, dest, 1, ys.u.length);
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(dest));
  var countStr = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$12, "", ", ", "");
  if (this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f__done) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).counterLineText_$eq__T__V(countStr);
  } else {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).counterLineText_$eq__T__V(("Running... " + countStr));
  }
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T = (function(ok) {
  return (ok ? "success" : "error");
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$checkboxUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0 = (function(tests, checkbox) {
  return (() => {
    var all = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests).forall__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$17$2$2) => {
      var x$17$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$17$2$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$17$2).selected__Z();
    })));
    var indet = ((!all) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests).exists__F1__Z(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$18$2$2) => {
      var x$18$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$18$2$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$18$2).selected__Z();
    }))));
    checkbox.indeterminate = indet;
    if ((!indet)) {
      checkbox.checked = all;
    }
    return true;
  });
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI.prototype.org$scalajs$testing$bridge$HTMLRunner$UI$$testUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0 = (function(tests, checkbox) {
  return (() => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$19$2$2) => {
      var x$19$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$19$2$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$19$2).selected_$eq__Z__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(checkbox.checked));
    })));
    return true;
  });
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$UI, "org.scalajs.testing.bridge.HTMLRunner$UI", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI: 1
}));
function $is_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test)));
}
function $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj) {
  return (($is_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.bridge.HTMLRunner$UI$Test"));
}
function $isArrayOf_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test)));
}
function $asArrayOf_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.bridge.HTMLRunner$UI$Test;", depth));
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$() {
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element = (function(this$, clss, text, tpe) {
  var el = document.createElement(tpe);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(clss);
  if ((!(this$3 === ""))) {
    el.className = clss;
  }
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text);
  if ((!(this$6 === ""))) {
    el.textContent = text;
  }
  this$.appendChild(el);
  return el;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element = (function(this$, href, text) {
  var el = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(this$, "", text, "a");
  el.setAttribute("href", href);
  return el;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newCheckbox$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__Z__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox = (function(this$, checked) {
  var el = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(this$, "", "", "input");
  el.setAttribute("type", "checkbox");
  el.checked = checked;
  return el;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$.prototype.newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node = (function(this$, text) {
  var n = document.createTextNode(text);
  this$.appendChild(n);
  return n;
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$, "org.scalajs.testing.bridge.HTMLRunner$dom$RichElement$", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$: 1
}));
var $n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$;
function $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$() {
  if ((!$n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$)) {
    $n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$ = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  }
  return $n_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$;
}
function $ps_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optSerializer$1__Lsbt_testing_TaskDef__Lsbt_testing_Task__T(t, task$1) {
  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task$1).taskDef__Lsbt_testing_TaskDef();
  if (((t === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).equals__O__Z(x$2))) {
    return "";
  } else {
    return $m_Lorg_scalajs_testing_common_Serializer$().serialize__O__Lorg_scalajs_testing_common_Serializer__T(t, $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$());
  }
}
function $ps_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optDeserializer$1__T__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_TaskDef(s, info$1) {
  return ((s === "") ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(info$1).Lorg_scalajs_testing_common_TaskInfo__f_taskDef : $as_Lsbt_testing_TaskDef($m_Lorg_scalajs_testing_common_Serializer$().deserialize__T__Lorg_scalajs_testing_common_Serializer__O(s, $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$())));
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$() {
}
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TaskInfoBuilder$() {
}
$h_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype = $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype;
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype.detachTask__Lsbt_testing_Task__Lsbt_testing_Runner__Lorg_scalajs_testing_common_TaskInfo = (function(task, runner) {
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).serializeTask__Lsbt_testing_Task__F1__T(task, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2) => {
    var t$2 = $as_Lsbt_testing_TaskDef(t$2$2);
    return $ps_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optSerializer$1__Lsbt_testing_TaskDef__Lsbt_testing_Task__T(t$2, task);
  })));
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).tags__AT()));
  return new $c_Lorg_scalajs_testing_common_TaskInfo($x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$1));
});
$c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$.prototype.attachTask__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_Runner__Lsbt_testing_Task = (function(info, runner) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).deserializeTask__T__F1__Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(info).Lorg_scalajs_testing_common_TaskInfo__f_serializedTask, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((s$2$2) => {
    var s$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$2$2);
    return $ps_Lorg_scalajs_testing_bridge_TaskInfoBuilder$__optDeserializer$1__T__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_TaskDef(s$2, info);
  })));
});
var $d_Lorg_scalajs_testing_bridge_TaskInfoBuilder$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$, "org.scalajs.testing.bridge.TaskInfoBuilder$", ({
  Lorg_scalajs_testing_bridge_TaskInfoBuilder$: 1
}));
var $n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$;
function $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$() {
  if ((!$n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$)) {
    $n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$ = new $c_Lorg_scalajs_testing_bridge_TaskInfoBuilder$();
  }
  return $n_Lorg_scalajs_testing_bridge_TaskInfoBuilder$;
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detectFrameworksFun__F1($thiz) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((names$2$2) => {
    var names$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(names$2$2);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_FrameworkLoader$().detectFrameworkNames__sci_List__sci_List(names$2));
    var f = ((maybeName$2$2) => {
      var maybeName$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(maybeName$2$2);
      var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(maybeName$2);
      if (this$1.isEmpty__Z()) {
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
      } else {
        var x0 = this$1.get__O();
        var name$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
        var framework = $m_Lorg_scalajs_testing_bridge_FrameworkLoader$().loadFramework__T__Lsbt_testing_Framework(name$2);
        var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework).name__T();
        var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework).fingerprints__ALsbt_testing_Fingerprint()));
        return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(new $c_Lorg_scalajs_testing_common_FrameworkInfo(name$2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$2)));
      }
    });
    if ((this$4 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$1 = this$4.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$4.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      return h;
    }
  }));
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__createRunnerFun__Z__F1($thiz, isController) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((args$2$2) => {
    var args$2 = $as_Lorg_scalajs_testing_common_RunnerArgs(args$2$2);
    var framework = $m_Lorg_scalajs_testing_bridge_FrameworkLoader$().loadFramework__T__Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args$2).Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl);
    var loader = new $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader();
    var runID = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args$2).Lorg_scalajs_testing_common_RunnerArgs__f_runID;
    if (isController) {
      var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework);
      var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args$2).Lorg_scalajs_testing_common_RunnerArgs__f_args);
      if ((this$2.knownSize__I() >= 0)) {
        var len = this$2.knownSize__I();
        var destination = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$2, destination, 0, 2147483647);
        var $x_2 = destination;
      } else {
        var capacity = 0;
        var size = 0;
        var jsElems = null;
        capacity = 0;
        size = 0;
        jsElems = [];
        var it = this$2.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
          var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
          var unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem);
        }
        var $x_2 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems);
      }
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args$2).Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs);
      if ((this$7.knownSize__I() >= 0)) {
        var len$1 = this$7.knownSize__I();
        var destination$1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$7, destination$1, 0, 2147483647);
        var $x_1 = destination$1;
      } else {
        var capacity$1 = 0;
        var size$1 = 0;
        var jsElems$1 = null;
        capacity$1 = 0;
        size$1 = 0;
        jsElems$1 = [];
        var it$1 = this$7.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).hasNext__Z()) {
          var elem$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$1).next__O();
          var unboxedElem$1 = ((elem$1 === null) ? null : elem$1);
          jsElems$1.push(unboxedElem$1);
        }
        var $x_1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems$1);
      }
      var runner = $x_3.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner($x_2, $x_1, loader);
    } else {
      var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework);
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args$2).Lorg_scalajs_testing_common_RunnerArgs__f_args);
      if ((this$12.knownSize__I() >= 0)) {
        var len$2 = this$12.knownSize__I();
        var destination$2 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$12, destination$2, 0, 2147483647);
        var $x_5 = destination$2;
      } else {
        var capacity$2 = 0;
        var size$2 = 0;
        var jsElems$2 = null;
        capacity$2 = 0;
        size$2 = 0;
        jsElems$2 = [];
        var it$2 = this$12.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).hasNext__Z()) {
          var elem$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$2).next__O();
          var unboxedElem$2 = ((elem$2 === null) ? null : elem$2);
          jsElems$2.push(unboxedElem$2);
        }
        var $x_5 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems$2);
      }
      var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args$2).Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs);
      if ((this$17.knownSize__I() >= 0)) {
        var len$3 = this$17.knownSize__I();
        var destination$3 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(len$3);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$17, destination$3, 0, 2147483647);
        var $x_4 = destination$3;
      } else {
        var capacity$3 = 0;
        var size$3 = 0;
        var jsElems$3 = null;
        capacity$3 = 0;
        size$3 = 0;
        jsElems$3 = [];
        var it$3 = this$17.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).hasNext__Z()) {
          var elem$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it$3).next__O();
          var unboxedElem$3 = ((elem$3 === null) ? null : elem$3);
          jsElems$3.push(unboxedElem$3);
        }
        var $x_4 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(jsElems$3);
      }
      var runner = $x_6.slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner($x_5, $x_4, loader, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((msg$2$2) => {
        var msg$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$2);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_msgWorker, runID, msg$2);
      })));
    }
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_tasks, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__tasksFun__Lsbt_testing_Runner__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runner));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_execute, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__executeFun__I__Lsbt_testing_Runner__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, runner));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_done, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__doneFun__I__Lsbt_testing_Runner__Z__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, runner, isController));
    if (isController) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_MsgEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgController, runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__msgControllerFun__I__Lsbt_testing_Runner__F1($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, runner));
    } else {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).attach__Lorg_scalajs_testing_common_MsgEndpoint__I__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker, runID, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((msg$2$2$1) => {
        var msg$2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2$2$1);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).receiveMessage__T__s_Option(msg$2$1);
      })));
    }
  }));
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detachRunnerCommands__I__Z__V($thiz, runID, isController) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_tasks, runID);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_execute, runID);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_done, runID);
  if (isController) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgController, runID);
  } else {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).detach__Lorg_scalajs_testing_common_Endpoint__I__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker, runID);
  }
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__tasksFun__Lsbt_testing_Runner__F1($thiz, runner) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((taskDefs$2$2) => {
    var taskDefs$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(taskDefs$2$2);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs$2);
    if ((this$2.knownSize__I() >= 0)) {
      var len = this$2.knownSize__I();
      var destination = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(len);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$2, destination, 0, 2147483647);
      var $x_1 = destination;
    } else {
      var capacity = 0;
      var size = 0;
      var jsElems = null;
      capacity = 0;
      size = 0;
      jsElems = [];
      var it = this$2.iterator__sc_Iterator();
      while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
        var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
        var unboxedElem = ((elem === null) ? null : elem);
        jsElems.push(unboxedElem);
      }
      var $x_1 = new ($d_Lsbt_testing_TaskDef.getArrayOf().constr)(jsElems);
    }
    var tasks = $x_2.tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task($x_1);
    var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    var f = ((x$1$2$2) => {
      var x$1$2 = $as_Lsbt_testing_Task(x$1$2$2);
      return $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$().detachTask__Lsbt_testing_Task__Lsbt_testing_Runner__Lorg_scalajs_testing_common_TaskInfo(x$1$2, runner);
    });
    var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).u.length;
    var ys = new ($d_Lorg_scalajs_testing_common_TaskInfo.getArrayOf().constr)(len$1);
    if ((len$1 > 0)) {
      var i = 0;
      if ((tasks !== null)) {
        while ((i < len$1)) {
          var $x_3 = i;
          var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).get(i);
          ys.set($x_3, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
        var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(tasks, 1);
        while ((i < len$1)) {
          var $x_4 = i;
          var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
          ys.set($x_4, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$1)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
        var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(tasks, 1);
        while ((i < len$1)) {
          var $x_5 = i;
          var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
          ys.set($x_5, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$2)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
        var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(tasks, 1);
        while ((i < len$1)) {
          var $x_6 = i;
          var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          ys.set($x_6, $as_Lorg_scalajs_testing_common_TaskInfo(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
        var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(tasks, 1);
        while ((i < len$1)) {
          var $x_7 = i;
          var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
          ys.set($x_7, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$3)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
        var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(tasks, 1);
        while ((i < len$1)) {
          var $x_8 = i;
          var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
          ys.set($x_8, $as_Lorg_scalajs_testing_common_TaskInfo(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
        var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(tasks, 1);
        while ((i < len$1)) {
          var $x_9 = i;
          var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
          ys.set($x_9, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$5)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
        var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(tasks, 1);
        while ((i < len$1)) {
          var $x_10 = i;
          var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
          ys.set($x_10, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$6)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
        var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(tasks, 1);
        while ((i < len$1)) {
          var $x_11 = i;
          var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
          ys.set($x_11, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$7)));
          i = ((1 + i) | 0);
        }
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(tasks);
      }
    }
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_12.wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$10);
  }));
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__executeFun__I__Lsbt_testing_Runner__F1($thiz, runID, runner) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((req$2$2) => {
    var req$2 = $as_Lorg_scalajs_testing_common_ExecuteRequest(req$2$2);
    var task = $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$().attachTask__Lorg_scalajs_testing_common_TaskInfo__Lsbt_testing_Runner__Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(req$2).Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo, runner);
    var eventHandler = new $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler(runID);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(req$2).Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport);
    var loggers = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this$1))).withFilter__F1__sc_WithFilter(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((check$ifrefutable$1$2$2) => {
      var check$ifrefutable$1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$1$2$2);
      return (check$ifrefutable$1$2 !== null);
    })))).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => {
      var x$2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$2$2$2);
      if ((x$2$2 !== null)) {
        var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2$2);
        var withColor = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$2._1__O());
        var i = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2$2)._2$mcI$sp__I();
        return new $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger(runID, i, withColor);
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$2$2);
      }
    }))));
    var promise = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_s_concurrent_impl_Promise$DefaultPromise__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_concurrent_impl_Promise$DefaultPromise());
    try {
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task);
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(loggers);
      if ((this$5.knownSize__I() >= 0)) {
        var len = this$5.knownSize__I();
        var destination = new ($d_Lsbt_testing_Logger.getArrayOf().constr)(len);
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$5, destination, 0, 2147483647);
        var $x_1 = destination;
      } else {
        var capacity = 0;
        var size = 0;
        var jsElems = null;
        capacity = 0;
        size = 0;
        jsElems = [];
        var it = this$5.iterator__sc_Iterator();
        while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
          var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
          var unboxedElem = ((elem === null) ? null : elem);
          jsElems.push(unboxedElem);
        }
        var $x_1 = new ($d_Lsbt_testing_Logger.getArrayOf().constr)(jsElems);
      }
      $x_2.execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V(eventHandler, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((tasks$2$2) => {
        var tasks$2 = $asArrayOf_Lsbt_testing_Task(tasks$2$2, 1);
        $ps_Lorg_scalajs_testing_bridge_TestAdapterBridge$__cont$1__ALsbt_testing_Task__Lsbt_testing_Runner__s_concurrent_Promise__s_concurrent_Promise(tasks$2, runner, promise);
      })));
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_s_concurrent_Promise__tryFailure__jl_Throwable__Z(promise, e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
      }
    }
    return promise;
  }));
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__doneFun__I__Lsbt_testing_Runner__Z__F1($thiz, runID, runner, isController) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$4$2$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$4$2$2);
    try {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).done__T();
    } finally {
      $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detachRunnerCommands__I__Z__V($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$(), runID, isController);
    }
  }));
}
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__msgControllerFun__I__Lsbt_testing_Runner__F1($thiz, runID, runner) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((msg$2$2) => {
    var msg$2 = $as_Lorg_scalajs_testing_common_FrameworkMessage(msg$2$2);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).receiveMessage__T__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(msg$2).Lorg_scalajs_testing_common_FrameworkMessage__f_msg));
    if ((!this$1.isEmpty__Z())) {
      var x0 = this$1.get__O();
      var reply$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x0);
      var fm = new $c_Lorg_scalajs_testing_common_FrameworkMessage($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(msg$2).Lorg_scalajs_testing_common_FrameworkMessage__f_workerId, reply$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_msgController, runID, fm);
    }
  }));
}
function $ps_Lorg_scalajs_testing_bridge_TestAdapterBridge$__cont$1__ALsbt_testing_Task__Lsbt_testing_Runner__s_concurrent_Promise__s_concurrent_Promise(tasks, runner$3, promise$1) {
  try {
    var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$();
    var f = ((x$3$2$2) => {
      var x$3$2 = $as_Lsbt_testing_Task(x$3$2$2);
      return $m_Lorg_scalajs_testing_bridge_TaskInfoBuilder$().detachTask__Lsbt_testing_Task__Lsbt_testing_Runner__Lorg_scalajs_testing_common_TaskInfo(x$3$2, runner$3);
    });
    var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).u.length;
    var ys = new ($d_Lorg_scalajs_testing_common_TaskInfo.getArrayOf().constr)(len);
    if ((len > 0)) {
      var i = 0;
      if ((tasks !== null)) {
        while ((i < len)) {
          var $x_1 = i;
          var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tasks).get(i);
          ys.set($x_1, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
        var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(tasks, 1);
        while ((i < len)) {
          var $x_2 = i;
          var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
          ys.set($x_2, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$1)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
        var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(tasks, 1);
        while ((i < len)) {
          var $x_3 = i;
          var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
          ys.set($x_3, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$2)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
        var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(tasks, 1);
        while ((i < len)) {
          var $x_4 = i;
          var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          ys.set($x_4, $as_Lorg_scalajs_testing_common_TaskInfo(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
        var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(tasks, 1);
        while ((i < len)) {
          var $x_5 = i;
          var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
          ys.set($x_5, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$3)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
        var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(tasks, 1);
        while ((i < len)) {
          var $x_6 = i;
          var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
          ys.set($x_6, $as_Lorg_scalajs_testing_common_TaskInfo(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
        var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(tasks, 1);
        while ((i < len)) {
          var $x_7 = i;
          var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
          ys.set($x_7, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$5)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
        var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(tasks, 1);
        while ((i < len)) {
          var $x_8 = i;
          var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
          ys.set($x_8, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$6)));
          i = ((1 + i) | 0);
        }
      } else if ((tasks instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
        var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(tasks, 1);
        while ((i < len)) {
          var $x_9 = i;
          var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
          ys.set($x_9, $as_Lorg_scalajs_testing_common_TaskInfo(f(x0$7)));
          i = ((1 + i) | 0);
        }
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(tasks);
      }
    }
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10.wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
    var r1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$6);
    var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1);
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
    matchEnd8: {
      var result;
      if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
        var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
        break matchEnd8;
      }
      throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
    }
  }
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(promise$1);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise(this$8, result);
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$() {
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux = null;
  $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$ = this;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux = new $c_Lorg_scalajs_testing_common_RunMuxRPC($m_Lorg_scalajs_testing_bridge_JSRPC$());
}
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestAdapterBridge$() {
}
$h_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype;
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$.prototype.start__V = (function() {
  $m_Lorg_scalajs_testing_bridge_JSRPC$().attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_detectFrameworks, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__detectFrameworksFun__F1(this));
  $m_Lorg_scalajs_testing_bridge_JSRPC$().attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_createControllerRunner, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__createRunnerFun__Z__F1(this, true));
  $m_Lorg_scalajs_testing_bridge_JSRPC$().attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_createWorkerRunner, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$__createRunnerFun__Z__F1(this, false));
});
var $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_TestAdapterBridge$, "org.scalajs.testing.bridge.TestAdapterBridge$", ({
  Lorg_scalajs_testing_bridge_TestAdapterBridge$: 1
}));
var $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$;
function $m_Lorg_scalajs_testing_bridge_TestAdapterBridge$() {
  if ((!$n_Lorg_scalajs_testing_bridge_TestAdapterBridge$)) {
    $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$ = new $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$();
  }
  return $n_Lorg_scalajs_testing_bridge_TestAdapterBridge$;
}
function $p_Lorg_scalajs_testing_bridge_TestLoader$__fingerprintMatches__Lsbt_testing_Fingerprint__Lsbt_testing_Fingerprint__Z($thiz, a, b) {
  if ($is_Lsbt_testing_SubclassFingerprint(a)) {
    var x2 = $as_Lsbt_testing_SubclassFingerprint(a);
    if ($is_Lsbt_testing_SubclassFingerprint(b)) {
      var x3 = $as_Lsbt_testing_SubclassFingerprint(b);
      return (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).isModule__Z() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).isModule__Z()) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).superclassName__T() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).superclassName__T()));
    }
  }
  if ($is_Lsbt_testing_AnnotatedFingerprint(a)) {
    var x4 = $as_Lsbt_testing_AnnotatedFingerprint(a);
    if ($is_Lsbt_testing_AnnotatedFingerprint(b)) {
      var x5 = $as_Lsbt_testing_AnnotatedFingerprint(b);
      return (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).isModule__Z() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).isModule__Z()) && ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).annotationName__T() === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).annotationName__T()));
    }
  }
  return false;
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestLoader$() {
}
$c_Lorg_scalajs_testing_bridge_TestLoader$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestLoader$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestLoader$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestLoader$() {
}
$h_Lorg_scalajs_testing_bridge_TestLoader$.prototype = $c_Lorg_scalajs_testing_bridge_TestLoader$.prototype;
$c_Lorg_scalajs_testing_bridge_TestLoader$.prototype.loadTests__Lorg_scalajs_testing_common_IsolatedTestSet__sci_Seq = (function(tests) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests).Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames);
  var rest = this$1;
  var h = null;
  var t = null;
  while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
    var nameAlternatives$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(x0);
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_FrameworkLoader$().tryLoadFramework__sci_List__s_Option(nameAlternatives$2)).toList__sci_List());
    var f$1 = ((tests) => ((framework$2$2) => {
      var framework$2 = $as_Lsbt_testing_Framework(framework$2$2);
      var fingerprints = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(framework$2).fingerprints__ALsbt_testing_Fingerprint();
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests).Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests);
      var f = ((taskDef$2$2) => {
        var taskDef$2 = $as_Lsbt_testing_TaskDef(taskDef$2$2);
        _return: {
          var i = 0;
          while ((i < $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fingerprints).u.length)) {
            var x1 = i;
            var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fingerprints).get(x1);
            if ($p_Lorg_scalajs_testing_bridge_TestLoader$__fingerprintMatches__Lsbt_testing_Fingerprint__Lsbt_testing_Fingerprint__Z($m_Lorg_scalajs_testing_bridge_TestLoader$(), x0$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDef$2).Lsbt_testing_TaskDef__f__fingerprint)) {
              var $x_1 = i;
              break _return;
            }
            i = ((1 + i) | 0);
          }
          var $x_1 = (-1);
        }
        return ($x_1 >= 0);
      });
      var l = this$5;
      block: {
        var result;
        while (true) {
          if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).isEmpty__Z()) {
            var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
            break;
          } else {
            var h$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).head__O();
            var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(l).tail__O());
            if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(h$1)) === false)) {
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
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(framework$2, this$6);
    }))(tests);
    if ((this$7 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0$2 = this$7.head__O();
      var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t$2 = h$2;
      var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$7.tail__O());
      while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).sci_$colon$colon__f_next = nx;
        t$2 = nx;
        rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
      }
      var $x_2 = h$2;
    }
    var it = $x_2.iterator__sc_Iterator();
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
});
var $d_Lorg_scalajs_testing_bridge_TestLoader$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_TestLoader$, "org.scalajs.testing.bridge.TestLoader$", ({
  Lorg_scalajs_testing_bridge_TestLoader$: 1
}));
var $n_Lorg_scalajs_testing_bridge_TestLoader$;
function $m_Lorg_scalajs_testing_bridge_TestLoader$() {
  if ((!$n_Lorg_scalajs_testing_bridge_TestLoader$)) {
    $n_Lorg_scalajs_testing_bridge_TestLoader$ = new $c_Lorg_scalajs_testing_bridge_TestLoader$();
  }
  return $n_Lorg_scalajs_testing_bridge_TestLoader$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_ExecuteRequest(taskInfo, loggerColorSupport) {
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo = null;
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport = null;
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo = taskInfo;
  this.Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport = loggerColorSupport;
}
$c_Lorg_scalajs_testing_common_ExecuteRequest.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_ExecuteRequest.prototype.constructor = $c_Lorg_scalajs_testing_common_ExecuteRequest;
/** @constructor */
function $h_Lorg_scalajs_testing_common_ExecuteRequest() {
}
$h_Lorg_scalajs_testing_common_ExecuteRequest.prototype = $c_Lorg_scalajs_testing_common_ExecuteRequest.prototype;
function $as_Lorg_scalajs_testing_common_ExecuteRequest(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_ExecuteRequest) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.ExecuteRequest"));
}
function $isArrayOf_Lorg_scalajs_testing_common_ExecuteRequest(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_ExecuteRequest)));
}
function $asArrayOf_Lorg_scalajs_testing_common_ExecuteRequest(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_ExecuteRequest(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.ExecuteRequest;", depth));
}
var $d_Lorg_scalajs_testing_common_ExecuteRequest = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_ExecuteRequest, "org.scalajs.testing.common.ExecuteRequest", ({
  Lorg_scalajs_testing_common_ExecuteRequest: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkInfo(implName, displayName, fingerprints) {
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_implName = null;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_displayName = null;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_fingerprints = null;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_implName = implName;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_displayName = displayName;
  this.Lorg_scalajs_testing_common_FrameworkInfo__f_fingerprints = fingerprints;
}
$c_Lorg_scalajs_testing_common_FrameworkInfo.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkInfo.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkInfo;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkInfo() {
}
$h_Lorg_scalajs_testing_common_FrameworkInfo.prototype = $c_Lorg_scalajs_testing_common_FrameworkInfo.prototype;
function $as_Lorg_scalajs_testing_common_FrameworkInfo(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_FrameworkInfo) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.FrameworkInfo"));
}
function $isArrayOf_Lorg_scalajs_testing_common_FrameworkInfo(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_FrameworkInfo)));
}
function $asArrayOf_Lorg_scalajs_testing_common_FrameworkInfo(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_FrameworkInfo(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.FrameworkInfo;", depth));
}
var $d_Lorg_scalajs_testing_common_FrameworkInfo = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_FrameworkInfo, "org.scalajs.testing.common.FrameworkInfo", ({
  Lorg_scalajs_testing_common_FrameworkInfo: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkMessage(workerId, msg) {
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_workerId = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_msg = null;
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_workerId = workerId;
  this.Lorg_scalajs_testing_common_FrameworkMessage__f_msg = msg;
}
$c_Lorg_scalajs_testing_common_FrameworkMessage.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkMessage.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkMessage;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkMessage() {
}
$h_Lorg_scalajs_testing_common_FrameworkMessage.prototype = $c_Lorg_scalajs_testing_common_FrameworkMessage.prototype;
function $as_Lorg_scalajs_testing_common_FrameworkMessage(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_FrameworkMessage) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.FrameworkMessage"));
}
function $isArrayOf_Lorg_scalajs_testing_common_FrameworkMessage(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_FrameworkMessage)));
}
function $asArrayOf_Lorg_scalajs_testing_common_FrameworkMessage(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_FrameworkMessage(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.FrameworkMessage;", depth));
}
var $d_Lorg_scalajs_testing_common_FrameworkMessage = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_FrameworkMessage, "org.scalajs.testing.common.FrameworkMessage", ({
  Lorg_scalajs_testing_common_FrameworkMessage: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_IsolatedTestSet(testFrameworkNames, definedTests) {
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames = null;
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests = null;
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames = testFrameworkNames;
  this.Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests = definedTests;
}
$c_Lorg_scalajs_testing_common_IsolatedTestSet.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_IsolatedTestSet.prototype.constructor = $c_Lorg_scalajs_testing_common_IsolatedTestSet;
/** @constructor */
function $h_Lorg_scalajs_testing_common_IsolatedTestSet() {
}
$h_Lorg_scalajs_testing_common_IsolatedTestSet.prototype = $c_Lorg_scalajs_testing_common_IsolatedTestSet.prototype;
function $as_Lorg_scalajs_testing_common_IsolatedTestSet(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_IsolatedTestSet) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.IsolatedTestSet"));
}
function $isArrayOf_Lorg_scalajs_testing_common_IsolatedTestSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_IsolatedTestSet)));
}
function $asArrayOf_Lorg_scalajs_testing_common_IsolatedTestSet(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_IsolatedTestSet(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.IsolatedTestSet;", depth));
}
var $d_Lorg_scalajs_testing_common_IsolatedTestSet = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_IsolatedTestSet, "org.scalajs.testing.common.IsolatedTestSet", ({
  Lorg_scalajs_testing_common_IsolatedTestSet: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_JSEndpoints$() {
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_detectFrameworks = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createControllerRunner = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createWorkerRunner = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgController = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_tasks = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_execute = null;
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_done = null;
  $n_Lorg_scalajs_testing_common_JSEndpoints$ = this;
  var $x_2 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$3$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var $x_1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  var evidence$4 = $m_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$();
  var evidence$3$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_detectFrameworks = $x_2.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(2, $x_1, new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$2));
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createControllerRunner = $m_Lorg_scalajs_testing_common_RPCEndpoint$().apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(3, $m_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$(), $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$());
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_createWorkerRunner = $m_Lorg_scalajs_testing_common_RPCEndpoint$().apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(4, $m_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$(), $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$());
  var $x_3 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker = $x_3.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(5, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1));
  var $x_4 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$1 = $m_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_msgController = $x_4.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(6, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$1));
  var $x_6 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$3$3 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var evidence$1$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$3);
  var $x_5 = new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$2);
  var evidence$3$4 = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_tasks = $x_6.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(7, $x_5, new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$4));
  var $x_8 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$1$3 = $m_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$();
  var $x_7 = new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$3);
  var evidence$3$5 = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_execute = $x_8.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(8, $x_7, new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$5));
  var $x_9 = $m_Lorg_scalajs_testing_common_RPCEndpoint$();
  var evidence$1$4 = $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$();
  this.Lorg_scalajs_testing_common_JSEndpoints$__f_done = $x_9.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint(9, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$4), $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$());
}
$c_Lorg_scalajs_testing_common_JSEndpoints$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_JSEndpoints$.prototype.constructor = $c_Lorg_scalajs_testing_common_JSEndpoints$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_JSEndpoints$() {
}
$h_Lorg_scalajs_testing_common_JSEndpoints$.prototype = $c_Lorg_scalajs_testing_common_JSEndpoints$.prototype;
var $d_Lorg_scalajs_testing_common_JSEndpoints$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_JSEndpoints$, "org.scalajs.testing.common.JSEndpoints$", ({
  Lorg_scalajs_testing_common_JSEndpoints$: 1
}));
var $n_Lorg_scalajs_testing_common_JSEndpoints$;
function $m_Lorg_scalajs_testing_common_JSEndpoints$() {
  if ((!$n_Lorg_scalajs_testing_common_JSEndpoints$)) {
    $n_Lorg_scalajs_testing_common_JSEndpoints$ = new $c_Lorg_scalajs_testing_common_JSEndpoints$();
  }
  return $n_Lorg_scalajs_testing_common_JSEndpoints$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_JVMEndpoints$() {
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgWorker = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgController = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_event = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logError = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logWarn = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logInfo = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logDebug = null;
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logTrace = null;
  $n_Lorg_scalajs_testing_common_JVMEndpoints$ = this;
  var $x_1 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgWorker = $x_1.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(2, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1));
  var $x_2 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$1 = $m_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$();
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_msgController = $x_2.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(3, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$1));
  var $x_3 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$2 = $m_Lorg_scalajs_testing_common_Serializer$EventSerializer$();
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_event = $x_3.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(4, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$2));
  var $x_4 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$4 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$3);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logError = $x_4.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(5, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$4));
  var $x_5 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$5 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$6 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$5);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logWarn = $x_5.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(6, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$6));
  var $x_6 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$7 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$8 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$7);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logInfo = $x_6.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(7, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$8));
  var $x_7 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$9 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$1$10 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$9);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logDebug = $x_7.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(8, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$10));
  var $x_8 = $m_Lorg_scalajs_testing_common_MsgEndpoint$();
  var evidence$1$11 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
  var evidence$1$12 = new $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$11);
  this.Lorg_scalajs_testing_common_JVMEndpoints$__f_logTrace = $x_8.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint(9, new $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$12));
}
$c_Lorg_scalajs_testing_common_JVMEndpoints$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_JVMEndpoints$.prototype.constructor = $c_Lorg_scalajs_testing_common_JVMEndpoints$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_JVMEndpoints$() {
}
$h_Lorg_scalajs_testing_common_JVMEndpoints$.prototype = $c_Lorg_scalajs_testing_common_JVMEndpoints$.prototype;
var $d_Lorg_scalajs_testing_common_JVMEndpoints$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_JVMEndpoints$, "org.scalajs.testing.common.JVMEndpoints$", ({
  Lorg_scalajs_testing_common_JVMEndpoints$: 1
}));
var $n_Lorg_scalajs_testing_common_JVMEndpoints$;
function $m_Lorg_scalajs_testing_common_JVMEndpoints$() {
  if ((!$n_Lorg_scalajs_testing_common_JVMEndpoints$)) {
    $n_Lorg_scalajs_testing_common_JVMEndpoints$ = new $c_Lorg_scalajs_testing_common_JVMEndpoints$();
  }
  return $n_Lorg_scalajs_testing_common_JVMEndpoints$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_LogElement(index, x) {
  this.Lorg_scalajs_testing_common_LogElement__f_index = 0;
  this.Lorg_scalajs_testing_common_LogElement__f_x = null;
  this.Lorg_scalajs_testing_common_LogElement__f_index = index;
  this.Lorg_scalajs_testing_common_LogElement__f_x = x;
}
$c_Lorg_scalajs_testing_common_LogElement.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_LogElement.prototype.constructor = $c_Lorg_scalajs_testing_common_LogElement;
/** @constructor */
function $h_Lorg_scalajs_testing_common_LogElement() {
}
$h_Lorg_scalajs_testing_common_LogElement.prototype = $c_Lorg_scalajs_testing_common_LogElement.prototype;
function $as_Lorg_scalajs_testing_common_LogElement(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_LogElement) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.LogElement"));
}
function $isArrayOf_Lorg_scalajs_testing_common_LogElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_LogElement)));
}
function $asArrayOf_Lorg_scalajs_testing_common_LogElement(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_LogElement(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.LogElement;", depth));
}
var $d_Lorg_scalajs_testing_common_LogElement = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_LogElement, "org.scalajs.testing.common.LogElement", ({
  Lorg_scalajs_testing_common_LogElement: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_MsgEndpoint$() {
}
$c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype.constructor = $c_Lorg_scalajs_testing_common_MsgEndpoint$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_MsgEndpoint$() {
}
$h_Lorg_scalajs_testing_common_MsgEndpoint$.prototype = $c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype;
$c_Lorg_scalajs_testing_common_MsgEndpoint$.prototype.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_MsgEndpoint = (function(opc, ms) {
  var requirement = (!$m_Lorg_scalajs_testing_common_RPCCore$().isReservedOpCode__B__Z(opc));
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + "Reserved op code: ") + opc));
  }
  return new $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1(opc, ms);
});
var $d_Lorg_scalajs_testing_common_MsgEndpoint$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_MsgEndpoint$, "org.scalajs.testing.common.MsgEndpoint$", ({
  Lorg_scalajs_testing_common_MsgEndpoint$: 1
}));
var $n_Lorg_scalajs_testing_common_MsgEndpoint$;
function $m_Lorg_scalajs_testing_common_MsgEndpoint$() {
  if ((!$n_Lorg_scalajs_testing_common_MsgEndpoint$)) {
    $n_Lorg_scalajs_testing_common_MsgEndpoint$ = new $c_Lorg_scalajs_testing_common_MsgEndpoint$();
  }
  return $n_Lorg_scalajs_testing_common_MsgEndpoint$;
}
function $p_Lorg_scalajs_testing_common_RPCCore__attach__Lorg_scalajs_testing_common_RPCCore$BoundEndpoint__V($thiz, bep) {
  var opCode = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bep).endpoint__Lorg_scalajs_testing_common_Endpoint()).opCode__B();
  var old = $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_common_RPCCore__f_endpoints).put__O__O__O(opCode, bep));
  var requirement = (old === null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + ("Duplicate endpoint for opcode " + opCode)) + "."));
  }
}
function $p_Lorg_scalajs_testing_common_RPCCore__makeReply__J__s_util_Try__Lorg_scalajs_testing_common_Serializer__T($thiz, id, result, evidence$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).map__F1__s_util_Try(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2$2) => $p_Lorg_scalajs_testing_common_RPCCore__makeRPCMsg__B__J__O__Lorg_scalajs_testing_common_Serializer__T($thiz, $m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK, id, x$2$2$2, evidence$1))));
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1);
    var m = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).s_util_Success__f_value);
    return m;
  } else if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1);
    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).s_util_Failure__f_exception;
    return $p_Lorg_scalajs_testing_common_RPCCore__makeRPCMsg__B__J__O__Lorg_scalajs_testing_common_Serializer__T($thiz, $m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr, id, t, $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$());
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
  }
}
function $p_Lorg_scalajs_testing_common_RPCCore__makeRPCMsg__B__J__O__Lorg_scalajs_testing_common_Serializer__T($thiz, opCode, id, payload, evidence$2) {
  var byteOut = $ct_Ljava_io_ByteArrayOutputStream__(new $c_Ljava_io_ByteArrayOutputStream());
  var dataOut = new $c_Ljava_io_DataOutputStream(byteOut);
  try {
    var v = opCode;
    dataOut.write__I__V(v);
    var hi = id.RTLong__f_hi;
    dataOut.writeInt__I__V(hi);
    dataOut.writeInt__I__V(id.RTLong__f_lo);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$2).serialize__O__Ljava_io_DataOutputStream__V(payload, dataOut);
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataOut.Ljava_io_FilterOutputStream__f_out).close__V();
  }
  var xs = byteOut.toByteArray__AB();
  var f = ((b$2$2) => {
    var b$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(b$2$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((65535 & (255 & b$2)));
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi$1 = t.RTLong__f_hi;
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi$1))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs !== null)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$8.new__AC__I__I__T(ys, 0, ys.u.length);
}
function $p_Lorg_scalajs_testing_common_RPCCore__makeMsgMsg__B__O__Lorg_scalajs_testing_common_Serializer__T($thiz, opCode, payload, evidence$3) {
  var byteOut = $ct_Ljava_io_ByteArrayOutputStream__(new $c_Ljava_io_ByteArrayOutputStream());
  var dataOut = new $c_Ljava_io_DataOutputStream(byteOut);
  try {
    var v = opCode;
    dataOut.write__I__V(v);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$3).serialize__O__Ljava_io_DataOutputStream__V(payload, dataOut);
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataOut.Ljava_io_FilterOutputStream__f_out).close__V();
  }
  var xs = byteOut.toByteArray__AB();
  var f = ((b$2$2) => {
    var b$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(b$2$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((65535 & (255 & b$2)));
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs !== null)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$5.new__AC__I__I__T(ys, 0, ys.u.length);
}
function $p_Lorg_scalajs_testing_common_RPCCore__getPending$1__Ljava_io_DataInputStream__s_Option($thiz, in$1) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readLong__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_common_RPCCore__f_pending).remove__O__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi)));
}
function $ct_Lorg_scalajs_testing_common_RPCCore__s_concurrent_ExecutionContext__($thiz, ec) {
  $thiz.Lorg_scalajs_testing_common_RPCCore__f_ec = ec;
  $thiz.Lorg_scalajs_testing_common_RPCCore__f_pending = $ct_ju_concurrent_ConcurrentHashMap__(new $c_ju_concurrent_ConcurrentHashMap());
  $thiz.Lorg_scalajs_testing_common_RPCCore__f_endpoints = $ct_ju_concurrent_ConcurrentHashMap__(new $c_ju_concurrent_ConcurrentHashMap());
  return $thiz;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore() {
  this.Lorg_scalajs_testing_common_RPCCore__f_ec = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_pending = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_endpoints = null;
}
$c_Lorg_scalajs_testing_common_RPCCore.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore() {
}
$h_Lorg_scalajs_testing_common_RPCCore.prototype = $c_Lorg_scalajs_testing_common_RPCCore.prototype;
$c_Lorg_scalajs_testing_common_RPCCore.prototype.handleMessage__T__V = (function(msg) {
  var tag = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  if ((tag === x$2)) {
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__toCharArray__AC($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(msg));
  } else {
    var this$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_WrappedString(msg);
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$4.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    if ((this$5.length >= 0)) {
      var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$4.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var len = this$6.length;
      var destination = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
      this$4.copyToArray__O__I__I__I(destination, 0, 2147483647);
      var xs = destination;
    } else {
      var capacity = 0;
      var size = 0;
      var jsElems = null;
      capacity = 0;
      size = 0;
      jsElems = [];
      var this$9 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_StringView(this$4.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$9);
      while ((it.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
        var elem = it.next__O();
        var unboxedElem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(elem);
        jsElems.push(unboxedElem);
      }
      var xs = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(new Uint16Array(jsElems));
    }
  }
  var f = ((x$3$2$2) => {
    var x$3$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(x$3$2$2);
    return ((x$3$2 << 24) >> 24);
  });
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(len$1);
  if ((len$1 > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len$1)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len$1)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len$1)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len$1)) {
        var $x_4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len$1)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs !== null)) {
      while ((i < len$1)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len$1)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len$1)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len$1)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var in$1 = new $c_Ljava_io_DataInputStream($ct_Ljava_io_ByteArrayInputStream__AB__(new $c_Ljava_io_ByteArrayInputStream(), ys));
  try {
    var opCode = in$1.readByte__B();
    if (($m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK === opCode)) {
      var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_common_RPCCore__getPending$1__Ljava_io_DataInputStream__s_Option(this, in$1));
      if ((!this$12.isEmpty__Z())) {
        var x0$8 = this$12.get__O();
        var p$2 = $as_Lorg_scalajs_testing_common_RPCCore$PendingCall(x0$8);
        var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$2).promise__s_concurrent_Promise());
        try {
          var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$2).serializer__Lorg_scalajs_testing_common_Serializer();
          var r1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s).deserialize__Ljava_io_DataInputStream__O(in$1);
          var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1);
        } catch (e) {
          var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
          matchEnd8: {
            var result;
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
              var result = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
              break matchEnd8;
            }
            throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
          }
        }
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise(this$15, result);
      }
    } else if (($m_Lorg_scalajs_testing_common_RPCCore$().Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr === opCode)) {
      var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_testing_common_RPCCore__getPending$1__Ljava_io_DataInputStream__s_Option(this, in$1));
      if ((!this$16.isEmpty__Z())) {
        var x0$9 = this$16.get__O();
        var p$2$1 = $as_Lorg_scalajs_testing_common_RPCCore$PendingCall(x0$9);
        try {
          var s$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
          var r1$1 = s$1.deserialize__Ljava_io_DataInputStream__jl_Throwable(in$1);
          var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1$1);
        } catch (e$1) {
          var e$2$1 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
          matchEnd8$1: {
            var x1;
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2$1)) {
              var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$1);
              break matchEnd8$1;
            }
            throw ((e$2$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2$1.sjs_js_JavaScriptException__f_exception : e$2$1);
          }
        }
        if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
          var x2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1);
          var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$1).s_util_Success__f_value);
          var throwable = new $c_Lorg_scalajs_testing_common_RPCCore$RPCException(t$1);
        } else {
          if ((!(x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure))) {
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
          }
          var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1);
          var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).s_util_Failure__f_exception;
          var throwable = t$2;
        }
        var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p$2$1).promise__s_concurrent_Promise());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(this$19, throwable);
      }
    } else {
      var x1$2 = $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RPCCore__f_endpoints).get__O__O(opCode));
      if ((x1$2 === null)) {
        var detail = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_common_JSEndpoints$().Lorg_scalajs_testing_common_JSEndpoints$__f_msgWorker).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode === opCode) ? "; The test adapter could not send a message to a worker, which probably happens because the worker terminated early, without waiting for the reply to a call to send(). This is probably a bug in the testing framework you are using. See also #3201." : "");
        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalStateException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalStateException(), (("Unknown opcode: " + opCode) + detail));
      } else if ($is_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(x1$2)) {
        var x3$2 = $as_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(x1$2);
        var ep = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$2).Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint;
        var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$2).Lorg_scalajs_testing_common_RPCCore$$anon$1__f_exec;
        var s$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer;
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$2).deserialize__Ljava_io_DataInputStream__O(in$1)));
      } else if ($is_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(x1$2)) {
        var x4$1 = $as_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(x1$2);
        var t$3 = in$1.readLong__J();
        var lo$1 = t$3.RTLong__f_lo;
        var hi$1 = t$3.RTLong__f_hi;
        var ep$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint;
        var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
        try {
          var s$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep$2).Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_reqSerializer;
          var r1$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$3).deserialize__Ljava_io_DataInputStream__O(in$1);
          var $x_11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1$2);
        } catch (e$3) {
          var e$2$2 = ((e$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$3 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$3));
          matchEnd8$2: {
            var $x_11;
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2$2)) {
              var $x_11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$2);
              break matchEnd8$2;
            }
            throw ((e$2$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2$2.sjs_js_JavaScriptException__f_exception : e$2$2);
          }
        }
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_12.fromTry__s_util_Try__s_concurrent_Future($x_11)).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).Lorg_scalajs_testing_common_RPCCore$$anon$2__f_exec, this.Lorg_scalajs_testing_common_RPCCore__f_ec)).onComplete__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((callID) => ((repl$2$2) => {
          var repl$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(repl$2$2);
          this.send__T__V($p_Lorg_scalajs_testing_common_RPCCore__makeReply__J__s_util_Try__Lorg_scalajs_testing_common_Serializer__T(this, callID, repl$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep$2).Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_respSerializer));
        }))(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo$1, hi$1))), this.Lorg_scalajs_testing_common_RPCCore__f_ec);
      } else {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$2);
      }
    }
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1.Ljava_io_FilterInputStream__f_in).close__V();
  }
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.send__Lorg_scalajs_testing_common_MsgEndpoint__O__V = (function(ep, msg) {
  this.send__T__V($p_Lorg_scalajs_testing_common_RPCCore__makeMsgMsg__B__O__Lorg_scalajs_testing_common_Serializer__T(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode, msg, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer));
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.attach__Lorg_scalajs_testing_common_MsgEndpoint__F1__V = (function(ep, ex) {
  $p_Lorg_scalajs_testing_common_RPCCore__attach__Lorg_scalajs_testing_common_RPCCore$BoundEndpoint__V(this, new $c_Lorg_scalajs_testing_common_RPCCore$$anon$1(this, ep, ex));
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.attach__Lorg_scalajs_testing_common_RPCEndpoint__F1__V = (function(ep, ex) {
  this.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__F1__V(ep, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
    try {
      var r1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).apply__O__O(x$2$2);
      var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1);
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
      }
    }
    return $x_2.fromTry__s_util_Try__s_concurrent_Future($x_1);
  })));
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__F1__V = (function(ep, ex) {
  $p_Lorg_scalajs_testing_common_RPCCore__attach__Lorg_scalajs_testing_common_RPCCore$BoundEndpoint__V(this, new $c_Lorg_scalajs_testing_common_RPCCore$$anon$2(this, ep, ex));
});
$c_Lorg_scalajs_testing_common_RPCCore.prototype.detach__Lorg_scalajs_testing_common_Endpoint__V = (function(ep) {
  var old = $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RPCCore__f_endpoints).remove__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).opCode__B()));
  var requirement = (old !== null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), "requirement failed: Endpoint was not attached.");
  }
});
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore$() {
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK = 0;
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr = 0;
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK = 0;
  this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr = 1;
}
$c_Lorg_scalajs_testing_common_RPCCore$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore$.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore$() {
}
$h_Lorg_scalajs_testing_common_RPCCore$.prototype = $c_Lorg_scalajs_testing_common_RPCCore$.prototype;
$c_Lorg_scalajs_testing_common_RPCCore$.prototype.isReservedOpCode__B__Z = (function(opc) {
  return ((opc === this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyOK) || (opc === this.Lorg_scalajs_testing_common_RPCCore$__f_org$scalajs$testing$common$RPCCore$$ReplyErr));
});
var $d_Lorg_scalajs_testing_common_RPCCore$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RPCCore$, "org.scalajs.testing.common.RPCCore$", ({
  Lorg_scalajs_testing_common_RPCCore$: 1
}));
var $n_Lorg_scalajs_testing_common_RPCCore$;
function $m_Lorg_scalajs_testing_common_RPCCore$() {
  if ((!$n_Lorg_scalajs_testing_common_RPCCore$)) {
    $n_Lorg_scalajs_testing_common_RPCCore$ = new $c_Lorg_scalajs_testing_common_RPCCore$();
  }
  return $n_Lorg_scalajs_testing_common_RPCCore$;
}
function $is_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundEndpoint)));
}
function $as_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$BoundEndpoint"));
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundEndpoint)));
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundEndpoint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$BoundEndpoint;", depth));
}
function $is_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$PendingCall)));
}
function $as_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$PendingCall"));
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$PendingCall)));
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$PendingCall(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$PendingCall;", depth));
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCEndpoint$() {
}
$c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCEndpoint$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCEndpoint$() {
}
$h_Lorg_scalajs_testing_common_RPCEndpoint$.prototype = $c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype;
$c_Lorg_scalajs_testing_common_RPCEndpoint$.prototype.apply__B__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_Serializer__Lorg_scalajs_testing_common_RPCEndpoint = (function(opc, rqs, rps) {
  var requirement = (!$m_Lorg_scalajs_testing_common_RPCCore$().isReservedOpCode__B__Z(opc));
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + "Reserved op code: ") + opc));
  }
  return new $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2(opc, rqs, rps);
});
var $d_Lorg_scalajs_testing_common_RPCEndpoint$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RPCEndpoint$, "org.scalajs.testing.common.RPCEndpoint$", ({
  Lorg_scalajs_testing_common_RPCEndpoint$: 1
}));
var $n_Lorg_scalajs_testing_common_RPCEndpoint$;
function $m_Lorg_scalajs_testing_common_RPCEndpoint$() {
  if ((!$n_Lorg_scalajs_testing_common_RPCEndpoint$)) {
    $n_Lorg_scalajs_testing_common_RPCEndpoint$ = new $c_Lorg_scalajs_testing_common_RPCEndpoint$();
  }
  return $n_Lorg_scalajs_testing_common_RPCEndpoint$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunMux(runId, value) {
  this.Lorg_scalajs_testing_common_RunMux__f_runId = 0;
  this.Lorg_scalajs_testing_common_RunMux__f_value = null;
  this.Lorg_scalajs_testing_common_RunMux__f_runId = runId;
  this.Lorg_scalajs_testing_common_RunMux__f_value = value;
}
$c_Lorg_scalajs_testing_common_RunMux.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunMux.prototype.constructor = $c_Lorg_scalajs_testing_common_RunMux;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunMux() {
}
$h_Lorg_scalajs_testing_common_RunMux.prototype = $c_Lorg_scalajs_testing_common_RunMux.prototype;
function $as_Lorg_scalajs_testing_common_RunMux(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_RunMux) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RunMux"));
}
function $isArrayOf_Lorg_scalajs_testing_common_RunMux(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RunMux)));
}
function $asArrayOf_Lorg_scalajs_testing_common_RunMux(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RunMux(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RunMux;", depth));
}
var $d_Lorg_scalajs_testing_common_RunMux = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RunMux, "org.scalajs.testing.common.RunMux", ({
  Lorg_scalajs_testing_common_RunMux: 1
}));
function $p_Lorg_scalajs_testing_common_RunMuxRPC__attachMux__B__I__F1__F1__V($thiz, opCode, runId, ex, attach) {
  var dispatch = $as_ju_concurrent_ConcurrentHashMap($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_common_RunMuxRPC__f_mux).getOrElseUpdate__O__F0__O(opCode, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => $ps_Lorg_scalajs_testing_common_RunMuxRPC__newDispatchMap$1__F1__ju_concurrent_ConcurrentHashMap(attach)))));
  var old = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dispatch).put__O__O__O(runId, ex));
  var requirement = (old === null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + (("Duplicate endpoint for opcode " + opCode) + " run ")) + runId));
  }
}
function $ps_Lorg_scalajs_testing_common_RunMuxRPC__newDispatchMap$1__F1__ju_concurrent_ConcurrentHashMap(attach$1) {
  var dispatch = $ct_ju_concurrent_ConcurrentHashMap__(new $c_ju_concurrent_ConcurrentHashMap());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(attach$1).apply__O__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((r$2$2) => {
    var r$2 = $as_Lorg_scalajs_testing_common_RunMux(r$2$2);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option(dispatch.get__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r$2).Lorg_scalajs_testing_common_RunMux__f_runId)));
    if (this$1.isEmpty__Z()) {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("Unknown run " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r$2).Lorg_scalajs_testing_common_RunMux__f_runId));
    } else {
      var x0 = this$1.get__O();
      var f$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(x0);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(f$2).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(r$2).Lorg_scalajs_testing_common_RunMux__f_value);
    }
  })));
  return dispatch;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunMuxRPC(rpc) {
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc = null;
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux = null;
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc = rpc;
  this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Map($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Map$().empty__O());
}
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.constructor = $c_Lorg_scalajs_testing_common_RunMuxRPC;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunMuxRPC() {
}
$h_Lorg_scalajs_testing_common_RunMuxRPC.prototype = $c_Lorg_scalajs_testing_common_RunMuxRPC.prototype;
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V = (function(ep, runId, msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).send__Lorg_scalajs_testing_common_MsgEndpoint__O__V(ep, new $c_Lorg_scalajs_testing_common_RunMux(runId, msg));
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.attach__Lorg_scalajs_testing_common_MsgEndpoint__I__F1__V = (function(ep, runId, ex) {
  $p_Lorg_scalajs_testing_common_RunMuxRPC__attachMux__B__I__F1__F1__V(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode, runId, ex, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((ex$2$2) => {
    var ex$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(ex$2$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).attach__Lorg_scalajs_testing_common_MsgEndpoint__F1__V(ep, ex$2);
  })));
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.attach__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V = (function(ep, runId, ex) {
  this.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V(ep, runId, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$2$2) => {
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
    try {
      var r1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ex).apply__O__O(x$2$2);
      var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1);
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
      }
    }
    return $x_2.fromTry__s_util_Try__s_concurrent_Future($x_1);
  })));
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__I__F1__V = (function(ep, runId, ex) {
  $p_Lorg_scalajs_testing_common_RunMuxRPC__attachMux__B__I__F1__F1__V(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode, runId, ex, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((ex$2$2) => {
    var ex$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_F1(ex$2$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).attachAsync__Lorg_scalajs_testing_common_RPCEndpoint__F1__V(ep, ex$2);
  })));
});
$c_Lorg_scalajs_testing_common_RunMuxRPC.prototype.detach__Lorg_scalajs_testing_common_Endpoint__I__V = (function(ep, runId) {
  var opCode = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ep).opCode__B();
  var dispatch = $as_ju_concurrent_ConcurrentHashMap($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux).getOrElse__O__F0__O(opCode, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("No endpoint attached for opCode " + opCode));
  }))));
  var old = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dispatch).remove__O__O(runId);
  var requirement = (old !== null);
  if ((!requirement)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), (("requirement failed: " + (("No endpoint attached for opCode " + opCode) + " run ")) + runId));
  }
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dispatch).isEmpty__Z()) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_rpc).detach__Lorg_scalajs_testing_common_Endpoint__V(ep);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_common_RunMuxRPC__f_mux);
    this$2.subtractOne__O__scm_Shrinkable(opCode);
  }
});
var $d_Lorg_scalajs_testing_common_RunMuxRPC = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RunMuxRPC, "org.scalajs.testing.common.RunMuxRPC", ({
  Lorg_scalajs_testing_common_RunMuxRPC: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunnerArgs(runID, frameworkImpl, args, remoteArgs) {
  this.Lorg_scalajs_testing_common_RunnerArgs__f_runID = 0;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl = null;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_args = null;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs = null;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_runID = runID;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl = frameworkImpl;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_args = args;
  this.Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs = remoteArgs;
}
$c_Lorg_scalajs_testing_common_RunnerArgs.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunnerArgs.prototype.constructor = $c_Lorg_scalajs_testing_common_RunnerArgs;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunnerArgs() {
}
$h_Lorg_scalajs_testing_common_RunnerArgs.prototype = $c_Lorg_scalajs_testing_common_RunnerArgs.prototype;
function $as_Lorg_scalajs_testing_common_RunnerArgs(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_RunnerArgs) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RunnerArgs"));
}
function $isArrayOf_Lorg_scalajs_testing_common_RunnerArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RunnerArgs)));
}
function $asArrayOf_Lorg_scalajs_testing_common_RunnerArgs(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RunnerArgs(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RunnerArgs;", depth));
}
var $d_Lorg_scalajs_testing_common_RunnerArgs = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RunnerArgs, "org.scalajs.testing.common.RunnerArgs", ({
  Lorg_scalajs_testing_common_RunnerArgs: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$.prototype.serialize__O__Lorg_scalajs_testing_common_Serializer__T = (function(t, evidence$1) {
  var byteOut = $ct_Ljava_io_ByteArrayOutputStream__(new $c_Ljava_io_ByteArrayOutputStream());
  var dataOut = new $c_Ljava_io_DataOutputStream(byteOut);
  try {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$1).serialize__O__Ljava_io_DataOutputStream__V(t, dataOut);
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(dataOut.Ljava_io_FilterOutputStream__f_out).close__V();
  }
  var xs = byteOut.toByteArray__AB();
  var f = ((b$2$2) => {
    var b$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(b$2$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC((65535 & (255 & b$2)));
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t$1.RTLong__f_lo;
        var hi = t$1.RTLong__f_hi;
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(xs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs !== null)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$4.new__AC__I__I__T(ys, 0, ys.u.length);
});
$c_Lorg_scalajs_testing_common_Serializer$.prototype.deserialize__T__Lorg_scalajs_testing_common_Serializer__O = (function(s, evidence$2) {
  var tag = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_reflect_ManifestFactory$CharManifest$();
  if ((tag === x$2)) {
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__toCharArray__AC($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s));
  } else {
    var this$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_WrappedString(s);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    if ((this$4.length >= 0)) {
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var len = this$5.length;
      var destination = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(len);
      this$3.copyToArray__O__I__I__I(destination, 0, 2147483647);
      var xs = destination;
    } else {
      var capacity = 0;
      var size = 0;
      var jsElems = null;
      capacity = 0;
      size = 0;
      jsElems = [];
      var this$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_StringView(this$3.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
      var it = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$8);
      while ((it.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
        var elem = it.next__O();
        var unboxedElem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(elem);
        jsElems.push(unboxedElem);
      }
      var xs = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(new Uint16Array(jsElems));
    }
  }
  var f = ((x$3$2$2) => {
    var x$3$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uC(x$3$2$2);
    return ((x$3$2 << 24) >> 24);
  });
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).u.length;
  var ys = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(len$1);
  if ((len$1 > 0)) {
    var i = 0;
    if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O)) {
      var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_O(xs, 1);
      while ((i < len$1)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).get(i);
        ys.set($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(xs, 1);
      while ((i < len$1)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(xs, 1);
      while ((i < len$1)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(xs, 1);
      while ((i < len$1)) {
        var $x_4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_4, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(xs, 1);
      while ((i < len$1)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((xs !== null)) {
      while ((i < len$1)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(xs).get(i);
        ys.set($x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(xs, 1);
      while ((i < len$1)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($x_7, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(xs, 1);
      while ((i < len$1)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(xs, 1);
      while ((i < len$1)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uB(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(xs);
    }
  }
  var in$1 = new $c_Ljava_io_DataInputStream($ct_Ljava_io_ByteArrayInputStream__AB__(new $c_Ljava_io_ByteArrayInputStream(), ys));
  try {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(evidence$2).deserialize__Ljava_io_DataInputStream__O(in$1);
  } finally {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1.Ljava_io_FilterInputStream__f_in).close__V();
  }
});
var $d_Lorg_scalajs_testing_common_Serializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$, "org.scalajs.testing.common.Serializer$", ({
  Lorg_scalajs_testing_common_Serializer$: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$;
function $m_Lorg_scalajs_testing_common_Serializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$ = new $c_Lorg_scalajs_testing_common_Serializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$SerializeState$() {
}
$c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$SerializeState$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$SerializeState$() {
}
$h_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype = $c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$SerializeState$.prototype.write$extension__Ljava_io_DataOutputStream__O__Lorg_scalajs_testing_common_Serializer__V = (function(this$, t, s) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s).serialize__O__Ljava_io_DataOutputStream__V(t, this$);
});
var $d_Lorg_scalajs_testing_common_Serializer$SerializeState$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$SerializeState$, "org.scalajs.testing.common.Serializer$SerializeState$", ({
  Lorg_scalajs_testing_common_Serializer$SerializeState$: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$SerializeState$;
function $m_Lorg_scalajs_testing_common_Serializer$SerializeState$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$SerializeState$)) {
    $n_Lorg_scalajs_testing_common_Serializer$SerializeState$ = new $c_Lorg_scalajs_testing_common_Serializer$SerializeState$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$SerializeState$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TaskInfo(serializedTask, taskDef, tags) {
  this.Lorg_scalajs_testing_common_TaskInfo__f_serializedTask = null;
  this.Lorg_scalajs_testing_common_TaskInfo__f_taskDef = null;
  this.Lorg_scalajs_testing_common_TaskInfo__f_tags = null;
  this.Lorg_scalajs_testing_common_TaskInfo__f_serializedTask = serializedTask;
  this.Lorg_scalajs_testing_common_TaskInfo__f_taskDef = taskDef;
  this.Lorg_scalajs_testing_common_TaskInfo__f_tags = tags;
}
$c_Lorg_scalajs_testing_common_TaskInfo.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TaskInfo.prototype.constructor = $c_Lorg_scalajs_testing_common_TaskInfo;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TaskInfo() {
}
$h_Lorg_scalajs_testing_common_TaskInfo.prototype = $c_Lorg_scalajs_testing_common_TaskInfo.prototype;
function $as_Lorg_scalajs_testing_common_TaskInfo(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_TaskInfo) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.TaskInfo"));
}
function $isArrayOf_Lorg_scalajs_testing_common_TaskInfo(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_TaskInfo)));
}
function $asArrayOf_Lorg_scalajs_testing_common_TaskInfo(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_TaskInfo(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.TaskInfo;", depth));
}
var $d_Lorg_scalajs_testing_common_TaskInfo = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_TaskInfo, "org.scalajs.testing.common.TaskInfo", ({
  Lorg_scalajs_testing_common_TaskInfo: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode() {
}
$c_Lorg_scalajs_testing_common_TestBridgeMode.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TestBridgeMode.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode() {
}
$h_Lorg_scalajs_testing_common_TestBridgeMode.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode.prototype;
function $as_Lorg_scalajs_testing_common_TestBridgeMode(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.TestBridgeMode"));
}
function $isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_TestBridgeMode)));
}
function $asArrayOf_Lorg_scalajs_testing_common_TestBridgeMode(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.TestBridgeMode;", depth));
}
function $is_Lsbt_testing_Event(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Event)));
}
function $as_Lsbt_testing_Event(obj) {
  return (($is_Lsbt_testing_Event(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Event"));
}
function $isArrayOf_Lsbt_testing_Event(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Event)));
}
function $asArrayOf_Lsbt_testing_Event(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Event(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Event;", depth));
}
function $is_Lsbt_testing_Fingerprint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Fingerprint)));
}
function $as_Lsbt_testing_Fingerprint(obj) {
  return (($is_Lsbt_testing_Fingerprint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Fingerprint"));
}
function $isArrayOf_Lsbt_testing_Fingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Fingerprint)));
}
function $asArrayOf_Lsbt_testing_Fingerprint(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Fingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Fingerprint;", depth));
}
var $d_Lsbt_testing_Fingerprint = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass(1, "sbt.testing.Fingerprint", ({
  Lsbt_testing_Fingerprint: 1
}));
function $is_Lsbt_testing_Framework(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Framework)));
}
function $as_Lsbt_testing_Framework(obj) {
  return (($is_Lsbt_testing_Framework(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Framework"));
}
function $isArrayOf_Lsbt_testing_Framework(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Framework)));
}
function $asArrayOf_Lsbt_testing_Framework(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Framework(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Framework;", depth));
}
var $d_Lsbt_testing_Framework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass(1, "sbt.testing.Framework", ({
  Lsbt_testing_Framework: 1
}));
function $is_Lsbt_testing_Logger(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Logger)));
}
function $as_Lsbt_testing_Logger(obj) {
  return (($is_Lsbt_testing_Logger(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Logger"));
}
function $isArrayOf_Lsbt_testing_Logger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Logger)));
}
function $asArrayOf_Lsbt_testing_Logger(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Logger(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Logger;", depth));
}
var $d_Lsbt_testing_Logger = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass(1, "sbt.testing.Logger", ({
  Lsbt_testing_Logger: 1
}));
/** @constructor */
function $c_Lsbt_testing_Selector() {
}
$c_Lsbt_testing_Selector.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_Selector.prototype.constructor = $c_Lsbt_testing_Selector;
/** @constructor */
function $h_Lsbt_testing_Selector() {
}
$h_Lsbt_testing_Selector.prototype = $c_Lsbt_testing_Selector.prototype;
function $as_Lsbt_testing_Selector(obj) {
  return (((obj instanceof $c_Lsbt_testing_Selector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Selector"));
}
function $isArrayOf_Lsbt_testing_Selector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Selector)));
}
function $asArrayOf_Lsbt_testing_Selector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Selector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Selector;", depth));
}
var $d_Lsbt_testing_Selector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass(0, "sbt.testing.Selector", ({
  Lsbt_testing_Selector: 1
}));
function $is_Lsbt_testing_Task(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_Task)));
}
function $as_Lsbt_testing_Task(obj) {
  return (($is_Lsbt_testing_Task(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Task"));
}
function $isArrayOf_Lsbt_testing_Task(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Task)));
}
function $asArrayOf_Lsbt_testing_Task(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Task(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Task;", depth));
}
var $d_Lsbt_testing_Task = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass(1, "sbt.testing.Task", ({
  Lsbt_testing_Task: 1
}));
function $p_s_reflect_NameTransformer$__enterOp__C__T__V($thiz, op, code) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.s_reflect_NameTransformer$__f_op2code).set(op, code);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(code);
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(code);
  var c = (((-97) + ((Math.imul(26, (((-97) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$1, 1)) | 0)) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$2, 2)) | 0)) | 0);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.s_reflect_NameTransformer$__f_code2op).set(c, new $c_s_reflect_NameTransformer$OpCodes(op, code, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.s_reflect_NameTransformer$__f_code2op).get(c)));
}
/** @constructor */
function $c_s_reflect_NameTransformer$() {
  this.s_reflect_NameTransformer$__f_nops = 0;
  this.s_reflect_NameTransformer$__f_ncodes = 0;
  this.s_reflect_NameTransformer$__f_op2code = null;
  this.s_reflect_NameTransformer$__f_code2op = null;
  $n_s_reflect_NameTransformer$ = this;
  this.s_reflect_NameTransformer$__f_nops = 128;
  this.s_reflect_NameTransformer$__f_ncodes = 676;
  this.s_reflect_NameTransformer$__f_op2code = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(this.s_reflect_NameTransformer$__f_nops);
  this.s_reflect_NameTransformer$__f_code2op = new ($d_s_reflect_NameTransformer$OpCodes.getArrayOf().constr)(this.s_reflect_NameTransformer$__f_ncodes);
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 126, "$tilde");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 61, "$eq");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 60, "$less");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 62, "$greater");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 33, "$bang");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 35, "$hash");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 37, "$percent");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 94, "$up");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 38, "$amp");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 124, "$bar");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 42, "$times");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 47, "$div");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 43, "$plus");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 45, "$minus");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 58, "$colon");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 92, "$bslash");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 63, "$qmark");
  $p_s_reflect_NameTransformer$__enterOp__C__T__V(this, 64, "$at");
}
$c_s_reflect_NameTransformer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_reflect_NameTransformer$.prototype.constructor = $c_s_reflect_NameTransformer$;
/** @constructor */
function $h_s_reflect_NameTransformer$() {
}
$h_s_reflect_NameTransformer$.prototype = $c_s_reflect_NameTransformer$.prototype;
$c_s_reflect_NameTransformer$.prototype.decode__T__T = (function(name0) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name0);
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$1.endsWith("<init>"))) {
    var name = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().stripSuffix$extension__T__T__T(name0, "<init>") + "this");
  } else {
    var name = name0;
  }
  var buf = null;
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
  var len = this$3.length;
  var i = 0;
  while ((i < len)) {
    var ops = null;
    var unicode = false;
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
    var index = i;
    var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$4, index);
    if (((c === 36) && (((2 + i) | 0) < len))) {
      var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
      var index$1 = ((1 + i) | 0);
      var ch1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$5, index$1);
      if (((ch1 >= 97) && (ch1 <= 122))) {
        var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
        var index$2 = ((2 + i) | 0);
        var ch2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$6, index$2);
        if (((ch2 >= 97) && (ch2 <= 122))) {
          ops = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.s_reflect_NameTransformer$__f_code2op).get((((-97) + ((Math.imul(26, (((-97) + ch1) | 0)) + ch2) | 0)) | 0));
          while (true) {
            if ((ops !== null)) {
              var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
              var prefix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_code;
              var toffset = i;
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(prefix);
              var $x_1 = (!(((toffset <= this$7.length) && (toffset >= 0)) && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$7.startsWith(prefix, toffset))));
            } else {
              var $x_1 = false;
            }
            if ($x_1) {
              ops = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_next;
            } else {
              break;
            }
          }
          if ((ops !== null)) {
            if ((buf === null)) {
              buf = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder());
              var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf);
              var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
              var endIndex = i;
              if ((endIndex > this$9.length)) {
                $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$9, endIndex);
              }
              if ((endIndex < 0)) {
                $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$9, (-1));
              }
              $x_2.append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$9.substring(0, endIndex)));
            }
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).append__C__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_op);
            var $x_3 = i;
            var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ops).s_reflect_NameTransformer$OpCodes__f_code);
            i = (($x_3 + this$10.length) | 0);
          }
        } else {
          if (((((len - i) | 0) >= 6) && (ch1 === 117))) {
            var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$();
            if (this$11.isDigit__I__Z(ch2)) {
              var $x_4 = true;
            } else {
              var $x_4 = ((ch2 >= 65) && (ch2 <= 70));
            }
          } else {
            var $x_4 = false;
          }
          if ($x_4) {
            var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
            var beginIndex = ((2 + i) | 0);
            var endIndex$1 = ((6 + i) | 0);
            if ((beginIndex < 0)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$12, beginIndex);
            }
            if ((endIndex$1 > this$12.length)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$12, endIndex$1);
            }
            if ((endIndex$1 < beginIndex)) {
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$12, (-1));
            }
            var hex = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$12.substring(beginIndex, endIndex$1));
            try {
              var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Integer$();
              var str = (65535 & this$13.java$lang$Integer$$parseIntImpl__T__I__I__I(hex, 16, 134217728));
              if ((buf === null)) {
                buf = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_scm_StringBuilder__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_StringBuilder());
                var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf);
                var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(name);
                var endIndex$2 = i;
                if ((endIndex$2 > this$14.length)) {
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$14, endIndex$2);
                }
                if ((endIndex$2 < 0)) {
                  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$14, (-1));
                }
                $x_5.append__T__scm_StringBuilder($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this$14.substring(0, endIndex$2)));
              }
              $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).append__C__scm_StringBuilder(str);
              i = ((6 + i) | 0);
              unicode = true;
            } catch (e) {
              if ((!(e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NumberFormatException))) {
                throw e;
              }
            }
          }
        }
      }
    }
    if (((ops === null) && (!unicode))) {
      if ((buf !== null)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).append__C__scm_StringBuilder(c);
      }
      i = ((1 + i) | 0);
    }
  }
  if ((buf === null)) {
    return name;
  } else {
    var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$15.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
});
var $d_s_reflect_NameTransformer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_s_reflect_NameTransformer$, "scala.reflect.NameTransformer$", ({
  s_reflect_NameTransformer$: 1
}));
var $n_s_reflect_NameTransformer$;
function $m_s_reflect_NameTransformer$() {
  if ((!$n_s_reflect_NameTransformer$)) {
    $n_s_reflect_NameTransformer$ = new $c_s_reflect_NameTransformer$();
  }
  return $n_s_reflect_NameTransformer$;
}
/** @constructor */
function $c_s_reflect_NameTransformer$OpCodes(op, code, next) {
  this.s_reflect_NameTransformer$OpCodes__f_op = 0;
  this.s_reflect_NameTransformer$OpCodes__f_code = null;
  this.s_reflect_NameTransformer$OpCodes__f_next = null;
  this.s_reflect_NameTransformer$OpCodes__f_op = op;
  this.s_reflect_NameTransformer$OpCodes__f_code = code;
  this.s_reflect_NameTransformer$OpCodes__f_next = next;
}
$c_s_reflect_NameTransformer$OpCodes.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_reflect_NameTransformer$OpCodes.prototype.constructor = $c_s_reflect_NameTransformer$OpCodes;
/** @constructor */
function $h_s_reflect_NameTransformer$OpCodes() {
}
$h_s_reflect_NameTransformer$OpCodes.prototype = $c_s_reflect_NameTransformer$OpCodes.prototype;
var $d_s_reflect_NameTransformer$OpCodes = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_s_reflect_NameTransformer$OpCodes, "scala.reflect.NameTransformer$OpCodes", ({
  s_reflect_NameTransformer$OpCodes: 1
}));
/** @constructor */
function $c_sjs_concurrent_JSExecutionContext$Implicits$() {
  this.sjs_concurrent_JSExecutionContext$Implicits$__f_queue = null;
  $n_sjs_concurrent_JSExecutionContext$Implicits$ = this;
  this.sjs_concurrent_JSExecutionContext$Implicits$__f_queue = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue;
}
$c_sjs_concurrent_JSExecutionContext$Implicits$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sjs_concurrent_JSExecutionContext$Implicits$.prototype.constructor = $c_sjs_concurrent_JSExecutionContext$Implicits$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$Implicits$() {
}
$h_sjs_concurrent_JSExecutionContext$Implicits$.prototype = $c_sjs_concurrent_JSExecutionContext$Implicits$.prototype;
var $d_sjs_concurrent_JSExecutionContext$Implicits$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_sjs_concurrent_JSExecutionContext$Implicits$, "scala.scalajs.concurrent.JSExecutionContext$Implicits$", ({
  sjs_concurrent_JSExecutionContext$Implicits$: 1
}));
var $n_sjs_concurrent_JSExecutionContext$Implicits$;
function $m_sjs_concurrent_JSExecutionContext$Implicits$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$Implicits$)) {
    $n_sjs_concurrent_JSExecutionContext$Implicits$ = new $c_sjs_concurrent_JSExecutionContext$Implicits$();
  }
  return $n_sjs_concurrent_JSExecutionContext$Implicits$;
}
function $as_sjs_reflect_LoadableModuleClass(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "scala.scalajs.reflect.LoadableModuleClass"));
}
function $isArrayOf_sjs_reflect_LoadableModuleClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_reflect_LoadableModuleClass)));
}
function $asArrayOf_sjs_reflect_LoadableModuleClass(obj, depth) {
  return (($isArrayOf_sjs_reflect_LoadableModuleClass(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lscala.scalajs.reflect.LoadableModuleClass;", depth));
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.s_util_DynamicVariable__f_v = null;
  this.s_util_DynamicVariable__f_v = init;
}
$c_s_util_DynamicVariable.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $c_s_util_DynamicVariable.prototype;
$c_s_util_DynamicVariable.prototype.toString__T = (function() {
  return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
});
var $d_s_util_DynamicVariable = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  s_util_DynamicVariable: 1
}));
function $sct_Lcom_novocode_junit_JUnitFramework__stinit__() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().registerInstantiatableClass__T__jl_Class__sjs_js_Array__V("com.novocode.junit.JUnitFramework", $d_Lcom_novocode_junit_JUnitFramework.getClassOf(), [[[], (() => new $c_Lcom_novocode_junit_JUnitFramework())]]);
}
/** @constructor */
function $c_Lcom_novocode_junit_JUnitFramework() {
  this.Lcom_novocode_junit_JUnitFramework__f_f = null;
  this.Lcom_novocode_junit_JUnitFramework__f_name = null;
  this.Lcom_novocode_junit_JUnitFramework__f_f = new $c_Lorg_scalajs_junit_JUnitFramework();
  this.Lcom_novocode_junit_JUnitFramework__f_name = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).Lorg_scalajs_junit_JUnitFramework__f_name;
}
$c_Lcom_novocode_junit_JUnitFramework.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lcom_novocode_junit_JUnitFramework.prototype.constructor = $c_Lcom_novocode_junit_JUnitFramework;
/** @constructor */
function $h_Lcom_novocode_junit_JUnitFramework() {
}
$h_Lcom_novocode_junit_JUnitFramework.prototype = $c_Lcom_novocode_junit_JUnitFramework.prototype;
$c_Lcom_novocode_junit_JUnitFramework.prototype.name__T = (function() {
  return this.Lcom_novocode_junit_JUnitFramework__f_name;
});
$c_Lcom_novocode_junit_JUnitFramework.prototype.fingerprints__ALsbt_testing_Fingerprint = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).fingerprints__ALsbt_testing_Fingerprint();
});
$c_Lcom_novocode_junit_JUnitFramework.prototype.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner(args, remoteArgs, testClassLoader);
});
$c_Lcom_novocode_junit_JUnitFramework.prototype.slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader, send) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lcom_novocode_junit_JUnitFramework__f_f).slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner(args, remoteArgs, testClassLoader, send);
});
var $d_Lcom_novocode_junit_JUnitFramework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lcom_novocode_junit_JUnitFramework, "com.novocode.junit.JUnitFramework", ({
  Lcom_novocode_junit_JUnitFramework: 1,
  Lsbt_testing_Framework: 1
}));
function $ct_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__ju_concurrent_ConcurrentHashMap$InnerHashMap__($thiz, outer) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  $thiz.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = outer;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).java$util$concurrent$ConcurrentHashMap$InnerHashMap$$makeSnapshot__ju_ArrayList());
  $thiz.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = this$1.listIterator__I__ju_ListIterator(0);
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator() {
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = null;
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator() {
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype.hasNext__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter).hasNext__Z();
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator.prototype.next__O = (function() {
  var node = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_ju_HashMap$Node($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter).next__O());
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = node;
  return this.extract__ju_HashMap$Node__O(node);
});
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitEvent(taskDef, _fullyQualifiedName, _status, _selector, _throwable, _duration) {
  this.Lmunit_internal_junitinterface_JUnitEvent__f_taskDef = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__fullyQualifiedName = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__status = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__selector = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__throwable = null;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lmunit_internal_junitinterface_JUnitEvent__f_taskDef = taskDef;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__fullyQualifiedName = _fullyQualifiedName;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__status = _status;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__selector = _selector;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__throwable = _throwable;
  this.Lmunit_internal_junitinterface_JUnitEvent__f__duration = _duration;
}
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitEvent;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitEvent() {
}
$h_Lmunit_internal_junitinterface_JUnitEvent.prototype = $c_Lmunit_internal_junitinterface_JUnitEvent.prototype;
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.status__Lsbt_testing_Status = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f__status;
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.selector__Lsbt_testing_Selector = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f__selector;
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.throwable__Lsbt_testing_OptionalThrowable = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f__throwable;
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.duration__J = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f__duration;
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.fullyQualifiedName__T = (function() {
  return this.Lmunit_internal_junitinterface_JUnitEvent__f__fullyQualifiedName;
});
$c_Lmunit_internal_junitinterface_JUnitEvent.prototype.fingerprint__Lsbt_testing_Fingerprint = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitEvent__f_taskDef).Lsbt_testing_TaskDef__f__fingerprint;
});
var $d_Lmunit_internal_junitinterface_JUnitEvent = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_JUnitEvent, "munit.internal.junitinterface.JUnitEvent", ({
  Lmunit_internal_junitinterface_JUnitEvent: 1,
  Lsbt_testing_Event: 1
}));
function $p_Lmunit_internal_junitinterface_JUnitFramework__parseRunSettings__AT__Lmunit_internal_junitinterface_RunSettings($thiz, args) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_junitinterface_Settings$();
  new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lmunit_internal_junitinterface_Settings$$anon$1(this$1);
  var verbose = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var noColor = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var decodeScalaNames = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var logAssert = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var notLogExceptionClass = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var useSbtLoggers = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var trimStackTraces = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(true);
  var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  var includeTags = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem);
  var elem$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$EmptySet$();
  var excludeTags = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem$1);
  var f = ((str) => {
    var str$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(str);
    switch (str$1) {
      case "-v": {
        var ev$3 = true;
        verbose.sr_BooleanRef__f_elem = ev$3;
        break;
      }
      case "-n": {
        var ev$4 = true;
        noColor.sr_BooleanRef__f_elem = ev$4;
        break;
      }
      case "-s": {
        var ev$5 = true;
        decodeScalaNames.sr_BooleanRef__f_elem = ev$5;
        break;
      }
      case "-a": {
        var ev$6 = true;
        logAssert.sr_BooleanRef__f_elem = ev$6;
        break;
      }
      case "-c": {
        var ev$7 = true;
        notLogExceptionClass.sr_BooleanRef__f_elem = ev$7;
        break;
      }
      default: {
        var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$14.startsWith("-tests="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-tests");
        }
        var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$15.startsWith("--tests="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--tests");
        }
        var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$16.startsWith("--ignore-runners="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--ignore-runners");
        }
        var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$17.startsWith("--run-listener="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--run-listener");
        }
        var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$18.startsWith("--exclude-tags="))) {
          var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(excludeTags.sr_ObjectRef__f_elem));
          var elem$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().stripPrefix$extension__T__T__T(str$1, "--exclude-tags=");
          var ev$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$20.incl__O__sci_SetOps(elem$2));
          excludeTags.sr_ObjectRef__f_elem = ev$8;
          ev$8 = null;
          break;
        }
        var this$21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$21.startsWith("--include-tags="))) {
          var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(includeTags.sr_ObjectRef__f_elem));
          var elem$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().stripPrefix$extension__T__T__T(str$1, "--include-tags=");
          var ev$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(this$23.incl__O__sci_SetOps(elem$3));
          includeTags.sr_ObjectRef__f_elem = ev$9;
          ev$9 = null;
          break;
        }
        var this$24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$24.startsWith("--include-categories="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--include-categories");
        }
        var this$25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$25.startsWith("--exclude-categories="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--exclude-categories");
        }
        var this$26 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$26.startsWith("-D"))) {
          var this$27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
          var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$27.indexOf("=")) !== (-1));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-Dkey=value");
        }
        var this$28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
        if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$28.startsWith("-")))) {
          var this$29 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str$1);
          var $x_2 = (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$29.startsWith("+")));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), str$1);
        }
      }
    }
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i = 0;
  if ((args !== null)) {
    while ((i < len)) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i);
      f(x0);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i < len)) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
      f(x0$1);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i < len)) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
      f(x0$2);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i < len)) {
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i < len)) {
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
      f(x0$3);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i < len)) {
      var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
      f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4));
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i < len)) {
      var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
      f(x0$5);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i < len)) {
      var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
      f(x0$6);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i < len)) {
      var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
      f(x0$7);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args);
  }
  var f$1 = ((s) => {
    var s$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s);
    switch (s$1) {
      case "+v": {
        var ev$10 = false;
        verbose.sr_BooleanRef__f_elem = ev$10;
        break;
      }
      case "+n": {
        var ev$11 = false;
        noColor.sr_BooleanRef__f_elem = ev$11;
        break;
      }
      case "+s": {
        var ev$12 = false;
        decodeScalaNames.sr_BooleanRef__f_elem = ev$12;
        break;
      }
      case "+a": {
        var ev$13 = false;
        logAssert.sr_BooleanRef__f_elem = ev$13;
        break;
      }
      case "+c": {
        var ev$14 = false;
        notLogExceptionClass.sr_BooleanRef__f_elem = ev$14;
        break;
      }
      case "+l": {
        var ev$15 = true;
        useSbtLoggers.sr_BooleanRef__f_elem = ev$15;
        break;
      }
      case "-l": {
        var ev$16 = false;
        useSbtLoggers.sr_BooleanRef__f_elem = ev$16;
        break;
      }
      case "+F": {
        var ev$17 = true;
        trimStackTraces.sr_BooleanRef__f_elem = ev$17;
        break;
      }
      case "-F": {
        var ev$18 = false;
        trimStackTraces.sr_BooleanRef__f_elem = ev$18;
        break;
      }
    }
  });
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i$1 = 0;
  if ((args !== null)) {
    while ((i$1 < len$1)) {
      var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i$1);
      f$1(x0$8);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i$1 < len$1)) {
      var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).get(i$1);
      f$1(x0$9);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i$1 < len$1)) {
      var x0$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).get(i$1);
      f$1(x0$10);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i$1 < len$1)) {
      var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).get(i$1);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo$1, hi$1));
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i$1 < len$1)) {
      var x0$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6$1).get(i$1);
      f$1(x0$11);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i$1 < len$1)) {
      var x0$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7$1).get(i$1);
      f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$12));
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i$1 < len$1)) {
      var x0$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8$1).get(i$1);
      f$1(x0$13);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i$1 < len$1)) {
      var x0$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9$1).get(i$1);
      f$1(x0$14);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i$1 < len$1)) {
      var x0$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10$1).get(i$1);
      f$1(x0$15);
      i$1 = ((1 + i$1) | 0);
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args);
  }
  return new $c_Lmunit_internal_junitinterface_RunSettings((!noColor.sr_BooleanRef__f_elem), decodeScalaNames.sr_BooleanRef__f_elem, verbose.sr_BooleanRef__f_elem, logAssert.sr_BooleanRef__f_elem, notLogExceptionClass.sr_BooleanRef__f_elem, useSbtLoggers.sr_BooleanRef__f_elem, trimStackTraces.sr_BooleanRef__f_elem, new $c_Lmunit_internal_junitinterface_TagsFilter($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(includeTags.sr_ObjectRef__f_elem), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_Set(excludeTags.sr_ObjectRef__f_elem)));
}
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitFramework() {
}
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitFramework;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitFramework() {
}
$h_Lmunit_internal_junitinterface_JUnitFramework.prototype = $c_Lmunit_internal_junitinterface_JUnitFramework.prototype;
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.fingerprints__ALsbt_testing_Fingerprint = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_Framework__f_customRunners).Lmunit_internal_junitinterface_CustomRunners__f_runners);
  if ((this$2.knownSize__I() >= 0)) {
    var len = this$2.knownSize__I();
    var destination = new ($d_Lsbt_testing_Fingerprint.getArrayOf().constr)(len);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$2, destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var it = this$2.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem);
    }
    return new ($d_Lsbt_testing_Fingerprint.getArrayOf().constr)(jsElems);
  }
});
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader) {
  return new $c_Lmunit_internal_junitinterface_JUnitRunner(args, remoteArgs, $p_Lmunit_internal_junitinterface_JUnitFramework__parseRunSettings__AT__Lmunit_internal_junitinterface_RunSettings(this, args), testClassLoader, this.Lmunit_Framework__f_customRunners);
});
$c_Lmunit_internal_junitinterface_JUnitFramework.prototype.slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader, send) {
  return new $c_Lmunit_internal_junitinterface_JUnitRunner(args, remoteArgs, $p_Lmunit_internal_junitinterface_JUnitFramework__parseRunSettings__AT__Lmunit_internal_junitinterface_RunSettings(this, args), testClassLoader, this.Lmunit_Framework__f_customRunners);
});
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitRunner(args, _remoteArgs, runSettings, classLoader, customRunners) {
  this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings = null;
  this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader = null;
  this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings = runSettings;
  this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader = classLoader;
}
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitRunner;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitRunner() {
}
$h_Lmunit_internal_junitinterface_JUnitRunner.prototype = $c_Lmunit_internal_junitinterface_JUnitRunner.prototype;
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task = (function(taskDefs) {
  var f = ((_$1) => {
    var _$1$1 = $as_Lsbt_testing_TaskDef(_$1);
    return new $c_Lmunit_internal_junitinterface_JUnitTask(_$1$1, this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings, this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader);
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).u.length;
  var ys = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((taskDefs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).get(i);
        ys.set($x_1, $as_Lsbt_testing_Task(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(taskDefs, 1);
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $as_Lsbt_testing_Task(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(taskDefs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $as_Lsbt_testing_Task(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(taskDefs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_4, $as_Lsbt_testing_Task(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(taskDefs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $as_Lsbt_testing_Task(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(taskDefs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_6, $as_Lsbt_testing_Task(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(taskDefs, 1);
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($x_7, $as_Lsbt_testing_Task(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(taskDefs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $as_Lsbt_testing_Task(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(taskDefs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $as_Lsbt_testing_Task(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(taskDefs);
    }
  }
  return ys;
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.done__T = (function() {
  return "";
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.serializeTask__Lsbt_testing_Task__F1__T = (function(task, serializer) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(serializer).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef()));
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.deserializeTask__T__F1__Lsbt_testing_Task = (function(task, deserializer) {
  return new $c_Lmunit_internal_junitinterface_JUnitTask($as_Lsbt_testing_TaskDef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(deserializer).apply__O__O(task)), this.Lmunit_internal_junitinterface_JUnitRunner__f_runSettings, this.Lmunit_internal_junitinterface_JUnitRunner__f_classLoader);
});
$c_Lmunit_internal_junitinterface_JUnitRunner.prototype.receiveMessage__T__s_Option = (function(msg) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
});
var $d_Lmunit_internal_junitinterface_JUnitRunner = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_JUnitRunner, "munit.internal.junitinterface.JUnitRunner", ({
  Lmunit_internal_junitinterface_JUnitRunner: 1,
  Lsbt_testing_Runner: 1
}));
/** @constructor */
function $c_Lmunit_internal_junitinterface_JUnitTask(_taskDef, runSettings, classLoader) {
  this.Lmunit_internal_junitinterface_JUnitTask__f__taskDef = null;
  this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings = null;
  this.Lmunit_internal_junitinterface_JUnitTask__f_classLoader = null;
  this.Lmunit_internal_junitinterface_JUnitTask__f__taskDef = _taskDef;
  this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings = runSettings;
  this.Lmunit_internal_junitinterface_JUnitTask__f_classLoader = classLoader;
}
$c_Lmunit_internal_junitinterface_JUnitTask.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.constructor = $c_Lmunit_internal_junitinterface_JUnitTask;
/** @constructor */
function $h_Lmunit_internal_junitinterface_JUnitTask() {
}
$h_Lmunit_internal_junitinterface_JUnitTask.prototype = $c_Lmunit_internal_junitinterface_JUnitTask.prototype;
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.taskDef__Lsbt_testing_TaskDef = (function() {
  return this.Lmunit_internal_junitinterface_JUnitTask__f__taskDef;
});
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.tags__AT = (function() {
  return new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(0);
});
$c_Lmunit_internal_junitinterface_JUnitTask.prototype.execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V = (function(eventHandler, loggers, continuation) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lmunit_internal_PlatformCompat$().newRunner__Lsbt_testing_TaskDef__jl_ClassLoader__s_Option(this.Lmunit_internal_junitinterface_JUnitTask__f__taskDef, this.Lmunit_internal_junitinterface_JUnitTask__f_classLoader);
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  if ((x === x1)) {
    return (void 0);
  }
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
    var runner = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lmunit_MUnitRunner($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x1)).s_Some__f_value);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).filter__Lorg_junit_runner_manipulation_Filter__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings).Lmunit_internal_junitinterface_RunSettings__f_tags);
    var reporter = new $c_Lmunit_internal_junitinterface_JUnitReporter(eventHandler, loggers, this.Lmunit_internal_junitinterface_JUnitTask__f_runSettings, this.Lmunit_internal_junitinterface_JUnitTask__f__taskDef);
    var notifier = new $c_Lmunit_internal_junitinterface_MUnitRunNotifier(reporter);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(runner).runAsync__Lorg_junit_runner_notification_RunNotifier__s_concurrent_Future(notifier)).foreach__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(_$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(continuation).apply__O__O(new ($d_Lsbt_testing_Task.getArrayOf().constr)([]));
    })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor());
    return (void 0);
  }
  throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
});
var $d_Lmunit_internal_junitinterface_JUnitTask = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_JUnitTask, "munit.internal.junitinterface.JUnitTask", ({
  Lmunit_internal_junitinterface_JUnitTask: 1,
  Lsbt_testing_Task: 1
}));
/** @constructor */
function $c_Lmunit_internal_junitinterface_MUnitRunNotifier(reporter) {
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter = null;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isReported = null;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter = reporter;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total = 0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isReported = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_scm_Set$().empty__O());
}
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.constructor = $c_Lmunit_internal_junitinterface_MUnitRunNotifier;
/** @constructor */
function $h_Lmunit_internal_junitinterface_MUnitRunNotifier() {
}
$h_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype = $c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype;
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestSuiteStarted__Lorg_junit_runner_Description__V = (function(description) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestSuiteStarted__V();
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestStarted__Lorg_junit_runner_Description__V = (function(description) {
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD($m_jl_System$NanoTime$().jl_System$NanoTime$__f_highPrecisionTimer.now()));
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var lo = this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestStarted__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).getMethodName__T());
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.elapsedMillis__D = (function() {
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD($m_jl_System$NanoTime$().jl_System$NanoTime$__f_highPrecisionTimer.now()));
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var lo = this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var b = this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_startedTimestamp;
  var blo = b.RTLong__f_lo;
  var lo$1 = ((lo - blo) | 0);
  var hi$1 = ((((hi - b.RTLong__f_hi) | 0) + ((((~lo) & blo) | ((~(lo ^ blo)) & lo$1)) >> 31)) | 0);
  return (((4.294967296E9 * hi$1) + (lo$1 >>> 0.0)) / 1000000.0);
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestIgnored__Lorg_junit_runner_Description__V = (function(description) {
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored = ((1 + this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_ignored) | 0);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isReported);
  this$1.add__O__Z(description);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestIgnored__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).getMethodName__T());
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestAssumptionFailed__Lorg_junit_runner_notification_Failure__V = (function(failure) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isReported);
  var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_description;
  this$1.add__O__Z(elem);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportAssumptionViolation__T__D__jl_Throwable__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_description).getMethodName__T(), this.elapsedMillis__D(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_ex);
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestFailure__Lorg_junit_runner_notification_Failure__V = (function(failure) {
  var methodName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_description).getMethodName__T();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isReported);
  var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_description;
  this$1.add__O__Z(elem);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestFailed__T__jl_Throwable__D__V(methodName, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failure).Lorg_junit_runner_notification_Failure__f_ex, this.elapsedMillis__D());
});
$c_Lmunit_internal_junitinterface_MUnitRunNotifier.prototype.fireTestFinished__Lorg_junit_runner_Description__V = (function(description) {
  var methodName = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).getMethodName__T();
  this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total = ((1 + this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_total) | 0);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_isReported);
  if ((!this$1.contains__O__Z(description))) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_MUnitRunNotifier__f_reporter).reportTestPassed__T__D__V(methodName, this.elapsedMillis__D());
  }
});
var $d_Lmunit_internal_junitinterface_MUnitRunNotifier = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_MUnitRunNotifier, "munit.internal.junitinterface.MUnitRunNotifier", ({
  Lmunit_internal_junitinterface_MUnitRunNotifier: 1,
  Lorg_junit_runner_notification_RunNotifier: 1
}));
/** @constructor */
function $c_Lmunit_internal_junitinterface_RunSettings(color, decodeScalaNames, verbose, logAssert, notLogExceptionClass, useSbtLoggers, trimStackTraces, tags) {
  this.Lmunit_internal_junitinterface_RunSettings__f_color = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_decodeScalaNames = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_verbose = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_logAssert = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_useSbtLoggers = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_trimStackTraces = false;
  this.Lmunit_internal_junitinterface_RunSettings__f_tags = null;
  this.Lmunit_internal_junitinterface_RunSettings__f_color = color;
  this.Lmunit_internal_junitinterface_RunSettings__f_decodeScalaNames = decodeScalaNames;
  this.Lmunit_internal_junitinterface_RunSettings__f_verbose = verbose;
  this.Lmunit_internal_junitinterface_RunSettings__f_logAssert = logAssert;
  this.Lmunit_internal_junitinterface_RunSettings__f_useSbtLoggers = useSbtLoggers;
  this.Lmunit_internal_junitinterface_RunSettings__f_trimStackTraces = trimStackTraces;
  this.Lmunit_internal_junitinterface_RunSettings__f_tags = tags;
}
$c_Lmunit_internal_junitinterface_RunSettings.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_RunSettings.prototype.constructor = $c_Lmunit_internal_junitinterface_RunSettings;
/** @constructor */
function $h_Lmunit_internal_junitinterface_RunSettings() {
}
$h_Lmunit_internal_junitinterface_RunSettings.prototype = $c_Lmunit_internal_junitinterface_RunSettings.prototype;
$c_Lmunit_internal_junitinterface_RunSettings.prototype.trimStackTraces__Z = (function() {
  return this.Lmunit_internal_junitinterface_RunSettings__f_trimStackTraces;
});
$c_Lmunit_internal_junitinterface_RunSettings.prototype.decodeName__T__T = (function(name) {
  if (this.Lmunit_internal_junitinterface_RunSettings__f_decodeScalaNames) {
    try {
      var r1 = $m_s_reflect_NameTransformer$().decode__T__T(name);
      var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(r1);
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      matchEnd8: {
        var $x_1;
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          var $x_1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
          break matchEnd8;
        }
        throw ((e$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
      }
    }
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($x_1.getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => name))));
  } else {
    return name;
  }
});
var $d_Lmunit_internal_junitinterface_RunSettings = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_RunSettings, "munit.internal.junitinterface.RunSettings", ({
  Lmunit_internal_junitinterface_RunSettings: 1,
  Lmunit_internal_junitinterface_Settings: 1
}));
/** @constructor */
function $c_Lmunit_internal_junitinterface_TagsFilter(include, exclude) {
  this.Lmunit_internal_junitinterface_TagsFilter__f_include = null;
  this.Lmunit_internal_junitinterface_TagsFilter__f_exclude = null;
  this.Lmunit_internal_junitinterface_TagsFilter__f_include = include;
  this.Lmunit_internal_junitinterface_TagsFilter__f_exclude = exclude;
}
$c_Lmunit_internal_junitinterface_TagsFilter.prototype = new $h_Lorg_junit_runner_manipulation_Filter();
$c_Lmunit_internal_junitinterface_TagsFilter.prototype.constructor = $c_Lmunit_internal_junitinterface_TagsFilter;
/** @constructor */
function $h_Lmunit_internal_junitinterface_TagsFilter() {
}
$h_Lmunit_internal_junitinterface_TagsFilter.prototype = $c_Lmunit_internal_junitinterface_TagsFilter.prototype;
$c_Lmunit_internal_junitinterface_TagsFilter.prototype.shouldRun__Lorg_junit_runner_Description__Z = (function(description) {
  if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_include).isEmpty__Z() && $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_exclude).isEmpty__Z())) {
    return true;
  } else {
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_include).isEmpty__Z();
    var elem$1 = false;
    elem$1 = elem;
    var elem$2 = false;
    elem$2 = false;
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(description).Lorg_junit_runner_Description__f_annotations);
    var these = this$3;
    while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_annotation_Annotation(x0);
      if ($is_Lmunit_internal_junitinterface_Tag(x$1)) {
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_annotation_Annotation($as_Lmunit_internal_junitinterface_Tag(x$1));
        var ev$1 = (elem$1 || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_include).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($as_Lmunit_internal_junitinterface_Tag(t)).Lmunit_Tag__f_value));
        elem$1 = ev$1;
        var ev$2 = (elem$2 || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lmunit_internal_junitinterface_TagsFilter__f_exclude).contains__O__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($as_Lmunit_internal_junitinterface_Tag(t)).Lmunit_Tag__f_value));
        elem$2 = ev$2;
      }
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    }
    return (elem$1 && (!elem$2));
  }
});
var $d_Lmunit_internal_junitinterface_TagsFilter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_TagsFilter, "munit.internal.junitinterface.TagsFilter", ({
  Lmunit_internal_junitinterface_TagsFilter: 1,
  Lorg_junit_runner_manipulation_Filter: 1
}));
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitEvent(taskDef, status, selector, throwable, duration) {
  this.Lorg_scalajs_junit_JUnitEvent__f_taskDef = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_status = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_selector = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_throwable = null;
  this.Lorg_scalajs_junit_JUnitEvent__f_duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  this.Lorg_scalajs_junit_JUnitEvent__f_taskDef = taskDef;
  this.Lorg_scalajs_junit_JUnitEvent__f_status = status;
  this.Lorg_scalajs_junit_JUnitEvent__f_selector = selector;
  this.Lorg_scalajs_junit_JUnitEvent__f_throwable = throwable;
  this.Lorg_scalajs_junit_JUnitEvent__f_duration = duration;
}
$c_Lorg_scalajs_junit_JUnitEvent.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitEvent.prototype.constructor = $c_Lorg_scalajs_junit_JUnitEvent;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitEvent() {
}
$h_Lorg_scalajs_junit_JUnitEvent.prototype = $c_Lorg_scalajs_junit_JUnitEvent.prototype;
$c_Lorg_scalajs_junit_JUnitEvent.prototype.status__Lsbt_testing_Status = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_status;
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.selector__Lsbt_testing_Selector = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_selector;
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.throwable__Lsbt_testing_OptionalThrowable = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_throwable;
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.duration__J = (function() {
  return this.Lorg_scalajs_junit_JUnitEvent__f_duration;
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.fullyQualifiedName__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_junit_JUnitEvent__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName;
});
$c_Lorg_scalajs_junit_JUnitEvent.prototype.fingerprint__Lsbt_testing_Fingerprint = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_junit_JUnitEvent__f_taskDef).Lsbt_testing_TaskDef__f__fingerprint;
});
var $d_Lorg_scalajs_junit_JUnitEvent = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_JUnitEvent, "org.scalajs.junit.JUnitEvent", ({
  Lorg_scalajs_junit_JUnitEvent: 1,
  Lsbt_testing_Event: 1
}));
function $p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint__Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$($thiz) {
  if (($thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module === null)) {
    $p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint$lzycompute$1__V($thiz);
  }
  return $thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module;
}
function $p_Lorg_scalajs_junit_JUnitFramework__parseRunSettings__AT__Lorg_scalajs_junit_RunSettings($thiz, args) {
  var verbose = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var noColor = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var decodeScalaNames = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var logAssert = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var notLogExceptionClass = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_BooleanRef(false);
  var f = ((str$2) => {
    var str = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(str$2);
    switch (str) {
      case "-v": {
        verbose.sr_BooleanRef__f_elem = true;
        break;
      }
      case "-n": {
        noColor.sr_BooleanRef__f_elem = true;
        break;
      }
      case "-s": {
        decodeScalaNames.sr_BooleanRef__f_elem = true;
        break;
      }
      case "-a": {
        logAssert.sr_BooleanRef__f_elem = true;
        break;
      }
      case "-c": {
        notLogExceptionClass.sr_BooleanRef__f_elem = true;
        break;
      }
      default: {
        var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$8.startsWith("-tests="))) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-tests");
        } else {
          var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
          if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$9.startsWith("--tests="))) {
            throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--tests");
          } else {
            var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
            if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$10.startsWith("--ignore-runners="))) {
              throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--ignore-runners");
            } else {
              var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
              if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$11.startsWith("--run-listener="))) {
                throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--run-listener");
              } else {
                var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$12.startsWith("--include-categories="))) {
                  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--include-categories");
                } else {
                  var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$13.startsWith("--exclude-categories="))) {
                    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "--exclude-categories");
                  } else {
                    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                    if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$14.startsWith("-D"))) {
                      var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                      var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this$15.indexOf("=")) !== (-1));
                    } else {
                      var $x_1 = false;
                    }
                    if ($x_1) {
                      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), "-Dkey=value");
                    } else {
                      var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                      if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$16.startsWith("-")))) {
                        var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(str);
                        var $x_2 = (!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this$17.startsWith("+")));
                      } else {
                        var $x_2 = false;
                      }
                      if ($x_2) {
                        throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException(), str);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i = 0;
  if ((args !== null)) {
    while ((i < len)) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i);
      f(x0);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i < len)) {
      var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
      f(x0$1);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i < len)) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
      f(x0$2);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i < len)) {
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi));
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i < len)) {
      var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
      f(x0$3);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i < len)) {
      var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
      f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4));
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i < len)) {
      var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
      f(x0$5);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i < len)) {
      var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
      f(x0$6);
      i = ((1 + i) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i < len)) {
      var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
      f(x0$7);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args);
  }
  var f$1 = ((s$2) => {
    var s = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(s$2);
    switch (s) {
      case "+v": {
        verbose.sr_BooleanRef__f_elem = false;
        break;
      }
      case "+n": {
        noColor.sr_BooleanRef__f_elem = false;
        break;
      }
      case "+s": {
        decodeScalaNames.sr_BooleanRef__f_elem = false;
        break;
      }
      case "+a": {
        logAssert.sr_BooleanRef__f_elem = false;
        break;
      }
      case "+c": {
        notLogExceptionClass.sr_BooleanRef__f_elem = false;
        break;
      }
    }
  });
  var len$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).u.length;
  var i$1 = 0;
  if ((args !== null)) {
    while ((i$1 < len$1)) {
      var x0$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(args).get(i$1);
      f$1(x0$8);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
    var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(args, 1);
    while ((i$1 < len$1)) {
      var x0$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).get(i$1);
      f$1(x0$9);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
    var x4$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(args, 1);
    while ((i$1 < len$1)) {
      var x0$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4$1).get(i$1);
      f$1(x0$10);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
    var x5$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(args, 1);
    while ((i$1 < len$1)) {
      var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5$1).get(i$1);
      var lo$1 = t$1.RTLong__f_lo;
      var hi$1 = t$1.RTLong__f_hi;
      f$1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo$1, hi$1));
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
    var x6$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(args, 1);
    while ((i$1 < len$1)) {
      var x0$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6$1).get(i$1);
      f$1(x0$11);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
    var x7$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(args, 1);
    while ((i$1 < len$1)) {
      var x0$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7$1).get(i$1);
      f$1($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$12));
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
    var x8$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(args, 1);
    while ((i$1 < len$1)) {
      var x0$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8$1).get(i$1);
      f$1(x0$13);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
    var x9$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(args, 1);
    while ((i$1 < len$1)) {
      var x0$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9$1).get(i$1);
      f$1(x0$14);
      i$1 = ((1 + i$1) | 0);
    }
  } else if ((args instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
    var x10$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(args, 1);
    while ((i$1 < len$1)) {
      var x0$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10$1).get(i$1);
      f$1(x0$15);
      i$1 = ((1 + i$1) | 0);
    }
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(args);
  }
  return new $c_Lorg_scalajs_junit_RunSettings((!noColor.sr_BooleanRef__f_elem), decodeScalaNames.sr_BooleanRef__f_elem, verbose.sr_BooleanRef__f_elem, logAssert.sr_BooleanRef__f_elem, notLogExceptionClass.sr_BooleanRef__f_elem);
}
function $p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint$lzycompute$1__V($thiz) {
  if (($thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module === null)) {
    $thiz.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module = new $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$($thiz);
  }
}
function $sct_Lorg_scalajs_junit_JUnitFramework__stinit__() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().registerInstantiatableClass__T__jl_Class__sjs_js_Array__V("org.scalajs.junit.JUnitFramework", $d_Lorg_scalajs_junit_JUnitFramework.getClassOf(), [[[], (() => new $c_Lorg_scalajs_junit_JUnitFramework())]]);
}
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitFramework() {
  this.Lorg_scalajs_junit_JUnitFramework__f_JUnitFingerprint$module = null;
  this.Lorg_scalajs_junit_JUnitFramework__f_name = null;
  this.Lorg_scalajs_junit_JUnitFramework__f_name = "Scala.js JUnit test framework";
}
$c_Lorg_scalajs_junit_JUnitFramework.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitFramework.prototype.constructor = $c_Lorg_scalajs_junit_JUnitFramework;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitFramework() {
}
$h_Lorg_scalajs_junit_JUnitFramework.prototype = $c_Lorg_scalajs_junit_JUnitFramework.prototype;
$c_Lorg_scalajs_junit_JUnitFramework.prototype.name__T = (function() {
  return this.Lorg_scalajs_junit_JUnitFramework__f_name;
});
$c_Lorg_scalajs_junit_JUnitFramework.prototype.fingerprints__ALsbt_testing_Fingerprint = (function() {
  return new ($d_Lsbt_testing_Fingerprint.getArrayOf().constr)([$p_Lorg_scalajs_junit_JUnitFramework__JUnitFingerprint__Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$(this)]);
});
$c_Lorg_scalajs_junit_JUnitFramework.prototype.runner__AT__AT__jl_ClassLoader__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader) {
  return new $c_Lorg_scalajs_junit_JUnitRunner(args, remoteArgs, $p_Lorg_scalajs_junit_JUnitFramework__parseRunSettings__AT__Lorg_scalajs_junit_RunSettings(this, args));
});
$c_Lorg_scalajs_junit_JUnitFramework.prototype.slaveRunner__AT__AT__jl_ClassLoader__F1__Lsbt_testing_Runner = (function(args, remoteArgs, testClassLoader, send) {
  return new $c_Lorg_scalajs_junit_JUnitRunner(args, remoteArgs, $p_Lorg_scalajs_junit_JUnitFramework__parseRunSettings__AT__Lorg_scalajs_junit_RunSettings(this, args));
});
var $d_Lorg_scalajs_junit_JUnitFramework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_JUnitFramework, "org.scalajs.junit.JUnitFramework", ({
  Lorg_scalajs_junit_JUnitFramework: 1,
  Lsbt_testing_Framework: 1
}));
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitRunner(args, remoteArgs, runSettings) {
  this.Lorg_scalajs_junit_JUnitRunner__f_runSettings = null;
  this.Lorg_scalajs_junit_JUnitRunner__f_runSettings = runSettings;
}
$c_Lorg_scalajs_junit_JUnitRunner.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitRunner.prototype.constructor = $c_Lorg_scalajs_junit_JUnitRunner;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitRunner() {
}
$h_Lorg_scalajs_junit_JUnitRunner.prototype = $c_Lorg_scalajs_junit_JUnitRunner.prototype;
$c_Lorg_scalajs_junit_JUnitRunner.prototype.tasks__ALsbt_testing_TaskDef__ALsbt_testing_Task = (function(taskDefs) {
  var f = ((x$1$2) => {
    var x$1 = $as_Lsbt_testing_TaskDef(x$1$2);
    return new $c_Lorg_scalajs_junit_JUnitTask(x$1, this.Lorg_scalajs_junit_JUnitRunner__f_runSettings);
  });
  var len = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).u.length;
  var ys = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((taskDefs !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDefs).get(i);
        ys.set($x_1, $as_Lsbt_testing_Task(f(x0)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_I)) {
      var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_I(taskDefs, 1);
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).get(i);
        ys.set($x_2, $as_Lsbt_testing_Task(f(x0$1)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_D)) {
      var x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_D(taskDefs, 1);
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).get(i);
        ys.set($x_3, $as_Lsbt_testing_Task(f(x0$2)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_J)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_J(taskDefs, 1);
      while ((i < len)) {
        var $x_4 = i;
        var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).get(i);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($x_4, $as_Lsbt_testing_Task(f(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_F)) {
      var x6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_F(taskDefs, 1);
      while ((i < len)) {
        var $x_5 = i;
        var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).get(i);
        ys.set($x_5, $as_Lsbt_testing_Task(f(x0$3)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C)) {
      var x7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_C(taskDefs, 1);
      while ((i < len)) {
        var $x_6 = i;
        var x0$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x7).get(i);
        ys.set($x_6, $as_Lsbt_testing_Task(f($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$bC(x0$4))));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B)) {
      var x8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_B(taskDefs, 1);
      while ((i < len)) {
        var $x_7 = i;
        var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x8).get(i);
        ys.set($x_7, $as_Lsbt_testing_Task(f(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_S)) {
      var x9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_S(taskDefs, 1);
      while ((i < len)) {
        var $x_8 = i;
        var x0$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x9).get(i);
        ys.set($x_8, $as_Lsbt_testing_Task(f(x0$6)));
        i = ((1 + i) | 0);
      }
    } else if ((taskDefs instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_Z)) {
      var x10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$asArrayOf_Z(taskDefs, 1);
      while ((i < len)) {
        var $x_9 = i;
        var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x10).get(i);
        ys.set($x_9, $as_Lsbt_testing_Task(f(x0$7)));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(taskDefs);
    }
  }
  return ys;
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.done__T = (function() {
  return "";
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.serializeTask__Lsbt_testing_Task__F1__T = (function(task, serializer) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(serializer).apply__O__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(task).taskDef__Lsbt_testing_TaskDef()));
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.deserializeTask__T__F1__Lsbt_testing_Task = (function(task, deserializer) {
  return new $c_Lorg_scalajs_junit_JUnitTask($as_Lsbt_testing_TaskDef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(deserializer).apply__O__O(task)), this.Lorg_scalajs_junit_JUnitRunner__f_runSettings);
});
$c_Lorg_scalajs_junit_JUnitRunner.prototype.receiveMessage__T__s_Option = (function(msg) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
});
var $d_Lorg_scalajs_junit_JUnitRunner = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_JUnitRunner, "org.scalajs.junit.JUnitRunner", ({
  Lorg_scalajs_junit_JUnitRunner: 1,
  Lsbt_testing_Runner: 1
}));
function $p_Lorg_scalajs_junit_JUnitTask__executeTests__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_Reporter__s_concurrent_Future($thiz, bootstrapper, reporter) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportRunStarted__V();
  var failed = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  var ignored = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  var total = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_IntRef(0);
  var after = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$6$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$6$2);
    try {
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).afterClass__V(), (void 0)));
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
    }
  }));
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD($m_jl_System$NanoTime$().jl_System$NanoTime$__f_highPrecisionTimer.now()));
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var lo = this$6.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$6.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success((void 0));
  var x = x1.s_util_Success__f_value;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x);
  try {
    var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).beforeClass__V(), (void 0)));
  } catch (e$1) {
    var e$2$1 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$1);
  }
  matchEnd7: {
    var bodyFuture;
    if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
      var x2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1$2);
      var p3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$2).s_util_Success__f_value);
      if ((p3 === (void 0))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x);
        var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).tests__ALorg_scalajs_junit_TestMetadata()));
        var bodyFuture = $p_Lorg_scalajs_junit_JUnitTask__runTests$1__sci_List__Lorg_scalajs_junit_Reporter__sr_IntRef__sr_IntRef__Lorg_scalajs_junit_Bootstrapper__sr_IntRef__s_concurrent_Future($thiz, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$7), reporter, ignored, total, bootstrapper, failed);
        break matchEnd7;
      }
    }
    if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
      var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1$2);
      var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).s_util_Failure__f_exception;
      var bodyFuture = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(t));
      break matchEnd7;
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$2);
  }
  var exceptions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyFuture).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((bodyResult$2) => {
    var bodyResult = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(bodyResult$2);
    var afterException = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(after.apply__O__O(x))).failed__s_util_Try()).toOption__s_Option();
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyResult).failed__s_util_Try()).toOption__s_Option()).toList__sci_List());
    var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterException).toList__sci_List();
    return this$10.appendedAll__sc_IterableOnce__sci_List(suffix);
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceptions).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((startTime) => ((es$2) => {
    var es = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(es$2);
    var value$1 = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD($m_jl_System$NanoTime$().jl_System$NanoTime$__f_highPrecisionTimer.now()));
    var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
    var lo$1 = this$12.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value$1);
    var hi$1 = this$12.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var blo = startTime.RTLong__f_lo;
    var lo$2 = ((lo$1 - blo) | 0);
    var hi$2 = ((((hi$1 - startTime.RTLong__f_hi) | 0) + ((((~lo$1) & blo) | ((~(lo$1 ^ blo)) & lo$2)) >> 31)) | 0);
    var timeInSeconds = (((4.294967296E9 * hi$2) + (lo$2 >>> 0.0)) / 1.0E9);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(es, timeInSeconds);
  }))(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
  var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((check$ifrefutable$1$2) => {
    var check$ifrefutable$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$1$2);
    return (check$ifrefutable$1 !== null);
  }));
  var executor = $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$15.filter__F1__s_concurrent_ExecutionContext__s_concurrent_Future(p, executor)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$7$2) => {
    var x$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$7$2);
    if ((x$7 !== null)) {
      var errors = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7)._1__O());
      var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$7);
      var timeInSeconds$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(this$16._2__O());
      failed.sr_IntRef__f_elem = ((failed.sr_IntRef__f_elem + $p_Lorg_scalajs_junit_JUnitTask__reportExecutionErrors__Lorg_scalajs_junit_Reporter__s_Option__D__sci_List__I($thiz, reporter, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$(), timeInSeconds$1, errors)) | 0);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportRunFinished__I__I__I__D__V(failed.sr_IntRef__f_elem, ignored.sr_IntRef__f_elem, total.sr_IntRef__f_elem, timeInSeconds$1);
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$7);
    }
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
}
function $p_Lorg_scalajs_junit_JUnitTask__executeTestMethod__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_TestMetadata__Lorg_scalajs_junit_Reporter__s_concurrent_Future($thiz, bootstrapper, test, reporter) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportTestStarted__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T());
  var after = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((instance$4$2) => {
    try {
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).after__O__V(instance$4$2), (void 0)));
    } catch (e) {
      var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2);
    }
  }));
  var value = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD($m_jl_System$NanoTime$().jl_System$NanoTime$__f_highPrecisionTimer.now()));
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
  var lo = this$2.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  var hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  try {
    var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).newInstance__O());
  } catch (e$1) {
    var e$2$1 = ((e$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$1 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$1));
    var x1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$1);
  }
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1);
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).s_util_Success__f_value;
    try {
      var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).before__O__V(x), (void 0)));
    } catch (e$3) {
      var e$2$2 = ((e$3 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$3 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$3));
      var x1$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$2);
    }
    matchEnd7: {
      var bodyFuture;
      if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
        var x2$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1$2);
        var p3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$2).s_util_Success__f_value);
        if ((p3 === (void 0))) {
          var expectedException = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).annotation__Lorg_junit_Test()).expected__jl_Class();
          var f$1 = (() => {
            try {
              var x1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bootstrapper).invokeTest__O__T__s_concurrent_Future(x, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T()));
            } catch (e$4) {
              var e$2$3 = ((e$4 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e$4 : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e$4));
              var x1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(e$2$3);
            }
            if ((x1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
              var x2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Success(x1$1);
              var f = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2$1).s_util_Success__f_value);
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(f).recover__s_PartialFunction__s_concurrent_ExecutionContext__s_concurrent_Future(new $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1($thiz), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
            } else if ((x1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
              var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1$1);
              var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).s_util_Failure__f_exception;
              return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(t));
            } else {
              throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$1);
            }
          });
          if ((expectedException !== null)) {
            var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException);
            var $x_1 = (this$5 === $d_Lorg_junit_Test$None.getClassOf());
          } else {
            var $x_1 = false;
          }
          var wantException = (!$x_1);
          var bodyFuture = (wantException ? $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future(f$1())).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((r$2) => {
            var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(r$2);
            var rc7 = false;
            var x4 = null;
            if ((r instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success)) {
              var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException);
              return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_AssertionError__O__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_AssertionError(), ("Expected exception: " + this$7.data.name)));
            }
            if ((r instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
              rc7 = true;
              x4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(r);
              var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).s_util_Failure__f_exception;
              var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException);
              if (this$8.data.isInstance(t$1)) {
                return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success((void 0));
              }
            }
            if (rc7) {
              var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).s_util_Failure__f_exception;
              var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(expectedException);
              var expName = this$9.data.name;
              var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2);
              var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$10);
              var gotName = this$11.data.name;
              return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Exception__T__jl_Throwable__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Exception(), (((("Unexpected exception, expected<" + expName) + "> but was<") + gotName) + ">"), t$2));
            }
            throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(r);
          })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_concurrent_Future(f$1()));
          break matchEnd7;
        }
      }
      if ((x1$2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure)) {
        var x5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1$2);
        var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).s_util_Failure__f_exception;
        var bodyFuture = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(t$3));
        break matchEnd7;
      }
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1$2);
    }
    var exceptions = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyFuture).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((bodyResult$2) => {
      var bodyResult = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(bodyResult$2);
      var afterException = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Try(after.apply__O__O(x))).failed__s_util_Try()).toOption__s_Option();
      var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(bodyResult).failed__s_util_Try()).toOption__s_Option()).toList__sci_List());
      var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(afterException).toList__sci_List();
      return this$13.appendedAll__sc_IterableOnce__sci_List(suffix);
    })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  } else {
    if ((!(x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure))) {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
    }
    var x3$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_util_Failure(x1);
    var t$2$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3$1).s_util_Failure__f_exception;
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$();
    var array = [t$2$1];
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array);
    var exceptions = $x_2.successful__O__s_concurrent_Future($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems));
  }
  var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(exceptions).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((startTime) => ((es$2) => {
    var es = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(es$2);
    var value$1 = (1000000.0 * $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD($m_jl_System$NanoTime$().jl_System$NanoTime$__f_highPrecisionTimer.now()));
    var this$19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_RTLong$();
    var lo$1 = this$19.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value$1);
    var hi$1 = this$19.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var blo = startTime.RTLong__f_lo;
    var lo$2 = ((lo$1 - blo) | 0);
    var hi$2 = ((((hi$1 - startTime.RTLong__f_hi) | 0) + ((((~lo$1) & blo) | ((~(lo$1 ^ blo)) & lo$2)) >> 31)) | 0);
    var timeInSeconds = (((4.294967296E9 * hi$2) + (lo$2 >>> 0.0)) / 1.0E9);
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(es, timeInSeconds);
  }))(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(lo, hi))), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result);
  var p = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((check$ifrefutable$2$2) => {
    var check$ifrefutable$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(check$ifrefutable$2$2);
    return (check$ifrefutable$2 !== null);
  }));
  var executor = $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$22.filter__F1__s_concurrent_ExecutionContext__s_concurrent_Future(p, executor)).map__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$9$2) => {
    var x$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T2(x$9$2);
    if ((x$9 !== null)) {
      var errors = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$9)._1__O());
      var this$23 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$9);
      var timeInSeconds$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(this$23._2__O());
      var failed = $p_Lorg_scalajs_junit_JUnitTask__reportExecutionErrors__Lorg_scalajs_junit_Reporter__s_Option__D__sci_List__I($thiz, reporter, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T()), timeInSeconds$1, errors);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportTestFinished__T__Z__D__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).name__T(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors).isEmpty__Z(), timeInSeconds$1);
      var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(test).annotation__Lorg_junit_Test()).timeout__J();
      var lo$3 = t$4.RTLong__f_lo;
      var hi$3 = t$4.RTLong__f_hi;
      if (((!((lo$3 === 0) && (hi$3 === 0))) && (((4.294967296E9 * hi$3) + (lo$3 >>> 0.0)) <= timeInSeconds$1))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).log__F1__T__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$8$2) => {
          var x$8 = $as_Lsbt_testing_Logger(x$8$2);
          return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((msg$2) => {
            var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(msg$2);
            $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$8).warn__T__V(msg);
          }));
        })), (((("Timeout: took " + timeInSeconds$1) + " sec, expected ") + (((4.294967296E9 * hi$3) + (lo$3 >>> 0.0)) / 1000.0)) + " sec"));
      }
      return failed;
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$9);
    }
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
}
function $p_Lorg_scalajs_junit_JUnitTask__reportExecutionErrors__Lorg_scalajs_junit_Reporter__s_Option__D__sci_List__I($thiz, reporter, method, timeInSeconds, errors) {
  var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  if (x.equals__O__Z(errors)) {
    return 0;
  }
  if ((errors instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon)) {
    var x3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(errors);
    var e = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).sci_$colon$colon__f_head);
    var p4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).sci_$colon$colon__f_next;
    if (false) {
      var x5 = $as_Lorg_junit_internal_AssumptionViolatedException(e);
      var x$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      if (x$3.equals__O__Z(p4)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportAssumptionViolation__s_Option__D__jl_Throwable__V(method, timeInSeconds, x5);
        return 0;
      }
    }
  }
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(errors);
  var f = ((x0$1$2) => {
    var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x0$1$2);
    if (false) {
      var x2 = $as_Lorg_junit_internal_AssumptionViolatedException(x0$1);
      return new $c_Lorg_junit_TestCouldNotBeSkippedException(x2);
    } else {
      return x0$1;
    }
  });
  if ((this$2 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
    var errorsPatchedForAssumptionViolations = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  } else {
    var x0 = this$2.head__O();
    var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$2.tail__O());
    while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var x0$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
      var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
    }
    var errorsPatchedForAssumptionViolations = h;
  }
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter).reportErrors__T__s_Option__D__sci_List__V("Test ", method, timeInSeconds, errorsPatchedForAssumptionViolations);
  return errorsPatchedForAssumptionViolations.length__I();
}
function $p_Lorg_scalajs_junit_JUnitTask__loadBootstrapper__Lorg_scalajs_junit_Reporter__s_Option($thiz, reporter) {
  var bootstrapperName = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_junit_JUnitTask__f_taskDef).Lsbt_testing_TaskDef__f__fullyQualifiedName + "$scalajs$junit$bootstrapper$");
  try {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$();
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.sjs_reflect_Reflect$__f_loadableModuleClasses).get__O__s_Option(bootstrapperName));
    if (this$2.isEmpty__Z()) {
      throw $ct_jl_ClassNotFoundException__T__(new $c_jl_ClassNotFoundException(), ("Cannot find " + bootstrapperName));
    }
    var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($as_sjs_reflect_LoadableModuleClass(this$2.get__O())).loadModule__O();
    if ($is_Lorg_scalajs_junit_Bootstrapper(b)) {
      var x2 = $as_Lorg_scalajs_junit_Bootstrapper(b);
      return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(x2);
    } else {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_ClassCastException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_ClassCastException(), (("Expected " + bootstrapperName) + " to extend Bootstrapper"));
    }
  } catch (e) {
    var e$2 = ((e instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable) ? e : new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjs_js_JavaScriptException(e));
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    var array = [e$2];
    var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array);
    $x_2.reportErrors__T__s_Option__D__sci_List__V("Error while loading test class ", $x_1, 0.0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems));
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
}
function $p_Lorg_scalajs_junit_JUnitTask__runTests$1__sci_List__Lorg_scalajs_junit_Reporter__sr_IntRef__sr_IntRef__Lorg_scalajs_junit_Bootstrapper__sr_IntRef__s_concurrent_Future($thiz, tests, reporter$2, ignored$1, total$1, bootstrapper$1, failed$1) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(tests);
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_ListBuffer();
  var these = this$1;
  while (true) {
    if ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
      var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      var x$2 = $as_Lorg_scalajs_junit_TestMetadata(x0);
      var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$2).ignored__Z();
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
      b.addOne__O__scm_ListBuffer(elem);
      these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
    } else {
      break;
    }
  }
  var _1 = b.toList__sci_List();
  var _2 = these;
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_1);
  var these$1 = this$2;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).isEmpty__Z())) {
    var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).head__O();
    var t = $as_Lorg_scalajs_junit_TestMetadata(x0$1);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(reporter$2).reportIgnored__s_Option__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).name__T()));
    these$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these$1).tail__O());
  }
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ignored$1);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ignored$1).sr_IntRef__f_elem;
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_1);
  $x_3.sr_IntRef__f_elem = (($x_2 + this$3.length__I()) | 0);
  if ((_2 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_$colon$colon(_2);
    var t$3 = $as_Lorg_scalajs_junit_TestMetadata($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_head);
    var ts = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).sci_$colon$colon__f_next;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(total$1).sr_IntRef__f_elem = ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(total$1).sr_IntRef__f_elem) | 0);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_junit_JUnitTask__executeTestMethod__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_TestMetadata__Lorg_scalajs_junit_Reporter__s_concurrent_Future($thiz, bootstrapper$1, t$3, reporter$2)).flatMap__F1__s_concurrent_ExecutionContext__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((fc$2) => {
      var fc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(fc$2);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failed$1).sr_IntRef__f_elem = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(failed$1).sr_IntRef__f_elem + fc) | 0);
      return $p_Lorg_scalajs_junit_JUnitTask__runTests$1__sci_List__Lorg_scalajs_junit_Reporter__sr_IntRef__sr_IntRef__Lorg_scalajs_junit_Bootstrapper__sr_IntRef__s_concurrent_Future($thiz, ts, reporter$2, ignored$1, total$1, bootstrapper$1, failed$1);
    })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  } else {
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    if (x.equals__O__Z(_2)) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Success((void 0)));
    } else {
      throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(_2);
    }
  }
}
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitTask(taskDef, runSettings) {
  this.Lorg_scalajs_junit_JUnitTask__f_taskDef = null;
  this.Lorg_scalajs_junit_JUnitTask__f_runSettings = null;
  this.Lorg_scalajs_junit_JUnitTask__f_taskDef = taskDef;
  this.Lorg_scalajs_junit_JUnitTask__f_runSettings = runSettings;
}
$c_Lorg_scalajs_junit_JUnitTask.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitTask.prototype.constructor = $c_Lorg_scalajs_junit_JUnitTask;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitTask() {
}
$h_Lorg_scalajs_junit_JUnitTask.prototype = $c_Lorg_scalajs_junit_JUnitTask.prototype;
$c_Lorg_scalajs_junit_JUnitTask.prototype.taskDef__Lsbt_testing_TaskDef = (function() {
  return this.Lorg_scalajs_junit_JUnitTask__f_taskDef;
});
$c_Lorg_scalajs_junit_JUnitTask.prototype.tags__AT = (function() {
  return new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_T.getArrayOf().constr)(0);
});
$c_Lorg_scalajs_junit_JUnitTask.prototype.execute__Lsbt_testing_EventHandler__ALsbt_testing_Logger__F1__V = (function(eventHandler, loggers, continuation) {
  var reporter = new $c_Lorg_scalajs_junit_Reporter(eventHandler, loggers, this.Lorg_scalajs_junit_JUnitTask__f_runSettings, this.Lorg_scalajs_junit_JUnitTask__f_taskDef);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($p_Lorg_scalajs_junit_JUnitTask__loadBootstrapper__Lorg_scalajs_junit_Reporter__s_Option(this, reporter));
  if (this$1.isEmpty__Z()) {
    var result = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_concurrent_Future$().successful__O__s_concurrent_Future((void 0));
  } else {
    var x0 = this$1.get__O();
    var bootstrapper = $as_Lorg_scalajs_junit_Bootstrapper(x0);
    var result = $p_Lorg_scalajs_junit_JUnitTask__executeTests__Lorg_scalajs_junit_Bootstrapper__Lorg_scalajs_junit_Reporter__s_concurrent_Future(this, bootstrapper, reporter);
  }
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(result).foreach__F1__s_concurrent_ExecutionContext__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1$2) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x$1$2);
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(continuation);
    var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    var len = xs.length__I();
    var array = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
    var iterator = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
    var i = 0;
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).hasNext__Z()) {
      array.set(i, $as_Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).next__O()));
      i = ((1 + i) | 0);
    }
    $x_1.apply__O__O(array);
  })), $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
});
var $d_Lorg_scalajs_junit_JUnitTask = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_JUnitTask, "org.scalajs.junit.JUnitTask", ({
  Lorg_scalajs_junit_JUnitTask: 1,
  Lsbt_testing_Task: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler() {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors = false;
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler.prototype.handle__Lsbt_testing_Event__V = (function(event) {
  var status = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(event).status__Lsbt_testing_Status();
  if (this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors) {
    var $x_1 = true;
  } else {
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_org$scalajs$testing$bridge$HTMLRunner$EventCounter$$isErrorStatus);
    var $x_1 = this$1.contains__O__Z(status);
  }
  this.Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler__f__hasErrors = $x_1;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts).update__O__O__V(status, ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$().Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$__f_counts).apply__O__O(status))) | 0));
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler, "org.scalajs.testing.bridge.HTMLRunner$EventCounter$Handler", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$EventCounter$Handler: 1,
  Lsbt_testing_EventHandler: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox(outer) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$updateCheckbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_$outer = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_$outer = outer;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs);
  var count = this$1.length__I();
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, (("Excluded Test Suites (" + count) + ")"));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$updateCheckbox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$checkboxUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.checked = false;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$testUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTaskDefs).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((taskDef$2$2) => {
    var taskDef$2 = $as_Lsbt_testing_TaskDef(taskDef$2$2);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests);
    var elem = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest(this, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(taskDef$2).Lsbt_testing_TaskDef__f__fullyQualifiedName);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer(this$3.addOne__O__scm_Growable(elem));
  })));
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox.prototype.setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V = (function(that) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V(that);
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox, "org.scalajs.testing.bridge.HTMLRunner$UI$ExcludedTestBox", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$MoveTarget: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest(outer, testName) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_testName = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_testName = testName;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("", "info");
  var $x_1 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox = $x_1.newCheckbox$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__Z__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox(element, false);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox__f_org$scalajs$testing$bridge$HTMLRunner$UI$ExcludedTestBox$$updateCheckbox;
  var $x_2 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$1 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_logLine;
  $x_2.newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(element$1, (" " + testName));
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.testName__T = (function() {
  return this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_testName;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.selected__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox.checked);
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.selected_$eq__Z__V = (function(v) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest__f_checkbox.checked = v;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest.prototype.failed__Z = (function() {
  return false;
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest, "org.scalajs.testing.bridge.HTMLRunner$UI$ExcludedTestBox$ExcludedTest", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$ExcludedTestBox$ExcludedTest: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test: 1
}));
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__runLink__F1__T($thiz, condition) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests);
  var suffix = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$excludedTests;
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOps(this$1.concat__sc_IterableOnce__O(suffix))).partition__F1__T2(condition);
  if ((x1 === null)) {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x1);
  }
  var included = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1)._1__O());
  var excluded = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_scm_Buffer($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1)._2__O());
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(included);
  var $x_1 = this$2.length__I();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded);
  if (($x_1 < this$3.length__I())) {
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$14$2$2) => {
      var x$14$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$14$2$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$14$2).testName__T();
    })))));
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Set$().from__sc_IterableOnce__sci_Set($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce(this$4));
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
    var excludedHash = ("" + this$5);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Seq$();
    var array = ["i", excludedHash];
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2.apply__sci_Seq__sc_SeqOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_WrappedVarArgs(), array)));
    var suffix$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnce($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(included).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$15$2$2) => {
      var x$15$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$15$2$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$15$2).testName__T();
    }))));
    var params = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(this$10.appendedAll__sc_IterableOnce__O(suffix$1));
  } else {
    var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_SeqOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(excluded).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$16$2$2) => {
      var x$16$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$16$2$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$16$2).testName__T();
    })))));
    var params = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Seq(this$11.prepended__O__O("e"));
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_IterableOnceOps($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(params).map__F1__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((uriComponent$2$2) => {
    var uriComponent$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(uriComponent$2$2);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(encodeURIComponent(uriComponent$2));
  }))))), "?", "&", "");
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox(outer, excludedTestCount, totalTestCount) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_updateCheckbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer = outer;
  if ((excludedTestCount === 0)) {
    var caption = ("Total Test Suites: " + totalTestCount);
  } else {
    var selectedCount = ((totalTestCount - excludedTestCount) | 0);
    var caption = (((("Selected Test Suites " + selectedCount) + " (Total: ") + totalTestCount) + ")");
  }
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, caption);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).expand__V();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$testUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("", "info");
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_updateCheckbox = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).org$scalajs$testing$bridge$HTMLRunner$UI$$checkboxUpdater__sc_Seq__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox__sjs_js_Function0($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$runningTests, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox);
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.counterLineText_$eq__T__V = (function(v) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine.textContent = v;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.done__Z__V = (function(ok) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).done__Z__V(ok);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_counterLine.className = ("log " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok));
  var rerunLine = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element("Next: ", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok));
  if ((!ok)) {
    $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(rerunLine, $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__runLink__F1__T(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$11$2$2) => {
      var x$11$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$11$2$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$11$2).failed__Z();
    }))), "Run failed");
    $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(rerunLine, " | ");
  }
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(rerunLine, "#", "Run selected").onclick = (() => {
    document.location.search = $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__runLink__F1__T(this, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((x$12$2$2) => {
      var x$12$2 = $as_Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test(x$12$2$2);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$12$2).selected__Z();
    })));
    return false;
  });
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(rerunLine, " | ");
  $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(rerunLine, "?", "Run all");
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox.prototype.setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V = (function(that) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_box).setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V(that);
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox, "org.scalajs.testing.bridge.HTMLRunner$UI$RootBox", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$MoveTarget: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1(outer) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_ansiCodesSupported = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer = outer;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_ansiCodesSupported = false;
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.ansiCodesSupported__Z = (function() {
  return this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_ansiCodesSupported;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.error__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "error");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).expand__V();
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.warn__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "warn");
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.info__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "info");
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.debug__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(msg, "debug");
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1.prototype.trace__jl_Throwable__V = (function(t) {
  this.error__T__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).toString__T());
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1, "org.scalajs.testing.bridge.HTMLRunner$UI$RunningTest$$anon$1", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1: 1,
  Lsbt_testing_Logger: 1
}));
function $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__toggleExpand__V($thiz) {
  $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded = (!$thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded);
  $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink.textContent = ($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded ? "[-]" : "[+]");
  $thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body.style.display = ($thiz.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded ? "block" : "none");
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, caption) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_$outer = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_$outer = outer;
  var element = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$container;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element, "test-box", "", "div");
  var element$1 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element$1, "test-box-header", "", "div");
  var $x_1 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$2 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink = $x_1.newLink$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element$2, "#", "[+]");
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expandLink.onclick = (() => {
    $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__toggleExpand__V(this);
    return false;
  });
  var $x_2 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$3 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption = $x_2.newTextNode$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Node(element$3, (" " + caption));
  var $x_3 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element$4 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox = $x_3.newCheckbox$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__Z__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Checkbox(element$4, true);
  var element$5 = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$().newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element$5, "test-box-body", "", "div");
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded = false;
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.done__Z__V = (function(ok) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header.className = (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_header.className) + " ") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$statusClass__Z__T(ok));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption.textContent = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_headerCaption.textContent) + (ok ? " - Passed" : " - Failed"));
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.expand__V = (function() {
  if ((!this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_expanded)) {
    $p_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__toggleExpand__V(this);
  }
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.log__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element = (function(msg, clss) {
  var $x_1 = $m_Lorg_scalajs_testing_bridge_HTMLRunner$dom$RichElement$();
  var element = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_body;
  return $x_1.newElement$extension__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element__T__T__T__Lorg_scalajs_testing_bridge_HTMLRunner$dom$Element(element, ("log " + clss), msg, "pre");
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox.prototype.setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V = (function(that) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box.insertAdjacentElement("afterend", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(that).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_box);
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox, "org.scalajs.testing.bridge.HTMLRunner$UI$TestBox", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$MoveTarget: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_JSRPC$() {
  this.Lorg_scalajs_testing_common_RPCCore__f_ec = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_pending = null;
  this.Lorg_scalajs_testing_common_RPCCore__f_endpoints = null;
  $ct_Lorg_scalajs_testing_common_RPCCore__s_concurrent_ExecutionContext__(this, $m_sjs_concurrent_JSExecutionContext$Implicits$().sjs_concurrent_JSExecutionContext$Implicits$__f_queue);
  $n_Lorg_scalajs_testing_bridge_JSRPC$ = this;
  scalajsCom.init(((arg1$2) => {
    var arg1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(arg1$2);
    $m_Lorg_scalajs_testing_bridge_JSRPC$().handleMessage__T__V(arg1);
  }));
}
$c_Lorg_scalajs_testing_bridge_JSRPC$.prototype = new $h_Lorg_scalajs_testing_common_RPCCore();
$c_Lorg_scalajs_testing_bridge_JSRPC$.prototype.constructor = $c_Lorg_scalajs_testing_bridge_JSRPC$;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_JSRPC$() {
}
$h_Lorg_scalajs_testing_bridge_JSRPC$.prototype = $c_Lorg_scalajs_testing_bridge_JSRPC$.prototype;
$c_Lorg_scalajs_testing_bridge_JSRPC$.prototype.send__T__V = (function(msg) {
  scalajsCom.send(msg);
});
var $d_Lorg_scalajs_testing_bridge_JSRPC$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_JSRPC$, "org.scalajs.testing.bridge.JSRPC$", ({
  Lorg_scalajs_testing_bridge_JSRPC$: 1,
  Lorg_scalajs_testing_common_RPCCore: 1
}));
var $n_Lorg_scalajs_testing_bridge_JSRPC$;
function $m_Lorg_scalajs_testing_bridge_JSRPC$() {
  if ((!$n_Lorg_scalajs_testing_bridge_JSRPC$)) {
    $n_Lorg_scalajs_testing_bridge_JSRPC$ = new $c_Lorg_scalajs_testing_bridge_JSRPC$();
  }
  return $n_Lorg_scalajs_testing_bridge_JSRPC$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader() {
}
$c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype = new $h_jl_ClassLoader();
$c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype.constructor = $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_ScalaJSClassLoader() {
}
$h_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype = $c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader.prototype;
var $d_Lorg_scalajs_testing_bridge_ScalaJSClassLoader = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_ScalaJSClassLoader, "org.scalajs.testing.bridge.ScalaJSClassLoader", ({
  Lorg_scalajs_testing_bridge_ScalaJSClassLoader: 1,
  jl_ClassLoader: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler(runID) {
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler__f_runID = 0;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler__f_runID = runID;
}
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler() {
}
$h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype;
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler.prototype.handle__Lsbt_testing_Event__V = (function(event) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_event, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler__f_runID, event);
});
var $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler, "org.scalajs.testing.bridge.TestAdapterBridge$RemoteEventHandler", ({
  Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteEventHandler: 1,
  Lsbt_testing_EventHandler: 1
}));
function $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement($thiz, x) {
  return new $c_Lorg_scalajs_testing_common_LogElement($thiz.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_index, x);
}
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger(runID, index, ansiCodesSupported) {
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID = 0;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_index = 0;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_ansiCodesSupported = false;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID = runID;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_index = index;
  this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_ansiCodesSupported = ansiCodesSupported;
}
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.constructor = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger() {
}
$h_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype = $c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype;
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.ansiCodesSupported__Z = (function() {
  return this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_ansiCodesSupported;
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.error__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logError, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg));
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.warn__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logWarn, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg));
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.info__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logInfo, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg));
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.debug__T__V = (function(msg) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logDebug, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, msg));
});
$c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger.prototype.trace__jl_Throwable__V = (function(t) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($m_Lorg_scalajs_testing_bridge_TestAdapterBridge$().Lorg_scalajs_testing_bridge_TestAdapterBridge$__f_org$scalajs$testing$bridge$TestAdapterBridge$$mux).send__Lorg_scalajs_testing_common_MsgEndpoint__I__O__V($m_Lorg_scalajs_testing_common_JVMEndpoints$().Lorg_scalajs_testing_common_JVMEndpoints$__f_logTrace, this.Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__f_runID, $p_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger__l__O__Lorg_scalajs_testing_common_LogElement(this, t));
});
var $d_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger, "org.scalajs.testing.bridge.TestAdapterBridge$RemoteLogger", ({
  Lorg_scalajs_testing_bridge_TestAdapterBridge$RemoteLogger: 1,
  Lsbt_testing_Logger: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$() {
}
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$() {
}
$h_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype = $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype;
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.serialize__Lorg_scalajs_testing_common_ExecuteRequest__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_ExecuteRequest__f_taskInfo;
  var s = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  s.serialize__Lorg_scalajs_testing_common_TaskInfo__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_ExecuteRequest__f_loggerColorSupport;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$1.serialize__sci_List__Ljava_io_DataOutputStream__V(t$1, out);
});
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_ExecuteRequest = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  var $x_1 = s.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TaskInfo(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  return new $c_Lorg_scalajs_testing_common_ExecuteRequest($x_1, s$1.deserialize__Ljava_io_DataInputStream__sci_List(in$1));
});
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_ExecuteRequest(in$1);
});
$c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_ExecuteRequest__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_ExecuteRequest(x), out);
});
var $d_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$, "org.scalajs.testing.common.ExecuteRequest$ExecuteRequestSerializer$", ({
  Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$;
function $m_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$)) {
    $n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$ = new $c_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_ExecuteRequest$ExecuteRequestSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$() {
}
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$() {
}
$h_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype = $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype;
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.serialize__Lorg_scalajs_testing_common_FrameworkInfo__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkInfo__f_implName;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkInfo__f_displayName;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkInfo__f_fingerprints;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out);
});
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkInfo = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $x_2 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $x_1 = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  return new $c_Lorg_scalajs_testing_common_FrameworkInfo($x_2, $x_1, s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1));
});
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkInfo(in$1);
});
$c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_FrameworkInfo__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_FrameworkInfo(x), out);
});
var $d_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$, "org.scalajs.testing.common.FrameworkInfo$FrameworkInfoSerializer$", ({
  Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$;
function $m_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$)) {
    $n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$ = new $c_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_FrameworkInfo$FrameworkInfoSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$() {
}
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$() {
}
$h_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype = $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype;
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.serialize__Lorg_scalajs_testing_common_FrameworkMessage__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkMessage__f_workerId;
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
  this$2.writeInt__I__V(hi);
  this$2.writeInt__I__V(lo);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_FrameworkMessage__f_msg;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
});
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkMessage = (function(in$1) {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readLong__J();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  return new $c_Lorg_scalajs_testing_common_FrameworkMessage($x_1, s$1.deserialize__Ljava_io_DataInputStream__T(in$1));
});
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_FrameworkMessage(in$1);
});
$c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_FrameworkMessage__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_FrameworkMessage(x), out);
});
var $d_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$, "org.scalajs.testing.common.FrameworkMessage$FrameworkMessageSerializer$", ({
  Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$;
function $m_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$)) {
    $n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$ = new $c_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_FrameworkMessage$FrameworkMessageSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$() {
}
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$() {
}
$h_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype = $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype;
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.serialize__Lorg_scalajs_testing_common_IsolatedTestSet__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_IsolatedTestSet__f_testFrameworkNames;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$3$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  s.serialize__sci_List__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_IsolatedTestSet__f_definedTests;
  var evidence$3$2 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$2);
  s$1.serialize__sci_List__Ljava_io_DataOutputStream__V(t$1, out);
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_IsolatedTestSet = (function(in$1) {
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var evidence$3$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  var $x_1 = s.deserialize__Ljava_io_DataInputStream__sci_List(in$1);
  var evidence$3$2 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var s$1 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$2);
  return new $c_Lorg_scalajs_testing_common_IsolatedTestSet($x_1, s$1.deserialize__Ljava_io_DataInputStream__sci_List(in$1));
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_IsolatedTestSet(in$1);
});
$c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_IsolatedTestSet__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_IsolatedTestSet(x), out);
});
var $d_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$, "org.scalajs.testing.common.IsolatedTestSet$IsolatedTestSetSerializer$", ({
  Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$;
function $m_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$)) {
    $n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$ = new $c_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_LogElement$$anon$1(evidence$1$1) {
  this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1 = null;
  this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1 = evidence$1$1;
}
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_LogElement$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_LogElement$$anon$1() {
}
$h_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype = $c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.serialize__Lorg_scalajs_testing_common_LogElement__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_LogElement__f_index;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_LogElement__f_x;
  var s$1 = this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(t$1, out);
});
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_LogElement = (function(in$1) {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var s$1 = this.Lorg_scalajs_testing_common_LogElement$$anon$1__f_evidence$1$1;
  return new $c_Lorg_scalajs_testing_common_LogElement($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1));
});
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_LogElement(in$1);
});
$c_Lorg_scalajs_testing_common_LogElement$$anon$1.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_LogElement__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_LogElement(x), out);
});
var $d_Lorg_scalajs_testing_common_LogElement$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_LogElement$$anon$1, "org.scalajs.testing.common.LogElement$$anon$1", ({
  Lorg_scalajs_testing_common_LogElement$$anon$1: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
function $is_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint)));
}
function $as_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$BoundMsgEndpoint"));
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint)));
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$BoundMsgEndpoint;", depth));
}
function $is_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint)));
}
function $as_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj) {
  return (($is_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$BoundRPCEndpoint"));
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint)));
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$BoundRPCEndpoint;", depth));
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunMux$$anon$1(evidence$1$1) {
  this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1 = null;
  this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1 = evidence$1$1;
}
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_RunMux$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunMux$$anon$1() {
}
$h_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype = $c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.serialize__Lorg_scalajs_testing_common_RunMux__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunMux__f_runId;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunMux__f_value;
  var s$1 = this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(t$1, out);
});
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunMux = (function(in$1) {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var s$1 = this.Lorg_scalajs_testing_common_RunMux$$anon$1__f_evidence$1$1;
  return new $c_Lorg_scalajs_testing_common_RunMux($x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1));
});
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunMux(in$1);
});
$c_Lorg_scalajs_testing_common_RunMux$$anon$1.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_RunMux__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_RunMux(x), out);
});
var $d_Lorg_scalajs_testing_common_RunMux$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RunMux$$anon$1, "org.scalajs.testing.common.RunMux$$anon$1", ({
  Lorg_scalajs_testing_common_RunMux$$anon$1: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$() {
}
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$() {
}
$h_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype = $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype;
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.serialize__Lorg_scalajs_testing_common_RunnerArgs__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_runID;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_frameworkImpl;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_args;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_RunnerArgs__f_remoteArgs;
  var evidence$3$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  s$3.serialize__sci_List__Ljava_io_DataOutputStream__V(t$3, out);
});
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunnerArgs = (function(in$1) {
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $x_2 = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var $x_1 = s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1);
  var evidence$3$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1);
  return new $c_Lorg_scalajs_testing_common_RunnerArgs($x_3, $x_2, $x_1, s$3.deserialize__Ljava_io_DataInputStream__sci_List(in$1));
});
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_RunnerArgs(in$1);
});
$c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_RunnerArgs__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_RunnerArgs(x), out);
});
var $d_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$, "org.scalajs.testing.common.RunnerArgs$RunnerArgsSerializer$", ({
  Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$;
function $m_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$)) {
    $n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$ = new $c_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_RunnerArgs$RunnerArgsSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3$1) {
  this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1 = null;
  this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1 = evidence$3$1;
}
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$$anon$1() {
}
$h_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype = $c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.serialize__sci_List__Ljava_io_DataOutputStream__V = (function(x, out) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var t = this$1.length__I();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var these = this$3;
  while ((!$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).isEmpty__Z())) {
    var x0 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).head__O();
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(x0, out);
    these = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(these).tail__O());
  }
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__sci_List = (function(in$1) {
  var n = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  var b = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_scm_ListBuffer();
  var i = 0;
  while ((i < n)) {
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$1__f_evidence$3$1;
    var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1);
    b.addOne__O__scm_ListBuffer(elem);
    i = ((1 + i) | 0);
  }
  return b.toList__sci_List();
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__sci_List(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$1.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__sci_List__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$$anon$1, "org.scalajs.testing.common.Serializer$$anon$1", ({
  Lorg_scalajs_testing_common_Serializer$$anon$1: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4$1) {
  this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1 = null;
  this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1 = evidence$4$1;
}
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$$anon$2;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$$anon$2() {
}
$h_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype = $c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype;
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.serialize__s_Option__Ljava_io_DataOutputStream__V = (function(x, out) {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var t = (!this$1.isEmpty__Z());
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  if ((!this$3.isEmpty__Z())) {
    var x0 = this$3.get__O();
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).serialize__O__Ljava_io_DataOutputStream__V(x0, out);
  }
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.deserialize__Ljava_io_DataInputStream__s_Option = (function(in$1) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z()) {
    var s$1 = this.Lorg_scalajs_testing_common_Serializer$$anon$2__f_evidence$4$1;
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$1).deserialize__Ljava_io_DataInputStream__O(in$1));
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  }
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__s_Option(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$$anon$2.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__s_Option__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$$anon$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$$anon$2, "org.scalajs.testing.common.Serializer$$anon$2", ({
  Lorg_scalajs_testing_common_Serializer$$anon$2: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z();
});
$c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(x);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(x$1);
});
var $d_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$, "org.scalajs.testing.common.Serializer$BooleanSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$BooleanSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$BooleanSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$EventSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.serialize__Lsbt_testing_Event__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).fullyQualifiedName__T();
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).fingerprint__Lsbt_testing_Fingerprint();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  s$1.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).selector__Lsbt_testing_Selector();
  var s$2 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  s$2.serialize__Lsbt_testing_Selector__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).status__Lsbt_testing_Status();
  $m_Lorg_scalajs_testing_common_Serializer$SerializeState$().write$extension__Ljava_io_DataOutputStream__O__Lorg_scalajs_testing_common_Serializer__V(out, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$3).jl_Enum__f__ordinal, $m_Lorg_scalajs_testing_common_Serializer$IntSerializer$());
  var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).throwable__Lsbt_testing_OptionalThrowable();
  var s$4 = $m_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$();
  s$4.serialize__Lsbt_testing_OptionalThrowable__Ljava_io_DataOutputStream__V(t$4, out);
  var t$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).duration__J();
  var lo = t$5.RTLong__f_lo;
  var hi = t$5.RTLong__f_hi;
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
  this$7.writeInt__I__V(hi);
  this$7.writeInt__I__V(lo);
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return new $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_Event__Ljava_io_DataOutputStream__V($as_Lsbt_testing_Event(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$EventSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$EventSerializer$, "org.scalajs.testing.common.Serializer$EventSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$EventSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$EventSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$EventSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$EventSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$EventSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$EventSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6(in$4) {
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fullyQualifiedName = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fingerprint = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_selector = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_status = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_throwable = null;
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$L0;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fullyQualifiedName = s.deserialize__Ljava_io_DataInputStream__T(in$4);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fingerprint = s$1.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint(in$4);
  var s$2 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_selector = s$2.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Selector(in$4);
  var s$3 = $m_Lorg_scalajs_testing_common_Serializer$StatusSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_status = s$3.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Status(in$4);
  var s$4 = $m_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_throwable = s$4.deserialize__Ljava_io_DataInputStream__Lsbt_testing_OptionalThrowable(in$4);
  this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_duration = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$4).readLong__J();
}
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6() {
}
$h_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype = $c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype;
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.fullyQualifiedName__T = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fullyQualifiedName;
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.fingerprint__Lsbt_testing_Fingerprint = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_fingerprint;
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.selector__Lsbt_testing_Selector = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_selector;
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.status__Lsbt_testing_Status = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_status;
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.throwable__Lsbt_testing_OptionalThrowable = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_throwable;
});
$c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6.prototype.duration__J = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6__f_duration;
});
var $d_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6, "org.scalajs.testing.common.Serializer$EventSerializer$$anon$6", ({
  Lorg_scalajs_testing_common_Serializer$EventSerializer$$anon$6: 1,
  Lsbt_testing_Event: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$() {
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Annotated = 0;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Subclass = 0;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Annotated = 1;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$__f_Subclass = 2;
}
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V = (function(fp, out) {
  if ($is_Lsbt_testing_AnnotatedFingerprint(fp)) {
    var x2 = $as_Lsbt_testing_AnnotatedFingerprint(fp);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    this$2.write__I__V(1);
    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).isModule__Z();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t);
    var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).annotationName__T();
    var s$2 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$2.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  } else if ($is_Lsbt_testing_SubclassFingerprint(fp)) {
    var x3 = $as_Lsbt_testing_SubclassFingerprint(fp);
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    this$6.write__I__V(2);
    var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).isModule__Z();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t$2);
    var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).superclassName__T();
    var s$5 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$5.serialize__T__Ljava_io_DataOutputStream__V(t$3, out);
    var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).requireNoArgConstructor__Z();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t$4);
  } else {
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(fp);
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("Unknown Fingerprint type: " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$10)));
  }
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint = (function(in$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
  if ((x1 === 1)) {
    return new $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4(in$1);
  } else if ((x1 === 2)) {
    return new $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5(in$1);
  } else {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Unknown Fingerprint type: " + x1));
  }
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V($as_Lsbt_testing_Fingerprint(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$, "org.scalajs.testing.common.Serializer$FingerprintSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$IntSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
});
$c_Lorg_scalajs_testing_common_Serializer$IntSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(x);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(x$1);
});
var $d_Lorg_scalajs_testing_common_Serializer$IntSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$IntSerializer$, "org.scalajs.testing.common.Serializer$IntSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$IntSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$IntSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$IntSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$IntSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$IntSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$IntSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$IntSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.serialize__Lsbt_testing_OptionalThrowable__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).isDefined__Z();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t);
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).isDefined__Z()) {
    var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).get__jl_Throwable();
    var s$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
    s$1.serialize__jl_Throwable__Ljava_io_DataOutputStream__V(t$1, out);
  }
});
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_OptionalThrowable = (function(in$1) {
  if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z()) {
    var s$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
    return $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__(new $c_Lsbt_testing_OptionalThrowable(), s$1.deserialize__Ljava_io_DataInputStream__jl_Throwable(in$1));
  } else {
    return $ct_Lsbt_testing_OptionalThrowable__(new $c_Lsbt_testing_OptionalThrowable());
  }
});
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_OptionalThrowable(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_OptionalThrowable__Ljava_io_DataOutputStream__V($as_Lsbt_testing_OptionalThrowable(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$, "org.scalajs.testing.common.Serializer$OptionalThrowableSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$OptionalThrowableSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$() {
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Suite = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Test = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedSuite = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedTest = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_TestWildcard = 0;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Suite = 1;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_Test = 2;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedSuite = 3;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_NestedTest = 4;
  this.Lorg_scalajs_testing_common_Serializer$SelectorSerializer$__f_TestWildcard = 5;
}
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.serialize__Lsbt_testing_Selector__Ljava_io_DataOutputStream__V = (function(sel, out) {
  if ((sel instanceof $c_Lsbt_testing_SuiteSelector)) {
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    this$2.write__I__V(1);
  } else if ((sel instanceof $c_Lsbt_testing_TestSelector)) {
    var x3 = $as_Lsbt_testing_TestSelector(sel);
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    this$4.write__I__V(2);
    var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).Lsbt_testing_TestSelector__f__testName;
    var s$2 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$2.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  } else if ((sel instanceof $c_Lsbt_testing_NestedSuiteSelector)) {
    var x4 = $as_Lsbt_testing_NestedSuiteSelector(sel);
    var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    this$7.write__I__V(3);
    var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x4).Lsbt_testing_NestedSuiteSelector__f__suiteId;
    var s$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$4.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  } else if ((sel instanceof $c_Lsbt_testing_NestedTestSelector)) {
    var x5 = $as_Lsbt_testing_NestedTestSelector(sel);
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    this$10.write__I__V(4);
    var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).Lsbt_testing_NestedTestSelector__f__suiteId;
    var s$6 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$6.serialize__T__Ljava_io_DataOutputStream__V(t$2, out);
    var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x5).Lsbt_testing_NestedTestSelector__f__testName;
    var s$7 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$7.serialize__T__Ljava_io_DataOutputStream__V(t$3, out);
  } else if ((sel instanceof $c_Lsbt_testing_TestWildcardSelector)) {
    var x6 = $as_Lsbt_testing_TestWildcardSelector(sel);
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
    this$14.write__I__V(5);
    var t$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x6).Lsbt_testing_TestWildcardSelector__f__testWildcard;
    var s$9 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    s$9.serialize__T__Ljava_io_DataOutputStream__V(t$4, out);
  } else {
    var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sel);
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("Unknown Selector type: " + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$objectGetClass(this$16)));
  }
});
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Selector = (function(in$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
  if ((x1 === 1)) {
    return new $c_Lsbt_testing_SuiteSelector();
  } else if ((x1 === 2)) {
    var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_TestSelector(s$1.deserialize__Ljava_io_DataInputStream__T(in$1));
  } else if ((x1 === 3)) {
    var s$2 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_NestedSuiteSelector(s$2.deserialize__Ljava_io_DataInputStream__T(in$1));
  } else if ((x1 === 4)) {
    var s$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    var $x_1 = s$3.deserialize__Ljava_io_DataInputStream__T(in$1);
    var s$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_NestedTestSelector($x_1, s$4.deserialize__Ljava_io_DataInputStream__T(in$1));
  } else if ((x1 === 5)) {
    var s$5 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
    return new $c_Lsbt_testing_TestWildcardSelector(s$5.deserialize__Ljava_io_DataInputStream__T(in$1));
  } else {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Unknown Selector type: " + x1));
  }
});
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Selector(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_Selector__Ljava_io_DataOutputStream__V($as_Lsbt_testing_Selector(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$, "org.scalajs.testing.common.Serializer$SelectorSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$SelectorSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.serialize__jl_StackTraceElement__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_declaringClass;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_methodName;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_fileName);
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  s$2.serialize__s_Option__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).jl_StackTraceElement__f_lineNumber;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t$3);
});
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.deserialize__Ljava_io_DataInputStream__jl_StackTraceElement = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $x_2 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $x_1 = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$2.deserialize__Ljava_io_DataInputStream__s_Option(in$1));
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$5.s_$less$colon$less$__f_singleton;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StackTraceElement__T__T__T__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StackTraceElement(), $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$6.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$6.get__O())), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I());
});
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__jl_StackTraceElement(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__jl_StackTraceElement__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_StackTraceElement(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$, "org.scalajs.testing.common.Serializer$StackTraceElementSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$StatusSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Status = (function(in$1) {
  var values = $m_Lsbt_testing_Status$().values__ALsbt_testing_Status();
  var ord = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  if (((ord < 0) || (ord >= $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(values).u.length))) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Got bad status ordinal: " + ord));
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(values).get(ord);
});
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Status(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$1 = $as_Lsbt_testing_Status(x);
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$1).jl_Enum__f__ordinal;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(t);
});
var $d_Lorg_scalajs_testing_common_Serializer$StatusSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$, "org.scalajs.testing.common.Serializer$StatusSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$StatusSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$StatusSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$StatusSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$StatusSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$StringSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.serialize__T__Ljava_io_DataOutputStream__V = (function(x, out) {
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out);
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  $x_1.writeInt__I__V(this$1.length);
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
  var end = this$3.length;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = (((-1) + end) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var v1 = i;
      var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
      var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$7, v1);
      if (((c <= 127) && (c >= 1))) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V(c);
      } else if ((c < 2048)) {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((192 | (c >> 6)));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((128 | (63 & c)));
      } else {
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((224 | (c >> 12)));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((128 | (63 & (c >> 6))));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).write__I__V((128 | (63 & c)));
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
});
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.deserialize__Ljava_io_DataInputStream__T = (function(in$1) {
  var n = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  if ((n <= 0)) {
    var chars = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(0);
  } else {
    var array = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_C(n);
    var i = 0;
    while ((i < n)) {
      var $x_2 = i;
      var a = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
      if (((128 & a) === 0)) {
        var $x_1 = (65535 & a);
      } else if (((224 & a) === 192)) {
        var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().require__Z__V(((192 & b) === 128));
        var $x_1 = (65535 & (((31 & a) << 6) | (63 & b)));
      } else {
        if (((240 & a) !== 224)) {
          throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException(), ("bad byte: " + a));
        }
        var b$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
        var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readByte__B();
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().require__Z__V(((192 & b$2) === 128));
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().require__Z__V(((192 & c) === 128));
        var $x_1 = (65535 & ((((15 & a) << 12) | ((63 & b$2) << 6)) | (63 & c)));
      }
      array.set($x_2, $x_1);
      i = ((1 + i) | 0);
    }
    var chars = array;
  }
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$2.new__AC__I__I__T(chars, 0, chars.u.length);
});
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__T(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$StringSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__T__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$StringSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$StringSerializer$, "org.scalajs.testing.common.Serializer$StringSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$StringSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$StringSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$StringSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$StringSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$StringSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.serialize__Lsbt_testing_TaskDef__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__fullyQualifiedName;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__fingerprint;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  s$1.serialize__Lsbt_testing_Fingerprint__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__explicitlySpecified;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeBoolean__Z__V(t$2);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lsbt_testing_TaskDef__f__selectors));
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$4);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$3.serialize__sci_List__Ljava_io_DataOutputStream__V(t$3, out);
});
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lsbt_testing_TaskDef = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $x_4 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$();
  var $x_3 = s$1.deserialize__Ljava_io_DataInputStream__Lsbt_testing_Fingerprint(in$1);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readBoolean__Z();
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$SelectorSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s$3.deserialize__Ljava_io_DataInputStream__sci_List(in$1));
  if ((this$7.knownSize__I() >= 0)) {
    var len = this$7.knownSize__I();
    var destination = new ($d_Lsbt_testing_Selector.getArrayOf().constr)(len);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$7, destination, 0, 2147483647);
    var $x_1 = destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var it = this$7.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem);
    }
    var $x_1 = new ($d_Lsbt_testing_Selector.getArrayOf().constr)(jsElems);
  }
  return new $c_Lsbt_testing_TaskDef($x_4, $x_3, $x_2, $x_1);
});
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lsbt_testing_TaskDef(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lsbt_testing_TaskDef__Ljava_io_DataOutputStream__V($as_Lsbt_testing_TaskDef(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$, "org.scalajs.testing.common.Serializer$TaskDefSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.serialize__jl_Throwable__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).getMessage__T());
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  s.serialize__s_Option__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).toString__T();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s$1.serialize__T__Ljava_io_DataOutputStream__V(t$1, out);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).getStackTrace__Ajl_StackTraceElement()));
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$4);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out);
  var t$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Option$().apply__O__s_Option($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).getCause__jl_Throwable());
  var evidence$4$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4$1);
  s$3.serialize__s_Option__Ljava_io_DataOutputStream__V(t$3, out);
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__jl_Throwable = (function(in$1) {
  var evidence$4 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4);
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(s.deserialize__Ljava_io_DataInputStream__s_Option(in$1));
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
  var ev = this$3.s_$less$colon$less$__f_singleton;
  var msg = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T((this$4.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$4.get__O()));
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var toStr = s$1.deserialize__Ljava_io_DataInputStream__T(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StackTraceElementSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  var trace = s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1);
  var evidence$4$1 = $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
  var s$3 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$2(evidence$4$1);
  var cause = s$3.deserialize__Ljava_io_DataInputStream__s_Option(in$1);
  var res = new $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3(msg, cause, toStr);
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(trace);
  if ((this$12.knownSize__I() >= 0)) {
    var len = this$12.knownSize__I();
    var destination = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_jl_StackTraceElement.getArrayOf().constr)(len);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__copyToArray__O__I__I__I(this$12, destination, 0, 2147483647);
    var $x_1 = destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    capacity = 0;
    size = 0;
    jsElems = [];
    var it = this$12.iterator__sc_Iterator();
    while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).hasNext__Z()) {
      var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(it).next__O();
      var unboxedElem = ((elem === null) ? null : elem);
      jsElems.push(unboxedElem);
    }
    var $x_1 = new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_jl_StackTraceElement.getArrayOf().constr)(jsElems);
  }
  res.setStackTrace__Ajl_StackTraceElement__V($x_1);
  return res;
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__jl_Throwable(in$1);
});
$c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__jl_Throwable__Ljava_io_DataOutputStream__V($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x), out);
});
var $d_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$, "org.scalajs.testing.common.Serializer$ThrowableSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$() {
}
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$UnitSerializer$() {
}
$h_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype = $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype;
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return (void 0);
});
$c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Void(x);
});
var $d_Lorg_scalajs_testing_common_Serializer$UnitSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$, "org.scalajs.testing.common.Serializer$UnitSerializer$", ({
  Lorg_scalajs_testing_common_Serializer$UnitSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$;
function $m_Lorg_scalajs_testing_common_Serializer$UnitSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$)) {
    $n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$ = new $c_Lorg_scalajs_testing_common_Serializer$UnitSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_Serializer$UnitSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$() {
}
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$() {
}
$h_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype = $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype;
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.serialize__Lorg_scalajs_testing_common_TaskInfo__Ljava_io_DataOutputStream__V = (function(x, out) {
  var t = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_TaskInfo__f_serializedTask;
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  s.serialize__T__Ljava_io_DataOutputStream__V(t, out);
  var t$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_TaskInfo__f_taskDef;
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  s$1.serialize__Lsbt_testing_TaskDef__Ljava_io_DataOutputStream__V(t$1, out);
  var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).Lorg_scalajs_testing_common_TaskInfo__f_tags;
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  s$2.serialize__sci_List__Ljava_io_DataOutputStream__V(t$2, out);
});
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TaskInfo = (function(in$1) {
  var s = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var $x_2 = s.deserialize__Ljava_io_DataInputStream__T(in$1);
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$TaskDefSerializer$();
  var $x_1 = s$1.deserialize__Ljava_io_DataInputStream__Lsbt_testing_TaskDef(in$1);
  var evidence$3 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  var s$2 = new $c_Lorg_scalajs_testing_common_Serializer$$anon$1(evidence$3);
  return new $c_Lorg_scalajs_testing_common_TaskInfo($x_2, $x_1, s$2.deserialize__Ljava_io_DataInputStream__sci_List(in$1));
});
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TaskInfo(in$1);
});
$c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_TaskInfo__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_TaskInfo(x), out);
});
var $d_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$, "org.scalajs.testing.common.TaskInfo$TaskInfoSerializer$", ({
  Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$;
function $m_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$)) {
    $n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$ = new $c_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_TaskInfo$TaskInfoSerializer$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$() {
}
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$() {
}
$h_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype;
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.serialize__Lorg_scalajs_testing_common_TestBridgeMode__Ljava_io_DataOutputStream__V = (function(x, out) {
  var x$2 = $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
  if ((x$2 === x)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(0);
  } else if ((x instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)) {
    var x3 = $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(x);
    var tests = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x3).Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(out).writeInt__I__V(1);
    var s$2 = $m_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$();
    s$2.serialize__Lorg_scalajs_testing_common_IsolatedTestSet__Ljava_io_DataOutputStream__V(tests, out);
  } else {
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x);
  }
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TestBridgeMode = (function(in$1) {
  var x1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$1).readInt__I();
  switch (x1) {
    case 0: {
      return $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
      break;
    }
    case 1: {
      var s$1 = $m_Lorg_scalajs_testing_common_IsolatedTestSet$IsolatedTestSetSerializer$();
      return new $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(s$1.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_IsolatedTestSet(in$1));
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_IOException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException(), ("Unknown bridge mode: " + x1));
    }
  }
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.deserialize__Ljava_io_DataInputStream__O = (function(in$1) {
  return this.deserialize__Ljava_io_DataInputStream__Lorg_scalajs_testing_common_TestBridgeMode(in$1);
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$.prototype.serialize__O__Ljava_io_DataOutputStream__V = (function(x, out) {
  this.serialize__Lorg_scalajs_testing_common_TestBridgeMode__Ljava_io_DataOutputStream__V($as_Lorg_scalajs_testing_common_TestBridgeMode(x), out);
});
var $d_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$, "org.scalajs.testing.common.TestBridgeMode$TestBridgeModeSerializer$", ({
  Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$: 1,
  Lorg_scalajs_testing_common_Serializer: 1
}));
var $n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$;
function $m_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$() {
  if ((!$n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$)) {
    $n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$ = new $c_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$();
  }
  return $n_Lorg_scalajs_testing_common_TestBridgeMode$TestBridgeModeSerializer$;
}
function $is_Lsbt_testing_AnnotatedFingerprint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_AnnotatedFingerprint)));
}
function $as_Lsbt_testing_AnnotatedFingerprint(obj) {
  return (($is_Lsbt_testing_AnnotatedFingerprint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.AnnotatedFingerprint"));
}
function $isArrayOf_Lsbt_testing_AnnotatedFingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_AnnotatedFingerprint)));
}
function $asArrayOf_Lsbt_testing_AnnotatedFingerprint(obj, depth) {
  return (($isArrayOf_Lsbt_testing_AnnotatedFingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.AnnotatedFingerprint;", depth));
}
function $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__($thiz, exception) {
  $thiz.Lsbt_testing_OptionalThrowable__f_exception = exception;
  return $thiz;
}
function $ct_Lsbt_testing_OptionalThrowable__($thiz) {
  $ct_Lsbt_testing_OptionalThrowable__jl_Throwable__($thiz, null);
  return $thiz;
}
/** @constructor */
function $c_Lsbt_testing_OptionalThrowable() {
  this.Lsbt_testing_OptionalThrowable__f_exception = null;
}
$c_Lsbt_testing_OptionalThrowable.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_OptionalThrowable.prototype.constructor = $c_Lsbt_testing_OptionalThrowable;
/** @constructor */
function $h_Lsbt_testing_OptionalThrowable() {
}
$h_Lsbt_testing_OptionalThrowable.prototype = $c_Lsbt_testing_OptionalThrowable.prototype;
$c_Lsbt_testing_OptionalThrowable.prototype.isDefined__Z = (function() {
  return (this.Lsbt_testing_OptionalThrowable__f_exception !== null);
});
$c_Lsbt_testing_OptionalThrowable.prototype.get__jl_Throwable = (function() {
  if ((this.Lsbt_testing_OptionalThrowable__f_exception === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalStateException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalStateException(), "This OptionalThrowable is not defined");
  } else {
    return this.Lsbt_testing_OptionalThrowable__f_exception;
  }
});
$c_Lsbt_testing_OptionalThrowable.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_OptionalThrowable)) {
    var x2 = $as_Lsbt_testing_OptionalThrowable(that);
    return (this.Lsbt_testing_OptionalThrowable__f_exception === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_OptionalThrowable__f_exception);
  } else {
    return false;
  }
});
$c_Lsbt_testing_OptionalThrowable.prototype.hashCode__I = (function() {
  return ((this.Lsbt_testing_OptionalThrowable__f_exception === null) ? 0 : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_OptionalThrowable__f_exception).hashCode__I());
});
$c_Lsbt_testing_OptionalThrowable.prototype.toString__T = (function() {
  return ((this.Lsbt_testing_OptionalThrowable__f_exception === null) ? "OptionalThrowable()" : (("OptionalThrowable(" + this.Lsbt_testing_OptionalThrowable__f_exception) + ")"));
});
function $as_Lsbt_testing_OptionalThrowable(obj) {
  return (((obj instanceof $c_Lsbt_testing_OptionalThrowable) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.OptionalThrowable"));
}
function $isArrayOf_Lsbt_testing_OptionalThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_OptionalThrowable)));
}
function $asArrayOf_Lsbt_testing_OptionalThrowable(obj, depth) {
  return (($isArrayOf_Lsbt_testing_OptionalThrowable(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.OptionalThrowable;", depth));
}
var $d_Lsbt_testing_OptionalThrowable = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_OptionalThrowable, "sbt.testing.OptionalThrowable", ({
  Lsbt_testing_OptionalThrowable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lsbt_testing_Status$() {
  this.Lsbt_testing_Status$__f_Success = null;
  this.Lsbt_testing_Status$__f_Error = null;
  this.Lsbt_testing_Status$__f_Failure = null;
  this.Lsbt_testing_Status$__f_Skipped = null;
  this.Lsbt_testing_Status$__f_Ignored = null;
  this.Lsbt_testing_Status$__f_Canceled = null;
  this.Lsbt_testing_Status$__f_Pending = null;
  this.Lsbt_testing_Status$__f__values = null;
  $n_Lsbt_testing_Status$ = this;
  this.Lsbt_testing_Status$__f_Success = new $c_Lsbt_testing_Status("Success", 0);
  this.Lsbt_testing_Status$__f_Error = new $c_Lsbt_testing_Status("Error", 1);
  this.Lsbt_testing_Status$__f_Failure = new $c_Lsbt_testing_Status("Failure", 2);
  this.Lsbt_testing_Status$__f_Skipped = new $c_Lsbt_testing_Status("Skipped", 3);
  this.Lsbt_testing_Status$__f_Ignored = new $c_Lsbt_testing_Status("Ignored", 4);
  this.Lsbt_testing_Status$__f_Canceled = new $c_Lsbt_testing_Status("Canceled", 5);
  this.Lsbt_testing_Status$__f_Pending = new $c_Lsbt_testing_Status("Pending", 6);
  this.Lsbt_testing_Status$__f__values = new ($d_Lsbt_testing_Status.getArrayOf().constr)([this.Lsbt_testing_Status$__f_Success, this.Lsbt_testing_Status$__f_Error, this.Lsbt_testing_Status$__f_Failure, this.Lsbt_testing_Status$__f_Skipped, this.Lsbt_testing_Status$__f_Ignored, this.Lsbt_testing_Status$__f_Canceled, this.Lsbt_testing_Status$__f_Pending]);
}
$c_Lsbt_testing_Status$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_Status$.prototype.constructor = $c_Lsbt_testing_Status$;
/** @constructor */
function $h_Lsbt_testing_Status$() {
}
$h_Lsbt_testing_Status$.prototype = $c_Lsbt_testing_Status$.prototype;
$c_Lsbt_testing_Status$.prototype.values__ALsbt_testing_Status = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_Status$__f__values);
  return this$1.clone__O();
});
var $d_Lsbt_testing_Status$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_Status$, "sbt.testing.Status$", ({
  Lsbt_testing_Status$: 1,
  Ljava_io_Serializable: 1
}));
var $n_Lsbt_testing_Status$;
function $m_Lsbt_testing_Status$() {
  if ((!$n_Lsbt_testing_Status$)) {
    $n_Lsbt_testing_Status$ = new $c_Lsbt_testing_Status$();
  }
  return $n_Lsbt_testing_Status$;
}
function $is_Lsbt_testing_SubclassFingerprint(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lsbt_testing_SubclassFingerprint)));
}
function $as_Lsbt_testing_SubclassFingerprint(obj) {
  return (($is_Lsbt_testing_SubclassFingerprint(obj) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.SubclassFingerprint"));
}
function $isArrayOf_Lsbt_testing_SubclassFingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_SubclassFingerprint)));
}
function $asArrayOf_Lsbt_testing_SubclassFingerprint(obj, depth) {
  return (($isArrayOf_Lsbt_testing_SubclassFingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.SubclassFingerprint;", depth));
}
/** @constructor */
function $c_Lsbt_testing_TaskDef(_fullyQualifiedName, _fingerprint, _explicitlySpecified, _selectors) {
  this.Lsbt_testing_TaskDef__f__fullyQualifiedName = null;
  this.Lsbt_testing_TaskDef__f__fingerprint = null;
  this.Lsbt_testing_TaskDef__f__explicitlySpecified = false;
  this.Lsbt_testing_TaskDef__f__selectors = null;
  this.Lsbt_testing_TaskDef__f__fullyQualifiedName = _fullyQualifiedName;
  this.Lsbt_testing_TaskDef__f__fingerprint = _fingerprint;
  this.Lsbt_testing_TaskDef__f__explicitlySpecified = _explicitlySpecified;
  this.Lsbt_testing_TaskDef__f__selectors = _selectors;
  if ((_fullyQualifiedName === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "fullyQualifiedName was null");
  }
  if ((_fingerprint === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "fingerprint was null");
  }
  if ((_selectors === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "selectors was null");
  }
}
$c_Lsbt_testing_TaskDef.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lsbt_testing_TaskDef.prototype.constructor = $c_Lsbt_testing_TaskDef;
/** @constructor */
function $h_Lsbt_testing_TaskDef() {
}
$h_Lsbt_testing_TaskDef.prototype = $c_Lsbt_testing_TaskDef.prototype;
$c_Lsbt_testing_TaskDef.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_TaskDef)) {
    var x2 = $as_Lsbt_testing_TaskDef(that);
    if ((this.Lsbt_testing_TaskDef__f__fullyQualifiedName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__fullyQualifiedName)) {
      var x = this.Lsbt_testing_TaskDef__f__fingerprint;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__fingerprint;
      if ((x === null)) {
        var $x_1 = (x$2 === null);
      } else {
        var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
        var $x_1 = (this$1 === x$2);
      }
    } else {
      var $x_1 = false;
    }
    if (($x_1 && (this.Lsbt_testing_TaskDef__f__explicitlySpecified === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__explicitlySpecified))) {
      var a = this.Lsbt_testing_TaskDef__f__selectors;
      var b = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TaskDef__f__selectors;
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_ju_Arrays$().equals__AO__AO__Z(a, b);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lsbt_testing_TaskDef.prototype.hashCode__I = (function() {
  var retVal = 17;
  retVal = ((Math.imul(31, retVal) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TaskDef__f__fullyQualifiedName))) | 0);
  var $x_1 = retVal;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TaskDef__f__fingerprint);
  retVal = ((Math.imul(31, $x_1) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemIdentityHashCode(this$1)) | 0);
  retVal = ((Math.imul(31, retVal) + (this.Lsbt_testing_TaskDef__f__explicitlySpecified ? 1 : 0)) | 0);
  var $x_2 = retVal;
  var a = this.Lsbt_testing_TaskDef__f__selectors;
  retVal = ((Math.imul(31, $x_2) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_ju_Arrays$().hashCode__AO__I(a)) | 0);
  return retVal;
});
$c_Lsbt_testing_TaskDef.prototype.toString__T = (function() {
  var $x_3 = this.Lsbt_testing_TaskDef__f__fullyQualifiedName;
  var $x_2 = this.Lsbt_testing_TaskDef__f__fingerprint;
  var $x_1 = this.Lsbt_testing_TaskDef__f__explicitlySpecified;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(this.Lsbt_testing_TaskDef__f__selectors));
  return (((((((("TaskDef(" + $x_3) + ", ") + $x_2) + ", ") + $x_1) + ", ") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "[", ", ", "]")) + ")");
});
function $as_Lsbt_testing_TaskDef(obj) {
  return (((obj instanceof $c_Lsbt_testing_TaskDef) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.TaskDef"));
}
function $isArrayOf_Lsbt_testing_TaskDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_TaskDef)));
}
function $asArrayOf_Lsbt_testing_TaskDef(obj, depth) {
  return (($isArrayOf_Lsbt_testing_TaskDef(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.TaskDef;", depth));
}
var $d_Lsbt_testing_TaskDef = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_TaskDef, "sbt.testing.TaskDef", ({
  Lsbt_testing_TaskDef: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_Console$() {
  this.s_Console$__f_outVar = null;
  $n_s_Console$ = this;
  this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_System$Streams$().jl_System$Streams$__f_out);
}
$c_s_Console$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_Console$.prototype.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $c_s_Console$.prototype;
$c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Ljava_io_PrintStream($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
});
var $d_s_Console$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_s_Console$, "scala.Console$", ({
  s_Console$: 1,
  s_io_AnsiColor: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_sc_BuildFromLowPriority2$$anon$11(outer) {
}
$c_sc_BuildFromLowPriority2$$anon$11.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_BuildFromLowPriority2$$anon$11.prototype.constructor = $c_sc_BuildFromLowPriority2$$anon$11;
/** @constructor */
function $h_sc_BuildFromLowPriority2$$anon$11() {
}
$h_sc_BuildFromLowPriority2$$anon$11.prototype = $c_sc_BuildFromLowPriority2$$anon$11.prototype;
$c_sc_BuildFromLowPriority2$$anon$11.prototype.newBuilder__O__scm_Builder = (function(from) {
  var from$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sc_Iterable(from);
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(from$1).iterableFactory__sc_IterableFactory()).newBuilder__scm_Builder();
});
var $d_sc_BuildFromLowPriority2$$anon$11 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_sc_BuildFromLowPriority2$$anon$11, "scala.collection.BuildFromLowPriority2$$anon$11", ({
  sc_BuildFromLowPriority2$$anon$11: 1,
  sc_BuildFrom: 1
}));
/** @constructor */
function $c_Ljava_io_InputStream() {
}
$c_Ljava_io_InputStream.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Ljava_io_InputStream.prototype.constructor = $c_Ljava_io_InputStream;
/** @constructor */
function $h_Ljava_io_InputStream() {
}
$h_Ljava_io_InputStream.prototype = $c_Ljava_io_InputStream.prototype;
/** @constructor */
function $c_ju_NullRejectingHashMap$Node(key, hash, value, previous, next) {
  this.ju_HashMap$Node__f_key = null;
  this.ju_HashMap$Node__f_hash = 0;
  this.ju_HashMap$Node__f_value = null;
  this.ju_HashMap$Node__f_previous = null;
  this.ju_HashMap$Node__f_next = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_ju_HashMap$Node__O__I__O__ju_HashMap$Node__ju_HashMap$Node__(this, key, hash, value, previous, next);
}
$c_ju_NullRejectingHashMap$Node.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_HashMap$Node();
$c_ju_NullRejectingHashMap$Node.prototype.constructor = $c_ju_NullRejectingHashMap$Node;
/** @constructor */
function $h_ju_NullRejectingHashMap$Node() {
}
$h_ju_NullRejectingHashMap$Node.prototype = $c_ju_NullRejectingHashMap$Node.prototype;
var $d_ju_NullRejectingHashMap$Node = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_ju_NullRejectingHashMap$Node, "java.util.NullRejectingHashMap$Node", ({
  ju_NullRejectingHashMap$Node: 1,
  ju_HashMap$Node: 1,
  ju_Map$Entry: 1
}));
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator(outer) {
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = null;
  $ct_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__ju_concurrent_ConcurrentHashMap$InnerHashMap__(this, outer);
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype = new $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator() {
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator.prototype.extract__ju_HashMap$Node__O = (function(node) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(node).ju_HashMap$Node__f_key;
});
var $d_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator, "java.util.concurrent.ConcurrentHashMap$InnerHashMap$KeyIterator", ({
  ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator: 1,
  ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator: 1,
  ju_Iterator: 1
}));
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator(outer) {
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_innerIter = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_lastNode = null;
  this.ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__f_$outer = null;
  $ct_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator__ju_concurrent_ConcurrentHashMap$InnerHashMap__(this, outer);
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype = new $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator() {
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator.prototype.extract__ju_HashMap$Node__O = (function(node) {
  return node;
});
var $d_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator, "java.util.concurrent.ConcurrentHashMap$InnerHashMap$NodeIterator", ({
  ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator: 1,
  ju_concurrent_ConcurrentHashMap$InnerHashMap$AbstractCHMIterator: 1,
  ju_Iterator: 1
}));
function $sct_Lmunit_Framework__stinit__() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_reflect_Reflect$().registerInstantiatableClass__T__jl_Class__sjs_js_Array__V("munit.Framework", $d_Lmunit_Framework.getClassOf(), [[[], (() => new $c_Lmunit_Framework())]]);
}
/** @constructor */
function $c_Lmunit_Framework() {
  this.Lmunit_Framework__f_munitFingerprint = null;
  this.Lmunit_Framework__f_customRunners = null;
  this.Lmunit_Framework__f_munitFingerprint = new $c_Lmunit_internal_junitinterface_CustomFingerprint("munit.Suite", false);
  var elems = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lmunit_internal_junitinterface_CustomFingerprint.getArrayOf().constr)([this.Lmunit_Framework__f_munitFingerprint, new $c_Lmunit_internal_junitinterface_CustomFingerprint("munit.Suite", true)]));
  this.Lmunit_Framework__f_customRunners = new $c_Lmunit_internal_junitinterface_CustomRunners($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems));
}
$c_Lmunit_Framework.prototype = new $h_Lmunit_internal_junitinterface_JUnitFramework();
$c_Lmunit_Framework.prototype.constructor = $c_Lmunit_Framework;
/** @constructor */
function $h_Lmunit_Framework() {
}
$h_Lmunit_Framework.prototype = $c_Lmunit_Framework.prototype;
$c_Lmunit_Framework.prototype.name__T = (function() {
  return "munit";
});
var $d_Lmunit_Framework = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_Framework, "munit.Framework", ({
  Lmunit_Framework: 1,
  Lmunit_internal_junitinterface_JUnitFramework: 1,
  Lsbt_testing_Framework: 1
}));
/** @constructor */
function $c_Lmunit_internal_junitinterface_CustomFingerprint(suite, _isModule) {
  this.Lmunit_internal_junitinterface_CustomFingerprint__f_suite = null;
  this.Lmunit_internal_junitinterface_CustomFingerprint__f__isModule = false;
  this.Lmunit_internal_junitinterface_CustomFingerprint__f_suite = suite;
  this.Lmunit_internal_junitinterface_CustomFingerprint__f__isModule = _isModule;
}
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.constructor = $c_Lmunit_internal_junitinterface_CustomFingerprint;
/** @constructor */
function $h_Lmunit_internal_junitinterface_CustomFingerprint() {
}
$h_Lmunit_internal_junitinterface_CustomFingerprint.prototype = $c_Lmunit_internal_junitinterface_CustomFingerprint.prototype;
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.isModule__Z = (function() {
  return this.Lmunit_internal_junitinterface_CustomFingerprint__f__isModule;
});
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.superclassName__T = (function() {
  return this.Lmunit_internal_junitinterface_CustomFingerprint__f_suite;
});
$c_Lmunit_internal_junitinterface_CustomFingerprint.prototype.requireNoArgConstructor__Z = (function() {
  return true;
});
function $as_Lmunit_internal_junitinterface_CustomFingerprint(obj) {
  return (((obj instanceof $c_Lmunit_internal_junitinterface_CustomFingerprint) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "munit.internal.junitinterface.CustomFingerprint"));
}
function $isArrayOf_Lmunit_internal_junitinterface_CustomFingerprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lmunit_internal_junitinterface_CustomFingerprint)));
}
function $asArrayOf_Lmunit_internal_junitinterface_CustomFingerprint(obj, depth) {
  return (($isArrayOf_Lmunit_internal_junitinterface_CustomFingerprint(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lmunit.internal.junitinterface.CustomFingerprint;", depth));
}
var $d_Lmunit_internal_junitinterface_CustomFingerprint = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lmunit_internal_junitinterface_CustomFingerprint, "munit.internal.junitinterface.CustomFingerprint", ({
  Lmunit_internal_junitinterface_CustomFingerprint: 1,
  Lsbt_testing_Fingerprint: 1,
  Lsbt_testing_SubclassFingerprint: 1
}));
var $d_Lorg_junit_Test$None = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass(0, "org.junit.Test$None", ({
  Lorg_junit_Test$None: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$(outer) {
}
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype.constructor = $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$() {
}
$h_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype = $c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype;
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype.annotationName__T = (function() {
  return "org.junit.Test";
});
$c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$.prototype.isModule__Z = (function() {
  return false;
});
var $d_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$, "org.scalajs.junit.JUnitFramework$JUnitFingerprint$", ({
  Lorg_scalajs_junit_JUnitFramework$JUnitFingerprint$: 1,
  Lsbt_testing_AnnotatedFingerprint: 1,
  Lsbt_testing_Fingerprint: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest(outer, testName) {
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_testName = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer = null;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_testName = testName;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer = outer;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox(outer, testName);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.onclick = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$rootBox).Lorg_scalajs_testing_bridge_HTMLRunner$UI$RootBox__f_updateCheckbox;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok = false;
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger = new $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest$$anon$1(this);
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.testName__T = (function() {
  return this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_testName;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.done__s_util_Try__V = (function(ok) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).failed__s_util_Try()).foreach__F1__V(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction1_$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28(((t$2$2) => {
    var t$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(t$2$2);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger).error__T__V("Test framework crashed during test:");
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_logger).trace__jl_Throwable__V(t$2);
  })));
  this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ok).getOrElse__F0__O(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_AbstractFunction0_$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855((() => false))));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer).org$scalajs$testing$bridge$HTMLRunner$UI$$updateCounts__V();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).done__Z__V(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok);
  if ((!this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok)) {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).expand__V();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation).setNextSibling__Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__V(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_$outer).Lorg_scalajs_testing_bridge_HTMLRunner$UI__f_org$scalajs$testing$bridge$HTMLRunner$UI$$nextFailureLocation = this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box;
  }
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.selected__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.checked);
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.selected_$eq__Z__V = (function(v) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f_org$scalajs$testing$bridge$HTMLRunner$UI$RunningTest$$box).Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestBox__f_checkbox.checked = v;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest.prototype.failed__Z = (function() {
  return (!this.Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest__f__ok);
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest, "org.scalajs.testing.bridge.HTMLRunner$UI$RunningTest", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$RunningTest: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$Test: 1,
  Lorg_scalajs_testing_bridge_HTMLRunner$UI$TestTask: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1(opc$1, ms$1) {
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode = 0;
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer = null;
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode = opc$1;
  this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_msgSerializer = ms$1;
}
$c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1() {
}
$h_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype = $c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1.prototype.opCode__B = (function() {
  return this.Lorg_scalajs_testing_common_MsgEndpoint$$anon$1__f_opCode;
});
var $d_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_MsgEndpoint$$anon$1, "org.scalajs.testing.common.MsgEndpoint$$anon$1", ({
  Lorg_scalajs_testing_common_MsgEndpoint$$anon$1: 1,
  Lorg_scalajs_testing_common_MsgEndpoint: 1,
  Lorg_scalajs_testing_common_Endpoint: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore$$anon$1(outer, ep$2, ex$1$1) {
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_exec = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint = ep$2;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_exec = ex$1$1;
}
$c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore$$anon$1;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore$$anon$1() {
}
$h_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype = $c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype;
$c_Lorg_scalajs_testing_common_RPCCore$$anon$1.prototype.endpoint__Lorg_scalajs_testing_common_Endpoint = (function() {
  return this.Lorg_scalajs_testing_common_RPCCore$$anon$1__f_endpoint;
});
var $d_Lorg_scalajs_testing_common_RPCCore$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RPCCore$$anon$1, "org.scalajs.testing.common.RPCCore$$anon$1", ({
  Lorg_scalajs_testing_common_RPCCore$$anon$1: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundMsgEndpoint: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundEndpoint: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCCore$$anon$2(outer, ep$3, ex$3$1) {
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_exec = null;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint = ep$3;
  this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_exec = ex$3$1;
}
$c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCCore$$anon$2;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCCore$$anon$2() {
}
$h_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype = $c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype;
$c_Lorg_scalajs_testing_common_RPCCore$$anon$2.prototype.endpoint__Lorg_scalajs_testing_common_Endpoint = (function() {
  return this.Lorg_scalajs_testing_common_RPCCore$$anon$2__f_endpoint;
});
var $d_Lorg_scalajs_testing_common_RPCCore$$anon$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RPCCore$$anon$2, "org.scalajs.testing.common.RPCCore$$anon$2", ({
  Lorg_scalajs_testing_common_RPCCore$$anon$2: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundRPCEndpoint: 1,
  Lorg_scalajs_testing_common_RPCCore$BoundEndpoint: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2(opc$2, rqs$1, rps$1) {
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode = 0;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_reqSerializer = null;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_respSerializer = null;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode = opc$2;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_reqSerializer = rqs$1;
  this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_respSerializer = rps$1;
}
$c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype.constructor = $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2;
/** @constructor */
function $h_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2() {
}
$h_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype = $c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype;
$c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2.prototype.opCode__B = (function() {
  return this.Lorg_scalajs_testing_common_RPCEndpoint$$anon$2__f_opCode;
});
var $d_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RPCEndpoint$$anon$2, "org.scalajs.testing.common.RPCEndpoint$$anon$2", ({
  Lorg_scalajs_testing_common_RPCEndpoint$$anon$2: 1,
  Lorg_scalajs_testing_common_RPCEndpoint: 1,
  Lorg_scalajs_testing_common_Endpoint: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4(in$3) {
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_isModule = false;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_annotationName = null;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_isModule = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$3).readBoolean__Z();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_annotationName = s$1.deserialize__Ljava_io_DataInputStream__T(in$3);
}
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4() {
}
$h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype;
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype.isModule__Z = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_isModule;
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4.prototype.annotationName__T = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4__f_annotationName;
});
var $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4, "org.scalajs.testing.common.Serializer$FingerprintSerializer$$anon$4", ({
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$4: 1,
  Lsbt_testing_AnnotatedFingerprint: 1,
  Lsbt_testing_Fingerprint: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5(in$3) {
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_isModule = false;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_superclassName = null;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_requireNoArgConstructor = false;
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_isModule = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$3).readBoolean__Z();
  var s$1 = $m_Lorg_scalajs_testing_common_Serializer$StringSerializer$();
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_superclassName = s$1.deserialize__Ljava_io_DataInputStream__T(in$3);
  this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_requireNoArgConstructor = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(in$3).readBoolean__Z();
}
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.constructor = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5;
/** @constructor */
function $h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5() {
}
$h_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype = $c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype;
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.isModule__Z = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_isModule;
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.superclassName__T = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_superclassName;
});
$c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5.prototype.requireNoArgConstructor__Z = (function() {
  return this.Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5__f_requireNoArgConstructor;
});
var $d_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5, "org.scalajs.testing.common.Serializer$FingerprintSerializer$$anon$5", ({
  Lorg_scalajs_testing_common_Serializer$FingerprintSerializer$$anon$5: 1,
  Lsbt_testing_SubclassFingerprint: 1,
  Lsbt_testing_Fingerprint: 1
}));
class $c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3 extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Throwable {
  constructor(msg$1, cause$1, toStr$1) {
    super();
    this.Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3__f_toStr$1 = null;
    this.Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3__f_toStr$1 = toStr$1;
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(cause$1);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_$less$colon$less$();
    var ev = this$1.s_$less$colon$less$__f_singleton;
    var cause = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable((this$2.isEmpty__Z() ? ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(ev), null) : this$2.get__O()));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, msg$1, cause, true, true);
  }
  toString__T() {
    return this.Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3__f_toStr$1;
  }
}
var $d_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3, "org.scalajs.testing.common.Serializer$ThrowableSerializer$$anon$3", ({
  Lorg_scalajs_testing_common_Serializer$ThrowableSerializer$$anon$3: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lsbt_testing_NestedSuiteSelector(_suiteId) {
  this.Lsbt_testing_NestedSuiteSelector__f__suiteId = null;
  this.Lsbt_testing_NestedSuiteSelector__f__suiteId = _suiteId;
  if ((_suiteId === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "suiteId was null");
  }
}
$c_Lsbt_testing_NestedSuiteSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_NestedSuiteSelector.prototype.constructor = $c_Lsbt_testing_NestedSuiteSelector;
/** @constructor */
function $h_Lsbt_testing_NestedSuiteSelector() {
}
$h_Lsbt_testing_NestedSuiteSelector.prototype = $c_Lsbt_testing_NestedSuiteSelector.prototype;
$c_Lsbt_testing_NestedSuiteSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_NestedSuiteSelector)) {
    var x2 = $as_Lsbt_testing_NestedSuiteSelector(that);
    return (this.Lsbt_testing_NestedSuiteSelector__f__suiteId === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_NestedSuiteSelector__f__suiteId);
  } else {
    return false;
  }
});
$c_Lsbt_testing_NestedSuiteSelector.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_NestedSuiteSelector__f__suiteId));
});
$c_Lsbt_testing_NestedSuiteSelector.prototype.toString__T = (function() {
  return (("NestedSuiteSelector(" + this.Lsbt_testing_NestedSuiteSelector__f__suiteId) + ")");
});
function $as_Lsbt_testing_NestedSuiteSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_NestedSuiteSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.NestedSuiteSelector"));
}
function $isArrayOf_Lsbt_testing_NestedSuiteSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_NestedSuiteSelector)));
}
function $asArrayOf_Lsbt_testing_NestedSuiteSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_NestedSuiteSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.NestedSuiteSelector;", depth));
}
var $d_Lsbt_testing_NestedSuiteSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_NestedSuiteSelector, "sbt.testing.NestedSuiteSelector", ({
  Lsbt_testing_NestedSuiteSelector: 1,
  Lsbt_testing_Selector: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lsbt_testing_NestedTestSelector(_suiteId, _testName) {
  this.Lsbt_testing_NestedTestSelector__f__suiteId = null;
  this.Lsbt_testing_NestedTestSelector__f__testName = null;
  this.Lsbt_testing_NestedTestSelector__f__suiteId = _suiteId;
  this.Lsbt_testing_NestedTestSelector__f__testName = _testName;
  if ((_suiteId === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "suiteId was null");
  }
  if ((_testName === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "testName was null");
  }
}
$c_Lsbt_testing_NestedTestSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_NestedTestSelector.prototype.constructor = $c_Lsbt_testing_NestedTestSelector;
/** @constructor */
function $h_Lsbt_testing_NestedTestSelector() {
}
$h_Lsbt_testing_NestedTestSelector.prototype = $c_Lsbt_testing_NestedTestSelector.prototype;
$c_Lsbt_testing_NestedTestSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_NestedTestSelector)) {
    var x2 = $as_Lsbt_testing_NestedTestSelector(that);
    return ((this.Lsbt_testing_NestedTestSelector__f__suiteId === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_NestedTestSelector__f__suiteId) && (this.Lsbt_testing_NestedTestSelector__f__testName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_NestedTestSelector__f__testName));
  } else {
    return false;
  }
});
$c_Lsbt_testing_NestedTestSelector.prototype.hashCode__I = (function() {
  var retVal = 17;
  retVal = ((Math.imul(31, retVal) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_NestedTestSelector__f__suiteId))) | 0);
  retVal = ((Math.imul(31, retVal) + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_NestedTestSelector__f__testName))) | 0);
  return retVal;
});
$c_Lsbt_testing_NestedTestSelector.prototype.toString__T = (function() {
  return (((("NestedTestSelector(" + this.Lsbt_testing_NestedTestSelector__f__suiteId) + ", ") + this.Lsbt_testing_NestedTestSelector__f__testName) + ")");
});
function $as_Lsbt_testing_NestedTestSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_NestedTestSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.NestedTestSelector"));
}
function $isArrayOf_Lsbt_testing_NestedTestSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_NestedTestSelector)));
}
function $asArrayOf_Lsbt_testing_NestedTestSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_NestedTestSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.NestedTestSelector;", depth));
}
var $d_Lsbt_testing_NestedTestSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_NestedTestSelector, "sbt.testing.NestedTestSelector", ({
  Lsbt_testing_NestedTestSelector: 1,
  Lsbt_testing_Selector: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lsbt_testing_SuiteSelector() {
}
$c_Lsbt_testing_SuiteSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_SuiteSelector.prototype.constructor = $c_Lsbt_testing_SuiteSelector;
/** @constructor */
function $h_Lsbt_testing_SuiteSelector() {
}
$h_Lsbt_testing_SuiteSelector.prototype = $c_Lsbt_testing_SuiteSelector.prototype;
$c_Lsbt_testing_SuiteSelector.prototype.equals__O__Z = (function(o) {
  return (o instanceof $c_Lsbt_testing_SuiteSelector);
});
$c_Lsbt_testing_SuiteSelector.prototype.hashCode__I = (function() {
  return 29;
});
$c_Lsbt_testing_SuiteSelector.prototype.toString__T = (function() {
  return "SuiteSelector";
});
function $as_Lsbt_testing_SuiteSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_SuiteSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.SuiteSelector"));
}
function $isArrayOf_Lsbt_testing_SuiteSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_SuiteSelector)));
}
function $asArrayOf_Lsbt_testing_SuiteSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_SuiteSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.SuiteSelector;", depth));
}
var $d_Lsbt_testing_SuiteSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_SuiteSelector, "sbt.testing.SuiteSelector", ({
  Lsbt_testing_SuiteSelector: 1,
  Lsbt_testing_Selector: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lsbt_testing_TestSelector(_testName) {
  this.Lsbt_testing_TestSelector__f__testName = null;
  this.Lsbt_testing_TestSelector__f__testName = _testName;
  if ((_testName === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "testName was null");
  }
}
$c_Lsbt_testing_TestSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_TestSelector.prototype.constructor = $c_Lsbt_testing_TestSelector;
/** @constructor */
function $h_Lsbt_testing_TestSelector() {
}
$h_Lsbt_testing_TestSelector.prototype = $c_Lsbt_testing_TestSelector.prototype;
$c_Lsbt_testing_TestSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_TestSelector)) {
    var x2 = $as_Lsbt_testing_TestSelector(that);
    return (this.Lsbt_testing_TestSelector__f__testName === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TestSelector__f__testName);
  } else {
    return false;
  }
});
$c_Lsbt_testing_TestSelector.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TestSelector__f__testName));
});
$c_Lsbt_testing_TestSelector.prototype.toString__T = (function() {
  return (("TestSelector(" + this.Lsbt_testing_TestSelector__f__testName) + ")");
});
function $as_Lsbt_testing_TestSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_TestSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.TestSelector"));
}
function $isArrayOf_Lsbt_testing_TestSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_TestSelector)));
}
function $asArrayOf_Lsbt_testing_TestSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_TestSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.TestSelector;", depth));
}
var $d_Lsbt_testing_TestSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_TestSelector, "sbt.testing.TestSelector", ({
  Lsbt_testing_TestSelector: 1,
  Lsbt_testing_Selector: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lsbt_testing_TestWildcardSelector(_testWildcard) {
  this.Lsbt_testing_TestWildcardSelector__f__testWildcard = null;
  this.Lsbt_testing_TestWildcardSelector__f__testWildcard = _testWildcard;
  if ((_testWildcard === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException(), "testWildcard was null");
  }
}
$c_Lsbt_testing_TestWildcardSelector.prototype = new $h_Lsbt_testing_Selector();
$c_Lsbt_testing_TestWildcardSelector.prototype.constructor = $c_Lsbt_testing_TestWildcardSelector;
/** @constructor */
function $h_Lsbt_testing_TestWildcardSelector() {
}
$h_Lsbt_testing_TestWildcardSelector.prototype = $c_Lsbt_testing_TestWildcardSelector.prototype;
$c_Lsbt_testing_TestWildcardSelector.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Lsbt_testing_TestWildcardSelector)) {
    var x2 = $as_Lsbt_testing_TestWildcardSelector(that);
    return (this.Lsbt_testing_TestWildcardSelector__f__testWildcard === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).Lsbt_testing_TestWildcardSelector__f__testWildcard);
  } else {
    return false;
  }
});
$c_Lsbt_testing_TestWildcardSelector.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Lsbt_testing_TestWildcardSelector__f__testWildcard));
});
$c_Lsbt_testing_TestWildcardSelector.prototype.toString__T = (function() {
  return (("TestWildcardSelector(" + this.Lsbt_testing_TestWildcardSelector__f__testWildcard) + ")");
});
function $as_Lsbt_testing_TestWildcardSelector(obj) {
  return (((obj instanceof $c_Lsbt_testing_TestWildcardSelector) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.TestWildcardSelector"));
}
function $isArrayOf_Lsbt_testing_TestWildcardSelector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_TestWildcardSelector)));
}
function $asArrayOf_Lsbt_testing_TestWildcardSelector(obj, depth) {
  return (($isArrayOf_Lsbt_testing_TestWildcardSelector(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.TestWildcardSelector;", depth));
}
var $d_Lsbt_testing_TestWildcardSelector = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_TestWildcardSelector, "sbt.testing.TestWildcardSelector", ({
  Lsbt_testing_TestWildcardSelector: 1,
  Lsbt_testing_Selector: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_BuildFrom$() {
}
$c_sc_BuildFrom$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_sc_BuildFrom$.prototype.constructor = $c_sc_BuildFrom$;
/** @constructor */
function $h_sc_BuildFrom$() {
}
$h_sc_BuildFrom$.prototype = $c_sc_BuildFrom$.prototype;
var $d_sc_BuildFrom$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_sc_BuildFrom$, "scala.collection.BuildFrom$", ({
  sc_BuildFrom$: 1,
  sc_BuildFromLowPriority1: 1,
  sc_BuildFromLowPriority2: 1
}));
var $n_sc_BuildFrom$;
function $m_sc_BuildFrom$() {
  if ((!$n_sc_BuildFrom$)) {
    $n_sc_BuildFrom$ = new $c_sc_BuildFrom$();
  }
  return $n_sc_BuildFrom$;
}
function $ct_Ljava_io_ByteArrayInputStream__AB__I__I__($thiz, buf, offset, length) {
  $thiz.Ljava_io_ByteArrayInputStream__f_buf = buf;
  $thiz.Ljava_io_ByteArrayInputStream__f_count = ((offset + length) | 0);
  $thiz.Ljava_io_ByteArrayInputStream__f_pos = offset;
  return $thiz;
}
function $ct_Ljava_io_ByteArrayInputStream__AB__($thiz, buf) {
  $ct_Ljava_io_ByteArrayInputStream__AB__I__I__($thiz, buf, 0, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(buf).u.length);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_ByteArrayInputStream() {
  this.Ljava_io_ByteArrayInputStream__f_buf = null;
  this.Ljava_io_ByteArrayInputStream__f_count = 0;
  this.Ljava_io_ByteArrayInputStream__f_pos = 0;
}
$c_Ljava_io_ByteArrayInputStream.prototype = new $h_Ljava_io_InputStream();
$c_Ljava_io_ByteArrayInputStream.prototype.constructor = $c_Ljava_io_ByteArrayInputStream;
/** @constructor */
function $h_Ljava_io_ByteArrayInputStream() {
}
$h_Ljava_io_ByteArrayInputStream.prototype = $c_Ljava_io_ByteArrayInputStream.prototype;
$c_Ljava_io_ByteArrayInputStream.prototype.read__I = (function() {
  if ((this.Ljava_io_ByteArrayInputStream__f_pos >= this.Ljava_io_ByteArrayInputStream__f_count)) {
    return (-1);
  } else {
    var res = (255 & $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_ByteArrayInputStream__f_buf).get(this.Ljava_io_ByteArrayInputStream__f_pos));
    this.Ljava_io_ByteArrayInputStream__f_pos = ((1 + this.Ljava_io_ByteArrayInputStream__f_pos) | 0);
    return res;
  }
});
$c_Ljava_io_ByteArrayInputStream.prototype.close__V = (function() {
});
var $d_Ljava_io_ByteArrayInputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Ljava_io_ByteArrayInputStream, "java.io.ByteArrayInputStream", ({
  Ljava_io_ByteArrayInputStream: 1,
  Ljava_io_InputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1
}));
function $ct_Ljava_io_FilterInputStream__Ljava_io_InputStream__($thiz, in$1) {
  $thiz.Ljava_io_FilterInputStream__f_in = in$1;
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterInputStream() {
  this.Ljava_io_FilterInputStream__f_in = null;
}
$c_Ljava_io_FilterInputStream.prototype = new $h_Ljava_io_InputStream();
$c_Ljava_io_FilterInputStream.prototype.constructor = $c_Ljava_io_FilterInputStream;
/** @constructor */
function $h_Ljava_io_FilterInputStream() {
}
$h_Ljava_io_FilterInputStream.prototype = $c_Ljava_io_FilterInputStream.prototype;
$c_Ljava_io_FilterInputStream.prototype.close__V = (function() {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_FilterInputStream__f_in).close__V();
});
/** @constructor */
function $c_Lsbt_testing_Status(name, ordinal) {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Enum__T__I__(this, name, ordinal);
}
$c_Lsbt_testing_Status.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_jl_Enum();
$c_Lsbt_testing_Status.prototype.constructor = $c_Lsbt_testing_Status;
/** @constructor */
function $h_Lsbt_testing_Status() {
}
$h_Lsbt_testing_Status.prototype = $c_Lsbt_testing_Status.prototype;
function $as_Lsbt_testing_Status(obj) {
  return (((obj instanceof $c_Lsbt_testing_Status) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "sbt.testing.Status"));
}
function $isArrayOf_Lsbt_testing_Status(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lsbt_testing_Status)));
}
function $asArrayOf_Lsbt_testing_Status(obj, depth) {
  return (($isArrayOf_Lsbt_testing_Status(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lsbt.testing.Status;", depth));
}
var $d_Lsbt_testing_Status = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lsbt_testing_Status, "sbt.testing.Status", ({
  Lsbt_testing_Status: 1,
  jl_Enum: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
}));
function $p_Ljava_io_ByteArrayOutputStream__growBuf__I__V($thiz, minIncrement) {
  var a = (($thiz.Ljava_io_ByteArrayOutputStream__f_count + minIncrement) | 0);
  var b = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($thiz.Ljava_io_ByteArrayOutputStream__f_buf).u.length << 1);
  var newSize = ((a > b) ? a : b);
  var newBuf = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(newSize);
  var x0 = $thiz.Ljava_io_ByteArrayOutputStream__f_buf;
  var x4 = $thiz.Ljava_io_ByteArrayOutputStream__f_count;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemArraycopy($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0), 0, newBuf, 0, x4);
  $thiz.Ljava_io_ByteArrayOutputStream__f_buf = newBuf;
}
function $ct_Ljava_io_ByteArrayOutputStream__I__($thiz, initBufSize) {
  $thiz.Ljava_io_ByteArrayOutputStream__f_buf = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(initBufSize);
  $thiz.Ljava_io_ByteArrayOutputStream__f_count = 0;
  return $thiz;
}
function $ct_Ljava_io_ByteArrayOutputStream__($thiz) {
  $ct_Ljava_io_ByteArrayOutputStream__I__($thiz, 32);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_ByteArrayOutputStream() {
  this.Ljava_io_ByteArrayOutputStream__f_buf = null;
  this.Ljava_io_ByteArrayOutputStream__f_count = 0;
}
$c_Ljava_io_ByteArrayOutputStream.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_Ljava_io_OutputStream();
$c_Ljava_io_ByteArrayOutputStream.prototype.constructor = $c_Ljava_io_ByteArrayOutputStream;
/** @constructor */
function $h_Ljava_io_ByteArrayOutputStream() {
}
$h_Ljava_io_ByteArrayOutputStream.prototype = $c_Ljava_io_ByteArrayOutputStream.prototype;
$c_Ljava_io_ByteArrayOutputStream.prototype.write__I__V = (function(b) {
  if ((this.Ljava_io_ByteArrayOutputStream__f_count >= $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_ByteArrayOutputStream__f_buf).u.length)) {
    $p_Ljava_io_ByteArrayOutputStream__growBuf__I__V(this, 1);
  }
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_ByteArrayOutputStream__f_buf).set(this.Ljava_io_ByteArrayOutputStream__f_count, ((b << 24) >> 24));
  this.Ljava_io_ByteArrayOutputStream__f_count = ((1 + this.Ljava_io_ByteArrayOutputStream__f_count) | 0);
});
$c_Ljava_io_ByteArrayOutputStream.prototype.toByteArray__AB = (function() {
  var res = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_B(this.Ljava_io_ByteArrayOutputStream__f_count);
  var x0 = this.Ljava_io_ByteArrayOutputStream__f_buf;
  var x4 = this.Ljava_io_ByteArrayOutputStream__f_count;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$systemArraycopy($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0), 0, res, 0, x4);
  return res;
});
$c_Ljava_io_ByteArrayOutputStream.prototype.toString__T = (function() {
  var bytes = this.Ljava_io_ByteArrayOutputStream__f_buf;
  var length = this.Ljava_io_ByteArrayOutputStream__f_count;
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_String$();
  return this$1.new__AB__I__I__Ljava_nio_charset_Charset__T(bytes, 0, length, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Ljava_nio_charset_UTF\uff3f8$());
});
$c_Ljava_io_ByteArrayOutputStream.prototype.close__V = (function() {
});
var $d_Ljava_io_ByteArrayOutputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Ljava_io_ByteArrayOutputStream, "java.io.ByteArrayOutputStream", ({
  Ljava_io_ByteArrayOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1
}));
class $c_Ljava_io_EOFException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Ljava_io_IOException {
  constructor() {
    super();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_Ljava_io_EOFException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Ljava_io_EOFException, "java.io.EOFException", ({
  Ljava_io_EOFException: 1,
  Ljava_io_IOException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_ClassNotFoundException__T__jl_Throwable__($thiz, s, e) {
  $thiz.jl_ClassNotFoundException__f_e = e;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ClassNotFoundException__T__($thiz, s) {
  $ct_jl_ClassNotFoundException__T__jl_Throwable__($thiz, s, null);
  return $thiz;
}
class $c_jl_ClassNotFoundException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_ReflectiveOperationException {
  constructor() {
    super();
    this.jl_ClassNotFoundException__f_e = null;
  }
  getCause__jl_Throwable() {
    return this.jl_ClassNotFoundException__f_e;
  }
}
var $d_jl_ClassNotFoundException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_jl_ClassNotFoundException, "java.lang.ClassNotFoundException", ({
  jl_ClassNotFoundException: 1,
  jl_ReflectiveOperationException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_IncompatibleClassChangeError extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_LinkageError {
}
function $ct_ju_concurrent_ConcurrentHashMap__I__F__($thiz, initialCapacity, loadFactor) {
  $thiz.ju_concurrent_ConcurrentHashMap__f_inner = new $c_ju_concurrent_ConcurrentHashMap$InnerHashMap(initialCapacity, loadFactor);
  return $thiz;
}
function $ct_ju_concurrent_ConcurrentHashMap__($thiz) {
  $ct_ju_concurrent_ConcurrentHashMap__I__F__($thiz, 16, 0.75);
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap() {
  this.ju_concurrent_ConcurrentHashMap__f_inner = null;
}
$c_ju_concurrent_ConcurrentHashMap.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_AbstractMap();
$c_ju_concurrent_ConcurrentHashMap.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap() {
}
$h_ju_concurrent_ConcurrentHashMap.prototype = $c_ju_concurrent_ConcurrentHashMap.prototype;
$c_ju_concurrent_ConcurrentHashMap.prototype.size__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).ju_HashMap__f_contentSize;
});
$c_ju_concurrent_ConcurrentHashMap.prototype.isEmpty__Z = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).isEmpty__Z();
});
$c_ju_concurrent_ConcurrentHashMap.prototype.get__O__O = (function(key) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).get__O__O(key);
});
$c_ju_concurrent_ConcurrentHashMap.prototype.put__O__O__O = (function(key, value) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).put__O__O__O(key, value);
});
$c_ju_concurrent_ConcurrentHashMap.prototype.remove__O__O = (function(key) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).remove__O__O(key);
});
$c_ju_concurrent_ConcurrentHashMap.prototype.keySet__ju_concurrent_ConcurrentHashMap$KeySetView = (function() {
  return new $c_ju_concurrent_ConcurrentHashMap$KeySetView(this.ju_concurrent_ConcurrentHashMap__f_inner, null);
});
$c_ju_concurrent_ConcurrentHashMap.prototype.entrySet__ju_Set = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner);
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$EntrySet(this$1);
});
$c_ju_concurrent_ConcurrentHashMap.prototype.hashCode__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).hashCode__I();
});
$c_ju_concurrent_ConcurrentHashMap.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).toString__T();
});
$c_ju_concurrent_ConcurrentHashMap.prototype.equals__O__Z = (function(o) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap__f_inner).equals__O__Z(o);
});
$c_ju_concurrent_ConcurrentHashMap.prototype.keySet__ju_Set = (function() {
  return this.keySet__ju_concurrent_ConcurrentHashMap$KeySetView();
});
function $as_ju_concurrent_ConcurrentHashMap(obj) {
  return (((obj instanceof $c_ju_concurrent_ConcurrentHashMap) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "java.util.concurrent.ConcurrentHashMap"));
}
function $isArrayOf_ju_concurrent_ConcurrentHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_concurrent_ConcurrentHashMap)));
}
function $asArrayOf_ju_concurrent_ConcurrentHashMap(obj, depth) {
  return (($isArrayOf_ju_concurrent_ConcurrentHashMap(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Ljava.util.concurrent.ConcurrentHashMap;", depth));
}
var $d_ju_concurrent_ConcurrentHashMap = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_ju_concurrent_ConcurrentHashMap, "java.util.concurrent.ConcurrentHashMap", ({
  ju_concurrent_ConcurrentHashMap: 1,
  ju_AbstractMap: 1,
  ju_Map: 1,
  ju_concurrent_ConcurrentMap: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$KeySetView(innerMap, defaultValue) {
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap = null;
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue = null;
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap = innerMap;
  this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue = defaultValue;
}
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$KeySetView;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$KeySetView() {
}
$h_ju_concurrent_ConcurrentHashMap$KeySetView.prototype = $c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype;
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.iterator__ju_Iterator = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap);
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$KeySet(this$1).iterator__ju_Iterator();
});
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.size__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap).ju_HashMap__f_contentSize;
});
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.add__O__Z = (function(e) {
  if ((this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_UnsupportedOperationException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_UnsupportedOperationException());
  }
  return ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap).putIfAbsent__O__O__O(e, this.ju_concurrent_ConcurrentHashMap$KeySetView__f_defaultValue) === null);
});
$c_ju_concurrent_ConcurrentHashMap$KeySetView.prototype.toString__T = (function() {
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.ju_concurrent_ConcurrentHashMap$KeySetView__f_innerMap);
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$KeySet(this$1).toString__T();
});
var $d_ju_concurrent_ConcurrentHashMap$KeySetView = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_ju_concurrent_ConcurrentHashMap$KeySetView, "java.util.concurrent.ConcurrentHashMap$KeySetView", ({
  ju_concurrent_ConcurrentHashMap$KeySetView: 1,
  ju_Set: 1,
  ju_Collection: 1,
  jl_Iterable: 1,
  Ljava_io_Serializable: 1
}));
class $c_Lorg_junit_TestCouldNotBeSkippedException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_RuntimeException {
  constructor(cause) {
    super();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Test could not be skipped due to other failures", cause, true, true);
  }
}
var $d_Lorg_junit_TestCouldNotBeSkippedException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_junit_TestCouldNotBeSkippedException, "org.junit.TestCouldNotBeSkippedException", ({
  Lorg_junit_TestCouldNotBeSkippedException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1(outer) {
}
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.constructor = $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1;
/** @constructor */
function $h_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1() {
}
$h_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype = $c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype;
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.applyOrElse__jl_Throwable__F1__O = (function(x1, default$1) {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_util_Failure(x1);
});
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.isDefinedAt__jl_Throwable__Z = (function(x1) {
  return true;
});
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__jl_Throwable__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x));
});
$c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__jl_Throwable__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x), default$1);
});
var $d_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1, "org.scalajs.junit.JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1", ({
  Lorg_scalajs_junit_JUnitTask$$anonfun$$nestedInanonfun$executeTestMethod$6$1: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1() {
}
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.constructor = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1() {
}
$h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype;
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.applyOrElse__sjs_reflect_InstantiatableClass__F1__O = (function(x1, default$1) {
  var that = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).sjs_reflect_InstantiatableClass__f_runtimeClass;
  if ($d_Lsbt_testing_Framework.isAssignableFrom($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(that).data)) {
    return $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).newInstance__O());
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x1);
  }
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.isDefinedAt__sjs_reflect_InstantiatableClass__Z = (function(x1) {
  var that = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x1).sjs_reflect_InstantiatableClass__f_runtimeClass;
  return $d_Lsbt_testing_Framework.isAssignableFrom($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(that).data);
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__sjs_reflect_InstantiatableClass__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(x));
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__sjs_reflect_InstantiatableClass__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sjs_reflect_InstantiatableClass(x), default$1);
});
var $d_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1, "org.scalajs.testing.bridge.FrameworkLoader$$anonfun$tryLoad$1$1", ({
  Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoad$1$1: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2() {
}
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.constructor = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2() {
}
$h_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype = $c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype;
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.applyOrElse__s_Option__F1__O = (function(x1, default$1) {
  if ((x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
    var x2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x1);
    var framework = $as_Lsbt_testing_Framework($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x2).s_Some__f_value);
    return framework;
  } else {
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(default$1).apply__O__O(x1);
  }
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.isDefinedAt__s_Option__Z = (function(x1) {
  return (x1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some);
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__s_Option__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x));
});
$c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__s_Option__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x), default$1);
});
var $d_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2, "org.scalajs.testing.bridge.FrameworkLoader$$anonfun$tryLoadFramework$2", ({
  Lorg_scalajs_testing_bridge_FrameworkLoader$$anonfun$tryLoadFramework$2: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7() {
}
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sr_AbstractPartialFunction();
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.constructor = $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7;
/** @constructor */
function $h_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7() {
}
$h_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype = $c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype;
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.applyOrElse__jl_Throwable__F1__O = (function(x1, default$1) {
  var xs = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
  var len = xs.length__I();
  var array = new ($d_Lsbt_testing_Task.getArrayOf().constr)(len);
  var iterator = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  var i = 0;
  while ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).hasNext__Z()) {
    array.set(i, $as_Lsbt_testing_Task($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(iterator).next__O()));
    i = ((1 + i) | 0);
  }
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_T2(false, array);
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.isDefinedAt__jl_Throwable__Z = (function(x1) {
  return true;
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__jl_Throwable__Z($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x));
});
$c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__jl_Throwable__F1__O($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_jl_Throwable(x), default$1);
});
var $d_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7, "org.scalajs.testing.bridge.HTMLRunner$$anonfun$scheduleTask$7", ({
  Lorg_scalajs_testing_bridge_HTMLRunner$$anonfun$scheduleTask$7: 1,
  sr_AbstractPartialFunction: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$() {
}
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype = new $h_Lorg_scalajs_testing_common_TestBridgeMode();
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$() {
}
$h_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype;
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productElementName__I__T = (function(n) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_s_Product__productElementName__I__T(this, n);
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productPrefix__T = (function() {
  return "FullBridge";
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productElement__I__O = (function(x$1) {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1);
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ScalaRunTime$$anon$1(this);
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.hashCode__I = (function() {
  return 714286872;
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$.prototype.toString__T = (function() {
  return "FullBridge";
});
var $d_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$, "org.scalajs.testing.common.TestBridgeMode$FullBridge$", ({
  Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$: 1,
  Lorg_scalajs_testing_common_TestBridgeMode: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
var $n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$;
function $m_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$() {
  if ((!$n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$)) {
    $n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$ = new $c_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$();
  }
  return $n_Lorg_scalajs_testing_common_TestBridgeMode$FullBridge$;
}
/** @constructor */
function $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(tests) {
  this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests = null;
  this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests = tests;
}
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype = new $h_Lorg_scalajs_testing_common_TestBridgeMode();
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.constructor = $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner;
/** @constructor */
function $h_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner() {
}
$h_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype = $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype;
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productPrefix__T = (function() {
  return "HTMLRunner";
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1));
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ScalaRunTime$$anon$1(this);
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.productElementName__I__T = (function(x$1) {
  return ((x$1 === 0) ? "tests" : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1)));
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)) {
    var HTMLRunner$1 = $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(x$1);
    var x = this.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(HTMLRunner$1).Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner__f_tests;
    if ((x === null)) {
      return (x$2 === null);
    } else {
      var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
      return (this$1 === x$2);
    }
  } else {
    return false;
  }
});
function $as_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.TestBridgeMode$HTMLRunner"));
}
function $isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner)));
}
function $asArrayOf_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.TestBridgeMode$HTMLRunner;", depth));
}
var $d_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner, "org.scalajs.testing.common.TestBridgeMode$HTMLRunner", ({
  Lorg_scalajs_testing_common_TestBridgeMode$HTMLRunner: 1,
  Lorg_scalajs_testing_common_TestBridgeMode: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Ljava_io_DataInputStream(in$1) {
  this.Ljava_io_FilterInputStream__f_in = null;
  this.Ljava_io_DataInputStream__f_pushedBack = 0;
  $ct_Ljava_io_FilterInputStream__Ljava_io_InputStream__(this, in$1);
  this.Ljava_io_DataInputStream__f_pushedBack = (-1);
}
$c_Ljava_io_DataInputStream.prototype = new $h_Ljava_io_FilterInputStream();
$c_Ljava_io_DataInputStream.prototype.constructor = $c_Ljava_io_DataInputStream;
/** @constructor */
function $h_Ljava_io_DataInputStream() {
}
$h_Ljava_io_DataInputStream.prototype = $c_Ljava_io_DataInputStream.prototype;
$c_Ljava_io_DataInputStream.prototype.readBoolean__Z = (function() {
  return (this.readByte__B() !== 0);
});
$c_Ljava_io_DataInputStream.prototype.readByte__B = (function() {
  var res = this.read__I();
  if ((res === (-1))) {
    throw new $c_Ljava_io_EOFException();
  }
  return ((res << 24) >> 24);
});
$c_Ljava_io_DataInputStream.prototype.readInt__I = (function() {
  return ((((this.readUnsignedByte__I() << 24) | (this.readUnsignedByte__I() << 16)) | (this.readUnsignedByte__I() << 8)) | this.readUnsignedByte__I());
});
$c_Ljava_io_DataInputStream.prototype.readLong__J = (function() {
  var value = this.readInt__I();
  var value$1 = this.readInt__I();
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_RTLong(value$1, value);
});
$c_Ljava_io_DataInputStream.prototype.readUnsignedByte__I = (function() {
  var res = this.read__I();
  if ((res === (-1))) {
    throw new $c_Ljava_io_EOFException();
  }
  return res;
});
$c_Ljava_io_DataInputStream.prototype.read__I = (function() {
  var res = ((this.Ljava_io_DataInputStream__f_pushedBack !== (-1)) ? this.Ljava_io_DataInputStream__f_pushedBack : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_FilterInputStream__f_in).read__I());
  this.Ljava_io_DataInputStream__f_pushedBack = (-1);
  return res;
});
var $d_Ljava_io_DataInputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Ljava_io_DataInputStream, "java.io.DataInputStream", ({
  Ljava_io_DataInputStream: 1,
  Ljava_io_FilterInputStream: 1,
  Ljava_io_InputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_DataInput: 1
}));
class $c_jl_InstantiationError extends $c_jl_IncompatibleClassChangeError {
  constructor(s) {
    super();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_InstantiationError = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_jl_InstantiationError, "java.lang.InstantiationError", ({
  jl_InstantiationError: 1,
  jl_IncompatibleClassChangeError: 1,
  jl_LinkageError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_ju_NullRejectingHashMap() {
  this.ju_HashMap__f_java$util$HashMap$$loadFactor = 0.0;
  this.ju_HashMap__f_java$util$HashMap$$table = null;
  this.ju_HashMap__f_threshold = 0;
  this.ju_HashMap__f_contentSize = 0;
}
$c_ju_NullRejectingHashMap.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_HashMap();
$c_ju_NullRejectingHashMap.prototype.constructor = $c_ju_NullRejectingHashMap;
/** @constructor */
function $h_ju_NullRejectingHashMap() {
}
$h_ju_NullRejectingHashMap.prototype = $c_ju_NullRejectingHashMap.prototype;
$c_ju_NullRejectingHashMap.prototype.newNode__O__I__O__ju_HashMap$Node__ju_HashMap$Node__ju_HashMap$Node = (function(key, hash, value, previous, next) {
  return new $c_ju_NullRejectingHashMap$Node(key, hash, value, previous, next);
});
$c_ju_NullRejectingHashMap.prototype.get__O__O = (function(key) {
  if ((key === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException());
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$p_ju_HashMap__getOrDefaultImpl__O__O__O(this, key, null);
});
$c_ju_NullRejectingHashMap.prototype.containsKey__O__Z = (function(key) {
  if ((key === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException());
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap.prototype.containsKey__O__Z.call(this, key);
});
$c_ju_NullRejectingHashMap.prototype.put__O__O__O = (function(key, value) {
  if (((key === null) || (value === null))) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException());
  }
  if ((key === null)) {
    var $x_1 = 0;
  } else {
    var originalHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(key));
    var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
  }
  return this.java$util$HashMap$$put0__O__O__I__Z__O(key, value, $x_1, false);
});
$c_ju_NullRejectingHashMap.prototype.putIfAbsent__O__O__O = (function(key, value) {
  if ((value === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException());
  }
  var old = this.get__O__O(key);
  if ((old === null)) {
    if ((key === null)) {
      var $x_1 = 0;
    } else {
      var originalHash = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$dp_hashCode__I($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(key));
      var $x_1 = (originalHash ^ ((originalHash >>> 16) | 0));
    }
    this.java$util$HashMap$$put0__O__O__I__Z__O(key, value, $x_1, false);
  }
  return old;
});
$c_ju_NullRejectingHashMap.prototype.remove__O__O = (function(key) {
  if ((key === null)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_NullPointerException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_NullPointerException());
  }
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap.prototype.remove__O__O.call(this, key);
});
function $as_Lorg_junit_internal_AssumptionViolatedException(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.junit.internal.AssumptionViolatedException"));
}
function $isArrayOf_Lorg_junit_internal_AssumptionViolatedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_junit_internal_AssumptionViolatedException)));
}
function $asArrayOf_Lorg_junit_internal_AssumptionViolatedException(obj, depth) {
  return (($isArrayOf_Lorg_junit_internal_AssumptionViolatedException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.junit.internal.AssumptionViolatedException;", depth));
}
class $c_Lorg_scalajs_testing_common_RPCCore$RPCException extends $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_Exception {
  constructor(c) {
    super();
    this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c = null;
    this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c = c;
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_Exception__jl_Throwable__(this, c);
  }
  productPrefix__T() {
    return "RPCException";
  }
  productArity__I() {
    return 1;
  }
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1));
  }
  productIterator__sc_Iterator() {
    return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ScalaRunTime$$anon$1(this);
  }
  productElementName__I__T(x$1) {
    return ((x$1 === 0) ? "c" : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().ioobe__I__O(x$1)));
  }
  hashCode__I() {
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
  }
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true;
    } else if ((x$1 instanceof $c_Lorg_scalajs_testing_common_RPCCore$RPCException)) {
      var RPCException$1 = $as_Lorg_scalajs_testing_common_RPCCore$RPCException(x$1);
      var x = this.Lorg_scalajs_testing_common_RPCCore$RPCException__f_c;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(RPCException$1).Lorg_scalajs_testing_common_RPCCore$RPCException__f_c;
      return ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2));
    } else {
      return false;
    }
  }
}
function $as_Lorg_scalajs_testing_common_RPCCore$RPCException(obj) {
  return (((obj instanceof $c_Lorg_scalajs_testing_common_RPCCore$RPCException) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "org.scalajs.testing.common.RPCCore$RPCException"));
}
function $isArrayOf_Lorg_scalajs_testing_common_RPCCore$RPCException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_scalajs_testing_common_RPCCore$RPCException)));
}
function $asArrayOf_Lorg_scalajs_testing_common_RPCCore$RPCException(obj, depth) {
  return (($isArrayOf_Lorg_scalajs_testing_common_RPCCore$RPCException(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Lorg.scalajs.testing.common.RPCCore$RPCException;", depth));
}
var $d_Lorg_scalajs_testing_common_RPCCore$RPCException = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Lorg_scalajs_testing_common_RPCCore$RPCException, "org.scalajs.testing.common.RPCCore$RPCException", ({
  Lorg_scalajs_testing_common_RPCCore$RPCException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
}));
/** @constructor */
function $c_Ljava_io_DataOutputStream(out) {
  this.Ljava_io_FilterOutputStream__f_out = null;
  this.Ljava_io_DataOutputStream__f_written = 0;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__(this, out);
  this.Ljava_io_DataOutputStream__f_written = 0;
}
$c_Ljava_io_DataOutputStream.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_Ljava_io_FilterOutputStream();
$c_Ljava_io_DataOutputStream.prototype.constructor = $c_Ljava_io_DataOutputStream;
/** @constructor */
function $h_Ljava_io_DataOutputStream() {
}
$h_Ljava_io_DataOutputStream.prototype = $c_Ljava_io_DataOutputStream.prototype;
$c_Ljava_io_DataOutputStream.prototype.write__I__V = (function(b) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Ljava_io_FilterOutputStream__f_out).write__I__V(b);
  this.Ljava_io_DataOutputStream__f_written = ((1 + this.Ljava_io_DataOutputStream__f_written) | 0);
});
$c_Ljava_io_DataOutputStream.prototype.writeBoolean__Z__V = (function(v) {
  this.write__I__V((v ? 1 : 0));
});
$c_Ljava_io_DataOutputStream.prototype.writeInt__I__V = (function(v) {
  this.write__I__V((v >> 24));
  this.write__I__V((v >> 16));
  this.write__I__V((v >> 8));
  this.write__I__V(v);
});
var $d_Ljava_io_DataOutputStream = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Ljava_io_DataOutputStream, "java.io.DataOutputStream", ({
  Ljava_io_DataOutputStream: 1,
  Ljava_io_FilterOutputStream: 1,
  Ljava_io_OutputStream: 1,
  Ljava_io_Closeable: 1,
  jl_AutoCloseable: 1,
  Ljava_io_Flushable: 1,
  Ljava_io_DataOutput: 1
}));
/** @constructor */
function $c_ju_concurrent_ConcurrentHashMap$InnerHashMap(initialCapacity, loadFactor) {
  this.ju_HashMap__f_java$util$HashMap$$loadFactor = 0.0;
  this.ju_HashMap__f_java$util$HashMap$$table = null;
  this.ju_HashMap__f_threshold = 0;
  this.ju_HashMap__f_contentSize = 0;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_ju_HashMap__I__F__(this, initialCapacity, loadFactor);
}
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype = new $h_ju_NullRejectingHashMap();
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.constructor = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap;
/** @constructor */
function $h_ju_concurrent_ConcurrentHashMap$InnerHashMap() {
}
$h_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype = $c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype;
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.nodeIterator__ju_Iterator = (function() {
  return new $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$NodeIterator(this);
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.keyIterator__ju_Iterator = (function() {
  return new $c_ju_concurrent_ConcurrentHashMap$InnerHashMap$KeyIterator(this);
});
$c_ju_concurrent_ConcurrentHashMap$InnerHashMap.prototype.java$util$concurrent$ConcurrentHashMap$InnerHashMap$$makeSnapshot__ju_ArrayList = (function() {
  var snapshot = $ct_ju_ArrayList__I__(new $c_ju_ArrayList(), this.ju_HashMap__f_contentSize);
  var iter = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_HashMap$NodeIterator(this);
  while (iter.hasNext__Z()) {
    snapshot.add__O__Z(iter.next__O());
  }
  return snapshot;
});
var $d_ju_concurrent_ConcurrentHashMap$InnerHashMap = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_ju_concurrent_ConcurrentHashMap$InnerHashMap, "java.util.concurrent.ConcurrentHashMap$InnerHashMap", ({
  ju_concurrent_ConcurrentHashMap$InnerHashMap: 1,
  ju_NullRejectingHashMap: 1,
  ju_HashMap: 1,
  ju_AbstractMap: 1,
  ju_Map: 1,
  Ljava_io_Serializable: 1,
  jl_Cloneable: 1
}));
/** @constructor */
function $c_sc_MapOps$$anon$1(outer) {
  this.sc_MapOps$$anon$1__f_$outer = null;
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(outer);
  this.sc_MapOps$$anon$1__f_$outer = outer;
}
$c_sc_MapOps$$anon$1.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_sc_AbstractIterable();
$c_sc_MapOps$$anon$1.prototype.constructor = $c_sc_MapOps$$anon$1;
/** @constructor */
function $h_sc_MapOps$$anon$1() {
}
$h_sc_MapOps$$anon$1.prototype = $c_sc_MapOps$$anon$1.prototype;
$c_sc_MapOps$$anon$1.prototype.knownSize__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.sc_MapOps$$anon$1__f_$outer).knownSize__I();
});
$c_sc_MapOps$$anon$1.prototype.iterator__sc_Iterator = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.sc_MapOps$$anon$1__f_$outer).valuesIterator__sc_Iterator();
});
$c_sc_MapOps$$anon$1.prototype.collectionClassName__ = (function() {
  return "Iterable";
});
var $d_sc_MapOps$$anon$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_sc_MapOps$$anon$1, "scala.collection.MapOps$$anon$1", ({
  sc_MapOps$$anon$1: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_ju_ArrayList__O__I__($thiz, innerInit, _size) {
  $thiz.ju_ArrayList__f__size = _size;
  $thiz.ju_ArrayList__f_innerJS = innerInit;
  $thiz.ju_ArrayList__f_innerWasm = null;
  return $thiz;
}
function $ct_ju_ArrayList__I__($thiz, initialCapacity) {
  if ((initialCapacity < 0)) {
    throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IllegalArgumentException__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IllegalArgumentException());
  }
  $ct_ju_ArrayList__O__I__($thiz, [], 0);
  return $thiz;
}
/** @constructor */
function $c_ju_ArrayList() {
  this.ju_ArrayList__f__size = 0;
  this.ju_ArrayList__f_innerJS = null;
  this.ju_ArrayList__f_innerWasm = null;
}
$c_ju_ArrayList.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_ju_AbstractList();
$c_ju_ArrayList.prototype.constructor = $c_ju_ArrayList;
/** @constructor */
function $h_ju_ArrayList() {
}
$h_ju_ArrayList.prototype = $c_ju_ArrayList.prototype;
$c_ju_ArrayList.prototype.size__I = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this.ju_ArrayList__f_innerJS.length);
});
$c_ju_ArrayList.prototype.get__I__O = (function(index) {
  this.checkIndexInBounds__I__V(index);
  return this.ju_ArrayList__f_innerJS[index];
});
$c_ju_ArrayList.prototype.add__O__Z = (function(e) {
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(this.ju_ArrayList__f_innerJS.push(e));
  return true;
});
$c_ju_ArrayList.prototype.add__I__O__V = (function(index, element) {
  this.checkIndexOnBounds__I__V(index);
  this.ju_ArrayList__f_innerJS.splice(index, 0, element);
});
var $d_ju_ArrayList = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_ju_ArrayList, "java.util.ArrayList", ({
  ju_ArrayList: 1,
  ju_AbstractList: 1,
  ju_AbstractCollection: 1,
  ju_Collection: 1,
  jl_Iterable: 1,
  ju_List: 1,
  ju_SequencedCollection: 1,
  ju_RandomAccess: 1,
  jl_Cloneable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_math_Numeric$IntIsIntegral$() {
}
$c_s_math_Numeric$IntIsIntegral$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_s_math_Numeric$IntIsIntegral$.prototype.constructor = $c_s_math_Numeric$IntIsIntegral$;
/** @constructor */
function $h_s_math_Numeric$IntIsIntegral$() {
}
$h_s_math_Numeric$IntIsIntegral$.prototype = $c_s_math_Numeric$IntIsIntegral$.prototype;
var $d_s_math_Numeric$IntIsIntegral$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_s_math_Numeric$IntIsIntegral$, "scala.math.Numeric$IntIsIntegral$", ({
  s_math_Numeric$IntIsIntegral$: 1,
  s_math_Numeric$IntIsIntegral: 1,
  s_math_Integral: 1,
  s_math_Numeric: 1,
  s_math_Ordering: 1,
  ju_Comparator: 1,
  s_math_PartialOrdering: 1,
  s_math_Equiv: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordering$IntOrdering: 1
}));
var $n_s_math_Numeric$IntIsIntegral$;
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$();
  }
  return $n_s_math_Numeric$IntIsIntegral$;
}
$sct_Lcom_novocode_junit_JUnitFramework__stinit__();
$sct_Lorg_scalajs_junit_JUnitFramework__stinit__();
$sct_Lmunit_Framework__stinit__();
$s_Lorg_scalajs_testing_bridge_Bridge__start__V();
//# sourceMappingURL=main.js.map
