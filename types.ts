import { Loggly, LogglyOptions } from "winston-loggly-bulk";

export interface PageData {

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
            lg: number;
            sm: number;
            md: number;
          }
        ];
        column_html: [
          {
            id: number;
            editor: string;
            lg: number;
            sm: number;
            md: number;
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
            lg: number;
            sm: number;
            md: number;
          }
        ];
        column_accordion:
          {
            id: number;
            accordion: [
              {
                id: number;
                heading: string;
                content: string;
              }
            ];
            lg: number;
            sm: number;
            md: number;
          }
        
      }
    ]
  nav: {
    id: number,
    sitename: string,
    navitems: [
      {
        id: number,
        link: string,
        name: string
      }
    ],
    logo:{
      logoimage: {
        id: number,
        name: string,
        alternativeText: string,
        caption: string,
        width: number,
        height: number,
        hash: string,
        ext: string,
        mime: string,
        size: number,
        url: string,
        previewUrl: null,
        provider: string,
        provider_metadata: null,
        created_at: Date,
        updated_at: Date
      }
    }
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
  },
  footer: {
    id: number,
    sitename: string,
    footerlinks: [
      {
        id: number,
        link: string,
        name: string
      }
    ]
  },
  banner: {
    id: number,
    editor: string,
    grid: number,
    createdAt: string,
    updatedAt: string,
    publishedAt: null
  },
  column_slider: [
    {
      id: number,
      title: string,
      subtitle: string,
    
      slider_card: [
        {
          id: number,
          link: string,
          heading: string,
          content: string,
          image: {
            id: number,
            name: string,
            alternativeText: string,
            caption: string,
            width: number,
            height: number,
            hash: string,
            ext: string,
            mime: string,
            size: number,
            url: string,
            previewUrl: null,
            provider: string,
            provider_metadata: null,
            created_at: Date,
            updated_at: Date
          },
          grid: number
        }
      ]
    }
  ]
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
