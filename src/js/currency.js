export default class Money {
    /*static getPokemon(number) {
      return new Promise(function (resolve, reject){
        let request = new XMLHttpRequest();
        console.log("reached!");
        const url = `https://pokeapi.co/api/v2/pokemon/${number}/`;
        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          }else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });

      const rate = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/EUR/GBP`;
    }*/

    static getEuro() {
      return new Promise(function (resolve, reject){
        let request = new XMLHttpRequest();
        console.log("reached!");
        const rate = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/EUR/GBP`;
        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          }else {
            reject(request.response);
          }
        };
        request.open("GET", rate, true);
        request.send();
      });
    }
  }