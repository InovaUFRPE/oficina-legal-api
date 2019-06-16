const express = require("express");

const cors = require("cors");

const agendamento = require("./src/route/agendamento.route.js");
const certificado = require("./src/route/certificado.route.js");
const cliente = require("./src/route/cliente.route.js");
const gestor = require("./src/route/gestor.route.js");
const laudo = require("./src/route/laudo.route.js");
const mecanico = require("./src/route/mecanico.route.js");
const mecanicoOS = require("./src/route/mecanicoOS.route.js");
const mecanicoOficina = require("./src/route/mecanicoOficina.route.js");
const oficina = require("./src/route/oficina.route.js");
const os = require("./src/route/os.route.js");
const usuario = require("./src/route/usuario.route.js");
const veiculo = require("./src/route/veiculo.route.js");
const servico = require("./src/route/servico.route.js");

var app = express();
var bodyParser = require("body-parser");

const db = require("./src/config/db.config.js");

db.sequelize.sync().then(() => {});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	cors({
		origin: "*"
	})
);

//app.use("/", (req, res) => {res.json(`API IS ONLINE ${Date.now().toString()}`)})
app.use("/api/agendamento", agendamento);
app.use("/api/certificado", certificado);
app.use("/api/cliente", cliente);
app.use("/api/gestor", gestor);
app.use("/api/laudo", laudo);
app.use("/api/mecanico", mecanico);
app.use("/api/mecanicoOS", mecanicoOS);
app.use("/api/mecanicoOficina", mecanicoOficina)
app.use("/api/oficina", oficina);
app.use("/api/os", os);
app.use("/api/usuario", usuario);
app.use("/api/veiculo", veiculo);
app.use("/api/servico", servico);

module.exports = app;
