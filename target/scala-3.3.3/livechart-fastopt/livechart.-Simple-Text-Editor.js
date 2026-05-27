'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_SimpleTextEditor(stateToBind, statusSignal, numericOnly) {
  this.Llivechart_SimpleTextEditor__f_stateToBind = null;
  this.Llivechart_SimpleTextEditor__f_statusSignal = null;
  this.Llivechart_SimpleTextEditor__f_numericOnly = false;
  this.Llivechart_SimpleTextEditor__f_domElement = null;
  this.Llivechart_SimpleTextEditor__f_stateToBind = stateToBind;
  this.Llivechart_SimpleTextEditor__f_statusSignal = statusSignal;
  this.Llivechart_SimpleTextEditor__f_numericOnly = numericOnly;
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).textArea__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).rows__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(8);
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).cols__Lcom_raquo_laminar_keys_HtmlProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter(80);
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).disabled__Lcom_raquo_laminar_keys_HtmlProp());
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(statusSignal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$193) => {
    var _$193$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(_$193);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$193$1).contains__O__Z(false);
  }));
  var $x_7 = $x_8.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$1, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onKeyDown__Lcom_raquo_laminar_keys_EventProp();
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e) => {
    if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(e.ctrlKey) || $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(e.metaKey))) {
      var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(e.key));
      _return: {
        var len = this$3.length;
        if ((len === 1)) {
          var i = 0;
          while ((i !== len)) {
            var index = i;
            var c = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$3, index);
            var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().toLowerCase__C__C($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().toUpperCase__C__C(c));
            var index$1 = i;
            var c$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt("v", index$1);
            if (($x_5 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().toLowerCase__C__C($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$().toUpperCase__C__C(c$1)))) {
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
  }));
  var $x_6 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$4, onNext);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onPaste__Lcom_raquo_laminar_keys_EventProp();
  var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$1, false, false));
  var onNext$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((e$2) => {
    e$2.preventDefault();
  }));
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$6, onNext$1);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).styleAttr__Lcom_raquo_laminar_keys_HtmlAttr());
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(statusSignal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((x$1) => {
    var x$1$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(x$1);
    if ((x$1$1 instanceof $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some)) {
      var x734 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Some(x$1$1)).s_Some__f_value);
      if ((x734 === false)) {
        return "background-color: #f9d6d6; color: #6b6b6b; border-color: #e78989;";
      }
      if ((x734 === true)) {
        return "background-color: #dff3e1; color: #2e7d32; border-color: #8fd09a;";
      }
    }
    var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    if ((x === x$1$1)) {
      return "";
    }
    throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_MatchError(x$1$1);
  }));
  var $x_1 = $x_2.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$7, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var updater = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(stateToBind).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp$2, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor()).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((text) => {
    var text$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(text);
    if (numericOnly) {
      var this$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text$1);
      var len$1 = this$11.length;
      var sb = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_StringBuilder__I__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_StringBuilder(), len$1);
      var i$1 = 0;
      while ((i$1 < len$1)) {
        var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(text$1);
        var index$2 = i$1;
        var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$charAt(this$12, index$2);
        var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Character$();
        if (this$15.isDigit__I__Z(x$2)) {
          var str = ("" + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$cToS(x$2));
          sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (sb.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
        }
        i$1 = ((1 + i$1) | 0);
      }
      return ((len$1 === sb.length__I()) ? text$1 : sb.jl_StringBuilder__f_java$lang$StringBuilder$$content);
    } else {
      return text$1;
    }
  }))));
  var sink = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(stateToBind).Lcom_raquo_airstream_state_SourceVar__f_writer;
  var onNext$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(sink).onNext__O__V(_$1);
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$17, onNext$2);
  var editorTextArea = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10, $x_9, $x_7, $x_6, $x_3, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])));
  this.Llivechart_SimpleTextEditor__f_domElement = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_cls).$colon$eq__T__Lcom_raquo_laminar_modifiers_CompositeKeySetter("simple-text-editor"), editorTextArea])));
}
export { $c_Llivechart_SimpleTextEditor as $c_Llivechart_SimpleTextEditor };
$c_Llivechart_SimpleTextEditor.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_SimpleTextEditor.prototype.constructor = $c_Llivechart_SimpleTextEditor;
/** @constructor */
function $h_Llivechart_SimpleTextEditor() {
}
export { $h_Llivechart_SimpleTextEditor as $h_Llivechart_SimpleTextEditor };
$h_Llivechart_SimpleTextEditor.prototype = $c_Llivechart_SimpleTextEditor.prototype;
$c_Llivechart_SimpleTextEditor.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_SimpleTextEditor.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_T__hashCode__I("SimpleTextEditor");
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var x = this.Llivechart_SimpleTextEditor__f_stateToBind;
  var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x$1 = this.Llivechart_SimpleTextEditor__f_statusSignal;
  var data$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().anyHash__O__I(x$1);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var data$3 = (this.Llivechart_SimpleTextEditor__f_numericOnly ? 1231 : 1237);
  acc = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3);
});
$c_Llivechart_SimpleTextEditor.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_SimpleTextEditor)) {
    var x$0$2 = $as_Llivechart_SimpleTextEditor(x$0);
    if ((this.Llivechart_SimpleTextEditor__f_numericOnly === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_SimpleTextEditor__f_numericOnly)) {
      var x = this.Llivechart_SimpleTextEditor__f_stateToBind;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_SimpleTextEditor__f_stateToBind;
      if ((x === null)) {
        var $x_2 = (x$2 === null);
      } else {
        var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
        var $x_2 = (this$1 === x$2);
      }
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.Llivechart_SimpleTextEditor__f_statusSignal;
      var x$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_SimpleTextEditor__f_statusSignal;
      if ((x$3 === null)) {
        var $x_1 = (x$4 === null);
      } else {
        var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$3);
        var $x_1 = (this$2 === x$4);
      }
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
$c_Llivechart_SimpleTextEditor.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_SimpleTextEditor.prototype.productArity__I = (function() {
  return 3;
});
$c_Llivechart_SimpleTextEditor.prototype.productPrefix__T = (function() {
  return "SimpleTextEditor";
});
$c_Llivechart_SimpleTextEditor.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llivechart_SimpleTextEditor__f_stateToBind;
      break;
    }
    case 1: {
      return this.Llivechart_SimpleTextEditor__f_statusSignal;
      break;
    }
    case 2: {
      return this.Llivechart_SimpleTextEditor__f_numericOnly;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Llivechart_SimpleTextEditor(obj) {
  return (((obj instanceof $c_Llivechart_SimpleTextEditor) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.SimpleTextEditor"));
}
export { $as_Llivechart_SimpleTextEditor as $as_Llivechart_SimpleTextEditor };
function $isArrayOf_Llivechart_SimpleTextEditor(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_SimpleTextEditor)));
}
export { $isArrayOf_Llivechart_SimpleTextEditor as $isArrayOf_Llivechart_SimpleTextEditor };
function $asArrayOf_Llivechart_SimpleTextEditor(obj, depth) {
  return (($isArrayOf_Llivechart_SimpleTextEditor(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.SimpleTextEditor;", depth));
}
export { $asArrayOf_Llivechart_SimpleTextEditor as $asArrayOf_Llivechart_SimpleTextEditor };
var $d_Llivechart_SimpleTextEditor = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_SimpleTextEditor, "livechart.SimpleTextEditor", ({
  Llivechart_SimpleTextEditor: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_SimpleTextEditor as $d_Llivechart_SimpleTextEditor };
//# sourceMappingURL=livechart.-Simple-Text-Editor.js.map
