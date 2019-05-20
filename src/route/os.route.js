module.exports = function(router) {
	const Os = require("../controller/os.controller.js");

	router.post("/api/os", Os.create);

	router.get("/api/os/:id", Os.findById);

	return router;
};
