import { client } from "../backend/sanity";
import BlogCard from "../components/layouts/BlogCard";

export default function Home({ posts }) {
  return (
    <>
      <section className="m-auto grid place-items-start gap-5 p-4 sm:grid-cols-2 md:p-2">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_updatedAt desc){
    _id, _updatedAt, title, slug{current}, description, author->{
      "name":fullName,
       authorImg{
         asset->{
          "url":url 
         }
        }
      }, postImage{ "alt":alt, "url":asset->url }
  }`;
  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
