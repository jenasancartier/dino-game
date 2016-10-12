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
    // return this.capturedWord;
}

// $.ajax({
//    url: "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1",
//    async: false
// }).then(function(response)
//   {
//     console.log(response[0][0]);
//     // dinoWord = response[0][0];
//     // capturedWord = response[0][0];
//     $('#dino-word').text(response[0][0]);
//     this.capturedWord = response[0][0];
//     console.log("this.capturedWord " + this.capturedWord);
//
//   });
    // return this.capturedWord;
var currentDino = new Dino();
currentDino.getIpsum()
// currentDino.getIpsum();
setTimeout(consoleLogCapturedWord, 3000);

function consoleLogCapturedWord(){
  console.log("current dino: " + currentDino.capturedWord);
}


exports.dinoModule = Dino;
exports.playerModule = Player;


// Dino.prototype.getIpsum = function() {
//       var dinoWord;
//   var getDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1'),
//       fillContainer = function(html) {
//
//         $('#dino-word').html(html); //we have dino word
//           // var dinoWord = $('#dino-word').html();
//       },
//       getWord = function(){
//         dinoWord = $('#dino-word').text();
//       }
//       oops = function() {
//         console.log('Where did all the dinosaurs go?');
//       };
//
//   getDino.then(fillContainer, oops);
//   getDino.then(getWord);
//
//
//   console.log(dinoWord);
// }
