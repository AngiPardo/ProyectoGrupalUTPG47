var map = L.map('map').setView([4.62971, -74.05175], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


var coordenadasDelReporte = document.getElementById('coordenadasReportadas');

var popup = L.popup();

function onMapClick(e) {
    
    var coordenadas = e.latlng;
    var latitud = coordenadas.lat;
    var longitud = coordenadas.lng;
    coordenadasDelReporte.value = latitud+ "," + longitud;

    var circle = L.circle([latitud, longitud], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
}
map.on('click', onMapClick);


var eleccionTipoReporte = document.getElementById('selectorTipoReporte');
var detallesDelReporte = document.getElementById('entradaDeLosDetalles');
var fechaReporte = document.getElementById('fechaReporte');
var botonEnviarElReporte = document.getElementById('botonEnviarReporte');

botonEnviarElReporte.addEventListener('click',enviarReporteABackEnd);

function enviarReporteABackEnd () {

    var coordenadasFinalesReportadas = coordenadasDelReporte.value.split(",");
    var latitudReportada = coordenadasFinalesReportadas[0];
    var longitudReportada = coordenadasFinalesReportadas[1];

    if(eleccionTipoReporte.value == "Elige un tipo de reporte") {
        alert('Información incompleta');           
    } else if(eleccionTipoReporte.value == 1) {
        var tipoReporte = "DESASTRE NATURAL";
        var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/terremoto.png"; 
        alert(`[{
            "TipoDeReporte": "${tipoReporte}",
            "DescripcionDelReporte": "${detallesDelReporte.value}",
            "FechaDelReporte": "${fechaReporte.value}",
            "Latitud": "${latitudReportada}",
            "Longitud": "${longitudReportada}"
        }]`);
    } else if(eleccionTipoReporte.value == 2) {
        var tipoReporte = "ACCIDENTE VIAL";
        var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/choque-de-autos.png";
        alert(`[{
            "TipoDeReporte": "${tipoReporte}",
            "DescripcionDelReporte": "${detallesDelReporte.value}",
            "FechaDelReporte": "${fechaReporte.value}",
            "Latitud": "${latitudReportada}",
            "Longitud": "${longitudReportada}"
        }]`);
    } else if(eleccionTipoReporte.value == 3) {
        var tipoReporte = "ROBO";
        var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/robo.png";
        alert(`[{
            "TipoDeReporte": "${tipoReporte}",
            "DescripcionDelReporte": "${detallesDelReporte.value}",
            "FechaDelReporte": "${fechaReporte.value}",
            "Latitud": "${latitudReportada}",
            "Longitud": "${longitudReportada}"
        }]`);
    }

    var Icon = L.icon({
        iconUrl: iconoUrl,
        // shadowUrl: 'leaf-shadow.png',
    
        iconSize:     [50, 50], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    
    var marker = L.marker([latitudReportada, longitudReportada], {icon: Icon}).addTo(map);
    marker.bindPopup(`<b>${tipoReporte}</b><br>${detallesDelReporte.value}</b><br>Fecha :${fechaReporte.value}`).openPopup();
}

