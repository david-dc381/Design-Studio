$(document).ready(function(){
  // Vamos a hacer los mismo de la altura que hicomos del viewport con css
  var banner = $('#banner');

   // Definir altura dinámica para el banner
   function alturaBanner() {

     var vpaltura = $(window).height();//sacamos la altura actual del documento
     banner.css('height', vpaltura);
   }
   alturaBanner();
   /*Cada vez que la ventana del documento se haga más pequeño o grande
   se ejecutara la función alturaBanner.*/
   $(window).resize(alturaBanner);

});
