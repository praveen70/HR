module.exports = function(app) {
 
    const empSalaryComponent = require('../controller/empSalaryComponent.controller.js');
    
    // Create a new salaryComponent
     app.post('/api/empSalaryComponents', empSalaryComponent.create);
 
     // Retrieve all salaryComponent
    app.get('/api/empSalaryComponents',  empSalaryComponent.findAll);
 
    // // // // // Retrieve a single salaryComponent by Id
    app.get('/api/empSalaryComponent/:Id', empSalaryComponent.findById);
 
     // // // // // // Update a salaryComponent with Id
    app.put('/api/empSalaryComponent/:Id', empSalaryComponent.update);
 
//     // // // // // // Delete a salaryComponent with Id
    app.delete('/api/empSalaryComponents/:Id', empSalaryComponent.delete);
}