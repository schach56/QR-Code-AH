package typings.chartJs.mod

import typings.moment.mod.Moment
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}

trait ChartData extends StObject {
  
  var datasets: js.UndefOr[js.Array[ChartDataSets]] = js.undefined
  
  var labels: js.UndefOr[
    js.Array[
      String | (js.Array[js.Date | Double | Moment | String]) | Double | js.Date | Moment
    ]
  ] = js.undefined
}
object ChartData {
  
  inline def apply(): ChartData = {
    val __obj = js.Dynamic.literal()
    __obj.asInstanceOf[ChartData]
  }
  
  @scala.inline
  implicit open class MutableBuilder[Self <: ChartData] (val x: Self) extends AnyVal {
    
    inline def setDatasets(value: js.Array[ChartDataSets]): Self = StObject.set(x, "datasets", value.asInstanceOf[js.Any])
    
    inline def setDatasetsUndefined: Self = StObject.set(x, "datasets", js.undefined)
    
    inline def setDatasetsVarargs(value: ChartDataSets*): Self = StObject.set(x, "datasets", js.Array(value*))
    
    inline def setLabels(
      value: js.Array[
          String | (js.Array[js.Date | Double | Moment | String]) | Double | js.Date | Moment
        ]
    ): Self = StObject.set(x, "labels", value.asInstanceOf[js.Any])
    
    inline def setLabelsUndefined: Self = StObject.set(x, "labels", js.undefined)
    
    inline def setLabelsVarargs(value: (String | (js.Array[js.Date | Double | Moment | String]) | Double | js.Date | Moment)*): Self = StObject.set(x, "labels", js.Array(value*))
  }
}
