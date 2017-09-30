//Business Interface
function Pizza (type, size, toppings) {
  this.type = ["Original", "Pan", "Original-stuffed","Pan-stuffed", "ThinNcrispy"];
  this.size = ["Small", "Medium", "Large", "Super-large"];
  this.toppings = ["Cheese", "Pepperoni", "Italian Sausage", "Salami", "Meatball", "Ham", "Bacon", "Pineapple"];
}
//type = ["Original", "Pan", "Original-stuffed","Pan-stuffed", "ThinNcrispy"];
//size = ["Small", "Medium", "Large", "Super-large"];
//toppings = ["Cheese", "Pepperoni", "Italian Sausage", "Salami", "Meatball", "Ham", "Bacon", "Pineapple"];

function Price (type, size, subTotal, orderTotal) {
  this.typeCost = [0.25, 0.50, 0.75, 1.00, 1.25];
  this.sizeCost = [6.99, 7.99, 8.99, 9.99];
  this.subTotal = 0;
  this.orderTotal = 0;
}

function Customer (lastName, firstName, phone, email) {
  this.lastName = "";
  this.firstName = "";
  this.phone = "";
  this.email = "";
}

function Payment (payment) {
  this.credit = ["Visa", "Mastercard", "Debit"];
  this.cash   = false;
}

Pizza.prototype.PizzaOrder = function () {
  var typeIndex = this.type.indexOf(pizzaType);
  var sizeIndex = this.size.indexOf(pizzaSize);
};

Price.prototype.CalcPrice = function () {
  var typePrice = this.typeCost[typeIndex];
  var sizePrice = this.sizeCost[sizeIndex];
  this.subTotal=this.subTotal + typePrice + sizePrice;
  this.orderTotal=this.orderTotal+this.subTotal;
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
    Pizza.PizzaOrder(pizzaType, pizzaSize);
    Price.CalcPrice(pizzaType, pizzaSize);

  //Output
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
