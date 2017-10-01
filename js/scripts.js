//Business Interface
var typeArr=["Original", "Pan", "Original-stuffed","Pan-stuffed", "ThinNcrispy"];
var sizeArr=["Small", "Medium", "Large", "Super-large"];
var toppingsArr=["Cheese", "Pepperoni", "Italian Sausage", "Salami", "Meatball", "Ham", "Bacon", "Pineapple"];

function Selections (type, size, toppings) {
  this.type = type;
  this.size = size;
  this.toppings = [];
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

Price.prototype.Index = function () {
  var typeIndex = Selections.type.indexOf(inputType);
  var sizeIndex = Selections.size.indexOf(inputSize);
  for (index=0; index=typeIndex; index++) {
    if (typeArr === typeIndex) {
      costOfType = Price.typeCost[index];
      alert("Type-Price is: " + costOfType);
    }
  }
  for (index=0; index=typeIndex; index++) {
    if (sizeArr === sizeIndex) {
      costOfSize = Price.sizeCost[index];
      alert("Size-Price is: " + costOfSize);
    }
  }
};


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
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingChoices = $(this).val();
      toppingsResponse.push(toppingChoices);
    });

    console.log("inputType: " + inputType);
    console.log("inputSize: " + inputSize);
    console.log("inputToppings: " + toppingsResponse);
    // var index = Price.Indices();


  //Output
    $("div#output").show();
		$("ul#list1").append("<li>"+inputType+"</li>");
    $("ul#list1").append("<li>"+inputSize+"</li>");
    $("input:checkbox[name=toppings]:checked").each(function() {
        var toppingChoices = $(this).val();
        $("ul#list2").append("<li>"+toppingChoices+"</li>");
    });

  //Clear output - this is the Reset button
    $("button#clearScreen").click(function() {
      location.reload();
    });
  });
});
