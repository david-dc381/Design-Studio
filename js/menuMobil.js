$(document).ready(function(){

  //variable para hacer validacion
  var numero = 1;

  $('#btnMenu').on('click', function(e){
    e.preventDefault();
    //si es igula a cero
    if ( numero == 1 ) {
      //mostramos el menu que ocultamos en css
      $('.menu-mobile .menu-principal').animate({
        left:0
      }, 300, function(){
        //y cuando demos click, cambiamos el valor de numero a cero, asi para ocultar el menu
        numero = 0;
      });
    } else {
      //y si el nuero es igual a cero, volvemos a ocultar el menu, como lo hicimos en css
      $('menu-mobile .menu-principal').animate({
        left: '-100px'
      }, 300, function() {
        //volvemos a darle el valor de 1, para que cuando hagamos click podamos mostraarlo de nuevo
        numero = 1;
      });
    }
  });

  //Para ocultar el menu cuando demos click en un enlace de las secciones
  $('.menu-mobile .menu-principal a').on('click', function() {
    $('.menu-mobile .menu-principal').animate({
      left: '-100%'
    }, 300, function(){
      // numero = 1;
    });
  });

});
