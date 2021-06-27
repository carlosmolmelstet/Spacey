$(window).scroll(function () {
      var position = window.scrollY;
      var gallery = $(".gallery")
      var rocket = $(".rocket")


      if(position >= 900) {
        gallery.addClass("bounce-in-right-2");
      } 

      if (position >= 1850){
        rocket.addClass("bounce-in-down");
      }
});

