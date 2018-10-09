const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Department = db.dept;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	console.log("req body", req.body);
	// Save to MySQL database
	Department.create({  
		deptId: req.body.deptId,
	    deptName: req.body.deptName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(departments => {		
		// Send created employee to client
		res.send(departments);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Department.findAll().then(departments => {
		//Send all CompanyMaster to Client
		res.send(departments);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	Department.findById(req.params.departmentsId).then(departments => {
		res.send(departments);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.departmentsId;
	console.log("id", id);
	Department.update({
        deptId: req.body.deptId,
	    deptName: req.body.deptName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
					},
				{ where: { deptId : req.params.departmentsId }}
		).then(() => {
			res.status(200).send("Updated successfully a departments with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const deptID = req.params.departmentsId;
	console.log("deleteId", deptID);
	Department.destroy({
		where : { deptId : deptID }
	}).then(() => {
		res.status(200).send("Updated successfully a departments with id = " + deptID );
	});
};