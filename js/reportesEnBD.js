// //Reconociendo el nombre del usuario
// var nombre_usuario_recibido = localStorage.getItem('nombre_usuario');
// // alert(nombre_usuario_recibido);

// //Accediendo a los datos del JSON (por lo pronto de manera local, luego con los datos entregados por el backend con JSON)
// const miSolicitud2 = new Request('datosConsultados.json');

// // const url = 'http://irreverente.net/AppWebProyectoSeguridadCiudadana/misDatosConsultados.json';
 
// fetch(miSolicitud2, {
//     method: "GET",
//     headers: {"Content-type": "application/json;charset=UTF-8"}
//   })
//     .then(response => response.json())
//     .then(misDatosConsultadosJSON => {
//       for (const miDatoConsultado of misDatosConsultadosJSON.misDatosConsultados) {
//         // alert(nombre_usuario_recibido==miDatoConsultado.nombreUsuarioDeReporte); 
//         // if(nombre_usuario_recibido==miDatoConsultado.nombreUsuarioDeReporte) {
//         if(miDatoConsultado.tipoReporte == 1) {
//           var tipoReporteConsultado = "DESASTRE NATURAL";
//           var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/terremoto.png"; 
//         } else if(miDatoConsultado.tipoReporte == 2) {
//           var tipoReporteConsultado = "ACCIDENTE VIAL";
//           var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/choque-de-autos.png";
//         } else if(miDatoConsultado.tipoReporte == 3) {
//           var tipoReporteConsultado = "ROBO";
//           var iconoUrl = "https://irreverente.net/AppWebProyectoSeguridadCiudadana/img/robo.png";
//         }

//         // Visualizar popup del icono cuando se de click sobre el
//         var Icon = L.icon({
//             iconUrl: iconoUrl,
//             // shadowUrl: 'leaf-shadow.png',
//             iconSize:     [50, 50], // size of the icon
//             shadowSize:   [50, 64], // size of the shadow
//             iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
//             shadowAnchor: [4, 62],  // the same for the shadow
//             popupAnchor:  [10, -35] // point from which the popup should open relative to the iconAnchor
//         });

//         if(nombre_usuario_recibido==miDatoConsultado.nombreUsuarioDeReporte) {  

//           var idReporte = miDatoConsultado.idDeReporte;
  
//           var textoPopup = `<span style= "color: transparent;" id="idInvisibleEnMiniPopUP">${idReporte}</span><br><b>${tipoReporteConsultado}</b><br>${miDatoConsultado.detallesDelReporte}</b><br>Fecha :${miDatoConsultado.fechaReporte} <br><button onclick="verDataid" data-id="${idReporte}" data-bs-toggle="modal" data-bs-target="#exampleModal5" style="margin: 5px; padding: 5px; background-color: lightblue;" id="btnEditarOEliminar">Editar o eliminar este reporte</button>`;
  
//           //USAR LOS IDENTIFICADORES UNICOS GENERADOS CON LA LIBRERÍA UUID PARA EDITAR EL EVENTO
  
//           var marker = L.marker([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {icon: Icon, iconId: idReporte, iconTipo: tipoReporteConsultado,  iconDescripcion: miDatoConsultado.detallesDelReporte, iconFecha: miDatoConsultado.fechaReporte, iconLatitud: miDatoConsultado.latitudReportada, iconLongitud: miDatoConsultado.longitudReportada, iconTexto: textoPopup}).addTo(map).on('click', eventoClick);
  
//           function eventoClick(e) {
            
//             var idActual = this.options.iconId;
//             var tipoActual = this.options.iconTipo; 
//             var descripcionActual = this.options.iconDescripcion;
//             var fechaActual = this.options.iconFecha;
//             var latitudActual = this.options.iconLatitud;
//             var longitudActual = this.options.iconLongitud;
//             var textoActual = this.options.iconTexto;
//             // alert(textoActual);
  
//             var campoid = document.getElementById('idDelReporteSinEdicion');
//             var campoSinEdicionTipo = document.getElementById('tipoDelReporteSinEdicion');
//             var campoSinEdicionDetalle = document.getElementById('entradaDeLosDetallesEdicion');
//             var campoSinEdicionFecha = document.getElementById('fechaReporteEdicion');
  
//             campoid.innerHTML = idActual;
//             campoSinEdicionTipo.innerHTML = tipoActual;
//             campoSinEdicionDetalle.innerHTML = descripcionActual;
//             campoSinEdicionFecha.innerHTML =  fechaActual;
  
//             // function getFeaturesInView() {
//             //   var features = [];
//             //   map.eachLayer( function(layer) {
//             //     if(layer instanceof L.Marker) {
//             //       if(map.getBounds().contains(layer.getLatLng())) {
//             //         features.push(layer.feature);
//             //       }
//             //     }
//             //   });
//             //   return features;
//             // }
  
//             //Editar
//             var botonEditar = document.getElementById('botonEditarReporte');
              
//             botonEditar.addEventListener('click', enviarEdicionABackEnd);
            
//             var contadorEdicion = 0;
//             function enviarEdicionABackEnd() {
//               contadorEdicion = contadorEdicion + 1;
//               if(contadorEdicion == 1) {
//                 var campoDeId = document.getElementById('idDelReporteSinEdicion');
//                 // alert(campoDeId.innerHTML);
//                 // alert(campoDeId.innerHTML.includes(idActual));
//                 if(campoDeId.innerHTML.includes(idActual)) {
//                   alert(`Solicitud de edición del reporte con el id [{
//                     "nombreUsuarioDeReporte": "${nombre_usuario_recibido}",
//                     "idDeReporte": "${campoDeId.innerHTML}",
//                     "TipoDeReporte": "${campoSinEdicionTipo.innerHTML}",
//                     "DescripcionDelReporte": "${campoSinEdicionDetalle.innerHTML}",
//                     "FechaDelReporte": "${campoSinEdicionFecha.value}",
//                     "Latitud": "${latitudActual}",
//                     "Longitud": "${longitudActual}"
//                   }]`);
//                 }
//                 botonEditar.className -= ' visible';
//                 botonEditar.className += ' invisible';
//               }
//             }
      
//             //Eliminar
//             var botonEliminar = document.getElementById('botonEliminarReporte');
            
//             botonEliminar.addEventListener('click', enviarEliminacionABackEnd);
  
//             var modalDeEdicionOEliminacion = document.getElementById('modalEdicionOEliminacion');
  
//             var contadorEliminacion = 0;
//             function enviarEliminacionABackEnd() {
//               contadorEliminacion = contadorEliminacion + 1;
//               if(contadorEliminacion == 1) {
//                 var campoDeId = document.getElementById('idDelReporteSinEdicion');
//                 // alert(campoDeId.innerHTML);
//                 // alert(campoDeId.innerHTML.includes(idActual));
//                 if(campoDeId.innerHTML.includes(idActual)) {
//                   alert(`Solicitud de eliminación del reporte con el id [{
//                     "idDeReporte": "${campoDeId.innerHTML}",
//                   }]`);
                  
//                   // if (marker != undefined) {
//                   //   map.removeLayer(marker);
//                   //   map.removeLayer(circle);
//                   // };
  
//                   if (campoDeId.innerHTML.includes(idActual)) {
//                     map.removeLayer(marker);
//                     map.removeLayer(circle);
//                   };
//                 }
//               }
//             }
//           }
  
//           var popup = L.popup();
//           marker.bindPopup(textoPopup);
  
//           //Reportes hechos por el usuario
//           var circle = L.circle([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {
//             color: 'purple',
//             fillColor: '#fff',
//             fillOpacity: 0.5,
//             radius: 1500
//           }).addTo(map);

//         } else {
//           var marker = L.marker([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {icon: Icon}).addTo(map);
//           var popup = L.popup();
//           marker.bindPopup(`<b>${tipoReporteConsultado}</b><br>${miDatoConsultado.detallesDelReporte}</b><br>Fecha :${miDatoConsultado.fechaReporte}`).openPopup();     
//         }
//       }
//     })
//     .catch(console.error);





//Reconociendo el nombre del usuario
var nombre_usuario_recibido = localStorage.getItem('nombre_usuario');
// alert(nombre_usuario_recibido);

//Accediendo a los datos del JSON (por lo pronto de manera local, luego con los datos entregados por el backend con JSON)
const miSolicitud = new Request('datosConsultados.json');

// const url = 'http://irreverente.net/AppWebProyectoSeguridadCiudadana/misDatosConsultados.json';
 
fetch(miSolicitud, {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
    .then(response => response.json())
    .then(misDatosConsultadosJSON => {
      for (const miDatoConsultado of misDatosConsultadosJSON.misDatosConsultados) {
        // alert(nombre_usuario_recibido==miDatoConsultado.nombreUsuarioDeReporte); 
        // if(nombre_usuario_recibido==miDatoConsultado.nombreUsuarioDeReporte) {
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

        if(nombre_usuario_recibido==miDatoConsultado.nombreUsuarioDeReporte) {  

          var idReporte = miDatoConsultado.idDeReporte;
  
          var textoPopup = `<span style= "color: transparent;" id="idInvisibleEnMiniPopUP">${idReporte}</span><br><b>${tipoReporteConsultado}</b><br>${miDatoConsultado.detallesDelReporte}</b><br>Fecha :${miDatoConsultado.fechaReporte} <br><button onclick="verDataid" data-id="${idReporte}" data-bs-toggle="modal" data-bs-target="#exampleModal5" style="margin: 5px; padding: 5px; background-color: lightblue;" id="btnEditarOEliminar">Editar o eliminar este reporte</button>`;
  
          //USAR LOS IDENTIFICADORES UNICOS GENERADOS CON LA LIBRERÍA UUID PARA EDITAR EL EVENTO
  
          var marker = L.marker([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {icon: Icon, iconId: idReporte, iconTipo: tipoReporteConsultado,  iconDescripcion: miDatoConsultado.detallesDelReporte, iconFecha: miDatoConsultado.fechaReporte, iconLatitud: miDatoConsultado.latitudReportada, iconLongitud: miDatoConsultado.longitudReportada, iconTexto: textoPopup}).addTo(map).on('click', eventoClick);

          // alert(L.marker[1]);
  
          function eventoClick(e) {
            
            var idActual = this.options.iconId;
            var tipoActual = this.options.iconTipo; 
            var descripcionActual = this.options.iconDescripcion;
            var fechaActual = this.options.iconFecha;
            var latitudActual = this.options.iconLatitud;
            var longitudActual = this.options.iconLongitud;
            var textoActual = this.options.iconTexto;
            // alert(textoActual);
  
            var campoid = document.getElementById('idDelReporteSinEdicion');
            var campoSinEdicionTipo = document.getElementById('tipoDelReporteSinEdicion');
            var campoSinEdicionDetalle = document.getElementById('entradaDeLosDetallesEdicion');
            var campoSinEdicionFecha = document.getElementById('fechaReporteEdicion');
  
            campoid.innerHTML = idActual;
            campoSinEdicionTipo.innerHTML = tipoActual;
            campoSinEdicionDetalle.innerHTML = descripcionActual;
            campoSinEdicionFecha.innerHTML =  fechaActual;
  
            // function getFeaturesInView() {
            //   var features = [];
            //   map.eachLayer( function(layer) {
            //     if(layer instanceof L.Marker) {
            //       if(map.getBounds().contains(layer.getLatLng())) {
            //         features.push(layer.feature);
            //       }
            //     }
            //   });
            //   return features;
            // }
  
            //Editar
            var botonEditar = document.getElementById('botonEditarReporte');
              
            botonEditar.addEventListener('click', enviarEdicionABackEnd);
            
            var contadorEdicion = 0;
            function enviarEdicionABackEnd() {
              contadorEdicion = contadorEdicion + 1;
              if(contadorEdicion == 1) {
                var campoDeId = document.getElementById('idDelReporteSinEdicion');
                // alert(campoDeId.innerHTML);
                // alert(campoDeId.innerHTML.includes(idActual));
                if(campoDeId.innerHTML.includes(idActual)) {
                  alert(`Solicitud de edición del reporte con el id [{
                    "nombreUsuarioDeReporte": "${nombre_usuario_recibido}",
                    "idDeReporte": "${campoDeId.innerHTML}",
                    "TipoDeReporte": "${campoSinEdicionTipo.innerHTML}",
                    "DescripcionDelReporte": "${campoSinEdicionDetalle.innerHTML}",
                    "FechaDelReporte": "${campoSinEdicionFecha.value}",
                    "Latitud": "${latitudActual}",
                    "Longitud": "${longitudActual}"
                  }]`);
                }
                botonEditar.className -= ' visible';
                botonEditar.className += ' invisible';
              }
            }
      
            //Eliminar
            var botonEliminar = document.getElementById('botonEliminarReporte');
            
            botonEliminar.addEventListener('click', enviarEliminacionABackEnd);
  
            var modalDeEdicionOEliminacion = document.getElementById('modalEdicionOEliminacion');
  
            var contadorEliminacion = 0;
            function enviarEliminacionABackEnd() {
              contadorEliminacion = contadorEliminacion + 1;
              if(contadorEliminacion == 1) {
                var campoDeId = document.getElementById('idDelReporteSinEdicion');
                // alert(campoDeId.innerHTML);
                // alert(campoDeId.innerHTML.includes(idActual));
                if(campoDeId.innerHTML.includes(idActual)) {
                  alert(`Solicitud de eliminación del reporte con el id [{
                    "idDeReporte": "${campoDeId.innerHTML}",
                  }]`);
                  
                  // if (marker != undefined) {
                  //   map.removeLayer(marker);
                  //   map.removeLayer(circle);
                  // };
  
                  if (campoDeId.innerHTML.includes(idActual)) {
                    map.removeLayer(marker);
                    map.removeLayer(circle);
                  };
                }
              }
            }
          }
  
          var popup = L.popup();
          marker.bindPopup(textoPopup);
  
          //Reportes hechos por el usuario
          var circle = L.circle([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {
            color: 'purple',
            fillColor: '#fff',
            fillOpacity: 0.5,
            radius: 1500
          }).addTo(map);

        } else {
          var marker = L.marker([miDatoConsultado.latitudReportada, miDatoConsultado.longitudReportada], {icon: Icon}).addTo(map);
          var popup = L.popup();
          marker.bindPopup(`<b>${tipoReporteConsultado}</b><br>${miDatoConsultado.detallesDelReporte}</b><br>Fecha :${miDatoConsultado.fechaReporte}`).openPopup();     
        }
      }
    })
    .catch(console.error);











