var nombre = document.getElementById('nameRegistro');
var email = document.getElementById('emailRegistro');
var contrasena = document.getElementById('passwordRegistro');
var botonRegistro = document.getElementById('botonRegistro');

botonRegistro.addEventListener('click',enviarReporteABackEnd);

function enviarReporteABackEnd () {
   alert(`[{
    "NombreUsuario": "${nombre.value}",
    "correoElectronico": "${email.value}",
    "contrasena": "${contrasena.value}"
}]`); 
}