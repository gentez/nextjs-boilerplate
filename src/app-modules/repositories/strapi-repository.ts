import { PageData } from "types";
import { getStrapiURL } from "../connection/strapi-connection";
import logger from "../logging/winston-logger";
import { instance } from "../constants";
export async function getAllEntries(collection: string): Promise<PageData[]> {
  try {
    // logger.info('Revelidate API called')
    console.log(instance)
    const response = await fetch(getStrapiURL(`/${collection}`));
    // logger.info("Data succesfully fetched",instance)
    const data = await response.json();
    return data;
  } catch (error) {
    // logger.error(`Error fetching ${collection} entries: ${error}`,instance)
    console.error(`Error fetching ${collection} entries:`, error);
    return [];
  }
}

export async function getEntryBySlug(collection: string, slug: string): Promise<PageData | null> {
  try {
    // logger.info(`Get ${slug} page api called`)
    const response = await fetch(getStrapiURL(`/${collection}/${slug}`));
    // logger.info("Data succesfully fetched",instance)
    const data = await response.json();
    return data[0];
  } catch (error) {
    // logger.error(`Error fetching ${collection} entry by slug ${slug}: ${error}`,instance)
    console.error(`Error fetching ${collection} entry by slug ${slug}:`, error);
    return null;
  }
}

  