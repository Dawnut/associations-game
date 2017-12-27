var words = [];
var wordcount = 0;
var form = $('form');
var box = $('#box');
var word = $('#word');
var counter = $('#counter');
var start = $('#start');
var round = 0;

form.keydown(event => {
  if (event.keyCode == 13) box.submit();
})

box.submit(еvent => {
  event.preventDefault();
  if (!box.val()) return;
  words.push(box.val());
  wordcount++;
  counter.text(wordcount + ' Words');
  box.val('').focus();
})

start.click(x => {
  start.css('visibility', 'hidden');
  word.css('visibility', 'visible');
})


function shuffle(array) {
  var currentIndex = words.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
