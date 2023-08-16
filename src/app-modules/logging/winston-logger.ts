import CustomLoggly from 'types';
import * as winston from 'winston';
import { createLogger, format, transports} from 'winston';
import { logLevels,LogLevelColor, token, instance, loggingEnabled } from '../constants'; // Convert the string to a boolean
const logger = createLogger({
  levels: logLevels,
  format: format.json(),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    }),
    new CustomLoggly({
      token: token,
      subdomain: "jentez",
      tags: ["Winston-NodeJS"],
      json: true,
      custom: {
        instance: instance,
      }
    },loggingEnabled)
  ]
});

winston.addColors(LogLevelColor);
export default logger;