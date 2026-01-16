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

  // Global storage for responses and ratings
  case class ChapterData(
    chapter: String,
    exercises: List[ExerciseResponse],
    rating: RatingData
  )

  case class ExerciseResponse(
    task: String,
    answer: Option[String]
  )

  case class RatingData(
    understanding: Int,
    difficulty: Int,
    quality: Int,
    scope: Int,
    feedback: String
  )

  // Define all exercises per chapter
  val chapterExercises = Map(
    "einfuehrung" -> List(
      "Scanne die QR Codes und beschreibe deren Inhalte. Beschreibe zusätzlich, die Gemeinsamkeiten.",
      "Welche Aussage trifft zu QR-Codes?",
      "Beschreibe, welche Vorstellungen du hast, wie QR Codes funktionieren."
    ),
    "nachricht" -> List(),
    "maskierung" -> List(),
    "fehlerkorrektur" -> List(),
    "anwendung" -> List(),
    "zusammenfassung" -> List()
  )

  val allResponsesVar: Var[Map[String, ChapterData]] = Var(Map())

  // Function to ensure all chapter exercises are included (even empty ones)
  def ensureAllExercises(chapter: String, data: ChapterData): ChapterData =
    val allExercisesForChapter = chapterExercises.getOrElse(chapter, List())
    val answeredTasks = data.exercises.map(_.task).toSet
    val missingExercises: List[ExerciseResponse] = allExercisesForChapter.filterNot(answeredTasks.contains).map(task => ExerciseResponse(task, None))
    val allExercises: List[ExerciseResponse] = data.exercises ++ missingExercises
    data.copy(exercises = allExercises)

  // LocalStorage helper functions
  def saveToLocalStorage(chapter: String, data: ChapterData): Unit =
    try
      val completeData = ensureAllExercises(chapter, data)
      val json = scala.scalajs.js.JSON.stringify(
        scala.scalajs.js.Dynamic.literal(
          exercises = scala.scalajs.js.Array(
            completeData.exercises.map { ex =>
              scala.scalajs.js.Dynamic.literal(
                task = ex.task,
                answer = ex.answer.orNull
              )
            }: _*
          ),
          rating = scala.scalajs.js.Dynamic.literal(
            understanding = completeData.rating.understanding,
            difficulty = completeData.rating.difficulty,
            quality = completeData.rating.quality,
            scope = completeData.rating.scope,
            feedback = completeData.rating.feedback
          )
        )
      )
      dom.window.localStorage.setItem(s"qr-chapter-$chapter", json)
    catch
      case _: Throwable => ()

  def loadFromLocalStorage(chapter: String): Option[ChapterData] =
    try
      val stored = dom.window.localStorage.getItem(s"qr-chapter-$chapter")
      if stored != null then
        val parsed = scala.scalajs.js.JSON.parse(stored)
        val exercises = scala.scalajs.js.Array.isArray(parsed.exercises).asInstanceOf[Boolean] match
          case true =>
            parsed.exercises.asInstanceOf[scala.scalajs.js.Array[scala.scalajs.js.Any]].toList.map { ex =>
              val answerValue = ex.asInstanceOf[scala.scalajs.js.Dynamic].answer
              val answer = if answerValue == null || answerValue.toString == "null" then None else Some(answerValue.toString)
              ExerciseResponse(
                ex.asInstanceOf[scala.scalajs.js.Dynamic].task.toString,
                answer
              )
            }
          case _ => List()
        val rating = RatingData(
          parsed.rating.asInstanceOf[scala.scalajs.js.Dynamic].understanding.toString.toIntOption.getOrElse(0),
          parsed.rating.asInstanceOf[scala.scalajs.js.Dynamic].difficulty.toString.toIntOption.getOrElse(0),
          parsed.rating.asInstanceOf[scala.scalajs.js.Dynamic].quality.toString.toIntOption.getOrElse(0),
          {
            val scopeValue = parsed.rating.asInstanceOf[scala.scalajs.js.Dynamic].scope
            if scopeValue == null || scopeValue == scala.scalajs.js.undefined then
              parsed.rating.asInstanceOf[scala.scalajs.js.Dynamic].quality.toString.toIntOption.getOrElse(0)
            else
              scopeValue.toString.toIntOption.getOrElse(0)
          },
          parsed.rating.asInstanceOf[scala.scalajs.js.Dynamic].feedback.toString
        )
        Some(ChapterData(chapter, exercises, rating))
      else
        None
    catch
      case _: Throwable => None

  def dataToJsObject(data: Map[String, ChapterData]): scala.scalajs.js.Any =
    val jsObj = scala.scalajs.js.Dynamic.literal()
    val chapterOrder = List("einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung")
    chapterOrder.foreach { chapter =>
      data.get(chapter).foreach { chapterData =>
        val exercises = scala.scalajs.js.Array(
          chapterData.exercises.map { ex =>
            scala.scalajs.js.Dynamic.literal(
              task = ex.task,
              answer = ex.answer.orNull
            )
          }: _*
        )
        val rating = scala.scalajs.js.Dynamic.literal(
          understanding = chapterData.rating.understanding,
          difficulty = chapterData.rating.difficulty,
          quality = chapterData.rating.quality,
          scope = chapterData.rating.scope,
          feedback = chapterData.rating.feedback
        )
        jsObj.updateDynamic(chapter)(
          scala.scalajs.js.Dynamic.literal(
            chapter = chapter,
            exercises = exercises,
            rating = rating
          )
        )
      }
    }
    jsObj

  def appElement(): Element =
    div(
      cls := "app-container",
      renderMenu(),
      // Main content area
      div(
        cls := "main-content",
        // render content depending on URL hash
        child <-- currentHashVar.signal.map { h =>
          val hash = if h == null then "" else h
          if hash == "#nachricht" then
            div(
              h1("Nachrichten schreiben"),
              TimeBadge(8),
              cls := "nachricht-section",
              renderPixelArea(8, 1, "11110000"),
              Rating("nachricht"),
              chapterNavigation("#nachricht")
            )
          else if hash == "#maskierung" then  
            div(
              h1("Maskierung"),
              TimeBadge(10),
              renderMaskierung(),
              Rating("maskierung"),
              chapterNavigation("#maskierung")
            )
          else if hash == "#fehlerkorrektur" then  
            div(
              h1("Fehlerkorrektur"),
              TimeBadge(7),
              Rating("fehlerkorrektur"),
              chapterNavigation("#fehlerkorrektur")
            )
          else if hash == "#anwendung" then  
            div(
              h1("Anwendung"),
              TimeBadge(6),
              Rating("anwendung"),
              chapterNavigation("#anwendung")
            )
          else if hash == "#zusammenfassung" then
            div(
              h1("Zusammenfassung"),
              TimeBadge(5),
              Rating("zusammenfassung"),
              chapterNavigation("#zusammenfassung")
            )
          else
            div(
              h1("Einleitung"),
              TimeBadge(15),
              Infotext(
                "Einleitung",
                "Du kennst das bestimmt, dass du mit dein Smartphone  kurz einen QR-Code scannst und  " +
                "anschließend zu einer Webseite weitergeleitet wirst. Doch was genau passiert dabei? " +
                "Für welche Anwendungen ist es dann sinnvoll QR-Codes zu nutzen und für welche nicht? " +
                "Die Antworten auf diese Fragen findest du in den folgenden Kapiteln, welche du auf der Linken seite auswählen kannst. " +
                "In der rechten oberen Ecke findest du jeweils eine Zeitabschätzung, wie lange das Kapitel dauert." +
                "\n" +
                "Viel Spaß!"
              ),
              // left column with pixel area and exercise stacked
              div(
                
                renderExercise(
                  "Scanne die QR Codes und beschreibe deren Inhalte. Beschreibe zusätzlich, die Gemeinsamkeiten.", 
                  Set("qr"), 
                  1, 
                  Some(div(
                    cls := "qr-codes-grid",
                    generateQRCodeWithCaption("https://example.com", "Beispiel QR-Code 1", 150),
                    imageWithCaption("/qr-example.png", "Beispiel QR-Code 2", 150),
                    generateQRCodeWithCaption("Benutze das Wort: QRCode in deiner Abgabe", "Beispiel QR-Code 3", 150)
                  )),
                  "einfuehrung"
                ),
                renderExerciseMC(
                  "Welche Aussage trifft zu QR-Codes?",
                  List(
                    ("QR Codes haben eine feste Größe", false),
                    ("QR Codes können ausschließlich Links speichern", false),
                    ("Man kann sich bei der Erstellung eines QR Codes den Text selbst aussuchen", true)
                  ),
                  2,
                  "einfuehrung"
                ),
                renderExercise("Beschreibe, welche Vorstellungen du hast, wie QR Codes funktionieren.", Set(), 3, None, "einfuehrung"),
              ),
              Rating("einfuehrung"),
              chapterNavigation("#einfuehrung")
            )
        }
      )
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
        cls := "pixel-grid",
        styleAttr := s"grid-template-columns: repeat(${cols}, 28px); grid-auto-rows: 28px;",
        children <-- pixelGrid.signal.map { grid =>
          grid.zipWithIndex.map { case (isOn, idx) =>
              div(
                cls := (if isOn then "pixel on" else "pixel"),
                onClick --> (_ => pixelGrid.update(g => g.updated(idx, !g(idx))))
              )
          }
        }
      ),
      div(
      cls := "pixel-submit-area",
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
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
          }
        )
      )
    )
  end renderPixelArea

  def renderMenu(): Element =
    val menuItems = List(
      ("#einfuehrung", "Einführung"),
      ("#nachricht", "Nachrichten schreiben"),
      ("#maskierung", "Maskierung"),
      ("#fehlerkorrektur", "Fehlerkorrektur"),
      ("#anwendung", "Anwendung"),
      ("#zusammenfassung", "Zusammenfassung")
    )

    div(
      cls := "navbar",
      // Header mit Titel
      div(
        cls := "navbar-header",
        h2("QR Code"),
        p("Interaktives Lernmodul")
      ),
      // Navigation Items
      div(
        cls := "navbar-nav",
        menuItems.map { case (hash, label) =>
          div(
            a(
              href := hash,
              label,
              onMouseEnter --> { _ =>
                // Hover-Effekt könnten wir mit einem Var implementieren
              }
            )
          )
        }
      ),
      // Save Button at the bottom
      div(
        cls := "navbar-footer",
        button(
          "💾 Speichern",
          cls := "save-button",
          onClick --> { _ =>
            // Load all data from localStorage before saving
            val chapters = List("einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung")
            val allData = chapters.map { chapter =>
              val data = loadFromLocalStorage(chapter).getOrElse(ChapterData(chapter, List(), RatingData(0, 0, 0, 0, "")))
              chapter -> ensureAllExercises(chapter, data)
            }.toMap
            
            val json = scala.scalajs.js.JSON.stringify(
              scala.scalajs.js.Dynamic.literal(
                timestamp = new js.Date().toISOString(),
                data = dataToJsObject(allData)
              ),
              null,
              2
            )
            val blob = new org.scalajs.dom.Blob(scala.scalajs.js.Array(json), scala.scalajs.js.Dynamic.literal(contentType = "application/json").asInstanceOf[org.scalajs.dom.BlobPropertyBag])
            val url = org.scalajs.dom.URL.createObjectURL(blob)
            val link = dom.document.createElement("a").asInstanceOf[org.scalajs.dom.html.Anchor]
            link.href = url
            link.download = s"qr-kurs-antworten-${new js.Date().getTime()}.json"
            link.click()
            org.scalajs.dom.URL.revokeObjectURL(url)
          }
        )
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

  def generateQRCode(text: String, size: Int = 200): Element =
    val encodedText = scala.scalajs.js.URIUtils.encodeURIComponent(text)
    val qrUrl = s"https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedText}"
    img(
      src := qrUrl,
      alt := s"QR Code für: $text",
      width := size.toString,
      height := size.toString,
      cls := "qr-code"
    )
  end generateQRCode

  def generateQRCodeWithCaption(text: String, caption: String, size: Int = 200): Element =
    val encodedText = scala.scalajs.js.URIUtils.encodeURIComponent(text)
    val qrUrl = s"https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedText}"
    div(
      cls := "qr-code-with-caption",
      img(
        src := qrUrl,
        alt := s"QR Code für: $text",
        width := size.toString,
        height := size.toString,
        cls := "qr-code"
      ),
      p(caption, cls := "qr-caption")
    )
  end generateQRCodeWithCaption

  def imageWithCaption(imageSrc: String, caption: String, size: Int = 150): Element =
    div(
      cls := "qr-code-with-caption",
      img(
        src := imageSrc,
        alt := caption,
        width := size.toString,
        height := size.toString,
        cls := "qr-code"
      ),
      p(caption, cls := "qr-caption")
    )
  end imageWithCaption

  def renderExercise(taskText: String, keywords: Set[String] = Set.empty, index: Int = -1, image: Option[Element] = None, chapter: String = ""): Element =
    // Load stored answer from localStorage
    val storedData = if chapter.nonEmpty then loadFromLocalStorage(chapter) else None
    val storedAnswers = storedData.map(_.exercises).getOrElse(List())
    val initialText: String = storedAnswers.find(_.task == taskText).flatMap(_.answer).getOrElse("")
    
    val textVar = Var(initialText)
    val editor = SimpleTextEditor(textVar)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)

    // exercise content only (menu is shown at the top now)
    div(
      className := "exercise-content",
      h2(if index == -1 then "Aufgabe" else s"Aufgabe $index"),
      image.map(img => div(cls := "exercise-image", img)),
      p(taskText),
      editor.getDomElement(),
      button(
        "Abgeben",
        onClick.map(_ => {
          val text = textVar.now()
          // Save response to allResponsesVar and localStorage
          if chapter.nonEmpty then
            allResponsesVar.update { data =>
              val existing = data.getOrElse(chapter, ChapterData(chapter, List(), RatingData(0, 0, 0, 0, "")))
              val updatedExercises = (existing.exercises.filterNot(_.task == taskText)) :+ ExerciseResponse(taskText, Some(text))
              val updatedChapter = existing.copy(exercises = updatedExercises)
              saveToLocalStorage(chapter, updatedChapter)
              data + (chapter -> updatedChapter)
            }
          text
        })
          .map(text => 
            if keywords.isEmpty then true 
            else keywords.exists(k => text.toLowerCase.contains(k.toLowerCase))
          )
          .map(ok => Some(ok)) --> lastCheckVar.writer,
        cls <-- lastCheckVar.signal.map {
          case Some(true)  => "btn-success"
          case Some(false) => "btn-error"
          case None        => ""
        }
      )
    )
  end renderExercise
  def renderExerciseMC(taskText: String, choices: List[(String, Boolean)], index: Int = -1, chapter: String = ""): Element =
    // Load stored answer from localStorage
    val storedData = if chapter.nonEmpty then loadFromLocalStorage(chapter) else None
    val storedAnswers = storedData.map(_.exercises).getOrElse(List())
    val storedAnswer = storedAnswers.find(_.task == taskText).flatMap(_.answer).getOrElse("")
    val initialSelected = if storedAnswer.nonEmpty then
      storedAnswer.split(", ").flatMap { choice =>
        choices.zipWithIndex.find(_._1._1 == choice).map(_._2)
      }.toSet
    else
      Set.empty[Int]
    
    val selectedVar: Var[Set[Int]] = Var(initialSelected)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)

    div(
      className := "exercise-content",
      h2(if index == -1 then "Aufgabe" else s"Aufgabe $index"),
      p(taskText),
      div(
        children <-- Signal.fromValue(choices).map(_.zipWithIndex.map { case ((label, _), idx) =>
          div(
            input(
              typ := "checkbox",
              onChange --> { _ =>
                selectedVar.update { selected =>
                  if selected.contains(idx) then selected - idx
                  else selected + idx
                }
              },
              checked <-- selectedVar.signal.map(_.contains(idx))
            ),
            span(" " + label)
          )
        })
      ),
      button(
        "Abgeben",
        onClick.map(_ => {
          val selected = selectedVar.now()
          // Save response to allResponsesVar and localStorage
          if chapter.nonEmpty then
            val selectedChoices = selected.map(idx => choices(idx)._1).mkString(", ")
            allResponsesVar.update { data =>
              val existing = data.getOrElse(chapter, ChapterData(chapter, List(), RatingData(0, 0, 0, 0, "")))
              val updatedExercises = (existing.exercises.filterNot(_.task == taskText)) :+ ExerciseResponse(taskText, Some(selectedChoices))
              val updatedChapter = existing.copy(exercises = updatedExercises)
              saveToLocalStorage(chapter, updatedChapter)
              data + (chapter -> updatedChapter)
            }
          selected
        })
          .map { selected =>
            val correctIndices = choices.zipWithIndex.collect { case ((_, true), idx) => idx }.toSet
            selected == correctIndices
          }
          .map(ok => Some(ok)) --> lastCheckVar.writer,
        cls <-- lastCheckVar.signal.map {
          case Some(true)  => "btn-success"
          case Some(false) => "btn-error"
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

  def Infotext(title: String, text: String): Element =
    div(
      cls := "infotext",
      h3(title),
      p(text)
    )
  end Infotext

  def TimeBadge(minutes: Int): Element =
    div(
      cls := "time-badge",
      span(s"⏱ ca. $minutes min")
    )
  end TimeBadge

  def chapterNavigation(currentHash: String): Element =
    val chapters = List(
      ("#einfuehrung", "Einführung"),
      ("#nachricht", "Nachrichten schreiben"),
      ("#maskierung", "Maskierung"),
      ("#fehlerkorrektur", "Fehlerkorrektur"),
      ("#anwendung", "Anwendung"),
      ("#zusammenfassung", "Zusammenfassung")
    )
    val currentIndex = chapters.indexWhere(_._1 == currentHash)
    val hasPrev = currentIndex > 0
    val hasNext = currentIndex < chapters.size - 1
    val prevChapter = if hasPrev then chapters(currentIndex - 1) else ("", "")
    val nextChapter = if hasNext then chapters(currentIndex + 1) else ("", "")

    div(
      cls := "chapter-navigation",
      if hasPrev then
        a(
          href := prevChapter._1,
          button("← " + prevChapter._2, cls := "btn-primary")
        )
      else
        span(),
      if hasNext then
        a(
          href := nextChapter._1,
          button(nextChapter._2 + " →", cls := "btn-primary")
        )
      else
        span()
    )
  end chapterNavigation

  def Rating(chapter: String = ""): Element =
    // Load stored ratings from localStorage
    val storedData = if chapter.nonEmpty then loadFromLocalStorage(chapter) else None
    val storedRating = storedData.map(_.rating).getOrElse(RatingData(0, 0, 0, 0, ""))
    
    val understandingVar = Var(storedRating.understanding)
    val difficultyVar = Var(storedRating.difficulty)
    val qualityVar = Var(storedRating.quality)
    val scopeVar = Var(storedRating.scope)
    val feedbackVar = Var(storedRating.feedback)

    def ratingStars(currentVar: Var[Int], maxRating: Int = 5): Element =
      div(
        cls := "rating-stars",
        (1 to maxRating).map { rating =>
          span(
            cls <-- currentVar.signal.map { current =>
              if current >= rating then "star filled" else "star"
            },
            "★",
            onClick --> { _ =>
              currentVar.set(rating)
              // Save rating to allResponsesVar and localStorage when changed
              if chapter.nonEmpty then
                allResponsesVar.update { data =>
                  val existing = data.getOrElse(chapter, ChapterData(chapter, List(), RatingData(0, 0, 0, 0, "")))
                  val updatedRating = RatingData(understandingVar.now(), difficultyVar.now(), qualityVar.now(), scopeVar.now(), feedbackVar.now())
                  val updatedChapter = existing.copy(rating = updatedRating)
                  saveToLocalStorage(chapter, updatedChapter)
                  data + (chapter -> updatedChapter)
                }
            }
          )
        }
      )

    div(
      cls := "rating-component",
      h3("Bewertung dieses Kapitels"),
      
      div(
        cls := "rating-category",
        label("Ich habe den Inhalt verstanden"),
        p(cls := "rating-hint", "5 Sterne = vollständige Zustimmung, 1 Stern = überhaupt nicht"),
        ratingStars(understandingVar)
      ),
      
      div(
        cls := "rating-category",
        label("Die Schwierigkeit der Inhalte war"),
        p(cls := "rating-hint", "5 Sterne = sehr schwierig, 1 Stern = sehr leicht"),
        ratingStars(difficultyVar)
      ),
      
      div(
        cls := "rating-category",
        label("Die Aufgaben haben mir Spaß gemacht"),
        p(cls := "rating-hint", "5 Sterne = viel Spaß, 1 Stern = wenig Spaß"),
        ratingStars(qualityVar)
      ),
       div(
        cls := "rating-category",
        label("Der Umfang der Aufgaben war angemessen"),
        p(cls := "rating-hint", "5 Sterne = Die Aufgaben hatten eine gute Länge, 1 Stern = Die Aufgaben waren zu lang/zu kurz"),
        ratingStars(scopeVar)
      ),
      
      div(
        cls := "rating-category",
        label("Zusätzliche Anmerkungen:"),
        textArea(
          rows := 4,
          placeholder := "Deine Anmerkungen hier...",
          controlled(
            value <-- feedbackVar.signal,
            onInput.mapToValue --> { text =>
              feedbackVar.set(text)
              // Save feedback to allResponsesVar and localStorage when changed
              if chapter.nonEmpty then
                allResponsesVar.update { data =>
                  val existing = data.getOrElse(chapter, ChapterData(chapter, List(), RatingData(0, 0, 0, 0, "")))
                  val updatedRating = RatingData(understandingVar.now(), difficultyVar.now(), qualityVar.now(), scopeVar.now(), text)
                  val updatedChapter = existing.copy(rating = updatedRating)
                  saveToLocalStorage(chapter, updatedChapter)
                  data + (chapter -> updatedChapter)
                }
            }
          )
        )
      )
    )
  end Rating
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