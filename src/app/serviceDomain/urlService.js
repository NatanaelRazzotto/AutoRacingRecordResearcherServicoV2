const { RandomNumberService } = require("./randomNumberService");

class UrlService {
  static preparURL(url, limite) {
    if (Number.isInteger(limite)) {
      return `${url}/${RandomNumberService.generate(limite)}`;
    } else {
      throw new Error("Limite não é um número");
    }
  }
  static generateURLresults(configureFilter) {
    this.url = "https://ergast.com/api/f1";
    return `${this.url}/${configureFilter.year}/${configureFilter.round}/results.json`;
  }
  static generateURLDrivers(configure) {
    this.url = "https://ergast.com/api/f1";
    return `${this.url}/drivers/${configure.filter}.json`;
  }
}

module.exports = { UrlService };
