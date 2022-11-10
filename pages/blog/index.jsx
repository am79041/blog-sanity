import { client } from "../../sanity";
import Link from "next/link";
import Img from "next/image";

export default function Blog({ posts }) {
  return (
    <main className="md:w-[50%] w-[80%] m-auto">
      <section className="flex flex-wrap flex-row justify-around gap-5">
        {posts.map((post) => (
          <>
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <div className="cursor-pointer">
                <Img
                  src={post.postImage.url}
                  alt={post.postImage.alt}
                  width={350}
                  height={200}
                  className="rounded-md"
                />
                <h2 className="text-lg font-semibold cursor-pointer">
                  {post.title}
                </h2>
              </div>
            </Link>
          </>
        ))}
      </section>
    </main>
  );
}

export const getStaticProps = async () => {
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
