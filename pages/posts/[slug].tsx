import { client } from "../../backend/sanity"
import singlePostQuery from "../../backend/singlePostQuery"
import SinglePostLayout from "../../components/layouts/SinglePostLayout"
import NextNProgress from "nextjs-progressbar"
import { useRouter } from "next/router"
import React from "react"
import { writeFile } from 'fs/promises'
import path from 'path'

export type singlePostProps = {
  post: {
    _id: string;
    _updatedAt: string;
    title: string;
    author: string;
    description: string;
    tags: [
      {
        _id: string;
        slug: string;
        title: string;
      }
    ];
    body: [];
    nextPost: {
      slug: string;
      title: string;
    };
    previousPost: {
      slug: string;
      title: string;
    };
    postLikes: number;
    postComments: [];
  };
};

export default function Post({ post }: singlePostProps) {
  const router = useRouter()
  if (router.isFallback) return <NextNProgress color="red" />
  return post && <SinglePostLayout post={post} />
}

export async function getStaticPaths() {
  const slugs = await client.fetch(`*[_type == 'post']{
    ...,'slug' : slug.current
  }`)
  await writeFile(path.join(process.cwd(), 'post.db'), JSON.stringify(slugs))

  const paths = slugs.map((e: { slug: string }) => {
    return {
      params: {
        slug: e.slug,
      },
    }
  })
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (context: { params: { slug: any } }) => {
  const { slug } = context.params
  const param = { slug }

  const singlePost = await client.fetch(singlePostQuery, param)
  const notFound = !singlePost
  return {
    props: {
      post: singlePost,
    },
    notFound,
  };
};
