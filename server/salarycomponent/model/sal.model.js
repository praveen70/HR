module.exports = (sequelize, Sequelize) => {
	const salaryComponent = sequelize.define('salaryComponents', {
		salaryComponentId : {
			type:Sequelize.STRING,
			allowNull: false,
			 primaryKey: true,
		},
        componentName :{
		type:Sequelize.STRING,
		allowNull: false,

	    },
	componentType :{
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
    return salaryComponent;
}