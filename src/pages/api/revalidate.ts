import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check for secret to confirm this is a valid request
    if (req.method !== "POST") {
      return res.status(400).json({ error: "Invalid HTTP method" });
    }

    if (req.query.secret !== process.env.REVELIDATE_API_KEY?.toString()) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const body: { slug: string } = req.body;

    if (!body || !body.slug) {
      return res.status(400).json({ error: "Bad request" });
    }

    const slug = body.slug;
    await res.revalidate(`/pages/${slug}`);
    
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error revalidating");
  }
}

