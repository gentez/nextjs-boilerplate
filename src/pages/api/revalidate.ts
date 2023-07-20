import { NextApiRequest, NextApiResponse } from "next";
// import logger from "lib/modules/pino-logger";
import logger from "@/app-modules/logging/winston-logger";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  logger.info('Revelidate API called')

// const child = logger.info({ a: 'property' })
  try {
    // Check for secret to confirm this is a valid request
    if (req.method !== "POST") {
      logger.error("Invalid HTTP method")
      return res.status(400).json({ error: "Invalid HTTP method" });
    }

    if (req.query.secret !== process.env.REVELIDATE_API_KEY?.toString()) {
      logger.error("Invalid token")
      return res.status(401).json({ message: 'Invalid token' });
    }
    const body: { slug: string } = req.body.entry;
    if (!body || !body.slug) {
      logger.error("Which page to validate?, slug missing!!")
      return res.status(400).json({ error: "Bad request" });
    }

    const slug = body.slug;
    await res.revalidate(`/pages/${slug}`);
    logger.info(`${slug} page revaildated successfully!!`)
    return res.json({ revalidated: true });
  } catch (err) {
    // console.log(err);
    logger.error(`Page not revaildated!!`)
    return res.status(500).send("Error revalidating");
  }
}

