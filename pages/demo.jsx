import { GraphQLClient, gql } from "graphql-request";
import Img from "next/image";

import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function Demo({ posts }) {
  return (
    <section className="prose prose-lg dark:prose-invert m-auto p-4">
      <h1 className="text-[2.5rem]">{posts.title}</h1>
      <Img
        src={posts.postImage.url}
        width={posts.postImage.width}
        height={posts.postImage.height}
        loading="lazy"
        className="rounded-lg"
      />
      <article dangerouslySetInnerHTML={{ __html: posts.content.html }} />
    </section>
  );
}

export const getServerSideProps = async () => {
  const endPoint =
    "https://api-ap-south-1.hygraph.com/v2/claclqz5d0drr01ul6rox4vsn/master";
  const slug = "priya gamre web series";
  const query = gql`
    query ($slug: String!) {
      posts(where: { slug: $slug }) {
        id
        publishedAt
        createdAt
        slug
        title
        updatedAt
        content {
          html
        }
        postImage {
          width
          height
          url
        }
      }
    }
  `;
  const client = new GraphQLClient(endPoint);
  const { posts } = await client.request(query, { slug });
  return {
    props: {
      posts,
    },
  };
};
