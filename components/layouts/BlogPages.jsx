import PageNavigation from "./PageNavigation";

export default function BlogPages({ posts, postCount, postId }) {
  const props = {
    postCount,
    postId,
  };
  return (
    <>
      <article className="m-auto p-6">
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col">
            <a
              href={`/posts/${post.slug.current}`}
              className="cursor-pointer text-left text-2xl font-semibold no-underline hover:text-blue-300 hover:underline "
            >
              {post.title}
            </a>
            <p>{post.description}</p>
            <a
              href={`/posts/${post.slug.current}`}
              className="w-fit rounded-md border-2 border-blue-400 p-2 text-sm no-underline delay-200 ease-in-out hover:border-blue-500 hover:transition"
            >
              {" "}
              Continue Reading →
            </a>
            <hr className="border-1 border-dotted border-blue-400" />
          </div>
        ))}
        <PageNavigation {...props} />
      </article>
    </>
  );
}
