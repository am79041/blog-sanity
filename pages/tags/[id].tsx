import React from "react"
import { client } from "../../backend/sanity"
import NextNProgress from 'nextjs-progressbar'
import { useRouter } from 'next/router'

type postByTags = {
  posts: [
    {
      _id: string;
      title: string;
      description: string;
      slug: string;
    }
  ];
  tag: string;
};

type tagProps = {
  _id: string;
  title: string;
  slug: string;
}

export async function getStaticPaths() {
  const tags = await client.fetch(`*[_type == 'tags']{
    _id,title,'slug':slug.current
  }`)

  return {
    paths: tags?.map((tag: tagProps) => {
      return {
        params: {
          id: tag.slug
        }
      }
    }),
    fallback: true
  }

}
export async function getStaticProps({ params }: { params: { id: string; } }) {

  const query = `*[_type == 'post' && $key in tags[]->slug.current]{
    _id, title, description, 'slug':slug.current}`

  const posts = await client.fetch(query, { key: params.id })
  const notFound = !posts

  let str = params.id.split('-')
  let tag = str.join(" ")
  tag = tag[0].toUpperCase() + tag.substring(1)

  return {
    props: {
      posts,
      tag
    },
    notFound
  };
}

export default function Tags({ posts, tag }: postByTags) {

  const { isFallback } = useRouter()
  if (isFallback) {
    return <NextNProgress />
  }

  return <>
    <h1 className='dark:text-pink-200'>{tag} &#8594;</h1>
    {
      posts.map((post) => {

        return <div key={post._id}>
          <a className='text-[1.6rem] font-[800]' href={`/posts/${post.slug}`}>
            {post.title}
          </a>
          <p>{post.description}</p>
        </div>
      })
    }
  </>
}
