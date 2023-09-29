import { Loggly, LogglyOptions } from "winston-loggly-bulk";

export interface PageData {
    // id:          number;
    // Title:       string;
    // Description: string;
    // slug:        string;
    // createdAt:   Date;
    // updatedAt:   Date;
    // publishedAt: Date;
    // columns:[{
    //   editor: string;
    //   grid:number;
    // }],
    // Faqs:[{
    //   editor: string;
    //   grid:number;
    // }]
    // nav:any;
    // footer:any;
    id:          number;
    Title:       string;
    Description: string;
    slug:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Section:[
      {
        id: number;
        column_accordion: [
          {
            id: number;
            heading: string;
            content: string;
          }
        ];
        column_card: [
          {
            id: number;
            editor: string;
            image: {
              id: number;
              name: string;
              alternativeText: string;
              caption: string;
              width: number;
              height: number;
              formats: {
                thumbnail: {
                  name: string;
                  hash: string;
                  ext: string;
                  mime: string;
                  width: number;
                  height: number;
                  size: number;
                  path: null;
                  url: string;
                }
              };
              hash: string;
              ext: string;
              mime: string;
              size: number;
              url: string;
              previewUrl: null;
              provider: string;
              provider_metadata: null;
              created_at: Date;
              updated_at: Date;
            };
            grid: number;
          }
        ];
        column_html: [
          {
            id: number;
            editor: string;
            grid: number;
          }
        ];
        column_image: [
          {
            id: number;
            image: {
              id: number;
              name: string;
              alternativeText: string;
              caption: string;
              width: number;
              height: number;
              formats: {
                thumbnail: {
                  name: string;
                  hash: string;
                  ext: string;
                  mime: string;
                  width: number;
                  height: number;
                  size: number;
                  path: null;
                  url: string;
                }
              };
              hash: string;
              ext: string;
              mime: string;
              size: number;
              url: string;
              previewUrl: null;
              provider: string;
              provider_metadata: null;
              created_at: Date;
              updated_at: Date;
            };
            grid: number;
          }
        ];
      }
    ]
  nav: {
    id: number,
    sitename: string,
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
  },
  // seo: {
  //   id: 1,
  //   meta_title: 'home',
  //   description: 'this is home',
  //   tags: null
  // },
  // footer: {
  //   id: 1,
  //   copyright: '@Jaalnet',
  //   sitename: 'Jaalnet',
  //   createdAt: '2023-08-24T08:28:32.651Z',
  //   updatedAt: '2023-08-24T08:29:07.164Z',
  //   publishedAt: '2023-08-24T08:29:07.155Z',
  //   column: [ [Object] ],
  //   footerlinks: [ [Object], [Object], [Object] ],
  //   icons: []
  // },
  banner: {
    id: number,
    editor: string,
    grid: number,
    createdAt: string,
    updatedAt: string,
    publishedAt: null
  }

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
