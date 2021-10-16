const {
    RequestService,
} = require('./serviceApplication/requestService');
const {
    FetchResultRaceUseCase,
} = require('./UseCase/raceResultUseCase/fetchResultRaceUseCase');

(async () => {
    const requestService = new RequestService();
    const fetchResultRaceUseCase = new FetchResultRaceUseCase(requestService);
    const configureFilter = {
        year: 1960,
        round: 5,
    };
    const resultRace = await fetchResultRaceUseCase.executeGerador(configureFilter);
    console.log("PERSISTENCIA REALIZADA");
    console.log(resultRace);
    //const a = await requestService.requestPost();
    //console.log(a);
})();