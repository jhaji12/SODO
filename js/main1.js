/*NAVBAR SCROLL*/

//===== STICKY

$(window).on('scroll', function (event) {
  var scroll = $(window).scrollTop();
  if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar .navbar-brand img").attr("src", "images/logo.png");
  } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar .navbar-brand img").attr("src", "images/logo.png");
  }
});

  //===== Section Menu Active

   var scrollLink = $('.page-scroll');

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function () {
    var sectionOffset = $(this.hash).offset().top - 73;

  if (sectionOffset <= scrollbarLocation) {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    }
  });
});

/*== close navbar-collapse when a clicked == */

$(".navbar-nav a").on('click', function () {
  $(".navbar-collapse").removeClass("show");
});

$(".navbar-toggler").on('click', function () {
  $(this).toggleClass("active");
});

$(".navbar-nav a").on('click', function () {
  $(".navbar-toggler").removeClass('active');
});


//===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
      if ($(this).scrollTop() > 600) {
          $('.floating_button').fadeIn(200);
      } else {
          $('.floating_button').fadeOut(200);
      }
  });

//Animate the scroll to yop
  $('.floating_button').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: 0,
      }, 1500);
  });

/* FAQ *

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/* FACTS COUNTER */
	(function ($) {
    $.fn.countTo = function (options) {
      options = options || {};

      return $(this).each(function () {
        // set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
          from:            $(this).data('from'),
          to:              $(this).data('to'),
          speed:           $(this).data('speed'),
          refreshInterval: $(this).data('refresh-interval'),
          decimals:        $(this).data('decimals')
        }, options);

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;

        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data('countTo') || {};

        $self.data('countTo', data);

        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        // initialize the element with the starting value
        render(value);

        function updateTimer() {
          value += increment;
          loopCount++;

          render(value);

          if (typeof(settings.onUpdate) == 'function') {
            settings.onUpdate.call(self, value);
          }

          if (loopCount >= loops) {
            // remove the interval
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;

            if (typeof(settings.onComplete) == 'function') {
              settings.onComplete.call(self, value);
            }
          }
        }

        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };

    $.fn.countTo.defaults = {
      from: 0,               // the number the element should start at
      to: 0,                 // the number the element should end at
      speed: 1000,           // how long it should take to count between the target numbers
      refreshInterval: 100,  // how often the element should be updated
      decimals: 0,           // the number of decimal places to show
      formatter: formatter,  // handler for formatting the value before rendering
      onUpdate: null,        // callback method for every time the element is updated
      onComplete: null       // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  }(jQuery));

  jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
    }
  });
