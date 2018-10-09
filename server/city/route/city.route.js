module.exports = function(app) {
 
    const City = require('../controller/city.controller.js');
    
    // Create a new Employee
    app.post('/api/citys', City.create);
 
    // Retrieve all Employee
    app.get('/api/citys',  City.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/citys/:citysId', City.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/citys/:citysId', City.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/citys/:citysId', City.delete);
}