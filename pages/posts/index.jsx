import { client } from "../../backend/sanity";
import ArchivePageLayout from "../../components/layouts/ArchivePageLayout";

export default function Blog({ posts, postCount }) {
  const props = {
    posts,
    postCount,
  };
  return <ArchivePageLayout {...props} />;
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"][0...2]{
       _id, title, _updatedAt, description, slug {current}, postImage{
           "alt":alt,
           "url":asset->url
       }
   }`;

  const countQuery = `count(*[_type == 'post'])`;

  const posts = await client.fetch(query);
  const postCount = await client.fetch(countQuery);

  return {
    props: {
      posts,
      postCount: (postCount + 1) / 3,
    },
  };
};
