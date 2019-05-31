module.exports = function(router) {
	const cliente = require("../controller/cliente.controller.js");

	router.post("/create", cliente.create);

	router.get("/:clienteId", cliente.findByPk);

	router.get("/usuario/:id", cliente.findByIdUsuario)

	//router.post('/api/cliente', cliente.findOficina);

	router.get('/findAll', cliente.findAll);

	router.put('/:id', cliente.update);

	return router;
};
