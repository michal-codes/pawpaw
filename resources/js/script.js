$(document).ready(function() {
  // For the sticky navigation
  $('.js--section-features').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px'
    }
  );

  // =======
  // Scroll on buttons
  // =======
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate(
      { scrollTop: $('.js--section-plans').offset().top },
      1000
    );
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate(
      { scrollTop: $('.js--section-features').offset().top },
      1000
    );
  });

  // =======
  // Navigation scroll - Smooth scrolling
  // =======
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // =======
  // Animations on scroll
  // =======
  // anim 1
  $('.js--wp-1').waypoint(
    function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    {
      offset: '50%'
    }
  );

  // anim 2
  $('.js--wp-2').waypoint(
    function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    },
    {
      offset: '50%'
    }
  );

  // anim 3
  $('.js--wp-3').waypoint(
    function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    },
    {
      offset: '50%'
    }
  );

  // anim 4
  $('.js--wp-4').waypoint(
    function(direction) {
      $('.js--wp-4').addClass('animated pulse');
    },
    {
      offset: '50%'
    }
  );

  // =======
  // Mobile navigation .main-nav
  // =======
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $(this).children('ion-icon');
    nav.slideToggle(200);

    if (icon.attr('name') === 'menu') {
      $(icon).attr('name', 'close');
    } else {
      $(icon).attr('name', 'menu');
    }
  });

  // =======
  // to the top, button
  // =======
  window.onscroll = function() {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('btnTop').style.display = 'block';
    } else {
      document.getElementById('btnTop').style.display = 'none';
    }
  };
});

// =======
// to the top, button
// =======
const goToTop = () => {
  $('html, body')
    .stop()
    .animate({ scrollTop: 0 }, 500);
};
