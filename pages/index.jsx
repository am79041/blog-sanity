import { client } from "../backend/sanity";
import HomePageLayout from "../components/layouts/HomePageLayout";

export default function Home({ posts }) {
  return <HomePageLayout posts={posts} />;
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
