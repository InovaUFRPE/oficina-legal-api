module.exports = function(router) {
	const Certificado = require("../controller/certificado.controller.js");

	router.post("/api/certificado", Certificado.create);

	router.get("/api/certificado/:id", Certificado.findById);

	router.put("/api/certificado/:id", Certificado.update);



	return router;
};
