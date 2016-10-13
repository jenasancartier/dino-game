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
    $("#saved").hide();
    $("#dead").hide();
    var gameInput = $("#userGameEntry").val();
    newPlayer.gameWin();
    newPlayer.gameScore(gameInput);
    console.log(newPlayer.correct);
    console.log(newPlayer.incorrect);
    console.log(gameInput);
    $("#userGameEntry").val("");
    currentDino.getIpsum();


  });
  $('#newGameStart').click(function(event) {
    event.preventDefault();
    location.reload();
  });


});
