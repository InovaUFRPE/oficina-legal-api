module.exports = function(router) {
	const MecanicoOS = require("../controller/mecanicoOS.controller.js");

	router.post("/add", MecanicoOS.create);

	return router;
};
