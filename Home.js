function currentSlide1(){
  document.getElementById("dvImage").style.backgroundImage = 'url(Images/Wallpaper1.jpg)';
}
function currentSlide2(){
  document.getElementById("dvImage").style.backgroundImage = 'url(Images/Wallpaper2.jpg)';
}
function currentSlide3(){
  document.getElementById("dvImage").style.backgroundImage = 'url(Images/wallpaper3.jpg)';
}
function currentSlide4(){
  document.getElementById("dvImage").style.backgroundImage = 'url(Images/wallpaper4.jpg)';
}

var images = ["Wallpaper1.jpg", "Wallpaper2.jpg","wallpaper3.jpg","wallpaper4.jpg"];
$(function () {
    var i = 0;
    $("#dvImage").css("background-image", "url(Images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("#dvImage").fadeOut("slow", function () {
            $(this).css("background-image", "url(Images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 10000);
});

// function cycleImages(){
//   var $active = $('#background_cycler .active');
//   var $next = ($('#background_cycler .active').next().length > 0) ? $('#background_cycler .active').next() : $('#background_cycler img:first');
//   $next.css('z-index',2);//move the next image up the pile
// $active.fadeOut(1500,function(){//fade out the top image
// $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
//   $next.css('z-index',3).addClass('active');//make the next image the top one
//   });
// }

// $(window).load(function(){
// $('#background_cycler').fadeIn(1500);//fade the background back in once all the images are loaded
//   // run every 7s
//   setInterval('cycleImages()', 7000);
// })