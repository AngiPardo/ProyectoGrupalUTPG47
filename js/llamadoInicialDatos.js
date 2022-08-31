
// // https://zetcode.com/javascript/jsonforeach/
// //Recibiendo la información de la base de datos
// //Método GET
// //Parseo el JSON recibido

// // const logBtn = document.getElementById('log');
// // logBtn.addEventListener('click', fetchData);

// // async function fetchData() {

//     const response = await fetch('https://irreverente.net/AppWebProyectoSeguridadCiudadana/archivoPruebaInicioSesion.json');
//     const data = await response.json();

//     data.forEach(obj => {
//         Object.entries(obj).forEach(([key, value]) => {
//             console.log(`${key} ${value}`);
//         });
//         console.log('-------------------');
//     });
// // }




// var coordenadasDelReporte = document.getElementById('coordenadasReportadas');

// function onMapClick(e) {
    
//     var coordenadas = e.latlng;
//     var latitud = coordenadas.lat;
//     var longitud = coordenadas.lng;
//     coordenadasDelReporte.value = latitud+ "," + longitud;

//     var circle = L.circle([latitud, longitud], {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 500
//     }).addTo(map);
// }
// map.on('click', onMapClick);


// var eleccionTipoReporte = document.getElementById('selectorTipoReporte');
// var detallesDelReporte = document.getElementById('entradaDeLosDetalles');
// var fechaReporte = document.getElementById('fechaReporte');
// var botonEnviarElReporte = document.getElementById('botonEnviarReporte');

// botonEnviarElReporte.addEventListener('click',enviarReporteABackEnd);

// function enviarReporteABackEnd () {

//     var coordenadasFinalesReportadas = coordenadasDelReporte.value.split(",");
//     var latitudReportada = coordenadasFinalesReportadas[0];
//     var longitudReportada = coordenadasFinalesReportadas[1];

//     if(eleccionTipoReporte.value == "Elige un tipo de reporte") {
//         alert('Información incompleta');           
//     } else if(eleccionTipoReporte.value == 1) {
//         var tipoReporte = "DESASTRE NATURAL";
//         var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/terremoto.png"; 
//         alert(`[{
//             "TipoDeReporte": "${tipoReporte}",
//             "DescripcionDelReporte": "${detallesDelReporte.value}",
//             "FechaDelReporte": "${fechaReporte.value}",
//             "Latitud": "${latitudReportada}",
//             "Longitud": "${longitudReportada}"
//         }]`);
//     } else if(eleccionTipoReporte.value == 2) {
//         var tipoReporte = "ACCIDENTE VIAL";
//         var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/choque-de-autos.png";
//         alert(`[{
//             "TipoDeReporte": "${tipoReporte}",
//             "DescripcionDelReporte": "${detallesDelReporte.value}",
//             "FechaDelReporte": "${fechaReporte.value}",
//             "Latitud": "${latitudReportada}",
//             "Longitud": "${longitudReportada}"
//         }]`);
//     } else if(eleccionTipoReporte.value == 3) {
//         var tipoReporte = "ROBO";
//         var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/robo.png";
//         alert(`[{
//             "TipoDeReporte": "${tipoReporte}",
//             "DescripcionDelReporte": "${detallesDelReporte.value}",
//             "FechaDelReporte": "${fechaReporte.value}",
//             "Latitud": "${latitudReportada}",
//             "Longitud": "${longitudReportada}"
//         }]`);
//     }

//     var Icon = L.icon({
//         iconUrl: iconoUrl,
//         // shadowUrl: 'leaf-shadow.png',
    
//         iconSize:     [50, 50], // size of the icon
//         shadowSize:   [50, 64], // size of the shadow
//         iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//         shadowAnchor: [4, 62],  // the same for the shadow
//         popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
//     });
    
//     var marker = L.marker([latitudReportada, longitudReportada], {icon: Icon}).addTo(map);

//     var popup = L.popup();
//     marker.bindPopup(`<b>${tipoReporte}</b><br>${detallesDelReporte.value}</b><br>Fecha :${fechaReporte.value}`).openPopup();
// }