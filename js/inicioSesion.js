var nombreInicioSesion = document.getElementById('nameInicioSesion');
var emailInicioSesion = document.getElementById('emailInicioSesion');
var contrasenaInicioSesion = document.getElementById('passwordInicioSesion');
var botonRegistroInicioSesion = document.getElementById('botonInicioSesion');

botonRegistroInicioSesion.addEventListener('click',enviarReporteABackEnd);

function enviarReporteABackEnd () {
    var valorContra = contrasenaInicioSesion.value;
    var largoContra = length.valorContra;
    alert(valorContra);
    if(contrasenaInicioSesion.value)
    alert("¡Inicio Exitoso!");
   alert(`[{
    "NombreUsuario": "${nombreInicioSesion.value}",
    "contrasena": "${contrasenaInicioSesion.value}"
}]`); 
}

// Solicitud GET (Request).
// fetch('https://api.github.com/users/manishmshiva')
//     // Exito
//     .then(response => response.json())  // convertir a json
//     .then(json => console.log(json))    //imprimir los datos en la consola
//     .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

// Solicitud GET (Request) usando headers
// fetch('https://api.github.com/users/manishmshiva', {
//   method: "GET",
//   headers: {"Content-type": "application/json;charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => console.log(json)); 
// .catch(err => console.log(err));

// Cuando se regrese la confirmación del backend, se redirecciona a logueado.html
