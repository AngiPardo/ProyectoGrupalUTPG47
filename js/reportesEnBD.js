
// //Seleccionado la etiqueta ul para tratarla más adelante
// const miLista = document.querySelector('ul');
  
//Accediendo a los datos del JSON (por lo pronto de manera local, luego con los datos entregados por el backend con JSON)
const miSolicitud = new Request('datosConsultados.json');

// const url = 'http://irreverente.net/AppWebProyectoSeguridadCiudadana/datosConsultados.json';
 
fetch(miSolicitud, {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
    .then(response => response.json())
    .then(datosConsultadosJSON => {
      for (const datoConsultado of datosConsultadosJSON.datosConsultados) {
        
        if(datoConsultado.tipoReporte == 1) {
            var tipoReporteConsultado = "DESASTRE NATURAL";
            var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/terremoto.png"; 
        } else if(datoConsultado.tipoReporte == 2) {
            var tipoReporteConsultado = "ACCIDENTE VIAL";
            var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/choque-de-autos.png";
        } else if(datoConsultado.tipoReporte == 3) {
            var tipoReporteConsultado = "ROBO";
            var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/robo.png";
        }

        // Visualizar popup del icono cuando se de click sobre el
        var Icon = L.icon({
            iconUrl: iconoUrl,
            // shadowUrl: 'leaf-shadow.png',

            iconSize:     [50, 50], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        
        var marker = L.marker([datoConsultado.latitudReportada, datoConsultado.longitudReportada], {icon: Icon}).addTo(map);
        var popup = L.popup();
        marker.bindPopup(`<b>${tipoReporteConsultado}</b><br>${datoConsultado.detallesDelReporte}</b><br>Fecha :${datoConsultado.fechaReporte}`).openPopup();
      }
    })
    .catch(console.error);