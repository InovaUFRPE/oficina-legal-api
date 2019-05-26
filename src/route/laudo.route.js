module.exports = function(router) {
	const Laudo = require("../controller/laudo.controller.js");
	const verifyJWT = require("../config/user.auth.js");

	router.post("/create", verifyJWT, Laudo.create);

	return router;
};
