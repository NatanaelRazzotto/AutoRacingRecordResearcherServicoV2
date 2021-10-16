const { ModelResults } = require('../model/modelResults');

class RepositoryResults {
    async create(races) {
        const received = await ModelResults.create(races);
        return received.dataValues;
    }

    async findAll() {
        const users = await ModelResults.findAll();
        return users;
    }
}

module.exports = { RepositoryResults };