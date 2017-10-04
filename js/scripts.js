//Business Interface

function Pizza (type, size, typePrice, sizePrice, toppings) {
  this.type = type;
  this.size = size;
  this.typePrice = typePrice;
  this.sizePrice = sizePrice;
  this.toppings = toppings;
}

Pizza.prototype.totalPrice = function() {
  var totalPrice = this.typePrice + this.sizePrice;
  return totalPrice;
};

//User Interface
$(function() {
  // $( "input[type='checkbox']" ).prop( "unchecked", true );
  // $("select#selectType").val("0.25");
  // $("select#selectSize").val("7.99");
  $("form").submit(function(event) {
    event.preventDefault();
    // $("table#list").empty(); // wrong level in the table!
     $("tr").empty(); //this works instead

    var inputTypePrice1 = Number($("select#selectType").val());
    var inputSizePrice1 = Number($("select#selectSize").val());
    var inputType = $("select#selectType>option:selected").text();
    var inputSize = $("select#selectSize>option:selected").text();
    var extractTypeName = inputType.indexOf("(");
    var extractSizeName = inputSize.indexOf("(");
    var inputTypeName = inputType.substr(0,extractTypeName-1);
    var inputSizeName = inputSize.substr(0,extractSizeName-1);
    var inputTypePrice = parseFloat(inputTypePrice1).toFixed(2);
    var inputSizePrice = parseFloat(inputSizePrice1).toFixed(2);
    var toppingsResponse = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingChoices = $(this).val();
      toppingsResponse.push(toppingChoices);
    });
    var newOrder = new Pizza(inputTypeName, inputSizeName, inputTypePrice1, inputSizePrice1, toppingsResponse);


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
    // $("tr#list4").append("<td>"+toppingsResponse+"</td>");
    $("tr#list4").append("<td>"+toppingsResponse+"</td>");
    $("tr#list4").append("<td>Included</td>");

	  $("tr#list5").append("<td id='total'><b>TOTAL PRICE:</b></td>");
	  $("tr#list5").append("<td></td>");
    $("tr#list5").append("<td><b>$"+newOrder.totalPrice()+"</b></td>");

  });
  //Clear output - this is the Reset button
  $("button#clearScreen").click(function() {
    location.reload();
  });
});
