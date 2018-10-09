const db = require('../../config/db.config.js');
const salaryComponent = db.salaryComponent;

// Post a salaryComponent
exports.create = (req, res) => {	
	 console.log("req body", req.body);
	// Save to MySQL database
	salaryComponent.create({  
		salaryComponentId: req.body.salaryComponentId,
	    componentName: req.body.componentName,
		componentType: req.body.componentType, 
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(salaryComponents => {		
		// Send created employee to client
		res.send(salaryComponents);
	});
};

//finding all data
exports.findAll = (req, res) => {
	salaryComponent.findAll().then(salaryComponents => {
		res.send(salaryComponents);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	salaryComponent.findById(req.params.salaryComponentId).then(salaryComponents => {
		res.send(salaryComponents);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.salaryComponentId;
	console.log("id", id);
	salaryComponent.update({
        salaryComponentId: req.body.salaryComponentId,
	    componentName: req.body.componentName,
		componentType: req.body.componentType,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
		{ where: { salaryComponentId : req.params.salaryComponentId }}
		).then(() => {
			res.status(200).send("Updated successfully a salaryComponent with id = " + id );
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const salaryComponentID = req.params.salaryComponentId;
	console.log("deleteId", salaryComponentID);
	salaryComponent.destroy({
		where : { salaryComponentId : salaryComponentID }
	}).then(() => {
		res.status(200).send("Deleted successfully a salaryComponent with id = " + salaryComponentID );
	});
};