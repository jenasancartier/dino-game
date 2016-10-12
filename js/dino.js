function Dino() {
}

function Player(playerName, correct, incorrect) {
  this.playerName = playerName;
  this.correct = 0;
  this.incorrect = 0;
}

Dino.prototype.getIpsum = function() {
  var getDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1'),
      fillContainer = function(html) {
        $('#dino-word').html(html);
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };

  getDino.then(fillContainer, oops);

  var dinoWord = $('#dino-word').text();
  console.log(dinoWord);
}


//
// Player.prototype.gameScore = function(input) {
//   if (input === getDino)
// }
//



exports.dinoModule = Dino;
exports.playerModule = Player;
