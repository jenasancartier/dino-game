var Dino = require ('./../js/dino.js').dinoModule;
var Player = require ('./../js/dino.js').playerModule;



$(document).ready(function(){
  $('#nameForm').submit(function(event) {
    event.preventDefault();
    var nameInput = $("#userNameInput").val();
    newPlayer = new Player(nameInput)
    currentDino = new Dino;
    currentDino.getIpsum();
    console.log(nameInput);
    $("#nameForm").hide();
    $("#game-go").show();
    $("#playerName").text(newPlayer.playerName);
  });

  $("#gameForm").submit(function(event){
    event.preventDefault();
    var gameInput = $("#userGameEntry").val();
    newPlayer.gameScore(gameInput);
    console.log(newPlayer.correct);
    console.log(newPlayer.incorrect);
    console.log(gameInput);
    newPlayer.gameWin(); 
    $("#userGameEntry").val("");
    currentDino.getIpsum();
  })

});
