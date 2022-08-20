var map = L.map('map').setView([4.62971, -74.05175], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var roboIcon = L.icon({
    iconUrl: 'https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/robo.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var markerRobo = L.marker([4.60971, -74.08175], {icon: roboIcon}).addTo(map);

var accidenteVialIcon = L.icon({
    iconUrl: 'https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/choque-de-autos.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [50, 50],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
});

var markerAccidenteVial = L.marker([4.61971, -74.07175], {icon: accidenteVialIcon}).addTo(map);

var DesastreNaturalIcon = L.icon({
    iconUrl: 'https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/terremoto.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [50, 50],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
});

var markerDesastreNatural = L.marker([4.62971, -74.05175], {icon: DesastreNaturalIcon}).addTo(map);


//https://leafletjs.com/examples/quick-start/

// Para todos los tipos de reportes, popup descriptivo
markerRobo.bindPopup("<b>ROBO</b><br>Se ha reportado un robo aquí.").openPopup();

markerAccidenteVial.bindPopup("<b>ACCIDENTE VIAL</b><br>Se ha reportado un accidente vial aquí.").openPopup();

markerDesastreNatural.bindPopup("<b>DESASTRE NATURAL</b><br>Se ha reportado un desastre natural aquí.").openPopup();

// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

//Para señalar la zona comprendida entre los reportes
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);
// polygon.bindPopup("I am a polygon.");

//Eventos de click

// mostrando una alerta
// function onMapClick(e) {
//     alert("Diste click aquí " + e.latlng);
// }

// map.on('click', onMapClick);

//mostrando un pop up cuando se clickea

var popup = L.popup();
var visibilidadBoton = document.getElementById("botonReportar");

function onMapClick(e) {
    visibilidadBoton.className -= "d-none";
    // visibilidadBoton.className += "d-block";
    popup
        .setLatLng(e.latlng)
        .setContent("&#x1f4cd; Por favor dinos cuál es el tipo de reporte que deseas hacer sobre esta ubicación haciendo click en el botón bajo el mapa &#x2b07;&#xfe0f; &#x2b07;&#xfe0f; &#x2b07;&#xfe0f;")
        .openOn(map);
        // var coordenadasReporte = e.latlng.toString();
        // alert(coordenadasReporte);    
}

map.on('click', onMapClick);


function enviarReporteDesastreNaturalABackEnd () {
    alert("Enviando datos sobre desastre natural a back end");
    // visibilidadBoton.className -= "d-block";
    visibilidadBoton.className += "d-none";
}

function enviarReporteRoboABackEnd () {
    alert("Enviando datos sobre robo a back end");
    visibilidadBoton.className -= "d-block";
    visibilidadBoton.className += "d-none";
}

function enviarReporteAccidenteVialABackEnd () {
    alert("Enviando datos sobre accidente vial a back end");
    visibilidadBoton.className -= "d-block";
    visibilidadBoton.className += "d-none";
}
