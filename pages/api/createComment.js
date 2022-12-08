import { client } from "../../backend/sanity";

export default async function handler(req, res) {

  const formData = JSON.parse(req.body);
  const { _id, name, email, comment } = formData;

  try {
    const result = await client
      .patch(_id)
      .setIfMissing({ postComments: [] })
      .append("postComments", [
        {
          _type: 'comment',
          approved: false,
          name: name,
          email: email,
          comment: comment,
        },
      ])
      .commit({ autoGenerateArrayKeys: true });
    res.status(200).send(result.postComments);

  } catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}
