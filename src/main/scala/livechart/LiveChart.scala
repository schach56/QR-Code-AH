package livechart
import scala.scalajs.js
import scala.scalajs.js.annotation.*
import org.scalajs.dom
import org.scalajs.dom.document
import org.scalajs.dom.html.Div
import com.raquo.laminar.api.L.{*, given}
import scala.collection.mutable

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

  // Feature flag: set to true to show the "Ergebnisse Abgeben" button in the navbar
  val showSubmitButton: Boolean = false

  def chapterTitle(chapterKey: String, lang: String): String =
    (chapterKey, lang) match
      case ("einfuehrung", "en") => "Introduction"
      case ("nachricht", "en") => "Writing Messages"
      case ("maskierung", "en") => "Masking"
      case ("fehlerkorrektur", "en") => "Error Correction"
      case ("praxisanwendungen", "en") => "Practical Applications"
      case ("zusammenfassung", "en") => "Summary"
      case ("barcodes", "en") => "Barcodes"
      case ("einfuehrung", _) => "Einleitung"
      case ("nachricht", _) => "Nachrichten schreiben"
      case ("maskierung", _) => "Maskierung"
      case ("fehlerkorrektur", _) => "Fehlerkorrektur"
      case ("praxisanwendungen", _) => "Praxisanwendungen"
      case ("zusammenfassung", _) => "Zusammenfassung"
      case ("barcodes", _) => "Barcodes"
      case _ => chapterKey

  def loadWorkbookLanguage(): String =
    try
      val stored = dom.window.localStorage.getItem("qr-workbook-language")
      if stored == "en" then "en" else "de"
    catch
      case _: Throwable => "de"

  def saveWorkbookLanguage(language: String): Unit =
    try
      val normalized = if language == "en" then "en" else "de"
      dom.window.localStorage.setItem("qr-workbook-language", normalized)
    catch
      case _: Throwable => ()

  val languageVar: Var[String] = Var(loadWorkbookLanguage())

  def setWorkbookLanguage(language: String): Unit =
    val normalized = if language == "en" then "en" else "de"
    languageVar.set(normalized)
    saveWorkbookLanguage(normalized)

  private val baseEnMap: Map[String, String] = Map(
    "Aufgabe" -> "Task",
    "Abgeben" -> "Submit",
    "Antwort überprüfen" -> "Check answer",
    "Nochmal versuchen" -> "Try again",
    "Lösung zeigen" -> "Show solution",
    "Richtig!" -> "Correct!",
    "Nicht ganz richtig. Versuche es nochmal!" -> "Not quite right. Try again!",
    "Richtig! Sehr gut" -> "Correct! Very good",
    "Autor" -> "Author",
    "gesperrt" -> "locked",
    "Einleitung" -> "Introduction",
    "Nachrichten schreiben" -> "Writing Messages",
    "Maskierung" -> "Masking",
    "Fehlerkorrektur" -> "Error Correction",
    "Praxisanwendungen" -> "Practical Applications",
    "Zusammenfassung" -> "Summary",
    "Barcode" -> "Barcodes",
    "Deine Angaben" -> "Your Details",
    "Name:" -> "Name:",
    "Dein Name" -> "Your name",
    "Beispiel QR-Code 1" -> "Example QR code 1",
    "Beispiel QR-Code 2" -> "Example QR code 2",
    "Beispiel QR-Code 3" -> "Example QR code 3",
    "Inhalt von QR-Code 1 beschreiben..." -> "Describe content of QR code 1...",
    "Inhalt von QR-Code 2 beschreiben..." -> "Describe content of QR code 2...",
    "Inhalt von QR-Code 3 beschreiben..." -> "Describe content of QR code 3...",
    "Deine Nachricht hier..." -> "Your message here...",
    "Deine Antwort hier..." -> "Your answer here...",
    "Deine Anmerkungen hier..." -> "Your notes here...",
    "Laenge anzeigen" -> "Show length",
    "Metadaten anzeigen" -> "Show metadata",
    "Fehlerkorrektur anzeigen" -> "Show error correction",
    "Alle Zeichen müssen eindeutig kodiert sein!" -> "All characters must be encoded uniquely!",
    "Kodierung gespeichert" -> "Encoding saved",
    "QR-Codes haben immer gleich viele weiße und schwarze Pixel." -> "QR codes always have the same number of white and black pixels.",
    "QR-Codes können ausschließlich Webadressen speichern." -> "QR codes can only store web addresses.",
    "QR-Codes können verschiedene Arten von Informationen speichern, nicht nur Webadressen." -> "QR codes can store different types of information, not just web addresses.",
    "Benötigte Arbeitsmittel anzeigen" -> "Show required materials",
    "Benötigte Arbeitsmittel ausblenden" -> "Hide required materials",
    "Didaktische Hinweise" -> "Teaching Notes",
    "Didaktische Hinweise ausblenden" -> "Hide teaching notes",
    "QR-Code-Scanner installieren und verwenden" -> "Install and use QR code scanner",
    "Abgabe der JSON-Datei am Ende" -> "Submit the JSON file at the end",
    "Metadaten" -> "Metadata",
    "Fehlerkorrektur" -> "Error correction",
    "Maske" -> "Mask",
    "Bewertung dieses Kapitels" -> "Chapter rating",
    "Ich habe den Inhalt verstanden." -> "I understood the content.",
    "5 Sterne = vollständige Zustimmung, 1 Stern = überhaupt nicht" -> "5 stars = fully agree, 1 star = not at all",
    "Die Schwierigkeit der Inhalte war:" -> "The difficulty of the content was:",
    "5 Sterne = sehr schwierig, 1 Stern = sehr leicht" -> "5 stars = very difficult, 1 star = very easy",
    "Die Aufgaben haben mir Spaß gemacht." -> "I enjoyed the tasks.",
    "5 Sterne = viel Spaß, 1 Stern = wenig Spaß" -> "5 stars = a lot of fun, 1 star = little fun",
    "Die Zeitangaben für das Kapitel waren:" -> "The time estimates for the chapter were:",
    "5 Sterne = viel zu hoch, 1 Stern = viel zu niedrig" -> "5 stars = much too high, 1 star = much too low",
    "Zusätzliche Anmerkungen:" -> "Additional notes:"
  )

  private val translationCacheVar: Var[Map[String, String]] = Var(Map.empty)
  private val originalTextByNode: mutable.HashMap[dom.Node, String] = mutable.HashMap.empty
  private var translationObserver: Option[dom.MutationObserver] = None

  private val exactSentenceEnMap: Map[String, String] = Map(
    "Scanne die QR-Codes und beschreibe deren Inhalte in den Textfeldern unter den QR Codes. Beschreibe die Gemeinsamkeiten im großen Eingabefeld." -> "Scan the QR codes and describe their contents in the text fields below the QR codes. Describe the similarities in the large input field.",
    "Eigenes Merkblatt" -> "Your own cheat sheet",
    "Hier siehst du deine Antworten von der Zusammenfassung der vorherigen Kapitel. Du kannst sie nochmal anpassen. Überpfüfe dafür jeweils ob in deiner Antwort die wichtigen Dinge stehen. Die wichtigsten Themen sind unter dem jeweiligen Eingabefeld nochmal zusammengefasst. Am Ende kannst du dir dann ein PDF mit deinen Antworten erstellen, das du dir abspeichern oder ausdrucken kannst." -> "Here you can see your answers from the summaries of the previous chapters. You can adjust them again. Check whether your answer includes the important points. The most important topics are summarised again below each input field. At the end, you can create a PDF with your answers that you can save or print.",
    "Einfuhrung" -> "Introduction",
    "Wichtige Stichwörter: Was sind QR Codes? Wofür werden sie verwendet? Wie stelle ich mir vor, dass QR Codes funktionieren? Was wusste ich vorher?" -> "Important keywords: What are QR codes? What are they used for? How do I imagine QR codes work? What did I know beforehand?",
    "Wichtige Stichwörter: Binärdarstellung, ASCII, UTF-8, Kodierung, Dekodierung, Datenbereich im QR Code" -> "Important keywords: binary representation, ASCII, UTF-8, encoding, decoding, data area in the QR code",
    "Wichtige Stichwörter: Maskierungsmuster, Demaskierung, Musterauswahl, Optimierung der Lesbarkeit, XOR-Verknüpfung, visuelle Verbesserung" -> "Important keywords: masking patterns, demasking, pattern selection, readability optimization, XOR operation, visual improvement",
    "Wichtige Stichwörter: Redundanz, Reed-Solomon-Code, Fehlerkorrekturstufe vs benötigter Speicher, Wiederherstellung beschädigter Daten, Löschfehler vs Substitutionsfehler, QR-Versionen" -> "Important keywords: redundancy, Reed-Solomon code, error-correction level vs required storage, recovery of damaged data, deletion errors vs substitution errors, QR versions",
    "Wichtige Stichwörter: Vorteile (schnelles Scannen, Fehlertoleranz, viele Daten), Nachteile (Sicherheitsrisiken, Platzbedarf), Anwendungsbeispiele" -> "Important keywords: advantages (fast scanning, fault tolerance, lots of data), disadvantages (security risks, space requirements), application examples",
    "Merkzettel erstellen" -> "Create cheat sheet",
    "Mein Merkzettel zu QR Codes" -> "My cheat sheet on QR codes",
    "(keine Antwort)" -> "(no answer)",
    "Diese Vorstellung hatte ich am Anfang von QR Codes" -> "These were my initial ideas about QR codes",
    "So werden aus Nachrichten Pixelmuster in den QR Code geschrieben" -> "How messages are turned into pixel patterns in the QR code",
    "So funktioniert die Maskierung und Demaskierung und dafuer ist sie gut" -> "How masking and demasking work and why they are useful",
    "Das bedeutet Fehlerkorrektur und so wird sie im QR Code umgesetzt" -> "What error correction means and how it is implemented in the QR code",
    "Das sind die Vor- und Nachteile bei der Verwendung von QR Codes" -> "These are the advantages and disadvantages of using QR codes",
    "Welche Aussage trifft auf QR-Codes zu?" -> "Which statement about QR codes is correct?",
    "Beschreibe in mindestens 10 Worten, welche Vorstellungen du davon hast, wie QR-Codes funktionieren." -> "Describe in at least 10 words what you think about how QR codes work.",
    "Beschreibe, wie ein QR-Code aufgebaut ist. Vermute, wie die Daten im QR-Code dargestellt werden." -> "Describe how a QR code is structured. Assume how the data is represented in the QR code.",
    "Überlege dir eine eigene Kodierung für die Buchstaben 'M', 'I', 'S', 'P'. Nutze die Pixel, um deine Kodierung darzustellen." -> "Create your own encoding for the letters 'M', 'I', 'S', 'P'. Use the pixels to represent your encoding.",
    "Schreibe das Wort 'MISSISSIPPI' mit deiner eigenen Kodierung aus Aufgabe 2." -> "Write the word 'MISSISSIPPI' using your own encoding from task 2.",
    "Erkläre die Nachteile einer eigenen, nicht standardisierten Kodierung." -> "Explain the disadvantages of a custom, non-standardized encoding.",
    "Kodiere das Wort 'INFO' mithilfe der ASCII-Tabelle." -> "Encode the word 'INFO' using the ASCII table.",
    "Kodiere das Wort 'INFO' mithilfe der ASCII-Tabelle. Rechts siehst du die ASCII-Tabelle, links kodierst du jeden Buchstaben (0 = weiß, 1 = schwarz)." -> "Encode the word 'INFO' using the ASCII table. On the right you see the ASCII table; on the left you encode each letter (0 = white, 1 = black).",
    "Buchstaben zum kodieren" -> "Letters to encode",
    "Zeichen" -> "Character",
    "Dezimal" -> "Decimal",
    "Binärdarstellung" -> "Binary representation",
    "Nenne einen Vorteil der festen Länge von 8 Pixeln pro Buchstabe und erkläre, warum es sich um einen Vorteil handelt." -> "Name one advantage of the fixed length of 8 pixels per letter and explain why it is an advantage.",
    "Wie viele verschiedene Zeichen können mit 8 Pixeln dargestellt werden?" -> "How many different characters can be represented with 8 pixels?",
    "Verschlüssele eine Nachricht mit QR-Code." -> "Encrypt a message using a QR code.",
    "Beschreibe, welche Beschränkungen dir beim Bearbeiten von Aufgabe 8 aufgefallen sind." -> "Describe which limitations you noticed while working on task 8.",
    "Ziehe die Zahlen 1-8 auf die Felder im Grid (ein Raster von 2x4 Pixeln), um zu zeigen, in welcher Reihenfolge die Bits des ersten Buchstabens in Aufgabe 8 kodiert werden." -> "Drag the numbers 1-8 onto the fields in the grid (a 2x4 pixel layout) to show the order in which the bits of the first letter are encoded in task 8.",
    "Als nächstes überführen wir das Gelernte in eine QR-Code Darstellung. Dafür schauen wir uns an, wie Nachrichten in QR-Codes dargestellt werden. Gib eine Nachricht ein und beobachte, wie diese als QR-Code in Pixel umgewandelt wird. Jeder Buchstabe wird dabei in 8 Bits (seine ASCII-Kodierung) übersetzt und färbt entsprechende Pixel schwarz." -> "Next, we apply what we have learned to a QR code representation. We look at how messages are displayed in QR codes. Enter a message and observe how it is converted into pixels. Each letter is translated into 8 bits (its ASCII encoding) and colours the corresponding pixels black.",
    "Ziehe die Zahlen 1-8 auf die Felder im Grid (ein Raster von 2x4 Pixeln), um zu zeigen, in welcher Reihenfolge die Bits des ersten Buchstabens in Aufgabe 8 kodiert werden. Als Hilfe kannst du dir die UTF-8-Kodierung des Buchstabens anschauen, indem du ihn in das Feld rechts neben dem Pfeil eingibst." -> "Drag the numbers 1–8 onto the fields in the grid (a 2x4 pixel layout) to show the order in which the bits of the first letter from task 8 are encoded. As a help, you can view the UTF-8 encoding of the letter by entering it in the field to the right of the arrow.",
    "2x4 Raster" -> "2x4 Grid",
    "Binär (8 Bit)" -> "Binary (8 Bit)",
    "Zurücksetzen" -> "Reset",
    "✓ Sehr gut! Alle Felder sind richtig." -> "✓ Great! All fields are correct.",
    "Bereiche eines QR-Codes" -> "QR Code Areas",
    "Trotz verschiedenen Einsatzmöglichkeiten haben QR Codes einen ähnlichem Aussehen." -> "Despite their different use cases, QR codes look similar.",
    " Die roten Bereiche in den Ecken heißen " -> " The red areas in the corners are called ",
    ". Diese dienen dazu, dass die Handykamera den Anfang und das Ende des QR Codes erfassen kann." -> ". They allow the camera to detect the start and end of the QR code.",
    "Positionsmarker" -> "Position markers",
    " Die Blaue Stelle ist ein " -> " The blue element is an ",
    ". Dieser Hilft den QR Code auf unebenen Flächen (z.B Verpackungen) zu lesen." -> ". It helps read the QR code on uneven surfaces (e.g. packaging).",
    "Ausrichtungsmarker" -> "Alignment marker",
    " Der Grüne Bereich sind die " -> " The green areas are the ",
    "(Synchronisationslinien). Hier wechseln sich schwarze und weiße Pixel ab. Mithilfe dieser Anordnung wird die Größe des QR Codes bestimmt." -> "(synchronization lines). Black and white pixels alternate here. This arrangement determines the size of the QR code.",
    " Da viele verschiedene QR Code Versionen existieren, wird eine " -> " Since many different QR code versions exist, a ",
    " festgehalten. Die " -> " is stored. The ",
    " sind Informationen über den Aufbau des QR Codes (z.B die Verwendete Maske)." -> " contains information about the QR code structure (e.g. the mask used).",
    "Versionsnummer" -> "Version number",
    "Beschreibe, wie die Länge der Nachricht im QR-Code gespeichert wird." -> "Describe how the message length is stored in the QR code.",
    "Vermute, warum du nicht alle Pixel zur Verwendung für die Nachricht hast." -> "Assume why you cannot use all pixels for the message.",
    "Fasse in eigenen Worten zusammen, wie QR-Codes aufgebaut sind.\n\nGehe dabei auf folgende Punkte ein:\n- die Bestandteile des QR-Codes\n- wie Nachrichten kodiert und gespeichert werden\n- wie Buchstaben in das Pixelmuster umgewandelt werden\n\nNutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt." -> "Summarize in your own words how QR codes are structured.\n\nAddress the following points:\n- the components of a QR code\n- how messages are encoded and stored\n- how letters are converted into the pixel pattern\n\nUse at least 30 words.\n\nNote: Your summary will appear on your reference sheet.",
    "Beschreibe, was beim Scannen des QR-Codes passiert, und stelle begründete Vermutungen dazu an." -> "Describe what happens when scanning the QR code and make justified assumptions.",
    "Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze." -> "Describe how masking works. Complete the sentences.",
    "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten." -> "Calculate the correct masked data by applying the XOR operation.",
    "Erkläre die Berechnungsvorschrift (also welche Pixel schwarz gefärbt werden) einer Maske deiner Wahl." -> "Explain the calculation rule of a mask of your choice (i.e., which pixels are colored black).",
    "Vermute, woher der Scanner weiß, welche Maske angewandt wurde." -> "Assume how the scanner knows which mask was applied.",
    "Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkläre, wofür diese Eigenschaft nützlich sein könnte." -> "Describe what you noticed about double masking. Explain why this property could be useful.",
    "Durch verschiedene Umstände kann es dazu kommen, dass bestimmte Teile des QR-Codes beschädigt werden und somit nicht mehr erkennbar sind. Vergleiche die drei QR-Codes. Vermute, welcher der drei QR-Codes durch einen Scanner gelesen werden kann. Begründe deine Vermutung." -> "Due to various circumstances, certain parts of a QR code can be damaged and become unreadable. Compare the three QR codes. Assume which of the three can be read by a scanner and justify your assumption.",
    "Überprüfe nun deine Vermutung, indem du die QR-Codes scannst. Stelle Vermutungen an, wie das umgesetzt wird." -> "Now verify your assumption by scanning the QR codes. Make assumptions about how this is implemented.",
    "QR-Code mit Stickern" -> "QR code with stickers",
    "QR-Code ohne Sticker" -> "QR code without stickers",
    "QR-Code mit Logo" -> "QR code with logo",
    "Vermute welcher QR Code sich scannen lässt." -> "Assume which QR code can be scanned.",
    "Wie dir vielleicht aufgefallen ist, konnte die QR-Code mit den Überdfeckungen trotzdem gescannt werden. Wie genau das möglich ist und welche Grenzen es dabei gibt, schauen wir uns im Folgenden an. Dafür gehen wir erst einmal weg von QR-Codes und betrachten ein einfaches Beispiel einer Textnachricht. " -> "As you may have noticed, the QR code with the covered areas could still be scanned. We will now look at how this is possible and what its limits are. To do that, we first step away from QR codes and look at a simple example of a text message. ",
    "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du teilst deine Adresse deinem Freund mit einer Notiz mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du teilst deine Adresse deinem Freund mit einer Notiz mit. Leider hast du dich bei der Hausnummer verschrieben und statt 13 steht dort 73." -> "Compare the two situations. Assess which of the two errors is harder to detect and correct. \nSituation 1: You share your address with your friend using a note. Unfortunately, the ink is smudged in one place, so instead of one letter there is a black blot. \nSituation 2: You share your address with your friend using a note. Unfortunately, you made a mistake in the house number and wrote 73 instead of 13.",
    "Eine Möglichkeit mit Fehlern umzugehen ist es, eine Prüfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gezählt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel wäre, dass die Zeichenanzahl gezählt wird. Aus der Nachricht 'Hallo' würde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt werden können. Begründe deine Antwort." -> "One way to deal with errors is to use a checksum. Certain characters in the message are counted and the number of characters is appended to the end. One example would be counting the number of characters. The message 'Hallo' would then become the message 'Hallo5'. \nDescribe which types of errors can be detected with this method. Justify your answer.",
    "Beschreibe jeweils, wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Ursprüngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Ursprüngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Ursprüngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'" -> "For each case, describe what maximum percentage of the message may be unreadable so that the message can still be read correctly. \na) Original message: '12' message with error correction: '1212' \nb) Original message: '123' message with error correction: '123123123' \nc) Original message: '1' message with error correction: '1111111111'",
    "Hinweis: Berechne den Anteil unleserlicher Daten in Prozent aus dem Verhältnis von Originalnachricht zur Fehlerkorrektur-Nachricht." -> "Hint: Calculate the percentage of unreadable data from the ratio of the original message to the error-correction message.",
    "Beschreibe, wie die Daten, welche für eine Nachricht verwendet werden können und das Fehlerkorrekturlevel zusammenhängen." -> "Describe how the data that can be used for a message and the error correction level are related.",
    "Mehr Fehlerkorrektur erhöht die Zuverlaessigkeit, benötigt aber mehr Speicherplatz. Dadurch sinkt der maximale Speicher für die Daten. Ein höheres Korrekturlevel ist nur dann sinnvoll, wenn viele Störungen erwartet werden." -> "More error correction increases reliability, but requires more storage space. This reduces the maximum available storage for data. A higher correction level is only useful when many disturbances are expected.",
    "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit einem Klick auf 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten(Versionsnummer + Maskennummer) in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben. \nBeachte, dass der QR Code nicht scannbar ist, da keine Maske auf den QR Code angewandt wird." -> "In the following QR code, you can enter a message in the text field. By clicking 'Show metadata', you can additionally load the metadata (version number + mask number) into the QR code. By clicking 'Show error correction', you can display the error-correction pixels. Test different inputs. \nNote that the QR code is not scannable because no mask is applied to the QR code.",
    "Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begründe jeweils kurz." -> "Describe three applications in which QR codes are useful. Briefly justify each one.",
    "Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung." -> "Plan a concrete application in everyday school life: describe the goal, the QR code content, and where it is placed.",
    "Recherchiere im Internet nach Barcodes. Beschreibe den Aufbau eines typischen Barcodes." -> "Research barcodes on the internet. Describe the structure of a typical barcode.",
    "Erkläre, wie die Fehlerkorrektur bei Barcodes funktioniert und welche Probleme es dabei gibt." -> "Explain how error correction works in barcodes and what problems there are.",
    "Vergleiche Barcodes mit QR-Codes. Nenne jeweils 2 Gemeinsamkeiten und 2 Unterschiede." -> "Compare barcodes with QR codes. Name 2 similarities and 2 differences.",
    "Stell dir vor, du sollst für ein Projekt entscheiden, ob Barcodes oder QR-Codes verwendet werden. Nimm begründet Stellung, wofür du dich entscheiden würdest und in welchen Situationen welche Technologie sinnvoller ist." -> "Imagine you have to decide for a project whether to use barcodes or QR codes. Give a reasoned opinion on what you would choose and in which situations each technology is more suitable.",
    "Hinweis: Betrachte den QR-Code genau. Welche Farben haben die einzelnen Pixel und wofür könnten sie stehen?" -> "Hint: Look closely at the QR code. What colors do the individual pixels have and what could they represent?",
    "Hinweis: Überlege, welche Zusatzinformation ohne gemeinsamen Standard mitgeschickt werden muss. Verwende dabei den Fachbegriff aus der Infobox Kodierung." -> "Hint: Think about which additional information must be sent without a shared standard. Use the technical term from the Encoding info box.",
    "Hinweis: Woher würdest du wissen, wo der nächste Buchstabe anfängt, wenn ein Buchstabe 4 Pixel lang ist und ein anderer 10 Pixel?" -> "Hint: How would you know where the next letter starts if one letter is 4 pixels long and another is 10?",
    "Hinweis: Beziehe dich auf begrenzten Speicherplatz und reservierte QR-Code-Bereiche." -> "Hint: Refer to limited storage space and reserved QR code areas.",
    "Hinweis: Suche den festen Bereich vor den Nutzdaten, in dem die Zeichenanzahl codiert wird." -> "Hint: Look for the fixed area before the payload where the character count is encoded.",
    "Hinweis: Achte auf große gleichfarbige Flächen und erkläre, warum Scanner damit Probleme haben können." -> "Hint: Look for large areas of the same color and explain why scanners may have problems with them.",
    "Hinweis: Gehe darauf ein, wie ungünstige Muster entstehen können und wie diese aussehen." -> "Hint: Explain how unfavorable patterns can occur and what they look like.",
    "Hinweis: Erkläre eine konkrete Maskenregel mit Zeile, Spalte und Modulo." -> "Hint: Explain a concrete mask rule using row, column, and modulo.",
    "Hinweis: Vergleiche die Ursprungsdaten mit einmaligem und zweimaligem Maskierten Daten. " -> "Hint: Compare the original data with once-masked and twice-masked data.",
    "Hinweis: Nenne drei konkrete Einsatzbereiche und begründe jeweils den praktischen Nutzen. Nutze dabei das Wort sinnvoll." -> "Hint: Name three concrete use cases and justify the practical benefit of each. Use the word useful.",
    "Hinweis: Formuliere Ziel, QR-Inhalt und Platzierung als drei getrennte Punkte." -> "Hint: Formulate goal, QR content, and placement as three separate points.",
    "Hinweis: Nenne je zwei Vor- und Nachteile der aktuellen Kontrolle und trenne sie klar." -> "Hint: Name two advantages and two disadvantages of the current control and separate them clearly.",
    "Nenne drei konkrete Einsatzbereiche und begründe jeweils den praktischen Nutzen. Nutze dabei das Wort sinnvoll." -> "Name three specific use cases and justify the practical benefit of each. Use the word useful.",
    "Sinnvoll sind z.B. Ticketkontrolle, Produktinfos im Handel und schnelle Links auf Plakaten." -> "Useful examples are ticket checks, product information in retail, and quick links on posters.",
    "Maximale Anzahl an Zeichen für den QR Code Typen erreicht" -> "Maximum number of characters for this QR code type reached",
    "Sehr gut, jetzt hast du deine erste Nachricht mit deiner selbstgewählten Kodierung kodiert!" -> "Great, you have now encoded your first message using your own encoding scheme!",
    "Überprüfe deine Eingabe nochmal!" -> "Check your input again!",
    "Lege zuerst eine gültige Kodierung in Aufgabe 2 fest." -> "First define a valid encoding in task 2.",
    "Kodierung" -> "Encoding",
    "ASCII als Standard" -> "ASCII as a standard",
    "Maskierung im QR-Code" -> "Masking in QR codes",
    "Mehrere Masken in QR-Codes" -> "Multiple masks in QR codes",
    "Metadaten in QR-Codes" -> "Metadata in QR codes",
    "Vorteile der XOR-Operation" -> "Advantages of the XOR operation",
    "Hinweis zur Fehlerkorrektur" -> "Note on error correction",
    "Fehlertypen erkennen" -> "Recognizing error types",
    "Redundanz statt Wiederholung" -> "Redundancy instead of repetition",
    "Speicheraustausch in QR-Codes" -> "Storage trade-off in QR codes",
    "Informationen zur Bearbeitung" -> "Information for working on tasks",
    "Fehlerkorrektur in QR-Codes" -> "Error correction in QR codes",
    "Erläutere, wie du den Sachverhalt aus Aufgabe 3 mit einem QR-Code lösen würdest. Gehe dabei auch darauf ein, welche Daten im QR-Code gespeichert werden müssen und wie die Ausgangskontrolle dadurch automatisiert funktionieren könnte." -> "Explain how you would solve the situation from task 3 using a QR code. Also address which data must be stored in the QR code and how exit control could be automated.",
    "Nimm begründet Stellung zum Nutzen von QR-Codes im Anwendungsfall von Aufgabe 3." -> "Take a reasoned position on the usefulness of QR codes in the application case from task 3.",
    "Eine Lehrkraft äußert Bedenken darüber, dass Schüler zum einen die QR-Codes manipulieren könnten, um falsche Daten zu speichern. \nErläutere, wie du auf diese Bedenken reagierst. Begründe deine Antwort." -> "A teacher expresses concerns that students could manipulate QR codes to store false data. Explain how you would respond to these concerns. Justify your answer.",
    "Eine andere Lehrkraft befürchtet, dass die QR-Codes nach einem Jahr verschmutzen oder beschädigt sind, da das Lesen eines QR-Codes nicht mehr möglich ist, wenn schon ein Pixel umgefärbt ist. \nGehe auf die Bedenken ein und erläutere, ob du diese teilst oder nicht. Begründe deine Antwort." -> "Another teacher fears that QR codes will become dirty or damaged after one year because a QR code can no longer be read once even one pixel changes. Address these concerns and explain whether you agree or disagree. Justify your answer.",
    "Eine Bank überlegt, QR-Codes für das Speichern von Banking-Daten (wie Kontonummer, PIN und Passwörter) auf Kundenkarten zu nutzen. \nErläutere, warum dies keine sinnvolle Anwendung für QR-Codes ist. Nenne mindestens zwei Gründe." -> "A bank is considering using QR codes on customer cards to store banking data (such as account number, PIN, and passwords). Explain why this is not a sensible use of QR codes. Give at least two reasons.",
    "Nenne ein weiteres Beispiel, bei dem der Einsatz von QR-Codes problematisch oder nicht sinnvoll wäre. Begründe deine Antwort." -> "Name another example where using QR codes would be problematic or not sensible. Justify your answer.",
    "Vergleiche die Vor- und Nachteile von QR-Codes bei sensiblen Daten (wie Bankdaten) mit denen bei öffentlichen Informationen (wie Website-Links). Nutze dafür 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt." -> "Compare the advantages and disadvantages of QR codes for sensitive data (such as bank data) with those for public information (such as website links). Use 30 words.\n\nNote: Your summary will appear on your reference sheet.",
    "Beschreibe, welche Daten du außerdem in einer VCard speichern könntest und welche Vorteile dies hat." -> "Describe which additional data you could store in a VCard and what advantages this has.",
    "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit den Checkboxen kannst du Metadaten anzeigen oder die Fehlerkorrektur-Pixel sehen. Teste verschiedene Eingaben und überprüfe das Ergebnis mit einem QR-Code Scanner." -> "In the following QR code, you can enter a message in the text field. Use the checkboxes to display metadata or error-correction pixels. Test different inputs and verify the result with a QR code scanner.",
    "Beschreibe in eigenen Worten die Bestandteile eines QR-Codes und deren Funktion mit mindestens 20 Wörtern." -> "Describe in your own words the components of a QR code and their function using at least 20 words.",
    "Scannbarer QR Code" -> "Scannable QR code",
    "Noch erforderlich:" -> "Still required:",
    "Benötigte Arbeitsmaterialien" -> "Required materials",
    "Geräte" -> "Devices",
    "Computer mit Internetzugang" -> "Computer with internet access",
    "Smartphone mit Kamera" -> "Smartphone with camera",
    "Scanner-Tools" -> "Scanner tools",
    "Apps und Kamera" -> "Apps and camera",
    "QR-Code-Scanner-App" -> "QR code scanner app",
    "Alternativ: Kamera-App mit QR-Scan" -> "Alternative: camera app with QR scan",
    "Um QR-Codes mit deinem Smartphone zu scannen, benötigst du eine Scanner-App:\nDas Arbeitsheft wurde mit der App 'QR- & Barcode- Scanner'aus dem Appstore von TeaCapps getestet. Für eine reibungslose Bearbeitung wird empfohlen, diese App zu verwenden.\nDie meisten Handys haben heute auch in der Kamera einen eingebauten QR-Code Scanner. Dieser kann auch benutzt werden.\nUm einen QR-Code zu scannen, öffne die Scanner-App oder die Kamera deines Smartphones und richte sie auf den QR-Code. Die App oder Kamera erkennt den Code automatisch und zeigt dir den Inhalt an.\nTipp: Achte darauf, dass der QR-Code gut beleuchtet und nicht zu verdeckt ist, damit der Scanner ihn schnell erkennen kann." -> "To scan QR codes with your smartphone, you need a scanner app:\nThis workbook was tested with the app 'QR- & Barcode-Scanner' from TeaCapps in the app store. For smooth processing, it is recommended to use this app.\nMost phones today also have a built-in QR code scanner in the camera. This can be used as well.\nTo scan a QR code, open the scanner app or your smartphone camera and point it at the QR code. The app or camera recognizes the code automatically and shows its content.\nTip: Make sure the QR code is well lit and not too covered so the scanner can detect it quickly.",
    "Am Ende des Arbeitsheftes gibst du deine Ergebnisse als JSON-Datei ab.\nKlicke dazu auf den Button \"Ergebnisse Abgeben\" in der Navigation. Dadurch wird eine Datei mit deinen Antworten heruntergeladen.\nLade diese Datei nach der Bearbeitung des Arbeitsheftes in den Abgabeordner hoch." -> "At the end of the workbook, submit your results as a JSON file.\nClick the \"Submit Results\" button in the navigation. This downloads a file with your answers.\nAfter finishing the workbook, upload this file to the submission folder.",
    "Du kennst das bestimmt, dass du mit deinem Smartphone kurz einen QR-Code scannst und  anschließend zu einer Webseite weitergeleitet wirst. Doch was genau passiert dabei? Für welche Anwendungen ist es sinnvoll einen QR-Code zu nutzen und für welche nicht? Die Antworten auf diese Fragen findest du in den folgenden Kapiteln, welche du auf der linken Seite auswählen kannst. In der rechten oberen Ecke findest du jeweils eine Zeitabschätzung, wie lange das Kapitel dauert.\nViel Spaß!" -> "You probably know this: you quickly scan a QR code with your smartphone and are then redirected to a website. But what exactly happens? For which applications is it useful to use a QR code and for which not? You will find answers to these questions in the following chapters, which you can select on the left side. In the upper right corner, you will find an estimated time for each chapter.\nHave fun!",
    "Scanne die QR-Codes und beschreibe deren Inhalte in den Textfeldern unter den QR Codes. Beschreibe die Gemeinsamkeiten im großen Eingabefeld." -> "Scan the QR codes and describe their contents in the text fields below the QR codes. Describe the similarities in the large input field.",
    "Die QR-Codes enthalten unterschiedliche Inhalte wie eine Webseite, Kontaktdaten von Max Mustermann und einen Hinweis für die Abgabe." -> "The QR codes contain different content such as a website, contact details of Max Mustermann, and a submission hint.",
    "Hinweis: Der Hinweis für eine korrekte Abgabe des großen Eingabefeldes befindet sich im dritten QR-Code." -> "Hint: The hint for correct submission in the large input field is located in the third QR code.",
    "Durch das Klicken auf den \"Abgeben\" Button bei den Aufgaben werden deine Antworten lokal in deinem Browser gespeichert. Das Textfeld färbt sich grün, wenn alle Schlüsselwörter, welche gefordert waren, im Text vorhanden sind. Ansonsten färbt es sich rot. Zusätzlich gibt es im Arbeitsheft immer wieder Informationsboxen, welche nach dem Bearbeiten der Aufgabe angezeigt werden. Falls du mal bei einer Aufgabe nicht weiter kommen solltest, kannst du dir durch einen Klick auf 'Lösung zeigen' die Lösung anzeigen lassen. Alle Benötigen Keywörter sind in der Lösung fett markiert. Probiere es an der Aufgabe 1 einemal selbst aus, indem du deine Eingabe änderst, falls du sie beim ersten mal richtig gelöst hast." -> "By clicking the \"Submit\" button in tasks, your answers are saved locally in your browser. The text field turns green when all required keywords are present in the text. Otherwise, it turns red. In addition, the workbook contains information boxes that are shown after completing tasks. If you get stuck, you can click 'Show solution' to display the solution. All required keywords are marked in bold in the solution. Try it yourself in task 1 by changing your input if you solved it correctly on your first try.",
    "Was kommt als Nächstes?" -> "What comes next?",
    "Nun kannst du frei wählen, in welcher Reihenfolge du die Kapitel Nachrichten schreiben, Maskierung und Fehlerkorrektur bearbeitest." -> "Now you can freely choose the order in which you complete the chapters Writing Messages, Masking, and Error Correction.",
    "Wenn du alle drei Kapitel bearbeitet hast, kannst du zum Kapitel Praxisanwendungen übergehen, in welchem du dein Wissen auf konkrete Anwendungsfälle übertragen kannst." -> "After completing all three chapters, you can move on to the Practical Applications chapter, where you can transfer your knowledge to concrete use cases.",
    "Im Kapitel Zusammenfassung erstellst du dir zum Schluss dann deinen eigenen Spickzettel, auf dem die wichtigsten Informationen zu QR-Codes übersichtlich dargestellt sind. Dafür werden jeweils deine Antworten aus den Kapiteln mit verwendet. Diese kannst du zum Schluss nochmal anpassen." -> "In the Summary chapter, you create your own cheat sheet at the end, where the most important information about QR codes is presented clearly. Your answers from the chapters are used for this. You can adjust them again at the end.",
    "Wenn du damit auch Fertig bist, kannst du dir im Zusatzkapitel Barcode noch einen kurzen Überblick über eindimensionale Barcodes verschaffen und diese mit QR-Codes vergleichen." -> "When you are done with that as well, you can get a short overview of one-dimensional barcodes in the additional Barcode chapter and compare them with QR codes.",
    "Aufgabe 11" -> "Task 11",
    "Um das Speichern der Daten einmal auszuprobieren, erstelle einen QR-Code mit deinen Daten (Du kannst dir dafür natürlich auch welche ausdenken)." -> "To try data storage yourself, create a QR code with your data (you can of course make up data).",
    "Gehe dafür auf die Webseite " -> "Go to the website ",
    " und wähle dort den Typ 'VCard' aus. Fülle die Informationen aus." -> " and select the type 'VCard' there. Fill in the information.",
    "Überprüfe, ob der QR-Code funktioniert, indem du ihn mit deinem Smartphone scannst. Wenn alles funktioniert hat, kannst du dir den QR-Code als Bild speichern, ausdrucken und in deine Handyhülle legen." -> "Check whether the QR code works by scanning it with your smartphone. If everything works, you can save the QR code as an image, print it, and put it in your phone case.",
    "Hake alle Kästchen nach dem Abarbeiten ab." -> "Tick all boxes after completing the steps.",
    "Die Webseite geöffnet" -> "Opened the website",
    " Typ 'VCard' ausgewählt und Informationen ausgefüllt" -> " Selected type 'VCard' and filled in information",
    " QR-Code mit Smartphone gescannt und getestet" -> " Scanned and tested QR code with smartphone",
    " QR-Code als Bild gespeichert/ausgedruckt" -> " Saved/printed QR code as image",
    "Richtrig!" -> "Correct!",
    "XOR-Operator" -> "XOR operator",
    "Der XOR-Operator (exklusives Oder) liefert genau dann 1, wenn die beiden Eingaben unterschiedlich sind. Bei der Maskierung bedeutet das, dass alle Pixel die bei der Maske schwarz gefärbt sind, umgekehrt werden. " -> "The XOR operator (exclusive OR) returns 1 exactly when the two inputs are different. In masking, this means that all pixels that are black in the mask are inverted.",
    "Links und in der Mitte sind die ursprünglichen Daten und die Maske vorgegeben. Rechts kannst du die maskierten Daten eintragen. Bestimme durch Anwenden der XOR-Operation die korrekten maskierten Daten." -> "On the left and in the middle, the original data and the mask are given. On the right, you can enter the masked data. Determine the correct masked data by applying the XOR operation.",
    "Links sind die ursprünglichen Daten dargestellt. In der Mitte kannst du die Maske definieren. Rechts wird das Ergebnis der Maskierung, welche durch eine XOR-Operation realisiert wird, angezeigt." -> "The original data is shown on the left. In the middle, you can define the mask. On the right, the result of the masking, implemented via an XOR operation, is displayed.",
    "In dieser Aufgabe wollen wir eine besondere Eigenschaft der XOR Operation untersuchen. Berechne dafür im ersten Schritt die maskierten Daten." -> "In this task, we examine a special property of the XOR operation. First, calculate the masked data.",
    "Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die Felder mit blauem Rahmen ein." -> "Then apply the mask a second time to the masked data. Enter your results in the blue-framed fields.",
    "Ursprüngliche Daten" -> "Original data",
    "Maskierte Daten" -> "Masked data",
    "maskierte Daten" -> "masked data",
    "1x Maskiert" -> "Masked once",
    "2x Maskiert" -> "Masked twice",
    "Maskierung beschreiben" -> "Describe masking",
    "Wenn ursprüngliche Daten schwarz und die Maske schwarz dargestellt sind, dann ist das Ergebnis: " -> "If original data is black and the mask is black, then the result is: ",
    "Wenn ursprüngliche Daten schwarz und die Maske weiß dargestellt sind, dann ist das Ergebnis: " -> "If original data is black and the mask is white, then the result is: ",
    "Wenn ursprüngliche Daten weiß und die Maske schwarz dargestellt sind, dann ist das Ergebnis: " -> "If original data is white and the mask is black, then the result is: ",
    "Wenn ursprüngliche Daten weiß und die Maske weiß dargestellt sind, dann ist das Ergebnis: " -> "If original data is white and the mask is white, then the result is: ",
    "- Wählen -" -> "- Select -",
    "schwarz" -> "black",
    "weiß" -> "white",
    "Aufgabe 9" -> "Task 9",
    "Ergänze die Lücken im folgenden Text:" -> "Complete the gaps in the following text:",
    "Je mehr Daten zur Fehlererkennung und -korrektur genutzt werden, desto " -> "The more data is used for error detection and correction, the ",
    " ist die Wahrscheinlichkeit, Fehler zu erkennen und zu korrigieren." -> " the probability of detecting and correcting errors.",
    "Substutionsfehler lassen sich  " -> "Substitution errors can be ",
    "verbessern, als Löschfehler." -> " improved than deletion errors.",
    "Prüfsummen dienen vor allem zur " -> "Checksums are primarily used for ",
    "und nicht zur" -> "and not for",
    "-- auswählen --" -> "-- select --",
    "niedriger" -> "lower",
    "größer" -> "higher",
    "leichter" -> "easier",
    "schwerer" -> "harder",
    "Stell dir vor, du sollst für ein Projekt entscheiden, ob Barcodes oder QR-Codes verwendet werden. Nimm begründet Stellung, wofür du dich entscheiden würdest und in welchen Situationen welche Codes sinnvoller sind." -> "Imagine you have to decide for a project whether barcodes or QR codes should be used. Give a reasoned opinion on what you would choose and in which situations which codes are more suitable.",
    "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden können am Beispiel der Nachricht '12345'. Gib die Nachricht an. (Tipp: Überlege dir, was du machst, wenn deine Information von einer Person im Gespräch nicht verstanden wurde.)" -> "Describe a method for not only detecting errors but also correcting them using the message '12345'. State the message. (Tip: Think about what you do when your information is not understood by someone in conversation.)",
    "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \n" -> "Compare the two situations. Assess which of the two errors is more difficult to detect and correct.\n",
    "Nenne ein Problem, das dieses Verfahren mit sich bringt. Überlege dir dazu, wie die Nachricht 'Hallo5' mit einer Prüfsumme aussehen müsste." -> "Name one problem that this method brings with it. Think about what the message 'Hallo5' with a checksum would have to look like.",
    "Beschreibe jeweils, wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \n" -> "Describe for each case what maximum percentage of the message may be unreadable so that the message can still be read correctly.\n",
    "Erkläre, welche Auswirkungen ein hohes Fehlerkorrektur in QR-Codes auf die Menge der Daten hat." -> "Explain how a high error-correction level in QR codes affects the amount of data.",
    "Erkläre in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zusätzlichen Daten und dem Korrekturlevel ein. Erläutere zusätzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird. Nutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt." -> "Explain in your own words how error correction in QR codes works. Include the connection between additional data and correction level. Also explain how error correction is represented in the QR code. Use at least 30 words.\n\nNote: Your summary will appear on your reference sheet.",
    "Erläutere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet." -> "Using the data from task 3 as an example, explain the problems that arise when only one fixed mask is used.",
    "Erläutere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zusätzlich eine mögliche Lösung, um diese Probleme zu umgehen." -> "Using the data from task 3 as an example, explain the problems that arise when only one fixed mask is used. Also describe a possible solution to avoid these problems.",
    "Erläutere an einem Beispiel, wie Maskierung und Demaskierung funktionieren.\n\nGehe dabei auf folgende Punkte ein:\n- die Probleme einer festen Maske\n- wie die beste Maske ausgewählt wird\n- wie die XOR-Operation dabei eingesetzt wird\n\nNutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt." -> "Using an example, explain how masking and demasking work.\n\nAddress the following points:\n- the problems of a fixed mask\n- how the best mask is selected\n- how the XOR operation is used\n\nUse at least 30 words.\n\nNote: Your summary will appear on your reference sheet.",
    "Hinweis: Überlege dir welche Fehlerart erkannt wird." -> "Hint: Think about which error type is detected.",
    "Hinweis: Entscheide dich für eine Situation. Überlege dir bei welcher Notiz du mehr Probleme hast den Fehler zu erkennen." -> "Hint: Choose one situation. Think about for which note you have more difficulty detecting the error.",
    "Hinweis: Nutze Redundanz. Überlege dir, wie du die Nachricht so erweitern kannst, dass sie auch bei Fehlern noch lesbar bleibt. Gib die Nachricht an." -> "Hint: Use redundancy. Think about how you can extend the message so it remains readable even with errors. State the message.",
    "Hinweis: Prüfe die Mehrdeutigkeit am Beispiel 'Hallo5' und warum die Zuordnung nicht eindeutig ist." -> "Hint: Check the ambiguity using the example 'Hallo5' and why the assignment is not unique.",
    "Hinweis: Versuche mit dem Scanner so nah an die QR Codes zu gehen, sodass nur ein QR-Code gleichzeitig im Fokus ist." -> "Hint: Try moving the scanner close enough to the QR codes so only one QR code is in focus at a time.",
    "Hinweis: Beschreibe, wie die Menge der übertragenen Daten mit dem Korrekturlevel zusammenhängt." -> "Hint: Describe how the amount of transmitted data relates to the correction level.",
    "Hinweis: Erkläre, wie sich Korrekturlevel und Datenkapazität gegenseitig beeinflussen." -> "Hint: Explain how correction level and data capacity influence each other.",
    "a) 50 %, b) 66 %, c) 90 % können unleserlich sein und die Nachricht ist noch rekonstruierbar." -> "a) 50%, b) 66%, c) 90% may be unreadable and the message is still reconstructable.",
    "Eine Möglichkeit mit Fehlern umzugehen ist es, eine Prüfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gezählt und die Anzahl der Zeichen an das Ende angehangen." -> "One way to deal with errors is to use a checksum. Certain characters in the message are counted and the number is appended at the end.",
    "Das Problem ist, dass durch das erhalten einer Nachricht nicht klar ist, ob die Nachricht 'Hallo' mit der Prüfsumme '5' oder die Nachricht 'Hallo5' mit der Prüfsumme '6' gemeint ist. Es gibt also keine eindeutige Zuordnung zwischen Nachricht und Prüfsumme." -> "The problem is that when receiving a message, it is unclear whether 'Hallo' with checksum '5' or 'Hallo5' with checksum '6' is meant. So there is no unique mapping between message and checksum.",
    "Man kann die Nachricht 2 mal senden, z.B. 1234512345. Wenn der erste Teil der Nachricht unleserlich ist, kann die Nachricht durch den 2. Teil dann immernoch gelesen werden." -> "You can send the message twice, e.g. 1234512345. If the first part is unreadable, the message can still be read from the second part.",
    "Situation 2 ist schwerer zu erkennen und zu korrigieren, da der Fehler nicht sofort auffällt. Die falsche Hausnummer wirkt auf den ersten Blick plausibel, obwohl sie inhaltlich falsch ist." -> "Situation 2 is harder to detect and correct because the error is not immediately obvious. The wrong house number seems plausible at first glance although it is factually wrong.",
    "Eine Pruefsumme kann Ausfallfehler erkennen, aber nicht direkt korrigieren. Da nur die Länge der Nachricht gespeichert wird, fällt nur auf, wenn Zeichen fehlen – nicht aber, wenn Zeichen durch andere ausgetauscht wurden." -> "A checksum can detect dropout errors, but cannot correct them directly. Since only the length of the message is stored, it only detects missing characters – not substituted ones.",
    "Mehr Fehlerkorrektur bedeutet mehr genutzen Speicher. Dadurch steigt die Robustheit, aber es bleibt weniger Platz für Daten. Ein hohes Korrekturlevel ist nur sinnvoll, wenn die Umgebung viele Fehler verursacht." -> "More error correction means more used memory. This increases robustness, but leaves less space for data. A high correction level is only useful if the environment causes many errors.",
    "Durch die Bildschirmauflösung und Kamerafehler kann es dazu kommen, dass fälschlicherweise nicht alle QR Codes scannbar waren. Das ist jedoch nicht schlimm!" -> "Due to screen resolution and camera errors, it can happen that not all QR codes appeared scannable by mistake. That is not a problem.",
    "Die 4 verschiedenen Buchstabenmuster" -> "The 4 different letter patterns",
    "Im QR-Code werden die Buchstaben in einem Zickzack-Muster kodiert. Es gibt dabei 4 verschiedene Ausprägungen, welche im Bild dargestellt sind.\n\nDiese wechselnde Richtung ermöglicht eine effiziente Nutzung des verfügbaren Platzes im QR-Code." -> "In the QR code, letters are encoded in a zigzag pattern. There are 4 different variants, which are shown in the image.\n\nThis alternating direction enables efficient use of the available space in the QR code.",
    "Jeder Pixel kann 2 Farben darstellen. Überlege dir als erstes eine Lösung für eine kleine Pixelanzahl." -> "Each pixel can represent 2 colors. First think of a solution for a small number of pixels.",
    "Die Länge der Nachricht wird in einem festen Bereich am Anfang der Nachricht gespeichert. Dieser Bereich ist 8 Bits lang und gibt die Anzahl der Zeichen in Binärdarstellung an." -> "The message length is stored in a fixed area at the beginning of the message. This area is 8 bits long and specifies the number of characters in binary form.",
    "Die Länge der Nachricht ist beschränkt, da die Anzahl der Pixel im QR-Code begrenzt ist. Je länger die Nachricht, desto mehr Pixel werden benötigt. Irgendwann gibt es nicht genug Pixel, um die gesamte Nachricht darzustellen. Zusätzlich gibt es bestimmte Bereiche, welche nicht genutzt werden." -> "The message length is limited because the number of pixels in the QR code is limited. The longer the message, the more pixels are needed. At some point there are not enough pixels to represent the full message. In addition, certain areas cannot be used.",
    "Eine feste Maske kann je nach Daten ungünstige Muster erzeugen, z. B. dass viele benachbarte Pixel schwarz sind. Dadurch wird der QR-Code für einen Scanner schlechter lesbar. Eine mögliche Lösung ist, mehrere verschiedene Masken auszuprobieren und die Maske auszuwählen, die den besten Kontrast erzeugt." -> "A fixed mask can create unfavourable patterns depending on the data, for example when many neighbouring pixels are black. This makes the QR code harder for a scanner to read. One possible solution is to try several different masks and choose the one that produces the best contrast.",
    "Es können insgesamt 2^8 = 256 verschiedene Zeichen dargestellt werden." -> "A total of 2^8 = 256 different characters can be represented.",
    "Ein Vorteil der festen Länge ist die eindeutige Trennung der Buchstaben ohne zusätzliche Trennzeichen. Da jeder Buchstabe immer genau 8 Pixel lang ist, ist eine klare Dekodierung möglich." -> "One advantage of fixed length is the clear separation of letters without additional delimiters. Since every letter is always exactly 8 pixels long, unambiguous decoding is possible.",
    "Ohne Standard muss bei einer Kodierung zusätzlich auch die Kodierungsvorschrift (also wie Buchstaben in Pixel umgewandelt werden) mit übergeben werden. Sonst kennen andere die Kodierungsvorschrift nicht, und die Nachrichten kann nicht wieder dekodiert(Zurück in Buchstaben) umgewandelt werden." -> "Without a standard, an encoding rule (how letters are converted to pixels) must also be transmitted. Otherwise, others do not know the rule and cannot decode the messages back into letters.",
    "Der QR-Code wirkt unlesbar, weil viele schwarze Bereiche zusammenhaengen. Eine Maskierung sorgt spaeter fuer bessere Lesbarkeit." -> "The QR code appears unreadable because many black areas are connected. Masking later improves readability.",
    "Wird die Maske zweimal angewandt, entstehen wieder die Ursprungsdaten. Das vereinfacht das Maskieren und Demaskieren, da für beides die gleiche Maske genutzt werden kann." -> "If the mask is applied twice, the original data appears again. This simplifies masking and demasking because the same mask can be used for both.",
    "In der Schule koennte das Ziel sein, Material zu verteilen; der QR-Code enthaelt den Link, die Platzierung ist am Klassenraum." -> "At school, the goal could be to distribute material; the QR code contains the link, and it is placed at the classroom.",
    "Ein Vorteil ist die direkte Kontrolle durch eine Lehrkraft. Dieser kann die Schüler aufhalten und ist flexibel in der Entscheidung. Ein Nachteil ist der hohe Aufwand und moegliche Fehler beim Nachschlagen." -> "One advantage is direct control by a teacher. They can stop students and decide flexibly. One disadvantage is the high effort and possible lookup errors.",
    "Trade-off Fehlerkorrektur" -> "Error correction trade-off",
    "Abgabe der JSON-Datei am Ende" -> "Submit the JSON file at the end",
    "Eine Kodierungsvorschrift beschreibt, wie Informationen (z.B. Buchstaben) in eine andere Form (z.B. Pixel) umgewandelt(kodiert) werden. Bei QR-Codes werden Buchstaben in schwarze und weiße Pixel kodiert. Jeder Buchstabe bekommt dabei ein bestimmtes Muster. \nJeder Buchstabe muss ein eindeutiges Muster haben, damit man die Nachricht später wieder zurück in die ursprüngliche Form umgewandelt (dekodieren) werden kann. \nIn der Praxis wird hierfür kein Zufälliges Muster verwendet. Hier werden Buchstaben in Zahlen kodiert, welche anschließend in Bits (0 und 1) dargestellt werden. Dies geschieht über die Binärdarstellung der Zahl. Zum Schluss werden die Bits als schwarze (1) und weiße (0) Pixel dargestellt." -> "An encoding rule describes how information (e.g. letters) is converted (encoded) into another form (e.g. pixels). In QR codes, letters are encoded as black and white pixels. Each letter gets a specific pattern.\nEach letter must have a unique pattern so that the message can later be converted back (decoded) into its original form.\nIn practice, no random pattern is used. Letters are encoded into numbers, which are then represented in bits (0 and 1). This happens through the binary representation of the number. Finally, the bits are shown as black (1) and white (0) pixels.",
    "ASCII steht für \"American Standard Code for Information Interchange\", auf Deutsch: \"Amerikanischer Standard-Code für den Informationsaustausch\". Es ist eine Kodierungsvorschrift, bei der jeder Buchstabe und jedes Sonderzeichen einer festen Zahl zugeordnet ist. Die Zahl wird als 8-Bit-Kombination (also 8 Nullen und Einsen) gespeichert.\nDa ASCII ein gemeinsamer Standard ist, muss die Kodierungsvorschrift nicht mitübertragen werden. Beide Seiten kennen sie bereits.\nQR-Codes nutzen UTF-8, eine Erweiterung von ASCII. UTF-8 kann auch Umlaute und viele weitere Zeichen darstellen." -> "ASCII stands for \"American Standard Code for Information Interchange\". It is an encoding rule that assigns a fixed number to every letter and special character. The number is stored as an 8-bit combination (8 zeros and ones).\nBecause ASCII is a shared standard, the encoding rule does not need to be transmitted. Both sides already know it.\nQR codes use UTF-8, an extension of ASCII. UTF-8 can also represent umlauts and many other characters.",
    "Trotz verschiedenen Einsatzmöglichkeiten haben QR Codes einen ähnlichem Aussehen." -> "Despite different use cases, QR codes have a similar appearance.",
    " Die roten Bereiche in den Ecken heißen " -> " The red areas in the corners are called ",
    ". Diese dienen dazu, dass die Handykamera den Anfang und das Ende des QR Codes erfassen kann." -> ". They allow the phone camera to detect the beginning and end of the QR code.",
    " Die Blaue Stelle ist ein " -> " The blue area is an ",
    ". Dieser Hilft den QR Code auf unebenen Flächen (z.B Verpackungen) zu lesen." -> ". It helps read the QR code on uneven surfaces (e.g. packaging).",
    " Der Grüne Bereich sind die " -> " The green area contains the ",
    "(Synchronisationslinien). Hier wechseln sich schwarze und weiße Pixel ab. Mithilfe dieser Anordnung wird die Größe des QR Codes bestimmt." -> "(synchronization lines). Black and white pixels alternate here. This arrangement is used to determine the size of the QR code.",
    " Da viele verschiedene QR Code Versionen existieren, wird eine " -> " Because many different QR code versions exist, a ",
    " festgehalten. Die " -> " is recorded. The ",
    " sind Informationen über den Aufbau des QR Codes (z.B die Verwendete Maske)." -> " are information about the structure of the QR code (e.g. the mask used).",
    " Weiterhin haben alle QR Codes einen weißen Rand um den Code, damit dieser gelesen werden kann. Diesen Rand nennt man die Randzone. \nDie genauen bereiche können je nach QR Code Version variieren, aber es gibt immer bestimmte Bereiche, die nicht für die Nachricht verwendet werden können." -> " Furthermore, all QR codes have a white border around the code so it can be read. This border is called the quiet zone.\nThe exact areas may vary depending on the QR code version, but there are always certain areas that cannot be used for the message.",
    "Wie du vielleicht bemerkt hast, war der QR-Code von einem Scanner nicht lesbar. Um einen Besseren Kontrast zwischen weißen und schwarzen Pixeln herzustellen, werden Pixel nach einem bestimmten Muster(Maske) umgefärbt. Diesen Prozess nennt man Maskierung. Die Maskierung sorgt dafür, dass der QR-Code besser lesbar ist und von Scannern zuverlässiger erkannt werden kann.\nAls nächstes schauen wir uns einmal an, wie genau die Maskierung funktioniert, welche Probleme es dabei gibt und wie diese gelöst werden können." -> "As you may have noticed, the QR code was not readable by a scanner. To create better contrast between white and black pixels, pixels are recolored according to a certain pattern (mask). This process is called masking. Masking makes the QR code more readable and allows scanners to recognize it more reliably.\nNext, we will look at how masking works in detail, what problems occur, and how they can be solved.",
    "Um das Problem einer festen Maske zu lösen, werden in QR-Codes 8 verschiedene Masken nacheinander angewandt. Daraufhin wird jeweils bewertet, welche Maske den größten Kontrast zwischen schwarzen und weißen Pixeln generiert. Zusätzlich werden andere Kriterien, wie das Vermeiden des Timingpatterns(abwechselnde schwarze und weiße Pixel), berücksichtigt. Die Maske, die  alle Kriterien am Besten erfüllt, wird ausgewählt. Diese Maske wird anschließend auf den QR-Code angewandt. Dadurch wird sichergestellt, dass der QR-Code optimal lesbar ist. Die verschiedenen Masken sind im Bild dargestellt. Unter jeder Maske steht hierbei die Berechnungsvorschrift, die angibt, welche Pixel umgefärbt werden. Das \"%\" Zeichen steht hierbei für den Modulo-Operator - also den Rest einer Division." -> "To solve the problem of a fixed mask, 8 different masks are applied one after another in QR codes. Then each mask is evaluated to determine which one generates the highest contrast between black and white pixels. Additional criteria are considered as well, such as avoiding timing patterns (alternating black and white pixels). The mask that best fulfills all criteria is selected. This mask is then applied to the QR code. This ensures the QR code is optimally readable. The different masks are shown in the image. Below each mask is the calculation rule indicating which pixels are recolored. The \"%\" sign stands for the modulo operator, i.e. the remainder of a division.",
    "Der Scanner weiß deshalb, welche Maske angewandt wurde, weil Metadaten (Daten über die Daten) auch in Form von Pixeln an bestimmten Stellen im QR-Code festgehalten werden. " -> "The scanner knows which mask was applied because metadata (data about data) is also stored as pixels at specific positions in the QR code. ",
    "Die Metadaten werden im Bild gelb und orange dargestellt." -> "The metadata is shown in yellow and orange in the image.",
    "Zu diesen Metadaten zählt unter anderem die Nummer der verwendeten Maske. Diese Information wird an spezifischen Positionen im QR-Code kodiert." -> "This metadata includes, among other things, the number of the mask used. This information is encoded at specific positions in the QR code.",
    "Damit der Scanner diese auslesen und die entsprechende Maske rückgängig machen kann, um die ursprünglichen Daten zu rekonstruieren." -> "This allows the scanner to read it and reverse the corresponding mask to reconstruct the original data.",
    "Weitere Metadaten sind beispielsweise die verwendete Fehlerkorrektur-Stufe und die Versionsnummer des QR-Codes." -> "Other metadata includes, for example, the error-correction level used and the QR code version number.",
    "Die Tatsache, dass die XOR-Operation ihre eigene Umkehrfunktion ist, ist sehr praktisch. Dies führt dazu, dass durch 2-maliges Anwenden der gleichen Maske die ursprünglichen Daten wiederhergestellt werden. Der Scanner muss dadurch keine zwei verschiedenen Funktionen implementieren - eine zum Maskieren und eine zum Demaskieren. Stattdessen kann er einfach die gleiche XOR-Funktion ein zweites Mal anwenden. Dies spart Speicherplatz und reduziert Komplexität. " -> "The fact that XOR is its own inverse is very practical. This means that applying the same mask twice restores the original data. Therefore, the scanner does not need to implement two different functions, one for masking and one for demasking. Instead, it can simply apply the same XOR function a second time. This saves memory and reduces complexity. ",
    "Es gibt zwei Haupttypen von Fehlern: \nAusfallfehler (auch Löschfehler genannt): Ein Zeichen wird vollständig entfernt oder ist unlesbar. \nSubstitutionsfehler: Ein Zeichen wird durch ein anderes ersetzt. \nSubstitutionsfehler sind oft schwieriger zu erkennen, da der Text syntaktisch(richtige Zeichen werden verwendet) korrekt bleibt, aber semantisch (Bedeutung der Zeichen) falsch ist. \nDurch Redundanz (doppelte Informationen) können beide Fehlertypen erkannt und teilweise korrigiert werden." -> "There are two main types of errors:\nDropout errors (also called deletion errors): a character is completely removed or unreadable.\nSubstitution errors: one character is replaced by another.\nSubstitution errors are often harder to detect because the text remains syntactically correct (valid characters are used) but semantically wrong (meaning is wrong).\nThrough redundancy (duplicate information), both error types can be detected and partially corrected.",
    "Nochmal senden (oder nochmal scannen) sollte möglichst vermieden werden. Besser ist es, in einer einzigen Nachricht Informationen mehrfach zu übertragen, z.B. indem die Nachricht doppelt enthalten ist. So entsteht nur ein Kommunikationsprozess statt zwei getrennten Übertragungen. Kommunikationsprozesse sollten minimiert werden, um Zeitaufwand und Fehlerquellen zu reduzieren." -> "Resending (or rescanning) should be avoided if possible. It is better to transmit information multiple times within a single message, for example by including the message twice. This creates only one communication process instead of two separate transmissions. Communication processes should be minimized to reduce time effort and error sources.",
    "QR-Codes haben eine maximale Größe und damit einen begrenzten Gesamtspeicher. Ein Teil des Speichers wird immer für die Positionsmuster, Trennzeichen und Formatinformationen benötigt. Der restliche Speicher wird aufgeteilt zwischen Datenspeicher (für die eigentliche Information) und Fehlerkorrektur (für die Redundanz). Je höher das Korrekturlevel, desto mehr Speicher ist für Redundanz reserviert und desto weniger Speicher steht für die Daten zur Verfügung. Dies ist ein klassischer Trade-off: Mehr Fehlertoleranz bedeutet weniger Kapazität für Daten. \nUm das Problem der festen größe zu umgehen, gibt es verschiedene QR-Code Versionen mit unterschiedlicher Anzahl an Pixeln. Je mehr Daten gespeichert werden sollen, desto höher muss die Version gewählt werden, um genug Speicherplatz zu haben. Allerdings steigt mit der Version auch die Größe des QR-Codes, was wiederum die Lesbarkeit beeinträchtigen kann. Daher ist es wichtig, die richtige Balance zwischen Datenmenge, Fehlerkorrektur und QR-Code Größe zu finden. Die Größte Version 40 hat 177 x 177 Pixel." -> "QR codes have a maximum size and therefore limited total storage. Part of the storage is always needed for position patterns, separators, and format information. The remaining storage is split between data storage (actual information) and error correction (redundancy). The higher the correction level, the more storage is reserved for redundancy and the less remains for data. This is a classic trade-off: more error tolerance means less capacity for data.\nTo overcome the problem of fixed size, there are different QR code versions with different numbers of pixels. The more data that should be stored, the higher the version must be to provide enough storage space. However, with higher versions, the QR code also becomes larger, which can reduce readability. Therefore, it is important to find the right balance between data amount, error correction, and QR code size. The largest version, 40, has 177 x 177 pixels.",
    "In QR-Codes werden Reed-Solomon-Codes zur Fehlerkorrektur genutzt. Dies ist ein besonders leistungsfähiges Verfahren, das beide Fehlerarten zum Teil korrigieren kann. Die Fehlerkorrektur wird dabei sowohl auf die Daten, als auch auf die Metadaten (z.B. Formatinformationen, Maske) angewendet. \n\nDabei werden QR-Codes nach Fehlertoleranzstufen klassifiziert. Die Fehlertoleranz liegt dabei zwischen 7% und 30% und gibt an wieviel % des QR-Codes beschädigt sein können, ohne dass die Information verloren geht. Die vier Stufen sind:\n• Level L: 7% Fehlertoleranz (Low) \n• Level M: 15% Fehlertoleranz (Medium) \n• Level Q: 25% Fehlertoleranz (Quartile)   \n• Level H: 30% Fehlertoleranz (High) \n\nDie Reed-Solomon-Codes arbeiten im Prinzip genau so, wie es im Exkurs behandelt wurde. Sie nutzen jedoch mehr Mathematik und sind etwas effizienter als Nachrichten doppelt zu schreiben. Die genau Funktionsweise übersteigt den Rahmen dieses Kurses, weshalb diese nicht weiter behandelt wird. Zum Nachlesen: https://de.wikipedia.org/wiki/Reed-Solomon-Code" -> "In QR codes, Reed-Solomon codes are used for error correction. This is a very powerful method that can partially correct both error types. Error correction is applied both to data and metadata (e.g. format information, mask).\n\nQR codes are classified by error-tolerance levels. Error tolerance ranges between 7% and 30% and indicates how much of the QR code can be damaged without losing information. The four levels are:\n• Level L: 7% error tolerance (Low)\n• Level M: 15% error tolerance (Medium)\n• Level Q: 25% error tolerance (Quartile)\n• Level H: 30% error tolerance (High)\n\nIn principle, Reed-Solomon codes work exactly as discussed in the excursus. However, they use more mathematics and are somewhat more efficient than writing messages twice. The exact mechanism is beyond the scope of this course and is therefore not covered further. For further reading: https://de.wikipedia.org/wiki/Reed-Solomon-Code"
  )

  private def hasLetters(text: String): Boolean =
    text.exists(ch => ch.isLetter)

  private def autoTranslateGermanToEnglish(text: String): String =
    exactSentenceEnMap.get(text).getOrElse(text)

  private def translatedNow(original: String, lang: String): String =
    if lang != "en" then original
    else
      baseEnMap.get(original)
        .orElse(translationCacheVar.now().get(original))
        .getOrElse {
          val generated = autoTranslateGermanToEnglish(original)
          translationCacheVar.update(_ + (original -> generated))
          generated
        }

  private val keywordEnMap: Map[String, String] = Map(
    "schwarz" -> "black",
    "weiß" -> "white",
    "weiss" -> "white",
    "zusätzlich" -> "additional",
    "Kodierungsvorschrift" -> "encoding rule",
    "Trennung" -> "separation",
    "eindeutig" -> "unique",
    "Länge" -> "length",
    "Anfang" -> "start",
    "unlesbar" -> "unreadable",
    "Muster" -> "pattern",
    "Maske" -> "mask",
    "Zeile" -> "row",
    "Spalte" -> "column",
    "ursprünglich" -> "original",
    "Ursprungsdaten" -> "original data",
    "Daten" -> "data",
    "sinnvoll" -> "useful",
    "Schule" -> "school",
    "Ziel" -> "goal",
    "Platzierung" -> "placement",
    "Vorteil" -> "advantage",
    "Nachteil" -> "disadvantage",
    "begrenzt" -> "limited",
    "nochmal" -> "again"
  )

  private def keywordVariants(keyword: String): Set[String] =
    val trimmed = keyword.trim
    if trimmed.isEmpty then Set.empty
    else
      val lower = trimmed.toLowerCase
      val mapped = keywordEnMap.get(trimmed).orElse(keywordEnMap.get(lower)).toSet
      val translated = Set(translatedNow(trimmed, "en")).filter(_ != trimmed)
      (Set(trimmed, lower) ++ mapped ++ mapped.map(_.toLowerCase) ++ translated ++ translated.map(_.toLowerCase)).filter(_.nonEmpty)

  private def matchesKeywords(inputText: String, keywords: Set[String]): Boolean =
    if keywords.isEmpty || keywords.exists(_.trim.isEmpty) then true
    else
      val haystack = inputText.toLowerCase
      keywords.exists { keyword =>
        keywordVariants(keyword).exists(variant => haystack.contains(variant.toLowerCase))
      }

  private def translateSolutionWords(words: Set[String], lang: String): Set[String] =
    if lang != "en" then words
    else words.flatMap(keywordVariants)

  private def translateTextNode(node: dom.Node, lang: String): Unit =
    val current = Option(node.textContent).getOrElse("")
    if current.trim.nonEmpty && hasLetters(current) then
      if lang == "en" then
        // Always translate from the current text to avoid stale cached originals
        // overriding dynamic Laminar labels (e.g. Submit/Try again state changes).
        val target = translatedNow(current, lang)
        if current != target then
          originalTextByNode.update(node, current)
          node.textContent = target
      else
        // Restore previously translated static text when switching back to German.
        originalTextByNode.get(node).foreach { original =>
          if current != original then
            node.textContent = original
        }

  private def walkAndTranslate(node: dom.Node, lang: String): Unit =
    if node == null then
      ()
    else if node.nodeType == dom.Node.TEXT_NODE then
      translateTextNode(node, lang)
    else if node.nodeType == dom.Node.ELEMENT_NODE then
      val el = node.asInstanceOf[dom.Element]
      val tag = el.tagName.toLowerCase
      if tag != "script" && tag != "style" then
        var child = node.firstChild
        while child != null do
          val next = child.nextSibling
          walkAndTranslate(child, lang)
          child = next

  def applyDomLanguage(): Unit =
    val root = dom.document.getElementById("app")
    if root != null then
      walkAndTranslate(root, languageVar.now())

  def initLanguageTranslationRuntime(): Unit =
    if translationObserver.isEmpty then
      val observer = new dom.MutationObserver((_: js.Array[dom.MutationRecord], _: dom.MutationObserver) =>
        if languageVar.now() == "en" then
          applyDomLanguage()
      )
      val root = dom.document.getElementById("app")
      if root != null then
        observer.observe(
          root,
          dom.MutationObserverInit(
            childList = true,
            subtree = true,
            characterData = true
          )
        )
        translationObserver = Some(observer)
        applyDomLanguage()

  def scrollContentToTop(): Unit =
    try
      // In this layout, the chapter content scrolls inside .main-content.
      dom.window.scrollTo(0, 0)
      dom.document.querySelector(".main-content") match
        case el: org.scalajs.dom.HTMLElement => el.scrollTop = 0
        case _ => ()
    catch
      case _: Throwable => ()

  try
    dom.window.addEventListener("hashchange", (_: dom.Event) =>
      currentHashVar.set(dom.window.location.hash)
      scrollContentToTop()
    )
  catch
    case _: Throwable => ()

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
      "Scanne die QR-Codes und beschreibe deren Inhalte in den Textfeldern unter den QR Codes. Beschreibe die Gemeinsamkeiten im großen Eingabefeld.",
      "Welche Aussage trifft auf QR-Codes zu?",
      "Beschreibe in mindestens 10 Worten, welche Vorstellungen du davon hast, wie QR-Codes funktionieren."
    ),
    "nachricht" -> List(
      "Beschreibe, wie ein QR-Code aufgebaut ist. Vermute, wie die Daten im QR-Code dargestellt werden.",
      "Überlege dir eine eigene Kodierung für die Buchstaben 'M', 'I', 'S', 'P'. Nutze die Pixel, um deine Kodierung darzustellen.",
      "Schreibe das Wort 'MISSISSIPPI' mit deiner eigenen Kodierung aus Aufgabe 2.",
      "Erkläre die Nachteile einer eigenen, nicht standardisierten Kodierung.",
      "Kodiere das Wort 'INFO' mithilfe der ASCII-Tabelle.",
      "Nenne einen Vorteil der festen Länge von 8 Pixeln pro Buchstabe und erkläre, warum es sich um einen Vorteil handelt.",
      "Wie viele verschiedene Zeichen können mit 8 Pixeln dargestellt werden?",
      "Verschlüssele eine Nachricht mit QR-Code.",
      "Beschreibe, welche Beschränkungen dir beim Bearbeiten von Aufgabe 8 aufgefallen sind.",
      "Ziehe die Zahlen 1-8 auf die Felder im Grid (ein Raster von 2x4 Pixeln), um zu zeigen, in welcher Reihenfolge die Bits des ersten Buchstabens in Aufgabe 8 kodiert werden.",
      "Beschriebe, wie die Länge der Nachricht im QR-Code gespeichert wird.",
      "Vermute, warum du nicht alle Pixel zur Verwendung für die Nachricht hast.",
      "Fasse in eigenen Worten zusammen, wie QR-Codes aufgebaut sind.\n\nGehe dabei auf folgende Punkte ein:\n- die Bestandteile des QR-Codes\n- wie Nachrichten kodiert und gespeichert werden\n- wie Buchstaben in das Pixelmuster umgewandelt werden\n\nNutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt."
    ),
    "maskierung" -> List(
      "Beschreibe, was beim Scannen des QR-Codes passiert, und stelle begründete Vermutungen dazu an.",
      "Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze.",
      "Berechne durch Anwenden der XOR-Operation die korrekten maskierten Daten.",
      "Erläutere am Beispiel der Daten von Aufgabe 3, was die Probleme sind, wenn man nur eine feste Maske verwendet. Beschreibe zusätzlich eine mögliche Lösung, um diese Probleme zu umgehen.",
      "Erkläre die Berechnungsvorschrift (also welche Pixel schwarz gefärbt werden) einer Maske deiner Wahl.",
      "Vermute, woher der Scanner weiß, welche Maske angewandt wurde.",
      "Berechne im ersten Schritt die maskierten Daten. Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die beiden rechten Bereiche ein.",
      "Beschreibe, was dir bei der doppelten Maskierung aufgefallen ist. Erkläre, wofür diese Eigenschaft nützlich sein könnte.",
      "Erläutere an einem Beispiel, wie Maskierung und Demaskierung funktionieren.\n\nGehe dabei auf folgende Punkte ein:\n- die Probleme einer festen Maske\n- wie die beste Maske ausgewählt wird\n- wie die XOR-Operation dabei eingesetzt wird\n\nNutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt."
    ),
    "fehlerkorrektur" -> List(
      "Durch verschiedene Umstände kann es dazu kommen, dass bestimmte Teile des QR-Codes beschädigt werden und somit nicht mehr erkennbar sind. Vergleiche die drei QR-Codes. Vermute, welcher der drei QR-Codes durch einen Scanner gelesen werden kann. Begründe deine Vermutung.",
      "Überprüfe nun deine Vermutung, indem du die QR-Codes scannst. Stelle Vermutungen an, wie das umgesetzt wird.",
      "Vergleiche die beiden Situationen. Beurteile, welcher der beiden Fehler schwieriger zu korrigieren und erkennen ist. \nSituation 1: Du telst deine Adresse deinem Freund mit einer Notiz mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \nSituation 2: Du telst deine Adresse deinem Freund mit einer Notiz mit. Leider hast du dich bei der Hausnummer verschrieben und statt 13 steht dort 73.",
      "Eine Möglichkeit mit Fehlern umzugehen ist es, eine Prüfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gezählt und die Anzahl der Zeichen an das Ende angehangen. Ein Beispiel wäre, dass die Zeichenanzahl gezählt wird. Aus der Nachricht 'Hallo' würde dann die Nachricht 'Hallo5' werden. \nBeschreibe, welche Arten von Fehlern mit dieser Methode erkannt werden können. Begründe deine Antwort.",
      "Was sind die Probleme mit diesem Verfahren? Überlege dir dazu, wie die Nachricht 'Hallo5' mit einer Prüfsumme aussehen müsste.",
      "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden können am Beispiel der Nachricht '12345'. Gib die Nachricht an. (Tipp: Überlege dir, was du machst, wenn eine Information von einer Person im Gespräch nicht verstanden wurde.)",
      "Beschreibe jeweils, wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \na) Ursprüngliche Nachricht: '12' Nachricht mit Fehlerkorrektur: '1212' \nb) Ursprüngliche Nachricht: '123' Nachricht mit Fehlerkorrektur: '123123123' \nc) Ursprüngliche Nachricht: '1' Nachricht mit Fehlerkorrektur: '1111111111'",
      "Beschreibe, wie die Daten, welche für eine Nachricht verwendet werden können und das Fehlerkorrekturlevel zusammenhängen.",
      "Ergänze die Lücken im folgenden Text:",
      "Erkläre, wie in QR-Codes mehr Daten gespeichert werden können und welche Auswirkungen das auf die Fehlerkorrektur hat.",
      "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit einem Klick auf 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten(Versionsnummer + Maskennummer) in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben. \nBeachte, dass der QR Code nicht scannbar ist, da keine Maske auf den QR Code angewandt wird.",
      "Erkläre in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zusätzlichen Daten und dem Korrekturlevel ein. Erläutere zusätzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird. Nutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt."
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
      "Vergleiche die Vor- und Nachteile von QR-Codes bei sensiblen Daten (wie Bankdaten) mit denen bei öffentlichen Informationen (wie Website-Links). Nutze dafür 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt."
    ),
    "zusammenfassung" -> List(
      "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit den Checkboxen kannst du Metadaten anzeigen oder die Fehlerkorrektur-Pixel sehen. Teste verschiedene Eingaben und überprüfe das Ergebnis mit einem QR-Code Scanner.",
      "Beschreibe in eigenen Worten die Bestandteile eines QR-Codes und deren Funktion mit mindestens 20 Wörtern."
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

  def isAdminName(name: String): Boolean =
    name.trim.equalsIgnoreCase("admin")

  val isAdminModeSignal: Signal[Boolean] = studentNameVar.signal.map(isAdminName)

  def withAdminOverride(baseSignal: Signal[Boolean]): Signal[Boolean] =
    baseSignal.combineWith(isAdminModeSignal).map { case (baseValue, isAdmin) =>
      baseValue || isAdmin
    }

  val teacherNotes: Map[(String, Int), String] = Map(
    // Einführung
    ("einfuehrung", 1) -> "Vorwissen aktivieren: SuS scannen QR-Codes und beschreiben deren Inhalte.\nErwartete Ergebnisse: Webadressen, Texte und Bilder als Inhalte; schwarze/weiße Pixelmuster als Gemeinsamkeit.\nHinweis: Im großen Eingabefeld (Gemeinsamkeiten) muss das Wort \"QR\" enthalten sein, damit die Abgabe als korrekt gewertet wird.",
    ("einfuehrung", 2) -> "Wissensüberprüfung per Multiple Choice.\nErwartete Ergebnisse: Korrekte Aussage: QR-Codes können verschiedene Arten von Informationen speichern, nicht nur Webadressen.",
    ("einfuehrung", 3) -> "Offene Reflexion zu Vorannahmen der SuS.\nErwartete Ergebnisse: Individuelle Antworten; es gibt keine falschen Antworten – die Aufgabe dient der Diagnose des Vorwissens.",
    // Nachrichten
    ("nachricht", 1) -> "Erste Annäherung an den QR-Code-Aufbau.\nErwartete Ergebnisse: SuS formulieren Vermutungen zu Positionsmustern und Datenbereich.",
    ("nachricht", 2) -> "Kreative Kodierung entwickeln.\nErwartete Ergebnisse: Jeder Buchstabe erhält ein eindeutiges Muster; die Aufgabe ist offen und fördert Kreativität.",
    ("nachricht", 3) -> "Anwendung der eigenen Kodierung aus Aufgabe 2.\nErwartete Ergebnisse: Konsistente Anwendung der Kodierung; rechts neben der Kodierung sollte der passende Buchstabe erscheinen.",
    ("nachricht", 4) -> "Standardisierung begründen und Fachbegriff \"Kodierungsvorschrift\" anwenden.\nErwartete Ergebnisse: Ohne gemeinsamen Standard muss die Kodierungsvorschrift zusätzlich mitübertragen werden; ohne sie kann der Empfänger die Nachricht nicht dekodieren.",
    ("nachricht", 5) -> "Anwendung der ASCII-Tabelle.\nErwartete Ergebnisse: SuS kodieren 'INFO' korrekt in Binärdarstellung: I=01001001, N=01001110, F=01000110, O=01001111.\nHinweis: Die ASCII-Tabelle bei Bedarf kurz wiederholen.",
    ("nachricht", 6) -> "Vorteile einer festen Zeichenlänge erkennen.\nErwartete Ergebnisse: Eindeutige Trennung der Zeichen ohne zusätzliche Trennzeichen; feste Länge ermöglicht klare Dekodierung.\nHinweis: Dies könnte an späterer Stelle aufgegriffen und z.B. der Huffman-Kodierung (variable Länge) gegenübergestellt werden.",
    ("nachricht", 7) -> "Anwendung des Zählprinzips auf Binärkodierung.\nErwartete Ergebnisse: 2^8 = 256 mögliche Zeichen.",
    ("nachricht", 8) -> "Interaktive QR-Code-Erstellung beobachten.\nErwartete Ergebnisse: SuS erkennen, wie Eingaben den QR-Code verändern.",
    ("nachricht", 9) -> "Zeichenbeschränkung eines QR-Codes erkennen.\nErwartete Ergebnisse: Maximale Kapazität ist begrenzt durch Pixelanzahl; feste Bereiche für Positionsmuster stehen nicht für Nutzdaten zur Verfügung.",
    ("nachricht", 10) -> "Kodierung in QR-Codes mithilfe verschiedener Zickzack-Muster erklären.\nErwartete Ergebnisse: Siehe Infobox.",
    ("nachricht", 11) -> "Überprüfung wichtiger Bestandteile aus Aufgabe 8.\nErwartete Ergebnisse: Längeninformation: 8 Bit am Anfang der Nachricht geben die Zeichenanzahl in Binärdarstellung an.",
    ("nachricht", 12) -> "Erkennen, warum nicht alle Pixel für Nutzdaten verfügbar sind.\nErwartete Ergebnisse: Freie Aufgabe – hier können die unten stehenden Bereiche erkannt und beschrieben werden.\nHinweis: Das passende Bild ist auch auf dem Merkblatt enthalten.",
    ("nachricht", 13) -> "Zusammenfassung des Kapitels.\nErwartete Ergebnisse: Mindestens 30 Wörter; Bewertungsschwerpunkte: Aufbau des QR-Codes, Kodierung, Binärdarstellung.\nHinweis: Die Zusammenfassung erscheint auf dem Merkblatt der SuS.",
    // Maskierung
    ("maskierung", 1) -> "QR-Code ohne Maske ist nicht scannbar.\nErwartete Ergebnisse: Begründete Vermutungen, warum das Scannen scheitert (z. B. zu große schwarze Flächen, zu wenig Kontrast).",
    ("maskierung", 2) -> "XOR-Funktion durch Ausprobieren entdecken und Maskierung verstehen.\nErwartete Ergebnisse: 0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0.\nHinweis: Die Raster mit blauem Rahmen sind anklickbar.",
    ("maskierung", 3) -> "XOR-Berechnung auf Pixel anwenden.\nErwartete Ergebnisse: Pixelfarben Schritt für Schritt korrekt bestimmt; Ergebnis ist der maskierte Datenwert.\nHinweis: Die Bewertung ist nur korrekt, wenn alle Pixel einer Reihe korrekt sind.",
    ("maskierung", 4) -> "Problem einer festen Maske erkennen.\nErwartete Ergebnisse: Es können ungünstige Muster entstehen (viele schwarze Pixel nebeneinander); Lösungsidee: Mehrere Masken testen und die beste auswählen.",
    ("maskierung", 5) -> "Funktion von Metadaten im QR-Code verstehen.\nErwartete Ergebnisse: Es handelt sich um eine Freie Aufgabe. Ein mögliches Ergebnis ist, dass die Maske als Nummer im QR-Code gespeichert wird.",
    ("maskierung", 6) -> "Doppelte Maskierung berechnen und verstehen.\nErwartete Ergebnisse: Nach zwei XOR-Operationen erscheinen die Originaldaten wieder.\nHinweis: Die Korrektur funktioniert zeilenweise.",
    ("maskierung", 7) -> "Eigenschaft der doppelten Maskierung erkennen.\nErwartete Ergebnisse: Zweimaliges XOR ergibt die Ursprungsdaten zurück; dieselbe Operation wird zum Maskieren und Demaskieren verwendet.",
    ("maskierung", 8) -> "Zusammenfassung des Kapitels.\nErwartete Ergebnisse: Mindestens 30 Wörter; Bewertungsschwerpunkte: Probleme fester Maske, Auswahlprozess, XOR-Operation.",
    // Fehlerkorrektur
    ("fehlerkorrektur", 1) -> "Drei QR-Codes vergleichen und Vermutungen zu deren Scannbarkeit aufstellen.\nErwartete Ergebnisse: Begründete Einschätzung, welche der Codes (mit Stickern, unbeschadet, mit Logo) scannbar sind.",
    ("fehlerkorrektur", 2) -> "Scan-Test und erste Hypothesen zur Fehlerkorrektur formulieren.\nErwartete Ergebnisse: Eigene Vermutungen, wie Fehlerkorrektur technisch umgesetzt sein könnte.\nHinweis: Durch Bildschirmauflösung kann es zu Abweichungen kommen; das ist fachlich nutzbar.",
    ("fehlerkorrektur", 3) -> "Fehlertypen unterscheiden.\nErwartete Ergebnisse: Ausfallfehler (Fleck sichtbar) vs. Inhaltsfehler (falsche Zahl, nicht sofort auffällig); Situation 2 ist schwerer zu detektieren.",
    ("fehlerkorrektur", 4) -> "Prüfsumme als Konzept einführen.\nErwartete Ergebnisse: SuS erkennen, dass Prüfsummen nur Ausfallfehler erkennen, aber nicht korrigieren können.",
    ("fehlerkorrektur", 5) -> "Mehrdeutigkeit der Prüfsumme erkennen.\nErwartete Ergebnisse: 'Hallo5' — ist die Nachricht 'Hallo' mit Prüfsumme '5', oder 'Hallo5' mit Prüfsumme '6'?",
    ("fehlerkorrektur", 6) -> "Redundanz als Lösungsprinzip entdecken.\nErwartete Ergebnisse: SuS kommen selbst auf das Prinzip der Wiederholung (Nachricht doppelt senden). Es muss 1234512345 angegeben werden.",
    ("fehlerkorrektur", 7) -> "Anteil unleserlicher Daten berechnen.\nErwartete Ergebnisse: a) 1/2 = 50 %, b) 2/3 = 66 %, c) 9/10 = 90 %.",
    ("fehlerkorrektur", 8) -> "Trade-off zwischen Fehlerkorrektur und Datenkapazität verstehen.\nErwartete Ergebnisse: Mehr Fehlerkorrektur bedeutet weniger Platz für Nutzdaten; hohes Korrekturlevel ist nur sinnvoll, wenn viele Fehler erwartet werden.",
    ("fehlerkorrektur", 9) -> "Wissen zu Fehlerkorrektur und Fehlererkennung festigen.\nErwartete Ergebnisse: Korrekt ausgefüllter Lückentext.",
    ("fehlerkorrektur", 10) -> "Zusammenhang zwischen Datenmenge, Fehlerkorrektur und QR-Code-Version erklären.\nErwartete Ergebnisse: Mehr Daten → höhere Version → größerer QR-Code; Balance zwischen Datenmenge, Fehlerkorrektur und Lesbarkeit erkannt.",
    ("fehlerkorrektur", 11) -> "Interaktiven QR-Code mit Fehlerkorrektur-Metadaten erkunden.\nErwartete Ergebnisse: SuS testen verschiedene Eingaben und beobachten, welche Pixel als Fehlerkorrektur-Pixel markiert werden.",
    ("fehlerkorrektur", 12) -> "Zusammenfassung des Kapitels.\nErwartete Ergebnisse: Mindestens 30 Wörter; Bewertungsschwerpunkte: Reed-Solomon-Prinzip, Fehlertoleranzlevel, Auswirkung auf Datenkapazität.",
    // Praxisanwendungen
    ("praxisanwendungen", 1) -> "Breites Vorwissen zu QR-Anwendungen aktivieren.\nErwartete Ergebnisse: Drei begründete Anwendungsfälle; mögliche Beispiele: Werbung, Schulalltag, Tickets, Produktinformationen.",
    ("praxisanwendungen", 2) -> "Konkrete Schulanwendung planen.\nErwartete Ergebnisse: Beschreibung von Ziel, Inhalt und Ort des QR-Codes.",
    ("praxisanwendungen", 3) -> "Manuelle Ausgangskontrolle analysieren.\nErwartete Ergebnisse: Je 2 Vor- und Nachteile; Themen wie Datenschutz, Aufwand und Fehleranfälligkeit.",
    ("praxisanwendungen", 4) -> "QR-Code-Lösung für die Ausgangskontrolle entwerfen.\nErwartete Ergebnisse: Beschreibung, welche Daten benötigt werden und wie die Automatisierung funktioniert.",
    ("praxisanwendungen", 5) -> "Kritische Stellungnahme zum Einsatz von QR-Codes verfassen.\nErwartete Ergebnisse: Abwägung von Datenschutz und Nutzen; differenzierte Position.",
    ("praxisanwendungen", 6) -> "Sicherheitsbedenken zur Manipulation analysieren.\nErwartete Ergebnisse: Integritätsprüfung, Plausibilitätskontrollen und organisatorische Maßnahmen (z. B. Abgleich mit Listen) als Lösungsansätze.",
    ("praxisanwendungen", 7) -> "Robustheit von QR-Codes gegenüber Beschädigungen einordnen.\nErwartete Ergebnisse: Fehlerkorrektur kann teilweise beschädigte Codes lesbar halten; Grenzen der Robustheit benannt.",
    ("praxisanwendungen", 8) -> "Banking-Beispiel kritisch prüfen.\nErwartete Ergebnisse: Sensible Daten gehören nicht ungeschützt in QR-Codes; Datenschutz und Missbrauchsrisiko erkannt; PIN/Passwort niemals codieren.",
    ("praxisanwendungen", 9) -> "Transfer auf neue Kontexte üben.\nErwartete Ergebnisse: Ein weiteres begründetes Negativbeispiel, das nicht nur bekannte Fälle wiederholt.",
    ("praxisanwendungen", 10) -> "Sensible Daten vs. öffentliche Informationen vergleichen.\nErwartete Ergebnisse: Mindestens 30 Wörter; differenzierte Risiko-Nutzen-Abwägung.",
    ("praxisanwendungen", 11) -> "VCard-Praxisaufgabe: QR-Code mit Kontaktdaten erstellen und testen.\nErwartete Ergebnisse: Funktionierender QR-Code mit Testdaten.\nHinweis: Keine echten Persönlichkeitsdaten verwenden; Testdaten genügen.",
    ("praxisanwendungen", 12) -> "VCard-Inhalte reflektieren.\nErwartete Ergebnisse: SuS nennen weitere mögliche VCard-Felder (z.\u00a0B. Adresse, Geburtstag, Webseite) und begründen deren Nutzen.",
    // Zusammenfassung
    ("zusammenfassung", 1) -> "Gesamtmodell am interaktiven QR-Code wiederholen und verknüpfen.\nErwartete Ergebnisse: Nutzdaten, Metadaten, Maske und Fehlerkorrektur korrekt zugeordnet und erklärt.",
    ("zusammenfassung", 2) -> "Kapitelübergreifende Zusammenfassung in eigenen Worten verfassen.\nErwartete Ergebnisse: Mindestens 20 Wörter; Fachbegriffe korrekt genutzt; Funktionen der Bereiche klar zugeordnet.",
    // Barcodes
    ("barcodes", 1) -> "Aufbau eines Barcodes recherchieren und strukturiert beschreiben.\nErwartete Ergebnisse: Start/Stop-Zeichen, Balkenbreiten und Codierlogik korrekt erklärt.",
    ("barcodes", 2) -> "Fehlererkennung bei Barcodes erklären und Grenzen gegenüber QR-Codes herausarbeiten.\nErwartete Ergebnisse: Prüfziffer als Mechanismus beschrieben; Unterschied zur Reed-Solomon-Fehlerkorrektur erkannt.",
    ("barcodes", 3) -> "Barcode und QR-Code fachlich vergleichen.\nErwartete Ergebnisse: Je zwei Gemeinsamkeiten und Unterschiede anhand klarer Kriterien.",
    ("barcodes", 4) -> "Begründete Entscheidung für Einsatzszenarien treffen.\nErwartete Ergebnisse: Kontextabhängige Auswahl statt pauschaler Aussage.",
  )

  val teacherNotesEn: Map[(String, Int), String] = Map(
    ("einfuehrung", 1) -> "Activate prior knowledge: students scan QR codes and describe their contents.\nExpected results: web addresses, text, and images as contents; black-and-white pixel patterns as the common feature.\nNote: The large input field (similarities) must contain the word \"QR\" for the submission to be marked as correct.",
    ("einfuehrung", 2) -> "Knowledge check via multiple choice.\nExpected results: Correct statement: QR codes can store different types of information, not just web addresses.",
    ("einfuehrung", 3) -> "Open reflection on students' prior assumptions.\nExpected results: Individual answers; there are no wrong answers – this task diagnoses prior knowledge.",
    ("nachricht", 1) -> "First approach to QR code structure.\nExpected results: Students formulate hypotheses about position patterns and data areas.",
    ("nachricht", 2) -> "Develop a creative encoding.\nExpected results: Each letter gets a unique pattern; the task is open and supports creativity.",
    ("nachricht", 3) -> "Apply the custom encoding from task 2.\nExpected results: Consistent use of the encoding; the matching letter should appear to the right of the encoding.",
    ("nachricht", 4) -> "Explain why standardization is necessary and apply the term \"encoding rule\".\nExpected results: Without a shared standard, the encoding rule must also be transmitted; without it, the receiver cannot decode the message.",
    ("nachricht", 5) -> "Apply the ASCII table.\nExpected results: Students encode 'INFO' correctly in binary: I=01001001, N=01001110, F=01000110, O=01001111.\nNote: Briefly review the ASCII table if needed.",
    ("nachricht", 6) -> "Recognise the advantages of fixed character length.\nExpected results: Clear separation of characters without delimiters; fixed length enables unambiguous decoding.\nNote: This could be revisited later and contrasted with Huffman coding (variable length).",
    ("nachricht", 7) -> "Apply the counting principle to binary encoding.\nExpected results: 2^8 = 256 possible characters.",
    ("nachricht", 8) -> "Observe interactive QR code creation.\nExpected results: Students recognise how different inputs change the QR code.",
    ("nachricht", 9) -> "Recognise the character limit of a QR code.\nExpected results: Maximum capacity is limited by pixel count; fixed areas for position markers are not available for payload data.",
    ("nachricht", 10) -> "Explain the encoding in QR codes using different zigzag patterns.\nExpected results: See info box.",
    ("nachricht", 11) -> "Check whether key components from task 8 were recognised.\nExpected results: Length info: 8 bits at the beginning store the character count in binary.",
    ("nachricht", 12) -> "Understand why not all pixels are available for payload data.\nExpected results: Open task – the areas below can be recognised and described.\nNote: The corresponding image is also included on the worksheet.",
    ("nachricht", 13) -> "Chapter summary.\nExpected results: At least 50 words; assessment focus: QR structure, encoding, and binary representation.\nNote: The summary appears on the students' reference sheet.",
    ("maskierung", 1) -> "Recognise that a QR code without a mask is not scannable.\nExpected results: Reasoned hypotheses about why scanning fails (e.g., too many large black areas, low contrast).",
    ("maskierung", 2) -> "Discover the XOR function through experimentation and understand masking.\nExpected results: 0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0.\nNote: The blue-framed grids are clickable.",
    ("maskierung", 3) -> "Apply XOR to pixels.\nExpected results: Pixel colors determined step by step; result is the masked data value.\nNote: Assessment is only correct if all pixels in a row are correct.",
    ("maskierung", 4) -> "Recognise the problem of a fixed mask.\nExpected results: Unfavorable patterns can occur (many adjacent black pixels); solution idea: test several masks and choose the best one.",
    ("maskierung", 5) -> "Understand the function of metadata in QR codes.\nExpected results: This is an open task. One possible result is that the mask is stored as a number in the QR code.",
    ("maskierung", 6) -> "Calculate and understand double masking.\nExpected results: After two XOR operations, original data reappears.\nNote: Correction works row by row.",
    ("maskierung", 7) -> "Recognise the property of double masking.\nExpected results: Applying XOR twice restores the original data (Ursprungsdaten); the same operation is used for masking and demasking.",
    ("maskierung", 8) -> "Chapter summary.\nExpected results: At least 30 words; assessment focus: problems of fixed masks, selection process, and XOR operation.",
    ("fehlerkorrektur", 1) -> "Compare three QR codes and form hypotheses about their scannability.\nExpected results: Reasoned assessment of which codes (with stickers, undamaged, with logo) are scannable.",
    ("fehlerkorrektur", 2) -> "Scan test and formulate first hypotheses about error correction.\nExpected results: Own hypotheses on how error correction might work technically.\nNote: Screen resolution can cause deviations; this can be used productively.",
    ("fehlerkorrektur", 3) -> "Differentiate between error types.\nExpected results: Erasure error (visible blot) vs. substitution error (wrong number, not obvious at first); situation 2 is harder to detect.",
    ("fehlerkorrektur", 4) -> "Introduce checksums as a concept.\nExpected results: Students recognise that checksums can detect but not correct errors.",
    ("fehlerkorrektur", 5) -> "Recognise checksum ambiguity.\nExpected results: Is 'Hallo5' the message 'Hallo' with checksum '5', or 'Hallo5' with checksum '6'?",
    ("fehlerkorrektur", 6) -> "Discover redundancy as a solution principle.\nExpected results: Students arrive at the principle of repetition (send the message twice) on their own. The answer must include 1234512345.",
    ("fehlerkorrektur", 7) -> "Calculate the proportion of unreadable data.\nExpected results: a) 1/2 = 50%, b) 2/3 = 66%, c) 9/10 = 90%.",
    ("fehlerkorrektur", 8) -> "Understand the trade-off between error correction and data capacity.\nExpected results: More error correction means less space for payload data; high correction levels are only useful when many errors are expected.",
    ("fehlerkorrektur", 9) -> "Consolidate knowledge about error correction and error detection.\nExpected results: Gap text correctly completed.",
    ("fehlerkorrektur", 10) -> "Explain the relationship between data volume, error correction, and QR code version.\nExpected results: More data → higher version → larger QR code; balance between data amount, error correction, and readability recognised.",
    ("fehlerkorrektur", 11) -> "Explore the interactive QR code with error correction metadata.\nExpected results: Students test different inputs and observe which pixels are marked as error-correction pixels.",
    ("fehlerkorrektur", 12) -> "Chapter summary.\nExpected results: At least 30 words; assessment focus: Reed-Solomon principle, tolerance levels, and data capacity impact.",
    ("praxisanwendungen", 1) -> "Activate broad prior knowledge about QR applications.\nExpected results: Three justified application cases; possible examples: advertising, school routines, tickets, product information.",
    ("praxisanwendungen", 2) -> "Plan a concrete school application.\nExpected results: Description of the goal, QR content, and placement.",
    ("praxisanwendungen", 3) -> "Analyse the manual school-exit control.\nExpected results: Two pros and two cons; themes: privacy, effort, error-proneness.",
    ("praxisanwendungen", 4) -> "Design a QR-based solution for exit control.\nExpected results: Description of which data is needed and how automation could work.",
    ("praxisanwendungen", 5) -> "Write a critical position on using QR codes.\nExpected results: Weighing privacy and usefulness; differentiated position.",
    ("praxisanwendungen", 6) -> "Analyse security concerns about manipulation.\nExpected results: Integrity checks, plausibility checks, and organisational measures (e.g., list matching) as solution approaches.",
    ("praxisanwendungen", 7) -> "Assess QR code robustness against physical damage.\nExpected results: Error correction can keep partly damaged codes readable; robustness limits named.",
    ("praxisanwendungen", 8) -> "Critically assess the banking example.\nExpected results: Sensitive data must not be stored unprotected in QR codes; privacy and misuse risk recognised; PIN/password must never be encoded.",
    ("praxisanwendungen", 9) -> "Practise transfer to new contexts.\nExpected results: Another justified negative example that goes beyond known cases.",
    ("praxisanwendungen", 10) -> "Compare sensitive data vs. public information.\nExpected results: At least 50 words; differentiated risk-benefit evaluation.",
    ("praxisanwendungen", 11) -> "VCard practice task: create and test a QR code with contact data.\nExpected results: Working QR code with test data.\nNote: Use test data only, not real personal data.",
    ("praxisanwendungen", 12) -> "Reflect on VCard contents.\nExpected results: Students name additional possible VCard fields (e.g. address, birthday, website) and justify their usefulness.",
    ("zusammenfassung", 1) -> "Review and link the complete model with the interactive QR code.\nExpected results: Payload data, metadata, masking, and error correction correctly assigned and explained.",
    ("zusammenfassung", 2) -> "Write a cross-chapter summary in own words.\nExpected results: At least 20 words; correct terminology; functions of each area clearly assigned.",
    ("barcodes", 1) -> "Research and describe barcode structure systematically.\nExpected results: Start/stop markers, bar widths, and coding logic correctly explained.",
    ("barcodes", 2) -> "Explain barcode error detection and work out its limits compared to QR codes.\nExpected results: Check digit described as mechanism; difference to Reed-Solomon error correction recognised.",
    ("barcodes", 3) -> "Compare barcodes and QR codes systematically.\nExpected results: Two similarities and two differences based on clear criteria.",
    ("barcodes", 4) -> "Make a justified decision for usage scenarios.\nExpected results: Context-dependent choice instead of blanket statements.",
  )

  val chapterTeacherGoals: Map[String, String] = Map(
    "einfuehrung" -> "Lernziele Kapitel Einführung:\n- QR-Codes im Alltag erkennen und erste Merkmale benennen\n- Scanner-Nutzung sicher anwenden\n- Vorwissen und Vermutungen als Ausgangspunkt für das Lernen festhalten",
    "nachricht" -> "Lernziele Kapitel Nachricht:\n- Aufbau eines QR-Codes beschreiben und dabei Bereiche eines QR-Codes verschiedenen Aufgaben zuordnen\n- Eigene Kodierung entwickeln und Grenzen reflektieren\n- ASCII/UTF-8 als Standard einordnen und anwenden\n- Notwendigkeit von Bit-Reihenfolgen im QR-Code und Längeninformation erklären",
    "maskierung" -> "Lernziele Kapitel Maskierung:\n- XOR auf schwarze und weiße Pixel anwenden\n- kodierte Daten dekodieren\n- Problem einer einzigen festen Maske erklären und Lösungsvorschläge nennen\n- Auswahl der besten Maske begründen",
    "fehlerkorrektur" -> "Lernziele Kapitel Fehlerkorrektur:\n- Fehlertypen unterscheiden\n- Redundanz als Prinzip der Fehlerkorrektur erklären\n- Trade-off zwischen Korrekturlevel und Datenkapazität beschreiben\n- Reed-Solomon-Level (L/M/Q/H) einordnen",
    "praxisanwendungen" -> "Lernziele Kapitel Praxisanwendungen:\n- Sinnvolle und kritische QR-Code-Anwendungen bewerten\n- Datenschutz, Aufwand und Automatisierung gegeneinander abwägen\n- Eigene Lösungsvorschläge für Schulkontexte entwickeln",
    "zusammenfassung" -> "Lernziele Kapitel Zusammenfassung:\n- Kernkonzepte (Aufbau, Kodierung, Maskierung, Fehlerkorrektur) vernetzen\n- Funktionen der QR-Code-Bestandteile sicher erklären\n- Inhalte in eigenen Worten zusammenfassen\n- Ein Merkblatt erstellen, das mit eigenen Antworten gefüllt ist",
    "barcodes" -> "Lernziele Kapitel Barcodes:\n- Aufbau und Eigenschaften von Barcodes recherchieren\n- Barcode und QR-Code fachlich vergleichen\n- Eignung je nach Anwendung begründet bewerten\nDidaktischer Hinweis: Als Zusatzaufgabe nutzbar - SuS müssen selbstständig googeln und es sind keine automatisierten Kontrollen vorhanden."
  )

  val chapterTeacherGoalsEn: Map[String, String] = Map(
    "einfuehrung" -> "Chapter goals: Introduction\n- Recognize QR codes in everyday life and describe key features\n- Use scanner tools reliably\n- Use prior knowledge and hypotheses as a learning starting point",
    "nachricht" -> "Chapter goals: Message\n- Describe the structure of a QR code and assign areas of a QR code to their respective functions\n- Develop own encodings and reflect on limits\n- Classify and apply ASCII/UTF-8 as a standard\n- Explain the necessity of bit order and length information in QR codes",
    "maskierung" -> "Chapter goals: Masking\n- Apply XOR to black and white pixels\n- decode encoded data\n- Problem of a single fixed mask explained and solution approaches named\n- Justify how the best mask is selected",
    "fehlerkorrektur" -> "Chapter goals: Error correction\n- Distinguish error types\n- Explain redundancy as an error-correction principle\n- Describe the trade-off between correction level and data capacity\n- Classify Reed-Solomon levels (L/M/Q/H)",
    "praxisanwendungen" -> "Chapter goals: Practical applications\n- Evaluate useful and critical QR applications\n- Weigh privacy, effort, and automation\n- Develop own solution ideas for school contexts",
    "zusammenfassung" -> "Chapter goals: Summary\n- Connect core concepts (structure, encoding, masking, error correction)\n- Explain QR components confidently\n- Summarize content in own words\n- Create a worksheet summary with own answers",
    "barcodes" -> "Chapter goals: Barcodes\n- Research barcode structure and properties\n- Compare barcode and QR code conceptually\n- Evaluate suitability by scenario\nDidactic note: Can be used as an extension task - students must research independently and no automated checks are available."
  )

  def teacherNoteBlock(chapter: String, index: Int): Element =
    div(
      child <-- isAdminModeSignal.combineWith(languageVar.signal).map { case (isAdmin, lang) =>
        if isAdmin then
          val note = if lang == "en" then teacherNotesEn.get((chapter, index)).orElse(teacherNotes.get((chapter, index))) else teacherNotes.get((chapter, index))
          note.map { content =>
            div(
              styleAttr := "margin-top: 1rem; padding: 0.75rem 1rem; background: #fff8e1; border-left: 4px solid #f9a825; border-radius: 0 4px 4px 0; font-size: 0.88rem;",
              p(styleAttr := "font-weight: 700; margin: 0 0 0.3rem 0; color: #e65100;", if lang == "en" then "Teacher note" else "Lehrerhinweis"),
              p(styleAttr := "margin: 0; white-space: pre-wrap; color: #4e342e;", content)
            )
          }.getOrElse(emptyNode)
        else
          emptyNode
      }
    )

  def chapterTeacherGoalsBlock(chapter: String): Element =
    div(
      child <-- isAdminModeSignal.combineWith(languageVar.signal).map { case (isAdmin, lang) =>
        if isAdmin then
          val goals = if lang == "en" then chapterTeacherGoalsEn.get(chapter).orElse(chapterTeacherGoals.get(chapter)) else chapterTeacherGoals.get(chapter)
          goals.map { text =>
            div(
              styleAttr := "margin: 0.8rem 0 1.2rem 0; padding: 0.85rem 1rem; background: #eef7ff; border-left: 4px solid #2f6fb6; border-radius: 0 4px 4px 0;",
              h3(styleAttr := "margin: 0 0 0.4rem 0; color: #1f4f86; font-size: 1rem;", if lang == "en" then "Teacher note: Learning goals" else "Lehrerhinweis: Lernziele"),
              p(styleAttr := "margin: 0; white-space: pre-wrap; color: #1f2f3f;", text)
            )
          }.getOrElse(emptyNode)
        else
          emptyNode
      }
    )

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
  def renderQRCodeExercise(exerciseNumber: Int, chapter: String, taskText: String, explanation: String): Element =
    val initialText =
      if chapter.nonEmpty then
        loadFromLocalStorage(chapter)
          .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
          .getOrElse("")
      else
        ""
    val messageTextVar = Var(initialText)
    val exceedsLimitVar = Var(false)
    val showLengthVar = Var(false)
    val maxChars = 17
    div(
      cls := "qr-text-input-section",
      h3(child.text <-- languageVar.signal.map(lang => if lang == "en" then s"Task $exerciseNumber" else s"Aufgabe $exerciseNumber")),
      p(child.text <-- languageVar.signal.map(lang => translatedNow(explanation, lang))),
      child <-- messageTextVar.signal.map { text =>
        if chapter.nonEmpty then
          persistExerciseAnswer(chapter, taskText, text)
        emptyNode
      },
      div(
        styleAttr := "margin-top: 1rem; display: flex; gap: 2rem; align-items: flex-start;",
        // Linke Spalte: Input und Checkbox
        div(
          styleAttr := "flex: 0 1 300px;",
          div(
            cls := "qr-input-container",
            input(
              typ := "text",
              placeholder <-- languageVar.signal.map(lang => translatedNow("Deine Nachricht hier...", lang)),
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
            child <-- Signal.combineWithFn(exceedsLimitVar.signal, languageVar.signal) { (exceeds, lang) =>
              if exceeds then
                div(
                  styleAttr := "color: red; font-weight: bold; margin-top: 0.5rem;",
                  translatedNow("Maximale Anzahl an Zeichen für den QR Code Typen erreicht", lang)
                )
              else
                emptyNode
            }
          ),
          child <-- Signal.combineWithFn(showLengthVar.signal, languageVar.signal) { (_, lang) =>
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
              span(translatedNow("Laenge anzeigen", lang))
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
      ),
      teacherNoteBlock(chapter, exerciseNumber)
    )
  end renderQRCodeExercise

  // QR Code Exercise with metadata button
  def renderQRCodeExerciseWithMetadata(
    exerciseNumber: Int,
    chapter: String,
    taskText: String,
    explanation: String,
    sharedMessageVar: Option[Var[String]] = None
  ): Element =
    val initialText =
      if chapter.nonEmpty then
        loadFromLocalStorage(chapter)
          .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))
          .getOrElse("")
      else
        ""
    val messageTextVar = sharedMessageVar.getOrElse(Var(initialText))
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
      h3(child.text <-- languageVar.signal.map(lang => if lang == "en" then s"Task $exerciseNumber" else s"Aufgabe $exerciseNumber")),
      p(child.text <-- languageVar.signal.map(lang => translatedNow(explanation, lang))),
      child <-- messageTextVar.signal.map { text =>
        if chapter.nonEmpty then
          persistExerciseAnswer(chapter, taskText, text)
        emptyNode
      },
      div(
        styleAttr := "margin-top: 1rem; display: flex; gap: 2rem; align-items: flex-start;",
        // Linke Spalte: Input und Checkboxen
        div(
          styleAttr := "flex: 0 1 300px;",
          div(
            cls := "qr-input-container",
            input(
              typ := "text",
              placeholder <-- languageVar.signal.map(lang => translatedNow("Deine Nachricht hier...", lang)),
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
            child <-- Signal.combineWithFn(exceedsLimitVar.signal, languageVar.signal) { (exceeds, lang) =>
              if exceeds then
                div(
                  styleAttr := "color: red; font-weight: bold; margin-top: 0.5rem;",
                  translatedNow("Maximale Anzahl an Zeichen für den QR Code Typen erreicht", lang)
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
              span(child.text <-- languageVar.signal.map(lang => translatedNow("Metadaten anzeigen", lang)), styleAttr := "font-weight: 500;")
            ),
            label(
              styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 1rem; background-color: #bbdefb; border-radius: 4px; border: 1px solid #64b5f6; user-select: none; white-space: nowrap;",
              input(
                typ := "checkbox",
                checked <-- errorCorrectionActive.signal,
                onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> errorCorrectionActive.writer,
                styleAttr := "cursor: pointer;"
              ),
              span(child.text <-- languageVar.signal.map(lang => translatedNow("Fehlerkorrektur anzeigen", lang)), styleAttr := "font-weight: 500;")
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
      ),
      teacherNoteBlock(chapter, exerciseNumber)
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

    val lengthBitPositions: Set[(Int, Int)] =
      (0 until 8)
        .flatMap { idx =>
          val posIdx = 4 + idx
          if posIdx < dataPositions.length then Some(dataPositions(posIdx)) else None
        }
        .toSet

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
            val isLengthBit = showLength && lengthBitPositions.contains((rowIdx, colIdx))
            val bgColor =
              if isLengthBit then
                if cellValue == 2 then "#1565c0" else "#bbdefb"
              else if isBlack then
                "black"
              else
                "white"
            val textColor = if isLengthBit || isBlack then "white" else "gray"
            div(
              styleAttr := s"width: 24px; height: 24px; background: $bgColor; display: flex; align-items: center; justify-content: center; font-size: 8px; color: $textColor; font-weight: bold; overflow: hidden; ${if isLastChar then "outline: 2px solid red;" else ""}",
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
    // Keep additional stored tasks so answers are not lost if a task text changed.
    val knownTasks = allExercisesForChapter.toSet
    val additionalExercises = data.exercises.filterNot(ex => knownTasks.contains(ex.task))
    data.copy(exercises = sortedExercises ++ additionalExercises)

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

  case class ExerciseStatus(lastCheck: Option[Boolean], showSolution: Boolean, wrongAttempts: Int)

  def exerciseStatusKey(chapter: String, taskText: String): String =
    s"qr-status-$chapter-${taskText.hashCode}"

  def loadExerciseStatus(chapter: String, taskText: String): ExerciseStatus =
    if chapter.isEmpty then
      ExerciseStatus(None, false, 0)
    else
      try
        val stored = dom.window.localStorage.getItem(exerciseStatusKey(chapter, taskText))
        if stored != null then
          val parsed = scala.scalajs.js.JSON.parse(stored)
          val lastCheckValue = parsed.asInstanceOf[scala.scalajs.js.Dynamic].lastCheck
          val lastCheck = if lastCheckValue == null || lastCheckValue == scala.scalajs.js.undefined then None else Some(lastCheckValue.asInstanceOf[Boolean])
          val showSolutionValue = parsed.asInstanceOf[scala.scalajs.js.Dynamic].showSolution
          val showSolution = if showSolutionValue == null || showSolutionValue == scala.scalajs.js.undefined then false else showSolutionValue.asInstanceOf[Boolean]
          val wrongAttemptsValue = parsed.asInstanceOf[scala.scalajs.js.Dynamic].wrongAttempts
          val wrongAttempts = if wrongAttemptsValue == null || wrongAttemptsValue == scala.scalajs.js.undefined then 0 else wrongAttemptsValue.toString.toIntOption.getOrElse(0)
          ExerciseStatus(lastCheck, showSolution, wrongAttempts)
        else
          ExerciseStatus(None, false, 0)
      catch
        case _: Throwable => ExerciseStatus(None, false, 0)

  def saveExerciseStatus(chapter: String, taskText: String, status: ExerciseStatus): Unit =
    if chapter.nonEmpty then
      try
        val json = scala.scalajs.js.JSON.stringify(
          scala.scalajs.js.Dynamic.literal(
            lastCheck = status.lastCheck.map(_.asInstanceOf[scala.scalajs.js.Any]).orNull,
            showSolution = status.showSolution,
            wrongAttempts = status.wrongAttempts
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
    val taskText = "Ziehe die Zahlen 1-8 auf die Felder im Grid (ein Raster von 2x4 Pixeln), um zu zeigen, in welcher Reihenfolge die Bits des ersten Buchstabens in Aufgabe 8 kodiert werden."
    val previewCharVar: Var[String] = Var("")

    def parseSavedGrid(answer: String): Map[(Int, Int), Int] =
      val gridPart = answer.split(";grid=", 2).lift(1).getOrElse("")
      if gridPart.isBlank then
        Map.empty
      else
        gridPart
          .split("\\|")
          .toList
          .flatMap { entry =>
            entry.split(":", 2) match
              case Array(posPart, valuePart) =>
                posPart.split(",", 2) match
                  case Array(rowPart, colPart) =>
                    (rowPart.toIntOption, colPart.toIntOption, valuePart.toIntOption) match
                      case (Some(r), Some(c), Some(v)) if r >= 0 && r < rows && c >= 0 && c < cols && v >= 1 && v <= 8 =>
                        Some((r, c) -> v)
                      case _ => None
                  case _ => None
              case _ => None
          }
          .toMap

    def serializeGridState(grid: Map[(Int, Int), Int], isCompleted: Boolean): String =
      val encodedGrid =
        (0 until rows).flatMap { r =>
          (0 until cols).flatMap { c =>
            grid.get((r, c)).map(v => s"$r,$c:$v")
          }
        }.mkString("|")
      s"completed=$isCompleted;grid=$encodedGrid"

    val savedTaskAnswer: Option[String] =
      loadFromLocalStorage(chapter)
        .flatMap(_.exercises.find(_.task == taskText).flatMap(_.answer))

    val loadedGrid: Map[(Int, Int), Int] = savedTaskAnswer.map(parseSavedGrid).getOrElse(Map.empty)
    val loadedCompletedFromTask = savedTaskAnswer.exists(_.contains("completed=true"))
    
    // Correct solution based on zigzag pattern
    val correctSolution = Map(
      (0, 0) -> 8, (0, 1) -> 7,  // Top row: 8 7
      (1, 0) -> 6, (1, 1) -> 5,  // Row 2: 6 5
      (2, 0) -> 4, (2, 1) -> 3,  // Row 3: 4 3
      (3, 0) -> 2, (3, 1) -> 1   // Bottom row: 2 1
    )

    def toBinary8(value: Int): String =
      Integer.toBinaryString(value & 0xFF).reverse.padTo(8, '0').reverse

    def bitAtPosition(bitsMsbToLsb: String, posNumber: Int): Char =
      // Position 8 = MSB, Position 1 = LSB (passend zum 2x4-Raster aus Aufgabe 8)
      bitsMsbToLsb.charAt(8 - posNumber)
    
    // State: Map from grid position (row, col) to placed number (1-8)
    val gridNumbers: Var[Map[(Int, Int), Int]] = Var(loadedGrid)
    
    // State: Set of numbers that have been placed
    val placedNumbers: Signal[Set[Int]] = gridNumbers.signal.map(_.values.toSet)
    
    // State: Track error positions
    val errorPositions: Var[Set[(Int, Int)]] = Var(Set.empty)
    
    // Load completion status from LocalStorage directly
    val loadedAllCorrect: Boolean = 
      {
        try
          val stored = dom.window.localStorage.getItem(s"qr-chapter-$chapter-$taskKey")
          stored == "true" || loadedCompletedFromTask
        catch
          case _: Throwable =>
            loadedCompletedFromTask
      }
    
    // State: Track if all correct
    val allCorrect: Var[Boolean] = Var(loadedAllCorrect)
    val showPatternInfoVar = infoBoxVar(patternInfoKey)
    if loadedAllCorrect then
      markInfoBoxShown(patternInfoKey, showPatternInfoVar)
    
    div(
      h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 10" else "Aufgabe 10")),
      p(child.text <-- languageVar.signal.map(lang => translatedNow("Ziehe die Zahlen 1-8 auf die Felder im Grid (ein Raster von 2x4 Pixeln), um zu zeigen, in welcher Reihenfolge die Bits des ersten Buchstabens in Aufgabe 8 kodiert werden. Als Hilfe kannst du dir die UTF-8-Kodierung des Buchstabens anschauen, indem du ihn in das Feld rechts neben dem Pfeil eingibst.", lang))),
      child <-- Signal.combine(gridNumbers.signal, allCorrect.signal).map { case (gridMap, isCompleted) =>
        persistExerciseAnswer(chapter, taskText, serializeGridState(gridMap, isCompleted))
        emptyNode
      },
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
          ),
          // Zeichen -> ASCII Vorschau (rechts neben dem Pfeil)
          div(
            styleAttr := "display: flex; align-items: flex-start; gap: 1.4rem; padding: 1.2rem; border: 2px solid #c7d9f5; border-radius: 12px; background: #f7fbff;",
            div(
              styleAttr := "display: flex; flex-direction: column; gap: 0.5rem;",
              span(child.text <-- languageVar.signal.map(lang => translatedNow("Zeichen", lang)), styleAttr := "font-size: 1rem; color: #1f3b73; font-weight: 700;"),
              input(
                typ := "text",
                maxLength := 1,
                placeholder := "",
                styleAttr := "width: 64px; text-align: center; font-size: 1.4rem; padding: 0.35rem; border: 2px solid #4a9eff; border-radius: 6px; background: #e8f4fd; box-shadow: 0 0 0 3px rgba(74,158,255,0.25);",
                controlled(
                  value <-- previewCharVar.signal,
                  onInput.mapToValue.map(_.take(1)) --> previewCharVar.writer
                )
              )
            ),
            div(
              styleAttr := "display: flex; flex-direction: column; gap: 0.5rem;",
              span(child.text <-- languageVar.signal.map(lang => translatedNow("2x4 Raster", lang)), styleAttr := "font-size: 1rem; color: #1f3b73; font-weight: 700;"),
              child <-- previewCharVar.signal.map { inputValue =>
                val asciiOpt = inputValue.headOption.map(_.toInt)
                val bits = asciiOpt.map(toBinary8)
                div(
                  styleAttr := "display: grid; grid-template-columns: repeat(2, 34px); gap: 3px; background: #cfd8dc; padding: 3px; border-radius: 6px;",
                  (0 until rows).flatMap { rowIdx =>
                    (0 until cols).map { colIdx =>
                      val posNum = correctSolution((rowIdx, colIdx))
                      val bitChar = bits.map(b => bitAtPosition(b, posNum))
                      val isOn = bitChar.contains('1')
                      div(
                        styleAttr := s"width: 34px; height: 34px; background: ${if bits.isEmpty then "#ffffff" else if isOn then "#111111" else "#ffffff"}; border: 1px solid #607d8b;"
                      )
                    }
                  }.toList
                )
              }
            ),
            div(
              styleAttr := "display: flex; flex-direction: column; gap: 0.8rem; min-width: 180px;",
               child <-- previewCharVar.signal.combineWith(languageVar.signal).map { case (inputValue, lang) =>
                val asciiOpt = inputValue.headOption.map(_.toInt)
                val decimalText = asciiOpt.map(_.toString).getOrElse("-")
                val binaryText = asciiOpt.map(toBinary8).getOrElse("--------")
                div(
                  styleAttr := "display: flex; flex-direction: column; gap: 0.8rem;",
                  div(
                    styleAttr := "padding: 0.6rem 0.75rem; background: #e3f2fd; border: 1px solid #90caf9; border-radius: 8px;",
                     div(styleAttr := "font-size: 0.9rem; color: #0d47a1; font-weight: 700;", translatedNow("Dezimal", lang)),
                    div(styleAttr := "font-size: 1.4rem; font-weight: 700; color: #0d47a1;", decimalText)
                  ),
                  div(
                    styleAttr := "padding: 0.6rem 0.75rem; background: #e8f5e9; border: 1px solid #a5d6a7; border-radius: 8px;",
                     div(styleAttr := "font-size: 0.9rem; color: #1b5e20; font-weight: 700;", translatedNow("Binär (8 Bit)", lang)),
                    div(styleAttr := "font-size: 1.2rem; font-family: monospace; font-weight: 700; color: #1b5e20;", binaryText)
                  )
                )
              }
            )
          )
        ),
        // Buttons
        div(
          styleAttr := "display: flex; gap: 10px; align-items: center;",
          button(
             child.text <-- languageVar.signal.map(lang => translatedNow("Zurücksetzen", lang)),
            onClick --> (_ => {
              gridNumbers.set(Map.empty)
              errorPositions.set(Set.empty)
              allCorrect.set(false)
            }),
            styleAttr := "padding: 8px 16px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem;"
          ),
          button(
             child.text <-- languageVar.signal.map(lang => translatedNow("Abgeben", lang)),
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
                 child.text <-- languageVar.signal.map(lang => translatedNow("✓ Sehr gut! Alle Felder sind richtig.", lang)),
                styleAttr := "color: #4caf50; font-weight: bold; font-size: 0.95rem;"
              )
            else
              emptyNode
          }
        )
      ),
      // Info text shown when all correct
      child <-- withAdminOverride(showPatternInfoVar.signal).map { showInfo =>
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
      teacherNoteBlock("nachricht", 10)
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
        h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 2" else "Aufgabe 2")),
        p(child.text <-- languageVar.signal.map(lang => translatedNow("Überlege dir eine eigene Kodierung für die Buchstaben 'M', 'I', 'S', 'P'. Nutze die Pixel, um deine Kodierung darzustellen.", lang))),
        child <-- lastCheckVar.signal.map {
          case Some(false) => 
            p(
              child.text <-- languageVar.signal.map(lang => translatedNow("Alle Zeichen müssen eindeutig kodiert sein!", lang)),
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
                child.text <-- lastCheckVar.signal.combineWith(languageVar.signal).map {
                  case (Some(false), lang) => translatedNow("Nochmal versuchen", lang)
                  case (_, lang) => translatedNow("Abgeben", lang)
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
                  child.text <-- languageVar.signal.map(lang => translatedNow("Kodierung gespeichert", lang)),
                  styleAttr := "color: green; font-weight: bold;"
                )
              case _ => emptyNode
            }
          )
        )
      ),
      div(
        h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 3" else "Aufgabe 3")),
        p(child.text <-- languageVar.signal.map(lang => translatedNow("Schreibe das Wort 'MISSISSIPPI' mit deiner eigenen Kodierung aus Aufgabe 2.", lang))),
        locally {
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
          val missingEncodingVar: Var[Boolean] = Var(false)
          
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
                  child.text <-- lastCheckVar3.signal.combineWith(languageVar.signal).map {
                    case (Some(false), lang) => translatedNow("Nochmal versuchen", lang)
                    case (_, lang) => translatedNow("Abgeben", lang)
                  },
                  onClick --> { _ =>
                    val current = pixelGrid3.now()
                    val expected = encodingPatternVar.now()
                    
                    if lastCheckVar3.now() == Some(false) then
                      // Reset error state
                      lastCheckVar3.set(None)
                      errorRowsVar3.set(Set.empty)
                      isDisabledVar3.set(false)
                      missingEncodingVar.set(false)
                    else if expected.isEmpty || lastCheckVar.now() != Some(true) then
                      missingEncodingVar.set(true)
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
                child <-- lastCheckVar3.signal.combineWith(missingEncodingVar.signal).map {
                  case (Some(true), _) =>
                    span(
                      child.text <-- languageVar.signal.map(lang => translatedNow("Sehr gut, jetzt hast du deine erste Nachricht mit deiner selbstgewählten Kodierung kodiert!", lang)),
                      styleAttr := "color: green; font-weight: bold;"
                    )
                  case (Some(false), true) =>
                    span(
                      child.text <-- languageVar.signal.map(lang => translatedNow("Lege zuerst eine gültige Kodierung in Aufgabe 2 fest.", lang)),
                      styleAttr := "color: red; font-weight: bold;"
                    )
                  case (Some(false), false) =>
                    span(
                      child.text <-- languageVar.signal.map(lang => translatedNow("Überprüfe deine Eingabe nochmal!", lang)),
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
  )

  def appElement(): Element =
    div(
      cls := "app-container",
      onMountCallback(_ => initLanguageTranslationRuntime()),
      child <-- languageVar.signal.map { _ =>
        applyDomLanguage()
        emptyNode
      },
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
                h1(child.text <-- languageVar.signal.map(lang => chapterTitle("nachricht", lang))),
                TimeBadge(50),
                chapterTeacherGoalsBlock("nachricht"),
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
                  ),
                  wrongHint = Some("Hinweis: Betrachte den QR-Code genau. Welche Farben haben die einzelnen Pixel und wofür könnten sie stehen?")
                ),
                child <-- withAdminOverride(showInfoVar.signal).map { show =>
                  if show then
                    Infotext(
                      "Kodierung",
                      "Eine Kodierungsvorschrift beschreibt, wie Informationen (z.B. Buchstaben) in eine andere Form (z.B. Pixel) umgewandelt(kodiert) werden." +
                      "Bei QR-Codes werden Buchstaben in schwarze und weiße Pixel kodiert. Jeder Buchstabe bekommt dabei ein bestimmtes Muster. \n" +
                      "Jeder Buchstabe muss ein eindeutiges Muster haben, damit man die Nachricht später wieder zurück in die ursprüngliche Form umgewandelt (dekodieren) werden kann. \n" +
                      "In der Praxis wird hierfür kein Zufälliges Muster verwendet. Hier werden Buchstaben in Zahlen kodiert, welche anschließend in Bits (0 und 1) dargestellt werden. Dies geschieht über die Binärdarstellung der Zahl. " + 
                      "Zum Schluss werden die Bits als schwarze (1) und weiße (0) Pixel dargestellt."
                    )
                  else
                    emptyNode
                },
                AufgabeKodierung(),
                teacherNoteBlock("nachricht", 2),
                teacherNoteBlock("nachricht", 3),
              renderExercise(
                "Erkläre die Nachteile einer eigenen, nicht standardisierten Kodierung.",
                Set("zusätzlich", "Kodierungsvorschrift"),
                4,
                None,
                "nachricht",
                None,
                Some(() => markInfoBoxShown("qr-infobox-nachricht-4", showAsciiInfoVar)),
                solutionText = Some(
                  "Ohne Standard muss bei einer Kodierung zusätzlich auch die Kodierungsvorschrift (also wie Buchstaben in Pixel umgewandelt werden) mit übergeben werden. Sonst kennen andere die Kodierungsvorschrift nicht, und die Nachrichten kann nicht wieder dekodiert(Zurück in Buchstaben) umgewandelt werden."
                ),
                wrongHint = Some("Hinweis: Überlege, welche Zusatzinformation ohne gemeinsamen Standard mitgeschickt werden muss. Verwende dabei den Fachbegriff aus der Infobox Kodierung.")
              ),
              child <-- withAdminOverride(showAsciiInfoVar.signal).map { show =>
                if show then
                  Infotext(
                    "ASCII als Standard",
                    "ASCII steht für \"American Standard Code for Information Interchange\", auf Deutsch: \"Amerikanischer Standard-Code für den Informationsaustausch\". " +
                    "Es ist eine Kodierungsvorschrift, bei der jeder Buchstabe und jedes Sonderzeichen einer festen Zahl zugeordnet ist. " +
                    "Die Zahl wird als 8-Bit-Kombination (also 8 Nullen und Einsen) gespeichert.\n" +
                    "Da ASCII ein gemeinsamer Standard ist, muss die Kodierungsvorschrift nicht mitübertragen werden. " +
                    "Beide Seiten kennen sie bereits.\n" +
                    "QR-Codes nutzen UTF-8, eine Erweiterung von ASCII. UTF-8 kann auch Umlaute und viele weitere Zeichen darstellen."
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
                  h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 5" else "Aufgabe 5")),
                  p(child.text <-- languageVar.signal.map(lang => translatedNow("Kodiere das Wort 'INFO' mithilfe der ASCII-Tabelle. Rechts siehst du die ASCII-Tabelle, links kodierst du jeden Buchstaben (0 = weiß, 1 = schwarz).", lang))),
                  div(
                    cls := "aufgabe5-container",
                    renderPixelAreaWithLabels(
                      8,
                      4,
                      "Buchstaben zum kodieren",
                      List("I", "N", "F", "O"),
                      List(
                        "01001001", // I
                        "01001110", // N
                        "01000110", // F
                        "01001111"  // O
                      ),
                      chapter = "nachricht",
                      taskText = "Kodiere das Wort 'INFO' mithilfe der ASCII-Tabelle.",
                      wrongHint = Some((
                        "Hinweis: Schaue den Buchstaben I in der ASCII-Tabelle nach – er hat den Dezimalwert 73, was in Binär 01001001 ergibt. Wandle dann jede Stelle in einen Pixel um: 1 = schwarz, 0 = weiß. Gehe für alle anderen Buchstaben genauso vor.",
                        "Hint: Look up the letter I in the ASCII table – it has the decimal value 73, which is 01001001 in binary. Then convert each bit into a pixel: 1 = black, 0 = white. Use the same approach for each of the other letters."
                      ))
                    ),
                    table(
                      cls := "ascii-table aufgabe5-ascii-table",
                      thead(
                        tr(
                          th(child.text <-- languageVar.signal.map(lang => translatedNow("Zeichen", lang)), styleAttr := "text-align: center; padding: 0 14px;"),
                          th(child.text <-- languageVar.signal.map(lang => translatedNow("Dezimal", lang)), styleAttr := "text-align: center; padding: 0 14px;"),
                          th(child.text <-- languageVar.signal.map(lang => translatedNow("Binärdarstellung", lang)), styleAttr := "text-align: center; padding: 0 14px;")
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
                "Nenne einen Vorteil der festen Länge von 8 Pixeln pro Buchstabe und erkläre, warum es sich um einen Vorteil handelt.",
                Set("Trennung", "eindeutig", "Dekodierung", "Trennzeichen"),
                6,
                None,
                "nachricht",
                solutionText = Some(
                  "Ein Vorteil der festen Länge ist die eindeutige Trennung der Buchstaben ohne zusätzliche Trennzeichen. Da jeder Buchstabe immer genau 8 Pixel lang ist, ist eine klare Dekodierung möglich."
                ),
                wrongHint = Some("Hinweis: Woher würdest du wissen, wo der nächste Buchstabe anfängt, wenn ein Buchstabe 4 Pixel lang ist und ein anderer 10 Pixel?")
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
                wrongHint = Some("Jeder Pixel kann 2 Farben darstellen. Überlege dir als erstes eine Lösung für eine kleine Pixelanzahl.")
              ),
              renderQRCodeExercise(
                8,
                "nachricht",
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
                ),
                wrongHint = Some("Hinweis: Beziehe dich auf begrenzten Speicherplatz und reservierte QR-Code-Bereiche.")
              ),
              AufgabePixelAnordnung(),
              renderExercise(
                "Beschreibe, wie die Länge der Nachricht im QR-Code gespeichert wird.",
                Set("Anfang", "8", "Grid", "Raster"),
                11,
                None,
                "nachricht",
                solutionText = Some(
                  "Die Länge der Nachricht wird in einem festen Bereich am Anfang der Nachricht gespeichert. Dieser Bereich ist 8 Bits lang und gibt die Anzahl der Zeichen in Binärdarstellung an."
                ),
                wrongHint = Some("Hinweis: Suche den festen Bereich vor den Nutzdaten, in dem die Zeichenanzahl codiert wird.")
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
                  child <-- withAdminOverride(showQRFixedAreasInfoVar.signal).map { show =>
                    if show then
                      div(
                        cls := "infotext",
                         children <-- languageVar.signal.map { lang =>
                           List(
                             h3(translatedNow("Bereiche eines QR-Codes", lang)),
                             img(alt := "QR-Code Bereiche", src := resolveImageUrl("qr_Bereiche.png"), styleAttr := "max-width: 400px; margin: 1rem 0; border-radius: 4px;"),
                             p(translatedNow("Trotz verschiedenen Einsatzmöglichkeiten haben QR Codes einen ähnlichem Aussehen.", lang)),
                             p(
                               translatedNow(" Die roten Bereiche in den Ecken heißen ", lang),
                               span(translatedNow("Positionsmarker", lang), styleAttr := "color: #FF0000; font-weight: bold;"),
                               translatedNow(". Diese dienen dazu, dass die Handykamera den Anfang und das Ende des QR Codes erfassen kann.", lang)
                             ),
                             p(
                               translatedNow(" Die Blaue Stelle ist ein ", lang),
                               span(translatedNow("Ausrichtungsmarker", lang), styleAttr := "color: #0000FF; font-weight: bold;"),
                               translatedNow(". Dieser Hilft den QR Code auf unebenen Flächen (z.B Verpackungen) zu lesen.", lang)
                             ),
                             p(
                               translatedNow(" Der Grüne Bereich sind die ", lang),
                               span("Timing-Patterns", styleAttr := "color: #00AA00; font-weight: bold;"),
                               translatedNow("(Synchronisationslinien). Hier wechseln sich schwarze und weiße Pixel ab. Mithilfe dieser Anordnung wird die Größe des QR Codes bestimmt.", lang)
                             ),
                             p(
                               translatedNow(" Da viele verschiedene QR Code Versionen existieren, wird eine ", lang),
                               span(translatedNow("Versionsnummer", lang), styleAttr := "color: #FFCC00; font-weight: bold;"),
                               translatedNow(" festgehalten. Die ", lang),
                               span(translatedNow("Metadaten", lang), styleAttr := "color: #FF8800; font-weight: bold;"),
                               translatedNow(" sind Informationen über den Aufbau des QR Codes (z.B die Verwendete Maske).", lang)
                             ),
                             p(translatedNow(" Weiterhin haben alle QR Codes einen weißen Rand um den Code, damit dieser gelesen werden kann. Diesen Rand nennt man die Randzone. \nDie genauen bereiche können je nach QR Code Version variieren, aber es gibt immer bestimmte Bereiche, die nicht für die Nachricht verwendet werden können.", lang))
                           )
                         }
                      )
                    else
                      emptyNode
                  }
                )
              },
              renderExercise(
                "Fasse in eigenen Worten zusammen, wie QR-Codes aufgebaut sind.\n\nGehe dabei auf folgende Punkte ein:\n- die Bestandteile des QR-Codes\n- wie Nachrichten kodiert und gespeichert werden\n- wie Buchstaben in das Pixelmuster umgewandelt werden\n\nNutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt.",
                Set(),
                13,
                None,
                "nachricht",
                Some(() => markChapterCompleted("nachricht")),
                minWordCount = Some(30)
                
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
                h1(child.text <-- languageVar.signal.map(lang => chapterTitle("maskierung", lang))),
                TimeBadge(25),
                chapterTeacherGoalsBlock("maskierung"),
                renderExercise(
                   "Beschreibe, was beim Scannen des QR-Codes passiert, und stelle begründete Vermutungen dazu an.",
                  Set("unlesbar", "schwarze"),
                  1,
                  Some(img(src := resolveImageUrl("qr_unlesbar.png"), alt := "Unlesbar QR-Code", width := "300", height := "300")),
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-1", showMaskierungInfoVar)),
                  solutionText = Some(
                    "Der QR-Code wirkt unlesbar, weil viele schwarze Bereiche zusammenhaengen. Eine Maskierung sorgt spaeter fuer bessere Lesbarkeit."
                  ),
                  wrongHint = Some("Hinweis: Achte auf große gleichfarbige Flächen und erkläre, warum Scanner damit Probleme haben können.")
                ),
                child <-- withAdminOverride(showMaskierungInfoVar.signal).map { show =>
                  if show then
                    Infotext(
                      "Maskierung im QR-Code",
                      "Wie du vielleicht bemerkt hast, war der QR-Code von einem Scanner nicht lesbar. Um einen Besseren Kontrast zwischen weißen und schwarzen Pixeln herzustellen, werden Pixel nach einem bestimmten Muster(Maske) umgefärbt. " +
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
                  Set("Maske", "schwarz"),
                  4,
                  None,
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-4", showMaskierungAufgabe4InfoVar)),
                  solutionText = Some(
                    "Eine feste Maske kann je nach Daten ungünstige Muster erzeugen, z. B. dass viele benachbarte Pixel schwarz sind. " +
                    "Dadurch wird der QR-Code für einen Scanner schlechter lesbar. " +
                    "Eine mögliche Lösung ist, mehrere verschiedene Masken auszuprobieren und die Maske auszuwählen, die den besten Kontrast erzeugt."
                  ),
                  wrongHint = Some("Hinweis: Gehe darauf ein, wie ungünstige Muster entstehen können und wie diese aussehen.")
                ),
                child <-- withAdminOverride(showMaskierungAufgabe4InfoVar.signal).map { show =>
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
                  "Vermute, woher der Scanner weiß, welche Maske angewandt wurde.",
                  Set(" "),
                  5,
                  None,
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-6", showMaskierungAufgabe6InfoVar))
                ),
                child <-- withAdminOverride(showMaskierungAufgabe6InfoVar.signal).map { show =>
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
                  Set("ursprünglich", "Daten", "Ursprungsdaten", "Ursprüngliche", "Ausgangsdaten"),
                  7,
                  None,
                  "maskierung",
                  None,
                  Some(() => markInfoBoxShown("qr-infobox-maskierung-8", showMaskierungAufgabe8InfoVar)),
                  solutionText = Some(
                    "Wird die Maske zweimal angewandt, entstehen wieder die Ursprungsdaten. Das vereinfacht das Maskieren und Demaskieren, da für beides die gleiche Maske genutzt werden kann."
                  ),
                  wrongHint = Some("Hinweis: Vergleiche die Ursprungsdaten mit einmaligem und zweimaligem Maskierten Daten. ")
                ),
                child <-- withAdminOverride(showMaskierungAufgabe8InfoVar.signal).map { show =>
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
                  "Erläutere an einem Beispiel, wie Maskierung und Demaskierung funktionieren.\n\nGehe dabei auf folgende Punkte ein:\n- die Probleme einer festen Maske\n- wie die beste Maske ausgewählt wird\n- wie die XOR-Operation dabei eingesetzt wird\n\nNutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt.",
                  Set(),
                  8,
                  None,
                  "maskierung",
                  Some(() => markChapterCompleted("maskierung")),
                  minWordCount = Some(30)
                ),
                //renderMaskierung(),
                Rating("maskierung")
              )
            }
          else if hash == "#fehlerkorrektur" then  
            div(
              h1(child.text <-- languageVar.signal.map(lang => chapterTitle("fehlerkorrektur", lang))),
              TimeBadge(35),
              chapterTeacherGoalsBlock("fehlerkorrektur"),
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
                          p(child.text <-- languageVar.signal.map(lang => translatedNow("QR-Code mit Stickern", lang)))
                        ),
                        div(
                          styleAttr := "text-align: center;",
                          imageWithFallback("qr_ohnefehler", "QR-Code ohne Sticker", 220),
                          p(child.text <-- languageVar.signal.map(lang => translatedNow("QR-Code ohne Sticker", lang)))
                        ),
                        div(
                          styleAttr := "text-align: center;",
                          imageWithFallback("qr_MitLogo", "QR-Code mit Logo", 220),
                          p(child.text <-- languageVar.signal.map(lang => translatedNow("QR-Code mit Logo", lang)))
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
                      "Durch die Bildschirmauflösung und Kamerafehler kann es dazu kommen, dass fälschlicherweise nicht alle QR Codes scannbar waren. Das ist jedoch nicht schlimm!"
                    ),
                    wrongHint = Some("Hinweis: Versuche mit dem Scanner so nah an die QR Codes zu gehen, sodass nur ein QR-Code gleichzeitig im Fokus ist."),
                    multipleChoice = Some(List(
                      ("QR-Code mit Stickern", true),
                      ("QR-Code ohne Sticker", true),
                      ("QR-Code mit Logo", true)
                    ))
                  ),
                  child <-- withAdminOverride(showFehlerkorrekturAufgabe2InfoVar.signal).map { show =>
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
                    "Situation 1: Du teilst deine Adresse deinem Freund mit einer Notiz mit. Leider verschmiert die Tinte an einer Stelle, sodass statt einem Buchstabe ein schwarzer Fleck zu sehen ist. \n" +
                    "Situation 2: Du teilst deine Adresse deinem Freund mit einer Notiz mit. Leider hast du dich bei der Hausnummer verschrieben und statt 13 steht dort 73.",
                    Set("Situation 2"),
                    3,
                    None,
                    "fehlerkorrektur",
                    None,
                    Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-3", showFehlerkorrekturAufgabe3InfoVar)),
                    solutionText = Some(
                      "Situation 2 ist schwerer zu erkennen und zu korrigieren, da der Fehler nicht sofort auffällt. Die falsche Hausnummer wirkt auf den ersten Blick plausibel, obwohl sie inhaltlich falsch ist."
                    ),
                    wrongHint = Some("Hinweis: Entscheide dich für eine Situation. Überlege dir bei welcher Notiz du mehr Probleme hast den Fehler zu erkennen."),
                    isExcursus = true
                  ),
                  child <-- withAdminOverride(showFehlerkorrekturAufgabe3InfoVar.signal).map { show =>
                    if show then
                      Infotext(
                        "Fehlertypen erkennen",
                        "Es gibt zwei Haupttypen von Fehlern: \n" +
                        "Ausfallfehler (auch Löschfehler genannt): Ein Zeichen wird vollständig entfernt oder ist unlesbar. \n" +
                        "Substitutionsfehler: Ein Zeichen wird durch ein anderes ersetzt. \n" +
                        "Substitutionsfehler sind oft schwieriger zu erkennen, da der Text syntaktisch(richtige Zeichen werden verwendet) korrekt bleibt, aber semantisch (Bedeutung der Zeichen) falsch ist. \n" +
                        "Durch Redundanz (doppelte Informationen) können beide Fehlertypen erkannt und teilweise korrigiert werden."
                      )
                    else
                      emptyNode
                  },
                  renderExercise(
                    "Eine Möglichkeit mit Fehlern umzugehen ist es, eine Prüfsumme zu verwenden. Dabei werden bestimmte Zeichen in der Nachricht gezählt und die Anzahl der Zeichen an das Ende angehangen. "+
                    "Ein Beispiel wäre, dass die Zeichenanzahl gezählt wird. Aus der Nachricht 'Hallo' würde dann die Nachricht 'Hallo5' werden. \n" +
                    "Beschreibe, welche Arten von Fehlern mit dieser Methode erkannt werden können. Begründe deine Antwort.",
                    Set("Ausfallfehler", "Löschfehler"),
                    4,
                    None,
                    "fehlerkorrektur",
                    solutionText = Some(
                      "Eine Pruefsumme kann Ausfallfehler erkennen, aber nicht direkt korrigieren. Da nur die Länge der Nachricht gespeichert wird, fällt nur auf, wenn Zeichen fehlen – nicht aber, wenn Zeichen durch andere ausgetauscht wurden."
                    ),
                    wrongHint = Some("Hinweis: Überlege dir welche Fehlerart erkannt wird."),
                    isExcursus = true
                  ),
                  renderExercise(
                    "Nenne ein Problem, das dieses Verfahren mit sich bringt. Überlege dir dazu, wie die Nachricht 'Hallo5' mit einer Prüfsumme aussehen müsste.",
                    Set("Hallo5"),
                    5,
                    None,
                    "fehlerkorrektur",
                    solutionText = Some(
                      "Das Problem ist, dass durch das erhalten einer Nachricht nicht klar ist, ob die Nachricht 'Hallo' mit der Prüfsumme '5' oder die Nachricht 'Hallo5' mit der Prüfsumme '6' gemeint ist. Es gibt also keine eindeutige Zuordnung zwischen Nachricht und Prüfsumme."
                    ),
                    wrongHint = Some("Hinweis: Prüfe die Mehrdeutigkeit am Beispiel 'Hallo5' und warum die Zuordnung nicht eindeutig ist."),
                    isExcursus = true
                  ),
                  renderExercise(
                    "Beschreibe eine Methode, wie Fehler nicht nur erkannt, sondern auch korrigiert werden können am Beispiel der Nachricht '12345'. Gib die Nachricht an. (Tipp: Überlege dir, was du machst, wenn deine Information von einer Person im Gespräch nicht verstanden wurde.)",
                    Set("2","nochmal", "1234512345"),
                    6,
                    None,
                    "fehlerkorrektur",
                    infoCallback = Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-6", showFehlerkorrekturAufgabe6InfoVar)),
                    solutionText = Some(
                      "Man kann die Nachricht 2 mal senden, z.B. 1234512345. Wenn der erste Teil der Nachricht unleserlich ist, kann die Nachricht durch den 2. Teil dann immernoch gelesen werden."
                    ),
                    wrongHint = Some("Hinweis: Nutze Redundanz. Überlege dir, wie du die Nachricht so erweitern kannst, dass sie auch bei Fehlern noch lesbar bleibt. Gib die Nachricht an."),
                    isExcursus = true
                  ),
                  child <-- withAdminOverride(showFehlerkorrekturAufgabe6InfoVar.signal).map { show =>
                    if show then
                      Infotext(
                        "Redundanz statt Wiederholung",
                        "Nochmal senden (oder nochmal scannen) sollte möglichst vermieden werden. Besser ist es, in einer einzigen Nachricht Informationen mehrfach zu übertragen, z.B. indem die Nachricht doppelt enthalten ist. " +
                        "So entsteht nur ein Kommunikationsprozess statt zwei getrennten Übertragungen. Kommunikationsprozesse sollten minimiert werden, um Zeitaufwand und Fehlerquellen zu reduzieren."
                      )
                    else
                      emptyNode
                  },
                  renderExercise(
                    "Beschreibe jeweils, wie viel % der Nachricht maximal unleserlich sein dürfen, damit die Nachricht trotzdem noch korrekt gelesen werden kann. \n" +
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
                    "Beschreibe, wie die Daten, welche für eine Nachricht verwendet werden können und das Fehlerkorrekturlevel zusammenhängen.",
                    Set("Daten", "zusätzlich"),
                    8,
                    None,
                    "fehlerkorrektur",
                    infoCallback = Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-8", showFehlerkorrekturAufgabe8InfoVar)),
                    solutionText = Some(
                      "Mehr Fehlerkorrektur bedeutet mehr genutzen Speicher. Dadurch steigt die Robustheit, aber es bleibt weniger Platz für Daten. Ein hohes Korrekturlevel ist nur sinnvoll, wenn die Umgebung viele Fehler verursacht."
                    ),
                    wrongHint = Some("Hinweis: Beschreibe, wie die Menge der übertragenen Daten mit dem Korrekturlevel zusammenhängt."),
                    isExcursus = true
                  ),
                  child <-- withAdminOverride(showFehlerkorrekturAufgabe8InfoVar.signal).map { show =>
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
                    "Erkläre, welche Auswirkungen ein hohes Fehlerkorrektur in QR-Codes auf die Menge der Daten hat.",
                    Set("begrenzt", "Daten"),
                    10,
                    None,
                    "fehlerkorrektur",
                    infoCallback = Some(() => markInfoBoxShown("qr-infobox-fehlerkorrektur-10", showFehlerkorrekturAufgabe10InfoVar)),
                    solutionText = Some(
                      "Der verfügbare Speicher eines QR-Codes ist begrenzt. Wird ein höheres Korrekturlevel gewählt, wird mehr Speicher für Fehlerkorrektur benötigt, sodass weniger Platz für Daten bleibt. " +
                      "Umgekehrt: Werden alle verfügbaren Plätze mit Daten gefüllt, muss ein niedriges Korrekturlevel gewählt werden, um Redundanz zu sparen."
                    ),
                    wrongHint = Some("Hinweis: Erkläre, wie sich Korrekturlevel und Datenkapazität gegenseitig beeinflussen.")
                  ),
                  child <-- withAdminOverride(showFehlerkorrekturAufgabe10InfoVar.signal).map { show =>
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
                    "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit einem Klick auf 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten(Versionsnummer + Maskennummer) in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben. \nBeachte, dass der QR Code nicht scannbar ist, da keine Maske auf den QR Code angewandt wird.",
                    "Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit einem Klick auf 'Metadaten anzeigen' kannst du dir zusätzlich die Metadaten(Versionsnummer + Maskennummer) in den QR-Code laden. Durch einen Klick auf 'Fehlerkorrektur anzeigen' kannst du dir die Fehlerkorrektur-Pixel anzeigen lassen. Teste verschiedene Eingaben. \n" +
                    "Beachte, dass der QR Code nicht scannbar ist, da keine Maske auf den QR Code angewandt wird."
                    
                  ),
                  renderExercise(
                    "Erkläre in eigenen Worten, wie die Fehlerkorrektur in QR-Codes funktioniert. Gehe dabei auf den Zusammenhang zwischen zusätzlichen Daten und dem Korrekturlevel ein. Erläutere zusätzlich, wie die Fehlerkorrektur im QR-Code dargestellt wird. Nutze dafür mindestens 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt.",
                    Set(),
                    12,
                    None,
                    "fehlerkorrektur",
                    Some(() => markChapterCompleted("fehlerkorrektur")),
                    minWordCount = Some(30)
                  )
                )
              },
              Rating("fehlerkorrektur")
            )
          else if hash == "#praxisanwendungen" then  
            div(
              h1(child.text <-- languageVar.signal.map(lang => chapterTitle("praxisanwendungen", lang))),
              TimeBadge(30),
              chapterTeacherGoalsBlock("praxisanwendungen"),
              renderExercise(
                "Beschreibe drei Anwendungen, in denen QR-Codes sinnvoll eingesetzt werden. Begründe jeweils kurz.",
                Set("sinnvoll"),
                1,
                None,
                "praxisanwendungen",
                solutionText = Some(
                  "Sinnvoll sind z.B. Ticketkontrolle, Produktinfos im Handel und schnelle Links auf Plakaten."
                ),
                wrongHint = Some("Hinweis: Nenne drei konkrete Einsatzbereiche und begründe jeweils den praktischen Nutzen. Nutze dabei das Wort sinnvoll.")
              ),
              renderExercise(
                "Plane eine konkrete Anwendung im Schulalltag: Beschreibe Ziel, Inhalt des QR-Codes und Ort der Platzierung.",
                Set("Schule", "Ziel", "Platzierung"),
                2,
                None,
                "praxisanwendungen",
                solutionText = Some(
                  "In der Schule koennte das Ziel sein, Material zu verteilen; der QR-Code enthaelt den Link, die Platzierung ist am Klassenraum."
                ),
                wrongHint = Some("Hinweis: Formuliere Ziel, QR-Inhalt und Platzierung als drei getrennte Punkte.")
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
                  "Ein Vorteil ist die direkte Kontrolle durch eine Lehrkraft. Dieser kann die Schüler aufhalten und ist flexibel in der Entscheidung. Ein Nachteil ist der hohe Aufwand und moegliche Fehler beim Nachschlagen."
                ),
                wrongHint = Some("Hinweis: Nenne je zwei Vor- und Nachteile der aktuellen Kontrolle und trenne sie klar.")
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
                "Vergleiche die Vor- und Nachteile von QR-Codes bei sensiblen Daten (wie Bankdaten) mit denen bei öffentlichen Informationen (wie Website-Links). Nutze dafür 30 Wörter.\n\nHinweis: Deine Zusammenfassung erscheint auf deinem Merkblatt.",
                Set(),
                10,
                None,
                "praxisanwendungen",
                Some(() => markChapterCompleted("praxisanwendungen")),
                minWordCount = Some(30)
              ),
              div(
                h3(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 11" else "Aufgabe 11")),
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
                {
                  val checkboxStates = Var(List(false, false, false, false, false))
                  div(
                    styleAttr := "margin-top: 1rem; padding: 1rem; background-color: #f9f9f9; border-radius: 4px;",
                    h4("Hake alle Kästchen nach dem Abarbeiten ab.", styleAttr := "margin-top: 0;"),
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
                      )
                      
                    )
                  )
                },
                renderExercise(
                  "Beschreibe, welche Daten du außerdem in einer VCard speichern könntest und welche Vorteile dies hat.",
                  Set(),
                  12,
                  None,
                  "praxisanwendungen"
                ),
                teacherNoteBlock("praxisanwendungen", 12)
              ),
              Rating("praxisanwendungen")
            )
          else if hash == "#zusammenfassung" then
            div(
              h1(child.text <-- languageVar.signal.map(lang => chapterTitle("zusammenfassung", lang))),
              TimeBadge(30),
              chapterTeacherGoalsBlock("zusammenfassung"),
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
                  h3(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 1" else "Aufgabe 1")),
                  p(child.text <-- languageVar.signal.map(lang => translatedNow("Im folgenden QR-Code kannst du eine Nachricht in das Textfeld eingeben. Mit den Checkboxen kannst du Metadaten anzeigen oder die Fehlerkorrektur-Pixel sehen. Teste verschiedene Eingaben und überprüfe das Ergebnis mit einem QR-Code Scanner.", lang))),
                  div(
                    styleAttr := "display: flex; gap: 9rem; align-items: flex-start; margin-bottom: 2rem;",
                  // Linke Spalte: Input und Checkboxen
                  div(
                    styleAttr := "flex: 0 1 250px;",
                    div(
                      cls := "qr-input-container",
                      input(
                        typ := "text",
                        placeholder <-- languageVar.signal.map(lang => translatedNow("Deine Nachricht hier...", lang)),
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
                      child <-- Signal.combineWithFn(exceedsLimitVar.signal, languageVar.signal) { (exceeds, lang) =>
                        if exceeds then
                          div(
                            styleAttr := "color: red; font-weight: bold; margin-top: 0.5rem;",
                            translatedNow("Maximale Anzahl an Zeichen für den QR Code Typen erreicht", lang)
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
                        span(child.text <-- languageVar.signal.map(lang => translatedNow("Metadaten", lang)), styleAttr := "font-weight: 500; font-size: 0.9rem;")
                      ),
                      label(
                        styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 0.75rem; background-color: #bbdefb; border-radius: 4px; border: 1px solid #64b5f6; user-select: none; white-space: nowrap;",
                        input(
                          typ := "checkbox",
                          checked <-- errorCorrectionActive.signal,
                          onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> errorCorrectionActive.writer,
                          styleAttr := "cursor: pointer;"
                        ),
                        span(child.text <-- languageVar.signal.map(lang => translatedNow("Fehlerkorrektur", lang)), styleAttr := "font-weight: 500; font-size: 0.9rem;")
                      ),
                      label(
                        styleAttr := "display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.75rem 0.75rem; background-color: #fff3cd; border-radius: 4px; border: 1px solid #ffc107; user-select: none; white-space: nowrap;",
                        input(
                          typ := "checkbox",
                          checked <-- maskActive.signal,
                          onChange.map(_.target.asInstanceOf[org.scalajs.dom.HTMLInputElement].checked) --> maskActive.writer,
                          styleAttr := "cursor: pointer;"
                        ),
                        span(child.text <-- languageVar.signal.map(lang => translatedNow("Maske", lang)), styleAttr := "font-weight: 500; font-size: 0.9rem;")
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
                        h4(child.text <-- languageVar.signal.map(lang => translatedNow("Scannbarer QR Code", lang)), styleAttr := "margin-top: 0; margin-bottom: 0.5rem;"),
                        generateQRCode(text, 220)
                      )
                    else if text.nonEmpty then
                      val lang = languageVar.now()
                      val missing = List(
                        if !isMeta then Some(translatedNow("Metadaten", lang)) else None,
                        if !isError then Some(translatedNow("Fehlerkorrektur", lang)) else None,
                        if !isMask then Some(translatedNow("Maske", lang)) else None
                      ).flatten.mkString(", ")

                      div(
                        styleAttr := "color: #d32f2f; font-weight: bold; padding: 0.75rem; background-color: #ffebee; border-radius: 4px; border: 1px solid #d32f2f; font-size: 0.85rem; max-width: 200px;",
                        s"${translatedNow("Noch erforderlich:", lang)} $missing"
                      )
                    else
                      emptyNode
                  }
              ),
              teacherNoteBlock("zusammenfassung", 1)
            )
          },
          renderExercise(
            "Beschreibe in eigenen Worten die Bestandteile eines QR-Codes und deren Funktion mit mindestens 20 Wörtern.",
            Set(),
            2,
            None,
            "zusammenfassung",
            None,
            None,
            Some(20)
          ),
          erstelleZusammenfassungsBlatt(),
          //renderZusammenfassungQuiz(),
          Rating("zusammenfassung")
        )
          else if hash == "#barcodes" then
            div(
              h1(child.text <-- languageVar.signal.map(lang => chapterTitle("barcodes", lang))),
              TimeBadge(30),
              chapterTeacherGoalsBlock("barcodes"),
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
              h1(child.text <-- languageVar.signal.map(lang => chapterTitle("einfuehrung", lang))),
              TimeBadge(10),
              chapterTeacherGoalsBlock("einfuehrung"),
              {
                val showMaterialsVar = Var(false)
                div(
                  styleAttr := "margin-top: 2rem; padding: 0.75rem 1rem; background: #f7faff; border-radius: 12px; border: 1px solid #cddcf3;",
                  button(
                    typ := "button",
                    cls := "btn-primary",
                    styleAttr := "padding: 0.45rem 0.8rem;",
                    child.text <-- Signal.combineWithFn(showMaterialsVar.signal, languageVar.signal) { (show, lang) =>
                      if show then translatedNow("Benötigte Arbeitsmittel ausblenden", lang)
                      else translatedNow("Benötigte Arbeitsmittel anzeigen", lang)
                    },
                    onClick --> (_ => showMaterialsVar.update(v => !v))
                  ),
                  child <-- showMaterialsVar.signal.map { show =>
                    if show then
                      div(
                        styleAttr := "margin-top: 0.9rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));",
                        div(
                          styleAttr := "padding: 1.25rem; background: #eef5ff; border-radius: 10px; border-left: 4px solid #4a78d3;",
                          h3(styleAttr := "margin-top: 0; color: #1f3b73;", "Benötigte Arbeitsmaterialien"),
                          p(styleAttr := "margin: 0.5rem 0; color: #2d4a7a;", "Geräte"),
                          ul(
                            styleAttr := "margin: 0.5rem 0; padding-left: 1.25rem; color: #2d4a7a;",
                            li("Computer mit Internetzugang"),
                            li("Smartphone mit Kamera"),
                            li("Das Schulnetz muss erlauben, dass SuS Daten im lokalen Browser-Cache speichern können")
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
                        )
                      )
                    else
                      emptyNode
                  }
                )
              },
              {
                val showDidaktikVar = Var(false)
                div(
                  styleAttr := "margin-top: 0.75rem; padding: 0.75rem 1rem; background: #f3f7ff; border-radius: 12px; border: 1px solid #c5d8f7;",
                  button(
                    typ := "button",
                    cls := "btn-primary",
                    styleAttr := "padding: 0.45rem 0.8rem; background: #5c6bc0;",
                    child.text <-- Signal.combineWithFn(showDidaktikVar.signal, languageVar.signal) { (show, lang) =>
                      if show then translatedNow("Didaktische Hinweise ausblenden", lang)
                      else translatedNow("Didaktische Hinweise", lang)
                    },
                    onClick --> (_ => showDidaktikVar.update(v => !v))
                  ),
                  child <-- showDidaktikVar.signal.map { show =>
                    if show then
                      div(
                        styleAttr := "margin-top: 0.9rem;",
                        div(
                          styleAttr := "padding: 1.25rem; background: #e8edf9; border-radius: 10px; border-left: 4px solid #5c6bc0;",
                          h3(styleAttr := "margin-top: 0; color: #283593;", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Teaching Notes" else "Didaktische Hinweise")),
                          div(
                            styleAttr := "margin: 0.5rem 0 0.9rem 0; padding: 0.75rem 0.9rem; background: #fff8e1; border-radius: 8px; border-left: 4px solid #f9a825;",
                            p(
                              styleAttr := "margin: 0; color: #5d4037; font-weight: 600;",
                              child.text <-- languageVar.signal.map(lang => if lang == "en" then "Note for teachers: Enter the name 'Admin' to view the full workbook including all teacher notes." else "Hinweis für Lehrkräfte: Gib den Namen 'Admin' ein, um das gesamte Arbeitsheft inklusive aller Lehrerhinweise zu sehen.")
                            )
                          ),
                          div(
                            styleAttr := "color: #1a237e;",
                            h4(styleAttr := "margin: 0.75rem 0 0.25rem 0;", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Learning Objectives" else "Lernziele")),
                            ul(
                              styleAttr := "margin: 0 0 0.75rem 0; padding-left: 1.25rem;",
                              li(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Students describe the structure of QR codes and explain the encoding of information using ASCII." else "SuS beschreiben den Aufbau von QR-Codes und erläutern die Kodierung von Informationen mittels ASCII.")),
                              li(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Students explain error correction and masking." else "SuS erklären Fehlerkorrektur und Maskierung.")),
                              li(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Students reflect on practical applications and limitations of QR codes and critically evaluate the applications." else "SuS reflektieren Praxisanwendungen und Grenzen von QR-Codes und bewerten die Anwendungen kritisch."))
                            ),
                            h4(styleAttr := "margin: 0.75rem 0 0.25rem 0;", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Didactic Notes" else "Didaktische Anmerkungen")),
                            ul(
                              styleAttr := "margin: 0 0 0.75rem 0; padding-left: 1.25rem;",
                              li(child.text <-- languageVar.signal.map(lang => if lang == "en" then "The chapters on Messages, Masking, and Error Correction can be worked on in any order." else "Die Kapitel Nachrichten schreiben, Maskierung und Fehlerkorrektur können in beliebiger Reihenfolge bearbeitet werden.")),
                              li(child.text <-- languageVar.signal.map(lang => if lang == "en" then "The tasks in the summary chapter use students' own answers. This requires individual feedback from the teacher, as students are expected to create their own reference sheet." else "Die Aufgaben im Zusammenfassungskapitel greifen auf die Antworten der SuS zurück. Dies benötigt individuelles Feedback der Lehrkraft, da SuS hier selbst ihr eigenes Merkblatt erstellen sollen."))
                            ),
                            h4(styleAttr := "margin: 0.75rem 0 0.25rem 0;", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Additional Information" else "Zusätzliche Informationen")),
                            ul(
                              styleAttr := "margin: 0 0 0.75rem 0; padding-left: 1.25rem;",
                              li(child.text <-- languageVar.signal.map(lang =>
                                if lang == "en" then
                                  "Students should ideally install the app 'QR- & Barcode- Scanner' from TeaCapps in advance, as scanned QR codes can otherwise be interpreted incorrectly."
                                else
                                  "SuS sollten idealerweise die App 'QR- & Barcode- Scanner' aus dem Appstore von TeaCapps bereits im Vorhinein installieren, da gescannte QR-Codes sonst fehlerhaft interpretiert werden können."
                              ))
                            ),
                            h4(styleAttr := "margin: 0.75rem 0 0.25rem 0;", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Time Planning" else "Zeitplanung")),
                            ul(
                              styleAttr := "margin: 0; padding-left: 1.25rem;",
                              li(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Each chapter has an estimated time shown in the top right corner." else "Jedes Kapitel zeigt eine Zeitschätzung in der rechten oberen Ecke.")),
                              li(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Total time: approx. 120-180 minutes." else "Gesamtzeit: ca. 120 - 180 Minuten"))
                            )
                          )
                        )
                      )
                    else
                      emptyNode
                  }
                )
              },
              allgemeineInfos(
                "QR-Code-Scanner installieren und verwenden",
                "Um QR-Codes mit deinem Smartphone zu scannen, benötigst du eine Scanner-App:\n" +
                "Das Arbeitsheft wurde mit der App 'QR- & Barcode- Scanner'aus dem Appstore von TeaCapps getestet. Für eine reibungslose Bearbeitung wird empfohlen, diese App zu verwenden.\n" +
                "Die meisten Handys haben heute auch in der Kamera einen eingebauten QR-Code Scanner. Dieser kann auch benutzt werden.\n" +
                "Um einen QR-Code zu scannen, öffne die Scanner-App oder die Kamera deines Smartphones und richte sie auf den QR-Code. Die App oder Kamera erkennt den Code automatisch und zeigt dir den Inhalt an.\n" +
                "Tipp: Achte darauf, dass der QR-Code gut beleuchtet und nicht zu verdeckt ist, damit der Scanner ihn schnell erkennen kann."
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
                h3(
                  child.text <-- languageVar.signal.map(lang => translatedNow("Deine Angaben", lang)),
                  styleAttr := "margin-top: 0; font-size: 2rem;"
                ),
                div(
                  styleAttr := "display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;",
                  label(
                    child.text <-- languageVar.signal.map(lang => translatedNow("Name:", lang)),
                    styleAttr := "font-weight: bold; font-size: 1rem;"
                  ),
                  input(
                    typ := "text",
                    placeholder <-- languageVar.signal.map(lang => translatedNow("Dein Name", lang)),
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
                    Infotext(
                      "Informationen zur Bearbeitung",
                      "Durch das Klicken auf den \"Abgeben\" Button bei den Aufgaben werden deine Antworten lokal in deinem Browser gespeichert.\n" +
                      "Das Textfeld färbt sich grün, wenn alle Schlüsselwörter, welche gefordert waren, im Text vorhanden sind. Ansonsten färbt es sich rot.\n" +
                      "Zusätzlich gibt es im Arbeitsheft immer wieder Informationsboxen, welche nach dem Bearbeiten der Aufgabe angezeigt werden.\n" +
                      "Falls du mal bei einer Aufgabe nicht weiter kommen solltest, kannst du dir durch einen Klick auf 'Lösung zeigen' die Lösung anzeigen lassen. Alle benötigten Schlüsselwörter sind in der Lösung fett markiert.\n" +
                      "Probiere es an Aufgabe 1 einmal selbst aus, indem du deine Eingabe änderst, falls du sie beim ersten Mal richtig gelöst hast."
                    ),
                    renderExercise(
                      "Scanne die QR-Codes und beschreibe deren Inhalte in den Textfeldern unter den QR Codes. Beschreibe die Gemeinsamkeiten im großen Eingabefeld.", 
                      Set("qr"), 
                      1, 
                      Some(div(
                        cls := "qr-codes-grid",
                        styleAttr := "display: flex; gap: 1rem; justify-content: center; align-items: flex-start; flex-wrap: nowrap; overflow-x: auto;",
                        div(
                          styleAttr := "display: flex; flex-direction: column; align-items: center; gap: 0.5rem; width: 190px;",
                          div(
                            styleAttr := "min-height: 245px; display: flex; align-items: flex-start;",
                            generateQRCodeWithCaption("https://example.com", "Beispiel QR-Code 1", 150)
                          ),
                          textArea(
                            rows := 3,
                            placeholder <-- languageVar.signal.map(lang => translatedNow("Inhalt von QR-Code 1 beschreiben...", lang)),
                            styleAttr := "width: 150px; padding: 0.5rem; font-size: 0.9rem; border: 1px solid #ccc; border-radius: 4px; resize: vertical;",
                            onKeyDown --> { e =>
                              if (e.ctrlKey || e.metaKey) && e.key.equalsIgnoreCase("v") then
                                e.preventDefault()
                            },
                            onPaste --> { e =>
                              e.preventDefault()
                            }
                          )
                        ),
                        div(
                          styleAttr := "display: flex; flex-direction: column; align-items: center; gap: 0.5rem; width: 190px;",
                          div(
                            styleAttr := "min-height: 245px; display: flex; align-items: flex-start;",
                            imageWithCaption("/qr_example.png", "Beispiel QR-Code 2", 150)
                          ),
                          textArea(
                            rows := 3,
                            placeholder <-- languageVar.signal.map(lang => translatedNow("Inhalt von QR-Code 2 beschreiben...", lang)),
                            styleAttr := "width: 150px; padding: 0.5rem; font-size: 0.9rem; border: 1px solid #ccc; border-radius: 4px; resize: vertical;",
                            onKeyDown --> { e =>
                              if (e.ctrlKey || e.metaKey) && e.key.equalsIgnoreCase("v") then
                                e.preventDefault()
                            },
                            onPaste --> { e =>
                              e.preventDefault()
                            }
                          )
                        ),
                        div(
                          styleAttr := "display: flex; flex-direction: column; align-items: center; gap: 0.5rem; width: 190px;",
                          div(
                            styleAttr := "min-height: 245px; display: flex; align-items: flex-start;",
                            generateQRCodeWithCaption("Benutze das Wort: QRCode in deiner Abgabe", "Beispiel QR-Code 3", 150)
                          ),
                          textArea(
                            rows := 3,
                            placeholder <-- languageVar.signal.map(lang => translatedNow("Inhalt von QR-Code 3 beschreiben...", lang)),
                            styleAttr := "width: 150px; padding: 0.5rem; font-size: 0.9rem; border: 1px solid #ccc; border-radius: 4px; resize: vertical;",
                            onKeyDown --> { e =>
                              if (e.ctrlKey || e.metaKey) && e.key.equalsIgnoreCase("v") then
                                e.preventDefault()
                            },
                            onPaste --> { e =>
                              e.preventDefault()
                            }
                          )
                        )
                      )),
                      "einfuehrung",
                      None,
                      Some(() => markInfoBoxShown("qr-infobox-einfuehrung-1", showInfoBoxVar)),
                      solutionText = Some(
                        "Die QR-Codes enthalten unterschiedliche Inhalte wie eine Webseite, Kontaktdaten von Max Mustermann und einen Hinweis für die Abgabe."
                      ),
                      wrongHint = Some("Hinweis: Der Hinweis für eine korrekte Abgabe des großen Eingabefeldes befindet sich im dritten QR-Code.")
                    ),
                  )
                },
                renderExerciseMC(
                  "Welche Aussage trifft auf QR-Codes zu?",
                  List(
                    ("QR-Codes haben immer gleich viele weiße und schwarze Pixel.", false),
                    ("QR-Codes können ausschließlich Webadressen speichern.", false),
                    ("QR-Codes können verschiedene Arten von Informationen speichern, nicht nur Webadressen.", true)
                  ),
                  2,
                  "einfuehrung"
                ),
                renderExercise("Beschreibe in mindestens 10 Worten, welche Vorstellungen du davon hast, wie QR-Codes funktionieren.", Set(), 3, None, "einfuehrung", Some(() => markChapterCompleted("einfuehrung")), minWordCount = Some(10)),
              ),
              {
                val praxisUnlockedSignal = withAdminOverride(completedChaptersVar.signal.map(completed => Set("nachricht", "maskierung", "fehlerkorrektur").subsetOf(completed)))
                val zusammenfassungUnlockedSignal = withAdminOverride(completedChaptersVar.signal.map(_.contains("praxisanwendungen")))
                val barcodeUnlockedSignal = withAdminOverride(merkzettelCreatedVar.signal)

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
              Rating("einfuehrung"),
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
  def renderPixelAreaWithLabels(cols: Int, rows: Int, title: String, labels: List[String], expectedPatterns: List[String] = Nil, chapter: String = "", taskText: String = "", wrongHint: Option[(String, String)] = None): Element =
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
      h2(child.text <-- languageVar.signal.map(lang => translatedNow(title, lang))),
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
          child.text <-- languageVar.signal.map(lang => translatedNow("Abgeben", lang)),
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
              child.text <-- languageVar.signal.map(lang => translatedNow("Richtrig!", lang)),
              styleAttr := "color: #4CAF50; font-weight: bold; margin-top: 0.5rem; display: inline-block;"
            )
          case _ => emptyNode
        },
        child <-- lastCheckVar.signal.map {
          case Some(false) =>
            wrongHint.map { case (de, en) =>
              p(
                child.text <-- languageVar.signal.map(lang => if lang == "en" then en else de),
                styleAttr := "color: #c62828; font-weight: 600; margin-top: 0.5rem;"
              )
            }.getOrElse(emptyNode)
          case _ => emptyNode
        }
      )
    )
  end renderPixelAreaWithLabels

  def renderMenu(): Element =
    val menuItems = List(
      ("#einfuehrung", "einfuehrung"),
      ("#nachricht", "nachricht"),
      ("#maskierung", "maskierung"),
      ("#fehlerkorrektur", "fehlerkorrektur"),
      ("#praxisanwendungen", "praxisanwendungen"),
      ("#zusammenfassung", "zusammenfassung"),
      ("#barcodes", "barcodes")
    )
    val praxisPrereq = Set("nachricht", "maskierung", "fehlerkorrektur")
    val praxisUnlockedSignal = withAdminOverride(completedChaptersVar.signal.map(completed => praxisPrereq.subsetOf(completed)))
    val zusammenfassungUnlockedSignal = withAdminOverride(completedChaptersVar.signal.map(_.contains("praxisanwendungen")))
    val barcodesUnlockedSignal = withAdminOverride(merkzettelCreatedVar.signal)

    div(
      cls := "navbar",
      // Header mit Titel
      div(
        cls := "navbar-header",
        img(
          src := "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https%3A%2F%2Fevadid.it%2FLucasQR%2F",
          alt := "QR-Code zur Kursseite",
          styleAttr := "width: 84px; height: 84px; display: block; margin: 0 auto 0.75rem auto; background: white; padding: 4px; border-radius: 8px;"
        ),
        h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "QR Code" else "QR-Code")),
        p(child.text <-- languageVar.signal.map(lang => if lang == "en" then "How is a QR code created?" else "Wie wird ein QR-Code erstellt?"))
      ),
      // Navigation Items
      div(
        cls := "navbar-nav",
        menuItems.map { case (hash, chapterKey) =>
          val isPraxis = chapterKey == "praxisanwendungen"
          val isZusammenfassung = chapterKey == "zusammenfassung"
          val isBarcodes = chapterKey == "barcodes"
          div(
            cls <-- (if isPraxis then
              Signal.combine(completedChaptersVar.signal, praxisUnlockedSignal, currentHashVar.signal).map { case (completed: Set[String], unlocked: Boolean, currentHash: String) =>
                val active = if currentHash == hash then " active" else ""
                if !unlocked then
                  s"menu-item locked$active"
                else if completed.contains(chapterKey) then
                  s"menu-item completed$active"
                else
                  s"menu-item$active"
              }
            else if isZusammenfassung then
              Signal.combine(completedChaptersVar.signal, zusammenfassungUnlockedSignal, merkzettelCreatedVar.signal, currentHashVar.signal).map { case (completed: Set[String], unlocked: Boolean, merkzettelCreated: Boolean, currentHash: String) =>
                val active = if currentHash == hash then " active" else ""
                if !unlocked then
                  s"menu-item locked$active"
                else if completed.contains(chapterKey) || merkzettelCreated then
                  s"menu-item completed$active"
                else
                  s"menu-item$active"
              }
            else if isBarcodes then
              Signal.combine(completedChaptersVar.signal, barcodesUnlockedSignal, currentHashVar.signal).map { case (completed: Set[String], unlocked: Boolean, currentHash: String) =>
                val active = if currentHash == hash then " active" else ""
                if !unlocked then
                  s"menu-item locked$active"
                else if completed.contains(chapterKey) then
                  s"menu-item completed$active"
                else
                  s"menu-item$active"
              }
            else
              completedChaptersVar.signal.combineWith(currentHashVar.signal).map { case (completed: Set[String], currentHash: String) =>
                val active = if currentHash == hash then " active" else ""
                if completed.contains(chapterKey) then
                  s"menu-item completed$active"
                else
                  s"menu-item$active"
              }
            ),
            if isPraxis then
              a(
                href <-- praxisUnlockedSignal.map(unlocked => if unlocked then hash else "#"),
                span(child.text <-- languageVar.signal.map(lang => chapterTitle(chapterKey, lang))),
                child <-- praxisUnlockedSignal.map { unlocked =>
                  if unlocked then
                    emptyNode
                  else
                    span(child.text <-- languageVar.signal.map(lang => if lang == "en" then "locked" else "gesperrt"), styleAttr := "margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;")
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
                span(child.text <-- languageVar.signal.map(lang => chapterTitle(chapterKey, lang))),
                child <-- zusammenfassungUnlockedSignal.map { unlocked =>
                  if unlocked then
                    emptyNode
                  else
                    span(child.text <-- languageVar.signal.map(lang => if lang == "en" then "locked" else "gesperrt"), styleAttr := "margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;")
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
                span(child.text <-- languageVar.signal.map(lang => chapterTitle(chapterKey, lang))),
                child <-- barcodesUnlockedSignal.map { unlocked =>
                  if unlocked then
                    emptyNode
                  else
                    span(child.text <-- languageVar.signal.map(lang => if lang == "en" then "locked" else "gesperrt"), styleAttr := "margin-left: 0.5rem; color: rgba(255, 255, 255, 0.7); font-size: 0.85rem;")
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
                span(child.text <-- languageVar.signal.map(lang => chapterTitle(chapterKey, lang))),
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
        div(
          styleAttr := "display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem;",
          button(
            typ := "button",
            title := "Deutsch",
            onClick --> (_ => setWorkbookLanguage("de")),
            styleAttr <-- languageVar.signal.map { lang =>
              val active = lang == "de"
              s"width: 56px; height: 32px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.8); cursor: pointer; font-size: 0.8rem; color: #123a7a; font-weight: 700; background: ${if active then "rgba(255,255,255,0.45)" else "rgba(255,255,255,0.25)"}; display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem;"
            },
            img(
              src := "https://flagcdn.com/w20/de.png",
              alt := "DE",
              width := "20",
              height := "15",
              styleAttr := "display: inline-block; border-radius: 2px;"
            ),
            span("DE")
          ),
          button(
            typ := "button",
            title := "English",
            onClick --> (_ => setWorkbookLanguage("en")),
            styleAttr <-- languageVar.signal.map { lang =>
              val active = lang == "en"
              s"width: 56px; height: 32px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.8); cursor: pointer; font-size: 0.8rem; color: #123a7a; font-weight: 700; background: ${if active then "rgba(255,255,255,0.45)" else "rgba(255,255,255,0.25)"}; display: inline-flex; align-items: center; justify-content: center; gap: 0.3rem;"
            },
            img(
              src := "https://flagcdn.com/w20/gb.png",
              alt := "EN",
              width := "20",
              height := "15",
              styleAttr := "display: inline-block; border-radius: 2px;"
            ),
            span("EN")
          )
        ),
        if showSubmitButton then
          button(
            child.text <-- languageVar.signal.map(lang => if lang == "en" then "Submit Results" else "Ergebnisse Abgeben"),
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
        else
          emptyNode
        ,
        div(
          styleAttr := "margin-top: 0.75rem; text-align: center; font-size: 0.85rem; color: rgba(255, 255, 255, 0.8);",
          child.text <-- languageVar.signal.map(lang => if lang == "en" then "Author: Lucas Reisig" else "Autor: Lucas Reisig")
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
      h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 2" else "Aufgabe 2")),
      p(child.text <-- languageVar.signal.map(lang => translatedNow("Links sind die ursprünglichen Daten dargestellt. In der Mitte kannst du die Maske definieren. Rechts wird das Ergebnis der Maskierung, welche durch eine XOR-Operation realisiert wird, angezeigt.", lang))),
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: center;",
        div(
          styleAttr := "text-align: center;",
          h3(child.text <-- languageVar.signal.map(lang => translatedNow("Ursprüngliche Daten", lang))),
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
          h3(child.text <-- languageVar.signal.map(lang => translatedNow("Maske", lang))),
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
          h3(child.text <-- languageVar.signal.map(lang => translatedNow("Maskierte Daten", lang))),
          child <-- originalData.signal.combineWith(maskPattern.signal).map { case (orig, mask) =>
            val maskedData = orig.zip(mask).map { case (o, m) => o ^ m }
            renderSimplePixelGrid(4, 4, Var(maskedData), isReadOnly = true)
          }
        )
      ),
      div(
        styleAttr := "margin-top: 2rem; padding: 1rem; background: #f0f0f0; border-radius: 8px;",
        h3(child.text <-- languageVar.signal.map(lang => translatedNow("Maskierung beschreiben", lang))),
        p(child.text <-- languageVar.signal.map(lang => translatedNow("Beschreibe, wie die Maskierung funktioniert. Ergänze die Sätze.", lang))),
        div(
          styleAttr := "margin: 1rem 0;",
          div(
            styleAttr <-- getLineStyle(check1).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span(child.text <-- languageVar.signal.map(lang => translatedNow("Wenn ursprüngliche Daten schwarz und die Maske schwarz dargestellt sind, dann ist das Ergebnis: ", lang))),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", child.text <-- languageVar.signal.map(lang => translatedNow("- Wählen -", lang))),
              option(value := "schwarz", child.text <-- languageVar.signal.map(lang => translatedNow("schwarz", lang))),
              option(value := "weiß", child.text <-- languageVar.signal.map(lang => translatedNow("weiß", lang))),
              controlled(
                value <-- answer1.signal,
                onChange.mapToValue --> answer1.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check2).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span(child.text <-- languageVar.signal.map(lang => translatedNow("Wenn ursprüngliche Daten schwarz und die Maske weiß dargestellt sind, dann ist das Ergebnis: ", lang))),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", child.text <-- languageVar.signal.map(lang => translatedNow("- Wählen -", lang))),
              option(value := "schwarz", child.text <-- languageVar.signal.map(lang => translatedNow("schwarz", lang))),
              option(value := "weiß", child.text <-- languageVar.signal.map(lang => translatedNow("weiß", lang))),
              controlled(
                value <-- answer2.signal,
                onChange.mapToValue --> answer2.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check3).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span(child.text <-- languageVar.signal.map(lang => translatedNow("Wenn ursprüngliche Daten weiß und die Maske schwarz dargestellt sind, dann ist das Ergebnis: ", lang))),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", child.text <-- languageVar.signal.map(lang => translatedNow("- Wählen -", lang))),
              option(value := "schwarz", child.text <-- languageVar.signal.map(lang => translatedNow("schwarz", lang))),
              option(value := "weiß", child.text <-- languageVar.signal.map(lang => translatedNow("weiß", lang))),
              controlled(
                value <-- answer3.signal,
                onChange.mapToValue --> answer3.writer
              )
            )
          ),
          div(
            styleAttr <-- getLineStyle(check4).map(s => s"margin-bottom: 1rem; padding: 0.5rem; $s"),
            span(child.text <-- languageVar.signal.map(lang => translatedNow("Wenn ursprüngliche Daten weiß und die Maske weiß dargestellt sind, dann ist das Ergebnis: ", lang))),
            select(
              styleAttr := "padding: 0.3rem; border: 1px solid #ccc; border-radius: 4px;",
              option(value := "", child.text <-- languageVar.signal.map(lang => translatedNow("- Wählen -", lang))),
              option(value := "schwarz", child.text <-- languageVar.signal.map(lang => translatedNow("schwarz", lang))),
              option(value := "weiß", child.text <-- languageVar.signal.map(lang => translatedNow("weiß", lang))),
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
          child.text <-- languageVar.signal.map(lang => translatedNow("Abgeben", lang)),
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
        child <-- withAdminOverride(showXorInfoVar.signal).map { showInfo =>
          if showInfo then
            Infotext(
              "XOR-Operator",
              "Der XOR-Operator (exklusives Oder) liefert genau dann 1, wenn die beiden Eingaben unterschiedlich sind. " +
              "Bei der Maskierung bedeutet das, dass alle Pixel die bei der Maske schwarz gefärbt sind, umgekehrt werden. "
            )
          else
            emptyNode
        },
        teacherNoteBlock("maskierung", 2)
      )
    )
  end renderMaskierungAufgabe

  def renderSimplePixelGrid(cols: Int, rows: Int, gridVar: Var[Vector[Boolean]], isReadOnly: Boolean = false): Element =
    val total = cols * rows
    val borderStyle =
      if isReadOnly then
        "border: 2px solid #999; background: #f5f5f5;"
      else
        "border: 2px solid #b7d7ff; background: #eaf3ff;"
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
      h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 3" else "Aufgabe 3")),
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
            styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #eaf3ff; padding: 8px; border-radius: 4px; border: 2px solid #b7d7ff;",
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
      teacherNoteBlock("maskierung", 3)
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
    val lastCheckVar1: Var[Option[Boolean]] = Var(None)
    val lastCheckVar2: Var[Option[Boolean]] = Var(None)
    val rowStatusVar: Var[Vector[Option[Boolean]]] = Var(Vector.fill(8)(None))

    div(
      h2(child.text <-- languageVar.signal.map(lang => if lang == "en" then "Task 6" else "Aufgabe 6")),
      p("In dieser Aufgabe wollen wir eine besondere Eigenschaft der XOR Operation untersuchen. Berechne dafür im ersten Schritt die maskierten Daten."),
      // Row 1: Ursprüngliche Daten ⊕ Maske = 1x Maskiert
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: flex-start; margin-bottom: 3rem; flex-wrap: wrap;",
        div(
          styleAttr := "display: flex; gap: 20px; align-items: center;",
          div(
            styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
            h4(styleAttr := "margin: 0 0 0.5rem 0;", "Ursprüngliche Daten"),
            renderSimplePixelGrid(4, 4, originalData, isReadOnly = true)
          ),
          div(
            styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center;",
            span(
              "⊕",
              styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
            )
          ),
          div(
            styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
            h4(styleAttr := "margin: 0 0 0.5rem 0;", "Maske"),
            renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = true)
          ),
          div(
            styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center;",
            span(
              "=",
              styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
            )
          ),
          div(
            styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
            h4(styleAttr := "margin: 0 0 0.5rem 0;", "1x Maskiert"),
            div(
              cls := "pixel-grid",
              styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #eaf3ff; padding: 8px; border-radius: 4px; border: 2px solid #b7d7ff;",
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
          )
        ),
        button(
          "Abgeben",
          onClick.map { _ =>
            val current1 = userMaskedData1.now()
            val statuses1: Vector[Option[Boolean]] = (0 until 4).toVector.map { r =>
              val rowSlice = current1.slice(r * 4, (r + 1) * 4)
              val expectedRow = correctMaskedData1.slice(r * 4, (r + 1) * 4)
              Some(rowSlice == expectedRow)
            }
            // Update only the first 4 row statuses
            val currentStatuses = rowStatusVar.now()
            rowStatusVar.set(statuses1 ++ currentStatuses.drop(4))
            Some(statuses1.flatten.forall(identity))
          } --> lastCheckVar1.writer,
          styleAttr := "padding: 0.5rem 1rem; align-self: flex-start; margin-top: 0.5rem;",
          cls <-- lastCheckVar1.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
          }
        )
      ),
      p("Wende die Maske anschließend ein zweites Mal auf die maskierten Daten an. Trage deine Ergebnisse in die Felder mit blauem Rahmen ein."),
      // Row 2: 1x Maskiert ⊕ Maske = 2x Maskiert
      div(
        styleAttr := "display: flex; gap: 20px; justify-content: center; align-items: flex-start; margin-bottom: 2rem; flex-wrap: wrap;",
        div(
          styleAttr := "display: flex; gap: 20px; align-items: center;",
          div(
            styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
            h4(styleAttr := "margin: 0 0 0.5rem 0;", "1x Maskiert"),
            div(
              cls := "pixel-grid",
              styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #f5f5f5; padding: 8px; border-radius: 4px; border: 2px solid #999;",
              children <-- userMaskedData1.signal.map { grid =>
                val gridVec = grid.asInstanceOf[Vector[Boolean]]
                (0 until 16).toList.map { idx =>
                  val isOn = gridVec(idx)
                  div(
                    cls := (if isOn then "pixel on" else "pixel"),
                    styleAttr := s"width: 28px; height: 28px;"
                  )
                }
              }
            )
          ),
          div(
            styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center;",
            span(
              "⊕",
              styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
            )
          ),
          div(
            styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
            h4(styleAttr := "margin: 0 0 0.5rem 0;", "Maske"),
            renderSimplePixelGrid(4, 4, maskPattern, isReadOnly = true)
          ),
          div(
            styleAttr := "display: flex; flex-direction: column; justify-content: center; align-items: center;",
            span(
              "=",
              styleAttr := "font-size: 2rem; font-weight: bold; color: #4a9eff;"
            )
          ),
          div(
            styleAttr := "text-align: center; display: flex; flex-direction: column; align-items: center;",
            h4(styleAttr := "margin: 0 0 0.5rem 0;", "2x Maskiert"),
            div(
              cls := "pixel-grid",
              styleAttr := "grid-template-columns: repeat(4, 28px); grid-auto-rows: 28px; display: inline-grid; gap: 1px; background: #eaf3ff; padding: 8px; border-radius: 4px; border: 2px solid #b7d7ff;",
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
          )
        ),
        button(
          "Abgeben",
          onClick.map { _ =>
            val current2 = userMaskedData2.now()
            val statuses2: Vector[Option[Boolean]] = (0 until 4).toVector.map { r =>
              val rowSlice = current2.slice(r * 4, (r + 1) * 4)
              val expectedRow = correctMaskedData2.slice(r * 4, (r + 1) * 4)
              Some(rowSlice == expectedRow)
            }
            // Update only the last 4 row statuses
            val currentStatuses = rowStatusVar.now()
            rowStatusVar.set(currentStatuses.take(4) ++ statuses2)
            Some(statuses2.flatten.forall(identity))
          } --> lastCheckVar2.writer,
          styleAttr := "padding: 0.5rem 1rem; align-self: flex-start; margin-top: 0.5rem;",
          cls <-- lastCheckVar2.signal.map {
            case Some(true)  => "btn-time btn-success"
            case Some(false) => "btn-time btn-error"
            case None        => "btn-time"
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
      teacherNoteBlock("maskierung", 7)
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
      teacherNoteBlock("fehlerkorrektur", 9),
      child <-- withAdminOverride(showInfotext.signal).map { show =>
        if show then
          Infotext(
            "Fehlerkorrektur in QR-Codes",
            "In QR-Codes werden Reed-Solomon-Codes zur Fehlerkorrektur genutzt. Dies ist ein besonders leistungsfähiges Verfahren, das beide Fehlerarten zum Teil korrigieren kann. Die Fehlerkorrektur wird dabei sowohl auf die Daten, als auch auf die Metadaten (z.B. Formatinformationen, Maske) angewendet. \n\nDabei werden QR-Codes nach Fehlertoleranzstufen klassifiziert. Die Fehlertoleranz liegt dabei zwischen 7% und 30% und gibt an wieviel % des QR-Codes beschädigt sein können, ohne dass die Information verloren geht. Die vier Stufen sind:\n• Level L: 7% Fehlertoleranz (Low) \n• Level M: 15% Fehlertoleranz (Medium) \n• Level Q: 25% Fehlertoleranz (Quartile)   \n• Level H: 30% Fehlertoleranz (High) \n\nDie Reed-Solomon-Codes arbeiten im Prinzip genau so, wie es im Exkurs behandelt wurde. Sie nutzen jedoch mehr Mathematik und sind etwas effizienter als Nachrichten doppelt zu schreiben. Die genau Funktionsweise übersteigt den Rahmen dieses Kurses, weshalb diese nicht weiter behandelt wird. Zum Nachlesen: https://de.wikipedia.org/wiki/Reed-Solomon-Code"
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
      alt <-- languageVar.signal.map { lang =>
        if lang == "en" then s"QR code for: $text" else s"QR Code für: $text"
      },
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
        alt <-- languageVar.signal.map { lang =>
          if lang == "en" then s"QR code for: $text" else s"QR Code für: $text"
        },
        width := size.toString,
        height := size.toString,
        cls := "qr-code"
      ),
      p(
        child.text <-- languageVar.signal.map(lang => translatedNow(caption, lang)),
        cls := "qr-caption"
      )
    )
  end generateQRCodeWithCaption

  def imageWithCaption(imageSrc: String, caption: String, size: Int = 150): Element =
    div(
      cls := "qr-code-with-caption",
      img(
        src := resolveImageUrl(imageSrc),
        alt <-- languageVar.signal.map(lang => translatedNow(caption, lang)),
        width := size.toString,
        height := size.toString,
        cls := "qr-code"
      ),
      p(
        child.text <-- languageVar.signal.map(lang => translatedNow(caption, lang)),
        cls := "qr-caption"
      )
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
    val wrongAttemptsVar: Var[Int] = Var(math.max(0, storedStatus.wrongAttempts))
    val effectiveSolutionWords = if solutionWords.nonEmpty then solutionWords else keywords
    val effectiveWrongHint = wrongHint
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
      h2(child.text <-- languageVar.signal.map { lang =>
        if index == -1 then
          if lang == "en" then "Task" else "Aufgabe"
        else if lang == "en" then s"Task $index" else s"Aufgabe $index"
      }),
      image.map(img => div(cls := "exercise-image", img)),
      p(
        child.text <-- languageVar.signal.map(lang => translatedNow(taskText, lang)),
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
                  onKeyDown --> { e =>
                    if (e.ctrlKey || e.metaKey) && e.key.equalsIgnoreCase("v") then
                      e.preventDefault()
                  },
                  onPaste --> { e =>
                    e.preventDefault()
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
                div(
                  styleAttr := "margin-top: 0.5rem; color: #c62828; font-weight: 600;",
                  child.text <-- languageVar.signal.map(lang => translatedNow(hint, lang))
                )
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
          p(styleAttr := "font-weight: 600; margin-bottom: 0.75rem; margin-top: 0;", child.text <-- languageVar.signal.map(lang => translatedNow(mcLabel, lang))),
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
                  child.text <-- languageVar.signal.map(lang => translatedNow(labelText, lang))
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
        saveExerciseStatus(chapter, taskText, ExerciseStatus(lastCheckVar.now(), showSolutionVar.now(), wrongAttemptsVar.now()))
        emptyNode
      },
      child <-- showSolutionVar.signal.map { _ =>
        saveExerciseStatus(chapter, taskText, ExerciseStatus(lastCheckVar.now(), showSolutionVar.now(), wrongAttemptsVar.now()))
        emptyNode
      },
      child <-- wrongAttemptsVar.signal.map { _ =>
        saveExerciseStatus(chapter, taskText, ExerciseStatus(lastCheckVar.now(), showSolutionVar.now(), wrongAttemptsVar.now()))
        emptyNode
      },
      if keywords.nonEmpty || minWordCount.nonEmpty || submitCallback.nonEmpty || multipleChoice.isDefined || inlineNumericExpected.isDefined then
        div(
          styleAttr := "display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;",
          button(
            child.text <-- lastCheckVar.signal.combineWith(languageVar.signal).map {
              case (Some(false), lang) => translatedNow("Nochmal versuchen", lang)
              case (_, lang) => translatedNow("Abgeben", lang)
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
                  val keywordOk = matchesKeywords(text, keywords)
                  minWordCount match
                    case Some(min) => keywordOk && countWords(text) >= min
                    case None => keywordOk
                lastCheckVar.set(Some(ok))
                if ok then
                  wrongAttemptsVar.set(0)
                  if solutionText.nonEmpty then
                    showSolutionVar.set(true)
                  // Call the submit callback if provided
                  submitCallback.foreach(callback => callback())
                  infoCallback.foreach(callback => callback())
                else
                  wrongAttemptsVar.update(_ + 1)
                  showSolutionVar.set(false)
            },
            cls := "btn-time",
            cls <-- buttonClassSignal
          ),
          child <-- lastCheckVar.signal.map {
            case Some(true) if !suppressPraise =>
              span(styleAttr := "color: #2e7d32; font-weight: 600;", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Correct! Very good" else "Richtig! Sehr gut"))
            case _ => emptyNode
          },
          child <-- lastCheckVar.signal.combineWith(wrongAttemptsVar.signal).map {
            case (Some(false), wrongAttempts) if solutionText.nonEmpty =>
              div(
                styleAttr := "display: flex; align-items: center; gap: 0.75rem;",
                if wrongAttempts >= 2 then
                  button(
                    child.text <-- languageVar.signal.map(lang => if lang == "en" then "Show solution" else "Lösung zeigen"),
                    cls := "btn-time",
                    onClick --> { _ =>
                      showSolutionVar.set(true)
                      infoCallback.foreach(callback => callback())
                    }
                  )
                else
                  emptyNode,
                effectiveWrongHint.map { hintText =>
                  span(
                    child.text <-- languageVar.signal.map(lang => translatedNow(hintText, lang)),
                    styleAttr := "color: #c62828; font-weight: 600;"
                  )
                }.getOrElse(emptyNode)
              )
            case _ => emptyNode
          },
          child <-- showSolutionVar.signal.map { show =>
            if show then
              val lang = languageVar.now()
              val wordsForLang = translateSolutionWords(effectiveSolutionWords, lang)
              solutionText.map(text =>
                div(
                  cls := "loesung-container",
                  styleAttr := "flex-basis: 100%;",
                  div(cls := "loesung-header", if lang == "en" then "Solution" else "Lösung"),
                  LösungZeigen(text, wordsForLang, lang)
                )
              ).getOrElse(emptyNode)
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
                      if languageVar.now() == "en" then s"Minimum word count is $min, you wrote $count."
                      else s"Mindestwortzahl sind $min, du hast $count geschrieben."
                    )
                  case None => emptyNode
              }
            case None => emptyNode
        )
      else
        emptyNode,
      teacherNoteBlock(chapter, index)
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
      h2(child.text <-- languageVar.signal.map(lang => if index == -1 then (if lang == "en" then "Task" else "Aufgabe") else (if lang == "en" then s"Task $index" else s"Aufgabe $index"))),
      p(child.text <-- languageVar.signal.map(lang => translatedNow(taskText, lang))),
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
            span(child.text <-- languageVar.signal.map(lang => " " + translatedNow(label, lang)))
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
        child.text <-- languageVar.signal.map(lang => if lang == "en" then "Submit" else "Abgeben"),
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
        case Some(true) => span(styleAttr := "color: #2e7d32; font-weight: 600;", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Correct!" else "Richtig!"))
        case _ => emptyNode
      },
      teacherNoteBlock(chapter, index)
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

  def generateMerkzettelPdf(sections: List[(String, String)], selfAssessments: List[(String, String)]): Unit =
    val jspdf = js.Dynamic.global.selectDynamic("window").selectDynamic("jspdf")
    if js.isUndefined(jspdf) then
      ()
    else
      val lang = languageVar.now()
      val studentName = studentNameVar.now()
      val doc = js.Dynamic.newInstance(jspdf.selectDynamic("jsPDF"))()
      var y = 15

      def tryAddImage(src: String, format: String, x: Double, y: Double, w: Double, h: Double): Boolean =
        try
          doc.addImage(src, format, x, y, w, h)
          true
        catch
          case _: Throwable => false

      doc.setFontSize(20)
      doc.setFont("helvetica", "bold")
      doc.text(translatedNow("Mein Merkzettel zu QR Codes", lang), 105, y, js.Dynamic.literal("align" -> "center"))
      doc.setFont("helvetica", "normal")
      doc.setLineWidth(0.5)
      doc.line(20, y + 2, 190, y + 2)
      val headerQrAdded = tryAddImage(
        "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https%3A%2F%2Fevadid.it%2FLucasQR%2F",
        "PNG",
        178,
        5,
        15,
        15
      )
      if !headerQrAdded then
        dom.console.warn("Could not load header QR image for PDF (likely CORS/network). Continuing without it.")
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
        val content = if body.trim.nonEmpty then body.trim else translatedNow("(keine Antwort)", lang)
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
      
      // Use same-origin path to avoid CORS issues in jsPDF image loading.
      val qrAreasImageAdded = tryAddImage(
        "/qr_Bereiche.png",
        "PNG",
        55,
        y,
        100,
        100
      )
      if qrAreasImageAdded then
        y += 105
      else
        dom.console.warn("Could not load qr_Bereiche.png for PDF (likely CORS/missing file). Continuing with text only.")
        y += 6
      
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

      // Add chapter understanding table below the QR code explanation.
      if y > 220 then
        doc.addPage()
        y = 15
      else
        y += 6

      doc.setFontSize(13)
      doc.setFont("helvetica", "bold")
      doc.text(if lang == "en" then "My chapter understanding" else "Verstaendnis der Kapitel", 10, y)
      y += 7

      val noEntry = translatedNow("(keine Antwort)", lang)
      val tableRows = selfAssessments.map { case (chapter, rating) =>
        chapter -> (if rating.trim.nonEmpty then rating.trim else noEntry)
      }

      val rowHeight = 8
      val tableWidthChapter = 120
      val tableWidthRating = 70

      if y + rowHeight * (tableRows.length + 1) > 280 then
        doc.addPage()
        y = 15

      doc.setFontSize(11)
      doc.setFont("helvetica", "bold")
      doc.rect(10, y, tableWidthChapter, rowHeight)
      doc.rect(10 + tableWidthChapter, y, tableWidthRating, rowHeight)
      doc.text(if lang == "en" then "Chapter" else "Kapitel", 12, y + 5.5)
      doc.text(if lang == "en" then "Chapter understanding" else "Verstaendnis des Kapitels", 12 + tableWidthChapter, y + 5.5)
      y += rowHeight

      doc.setFont("helvetica", "normal")
      tableRows.foreach { case (chapter, rating) =>
        if y + rowHeight > 282 then
          doc.addPage()
          y = 15
          doc.setFont("helvetica", "bold")
          doc.rect(10, y, tableWidthChapter, rowHeight)
          doc.rect(10 + tableWidthChapter, y, tableWidthRating, rowHeight)
          doc.text(if lang == "en" then "Chapter" else "Kapitel", 12, y + 5.5)
          doc.text(if lang == "en" then "Chapter understanding" else "Verstaendnis des Kapitels", 12 + tableWidthChapter, y + 5.5)
          y += rowHeight
          doc.setFont("helvetica", "normal")

        doc.rect(10, y, tableWidthChapter, rowHeight)
        doc.rect(10 + tableWidthChapter, y, tableWidthRating, rowHeight)
        doc.text(chapter, 12, y + 5.5)
        doc.text(rating, 12 + tableWidthChapter, y + 5.5)
        y += rowHeight
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
      "nachricht" -> "Wichtige Stichwörter: Binärdarstellung, ASCII, UTF-8, Kodierung, Dekodierung, Datenbereich im QR Code",
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

    def formatChapterRating(rating: RatingData, lang: String): String =
      val understanding = rating.understanding
      if understanding <= 0 then
        if lang == "en" then "Not rated yet" else "Noch nicht bewertet"
      else
        s"$understanding/5"

    div(
      h3(child.text <-- languageVar.signal.map(lang => translatedNow("Eigenes Merkblatt", lang))),
      p(child.text <-- languageVar.signal.map(lang => translatedNow("Hier siehst du deine Antworten von der Zusammenfassung der vorherigen Kapitel. Du kannst sie nochmal anpassen. Überpfüfe dafür jeweils ob in deiner Antwort die wichtigen Dinge stehen. Die wichtigsten Themen sind unter dem jeweiligen Eingabefeld nochmal zusammengefasst. Am Ende kannst du dir dann ein PDF mit deinen Antworten erstellen, das du dir abspeichern oder ausdrucken kannst.", lang))),
      div(
        styleAttr := "display: flex; flex-direction: column; gap: 1rem;",
        chapterLabels.map { case (chapterKey, label) =>
          val lastTask = chapterExercises.getOrElse(chapterKey, Nil).lastOption.getOrElse("")
          val answerVar = answerVars.getOrElse(chapterKey, Var(""))

          div(
            styleAttr := "display: flex; flex-direction: column; gap: 0.4rem;",
            h4(child.text <-- languageVar.signal.map(lang => translatedNow(label, lang))),
            p(child.text <-- languageVar.signal.map(lang => translatedNow(lastTask, lang)), styleAttr := "margin: 0; color: #555; font-size: 0.9rem;"),
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
              chapterHints.get(chapterKey).map(hint => p(child.text <-- languageVar.signal.map(lang => translatedNow(hint, lang)), styleAttr := "margin: 0;")).getOrElse(emptyNode)
            )
          )
        },
        button(
          child.text <-- languageVar.signal.map(lang => translatedNow("Merkzettel erstellen", lang)),
          cls := "btn-primary",
          styleAttr := "align-self: flex-start; margin-top: 0.5rem;",
          onClick --> { _ =>
            val sections = pdfHeadings.map { case (chapterKey, heading) =>
              val answer = answerVars.get(chapterKey).map(_.now()).getOrElse("")
              heading -> answer
            }
            val ratingsData = allResponsesVar.now()
            val selfAssessments = chapterLabels.map { case (chapterKey, label) =>
              val chapterLabel = translatedNow(label, languageVar.now())
              val ratingData = ratingsData.get(chapterKey).map(_.rating).getOrElse(RatingData(0, 0, 0, 0, ""))
              val rating = formatChapterRating(ratingData, languageVar.now())
              chapterLabel -> rating
            }
            ensureJsPdfLoaded(() => generateMerkzettelPdf(sections, selfAssessments))
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
        placeholder <-- languageVar.signal.map(lang => translatedNow("Deine Antwort hier...", lang)),
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
        child.text <-- languageVar.signal.map(lang => translatedNow("Antwort überprüfen", lang)),
        onClick --> { _ =>
          val text = textVar.now()
          val isCorrect = matchesKeywords(text, keywords)
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
        case Some(true)  => span(cls := "feedback-correct", child.text <-- languageVar.signal.map(lang => if lang == "en" then " Correct!" else " Richtig!"))
        case Some(false) => span(cls := "feedback-incorrect", child.text <-- languageVar.signal.map(lang => translatedNow("Nicht ganz richtig. Versuche es nochmal!", lang)))
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
                child.text <-- languageVar.signal.map(lang => translatedNow(labelText, lang))
              )
            )
          }
        }
      ),
      button(
        child.text <-- languageVar.signal.map(lang => translatedNow("Antwort überprüfen", lang)),
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
        case Some(true)  => span(cls := "feedback-correct", child.text <-- languageVar.signal.map(lang => if lang == "en" then "Correct!" else "Richtig!"))
        case Some(false) => span(cls := "feedback-incorrect", child.text <-- languageVar.signal.map(lang => translatedNow("Nicht ganz richtig. Versuche es nochmal!", lang)))
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
      h3(child.text <-- languageVar.signal.map(lang => translatedNow(title, lang))),
      image.map(imageSrc => img(alt := title, src := resolveImageUrl(imageSrc), styleAttr := "max-width: 100%; margin: 1rem 0; border-radius: 4px;")),
      children <-- languageVar.signal.map { lang =>
        translatedNow(text, lang).split("\\n").toSeq.map { line =>
          if line.trim.nonEmpty then
            p(linkify(line.trim): _*)
          else
            emptyNode
        }
      }
    )
  end Infotext

  def LösungZeigen(text: String, solutionWords: Set[String], lang: String): Element =
    val displayText = translatedNow(text, lang)
    if solutionWords.isEmpty || solutionWords == Set(" ") then
      div(cls := "loesung-text", displayText)
    else
      val escaped = solutionWords.toList.map(java.util.regex.Pattern.quote)
      val letterClass = "A-Za-zÄÖÜäöüß"
      val pattern = java.util.regex.Pattern.compile(
        "(?i)(^|[^" + letterClass + "])(" + escaped.mkString("|") + "[" + letterClass + "]*)(?=[^" + letterClass + "]|$)"
      )
      val matcher = pattern.matcher(displayText)
      val nodes = scala.collection.mutable.ListBuffer.empty[HtmlElement]
      var last = 0
      while matcher.find() do
        val start = matcher.start(2)
        val end = matcher.end(2)
        if start > last then
          nodes += span(displayText.substring(last, start))
        nodes += b(displayText.substring(start, end))
        last = end
      if last < displayText.length then
        nodes += span(displayText.substring(last))
      div(cls := "loesung-text", children <-- Signal.fromValue(nodes.toList))
  end LösungZeigen

  def allgemeineInfos(title: String, text: String): Element =
    val isOpenVar = Var(false)
    div(
      styleAttr := "margin-top: 1rem; padding: 0.75rem 1rem; background: #f2f7ff; border-radius: 12px; border: 1px solid #b8c9e6; box-shadow: 0 6px 16px rgba(30, 60, 120, 0.08);",
      button(
        typ := "button",
        cls := "btn-primary",
        styleAttr := "padding: 0.45rem 0.8rem;",
        child.text <-- Signal.combineWithFn(isOpenVar.signal, languageVar.signal) { (show, lang) =>
          val translatedTitle = translatedNow(title, lang)
          if show then
            if lang == "en" then s"Hide $translatedTitle" else s"$translatedTitle ausblenden"
          else translatedTitle
        },
        onClick --> (_ => isOpenVar.update(v => !v))
      ),
      child <-- Signal.combineWithFn(isOpenVar.signal, languageVar.signal) { (show, lang) =>
        if show then
          div(
            styleAttr := "margin-top: 0.6rem;",
            translatedNow(text, lang).split("\n").map { line =>
              if line.trim.nonEmpty then
                p(styleAttr := "color: #2d4a7a; margin: 0.3rem 0; line-height: 1.35;", line.trim)
              else
                emptyNode
            }
          )
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
      h3(child.text <-- languageVar.signal.map(lang => translatedNow("Bewertung dieses Kapitels", lang))),
      
      div(
        cls := "rating-category",
        label(child.text <-- languageVar.signal.map(lang => translatedNow("Ich habe den Inhalt verstanden.", lang))),
        p(cls := "rating-hint", child.text <-- languageVar.signal.map(lang => translatedNow("5 Sterne = vollständige Zustimmung, 1 Stern = überhaupt nicht", lang))),
        ratingStars(understandingVar)
      ),
      
      div(
        cls := "rating-category",
        label(child.text <-- languageVar.signal.map(lang => translatedNow("Die Schwierigkeit der Inhalte war:", lang))),
        p(cls := "rating-hint", child.text <-- languageVar.signal.map(lang => translatedNow("5 Sterne = sehr schwierig, 1 Stern = sehr leicht", lang))),
        ratingStars(difficultyVar)
      ),
      
      div(
        cls := "rating-category",
        label(child.text <-- languageVar.signal.map(lang => translatedNow("Die Aufgaben haben mir Spaß gemacht.", lang))),
        p(cls := "rating-hint", child.text <-- languageVar.signal.map(lang => translatedNow("5 Sterne = viel Spaß, 1 Stern = wenig Spaß", lang))),
        ratingStars(qualityVar)
      ),
       div(
        cls := "rating-category",
        label(child.text <-- languageVar.signal.map(lang => translatedNow("Die Zeitangaben für das Kapitel waren:", lang))),
        p(cls := "rating-hint", child.text <-- languageVar.signal.map(lang => translatedNow("5 Sterne = viel zu hoch, 1 Stern = viel zu niedrig", lang))),
        ratingStars(scopeVar)
      ),
      
      div(
        cls := "rating-category",
        label(child.text <-- languageVar.signal.map(lang => translatedNow("Zusätzliche Anmerkungen:", lang))),
        textArea(
          rows := 4,
          placeholder <-- languageVar.signal.map(lang => translatedNow("Deine Anmerkungen hier...", lang)),
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
    onKeyDown --> { e =>
      if (e.ctrlKey || e.metaKey) && e.key.equalsIgnoreCase("v") then
        e.preventDefault()
    },
    onPaste --> { e =>
      e.preventDefault()
    },
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