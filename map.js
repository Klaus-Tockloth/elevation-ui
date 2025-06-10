/*
Purpose:
- Definition und Initialisierung der Leaflet-Basiskarte für die Testseite.

Releases:
- v1.0.0 - 2025-06-10: initial release (simplified for elevation test)

Copyright:
- © 2025 | Klaus Tockloth

License:
- MIT License

Description:
- Initialisiert eine einfache Leaflet-Karte mit OpenStreetMap als Basislayer.
- Exportiert die Karteninstanz global als `window.map` für andere Skripte wie elevation.js.
*/

// Initialisiere die Karte auf die 'Mitte Deutschlands'.
// Stelle sicher, dass die Karte vor dem elevation.js Skript initialisiert wird, da elevation.js
// auf window.map angewiesen ist (siehe DOMContentLoaded Listener in elevation.js).
var map = L.map('map').setView([51.220906, 9.357579], 8);

// Exportiere die Karte für andere Skripte.
window.map = map;

// Füge die OpenStreetMap Basemap hinzu.
var osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21, // erlaube dem Layer, Kacheln bis Zoom 21 darzustellen (Level 20 & 21 werden hochskaliert)
    maxNativeZoom: 19, // OSM liefert native Kacheln bis Zoom 19
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap Contributors</a>'
}).addTo(map);

// Erlaube der Karte als Ganzes, Zoom bis Level 21.
map.options.maxZoom = 21;

// Customize Leaflet attribution prefix (removes the default Leaflet link or adds yours).
map.attributionControl.setPrefix('');
