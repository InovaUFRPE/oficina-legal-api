module.exports = function(router) {
	const cliente = require("../controller/cliente.controller.js");

	router.post("/register", cliente.create);

	router.get("/api/Cliente/:clienteId", cliente.findByPk);

	router.post('/api/cliente', cliente.findOficina);

	router.get('/api/cliente/', cliente.findAll);

	router.put('/api/cliente/:id', cliente.update);

	return router;
};
