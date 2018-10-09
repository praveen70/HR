const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Identity = db.identity
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	Identity.create({  
		identityId: req.body.identityId,
	    identityName: req.body.identityName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(identitys => {		
		// Send created employee to client
		res.send(identitys);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Identity.findAll().then(identitys => {
		//Send all CompanyMaster to Client
		res.send(identitys);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	Identity.findById(req.params.paymentmodesId).then(identitys => {
		res.send(identitys);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.identitysId;
	console.log("id", id);
	Identity.update({
        desgtId: req.body.desgtId,
	    desgName: req.body.desgName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { desgtId : req.params.identityssId }}
		).then(() => {
			res.status(200).send("Updated successfully a identitys with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.identityssId;
	console.log("deleteId", desgID);
	Identity.destroy({
		where : { desgtId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a identityssId with id = " + desgID );
	});
};