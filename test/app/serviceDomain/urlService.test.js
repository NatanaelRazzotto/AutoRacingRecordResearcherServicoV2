const {
    UrlService,
} = require('../../../src/app/serviceDomain/urlService');

describe('UrlService', () => {

    it('FetchURLDriver ', () => {
        const configure = {
            filter: 'alonso',
        };
        const fetchDriver = UrlService.generateURLDrivers(configure);
        // eslint-disable-next-line no-console
        console.log(fetchDriver);
        expect(fetchDriver).toBeTruthy();
    });

    it('Gera URL ', () => {
        const configureFilter = {
            year: 2020,
            round: 17,
            grid: 3,
        };
        const resultRace = UrlService.generateURLresults(configureFilter);
        console.log(resultRace);
        expect(resultRace).toBeTruthy();
    });
});