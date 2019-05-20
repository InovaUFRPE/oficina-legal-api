module.exports = function(router) {
	const Laudo = require("../controller/laudo.controller.js");

	router.post("/api/laudo", Laudo.create);

	return router;
};
