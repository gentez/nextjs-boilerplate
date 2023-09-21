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
  export const queries = [
    {
        id: 1,
        question: 'How long is this site live?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        question: 'How do I create an account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        question: 'What protections does Strategic Systems use to protect our data?',
        answer: "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
    },
    {
        id: 4,
        question: 'What type of support is included with this Service?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 5,
        question: 'Do you have premium plans for products?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 6,
        question: 'Who else is using plurk SaaS tool?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
]