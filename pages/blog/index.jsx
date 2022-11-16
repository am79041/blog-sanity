import { client } from "../../backend/sanity";

export default function Blog({ posts }) {
  return (
    <article className="sm:p-[2rem] p-[1rem]">
      {posts.map((post) => (
        <div key={post._id} className="flex flex-col">
          <a
            href={`/blog/${post.slug.current}`}
            className="text-2xl text-left font-semibold cursor-pointer no-underline hover:underline hover:text-blue-300 "
          >
            {post.title}
          </a>
          <p>{post.description}</p>
          <a
            href={`/blog/${post.slug.current}`}
            className="no-underline w-fit p-2 rounded-md border-2 border-blue-400 text-sm"
          >
            {" "}
            Continue Reading →
          </a>
          <hr />
        </div>
      ))}
    </article>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
       _id, title, _updatedAt, description, slug {current}, postImage{
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
