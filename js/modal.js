$(document).ready(function(){

  $('.imagen-proyecto').on('click', function(){

    //obtenemos la ruta de la img a la cual hacemos click
    var rutaImagen = $(this).attr('src');
    //creamos el modal con cógido html y le pasamos la ruta de la img
    var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen +'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';
    //le indicamos que ponga el modal despues de la seccion proyectos
    $('#proyectos').after(modal);

    //Para hacer funcionar el botón cerrar
    $('#btnCerrar').on('click', function(){
        $('#modal').remove();
    });

    //Para cerar el modal con la tecla escape
    //usamos una función keyup, que cuando se suelte la tecla ejecute la función
    $(document).on('keyup', function(e){
      //con código ASCII le indicamos que tecla es y es la de escape
      if (e.which==27) {
        $('#modal').remove();//eliminamos el modal
      }
    })

  });

});
