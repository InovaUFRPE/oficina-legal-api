module.exports = function(router) {
	const MecanicoOS = require("../controller/mecanicoos.controller.js");

	router.post("/add", MecanicoOS.create);

	return router;
};
