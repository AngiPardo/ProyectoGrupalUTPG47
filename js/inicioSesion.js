var nombreInicioSesion = document.getElementById('nameInicioSesion');
var emailInicioSesion = document.getElementById('emailInicioSesion');
var contrasenaInicioSesion = document.getElementById('passwordInicioSesion');
var botonRegistroInicioSesion = document.getElementById('botonInicioSesion');

botonRegistroInicioSesion.addEventListener('click',enviarReporteABackEnd);

function enviarReporteABackEnd () {
    alert("¡Inicio Exitoso!");
   alert(`[{
    "NombreUsuario": "${nombreInicioSesion.value}",
    "contrasena": "${contrasenaInicioSesion.value}"
}]`); 
}
// Cuando se regrese la confirmación del backend, se redirecciona a logueado.html