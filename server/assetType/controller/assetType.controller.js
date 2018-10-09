const db = require('../../config/db.config.js');
// const logger = require('../../utility/log.js');
// const errorController = require('../../error/controller/error.controller.js');

const AssetType = db.assetType
;
// console.log(db.empdocs);
// Post a Employee
exports.create = (req, res) => {	
	// console.log("req body", req.body);
	// Save to MySQL database
	AssetType.create({  
		assetTypeId: req.body.assetTypeId,
	    assetTypeName: req.body.assetTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy
		
	}).then(assetTypes => {		
		// Send created employee to client
		res.send(assetTypes);
	});
};

//finding all data
exports.findAll = (req, res) => {
	// console.log("req.body", req);
	AssetType.findAll().then(assetTypes => {
		//Send all CompanyMaster to Client
		res.send(assetTypes);
	});
};
	
		
		
//finding particular id	
exports.findById = (req, res) => {
	// console.log("findById", req);
	AssetType.findById(req.params.assetTypesId).then(assetTypes => {
		res.send(assetTypes);
	});
};


//updating particular id 
exports.update = (req, res) => {
	const id = req.params.assetTypesId;
	console.log("id", id);
	AssetType.update({
        assetTypeId: req.body.assetTypeId,
	    assetTypeName: req.body.assetTypeName,
		companyId: req.body.companyId,
		status: req.body.status,
		createdBy: req.body.createdBy,
		modifiedBy: req.body.modifiedBy 
		},
				{ where: { assetTypeId : req.params.assetTypesId }}
		).then(() => {
			res.status(200).send("Updated successfully a assetTypes with id = " + id);
	});
};


//deleting particular id

exports.delete = (req, res) => {
	const desgID = req.params.assetTypesId;
	console.log("deleteId", desgID);
	AssetType.destroy({
		where : { assetTypeId : desgID }
	}).then(() => {
		res.status(200).send("Updated successfully a assetTypesId with id = " + desgID );
	});
};