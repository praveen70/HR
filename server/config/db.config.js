const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('NS-HR', 'sa', 'welcome123#', {
    dialect: 'mssql',
    host: '192.168.2.247',
    port: '1433',
    dialectOptions: {
        encrypt: true
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// object.keys(db).forEach((modelName) => {
//     if('associate' in db[modelName]){
//         db[modelName].associate(db);
//     });
// }

//Models/tables
db.comMas = require('../companyMaster/model/comMas.model.js')(sequelize, Sequelize);
db.dept = require('../department/model/dept.model.js')(sequelize, Sequelize);
db.desg = require('../designation/model/desg.model.js')(sequelize, Sequelize);
db.qual = require('../qualification/model/qual.model.js')(sequelize, Sequelize);
db.grade = require('../grade/model/grade.model.js')(sequelize, Sequelize);
db.loc = require('../location/model/loc.model.js')(sequelize, Sequelize);
db.emp = require('../employee/model/emp.model.js')(sequelize, Sequelize);
db.salaryComponent = require('../salarycomponent/model/sal.model.js')(sequelize, Sequelize);
db.assetType =  require('../assetType/model/assetType.model.js')(sequelize, Sequelize);
db.city = require('../city/model/city.model.js')(sequelize, Sequelize);
db.grade = require('../grade/model/grade.model.js')(sequelize, Sequelize);
db.leaveType = require('../leaveType/model/leaveType.model.js')(sequelize, Sequelize);
db.loanType =  require('../loanType/model/loanType.model.js')(sequelize, Sequelize);
db.payment = require('../paymentmode/model/paymentmode.model.js')(sequelize, Sequelize);
db.separationType = require('../separationType/model/separationType.model.js')(sequelize, Sequelize);
db.state = require('../state/model/state.model.js')(sequelize, Sequelize);
db.empSalaryComponent = require('../empSalaryComponent/model/empSalaryComponent.model.js')(sequelize, Sequelize);

module.exports = db;