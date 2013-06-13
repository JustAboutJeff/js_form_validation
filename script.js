$(document).ready( function() {
    $('button').on('click', function() {
      validateForm();
    });
});

function validateForm() {
  var $errorList = $('ul#errors');

  var emailRegex = /\S+@\S+\.\S+/;
  var $emailInput = $('input[name=email]').val();
  var passRegex = /..../;
  var $passInput = $('input[name=password]').val();

  if !(regex.exec() {
            $errorList.append('<li></li>').html('Must be a valid email address');
        }
}
