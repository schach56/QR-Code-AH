'use strict';
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
/** @constructor */
function $c_Llivechart_Main$LlmEndpointConfig(endpoint, apiKey, provider, model) {
  this.Llivechart_Main$LlmEndpointConfig__f_endpoint = null;
  this.Llivechart_Main$LlmEndpointConfig__f_apiKey = null;
  this.Llivechart_Main$LlmEndpointConfig__f_provider = null;
  this.Llivechart_Main$LlmEndpointConfig__f_model = null;
  this.Llivechart_Main$LlmEndpointConfig__f_endpoint = endpoint;
  this.Llivechart_Main$LlmEndpointConfig__f_apiKey = apiKey;
  this.Llivechart_Main$LlmEndpointConfig__f_provider = provider;
  this.Llivechart_Main$LlmEndpointConfig__f_model = model;
}
export { $c_Llivechart_Main$LlmEndpointConfig as $c_Llivechart_Main$LlmEndpointConfig };
$c_Llivechart_Main$LlmEndpointConfig.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$c_Llivechart_Main$LlmEndpointConfig.prototype.constructor = $c_Llivechart_Main$LlmEndpointConfig;
/** @constructor */
function $h_Llivechart_Main$LlmEndpointConfig() {
}
export { $h_Llivechart_Main$LlmEndpointConfig as $h_Llivechart_Main$LlmEndpointConfig };
$h_Llivechart_Main$LlmEndpointConfig.prototype = $c_Llivechart_Main$LlmEndpointConfig.prototype;
$c_Llivechart_Main$LlmEndpointConfig.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_s_Product$$anon$1(this);
});
$c_Llivechart_Main$LlmEndpointConfig.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Llivechart_Main$LlmEndpointConfig.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Llivechart_Main$LlmEndpointConfig)) {
    var x$0$2 = $as_Llivechart_Main$LlmEndpointConfig(x$0);
    if ((this.Llivechart_Main$LlmEndpointConfig__f_endpoint === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmEndpointConfig__f_endpoint)) {
      var x = this.Llivechart_Main$LlmEndpointConfig__f_apiKey;
      var x$2 = $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmEndpointConfig__f_apiKey;
      var $x_1 = ((x === null) ? (x$2 === null) : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x).equals__O__Z(x$2));
    } else {
      var $x_1 = false;
    }
    if ((($x_1 && (this.Llivechart_Main$LlmEndpointConfig__f_provider === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmEndpointConfig__f_provider)) && (this.Llivechart_Main$LlmEndpointConfig__f_model === $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2).Llivechart_Main$LlmEndpointConfig__f_model))) {
      $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Llivechart_Main$LlmEndpointConfig.prototype.toString__T = (function() {
  return $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Llivechart_Main$LlmEndpointConfig.prototype.productArity__I = (function() {
  return 4;
});
$c_Llivechart_Main$LlmEndpointConfig.prototype.productPrefix__T = (function() {
  return "LlmEndpointConfig";
});
$c_Llivechart_Main$LlmEndpointConfig.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llivechart_Main$LlmEndpointConfig__f_endpoint;
      break;
    }
    case 1: {
      return this.Llivechart_Main$LlmEndpointConfig__f_apiKey;
      break;
    }
    case 2: {
      return this.Llivechart_Main$LlmEndpointConfig__f_provider;
      break;
    }
    case 3: {
      return this.Llivechart_Main$LlmEndpointConfig__f_model;
      break;
    }
    default: {
      throw $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Llivechart_Main$LlmEndpointConfig(obj) {
  return (((obj instanceof $c_Llivechart_Main$LlmEndpointConfig) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwClassCastException(obj, "livechart.Main$LlmEndpointConfig"));
}
export { $as_Llivechart_Main$LlmEndpointConfig as $as_Llivechart_Main$LlmEndpointConfig };
function $isArrayOf_Llivechart_Main$LlmEndpointConfig(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llivechart_Main$LlmEndpointConfig)));
}
export { $isArrayOf_Llivechart_Main$LlmEndpointConfig as $isArrayOf_Llivechart_Main$LlmEndpointConfig };
function $asArrayOf_Llivechart_Main$LlmEndpointConfig(obj, depth) {
  return (($isArrayOf_Llivechart_Main$LlmEndpointConfig(obj, depth) || (obj === null)) ? obj : $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$throwArrayCastException(obj, "Llivechart.Main$LlmEndpointConfig;", depth));
}
export { $asArrayOf_Llivechart_Main$LlmEndpointConfig as $asArrayOf_Llivechart_Main$LlmEndpointConfig };
var $d_Llivechart_Main$LlmEndpointConfig = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().initClass($c_Llivechart_Main$LlmEndpointConfig, "livechart.Main$LlmEndpointConfig", ({
  Llivechart_Main$LlmEndpointConfig: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
export { $d_Llivechart_Main$LlmEndpointConfig as $d_Llivechart_Main$LlmEndpointConfig };
//# sourceMappingURL=livechart.-Main$-Llm-Endpoint-Config.js.map
