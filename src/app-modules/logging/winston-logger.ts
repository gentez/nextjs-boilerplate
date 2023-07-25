import winston, { createLogger, format, transports } from 'winston';
import { Loggly } from 'winston-loggly-bulk';
const token=process.env.LOGGLY_TOKEN?.toString()||""
const instance=process.env.NODE_ENV === "production" ? "production" : "dev"||""

const customLevels = {
    levels: {
      critical: 0,
      error: 1,
      warn: 2,
      info: 3,
      verbose: 4,
      debug: 5,
      silly: 6
    },
    colors: {
      critical: 'red',
      error: 'red',
      warn: 'yellow',
      info: 'green',
      verbose: 'blue',
      debug: 'cyan',
      silly: 'magenta'
    }
  };
  const logger = createLogger({
    levels: customLevels.levels,
    format: format.json(),
    transports: [
      new transports.Console({
        format: format.combine(
          format.colorize(),
          format.simple()
        )
      }),
      new Loggly({
        token: token,
        subdomain: "jentez",
        tags: ["Winston-NodeJS"],
        json: true,
        custom:{
            instance:instance,
        }
      })
    ]
  });
  
  winston.addColors(customLevels.colors);
  export default logger;