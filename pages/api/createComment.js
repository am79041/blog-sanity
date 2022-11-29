import { client } from "../../backend/sanity";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  console.log(result);
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "Forbidden" });
  }
  const formData = JSON.parse(req.body);
  const { _id, name, email, imageUri, comment } = formData;
  try {
    const result = await client
      .patch(_id)
      .setIfMissing({ postComments: [] })
      .append("postComments", [
        { name: name, email: email, image: imageUri, comment: comment },
      ])
      .commit({ autoGenerateArrayKeys: true });
    res.status(200).send(result.postComments);
  } catch (err) {
    console.log(err);
    res.status(403).send(err);
  }
}
