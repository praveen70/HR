const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const State = db.state
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	State.create({  
		stateId: req.body.stateId,
	    stateName: req.body.stateName,
		companyId: req.body.companyId,
		countryId: req.body.countryId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(states => {		
		// Send created employee to client
		res.send(states);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	State.findAll().then(states => {
		//Send all CompanyMaster to Client
		res.send(states);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	State.findById(req.params.statesId).then(states => {
		res.send(states);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.statesId;
	console.log("id", id);
	State.update({
        stateId: req.body.stateId,
	    stateName: req.body.stateName,
		companyId: req.body.companyId,
		countryId: req.body.countryId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { stateId : req.params.statesId }}
		).then(() => {
			res.status(200).send("Updated successfully a states with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.statesId;
	console.log("deleteId", desgID);
	State.destroy({
		where : { stateId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a statesId with id = " + desgID );
	});
};