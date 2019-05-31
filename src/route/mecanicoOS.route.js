module.exports = function(router) {
	const MecanicoOS = require("../controller/mecanicoos.controller.js");

	router.post("/create", MecanicoOS.create);

	return router;
};
