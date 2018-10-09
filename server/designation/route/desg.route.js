module.exports = function(app) {
 
    const Designation = require('../controller/desg.controller.js');
    
    // Create a new Employee
    app.post('/api/designations', Designation.create);
 
    // Retrieve all Employee
    app.get('/api/designations',  Designation.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/designations/:designationsId', Designation.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/designations/:designationsId', Designation.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/designations/:designationsId', Designation.delete);
}