module.exports = function(router){
    const agendamento = require("../controller/agendamento.controller")

    router.post("/create", agendamento.create)

    router.get("/findAll", agendamento.findAll)

    return router
};