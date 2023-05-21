
var map = L.map('map').setView([51.505, -0.09], 13);
let myIcon = L.icon({
    iconUrl: 'icons/poland32.png',
    iconSize: [19, 29],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

     

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    // Dla każdego elementu w tablicy danych
    data.forEach(element => {
      // Pobierz współrzędne
      const coords = element.wspolrzedne;
      // Pobierz miasto i adres
      const city = element.miasto;
      const address = element.adres.ulica;
      // Stwórz marker
      const marker = L.marker(coords, { icon: myIcon }).addTo(map);
      // Dodaj popup z adresem i miastem
      marker.bindPopup(`<b>${city}</b><br>${address}`).openPopup();
    });
  });


// Pobierz referencje do elementów HTML
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Dodaj obsługę zdarzenia kliknięcia przycisku wyszukiwania
searchButton.addEventListener('click', () => {
  // Reszta kodu obsługującego wyszukiwanie...
});
