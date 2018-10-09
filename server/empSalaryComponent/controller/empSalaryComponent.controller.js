const db = require('../../config/db.config.js');

const empSalaryComponent = db.empSalaryComponent;

// Post a empSalaryComponent
exports.create = (req, res) => {	
	 console.log("req body", req.body);
	// Save to MySQL database
	empSalaryComponent.create({  
		empId: req.body.empId,
	    salaryComponentId: req.body.salaryComponentId,
		amount: req.body.amount, 
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(empSalaryComponents => {		
		// Send created employee to client
		res.send(empSalaryComponent);
	});
};

//finding all data
exports.findAll = (req, res) => {
	empSalaryComponent.findAll().then(empSalaryComponents => {
		res.send(empSalaryComponents);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	empSalaryComponent.findById(req.params.Id).then(empSalaryComponents => {
		res.send(empSalaryComponents);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.Id;
	console.log("id", id);
	salaryComponent.update({
        empId: req.body.empId,
	    salaryComponentId: req.body.salaryComponentId,
		amount: req.body.amount, 
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
		{ where: { Id : id }}
		).then(() => {
			res.status(200).send("Updated successfully a salaryComponent with id = " + id );
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const Id = req.params.Id;
	console.log("deleteId", Id);
	salaryComponent.destroy({
		where : { Id : Id }
	}).then(() => {
		res.status(200).send("Deleted successfully a salaryComponent with id = " + Id );
	});
};