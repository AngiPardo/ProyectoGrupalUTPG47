var nombre = document.getElementById('nameRegistro');
var contrasena = document.getElementById('passwordRegistro');
var botonDeRegistro = document.getElementById('botonRegistro');

botonDeRegistro.addEventListener('click', enviarReporteRegistroABackEnd);

function enviarReporteRegistroABackEnd() {
    alert("┬íRegistro Exitoso!");
   alert(`[{
    "NombreUsuario": "${nombre.value}",
    "contrasena": "${contrasena.value}"
}]`);
}