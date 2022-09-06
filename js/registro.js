var nombre = document.getElementById('nameRegistro');
var email = document.getElementById('emailRegistro');
var contrasena = document.getElementById('passwordRegistro');
var botonRegistro = document.getElementById('botonRegistro');

botonRegistro.addEventListener('click',enviarReporteRegistroABackEnd);

function enviarReporteRegistroABackEnd () {
    alert("¡Registro Exitoso!");
   alert(`[{
    "NombreUsuario": "${nombre.value}",
    "contrasena": "${contrasena.value}"
}]`);
}