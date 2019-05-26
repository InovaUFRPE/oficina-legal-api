module.exports = function(router) {
	const Certificado = require("../controller/certificado.controller.js");

	router.post("/create", Certificado.create);

	router.get("/:id", Certificado.findById);

	router.put("/:id", Certificado.update);



	return router;
};
