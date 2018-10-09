const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const PaymentMode = db.payment
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	PaymentMode.create({  
		paymId: req.body.paymId,
	    paymName: req.body.paymName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(paymentmodes => {		
		// Send created employee to client
		res.send(paymentmodes);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	PaymentMode.findAll().then(paymentmodes => {
		//Send all CompanyMaster to Client
		res.send(paymentmodes);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	PaymentMode.findById(req.params.paymentmodesId).then(paymentmodes => {
		res.send(paymentmodes);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.paymentmodesId;
	console.log("id", id);
	PaymentMode.update({
		paymId: req.body.paymId,
	    paymName: req.body.paymName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		},
				{ where: { paymId : req.params.paymentmodesId }}
		).then(() => {
			res.status(200).send("Updated successfully a paymentmodes with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.paymentmodesId;
	console.log("deleteId", desgID);
	PaymentMode.destroy({
		where : { paymId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a paymentmodes with id = " + desgID );
	});
};