module.exports = function(router) {
	const Agendamento = require("../controller/agendamento.controller.js");

	router.post("/agen/create", Agendamento.create);

	router.get("/agen/:idOficina", Agendamento.findByOficina);

	return router;
};
