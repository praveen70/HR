const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Country = db.country
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	Country.create({  
		countryId: req.body.countryId,
	    countryName: req.body.countryName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(countrys => {		
		// Send created employee to client
		res.send(countrys);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Country.findAll().then(countrys => {
		//Send all CompanyMaster to Client
		res.send(countrys);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	Country.findById(req.params.paymentmodesId).then(countrys => {
		res.send(countrys);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.countrysId;
	console.log("id", id);
	Country.update({
        desgtId: req.body.desgtId,
	    desgName: req.body.desgName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { desgtId : req.params.countrysId }}
		).then(() => {
			res.status(200).send("Updated successfully a countrys with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.countrysId;
	console.log("deleteId", desgID);
	Country.destroy({
		where : { desgtId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a countrysId with id = " + desgID );
	});
};