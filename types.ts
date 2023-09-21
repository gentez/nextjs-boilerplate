import { Loggly, LogglyOptions } from "winston-loggly-bulk";

export interface PageData {
    id:          number;
    Title:       string;
    Description: string;
    slug:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    columns:[{
      editor: string;
      grid:number;
    }],
    Faqs:[{
      editor: string;
      grid:number;
    }]
    nav:any;
    footer:any;

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
  private readonly loggingEnabled: boolean;

  constructor(options: CustomLogglyOptions, loggingEnabled: boolean) {
    super(options);
    this.loggingEnabled = loggingEnabled;
  }

  log(info: any, next: () => void): void {
    // Check if logging is enabled and only send logs if it is
    if (this.loggingEnabled) {
      super.log(info, next);
    } else {
      // Skip the log and proceed to the next transport
      next();
    }
  }
}

export default CustomLoggly;
