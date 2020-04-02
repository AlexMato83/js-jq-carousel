$(document).ready(function(){

  //gestione del click su freccia dx
  $(".next").click(
    nextImg
  );

   function nextImg(){
    var imgActive = $(".images img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("last")){
      $(".images img.first").addClass("active");
    } else {
     imgActive.next().addClass("active");
    }
  }

  $(".prev").click(
    prevImg
  );
  //gestione del click su freccia sx
  function prevImg(){
    var imgActive = $(".images img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("first")){
      $(".images img.last").addClass("active");
    } else {
     imgActive.prev().addClass("active");
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
