(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    function addActiveClass(element) {
      if (current === "") {
        //for root url
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        //for other url
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    $('.horizontal-menu .nav li a').each(function() {
      var $this = $(this);
      addActiveClass($this);
    })

    //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });


    //Change sidebar and content-wrapper height
    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if (!body.hasClass("rtl")) {
        if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
          const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
        }
        if ($('.chats').length) {
          const chatsScroll = new PerfectScrollbar('.chats');
        }
        if (body.hasClass("sidebar-fixed")) {
          var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
        }
      }
    }

    $('[data-toggle="minimize"]').on("click", function() {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

    //fullscreen
    $("#fullscreen-button").on("click", function toggleFullScreen() {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    })
  });
})(jQuery);

window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader');
  function wait(){
    preloader.style.display = 'none';
  }
  setTimeout(wait, 500)
});

document.addEventListener('DOMContentLoaded', function () {
  var switchControl = document.querySelector('.switchControl');
  var hiddenSwitch = document.querySelector('.hiddenSwitch');
  var rows = document.querySelectorAll('.xvn');
  var currentIndex = 0;

  switchControl.addEventListener('click', function () {
    rows[currentIndex].classList.remove('active');
    currentIndex++;
    rows[currentIndex].classList.add('active');

    if (currentIndex === rows.length - 1) {
      switchControl.style.display = 'none';
      hiddenSwitch.style.display = 'block';
    }
  });

  hiddenSwitch.addEventListener('click', function () {
    var form = this.closest('form');
    form.submit();
  });

  var switchback = document.querySelector('.switchback');
  switchback.addEventListener('click', function () {
    if (currentIndex > 0) {
      rows[currentIndex].classList.remove('active');
      currentIndex--;
      rows[currentIndex].classList.add('active');

      if (currentIndex !== rows.length - 1) {
        switchControl.style.display = 'block';
        hiddenSwitch.style.display = 'none';
      }
    }
  });
});



function toUpperCase()
{
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);
}

document.addEventListener('DOMContentLoaded', function() {
  // Get the main-img element
  const mainImg = document.getElementById('main-img');

  // Get the bg-img element
  const bgImg = document.getElementById('bg-img');

  // Check if both elements exist
  if (mainImg && bgImg) {
    // Create a new image element
    const bgImgCopy = new Image();
    
    // Set the source of the new image element to the source of the main image
    bgImgCopy.src = mainImg.src;

    // Apply CSS styles to the bg-img element
    bgImg.style.backgroundImage = `url('${bgImgCopy.src}')`;
    bgImg.style.backgroundSize = 'cover';
    bgImg.style.backgroundPosition = 'center';
    bgImg.style.filter = 'contrast(1.5) blur(2px) brightness(0.8)';
  }
});

const tbodyRows = document.querySelectorAll('tbody tr');
const productPreview = document.getElementById('product-preview');
const backButton = document.getElementById('backButton');
var pRow = document.getElementById('product-row');

tbodyRows.forEach((row) => {
  row.addEventListener('click', () => {
    productPreview.style.display = 'block';
    backButton.style.display = 'block';
    pRow.style.display = 'none';
  });
});

backButton.addEventListener('click', () => {
  productPreview.style.display = 'none';
  backButton.style.display = 'none';
  pRow.style.display = 'block';
});
  
