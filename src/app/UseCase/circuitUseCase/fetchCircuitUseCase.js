
class FetchCircuitUseCase {
    constructor(requestService) {
        this.requestService = requestService;
    }
    async persistenceOfObjects(object) {
        const objectResult = this.preparObjectCircuit(object);
        const requestPersisted = await this.requestService.requestPost(objectResult, "/circuit");
        return requestPersisted;
    }

    preparObjectCircuit(Circuit) {
        const objectCircuit = {
            circuitRef: Circuit.circuitId,//circuitId
            name: Circuit.circuitName,//circuitName
            location: Circuit.Location.locality,//locality
            country: Circuit.Location.country,//country
            lat: Circuit.Location.lat,//lat
            lng: Circuit.Location.long,//long
            url: Circuit.url//url
        }
        return objectCircuit;
    }
}
module.exports = { FetchCircuitUseCase };