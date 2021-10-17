
const express = require('express');
const { RepositoryCircuits } = require('./repository/sequelize/repositoryClass/repositoryCircuits');
const { RepositoryRaces } = require('./repository/sequelize/repositoryClass/repositoryRaces');
const { RepositoryResults } = require('./repository/sequelize/repositoryClass/repositoryResults');

const app = express();

app.use(express.json());

// Stop DOCKER com CRTL ^C
process.on('SIGINT', shutdown);

//region GET

app.get("/", (req, res) => {
    return res.json({ titulo: "API test" })
});

app.get("/circuit", async (req, res) => {
    const repositoryCircuits = new RepositoryCircuits();
    const objetoObtido = await repositoryCircuits.findAll();
    return res.json(objetoObtido);
});
app.get("/races", async (req, res) => {
    const repositoryRaces = new RepositoryRaces();
    const objetoObtido = await repositoryRaces.findAll();
    return res.json(objetoObtido);
});
app.get("/results", async (req, res) => {
    const repositoryResults = new RepositoryResults();
    const objetoObtido = await repositoryResults.findAll();
    return res.json(objetoObtido);
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

function shutdown() {
    console.log('shutdown express');
    app.close(function () {
      console.log('Encerrando servidor express');
    });
  }