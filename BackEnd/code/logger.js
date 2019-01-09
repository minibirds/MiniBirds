let winston =  require('winston');

// logging 설정
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename : 'info.log'}),
        new winston.transports.File({ filename : 'error.log'}),
    ]
});

module.exports = logger;