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
  val imageBaseUrl: String = "https://evadid.it/LucasQR/"

  def resolveImageUrl(imageNameOrPath: String): String =
    if imageNameOrPath.startsWith("http://") || imageNameOrPath.startsWith("https://") || imageNameOrPath.startsWith("data:") then
      imageNameOrPath
    else
      s"${imageBaseUrl}${imageNameOrPath.stripPrefix("/")}"

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
      "Scanne die QR-Codes und beschreibe deren Inhalte. Beschreibe zusätzlich die Gemeinsamkeiten.",
      "Welche Aussage trifft auf QR-Codes zu?",
      "Beschreibe in 50 Worten, welche Vorstellungen du davon hast, wie QR-Codes funktionieren."
    ),
    "nachricht" -> List(
      "Beschreibe, wie ein QR-Code aufgebaut ist. Vermute, wie die Daten im QR-Code dargestellt werden.",
      "Überlege dir eine eigene Kodierung für die Buchstaben 'M', 'I', 'S', 'P'. Nutze die Pixel, um deine Kodierung darzustellen.",
      "Schreibe das Wort 'MISSISSIPPI' mit deiner eigenen Kodierung aus Aufgabe 2.",
      "Erkläre die Nachteile einer eigenen, nicht standardisierten Kodierung.",
      "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle.",
      "Erläutere einen Vorteil der festen Länge von 8 Pixeln pro Buchstabe.",
      "Wie viele verschiedene Zeichen können mit 8 Pixeln dargestellt werden?",
      "Verschlüssele eine Nachricht mit QR-Code.",
      "Beschreibe, welche Beschränkungen dir beim Bearbeiten von Aufgabe 8 aufgefallen sind.",
      "Ziehe die Zahlen 1-8 auf die Felder im Grid, um zu zeigen in welcher Reihenfolge die Bits des ersten Buchstabens in Aufgabe 8 kodiert werden.",
      "Beschriebe, wie die Länge der Nachricht im QR-Code gespeichert wird.",
      "Vermute, warum du nicht alle Pixel zur Verwendung für die Nachricht hast.",
      "Fasse in eigenen Worten zusammen, wie QR Codes aufgebaut sind. Gehe dabei auf die Bestandteile ein und wie Nachrichten kodiert und gespeichert werden und wie die Buchstaben in das Pixelmuster umgewandelt werden. Nutze dafür mindestens 50 Wörter."
    ),
    "maskierung" -> List(
      "Beschreibe was beim scannen des QR Codes passiert und stelle begründete Vermutungen dazu an.",
      "Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze.",
      "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten.",
      "Erläutere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zusätzlich eine mögliche Lösung, um diese Probleme zu umgehen.",
      "Erkläre die Berechnungsvorschrift einer Maske deiner Wahl.",
      "Vermute, woher der Scanner weiß, welche Maske angewandt wurde.",
      "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.",
      "Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkläre, wofür diese Eigenschaft nützlich sein könnte.",
      "Erläutere an einem Beispiel, wie die Maskierung und Demaskierung funktioniert. Gehe dabei auf die Probleme einer festen Maske ein und erkläre, wie die Auswahl der besten Maske funktioniert. Nutze dafür mindestens 50 Wörter."
    ),
    "fehlerkorrektur" -> List(
      "Durch verschiedene Umstände kann es dazu kommen, dass bestimmte Teile des QR-Codes beschädigt werden und somit nicht mehr erkennbar sind. Vergleiche die drei QR-Codes. Vermute, welcher der drei QR-Codes durch einen Scanner gelesen werden kann. Begründe deine Vermutung.",
      "Überprüfe nun deine Vermutung, indem du die QR-Codes scannst. Stelle Vermutungen an, wie das umgesetzt wird.",
      "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du telst deine Adresse deinem Freund mit einer Notiz mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du telst deine Adresse deinem Freund mit einer Notiz mit. Leider hast du dich bei der Hausnummer verschrieben und statt 13 steht dort 73.",
      "Eine Möglichkeit mit Fehlern umzugehen ist es, eine Prüfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gezählt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel wäre, dass die Zeichenanzahl gezählt wird. Aus der Nachricht 'Hallo' würde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt oder korrigiert werden können. Begründe deine Antwort.",
      "Was sind die Probleme mit diesem Verfahren? Überlege dir dazu, wie die Nachricht 'Hallo5' mit einer Prüfsumme aussehen müsste.",
      "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden können am Beispiel der Nachricht '12345'. (Tipp: Überlege dir, was du machst, wenn eine Information von einer Person im Gespräch nicht verstanden wurde.)",
      "Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Ursprüngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Ursprüngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Ursprüngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'",
      "Überlege dir, wie die Anzahl der zusätzlichen Daten mit der Fehlerkorrektur zusammenhängt. Erkläre warum ein hohes Korrekturlevel nicht immer die beste Wahl ist.",
      "Ergänze die Lücken im folgenden Text:",
      "Erkläre, wie in QR-Codes mehr Daten gespeichert werden können und welche Auswirkungen das auf die Fehlerkorrektur hat.",
      "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit einem Klick auf 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten(Versionsnummer + Maskennummer) in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben. \nBeachte, dass der QR Code nicht Scanbar ist, da keine Maske auf den QR Code angewandt wird.",
      "Erkläre in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zusätzlichen Daten und dem Korrekturlevel ein. Erläutere zusätzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird. Nutze dafür mindestens 50 Wörter."
    ),
    "praxisanwendungen" -> List(
      "Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begründe jeweils kurz.",
      "Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung.",
      "Die Schulleitung überlegt, wie man erfassen könnte, welche Schüler das Gelände verlassen. Momentan wird dafür eine Lehrkraft eingesetzt, welche sich die Schülerausweise zeigen lässt. \nIn dem Hausaufgabenheft werden Name und Geburtsdatum des Schülers überprüft. Ein Schüler darf das Gelände verlassen, wenn er über 16 Jahre alt ist. \nErläutere je 2 Vor- und Nachteile dieser Methode.",
      "Erläutere, wie du den Sachverhalt aus Aufgabe 3 mit einem QR-Code lösen würdest. Gehe dabei auch darauf ein, welche Daten im QR-Code gespeichert werden müssen und wie die Ausgangskontrolle dadurch automatisiert funktionieren könnte.",
      "Nimm begründet Stellung zum Nutzen von QR-Codes im Anwendungsfall von Aufgabe 3.",
      "Eine Lehrkraft äußert Bedenken darüber, dass Schüler zum einen die QR-Codes manipulieren könnten, um falsche Daten zu speichern. \nErläutere, wie du auf diese Bedenken reagierst. Begründe deine Antwort.",
      "Eine andere Lehrkraft befürchtet, dass die QR-Codes nach einem Jahr verschmutzen oder beschädigt sind, da das Lesen eines QR-Codes nicht mehr möglich ist, wenn schon ein Pixel umgefärbt ist. \nGehe auf die Bedenken ein und erläutere, ob du diese teilst oder nicht. Begründe deine Antwort.",
      "Eine Bank überlegt, QR-Codes für das Speichern von Banking-Daten (wie Kontonummer, PIN und Passwörter) auf Kundenkarten zu nutzen. \nErläutere, warum dies keine sinnvolle Anwendung für QR-Codes ist. Nenne mindestens zwei Gründe.",
      "Nenne ein weiteres Beispiel, bei dem der Einsatz von QR-Codes problematisch oder nicht sinnvoll wäre. Begründe deine Antwort.",
      "Um das Speichern der Daten einmal auszuprobieren, erstelle einen QR-Code mit deinen Daten (Du kannst dir dafür natürlich auch welche ausdenken). \nGehe dafür auf die Webseite 'https://www.qrcode-generator.de/' und wähle dort den Typ 'VCard' aus. Fülle die Informationen aus. \nÜberprüfe, ob der QR-Code funktioniert, indem du ihn mit deinem Smartphone scannst. Wenn alles funktioniert hat, kannst du dir den QR-Code als Bild speichern, ausdrucken und in deine Handyhülle legen. \nBeschreibe, welche Daten du außerdem in einer VCard speichern könntest und welche Vorteile dies hat.",
      "Vergleiche die Vor- und Nachteile von QR-Codes bei sensiblen Daten (wie Bankdaten) mit denen bei öffentlichen Informationen (wie Website-Links). Nutze dafür 50 Worten."
    ),
    "zusammenfassung" -> List(
      "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit den Checkboxen kannst du Metadaten anzeigen oder die Fehlerkorrektur-Pixel sehen. Teste verschiedene Eingaben und überprüfe das Ergebnis mit einem QR-Code Scanner.",
      "Beschreibe in eigenen Worten die Bestandteile eines QR-Codes und deren Funktion mit mindestens 50 Wörtern."
    ),
    "barcodes" -> List(
      "Recherchiere im Internet nach Barcodes. Beschreibe den Aufbau eines typischen Barcodes.",
      "Erkläre, wie die Fehlerkorrektur bei Barcodes funktioniert und welche Probleme es dabei gibt.",
      "Vergleiche Barcodes mit QR-Codes. Nenne jeweils 2 Gemeinsamkeiten und 2 Unterschiede.",
      "Stell dir vor, du sollst für ein Projekt entscheiden, ob Barcodes oder QR-Codes verwendet werden. Nimm begründet Stellung, wofür du dich entscheiden würdest und in welchen Situationen welche Technologie sinnvoller ist."
    )
  )

  val allResponsesVar: Var[Map[String, ChapterData]] = Var(
    // Load all chapters from localStorage on startup
    List("einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "praxisanwendungen", "zusammenfassung", "barcodes")
      .flatMap { chapter =>
        loadFromLocalStorage(chapter).map(chapter -> _)
      }
      .toMap
  )

  def loadCompletedChapters(): Set[String] =
    try
      val stored = dom.window.localStorage.getItem("qr-completed-chapters")
      if stored != null then
        val parsed = scala.scalajs.js.JSON.parse(stored).asInstanceOf[scala.scalajs.js.Array[String]]
        parsed.toSet
      else
        Set.empty
    catch
      case _: Throwable => Set.empty

  def saveCompletedChapters(completed: Set[String]): Unit =
    try
      val arr = scala.scalajs.js.Array(completed.toSeq: _*)
      val json = scala.scalajs.js.JSON.stringify(arr)
      dom.window.localStorage.setItem("qr-completed-chapters", json)
    catch
      case _: Throwable => ()

  val completedChaptersVar: Var[Set[String]] = Var(loadCompletedChapters())

  def markChapterCompleted(chapter: String): Unit =
    completedChaptersVar.update { current =>
      val next = current + chapter
      saveCompletedChapters(next)
      next
    }

  def loadStudentName(): String =
    try
      val stored = dom.window.localStorage.getItem("qr-student-name")
      if stored != null then stored else ""
    catch
      case _: Throwable => ""

  def saveStudentName(name: String): Unit =
    try
      dom.window.localStorage.setItem("qr-student-name", name)
    catch
      case _: Throwable => ()

  val studentNameVar: Var[String] = Var(loadStudentName())

  def loadMerkzettelCreated(): Boolean =
    try
      val stored = dom.window.localStorage.getItem("qr-merkzettel-created")
      stored == "true"
    catch
      case _: Throwable => false

  def saveMerkzettelCreated(): Unit =
    try
      dom.window.localStorage.setItem("qr-merkzettel-created", "true")
    catch
      case _: Throwable => ()

  val merkzettelCreatedVar: Var[Boolean] = Var(loadMerkzettelCreated())

  // QR Code Exercise with text input and simulation
  def renderQRCodeExercise(exerciseNumber: Int, taskText: String, explanation: String): Element =
    val messageTextVar = Var("")
    val exceedsLimitVar = Var(false)
    val showLengthVar = Var(false)
    val maxChars = 17
    div(
      cls := "qr-text-input-section",
      h3(s"Aufgabe $exerciseNumber"),
      p(explanation),
      div(
        styleAttr := "margin-top: 1rem; display: flex; gap: 2rem; align-items: flex-start;",
        // Linke Spalte: Input und Checkbox
        div(
          styleAttr := "flex: 0 1 300px;",
          div(
            cls := "qr-input-container",
            input(
              typ := "text",
              placeholder := "Deine Nachricht hier...",
              cls := "message-input",
              styleAttr := "min-height: 50px; font-size: 16px;",
              controlled(
                value <-- messageTextVar.signal,
                onInput.mapToValue.map { text =>
                  // Check if user tried to exceed limit
                  if text.length > maxChars then
                    exceedsLimitVar.set(true)
                  else
                    exceedsLimitVar.set(false)
                  text.take(maxChars)  // Always limit to maxChars
                } --> messageTextVar.writer
              )
            ),
            child <-- exceedsLimitVar.signal.map { exceeds =>
              if exceeds then
                div(
                  styleAttr := "color: red; font-weight: bold; margin-top: 0.5rem;",
                  "Maximale Anzahl an Zeichen für den QR Code Typen erreicht"
                )
              else
                emptyNode
            }
          ),
          child <-- showLengthVar.signal.map { showLength =>
            label(
              styleAttr := "margin-top: 1rem; display: inline-flex; align-items: center; gap: 0.6rem; background: #e8f2ff; color: #1f3b73; padding: 0.5rem 0.8rem; border-radius: 10px; border: 1px solid #c7d9f5; font-weight: 600; font-size: 1.05rem; cursor: pointer;",
              input(
                typ := "checkbox",
                styleAttr := "transform: scale(1.2);",
                controlled(
                  checked <-- showLengthVar.signal,
                  onInput.mapToChecked --> showLengthVar.writer
                )
              ),
              span("Laenge anzeigen")
            )
          }
        ),
        // Rechte Spalte: QR-Code
        div(
          styleAttr := "flex: 0 0 auto;",
          child <-- Signal.combine(messageTextVar.signal, showLengthVar.signal).map { case (text, showLength) =>
            renderQRCodeSimulation(text, showLength = showLength)
          }
        )
      )
    )
  end renderQRCodeExercise

  // QR Code Exercise with metadata button
  def renderQRCodeExerciseWithMetadata(
    exerciseNumber: Int,
    taskText: String,
    explanation: String,
    sharedMessageVar: Option[Var[String]] = None
  ): Element =
    val messageTextVar = sharedMessageVar.getOrElse(Var(""))
    val exceedsLimitVar = Var(false)
    val showMetadata = Var(false)
    val metadataActive = Var(false)
    val errorCorrectionActive = Var(false)
    val maxChars = 17
    val darkRedPixels = Set(8,29,92,113,155,176,173,168,169,170,181,182,183,184,187,188,302,365,386,407,428)
    val lightRedPixels = Set(50,71,175,172,171,323,344,185,186)
    
    // Error Correction Zones (E1-E7)
    val e1Pixels = Set(198,199,219,220,240,241,261,262)
    val e2Pixels = Set(282,283,303,304,324,325,345,346)
    val e3Pixels = Set(366,367,387,388,408,409,429,430)
    val e4Pixels = Set(196,197,217,218,238,239,259,260)
    val e5Pixels = Set(193,194,214,215,235,236,256,257)
    val e6Pixels = Set(191,192,212,213,233,234,254,255)
    val e7Pixels = Set(189,190,210,211,231,232,252,253)
    
    val allErrorCorrectionZones = Map(
      1 -> e1Pixels,
      2 -> e2Pixels,
      3 -> e3Pixels,
      4 -> e4Pixels,
      5 -> e5Pixels,
      6 -> e6Pixels,
      7 -> e7Pixels
    )
    
    def getErrorCorrectionPixels(text: String): Set[Int] = 
      val checksum = text.map(_.toInt).sum
      val zoneIndices = (1 to 7).filter(i => ((checksum + i) % 7) < 4).toSet
      
      // Für jede aktive Zone: wähle einzelne Pixel zufällig (aber deterministisch) aus
      zoneIndices.flatMap { zoneIdx =>
        val allPixels = allErrorCorrectionZones.getOrElse(zoneIdx, Set[Int]()).toList.sorted
        val numPixelsToSelect = math.max(1, (allPixels.length * 0.4).toInt)  // 40% der Pixel pro Zone
        
        // Deterministisch basierend auf checksum und zoneIdx
        val seed = (checksum * 17 + zoneIdx * 31) % allPixels.length
        allPixels.zipWithIndex
          .filter { case (_, idx) => (idx + seed) % allPixels.length < numPixelsToSelect }
          .map(_._1)
          .toSet
      }
    
    div(
      cls := "qr-text-input-section",
      h3(s"Aufgabe $exerciseNumber"),
      p(explanation),
      div(
        styleAttr := "margin-top: 1rem; display: flex; gap: 2rem; align-items: flex-start;",
        // Linke Spalte: Input und Checkboxen
        div(
          styleAttr := "flex: 0 1 300px;",
          div(
            cls := "qr-input-container",
            input(
              typ := "text",
              placeholder := "Deine Nachricht hier...",
              cls := "message-input",
              styleAttr := "min-height: 50px; font-size: 16px;",
              controlled(
                value <-- messageTextVar.signal,
                onInput.mapToValue.map { text =>
                  // Check if user tried to exceed limit
                  if text.length > maxChars then
                    exceedsLimitVar.set(true)
                  else
                    exceedsLimitVar.set(false)
                  text.take(maxChars)  // Always limit to maxChars
                } --> messageTextVar.writer
              )
            ),
            child <-- exceedsLimitVar.signal.map { exceeds =>
              if exceeds then
                div(
                  styleAttr := "color: red; font-weight: bold; margin-top: 0.5rem;",
                  "Maximale Anzahl an Zeichen für den QR Code Typen erreicht"
                )
              else
                emptyNode
            }
          ),
          div(
            styleAttr := "margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;",
            label(
              styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 1rem; background-color: #ffcccb; border-radius: 4px; border: 1px solid #ff9999; user-select: none; white-space: nowrap;",
              input(
                typ := "checkbox",
                checked <-- metadataActive.signal,
                onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> metadataActive.writer,
                styleAttr := "cursor: pointer;"
              ),
              span("Metadaten anzeigen", styleAttr := "font-weight: 500;")
            ),
            label(
              styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 1rem; background-color: #bbdefb; border-radius: 4px; border: 1px solid #64b5f6; user-select: none; white-space: nowrap;",
              input(
                typ := "checkbox",
                checked <-- errorCorrectionActive.signal,
                onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> errorCorrectionActive.writer,
                styleAttr := "cursor: pointer;"
              ),
              span("Fehlerkorrektur anzeigen", styleAttr := "font-weight: 500;")
            )
          )
        ),
        // Rechte Spalte: QR-Code
        div(
          styleAttr := "flex: 0 0 auto;",
          child <-- Signal.combine(messageTextVar.signal, metadataActive.signal, errorCorrectionActive.signal).map { case (text: String, isMetadataActive: Boolean, isErrorActive: Boolean) =>
            renderQRCodeSimulationWithBothMetadata(text, darkRedPixels, lightRedPixels, isMetadataActive, getErrorCorrectionPixels(text), isErrorActive, allErrorCorrectionZones)
          }
        )
      )
    )
  end renderQRCodeExerciseWithMetadata

  // Convert a character to its 8-bit ASCII binary representation
  def charToAsciBits(char: Char): List[Int] =
    val asciiCode = char.toInt
    (7 to 0 by -1).map(bit => (asciiCode >> bit) & 1).toList

  // Encode text using ASCII codes to determine which pixels to fill
  def encodeTextToPixels(text: String, charPixelMap: Map[Int, List[Int]]): Map[Int, List[Int]] =
    // Zigzag pattern mapping: dataPositions fills bottom-to-top, but we want top-to-bottom display
    // The charPixelMap provides 8 sequential positions from dataPositions array
    // These positions are arranged bottom-to-top (positions 0-1 at bottom, 6-7 at top)
    // We need to remap so bit 0 goes to top-left, bit 1 to top-right, etc. (pairs swapped)
    // Mapping: [top-left, top-right, row2-left, row2-right, row3-left, row3-right, bottom-left, bottom-right]
    //        = [7, 6, 5, 4, 3, 2, 1, 0] (indices in the sequential allPixels array)
    val zigzagMapping = List(7, 6, 5, 4, 3, 2, 1, 0)
    
    val encodedMap = scala.collection.mutable.Map[Int, List[Int]]()
    for (char, charIndex) <- text.zipWithIndex do
      charPixelMap.get(charIndex).foreach { allPixels =>
        val bits = charToAsciBits(char)
        val filledPixels = bits.zipWithIndex.collect {
          case (bit, bitIndex) if bit == 1 => 
            val pixelPos = zigzagMapping(bitIndex)
            allPixels(pixelPos)
        }
        encodedMap(charIndex) = filledPixels
      }
    encodedMap.toMap

  // Generate QR-code-like grid with progressive filling based on text length
  def renderQRCodeSimulation(text: String, showLength: Boolean = false, gridSize: Int = 21): Element =
    // QR Code Version 1 is 21x21
    val size = gridSize
    
    // Initialize grid: 0 = white, 1 = fixed pattern (black), 2 = data (black)
    val grid = Array.fill(size, size)(0)
    
    // Add position detection patterns (the three corner squares)
    def drawPositionPattern(startRow: Int, startCol: Int): Unit =
      // Outer 7x7 square
      for
        r <- 0 until 7
        c <- 0 until 7
      do
        if r == 0 || r == 6 || c == 0 || c == 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4) then
          grid(startRow + r)(startCol + c) = 1
    
    // Draw three position patterns
    drawPositionPattern(0, 0)        // Top-left
    drawPositionPattern(0, size - 7) // Top-right
    drawPositionPattern(size - 7, 0) // Bottom-left
    
    // Add timing patterns (alternating horizontal and vertical lines)
    for i <- 8 until size - 8 do
      if i % 2 == 0 then
        grid(6)(i) = 1
        grid(i)(6) = 1
    
    // Forbidden positions that should always remain white
    val forbiddenPositions = Set(106, 163, 188)
    
    // Data encoding pattern: Start from right, collect all available data positions
    val dataPositions = scala.collection.mutable.ArrayBuffer[(Int, Int)]()
    
    // Start from rightmost column pair (columns 20, 19)
    var col = size - 1
    var goingUp = true
    var positionIndex = 0
    
    while col > 6 do
      val col1 = col
      val col2 = col - 1
      
      if goingUp then
        // Bottom to top
        for row <- (size - 1) to 0 by -1 do
          // Check if position is not part of fixed patterns
          if (row >= 9 || col1 >= 9) && grid(row)(col1) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col1))
            positionIndex += 1
          if col2 >= 0 && (row >= 9 || col2 >= 9) && grid(row)(col2) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col2))
            positionIndex += 1
      else
        // Top to bottom
        for row <- 0 until size do
          if (row >= 9 || col1 >= 9) && grid(row)(col1) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col1))
            positionIndex += 1
          if col2 >= 0 && (row >= 9 || col2 >= 9) && grid(row)(col2) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col2))
            positionIndex += 1
      
      goingUp = !goingUp
      col = col - 2
      
      // Skip timing column at position 6
      if col == 6 then col = col - 1
    
    // Fill data positions: first 4 reserved, next 8 for text length, rest for text characters
    val textLength = text.length
    
    // First 4 positions: reserved (empty/white)
    for i <- 0 until 4 do
      if i < dataPositions.length then
        val (row, col) = dataPositions(i)
        grid(row)(col) = 0  // White
    
    // Next 8 positions: text length in 8-bit binary (optional)
    if showLength then
      val lengthBits = (7 to 0 by -1).map(bit => (textLength >> bit) & 1).toList
      for (bit, idx) <- lengthBits.zipWithIndex do
        val posIdx = 4 + idx
        if posIdx < dataPositions.length then
          val (row, col) = dataPositions(posIdx)
          if bit == 1 then
            grid(row)(col) = 2  // Black (data pixel)
          else
            grid(row)(col) = 0  // White
    
    // Rest of the positions: encode text using ASCII codes
    // Define exact pixel positions for each character (starting from position 12)
    val charPixelMap = Map(
      0 -> List(12, 13, 14, 15, 16, 17, 18, 19),           // 1. Buchstabe
      1 -> List(20, 21, 22, 23, 41, 42, 43, 44),           // 2. Buchstabe
      2 -> List(45, 46, 47, 48, 49, 50, 51, 52),           // 3. Buchstabe
      3 -> List(53, 54, 55, 56, 57, 58, 59, 60),           // 4. Buchstabe
      4 -> List(61, 62, 63, 64, 65, 66, 67, 68),           // 5. Buchstabe
      5 -> List(69, 70, 71, 72, 73, 74, 75, 76),           // 6. Buchstabe
      6 -> List(77, 78, 79, 80, 81, 82, 83, 84),           // 7. Buchstabe
      7 -> List(85, 86, 87, 88, 110, 111, 112, 113),       // 8. Buchstabe
      8 -> List(114, 115, 116, 117, 118, 119, 120, 121),   // 9. Buchstabe
      9 -> List(122, 123, 124, 125, 126, 127, 128, 129),   // 10. Buchstabe
      10 -> List(130, 131, 132, 133, 134, 135, 136, 137),  // 11. Buchstabe
      11 -> List(138, 139, 140, 141, 142, 143, 144, 145),  // 12. Buchstabe
      12 -> List(146, 147, 148, 149, 150, 151, 152, 153),  // 13. Buchstabe
      13 -> List(154, 155, 156, 157, 158, 159, 160, 161),  // 14. Buchstabe
      14 -> List(162, 163, 164, 165, 166, 167, 168, 169),  // 15. Buchstabe
      15 -> List(170, 171, 172, 173, 174, 175, 176, 177),  // 16. Buchstabe
      16 -> List(178, 179, 180, 181, 182, 183, 184, 185)   // 17. Buchstabe
    )
    
    // Encode text using ASCII codes
    val encodedPixels = encodeTextToPixels(text, charPixelMap)
    
    // Fill pixels based on ASCII encoded character positions
    for (charIndex, filledPixels) <- encodedPixels do
      filledPixels.foreach { pixelIdx =>
        if pixelIdx < dataPositions.length then
          val (row, col) = dataPositions(pixelIdx)
          grid(row)(col) = 2  // Mark as data pixel
      }

    val lastCharPositions: Set[(Int, Int)] =
      if text.nonEmpty then
        val lastIdx = text.length - 1
        charPixelMap
          .get(lastIdx)
          .getOrElse(Nil)
          .flatMap { pixelIdx =>
            if pixelIdx < dataPositions.length then
              Some(dataPositions(pixelIdx))
            else
              None
          }
          .toSet
      else
        Set.empty
    
    // Render the grid
    div(
      cls := "qr-simulation",
      div(
        cls := "qr-grid",
        styleAttr := s"display: grid; grid-template-columns: repeat($size, 24px); gap: 1px; background: #ccc; padding: 10px;",
        grid.zipWithIndex.flatMap { case (row, rowIdx) =>
          row.zipWithIndex.map { case (cellValue, colIdx) =>
            val isBlack = cellValue > 0  // 1 = fixed pattern, 2 = data pixel
            val pixelNumber = rowIdx * size + colIdx
            val isLastChar = lastCharPositions.contains((rowIdx, colIdx))
            div(
              styleAttr := s"width: 24px; height: 24px; background: ${if isBlack then "black" else "white"}; display: flex; align-items: center; justify-content: center; font-size: 8px; color: ${if isBlack then "white" else "gray"}; font-weight: bold; overflow: hidden; ${if isLastChar then "outline: 2px solid red;" else ""}",
              cls := "qr-pixel",
              ""
            )
          }
        }
      )
    )
  end renderQRCodeSimulation

  // Render QR Code Simulation with optional metadata coloring
  def renderQRCodeSimulationWithMetadata(text: String, darkRedPixels: Set[Int], lightRedPixels: Set[Int], showMetadata: Boolean, gridSize: Int = 21): Element =
    // QR Code Version 1 is 21x21
    val size = gridSize
    
    // Initialize grid: 0 = white, 1 = fixed pattern (black), 2 = data (black)
    val grid = Array.fill(size, size)(0)
    
    // Add position detection patterns (the three corner squares)
    def drawPositionPattern(startRow: Int, startCol: Int): Unit =
      // Outer 7x7 square
      for
        r <- 0 until 7
        c <- 0 until 7
      do
        if r == 0 || r == 6 || c == 0 || c == 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4) then
          grid(startRow + r)(startCol + c) = 1
    
    // Draw three position patterns
    drawPositionPattern(0, 0)        // Top-left
    drawPositionPattern(0, size - 7) // Top-right
    drawPositionPattern(size - 7, 0) // Bottom-left
    
    // Add timing patterns (alternating horizontal and vertical lines)
    for i <- 8 until size - 8 do
      if i % 2 == 0 then
        grid(6)(i) = 1
        grid(i)(6) = 1
    
    // Forbidden positions that should always remain white
    val forbiddenPositions = Set(106, 163, 188)
    
    // Data encoding pattern: Start from right, collect all available data positions
    val dataPositions = scala.collection.mutable.ArrayBuffer[(Int, Int)]()
    
    // Start from rightmost column pair (columns 20, 19)
    var col = size - 1
    var goingUp = true
    var positionIndex = 0
    
    while col > 6 do
      val col1 = col
      val col2 = col - 1
      
      if goingUp then
        // Bottom to top
        for row <- (size - 1) to 0 by -1 do
          // Check if position is not part of fixed patterns
          if (row >= 9 || col1 >= 9) && grid(row)(col1) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col1))
            positionIndex += 1
          if col2 >= 0 && (row >= 9 || col2 >= 9) && grid(row)(col2) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col2))
            positionIndex += 1
      else
        // Top to bottom
        for row <- 0 until size do
          if (row >= 9 || col1 >= 9) && grid(row)(col1) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col1))
            positionIndex += 1
          if col2 >= 0 && (row >= 9 || col2 >= 9) && grid(row)(col2) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col2))
            positionIndex += 1
      
      goingUp = !goingUp
      col = col - 2
      
      // Skip timing column at position 6
      if col == 6 then col = col - 1
    
    // Fill data positions: first 4 reserved, next 8 for text length, rest for text characters
    val textLength = text.length
    
    // First 4 positions: reserved (empty/white)
    for i <- 0 until 4 do
      if i < dataPositions.length then
        val (row, col) = dataPositions(i)
        grid(row)(col) = 0  // White
    
    // Next 8 positions: text length in 8-bit binary
    val lengthBits = (7 to 0 by -1).map(bit => (textLength >> bit) & 1).toList
    for (bit, idx) <- lengthBits.zipWithIndex do
      val posIdx = 4 + idx
      if posIdx < dataPositions.length then
        val (row, col) = dataPositions(posIdx)
        if bit == 1 then
          grid(row)(col) = 2  // Black (data pixel)
        else
          grid(row)(col) = 0  // White
    
    // Rest of the positions: encode text using ASCII codes
    // Define exact pixel positions for each character (starting from position 12)
    val charPixelMap = Map(
      0 -> List(12, 13, 14, 15, 16, 17, 18, 19),           // 1. Buchstabe
      1 -> List(20, 21, 22, 23, 41, 42, 43, 44),           // 2. Buchstabe
      2 -> List(45, 46, 47, 48, 49, 50, 51, 52),           // 3. Buchstabe
      3 -> List(53, 54, 55, 56, 57, 58, 59, 60),           // 4. Buchstabe
      4 -> List(61, 62, 63, 64, 65, 66, 67, 68),           // 5. Buchstabe
      5 -> List(69, 70, 71, 72, 73, 74, 75, 76),           // 6. Buchstabe
      6 -> List(77, 78, 79, 80, 81, 82, 83, 84),           // 7. Buchstabe
      7 -> List(85, 86, 87, 88, 110, 111, 112, 113),       // 8. Buchstabe
      8 -> List(114, 115, 116, 117, 118, 119, 120, 121),   // 9. Buchstabe
      9 -> List(122, 123, 124, 125, 126, 127, 128, 129),   // 10. Buchstabe
      10 -> List(130, 131, 132, 133, 134, 135, 136, 137),  // 11. Buchstabe
      11 -> List(138, 139, 140, 141, 142, 143, 144, 145),  // 12. Buchstabe
      12 -> List(146, 147, 148, 149, 150, 151, 152, 153),  // 13. Buchstabe
      13 -> List(154, 155, 156, 157, 158, 159, 160, 161),  // 14. Buchstabe
      14 -> List(162, 163, 164, 165, 166, 167, 168, 169),  // 15. Buchstabe
      15 -> List(170, 171, 172, 173, 174, 175, 176, 177),  // 16. Buchstabe
      16 -> List(178, 179, 180, 181, 182, 183, 184, 185)   // 17. Buchstabe
    )
    
    // Encode text using ASCII codes
    val encodedPixels = encodeTextToPixels(text, charPixelMap)
    
    // Fill pixels based on ASCII encoded character positions
    for (charIndex, filledPixels) <- encodedPixels do
      filledPixels.foreach { pixelIdx =>
        if pixelIdx < dataPositions.length then
          val (row, col) = dataPositions(pixelIdx)
          grid(row)(col) = 2  // Mark as data pixel
      }
    
    // Render the grid
    div(
      cls := "qr-simulation",
      div(
        cls := "qr-grid",
        styleAttr := s"display: grid; grid-template-columns: repeat($size, 24px); gap: 1px; background: #ccc; padding: 10px;",
        grid.zipWithIndex.flatMap { case (row, rowIdx) =>
          row.zipWithIndex.map { case (cellValue, colIdx) =>
            val isBlack = cellValue > 0  // 1 = fixed pattern, 2 = data pixel
            val pixelNumber = rowIdx * size + colIdx
            val bgColor = if showMetadata then
              if darkRedPixels.contains(pixelNumber) then "#8b0000" // Dunkelrot
              else if lightRedPixels.contains(pixelNumber) then "#ff6666" // Hellrot
              else if isBlack then "black" else "white"
            else
              if isBlack then "black" else "white"
            val textColor = if showMetadata && (darkRedPixels.contains(pixelNumber) || lightRedPixels.contains(pixelNumber)) then "white" else (if isBlack then "white" else "gray")
            div(
              styleAttr := s"width: 24px; height: 24px; background: $bgColor; display: flex; align-items: center; justify-content: center; font-size: 8px; color: $textColor; font-weight: bold; overflow: hidden;",
              cls := "qr-pixel",
              ""
            )
          }
        }
      )
    )
  end renderQRCodeSimulationWithMetadata

  // Render QR Code Simulation with both metadata and error correction coloring
  def renderQRCodeSimulationWithBothMetadata(text: String, darkRedPixels: Set[Int], lightRedPixels: Set[Int], showMetadata: Boolean, errorCorrectionPixels: Set[Int], showErrorCorrection: Boolean, allErrorCorrectionZones: Map[Int, Set[Int]], gridSize: Int = 21): Element =
    // QR Code Version 1 is 21x21
    val size = gridSize
    
    // Initialize grid: 0 = white, 1 = fixed pattern (black), 2 = data (black)
    val grid = Array.fill(size, size)(0)
    
    // Add position detection patterns (the three corner squares)
    def drawPositionPattern(startRow: Int, startCol: Int): Unit =
      // Outer 7x7 square
      for
        r <- 0 until 7
        c <- 0 until 7
      do
        if r == 0 || r == 6 || c == 0 || c == 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4) then
          grid(startRow + r)(startCol + c) = 1
    
    // Draw three position patterns
    drawPositionPattern(0, 0)        // Top-left
    drawPositionPattern(0, size - 7) // Top-right
    drawPositionPattern(size - 7, 0) // Bottom-left
    
    // Add timing patterns (alternating horizontal and vertical lines)
    for i <- 8 until size - 8 do
      if i % 2 == 0 then
        grid(6)(i) = 1
        grid(i)(6) = 1
    
    // Forbidden positions that should always remain white
    val forbiddenPositions = Set(106, 163, 188)
    
    // Data encoding pattern: Start from right, collect all available data positions
    val dataPositions = scala.collection.mutable.ArrayBuffer[(Int, Int)]()
    
    // Start from rightmost column pair (columns 20, 19)
    var col = size - 1
    var goingUp = true
    var positionIndex = 0
    
    while col > 6 do
      val col1 = col
      val col2 = col - 1
      
      if goingUp then
        // Bottom to top
        for row <- (size - 1) to 0 by -1 do
          // Check if position is not part of fixed patterns
          if (row >= 9 || col1 >= 9) && grid(row)(col1) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col1))
            positionIndex += 1
          if col2 >= 0 && (row >= 9 || col2 >= 9) && grid(row)(col2) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col2))
            positionIndex += 1
      else
        // Top to bottom
        for row <- 0 until size do
          if (row >= 9 || col1 >= 9) && grid(row)(col1) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col1))
            positionIndex += 1
          if col2 >= 0 && (row >= 9 || col2 >= 9) && grid(row)(col2) == 0 then
            if !forbiddenPositions.contains(positionIndex) then
              dataPositions.append((row, col2))
            positionIndex += 1
      
      goingUp = !goingUp
      col = col - 2
      
      // Skip timing column at position 6
      if col == 6 then col = col - 1
    
    // Fill data positions: first 4 reserved, next 8 for text length, rest for text characters
    val textLength = text.length
    
    // First 4 positions: reserved (empty/white)
    for i <- 0 until 4 do
      if i < dataPositions.length then
        val (row, col) = dataPositions(i)
        grid(row)(col) = 0  // White
    
    // Next 8 positions: text length in 8-bit binary
    val lengthBits = (7 to 0 by -1).map(bit => (textLength >> bit) & 1).toList
    for (bit, idx) <- lengthBits.zipWithIndex do
      val posIdx = 4 + idx
      if posIdx < dataPositions.length then
        val (row, col) = dataPositions(posIdx)
        if bit == 1 then
          grid(row)(col) = 2  // Black (data pixel)
        else
          grid(row)(col) = 0  // White
    
    // Rest of the positions: encode text using ASCII codes
    // Define exact pixel positions for each character (starting from position 12)
    val charPixelMap = Map(
      0 -> List(12, 13, 14, 15, 16, 17, 18, 19),           // 1. Buchstabe
      1 -> List(20, 21, 22, 23, 41, 42, 43, 44),           // 2. Buchstabe
      2 -> List(45, 46, 47, 48, 49, 50, 51, 52),           // 3. Buchstabe
      3 -> List(53, 54, 55, 56, 57, 58, 59, 60),           // 4. Buchstabe
      4 -> List(61, 62, 63, 64, 65, 66, 67, 68),           // 5. Buchstabe
      5 -> List(69, 70, 71, 72, 73, 74, 75, 76),           // 6. Buchstabe
      6 -> List(77, 78, 79, 80, 81, 82, 83, 84),           // 7. Buchstabe
      7 -> List(85, 86, 87, 88, 110, 111, 112, 113),       // 8. Buchstabe
      8 -> List(114, 115, 116, 117, 118, 119, 120, 121),   // 9. Buchstabe
      9 -> List(122, 123, 124, 125, 126, 127, 128, 129),   // 10. Buchstabe
      10 -> List(130, 131, 132, 133, 134, 135, 136, 137),  // 11. Buchstabe
      11 -> List(138, 139, 140, 141, 142, 143, 144, 145),  // 12. Buchstabe
      12 -> List(146, 147, 148, 149, 150, 151, 152, 153),  // 13. Buchstabe
      13 -> List(154, 155, 156, 157, 158, 159, 160, 161),  // 14. Buchstabe
      14 -> List(162, 163, 164, 165, 166, 167, 168, 169),  // 15. Buchstabe
      15 -> List(170, 171, 172, 173, 174, 175, 176, 177),  // 16. Buchstabe
      16 -> List(178, 179, 180, 181, 182, 183, 184, 185)   // 17. Buchstabe
    )
    
    // Encode text using ASCII codes
    val encodedPixels = encodeTextToPixels(text, charPixelMap)
    
    // Fill pixels based on ASCII encoded character positions
    for (charIndex, filledPixels) <- encodedPixels do
      filledPixels.foreach { pixelIdx =>
        if pixelIdx < dataPositions.length then
          val (row, col) = dataPositions(pixelIdx)
          grid(row)(col) = 2  // Mark as data pixel
      }
    
    // Render the grid
    // Alle nicht genutzten Felder der Error-Correction-Zonen hellblau markieren
    val allZonePixels = allErrorCorrectionZones.values.flatten.toSet
    val inactiveErrorCorrectionPixels = if showErrorCorrection then
      allZonePixels -- errorCorrectionPixels
    else
      Set[Int]()
    
    div(
      cls := "qr-simulation",
      div(
        cls := "qr-grid",
        styleAttr := s"display: grid; grid-template-columns: repeat($size, 24px); gap: 1px; background: #ccc; padding: 10px;",
        grid.zipWithIndex.flatMap { case (row, rowIdx) =>
          row.zipWithIndex.map { case (cellValue, colIdx) =>
            val isBlack = cellValue > 0  // 1 = fixed pattern, 2 = data pixel
            val pixelNumber = rowIdx * size + colIdx
            val bgColor = if showErrorCorrection && errorCorrectionPixels.contains(pixelNumber) then
              "#00008B"  // Dunkelblau für aktive Error-Correction-Pixel
            else if showErrorCorrection && inactiveErrorCorrectionPixels.contains(pixelNumber) then
              "#87CEEB"  // Hellblau für inaktive Pixel in den Zonen
            else if showMetadata then
              if darkRedPixels.contains(pixelNumber) then "#8b0000" // Dunkelrot
              else if lightRedPixels.contains(pixelNumber) then "#ff6666" // Hellrot
              else if isBlack then "black" else "white"
            else
              if isBlack then "black" else "white"
            val textColor = if (showMetadata && (darkRedPixels.contains(pixelNumber) || lightRedPixels.contains(pixelNumber))) || (showErrorCorrection && (errorCorrectionPixels.contains(pixelNumber) || inactiveErrorCorrectionPixels.contains(pixelNumber))) then "white" else (if isBlack then "white" else "gray")
            div(
              styleAttr := s"width: 24px; height: 24px; background: $bgColor; display: flex; align-items: center; justify-content: center; font-size: 8px; color: $textColor; font-weight: bold; overflow: hidden;",
              cls := "qr-pixel",
              ""
            )
          }
        }
      )
    )
  end renderQRCodeSimulationWithBothMetadata

  // Function to ensure all chapter exercises are included (even empty ones) and sorted correctly
  def ensureAllExercises(chapter: String, data: ChapterData): ChapterData =
    val allExercisesForChapter = chapterExercises.getOrElse(chapter, List())
    val exerciseMap = data.exercises.map(ex => ex.task -> ex).toMap
    // Create exercises in the correct order from chapterExercises
    val sortedExercises: List[ExerciseResponse] = allExercisesForChapter.map { task =>
      exerciseMap.getOrElse(task, ExerciseResponse(task, None))
    }
    data.copy(exercises = sortedExercises)

  // Persist a single exercise answer (keeps order aligned with chapterExercises)
  def persistExerciseAnswer(chapter: String, taskText: String, answer: String): Unit =
    if chapter.nonEmpty then
      allResponsesVar.update { data =>
        val allTasksForChapter = chapterExercises.getOrElse(chapter, List())
        val emptyExercises = allTasksForChapter.map(task => ExerciseResponse(task, None))
        val existing = data.getOrElse(chapter, ChapterData(chapter, emptyExercises, RatingData(0, 0, 0, 0, "")))
        val updatedExercises = existing.exercises.filterNot(_.task == taskText) :+ ExerciseResponse(taskText, Some(answer))
        val sortedChapter = ensureAllExercises(chapter, existing.copy(exercises = updatedExercises))
        saveToLocalStorage(chapter, sortedChapter)
        data + (chapter -> sortedChapter)
      }

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

  case class ExerciseStatus(lastCheck: Option[Boolean], showSolution: Boolean)

  def exerciseStatusKey(chapter: String, taskText: String): String =
    s"qr-status-$chapter-${taskText.hashCode}"

  def loadExerciseStatus(chapter: String, taskText: String): ExerciseStatus =
    if chapter.isEmpty then
      ExerciseStatus(None, false)
    else
      try
        val stored = dom.window.localStorage.getItem(exerciseStatusKey(chapter, taskText))
        if stored != null then
          val parsed = scala.scalajs.js.JSON.parse(stored)
          val lastCheckValue = parsed.asInstanceOf[scala.scalajs.js.Dynamic].lastCheck
          val lastCheck = if lastCheckValue == null || lastCheckValue == scala.scalajs.js.undefined then None else Some(lastCheckValue.asInstanceOf[Boolean])
          val showSolution = parsed.asInstanceOf[scala.scalajs.js.Dynamic].showSolution.asInstanceOf[Boolean]
          ExerciseStatus(lastCheck, showSolution)
        else
          ExerciseStatus(None, false)
      catch
        case _: Throwable => ExerciseStatus(None, false)

  def saveExerciseStatus(chapter: String, taskText: String, status: ExerciseStatus): Unit =
    if chapter.nonEmpty then
      try
        val json = scala.scalajs.js.JSON.stringify(
          scala.scalajs.js.Dynamic.literal(
            lastCheck = status.lastCheck.map(_.asInstanceOf[scala.scalajs.js.Any]).orNull,
            showSolution = status.showSolution
          )
        )
        dom.window.localStorage.setItem(exerciseStatusKey(chapter, taskText), json)
      catch
        case _: Throwable => ()

  def dataToJsObject(data: Map[String, ChapterData]): scala.scalajs.js.Any =
    val jsObj = scala.scalajs.js.Dynamic.literal()
    val chapterOrder = List("einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "praxisanwendungen", "zusammenfassung", "barcodes")
    chapterOrder.foreach { chapter =>
      data.get(chapter).foreach { chapterData =>
        val exercises = scala.scalajs.js.Array(
          chapterData.exercises.map { ex =>
            scala.scalajs.js.Dynamic.literal(
              task = ex.task,
              answer = ex.answer.orNull
            )
          }*
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

  def AufgabePixelAnordnung(): Element =
    val cols = 2
    val rows = 4
    val chapter = "nachricht"
    val taskKey = "aufgabe10_completed"  // Simple key for persistence
    val patternInfoKey = "qr-infobox-nachricht-10-patterns"
    val taskText = "Ziehe die Zahlen 1-8 auf die Felder im Grid, um die Reihenfolge der Bits zu zeigen."
    
    // Correct solution based on zigzag pattern
    val correctSolution = Map(
      (0, 0) -> 8, (0, 1) -> 7,  // Top row: 8 7
      (1, 0) -> 6, (1, 1) -> 5,  // Row 2: 6 5
      (2, 0) -> 4, (2, 1) -> 3,  // Row 3: 4 3
      (3, 0) -> 2, (3, 1) -> 1   // Bottom row: 2 1
    )
    
    // State: Map from grid position (row, col) to placed number (1-8)
    val gridNumbers: Var[Map[(Int, Int), Int]] = Var(Map.empty)
    
    // State: Set of numbers that have been placed
    val placedNumbers: Signal[Set[Int]] = gridNumbers.signal.map(_.values.toSet)
    
    // State: Track error positions
    val errorPositions: Var[Set[(Int, Int)]] = Var(Set.empty)
    
    // Load completion status from LocalStorage directly
    val loadedAllCorrect: Boolean = 
      {
        try
          val stored = dom.window.localStorage.getItem(s"qr-chapter-$chapter-$taskKey")
          stored == "true"
        catch
          case _: Throwable =>
            false
      }
    
    // State: Track if all correct
    val allCorrect: Var[Boolean] = Var(loadedAllCorrect)
    val showPatternInfoVar = infoBoxVar(patternInfoKey)
    if loadedAllCorrect then
      markInfoBoxShown(patternInfoKey, showPatternInfoVar)
    
    div(
      h2("Aufgabe 10"),
      p("Ziehe die Zahlen 1-8 auf die Felder im Grid, um zu zeigen in welcher Reihenfolge die Bits des ersten Buchstabens in Aufgabe 8 kodiert werden."),
      div(
        styleAttr := "display: flex; flex-direction: column; gap: 15px; margin: 20px 0;",
        // Main area: Number blocks and grid with arrow
        div(
          styleAttr := "display: flex; align-items: center; gap: 25px;",
          // Number blocks (draggable)
          div(
            styleAttr := "display: flex; flex-direction: column; gap: 8px;",
            children <-- placedNumbers.map { placed =>
              (1 to 8).map { num =>
                val isPlaced = placed.contains(num)
                div(
                  draggable := !isPlaced,
                  styleAttr := s"width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; border: 2px solid ${if isPlaced then "#ccc" else "#4a9eff"}; border-radius: 6px; background: ${if isPlaced then "#f0f0f0" else "white"}; color: ${if isPlaced then "#999" else "#333"}; cursor: ${if isPlaced then "default" else "grab"};",
                  onDragStart --> { ev =>
                    if !isPlaced then
                      ev.dataTransfer.setData("text/plain", num.toString)
                  },
                  num.toString
                )
              }.toList
            }
          ),
          // Pixel Grid (drop zones)
          div(
            styleAttr := "display: flex; flex-direction: column; gap: 0px;",
            children <-- Signal.combine(gridNumbers.signal, errorPositions.signal, allCorrect.signal).map { case (gridMap, errors, isAllCorrect) =>
              (0 until rows).map { rowIdx =>
                div(
                  styleAttr := "display: flex; gap: 0px;",
                  (0 until cols).map { colIdx =>
                    val currentNum = gridMap.get((rowIdx, colIdx))
                    val isError = errors.contains((rowIdx, colIdx))
                    val borderColor = if isAllCorrect then "#4caf50" else if isError then "#f44336" else "#333"
                    val bgColor = if isAllCorrect then "#c8e6c9" else if currentNum.isDefined then "#e8f4fd" else ""
                    
                    div(
                      cls := "pixel",
                      styleAttr := s"display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.0rem; color: #333; cursor: default; position: relative; background-color: $bgColor; border-color: $borderColor; ${if isError then "border-width: 3px;" else ""}",
                      onDragOver --> { ev =>
                        ev.preventDefault()
                      },
                      onDrop --> { ev =>
                        ev.preventDefault()
                        val numStr = ev.dataTransfer.getData("text/plain")
                        try {
                          val num = numStr.toInt
                          if num >= 1 && num <= 8 then
                            // Remove this number from any other position
                            val cleaned = gridMap.filter(_._2 != num)
                            // Place it at this position
                            gridNumbers.set(cleaned + ((rowIdx, colIdx) -> num))
                            // Clear error state when placing new number
                            errorPositions.set(Set.empty)
                            allCorrect.set(false)
                        } catch {
                          case _: Exception => ()
                        }
                      },
                      currentNum.map(_.toString).getOrElse("")
                    )
                  }
                )
              }.toList
            }
          ),
          // Upward arrow
          div(
            styleAttr := "display: flex; flex-direction: column; align-items: center; gap: 5px;",
            div(
              styleAttr := "width: 0; height: 0; border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 25px solid #4a9eff;",
            ),
            div(
              styleAttr := "width: 8px; height: 80px; background-color: #4a9eff;",
            ),
            div(
              styleAttr := "font-size: 0.9rem; font-weight: bold; color: #4a9eff; margin-top: 5px;",
              "Start"
            )
          )
        ),
        // Buttons
        div(
          styleAttr := "display: flex; gap: 10px; align-items: center;",
          button(
            "Zurücksetzen",
            onClick --> (_ => {
              gridNumbers.set(Map.empty)
              errorPositions.set(Set.empty)
              allCorrect.set(false)
            }),
            styleAttr := "padding: 8px 16px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem;"
          ),
          button(
            "Abgeben",
            onClick --> (_ => {
              val current = gridNumbers.now()
              // Check if all positions are filled
              if current.size == 8 then
                // Check which positions are wrong
                val wrongPositions = correctSolution.filter { case (pos, correctNum) =>
                  current.get(pos) != Some(correctNum)
                }.keySet
                
                if wrongPositions.isEmpty then
                  // All correct
                  allCorrect.set(true)
                  errorPositions.set(Set.empty)
                  // Persist the completion status directly to LocalStorage
                  try
                    dom.window.localStorage.setItem(s"qr-chapter-$chapter-$taskKey", "true")
                  catch
                    case _: Throwable => ()
                  markInfoBoxShown(patternInfoKey, showPatternInfoVar)
                else
                  // Some wrong - mark errors and remove wrong numbers
                  errorPositions.set(wrongPositions)
                  val correctedGrid = current.filterNot { case (pos, _) => wrongPositions.contains(pos) }
                  gridNumbers.set(correctedGrid)
                  allCorrect.set(false)
            }),
            cls := "btn-time"
          ),
          child <-- allCorrect.signal.map { isCorrect =>
            if isCorrect then
              span(
                "✓ Sehr gut! Alle Felder sind richtig.",
                styleAttr := "color: #4caf50; font-weight: bold; font-size: 0.95rem;"
              )
            else
              emptyNode
          }
        )
      ),
      // Info text shown when all correct
      child <-- showPatternInfoVar.signal.map { showInfo =>
        if showInfo then
          Infotext(
            "Die 4 verschiedenen Buchstabenmuster",
            "Im QR-Code werden die Buchstaben in einem Zickzack-Muster kodiert. Es gibt dabei 4 verschiedene Ausprägungen, welche im Bild dargestellt sind.\n\n" +
            "Diese wechselnde Richtung ermöglicht eine effiziente Nutzung des verfügbaren Platzes im QR-Code.",
            Some("/qr_Buchstabenpattern.PNG")
          )
        else
          emptyNode
      },
      div(
        styleAttr := "margin-top: 10px; padding: 12px; background-color: #f0f8ff; border-left: 4px solid #4a9eff; border-radius: 4px;",
        strong("Tipp: "),
        span(
          "Ein Buchstabe wird in ASCII kodiert, was 8 Bits entspricht. Überlege, wie diese 8 Bits (8 Pixel) angeordnet werden können, " +
          "um einen Buchstaben darzustellen. In welcher Reihenfolge werden die Bits gelesen?"
        )
      )
    )

  def AufgabeKodierung(): Element =
    val encodingPatternVar = Var(Vector.empty[Boolean])
    val cols = 10
    val rows = 4
    val total = cols * rows
    val chapter = "nachricht"
    val taskText = "Überlege dir eine eigene Kodierung für die Buchstaben 'M', 'I', 'S', 'P'. Nutze die Pixel, um deine Kodierung darzustellen."
    
    val pixelGrid: Var[Vector[Boolean]] = Var(Vector.fill(total)(false))
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val errorRowsVar: Var[Set[Int]] = Var(Set.empty)
    val isDisabledVar: Var[Boolean] = Var(false)
    
    div(
      div(
        h2("Aufgabe 2"),
        p("Überlege dir eine eigene Kodierung für die Buchstaben 'M', 'I', 'S', 'P'. Nutze die Pixel, um deine Kodierung darzustellen."),
        child <-- lastCheckVar.signal.map {
          case Some(false) => 
            p(
              "Alle Zeichen müssen eindeutig kodiert sein!",
              styleAttr := "color: red; font-weight: bold; margin: 10px 0;"
            )
          case _ => emptyNode
        },
        div(
          styleAttr := "display: flex; gap: 10px;",
          // Buchstaben links
          div(
            styleAttr := "display: flex; flex-direction: column; gap: 4px; font-size: 24px; font-weight: bold;",
            children <-- errorRowsVar.signal.map { errorRows =>
              List("M", "I", "S", "P").zipWithIndex.map { case (letter, idx) =>
                val isError = errorRows.contains(idx)
                span(
                  letter,
                  styleAttr := s"width: 30px; height: 28px; line-height: 28px; ${if isError then "color: red;" else ""}"
                )
              }
            }
          ),
          // Pixel-Grid und Button rechts
          div(
            styleAttr := "display: flex; flex-direction: column; gap: 4px;",
            children <-- Signal.combine(pixelGrid.signal, isDisabledVar.signal, errorRowsVar.signal).map { case (grid, disabled, errorRows) =>
              (0 until rows).map { rowIdx =>
                val isError = errorRows.contains(rowIdx)
                val rowStart = rowIdx * cols
                val rowEnd = rowStart + cols
                val rowPixels = grid.slice(rowStart, rowEnd)
                
                div(
                  styleAttr := "display: flex; gap: 0px;",
                  rowPixels.zipWithIndex.map { case (isOn, colIdx) =>
                    val pixelIdx = rowStart + colIdx
                    div(
                      cls := (if isOn then "pixel on" else "pixel"),
                      styleAttr := (if isError then "border-color: red; border-width: 2px;" else ""),
                      onClick --> (_ => if !disabled then pixelGrid.update(g => g.updated(pixelIdx, !g(pixelIdx))) else ())
                    )
                  }
                )
              }.toList
            },
            div(
              cls := "pixel-submit-area",
              styleAttr := "display: flex; justify-content: center; align-items: center; gap: 15px; margin-top: 10px;",
              button(
                child.text <-- lastCheckVar.signal.map {
                  case Some(false) => "Nochmal versuchen"
                  case _ => "Abgeben"
                },
                onClick --> { _ =>
                val current = pixelGrid.now()
                
                if lastCheckVar.now() == Some(false) then
                  // Reset error state
                  lastCheckVar.set(None)
                  errorRowsVar.set(Set.empty)
                  isDisabledVar.set(false)
                else
                  // Check for uniqueness
                  encodingPatternVar.set(current)
                  val patterns = (0 until rows).map { row =>
                    val start = row * cols
                    val end = start + cols
                    current.slice(start, end)
                  }.toList
                  
                  // Find duplicate rows
                  val duplicateIndices = patterns.zipWithIndex.flatMap { case (pattern, idx) =>
                    val otherIndices = patterns.zipWithIndex.collect {
                      case (p, i) if i != idx && p == pattern => i
                    }
                    if otherIndices.nonEmpty then Some(idx) else None
                  }.toSet
                  
                  if duplicateIndices.isEmpty then
                    lastCheckVar.set(Some(true))
                    errorRowsVar.set(Set.empty)
                    isDisabledVar.set(false)
                  else
                    lastCheckVar.set(Some(false))
                    errorRowsVar.set(duplicateIndices)
                    isDisabledVar.set(true)
              },
              cls <-- lastCheckVar.signal.map {
                case Some(true)  => "btn-time btn-success"
                case Some(false) => "btn-time btn-error"
                case None        => "btn-time"
              }
            ),
            child <-- lastCheckVar.signal.map {
              case Some(true) =>
                span(
                  "Kodierung gespeichert",
                  styleAttr := "color: green; font-weight: bold;"
                )
              case _ => emptyNode
            }
          )
        )
      )
      ),
      div(
        h2("Aufgabe 3"),
        p("Schreibe das Wort 'MISSISSIPPI' mit deiner eigenen Kodierung aus Aufgabe 2."),
        {
          val taskText3 = "Schreibe das Wort 'MISSISSIPPI' mit deiner eigenen Kodierung aus Aufgabe 2."
          val rows3 = 11
          val cols3 = 10
          val total3 = cols3 * rows3
          val storedGrid3: Option[Vector[Boolean]] =
            loadFromLocalStorage(chapter)
              .flatMap(_.exercises.find(_.task == taskText3).flatMap(_.answer))
              .map(ans => ans.filter(ch => ch == '0' || ch == '1').padTo(total3, '0').take(total3).map(_ == '1').toVector)
          val pixelGrid3: Var[Vector[Boolean]] = Var(storedGrid3.getOrElse(Vector.fill(total3)(false)))
          val lastCheckVar3: Var[Option[Boolean]] = Var(None)
          val errorRowsVar3: Var[Set[Int]] = Var(Set.empty)
          val isDisabledVar3: Var[Boolean] = Var(false)
          
          div(
            styleAttr := "display: flex; gap: 10px;",
            // Grid mit Labels
            div(
              styleAttr := "display: flex; flex-direction: column; gap: 4px;",
              children <-- Signal.combine(pixelGrid3.signal, encodingPatternVar.signal, lastCheckVar.signal, errorRowsVar3.signal, isDisabledVar3.signal).map { case (grid3, encoding, validEncoding, errorRows3, disabled3) =>
                (0 until rows3).map { rowIdx =>
                  val rowStart = rowIdx * cols3
                  val rowEnd = rowStart + cols3
                  val rowPixels = grid3.slice(rowStart, rowEnd)
                  val isError = errorRows3.contains(rowIdx)
                  
                  // Determine which letter this row represents
                  val letter = if validEncoding == Some(true) && encoding.nonEmpty then
                    val patterns = (0 until rows).map { encRow =>
                      val start = encRow * cols
                      val end = start + cols
                      encoding.slice(start, end)
                    }.toList
                    val letters = List("M", "I", "S", "P")
                    
                    patterns.zipWithIndex.find { case (pattern, _) => pattern == rowPixels } match {
                      case Some((_, idx)) if idx < letters.length => letters(idx)
                      case _ => "?"
                    }
                  else
                    "?"
                  
                  div(
                    styleAttr := "display: flex; align-items: center; gap: 10px;",
                    div(
                      styleAttr := "display: flex; gap: 0px;",
                      rowPixels.zipWithIndex.map { case (isOn, colIdx) =>
                        val pixelIdx = rowStart + colIdx
                        div(
                          cls := (if isOn then "pixel on" else "pixel"),
                          styleAttr := (if isError then "border-color: red; border-width: 2px;" else ""),
                          onClick --> (_ => if !disabled3 then pixelGrid3.update(g => g.updated(pixelIdx, !g(pixelIdx))) else ())
                        )
                      }
                    ),
                    span(
                      letter,
                      styleAttr := s"font-size: 24px; font-weight: bold; width: 30px; text-align: center; ${if isError then "color: red;" else ""}"
                    )
                  )
                }.toList
              },
              // Auto-save on pixel change
              child <-- pixelGrid3.signal.map { grid =>
                val binary = grid.map(b => if b then '1' else '0').mkString
                persistExerciseAnswer(chapter, taskText3, binary)
                emptyNode
              },
              div(
                cls := "pixel-submit-area",
                styleAttr := "display: flex; justify-content: center; align-items: center; gap: 15px; margin-top: 10px;",
                button(
                  child.text <-- lastCheckVar3.signal.map {
                    case Some(false) => "Nochmal versuchen"
                    case _ => "Abgeben"
                  },
                  onClick --> { _ =>
                    val current = pixelGrid3.now()
                    val expected = encodingPatternVar.now()
                    
                    if lastCheckVar3.now() == Some(false) then
                      // Reset error state
                      lastCheckVar3.set(None)
                      errorRowsVar3.set(Set.empty)
                      isDisabledVar3.set(false)
                    else if expected.isEmpty || lastCheckVar.now() != Some(true) then
                      lastCheckVar3.set(Some(false))
                      errorRowsVar3.set(Set.empty)
                      isDisabledVar3.set(true)
                    else
                      // Check "MISSISSIPPI": M I S S I S S I P P I
                      val chars = List(0, 1, 2, 2, 1, 2, 2, 1, 3, 3, 1) // M=0, I=1, S=2, P=3
                      val wrongRows = chars.zipWithIndex.flatMap { case (charIdx, wordIdx) =>
                        val rowStart = charIdx * cols
                        val rowEnd = rowStart + cols
                        val targetStart = wordIdx * cols3
                        val targetEnd = targetStart + cols3
                        if rowEnd <= expected.length && targetEnd <= current.length then
                          val expectedRow = expected.slice(rowStart, rowEnd)
                          val currentRow = current.slice(targetStart, targetEnd)
                          if expectedRow != currentRow then Some(wordIdx) else None
                        else
                          Some(wordIdx)
                      }.toSet
                      
                      if wrongRows.isEmpty then
                        lastCheckVar3.set(Some(true))
                        errorRowsVar3.set(Set.empty)
                        isDisabledVar3.set(false)
                      else
                        lastCheckVar3.set(Some(false))
                        errorRowsVar3.set(wrongRows)
                        isDisabledVar3.set(true)
                  },
                  cls <-- lastCheckVar3.signal.map {
                    case Some(true)  => "btn-time btn-success"
                    case Some(false) => "btn-time btn-error"
                    case None        => "btn-time"
                  }
                ),
                child <-- lastCheckVar3.signal.map {
                  case Some(true) =>
                    span(
                      "Sehr gut, jetzt hast du deine erste Nachricht mit deiner selbstgewählten Kodierung kodiert!",
                      styleAttr := "color: green; font-weight: bold;"
                    )
                  case Some(false) =>
                    span(
                      "Überprüfe deine Eingabe nochmal!",
                      styleAttr := "color: red; font-weight: bold;"
                    )
                  case _ => emptyNode
                }
              )
            )
          )
        }
      )
    )
  end AufgabeKodierung

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
            {
              val showInfoVar = infoBoxVar("qr-infobox-nachricht-1")
              val showAsciiInfoVar = infoBoxVar("qr-infobox-nachricht-4")
              div(
                h1("Nachrichten schreiben"),
                TimeBadge(70),
                cls := "nachricht-section",
                renderExercise(
                  "Beschreibe, wie ein QR-Code aufgebaut ist. Vermute, wie die Daten im QR-Code dargestellt werden.",
                  Set("Pixel", "schwarz", "weiß"),
                  1,
                  Some(generateQRCode("Hallo Welt", 200)),
                  "nachricht",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-nachricht-1", showInfoVar)),
                  solutionText = Some(
                    "Ein QR-Code besteht aus einem Raster Pixeln. Die Farbe der Pixel ist dabei schwarz oder weiß."
                  )
                ),
                child <-- showInfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Kodierung",
                      "Eine Kodierung ist eine Vorschrift, wie Informationen (z.B. Buchstaben) in eine andere Form (z.B. Pixel) umgewandelt werden. " +
                      "Bei QR-Codes werden Buchstaben in schwarze und weiße Pixel kodiert. Jeder Buchstabe bekommt dabei ein bestimmtes Muster. \n" +
                      "Wichtig ist, dass die Kodierung eindeutig ist: Jeder Buchstabe muss ein eindeutiges Muster haben, damit man die Nachricht später wieder dekodieren kann. \n" +
                      "In der Praxis wird hierfür kein Zufälliges Muster verwendet. Hier werden Buchstaben in Zahlen kodiert, welche anschließend in Bits (0 und 1) dargestellt werden. Dies geschieht über die Binärdarstellung der Zahl." + 
                      "Zum Schluss werden die Bits als Schwarze (1) und Weiße (0) Pixel dargestellt."
                    )
                  else
                    emptyNode
                },
                AufgabeKodierung(),
              renderExercise(
                "Erkläre die Nachteile einer eigenen, nicht standardisierten Kodierung.",
                Set("umgewandelt", "zusätzlich"),
                4,
                None,
                "nachricht",
                None,
                Some(() => markInfoBoxShown("qr-infobox-nachricht-4", showAsciiInfoVar)),
                solutionText = Some(
                  "Ohne Standard muss bei einer Kodierung zusätzlich auch die Kodierungsvorschrift (also wie Buchstaben in Pixel umgewandelt werden) mit übergeben werden. Sonst kennen andere die Kodierungsvorschrift nicht, und die Nachrichten kann nicht wieder dekodiert(Zurück in Buchstaben) umgewandelt werden."
                )
              ),
              child <-- showAsciiInfoVar.signal.map { show =>
                if show then
                  Infotext(
                    "ASCII als Standard",
                    "ASCII (American Standard Code for Information Interchange) oder auf Deutsch Amerikanischer Standard-Code für den Informationsaustausch ist ein verbreiteter Standard, bei dem jeder Buchstabe einer eindeutigen Zahl von 0-127 zugeordnet ist, die als 7 Bit-Kombination dargestellt wird. " +
                    "Das verhindert Mehrdeutigkeiten, erleichtert das gemeinsame Verständnis und führt dazu, dass die Kodierung nicht übergeben werden muss, da diese bekannt ist.\n" +
                    "Eine Erweiterung von ASCII ist die 8-Bit-Kodierung UTF-8, die zusätzlich weitere Zeichen (z.B. Umlaute) kodieren kann, aber die ersten 128 Zeichen sind identisch zu ASCII. In QR-Codes wird die UTF-8-Kodierung verwendet."
                  )
                else
                  emptyNode
              },
              {
                val asciiTable = List(
                  // Sonderzeichen
                  (" ", 32, "00100000"), ("!", 33, "00100001"), (",", 44, "00101100"), (".", 46, "00101110"),
                  // Ziffern
                  ("0", 48, "00110000"), ("1", 49, "00110001"), ("2", 50, "00110010"),
                  // Sonderzeichen
                  ("?", 63, "00111111"),
                  // Großbuchstaben
                  ("A", 65, "01000001"), ("B", 66, "01000010"), ("C", 67, "01000011"), ("D", 68, "01000100"),
                  ("E", 69, "01000101"), ("F", 70, "01000110"), ("G", 71, "01000111"), ("H", 72, "01001000"),
                  ("I", 73, "01001001"), ("J", 74, "01001010"), ("K", 75, "01001011"), ("L", 76, "01001100"),
                  ("M", 77, "01001101"), ("N", 78, "01001110"), ("O", 79, "01001111"), ("P", 80, "01010000"),
                  ("Q", 81, "01010001"), ("R", 82, "01010010"), ("S", 83, "01010011"), ("T", 84, "01010100"),
                  ("U", 85, "01010101"), ("V", 86, "01010110"), ("W", 87, "01010111"), ("X", 88, "01011000"),
                  ("Y", 89, "01011001"), ("Z", 90, "01011010"),
                  // Kleinbuchstaben (Beispiele)
                  ("a", 97, "01100001"), ("b", 98, "01100010"), ("c", 99, "01100011")
                )
                div(
                  h2("Aufgabe 5"),
                  p("Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle. Rechts siehst du die ASCII-Tabelle, links kodierst du jeden Buchstaben (0 = weiß, 1 = schwarz)."),
                  div(
                    cls := "aufgabe5-container",
                    renderPixelAreaWithLabels(
                      8,
                      10,
                      "Buchstaben zum kodieren",
                      List("I", "N", "F", "O", "R", "M", "A", "T", "I", "K"),
                      List(
                        "01001001", // I
                        "01001110", // N
                        "01000110", // F
                        "01001111", // O
                        "01010010", // R
                        "01001101", // M
                        "01000001", // A
                        "01010100", // T
                        "01001001", // I
                        "01001011"  // K
                      ),
                      chapter = "nachricht",
                      taskText = "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle."
                    ),
                    table(
                      cls := "ascii-table aufgabe5-ascii-table",
                      thead(
                        tr(
                          th("Zeichen", styleAttr := "text-align: center; padding: 0 14px;"),
                          th("Dezimal", styleAttr := "text-align: center; padding: 0 14px;"),
                          th("Binärdarstellung", styleAttr := "text-align: center; padding: 0 14px;")
                        )
                      ),
                      tbody(
                        asciiTable.map { case (ch, dec, bits) =>
                          tr(
                            td(ch, styleAttr := "text-align: center; padding: 0 14px;"),
                            td(dec.toString, styleAttr := "text-align: center; padding: 0 14px;"),
                            td(bits, styleAttr := "text-align: center; padding: 0 14px;")
                          )
                        }
                      )
                    )
                  )
                )
              },
              renderExercise(
                "Erläutere einen Vorteil der festen Länge von 8 Pixeln pro Buchstabe.",
                Set("vorteil", "eindeutig"),
                6,
                None,
                "nachricht",
                solutionText = Some(
                  "Ein Vorteil der festen Länge ist die eindeutige Trennung der Buchstaben."
                )
              ),
              renderExercise(
                "Wie viele verschiedene Zeichen können mit 8 Pixeln dargestellt werden?",
                Set("256"),
                7,
                None,
                "nachricht",
                solutionText = Some(
                  "Es können insgesamt 2^8 = 256 verschiedene Zeichen dargestellt werden."
                ),
                numericOnly = true,
                wrongHint = Some("Jeder Pixel kann 2 Farben darstellen. Überlege dir als erstes eine Lösung für 1,2,3 und 4 Pixel.")
              ),
              renderQRCodeExercise(
                8,
                "Verschlüssele eine Nachricht mit QR-Code.",
                "Als nächstes überführen wir das Gelernte in eine QR-Code Darstellung. Dafür schauen wir uns an, wie Nachrichten in QR-Codes dargestellt werden. " +
                "Gib eine Nachricht ein und beobachte, wie diese als QR-Code in Pixel umgewandelt wird. Jeder Buchstabe wird dabei in 8 Bits (seine ASCII-Kodierung) übersetzt und färbt entsprechende Pixel schwarz."
              ),
              renderExercise(
                  "Beschreibe, welche Beschränkungen dir beim Bearbeiten von Aufgabe 8 aufgefallen sind.", 
                Set("Länge"),
                9,
                None,
                "nachricht",
                solutionText = Some(
                  "Die Länge der Nachricht ist beschränkt, da die Anzahl der Pixel im QR-Code begrenzt ist. Je länger die Nachricht, desto mehr Pixel werden benötigt. Irgendwann gibt es nicht genug Pixel, um die gesamte Nachricht darzustellen. Zusätzlich gibt es bestimmte Bereiche, welche nicht genutzt werden."
                )
              ),
              AufgabePixelAnordnung(),
              renderExercise(
                "Beschriebe, wie die Länge der Nachricht im QR-Code gespeichert wird.",
                Set("Anfang", "8"),
                11,
                None,
                "nachricht",
                solutionText = Some(
                  "Die Länge der Nachricht wird in einem festen Bereich am Anfang der Nachricht gespeichert. Dieser Bereich ist 8 Bits lang und gibt die Anzahl der Zeichen in Binärdarstellung an."
                )
              ),
              {
                val showQRFixedAreasInfoVar = infoBoxVar("qr-infobox-nachricht-10")
                div(
                  renderExercise(
                    "Vermute, warum du nicht alle Pixel zur Verwendung für die Nachricht hast.",
                    Set(" "),
                    12,
                    None,
                    "nachricht",
                    None,
                    Some(() => markInfoBoxShown("qr-infobox-nachricht-10", showQRFixedAreasInfoVar)),
                  ),
                  child <-- showQRFixedAreasInfoVar.signal.map { show =>
                    if show then
                      div(
                        cls := "infotext",
                        h3("Bereiche eines QR-Codes"),
                        img(alt := "QR-Code Bereiche", src := resolveImageUrl("qr_Bereiche.png"), styleAttr := "max-width: 400px; margin: 1rem 0; border-radius: 4px;"),
                        p("Trotz verschiedenen Einsatzmöglichkeiten haben QR Codes einen ähnlichem Aussehen."),
                        p(
                          " Die roten Bereiche in den Ecken heißen ",
                          span("Positionsmarker", styleAttr := "color: #FF0000; font-weight: bold;"),
                          ". Diese dienen dazu, dass die Handykamera den Anfang und das Ende des QR Codes erfassen kann."
                        ),
                        p(
                          " Die Blaue Stelle ist ein ",
                          span("Ausrichtungsmarker", styleAttr := "color: #0000FF; font-weight: bold;"),
                          ". Dieser Hilft den QR Code auf unebenen Flächen (z.B Verpackungen) zu lesen."
                        ),
                        p(
                          " Der Grüne Bereich sind die ",
                          span("Timing-Patterns", styleAttr := "color: #00AA00; font-weight: bold;"),
                          "(Synchronisationslinien). Hier wechseln sich schwarze und weiße Pixel ab. Mithilfe dieser Anordnung wird die Größe des QR Codes bestimmt."
                        ),
                        p(
                          " Da viele verschiedene QR Code Versionen existieren, wird eine ",
                          span("Versionsnummer", styleAttr := "color: #FFCC00; font-weight: bold;"),
                          " festgehalten. Die ",
                          span("Metadaten", styleAttr := "color: #FF8800; font-weight: bold;"),
                          " sind Informationen über den Aufbau des QR Codes (z.B die Verwendete Maske)."
                        ),
                        p(" Weiterhin haben alle QR Codes einen weißen Rand um den Code, damit dieser gelesen werden kann. Diesen Rand nennt man die Randzone. \n"
                        + "Die genauen bereiche können je nach QR Code Version variieren, aber es gibt immer bestimmte Bereiche, die nicht für die Nachricht verwendet werden können.")
                      )
                    else
                      emptyNode
                  }
                )
              },
              renderExercise(
                "Fasse in eigenen Worten zusammen, wie QR Codes aufgebaut sind. Gehe dabei auf die Bestandteile ein und wie Nachrichten kodiert und gespeichert werden und wie die Buchstaben in das Pixelmuster umgewandelt werden. Nutze dafür mindestens 50 Wörter.",
                Set(),
                13,
                None,
                "nachricht",
                Some(() => markChapterCompleted("nachricht")),
                minWordCount = Some(50)
                
              ),
              Rating("nachricht")
            )
            }
          else if hash == "#maskierung" then  
            {
              val showMaskierungInfoVar = infoBoxVar("qr-infobox-maskierung-1")
              val showMaskierungAufgabe4InfoVar = infoBoxVar("qr-infobox-maskierung-4")
              val showMaskierungAufgabe6InfoVar = infoBoxVar("qr-infobox-maskierung-6")
              val showMaskierungAufgabe8InfoVar = infoBoxVar("qr-infobox-maskierung-8")
              div(
                h1("Maskierung"),
                TimeBadge(45),
                renderExercise(
                   "Beschreibe was beim scannen des QR Codes passiert und stelle begründete Vermutungen dazu an.",
                  Set("unlesbar", "schwarze"),
                  1,
                  Some(img(src := resolveImageUrl("qr_unlesbar.png"), alt := "Unlesbar QR-Code", width := "300", height := "300")),
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-1", showMaskierungInfoVar)),
                  solutionText = Some(
                    "Der QR-Code wirkt unlesbar, weil viele schwarze Bereiche zusammenhaengen. Eine Maskierung sorgt spaeter fuer bessere Lesbarkeit."
                  )
                ),
                child <-- showMaskierungInfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Maskierung im QR-Code",
                      "Wie du vielleicht bemerkt hast, war der QR-Code von einem Scanner nicht lesbar. Um einen Besseren Kontrast zwischen weißen und schwarzen Pixeln herzustellen, werden Pixel nach einem bestimmten Muster(Maske) umgefärbt." +
                      "Diesen Prozess nennt man Maskierung. Die Maskierung sorgt dafür, dass der QR-Code besser lesbar ist und von Scannern zuverlässiger erkannt werden kann.\n" +
                      "Als nächstes schauen wir uns einmal an, wie genau die Maskierung funktioniert, welche Probleme es dabei gibt und wie diese gelöst werden können."
                    )
                  else
                    emptyNode
                },
                renderMaskierungAufgabe(),
                renderMaskierungAufgabe3(),
                renderExercise(
                  "Erläutere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet." +
                  " Beschreibe zusätzlich eine mögliche Lösung, um diese Probleme zu umgehen.",
                  Set("schwarz", "Maske"),
                  4,
                  None,
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-4", showMaskierungAufgabe4InfoVar)),
                  solutionText = Some(
                    "Eine feste Maske kann je nach Daten unguenstige Muster erzeugen, z. B. das viele benachbarte Pixel schwarz sind. " +
                    "Dadurch wird der QR-Code für einen Scanner schlechter lesbar oder kann mit Timing-Patterns kollidieren. " 
                  )
                ),
                child <-- showMaskierungAufgabe4InfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Mehrere Masken in QR-Codes",
                      "Um das Problem einer festen Maske zu lösen, werden in QR-Codes 8 verschiedene Masken nacheinander angewandt. " +
                      "Daraufhin wird jeweils bewertet, welche Maske den größten Kontrast zwischen schwarzen und weißen Pixeln generiert. Zusätzlich werden andere Kriterien, wie das Vermeiden des Timingpatterns(abwechselnde schwarze und weiße Pixel), berücksichtigt. Die Maske, die  alle Kriterien am Besten erfüllt, wird ausgewählt. " +
                      "Diese Maske wird anschließend auf den QR-Code angewandt. Dadurch wird sichergestellt, dass der QR-Code optimal lesbar ist. Die verschiedenen Masken sind im Bild dargestellt. Unter jeder Maske steht hierbei die Berechnungsvorschrift, die angibt, welche Pixel umgefärbt werden. Das \"%\" Zeichen steht hierbei für den Modulo-Operator - also den Rest einer Division.",
                      Some("/qr_masken.png")
                    )
                  else
                    emptyNode
                },
                renderExercise(
                  "Erkläre die Berechnungsvorschrift einer Maske deiner Wahl.",
                  Set("Zeile", "Spalte"),
                  5,
                  None,
                  "maskierung",
                  solutionText = Some(
                    "Beispiel: Maske 0 verwendet (Zeile + Spalte) % 2 == 0. " +
                    "Das bedeutet: Wenn die Summe aus Zeilen- und Spaltenindex gerade ist, wird das Pixel umgefaerbt."
                  )
                ),
                renderExercise(
                  "Vermute, woher der Scanner weiß, welche Maske angewandt wurde.",
                  Set(" "),
                  6,
                  None,
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-6", showMaskierungAufgabe6InfoVar))
                ),
                child <-- showMaskierungAufgabe6InfoVar.signal.map { show =>
                  if show then
                    div(
                      cls := "infotext",
                      h3("Metadaten in QR-Codes"),
                      img(
                        alt := "Metadaten in QR-Codes",
                        src := resolveImageUrl("qr_Bereiche.png"),
                        styleAttr := "max-width: 260px; margin: 1rem 0; border-radius: 4px;"
                      ),
                      p("Der Scanner weiß deshalb, welche Maske angewandt wurde, weil Metadaten (Daten über die Daten) auch in Form von Pixeln an bestimmten Stellen im QR-Code festgehalten werden. "),
                      p("Die Metadaten werden im Bild gelb und orange dargestellt."),
                      p("Zu diesen Metadaten zählt unter anderem die Nummer der verwendeten Maske. Diese Information wird an spezifischen Positionen im QR-Code kodiert."),
                      p("Damit der Scanner diese auslesen und die entsprechende Maske rückgängig machen kann, um die ursprünglichen Daten zu rekonstruieren."),
                      p("Weitere Metadaten sind beispielsweise die verwendete Fehlerkorrektur-Stufe und die Versionsnummer des QR-Codes.")
                    )
                  else
                    emptyNode
                },
                renderMaskierungAufgabe7(),
                renderExercise(
                  "Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkläre, wofür diese Eigenschaft nützlich sein könnte.",
                  Set("Daten"),
                  8,
                  None,
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-8", showMaskierungAufgabe8InfoVar)),
                  solutionText = Some(
                    "Wird die Maske zweimal angewandt, entstehen wieder die urspruenglichen Daten. Das vereinfacht das Maskieren und Demaskieren."
                  )
                ),
                child <-- showMaskierungAufgabe8InfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Vorteile der XOR-Operation",
                      "Die Tatsache, dass die XOR-Operation ihre eigene Umkehrfunktion ist, ist sehr praktisch. Dies führt dazu, dass durch 2-maliges Anwenden der gleichen Maske die ursprünglichen Daten wiederhergestellt werden. " +
                      "Der Scanner muss dadurch keine zwei verschiedenen Funktionen implementieren - eine zum Maskieren und eine zum Demaskieren. " +
                      "Stattdessen kann er einfach die gleiche XOR-Funktion ein zweites Mal anwenden. Dies spart Speicherplatz und " +
                      "reduziert Komplexität. " +
                      ""
                    )
                  else
                    emptyNode
                },
                renderExercise(
                  "Erläutere an einem Beispiel, wie die Maskierung und Demaskierung funktioniert. Gehe dabei auf die Probleme einer festen Maske ein und erkläre, wie die Auswahl der besten Maske funktioniert. Nutze dafür mindestens 50 Wörter.",
                  Set(),
                  9,
                  None,
                  "maskierung",
                  Some(() => markChapterCompleted("maskierung")),
                  minWordCount = Some(50)
                ),
                //renderMaskierung(),
                Rating("maskierung")
              )
            }
          else if hash == "#fehlerkorrektur" then  
            div(
              h1("Fehlerkorrektur"),
              TimeBadge(45),
              {
                val showFehlerkorrekturAufgabe2InfoVar = infoBoxVar("qr-infobox-fehlerkorrektur-2")
                val showFehlerkorrekturAufgabe3InfoVar = infoBoxVar("qr-infobox-fehlerkorrektur-3")
                val showFehlerkorrekturAufgabe6InfoVar = infoBoxVar("qr-infobox-fehlerkorrektur-6")
                val showFehlerkorrekturAufgabe8InfoVar = infoBoxVar("qr-infobox-fehlerkorrektur-8")
                val showFehlerkorrekturAufgabe10InfoVar = infoBoxVar("qr-infobox-fehlerkorrektur-10")
                div(
                  renderExercise(
                    "Durch verschiedene Umstände kann es dazu kommen, dass bestimmte Teile des QR-Codes beschädigt werden und somit nicht mehr erkennbar sind. Vergleiche die drei QR-Codes. Vermute, welcher der drei QR-Codes durch einen Scanner gelesen werden kann. Begründe deine Vermutung.",
                    Set(" "),
                    1,
                    Some(
                      div(
                        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: flex-end;",
                        div(
                          styleAttr := "text-align: center;",
                          imageWithFallback("qr_mitfehler", "QR-Code mit Stickern", 220),
                          p("QR-Code mit Stickern")
                        ),
                        div(
                          styleAttr := "text-align: center;",
                          imageWithFallback("qr_ohnefehler", "QR-Code ohne Sticker", 220),
                          p("QR-Code ohne Sticker")
                        ),
                        div(
                          styleAttr := "text-align: center;",
                          imageWithFallback("qr_MitLogo", "QR-Code mit Logo", 220),
                          p("QR-Code mit Logo")
                        )
                      )
                    ),
                    "fehlerkorrektur",
                    multipleChoice = Some(List(
                      ("QR-Code mit Stickern", false),
                      ("QR-Code ohne Sticker", true),
                      ("QR-Code mit Logo", true)
                    )),
                    showMCFeedback = false,
                    mcLabel = "Vermute welcher QR Code sich scannen lässt."
                  ),
                  renderExercise(
                    "Überprüfe nun deine Vermutung, indem du die QR-Codes scannst. Stelle Vermutungen an, wie das umgesetzt wird.",
                    Set(" "),
                    2,
                    None,
                    "fehlerkorrektur",
                    None,
                    Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-2", showFehlerkorrekturAufgabe2InfoVar)),
                    solutionText = Some(
                      "Durch die Bildschirmauflösung und Kamerafehler kann es dazu kommen, dass fälschlicherweise nicht alle QR Codes scanbar waren. Das ist jedoch nicht schlimm!"
                    ),
                    wrongHint = Some("Hinweis: Versuche mit dem Scanner so nah an die QR Codes zu gehen, sodass nur ein QR-Code gleichzeitig im Fokus ist."),
                    multipleChoice = Some(List(
                      ("QR-Code mit Stickern", true),
                      ("QR-Code ohne Sticker", true),
                      ("QR-Code mit Logo", true)
                    ))
                  ),
                  child <-- showFehlerkorrekturAufgabe2InfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Hinweis zur Fehlerkorrektur",
                        "Wie dir vielleicht aufgefallen ist, konnte die QR-Code mit den Überdfeckungen trotzdem gescannt werden. " +
                        "Wie genau das möglich ist und welche Grenzen es dabei gibt, schauen wir uns im Folgenden an. " +
                        "Dafür gehen wir erst einmal weg von QR-Codes und betrachten ein einfaches Beispiel einer Textnachricht. "
                      )
                    else
                      emptyNode
                  },
                  renderExercise(
                    "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \n" +
                    "Situation 1: Du telst deine Adresse deinem Freund mit einer Notiz mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \n" +
                    "Situation 2: Du telst deine Adresse deinem Freund mit einer Notiz mit. Leider hast du dich bei der Hausnummer verschrieben und statt 13 steht dort 73.",
                    Set(),
                    3,
                    None,
                    "fehlerkorrektur",
                    None,
                    Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-3", showFehlerkorrekturAufgabe3InfoVar)),
                    isExcursus = true
                  ),
                  child <-- showFehlerkorrekturAufgabe3InfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Fehlertypen erkennen",
                        "Es gibt zwei Haupttypen von Fehlern: " +
                        "Ausfallsfehler (auch Löschfehler genannt): Ein Zeichen wird vollständig entfernt oder ist unlesbar. " +
                        "Substitutionsfehler: Ein Zeichen wird durch ein anderes ersetzt. " +
                        "Substitutionsfehler sind oft schwieriger zu erkennen, da der Text syntaktisch korrekt bleibt, aber semantisch falsch ist. " +
                        "Durch Redundanz (zusätzliche Informationen) können beide Fehlertypen erkannt und teilweise korrigiert werden."
                      )
                    else
                      emptyNode
                  },
                  renderExercise(
                    "Eine Möglichkeit mit Fehlern umzugehen ist es, eine Prüfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gezählt und die Anzahl der Zeichen an das Ende angehangen. "+
                    "Ein Beispiel wäre, dass die Zeichenanzahl gezählt wird. Aus der Nachricht 'Hallo' würde dann die Nachricht 'Hallo5' werden. \n" +
                    "Beschreibe, welche Arten von Fehlern mit dieser Methode erkannt oder korrigiert werden können. Begründe deine Antwort.",
                    Set("Ausfallsfehler"),
                    4,
                    None,
                    "fehlerkorrektur",
                    solutionText = Some(
                      "Eine Pruefsumme kann Ausfallsfehler oder fehlende Zeichen erkennen, aber nicht direkt korrigieren."
                    ),
                    isExcursus = true
                  ),
                  renderExercise(
                    "Was sind die Probleme mit diesem Verfahren? Überlege dir dazu, wie die Nachricht 'Hallo5' mit einer Prüfsumme aussehen müsste.",
                    Set("Eindeutig"),
                    5,
                    None,
                    "fehlerkorrektur",
                    solutionText = Some(
                      "Das Problem ist, dass durch das erhalten einer Nachricht nicht klar ist, ob die Nachricht 'Hallo' mit der Prüfsumme '5' oder die Nachricht 'Hallo5' mit der Prüfsumme '6' gemeint ist. Es gibt also keine eindeutige Zuordnung zwischen Nachricht und Prüfsumme."
                    ),
                    isExcursus = true
                  ),
                  renderExercise(
                    "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden können am Beispiel der Nachricht '12345'. (Tipp: Überlege dir, was du machst, wenn eine Information von einer Person im Gespräch nicht verstanden wurde.)",
                    Set("2"),
                    6,
                    None,
                    "fehlerkorrektur",
                    infoCallback = Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-6", showFehlerkorrekturAufgabe6InfoVar)),
                    solutionText = Some(
                      "Man kann die Nachricht 2 mal senden, z.B. 1234512345. Wenn der erste Teil der Nachricht unleserlich ist, kann die Nachricht durch den 2. Teil dann immernoch gelesen werden."
                    ),
                    isExcursus = true
                  ),
                  child <-- showFehlerkorrekturAufgabe6InfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Redundanz statt Wiederholung",
                        "Nochmal senden (oder nochmal scannen) sollte möglichst vermieden werden. Besser ist es, die Redundanz in einer einzigen Nachricht zu uebertragen, z.B. indem die Nachricht doppelt enthalten ist. " +
                        "So entsteht nur ein Kommunikationsprozess statt zwei getrennten Uebertragungen. Kommunikationsprozesse sollten minimiert werden, um Zeitaufwand und Fehlerquellen zu reduzieren."
                      )
                    else
                      emptyNode
                  },
                  renderExercise(
                    "Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \n" +
                    "a) Ursprüngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \n" +
                    "b) Ursprüngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \n" +
                    "c) Ursprüngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'",
                    Set("50","66","90"),
                    7,
                    None,
                    "fehlerkorrektur",
                    solutionText = Some(
                      "a) 50 %, b) 66 %, c) 90 % können unleserlich sein und die Nachricht ist noch rekonstruierbar."
                    ),
                    isExcursus = true,
                    inlineNumericInputs = Some(List("a)", "b)", "c)")),
                    inlineNumericExpected = Some(List("50", "66", "90")),
                    inlineAllWrongHint = Some("Hinweis: Berechne den Anteil unleserlicher Daten in Prozent aus dem Verhältnis von Originalnachricht zur Fehlerkorrektur-Nachricht."),
                    showEditor = false
                  ),
                  renderExercise(
                    "Überlege dir, wie die Anzahl der zusätzlichen Daten mit der Fehlerkorrektur zusammenhängt. Erkläre warum ein hohes Korrekturlevel nicht immer die beste Wahl ist.",
                    Set("Daten", "zusätzlich"),
                    8,
                    None,
                    "fehlerkorrektur",
                    infoCallback = Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-8", showFehlerkorrekturAufgabe8InfoVar)),
                    solutionText = Some(
                      "Mehr Fehlerkorrektur bedeutet mehr genutzen Speicher. Dadurch steigt die Robustheit, aber es bleibt weniger Platz für Daten. Ein hohes Korrekturlevel ist nur sinnvoll, wenn die Umgebung viele Fehler verursacht."
                    ),
                    isExcursus = true
                  ),
                  child <-- showFehlerkorrekturAufgabe8InfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Trade-off Fehlerkorrektur",
                        "Mehr Fehlerkorrektur erhöht die Zuverlaessigkeit, benötigt aber mehr Speicherplatz. Dadurch sinkt der maximale Speicher für die Daten. " +
                        "Ein höheres Korrekturlevel ist nur dann sinnvoll, wenn viele Störungen erwartet werden."
                      )
                    else
                      emptyNode
                  },
                  renderFehlerkorrekturLueckentext(),
                  renderExercise(
                    "Erkläre, wie in QR-Codes mehr Daten gespeichert werden können und welche Auswirkungen das auf die Fehlerkorrektur hat.",
                    Set("weniger", "Daten"),
                    10,
                    None,
                    "fehlerkorrektur",
                    infoCallback = Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-10", showFehlerkorrekturAufgabe10InfoVar)),
                    solutionText = Some(
                      "Der verfügbare Speicher eines QR-Codes ist begrenzt. Wird ein höheres Korrekturlevel gewählt, wird mehr Speicher für Fehlerkorrektur benötigt, sodass weniger Platz für Daten bleibt. " +
                      "Umgekehrt: Werden alle verfügbaren Plätze mit Daten gefüllt, muss ein niedriges Korrekturlevel gewählt werden, um Redundanz zu sparen."
                    )
                  ),
                  child <-- showFehlerkorrekturAufgabe10InfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Speicheraustausch in QR-Codes",
                        "QR-Codes haben eine maximale Größe und damit einen begrenzten Gesamtspeicher. Ein Teil des Speichers wird immer für die Positionsmuster, Trennzeichen und Formatinformationen benötigt. " +
                        "Der restliche Speicher wird aufgeteilt zwischen Datenspeicher (für die eigentliche Information) und Fehlerkorrektur (für die Redundanz). " +
                        "Je höher das Korrekturlevel, desto mehr Speicher ist für Redundanz reserviert und desto weniger Speicher steht für die Daten zur Verfügung. " +
                        "Dies ist ein klassischer Trade-off: Mehr Fehlertoleranz bedeutet weniger Kapazität für Daten. \n" +
                        "Um das Problem der festen größe zu umgehen, gibt es verschiedene QR-Code Versionen mit unterschiedlicher Anzahl an Pixeln. Je mehr Daten gespeichert werden sollen, desto höher muss die Version gewählt werden, um genug Speicherplatz zu haben. Allerdings steigt mit der Version auch die Größe des QR-Codes, was wiederum die Lesbarkeit beeinträchtigen kann. Daher ist es wichtig, die richtige Balance zwischen Datenmenge, Fehlerkorrektur und QR-Code Größe zu finden. Die Größte Version 40 hat 177 x 177 Pixel."
                      )
                    else
                      emptyNode
                  },
                  renderQRCodeExerciseWithMetadata(
                    11,
                    "fehlerkorrektur",
                    "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit einem Klick auf 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten(Versionsnummer + Maskennummer) in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben. \n" +
                    "Beachte, dass der QR Code nicht Scanbar ist, da keine Maske auf den QR Code angewandt wird."
                    
                  ),
                  renderExercise(
                    "Erkläre in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zusätzlichen Daten und dem Korrekturlevel ein. Erläutere zusätzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird. Nutze dafür mindestens 50 Wörter.",
                    Set(),
                    12,
                    None,
                    "fehlerkorrektur",
                    Some(() => markChapterCompleted("fehlerkorrektur")),
                    minWordCount = Some(50)
                  )
                )
              },
              Rating("fehlerkorrektur")
            )
          else if hash == "#praxisanwendungen" then  
            div(
              h1("Praxisanwendungen"),
              TimeBadge(45),
              renderExercise(
                "Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begründe jeweils kurz.",
                Set("sinnvoll"),
                1,
                None,
                "praxisanwendungen",
                solutionText = Some(
                  "Sinnvoll sind z.B. Ticketkontrolle, Produktinfos im Handel und schnelle Links auf Plakaten."
                )
              ),
              renderExercise(
                "Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung.",
                Set("Schule", "Ziel", "Platzierung"),
                2,
                None,
                "praxisanwendungen",
                solutionText = Some(
                  "In der Schule koennte das Ziel sein, Material zu verteilen; der QR-Code enthaelt den Link, die Platzierung ist am Klassenraum."
                )
              ),
              renderExercise(
                "Die Schulleitung überlegt, wie man erfassen könnte, welche Schüler das Gelände verlassen. Momentan wird dafür eine Lehrkraft eingesetzt, welche sich die Schülerausweise zeigen lässt. \n"+
                "In dem Hausaufgabenheft werden Name und Geburtsdatum des Schülers überprüft. Ein Schüler darf das Gelände verlassen, wenn er über 16 Jahre alt ist. \n" +
                "Erläutere je 2 Vor- und Nachteile dieser Methode.",
                Set("Vorteil", "Nachteil"),
                3,
                None,
                "praxisanwendungen",
                solutionText = Some(
                  "Ein Vorteil ist die direkte Kontrolle durch eine Lehrkraft. Ein Nachteil ist der hohe Aufwand und moegliche Fehler beim Nachschlagen."
                )
              ),
              renderExercise(
                "Erläutere, wie du den Sachverhalt aus Aufgabe 3 mit einem QR-Code lösen würdest. Gehe dabei auch darauf ein, welche Daten im QR-Code gespeichert werden müssen und wie die Ausgangskontrolle dadurch automatisiert funktionieren könnte.",
                Set(),
                4,
                None,
                "praxisanwendungen"
              ),
              renderExercise(
                "Nimm begründet Stellung zum Nutzen von QR-Codes im Anwendungsfall von Aufgabe 3.",
                Set(),
                5,
                None,
                "praxisanwendungen"
              ),
              renderExercise(
                "Eine Lehrkraft äußert Bedenken darüber, dass Schüler zum einen die QR-Codes manipulieren könnten, um falsche Daten zu speichern. \n" +
                "Erläutere, wie du auf diese Bedenken reagierst. Begründe deine Antwort.",
                Set(),
                6,
                None,
                "praxisanwendungen"
              ),
              renderExercise(
                "Eine andere Lehrkraft befürchtet, dass die QR-Codes nach einem Jahr verschmutzen oder beschädigt sind, da das Lesen eines QR-Codes nicht mehr möglich ist, wenn schon ein Pixel umgefärbt ist. \n" +
                "Gehe auf die Bedenken ein und erläutere, ob du diese teilst oder nicht. Begründe deine Antwort.",
                Set(),
                7,
                None,
                "praxisanwendungen"
              ),
              renderExercise(
                "Eine Bank überlegt, QR-Codes für das Speichern von Banking-Daten (wie Kontonummer, PIN und Passwörter) auf Kundenkarten zu nutzen. \n" +
                "Erläutere, warum dies keine sinnvolle Anwendung für QR-Codes ist. Nenne mindestens zwei Gründe.",
                Set(),
                8,
                None,
                "praxisanwendungen"
              ),
              renderExercise(
                "Nenne ein weiteres Beispiel, bei dem der Einsatz von QR-Codes problematisch oder nicht sinnvoll wäre. Begründe deine Antwort.",
                Set(),
                9,
                None,
                "praxisanwendungen"
              ),
              renderExercise(
                "Vergleiche die Vor- und Nachteile von QR-Codes bei sensiblen Daten (wie Bankdaten) mit denen bei öffentlichen Informationen (wie Website-Links). Nutze dafür 50 Worten.",
                Set(),
                10,
                None,
                "praxisanwendungen",
                Some(() => markChapterCompleted("praxisanwendungen")),
                minWordCount = Some(50)
              ),
              div(
                h3("Aufgabe 11"),
                p("Um das Speichern der Daten einmal auszuprobieren, erstelle einen QR-Code mit deinen Daten (Du kannst dir dafür natürlich auch welche ausdenken)."),
                p(
                  "Gehe dafür auf die Webseite ",
                  a(
                    href := "https://www.qrcode-generator.de/",
                    target := "_blank",
                    rel := "noopener noreferrer",
                    styleAttr := "color: #4a90e2; text-decoration: underline;",
                    "https://www.qrcode-generator.de/"
                  ),
                  " und wähle dort den Typ 'VCard' aus. Fülle die Informationen aus."
                ),
                p("Überprüfe, ob der QR-Code funktioniert, indem du ihn mit deinem Smartphone scannst. Wenn alles funktioniert hat, kannst du dir den QR-Code als Bild speichern, ausdrucken und in deine Handyhülle legen."),
                p("Beschreibe, welche Daten du außerdem in einer VCard speichern könntest und welche Vorteile dies hat."),
                {
                  val checkboxStates = Var(List(false, false, false, false, false))
                  div(
                    styleAttr := "margin-top: 1rem; padding: 1rem; background-color: #f9f9f9; border-radius: 4px;",
                    h4("Fortschritt", styleAttr := "margin-top: 0;"),
                    div(
                      styleAttr := "display: flex; flex-direction: column; gap: 0.5rem;",
                      label(
                        input(
                          typ := "checkbox",
                          checked <-- checkboxStates.signal.map(_(0)),
                          onInput.mapToChecked --> { checked =>
                            checkboxStates.update(states => states.updated(0, checked))
                          }
                        ),
                        "Die Webseite geöffnet"
                      ),
                      label(
                        input(
                          typ := "checkbox",
                          checked <-- checkboxStates.signal.map(_(1)),
                          onInput.mapToChecked --> { checked =>
                            checkboxStates.update(states => states.updated(1, checked))
                          }
                        ),
                        " Typ 'VCard' ausgewählt und Informationen ausgefüllt"
                      ),
                      label(
                        input(
                          typ := "checkbox",
                          checked <-- checkboxStates.signal.map(_(2)),
                          onInput.mapToChecked --> { checked =>
                            checkboxStates.update(states => states.updated(2, checked))
                          }
                        ),
                        " QR-Code mit Smartphone gescannt und getestet"
                      ),
                      label(
                        input(
                          typ := "checkbox",
                          checked <-- checkboxStates.signal.map(_(3)),
                          onInput.mapToChecked --> { checked =>
                            checkboxStates.update(states => states.updated(3, checked))
                          }
                        ),
                        " QR-Code als Bild gespeichert/ausgedruckt"
                      ),
                      label(
                        input(
                          typ := "checkbox",
                          checked <-- checkboxStates.signal.map(_(4)),
                          onInput.mapToChecked --> { checked =>
                            checkboxStates.update(states => states.updated(4, checked))
                          }
                        ),
                        " Beschreibung weiterer VCard-Daten und Vorteile verfasst"
                      )
                    )
                  )
                },
                renderExercise(
                  "Beschreibe, welche Daten du außerdem in einer VCard speichern könntest und welche Vorteile dies hat.",
                  Set(),
                  11,
                  None,
                  "praxisanwendungen"
                )
              ),
              Rating("praxisanwendungen")
            )
          else if hash == "#zusammenfassung" then
            div(
              h1("Zusammenfassung"),
              TimeBadge(60),
              {
                val zusammenfassungMessageVar = Var("")
                val metadataActive = Var(false)
                val errorCorrectionActive = Var(false)
                val maskActive = Var(false)
                val exceedsLimitVar = Var(false)
                val maxChars = 17
                
                // Error Correction Zones für Zusammenfassung
                val allErrorCorrectionZones = Map(
                  1 -> Set(198,199,219,220,240,241,261,262),
                  2 -> Set(282,283,303,304,324,325,345,346),
                  3 -> Set(366,367,387,388,408,409,429,430),
                  4 -> Set(196,197,217,218,238,239,259,260),
                  5 -> Set(193,194,214,215,235,236,256,257),
                  6 -> Set(191,192,212,213,233,234,254,255),
                  7 -> Set(189,190,210,211,231,232,252,253)
                )
                
                def getErrorCorrectionPixels(text: String): Set[Int] =
                  val checksum = text.map(_.toInt).sum
                  val zoneIndices = (1 to 7).filter(i => ((checksum + i) % 7) < 4).toSet
                  zoneIndices.flatMap { zoneIdx =>
                    val allPixels = allErrorCorrectionZones.getOrElse(zoneIdx, Set[Int]()).toList.sorted
                    val numPixelsToSelect = math.max(1, (allPixels.length * 0.4).toInt)
                    val seed = (checksum * 17 + zoneIdx * 31) % allPixels.length
                    allPixels.zipWithIndex
                      .filter { case (_, idx) => (idx + seed) % allPixels.length < numPixelsToSelect }
                      .map(_._1)
                      .toSet
                  }
                
                
                div(
                  h3("Aufgabe 1"),
                  p("Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit den Checkboxen kannst du Metadaten anzeigen oder die Fehlerkorrektur-Pixel sehen. Teste verschiedene Eingaben und überprüfe das Ergebnis mit einem QR-Code Scanner."),
                  div(
                    styleAttr := "display: flex; gap: 9rem; align-items: flex-start; margin-bottom: 2rem;",
                  // Linke Spalte: Input und Checkboxen
                  div(
                    styleAttr := "flex: 0 1 250px;",
                    div(
                      cls := "qr-input-container",
                      input(
                        typ := "text",
                        placeholder := "Deine Nachricht hier...",
                        cls := "message-input",
                        styleAttr := "min-height: 50px; font-size: 16px; width: 100%;",
                        controlled(
                          value <-- zusammenfassungMessageVar.signal,
                          onInput.mapToValue.map { text =>
                            if text.length > maxChars then
                              exceedsLimitVar.set(true)
                            else
                              exceedsLimitVar.set(false)
                            text.take(maxChars)
                          } --> zusammenfassungMessageVar.writer
                        )
                      ),
                      child <-- exceedsLimitVar.signal.map { exceeds =>
                        if exceeds then
                          div(
                            styleAttr := "color: red; font-weight: bold; margin-top: 0.5rem;",
                            "Maximale Anzahl an Zeichen für den QR Code Typen erreicht"
                          )
                        else
                          emptyNode
                      }
                    ),
                    div(
                      styleAttr := "margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem;",
                      label(
                        styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 0.75rem; background-color: #ffcccb; border-radius: 4px; border: 1px solid #ff9999; user-select: none; white-space: nowrap;",
                        input(
                          typ := "checkbox",
                          checked <-- metadataActive.signal,
                          onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> metadataActive.writer,
                          styleAttr := "cursor: pointer;"
                        ),
                        span("Metadaten", styleAttr := "font-weight: 500; font-size: 0.9rem;")
                      ),
                      label(
                        styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 0.75rem; background-color: #bbdefb; border-radius: 4px; border: 1px solid #64b5f6; user-select: none; white-space: nowrap;",
                        input(
                          typ := "checkbox",
                          checked <-- errorCorrectionActive.signal,
                          onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> errorCorrectionActive.writer,
                          styleAttr := "cursor: pointer;"
                        ),
                        span("Fehlerkorrektur", styleAttr := "font-weight: 500; font-size: 0.9rem;")
                      ),
                      label(
                        styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 0.75rem; background-color: #fff3cd; border-radius: 4px; border: 1px solid #ffc107; user-select: none; white-space: nowrap;",
                        input(
                          typ := "checkbox",
                          checked <-- maskActive.signal,
                          onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> maskActive.writer,
                          styleAttr := "cursor: pointer;"
                        ),
                        span("Maske", styleAttr := "font-weight: 500; font-size: 0.9rem;")
                      )
                    )
                  ),
                  // Mitte: Gitter
                  div(
                    styleAttr := "flex: 0 0 auto;",
                    child <-- Signal.combine(
                      zusammenfassungMessageVar.signal,
                      metadataActive.signal,
                      errorCorrectionActive.signal
                    ).map { case (text: String, isMeta: Boolean, isError: Boolean) =>
                      div(
                        styleAttr := "display: flex; flex-direction: column; gap: 0.5rem;",
                        renderQRCodeSimulationWithBothMetadata(
                          text,
                          Set(8,29,92,113,155,176,173,168,169,170,181,182,183,184,187,188,302,365,386,407,428),
                          Set(50,71,175,172,171,323,344,185,186),
                          isMeta,
                          getErrorCorrectionPixels(text),
                          isError,
                          allErrorCorrectionZones
                        )
                      )
                    }
                  ),
                  // Rechte Spalte: Finaler scanbarer QR-Code
                  child <-- Signal.combine(
                    zusammenfassungMessageVar.signal,
                    metadataActive.signal,
                    errorCorrectionActive.signal,
                    maskActive.signal
                  ).map { case (text: String, isMeta: Boolean, isError: Boolean, isMask: Boolean) =>
                    val allReady = text.nonEmpty && isMeta && isError && isMask
                    if allReady then
                      div(
                        styleAttr := "flex: 0 0 auto;",
                        h4("Scanbarer QR Code", styleAttr := "margin-top: 0; margin-bottom: 0.5rem;"),
                        generateQRCode(text, 220)
                      )
                    else if text.nonEmpty then
                      val missing = List(
                        if !isMeta then Some("Metadaten") else None,
                        if !isError then Some("Fehlerkorrektur") else None,
                        if !isMask then Some("Maske") else None
                      ).flatten.mkString(", ")
                      
                      div(
                        styleAttr := "color: #d32f2f; font-weight: bold; padding: 0.75rem; background-color: #ffebee; border-radius: 4px; border: 1px solid #d32f2f; font-size: 0.85rem; max-width: 200px;",
                        s"Noch erforderlich: $missing"
                      )
                    else
                      emptyNode
                  }
              )
            )
          },
          renderExercise(
            "Beschreibe in eigenen Worten die Bestandteile eines QR-Codes und deren Funktion mit mindestens 50 Wörtern.",
            Set(),
            2,
            None,
            "zusammenfassung",
            None,
            None,
            Some(50)
          ),
          erstelleZusammenfassungsBlatt(),
          //renderZusammenfassungQuiz(),
          Rating("zusammenfassung")
        )
          else if hash == "#barcodes" then
            div(
              h1("Barcode"),
              TimeBadge(30),
              renderExercise(
                "Recherchiere im Internet nach Barcodes. Beschreibe den Aufbau eines typischen Barcodes.",
                Set(" "),
                1,
                None,
                "barcodes",
                
              ),
              renderExercise(
                "Erkläre, wie die Fehlerkorrektur bei Barcodes funktioniert und welche Probleme es dabei gibt.",
                Set(" "),
                2,
                None,
                "barcodes",
                
              ),
              renderExercise(
                "Vergleiche Barcodes mit QR-Codes. Nenne jeweils 2 Gemeinsamkeiten und 2 Unterschiede.",
                Set(" "),
                3,
                None,
                "barcodes"
              ),
              renderExercise(
                "Stell dir vor, du sollst für ein Projekt entscheiden, ob Barcodes oder QR-Codes verwendet werden. Nimm begründet Stellung, wofür du dich entscheiden würdest und in welchen Situationen welche Codes sinnvoller sind.",
                Set(),
                4,
                None,
                "barcodes",
                Some(() => markChapterCompleted("barcodes"))
              ),
              Rating("barcodes")
            )
          else
            div(
              h1("Einleitung"),
              TimeBadge(15),
              div(
                styleAttr := "margin-top: 2rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));",
                div(
                  styleAttr := "padding: 1.25rem; background: #eef5ff; border-radius: 10px; border-left: 4px solid #4a78d3;",
                  h3(styleAttr := "margin-top: 0; color: #1f3b73;", "Benötigte Arbeitsmaterialien"),
                  p(styleAttr := "margin: 0.5rem 0; color: #2d4a7a;", "Geräte"),
                  ul(
                    styleAttr := "margin: 0.5rem 0; padding-left: 1.25rem; color: #2d4a7a;",
                    li("Computer mit Internetzugang"),
                    li("Smartphone mit Kamera")
                  )
                ),
                div(
                  styleAttr := "padding: 1.25rem; background: #eef8f2; border-radius: 10px; border-left: 4px solid #2f7d4e;",
                  h3(styleAttr := "margin-top: 0; color: #1d4b2f;", "Scanner-Tools"),
                  p(styleAttr := "margin: 0.5rem 0; color: #2b5a3d;", "Apps und Kamera"),
                  ul(
                    styleAttr := "margin: 0.5rem 0; padding-left: 1.25rem; color: #2b5a3d;",
                    li("QR-Code-Scanner-App"),
                    li("Alternativ: Kamera-App mit QR-Scan")
                  )
                ),
              ),
              allgemeineInfos(
                "QR-Code-Scanner installieren und verwenden",
                "Um QR-Codes mit deinem Smartphone zu scannen, benötigst du eine Scanner-App:\n" +
                "Das Arbeitsheft wurde mit der App 'QR- & Barcode- Scanner'aus dem Appstore von TeaCapps getestet. Für eine reibungslose Bearbeitung wird empfohlen, diese App zu verwenden.\n" +
                "Die meisten Handys haben heute auch in der Kamera einen eingebauten QR-Code Scanner. Dieser kann auch benutzt werden.\n" +
                "Um einen QR-Code zu scannen, öffne die Scanner-App oder die Kamera deines Smartphones und richte sie auf den QR-Code. Die App oder Kamera erkennt den Code automatisch und zeigt dir den Inhalt an.\n" +
                "Tipp: Achte darauf, dass der QR-Code gut beleuchtet und nicht zu verdeckt ist, damit der Scanner ihn schnell erkennen kann."
              ),
              allgemeineInfos(
                "Abgabe der JSON-Datei am Ende",
                "Am Ende des Arbeitsheftes gibst du deine Ergebnisse als JSON-Datei ab.\n" +
                "Klicke dazu auf den Button " +
                "\"Ergebnisse Abgeben\"" +
                " in der Navigation. Dadurch wird eine Datei mit deinen Antworten heruntergeladen.\n" +
                "Lade diese Datei nach der Bearbeitung des Arbeitsheftes in den Abgabeordner hoch."
              ),
              
              Infotext(
                "Einleitung",
                "Du kennst das bestimmt, dass du mit deinem Smartphone kurz einen QR-Code scannst und  " +
                "anschließend zu einer Webseite weitergeleitet wirst. Doch was genau passiert dabei? " +
                "Für welche Anwendungen ist es sinnvoll einen QR-Code zu nutzen und für welche nicht? " +
                "Die Antworten auf diese Fragen findest du in den folgenden Kapiteln, welche du auf der linken Seite auswählen kannst. " +
                "In der rechten oberen Ecke findest du jeweils eine Zeitabschätzung, wie lange das Kapitel dauert." +
                "\n" +
                "Viel Spaß!"
              ),

              div(
                styleAttr := "margin: 2rem 0; padding: 1.5rem; background-color: #f5f5f5; border-radius: 8px;",
                h3("Deine Angaben", styleAttr := "margin-top: 0;"),
                div(
                  styleAttr := "display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;",
                  label(
                    "Name:",
                    styleAttr := "font-weight: bold; font-size: 1rem;"
                  ),
                  input(
                    typ := "text",
                    placeholder := "Dein Name",
                    styleAttr := "padding: 0.75rem; font-size: 1rem; border: 1px solid #ccc; border-radius: 4px;",
                    value <-- studentNameVar.signal,
                    onInput.mapToValue --> { name =>
                      studentNameVar.set(name)
                      saveStudentName(name)
                    }
                  )
                )
              ),
             
              div(
                {
                  val showInfoBoxVar = infoBoxVar("qr-infobox-einfuehrung-1")
                  div(
                    renderExercise(
                      "Scanne die QR-Codes und beschreibe deren Inhalte. Beschreibe zusätzlich die Gemeinsamkeiten.", 
                      Set("qr"), 
                      1, 
                      Some(div(
                        cls := "qr-codes-grid",
                        generateQRCodeWithCaption("https://example.com", "Beispiel QR-Code 1", 150),
                        imageWithCaption("/qr_example.png", "Beispiel QR-Code 2", 150),
                        generateQRCodeWithCaption("Benutze das Wort: QRCode in deiner Abgabe", "Beispiel QR-Code 3", 150)
                      )),
                      "einfuehrung",
                      None,
                      Some(() => markInfoBoxShown("qr-infobox-einfuehrung-1", showInfoBoxVar)),
                      solutionText = Some(
                        "Die QR-Codes enthalten unterschiedliche Inhalte wie eine Webseite, Kontaktdaten von Max Mustermann und einen Hinweis für die Abgabe."
                      )
                    ),
                    child <-- showInfoBoxVar.signal.map { show =>
                      if show then
                        Infotext(
                          "Informationen zur Bearbeitung",
                          "Durch das Klicken auf den \"Abgeben\" Button bei den Aufgaben werden deine Antworten lokal in deinem Browser gespeichert. Das Textfeld färbt sich grün, wenn alle Schlüsselwörter, welche gefordert waren, im Text vorhanden sind. Ansonsten färbt es sich rot. Zusätzlich gibt es im Arbeitsheft immer wieder Informationsboxen, welche nach dem Bearbeiten der Aufgabe angezeigt werden. Falls du mal bei einer Aufgabe nicht weiter kommen solltest, kannst du dir durch einen Klick auf 'Lösung zeigen' die Lösung anzeigen lassen. Alle Benötigen Keywörter sind in der Lösung fett markiert. Probiere es an der Aufgabe 1 einemal selbst aus, indem du deine Eingabe änderst, falls du sie beim ersten mal richtig gelöst hast." 
                        )
                      else
                        emptyNode
                    }
                  )
                },
                renderExerciseMC(
                  "Welche Aussage trifft auf QR-Codes zu?",
                  List(
                    ("QR-Codes haben immer gleich viele weiße und schwarze Pixel.", false),
                    ("QR-Codes können ausschließlich Links speichern.", false),
                    ("QR-Codes können verschiedene Arten von Informationen speichern, nicht nur Links.", true)
                  ),
                  2,
                  "einfuehrung"
                ),
                renderExercise("Beschreibe in 50 Worten, welche Vorstellungen du davon hast, wie QR-Codes funktionieren.", Set(), 3, None, "einfuehrung", Some(() => markChapterCompleted("einfuehrung")), minWordCount = Some(50)),
              ),
              Rating("einfuehrung"),
              {
                val praxisUnlockedSignal = completedChaptersVar.signal.map(completed => Set("nachricht", "maskierung", "fehlerkorrektur").subsetOf(completed))
                val zusammenfassungUnlockedSignal = completedChaptersVar.signal.map(_.contains("praxisanwendungen"))
                val barcodeUnlockedSignal = merkzettelCreatedVar.signal

                def lockedNavButton(label: String, hash: String, unlockedSignal: Signal[Boolean]): Element =
                  a(
                    href <-- unlockedSignal.map(unlocked => if unlocked then hash else "#"),
                    styleAttr <-- unlockedSignal.map(unlocked => if unlocked then "" else "pointer-events: none; opacity: 0.6;"),
                    button(label, cls := "btn-primary"),
                    child <-- unlockedSignal.map { unlocked =>
                      if unlocked then
                        emptyNode
                      else
                        span(styleAttr := "margin-left: 0.4rem; color: #607d8b; font-size: 0.85rem;", "locked")
                    }
                  )

                div(
                  styleAttr := "margin-top: 1.5rem; padding: 1rem; background: #f7f7f7; border-radius: 10px; border: 1px solid #e0e0e0;",
                  h3("Was kommt als Nächstes?"),
                  p("Nun kannst du frei wählen, in welcher Reihenfolge du die Kapitel Nachrichten schreiben, Maskierung und Fehlerkorrektur bearbeitest."),
                  p("Wenn du alle drei Kapitel bearbeitet hast, kannst du zum Kapitel Praxisanwendungen übergehen, in welchem du dein Wissen auf konkrete Anwendungsfälle übertragen kannst."),
                  p("Im Kapitel Zusammenfassung erstellst du dir zum Schluss dann deinen eigenen Spickzettel, auf dem die wichtigsten Informationen zu QR-Codes übersichtlich dargestellt sind. Dafür werden jeweils deine Antworten aus den Kapiteln mit verwendet. Diese kannst du zum Schluss nochmal anpassen."),
                  p("Wenn du damit auch Fertig bist, kannst du dir im Zusatzkapitel Barcode noch einen kurzen Überblick über eindimensionale Barcodes verschaffen und diese mit QR-Codes vergleichen."),
                  div(
                    styleAttr := "display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;",
                    div(
                      styleAttr := "display: grid; gap: 0.5rem;",
                      div(
                        a(
                          href := "#nachricht",
                          button("Nachrichten schreiben", cls := "btn-primary")
                        )
                      ),
                      div(
                        a(
                          href := "#maskierung",
                          button("Maskierung", cls := "btn-primary")
                        )
                      ),
                      div(
                        a(
                          href := "#fehlerkorrektur",
                          button("Fehlerkorrektur", cls := "btn-primary")
                        )
                      )
                    ),
                    span(styleAttr := "font-weight: 700; color: #607d8b;", "->"),
                    div(
                      lockedNavButton("Praxisanwendungen", "#praxisanwendungen", praxisUnlockedSignal)
                    ),
                    span(styleAttr := "font-weight: 700; color: #607d8b;", "->"),
                    div(
                      lockedNavButton("Zusammenfassung", "#zusammenfassung", zusammenfassungUnlockedSignal)
                    ),
                    span(styleAttr := "font-weight: 700; color: #607d8b;", "->"),
                    div(
                      lockedNavButton("Barcode", "#barcodes", barcodeUnlockedSignal)
                    )
                  )
                )
              },
            )
        }
      )
    )
  end appElement

  def renderPixelAreaWithSave(cols: Int, rows: Int, title: String, savedPattern: Var[Vector[Boolean]], chapter: String = "", taskText: String = ""): Element =
    val total = cols * rows
    val storedGrid: Option[Vector[Boolean]] =
      if chapter.nonEmpty && taskText.nonEmpty then
        loadFromLocalStorage(chapter)
          .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
          .map { answer =>
            answer.filter(ch => ch == '0' || ch == '1').padTo(total, '0').take(total).map(_ == '1').toVector
          }
      else None
    val initialGrid = storedGrid.getOrElse(Vector.fill(total)(false))
    val pixelGrid: Var[Vector[Boolean]] = Var(initialGrid)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    // Keep the shared pattern in sync so validations survive reloads
    if initialGrid.nonEmpty then savedPattern.set(initialGrid)

    div(
      h2(title),
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
      // Auto-save on pixel change
      child <-- pixelGrid.signal.map { grid =>
        val binary = grid.map(b => if b then '1' else '0').mkString
        if chapter.nonEmpty && taskText.nonEmpty then
          persistExerciseAnswer(chapter, taskText, binary)
        emptyNode
      },
      div(
      cls := "pixel-submit-area",
      button(
          "Abgeben",
          onClick.map(_ => {
            val current = pixelGrid.now()
            savedPattern.set(current)
            current
          })
            .map(_ => Some(true)) --> lastCheckVar.writer,
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        )
      )
    )
  end renderPixelAreaWithSave

  def renderPixelAreaWithValidation(cols: Int, rows: Int, title: String, expectedPattern: Var[Vector[Boolean]], rowsPerChar: Int, chapter: String = "", taskText: String = ""): Element =
    val total = cols * rows
    val storedGrid: Option[Vector[Boolean]] =
      if chapter.nonEmpty && taskText.nonEmpty then
        loadFromLocalStorage(chapter)
          .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
          .map(ans => ans.filter(ch => ch == '0' || ch == '1').padTo(total, '0').take(total).map(_ == '1').toVector)
      else None
    val pixelGrid: Var[Vector[Boolean]] = Var(storedGrid.getOrElse(Vector.fill(total)(false)))
    val lastCheckVar: Var[Option[Boolean]] = Var(None)

    div(
      h2(title),
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
      // Auto-save on pixel change
      child <-- pixelGrid.signal.map { grid =>
        val binary = grid.map(b => if b then '1' else '0').mkString
        if chapter.nonEmpty && taskText.nonEmpty then
          persistExerciseAnswer(chapter, taskText, binary)
        emptyNode
      },
      div(
      cls := "pixel-submit-area",
      button(
          "Abgeben",
          onClick.map(_ => {
            val current = pixelGrid.now()
            val expected = expectedPattern.now()
            if expected.isEmpty then
              false
            else
              // Check each character (B, e, t, t)
              val chars = List(0, 1, 2, 2) // B=0, e=1, t=2, t=2 (indices into the 3 rows)
              val correct = chars.zipWithIndex.forall { case (charIdx, wordIdx) =>
                val rowStart = charIdx * cols
                val rowEnd = rowStart + cols
                val targetStart = wordIdx * cols
                val targetEnd = targetStart + cols
                if rowEnd <= expected.length && targetEnd <= current.length then
                  val expectedRow = expected.slice(rowStart, rowEnd)
                  val currentRow = current.slice(targetStart, targetEnd)
                  expectedRow == currentRow
                else
                  false
              }
              correct
          })
            .map(ok => Some(ok)) --> lastCheckVar.writer,
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        )
      )
    )
  end renderPixelAreaWithValidation

  def renderPixelArea(cols: Int, rows: Int, correctPattern: String, title: String = "Pixel Area"): Element =
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
      h2(title),
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
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        )
      )
    )
  end renderPixelArea

  // Pixel Area mit Zeilen-Labels links (z.B. Buchstaben vor jeder Pixelzeile)
  def renderPixelAreaWithLabels(cols: Int, rows: Int, title: String, labels: List[String], expectedPatterns: List[String] = Nil, chapter: String = "", taskText: String = ""): Element =
    val total = cols * rows
    val storedGrid: Option[Vector[Boolean]] =
      if chapter.nonEmpty && taskText.nonEmpty then
        loadFromLocalStorage(chapter)
          .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
          .map(ans => ans.filter(ch => ch == '0' || ch == '1').padTo(total, '0').take(total).map(_ == '1').toVector)
      else None
    val pixelGrid: Var[Vector[Boolean]] = Var(storedGrid.getOrElse(Vector.fill(total)(false)))
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val rowStatusVar: Var[Vector[Option[Boolean]]] = Var(Vector.fill(rows)(None))

    div(
      h2(title),
      div(
        cls := "pixel-grid-labeled",
        children <-- pixelGrid.signal.combineWith(rowStatusVar.signal).map { case (grid, rowStatus) =>
          (0 until rows).toList.map { r =>
            val rowStart = r * cols
            val status = rowStatus.lift(r).flatten
            val rowBg = status match
              case Some(true)  => "background: rgba(46, 204, 113, 0.2); border-radius: 4px; padding: 2px;"
              case Some(false) => "background: rgba(231, 76, 60, 0.2); border-radius: 4px; padding: 2px;"
              case None        => ""
            div(
              styleAttr := s"display: flex; align-items: center; gap: 6px; margin-bottom: 4px; $rowBg",
              span(labels.lift(r).getOrElse("").take(1), styleAttr := "width: 18px; text-align: center; font-weight: bold;"),
              div(
                styleAttr := s"display: grid; grid-template-columns: repeat(${cols}, 28px); grid-auto-rows: 28px; gap: 1px;",
                (0 until cols).toList.map { c =>
                  val idx = rowStart + c
                  div(
                    cls := (if grid(idx) then "pixel on" else "pixel"),
                    onClick --> (_ => pixelGrid.update(g => g.updated(idx, !g(idx))))
                  )
                }
              )
            )
          }
        }
      ),
      div(
        cls := "pixel-submit-area",
        button(
          "Abgeben",
          onClick.map { _ =>
            val current = pixelGrid.now()
            val expectedRows: List[Vector[Boolean]] = expectedPatterns.take(rows).map { bits =>
              bits.trim.filter(ch => ch == '0' || ch == '1').padTo(cols, '0').take(cols).map(_ == '1').toVector
            }
            val statuses: Vector[Option[Boolean]] = (0 until rows).toVector.map { r =>
              val rowSlice = current.slice(r * cols, (r + 1) * cols)
              expectedRows.lift(r).map(exp => rowSlice == exp)
            }
            rowStatusVar.set(statuses)
            Some(statuses.flatten.forall(identity))
          } --> lastCheckVar.writer,
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        ),
        child <-- lastCheckVar.signal.map {
          case Some(true) =>
            span(
              "Richtrig!",
              styleAttr := "color: #4CAF50; font-weight: bold; margin-top: 0.5rem; display: inline-block;"
            )
          case _ => emptyNode
        }
      )
    )
  end renderPixelAreaWithLabels

  def renderMenu(): Element =
    val menuItems = List(
      ("#einfuehrung", "Einführung", "einfuehrung"),
      ("#nachricht", "Nachrichten schreiben", "nachricht"),
      ("#maskierung", "Maskierung", "maskierung"),
      ("#fehlerkorrektur", "Fehlerkorrektur", "fehlerkorrektur"),
      ("#praxisanwendungen", "Praxisanwendungen", "praxisanwendungen"),
      ("#zusammenfassung", "Zusammenfassung", "zusammenfassung"),
      ("#barcodes", "Barcode", "barcodes")
    )
    val praxisPrereq = Set("nachricht", "maskierung", "fehlerkorrektur")
    val praxisUnlockedSignal = completedChaptersVar.signal.map(completed => praxisPrereq.subsetOf(completed))
    val zusammenfassungUnlockedSignal = completedChaptersVar.signal.map(_.contains("praxisanwendungen"))
    val barcodesUnlockedSignal = merkzettelCreatedVar.signal

    div(
      cls := "navbar",
      // Header mit Titel
      div(
        cls := "navbar-header",
        h2("QR-Code"),
        p("Wie wird ein QR-Code erstellt?" )
      ),
      // Navigation Items
      div(
        cls := "navbar-nav",
        menuItems.map { case (hash, label, chapterKey) =>
          val isPraxis = chapterKey == "praxisanwendungen"
          val isZusammenfassung = chapterKey == "zusammenfassung"
          val isBarcodes = chapterKey == "barcodes"
          div(
            cls <-- (if isPraxis then
              completedChaptersVar.signal.combineWith(praxisUnlockedSignal).map { case (completed, unlocked) =>
                if !unlocked then
                  "menu-item locked"
                else if completed.contains(chapterKey) then
                  "menu-item completed"
                else
                  "menu-item"
              }
            else if isZusammenfassung then
              completedChaptersVar.signal.combineWith(merkzettelCreatedVar.signal).map { case (completed, merkzettelCreated) =>
                val unlocked = completed.contains("praxisanwendungen")
                if !unlocked then
                  "menu-item locked"
                else if completed.contains(chapterKey) || merkzettelCreated then
                  "menu-item completed"
                else
                  "menu-item"
              }
            else if isBarcodes then
              completedChaptersVar.signal.combineWith(barcodesUnlockedSignal).map { case (completed, unlocked) =>
                if !unlocked then
                  "menu-item locked"
                else if completed.contains(chapterKey) then
                  "menu-item completed"
                else
                  "menu-item"
              }
            else
              completedChaptersVar.signal.map { completed =>
                if completed.contains(chapterKey) then
                  "menu-item completed"
                else
                  "menu-item"
              }
            ),
            if isPraxis then
              a(
                href <-- praxisUnlockedSignal.map(unlocked => if unlocked then hash else "#"),
                span(label),
                child <-- praxisUnlockedSignal.map { unlocked =>
                  if unlocked then
                    emptyNode
                  else
                    span(styleAttr := "margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;", "locked")
                },
                child <-- completedChaptersVar.signal.combineWith(praxisUnlockedSignal).map { case (completed, unlocked) =>
                  if unlocked && completed.contains(chapterKey) then
                    span(styleAttr := "margin-left: 0.5rem; color: #123a7a; font-weight: 700;", "✓")
                  else
                    emptyNode
                },
                onMouseEnter --> { _ =>
                  // Hover-Effekt könnten wir mit einem Var implementieren
                }
              )
            else if isZusammenfassung then
              a(
                href <-- zusammenfassungUnlockedSignal.map(unlocked => if unlocked then hash else "#"),
                span(label),
                child <-- zusammenfassungUnlockedSignal.map { unlocked =>
                  if unlocked then
                    emptyNode
                  else
                    span(styleAttr := "margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;", "locked")
                },
                child <-- completedChaptersVar.signal.combineWith(zusammenfassungUnlockedSignal).map { case (completed, unlocked) =>
                  if unlocked && completed.contains(chapterKey) then
                    span(styleAttr := "margin-left: 0.5rem; color: #123a7a; font-weight: 700;", "✓")
                  else
                    emptyNode
                },
                onMouseEnter --> { _ =>
                  // Hover-Effekt könnten wir mit einem Var implementieren
                }
              )
            else if isBarcodes then
              a(
                href <-- barcodesUnlockedSignal.map(unlocked => if unlocked then hash else "#"),
                span(label),
                child <-- barcodesUnlockedSignal.map { unlocked =>
                  if unlocked then
                    emptyNode
                  else
                    span(styleAttr := "margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;", "locked")
                },
                child <-- completedChaptersVar.signal.combineWith(barcodesUnlockedSignal).map { case (completed, unlocked) =>
                  if unlocked && completed.contains(chapterKey) then
                    span(styleAttr := "margin-left: 0.5rem; color: #123a7a; font-weight: 700;", "✓")
                  else
                    emptyNode
                },
                onMouseEnter --> { _ =>
                  // Hover-Effekt könnten wir mit einem Var implementieren
                }
              )
            else
              a(
                href := hash,
                span(label),
                child <-- completedChaptersVar.signal.map { completed =>
                  if completed.contains(chapterKey) then
                    span(styleAttr := "margin-left: 0.5rem; color: #123a7a; font-weight: 700;", "✓")
                  else
                    emptyNode
                },
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
          "Ergebnisse Abgeben",
          cls := "save-button",
          onClick --> { _ =>
            // Use the in-memory allResponsesVar which has all current data
            val chapters = List("einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "praxisanwendungen", "zusammenfassung", "barcodes")
            val currentData = allResponsesVar.now()
            val allData = chapters.map { chapter =>
              val data = currentData.getOrElse(chapter, ChapterData(chapter, List(), RatingData(0, 0, 0, 0, "")))
              chapter -> ensureAllExercises(chapter, data)
            }.toMap
            
            val json = scala.scalajs.js.JSON.stringify(
              scala.scalajs.js.Dynamic.literal(
                timestamp = new js.Date().toISOString(),
                studentName = studentNameVar.now(),
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
        ,
        div(
          styleAttr := "margin-top: 0.75rem; text-align: center; font-size: 0.85rem; color: rgba(255, 255, 255, 0.8);",
          "Autor: Lucas Reisig"
        )
      )
    )
  end renderMenu

  def renderMaskierungAufgabe(): Element =
    val chapter = "maskierung"
    val taskText = "Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze."
    // Force recompile - all selects for answers 1-4
    val xorInfoKey = "qr-infobox-maskierung-2-xor"
    
    // Load saved data from localStorage
    val savedData = loadFromLocalStorage("maskierung")
      .flatMap(_.exercises.find(_.task == "Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze.").flatMap(_.answer))
    
    // Debug: Log what we're loading
    savedData.foreach(data => dom.console.log(s"Loading Maskierung Aufgabe 2 data: $data"))
    
    val (loadedOriginal, loadedMask, loadedA1, loadedA2, loadedA3, loadedA4) = savedData match {
      case Some(json) =>
        try {
          val parsed = scala.scalajs.js.JSON.parse(json)
          val origStr = if parsed.selectDynamic("original") == scala.scalajs.js.undefined then "1010011010100101" else parsed.selectDynamic("original").asInstanceOf[String]
          val maskStr = if parsed.selectDynamic("mask") == scala.scalajs.js.undefined then "0000000000000000" else parsed.selectDynamic("mask").asInstanceOf[String]
          val a1 = if parsed.selectDynamic("answer1") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer1").asInstanceOf[String]
          val a2 = if parsed.selectDynamic("answer2") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer2").asInstanceOf[String]
          val a3 = if parsed.selectDynamic("answer3") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer3").asInstanceOf[String]
          val a4 = if parsed.selectDynamic("answer4") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer4").asInstanceOf[String]
          dom.console.log(s"Parsed Maskierung answers: a1=$a1, a2=$a2, a3=$a3, a4=$a4")
          (
            origStr.map(_ == '1').toVector,
            maskStr.map(_ == '1').toVector,
            a1, a2, a3, a4
          )
        } catch {
          case e: Throwable =>
            dom.console.error(s"Error parsing Maskierung data: ${e.getMessage}")
            (
              Vector(true, false, true, false, false, true, false, true, true, false, true, false, false, true, false, true),
              Vector.fill(16)(false),
              "", "", "", ""
            )
        }
      case None =>
        dom.console.log("No saved data found for Maskierung Aufgabe 2")
        (
          Vector(true, false, true, false, false, true, false, true, true, false, true, false, false, true, false, true),
          Vector.fill(16)(false),
          "", "", "", ""
        )
    }
    
    val originalData: Var[Vector[Boolean]] = Var(loadedOriginal)
    val maskPattern: Var[Vector[Boolean]] = Var(loadedMask)
    val answer1 = Var(loadedA1)
    val answer2 = Var(loadedA2)
    val answer3 = Var(loadedA3)
    val answer4 = Var(loadedA4)
    val check1: Var[Option[Boolean]] = Var(None)
    val check2: Var[Option[Boolean]] = Var(None)
    val check3: Var[Option[Boolean]] = Var(None)
    val check4: Var[Option[Boolean]] = Var(None)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val showXorInfoVar = infoBoxVar(xorInfoKey)

    def isCorrect1(answer: String): Boolean = answer.toLowerCase.contains("weiß") || answer.toLowerCase.contains("white")
    def isCorrect2(answer: String): Boolean = answer.toLowerCase.contains("schwarz") || answer.toLowerCase.contains("black")
    def isCorrect3(answer: String): Boolean = answer.toLowerCase.contains("schwarz") || answer.toLowerCase.contains("black")
    def isCorrect4(answer: String): Boolean = answer.toLowerCase.contains("weiß") || answer.toLowerCase.contains("white")

    def getLineStyle(checkVar: Var[Option[Boolean]]): Signal[String] =
      checkVar.signal.map {
        case Some(true)  => "background-color: rgba(76, 175, 80, 0.2); border-left: 4px solid #4CAF50;"
        case Some(false) => "background-color: rgba(244, 67, 54, 0.2); border-left: 4px solid #f44336;"
        case None        => ""
      }

    div(
      h2("Aufgabe 2"),
      p("Links sind die ursprünglichen Daten dargestellt. In der Mitte kannst du die Maske definieren. Rechts wird das Ergebnis der Maskierung, welche durch eine XOR-Operation realisiert wird, angezeigt."),
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: center;",
        div(
          styleAttr := "text-align: center;",
          h3("Ursprüngliche Daten"),
          renderSimplePixelGrid(4, 4, originalData, isReadOnly = false)
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "⊕",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center;",
          h3("Maske"),
          renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = false)
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "=",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center;",
          h3("Maskierte Daten"),
          child <-- originalData.signal.combineWith(maskPattern.signal).map { case (orig, mask) =>
            val maskedData = orig.zip(mask).map { case (o, m) => o ^ m }
            renderSimplePixelGrid(4, 4, Var(maskedData), isReadOnly = true)
          }
        )
      ),
      div(
        styleAttr := "margin-top: 2rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;",
        h3("Maskierung beschreiben"),
        p("Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze."),
        div(
          styleAttr := "margin: 1rem 0;",
          div(
            styleAttr <-- getLineStyle(check1).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn ursprüngliche Daten schwarz und die Maske schwarz dargestellt sind, dann ist das Ergebnis: "),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", "- Wählen -"),
              option(value := "schwarz", "schwarz"),
              option(value := "weiß", "weiß"),
              controlled(
                value <-- answer1.signal,
                onChange.mapToValue --> answer1.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check2).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn ursprüngliche Daten schwarz und die Maske weiß dargestellt sind, dann ist das Ergebnis: "),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", "- Wählen -"),
              option(value := "schwarz", "schwarz"),
              option(value := "weiß", "weiß"),
              controlled(
                value <-- answer2.signal,
                onChange.mapToValue --> answer2.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check3).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn ursprüngliche Daten weiß und die Maske schwarz dargestellt sind, dann ist das Ergebnis: "),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", "- Wählen -"),
              option(value := "schwarz", "schwarz"),
              option(value := "weiß", "weiß"),
              controlled(
                value <-- answer3.signal,
                onChange.mapToValue --> answer3.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check4).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn ursprüngliche Daten weiß und die Maske weiß dargestellt sind, dann ist das Ergebnis: "),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", "- Wählen -"),
              option(value := "schwarz", "schwarz"),
              option(value := "weiß", "weiß"),
              controlled(
                value <-- answer4.signal,
                onChange.mapToValue --> answer4.writer
              )
            )
          )
        ),
        // Auto-save grids and text fields to localStorage on any change
        child <-- originalData.signal.map { orig =>
          val origStr = orig.map(b => if b then '1' else '0').mkString
          val maskStr = maskPattern.now().map(b => if b then '1' else '0').mkString
          val a1 = answer1.now()
          val a2 = answer2.now()
          val a3 = answer3.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            original = origStr,
            mask = maskStr,
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          dom.console.log(s"Saving Maskierung (from originalData): $jsonStr")
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- maskPattern.signal.map { mask =>
          val origStr = originalData.now().map(b => if b then '1' else '0').mkString
          val maskStr = mask.map(b => if b then '1' else '0').mkString
          val a1 = answer1.now()
          val a2 = answer2.now()
          val a3 = answer3.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            original = origStr,
            mask = maskStr,
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          dom.console.log(s"Saving Maskierung (from maskPattern): $jsonStr")
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- answer1.signal.map { a1 =>
          val origStr = originalData.now().map(b => if b then '1' else '0').mkString
          val maskStr = maskPattern.now().map(b => if b then '1' else '0').mkString
          val a2 = answer2.now()
          val a3 = answer3.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            original = origStr,
            mask = maskStr,
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          dom.console.log(s"Saving Maskierung (from answer1): $jsonStr")
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- answer2.signal.map { a2 =>
          val origStr = originalData.now().map(b => if b then '1' else '0').mkString
          val maskStr = maskPattern.now().map(b => if b then '1' else '0').mkString
          val a1 = answer1.now()
          val a3 = answer3.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            original = origStr,
            mask = maskStr,
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          dom.console.log(s"Saving Maskierung (from answer2): $jsonStr")
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- answer3.signal.map { a3 =>
          val origStr = originalData.now().map(b => if b then '1' else '0').mkString
          val maskStr = maskPattern.now().map(b => if b then '1' else '0').mkString
          val a1 = answer1.now()
          val a2 = answer2.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            original = origStr,
            mask = maskStr,
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          dom.console.log(s"Saving Maskierung (from answer3): $jsonStr")
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- answer4.signal.map { a4 =>
          val origStr = originalData.now().map(b => if b then '1' else '0').mkString
          val maskStr = maskPattern.now().map(b => if b then '1' else '0').mkString
          val a1 = answer1.now()
          val a2 = answer2.now()
          val a3 = answer3.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            original = origStr,
            mask = maskStr,
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          dom.console.log(s"Saving Maskierung (from answer4): $jsonStr")
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        button(
          "Abgeben",
          onClick.map(_ => {
            val a1 = answer1.now()
            val a2 = answer2.now()
            val a3 = answer3.now()
            val a4 = answer4.now()
            
            check1.set(Some(isCorrect1(a1)))
            check2.set(Some(isCorrect2(a2)))
            check3.set(Some(isCorrect3(a3)))
            check4.set(Some(isCorrect4(a4)))
            
            val allCorrect = isCorrect1(a1) && isCorrect2(a2) && isCorrect3(a3) && isCorrect4(a4)

            if allCorrect then
              markInfoBoxShown(xorInfoKey, showXorInfoVar)
            
            // Save to localStorage
            val origStr = originalData.now().map(b => if b then '1' else '0').mkString
            val maskStr = maskPattern.now().map(b => if b then '1' else '0').mkString
            val jsonData = scala.scalajs.js.Dynamic.literal(
              original = origStr,
              mask = maskStr,
              answer1 = a1,
              answer2 = a2,
              answer3 = a3,
              answer4 = a4
            )
            val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
            persistExerciseAnswer(chapter, taskText, jsonStr)
            
            Some(allCorrect)
          }) --> lastCheckVar.writer,
          styleAttr := "margin-top: 1rem; padding: 0.5rem 1rem;",
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        ),
        child <-- showXorInfoVar.signal.map { showInfo =>
          if showInfo then
            Infotext(
              "XOR-Operator",
              "Der XOR-Operator (exklusives Oder) liefert genau dann 1, wenn die beiden Eingaben unterschiedlich sind. " +
              "Bei der Maskierung bedeutet das, dass alle Pixel die bei der Maske schwarz gefärbt sind, umgekehrt werden. "
            )
          else
            emptyNode
        }
      )
    )
  end renderMaskierungAufgabe

  def renderSimplePixelGrid(cols: Int, rows: Int, gridVar: Var[Vector[Boolean]], isReadOnly: Boolean = false): Element =
    val total = cols * rows
    val borderStyle = if isReadOnly then "border: 2px solid #999; background: #f5f5f5;" else "border: 2px solid #ccc; background: #ccc;"
    div(
      cls := "pixel-grid",
      styleAttr := s"grid-template-columns: repeat($cols, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; padding: 8px; border-radius: 4px; $borderStyle",
      children <-- gridVar.signal.map { grid =>
        grid.zipWithIndex.map { case (isOn, idx) =>
          div(
            cls := (if isOn then "pixel on" else "pixel"),
            styleAttr := "width: 28px; height: 28px; cursor: " + (if isReadOnly then "default" else "pointer") + ";",
            if !isReadOnly then
              onClick --> (_ => gridVar.update(g => g.updated(idx, !g(idx))))
            else
              emptyNode
          )
        }
      }
    )
  end renderSimplePixelGrid

  def renderMaskierungAufgabe3(): Element =
    val chapter = "maskierung"
    val taskText = "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten."
    
    // Load saved data from localStorage
    val savedUserData = loadFromLocalStorage(chapter)
      .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
      .map(str => str.filter(ch => ch == '0' || ch == '1').map(_ == '1').toVector)
      .filter(_.length == 16)
      .getOrElse(Vector.fill(16)(false))
    
    val originalData: Var[Vector[Boolean]] = Var(Vector(
      true, false, true, false,
      false, true, false, true,
      true, true, false, false,
      false, false, true, true
    ))
    val maskPattern: Var[Vector[Boolean]] = Var(Vector(
      false, true, false, true,
      true, false, true, false,
      false, false, true, true,
      true, true, false, false
    ))
    val userMaskedData: Var[Vector[Boolean]] = Var(savedUserData)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val rowStatusVar: Var[Vector[Option[Boolean]]] = Var(Vector.fill(4)(None))

    // Calculate correct masked data
    val correctMaskedData = originalData.now().zip(maskPattern.now()).map { case (o, m) => o ^ m }

    div(
      h2("Aufgabe 3"),
      p("Links und in der Mitte sind die ursprünglichen Daten und die Maske vorgegeben. Rechts kannst du die maskierten Daten eintragen. Bestimme durch Anwenden der XOR-Operation die korrekten maskierten Daten."),
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: center;",
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Ursprüngliche Daten"),
          renderSimplePixelGrid(4, 4, originalData, isReadOnly = true)
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "⊕",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Maske"),
          renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = true)
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "=",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "maskierte Daten"),
          div(
            cls := "pixel-grid",
            styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;",
            children <-- userMaskedData.signal.combineWith(rowStatusVar.signal).map { case (grid, rowStatus) =>
              val gridVec = grid.asInstanceOf[Vector[Boolean]]
              (0 until 4).toList.flatMap { r =>
                val rowStatusValue = rowStatus.lift(r).flatten
                val rowStyle = rowStatusValue match
                  case Some(true)  => "border: 2px solid #4CAF50;"
                  case Some(false) => "border: 2px solid #f44336;"
                  case None        => ""
                (0 until 4).toList.map { c =>
                  val idx = r * 4 + c
                  div(
                    cls := (if gridVec(idx) then "pixel on" else "pixel"),
                    styleAttr := s"width: 28px; height: 28px; cursor: pointer; $rowStyle",
                    onClick --> (_ => userMaskedData.update(g => g.updated(idx, !g(idx))))
                  )
                }
              }
            }
          )
        ),
        // Auto-save to localStorage on pixel changes
        child <-- userMaskedData.signal.map { current =>
          val currentVec = current.asInstanceOf[Vector[Boolean]]
          val userDataStr = currentVec.map(b => if b then '1' else '0').mkString
          persistExerciseAnswer(chapter, taskText, userDataStr)
          emptyNode
        },
        button(
          "Abgeben",
          onClick.map { _ =>
            val current = userMaskedData.now()
            val correct = correctMaskedData
            
            // Save to localStorage
            val userDataStr = current.map(b => if b then '1' else '0').mkString
            persistExerciseAnswer(chapter, taskText, userDataStr)
            
            // Check row by row
            val statuses: Vector[Option[Boolean]] = (0 until 4).toVector.map { r =>
              val rowSlice = current.slice(r * 4, (r + 1) * 4)
              val expectedRow = correct.slice(r * 4, (r + 1) * 4)
              Some(rowSlice == expectedRow)
            }
            rowStatusVar.set(statuses)
            Some(statuses.flatten.forall(identity))
          } --> lastCheckVar.writer,
          styleAttr := "padding: 0.5rem 1rem; align-self: flex-start; margin-top: 2rem;",
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        )
      ),
      emptyNode
    )
  end renderMaskierungAufgabe3

  def renderMaskierungAufgabe7(): Element =
    val chapter = "maskierung"
    val taskText = "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein."
    
    // Load saved data from localStorage
    val savedData = loadFromLocalStorage(chapter)
      .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
    
    val (loadedData1, loadedData2) = savedData match {
      case Some(json) =>
        try {
          val parsed = scala.scalajs.js.JSON.parse(json)
          val data1Str = parsed.selectDynamic("masked1").asInstanceOf[String]
          val data2Str = parsed.selectDynamic("masked2").asInstanceOf[String]
          (
            data1Str.filter(ch => ch == '0' || ch == '1').map(_ == '1').toVector,
            data2Str.filter(ch => ch == '0' || ch == '1').map(_ == '1').toVector
          )
        } catch {
          case _: Throwable => (Vector.fill(16)(false), Vector.fill(16)(false))
        }
      case None => (Vector.fill(16)(false), Vector.fill(16)(false))
    }
    
    val originalData: Var[Vector[Boolean]] = Var(Vector(
      true, true, false, false,
      false, false, true, true,
      true, false, true, false,
      false, true, false, true
    ))
    val maskPattern: Var[Vector[Boolean]] = Var(Vector(
      true, false, true, false,
      true, false, true, false,
      false, true, false, true,
      false, true, false, true
    ))
    
    // Calculate correct masked data (1x)
    val correctMaskedData1 = originalData.now().zip(maskPattern.now()).map { case (o, m) => o ^ m }
    
    // Calculate correct double masked data (2x with same mask)
    val correctMaskedData2 = correctMaskedData1.zip(maskPattern.now()).map { case (m, mask) => m ^ mask }

    // User inputs - load from localStorage or use empty
    val userMaskedData1: Var[Vector[Boolean]] = Var(loadedData1)
    val userMaskedData2: Var[Vector[Boolean]] = Var(loadedData2)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val rowStatusVar: Var[Vector[Option[Boolean]]] = Var(Vector.fill(8)(None))

    div(
      h2("Aufgabe 7"),
      p("In dieser Aufgabe wollen wir eine besondere Eigenschaft der XOR Operation untersuchen. Berechne dafür im ersten Schritt die maskierten Daten. Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein."),
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap;",
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Ursprüngliche Daten"),
          renderSimplePixelGrid(4, 4, originalData, isReadOnly = true)
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "⊕",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Maske"),
          renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = true)
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "=",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "1x maskiert"),
          div(
            cls := "pixel-grid",
            styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;",
            children <-- userMaskedData1.signal.combineWith(rowStatusVar.signal).map { case (grid, rowStatus) =>
              val gridVec = grid.asInstanceOf[Vector[Boolean]]
              (0 until 4).toList.flatMap { r =>
                val rowStatusValue = rowStatus.lift(r).flatten
                val rowStyle = rowStatusValue match
                  case Some(true)  => "border: 2px solid #4CAF50;"
                  case Some(false) => "border: 2px solid #f44336;"
                  case None        => ""
                (0 until 4).toList.map { c =>
                  val idx = r * 4 + c
                  val isOn = gridVec(idx)
                  div(
                    cls := (if isOn then "pixel on" else "pixel"),
                    styleAttr := s"width: 28px; height: 28px; cursor: pointer; $rowStyle",
                    onClick --> (_ => userMaskedData1.update(g => g.updated(idx, !g(idx))))
                  )
                }
              }
            }
          )
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "⊕",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Maske"),
          renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = true)
        ),
        div(
          styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 140px;",
          span(
            "=",
            styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
          )
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "2x maskiert"),
          div(
            cls := "pixel-grid",
            styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;",
            children <-- userMaskedData2.signal.combineWith(rowStatusVar.signal).map { case (grid, rowStatus) =>
              val gridVec = grid.asInstanceOf[Vector[Boolean]]
              (0 until 4).toList.flatMap { r =>
                val rowStatusValue = rowStatus.lift(r + 4).flatten
                val rowStyle = rowStatusValue match
                  case Some(true)  => "border: 2px solid #4CAF50;"
                  case Some(false) => "border: 2px solid #f44336;"
                  case None        => ""
                (0 until 4).toList.map { c =>
                  val idx = r * 4 + c
                  val isOn = gridVec(idx)
                  div(
                    cls := (if isOn then "pixel on" else "pixel"),
                    styleAttr := s"width: 28px; height: 28px; cursor: pointer; $rowStyle",
                    onClick --> (_ => userMaskedData2.update(g => g.updated(idx, !g(idx))))
                  )
                }
              }
            }
          )
        ),
        // Auto-save to localStorage on pixel changes
        child <-- userMaskedData1.signal.combineWith(userMaskedData2.signal).map { case (data1, data2) =>
          val data1Vec = data1.asInstanceOf[Vector[Boolean]]
          val data2Vec = data2.asInstanceOf[Vector[Boolean]]
          val data1Str = data1Vec.map(b => if b then '1' else '0').mkString
          val data2Str = data2Vec.map(b => if b then '1' else '0').mkString
          val jsonData = scala.scalajs.js.Dynamic.literal(
            masked1 = data1Str,
            masked2 = data2Str
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        button(
          "Abgeben",
          onClick.map { _ =>
            val current1 = userMaskedData1.now()
            val current2 = userMaskedData2.now()
            
            // Check row by row for both
            val statuses1: Vector[Option[Boolean]] = (0 until 4).toVector.map { r =>
              val rowSlice = current1.slice(r * 4, (r + 1) * 4)
              val expectedRow = correctMaskedData1.slice(r * 4, (r + 1) * 4)
              Some(rowSlice == expectedRow)
            }
            
            val statuses2: Vector[Option[Boolean]] = (0 until 4).toVector.map { r =>
              val rowSlice = current2.slice(r * 4, (r + 1) * 4)
              val expectedRow = correctMaskedData2.slice(r * 4, (r + 1) * 4)
              Some(rowSlice == expectedRow)
            }
            
            val allStatuses = statuses1 ++ statuses2
            rowStatusVar.set(allStatuses)
            val allCorrect = allStatuses.flatten.forall(identity)
            Some(allCorrect)
          } --> lastCheckVar.writer,
          styleAttr := "padding: 0.5rem 1rem; align-self: flex-start; margin-top: 2rem;",
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        )
      ),
      emptyNode
    )
  end renderMaskierungAufgabe7

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

  def renderFehlerkorrekturLueckentext(): Element =
    val chapter = "fehlerkorrektur"
    val taskText = "Ergänze die Lücken im folgenden Text:"
    
    // Load saved answers from localStorage
    val savedData = loadFromLocalStorage(chapter)
      .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
    
    // Debug: Log what we're loading
    savedData.foreach(data => dom.console.log(s"Loading Lückentext data: $data"))
    
    val (loadedA1, loadedA2, loadedA3, loadedA4) = savedData match {
      case Some(json) =>
        try {
          val parsed = scala.scalajs.js.JSON.parse(json)
          val a1 = if parsed.selectDynamic("answer1") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer1").asInstanceOf[String]
          val a2 = if parsed.selectDynamic("answer2") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer2").asInstanceOf[String]
          val a3 = if parsed.selectDynamic("answer3") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer3").asInstanceOf[String]
          val a4 = if parsed.selectDynamic("answer4") == scala.scalajs.js.undefined then "" else parsed.selectDynamic("answer4").asInstanceOf[String]
          dom.console.log(s"Parsed answers: a1=$a1, a2=$a2, a3=$a3, a4=$a4")
          (a1, a2, a3, a4)
        } catch {
          case e: Throwable => 
            dom.console.error(s"Error parsing Lückentext data: ${e.getMessage}")
            ("", "", "", "")
        }
      case None => 
        dom.console.log("No saved data found for Lückentext")
        ("", "", "", "")
    }
    
    val answer1 = Var(loadedA1)
    val answer2 = Var(loadedA2)
    val answer3 = Var(loadedA3)
    val answer4 = Var(loadedA4)
    val check1: Var[Option[Boolean]] = Var(None)
    val check2: Var[Option[Boolean]] = Var(None)
    val check3: Var[Option[Boolean]] = Var(None)
    val check4: Var[Option[Boolean]] = Var(None)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val showInfotext = infoBoxVar("qr-infobox-fehlerkorrektur-7")

    def isCorrect1(answer: String): Boolean = 
      val lower = answer.toLowerCase.trim
      lower.contains("größer") || lower.contains("höher")
    
    def isCorrect2(answer: String): Boolean = 
      val lower = answer.toLowerCase.trim
      lower.contains("schwerer") || lower.contains("aufwändiger")
    
    def isCorrect3(answer: String): Boolean = 
      val lower = answer.toLowerCase.trim
      lower.contains("Fehlererkennung") || lower.contains("fehlererkennung") || lower.contains("erkennung")

    def isCorrect4(answer: String): Boolean = 
      val lower = answer.toLowerCase.trim
      lower.contains("Fehlerkorrektur") || lower.contains("fehlerkorrektur") || lower.contains("korrektur")

    def getLineStyle(checkVar: Var[Option[Boolean]]): Signal[String] =
      checkVar.signal.map {
        case Some(true)  => "background-color: rgba(76, 175, 80, 0.2); border-left: 4px solid #4CAF50;"
        case Some(false) => "background-color: rgba(244, 67, 54, 0.2); border-left: 4px solid #f44336;"
        case None        => ""
      }

    div(
      className := "exercise-content excursus",
      h2(styleAttr := "color: #f57f17; font-style: italic;", "Aufgabe 9"),
      p("Ergänze die Lücken im folgenden Text:"),
      div(
        styleAttr := "margin-top: 1.5rem; padding: 1rem; background: #f9f9f9; border-radius: 8px;",
        div(
          styleAttr := "margin: 1rem 0;",
          div(
            styleAttr <-- getLineStyle(check1).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Je mehr Daten zur Fehlererkennung und -korrektur genutzt werden, desto "),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 180px; text-align: center;",
              value <-- answer1.signal,
              onChange.mapToValue --> answer1.writer,
              option(value := "", "-- auswählen --"),
              option(value := "niedriger", "niedriger"),
              option(value := "größer", "größer")
            ),
            span(" ist die Wahrscheinlichkeit, Fehler zu erkennen und zu korrigieren." )
          ),
          div(
            styleAttr <-- getLineStyle(check2).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Substutionsfehler lassen sich  "),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 180px; text-align: center;",
              value <-- answer2.signal,
              onChange.mapToValue --> answer2.writer,
              option(value := "", "-- auswählen --"),
              option(value := "leichter", "leichter"),
              option(value := "schwerer", "schwerer")
            ),
            span("verbessern, als Löschfehler." )
          ),
          div(
            styleAttr <-- getLineStyle(check3).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Prüfsummen dienen vor allem zur "),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 180px; text-align: center;",
              value <-- answer3.signal,
              onChange.mapToValue --> answer3.writer,
              option(value := "", "-- auswählen --"),
              option(value := "Fehlerkorrektur", "Fehlerkorrektur"),
              option(value := "Fehlererkennung", "Fehlererkennung")
            ),
            span("und nicht zur"),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 180px; text-align: center;",
              value <-- answer4.signal,
              onChange.mapToValue --> answer4.writer,
              option(value := "", "-- auswählen --"),
              option(value := "Fehlererkennung", "Fehlererkennung"),
              option(value := "Fehlerkorrektur", "Fehlerkorrektur")
            ),
            span("." ),
          )
        ),
        // Auto-save answers to localStorage
        child <-- answer1.signal.map { a1 =>
          val a2 = answer2.now()
          val a3 = answer3.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          dom.console.log(s"Saving Lückentext (from answer1): $jsonStr")
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- answer2.signal.map { a2 =>
          val a1 = answer1.now()
          val a3 = answer3.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- answer3.signal.map { a3 =>
          val a1 = answer1.now()
          val a2 = answer2.now()
          val a4 = answer4.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        child <-- answer4.signal.map { a4 =>
          val a1 = answer1.now()
          val a2 = answer2.now()
          val a3 = answer3.now()
          val jsonData = scala.scalajs.js.Dynamic.literal(
            answer1 = a1.asInstanceOf[scala.scalajs.js.Any],
            answer2 = a2.asInstanceOf[scala.scalajs.js.Any],
            answer3 = a3.asInstanceOf[scala.scalajs.js.Any],
            answer4 = a4.asInstanceOf[scala.scalajs.js.Any]
          )
          val jsonStr = scala.scalajs.js.JSON.stringify(jsonData)
          persistExerciseAnswer(chapter, taskText, jsonStr)
          emptyNode
        },
        button(
          "Abgeben",
          onClick.map(_ => {
            val a1 = answer1.now()
            val a2 = answer2.now()
            val a3 = answer3.now()
            val a4 = answer4.now()
            
            check1.set(Some(isCorrect1(a1)))
            check2.set(Some(isCorrect2(a2)))
            check3.set(Some(isCorrect3(a3)))
            check4.set(Some(isCorrect4(a4)))
            
            val allCorrect = isCorrect1(a1) && isCorrect2(a2) && isCorrect3(a3) && isCorrect4(a4)
            if allCorrect then
              markInfoBoxShown("qr-infobox-fehlerkorrektur-7", showInfotext)
            Some(allCorrect)
          }) --> lastCheckVar.writer,
          styleAttr := "margin-top: 1rem; padding: 0.5rem 1rem;",
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
          }
        )
      ),
      child <-- showInfotext.signal.map { show =>
        if show then
          Infotext(
            "Fehlerkorrektur in QR-Codes",
            """In QR-Codes werden Reed-Solomon-Codes zur Fehlerkorrektur genutzt. Dies ist ein besonders leistungsfähiges Verfahren, das beide Fehlerarten zum Teil korrigieren kann. Die Fehlerkorrektur wird dabei sowohl auf die Daten, als auch auf die Metadaten (z.B. Formatinformationen, Maske) angewendet. 

Dabei werden QR-Codes nach Fehlertoleranzstufen klassifiziert. Die Fehlertoleranz liegt dabei zwischen 7% und 30% und gibt an wieviel % des QR-Codes beschädigt sein können, ohne dass die Information verloren geht. Die vier Stufen sind:
• Level L: 7% Fehlertoleranz (Low) 
• Level M: 15% Fehlertoleranz (Medium) 
• Level Q: 25% Fehlertoleranz (Quartile)   
• Level H: 30% Fehlertoleranz (High) 

Die Reed-Solomon-Codes arbeiten im Prinzip genau so, wie es im Exkurs behandelt wurde. Sie nutzen jedoch mehr Mathematik und sind etwas effizienter als Nachrichten doppelt zu schreiben. Die genau Funktionsweise übersteigt den Rahmen dieses Kurses, weshalb diese nicht weiter behandelt wird. Zum Nachlesen: https://de.wikipedia.org/wiki/Reed-Solomon-Code"""
          )
        else
          emptyNode
      }
    )
  end renderFehlerkorrekturLueckentext

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
        src := resolveImageUrl(imageSrc),
        alt := caption,
        width := size.toString,
        height := size.toString,
        cls := "qr-code"
      ),
      p(caption, cls := "qr-caption")
    )
  end imageWithCaption

  // Helper to render an image with fallback paths/extensions
  def imageWithFallback(baseName: String, altText: String, size: Int = 220): Element =
    val normalizedBaseName = baseName.stripPrefix("/")
    val candidates = List(
      s"${imageBaseUrl}${normalizedBaseName}.png",
      s"${imageBaseUrl}${normalizedBaseName}.PNG",
      s"${imageBaseUrl}${normalizedBaseName}.jpg",
      s"${imageBaseUrl}${normalizedBaseName}.JPG"
    )
    val idxVar = Var(0)
    val srcVar = Var(candidates.head)
    img(
      src <-- srcVar.signal,
      alt := altText,
      width := size.toString,
      height := size.toString,
      onError --> { _ =>
        val next = idxVar.now() + 1
        if next < candidates.length then
          idxVar.set(next)
          srcVar.set(candidates(next))
      }
    )
  end imageWithFallback

  def renderExercise(taskText: String, keywords: Set[String] = Set.empty, index: Int = -1, image: Option[Element] = None, chapter: String = "", submitCallback: Option[() => Unit] = None, infoCallback: Option[() => Unit] = None, minWordCount: Option[Int] = None, solutionText: Option[String] = None, solutionWords: Set[String] = Set.empty, numericOnly: Boolean = false, wrongHint: Option[String] = None, multipleChoice: Option[List[(String, Boolean)]] = None, showMCFeedback: Boolean = true, mcLabel: String = "Welcher QR-Code kann gescannt werden?", isExcursus: Boolean = false, inlineNumericInputs: Option[List[String]] = None, inlineNumericExpected: Option[List[String]] = None, inlineAllWrongHint: Option[String] = None, showEditor: Boolean = true): Element =
    // Load stored answer from localStorage
    val storedData = if chapter.nonEmpty then loadFromLocalStorage(chapter) else None
    val storedAnswers = storedData.map(_.exercises).getOrElse(List())
    val initialText: String = storedAnswers.find(_.task == taskText).flatMap(_.answer).getOrElse("")
    val storedStatus = loadExerciseStatus(chapter, taskText)
    val initialShowSolution = storedStatus.showSolution && storedStatus.lastCheck.contains(false)

    val textVar = Var(initialText)
    val lastCheckVar: Var[Option[Boolean]] = Var(storedStatus.lastCheck)
    val showSolutionVar: Var[Boolean] = Var(initialShowSolution)
    val effectiveSolutionWords = if solutionWords.nonEmpty then solutionWords else keywords
    def countWords(text: String): Int = text.split("\\s+").count(_.nonEmpty)
    val wordCountSignal = textVar.signal.map(countWords)
    val buttonClassSignal = Signal.fromValue("")
    val suppressPraise = keywords.exists(_.trim.isEmpty) || minWordCount.nonEmpty
    
    // Initialize mcSelectedVar if multipleChoice is provided
    val mcTaskText = if multipleChoice.isDefined then s"${taskText}__mc" else ""
    val storedMcData = if chapter.nonEmpty && multipleChoice.isDefined then loadFromLocalStorage(chapter) else None
    val storedMcAnswers = storedMcData.map(_.exercises).getOrElse(List())
    val storedMcAnswer = storedMcAnswers.find(_.task == mcTaskText).flatMap(_.answer).getOrElse("")
    val initialMcSelected = if multipleChoice.isDefined && storedMcAnswer.nonEmpty then
      val choices = multipleChoice.get
      storedMcAnswer.split(", ").flatMap { choice =>
        choices.zipWithIndex.find(_._1._1 == choice).map(_._2)
      }.toSet
    else
      Set.empty[Int]
    val mcSelectedVar: Var[Set[Int]] = Var(initialMcSelected)
    
    // Create editor (may or may not be used depending on exercise type)
    val editor = SimpleTextEditor(textVar, if multipleChoice.isDefined && showMCFeedback then Signal.fromValue(None) else lastCheckVar.signal, numericOnly)
    val inlineInputLabels = inlineNumericInputs.getOrElse(Nil)
    val inlineInputVars = inlineInputLabels.map(_ => Var(""))
    val inlineChecksVar: Var[Option[List[Boolean]]] = Var(None)
    val initialInlineValues = "\\d+".r.findAllIn(initialText).toList
    inlineInputVars.zipWithIndex.foreach { case (v, idx) =>
      v.set(initialInlineValues.lift(idx).getOrElse(""))
    }

    def updateInlineTextVar(): Unit =
      val combined = inlineInputVars.map(_.now()).filter(_.nonEmpty).mkString(" ")
      textVar.set(combined)

    def inlineInputStyleSignal(idx: Int): Signal[String] =
      inlineChecksVar.signal.map {
        case Some(checks) if checks.forall(identity) =>
          "border: 2px solid #4caf50; background: rgba(76, 175, 80, 0.1);"
        case Some(checks) if checks.lift(idx).contains(false) =>
          "border: 2px solid #f44336; background: rgba(244, 67, 54, 0.1);"
        case _ => ""
      }

    // exercise content only (menu is shown at the top now)
    div(
      className := (if isExcursus then "exercise-content excursus" else "exercise-content"),
      h2(if index == -1 then "Aufgabe" else s"Aufgabe $index"),
      image.map(img => div(cls := "exercise-image", img)),
      p(
        taskText,
        styleAttr := "white-space: pre-wrap;"
      ),
      (if inlineInputLabels.nonEmpty then
        List(
          div(
            styleAttr := "margin: 0.75rem 0; display: flex; flex-direction: column; gap: 0.5rem;",
            children <-- Signal.fromValue(inlineInputLabels.zipWithIndex).map(_.map { case (labelText, idx) =>
              div(
                styleAttr := "display: flex; align-items: center; gap: 0.5rem;",
                span(labelText),
                input(
                  typ := "text",
                  placeholder := "",
                  styleAttr <-- inlineInputStyleSignal(idx).map { feedback =>
                    val base = "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 80px; text-align: center;"
                    if feedback.nonEmpty then s"$base; $feedback" else base
                  },
                  controlled(
                    value <-- inlineInputVars(idx).signal,
                    onInput.mapToValue --> { value =>
                      inlineInputVars(idx).set(value.filter(_.isDigit))
                      updateInlineTextVar()
                    }
                  )
                ),
                span("%")
              )
            })
          ),
          child <-- inlineChecksVar.signal.map {
            case Some(checks) if checks.forall(_ == false) =>
              inlineAllWrongHint.map { hint =>
                div(styleAttr := "margin-top: 0.5rem; color: #c62828; font-weight: 600;", hint)
              }.getOrElse(emptyNode)
            case _ => emptyNode
          }
        )
      else
        List(emptyNode)),
      // Multiple Choice component if provided
      multipleChoice.map { choices =>
        div(
          styleAttr <-- (if showMCFeedback then
            lastCheckVar.signal.map {
              case Some(true) => "margin: 1rem 0; padding: 1rem; background: rgba(76, 175, 80, 0.1); border: 2px solid #4caf50; border-radius: 4px;"
              case Some(false) => "margin: 1rem 0; padding: 1rem; background: rgba(244, 67, 54, 0.1); border: 2px solid #f44336; border-radius: 4px;"
              case _ => "margin: 1rem 0; padding: 1rem; background: #f5f5f5; border: 2px solid #ddd; border-radius: 4px;"
            }
          else
            Signal.fromValue("margin: 1rem 0; padding: 1rem; background: #f5f5f5; border: 2px solid #ddd; border-radius: 4px;")
          ),
          p(styleAttr := "font-weight: 600; margin-bottom: 0.75rem; margin-top: 0;", mcLabel),
          div(
            children <-- Signal.fromValue(choices).map(_.zipWithIndex.map { case ((labelText, _), idx) =>
              div(
                styleAttr := "margin: 0.5rem 0;",
                input(
                  typ := "checkbox",
                  idAttr := s"qr-choice-${taskText.hashCode()}-${idx}",
                  onChange --> { _ =>
                    mcSelectedVar.update { selected =>
                      if selected.contains(idx) then selected - idx
                      else selected + idx
                    }
                    if chapter.nonEmpty then
                      val selectedChoices = mcSelectedVar.now().map(i => choices(i)._1).mkString(", ")
                      persistExerciseAnswer(chapter, mcTaskText, selectedChoices)
                  },
                  checked <-- mcSelectedVar.signal.map(_.contains(idx))
                ),
                label(
                  forId := s"qr-choice-${taskText.hashCode()}-${idx}",
                  styleAttr := "margin-left: 0.5rem; cursor: pointer;",
                  labelText
                )
              )
            })
          )
        )
      }.getOrElse(emptyNode),
      if showEditor then editor.getDomElement() else emptyNode,
      // Subscribe to text changes and save to localStorage
      child <-- textVar.signal.map { text =>
        if chapter.nonEmpty then
          persistExerciseAnswer(chapter, taskText, text)
        emptyNode
      },
      child <-- lastCheckVar.signal.map { _ =>
        saveExerciseStatus(chapter, taskText, ExerciseStatus(lastCheckVar.now(), showSolutionVar.now()))
        emptyNode
      },
      child <-- showSolutionVar.signal.map { _ =>
        saveExerciseStatus(chapter, taskText, ExerciseStatus(lastCheckVar.now(), showSolutionVar.now()))
        emptyNode
      },
      if keywords.nonEmpty || minWordCount.nonEmpty || submitCallback.nonEmpty || multipleChoice.isDefined || inlineNumericExpected.isDefined then
        div(
          styleAttr := "display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;",
          button(
            child.text <-- lastCheckVar.signal.map {
              case Some(false) => "Nochmal versuchen"
              case _ => "Abgeben"
            },
            onClick --> { _ =>
              if lastCheckVar.now().contains(false) then
                lastCheckVar.set(None)
                showSolutionVar.set(false)
                inlineChecksVar.set(None)
              else
                val ok = if inlineNumericExpected.isDefined then
                  val expected = inlineNumericExpected.get
                  val checks = expected.zipWithIndex.map { case (exp, idx) =>
                    inlineInputVars.lift(idx).exists(_.now().trim == exp)
                  }
                  inlineChecksVar.set(Some(checks))
                  checks.forall(identity)
                else if multipleChoice.isDefined && showMCFeedback then
                  // Check if MC selection is correct (only if MC feedback is enabled)
                  val selected = mcSelectedVar.now()
                  val choices = multipleChoice.get
                  val correctIndices = choices.zipWithIndex.filter(_._1._2).map(_._2).toSet
                  val allCorrectSelected = correctIndices.forall(selected.contains)
                  val noWrongSelected = selected.forall(idx => choices(idx)._2)
                  allCorrectSelected && noWrongSelected
                else
                  // Normal validation for non-MC exercises or MC without feedback
                  val text = textVar.now()
                  val keywordOk = if keywords.isEmpty then true else keywords.exists(k => text.toLowerCase.contains(k.toLowerCase))
                  minWordCount match
                    case Some(min) => keywordOk && countWords(text) >= min
                    case None => keywordOk
                lastCheckVar.set(Some(ok))
                if ok then
                  // Call the submit callback if provided
                  submitCallback.foreach(callback => callback())
                  infoCallback.foreach(callback => callback())
                else
                  showSolutionVar.set(false)
            },
            cls := "btn-time",
            cls <-- buttonClassSignal
          ),
          child <-- lastCheckVar.signal.map {
            case Some(true) if !suppressPraise =>
              span(styleAttr := "color: #2e7d32; font-weight: 600;", "Richtig! Sehr gut")
            case _ => emptyNode
          },
          child <-- lastCheckVar.signal.map {
            case Some(false) if solutionText.nonEmpty =>
              div(
                styleAttr := "display: flex; align-items: center; gap: 0.75rem;",
                button(
                  "Lösung zeigen",
                  cls := "btn-time",
                  onClick --> { _ =>
                    showSolutionVar.set(true)
                    infoCallback.foreach(callback => callback())
                  }
                ),
                wrongHint.map { hint =>
                  span(
                    hint,
                    styleAttr := "color: #c62828; font-weight: 600;"
                  )
                }.getOrElse(emptyNode)
              )
            case _ => emptyNode
          },
          child <-- showSolutionVar.signal.map { show =>
            if show then
              solutionText.map(text => div(styleAttr := "flex-basis: 100%;", LösungZeigen(text, effectiveSolutionWords))).getOrElse(emptyNode)
            else
              emptyNode
          },
          minWordCount match
            case Some(min) =>
              child <-- lastCheckVar.signal.combineWith(wordCountSignal).map { case (status, count) =>
                status match
                  case Some(_) =>
                    val color = if count < min then "#b71c1c" else "#2e7d32"
                    span(
                      styleAttr := s"color: $color;",
                      s"Mindestwortzahl sind $min, du hast $count geschrieben."
                    )
                  case None => emptyNode
              }
            case None => emptyNode
        )
      else
        emptyNode
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
            styleAttr <-- selectedVar.signal.combineWith(lastCheckVar.signal).map { case (selected, status) =>
              status match
                case Some(true) if choices(idx)._2 && selected.contains(idx) =>
                  "background: rgba(46, 204, 113, 0.2); border-left: 4px solid #2ecc71; padding: 2px 6px; border-radius: 4px;"
                case Some(false) if choices(idx)._2 =>
                  "background: rgba(46, 204, 113, 0.2); border-left: 4px solid #2ecc71; padding: 2px 6px; border-radius: 4px;"
                case Some(false) if !choices(idx)._2 && selected.contains(idx) =>
                  "background: rgba(231, 76, 60, 0.2); border-left: 4px solid #e74c3c; padding: 2px 6px; border-radius: 4px;"
                case _ => ""
            },
            input(
              typ := "checkbox",
              disabled <-- lastCheckVar.signal.map(_.isDefined),
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
      // Subscribe to selection changes and save to localStorage
      child <-- selectedVar.signal.map { selected =>
        if chapter.nonEmpty then
          val selectedChoices = selected.map(idx => choices(idx)._1).mkString(", ")
          persistExerciseAnswer(chapter, taskText, selectedChoices)
        emptyNode
      },
      button(
        "Abgeben",
        onClick.map(_ => {
          val selected = selectedVar.now()
          // Check if answer is correct
          val correctIndices = choices.zipWithIndex.collect { case ((_, true), idx) => idx }.toSet
          selected == correctIndices
        })
          .map(ok => Some(ok)) --> lastCheckVar.writer,
        cls <-- lastCheckVar.signal.map {
          case Some(true)  => "btn-time btn-success"
          case _           => "btn-time"
        }
      ),
      child <-- lastCheckVar.signal.map {
        case Some(true) => span(styleAttr := "color: #2e7d32; font-weight: 600;", "Richtig!")
        case _ => emptyNode
      }
    )
  end renderExerciseMC

  def renderZusammenfassungQuiz(): Element =
    // Define 20 quiz questions with mixed types
    val quizQuestions = List(
      // Text input questions
      ("In welcher Form liegen die Daten in einem QR-Code vor?", "text", List(), Set("schwarz", "weiß")),
      ("Nenne die drei Elemente eines QR-Codes.", "text", List(), Set("position", "meta", "daten")),
      ("Wie viele verschiedene Zeichen können mit 8 Bits dargestellt werden?", "text", List(), Set("256")),
      ("Erkläre, warum Maskierung in QR-Codes wichtig ist.", "text", List(), Set("lesbar", "kontrast", "erkennung")),
      ("Wofür ist die Fehlerkorrektur in QR-Codes wichtig?", "text", List(), Set("unleserlich", "beschädigt")),
      
      // Multiple choice questions
      ("Welche Form haben die Positionsmarker im QR-Code?", "mc", List(("Quadrate", true), ("Raute", false), ("Kreise", false), ("Dreiecke", false)), Set()),
      ("Was ist die Hauptaufgabe des Timing Patterns?", "mc", List(("Größe und Position der Pixel bestimmen", true), ("Daten speichern", false), ("Fehler korrigieren", false), ("Masken anwenden", false)), Set()),
      ("Welche Aussage zu ASCII ist richtig?", "mc", List(("ASCII kodiert Buchstaben mit 7 oder 8 Bits", true), ("ASCII kann beliebig lange Zeichenketten speichern", false), ("ASCII ist nur für Zahlen", false), ("ASCII wurde für QR-Codes erfunden", false)), Set()),
      ("Wie viele Masken werden in einem QR-Code probiert?", "mc", List(("1 Maske", false), ("8 Masken", true), ("300 Masken", false), ("Unbegrenzt viele", false)), Set()),
      ("Was ist XOR und seine Besonderheit?", "mc", List(("XOR ist eine logische Operation, die ihre eigene Umkehrfunktion ist", true), ("XOR kann nur für Zahlen verwendet werden", false), ("XOR wurde für QR-Codes erfunden", false), ("XOR hat keine praktische Anwendung", false)), Set()),
      
      // More text questions
      ("Beschreibe den Prozess der Kodierung einer Nachricht in einen QR-Code.", "text", List(), Set("ascii","buchstabe","pixel")),
      ("Was versteht man unter Redundanz bei der Fehlerkorrektur?", "text", List(), Set("wiederholung")),
      ("Nenne zwei Vorteile, ASCII als Kodierung zu benutzen, im Gegensatz zu einer eigenen Kodierung.", "text", List(), Set("standard", "kodierung")),
      
      // More multiple choice
      ("Welche Fehlerkorrektur-Level gibt es in QR-Codes?", "mc", List(("L (7%), M (15%), Q (25%), H (30%)", true), ("L (10%), M (20%), Q (30%), H (80%)", false), ("Nur L und H", false), ("Es gibt nur eine Ebene", false)), Set()),
      ("Warum müssen die Metadaten in einem QR-Code gespeichert werden?", "mc", List(("Um den Scanner darüber zu informieren, welche Maske, Fehlerkorrektur und Version verwendet wurde", true), ("Um die Nachricht zu verschlüsseln", false), ("Um Platz zu sparen", false), ("Um die Lesbarkeit zu verbessern", false)), Set()),
      
      // Final text questions
      ("Warum dürfen in den Positionsmarkern keine Daten gespeichert werden?", "text", List(), Set("erkennung")),
      ("Beschreibe, wie die Maske wieder rückgängig gemacht wird.", "text", List(), Set("ernut", "gleiche")),
      ("Durch das dreifache Schreiben einer Nachricht können wie viel % der Nachricht unleserlich sein? ", "text", List(), Set("66")),
      ("Nenne 3 Anwendungen für QR-Codes, welche du bei der Erstellung der Visitenkarte gesehen hast.", "text", List(), Set("Text", "URL", "VCard")),
      ("Beschreibe ein Szenario aus dem Schulalltag, in dem QR-Codes sinnvoll eingesetzt werden könnten.", "text", List(), Set("schule","einsatz"))
    )

    val questionsVar: Var[List[(String, String, List[(String, Boolean)], Set[String])]] = Var(quizQuestions)
    val answersVar: Var[Map[Int, String]] = Var(Map())
    val resultsVar: Var[Option[String]] = Var(None)

    div(
      cls := "quiz-container",
      h2("QR Code Quiz"),
      p("Beantworte die folgenden 20 Fragen. Textfragen erfordern bestimmte Schlüsselwörter, Multiple-Choice-Fragen haben nur eine richtige Antwort."),
      
      children <-- questionsVar.signal.map { questions =>
        questions.zipWithIndex.map { case ((question, qType, choices, keywords), idx) =>
          val questionNum = idx + 1
          div(
            cls := "quiz-question",
            h4(s"Frage $questionNum: $question"),
            if qType == "text" then
              renderQuizTextQuestion(
                question,
                idx,
                answersVar,
                keywords,
                if idx == questions.size - 1 then Some(() => markChapterCompleted("zusammenfassung")) else None
              )
            else
              renderQuizMCQuestion(question, idx, choices, answersVar)
          )
        }
      },
      
      child <-- resultsVar.signal.map {
        case Some(result) =>
          div(
            cls := "quiz-result",
            h3("Ergebnis"),
            p(result)
          )
        case None =>
          emptyNode
      }
    )
  end renderZusammenfassungQuiz

  def ensureJsPdfLoaded(onReady: () => Unit): Unit =
    val jspdf = js.Dynamic.global.selectDynamic("window").selectDynamic("jspdf")
    if !js.isUndefined(jspdf) then
      onReady()
    else
      val existing = dom.document.querySelector("script[data-jspdf]")
      if existing != null then
        // Script is loading; poll once after a short delay.
        dom.window.setTimeout(() => onReady(), 300)
      else
        val script = dom.document.createElement("script").asInstanceOf[org.scalajs.dom.html.Script]
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
        script.setAttribute("data-jspdf", "true")
        script.onload = (_: dom.Event) => onReady()
        dom.document.head.appendChild(script)

  def generateMerkzettelPdf(sections: List[(String, String)]): Unit =
    val jspdf = js.Dynamic.global.selectDynamic("window").selectDynamic("jspdf")
    if js.isUndefined(jspdf) then
      ()
    else
      val studentName = studentNameVar.now()
      val doc = js.Dynamic.newInstance(jspdf.selectDynamic("jsPDF"))()
      var y = 15
      doc.setFontSize(20)
      doc.setFont("helvetica", "bold")
      doc.text("Mein Merkzettel zu QR Codes", 105, y, js.Dynamic.literal("align" -> "center"))
      doc.setFont("helvetica", "normal")
      doc.setLineWidth(0.5)
      doc.line(20, y + 2, 190, y + 2)
      doc.addImage(
        "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https%3A%2F%2Fevadid.it%2FLucasQR%2F",
        "PNG",
        178,
        5,
        15,
        15
      )
      y += 27
      
      // Add student name if available
      if studentName.nonEmpty then
        doc.setFontSize(13)
        doc.setFont("helvetica", "normal")
        doc.text(s"Name: $studentName", 105, y, js.Dynamic.literal("align" -> "center"))
        y += 10

      sections.foreach { case (heading, body) =>
        if y > 270 then
          doc.addPage()
          y = 15
        doc.setFontSize(13)
        doc.setFont("helvetica", "bold")
        doc.text(heading, 10, y)
        y += 6
        doc.setFontSize(11)
        doc.setFont("helvetica", "normal")
        val content = if body.trim.nonEmpty then body.trim else "(keine Antwort)"
        val lines = doc.splitTextToSize(content, 176).asInstanceOf[js.Array[String]]
        val boxHeight = (lines.length * 5) + 6
        if y + boxHeight > 280 then
          doc.addPage()
          y = 15
        doc.rect(10, y, 190, boxHeight)
        var textY = y + 4
        lines.foreach { line =>
          doc.text(line, 12, textY)
          textY += 5
        }
        y = y + boxHeight + 6
      }

      // Add QR-Bereiche image and explanation
      // Ensure image and text stay on same page (need ~140 units)
      if y > 140 then
        doc.addPage()
        y = 15
      else
        y += 10
      
      doc.setFontSize(13)
      doc.setFont("helvetica", "bold")
      doc.text("Bereiche eines QR-Codes", 10, y)
      y += 6
      
      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      
      // Add the image (smaller size)
      doc.addImage(
        resolveImageUrl("qr_Bereiche.png"),
        "PNG",
        55,
        y,
        100,
        100
      )
      y += 105
      
      // Add explanatory text with colored keywords
      def printColoredText(text: String, startY: Double): Int = {
        var currentY = startY
        val colorMap = Map(
          "roten" -> (255, 0, 0),
          "Positionsmarker" -> (255, 0, 0),
          "blaue" -> (0, 0, 255),
          "Ausrichtungsmarker" -> (0, 0, 255),
          "grüne" -> (0, 170, 0),
          "Timing-Patterns" -> (0, 170, 0),
          "Versionsnummer" -> (255, 204, 0),
          "Metadaten" -> (255, 136, 0)
        )
        
        val lines = doc.splitTextToSize(text, 190).asInstanceOf[js.Array[String]]
        lines.foreach { line =>
          if currentY > 275 then
            doc.addPage()
            currentY = 15
          
          var xPos = 10.0
          var remainingLine = line.toString
          var foundColor = true
          
          while remainingLine.nonEmpty && foundColor do
            foundColor = false
            var earliestPos = remainingLine.length
            var earliestWord = ""
            var earliestColor = (0, 0, 0)
            
            colorMap.foreach { case (word, color) =>
              val pos = remainingLine.indexOf(word)
              if pos >= 0 && pos < earliestPos then
                earliestPos = pos
                earliestWord = word
                earliestColor = color
                foundColor = true
            }
            
            if foundColor then
              // Print text before colored word
              if earliestPos > 0 then
                val beforeText = remainingLine.substring(0, earliestPos)
                doc.setTextColor(0, 0, 0)
                doc.text(beforeText, xPos, currentY)
                xPos = xPos + doc.getTextWidth(beforeText).asInstanceOf[Double]
              
              // Print colored word
              doc.setTextColor(earliestColor._1, earliestColor._2, earliestColor._3)
              doc.text(earliestWord, xPos, currentY)
              xPos = xPos + doc.getTextWidth(earliestWord).asInstanceOf[Double]
              
              remainingLine = remainingLine.substring(earliestPos + earliestWord.length)
            else
              // Print remaining text
              doc.setTextColor(0, 0, 0)
              doc.text(remainingLine, xPos, currentY)
              remainingLine = ""
          
          doc.setTextColor(0, 0, 0)
          currentY = currentY + 5
        }
        (currentY + 2).toInt
      }
      
      val explanations = List(
        "Trotz verschiedenen Einsatzmöglichkeiten haben QR Codes einen ähnlichen Aussehen.",
        "Die roten Bereiche in den Ecken heißen Positionsmarker. Diese dienen dazu, dass die Handykamera den Anfang und das Ende des QR Codes erfassen kann.",
        "Die blaue Stelle ist ein Ausrichtungsmarker. Dieser hilft den QR Code auf unebenen Flächen (z.B. Verpackungen) zu lesen.",
        "Der grüne Bereich sind die Timing-Patterns (Synchronisationslinien). Hier wechseln sich schwarze und weiße Pixel ab. Mithilfe dieser Anordnung wird die Größe des QR Codes bestimmt.",
        "Da viele verschiedene QR Code Versionen existieren, wird eine Versionsnummer festgehalten. Die Metadaten sind Informationen über den Aufbau des QR Codes (z.B. die verwendete Maske).",
        "Weiterhin haben alle QR Codes einen weißen Rand um den Code, damit dieser gelesen werden kann. Diesen Rand nennt man die Randzone. Die genauen Bereiche können je nach QR Code Version variieren, aber es gibt immer bestimmte Bereiche, die nicht für die Nachricht verwendet werden können."
      )
      
      explanations.foreach { text =>
        y = printColoredText(text, y)
      }

      val filename = if studentName.nonEmpty then
        val safeName = studentName.replaceAll("[^a-zA-Z0-9äöüÄÖÜß _-]", "").replaceAll(" ", "_")
        s"Merkzettel_$safeName.pdf"
      else
        "Merkzettel.pdf"
      doc.save(filename)

  def erstelleZusammenfassungsBlatt(): Element =
    val chapterLabels = List(
      ("einfuehrung", "Einfuhrung"),
      ("nachricht", "Nachrichten schreiben"),
      ("maskierung", "Maskierung"),
      ("fehlerkorrektur", "Fehlerkorrektur"),
      ("praxisanwendungen", "Praxisanwendungen")
    )

    val pdfHeadings = List(
      ("einfuehrung", "Diese Vorstellung hatte ich am Anfang von QR Codes"),
      ("nachricht", "So werden aus Nachrichten Pixelmuster in den QR Code geschrieben"),
      ("maskierung", "So funktioniert die Maskierung und Demaskierung und dafuer ist sie gut"),
      ("fehlerkorrektur", "Das bedeutet Fehlerkorrektur und so wird sie im QR Code umgesetzt"),
      ("praxisanwendungen", "Das sind die Vor- und Nachteile bei der Verwendung von QR Codes")
    )

    val chapterHints = Map(
      "einfuehrung" -> "Wichtige Stichwörter: Was sind QR Codes? Wofür werden sie verwendet? Wie stelle ich mir vor, dass QR Codes funktionieren? Was wusste ich vorher?",
      "nachricht" -> "Wichtige Stichwörter: Binärdarstellung, ASCII, Kodierung, Dekodierung, Datenbereich im QR Code",
      "maskierung" -> "Wichtige Stichwörter: Maskierungsmuster, Demaskierung, Musterauswahl, Optimierung der Lesbarkeit, XOR-Verknüpfung, visuelle Verbesserung",
      "fehlerkorrektur" -> "Wichtige Stichwörter: Redundanz, Reed-Solomon-Code, Fehlerkorrekturstufe vs benötigter Speicher, Wiederherstellung beschädigter Daten, Löschfehler vs Substitutionsfehler, QR-Versionen",
      "praxisanwendungen" -> "Wichtige Stichwörter: Vorteile (schnelles Scannen, Fehlertoleranz, viele Daten), Nachteile (Sicherheitsrisiken, Platzbedarf), Anwendungsbeispiele"
    )

    val initialData = allResponsesVar.now()
    val answerVars = chapterLabels.map { case (chapterKey, _) =>
      val lastTask = chapterExercises.getOrElse(chapterKey, Nil).lastOption.getOrElse("")
      val answer = initialData
        .get(chapterKey)
        .flatMap(_.exercises.find(_.task == lastTask).flatMap(_.answer))
        .getOrElse("")
      chapterKey -> Var(answer)
    }.toMap

    div(
      h3("Eigenes Merkblatt"),
      p("Hier siehst du deine Antworten von der Zusammenfassung der vorherigen Kapitel. Du kannst sie nochmal anpassen. Überpfüfe dafür jeweils ob in deiner Antwort die wichtigen Dinge stehen. Die wichtigsten Themen sind unter dem jeweiligen Eingabefeld nochmal zusammengefasst. Am Ende kannst du dir dann ein PDF mit deinen Antworten erstellen, das du dir abspeichern oder ausdrucken kannst."),
      div(
        styleAttr := "display: flex; flex-direction: column; gap: 1rem;",
        chapterLabels.map { case (chapterKey, label) =>
          val lastTask = chapterExercises.getOrElse(chapterKey, Nil).lastOption.getOrElse("")
          val answerVar = answerVars.getOrElse(chapterKey, Var(""))

          div(
            styleAttr := "display: flex; flex-direction: column; gap: 0.4rem;",
            h4(label),
            p(
              lastTask,
              styleAttr := "margin: 0; color: #555; font-size: 0.9rem;"
            ),
            textArea(
              disabled := lastTask.isEmpty,
              styleAttr := "min-height: 120px; width: 100%; font-size: 15px; padding: 0.5rem; resize: vertical;",
              value <-- answerVar.signal,
              onInput.mapToValue --> { text =>
                if lastTask.nonEmpty then
                  answerVar.set(text)
                  persistExerciseAnswer(chapterKey, lastTask, text)
              }
            ),
            div(
              styleAttr := "background-color: #f0f8ff; padding: 0.5rem; border-left: 3px solid #4a90e2; font-size: 0.85rem; color: #333;",
              chapterHints.get(chapterKey).map(hint => p(hint, styleAttr := "margin: 0;")).getOrElse(emptyNode)
            )
          )
        },
        button(
          "Merkzettel erstellen",
          cls := "btn-primary",
          styleAttr := "align-self: flex-start; margin-top: 0.5rem;",
          onClick --> { _ =>
            val sections = pdfHeadings.map { case (chapterKey, heading) =>
              val answer = answerVars.get(chapterKey).map(_.now()).getOrElse("")
              heading -> answer
            }
            ensureJsPdfLoaded(() => generateMerkzettelPdf(sections))
            merkzettelCreatedVar.set(true)
            saveMerkzettelCreated()
            markChapterCompleted("zusammenfassung")
          }
        )
      )
    )
  end erstelleZusammenfassungsBlatt

  def renderQuizTextQuestion(question: String, questionIndex: Int, answersVar: Var[Map[Int, String]], keywords: Set[String], onCorrect: Option[() => Unit] = None): Element =
    val textVar = Var("")
    val feedbackVar: Var[Option[Boolean]] = Var(None)

    div(
      cls := "quiz-text-answer",
      textArea(
        rows := 6,
        cols := 60,
        placeholder := "Deine Antwort hier...",
        styleAttr := "font-size: 1rem; padding: 0.75rem;",
        controlled(
          value <-- textVar.signal,
          onInput.mapToValue --> { text =>
            textVar.set(text)
            answersVar.update(answers => answers + (questionIndex -> text))
          }
        )
      ),
      button(
        "Antwort überprüfen",
        onClick --> { _ =>
          val text = textVar.now()
          val isCorrect = keywords.nonEmpty && keywords.exists(k => text.toLowerCase.contains(k.toLowerCase))
          feedbackVar.set(Some(isCorrect))
          if isCorrect then
            onCorrect.foreach(callback => callback())
        },
        cls <-- feedbackVar.signal.map {
          case Some(true)  => "btn-success"
          case Some(false) => "btn-error"
          case None        => ""
        }
      ),
      child <-- feedbackVar.signal.map {
        case Some(true)  => span(cls := "feedback-correct", " Richtig!")
        case Some(false) => span(cls := "feedback-incorrect", "Nicht ganz richtig. Versuche es nochmal!")
        case None        => emptyNode
      }
    )
  end renderQuizTextQuestion

  def renderQuizMCQuestion(question: String, questionIndex: Int, choices: List[(String, Boolean)], answersVar: Var[Map[Int, String]]): Element =
    val selectedVar: Var[Option[Int]] = Var(None)
    val feedbackVar: Var[Option[Boolean]] = Var(None)

    div(
      cls := "quiz-mc-answer",
      div(
        children <-- selectedVar.signal.map { selected =>
          choices.zipWithIndex.map { case ((labelText, _), idx) =>
            div(
              cls := "quiz-radio-option",
              input(
                typ := "radio",
                idAttr := s"question-$questionIndex-$idx",
                value := idx.toString,
                checked := selected.contains(idx),
                onChange --> { _ =>
                  selectedVar.set(Some(idx))
                  answersVar.update(answers => answers + (questionIndex -> labelText))
                }
              ),
              label(
                forId := s"question-$questionIndex-$idx",
                labelText
              )
            )
          }
        }
      ),
      button(
        "Antwort überprüfen",
        onClick --> { _ =>
          selectedVar.now().foreach { idx =>
            val isCorrect = choices(idx)._2
            feedbackVar.set(Some(isCorrect))
          }
        },
        cls <-- feedbackVar.signal.map {
          case Some(true)  => "btn-success"
          case Some(false) => "btn-error"
          case None        => ""
        }
      ),
      child <-- feedbackVar.signal.map {
        case Some(true)  => span(cls := "feedback-correct", "Richtig!")
        case Some(false) => span(cls := "feedback-incorrect", "Nicht ganz richtig. Versuche es nochmal!")
        case None        => emptyNode
      }
    )
  end renderQuizMCQuestion

  def calculateQuizScore(questions: List[(String, String, List[(String, Boolean)], Set[String])], answers: Map[Int, String]): Int =
    questions.zipWithIndex.count { case ((question, qType, choices, keywords), idx) =>
      answers.get(idx).exists { answer =>
        if qType == "text" then
          keywords.nonEmpty && keywords.exists(k => answer.toLowerCase.contains(k.toLowerCase))
        else
          // For MC, find the correct choice
          choices.zipWithIndex.exists { case ((choice, isCorrect), cIdx) =>
            isCorrect && choice == answer
          }
      }
    }
  end calculateQuizScore

  def counterButton(): Element =
    val counter = Var(0)
    button(
      tpe := "button",
      "Aufgabe abgeben ",
      child.text <-- counter,
      onClick --> { _ => counter.update(c => c + 1) },
    )
  end counterButton

  def infoBoxVar(storageKey: String): Var[Boolean] =
    val initial = try
      dom.window.localStorage.getItem(storageKey) == "true"
    catch
      case _: Throwable => false
    Var(initial)

  def markInfoBoxShown(storageKey: String, infoVar: Var[Boolean]): Unit =
    infoVar.set(true)
    try
      dom.window.localStorage.setItem(storageKey, "true")
    catch
      case _: Throwable => ()

  def Infotext(title: String, text: String, image: Option[String] = None): Element =
    def linkify(line: String): Seq[HtmlElement] =
      val regex = "(https?://\\S+)".r
      val matches = regex.findAllMatchIn(line).toList
      if matches.isEmpty then
        Seq(span(line))
      else
        val nodes = scala.collection.mutable.ListBuffer.empty[HtmlElement]
        var last = 0
        matches.foreach { m =>
          val start = m.start
          val end = m.end
          if start > last then
            nodes += span(line.substring(last, start))
          val url = m.matched
          nodes += a(
            href := url,
            target := "_blank",
            rel := "noopener noreferrer",
            url
          )
          last = end
        }
        if last < line.length then
          nodes += span(line.substring(last))
        nodes.toList
    div(
      cls := "infotext",
      h3(title),
      image.map(imageSrc => img(alt := title, src := resolveImageUrl(imageSrc), styleAttr := "max-width: 100%; margin: 1rem 0; border-radius: 4px;")),
      text.split("\n").map { line =>
        if line.trim.nonEmpty then
          p(linkify(line.trim): _*)
        else
          emptyNode
      }
    )
  end Infotext

  def LösungZeigen(text: String, solutionWords: Set[String]): Element =
    if solutionWords.isEmpty || solutionWords == Set(" ") then
      div(cls := "loesung-text", text)
    else
      val escaped = solutionWords.toList.map(java.util.regex.Pattern.quote)
      val letterClass = "A-Za-zÄÖÜäöüß"
      val pattern = java.util.regex.Pattern.compile(
        "(?i)(^|[^" + letterClass + "])(" + escaped.mkString("|") + "[" + letterClass + "]*)(?=[^" + letterClass + "]|$)"
      )
      val matcher = pattern.matcher(text)
      val nodes = scala.collection.mutable.ListBuffer.empty[HtmlElement]
      var last = 0
      while matcher.find() do
        val start = matcher.start(2)
        val end = matcher.end(2)
        if start > last then
          nodes += span(text.substring(last, start))
        nodes += b(text.substring(start, end))
        last = end
      if last < text.length then
        nodes += span(text.substring(last))
      div(cls := "loesung-text", children <-- Signal.fromValue(nodes.toList))
  end LösungZeigen

  def allgemeineInfos(title: String, text: String): Element =
    div(
      styleAttr := "margin-top: 1rem; padding: 1.25rem; background: #f2f7ff; border-radius: 12px; border: 1px solid #b8c9e6; box-shadow: 0 6px 16px rgba(30, 60, 120, 0.08);",
      h3(styleAttr := "margin-top: 0; color: #1f3b73;", title),
      div(
        styleAttr := "height: 2px; width: 60px; background: #1f3b73; margin: 0.25rem 0 0.75rem 0;"
      ),
      text.split("\n").map { line =>
        if line.trim.nonEmpty then
          p(styleAttr := "color: #2d4a7a; margin: 0.3rem 0; line-height: 1.35;", line.trim)
        else
          emptyNode
      }
    )
  end allgemeineInfos

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
      ("#praxisanwendungen", "Praxisanwendungen"),
      ("#zusammenfassung", "Zusammenfassung"),
      ("#barcodes", "Barcode")
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
        label("Ich habe den Inhalt verstanden."),
        p(cls := "rating-hint", "5 Sterne = vollständige Zustimmung, 1 Stern = überhaupt nicht"),
        ratingStars(understandingVar)
      ),
      
      div(
        cls := "rating-category",
        label("Die Schwierigkeit der Inhalte war:"),
        p(cls := "rating-hint", "5 Sterne = sehr schwierig, 1 Stern = sehr leicht"),
        ratingStars(difficultyVar)
      ),
      
      div(
        cls := "rating-category",
        label("Die Aufgaben haben mir Spaß gemacht."),
        p(cls := "rating-hint", "5 Sterne = viel Spaß, 1 Stern = wenig Spaß"),
        ratingStars(qualityVar)
      ),
       div(
        cls := "rating-category",
        label("Die Zeitangaben für das Kapitel waren:"),
        p(cls := "rating-hint", "5 Sterne = viel zu hoch, 1 Stern = viel zu niedrig"),
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

case class SimpleTextEditor(stateToBind: Var[String], statusSignal: Signal[Option[Boolean]] = Signal.fromValue(None), numericOnly: Boolean = false) {
  private val editorTextArea = textArea(
    rows := 8,
    cols := 80,
    disabled <-- statusSignal.map(_.contains(false)),
    styleAttr <-- statusSignal.map {
      case Some(false) => "background-color: #f9d6d6; color: #6b6b6b; border-color: #e78989;"
      case Some(true) => "background-color: #dff3e1; color: #2e7d32; border-color: #8fd09a;"
      case None => ""
    },
    controlled(
      value <-- stateToBind.signal,
      onInput.mapToValue.map { text =>
        if numericOnly then text.filter(_.isDigit) else text
      } --> stateToBind.writer
    )
  )

  private val domElement: Element =
    div(
      cls := "simple-text-editor",
      editorTextArea
    )

  def getDomElement(): Element = domElement
}