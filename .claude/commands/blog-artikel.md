# Blog-Artikel erstellen

Schreibe einen vollständigen Blog-Artikel für steffenschuster.de im MDX-Format, der direkt in `content/blog/[slug].mdx` gespeichert werden kann.

## Thema / Kontext vom Nutzer

$ARGUMENTS

---

## Deine Aufgabe

Erstelle auf Basis des oben gegebenen Kontexts einen fertigen MDX-Artikel. Folge dabei exakt der Struktur, dem Ton und dem Aufbau unten. Schreibe auf Deutsch, in der Du-Ansprache (wo relevant), direkt und persönlich — wie Steffen tatsächlich spricht: klar, praxisnah, ohne Marketingfloskeln.

---

## Frontmatter

Beginne jede Datei mit diesem Frontmatter. Leite einen sprechenden, URL-tauglichen Slug aus dem Titel ab (Kleinbuchstaben, Bindestriche, keine Umlaute, kein Sonderzeichen):

```
---
title: "[Präziser, neugierig machender Titel — keine Clickbait-Übertreibung]"
date: "[Heutiges Datum im Format YYYY-MM-DD]"
description: "[1–2 Sätze, die den konkreten Nutzen des Artikels benennen. Was nimmt der Leser mit?]"
author:
  name: "Steffen Schuster"
  bio: "Pädagoge & KI-Pionier aus Hamburg. Gründer von nora-ki.de und educube GmbH."
  avatar: "/portrait.png"
---
```

---

## Artikel-Struktur (exakt in dieser Reihenfolge)

### 1. Einstiegs-Absatz (kein Heading)

Kein H2 davor. Direkt losschreiben. 2–3 Sätze, die die Situation oder den Anlass konkret benennen — wo war Steffen, was war der Kontext, was war der Ausgangspunkt? Keine allgemeinen Einleitungsfloskeln wie „In einer Welt, in der KI…". Lieber: „Letzten Dienstag saß ich mit 18 Lehrkräften in einem Seminarraum in Altona…"

### 2. H2: Die konkrete Situation / Der Auftrag / Was passiert ist

Erzähle den Kern-Kontext aus Steffens Perspektive. Was war der Auftrag, das Setting, die Aufgabe? Schreibe narrativ, nicht auflistend. 2–3 Absätze. Darf ruhig anekdotisch sein.

Wenn es konkrete Aussagen, Fragen oder Zitate von Teilnehmenden/Beteiligten gibt (aus dem Nutzer-Input), integriere sie als Blockquote:

> **[Name oder Rolle]:** „[Zitat]"

### 3. H2: Was die Diskussion / Gruppe / Situation bewegt hat

Dieser Abschnitt enthält 2–3 H3-Unterabschnitte für die wichtigsten Themen, Fragen oder Erkenntnisse, die im Kontext aufgetaucht sind. Nummeriere sie:

#### 1. [Erstes Thema — als prägnante Frage oder Aussage formuliert]

1–2 Absätze. Konkret, praxisnah. Was war die Frage, was war Steffens Antwort oder Einschätzung?

#### 2. [Zweites Thema]

Gleiche Tiefe wie oben.

#### 3. [Drittes Thema — falls vorhanden, sonst weglassen]

### 4. H2: Was wir daraus mitnehmen

3–5 Bulletpoints mit fettem Lead-Satz und kurzem erklärenden Satz danach. Das ist die destillierte Erkenntnis des Artikels.

- **[Erkenntnis in 3–5 Wörtern]:** [1 Satz Erklärung, warum das wichtig ist]
- **[Erkenntnis]:** [Erklärung]
- **[Erkenntnis]:** [Erklärung]

### 5. H2: Fazit

2–3 kurze Absätze. Persönliche Einordnung von Steffen. Kein Zusammenfassen des Gesagten — sondern ein Ausblick, eine Einladung, eine ehrliche Einschätzung. Endet offen oder mit einer Frage an den Leser.

### 6. Abschluss-CTA (kein Heading)

Kurze, natürliche Überleitung zu nora-ki.de. Kein werblicher Ton. Beispiel:

> Wenn du KI direkt in deinen Unterricht oder deine Schule bringen möchtest, schau dir [nora](https://nora-ki.de) an — das Tool, das wir für genau diese Situationen gebaut haben.

---

## Tonalität & Stil

- **Sprache:** Deutsch, Du-Ansprache bei direkter Ansprache, „wir" wenn Steffen über das Team/nora spricht
- **Ton:** Direkt, ehrlich, keine leeren Superlative. Steffen ist Praktiker, kein Theoretiker.
- **Länge:** Zielbedarf ~800–1200 Wörter im Body (ohne Frontmatter). Qualität über Quantität.
- **Zitate:** Kursiv oder als Blockquote mit Quellenangabe. Nie erfunden — nur wenn im Nutzer-Input vorhanden oder plausibel aus dem Kontext ableitbar (dann als „sinngemäß").
- **H1 kommt nie im Body** — der Titel ist im Frontmatter, die Seite zeigt ihn automatisch.
- **Keine leeren Sektionen** — wenn eine Untersektion keinen Inhalt hat, weglassen.

---

## Ausgabe

1. Schlage zuerst den Slug vor (eine Zeile: `Slug: [slug-vorschlag]`)
2. Dann der vollständige MDX-Inhalt in einem Codeblock (` ```mdx … ``` `)
3. Danach: `Speicherpfad: content/blog/[slug].mdx`

Schreibe den Artikel — vollständig, fertig zum Einfügen, keine Platzhalter.
