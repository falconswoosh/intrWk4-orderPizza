//Business Interface
var typeArr=["Original", "Pan", "Original-stuffed","Pan-stuffed", "ThinNcrispy"];
var sizeArr=["Small", "Medium", "Large", "Super-large"];
var toppingsArr=["Cheese", "Pepperoni", "Italian Sausage", "Salami", "Meatball", "Ham", "Bacon", "Pineapple"];

function Selections (type, size, toppings) {
  this.type = type;
  this.size = size;
  this.toppings = toppings;
}

function Price (subTotal, orderTotal) {
  this.subTotal = 0;
  this.orderTotal = 0;
  this.typeCost = [0.25, 0.50, 0.75, 1.00, 1.25];
  this.sizeCost = [6.99, 7.99, 8.99, 9.99];
}

function Customer (lastName, firstName, phone, email) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.phone = phone;
  this.email = email;
}

function Payment (payment) {
  this.credit = ["Visa", "Mastercard", "Debit"];
  this.cash   = false;
}

// InputBase.prototype.Indices = function () {
//   var typeIndex = this.type.indexOf(pizzaType);
//   var sizeIndex = this.size.indexOf(pizzaSize);
//   alert("Type-Index: " + typeIndex);
//   alert("Type-Size: " + sizeIndex);
// };

// PizzaChoiceArrays.prototype.OrderType = function () {
//   var typeIndex = this.type.indexOf(pizzaType);
//   return typeIndex
// };
//
// PizzaChoiceArrays.prototype.OrderSize = function () {
//   var sizeIndex = this.size.indexOf(pizzaSize);
//   return sizeIndex
// };

// Price.prototype.CalcPrice = function () {
//   var typePrice = this.typeCost[typeIndex];
//   var sizePrice = this.sizeCost[sizeIndex];
//   this.subTotal=this.subTotal + typePrice + sizePrice;
//   this.orderTotal=this.orderTotal+this.subTotal;
//   return typePrice
// };



//User Interface
$(function() {
  $( "input[type='checkbox']" ).prop( "unchecked", true );
  $("button#clearScreen").click(function() {
    location.reload();
  });
  $("form").submit(function(event) {
    event.preventDefault();
    var inputType = $("select#selectType").val();
    var inputSize = $("select#selectSize").val();
    var toppingsResponse = [];
    var inputToppings = $("input:checkbox[name=toppings]:checked").each(function() {
      toppingsResponse.push($(this).val());
    });
    var input = new Selections(inputType, inputSize);
    console.log("inputType: " + inputType);
    console.log("inputSize: " + inputSize);
    console.log("inputToppings: " + inputToppings);

    // var input = (($("select#selectType").val()),($("select#selectType").val()))
    // input.Indices();

    var toppingsResponse = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
        var toppingChoices = $(this).val();
        toppingsResponse.push(toppingChoices);
    });

    // Reset dropdowns and checkboxes to default
    // $("clear").click(function(event) {
    //   event.preventDefault();
    //   $("form#checkbox1").show();
  	// 	$("ul#list1").append("<li>"+inputType+"</li>");
    // });
    //
  //Output
    // console.log("Type: " + OrderInput.typeval);
    // console.log("Size: " + OrderInput.typesize);
    // console.log("Toppings: " + OrderInput.toppingsVal());
    $("div#output").show();
		$("ul#list1").append("<li>"+inputType+"</li>");
    $("ul#list1").append("<li>"+inputSize+"</li>");
    $("input:checkbox[name=toppings]:checked").each(function() {
        var toppingChoices = $(this).val();
        $("ul#list2").append("<li>"+toppingChoices+"</li>");
    });

//Diplay 'error' only if number is <= 0 or a whole number
    // $(".help-inline").text(validNumberCheck(number));
    // $(".help-inline").css("background-color", "cyan");

//Clear output - this is the Reset button
    $("button#clearScreen").click(function() {
      location.reload();
    });

  });
});
