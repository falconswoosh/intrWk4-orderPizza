//Business Interface
// var typeArr=["Original", "Pan", "Original-stuffed","Pan-stuffed", "ThinNcrispy"];
// var sizeArr=["Small", "Medium", "Large", "Super-large"];
// var toppingsArr=["Cheese", "Pepperoni", "Italian Sausage", "Salami", "Meatball", "Ham", "Bacon", "Pineapple"];
// var inputTypeVal = $("select#selectType>option:selected").val(); //another way of getting value from a select/option input
// this.typeCost = [0.25, 0.50, 0.75, 1.00, 1.25];
// this.sizeCost = [6.99, 7.99, 8.99, 9.99];

function Selections (type, size, toppings) {
  this.type = type;
  this.size = size;
  this.toppings = [];
}

function Price (subTotal, orderTotal) {
  this.subTotal = 0;
  this.orderTotal = 0;

}

function Customer (lastName, firstName, phone, email) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.phone = phone;
  this.email = email;
}

function Payment (payment) {
  subTotal = inputTypePrice + inputSizePrice;
  this.credit = ["Visa", "Mastercard", "Debit"];
  this.cash   = false;
}


//User Interface
$(function() {
  $( "input[type='checkbox']" ).prop( "unchecked", true );
  $("button#clearScreen").click(function() {
    location.reload();
  });
  $("form").submit(function(event) {
    event.preventDefault();
    var inputTypePrice = parseFloat($("select#selectType").val());
    var inputSizePrice = parseFloat($("select#selectSize").val());
    var inputType = $("select#selectType>option:selected").text();
    var inputSize = $("select#selectSize>option:selected").text();
    var extractTypeName = inputType.indexOf("(");
    var extractSizeName = inputSize.indexOf("(");
    var inputTypeName = inputType.substr(0,extractTypeName-1);
    var inputSizeName = inputSize.substr(0,extractSizeName-1);
    var toppingsResponse = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingChoices = $(this).val();
      toppingsResponse.push(toppingChoices);
    });

    console.log("inputType: " + inputTypeName + " Price: " + inputTypePrice);
    console.log("inputSize: " + inputSizeName + " Price: " + inputSizePrice);
    console.log("inputToppings: " + toppingsResponse);
    // var index = Price.Indices();


  //Output
    $("div#output").show();
		$("ul#list1").append("<li>"+inputTypePrice+"</li>");
    $("ul#list1").append("<li>"+inputSizePrice+"</li>");
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
