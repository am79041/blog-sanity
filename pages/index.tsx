import React from "react";
import { client } from "../backend/sanity";
import { MdSearch } from "react-icons/md";
import { BiCalendar, BiUserCircle } from 'react-icons/bi'
import Link from "next/link";

type props = {
  tags: [
    {
      _id: string;
      count: number;
      title: string;
      slug: string;
    }
  ];
  posts: [
    {
      _id: string;
      title: string;
      authorName: string;
      _updatedAt: string;
      slug: string;
      description: string;
    }
  ];
};

export default function Home({ tags, posts }: props) {
  return (
    <section className="my-16 grid place-items-center">
      <div className="flex w-full items-center justify-center rounded-lg bg-gray-200 px-3 py-1 dark:bg-white">
        <input
          className="w-full bg-gray-200 outline-none dark:bg-white"
          type="text"
          placeholder="Search Anything..."
        />
        <MdSearch className="h-9 w-8 dark:text-red-400" />
      </div>
      <div id="tags" className="my-8 flex flex-wrap gap-5">
        {tags.map((e) => {
          return (
            <Link
              className="rounded-lg bg-red-100 p-2 text-[15px] font-bold no-underline transition delay-100 ease-in-out hover:scale-110 hover:no-underline dark:text-red-500"
              key={e._id}
              href={`tags/${e.slug}`}
            >
              # {e.title} {e.count}{" "}
            </Link>
          );
        })}
      </div>
      <article>
        {posts.map((post) => {
          return (
            <div key={post._id} className='flex flex-col my-6'>
              <a className='text-[1.6rem] font-[800]' href={`posts/${post.slug}`}>
                {post.title}
              </a>
              <span className='flex flex-row items-center gap-x-3'>{post.authorName} <BiCalendar />{'  '} {new Date(post._updatedAt).toDateString()}</span>
              <p>
                {post.description}{" "}
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export async function getServerSideProps() {
  const query = `*[_type=='tags']{
			_id,title,'slug':slug.current,
			'count' : count(*[_type == 'post' && references(^._id)])}`;

  const posts = await client.fetch(`*[_type == 'post']{
	_id, title,_updatedAt,'authorName': author->fullName, 'slug':slug.current, description}`);
  const tags = await client.fetch(query);
  return {
    props: {
      tags,
      posts,
    },
  };
}
