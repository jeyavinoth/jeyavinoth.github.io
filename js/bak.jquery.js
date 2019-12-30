// menu toogle with menu button

// side nav bar toggle on hover 
var count = 0; 
$("#menu-toggle, #nav-wrapper").mouseenter(function () {
  count++; 
  $("#nav-wrapper").addClass("toggled");
  $("#menu-toggle").addClass("toggled");
}).mouseleave(function(){
  count --;  
  if (!count) {
    $("#nav-wrapper").removeClass("toggled");
    $("#menu-toggle").removeClass("toggled");
  }
});

//logo-button on title menu
$("#logo-toggle").click(function() {
  hideAll();
  homeShow(); 
});

//home menu select
$("#home-toggle").click(function() {
  hideAll(); 
  homeShow();
  $("#nav-wrapper").toggleClass("toggled");
  $("#menu-toggle").toggleClass("toggled");
});

$("#about-toggle").click(function() {
  hideAll(); 
  $("#nav-wrapper").toggleClass("toggled");
  $("#menu-toggle").toggleClass("toggled");
  $("#about").fadeIn(); 
  $("#footer").fadeIn();
});

$("#home-learn-btn").click(function() {
  hideAll(); 
  $("#nav-wrapper").removeClass("toggled");
  $("#menu-toggle").removeClass("toggled");
  $("#learn-more").slideDown("slow"); 
  $("#footer").fadeIn();
});


$("#contact-toggle").click(function() {
  hideAll(); 
  $("#nav-wrapper").toggleClass("toggled");
  $("#menu-toggle").toggleClass("toggled");
  $("#contact").slideDown(); 
  $("#footer").fadeIn();
});

// create funciton to hide all pages and call it up on click 
function hideAll() {
  $("#home").hide(); 
  //$("#titleMenu").hide();
  $("#learn-more").hide(); 
  $("#about").hide(); 
  $("#contact").hide(); 
  $("#footer").hide(); 
};


// // function for animation of the home page images
// function homeAnimationCleanUp() { 
//   $("#home-txt-esc").removeClass("slideInSkewedLeft"); 
//   $("#home-txt-esc").removeClass("moveRight"); 
//   $("#home-txt-adv").removeClass("slideInSkewedRight"); 
//   $("#home-txt-adv").removeClass("moveLeft"); 
// }; 


// homeShow function
function homeShow() { 
  // homeAnimationCleanUp(); 
  $("#home").fadeIn("slow");
  $("#titleMenu").slideDown("fast"); 
  $("#home-left-img").addClass("openDoor"); 
  $("#home-right-img").addClass("openDoor"); 
  $("#right-door-handle").addClass("openDoor"); 
  $("#left-door-handle").addClass("openDoor"); 
  window.setTimeout(function () {
    $("#home-left-img").removeClass("openDoor"); 
    $("#home-right-img").removeClass("openDoor"); 
    $("#right-door-handle").removeClass("openDoor"); 
    $("#left-door-handle").removeClass("openDoor"); 
  },1000);
  // $("#home-txt-esc").addClass("slideInSkewedLeft"); 
  // $("#home-txt-adv").addClass("slideInSkewedRight"); 
  // window.setTimeout(function () { 
  //   $("#home-txt-esc").addClass("moveRight"); 
  //   $("#home-txt-adv").addClass("moveLeft"); 
  // } ,1000);  
  //   $("#footer").hide();

}; 



// Document ready function 
$(document).ready(function () {
  hideAll();
  homeShow(); 
  
  $("#left-door-handle").click(function() {
    $("#home-left-img").toggleClass("openDoor");
    $("#left-door-handle").toggleClass("openDoor");
  });

  $("#right-door-handle").click(function() {
    $("#home-right-img").toggleClass("openDoor");
    $("#right-door-handle").toggleClass("openDoor");
  });

  // leaderboards tabbing
  $('ul.leader-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.leader-tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

}); 


