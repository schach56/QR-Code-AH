package typings.chartJs.mod

import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait MajorTickOptions
  extends StObject
     with NestedTickOptions {
  
  var enabled: js.UndefOr[Boolean] = js.undefined
}
object MajorTickOptions {
  
  inline def apply(): MajorTickOptions = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[MajorTickOptions]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: MajorTickOptions] (val x: Self) extends AnyVal {
    
    inline def setEnabled(value: Boolean): Self = StObject.set(x, "enabled", value.asInstanceOf[js.Any])
    
    inline def setEnabledUndefined: Self = StObject.set(x, "enabled", js.undefined)
  }
}
