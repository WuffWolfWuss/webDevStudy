$(window).scroll(function() {
    var hT = $('.top-container').offset().top,
    hH = $('.top-container').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if(wS>hH){
      $("body").addClass("fixed");
    } else {
      $("body").removeClass("fixed");
    }
    // console.log("offset|height -container: "+ hT + " | " + hH);
    // console.log("window: " + wH +  "|" + wS);
});

$("li a").click(function(e){
  //console.log(e.target.id);
  $("li a").removeClass("active");
  $("#"+ e.target.id).addClass("active");
});

// hT = wH = screen height
//hH = container height
//wS = position of Scoll
