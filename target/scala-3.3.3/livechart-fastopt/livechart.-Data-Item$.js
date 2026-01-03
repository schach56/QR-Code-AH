'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
import * as $j_livechart$002e$002dData$002dItem from "./livechart.-Data-Item.js";
import * as $j_livechart$002e$002dData$002dItem$002dI$002dD from "./livechart.-Data-Item-I-D.js";
/** @constructor */
function $c_Llivechart_DataItem$() {
}
export { $c_Llivechart_DataItem$ as $c_Llivechart_DataItem$ };
$c_Llivechart_DataItem$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_DataItem$.prototype.constructor = $c_Llivechart_DataItem$;
/** @constructor */
function $h_Llivechart_DataItem$() {
}
export { $h_Llivechart_DataItem$ as $h_Llivechart_DataItem$ };
$h_Llivechart_DataItem$.prototype = $c_Llivechart_DataItem$.prototype;
$c_Llivechart_DataItem$.prototype.apply__Llivechart_DataItem = (function() {
  var id = new $j_livechart$002e$002dData$002dItem$002dI$002dD.$c_Llivechart_DataItemID();
  var this$1 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_Random$();
  var price = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$1.s_util_Random__f_self).nextDouble__D();
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_Random$();
  var count = ((1 + $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(this$2.s_util_Random__f_self).nextInt__I__I(5)) | 0);
  return new $j_livechart$002e$002dData$002dItem.$c_Llivechart_DataItem(id, "?", price, count);
});
var $d_Llivechart_DataItem$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_DataItem$, "livechart.DataItem$", ({
  Llivechart_DataItem$: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
}));
export { $d_Llivechart_DataItem$ as $d_Llivechart_DataItem$ };
var $n_Llivechart_DataItem$;
function $m_Llivechart_DataItem$() {
  if ((!$n_Llivechart_DataItem$)) {
    $n_Llivechart_DataItem$ = new $c_Llivechart_DataItem$();
  }
  return $n_Llivechart_DataItem$;
}
export { $m_Llivechart_DataItem$ as $m_Llivechart_DataItem$ };
//# sourceMappingURL=livechart.-Data-Item$.js.map
