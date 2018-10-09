module.exports = function(app) {
 
    const State = require('../controller/state.controller.js');
    
    // Create a new Employee
    app.post('/api/states', State.create);
 
    // Retrieve all Employee
    app.get('/api/states',  State.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/states/:statesId', State.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/states/:statesId', State.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/states/:statesId', State
    .delete);
}