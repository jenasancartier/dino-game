var Dino = require ('./../js/dino.js').dinoModule;
var Player = require ('./../js/dino.js').playerModule;


$(document).ready(function(){
  var currentDino = new Dino();
  currentDino.getIpsum();

  console.log("it worked yay");

  // var dinoWord = $('#dino-word').val();
  var input = $("#userGameEntry").val();

});
