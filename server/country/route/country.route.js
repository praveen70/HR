module.exports = function(app) {
 
    const Country = require('../controller/ountry.controller.js');
    
    // Create a new Employee
    app.post('/api/countrys', Country.create);
 
    // Retrieve all Employee
    app.get('/api/countrys',  Country.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/countrys/:countrysId', Country.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/countrys/:countrysId', Country.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/countrys/:countrysId', Country.delete);
}