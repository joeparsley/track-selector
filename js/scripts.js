// BACK-END LOGIC
var add = function(questionInput1, questionInput2, questionInput3, questionInput4, questionInput5) {
  return questionInput1 + questionInput2 + questionInput3 + questionInput4 + questionInput5;
}

// var totalInput = function(add) {
//   return
// }



// FRONT-END LOGIC
$(document).ready(function() {
  $("#questions").submit(function(event) {
    // GATHERING INFORMATION VARS
    var userInput = $("#user-name").val();
    var questionInput1 = parseInt($("#question1").val());
    var questionInput2 = parseInt($("#question2").val());
    var questionInput3 = parseInt($("#question3").val());
    var questionInput4 = parseInt($("#question4").val());
    var questionInput5 = parseInt($("#question5").val());
    var totalInput = add(questionInput1, questionInput2, questionInput3, questionInput4, questionInput5);
    $(".init-hidden").fadeOut(300);
    // TRACK-MATCH
    if ( totalInput <= 5 ) {
      $("#ruby-track").fadeIn(2000);
    } else if ( totalInput > 5 && totalInput <= 10) {
      $("#php-track").fadeIn(2000);
    } else if ( totalInput > 10 && totalInput <= 15) {
      $("#java-track").fadeIn(2000);
    } else if ( totalInput > 15 && totalInput <= 20) {
      $("#css-track").fadeIn(3000);
    } else if ( totalInput > 20 && totalInput <= 25) {
      $("#csharp-track").fadeIn(2000);
    }
    $(".user-name").text(userInput);
    event.preventDefault();
  });
});
