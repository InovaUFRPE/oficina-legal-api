module.exports = function(router) {
	const Usuario = require("../controller/usuario.controller.js");

	router.post("/create", Usuario.create);

	router.get("/:login/:senha", Usuario.findAll);

	router.post("/login", Usuario.login);

	router.put('/disable/:id', Usuario.disable); 

	router.put("/:idUsuario", Usuario.update);

	return router;
};
