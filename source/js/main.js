var defaults = {
        duration: 400,
        easing: ''
      },
      white = '#fff',
      light = '#eceded',
      mediumlight = '#ccc';
      medium = '#d9dbdc',
      dark = '#808181',
      darkest = '#222',
      text = '#4e4e4e',

$.fn.emulateTransitionEnd = function(duration) {
  var called = false, $el = this;
  $(this).one('webkitTransitionEnd', function() { called = true; });
  var callback = function() { if (!called) $($el).trigger('webkitTransitionEnd'); };
  setTimeout(callback, duration);
};

$.fn.transition = function (properties, options) {
  var $el = $(this);
  options = $.extend({}, defaults, options);
  properties.webkitTransition = 'all ' + options.duration + 'ms ' + options.easing;
  var callback = function(){
    $el.dequeue();
    if (options.complete) options.complete.apply($el);
  };
  
  $el.queue(function(){
    $el.one('webkitTransitionEnd', callback);
    $el.emulateTransitionEnd();
    $el.css(properties);
  });
      
  return this;
};
