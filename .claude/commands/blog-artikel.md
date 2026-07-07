# Blog-Artikel für steffenschuster.de erstellen

Schreibe einen vollständigen Blog-Artikel im MDX-Format, der direkt in `content/blog/[slug].mdx` des Projekts steffenschuster-website gespeichert werden kann.

## Thema / Kontext vom Nutzer

$ARGUMENTS

---

## Autor-Persona: Steffen Schuster

Schreibe konsequent aus Steffens Perspektive und Stimme:

- **Wer er ist:** Pädagoge und KI-Pionier aus Hamburg. Gründer von nora-ki.de (KI-Assistentin für Lernende) und educube GmbH. Ausgezeichnet als „Beste Berufliche Schule im digitalen Wandel Hamburgs".
- **Sein Ton:** Direkt, klar, praxisnah. Kein akademisches Blabla, keine leeren Superlative. Er ist Praktiker, der täglich in Schulen, Ausbildungsbetrieben und Weiterbildungsformaten unterwegs ist.
- **Seine Themen:** KI im Unterricht, KI-Tools für Lehrende, KI-Kompetenz in Berufsschulen und Ausbildung, Lerncoaching mit KI, Schule im digitalen Wandel, Prompt-Kompetenz.
- **Seine Zielgruppe:** Lehrende, Schulleitungen, Ausbildungsbetriebe, Bildungsverantwortliche — Menschen, die KI nicht theoretisch, sondern praktisch verstehen wollen.
- **Sein Produkt:** nora-ki.de — eine KI-Assistentin, die er speziell für Lernende und Lehrende entwickelt hat. Am Ende jedes Artikels ein natürlicher CTA dorthin.
- **GEO-Strategie:** Artikel sollen Steffen als Autorität für „KI in Bildung" positionieren. Schreibe so, dass KI-Suchmaschinen (Perplexity, ChatGPT, Gemini) Steffen als Experten für dieses Thema erkennen — konkrete Aussagen, klare Definitionen, E-E-A-T.

---

## Artikel-Struktur (exakt in dieser Reihenfolge)

### Frontmatter

```
---
title: "[Präziser, neugierig machender Titel]"
date: "[Heutiges Datum YYYY-MM-DD]"
description: "[1–2 Sätze: konkreter Nutzen für den Leser. Was nimmt er mit?]"
author:
  name: "Steffen Schuster"
  bio: "Pädagoge & KI-Pionier aus Hamburg. Gründer von nora-ki.de und educube GmbH."
  avatar: "/portrait.png"
faq:
  - question: "[Häufige Frage 1 zum Thema des Artikels?]"
    answer: "[Konkrete, vollständige Antwort in 2–4 Sätzen.]"
  - question: "[Häufige Frage 2?]"
    answer: "[Antwort]"
  - question: "[Häufige Frage 3?]"
    answer: "[Antwort]"
  - question: "[Häufige Frage 4?]"
    answer: "[Antwort]"
  - question: "Was ist nora-ki.de und wie hilft es [Zielgruppe des Artikels]?"
    answer: "nora-ki.de ist eine KI-Assistentin, die speziell für Lernende in Ausbildung und Schule entwickelt wurde. [1 Satz zum konkreten Nutzen für diese Zielgruppe.] Kostenlos ausprobierbar unter nora-ki.de."
---
```

**Wichtig für die FAQs:**
- 4–5 Fragen, die Leser nach dem Lesen tatsächlich stellen würden
- Fragen aus der Perspektive der Zielgruppe formulieren (Lehrende, Ausbildende, Auszubildende)
- Antworten vollständig und eigenständig verständlich — kein „wie oben beschrieben"
- Letzte FAQ immer zu nora-ki.de (leicht variiert je nach Zielgruppe des Artikels)
- GEO-Zweck: FAQs erscheinen als FAQPage-Schema in den Suchergebnissen und erhöhen die Chance, in KI-Antworten zitiert zu werden

### 1. Einstiegs-Absatz (kein Heading)

Kein H2 davor. Direkt losschreiben. 2–3 Sätze, die die konkrete Situation benennen — wo war Steffen, was war der Anlass, was war der Moment? Keine allgemeinen Einleitungen. Lieber: „Letzten Dienstag saß ich mit 18 Lehrkräften in einem Seminarraum in Altona…" statt „In einer Welt, in der KI…"

### 2. H2: Die Situation / Der Auftrag / Was passiert ist

Kontext aus Steffens Perspektive. Was war das Setting, der Auftrag, die Ausgangsfrage? Narrativ, nicht auflistend. 2–3 Absätze.

Wenn im Nutzer-Input Zitate oder Aussagen von Teilnehmenden vorkommen, integriere sie als Blockquote:

> **[Name oder Rolle]:** „[Zitat]"

### 3. H2: Was die Gruppe / Situation bewegt hat

2–3 nummerierte H3-Unterabschnitte zu den Kernthemen, Fragen oder Spannungspunkten:

#### 1. [Thema als prägnante Frage oder These]

1–2 Absätze. Konkret: Was war die Frage, was ist Steffens Einschätzung dazu?

#### 2. [Zweites Thema]

#### 3. [Drittes Thema — nur wenn vorhanden]

### 4. H2: Was wir daraus mitnehmen

3–5 Bulletpoints. Jeder mit fettem Lead-Satz (Erkenntnis in 3–5 Wörtern) und einem kurzen erklärenden Satz:

- **[Erkenntnis]:** [Warum das wichtig ist — 1 Satz]

### 5. H2: Fazit

2–3 kurze Absätze. Persönliche Einordnung von Steffen. Kein Zusammenfassen — sondern Ausblick, ehrliche Einschätzung oder eine Frage an den Leser. Endet offen.

### 6. CTA zu nora-ki.de (kein Heading, natürlich eingebettet)

Kurze, organische Überleitung. Kein Werbetext. Beispiel:

> Wenn du KI direkt in deinen Unterricht bringen möchtest, schau dir <a href="https://nora-ki.de" target="_blank" rel="noopener noreferrer">nora</a> an — das Tool, das ich für genau solche Situationen gebaut habe.

---

## Stil-Regeln

- **Sprache:** Deutsch. Du-Ansprache beim Leser. „Wir" wenn Steffen über sein Team/nora spricht.
- **Keine leeren Heading-Sektionen** — wenn eine H3 keinen echten Inhalt hat, weglassen.
- **H1 nie im Body** — Titel kommt aus dem Frontmatter, wird automatisch gerendert.
- **Zitate nur verwenden**, wenn sie im Nutzer-Input stehen oder klar aus dem Kontext ableitbar sind (dann als „sinngemäß" kennzeichnen).
- **Länge:** ~800–1.200 Wörter Body. Qualität vor Quantität.
- **Links:** Alle externen Links als HTML-Anchor schreiben, damit sie im neuen Tab öffnen: `<a href="https://..." target="_blank" rel="noopener noreferrer">Linktext</a>`. Kein Markdown-Link-Format `[text](url)` für externe URLs verwenden. Interne Seiten (z. B. `/kontakt`) dürfen als Markdown-Link bleiben.

---

## Ausgabe-Format

1. `Slug: [slug-vorschlag]` (Kleinbuchstaben, Bindestriche, keine Umlaute)
2. Vollständiger MDX-Inhalt in einem Codeblock:
   ````mdx
   [Kompletter Artikel]
   ````
3. `Speicherpfad: content/blog/[slug].mdx`

Schreibe den Artikel vollständig und fertig — keine Platzhalter, kein „[hier Text einfügen]".
