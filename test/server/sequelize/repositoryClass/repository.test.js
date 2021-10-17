const database = require('../../../../src/server/repository/db');

describe('Repository', () => {
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual('f1BaseData');
    });
})