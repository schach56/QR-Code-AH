'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Llivechart_SimpleTextEditor(stateToBind, statusSignal, numericOnly) {
  this.ky = null;
  this.kz = null;
  this.kx = false;
  this.v5 = null;
  this.ky = stateToBind;
  this.kz = statusSignal;
  this.kx = numericOnly;
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.jW();
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ly().g(8);
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.zP().g(80);
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.pM().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(statusSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$172) => _$172.U(false))), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().W($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.lr(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => {
    if (((!(!e.ctrlKey)) || (!(!e.metaKey)))) {
      var this$2 = e.key;
      _return: {
        var len = this$2.length;
        if ((len === 1)) {
          var i = 0;
          while ((i !== len)) {
            if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().eZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().f0(this$2.charCodeAt(i))) !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().eZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().f0("v".charCodeAt(i))))) {
              var $x_4 = false;
              break _return;
            }
            i = ((1 + i) | 0);
          }
          var $x_4 = true;
        } else {
          var $x_4 = false;
        }
      }
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      e.preventDefault();
    }
  })));
  var $x_2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().W($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ls(), false, false)), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$2) => {
    e$2.preventDefault();
  })));
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.h().a4(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(statusSignal, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    if ((x$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x666 = (!(!x$1.am));
      if ((x666 === false)) {
        return "background-color: #f9d6d6; color: #6b6b6b; border-color: #e78989;";
      }
      if ((x666 === true)) {
        return "background-color: #dff3e1; color: #2e7d32; border-color: #8fd09a;";
      }
    }
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$() === x$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1);
  })), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$();
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.ap().a4(stateToBind.e);
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().W($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.dl(), false, false)).di().d1(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    if (numericOnly) {
      var len$1 = text.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        var index$2 = i$1;
        var x$2 = text.charCodeAt(index$2);
        if ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().xy(x$2)) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x$2));
          sb.B = (sb.B + str);
        }
        i$1 = ((1 + i$1) | 0);
      }
      return ((len$1 === sb.x()) ? text : sb.B);
    } else {
      return text;
    }
  }))), new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((sink) => ((_$1) => {
    sink.b3(_$1);
  }))(stateToBind.bw)));
  var editorTextArea = $x_9.d($x_8.c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$x_7, $x_6, $x_5, $x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().eR(listener, updater)])));
  this.v5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.n().d($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().c(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.r().C)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().b.J.S("simple-text-editor"), editorTextArea])));
}
export { $c_Llivechart_SimpleTextEditor as $c_Llivechart_SimpleTextEditor };
$p = $c_Llivechart_SimpleTextEditor.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Llivechart_SimpleTextEditor;
/** @constructor */
function $h_Llivechart_SimpleTextEditor() {
}
export { $h_Llivechart_SimpleTextEditor as $h_Llivechart_SimpleTextEditor };
$h_Llivechart_SimpleTextEditor.prototype = $p;
$p.c1 = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$p.V = (function() {
  var acc = (-889275714);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().y(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("SimpleTextEditor"));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().y(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().af(this.ky));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().y(acc, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().af(this.kz));
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().y(acc, (this.kx ? 1231 : 1237));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().aj(acc, 3);
});
$p.E = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_SimpleTextEditor)) {
    if ((this.kx === x$0.kx)) {
      var x = this.ky;
      var x$2 = x$0.ky;
      var $x_1 = (x === x$2);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.kz;
      var x$4 = x$0.kz;
      return (x$3 === x$4);
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.R = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().hj(this);
});
$p.bL = (function() {
  return 3;
});
$p.bN = (function() {
  return "SimpleTextEditor";
});
$p.bM = (function(n) {
  switch (n) {
    case 0: {
      return this.ky;
      break;
    }
    case 1: {
      return this.kz;
      break;
    }
    case 2: {
      return this.kx;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $isArrayOf_Llivechart_SimpleTextEditor(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
export { $isArrayOf_Llivechart_SimpleTextEditor as $isArrayOf_Llivechart_SimpleTextEditor };
var $d_Llivechart_SimpleTextEditor = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Llivechart_SimpleTextEditor, "livechart.SimpleTextEditor", ({
  c4: 1,
  d: 1,
  x: 1,
  a: 1
}));
export { $d_Llivechart_SimpleTextEditor as $d_Llivechart_SimpleTextEditor };
//# sourceMappingURL=livechart.-Simple-Text-Editor.js.map
