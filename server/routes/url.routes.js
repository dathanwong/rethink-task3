const UrlController = require('../controllers/url.controller');
const { Url } = require('../models/url.model');

module.exports = function(app){
    app.get('/api', UrlController.index);
    app.post('/api/url', UrlController.create);
    app.get('/api/url', UrlController.findAll);
    app.delete('/api/url/:id', UrlController.delete);
    app.put('/api/url/:id', UrlController.update);
    app.get('/api/url/:id', UrlController.findById);
    
}