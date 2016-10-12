var Dino = require ('./../js/dino.js').dinoModule;
var Player = require ('./../js/dino.js').playerModule;


$(document).ready(function(){
  $('#nameForm').submit(function(event) {
    event.preventDefault();
    var input = $("#userNameInput").val();
    newPlayer = new Player(input)
    console.log(input);
  });

});
