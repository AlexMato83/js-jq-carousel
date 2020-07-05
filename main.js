$(document).ready(function(){

  //gestione del click su freccia dx
  $(".next").click(
    nextImg
  );

   function nextImg(){
    var imgActive = $(".images img.active");
    var pallinoActive = $(".nav i.active");
    imgActive.removeClass("active");
    pallinoActive.removeClass("active");
    if (imgActive.hasClass("last")){
      $(".images img.first").addClass("active");
    } else {
     imgActive.next().addClass("active");
    }
    if (pallinoActive.hasClass("last")){
      $(".nav i.first").addClass("active");
    } else {
     pallinoActive.next().addClass("active");
    }
  }
  //gestione del click su freccia sx
  $(".prev").click(
    prevImg
  );

  function prevImg(){
    var imgActive = $(".images img.active");
    var pallinoActive = $(".nav i.active");
    imgActive.removeClass("active");

    if (imgActive.hasClass("first")){
      $(".images img.last").addClass("active");
    } else {
     imgActive.prev().addClass("active");
    }
    pallinoActive.removeClass("active");
    if (pallinoActive.hasClass("first")){
      $(".nav i.last").addClass("active");
    } else {
     pallinoActive.prev().addClass("active");
    }
  }
  $(".nav i.first").click(
    function(){
      $(".images img.first").addClass("active");
    }
  )
  $(".nav i.last").click(
    function(){
      $(".images img.last").addClass("active");
    }
  )
  $(".nav i").click(
    function(){
    // seleziono immagini e pallini
    var itemsImmagini = $(".images img");
    var itemsPallini = $(".nav i");
    // rimuovo il display block alle immagini
    itemsImmagini.removeClass("active");
    // rimuovo il rosso ai pallini
    itemsPallini.removeClass("active");
    // salvo il pallino cliccato
    var selezione = $(this);
    // lo coloro di rosso
    selezione.addClass("active");
    // seleziono l'indice del pallino cliccato
    selezione.index();
    //console log che restituisce l'indice item
    console.log(selezione.index());
    // l'immagine con l'indice equivalente al pallino selezionato diventa attiva
    itemsImmagini.eq(selezione.index()).addClass("active");
    }
  )



});
