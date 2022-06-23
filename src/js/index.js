import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";

$(document).ready(function() {
  $('#swapSubmit').click(function() {
    let money1 = $('#moneyOne').val();
    let money2 = $('#moneyTwo').val();
    let money3 = $('#moneyAmount').val();
    $('#moneyOne').val("");
    $('#moneyTwo').val("");
    $('#moneyThree').val("");

    let promise = Currency.exchange(money1, money2);

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log((`${body.conversion_rate}`));
      console.log((money3));
      
      $('#showRate').text("The exchange rate between" + money1 + " and " + money2 + " is " + `${body.conversion_rate}%` + "\n" + money3 + " " + money1 + " is equal to " + (`${body.conversion_rate}` * money3) + " " + money2);
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
  $('#codes').click(function() {
    $("#helper").toggle();
  });

});
