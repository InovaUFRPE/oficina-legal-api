module.exports = function(router) {
	const Oficina = require("../controller/oficina.controller.js");
	const verifyJWT = require("../config/user.auth.js");

	router.post("/create", Oficina.create);

	router.get("/:id", Oficina.findById);

	router.put("/:id", verifyJWT, Oficina.update);

	router.get("/cidade/:cidade", Oficina.getOficinaByCidade);

	router.get('/findAll', Oficina.findAll);

	return router;
};
