module.exports = function(router) {
	const Mecanico = require("../controller/mecanico.controller.js");

	router.post("/api/mecanico", Mecanico.create);

	router.put("/api/mecanico/:id", Mecanico.update);
	
	router.get('/api/mecanico/:id' , mecanico.findByPk);

	router.delete("/api/mecanico/:id", Mecanico.delete);


	return router;
};
