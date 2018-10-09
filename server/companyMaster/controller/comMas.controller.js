const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const CompanyMaster = db.comMas;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	console.log("req body", req.body);
	// Save to MySQL database
	CompanyMaster.create({  
		companyId: req.body.companyId,
	    compName: req.body.compName,
		address: req.body.address,
		mobile: req.body.mobile,
		email: req.body.email,
		email: req.body.email,
		website: req.body.website
	}).then(cmpMaster => {		
		// Send created employee to client
		res.send(cmpMaster);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	CompanyMaster.findAll().then(cmpMaster => {
		//Send all CompanyMaster to Client
		res.send(cmpMaster);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	CompanyMaster.findById(req.params.companyMastersId).then(cmpMaster => {
		res.send(cmpMaster);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.companyMastersId;
	console.log("id", id);
	CompanyMaster.update({
						companyId: req.body.companyId,
						compName: req.body.compName,
						address: req.body.address,
						mobile: req.body.mobile,
						email: req.body.email,
						email: req.body.email,
						website: req.body.website 
					},
				{ where: { companyId : req.params.companyMastersId }}
		).then(() => {
			res.status(200).send("Updated successfully a companymaster with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const deleteId = req.params.companyMastersId;
	console.log("deleteId", deleteId);
	CompanyMaster.destroy({
		where : { companyId : deleteId }
	}).then(() => {
		res.status(200).send("Updated successfully a companymaster with id = " + deleteId );
	});
};