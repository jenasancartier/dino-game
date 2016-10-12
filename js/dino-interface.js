$(document).ready(function(){
  alert("ohai");
  console.log("it worked yay");

  var getDinos      = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1'),
      fillContainer = function(html) {
        $('#dino-word').html(html);
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };

  getDinos.then(fillContainer, oops);

});
