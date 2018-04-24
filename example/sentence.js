var j = 0;
var sentences = [["hi", "bye"], ["woo", "boo"]];
var done = false;

function submit() {
  if (done) {
    return;
  }

  $('.word').remove();

  for (var i = 0; i < sentences[j].length; i++) {
    $('#left-defaults').append("<div class='word'>"+sentences[j][i]+"</div>");
  }

  if (j < sentences.length - 1) {
    j++;
  } else {
    done = true;
  }
}