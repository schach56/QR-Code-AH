'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dData$002dItem from "./livechart.-Data-Item.js";
import * as $j_livechart$002e$002dData$002dItem$002dI$002dD from "./livechart.-Data-Item-I-D.js";
/** @constructor */
function $c_Llivechart_Model() {
  this.Llivechart_Model__f_dataVar = null;
  this.Llivechart_Model__f_dataSignal = null;
  var $x_2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_Lcom_raquo_laminar_api_package$().Lcom_raquo_laminar_api_package$__f_L).Lcom_raquo_laminar_api_package$$anon$1__f_Var;
  var $x_1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$();
  var id = new $j_livechart$002e$002dData$002dItem$002dI$002dD.$c_Llivechart_DataItemID();
  var elems = $x_1.wrapRefArray__AO__sci_ArraySeq(new ($j_livechart$002e$002dData$002dItem.$d_Llivechart_DataItem.getArrayOf().constr)([new $j_livechart$002e$002dData$002dItem.$c_Llivechart_DataItem(id, "one", 1.0, 1)]));
  this.Llivechart_Model__f_dataVar = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n($x_2).apply__O__Lcom_raquo_airstream_state_Var($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems));
  this.Llivechart_Model__f_dataSignal = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Model__f_dataVar).Lcom_raquo_airstream_state_SourceVar__f_signal;
}
export { $c_Llivechart_Model as $c_Llivechart_Model };
$c_Llivechart_Model.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Model.prototype.constructor = $c_Llivechart_Model;
/** @constructor */
function $h_Llivechart_Model() {
}
export { $h_Llivechart_Model as $h_Llivechart_Model };
$h_Llivechart_Model.prototype = $c_Llivechart_Model.prototype;
$c_Llivechart_Model.prototype.addDataItem__Llivechart_DataItem__V = (function(item) {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Model__f_dataVar);
  var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
    var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(data);
    var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
    return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$1, item));
  }));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$2, mod);
});
$c_Llivechart_Model.prototype.removeDataItem__Llivechart_DataItemID__V = (function(id) {
  var this$3 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this.Llivechart_Model__f_dataVar);
  var mod = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_sjsr_AnonFunction1_$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab(((data) => {
    var data$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$as_sci_List(data);
    var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(data$1);
    var f = ((_$1) => {
      var _$1$1 = $j_livechart$002e$002dData$002dItem.$as_Llivechart_DataItem(_$1);
      var x = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(_$1$1).Llivechart_DataItem__f_id;
      if ((x === null)) {
        var $x_1 = (id === null);
      } else {
        var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x);
        var $x_1 = (this$1 === id);
      }
      return (!$x_1);
    });
    var l = this$2;
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
              var x$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(remaining).head__O();
              if (($j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$uZ(f(x$1)) !== false)) {
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
    return result;
  }));
  $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$f_Lcom_raquo_airstream_state_Var__update__F1__V(this$3, mod);
});
var $d_Llivechart_Model = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Model, "livechart.Model", ({
  Llivechart_Model: 1
}));
export { $d_Llivechart_Model as $d_Llivechart_Model };
//# sourceMappingURL=livechart.-Model.js.map
