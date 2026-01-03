'use strict';
import * as $i_chart$002ejs from "chart.js";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dData$002dItem from "./livechart.-Data-Item.js";
import * as $j_livechart$002e$002dData$002dItem$0024 from "./livechart.-Data-Item$.js";
import * as $j_livechart$002e$002dData$002dItem$002dI$002dD from "./livechart.-Data-Item-I-D.js";
import * as $j_livechart$002e$002dLive$002dChart$0024package$0024$0024anon$00249 from "./livechart.-Live-Chart$package$$anon$9.js";
import * as $j_livechart$002e$002dModel from "./livechart.-Model.js";
/** @constructor */
function $c_Llivechart_LiveChart$package$() {
}
export { $c_Llivechart_LiveChart$package$ as $c_Llivechart_LiveChart$package$ };
$c_Llivechart_LiveChart$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_LiveChart$package$.prototype.constructor = $c_Llivechart_LiveChart$package$;
/** @constructor */
function $h_Llivechart_LiveChart$package$() {
}
export { $h_Llivechart_LiveChart$package$ as $h_Llivechart_LiveChart$package$ };
$h_Llivechart_LiveChart$package$.prototype = $c_Llivechart_LiveChart$package$.prototype;
$c_Llivechart_LiveChart$package$.prototype.LiveChart__V = (function() {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var container = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => document.getElementById("app")));
  var rootNode = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction0_$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1((() => $m_Llivechart_Main$().appElement__Lcom_raquo_laminar_nodes_ReactiveElement()));
  var x0 = this$3.Lcom_raquo_laminar_api_package$$anon$1__f_documentEventProps;
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x0).onDomContentLoaded__Lcom_raquo_laminar_keys_EventProp();
  var p = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false);
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_web_DomEventStream$().apply__Lorg_scalajs_dom_EventTarget__T__Z__Lcom_raquo_airstream_core_EventStream(document, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lcom_raquo_laminar_keys_EventProcessor__f_eventProp).Lcom_raquo_laminar_keys_EventProp__f_name, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lcom_raquo_laminar_keys_EventProcessor__f_shouldUseCapture));
  var fn = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(p).Lcom_raquo_laminar_keys_EventProcessor__f_processor;
  var this$8 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_CollectStream(this$7, fn);
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$2) => {
    new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_nodes_RootNode(container.apply__O(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveElement(rootNode.apply__O()));
  }));
  var owner = this$3.unsafeWindowOwner__Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(this$8, onNext, owner);
});
$c_Llivechart_LiveChart$package$.prototype.inputForDouble__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Observer__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(valueSignal, valueUpdater) {
  var strValue = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var("");
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(strValue).Lcom_raquo_airstream_state_SourceVar__f_signal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(strValue);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$3.Lcom_raquo_airstream_state_SourceVar__f_writer).onNext__O__V(_$1);
  }));
  var $x_3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$2, onNext);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_Implicits$RichSource$();
  var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(strValue);
  var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((prevStr, newValue) => {
    var prevStr$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(prevStr);
    var newValue$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(newValue);
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$();
    if ((this$8.checkFloatFormat__T__Z(prevStr$1) ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Double$().parseDouble__T__D(prevStr$1)) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()).contains__O__Z(newValue$1)) {
      return prevStr$1;
    } else {
      return ("" + newValue$1);
    }
  }));
  var $x_1 = $x_2.$minus$minus$greater$extension__Lcom_raquo_airstream_core_Source__Lcom_raquo_airstream_core_Sink__Lcom_raquo_laminar_modifiers_Binder(valueSignal, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this$10, mod));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var source = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(strValue).Lcom_raquo_airstream_state_SourceVar__f_signal;
  return $x_7.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_6.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_5, $x_4, $x_3, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_Implicits$RichSource$().$minus$minus$greater$extension__Lcom_raquo_airstream_core_Source__F1__Lcom_raquo_laminar_modifiers_Binder(source, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((valueStr) => {
    var valueStr$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(valueStr);
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$();
    var this$15 = (this$14.checkFloatFormat__T__Z(valueStr$1) ? new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_jl_Double$().parseDouble__T__D(valueStr$1)) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
    if ((!this$15.isEmpty__Z())) {
      var x0 = this$15.get__O();
      var nextValue = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(x0);
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(valueUpdater).onNext__O__V(nextValue);
    }
  })))])));
});
$c_Llivechart_LiveChart$package$.prototype.inputForInt__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Observer__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(valueSignal, valueUpdater) {
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp());
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(valueSignal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$13) => {
    var _$13$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(_$13);
    return ("" + _$13$1);
  }));
  var updater = $x_1.$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$3, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor()).map__F1__Lcom_raquo_laminar_keys_EventProcessor(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$14) => {
    var _$14$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(_$14);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringParsers$().parseInt__T__s_Option(_$14$1);
  })))).collect__s_PartialFunction__Lcom_raquo_laminar_keys_EventProcessor(new $j_livechart$002e$002dLive$002dChart$0024package$0024$0024anon$00249.$c_Llivechart_LiveChart$package$$anon$9(this)));
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(valueUpdater).onNext__O__V(_$1);
  }));
  var listener = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$7, onNext);
  return $x_4.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inputs_InputController$().controlled__Lcom_raquo_laminar_modifiers_EventListener__Lcom_raquo_laminar_modifiers_KeyUpdater__Lcom_raquo_laminar_modifiers_Binder(listener, updater)])));
});
$c_Llivechart_LiveChart$package$.prototype.counterButton__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var counter = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var).apply__O__Lcom_raquo_airstream_state_Var(0);
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tpe__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("button");
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "count is ", r);
  var $x_1 = ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_receivers_ChildTextReceiver$()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_inserters_DynamicInserter(counter, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_intRenderable);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((event) => {
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(counter);
    var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((c) => {
      var c$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(c);
      return ((1 + c$1) | 0);
    }));
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$4, mod);
  }));
  return $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_3, $x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$5, onNext)])));
});
var $d_Llivechart_LiveChart$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_LiveChart$package$, "livechart.LiveChart$package$", ({
  Llivechart_LiveChart$package$: 1
}));
export { $d_Llivechart_LiveChart$package$ as $d_Llivechart_LiveChart$package$ };
var $n_Llivechart_LiveChart$package$;
function $m_Llivechart_LiveChart$package$() {
  if ((!$n_Llivechart_LiveChart$package$)) {
    $n_Llivechart_LiveChart$package$ = new $c_Llivechart_LiveChart$package$();
  }
  return $n_Llivechart_LiveChart$package$;
}
export { $m_Llivechart_LiveChart$package$ as $m_Llivechart_LiveChart$package$ };
/** @constructor */
function $c_Llivechart_Main$() {
  this.Llivechart_Main$__f_model = null;
  this.Llivechart_Main$__f_chartConfig = null;
  $n_Llivechart_Main$ = this;
  this.Llivechart_Main$__f_model = new $j_livechart$002e$002dModel.$c_Llivechart_Model();
  this.Llivechart_Main$__f_chartConfig = (() => {
    var this$1 = ({});
    this$1.type = "bar";
    this$1.data = (() => {
      var this$2 = ({});
      this$2.datasets = [(() => {
        var this$3 = ({});
        this$3.label = "Price";
        this$3.borderWidth = 1.0;
        this$3.backgroundColor = "green";
        return this$3;
      })(), (() => {
        var this$2$1 = ({});
        this$2$1.label = "Full price";
        this$2$1.borderWidth = 1.0;
        this$2$1.backgroundColor = "blue";
        return this$2$1;
      })()];
      return this$2;
    })();
    this$1.options = (() => {
      var this$2$2 = ({});
      this$2$2.scales = (() => {
        var this$6 = ({});
        this$6.yAxes = [(() => {
          var this$7 = ({});
          this$7.ticks = (() => {
            var this$8 = ({});
            this$8.beginAtZero = true;
            return this$8;
          })();
          return this$7;
        })()];
        return this$6;
      })();
      return this$2$2;
    })();
    return this$1;
  })();
}
export { $c_Llivechart_Main$ as $c_Llivechart_Main$ };
$c_Llivechart_Main$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$.prototype.constructor = $c_Llivechart_Main$;
/** @constructor */
function $h_Llivechart_Main$() {
}
export { $h_Llivechart_Main$ as $h_Llivechart_Main$ };
$h_Llivechart_Main$.prototype = $c_Llivechart_Main$.prototype;
$c_Llivechart_Main$.prototype.appElement__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).div__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).h1__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  return $x_4.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "Live Chart", r)]))), this.renderDataTable__Lcom_raquo_laminar_nodes_ReactiveElement(), this.renderDataChart__Lcom_raquo_laminar_nodes_ReactiveElement(), this.renderDataList__Lcom_raquo_laminar_nodes_ReactiveElement(), $m_Llivechart_LiveChart$package$().counterButton__Lcom_raquo_laminar_nodes_ReactiveElement()])));
});
$c_Llivechart_Main$.prototype.renderDataChart__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var elem = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
  var optChart = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sr_ObjectRef(elem);
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).canvasTag__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).width__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("100%");
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).height__Lcom_raquo_laminar_keys_StyleProp()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("200px");
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var mount = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((nodeCtx) => {
    var nodeCtx$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_lifecycle_MountContext(nodeCtx);
    var domCanvas = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(nodeCtx$1).Lcom_raquo_laminar_lifecycle_MountContext__f_thisNode)).Lcom_raquo_laminar_nodes_ReactiveHtmlElement__f_ref;
    var ctor = $i_chart$002ejs.Chart;
    var t2 = this.Llivechart_Main$__f_chartConfig;
    var chart = new ctor(domCanvas, t2);
    var ev$10 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Some(chart);
    optChart.sr_ObjectRef__f_elem = ev$10;
    ev$10 = null;
  }));
  var unmount = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((thisNode) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(thisNode);
    var this$6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(optChart.sr_ObjectRef__f_elem));
    if ((!this$6.isEmpty__Z())) {
      var x0 = this$6.get__O();
      x0.destroy();
    }
    var ev$11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$();
    optChart.sr_ObjectRef__f_elem = ev$11;
    ev$11 = null;
  }));
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_MountHooks__onMountUnmountCallback__F1__F1__Lcom_raquo_laminar_modifiers_Modifier(this$7, mount, unmount);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var source = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_model).Llivechart_Model__f_dataSignal;
  return $x_5.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_3, $x_2, $x_1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_Implicits$RichSource$().$minus$minus$greater$extension__Lcom_raquo_airstream_core_Source__F1__Lcom_raquo_laminar_modifiers_Binder(source, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
    var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(data);
    var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_s_Option(optChart.sr_ObjectRef__f_elem));
    if ((!this$9.isEmpty__Z())) {
      var x0$1 = this$9.get__O();
      var $x_6 = x0$1.data;
      var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
      var f = ((_$1) => {
        var _$1$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$1);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$1$1).Llivechart_DataItem__f_label;
      });
      if ((this$10 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var col = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$2 = this$10.head__O();
        var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$2), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t = h;
        var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$10.tail__O());
        while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
          var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$3), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
        }
        var col = h;
      }
      $x_6.labels = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col);
      var x = x0$1.data.datasets;
      if ((x === (void 0))) {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_NoSuchElementException("undefined.get");
      }
      var $x_7 = x[0];
      var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
      var f$1 = ((_$2) => {
        var _$2$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$2);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$2$1).Llivechart_DataItem__f_price;
      });
      if ((this$16 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var col$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$4 = this$16.head__O();
        var h$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$4), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t$1 = h$1;
        var rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$16.tail__O());
        while ((rest$1 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).head__O();
          var nx$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$5), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$1).sci_$colon$colon__f_next = nx$1;
          t$1 = nx$1;
          rest$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$1).tail__O());
        }
        var col$1 = h$1;
      }
      $x_7.data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col$1);
      var x$1 = x0$1.data.datasets;
      if ((x$1 === (void 0))) {
        throw new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_ju_NoSuchElementException("undefined.get");
      }
      var $x_8 = x$1[1];
      var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
      var f$2 = ((_$3) => {
        var _$3$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$3);
        return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$3$1).fullPrice__D();
      });
      if ((this$22 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var col$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
      } else {
        var x0$6 = this$22.head__O();
        var h$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$6), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        var t$2 = h$2;
        var rest$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$22.tail__O());
        while ((rest$2 !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
          var x0$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$2).head__O();
          var nx$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$2(x0$7), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
          $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t$2).sci_$colon$colon__f_next = nx$2;
          t$2 = nx$2;
          rest$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest$2).tail__O());
        }
        var col$2 = h$2;
      }
      $x_8.data = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col$2);
      x0$1.update();
    }
  })))])));
});
$c_Llivechart_Main$.prototype.renderDataTable__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_40 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).table__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_39 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_38 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).thead__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_37 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_36 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tr__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_35 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_34 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).th__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_33 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_32 = $x_34.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_33.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$1, "Label", r)])));
  var $x_31 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).th__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_30 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_29 = $x_31.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_30.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$2, "Price", r$1)])));
  var $x_28 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).th__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_27 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_26 = $x_28.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_27.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$3, "Count", r$2)])));
  var $x_25 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).th__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_24 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_23 = $x_25.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_24.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$4, "Full price", r$3)])));
  var $x_22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).th__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_20 = $x_38.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_37.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_36).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_35.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_32, $x_29, $x_26, $x_23, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_22).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_21.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$5, "Action", r$4)])))])))])));
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tbody__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var signal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_model).Llivechart_Model__f_dataSignal;
  var key = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$4) => {
    var _$4$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$4);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$4$1).Llivechart_DataItem__f_id;
  }));
  var distinctCompose = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_split_SplittableSignal$().split$default$2$extension__Lcom_raquo_airstream_core_Signal__F1(signal);
  var duplicateKeys = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_split_DuplicateKeysConfig$().Lcom_raquo_airstream_split_DuplicateKeysConfig$__f_default;
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((id, initial, itemSignal) => {
    var id$1 = $j_livechart$002e$002dData$002dItem$002dI$002dD.$as_Llivechart_DataItemID(id);
    $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(initial);
    var itemSignal$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_airstream_core_Signal(itemSignal);
    return this.renderDataItem__Llivechart_DataItemID__Lcom_raquo_airstream_core_Signal__Lcom_raquo_laminar_nodes_ReactiveElement(id$1, itemSignal$1);
  }));
  var splittable = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_split_Splittable$ListSplittable$();
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_split_SplitSignal(signal, key, distinctCompose, project, splittable, duplicateKeys);
  var $x_17 = $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tfoot__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tr__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$12, "\u2795", r$5);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$5) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_model).addDataItem__Llivechart_DataItem__V($j_livechart$002e$002dData$002dItem$0024.$m_Llivechart_DataItem$().apply__Llivechart_DataItem());
  }));
  var $x_7 = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_10).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_9.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_8, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$14, onNext)])))])));
  var $x_6 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([])));
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag()).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([])));
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_model).Llivechart_Model__f_dataSignal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
    var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(data);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$();
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    var this$16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
    var f = ((_$6) => {
      var _$6$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$6);
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$6$1).fullPrice__D();
    });
    if ((this$16 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      var this$17 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0 = this$16.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$16.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      var this$17 = h;
    }
    var num = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_math_Numeric$DoubleIsFractional$();
    return $x_2.format$extension__T__sci_Seq__T("%.2f", $x_1.genericWrapArray__O__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_IterableOnceOps__sum__s_math_Numeric__O(this$17, num)])));
  }));
  var textSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$18, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  return $x_40.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_39.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_20, $x_17, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_16).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_14).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_13.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_7, $x_6, $x_5, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_4).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildTextInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_inserters_DynamicInserter(textSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable)])))])))])))])));
});
$c_Llivechart_Main$.prototype.renderDataItem__Llivechart_DataItemID__Lcom_raquo_airstream_core_Signal__Lcom_raquo_laminar_nodes_ReactiveElement = (function(id, itemSignal) {
  var $x_21 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).tr__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_19 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(itemSignal);
  var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$7) => {
    var _$7$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$7);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$7$1).Llivechart_DataItem__f_label;
  }));
  var $x_17 = $x_19.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_18.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([this.inputForString__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Observer__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$2, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.makeDataItemUpdater__Llivechart_DataItemID__F2__Lcom_raquo_airstream_core_Observer(id, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((item, newLabel) => {
    var item$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(item);
    var newLabel$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_T(newLabel);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$1);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$1);
    var id$1 = this$3.Llivechart_DataItem__f_id;
    var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$1);
    var price = this$4.Llivechart_DataItem__f_price;
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$1);
    var count = this$5.Llivechart_DataItem__f_count;
    return new $j_livechart$002e$002dData$002dItem.$c_Llivechart_DataItem(id$1, newLabel$1, price, count);
  }))))])));
  var $x_16 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_14 = $m_Llivechart_LiveChart$package$();
  var this$7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(itemSignal);
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$8) => {
    var _$8$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$8);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$8$1).Llivechart_DataItem__f_price;
  }));
  var $x_13 = $x_16.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_15.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_14.inputForDouble__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Observer__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$7, project$1, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.makeDataItemUpdater__Llivechart_DataItemID__F2__Lcom_raquo_airstream_core_Observer(id, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((item$2, newPrice) => {
    var item$3 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(item$2);
    var newPrice$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uD(newPrice);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$3);
    var this$8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$3);
    var id$2 = this$8.Llivechart_DataItem__f_id;
    var this$9 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$3);
    var label = this$9.Llivechart_DataItem__f_label;
    var this$10 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$3);
    var count$1 = this$10.Llivechart_DataItem__f_count;
    return new $j_livechart$002e$002dData$002dItem.$c_Llivechart_DataItem(id$2, label, newPrice$1, count$1);
  }))))])));
  var $x_12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_11 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_10 = $m_Llivechart_LiveChart$package$();
  var this$12 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(itemSignal);
  var project$2 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$9) => {
    var _$9$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$9);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$9$1).Llivechart_DataItem__f_count;
  }));
  var $x_9 = $x_12.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_11.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_10.inputForInt__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Observer__Lcom_raquo_laminar_nodes_ReactiveHtmlElement(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$12, project$2, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$()), this.makeDataItemUpdater__Llivechart_DataItemID__F2__Lcom_raquo_airstream_core_Observer(id, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((item$3$1, newCount) => {
    var item$4 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(item$3$1);
    var newCount$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uI(newCount);
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$4);
    var this$13 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$4);
    var id$3 = this$13.Llivechart_DataItem__f_id;
    var this$14 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$4);
    var label$1 = this$14.Llivechart_DataItem__f_label;
    var this$15 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$4);
    var price$1 = this$15.Llivechart_DataItem__f_price;
    return new $j_livechart$002e$002dData$002dItem.$c_Llivechart_DataItem(id$3, label$1, price$1, newCount$1);
  }))))])));
  var $x_8 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_7 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
  var this$18 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(itemSignal);
  var project$3 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((item$4$1) => {
    var item$5 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(item$4$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sc_StringOps$().format$extension__T__sci_Seq__T("%.2f", $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ac_O([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$5).fullPrice__D()])));
  }));
  var textSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$18, project$3, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
  var $x_6 = $x_8.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_7.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildTextInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_inserters_DynamicInserter(textSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable)])));
  var $x_5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).td__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).button__Lcom_raquo_laminar_tags_HtmlTag();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var this$20 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var r = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable;
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode(this$20, "\ud83d\uddd1\ufe0f", r);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onClick__Lcom_raquo_laminar_keys_EventProp();
  var this$22 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false));
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$10) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_model).removeDataItem__Llivechart_DataItemID__V(id);
  }));
  return $x_21.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_20.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_17, $x_13, $x_9, $x_6, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_5).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_4.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_3).apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_2.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$22, onNext)])))])))])));
});
$c_Llivechart_Main$.prototype.inputForString__Lcom_raquo_airstream_core_Signal__Lcom_raquo_airstream_core_Observer__Lcom_raquo_laminar_nodes_ReactiveHtmlElement = (function(valueSignal, valueUpdater) {
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).input__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).typ__Lcom_raquo_laminar_keys_HtmlAttr()).$colon$eq__O__Lcom_raquo_laminar_modifiers_KeySetter("text");
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).value__Lcom_raquo_laminar_keys_HtmlProp()).$less$minus$minus__Lcom_raquo_airstream_core_Source__Lcom_raquo_laminar_modifiers_KeyUpdater(valueSignal);
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var eventProp = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).onInput__Lcom_raquo_laminar_keys_EventProp();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_keys_EventProcessor$().empty__Lcom_raquo_laminar_keys_EventProp__Z__Z__Lcom_raquo_laminar_keys_EventProcessor(eventProp, false, false)).mapToValue__Lcom_raquo_laminar_keys_EventProcessor());
  var onNext = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$1) => {
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(valueUpdater).onNext__O__V(_$1);
  }));
  return $x_4.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$x_2, $x_1, new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_laminar_modifiers_EventListener(this$2, onNext)])));
});
$c_Llivechart_Main$.prototype.makeDataItemUpdater__Llivechart_DataItemID__F2__Lcom_raquo_airstream_core_Observer = (function(id, f) {
  var this$4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_model).Llivechart_Model__f_dataVar);
  var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction2_$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2(((data, newValue) => {
    var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(data);
    var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
    var f$1 = ((item) => {
      var item$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(item);
      var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$1).Llivechart_DataItem__f_id;
      if ((x === null)) {
        var $x_1 = (id === null);
      } else {
        var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
        var $x_1 = (this$2 === id);
      }
      if ($x_1) {
        return $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(f).apply__O__O__O(item$1, newValue));
      } else {
        return item$1;
      }
    });
    if ((this$3 === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
      return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$();
    } else {
      var x0 = this$3.head__O();
      var h = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(this$3.tail__O());
      while ((rest !== $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$())) {
        var x0$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).head__O();
        var nx = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sci_$colon$colon(f$1(x0$1), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$());
        $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(rest).tail__O());
      }
      return h;
    }
  }));
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__updater__F2__Lcom_raquo_airstream_core_Observer(this$4, mod);
});
$c_Llivechart_Main$.prototype.renderDataList__Lcom_raquo_laminar_nodes_ReactiveElement = (function() {
  var $x_4 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).ul__Lcom_raquo_laminar_tags_HtmlTag());
  var $x_3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L);
  var signal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Main$__f_model).Llivechart_Model__f_dataSignal;
  var key = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((_$11) => {
    var _$11$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$11);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$11$1).Llivechart_DataItem__f_id;
  }));
  var distinctCompose = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_split_SplittableSignal$().split$default$2$extension__Lcom_raquo_airstream_core_Signal__F1(signal);
  var duplicateKeys = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_split_DuplicateKeysConfig$().Lcom_raquo_airstream_split_DuplicateKeysConfig$__f_default;
  var project$1 = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction3_$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491(((id, initial, itemSignal) => {
    $j_livechart$002e$002dData$002dItem$002dI$002dD.$as_Llivechart_DataItemID(id);
    $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(initial);
    var itemSignal$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_Lcom_raquo_airstream_core_Signal(itemSignal);
    var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).li__Lcom_raquo_laminar_tags_HtmlTag());
    var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
    $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_child);
    var this$5 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(itemSignal$1);
    var project = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((item) => {
      var item$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(item);
      return (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$1).Llivechart_DataItem__f_count + " ") + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(item$1).Llivechart_DataItem__f_label);
    }));
    var textSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_misc_MapSignal(this$5, project, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_None$());
    return $x_2.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildTextInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_inserters_DynamicInserter(textSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableText$().Lcom_raquo_laminar_modifiers_RenderableText$__f_stringRenderable)])));
  }));
  var splittable = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_airstream_split_Splittable$ListSplittable$();
  var childrenSource = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_Lcom_raquo_airstream_split_SplitSignal(signal, key, distinctCompose, project$1, splittable, duplicateKeys);
  return $x_4.apply__sci_Seq__Lcom_raquo_laminar_nodes_ReactiveHtmlElement($x_3.wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$d_Lcom_raquo_laminar_modifiers_Modifier.getArrayOf().constr)([$j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_inserters_ChildrenInserter$().apply__Lcom_raquo_airstream_core_Observable__Lcom_raquo_laminar_modifiers_RenderableSeq__Lcom_raquo_laminar_modifiers_RenderableNode__O__Lcom_raquo_laminar_inserters_DynamicInserter(childrenSource, $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_modifiers_RenderableNode$().Lcom_raquo_laminar_modifiers_RenderableNode$__f_nodeRenderable, (void 0))])));
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
//# sourceMappingURL=livechart.-Live-Chart$package$.js.map
