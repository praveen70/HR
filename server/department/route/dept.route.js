module.exports = function(app) {
 
    const Department = require('../controller/dept.controller.js');
    
    // Create a new Employee
    app.post('/api/departments', Department.create);
 
    // Retrieve all Employee
    app.get('/api/departments',  Department.findAll);
 
    // // // Retrieve a single Customer by Id
    app.get('/api/departments/:compId/:departmentsId', Department.findById);
 
    // // // // Update a Customer with Id
    app.put('/api/departments/:departmentsId', Department.update);
 
    // // // // Delete a Customer with Id
    app.delete('/api/departments/:departmentsId', Department.delete);
}