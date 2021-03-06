$(document).ready(function(){
  //Vamos a hacer el encabezado fijo

  //obtnemos el elemento del encabezado fijo
  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function(){

    /*Con está propiedad de offset, sacamos la altura que hay desde
    el tope del encabezado hasta el inicio de la seccion de proyectos.*/
    var proyectoOffsetTop = $('#proyectos').offset().top;

    //sacamos la altura que hay desde el tope hasta el lugar ue hicimos scroll
    var scroll = $(window).scrollTop();

    if ( scroll >= proyectoOffsetTop ) {
      /*hacemos el aparecer el header oculto, al que le pusimos un
      margin-top de -68, ahora le ponemos uno de 0 para que vuelva a aparecer*/
      fixedHeader.css('margin-top', 0);

      /* preguntamos si es menor o igual la altura del scroll, la hacemos
      desaparecer, pero lo dividimos entre 2 para que desaparesca cuando
      este en la mitad del banner */
    } else if ( scroll <= proyectoOffsetTop/2 ) {
      fixedHeader.css('margin-top', '-68px');
    }

  });

});
