// back-end






// front-end
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    // get elements for the array from the inputs
     var produce = ["item-one", "item-two", "item-three", "item-four", "item-five"];
    // var produce = [ $('input[name="item-one"]').val(),
    //                 $('input[name="item-two"]').val(),
    //                 $('input[name="item-three"]').val(),
    //                 $('input[name="item-four"]').val(),
    //                 $('input[name="item-five"]').val(), ];

    //Below uses map to save input values in an array of variables
    var capValues = produce.map(function(item){
      return $("input#" + item).val().toUpperCase();
      });

    var sortedValues = capValues.sort();

    //Below uses for loop to append the list of sortedValues by index
    for (var index = 0; index < sortedValues.length; index += 1) {
      $("#grocerie-list").append("<li>" + sortedValues[index] + "</li>");
      $("#form1").hide();
    }

    //Below loops using forEach method
    // sortedValues.forEach(function(item){
    //   $("#form1").hide();
    //   $("#grocerie-list").append("<li>" + item + "</li>");
    // });


    // var lastValue =
    //   $("." + item).text(totalItems)

  });
});
// console.log(totalItems);




    // var list = produce.map(function(item){
    //   return item.toUpperCase();
    // });


    //
    // var totalllll = totalItems.map(function(valor){
    // return valor.toUpperCase();
