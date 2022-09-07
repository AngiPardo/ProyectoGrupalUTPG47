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
        // alert(idUnico);
        var textoPopup = `<b>${tipoReporteConsultado}</b><br>${miDatoConsultado.detallesDelReporte}</b><br>Fecha :${miDatoConsultado.fechaReporte}. <br><button data-bs-toggle="modal" data-bs-target="#exampleModal5" onclick="enviarEdicionABackEnd" style="margin: 5px; padding: 5px; background-color: lightblue;" id="btnEditar">Editar</button><button data-bs-toggle="modal" data-bs-target="#exampleModal6" onclick="enviarEliminacionABackEnd" style="margin: 5px; padding: 5px; background-color: lightblue;" id="btnEliminar">Eliminar</button>`;

        // var botonEditar = document.getElementById('btnEditar');
        // var botonEliminar = document.getElementById('btnEliminar');

        // botonEditar.addEventListener('click', enviarEdicionABackEnd);
        // botonEliminar.addEventListener('click', enviarEliminacionABackEnd);

        var marker = L.marker([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {icon: Icon}).addTo(map);
        var popup = L.popup();
        marker.bindPopup(textoPopup).openPopup();

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



//USAR LOS IDENTIFICADORES UNICOS GENERADOS CON LA LIBRERÍA UUID PARA EDITAR EL EVENTO

// var TipoReporteEditado = document.getElementById('selectorTipoReporte');
// var DetallesDelReporteEditado = document.getElementById('entradaDeLosDetalles');
// var FechaReporteEditado = document.getElementById('fechaReporte');


// TipoReporteEditado = tipoReporteConsultado;
// DetallesDelReporteEditado.value = miDatoConsultado.detallesDelReporte;
// FechaReporteEditado.value = miDatoConsultado.fechaReporte;
// latitudReportada = miDatoConsultado.latitudReportada;
// longitudReportada = miDatoConsultado.longitudReportada;


// var botonEditar = document.getElementById('botonEditarReporte');

// botonEditar.addEventListener('click', enviarEdicionABackEnd);

function enviarEdicionABackEnd() {
    //relativo a peticion PUT
    alert("Editar");
    // alert(`[{
    //     "idDeReporte": "${idReporte}",
    //     "TipoDeReporte": "${TipoReporteEditado}",
    //     "DescripcionDelReporte": "${DetallesDelReporteEditado.value}",
    //     "FechaDelReporte": "${FechaReporteEditado.value}",
    //     "Latitud": "${latitudReportada}",
    //     "Longitud": "${longitudReportada}"
    // }]`);
}


//USAR LOS IDENTIFICADORES UNICOS GENERADOS CON LA LIBRERÍA UUID PARA ELIMINAR EL EVENTO

// var botonEliminar = document.getElementById('botonEliminarReporte');

// botonEliminar.addEventListener('click', enviarEliminacionABackEnd);

function enviarEliminacionABackEnd() {
    //relativo a peticion PUT
    alert("Eliminar");
    // alert(`[{
    //     "idDeReporte": "${idReporte}",
    // }]`);
}




