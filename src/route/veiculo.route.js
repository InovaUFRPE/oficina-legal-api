module.exports = function(router) {
    const Veiculo =  require('../controller/veiculo.controller.js');

    router.post('/api/veiculo', Veiculo.create);

    return router;
}