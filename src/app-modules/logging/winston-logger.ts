import { createLogger, format, transports } from "winston"

const customLevels = {
    levels: {
      critical: 0,
      error: 1,
      warn: 2,
      info: 3,
      verbose: 4,
      debug: 5,
      silly: 6
    }
  };
const logger = createLogger({
    levels: customLevels.levels,
    format: format.json(),
    // defaultMeta: { service: 'your-service-name' },
    transports: [
      new transports.Console({
        format: format.simple()
      })
    ]
  });
export default logger
// import winston, { createLogger, format, transports } from 'winston';

// const customLevels = {
//   levels: {
//     critical: 0,
//     error: 1,
//     warn: 2,
//     info: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//   },
//   colors: {
//     critical: 'red',
//     error: 'red',
//     warn: 'yellow',
//     info: 'green',
//     verbose: 'blue',
//     debug: 'cyan',
//     silly: 'magenta'
//   }
// };

// const logger = createLogger({
//   levels: customLevels.levels,
//   format: format.json(),
//   transports: [
//     new transports.Console({
//       format: format.combine(
//         format.colorize(),
//         format.simple()
//       )
//     })
//   ]
// });

// winston.addColors(customLevels.colors);

// export default logger;