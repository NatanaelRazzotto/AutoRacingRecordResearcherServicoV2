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

  async requestGet(ulrTipo) {
    const response = new fetch('http://localhost:3000' + ulrTipo, {
      method: 'GET',
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
    return response;
  }
  
}

module.exports = { RequestService };
