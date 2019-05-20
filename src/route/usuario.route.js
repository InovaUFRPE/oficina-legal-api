module.exports = function(router) {
	const Usuario = require("../controller/usuario.controller.js");

	router.post("/api/usuario", Usuario.create);

	router.get("/api/usuario/:login/:senha", Usuario.findAll);

	router.post("/api/usuario/login", Usuario.login);

	router.put('/api/usuario/disable/:id', Usuario.disable); 

	router.put("/api/usuario/:idUsuario", Usuario.update);

	return router;
};
