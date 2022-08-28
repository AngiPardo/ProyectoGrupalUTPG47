var nombreInicioSesion = document.getElementById('nameInicioSesion');
var emailInicioSesion = document.getElementById('emailInicioSesion');
var contrasenaInicioSesion = document.getElementById('passwordInicioSesion');
var botonRegistroInicioSesion = document.getElementById('botonInicioSesion');

botonRegistroInicioSesion.addEventListener('click',enviarReporteABackEnd);

function enviarReporteABackEnd () {
   alert(`[{
    "NombreUsuario": "${nombreInicioSesion.value}",
    "correoElectronico": "${emailInicioSesion.value}",
    "contrasena": "${contrasenaInicioSesion.value}"
}]`); 
}