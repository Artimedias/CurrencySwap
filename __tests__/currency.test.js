import Money from "./../src/js/currency.js"
import $ from 'jquery';

describe('getEuro', () => {

    test('Should return ', () => {
      
        let testing = Money.getEuro()
        testing.then(function(response) 
        {
          console.log("reached!");
        const body = JSON.parse(response);
        console.log(body)
        expect(`${body.conversion_rate}`).toBeGreaterThan(0);
        });
      });
});