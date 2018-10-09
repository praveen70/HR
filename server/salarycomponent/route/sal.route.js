module.exports = function(app) {
 
    const salaryComponent = require('../controller/sal.controller.js');
    
    // Create a new salaryComponent
     app.post('/api/salaryComponents', salaryComponent.create);
 
//      // Retrieve all salaryComponent
    app.get('/api/salaryComponents',  salaryComponent.findAll);
 
//     // // // // // Retrieve a single salaryComponent by Id
    app.get('/api/salaryComponents/:salaryComponentId', salaryComponent.findById);
 
//      // // // // // // Update a salaryComponent with Id
     app.put('/api/salaryComponents/:salaryComponentId', salaryComponent.update);
 
// //     // // // // // // Delete a salaryComponent with Id
      app.delete('/api/salaryComponents/:salaryComponentId', salaryComponent.delete);
}