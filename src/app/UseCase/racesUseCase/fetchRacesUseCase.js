const {
    FetchCircuitUseCase,
} = require("../circuitUseCase/fetchCircuitUseCase")

class FetchRacesUseCase {
    constructor(requestService) {
        this.requestService = requestService
        this.fetchCircuitUseCase = new FetchCircuitUseCase(this.requestService);
    }
    async persistenceOfObjects(Resultados) {
        const circuitPersistido = await this.fetchCircuitUseCase.persistenceOfObjects(Resultados.Circuit);
        const objectResult = this.preparObjectRaces(Resultados, circuitPersistido.circuitId);
        const requestPersisted = await this.requestService.requestPost(objectResult, "/race");
        return requestPersisted;
    }

    preparObjectRaces(Races, idCircuit) {
        const objectRaces = {
            year: Races.season,
            round: Races.round,
            circuitId: idCircuit,//indianapolis,
            name: Races.raceName,//raceName
            date: Races.date,
            time: Races.time,
            url: Races.url
        }
        return objectRaces;
    }
}
module.exports = { FetchRacesUseCase };