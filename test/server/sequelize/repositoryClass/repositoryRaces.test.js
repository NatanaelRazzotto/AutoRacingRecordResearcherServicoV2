const { RepositoryRaces } = require('../../../../src/server/repository/sequelize/repositoryClass/repositoryRaces');
const database = require('../../../../src/server/repository/db')
describe('Repository', () => {
    const repositoryRaces = new RepositoryRaces();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual('f1BaseData');
    });
    it('create Races', async () => {
        const races = {
            //raceId: "",
            year: "1960",
            round: "3",
            circuitId: "1",//indianapolis,
            name: "Indianapolis 500",//raceName
            date: "1960-05-30T00:00:00.000Z",
            time: "",
            url: "http://en.wikipedia.org/wiki/1960_Indianapolis_500"
        };
        const received = await repositoryRaces.create(races);
        console.log(received);
        expect(received).toEqual({
            raceId: expect.any(Number),
            year: "1960",
            round: "3",
            circuitId: "1",//indianapolis,
            name: "Indianapolis 500",//raceName
            date: expect.any(Date),
            time: "",
            url: "http://en.wikipedia.org/wiki/1960_Indianapolis_500",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
})