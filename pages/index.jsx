import { client } from "../sanity";
import Img from "next/image";

export default function Home({ posts }) {
  return (
    <main className="w-[50%] m-auto">
      {posts.map((post) => (
        <section
          className="flex justify-between gap-x-3 my-12 items-center"
          key={post._id}
        >
          <div className="flex flex-col">
            <h2 className="sm:text-xl">{post.title}</h2>
            <p className="text-[14px]">{post.description}</p>
          </div>
          <Img
            src={post.postImage.url}
            alt={post.postImage.alt}
            width={150}
            height={100}
            className="rounded-md"
          />
        </section>
      ))}
    </main>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id, title, description, author{"name":fullName}, postImage{ "alt":alt, "url":asset->url }
  }`;
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
