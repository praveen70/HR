const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Designation = db.desg;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	Designation.create({  
		desgtId: req.body.desgtId,
	    desgName: req.body.desgName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(designations => {		
		// Send created employee to client
		res.send(designations);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Designation.findAll().then(designations => {
		//Send all CompanyMaster to Client
		res.send(designations);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	Designation.findById(req.params.designationsId).then(designations => {
		res.send(designations);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.designationsId;
	console.log("id", id);
	Designation.update({
        desgtId: req.body.desgtId,
	    desgName: req.body.desgName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { desgtId : req.params.designationsId }}
		).then(() => {
			res.status(200).send("Updated successfully a Designation with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.designationsId;
	console.log("deleteId", desgID);
	Designation.destroy({
		where : { desgtId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a Designation with id = " + desgID );
	});
};