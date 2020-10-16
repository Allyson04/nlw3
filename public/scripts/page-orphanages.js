//criando mapa
const map = L.map("mapid").setView([-27.2058128,-49.6932569], 15);

//Criando e adicionando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//criando popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidth: 240,
    minHeight: 240
})
.setContent("Lar das Meninas <a href='orphanage.html' id='choose-orphanage'> <img src='./public/images/arrow-white.svg'> </a> ")

//criando e adicionando marcacao
L.marker([-27.2058128,-49.6932569], { icon })
  .addTo(map)
  .bindPopup(popup)