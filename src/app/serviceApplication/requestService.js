// import fetch from "node-fetch";

const fetch = require("node-fetch");

class RequestService {
  // eslint-disable-next-line class-methods-use-this
  async request(rota) {
    const response = await fetch(rota);
    const jsonResult = await response.json();
    return jsonResult;
    // return await response.json();
  }

  async requestFetch(FetchAPI) {
    this.urlFetchAPI = FetchAPI;
    const requestURL = await this.requestPromisse();
    return requestURL;
  }

  requestPromisse() {
    const requestFetch = fetch(this.urlFetchAPI)
      .then(response => response.json())
      .then(result => result)
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    return requestFetch;
  }

  async requestPost(objectPost, ulrTipo) {
    //const object = { name: 'James Gordon' };
    const request = new fetch('http://localhost:3000' + ulrTipo, {
      method: 'POST',
      body: JSON.stringify(objectPost),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        return result
      })
      .catch((err) => {
        console.error(err);
      });
    //const response = await fetch(request);
    return request;
  }

  /* requestHeader3() {
    fetch('https://api-formula-1.p.rapidapi.com/timezone', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
        'x-rapidapi-key': 'fde9a3be57mshff1c0ca8abef816p1a3f80jsnf579fae90b8e',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  requestHeaderFetch() {
    fetch('https://ergast.com/api/f1/drivers.json?=123')
      .then((response) => response.json())
      .then((result) => {
        console.log(result.MRData.DriverTable);
      })
      .catch((err) => {
        console.error(err);
      });
  } */
}

module.exports = { RequestService };
