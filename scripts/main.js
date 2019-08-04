var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/furry.jpg') {
      miImage.setAttribute('src','images/furry2.jpg');
    } else {
      miImage.setAttribute('src', 'images/furry.jpg');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'te esperaba, ' + miNombre+" oni-chan";
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'te esperaba ,' + nombreAlmacenado+" oni-chan";
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}