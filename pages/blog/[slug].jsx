import { client } from "../../backend/sanity";
import serializers from "../../components/serialize/serializers";
import { PortableText } from "@portabletext/react";

import PrePost from "../../components/nextPrev/PrePost";
import NextPost from "../../components/nextPrev/NextPost";
import Meta from "../../components/article/meta/Meta";
import Title from "../../components/article/headingSec/Heading";
import Author from "../../components/article/author/Author";
import { query } from "../../backend/singlePostQuery";

export default function Post({ post }) {
  return (
    post && (
      <>
        <article className="m-auto p-4">
          <Meta {...post} />
          <Title {...post} />
          <Author {...post} />
          <PortableText value={post.body} components={serializers} />
          <div className="sm:text-lg flex justify-between">
            <PrePost {...post} />
            <NextPost {...post} />
          </div>
        </article>
      </>
    )
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const param = { slug };

  const singlePost = await client.fetch(query, param);
  const notFound = !singlePost;
  return {
    props: {
      post: singlePost,
    },
    notFound,
  };
};
