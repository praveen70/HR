// var compMaster = require("../../companyMaster/model/comMas.model.js");

module.exports = (sequelize, Sequelize) => {
	const SeparationType = sequelize.define('separationTypes', {
		separationTypeId : {
			type:Sequelize.STRING,
			allowNull: false,
			 primaryKey: true,
		},
        separationTypeName :{
		type:Sequelize.STRING,
		allowNull: false,

	    },
        companyId:{
            type:Sequelize.STRING,
            allowNull: false,
            
        },
        status:{
            type:Sequelize.INTEGER,
            allowNull: false,

        },
        createdBy :{
            type:Sequelize.STRING,
            allowNull: false,
        },
        modifiedBy :{
            type:Sequelize.STRING,
            allowNull: false,
        }

    });
    
    

    
    return SeparationType;
}