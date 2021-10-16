const { RepositoryResults } = require('../../../../src/server/repository/sequelize/repositoryClass/repositoryResults');
const database = require('../../../../src/server/repository/sequelize/db')
describe('Repository', () => {
    const repositoryResults = new RepositoryResults();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual('f1Base');
    });
    it('create Results', async () => {
        const result = {
            raceId: "1",
            driverId: "max_verstappen",//Driver: [Object],
            constructorId: "red_bull",//Constructor: [Object],
            number: "47",
            grid: "29",
            position: "28",
            positionText: "R",
            //  positionOrder: "",
            points: '0',
            laps: '45',
            statusId: 'Accident'//status
        };
        const received = await repositoryResults.create(result);
        console.log(received);
        expect(received).toEqual({
            resultId: expect.any(Number),
            raceId: "1",
            driverId: "max_verstappen",//Driver: [Object],
            constructorId: "red_bull",//Constructor: [Object],
            number: "47",
            grid: "29",
            position: "28",
            positionText: "R",
            // positionOrder: "",
            time: expect.any(String),
            points: '0',
            laps: '45',
            statusId: 'Accident',
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
})