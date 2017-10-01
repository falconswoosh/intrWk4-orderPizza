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
    // var inputTypePrice = (parseFloat($("select#selectType").val()).toPrecision(3));
    // var inputSizePrice = (parseFloat($("select#selectSize").val()).toPrecision(3));
    // var inputTypePrice = Number(inputTypePrice);
    // var inputSizePrice = Number(inputSizePrice);

    var inputTypePrice1 = Number($("select#selectType").val());
    var inputSizePrice1 = Number($("select#selectSize").val());
    var inputTypePrice = parseFloat(inputTypePrice1).toPrecision(3);
    var inputSizePrice = parseFloat(inputSizePrice1).toPrecision(3);
    totalIt = inputTypePrice1 + inputSizePrice1;
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

  //Output
    $("div#output1").show();
	  $("tr#list1").append("<th class='tableHead'>Items</th>");
	  $("tr#list1").append("<th class='tableHead'>Selections</th>");
    $("tr#list1").append("<th class='tableHead'>Price</th>");

    $("tr#list2").append("<td><b>Type:</b></td>");
    $("tr#list2").append("<td>"+inputTypeName+"</td>");
    $("tr#list2").append("<td>$"+inputTypePrice+"</td>");


	  $("tr#list3").append("<td><b>Size:</b></td>");
    $("tr#list3").append("<td>"+inputSizeName+"</td>");
    $("tr#list3").append("<td>$"+inputSizePrice+"</td>");

	  $("tr#list4").append("<td><b>Toppings:</b></td>");
    // $("input:checkbox[name=toppings]:checked").each(function() {
    //   var toppingChoices = $(this).val();
      $("tr#list4").append("<td>"+toppingsResponse+"</td>");
    // });
    $("tr#list4").append("<td>Included</td>");

	  $("tr#list5").append("<td id='total'><b>TOTAL PRICE:</b></td>");
	  $("tr#list5").append("<td></td>");
    $("tr#list5").append("<td><b>$"+totalIt+"</b></td>");
  //Clear output - this is the Reset button
    $("button#clearScreen").click(function() {
      location.reload();
      var x = 0;
    });
  });
});
