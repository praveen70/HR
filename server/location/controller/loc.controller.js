const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const Location = db.loc;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	 console.log("req body", req.body);
	// Save to MySQL database
	Location.create({  
		locId: req.body.locId,
	    locName: req.body.locName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(locations => {		
		// Send created employee to client
		res.send(locations);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	Location.findAll().then(locations => {
		//Send all CompanyMaster to Client
		res.send(locations);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
console.log("findById", req);
	Location.findById(req.params.locationsId).then(locations => {
		res.send(locations);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.locationsId;
	console.log("id", id);
	Location.update({
        gradeId: req.body.gradeId,
	    gradeName: req.body.gradeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
		{ where: { locId : req.params.locationsId }}
		).then(() => {
			res.status(200).send("Updated successfully a Location with id = " + id );
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const locID = req.params.locationsId;
	console.log("deleteId", locID);
	Location.destroy({
		where : { locId : locID }
	}).then(() => {
		res.status(200).send("Deleted successfully a grades with id = " + locID );
	});
};