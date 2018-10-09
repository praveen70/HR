module.exports = function(app) {
 
    const Location = require('../controller/loc.controller.js');
    
    // Create a new Employee
     app.post('/api/locations', Location.create);
 
     // Retrieve all Employee
    app.get('/api/locations',  Location.findAll);
 
//     // // // // // Retrieve a single Customer by Id
    app.get('/api/locations/:locationsId', Location.findById);
 
//      // // // // // // Update a Customer with Id
    app.put('/api/locations/:locationsId', Location.update);
 
// //     // // // // // // Delete a Customer with Id
  app.delete('/api/locations/:locationsId', Location.delete);
}