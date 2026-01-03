package typings.std

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait OffscreenCanvasEventMap extends StObject {
  
  /* standard dom */
  var contextlost: org.scalajs.dom.Event
  
  /* standard dom */
  var contextrestored: org.scalajs.dom.Event
}
object OffscreenCanvasEventMap {
  
  inline def apply(contextlost: org.scalajs.dom.Event, contextrestored: org.scalajs.dom.Event): OffscreenCanvasEventMap = {
    val __obj = js.Dynamic.literal(contextlost = contextlost.asInstanceOf[js.Any], contextrestored = contextrestored.asInstanceOf[js.Any])
    __obj.asInstanceOf[OffscreenCanvasEventMap]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: OffscreenCanvasEventMap] (val x: Self) extends AnyVal {
    
    inline def setContextlost(value: org.scalajs.dom.Event): Self = StObject.set(x, "contextlost", value.asInstanceOf[js.Any])
    
    inline def setContextrestored(value: org.scalajs.dom.Event): Self = StObject.set(x, "contextrestored", value.asInstanceOf[js.Any])
  }
}
