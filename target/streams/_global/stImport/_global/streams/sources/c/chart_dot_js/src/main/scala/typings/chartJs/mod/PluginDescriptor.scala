package typings.chartJs.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait PluginDescriptor extends StObject {
  
  var options: ChartPluginsOptions
  
  var plugin: typings.std.Plugin
}
object PluginDescriptor {
  
  inline def apply(options: ChartPluginsOptions, plugin: typings.std.Plugin): PluginDescriptor = {
    val __obj = js.Dynamic.literal(options = options.asInstanceOf[js.Any], plugin = plugin.asInstanceOf[js.Any])
    __obj.asInstanceOf[PluginDescriptor]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: PluginDescriptor] (val x: Self) extends AnyVal {
    
    inline def setOptions(value: ChartPluginsOptions): Self = StObject.set(x, "options", value.asInstanceOf[js.Any])
    
    inline def setPlugin(value: typings.std.Plugin): Self = StObject.set(x, "plugin", value.asInstanceOf[js.Any])
  }
}
