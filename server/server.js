var express = require('express');
var app = express();
var cors = require("cors");
var router = express.Router();

var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/*+json' }))





const db = require("../app/config/db.config.js");

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./companyMaster/route/comMas.route.js')(app);
require('./department/route/dept.route.js')(app);
require('./designation/route/desg.route.js')(app);
require('./qualification/route/qual.route.js')(app);
require('./grade/route/grade.route.js')(app);
require('./location/route/loc.route.js')(app);
require('./employee/route/emp.route.js')(app);
require('./salarycomponent/route/sal.route.js')(app);
require('./assetType/route/assetType.route.js')(app);
require('./city/route/city.route.js')(app);
require('./grade/route/grade.route.js')(app);
require('./leaveType/route/leaveType.route.js')(app);
require('./loanType/route/loanType.route.js')(app);
require('./paymentmode/route/paymentmode.route.js')(app);
require('./separationType/route/separationType.route.js')(app);
require('./state/route/state.route.js')(app);
require('./empSalaryComponent/route/empSalaryComponent.route.js')(app);

 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})
module.exports = router;
