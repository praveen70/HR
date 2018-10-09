module.exports = function(app) {
 
    const CompanyMaster = require('../controller/comMas.controller.js');
    
    // Create a new Employee
    app.post('/api/companyMasters', CompanyMaster.create);
 
    // Retrieve all Employee
    app.get('/api/companyMasters',  CompanyMaster.findAll);
 
    // // Retrieve a single Customer by Id
    app.get('/api/companyMasters/:companyMastersId', CompanyMaster.findById);
 
    // // // Update a Customer with Id
    app.put('/api/companyMasters/:companyMastersId', CompanyMaster.update);
 
    // // // Delete a Customer with Id
    app.delete('/api/companyMasters/:companyMastersId', CompanyMaster.delete);
}