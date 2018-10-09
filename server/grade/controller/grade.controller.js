const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Grade = db.grade;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	 console.log("req body", req.body);
	// Save to MySQL database
	Grade.create({  
		gradeId: req.body.gradeId,
	    gradeName: req.body.gradeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(grades => {		
		// Send created employee to client
		res.send(grades);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Grade.findAll().then(grades => {
		//Send all CompanyMaster to Client
		res.send(grades);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	Grade.findById(req.params.gradesId).then(grades => {
		res.send(grades);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.gradesId;
	console.log("id", id);
	Grade.update({
        gradeId: req.body.gradeId,
	    gradeName: req.body.gradeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
		{ where: { gradeId : req.params.gradesId }}
		).then(() => {
			res.status(200).send("Updated successfully a grades with id = " + id );
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const gradeID = req.params.gradesId;
	console.log("deleteId", gradeID);
	Grade.destroy({
		where : { gradeId : gradeID }
	}).then(() => {
		res.status(200).send("Deleted successfully a grades with id = " + gradeID );
	});
};