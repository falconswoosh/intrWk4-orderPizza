//Business Interface
function Pizza (order) {
  this.type = ["Original", "Pan", "Original-stuffed","Pan-stuffed", "ThinNcrispy"];
  this.size = ["Small", "Medium", "Large", "Super-large"];
  this.toppings = ["Cheese", "Pepperoni", "Italian Sausage", "Salami", "Meatball", "Ham", "Bacon", "Pineapple"];
}
//type = ["Original", "Pan", "Original-stuffed","Pan-stuffed", "ThinNcrispy"];
//size = ["Small", "Medium", "Large", "Super-large"];
//toppings = ["Cheese", "Pepperoni", "Italian Sausage", "Salami", "Meatball", "Ham", "Bacon", "Pineapple"];

function Price (cost) {
  this.typeCost = [0.25, 0.50, 0.75, 1.00, 1.25];
  this.sizeCost = [6.99, 7.99, 8.99, 9.99];
  // this.toppingsCost = [1.00, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.00];
  this.subTotal = 0;
  this.orderTotal = 0;
}

function Customer (Name) {
  this.lastName = "";
  this.firstName = "";
  this.phone = "";
  this.email = "";
}

function Payment (payment) {
  this.credit = ["Visa", "Mastercard", "Debit"];
  this.cash   = false;
}

Price.prototype.priceCalc = function () {
    this.type = new (pizzaType);

      for (index=0; index<)
};



//User Interface
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var pizzaType = $("select#selectType").val();
    var pizzaSize = $("select#selectSize").val();
    var toppingsResponse = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
        var toppingChoices = $(this).val();
        toppingsResponse.push(toppingChoices);

    $("div#output").show();
		$("ul#list1").append("<li>"+pizzaType+"</li>");
    $("ul#list1").append("<li>"+pizzaSize+"</li>");
    $("input:checkbox[name=toppings]:checked").each(function() {
        var toppingChoices = $(this).val();
        $("ul#list2").append("<li>"+toppingChoices+"</li>");
    });

//Diplay 'error' only if number is <= 0 or a whole number
    // $(".help-inline").text(validNumberCheck(number));
    // $(".help-inline").css("background-color", "cyan");

//Clear output - this is the Reset button
    // $("button#clearScreen").click(function() {
    //   location.reload();
    // });
    });
  });
});
