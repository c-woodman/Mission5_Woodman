// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#btnSubmit").click(function () {

    var miles = parseFloat($("#milesInput").val());
    var chargePerHour = parseFloat($("#chargePerHour").val());

    if (!isNaN(miles) && miles > 0) {
        var quote = miles * chargePerHour;

        //passing back to my view
        $("#totalPrice").val(quote.toFixed(2));

    }
    else {
        alert("Please enter a valid number of miles greater than 0.");
        $("#milesInput").val(''); // Clear the totalPrice input
    }


})
