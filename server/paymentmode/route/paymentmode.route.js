module.exports = function(app) {
 
    const PaymentMode = require('../controller/paymentmode.controller.js');
    
    // Create a new Employee
    app.post('/api/paymentmodes', PaymentMode.create);
 
    // Retrieve all Employee
    app.get('/api/paymentmodes',  PaymentMode.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/paymentmodes/:paymentmodesId', PaymentMode.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/paymentmodes/:paymentmodesId', PaymentMode.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/paymentmodes/:paymentmodesId', PaymentMode.delete);
}