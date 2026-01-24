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
    "nachricht" -> List(
      "Erkläre, was ein QR-Code ist und zu welchem Zweck er verwendet wird.",
      "Erstelle eine eigene Kodierung für die Buchstaben B, e, t (je 8 Pixel).",
      "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung.",
      "Erkläre die Nachteile einer eigenen, nicht standardisierten Kodierung.",
      "Kodiere das Wort 'INFORMATIK' mithilfe der ASCII-Tabelle.",
      "Erläutere einen Vorteile der festen Länge von 8 Pixeln pro Buchstabe. Wie viele verschiedene Zeichen können mit 8 Pixeln dargestellt werden?",
      "Verschlüssele eine Nachricht mit QR-Code.",
      "Beschreibe, was dir bei der QR-Code Darstellung aufgefallen ist. Wie wird ein Buchstabe in Pixel umgewandelt? Wie bilden sich die Wörter? Gibt es Beschränkungen?",
      "Erkläre, wie du weißt, wann ein neuer Buchstabe anfängt, wenn du nur die Pixel siehst.",
      "Beschreibe, welche Bereiche des QR-Codes festgelegt sind und nicht verändert werden.",
      "Erkläre einem Mitschüler, wie eine Nachricht in einen QR-Code geschrieben wird."
    ),
    "maskierung" -> List(
      "Versuche den QR-Code zu scannen und stelle begründete Vermutungen dazu an.",
      "Erkläre die Berechnungsvorschrift einer Maske deiner Wahl.",
      "Wende die Maske 2 auf die folgende Nachricht an: 'HELLO'. Beschreibe den Prozess Schritt für Schritt.",
      "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.",
      "Erkläre, warum die XOR-Operation sich selbst invertiert (A XOR B XOR B = A) und was dies für die Demaskierung im QR-Code bedeutet.",
      "Vermute, woher der Scanner weiß, welche Maske angewandt wurde.",
      "Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkläre, wofür diese Eigenschaft nützlich sein könnte.",
      "Erläutere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zusätzlich eine mögliche Lösung, um diese Probleme zu umgehen.",
      "Fasse zusammen, warum die Maskierung ein wichtiger Teil des QR-Code-Systems ist und welche Vorteile sie mit sich bringt."
    ),
    "fehlerkorrektur" -> List(
      "Hin und wieder kommt es vor, dass Leute Sticker auf QR Codes kleben, welche in der Öffentlichkeit zu sehen sind. Vergleiche die beiden QR-Codes. Vermute, welcher der beiden QR Codes durch einen Scanner gelesen werden kann. Begründe deine Vermutung.",
      "Versuche nun beide QR Codes zu scannen. Beschreibe deine Beobachtungen.",
      "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider hast du dich bei der Hausnummer vertippt und statt 23 steht dort 32.",
      "Eine Möglichkeit mit Fehlern umzugehen ist es, eine Prüfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gezählt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel wäre, dass die Zeichenanzahl gezählt wird. Aus der Nachricht 'Hallo' würde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt oder korrigiert werden können. Begründe deine Antwort.",
      "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden können am Beispiel der Nachricht '12345'. (Tipp: Überlege dir, was du machst, wenn eine Information von einer Person im Gespräch nicht verstanden wurde.)",
      "Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Ursprüngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Ursprüngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Ursprüngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'",
      "Lückentext: Prüfsummen fügen ______ zur Nachricht hinzu, um Fehler erkennen zu können. Bei einfachen Wiederholungen hilft Redundanz, aber sie erhöht den ______. Substitutionsfehler lassen sich besser mit einem ______-Code erkennen. Fülle die Lücken passend aus.",
      "In dem folgenden QR Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten in den QR Code laden. Durch einen klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben.",
      "Erkläre in eigenen Worten, wie die Fehlerkorrektur in QR Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zusätzlichen Daten und Korrekturlevel ein. Erläutere Zusätzlich, wie die Fehlerkorrektur im QR Code dargestellt wird."
    ),
    "anwendung" -> List(),
    "zusammenfassung" -> List()
  )

  val allResponsesVar: Var[Map[String, ChapterData]] = Var(
    // Load all chapters from localStorage on startup
    List("einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung")
      .flatMap { chapter =>
        loadFromLocalStorage(chapter).map(chapter -> _)
      }
      .toMap
  )

  // QR Code Exercise with text input and simulation
  def renderQRCodeExercise(exerciseNumber: Int, taskText: String, explanation: String): Element =
    val messageTextVar = Var("")
    val exceedsLimitVar = Var(false)
    val maxChars = 17
    div(
      cls := "qr-text-input-section",
      h3(s"Aufgabe $exerciseNumber"),
      p(explanation),
      div(
        cls := "qr-input-container",
        input(
          typ := "text",
          placeholder := "Deine Nachricht hier...",
          cls := "message-input",
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
      child <-- messageTextVar.signal.map { text =>
        renderQRCodeSimulation(text)
      }
    )
  end renderQRCodeExercise

  // QR Code Exercise with metadata button
  def renderQRCodeExerciseWithMetadata(exerciseNumber: Int, taskText: String, explanation: String): Element =
    val messageTextVar = Var("")
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
        cls := "qr-input-container",
        input(
          typ := "text",
          placeholder := "Deine Nachricht hier...",
          cls := "message-input",
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
      child <-- Signal.combine(messageTextVar.signal, metadataActive.signal, errorCorrectionActive.signal).map { case (text: String, isMetadataActive: Boolean, isErrorActive: Boolean) =>
        renderQRCodeSimulationWithBothMetadata(text, darkRedPixels, lightRedPixels, isMetadataActive, getErrorCorrectionPixels(text), isErrorActive, allErrorCorrectionZones)
      },
      div(
        styleAttr := "margin-top: 1rem; display: flex; gap: 1rem;",
        button(
          "Metadaten hinzufügen",
          styleAttr := "padding: 0.5rem 1rem; background-color: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;",
          onClick --> { _ =>
            metadataActive.update(!_)
            showMetadata.update(!_)
          }
        ),
        button(
          "Fehlerkorrektur hinzufügen",
          styleAttr := "padding: 0.5rem 1rem; background-color: #1976D2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;",
          onClick --> { _ =>
            errorCorrectionActive.update(!_)
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
    val encodedMap = scala.collection.mutable.Map[Int, List[Int]]()
    for (char, charIndex) <- text.zipWithIndex do
      charPixelMap.get(charIndex).foreach { allPixels =>
        val bits = charToAsciBits(char)
        val filledPixels = allPixels.zipWithIndex.collect {
          case (pixel, bitIndex) if bits(bitIndex) == 1 => pixel
        }
        encodedMap(charIndex) = filledPixels
      }
    encodedMap.toMap

  // Generate QR-code-like grid with progressive filling based on text length
  def renderQRCodeSimulation(text: String, gridSize: Int = 21): Element =
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
            div(
              styleAttr := s"width: 24px; height: 24px; background: ${if isBlack then "black" else "white"}; display: flex; align-items: center; justify-content: center; font-size: 8px; color: ${if isBlack then "white" else "gray"}; font-weight: bold; overflow: hidden;",
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
              val showInfoVar = Var(false)
              val showAsciiInfoVar = Var(false)
              div(
                h1("Nachrichten schreiben"),
                TimeBadge(70),
                cls := "nachricht-section",
                renderExercise(
                  "Beschreibe, wie ein QR Code aufgebaut ist. Vermute, wie die Daten im QR Code dargestellt werden.",
                  Set("pixel", "schwarz", "weiß"),
                  1,
                  Some(generateQRCode("Hallo Welt", 200)),
                  "nachricht",
                  Some(() => showInfoVar.set(true))
                ),
                child <-- showInfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Kodierung",
                      "Eine Kodierung ist eine Vorschrift, wie Informationen (z.B. Buchstaben) in eine andere Form (z.B. Pixel) umgewandelt werden. " +
                      "Bei QR-Codes werden Buchstaben in schwarze und weiße Pixel kodiert. Jeder Buchstabe bekommt dabei ein bestimmtes Muster. " +
                      "Wichtig ist, dass die Kodierung eindeutig ist: Jeder Buchstabe muss ein eindeutiges Muster haben, damit man die Nachricht später wieder dekodieren kann."
                    )
                  else
                    emptyNode
                },
                {
                val encodingPatternVar = Var(Vector.empty[Boolean])
                div(
                  div(
                    h2("Aufgabe 2"),
                    p("Überlege dir eine eigene Kodierung für die Buchstaben 'B', 'e', 't'. Nutze die Pixel, um deine Kodierung darzustellen."),
                    div(
                      styleAttr := "display: flex; align-items: center; gap: 10px;",
                      div(
                        styleAttr := "display: flex; flex-direction: column; gap: 4px; font-size: 24px; font-weight: bold;",
                        span("B", styleAttr := "height: 28px; line-height: 28px;"),
                        span("e", styleAttr := "height: 28px; line-height: 28px;"),
                        span("t", styleAttr := "height: 28px; line-height: 28px;")
                      ),
                      renderPixelAreaWithSave(10, 3, "Eigene Kodierung", encodingPatternVar, "nachricht", "Erstelle eine eigene Kodierung für die Buchstaben B, e, t (je 8 Pixel).")
                    )
                  ),
                  div(
                    h2("Aufgabe 3"),
                    p("Schreibe das Wort 'Bett' mit deiner eigenen Kodierung aus Aufgabe 2."),
                    div(
                      styleAttr := "display: flex; align-items: center; gap: 10px;",
                      renderPixelAreaWithValidation(10, 4, "Wort 'Bett' mit eigener Kodierung", encodingPatternVar, 1, "nachricht", "Schreibe das Wort 'Bett' mit deiner eigenen Kodierung.")
                    )
                  )
                )
              },
              renderExercise(
                "Erkläre die Nachteile einer eigenen, nicht standardisierten Kodierung.",
                Set("eindeutig", "speichern", "pixel"),
                4,
                None,
                "nachricht",
                Some(() => showAsciiInfoVar.set(true))
              ),
              child <-- showAsciiInfoVar.signal.map { show =>
                if show then
                  Infotext(
                    "ASCII als Standard",
                    "ASCII ist ein verbreiteter Standard, bei dem jeder Buchstabe einer eindeutigen 7- oder 8-Bit-Kombination zugeordnet ist. " +
                    "Das verhindert Mehrdeutigkeiten, erleichtert das gemeinsame Verständnis und führt dazu, dass die Kodierung nicht übergeben werden muss, da diese bekannt ist."
                  )
                else
                  emptyNode
              },
              {
                val asciiTable = List(
                  ("A", "01000001"), ("B", "01000010"), ("C", "01000011"), ("D", "01000100"),
                  ("E", "01000101"), ("F", "01000110"), ("G", "01000111"), ("H", "01001000"),
                  ("I", "01001001"), ("J", "01001010"), ("K", "01001011"), ("L", "01001100"),
                  ("M", "01001101"), ("N", "01001110"), ("O", "01001111"), ("P", "01010000"),
                  ("Q", "01010001"), ("R", "01010010"), ("S", "01010011"), ("T", "01010100"),
                  ("U", "01010101"), ("V", "01010110"), ("W", "01010111"), ("X", "01011000"),
                  ("Y", "01011001"), ("Z", "01011010")
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
                      thead(tr(th("Buchstabe"), th("ASCII (8 Bit)"))),
                      tbody(
                        asciiTable.map { case (ch, bits) =>
                          tr(td(ch), td(bits))
                        }
                      )
                    )
                  )
                )
              },
              renderExercise(
                "Erläutere einen Vorteile der festen Länge von 8 Pixeln pro Buchstabe. Wie viele verschiedene Zeichen können mit 8 Pixeln dargestellt werden?",
                Set("256", "vorteil", "eindeutig"),
                6,
                None,
                "nachricht"
              ),
              renderQRCodeExercise(
                7,
                "Verschlüssele eine Nachricht mit QR-Code.",
                "Als nächstes überführen wir das Gelernte in eine QR-Code Darstellung. Dafür schauen wir uns an, wie Nachrichten in QR Codes dargestellt werden. " +
                "Gib eine Nachricht ein und beobachte, wie diese als QR-Code in Pixel umgewandelt wird. Jeder Buchstabe wird dabei in 8 Bits (seine ASCII-Kodierung) übersetzt und färbt entsprechende Pixel schwarz."
              ),
              renderExercise(
                "Beschreibe, was dir bei der QR-Code Darstellung aufgefallen ist. Wie wird ein Buchstabe in Pixel umgewandelt? Wie bilden sich die Wörter? Gibt es Beschränkungen?",
                Set("ascii", "pixel"),
                8,
                None,
                "nachricht"
              ),
              renderExercise(
                "Erkläre, wie du weißt, wann ein neuer Buchstabe anfängt, wenn du nur die Pixel siehst.",
                Set("8"),
                9,
                None,
                "nachricht"
              ),
              {
                val showQRFixedAreasInfoVar = Var(false)
                div(
                  renderExercise(
                    "Beschreibe, welche Bereiche des QR-Codes festgelegt sind und nicht verändert werden.",
                    Set("position", "fest", "fixiert", "erkennung"),
                    10,
                    None,
                    "nachricht",
                    Some(() => showQRFixedAreasInfoVar.set(true))
                  ),
                  child <-- showQRFixedAreasInfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Festgelegte Bereiche im QR-Code",
                        "Ein QR-Code hat mehrere festgelegte Bereiche, die für die Erkennung und Dekodierung essentiell sind: " +
                        "Die drei Positionsmarker (auch Position Detection Patterns genannt) befinden sich in den drei Ecken des QR-Codes und sind 7×7 Pixel große Quadrate mit einem schwarzen 3x3 Quadrat im Inneren. " +
                        "Sie ermöglichen es Scannern, die Ausrichtung und Lage des QR-Codes zu erkennen. " +
                        "Das Timing Pattern sind abwechselnde schwarze und weiße Bereiche, die sich horizontal und vertikal an bestimmten Stellen im QR Code sind. Diese helfen die Größe und Position der einzelnen Pixel zu bestimmen. " +
                        "Diese beiden festgelegten Bereiche dürfen nie mit Daten überschrieben werden, da diese dafür sorgen, dass ein QR Code überhaupt von einer Kamera erkannt werden kann. " +
                        "Weiterhin gibt es am Anfang der Nachricht noch einen festen Bereich, der die Länge der Nachricht kodiert. Hier wird in 8 Bits angegeben, wie viele Zeichen die Nachricht hat."
                      )
                    else
                      emptyNode
                  }
                )
              },
              renderExercise(
                "Erkläre einem Mitschüler, wie eine Nachricht in einen QR-Code geschrieben wird.",
                Set("ascii", "kodierung", "nachricht", "länge", "position"),
                11,
                None,
                "nachricht"
              ),
              Rating("nachricht"),
              chapterNavigation("#nachricht")
            )
            }
          else if hash == "#maskierung" then  
            {
              val showMaskierungInfoVar = Var(false)
              val showMaskierungAufgabe4InfoVar = Var(false)
              val showMaskierungAufgabe6InfoVar = Var(false)
              val showMaskierungAufgabe8InfoVar = Var(false)
              div(
                h1("Maskierung"),
                TimeBadge(45),
                renderExercise(
                  "Versuche den QR-Code zu scannen und stelle begründete Vermutungen dazu an.",
                  Set("unlesbar", "schwarze"),
                  1,
                  Some(img(src := "/qr-unlesbar.png", alt := "Unlesbar QR-Code", width := "300", height := "300")),
                  "maskierung",
                  Some(() => showMaskierungInfoVar.set(true))
                ),
                child <-- showMaskierungInfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Maskierung im QR-Code",
                      "Wie du vielleicht bemerkt hast, war der QR-Code schwer zu scannen. Um dies zu verhindern werden nach einem bestimmten Muster die einzelnen Pixel umgefärbt." +
                      "Diesen Prozess nennt man Maskierung. Die Maskierung sorgt dafür, dass der QR-Code besser lesbar ist und von Scannern zuverlässiger erkannt werden kann." 
                    )
                  else
                    emptyNode
                },
                renderMaskierungAufgabe(),
                renderMaskierungAufgabe3(),
                renderExercise(
                  "Erläutere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet." +
                  " Beschreibe zusätzlich eine mögliche Lösung, um diese Probleme zu umgehen.",
                  Set(),
                  4,
                  None,
                  "maskierung",
                  Some(() => showMaskierungAufgabe4InfoVar.set(true))
                ),
                child <-- showMaskierungAufgabe4InfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Mehrere Masken in QR-Codes",
                      "Um das Problem einer festen Maske zu lösen, werden in QR-Codes 8 verschiedene Masken probiert. " +
                      "Daraufhin wird jeweils bewertet, welche Maske den größten Kontrast zwischen schwarzen und weißen Pixeln generiert. Zusätzlich werden andere Kriterien, wie das Vermeiden des Timingpatterns, berücksichtigt. Die Maske die am Besten alle Kriterien erfüllt, wird ausgewählt. " +
                      "Diese Maske wird anschließend auf den QR-Code angewandt. Dadurch wird sichergestellt, dass der QR-Code optimal lesbar ist. Die Verschiedenen Masken sind im Bild dargestellt. Unter jeder Maske steht hierbei die Berechnungsvorschrift, die angibt, welche Pixel umgefärbt werden. Das % Zeichen steht hierbei für den Modulo-Operator, also den Rest einer Division.",
                      Some("/qr-masken.png")
                    )
                  else
                    emptyNode
                },
                renderExercise(
                  "Erkläre die Berechnungsvorschrift einer Maske deiner Wahl.",
                  Set(),
                  5,
                  None,
                  "maskierung"
                ),
                renderExercise(
                  "Vermute, woher der Scanner weiß, welche Maske angewandt wurde.",
                  Set(),
                  6,
                  None,
                  "maskierung",
                  Some(() => showMaskierungAufgabe6InfoVar.set(true))
                ),
                child <-- showMaskierungAufgabe6InfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Metadaten in QR-Codes",
                      "Der Scanner weiß deshalb, welche Maske angewandt wurde, weil Metadaten (Daten über die Daten) auch in Form von Pixeln an bestimmten Stellen im QR-Code festgehalten werden. " +
                      "Zu diesen Metadaten zählt unter anderem die Nummer der verwendeten Maske. Diese Information wird an spezifischen Positionen im QR-Code kodiert, " +
                      "damit der Scanner diese auslesen und die entsprechende Maske rückgängig machen kann, um die ursprünglichen Daten zu rekonstruieren. " +
                      "Weitere Metadaten sind beispielsweise die verwendete Fehlerkorrektur-Stufe oder die Versionsnummer des QR-Codes."
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
                  Some(() => showMaskierungAufgabe8InfoVar.set(true))
                ),
                child <-- showMaskierungAufgabe8InfoVar.signal.map { show =>
                  if show then
                    Infotext(
                      "Eleganz der XOR-Operation",
                      "Die Tatsache, dass die XOR-Operation ihre eigene Umkehrfunktion ist ist sehr praktisch! Dies führt dazu, dass durch 2maliges Anwenden der gleichen Maske die ursprünglichen Daten wiederhergestellt werden. " +
                      "Der Scanner muss dadurch keine zwei verschiedene Funktionen implementieren - eine zum Maskieren und eine zum Demaskieren. " +
                      "Stattdessen kann er einfach die gleiche XOR-Funktion ein zweites Mal anwenden. Dies spart Speicherplatz und " +
                      "reduziert Komplexität. Diese Eigenschaft macht XOR zu einer effizienten Wahl für die Maskierung in QR-Codes. " +
                      ""
                    )
                  else
                    emptyNode
                },
                renderExercise(
                  "Fasse in eigenen Worten zusammen, warum die Maskierung ein wichtiger Teil des QR-Code-Systems ist. Erläutere dabei an einem Beispiel, wie die Maskierung und Demaskierung funktioniert.",
                  Set(),
                  9,
                  None,
                  "maskierung"
                ),
                //renderMaskierung(),
                Rating("maskierung"),
                chapterNavigation("#maskierung")
              )
            }
          else if hash == "#fehlerkorrektur" then  
            div(
              h1("Fehlerkorrektur"),
              TimeBadge(45),
              {
                val showFehlerkorrekturAufgabe2InfoVar = Var(false)
                val showFehlerkorrekturAufgabe3InfoVar = Var(false)
                div(
                  renderExercise(
                    "Hin und wieder kommt es vor, dass Leute Sticker auf QR Codes kleben, welche in der Öffentlichkeit zu sehen sind. Vergleiche die beiden QR-Codes. Vermute, welcher der beiden QR Codes durch einen Scanner gelesen werden kann. Begründe deine Vermutung.",
                    Set("Sticker", "lesbar"),
                    1,
                    Some(
                      div(
                        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: flex-start;",
                        div(
                          styleAttr := "text-align: center;",
                          imageWithFallback("qr-mitfehler", "QR-Code mit Stickern", 220),
                          p("QR-Code mit Stickern")
                        ),
                        div(
                          styleAttr := "text-align: center;",
                          imageWithFallback("qr-ohnefehler", "QR-Code ohne Sticker", 220),
                          p("QR-Code ohne Sticker")
                        )
                      )
                    ),
                    "fehlerkorrektur"
                  ),
                  renderExercise(
                    "Versuche nun beide QR Codes zu scannen. Beschreibe deine Beobachtungen.",
                    Set("lesbar"),
                    2,
                    None,
                    "fehlerkorrektur",
                    Some(() => showFehlerkorrekturAufgabe2InfoVar.set(true))
                  ),
                  child <-- showFehlerkorrekturAufgabe2InfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Hinweis zur Fehlerkorrektur",
                        "Wie dir vielleicht aufgefallen ist, konnte der QR-Code mit den Stickern trotzdem gescannt werden. " +
                        "Wie genau das möglich ist und welche Grenzen es dabei gibt, schauen wir uns im folgenden an. " +
                        "Dafür gehen wir erst einmal weg von QR-Codes und betrachten ein einfaches Beispiel einer Textnachricht. "
                      )
                    else
                      emptyNode
                  },
                  renderExercise(
                    "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \n" +
                    "Situation 1: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \n" +
                    "Situation 2: Du teilst mit einer Notiz einem Freund deine Adresse mit. Leider hast du dich bei der Hausnummer vertippt und statt 23 steht dort 32.",
                    Set(),
                    3,
                    None,
                    "fehlerkorrektur",
                    Some(() => showFehlerkorrekturAufgabe3InfoVar.set(true))
                  ),
                  child <-- showFehlerkorrekturAufgabe3InfoVar.signal.map { show =>
                    if show then
                      Infotext(
                        "Fehlertypen erkennen",
                        "Es gibt wie du vielleicht schon bemerkt hast zwei Haupttypen von Fehlern: " +
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
                    "fehlerkorrektur"
                  ),
                  renderExercise(
                    "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden können am Beispiel der Nachricht '12345'. (Tipp: Überlege dir, was du machst, wenn eine Information von einer Person im Gespräch nicht verstanden wurde.)",
                    Set("1234512345"),
                    5,
                    None,
                    "fehlerkorrektur"
                  ),
                  renderExercise(
                    "Beschreibe jeweils wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \n" +
                    "a) Ursprüngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \n" +
                    "b) Ursprüngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \n" +
                    "c) Ursprüngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'",
                    Set("50","66","90"),
                    6,
                    None,
                    "fehlerkorrektur"
                  ),
                  renderFehlerkorrekturLueckentext(),
                  renderQRCodeExerciseWithMetadata(
                    8,
                    "fehlerkorrektur",
                    "In dem folgenden QR Code kannst du eine Nachricht in das Textfeld eingeben. Mit dem Button 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten in den QR Code laden. Durch einen klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben."
                    
                  ),
                  renderExercise(
                    "Erkläre in eigenen Worten, wie die Fehlerkorrektur in QR Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zusätzlichen Daten und Korrekturlevel ein. Erläutere Zusätzlich, wie die Fehlerkorrektur im QR Code dargestellt wird.",
                    Set(),
                    9,
                    None,
                    "fehlerkorrektur"
                  )
                )
              },
              Rating("fehlerkorrektur"),
              chapterNavigation("#fehlerkorrektur")
            )
          else if hash == "#anwendung" then  
            div(
              h1("Anwendung"),
              TimeBadge(30),
              Rating("anwendung"),
              chapterNavigation("#anwendung")
            )
          else if hash == "#zusammenfassung" then
            div(
              h1("Zusammenfassung"),
              TimeBadge(35),
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
                "Für welche Anwendungen ist es sinnvoll einen QR-Code zu nutzen und für welche nicht? " +
                "Die Antworten auf diese Fragen findest du in den folgenden Kapiteln, welche du auf der Linken seite auswählen kannst. " +
                "In der rechten oberen Ecke findest du jeweils eine Zeitabschätzung, wie lange das Kapitel dauert." +
                "\n" +
                "Viel Spaß!"
              ),
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
      div(
      cls := "pixel-submit-area",
      button(
          "Abgeben",
          onClick.map(_ => {
            val current = pixelGrid.now()
            savedPattern.set(current)
            val binary = current.map(b => if b then '1' else '0').mkString
            if chapter.nonEmpty && taskText.nonEmpty then
              persistExerciseAnswer(chapter, taskText, binary)
            current
          })
            .map(_ => Some(true)) --> lastCheckVar.writer,
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
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
      div(
      cls := "pixel-submit-area",
      button(
          "Abgeben",
          onClick.map(_ => {
            val current = pixelGrid.now()
            if chapter.nonEmpty && taskText.nonEmpty then
              val binary = current.map(b => if b then '1' else '0').mkString
              persistExerciseAnswer(chapter, taskText, binary)
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
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
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
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
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
            val binary = current.map(b => if b then '1' else '0').mkString
            if chapter.nonEmpty && taskText.nonEmpty then
              persistExerciseAnswer(chapter, taskText, binary)
            Some(statuses.flatten.forall(identity))
          } --> lastCheckVar.writer,
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
          }
        )
      )
    )
  end renderPixelAreaWithLabels

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
        p("Wie wird ein QR Code erstellt?" )
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
            // Use the in-memory allResponsesVar which has all current data
            val chapters = List("einfuehrung", "nachricht", "maskierung", "fehlerkorrektur", "anwendung", "zusammenfassung")
            val currentData = allResponsesVar.now()
            val allData = chapters.map { chapter =>
              val data = currentData.getOrElse(chapter, ChapterData(chapter, List(), RatingData(0, 0, 0, 0, "")))
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

  def renderMaskierungAufgabe(): Element =
    val originalData: Var[Vector[Boolean]] = Var(Vector(
      true, false, true, false,
      false, true, false, true,
      true, false, true, false,
      false, true, false, true
    ))
    val maskPattern: Var[Vector[Boolean]] = Var(Vector.fill(16)(false))
    val answer1 = Var("")
    val answer2 = Var("")
    val answer3 = Var("")
    val answer4 = Var("")
    val check1: Var[Option[Boolean]] = Var(None)
    val check2: Var[Option[Boolean]] = Var(None)
    val check3: Var[Option[Boolean]] = Var(None)
    val check4: Var[Option[Boolean]] = Var(None)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)

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
      p("Links sind die Ursprünglichen Daten dargestellt. In der Mitte kannst du die Maske definieren. Rechts wird das Ergebnis der Maskierung, welche durch eine XOR-Operation realisiert wird, angezeigt."),
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: flex-start;",
        div(
          styleAttr := "text-align: center;",
          h3("Ursprüngliche Daten"),
          renderSimplePixelGrid(4, 4, originalData, isReadOnly = false)
        ),
        div(
          styleAttr := "text-align: center;",
          h3("Maske"),
          renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = false)
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
        p("Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze:"),
        div(
          styleAttr := "margin: 1rem 0;",
          div(
            styleAttr <-- getLineStyle(check1).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn Ursprüngliche Daten = schwarz und Maske = schwarz, dann ist das Ergebnis: "),
            input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;",
              controlled(
                value <-- answer1.signal,
                onInput.mapToValue --> answer1.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check2).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn Ursprüngliche Daten = schwarz und Maske = weiß, dann ist das Ergebnis: "),
            input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;",
              controlled(
                value <-- answer2.signal,
                onInput.mapToValue --> answer2.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check3).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn Ursprüngliche Daten = weiß und Maske = schwarz, dann ist das Ergebnis: "),
            input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;",
              controlled(
                value <-- answer3.signal,
                onInput.mapToValue --> answer3.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check4).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Wenn Ursprüngliche Daten = weiß und Maske = weiß, dann ist das Ergebnis: "),
            input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 100px;",
              controlled(
                value <-- answer4.signal,
                onInput.mapToValue --> answer4.writer
              )
            )
          )
        ),
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
            Some(allCorrect)
          }) --> lastCheckVar.writer,
          styleAttr := "margin-top: 1rem; padding: 0.5rem 1rem;",
          cls <-- lastCheckVar.signal.map {
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
          }
        )
      )
    )
  end renderMaskierungAufgabe

  def renderSimplePixelGrid(cols: Int, rows: Int, gridVar: Var[Vector[Boolean]], isReadOnly: Boolean = false): Element =
    val total = cols * rows
    div(
      cls := "pixel-grid",
      styleAttr := s"grid-template-columns: repeat($cols, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;",
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
    val userMaskedData: Var[Vector[Boolean]] = Var(Vector.fill(16)(false))
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val rowStatusVar: Var[Vector[Option[Boolean]]] = Var(Vector.fill(4)(None))

    // Calculate correct masked data
    val correctMaskedData = originalData.now().zip(maskPattern.now()).map { case (o, m) => o ^ m }

    div(
      h2("Aufgabe 3"),
      p("Links und in der Mitte sind die Ursprünglichen Daten und die Maske vorgegeben. Rechts kannst du die Maskierten Daten eintragen. Bestimme durch Anwenden der XOR-Operation die korrekten Maskierten Daten."),
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: flex-start;",
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Ursprüngliche Daten"),
          renderSimplePixelGrid(4, 4, originalData, isReadOnly = true)
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Maske"),
          renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = true)
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Maskierte Daten"),
          div(
            cls := "pixel-grid",
            styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;",
            children <-- userMaskedData.signal.combineWith(rowStatusVar.signal).map { case (grid, rowStatus) =>
              (0 until 4).toList.flatMap { r =>
                (0 until 4).toList.map { c =>
                  val idx = r * 4 + c
                  div(
                    cls := (if grid(idx) then "pixel on" else "pixel"),
                    styleAttr := "width: 28px; height: 28px; cursor: pointer;",
                    onClick --> (_ => userMaskedData.update(g => g.updated(idx, !g(idx))))
                  )
                }
              }
            }
          )
        ),
        button(
          "Abgeben",
          onClick.map { _ =>
            val current = userMaskedData.now()
            val correct = correctMaskedData
            
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
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
          }
        )
      ),
      child <-- rowStatusVar.signal.map { statuses =>
        if statuses.exists(_.isDefined) then
          div(
            styleAttr := "margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;",
            h3("Ergebnisse pro Reihe:"),
            ul(
              (0 until 4).toList.map { r =>
                val status = statuses.lift(r).flatten
                li(
                  styleAttr <-- rowStatusVar.signal.map { _ =>
                    status match {
                      case Some(true)  => "color: green; font-weight: bold;"
                      case Some(false) => "color: red; font-weight: bold;"
                      case None        => ""
                    }
                  },
                  s"Reihe ${r + 1}: " + (status match {
                    case Some(true)  => "✓ Korrekt"
                    case Some(false) => "✗ Falsch"
                    case None        => ""
                  })
                )
              }
            )
          )
        else
          emptyNode
      }
    )
  end renderMaskierungAufgabe3

  def renderMaskierungAufgabe7(): Element =
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

    // User inputs
    val userMaskedData1: Var[Vector[Boolean]] = Var(Vector.fill(16)(false))
    val userMaskedData2: Var[Vector[Boolean]] = Var(Vector.fill(16)(false))
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val rowStatusVar: Var[Vector[Option[Boolean]]] = Var(Vector.fill(8)(None))

    div(
      h2("Aufgabe 7"),
      p("Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein."),
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: flex-start; flex-wrap: wrap;",
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Ursprüngliche Daten"),
          renderSimplePixelGrid(4, 4, originalData, isReadOnly = true)
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "Maske"),
          renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = true)
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "1x Maskiert"),
          div(
            cls := "pixel-grid",
            styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;",
            children <-- userMaskedData1.signal.map { grid =>
              grid.zipWithIndex.map { case (isOn, idx) =>
                div(
                  cls := (if isOn then "pixel on" else "pixel"),
                  styleAttr := "width: 28px; height: 28px; cursor: pointer;",
                  onClick --> (_ => userMaskedData1.update(g => g.updated(idx, !g(idx))))
                )
              }
            }
          )
        ),
        div(
          styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
          h3(styleAttr := "margin: 0 0 0.5rem 0;", "2x Maskiert"),
          div(
            cls := "pixel-grid",
            styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #ccc; padding: 8px; border-radius: 4px;",
            children <-- userMaskedData2.signal.map { grid =>
              grid.zipWithIndex.map { case (isOn, idx) =>
                div(
                  cls := (if isOn then "pixel on" else "pixel"),
                  styleAttr := "width: 28px; height: 28px; cursor: pointer;",
                  onClick --> (_ => userMaskedData2.update(g => g.updated(idx, !g(idx))))
                )
              }
            }
          )
        ),
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
            case Some(true)  => "btn-success"
            case Some(false) => "btn-error"
            case None        => ""
          }
        )
      ),
      child <-- rowStatusVar.signal.map { statuses =>
        if statuses.exists(_.isDefined) then
          div(
            styleAttr := "margin-top: 1rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;",
            h3("Ergebnisse pro Reihe:"),
            ul(
              (0 until 8).toList.map { idx =>
                val status = statuses.lift(idx).flatten
                val section = if idx < 4 then "1x Maskiert" else "2x Maskiert"
                val rowNum = (idx % 4) + 1
                li(
                  styleAttr <-- rowStatusVar.signal.map { _ =>
                    status match {
                      case Some(true)  => "color: green; font-weight: bold;"
                      case Some(false) => "color: red; font-weight: bold;"
                      case None        => ""
                    }
                  },
                  s"$section, Reihe $rowNum: " + (status match {
                    case Some(true)  => "✓ Korrekt"
                    case Some(false) => "✗ Falsch"
                    case None        => ""
                  })
                )
              }
            )
          )
        else
          emptyNode
      }
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
    val answer1 = Var("")
    val answer2 = Var("")
    val answer3 = Var("")
    val answer4 = Var("")
    val check1: Var[Option[Boolean]] = Var(None)
    val check2: Var[Option[Boolean]] = Var(None)
    val check3: Var[Option[Boolean]] = Var(None)
    val check4: Var[Option[Boolean]] = Var(None)
    val lastCheckVar: Var[Option[Boolean]] = Var(None)
    val showInfotext = Var(false)

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
      h2("Aufgabe 7"),
      p("Ergänze die Lücken im folgenden Text:"),
      div(
        styleAttr := "margin-top: 1.5rem; padding: 1rem; background: #f9f9f9; border-radius: 8px;",
        div(
          styleAttr := "margin: 1rem 0;",
          div(
            styleAttr <-- getLineStyle(check1).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Je mehr Daten zur Fehlererkennung und -korrektur genutzt werden, desto "),
            input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;",
              controlled(
                value <-- answer1.signal,
                onInput.mapToValue --> answer1.writer
              )
            ),
            span(" ist die Wahrscheinlichkeit, Fehler zu erkennen und zu korrigieren." )
          ),
          div(
            styleAttr <-- getLineStyle(check2).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Substutionsfehler lassen sich  "),
            input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;",
              controlled(
                value <-- answer2.signal,
                onInput.mapToValue --> answer2.writer
              )
            ),
            span("verbessern, als Löschfehler." )
          ),
          div(
            styleAttr <-- getLineStyle(check3).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span("Prüfsummen dienen vor allem zur "),
            input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;",
              controlled(
                value <-- answer3.signal,
                onInput.mapToValue --> answer3.writer
              )
            ),
            span("und nicht zur"),
              input(
              typ := "text",
              placeholder := "",
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px; width: 150px; text-align: center;",
              controlled(
                value <-- answer4.signal,
                onInput.mapToValue --> answer4.writer
              )
            ),
          )
        ),
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
            
            val allCorrect = isCorrect1(a1) && isCorrect2(a2) && isCorrect3(a3)
            showInfotext.set(true)
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
            """In QR-Codes wird Reed-Solomon-Codes zur Fehlerkorrektur genutzt. Dies ist ein besonders leistungsfähiges Verfahren, das beide Fehlerarten zum Teil korrigieren kann. Die Fehlerkorrektur wird dabei sowohl auf die Daten, als auch auf die Metadaten (z.B. Formatinformationen, Maske) angewendet.

Dabei werden QR Codes nach Fehlertoleranzstufen klassifiziert. Die Fehlertoleranz liegt dabei zwischen 7% und 30% und gibt an wieviel % des QR-Codes beschädigt sein können, ohne dass die Information verloren geht. Die vier Stufen sind:
• Level L: 7% Fehlertoleranz (niedrig) 
• Level M: 15% Fehlertoleranz (mittel) 
• Level Q: 25% Fehlertoleranz (hoch)   
• Level H: 30% Fehlertoleranz (sehr hoch) 

Der Reed-Solomon-Code arbeitet mit Mathematischen Gleichungen und kann sowohl Substitutionsfehler (falsche Pixel) als auch Löschfehler (fehlende Bereiche) korrigieren. Dies macht QR-Codes sehr robust gegenüber Verschmutzung, Beschädigung oder teilweiser Verdeckung."""
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
        src := imageSrc,
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
    val candidates = List(
      s"/${baseName}.png",
      s"/${baseName}.jpg",
      s"/public/${baseName}.png",
      s"/public/${baseName}.jpg"
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

  def renderExercise(taskText: String, keywords: Set[String] = Set.empty, index: Int = -1, image: Option[Element] = None, chapter: String = "", submitCallback: Option[() => Unit] = None): Element =
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
      p(
        taskText,
        styleAttr := "white-space: pre-wrap;"
      ),
      editor.getDomElement(),
      // Subscribe to text changes and save to localStorage
      child <-- textVar.signal.map { text =>
        if chapter.nonEmpty then
          persistExerciseAnswer(chapter, taskText, text)
        emptyNode
      },
      button(
        "Abgeben",
        onClick.map(_ => {
          val text = textVar.now()
          // Call the submit callback if provided
          submitCallback.foreach(callback => callback())
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
              val allTasksForChapter = chapterExercises.getOrElse(chapter, List())
              val emptyExercises = allTasksForChapter.map(task => ExerciseResponse(task, None))
              val existing = data.getOrElse(chapter, ChapterData(chapter, emptyExercises, RatingData(0, 0, 0, 0, "")))
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

  def Infotext(title: String, text: String, image: Option[String] = None): Element =
    div(
      cls := "infotext",
      h3(title),
      image.map(imageSrc => img(alt := title, src := imageSrc, styleAttr := "max-width: 100%; margin: 1rem 0; border-radius: 4px;")),
      text.split("\n").map { line =>
        if line.trim.nonEmpty then
          p(line.trim)
        else
          emptyNode
      }
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