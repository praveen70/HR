// var compMaster = require("../../companyMaster/model/comMas.model.js");

module.exports = (sequelize, Sequelize) => {
	const LoanType = sequelize.define('loanTypes', {
		loanTypeId : {
			type:Sequelize.STRING,
			allowNull: false,
			 primaryKey: true,
		},
        loanTypeName :{
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
    
    

    //compMaster.hasMany(Department, {foreignKey: 'fk_companyid', sourceKey: 'companyId'});
    // Department.belongsTo(compMaster, {foreignKey: 'fk_companyid', targetKey: 'companyId'});
    // Department.belongsTo(compMaster, {foreignKey: 'fk_customerid', sourceKey: 'companyId'});
    // compMaster.hasOne(compMaster, {foreignKey: 'fk_customerid', targetKey: 'companyId'})
    return LoanType;
}