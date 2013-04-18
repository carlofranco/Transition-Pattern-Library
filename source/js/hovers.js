$(document).ready(function(){

  // Hovers
  // --------------------------------

  // Fade-in

  function animate() {

    var overlayOut = function(){
      $('.overlay').delay(200).transition({background: medium});
    };    
    var titleOut = function(){
      $('.title').delay(100).transition({opacity: 0}, {complete: overlayOut});
    };
    var circleOut = function(){
      $('.circle').delay(1500).transition({opacity: 0}, {complete: titleOut});
    };    
    var titleIn = function(){
      $('.title').delay(100).transition({opacity: 1}, {complete: circleOut});
    };
    var circleIn = function(){
      $('.circle').delay(200).transition({opacity: 1}, {complete: titleIn});
    };
    $('.fade-in .overlay').transition({background: darkest}, {complete: circleIn});

    setTimeout(animate, 4000);

  }

  animate();
});