module.exports = function(router) {
	const Oficina = require("../controller/oficina.controller.js");

	router.post("/api/oficina", Oficina.create);

	router.get("/api/oficina/:id", Oficina.findById);

	router.put("/api/oficina/:id", Oficina.update);

	router.get("/api/oficina/cidade/:cidade", Oficina.getOficinaByCidade);

	router.get('/api/oficina', Oficina.findAll);

	return router;
};
