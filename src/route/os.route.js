module.exports = function(router) {
	const Os = require("../controller/os.controller.js");
	const verifyJWT = require("../config/user.auth.js");

	router.post("/create", verifyJWT, Os.create);

	router.get("/:id", Os.findById);

	return router;
};
