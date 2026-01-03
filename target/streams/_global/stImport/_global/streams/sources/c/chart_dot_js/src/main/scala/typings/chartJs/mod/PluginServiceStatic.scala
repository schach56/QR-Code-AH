package typings.chartJs.mod

import typings.chartJs.chartJsStrings.afterDatasetDraw
import typings.chartJs.chartJsStrings.afterDatasetUpdate
import typings.chartJs.chartJsStrings.afterDatasetsDraw
import typings.chartJs.chartJsStrings.afterDatasetsUpdate
import typings.chartJs.chartJsStrings.afterDraw
import typings.chartJs.chartJsStrings.afterEvent
import typings.chartJs.chartJsStrings.afterInit
import typings.chartJs.chartJsStrings.afterLayout
import typings.chartJs.chartJsStrings.afterRender
import typings.chartJs.chartJsStrings.afterScaleUpdate
import typings.chartJs.chartJsStrings.afterTooltipDraw
import typings.chartJs.chartJsStrings.afterUpdate
import typings.chartJs.chartJsStrings.beforeDatasetDraw
import typings.chartJs.chartJsStrings.beforeDatasetUpdate
import typings.chartJs.chartJsStrings.beforeDatasetsDraw
import typings.chartJs.chartJsStrings.beforeDatasetsUpdate
import typings.chartJs.chartJsStrings.beforeDraw
import typings.chartJs.chartJsStrings.beforeEvent
import typings.chartJs.chartJsStrings.beforeInit
import typings.chartJs.chartJsStrings.beforeLayout
import typings.chartJs.chartJsStrings.beforeRender
import typings.chartJs.chartJsStrings.beforeTooltipDraw
import typings.chartJs.chartJsStrings.beforeUpdate
import typings.chartJs.chartJsStrings.destroy
import typings.chartJs.chartJsStrings.resize
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait PluginServiceStatic extends StObject {
  
  def clear(): Unit
  
  def count(): Double
  
  def descriptors(chart: Chart): js.Array[PluginDescriptor]
  
  def getAll(): js.Array[typings.std.Plugin]
  
  def notify(
    chart: Chart,
    hook: beforeInit | afterInit | beforeUpdate | afterUpdate | beforeLayout | afterLayout | beforeDatasetsUpdate | afterDatasetsUpdate | beforeDatasetUpdate | afterDatasetUpdate | beforeRender | afterRender | beforeDraw | afterDraw | beforeDatasetsDraw | afterDatasetsDraw | beforeDatasetDraw | afterDatasetDraw | beforeTooltipDraw | afterTooltipDraw | beforeEvent | afterEvent | resize | destroy | afterScaleUpdate,
    args: Any
  ): Boolean
  
  def register(plugin: typings.std.Plugin): Unit
  
  def unregister(plugin: typings.std.Plugin): Unit
}
object PluginServiceStatic {
  
  inline def apply(
    clear: () => Unit,
    count: () => Double,
    descriptors: Chart => js.Array[PluginDescriptor],
    getAll: () => js.Array[typings.std.Plugin],
    notify_ : (Chart, beforeInit | afterInit | beforeUpdate | afterUpdate | beforeLayout | afterLayout | beforeDatasetsUpdate | afterDatasetsUpdate | beforeDatasetUpdate | afterDatasetUpdate | beforeRender | afterRender | beforeDraw | afterDraw | beforeDatasetsDraw | afterDatasetsDraw | beforeDatasetDraw | afterDatasetDraw | beforeTooltipDraw | afterTooltipDraw | beforeEvent | afterEvent | resize | destroy | afterScaleUpdate, Any) => Boolean,
    register: typings.std.Plugin => Unit,
    unregister: typings.std.Plugin => Unit
  ): PluginServiceStatic = {
    val __obj = js.Dynamic.literal(clear = js.Any.fromFunction0(clear), count = js.Any.fromFunction0(count), descriptors = js.Any.fromFunction1(descriptors), getAll = js.Any.fromFunction0(getAll), register = js.Any.fromFunction1(register), unregister = js.Any.fromFunction1(unregister))
    __obj.updateDynamic("notify")(js.Any.fromFunction3(notify_))
    __obj.asInstanceOf[PluginServiceStatic]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: PluginServiceStatic] (val x: Self) extends AnyVal {
    
    inline def setClear(value: () => Unit): Self = StObject.set(x, "clear", js.Any.fromFunction0(value))
    
    inline def setCount(value: () => Double): Self = StObject.set(x, "count", js.Any.fromFunction0(value))
    
    inline def setDescriptors(value: Chart => js.Array[PluginDescriptor]): Self = StObject.set(x, "descriptors", js.Any.fromFunction1(value))
    
    inline def setGetAll(value: () => js.Array[typings.std.Plugin]): Self = StObject.set(x, "getAll", js.Any.fromFunction0(value))
    
    inline def setNotify_(
      value: (Chart, beforeInit | afterInit | beforeUpdate | afterUpdate | beforeLayout | afterLayout | beforeDatasetsUpdate | afterDatasetsUpdate | beforeDatasetUpdate | afterDatasetUpdate | beforeRender | afterRender | beforeDraw | afterDraw | beforeDatasetsDraw | afterDatasetsDraw | beforeDatasetDraw | afterDatasetDraw | beforeTooltipDraw | afterTooltipDraw | beforeEvent | afterEvent | resize | destroy | afterScaleUpdate, Any) => Boolean
    ): Self = StObject.set(x, "notify", js.Any.fromFunction3(value))
    
    inline def setRegister(value: typings.std.Plugin => Unit): Self = StObject.set(x, "register", js.Any.fromFunction1(value))
    
    inline def setUnregister(value: typings.std.Plugin => Unit): Self = StObject.set(x, "unregister", js.Any.fromFunction1(value))
  }
}
