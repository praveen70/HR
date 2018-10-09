const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const City = db.city
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	City.create({  
		cityId: req.body.cityId,
	    cityName: req.body.cityName,
		companyId: req.body.companyId,
		stateId: req.body.stateId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(citys => {		
		// Send created employee to client
		res.send(citys);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	City.findAll().then(citys => {
		//Send all CompanyMaster to Client
		res.send(citys);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	City.findById(req.params.citysId).then(citys => {
		res.send(citys);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.citysId;
	console.log("id", id);
	City.update({
        cityId: req.body.cityId,
	    cityName: req.body.cityName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { cityId : req.params.citysId }}
		).then(() => {
			res.status(200).send("Updated successfully a citys with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.citysId;
	console.log("deleteId", desgID);
	City.destroy({
		where : { cityId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a citysId with id = " + desgID );
	});
};