module.exports = function(app) {
 
    const LeaveType = require('../controller/leaveType.controller.js');
    
    // Create a new Employee
    app.post('/api/leaveTypes', LeaveType.create);
 
    // Retrieve all Employee
    app.get('/api/leaveTypes', LeaveType.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/leaveTypes/:leaveTypesId', LeaveType.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/leaveTypes/:leaveTypesId', LeaveType.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/leaveTypes/:leaveTypesId', LeaveType.delete);
}