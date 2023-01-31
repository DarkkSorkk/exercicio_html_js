$('#myForm').submit(function(event) {
  event.preventDefault(); // prevent the form from submitting by default

  var input1 = parseInt($('#input1').val());
  var input2 = parseInt($('#input2').val());

  if (input1 <= input2 + 11) {
    $('#input1').css('border', '1px solid red');

    var errorMessage = $('<p>').text("dad's age must be at least 13 years older than son's age!").css({
      'color': 'red',
      'margin-top': '10px'
    });

    $('#input1').after(errorMessage);
  } else {
    $('#input1').css('border', '1px solid green');

    var successMessage = $('#sucesS').text('Well done! ' + input1 + ' is greater than ' + input2 + '!').css({
      'color': 'green',
      'margin-top': '10px'
    });

    $('#input1').after(successMessage);

    // Clear the form fields
    $('#input1').val('');
    $('#input2').val('');
  }
});
