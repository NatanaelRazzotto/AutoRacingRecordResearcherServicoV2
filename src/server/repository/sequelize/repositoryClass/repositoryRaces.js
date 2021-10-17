const { ModelRaces } = require('../model/modelRaces');
const { Op } = require("sequelize");

class RepositoryRaces {
    async create(races) {
        const validate = await this.findAllWhere(races);
        if ((validate[0] != null)) {
            console.log("já tem");
            //  console.log(validate);
            return validate[0];
        }
        else {
            console.log("não tem");
            const received = await ModelRaces.create(races);
            return received.dataValues;
        }
    }

    async findAllWhere(race) {
        const Races = await ModelRaces.findAll({
            where: {
                [Op.and]: [
                    { year: race.year },
                    { round: race.round },
                    { name: race.name }
                ]
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            console.log(" test + " + result);
            return result;
        });
        return Races;
    }

    async findAll() {
        const races = await ModelRaces.findAll();
        return races;
    }
}

module.exports = { RepositoryRaces };