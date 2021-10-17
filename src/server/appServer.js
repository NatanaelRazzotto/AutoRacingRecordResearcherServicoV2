
const express = require('express');
const { RepositoryCircuits } = require('./repository/sequelize/repositoryClass/repositoryCircuits');
const { RepositoryRaces } = require('./repository/sequelize/repositoryClass/repositoryRaces');
const { RepositoryResults } = require('./repository/sequelize/repositoryClass/repositoryResults');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    //res.send("Introdução a API");
    return res.json({ titulo: "Como criar API" })
});

//region POST

app.post("/circuit", async (req, res) => {
    const repositoryCircuits = new RepositoryCircuits();
    const objetoObtido = await repositoryCircuits.create(req.body);
    //let objetoObtido = req.body;
    return res.json(objetoObtido);//{ titulo: "testando" }
});

app.post("/race", async (req, res) => {
    const repositoryRaces = new RepositoryRaces();
    const objetoObtido = await repositoryRaces.create(req.body);
    //let objetoObtido = req.body;
    return res.json(objetoObtido);//{ titulo: "testando" }
});
app.post("/result", async (req, res) => {
    const repositoryResults = new RepositoryResults();
    const objetoObtido = await repositoryResults.create(req.body);
    //let objetoObtido = req.body;
    return res.json(objetoObtido);//{ titulo: "testando" }
});

app.listen(3000, () => {
    console.log("servidor iniciado na porta 3000: http://localhost:3000/");
});

//docker run --name mysql-server -p 3306:3306 -e MYSQL_ROOT_PASSWORD=razzotto -d mysql:latest