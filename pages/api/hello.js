// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from "../../backend/sanity";

export default async function handler(req, res) {
  const { _id } = JSON.parse(req.body);

  try {
    await client.patch(_id).setIfMissing({ postLikes: 0 }).commit();
    const result = await client.patch(_id).inc({ postLikes: 1 }).commit();
    res.status(200).json({ totalLikes: result.postLikes });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
