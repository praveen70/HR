var logger = require('tracer').colorConsole();
exports.logInfo = function(input,logtype){	
	switch(logtype)
	{
		case 'log':
			   logger.log(input);
			break;
		case 'error':
			   logger.error(input);
			break;
		case 'info':
			   logger.info(input);
			break;
		default:
				logger.log(input);
			break;
	}
 
}

