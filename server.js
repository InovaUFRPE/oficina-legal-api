const express = require("express");
const router = express.Router();
const cors = require("cors");
const cliente = require("./src/route/cliente.route.js")(router);
const usuario = require("./src/route/usuario.route.js")(router);
const mecanico = require("./src/route/mecanico.route.js")(router);
const oficina = require("./src/route/oficina.route.js")(router);
const laudo = require("./src/route/laudo.route.js")(router);
const os = require("./src/route/os.route.js")(router);
const certificado = require("./src/route/certificado.route.js")(router);
const mecanicoOS = require("./src/route/mecanicoOS.route.js")(router);
const veiculo = require("./src/route/veiculo.route.js")(router);
const gestor = require("./src/route/gestor.route.js")(router);
const agendamento = require("./src/route/agendamento.route.js")(router);

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
app.use("/api/cliente", cliente);
app.use("/api/mecanico", mecanico);
app.use("/api/oficina", oficina);
app.use("/api/usuario", usuario);
app.use("/api/laudo", laudo);
app.use("/api/os", os);
app.use("/api/certificado", certificado);
app.use("/api/mecanicoOS", mecanicoOS);
app.use('/api/veiculo', veiculo)
app.use('/api/gestor', gestor);
app.use("/api/agendamento",agendamento);

app.listen(3306);