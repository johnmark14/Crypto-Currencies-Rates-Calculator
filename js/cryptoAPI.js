const proxyURL = "https://cors-anywhere.herokuapp.com/";
const baseURL = 'https://pro-api.coinmarketcap.com/v1/';
const apiKey = 'CMC_PRO_API_KEY=050138d7-ff28-4307-8032-6b3644fddcec';

const apiURL = `${proxyURL}${baseURL}`;
console.log(apiURL);

class CryptoAPI {

    // Query the REST API
    async queryAPI(cur, crypto) {
        const url = await fetch(`${apiURL}tools/price-conversion?amount=1&id=${crypto}&convert=${cur}&${apiKey}`);

        const conversion = await url.json();

        return {
            conversion
        }
    }

    async getCryptoCurrenciesList() {
        const url = await  fetch(`${apiURL}cryptocurrency/map?limit=99&${apiKey}`);

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }
}