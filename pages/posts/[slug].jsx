import { client } from "../../backend/sanity";
import serializers from "../../components/serialize/serializers";
import { PortableText } from "@portabletext/react";

import PrePost from "../../components/layouts/PrePost";
import NextPost from "../../components/layouts/NextPost";
import Meta from "../../components/article/meta/Meta";
import Title from "../../components/article/heading/Heading";
import Author from "../../components/article/author/Author";

import { query } from "../../backend/singlePostQuery";

export default function Post({ post }) {
  return (
    post && (
      <>
        <article className="m-auto p-5">
          <Meta {...post} />
          <Title {...post} />
          <Author {...post} />
          <PortableText value={post.body} components={serializers} />
          <div className="my-16 flex justify-between px-4 sm:text-lg">
            <span className="w-[40%] text-left">
              {post.previousPost && <PrePost {...post} />}
            </span>
            <span className="w-[40%] text-right">
              {post.nextPost && <NextPost {...post} />}
            </span>
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
