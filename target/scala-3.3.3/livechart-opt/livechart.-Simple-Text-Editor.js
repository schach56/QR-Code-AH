'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Llivechart_SimpleTextEditor(stateToBind, statusSignal) {
  this.kz = null;
  this.kA = null;
  this.sl = null;
  this.kz = stateToBind;
  this.kA = statusSignal;
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.oA();
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ot().k(8);
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.tS().k(80);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.xb().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(statusSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$95) => _$95.U(false))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.x().b4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(statusSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x391 = (!(!x$1.an));
      if ((x391 === false)) {
        return "background-color: #f9d6d6; color: #6b6b6b; border-color: #e78989;";
      }
      if ((x391 === true)) {
        return "background-color: #dff3e1; color: #2e7d32; border-color: #8fd09a;";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cV().b4(stateToBind.g);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().ab($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.cT(), false, false)).dH(), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.bG(_$1);
  }))(stateToBind.c5)));
  var editorTextArea = $x_6.d($x_5.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_4, $x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().dD(listener, updater)])));
  this.sl = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.r().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.B.J("simple-text-editor"), editorTextArea])));
}
export { $c_Llivechart_SimpleTextEditor as $c_Llivechart_SimpleTextEditor };
$p = $c_Llivechart_SimpleTextEditor.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_SimpleTextEditor;
/** @constructor */
function $h_Llivechart_SimpleTextEditor() {
}
export { $h_Llivechart_SimpleTextEditor as $h_Llivechart_SimpleTextEditor };
$h_Llivechart_SimpleTextEditor.prototype = $p;
$p.c4 = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.N = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$().cK(this, (-889275714), false);
});
$p.z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_SimpleTextEditor)) {
    var x = this.kz;
    var x$2 = x$0.kz;
    if ((x === x$2)) {
      var x$3 = this.kA;
      var x$4 = x$0.kA;
      return (x$3 === x$4);
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
  return 2;
});
$p.bO = (function() {
  return "SimpleTextEditor";
});
$p.bN = (function(n) {
  if ((n === 0)) {
    return this.kz;
  }
  if ((n === 1)) {
    return this.kA;
  }
  throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $isArrayOf_Llivechart_SimpleTextEditor(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bV)));
}
export { $isArrayOf_Llivechart_SimpleTextEditor as $isArrayOf_Llivechart_SimpleTextEditor };
var $d_Llivechart_SimpleTextEditor = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_SimpleTextEditor, "livechart.SimpleTextEditor", ({
  bV: 1,
  d: 1,
  z: 1,
  a: 1
}));
export { $d_Llivechart_SimpleTextEditor as $d_Llivechart_SimpleTextEditor };
//# sourceMappingURL=livechart.-Simple-Text-Editor.js.map
