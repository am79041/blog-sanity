export default function HomePageLayout({ posts }) {
  return (
    <section className="grid grid-cols-4">
      {posts?.map((post) => {
        return (
          <div
            key={post._id}
            className="col-span-3 m-auto my-8 flex w-4/5 flex-col gap-y-3 bg-white p-14"
          >
            <span className="text-gray-[600] text-[12px] font-semibold uppercase">
              published at {new Date(post._updatedAt).toDateString("en-US")}
            </span>
            <a
              className="text-3xl font-bold no-underline hover:underline"
              href={`posts/${post.slug.current}`}
            >
              {post.title}
            </a>
            <span>{post.description}</span>
          </div>
        );
      })}
    </section>
  );
}
