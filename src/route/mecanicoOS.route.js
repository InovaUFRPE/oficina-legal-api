module.exports = function(router) {
	const MecanicoOS = require("../controller/mecanicoos.controller.js");

	router.post("/api/mecanicoos", MecanicoOS.create);

	return router;
};
