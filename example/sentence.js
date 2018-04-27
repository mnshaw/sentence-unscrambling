var j = 0;
var sentences = [["cool", "is", "Today", "great"], ["The", "warm", "is", "collected", "summer"], ["healthy", "Apples", "are", "tranquil"], ["serene", "is", "Coffee", "good"], ["The", "relax", "flew", "dove", "away"], ["blooming", "The", "meditating", "flowers", "are"], ["rises", "sun", "peace", "The", "east", "in"], ["trees", "The", "soothing", "are", "tall"], ["pollen", "Bees", "collect", "happy"], ["smelt", "air", "flowers", "The", "smooth", "like"], ["away", "The", "glassy", "fish", "swam"], ["park", "in", "the", "sunny", "harmony", "A", "day"], ["harmony", "The", "played", "a", "violin", "rest", "soft"], ["near", "beach", "soft", "A", "house", "the"], ["breeze", "Tomorrow", "great", "be", "will"], ["swayed", "breeze", "in", "waves", "the", "swing", "The"], ["load", "of", "beach", "A", "laundry", "fresh"], ["clean", "red", "Roses", "are"], ["shore", "breathe", "The", "tide", "to", "came"]];
var done = false;

function submit() {
  if (done) {
    return;
  }

  $('.word').remove();

  for (var i = 0; i < sentences[j].length; i++) {
    $('#words').append("<div class='word'>"+sentences[j][i]+"</div>");
  }

  if (j < sentences.length - 1) {
    j++;
  } else {
    done = true;
  }
}