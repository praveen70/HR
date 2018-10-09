const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Qualification = db.qual;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	 console.log("req body", req.body);
	// Save to MySQL database
	Qualification.create({  
		qualId: req.body.qualId,
	    qualName: req.body.qualName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(qualifications => {		
		// Send created employee to client
		res.send(qualifications);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Qualification.findAll().then(qualifications => {
		//Send all CompanyMaster to Client
		res.send(qualifications);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	console.log("findById", req);
	Qualification.findById(req.params.qualificationsId).then(qualifications => {
		res.send(qualifications);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.qualificationsId;
	console.log("id", id);
	Qualification.update({
        qualId: req.body.qualId,
	    qualName: req.body.qualName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { qualId : req.params.qualificationsId }}
		).then(() => {
			res.status(200).send("Updated successfully a qualifications with id = " + id );
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const qualID = req.params.qualificationsId;
	console.log("deleteId", qualID);
	Qualification.destroy({
		where : { qualId : qualID }
	}).then(() => {
		res.status(200).send("Updated successfully a Qualification with id = " + qualID );
	});
};