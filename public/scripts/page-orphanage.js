// options
const options = {
    dragging: false,
    touchZone: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//criando mapa
const map = L.map("mapid", options).setView([-27.2058128,-49.6932569], 15);

//Criando e adicionando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//criando e adicionando marcacao
L.marker([-27.2058128,-49.6932569], { icon })
  .addTo(map)

//   image Gallery

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    //read all buttons
    const buttons = document.querySelectorAll(".images button")
    
    //remove all active classes
    buttons.forEach((button) => {
        button.classList.remove(".active")
        })

    //select clicked images
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //refresh image container

    imageContainer.src = image.src

    //add active classes to clicked button
    button.classList.add("active")
}