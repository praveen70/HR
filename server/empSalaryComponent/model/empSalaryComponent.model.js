module.exports = (sequelize, Sequelize) => {
	const empSalaryComponent = sequelize.define('empSalaryComponents', {
		empId : {
			type:Sequelize.STRING,
			allowNull: false,
		},
		salaryComponentId : {
			type:Sequelize.STRING,
			allowNull: false,
		},
        amount : {
			type:Sequelize.DOUBLE,
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
    return empSalaryComponent;
}