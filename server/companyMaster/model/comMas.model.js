var Department = require("../../department/model/dept.model.js")

module.exports = (sequelize, Sequelize) => {
	const CompMaster = sequelize.define('companymaster', {
		companyId: {
			type:Sequelize.STRING,
			allowNull: false,
			 primaryKey: true,
			 
		},
		
	compName:{
		type:Sequelize.STRING,
		allowNull: false,

	},
	address:{
		type:Sequelize.STRING,
		allowNull: false,

	},
	mobile:{
		type:Sequelize.STRING,
		allowNull: false,

	},
	email:{
		type:Sequelize.STRING,
		allowNull: false,
	},
	website:{
		type:Sequelize.STRING,
		allowNull: false,
	}

	});
	
		
		CompMaster.associate = function(models){
				CompMaster.belongsToMany(models, Department, {
					through: 'Department',
					foreignKey: 'companyId'
				}) 
			 };
			
		

	
	
	
    return CompMaster;
}