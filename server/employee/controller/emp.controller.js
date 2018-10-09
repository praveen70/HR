const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Employee = db.emp;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	console.log("req body", req.body);
	// Save to MySQL database
	Employee.create({  
		EmpId: req.body.EmpId,
	    FirstName: req.body.FirstName,
		MiddileName: req.body.MiddileName,
		LastName: req.body.LastName,
		Title: req.body.Title,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
		QualID: req.body.QualID,
		Experience: req.body.Experience,
        BloodGroup: req.body.BloodGroup,
        DeptID: req.body.DeptID,
        DesgtID: req.body.DesgtID,
		PresentAddress: req.body.PresentAddress,
		PermanentAddress: req.body.PermanentAddress,
		Mobile:req.body.Mobile,
		DOJ: req.body.DOJ,
		EmailId: req.body.EmailId
		
	}).then(employees => {		
		// Send created employee to client
		res.send(employees);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Employee.findAll().then(employees => {
		//Send all CompanyMaster to Client
		res.send(employees);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	console.log("Update", req);
	Employee.findById(req.params.employeesId).then(employees => {
		res.send(employees);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.employeesId;
	console.log("id", id);
	Employee.update({
        EmpId: req.body.EmpId,
	    FirstName: req.body.FirstName,
		MiddileName: req.body.MiddileName,
		LastName: req.body.LastName,
		Title: req.body.Title,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
		QualID: req.body.QualID,
		Experience: req.body.Experience,
        BloodGroup: req.body.BloodGroup,
        DeptID: req.body.DeptID,
        DesgtID: req.body.DesgtID,
		PresentAddress: req.body.PresentAddress,
		PermanentAddress: req.body.PermanentAddress,
		Mobile:req.body.mobile,
		DOJ: req.body.DOJ,
		EmailId: req.body.EmailId
	},

				{ where: { EmpId : req.params.employeesId }}
		).then(() => {
			res.status(200).send("Updated successfully a employeesId with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const EmpID = req.params.employeesId;
	console.log("deleteId", EmpID);
	Employee.destroy({
		where : { EmpId : EmpID }
	}).then(() => {
		res.status(200).send("Deleted successfully a employeesId with id = " + EmpID );
	});
};