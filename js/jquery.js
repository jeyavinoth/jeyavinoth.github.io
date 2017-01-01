// menu toogle with menu button

// var second_color = {'color': '#c0b283'};
// var first_color = {'color': '#f4f4f4'}; 

//combo 1
// secondColorVal = '#eac67a';
// firstColorVal = '#984b43';

//combo 2
secondColorVal = '#4484ce';
firstColorVal = '#d9d9d9';

// secondColorVal = '#c43235';
// firstColorVal = '#e6e6e8';

// secondColorVal = '#b71c1c';
// firstColorVal = '#e6e6e8';

var first_color = {'color': firstColorVal}; 
var second_color = {'color': secondColorVal};

document.documentElement.style.setProperty('--main-first-color',firstColorVal); 
document.documentElement.style.setProperty('--main-second-color',secondColorVal); 

//home menu select
$("#home-toggle").click(function() {
  hideAll(); 
  homeShow();
});

$("#about-toggle").click(function() {
  hideAll(); 
  $("#aboutPage").fadeIn(); 
  $("#about-toggle").css(second_color); 
});

$("#work-toggle").click(function() {
  hideAll(); 
  $("#workPage").fadeIn(); 
  $("#work-toggle").css(second_color); 
});

$("#contact-toggle").click(function() {
  hideAll(); 
  $("#contactPage").fadeIn(); 
  $("#contact-toggle").css(second_color); 
});

$("#research-toggle").click(function() {
  hideAll(); 
  $("#researchPage").fadeIn(); 
  $("#research-toggle").css(second_color); 
});

$("#project-toggle").click(function() {
  hideAll(); 
  $("#projectPage").fadeIn(); 
  $("#project-toggle").css(second_color); 
});

$("#pub-toggle").click(function() {
  hideAll(); 
  $("#pubPage").fadeIn(); 
  $("#pub-toggle").css(second_color); 
});

// create funciton to hide all pages and call it up on click 
function hideAll() {
  $("#homePage").hide(); 
  $("#aboutPage").hide(); 
  $("#workPage").hide(); 
  $("#contactPage").hide(); 
  $("#researchPage").hide(); 
  $("#projectPage").hide(); 
  $("#pubPage").hide(); 

  $(".main-menu a").css(first_color); 
};


// homeShow function
function homeShow() { 
  // homeAnimationCleanUp(); 
  $("#homePage").fadeIn("slow");
  $("#home-toggle").css(second_color); 
}; 

$(window).load(function() {
  $(".pre_loader").fadeOut('slow'); 
});

$.fn.updateList = function(direction) {
  if (direction == -1) { 
    var $temp = this.last();
    $temp.insertBefore(this.first());
  }
  if (direction == 1) { 
    var $temp = this.first();
    $temp.insertAfter(this.last());
  }
}; 

$.fn.showList = function () {
  this.each(function () {
    if ($(this).index() >= 5) {
      $(this).hide();
    }
    else {
      $(this).show();
    }
  });
}

// Document ready function 
$(document).ready(function () {
  hideAll();
  // $("#researchPage").show();
  homeShow(); 


  /*---- ABOUT PAGE TOGGLING ----- */
  $(".aboutPage-wrapper li").click(function () {
    if ($(this).children(":first").children(":first").is("h2")) {
      var nextItems = $(this).nextAll();
      nextItems.each(function () {
        if ($(this).children(":first").children(":first").is("h2")) {
          return false; 
        }
        $(this).find('h3').toggleClass('showh3_1'); 
        $(this).find('h4').toggleClass('showh4_1'); 
        $(this).find('h3').removeClass('showh3'); 
        $(this).find('h4').removeClass('showh4'); 
      }); 
    }
    else {
      return false; 
    }
  });

  $(".aboutPage-wrapper li").mouseenter(function () {
    if ($(this).children(":first").children(":first").is("h2")) {
      var nextItems = $(this).nextAll();
      nextItems.each(function () {
        if ($(this).children(":first").children(":first").is("h2")) {
          return false; 
        }
        $(this).find('h3').addClass('showh3'); 
        $(this).find('h4').addClass('showh4'); 
      }); 

    }
    else {
      return false; 
    }
  });
  
  $(".aboutPage-wrapper li").mouseleave(function () {
    if ($(this).children(":first").children(":first").is("h2")) {
      var nextItems = $(this).nextAll();
      nextItems.each(function () {
        if ($(this).children(":first").children(":first").is("h2")) {
          return false; 
        }
        $(this).find('h3').removeClass('showh3'); 
        $(this).find('h4').removeClass('showh4'); 
      });
    }
    else { 
      return false; 
    }
  });
  
  /*---- WORK PAGE TOGGLING ----- */
  $(".workPage-wrapper li").click(function () {
    if ($(this).children(":first").children(":first").is("h2")) {
      var nextItems = $(this).nextAll();
      nextItems.each(function () {
        if ($(this).children(":first").children(":first").is("h2")) {
          return false; 
        }
        $(this).find('h3').toggleClass('showh3_1'); 
        $(this).find('h4').toggleClass('showh4_1'); 
        $(this).find('h3').removeClass('showh3'); 
        $(this).find('h4').removeClass('showh4'); 
      }); 
    }
    else {
      return false; 
    }
  });

  $(".workPage-wrapper li").mouseenter(function () {
    if ($(this).children(":first").children(":first").is("h2")) {
      var nextItems = $(this).nextAll();
      nextItems.each(function () {
        if ($(this).children(":first").children(":first").is("h2")) {
          return false; 
        }
        $(this).find('h3').addClass('showh3'); 
        $(this).find('h4').addClass('showh4'); 
      }); 

    }
    else {
      return false; 
    }
  });
  
  $(".workPage-wrapper li").mouseleave(function () {
    if ($(this).children(":first").children(":first").is("h2")) {
      var nextItems = $(this).nextAll();
      nextItems.each(function () {
        if ($(this).children(":first").children(":first").is("h2")) {
          return false; 
        }
        $(this).find('h3').removeClass('showh3'); 
        $(this).find('h4').removeClass('showh4'); 
      });
    }
    else { 
      return false; 
    }
  });

  /* ---- Project Page ----*/
  $(".projectContent-wrapper").find(".project-right").each(function(){
    $(this).hide();
  }); 

  $(".projectContent-wrapper").find(".project-right").eq(0).show();

  $(".project-left li").click(function (){
      var index = $(this).index();
      var projects = $(".projectContent-wrapper").find(".project-right"); 
      projects.each(function (){
        if ($(this).index() == (index + 1)) {
          $(this).fadeIn('slow');
        } else {
          $(this).hide(); 
        } 
      });
  });


  /*--- Research Page ----*/
  var slideIndex = 0; 
  var slideObjects = $("#researchPage").find(".research-content"); 
  var tempObjects = slideObjects; 

  // var slideSmallIndex = 2; 

  // var slideSmall = $(".allslide li"); 


  $(".allslide li").updateList(-1);
  $(".allslide li").updateList(-1);
  $(".allslide li").showList();

  // $(slideSmall).each(function() {
  //   if ($(this).index() >= 5 )
  //     $(this).hide();
  // });
  

  slideObjects.each(function (){
    $(this).hide();
  });

  slideObjects.eq(slideIndex).show();
  // $("#researchPage").find(".img-slide").eq(slideIndex).show();

  $("#researchPage").find(".left-btn").click(function() {
    slideObjects.eq(slideIndex).fadeOut();
    slideIndex -= 1;
    if(slideIndex < 0) {
     slideIndex = slideObjects.length - 1;
    } 
    slideObjects.eq(slideIndex).fadeIn();

    $(".allslide li").updateList(-1);
    $(".allslide li").showList();
  }); 

  $("#researchPage").find(".right-btn").click(function() {
    slideObjects.eq(slideIndex).fadeOut();
    slideIndex += 1;
    if(slideIndex >= slideObjects.length) {
     slideIndex = 0;
    } 
    slideObjects.eq(slideIndex).fadeIn();
    $(".allslide li").updateList(1);
    $(".allslide li").showList();
  }); 



  /* --- Publications Page ----*/
  
  // $(window).on('scroll', function(){
  //   $timeline_block.each(function(){
  //     if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
  //       $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
  //     }
  //   });
  // });


}); 


