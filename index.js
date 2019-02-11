const answers = ["Kindle", "Blue", "10%", "Snurgling", "100", "70", "1895", "102 Degrees", "Siamese", "Sterile"]
let time = 30;
let timer = 0;
let totalCorrect = 0;

$(document).ready(function() {

  countdown = () => {
    if (time == 0) {
      scoreGame();
    } else {
      time--
      $("#timer").html(time);
    }
  }

  function scoreGame() {
    let correct = 0;
    let incorrect = 0;
    clearInterval(timer);
    $("input:checked").map(function () { this.value === answers[this.name - 1] ? correct++ : incorrect++ })
    totalCorrect += correct;
    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("total").text(totalCorrect);
    $("#questions").hide();
    $("#results").show();
    $("input:checked").prop('checked', false);
    time = 30;
  }

  $("#start").on("click", () => {
    $("#instructions").hide();
    $("#questions").show();
    timer = setInterval(countdown, 1000);
  })

  $("#restart").on("click", () => {
    $("#results").hide();
    $("#questions").show();
    timer = setInterval(countdown, 1000);
  })

  $("#score").on("click", event => {
    event.preventDefault();
    scoreGame();
  })

})