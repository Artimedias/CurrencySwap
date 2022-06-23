import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
//import Money from "../js/currency.js"

$(document).ready(function() {
  $('#swapSubmit').click(function() {
    let money1 = $('#moneyOne').val();
    let money2 = $('#moneyTwo').val();
    $('#moneyOne').val("");
    $('#moneyTwo').val("");

// New code begins here.
console.log("reached");
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${money1}/${money2}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#showRate').text("The exchange rate between" + money1 + " and " + money2 + " is " + `${body.conversion_rate}%`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showHumidity').text("");
      $('.showTemp').text("");
    });
  });
});

/*$(document).ready(function() {

  $("#formDone").click(function () {
    });
  });*/