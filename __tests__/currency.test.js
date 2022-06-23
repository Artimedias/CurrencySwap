import Money from "./../src/js/currency.js"

describe('getEuro', () => {
    expect(Money.getEuro()).toBeGreaterThan(0);

    test('Should return ', () => {
        testing = Money.getEuro()
        console.log(getEuro)
        const body = JSON.parse(testing);
        console.log(body)
        expect(body.conversion_rate).toBeGreaterThan(0);
      });
});