import { client } from "../../backend/sanity";
import singlePostQuery from "../../backend/singlePostQuery";
import SinglePostLayout from "../../components/layouts/SinglePostLayout";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function Post({ post }) {
  const { isFallback } = useRouter();
  if (isFallback) return <NextNProgress color="#1abc9c" />;
  return post && <SinglePostLayout post={post} />;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const param = { slug };

  const singlePost = await client.fetch(singlePostQuery, param);
  const notFound = !singlePost;
  return {
    props: {
      post: singlePost,
    },
    notFound,
  };
};
