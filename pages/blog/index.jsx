import { client } from "../../backend/sanity";
import Link from "next/link";
import Img from "next/image";

export default function Blog({ posts }) {
  return (
    <article className="prose prose-2xl dark:prose-invert grid sm:grid-cols-2 m-auto gap-5 sm:p-[2rem] p-[1rem] ">
      {posts.map((post) => (
        <div key={post._id} className="flex flex-col">
          <Link href={`/blog/${post.slug.current}`}>
            <Img
              src={post.postImage.url}
              alt={post.postImage.alt}
              width={300}
              height={200}
              className="rounded-md cursor-pointer"
            />
          </Link>
          <a
            href={`/blog/${post.slug.current}`}
            className="text-lg text-center font-semibold cursor-pointer no-underline"
          >
            {post.title}
          </a>
        </div>
      ))}
    </article>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
       _id, title, _updatedAt, description, slug{current}, postImage{
           "alt":alt,
           "url":asset->url
       }
   }`;

  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
