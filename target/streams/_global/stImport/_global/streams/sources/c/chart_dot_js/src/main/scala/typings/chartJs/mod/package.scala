package typings.chartJs.mod

import org.scalablytyped.runtime.StringDictionary
import org.scalajs.dom.CanvasGradient
import org.scalajs.dom.CanvasPattern
import typings.chartJs.anon.keyinPositionTypenumber
import org.scalablytyped.runtime.StObject
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSGlobalScope, JSGlobal, JSImport, JSName, JSBracketAccess}


// Tooltip Static Options
/* static member */
inline def Tooltip: ChartTooltipsStaticConfiguration = ^.asInstanceOf[js.Dynamic].selectDynamic("Tooltip").asInstanceOf[ChartTooltipsStaticConfiguration]
inline def Tooltip_=(x: ChartTooltipsStaticConfiguration): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("Tooltip")(x.asInstanceOf[js.Any])

/* static member */
inline def pluginService: PluginServiceStatic = ^.asInstanceOf[js.Dynamic].selectDynamic("pluginService").asInstanceOf[PluginServiceStatic]
inline def pluginService_=(x: PluginServiceStatic): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("pluginService")(x.asInstanceOf[js.Any])

/* static member */
inline def plugins: PluginServiceStatic = ^.asInstanceOf[js.Dynamic].selectDynamic("plugins").asInstanceOf[PluginServiceStatic]
inline def plugins_=(x: PluginServiceStatic): Unit = ^.asInstanceOf[js.Dynamic].updateDynamic("plugins")(x.asInstanceOf[js.Any])

type BorderWidth = Double | keyinPositionTypenumber

type ChartColor = String | CanvasGradient | CanvasPattern | js.Array[String]

// NOTE: declare plugin options as interface instead of inline '{ [plugin: string]: any }'
// to allow module augmentation in case some plugins want to strictly type their options.
type ChartPluginsOptions = StringDictionary[Any]

type ChartTooltipPositioner = js.Function2[/* elements */ js.Array[Any], /* eventPosition */ Point, Point]

// tslint:disable-next-line no-empty-interface
type ChartYAxe = CommonAxe

// tslint:disable-next-line no-empty-interface
type LogarithmicTickOptions = TickOptions

type Scriptable[T] = js.Function1[/* ctx */ typings.chartJs.anon.Chart, T]
