import { useRouter } from "next/router";
import { client } from "../../backend/sanity";
import NextNProgress from "nextjs-progressbar";
import BlogPages from "../../components/layouts/BlogPages";

const countQuery = `count(*[_type == "post"])`;
const query = `*[_type == "post"] | order(_updatedAt desc) | [$lower_bound...$upper_bound]{
  _id, title, slug {current}, description
}`;
const noOfPostPerPage = 3;

export default function ArchivePage(props) {
  const { isFallback } = useRouter();

  if (isFallback) return <NextNProgress />;
  return <BlogPages {...props} />;
}

export const getStaticPaths = async () => {
  const postCount = await client.fetch(countQuery);
  const idOfPaths = (postCount + 1) / noOfPostPerPage;
  const paths = [];

  for (let i = 1; i <= idOfPaths; ++i) {
    paths.push({ params: { id: String(i) } });
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const postCount = await client.fetch(countQuery);

  const lower_bound = (id - 1) * noOfPostPerPage;
  const upper_bound =
    lower_bound + noOfPostPerPage >= postCount
      ? postCount
      : lower_bound + noOfPostPerPage;

  const param = {
    lower_bound,
    upper_bound,
  };

  const posts = await client.fetch(query, param);
  const notFound = posts.length == 0;

  return {
    props: {
      posts,
      postCount: (postCount + 1) / noOfPostPerPage,
      postId: id,
    },
    notFound,
  };
};
