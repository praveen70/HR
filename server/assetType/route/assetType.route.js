module.exports = function(app) {
 
    const AssetType = require('../controller/assetType.controller.js');
    
    // Create a new Employee
    app.post('/api/assetTypes', AssetType.create);
 
    // Retrieve all Employee
    app.get('/api/assetTypes',  AssetType.findAll);
 
    // // // // Retrieve a single Customer by Id
    app.get('/api/assetTypes/:assetTypesId', AssetType.findById);
 
    // // // // // Update a Customer with Id
    app.put('/api/assetTypes/:assetTypesId', AssetType.update);
 
    // // // // // Delete a Customer with Id
    app.delete('/api/assetTypes/:assetTypesId', AssetType.delete);
}