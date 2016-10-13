function Dino(capturedWord) {
  this.capturedWord = 'theWord';
}

function Player(playerName, correct, incorrect) {
  this.playerName = playerName;
  this.correct = 0;
  this.incorrect = 0;
}

function delayDisplay() {
  $("#saved").show();
}

Dino.prototype.getIpsum = function() {
    var that = this;
    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response)
  {
    console.log(response[0][0]);
    $('#dino-word').text(response[0][0]);
    that.capturedWord = response[0][0];
    console.log("this.capturedWord " + that.capturedWord);
  });
}

Player.prototype.gameScore = function(gameInput) {
  if(gameInput == currentDino.capturedWord) {
    this.correct += 1;
    setTimeout(delayDisplay, 85);
  } else {
    this.incorrect += 1;
  }
}

Player.prototype.gameWin = function() {
  if(this.correct === 3) {
    alert("you saved the dinos! hooray!")
  } else if (this.incorrect === 3) {
    alert("EVERYTHING DIED OH GOD");
  }
}

// var currentDino = new Dino();
// currentDino.getIpsum()

// setTimeout(consoleLogCapturedWord, 3000);

function consoleLogCapturedWord(){
  console.log("current dino: " + currentDino.capturedWord);
}

exports.dinoModule = Dino;
exports.playerModule = Player;
