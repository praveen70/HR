module.exports = function(app) {
 
    const Grade = require('../controller/grade.controller.js');
    
    // Create a new Employee
     app.post('/api/grades', Grade.create);
 
     // Retrieve all Employee
    app.get('/api/grades',  Grade.findAll);
 
    // // // // // Retrieve a single Customer by Id
    app.get('/api/grades/:gradesId', Grade.findById);
 
     // // // // // // Update a Customer with Id
    app.put('/api/grades/:gradesId', Grade.update);
 
//     // // // // // // Delete a Customer with Id
    app.delete('/api/grades/:gradesId', Grade.delete);
}