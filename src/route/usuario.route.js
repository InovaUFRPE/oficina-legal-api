module.exports = function(router) {
	const Usuario = require("../controller/usuario.controller.js");

	router.post("/api/usuario", Usuario.create);

	router.get("usuario/:login/:senha", Usuario.findAll);

	router.post("/login", Usuario.login);

	router.put('/disable/:id', Usuario.disable); 

	router.put("/api/usuario/:idUsuario", Usuario.update);

	return router;
};
