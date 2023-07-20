import { PageData } from "types";
import { getStrapiURL } from "../connection/strapi-connection";

export async function getAllEntries(collection: string): Promise<PageData[]> {
  try {
    const response = await fetch(getStrapiURL(`/${collection}`));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${collection} entries:`, error);
    return [];
  }
}

export async function getEntryBySlug(collection: string, slug: string): Promise<PageData | null> {
  try {
    const response = await fetch(getStrapiURL(`/${collection}/${slug}`));
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error(`Error fetching ${collection} entry by slug ${slug}:`, error);
    return null;
  }
}

  