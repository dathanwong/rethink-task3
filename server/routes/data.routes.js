const DataController = require('../controllers/data.controller');
const { Data } = require('../models/data.model');

module.exports = function(app){
    app.get('/api/data/page/:page', DataController.getByPage);
    app.get('/api/data/name/:name', DataController.findByName);
    app.get('/api', DataController.index);
    app.post('/api/data', DataController.create);
    app.get('/api/data', DataController.findAll);
    app.delete('/api/data/:id', DataController.delete);
    app.put('/api/data/:id', DataController.update);
    app.get('/api/data/:id', DataController.findById);
    app.post('/api/data/suggestions', DataController.getSuggestions);
    
}