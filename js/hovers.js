$(document).ready(function(){

  // Hovers
  // --------------------------------

  // Fade-in

  function fadeinAnimate() {

    var overlayOut = function(){
      $('.overlay').transition({background: medium}, {duration: 400, easing: 'ease-out'});
    };    
    var contentOut = function(){
      $('.circle').delay(1000).transition({opacity: 0}, {duration: 400, easing: 'ease-out'});
      $('.title').delay(1000).transition({opacity: 0}, {duration: 400, easing: 'ease-out', complete: overlayOut});

    };
    var contentIn = function(){
      $('.circle').delay(100).transition({opacity: 1}, {duration: 300, easing: 'ease-in'});
      $('.title').delay(100).transition({opacity: 1}, {duration: 300, easing: 'ease-in', complete: contentOut});

    };
    $('.fade-in .overlay').transition({background: darkest}, {duration: 200, easing: 'ease-in', complete: contentIn});

    setTimeout(fadeinAnimate, 3200);

  }

  fadeinAnimate();

  // Two step fade-in

  function twostepfadeinAnimate() {

    var overlayOut = function(){
      $('.overlay').transition({background: medium}, {duration: 400, easing: 'ease-out'});
    };    
    var titleOut = function(){
      $('.title').transition({opacity: 0}, {duration: 400, easing: 'ease-out', complete: overlayOut});
    };
    var circleOut = function(){
      $('.circle').delay(1000).transition({opacity: 0}, {duration: 400, easing: 'ease-out', complete: titleOut});
    };    
    var titleIn = function(){
      $('.title').delay(200).transition({opacity: 1}, {duration: 100, easing: 'ease-in', complete: circleOut});
    };
    var circleIn = function(){
      $('.circle').delay(100).transition({opacity: 1}, {duration: 300, easing: 'ease-in', complete: titleIn});
    };
    $('.two-step-fade-in .overlay').transition({background: darkest}, {duration: 200, easing: 'ease-in', complete: circleIn});

    setTimeout(twostepfadeinAnimate, 3300);

  }

  twostepfadeinAnimate();

});
