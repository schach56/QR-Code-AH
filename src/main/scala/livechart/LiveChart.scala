package livechart

import scala.scalajs.js
import scala.scalajs.js.annotation.*
import org.scalajs.dom
import org.scalajs.dom.document
import org.scalajs.dom.html.Div
import com.raquo.laminar.api.L.{*, given}

// import javascriptLogo from "/javascript.svg"
@js.native @JSImport("/javascript.svg", JSImport.Default)
val javascriptLogo: String = js.native

@main
def LiveChart(): Unit =
  // inject stylesheet for pixel area (served from resources root)
  try
    val link = dom.document.createElement("link").asInstanceOf[org.scalajs.dom.html.Link]
    link.rel = "stylesheet"
    link.href = "/style.css"
    dom.document.head.appendChild(link)
  catch
    case _: Throwable => ()

  renderOnDomContentLoaded(
    dom.document.getElementById("app"),
    Main.appElement()
  )

  //setupCounter(dom.document.getElementById("counter"))
//end LiveChart

object Main:
  // simple model-less Main for demoing the SimpleTextEditor
  val pixelGridVar: Var[Vector[Boolean]] = Var(Vector.fill(16)(false))
  // QR data for maskierung
  val qrDataVar: Var[String] = Var("Hier stehen die QR Daten")
  val currentHashVar: Var[String] = Var(dom.window.location.hash)
  try dom.window.addEventListener("hashchange", (_: dom.Event) => currentHashVar.set(dom.window.location.hash)) catch { case _: Throwable => () }

  def appElement(): Element =
    div(
      renderMenu(),
      // render content depending on URL hash
      child <-- currentHashVar.signal.map { h =>
        val hash = if h == null then "" else h
        if hash == "#nachricht" then
          div(
            h1("Nachrichten schreiben"),
            styleAttr := "display: flex; flex-direction: column; align-items: center; margin-left: 20px; gap: 1rem;",
              renderPixelArea(8, 1, "11110000")
          )
        else if hash == "#maskierung" then  
          div(
            h1("Maskierung"),
            renderMaskierung()
          )
        else if hash == "#fehlerkorrektur" then  
          div(
            h1("Fehlerkorrektur"),

          )
        else if hash == "#anwendung" then  
          div(
            h1("Anwendung"),
          )
        else
          div(
            h1("QR Code"),
            // left column with pixel area and exercise stacked
            div(
              
              renderExercise("Schreibe einen kurzen Text, über deine Vorkentnisse zu QR Codes.", Set("qr"), Some(1)),
              renderExerciseMC(
                "Welche Aussage trifft zu QR-Codes?",
                List(
                  ("Sie speichern Text und URLs", true),
                  ("Sie sind immer fehlerfrei lesbar", false),
                  ("Sie funktionieren nur offline", false)
                ),
                Some(2)
              ),
            ),
          )
      }
    )
  end appElement

  def renderPixelArea(cols: Int, rows: Int, correctPattern: String): Element =
    val total = cols * rows
    val pixelGrid: Var[Vector[Boolean]] = Var(Vector.fill(total)(false))
    val lastCheckVar: Var[Option[Boolean]] = Var(None)

    // parse provided pattern once (expected to be provided by caller)
    val parsedPattern: Vector[Boolean] =
      val s = correctPattern.filter(c => c == '0' || c == '1')
      val normalized =
        if s.length == total then s
        else if s.length < total then s.padTo(total, '0')
        else s.take(total)
      normalized.toCharArray.map(_ == '1').toVector

    // indices of pixels that are required to be ON
    val requiredIndices: Vector[Int] = parsedPattern.zipWithIndex.collect { case (true, i) => i }

    div(
      h2(s"Pixel Area"),
      div(
        styleAttr := s"display: grid; grid-template-columns: repeat(${cols}, 28px); grid-auto-rows: 28px; gap: 0px; justify-content: center;",
        children <-- pixelGrid.signal.map { grid =>
          grid.zipWithIndex.map { case (isOn, idx) =>
              div(
                styleAttr := "width:28px; height:28px; box-sizing:border-box;",
                className := (if isOn then "pixel on" else "pixel"),
                onClick --> (_ => pixelGrid.update(g => g.updated(idx, !g(idx))))
              )
          }
        }
      ),
      div(
      styleAttr := "margin-top: 0.5rem; align-self: center;",
      button(
          "Abgeben",
          onClick.map(_ => pixelGrid.now())
            .map { current =>
              if requiredIndices.isEmpty then
                current == parsedPattern
              else
                requiredIndices.forall(idx => current(idx))
            }
            .map(ok => Some(ok)) --> lastCheckVar.writer,
          styleAttr <-- lastCheckVar.signal.map {
            case Some(true)  => "background-color: green"
            case Some(false) => "background-color: red"
            case None        => ""
          }
        )
      )
    )
  end renderPixelArea

  def renderMenu(): Element =
    val options = List(
      ("#einfuehrung", "Einführung"),
      ("#nachricht", "Nachrichten schreiben"),
      ("#maskierung", "Maskierung"),
      ("#fehlerkorrektur", "Fehlerkorrektur"),
      ("#anwendung", "Anwendung")
    )

    div(
      div(
        // simple anchor links
        a(href := "#einfuehrung", "Einführung"), span(" | "),
        a(href := "#nachricht", "Nachrichten schreiben"), span(" | "),
        a(href := "#maskierung", "Maskierung"), span(" | "),
        a(href := "#fehlerkorrektur", "Fehlerkorrektur"), span(" | "),
        a(href := "#anwendung", "Anwendung")
      ),
      // selection dropdown that changes location.hash on change
      select(
        onChange --> { ev =>
          val v = ev.target.asInstanceOf[org.scalajs.dom.html.Select].value
          dom.window.location.hash = v
        },
        children <-- Signal.fromValue(options).map(_.map { case (v, lbl) =>
          option(value := v, lbl)
        })
      )
    )
  end renderMenu

  def renderMaskierung(): Element =
    val qrSrcVar: Var[String] = Var(s"https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=${scala.scalajs.js.URIUtils.encodeURIComponent(qrDataVar.now())}")

    div(
      cls := "maskierung-section",
      div(
        label("QR Daten: "),
        input(
          typ := "text",
          value <-- qrDataVar.signal,
          onInput.mapToValue --> qrDataVar.writer,
        ),
        button("Generiere QR", onClick --> { _ =>
          val url = s"https://api.qrserver.com/v1/create-qr-code/?size=420x420&data=${scala.scalajs.js.URIUtils.encodeURIComponent(qrDataVar.now())}"
          qrSrcVar.set(url)
        })
      ),
      // show QR image (scanbar)
      img(src <-- qrSrcVar.signal, alt := "QR Code", width := "210", height := "210")
    )
  end renderMaskierung

  def renderExercise(taskText: String, keywords: Set[String], index: Option[Int] = None): Element =
    val textVar = Var("")
    val editor = SimpleTextEditor(textVar)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)

    // exercise content only (menu is shown at the top now)
    div(
      className := "exercise-content",
      h2(index.map(i => s"Aufgabe $i").getOrElse("Aufgabe")),
      p(taskText),
      editor.getDomElement(),
      button(
        "Abgeben",
        onClick.map(_ => textVar.now())
          .map(text => keywords.exists(k => text.toLowerCase.contains(k.toLowerCase)))
          .map(ok => Some(ok)) --> lastCheckVar.writer,
        styleAttr <-- lastCheckVar.signal.map {
          case Some(true)  => "background-color: green"
          case Some(false) => "background-color: red"
          case None        => ""
        }
      )
    )
  end renderExercise
  def renderExerciseMC(taskText: String, choices: List[(String, Boolean)], index: Option[Int] = None): Element =
    val selectedVar: Var[Option[Int]] = Var(None)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)

    div(
      className := "exercise-content",
      h2(index.map(i => s"Aufgabe $i").getOrElse("Aufgabe")),
      p(taskText),
      div(
        children <-- Signal.fromValue(choices).map(_.zipWithIndex.map { case ((label, _), idx) =>
          div(
            input(
              typ := "radio",
              onChange --> (_ => selectedVar.set(Some(idx))),
              checked <-- selectedVar.signal.map(_.contains(idx))
            ),
            span(" " + label)
          )
        })
      ),
      button(
        "Abgeben",
        onClick.map(_ => selectedVar.now())
          .map {
            case Some(idx) if idx >= 0 && idx < choices.length => choices(idx)._2
            case _ => false
          }
          .map(ok => Some(ok)) --> lastCheckVar.writer,
        styleAttr <-- lastCheckVar.signal.map {
          case Some(true)  => "background-color: green"
          case Some(false) => "background-color: red"
          case None        => ""
        }
      )
    )
  end renderExerciseMC

  def counterButton(): Element =
    val counter = Var(0)
    button(
      tpe := "button",
      "Aufgabe abgeben ",
      child.text <-- counter,
      onClick --> { _ => counter.update(c => c + 1) },
    )
  end counterButton
end Main

// Standalone SimpleTextEditor using Var[String]
case class SimpleTextEditor(stateToBind: Var[String]) {
  private val editorTextArea = textArea(
    rows := 8,
    cols := 80,
    controlled(
      value <-- stateToBind.signal,
      onInput.mapToValue --> stateToBind.writer
    )
  )

  private val domElement: Element =
    div(
      cls := "simple-text-editor",
      editorTextArea
    )

  def getDomElement(): Element = domElement
}