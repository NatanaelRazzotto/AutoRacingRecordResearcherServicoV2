const {
    RequestService,
} = require('./serviceApplication/requestService');
const {
    FetchResultRaceUseCase,
} = require('./UseCase/raceResultUseCase/fetchResultRaceUseCase');
const readLineSync = require('readline-sync');

(async () => {
    console.log('----------AUTO RANCING RECORD (client)-----------');
    console.log('----------INFORME A OPERAÇÃO DESEJADA-----------');
    console.log('----------PERSISTÊNCIA E POPULAMENTO:');
    console.log('------------ 1 - Informar Parametros;');
    console.log('------------ 2 - Gerar Parametros;');
    console.log('----------CONSULTA AOS DADOS:');
    console.log('------------ 3 - Consulta Resultado;');

    var operacaoVar = readLineSync.question('Informe a operação: ')
    switch (operacaoVar) {
        case "1":
            console.log('----------PERSISTÊNCIA E POPULAMENTO:');
            var ano = readLineSync.question('Informe a Ano: ');
            var round = readLineSync.question('Informe a round: ');
            var grid = readLineSync.question('Informe a grid: ')
            InformarPersistencia(ano,round,grid);
            break;
        case "2":
            console.log('----------PERSISTÊNCIA E POPULAMENTO (ALEATORIO):');
            var ano = readLineSync.question('Informe a Ano: ')
            var round = readLineSync.question('Informe a round: ')
            GerarParametros(ano,round);
            break;
        case "3":
            console.log('----------CONSULTA AOS DADOS:');
            getResults();
            break;
        case false:
            console.log("Operação Invalida!");
    }

    async function InformarPersistencia(yearParam,roundParam,gridParam){
        const requestService = new RequestService();
        const fetchResultRaceUseCase = new FetchResultRaceUseCase(requestService);
        const configureFilter = {
			year: yearParam,
			round: roundParam,
			grid: gridParam,
        };
        const resultRace = await fetchResultRaceUseCase.fetchExecute(configureFilter);
        console.log("PERSISTENCIA REALIZADA");
        console.log(resultRace);
    }
    async function GerarParametros(yearParam,roundParam){
        const requestService = new RequestService();
        const fetchResultRaceUseCase = new FetchResultRaceUseCase(requestService);
        const configureFilter = {
            year: yearParam,
            round: roundParam,
        };
        const resultRace = await fetchResultRaceUseCase.executeGerador(configureFilter);
        console.log("PERSISTENCIA REALIZADA");
        console.log(resultRace);

    }
    async function getResults(){
        const requestService = new RequestService();
        const fetchResultRaceUseCase = new FetchResultRaceUseCase(requestService);
        const resultRace = await fetchResultRaceUseCase.getPersitencia();
        console.log("DADOS RESULT");
        console.log(resultRace);
    }

   /* const requestService = new RequestService();
    const fetchResultRaceUseCase = new FetchResultRaceUseCase(requestService);
    const configureFilter = {
        year: 1960,
        round: 5,
    };
    const resultRace = await fetchResultRaceUseCase.executeGerador(configureFilter);
    console.log("PERSISTENCIA REALIZADA");
    console.log(resultRace);
    //const a = await requestService.requestPost();
    //console.log(a);*/
})();