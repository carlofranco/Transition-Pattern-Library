$(document).ready(function(){

  // Hovers
  // --------------------------------

  // Fade-in

  setTimeout(function(){
    var callback = function(){ alert('Transition complete') };
    $('.fade-in .overlay')
      .transition({background: dark})
      .delay(1000)
      .transition({background: title}, {complete: callback});
  }, 2000);

});