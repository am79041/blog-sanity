import ArchivePageNavigation from "./ArchivePageNavigation";

export default function ArchivePageLayout({ posts, postCount, postId }) {
  const props = {
    postCount,
    postId,
  };
  return (
    <>
      <article
        itemType="https://schema.org/Blog"
        itemScope
        className="m-auto w-4/5 text-lg "
      >
        <h2>Archive</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{new Date(post._updatedAt).toDateString("en-US")}</td>
                <td>
                  <a
                    className="text-[#1abc9c] no-underline hover:text-gray-700"
                    href={`/posts/${post.slug.current}`}
                  >
                    {post.title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ArchivePageNavigation {...props} />
      </article>
    </>
  );
}
