$(document).ready(function(){

  var formulario = $('#formulario');
  var nombre = $('#nombre');
  var email = $('#email');
  var mensaje = $('#mensaje');

  //para validar si el campo nombre esta vacio
  function valNombre(e) {
    //si es vacio o nulo, mostramos el mjs de error
    if (nombre.val() == '' || nombre.val() == null) {
      e.preventDefault();
      $('input[type="text"] + .error').css('display', 'block');

    } else { //si no lo ocultamos
      $('input[type="text"] + .error').css('display', 'none');
    }
  }

  function valEmail(e) {
    //si es vacio o nulo, mostramos el mjs de error
    if (email.val() == '' || email.val() == null) {
      e.preventDefault();
      $('input[type="email"] + .error').css('display', 'block');

    } else { //si no lo ocultamos
      $('input[type="email"] + .error').css('display', 'none');
    }
  }

  function valMensaje(e) {
    //si es vacio o nulo, mostramos el mjs de error
    if (mensaje.val() == '' || mensaje.val() == null) {
      e.preventDefault();
      $('textarea + .error').css('display', 'block');

    } else { //si no lo ocultamos
      $('textarea + .error').css('display', 'none');
    }
  }

  

  function validar(e){
    valNombre(e);
    valEmail(e);
    valMensaje(e);
  }

  formulario.on('submit', validar);

});
