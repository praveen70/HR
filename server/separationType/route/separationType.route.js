module.exports = function(app) {
 
    const SeparationType = require('../controller/SeparationType.controller.js');
    
    // Create a new Employee
    app.post('/api/separationTypes', SeparationType.create);
 
    // Retrieve all Employee
    app.get('/api/separationTypes',  SeparationType.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/separationTypes/:separationTypesId', SeparationType.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/separationTypes/:separationTypesId', SeparationType.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/separationTypes/:separationTypesId', SeparationType.delete);
}