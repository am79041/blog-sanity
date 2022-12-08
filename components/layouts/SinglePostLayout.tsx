import React from "react";
import { PortableText } from "@portabletext/react";
import Meta from "../article/meta/Meta";
import serializers from "../serialize/serializers";
import { singlePostProps } from "../../pages/posts/[slug]";
import { BiCalendar } from 'react-icons/bi'
import Comments from '../comments'
import DisplayComments from "../DisplayComments"

export default function SinglePostLayout({ post }: singlePostProps) {
  return (
    <>
      <article className="my-20">
        <Meta _id={post._id} title={post.title} description={post.description} />
        <h1>{post.title}</h1>
        <span className='flex flex-row flex-wrap items-center gap-x-2'>
          Published by<span className="font-semibold text-pink-600">{post.author}</span>
          <BiCalendar />
          <span className="text-pink-600 font-semibold">
            {new Date(post._updatedAt).toDateString()}
          </span>
        </span>
        <div>
          {post.tags?.map((e) => {
            return (
              <button
                key={e._id}
                className="my-4 mr-4 rounded-md border-2 border-pink-600 px-2 font-semibold "
              >
                {e.title}
              </button>
            );
          })}
        </div>

        {/*Post Body */}

        <PortableText components={serializers} value={post.body} />
      </article>

      {/*Post Navigation*/}

      <section id='postNav' className='mb-8 grid grid-cols-2'>
        <div className='text-left'>
          {post.previousPost && <a href={`/posts/${post.previousPost.slug}`}>&#8592; {post.previousPost.title}</a>}
        </div>
        <div className='text-right'>
          {post.nextPost && <a href={`/posts/${post.nextPost.slug}`}>{post.nextPost.title} &#8594;</a>
          }
        </div>
      </section>

      {/* Comment Section */}

      <DisplayComments postComments={post.postComments} />
      <Comments _id={post._id} />
    </>
  );
}
