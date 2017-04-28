// BACK-END LOGIC
var add = function(question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
}







// FRONT-END LOGIC
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();
    var questionInput1 = parseInt($("input#question1").val());
    var questionInput2 = parseInt($("input#question2").val());
    var questionInput3 = parseInt($("input#question3").val());
    var questionInput4 = parseInt($("input#question4").val());
    var questionInput5 = parseInt($("input#question5").val());

  });
});
