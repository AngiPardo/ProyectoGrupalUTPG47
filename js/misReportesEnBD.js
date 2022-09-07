// //Seleccionado la etiqueta ul para tratarla más adelante
// const miLista = document.querySelector('ul');
  
//Accediendo a los datos del JSON (por lo pronto de manera local, luego con los datos entregados por el backend con JSON)
const miSolicitud2 = new Request('misDatosConsultados.json');

// const url = 'http://irreverente.net/AppWebProyectoSeguridadCiudadana/misDatosConsultados.json';
 
fetch(miSolicitud2, {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
    .then(response => response.json())
    .then(misDatosConsultadosJSON => {
      for (const miDatoConsultado of misDatosConsultadosJSON.misDatosConsultados) {
        
        if(miDatoConsultado.tipoReporte == 1) {
            var tipoReporteConsultado = "DESASTRE NATURAL";
            var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/terremoto.png"; 
        } else if(miDatoConsultado.tipoReporte == 2) {
            var tipoReporteConsultado = "ACCIDENTE VIAL";
            var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/choque-de-autos.png";
        } else if(miDatoConsultado.tipoReporte == 3) {
            var tipoReporteConsultado = "ROBO";
            var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/robo.png";
        }

        // Visualizar popup del icono cuando se de click sobre el
        var Icon = L.icon({
            iconUrl: iconoUrl,
            // shadowUrl: 'leaf-shadow.png',

            iconSize:     [50, 50], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [10, -35] // point from which the popup should open relative to the iconAnchor
        });
        
        var textoPopup = `<b>${tipoReporteConsultado}</b><br>${miDatoConsultado.detallesDelReporte}</b><br>Fecha :${miDatoConsultado.fechaReporte}. <br> <strong>Puedes editarlo o borrarlo</strong>`;
        var marker = L.marker([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {icon: Icon}).addTo(map);
        var popup = L.popup();
        marker.bindPopup(textoPopup).openPopup();

        // alert(botonEnviarElReporte.className.includes('visible'));

        // if(botonEnviarElReporte.className.includes('visible')) {
        //   botonEnviarElReporte.className -= ' visible';
        //   botonEnviarElReporte.className += ' invisible';

        //   botonEditar.className -= ' invisible';
        //   botonEditar.className += ' visible';

        //   botonEliminar.className -= ' invisible';
        //   botonEliminar.className += ' visible';
        // } 

        //Reportes hechos por el usuario
        var circle = L.circle([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {
          color: 'purple',
          fillColor: '#fff',
          fillOpacity: 0.9,
          radius: 1500
      }).addTo(map);
      }
    })
    .catch(console.error);