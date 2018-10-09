const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const SeparationType = db.separationType
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	SeparationType.create({  
		separationTypeId: req.body.separationTypeId,
	    separationTypeName: req.body.separationTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(separationTypes => {		
		// Send created employee to client
		res.send(separationTypes);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	SeparationType.findAll().then(separationTypes => {
		//Send all CompanyMaster to Client
		res.send(separationTypes);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	SeparationType.findById(req.params.separationTypesId).then(separationTypes => {
		res.send(separationTypes);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.separationTypesId;
	console.log("id", id);
	SeparationType.update({
        separationTypeId: req.body.separationTypeId,
	    separationTypeName: req.body.separationTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { separationTypeId : req.params.separationTypesId }}
		).then(() => {
			res.status(200).send("Updated successfully a separationTypes with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.separationTypesId;
	console.log("deleteId", desgID);
	SeparationType.destroy({
		where : { separationTypeId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a separationTypesId with id = " + desgID );
	});
};