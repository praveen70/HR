module.exports = function(app) {
 
    const LoanType = require('../controller/loanType.controller.js');
    
    // Create a new Employee
    app.post('/api/loanTypes', LoanType.create);
 
    // Retrieve all Employee
    app.get('/api/loanTypes',  LoanType.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/loanTypes/:loanTypesId', LoanType.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/loanTypes/:loanTypesId', LoanType.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/loanTypes/:loanTypesId', LoanType.delete);
}