var defaults = {
        duration: 400,
        easing: ''
      },
      white = '#fff',
      light = '#eceded',
      medium = '#d9dbdc',
      dark = '#808181',
      darkest = '#222',
      text = '#4e4e4e',
      title = '#ccc';

$(document).ready(function(){

  $.fn.transition = function (properties, options) {
    options = $.extend({}, defaults, options);
    properties.webkitTransition = 'all ' + options.duration + 'ms ' + options.easing;
    $(this).css(properties);
  };

  

});