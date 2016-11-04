const extend = require('xtend');
const winston = require('winston');
const defaultParams =
    { filename: 'telegramUpdates.log'
    , timestamp: true
    , json: false
    , prettyPrint: true
    };
const createMiddleware = params => {
    const logParams = params
        ? extend({}, defaultParams, params)
        : defaultParams;
    winston.configure({ transports:
        [ (new winston.transports.File(logParams)) ]
    });
    return (ctx, next) => {
        winston.info('', ctx.update);
        return next();
    };
};

module.exports = createMiddleware;

