$(document).ready(function(){

  //Mostrar  y ocultar boton "Volver arriba"
  var btnVolverArriba = $('#btnVolverArriba');

  $(window).on('scroll', function() {

    var proyectosOffsetTop = $('#proyectos').offset().top;

    if ( $(window).scrollTop() >= proyectosOffsetTop ) {
      //hacemos visible el boton si el sroll es mayor o igual a cero
      btnVolverArriba.css('margin-right', 0);

    } else if ( $(window).scrollTop() <= proyectosOffsetTop/2 ) {
      //hacemos visible el boton si el scroll es menor o igual a la altura dividido entre 2
      btnVolverArriba.css('margin-right', '-60px');

    }

  });

  // Movimiento suave de scroll de 'Inicio' y 'Volver Arriba'
  //seleccionamos todos los enlaces que tengan la clase .volver-arriba
  $('a.volver-arriba').on('click', function(e) {
    e.preventDefault();
    //si la altura del scroll que hicimos es mayor a cero
    /*La condición es por que si le damos click estando en cero al enlace
    Inicio esto se ejecuta y no nos deja bajar, tenemos que esperar un segundo*/
    if ( $(window).scrollTop() != 0 ) {
      /* hacemos que la altura del scroll del documento se vuelva a cero, pero
      con un efecto suave, el que lo pusimos en css y este tarda un segundo */
      $('html, body').stop().animate( {//ptimero detenemos con stop cualquier animacion antes de la siguiente
        scrollTop:0
      }, 1000 );

    }
  });

  //Movimiento suave de scroll de los demás items del menu Principal
  $('a.scroll-suave').on('click', function(e){
    e.preventDefault();
    /*
    con $(this), hacemos referencia al enlace que se hace click no importa
    cual sea, al que le demo click obtnemos su atributo 'href' y obtenemos
    su altura desde el tope hasta ese elemento en donde se encuentra el scroll.
    */
    var seccionOffsetTop = $($(this).attr('href')).offset().top;
    //stop para detener cualquier animación antes y ejecutar la nueva
    $('html, body').stop().animate({
      scrollTop: seccionOffsetTop//la altura del que hicimos click
    }, 1000);
  });

  $('a.scroll-acercaDe').on('click', function(e){
    e.preventDefault();
    //restamos -110px para que al hacer el scroll suave no nos tape el menu el elemento
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 121;
    $('html, body').stop().animate({
      scrollTop: seccionOffsetTop
    }, 1000);
  });

  $('a.scroll-equipo').on('click', function(e){
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 70;
    $('html, body').stop().animate({
      scrollTop: seccionOffsetTop
    }, 1000);
  });

  $('a.scroll-contacto').on('click', function(e){
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top + 70;
    $('html, body').stop().animate({
      scrollTop: seccionOffsetTop
    }, 1000);
  });

});
