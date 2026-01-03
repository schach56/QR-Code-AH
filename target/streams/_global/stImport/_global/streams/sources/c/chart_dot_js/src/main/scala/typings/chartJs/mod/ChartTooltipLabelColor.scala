package typings.chartJs.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ChartTooltipLabelColor extends StObject {
  
  var backgroundColor: ChartColor
  
  var borderColor: ChartColor
}
object ChartTooltipLabelColor {
  
  inline def apply(backgroundColor: ChartColor, borderColor: ChartColor): ChartTooltipLabelColor = {
    val __obj = js.Dynamic.literal(backgroundColor = backgroundColor.asInstanceOf[js.Any], borderColor = borderColor.asInstanceOf[js.Any])
    __obj.asInstanceOf[ChartTooltipLabelColor]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ChartTooltipLabelColor] (val x: Self) extends AnyVal {
    
    inline def setBackgroundColor(value: ChartColor): Self = StObject.set(x, "backgroundColor", value.asInstanceOf[js.Any])
    
    inline def setBackgroundColorVarargs(value: String*): Self = StObject.set(x, "backgroundColor", js.Array(value*))
    
    inline def setBorderColor(value: ChartColor): Self = StObject.set(x, "borderColor", value.asInstanceOf[js.Any])
    
    inline def setBorderColorVarargs(value: String*): Self = StObject.set(x, "borderColor", js.Array(value*))
  }
}
