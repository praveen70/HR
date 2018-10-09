module.exports = function(app) {
 
    const Qualification = require('../controller/qual.controller.js');
    
    // Create a new Employee
    app.post('/api/qualifications', Qualification.create);
 
    // Retrieve all Employee
    app.get('/api/qualifications',  Qualification.findAll);
 
    // // // // // Retrieve a single Customer by Id
    app.get('/api/qualifications/:qualificationsId', Qualification.findById);
 
    // // // // // // Update a Customer with Id
   app.put('/api/qualifications/:qualificationsId', Qualification.update);
 
    // // // // // // Delete a Customer with Id
    app.delete('/api/qualifications/:qualificationsId', Qualification.delete);
}