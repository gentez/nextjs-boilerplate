import { Loggly, LogglyOptions } from "winston-loggly-bulk";

export interface PageData {
    id:          number;
    Title:       string;
    Description: string;
    slug:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}
export interface NavBar {
    Title: string;
    slug:  string;
}
interface CustomLogglyOptions extends LogglyOptions {
    custom: {
      instance: string;
    };
  }
  
  class CustomLoggly extends Loggly {
    constructor(options: CustomLogglyOptions) {
      super(options);
    }
  }
export default CustomLoggly