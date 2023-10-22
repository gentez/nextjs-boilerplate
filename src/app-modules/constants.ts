// enums.ts
export const token = process.env.LOGGLY_TOKEN?.toString() || "";
export const instance = process.env.NODE_ENV === "production" ? "production" : "dev" || "";
export const loggingEnabled = process.env.LOGGING_ENABLED === "true";
enum LogLevel {
    CRITICAL = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    VERBOSE = 4,
    DEBUG = 5,
    SILLY = 6,
  }
  
export enum LogLevelColor {
    CRITICAL = 'red',
    ERROR = 'red',
    WARN = 'yellow',
    INFO = 'green',
    VERBOSE = 'blue',
    DEBUG = 'cyan',
    SILLY = 'magenta',
  }
export const logLevels: { [key: string]: number } = {
    critical: LogLevel.CRITICAL,
    error: LogLevel.ERROR,
    warn: LogLevel.WARN,
    info: LogLevel.INFO,
    verbose: LogLevel.VERBOSE,
    debug: LogLevel.DEBUG,
    silly: LogLevel.SILLY,
  };
