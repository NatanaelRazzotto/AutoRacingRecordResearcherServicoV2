const { RepositoryCircuits } = require('../../../../src/server/repository/sequelize/repositoryClass/repositoryCircuits');
const database = require('../../../../src/server/repository/db');
describe('Repository', () => {
    const repositoryCircuits = new RepositoryCircuits();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual('f1BaseData');
    });
    it('create Circuit', async () => {
        const Circuit = {
            circuitRef: "yas_marina",//circuitId
            name: "Yas Marina Circuit",//circuitName
            location: 'Abu Dhabi',//locality
            country: 'UAE',//country
            lat: '24.4672',//lat
            lng: '54.6031',//long
            url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit'//url
        };
        const received = await repositoryCircuits.create(Circuit);
        console.log(received);
        expect(received).toEqual({
            circuitId: expect.any(Number),
            circuitRef: "yas_marina",
            name: "Yas Marina Circuit",
            location: 'Abu Dhabi',
            country: 'UAE',
            lat: 24.4672,
            lng: 54.6031,
            url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit',
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
    /* it('FindAll', async () => {
         const received = await repositoryCircuits.findAllWhere();
         if (received.length != 0) {
             console.log(received);
         }
         else {
             console.log("nada");
         }
 
     });*/
});