import { client } from "../../backend/sanity";
import BlogPages from "../../components/layouts/BlogPages";

export default function currentPage({ posts, postCount, postId }) {
  const props = {
    posts,
    postCount,
    postId,
  };
  return <>{props.posts && <BlogPages {...props} />}</>;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { id } = params;

  const countQuery = `count(*[_type == "post"])`;
  const query = `*[_type == "post"] | order(_updatedAt desc) | [$lower_bound...$upper_bound]{
    _id, title, slug {current}, description
  }`;
  const postCount = await client.fetch(countQuery);

  const l = (id - 1) * 3;
  const r = l + 3 >= postCount ? postCount : l + 3;

  const param = {
    lower_bound: l,
    upper_bound: r,
  };
  const posts = await client.fetch(query, param);
  const notFound = !posts;
  return {
    props: {
      posts,
      postCount: (postCount + 1) / 3,
      postId: id,
    },
    notFound,
  };
};
