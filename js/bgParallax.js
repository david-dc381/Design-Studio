$(document).ready(function() {
  //Esto es para dar un efecto Parallax a la img de fondo de contacto
  //le damos una funcion scroll
  $(window).on('scroll', function(){
    //obtenemos el id del elemento de la img
    var contacto = $('#contacto');
    /* Aquí calculados primero si la altura hasta donde hayamos hecho scroll es mayor o igual a la
    altura que hay desde el tope hasta el inicio del elemento contacto, pero restamos el tamaño
    del elemento del contacto del formulario, porque si no nos cumplira la condición
    desde mucho más antes segun las medidas de las alturas */
    if ( $(window).scrollTop() >= contacto.offset().top - contacto.outerHeight() ) {

      var posicion = -($(window).scrollTop() - contacto.offset().top )*0.20;

      contacto.css('background-position', '0 '+posicion+'px');

    }

  });

});
