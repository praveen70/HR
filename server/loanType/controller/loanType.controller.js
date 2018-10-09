const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const LoanType = db.loanType
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	LoanType.create({  
		loanTypeId: req.body.loanTypeId,
	    loanTypeName: req.body.loanTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(loanTypes => {		
		// Send created employee to client
		res.send(loanTypes);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	LoanType.findAll().then(loanTypes => {
		//Send all CompanyMaster to Client
		res.send(loanTypes);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	LoanType.findById(req.params.loanTypesId).then(loanTypes => {
		res.send(loanTypes);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.loanTypesId;
	console.log("id", id);
	LoanType.update({
        loanTypeId: req.body.loanTypeId,
	    loanTypeName: req.body.loanTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { loanTypeId : req.params.loanTypesId }}
		).then(() => {
			res.status(200).send("Updated successfully a loanTypes with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.loanTypesId;
	console.log("deleteId", desgID);
	LoanType.destroy({
		where : { loanTypeId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a loanTypesId with id = " + desgID );
	});
};