import { PageData } from 'types';
import { getStrapiURL } from '../connection/strapi-connection';

export async function getAllEntries(collection: string): Promise<PageData[]> {
  try {
    const response = await fetch(getStrapiURL(`/${collection}s`));

    const { data } = await response.json();
    console.log(data);
    const extractedData = data.map((item: any) => {
      return {
        slug: item.attributes.slug,
        Title: item.attributes.Title,
        id: item.id,
      };
    });
    extractedData.sort((a: any, b: any) => a.id - b.id);
    return extractedData;
  } catch (error) {
    console.error(`Error fetching ${collection} entries:`, error);
    return [];
  }
}

export async function getEntryBySlug(
  collection: string,
  slug: string
): Promise<PageData | null> {
  try {
    const response = await fetch(getStrapiURL(`/${collection}s?populate=*`));
    const { data } = await response.json();
    
    const matchingObject = data.find(
      (item: any) => item.attributes.slug === slug
    );

    return {
      id: matchingObject.id,
      ...matchingObject.attributes,
    };
  } catch (error) {
    console.error(`Error fetching ${collection} entry by slug ${slug}:`, error);
    return null;
  }
}
