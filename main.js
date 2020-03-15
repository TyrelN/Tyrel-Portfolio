var switcher = true;
var navOn = false;
var projectOn = false;
$(document).ready(function() {
  $('.menutoggler').on('click', function() {
    $(this).toggleClass('open');
    $('.topnav').toggleClass('open');
    navOn = !navOn;
    if(projectOn == true){
      $('.projectnav').toggleClass('open');
        projectOn = false;
    }
  });
  $('.menutoggler2').on('click', function() {
    $(this).toggleClass('open');
    $('.projectnav').toggleClass('open');
    projectOn = !projectOn;
    if(navOn == true){
      $('.topnav').toggleClass('open');
       navOn = false;
    }
  });


  
  $('.topnav .navlink').on('click', function() {
    $('.menutoggler').removeClass('open');
    $('.topnav').removeClass('open');
    navOn=false;
  });

  $('nav a[href*="#"').on('click', function() {
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top -100
    }, 2000);
  });

  $('#up').on('click', function() {
    $('html, body').animate({scrollTop: 0
  }, 2000);
  });


  $('.projectContainer').on('click', function() {
    if(switcher == false){
      $(this).toggleClass('open');
  
    }
  });
 

  AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
    
  });
  

  function phoneProject(x) {
    if (x.matches) { // If media query matches
      switcher = false; //enable touch to show info on project
      
    }else{
      $('.projectContainer').removeClass('open');
    }
  }
  
  var x = window.matchMedia("(max-width: 900px)");
  phoneProject(x);



//end of doc
});
