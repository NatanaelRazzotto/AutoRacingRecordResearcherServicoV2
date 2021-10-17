const { ModelResults } = require('../model/modelResults');
const { Op } = require("sequelize");

class RepositoryResults {
    async create(result) {
        const validate = await this.findAllWhere(result);
        if ((validate[0] != null)) {
            console.log("já tem");
            //  console.log(validate);
            return validate[0];
        }
        else {
            console.log("não tem");
            const received = await ModelResults.create(result);
            return received.dataValues;
        }
    }

    async findAllWhere(resultObject) {
        const Results = await ModelResults.findAll({
            where: {
                [Op.and]: [
                    { raceId: resultObject.raceId },
                    { driverId: resultObject.driverId },
                    { constructorId: resultObject.constructorId },
                    { number: resultObject.number }
                ]
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            console.log(" test + " + result);
            return result;
        });
        return Results;
    }

    async findAll() {
        const results = await ModelResults.findAll();
        return results;
    }
}

module.exports = { RepositoryResults };