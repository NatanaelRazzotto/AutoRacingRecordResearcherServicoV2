const { ModelCircuits } = require('../model/modelCircuits');

class RepositoryCircuits {
    async create(Circuits) {
        console.log(Circuits);
        const validate = await this.findAllWhere(Circuits)
        //console.log(validate[0])
        if ((validate[0] != null)) {
            console.log("já tem");
            //  console.log(validate);
            return validate[0];
        }
        else {
            console.log("não tem");
            const received = await ModelCircuits.create(Circuits);
            return received.dataValues;
        }
        console.log("não validou");
        return validate;
    }

    async findAllWhere(Circuit) {
        const Circuits = await ModelCircuits.findAll({
            where: {
                circuitRef: Circuit.circuitRef
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            console.log(" test + " + result);
            return result;
        });
        return Circuits;
    }

    async findAll() {
        const Circuits = await ModelCircuits.findAll();
        return Circuits;
    }
}

module.exports = { RepositoryCircuits };