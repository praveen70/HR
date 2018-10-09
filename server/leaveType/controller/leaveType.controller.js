const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const LeaveType = db.leaveType
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	LeaveType.create({  
		leaveTypeId: req.body.leaveTypeId,
	    leaveTypeName: req.body.leaveTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(leaveTypes => {		
		// Send created employee to client
		res.send(leaveTypes);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	LeaveType.findAll().then(LeaveTypes => {
		//Send all CompanyMaster to Client
		res.send(LeaveTypes);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	LeaveType.findById(req.params.leaveTypesId).then(leaveTypes => {
		res.send(leaveTypes);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.leaveTypesId;
	console.log("id", id);
	LeaveType.update({
        leaveTypeId: req.body.leaveTypeId,
	    leaveTypeName: req.body.leaveTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { leaveTypeId : req.params.leaveTypesId }}
		).then(() => {
			res.status(200).send("Updated successfully a LeaveTypes with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.leaveTypesId;
	console.log("deleteId", desgID);
	LeaveType.destroy({
		where : { leaveTypeId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a LeaveTypesId with id = " + desgID );
	});
};