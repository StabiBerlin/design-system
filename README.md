![Designsystem-Headerbild der Staatsbibliothek zu Berlin](https://github.com/user-attachments/assets/ce6e2174-d243-42ce-879c-6c31592a4c9a)


# Design System - Staatsbibliothek zu Berlin
## Beschreibung
Wir entwickeln eine zentrale Anlaufstelle für Standards zur Gestaltung digitaler Produkte der Stabi.
Das Design System ist ein gemeinsamer Satz wiederverwendbarer Komponenten, Muster und Richtlinien. Hiermit wollen wir die Entwicklung konsistenter, nutzerfreundlicher Produkte beschleunigen und eine nahtlose, kohärente Nutzererfahrung aufbauen. Mit dem Strategiepapier „Stabi 2030“ hat die Staatsbibliothek ihre Ausrichtung auf Nutzerzentrierung und Barrierefreiheit digitaler Systeme weiter gestärkt. Das Design System unterstützt diese strategischen Ziele, indem es die Grundlage für nutzendenzentrierte  und barrierearme digitale Services schafft.

## Motivation
* **Konsistenz:** Alle digitalen Produkte folgen denselben visuellen und funktionalen Standards und stärken so das Nutzererlebnis und die Markenwahrnehmung. Auch wenn mehrere Teams parallel an verschiedenen Produkten arbeiten, sorgt das Design System für ein kohärentes Nutzererlebnis.
* **Effizienz:** Statt jedes Mal von vorne anzufangen, können die Teams direkt auf bereits entwickelte, getestete Bausteine zurückgreifen. So starten Projekte zügig und erhalten von Beginn an ein professionelles, einheitliches Erscheinungsbild. Durch die Wiederverwendbarkeit bestehender Komponenten sparen die Teams Zeit, die sie stattdessen in Features oder andere Projekte investieren können.
* **Skalierbarkeit und Anpassungsfähigkeit:** Das Design System ist flexibel genug, um sich an neue Anforderungen anzupassen und stellt sicher, dass alle digitalen Produkte auch in Zukunft denselben Standards folgen.
* **Nutzendentrierung:** Das Design System unterstützt dabei, die digitalen Produkte konsequent an den Bedürfnissen der Nutzenden auszurichten, indem es klare Richtlinien und erprobte Muster bereitstellt, die intuitive und nutzendenfreundliche Erlebnisse fördern.
* **Barrierefreiheit:** Unsere Komponenten erfüllen aktuelle Standards und erleichtern es, barrierearme und nutzerzentrierte Produkte zu schaffen – ohne großen zusätzlichen Aufwand. Jede Anpassung fließt systemweit ein und sichert nachhaltige Qualität.

## Umfang
* [Figma File für die Dokumentation des Design Systems](https://www.figma.com/design/5Ribk1gHzE5UFiAPnyWv9n/DESIGN-SYSTEM?node-id=1039-9&t=LgZXIeiM8r03UBps-1)
* Foundation Design Tokens: Zentrale Variablen, die Design-Informationen wie Farben, Abstände, Schriftgrößen und weitere stilistische Eigenschaften speichern
* Bereitstellung des Design Systems über ein CDN (via jsdeliver)
* Eine Komponetenbibliothek aufbauend auf den Design Tokens (in Arbeit)

## Verwendung
In der Datei [`tokens.css`](tokens.css) werden die Design Tokens als CSS-Variablen bereitgestellt.
Sie können lokal eingebunden oder über ein CDN integriert werden. Falls zusätzliche Ausgabeformate erforderlich sind, steht das Design-Team für Rückfragen zur Verfügung.

### Installation
**1. Einbindung via JSDelivr in das Stylesheet:** Die Datei "tokens.css" kann im Haupt-Stylesheet eingebunden werden:

```css
@import url('https://cdn.jsdelivr.net/gh/StabiBerlin/design-tokens@v1.0.1/tokens.css');
```

**2. Einbindung via JSDelivr in das Markup:** Die Datei "tokens.css" kann im Markup eingebunden werden:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/StabiBerlin/design-tokens@v1.0.1/tokens.css">
```

### Beispiele
#### Card-Komponente
Ein Beispiel für die Anwendung der Design Tokens auf eine Card-Komponente aus dem Bootstrap Framework:

```css
.card {
  border: var(--size.hairline) solid var(--color.stroke.strong);   /* Rahmenfarbe */
  border-radius: var(--border-radius-12);                         /* Runde Ecken */
  padding: var(--distance.doubleLarge);                          /* Konsistente Innenabstände */
  background-color: var(color.background.subtle);               /* Hintergrundfarbe */
}
```

## Kontakt
Das Design System wird von dem UX-Team der Staatsbibliothek zu Berlin betreut. 
Kontakt über <a href="mailto:informationsdesign@sbb.spk-berlin.de">E-Mail</a> oder dem Design System Webex Kanal (Anfrage per Mail).



