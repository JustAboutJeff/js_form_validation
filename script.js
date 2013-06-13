$(document).ready( function() {
    
  $('button').on('click', function( event ) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    var emailRegex = /\S+@\S+\.\S+/;
    var passNumericRegex = /.*\d.*/;
    var passCapitalRegex = /.*[A-Z]+.*/;

    var $errorList = $('ul#errors');
    $errorList.contents().remove();

    // var $formInput = $('form').filter(':input');
    var $emailInput = $('input[name="email"]').val();
    var $passInput = $('input[name="password"]').val();
    
    if (!emailRegex.test($emailInput)) {
      $errorList.append('<li>Must be a valid email address</li>');
    }
    if (!passNumericRegex.test($passInput)) {
      $errorList.append('<li>Password must have at least one numeric character (0-9)</li>');
    }
    if (!passCapitalRegex.test($passInput)) {
      $errorList.append('<li>Password must have at least one capital letter</li>');
    }
    if ($passInput.length < 8 ) {
      $errorList.append('<li>Password must be at least 8 characters long</li>');
    }
  }
});
