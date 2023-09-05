export function getStrapiURL(path: String) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://strapi-dev-ddlv.onrender.com/api'
  }${path}`;
}
