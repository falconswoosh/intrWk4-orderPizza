//Business Interface


//User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

      $("div#output").show();
  		$("ul#list").append("<li>"+outputArray[index]+"</li>");
  		$("#output").text("<span>"+outputArray[index]+"</span>");
    }
//Diplay 'error' only if number is <= 0 or a whole number
    $(".help-inline").text(validNumberCheck(number));
    $(".help-inline").css("background-color", "cyan");

//Clear output - this is the Reset button
    $("button#clearScreen").click(function() {
      location.reload();
    });
  });
});
