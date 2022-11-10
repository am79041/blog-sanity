import Head from "next/head";
import Img from "next/image";

import { client } from "../../sanity";
import readingTime from "reading-time";
import serializers from "../../serializers";
import { PortableText } from "@portabletext/react";
import { BiBook } from "react-icons/bi";

export default function Post({ post }) {
  const stats = readingTime(post.body);
  return (
    post && (
      <>
        <article className="prose prose-md max-w-none lg:w-[45%] md:w-[70%] w-screen mx-auto p-[2rem]">
          <Head key={post._id}>
            <title>{post.title}</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content={post.description} />
            <meta name="robots" content="all" />
            <meta name="og:title" content={post.title} />
          </Head>
          <section className="lg:mt-[3rem]">
            <h1 className="text-2xl text-center font-extrabold ">
              {post.title}
            </h1>
            <Img
              src={post.postImage.url}
              alt={post.postImage.alt}
              loading="lazy"
              width={800}
              height={460}
              className="rounded-lg"
            />
          </section>
          {post.author && (
            <section className="my-8 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:justify-between">
              <div className="flex gap-x-4 items-center">
                <Img
                  src={post.author.authorImg.asset.url}
                  width={50}
                  height={50}
                  loading="lazy"
                  className="rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <div className="flex gap-x-4 items-center">
                <span>{new Date(post._updatedAt).toDateString()}</span>
                <div className="flex gap-x-2 items-center">
                  <BiBook />
                  <span>{stats.text}</span>
                </div>
              </div>
            </section>
          )}
          <PortableText value={post.body} components={serializers} />
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
  const query = `*[_type=="post" && slug.current == $slug][0]{
    _id, title, _createdAt, _updatedAt, description, 
    author->{
    "name":fullName,
     authorImg{
       asset->{
        "url":url 
       }
      }
    },
    postImage{
      "alt":alt,
      "url":asset->url
    },
      body[]{
        ...,
        markDefs[]{
          ...,
          _type=='internalLink' => {
            ...,
            reference->{
              "url":"http://localhost:3000/blog/" + slug.current
          }
         }
        }
       }
  }`;
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
