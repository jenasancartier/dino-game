function Dino(capturedWord) {
  this.capturedWord = 'theWord';
}

function Player(playerName, correct, incorrect) {
  this.playerName = playerName;
  this.correct = 0;
  this.incorrect = 0;
}

var getDino;

Dino.prototype.getIpsum = function() {
    var that = this;
    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1').then(function(response)
  {
    console.log(response[0][0]);
    // dinoWord = response[0][0];
    // capturedWord = response[0][0];
    $('#dino-word').text(response[0][0]);
    that.capturedWord = response[0][0];
    console.log("this.capturedWord " + that.capturedWord);
  });
}

var currentDino = new Dino();
currentDino.getIpsum()

// setTimeout(consoleLogCapturedWord, 3000);

function consoleLogCapturedWord(){
  console.log("current dino: " + currentDino.capturedWord);
}

exports.dinoModule = Dino;
exports.playerModule = Player;
