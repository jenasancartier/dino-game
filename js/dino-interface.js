var Dino = require ('./../js/dino.js').dinoModule;
var Player = require ('./../js/dino.js').playerModule;


$(document).ready(function(){
  var input = $("#userNameInput").val();
  $('#nameForm').submit(function(event) {
    event.preventDefault();
    newPlayer = new Player(input)
    console.log(input);
  });

});
