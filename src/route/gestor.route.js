module.exports = function(router) {
    const gestor = require('../controller/gestor.controller.js');

    //create new gestor
    router.post('/api/gestor', gestor.create);
    //retrive all gestors
    router.get('/api/gestor', gestor.findAll);
    //retrive gestor por id
    router.get('/api/gestor/:id' , gestor.findByPk);
    // Update gestor with Id
    router.put('/api/gestor/:id', gestor.update);

    return router;
}