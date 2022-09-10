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

        var idReporte = miDatoConsultado.idDeReporte;

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

        var textoPopup = `<span style= "color: transparent;" id="idInvisibleEnMiniPopUP">${idReporte}</span><br><b>${tipoReporteConsultado}</b><br>${miDatoConsultado.detallesDelReporte}</b><br>Fecha :${miDatoConsultado.fechaReporte} <br><button onclick="verDataid" data-id="${idReporte}" data-bs-toggle="modal" data-bs-target="#exampleModal5" style="margin: 5px; padding: 5px; background-color: lightblue;" id="btnEditarOEliminar">Editar o eliminar mis reportes</button>`;

      

        //USAR LOS IDENTIFICADORES UNICOS GENERADOS CON LA LIBRERÍA UUID PARA EDITAR EL EVENTO

        // Valor fijo del reporte previo
        var tipoRep = document.getElementById('tipoDelReporte');
        tipoRep.innerHTML = tipoReporteConsultado;

        // var idRep = document.getElementById('idInvisibleEnMiniPopUP');
        

        var marker = L.marker([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {icon: Icon, iconId: idReporte}).addTo(map).on('click', evento);

        function evento(e) {
          var idActual = this.options.iconId;
        }

        //Editar
        var botonEditar = document.getElementById('botonEditarReporte');
          
        botonEditar.setAttribute('data-id', '`${idActual}`')
  
        //Eliminar
        var botonEliminar = document.getElementById('botonEliminarReporte');

        botonEliminar.setAttribute('data-id', "${idActual}")
        
        botonEditar.addEventListener('click', enviarEdicionABackEnd);

        var dataID = botonEditar.getAttribute('data-id');
        // alert(dataID); // VOY POR AQUÍ SEPTIEMBRE 9 Necesito hacer que la variable idActual se pueda usar por fuera de la función evento 
        
        function enviarEdicionABackEnd() {
          alert(`Solicitud de edición del reporte con el id [{
            "idDeReporte": "${idActual}",
          }]`);
        }
        
        botonEliminar.addEventListener('click', enviarEliminacionABackEnd);

        function enviarEliminacionABackEnd() {
          alert(`Solicitud de eliminación del reporte con el id [{
            "idDeReporte": "${idActual}",
          }]`);
          //relativo a peticion DELETE
        }

        var popup = L.popup();
        marker.bindPopup(textoPopup).openPopup();
        // var i = marker
        // alert(i);

        //Reportes hechos por el usuario
        var circle = L.circle([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {
          color: 'purple',
          fillColor: '#fff',
          fillOpacity: 0.5,
          radius: 1500
        }).addTo(map);
      }
    })
    .catch(console.error);





