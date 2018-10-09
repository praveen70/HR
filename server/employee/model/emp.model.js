

module.exports = (sequelize, Sequelize) => {
	const Employee = sequelize.define('employees', {
		EmpId: {
            type:Sequelize.STRING,
            primaryKey: true,
			
		},
        FirstName :{
		type:Sequelize.STRING,
		

	    },
        MiddileName:{
            type:Sequelize.STRING,
           
            
        },
        LastName:{
            type:Sequelize.STRING,
            

        },
        Title:{
            type:Sequelize.STRING,
           
        },
        Gender:{
            type:Sequelize.STRING,
            
        },
        DOB:{
            type:Sequelize.DATE,
            
        },
        QualID:{
            type:Sequelize.STRING,
            
        },
        Experience:{
            type:Sequelize.STRING,
            
        },
        BloodGroup:{
            type:Sequelize.STRING,
           
        },
        DeptID:{
            type:Sequelize.STRING,
            
        },
        DesgtID:{
            type:Sequelize.STRING,
           
        },
        PresentAddress:{
            type:Sequelize.STRING,
           
        },
        PermanentAddress:{
            type:Sequelize.STRING,
            
        },
        Mobile:{
            type:Sequelize.STRING,
        },
        DOJ:{
            type:Sequelize.DATE,
        },
        EmailId:{
            type:Sequelize.STRING,
        },
        

    },
	{

        getterMethods: {
                    fullName:function() {
                      return this.getDataValue('FirstName')+ ' ' + this.getDataValue('MiddileName')+ ' ' + this.getDataValue('LastName')
                    }
                  }
    });
    
    

    return Employee;
}