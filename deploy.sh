#!/bin/bash
# ────────────────────────────────────────────────────────────────────────────
# deploy.sh — Änderungen aus diesem Ordner nach GitHub pushen
#
# Dieser Ordner IST jetzt ein echter Git-Klon von
# github.com/educube-a11y/steffenschuster-website. Du bearbeitest Dateien
# direkt hier, und dieses Skript committet und pusht sie — kein Zwischenordner,
# kein Kopieren mehr nötig.
#
# Ausführen: Terminal öffnen, in diesen Ordner wechseln, dann ./deploy.sh
# ────────────────────────────────────────────────────────────────────────────

set -e

cd "$(dirname "$0")"

echo ""
echo "🚀 Deployment vorbereiten..."
echo ""

# 1. Gibt es überhaupt Änderungen?
if git diff --quiet && git diff --cached --quiet && [ -z "$(git status --porcelain)" ]; then
  echo "✅ Keine Änderungen — nichts zu deployen."
  exit 0
fi

# 2. Alles anzeigen, was gleich committet wird
echo "📋 Diese Änderungen werden committet:"
git status --short
echo ""

# 3. Erst committen (macht den Arbeitsordner "sauber")
git add -A
git commit -m "update: $(date '+%Y-%m-%d %H:%M') Website-Änderungen"

# 4. Dann den aktuellen Stand von GitHub holen (falls z. B. über die
#    Admin-Oberfläche etwas geändert wurde) und die eigenen Commits obendrauf
#    setzen, damit es keine Konflikte gibt.
echo ""
echo "📥 Aktuellen Stand von GitHub holen..."
git pull --rebase origin main

echo ""
echo "📤 Wird nach GitHub gepusht..."
git push origin main

echo ""
echo "✅ Fertig! Netlify deployt automatisch."
echo "   ➜ https://app.netlify.com/projects/steffenschuster-website/deploys"
echo ""
