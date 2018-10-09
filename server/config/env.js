const env = {
  database: 'NS-HR',
  username: 'sa',
  password: 'welcome123#',
  host: '192.168.2.247',
  dialect: 'mssql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;