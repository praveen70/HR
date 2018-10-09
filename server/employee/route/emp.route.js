module.exports = function(app) {
 
    const Employee = require('../controller/emp.controller.js');
    
    // Create a new Employee
    app.post('/api/employees', Employee.create);
 
    // Retrieve all Employee
    app.get('/api/employees',  Employee.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/employees/:employeesId', Employee.findById);
 
    // // // // // Update a Customer with Id
     app.put('/api/employees/:employeesId', Employee.update);
 
    // // // // // Delete a Customer with Id
     app.delete('/api/employees/:employeesId', Employee.delete);
}