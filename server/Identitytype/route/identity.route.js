module.exports = function(app) {
 
    const Identity = require('../controller/identity.controller.js');
    
    // Create a new Employee
    app.post('/api/identitys', Identity.create);
 
    // Retrieve all Employee
    app.get('/api/identitys',  Identity.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/identitys/:identitysId', Identity.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/identitys/:identitysId', Identity.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/identitys/:identitysId', Identity.delete);
}