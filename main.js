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

});





// $(document).ready(function(){
//
//
//
//
//   //gestione click sul next
//   $(".next").click(
//     nextImg;
//   );
//
//   function nextImg(){
//     var image = $(".images img.active");
//
//     $(".images img").removeClass("active");
//     $(".images img").next().addClass("active");
//   }
//
// });
