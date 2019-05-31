module.exports = function(router) {
	const Mecanico = require("../controller/mecanico.controller.js");

	router.post("/create", Mecanico.create);

	router.put("/:id", Mecanico.update);
	
	router.get('/:id' , Mecanico.findByPk);

	router.delete("/:id", Mecanico.delete);


	return router;
};
