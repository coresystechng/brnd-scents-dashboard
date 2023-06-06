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

document.addEventListener('DOMContentLoaded', function() {
  // your JavaScript code goes here
  // Get all the rows of input fields
  const rows = document.querySelectorAll('.switch .row');

  // Set the initial active row to be the first row
  let activeRow = rows[0];

  // Add a click event listener to the "Next" button
  document.querySelector('.switchcontrol').addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the index of the active row
    const index = Array.from(rows).indexOf(activeRow);

    // If the active row is not the last row, add the active class to the next row
    if (index < rows.length - 1) {
      activeRow.classList.remove('active');
      activeRow = rows[index + 1];
      activeRow.classList.add('active');
    }

    // Change the text content of the "Next" button to "Submit" on the last row
    if (index === rows.length - 2) {
      document.querySelector('.switchcontrol').textContent = 'Submit';
    }

    // Disable the "Next" button on the last row
    if (index === rows.length - 1) {
      document.querySelector('.switchcontrol').setAttribute('disabled', true);
      submitForm(); // Call the function to submit the form
    }
  });

  // Add a click event listener to the "Previous" button
  document.querySelector('.switchback').addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the index of the active row
    const index = Array.from(rows).indexOf(activeRow);

    // If the active row is not the first row, add the active class to the previous row
    if (index > 0) {
      activeRow.classList.remove('active');
      activeRow = rows[index - 1];
      activeRow.classList.add('active');
    }

    // Enable the "Next" button
    document.querySelector('.switchcontrol').removeAttribute('disabled');

    // Change the text content of the "Next" button back to "Next" if it was changed
    if (index === rows.length - 2) {
      document.querySelector('.switchcontrol').textContent = 'Next';
    }
  });

  // Function to submit the form
  function submitForm() {
 
  }
});


function toUpperCase()
{
  var start = this.selectionStart;
  var end = this.selectionEnd;
  this.value = this.value.toUpperCase();
  this.setSelectionRange(start, end);
}


