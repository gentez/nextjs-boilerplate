export function getStrapiURL(path: String) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api'
  }${path}`;
}
