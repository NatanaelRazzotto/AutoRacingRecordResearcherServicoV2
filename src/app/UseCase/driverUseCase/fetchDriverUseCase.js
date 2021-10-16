const {
  UrlService,
} = require("../../serviceDomain/urlService");

class FetchDriverUseCase {
  constructor(requestService) {
    this.requestService = requestService;
  }

  async execute(configure) {
    const urlFetch = await this.fetchDateDriver(configure);
    return urlFetch;
  }

  async fetchDateDriver(configure) {
    const fetchURL = UrlService.generateURLDrivers(configure);
    this.objectResult = await this.requestService.request(fetchURL);
    return this.convertJsonToObject();
  }

  convertJsonToObject() {
    const resultado = this.objectResult.MRData.DriverTable;
    return resultado;
  }

}

module.exports = { FetchDriverUseCase };
