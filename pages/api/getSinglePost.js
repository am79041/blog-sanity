import { client } from "../../backend/sanity";
import singlePostQuery from "../../backend/singlePostQuery";

export default async function getSinglePost(req, res) {
  const { slug } = JSON.parse(res.body);
  try {
    const singlePost = await client.fetch(singlePostQuery, { slug });
    res.status(200).send(singlePost);
  } catch (err) {
    res.status(401).send(err);
  }
}
