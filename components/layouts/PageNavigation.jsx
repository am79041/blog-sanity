export default function PageNavigation({ postCount, postId }) {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <span>
        <a href={`/archive/${postId}`} className="no-underline">
          Page {postId} {"/"} {postCount}
        </a>
      </span>
      <span className="flex justify-between">
        {postId < postCount && (
          <a
            href={`/archive/${String(Number(postId) + 1)}`}
            className="no-underline hover:text-blue-400 hover:underline"
          >
            Older →
          </a>
        )}
        {postId > 1 && (
          <a
            href={`/archive/${String(Number(postId) - 1)}`}
            className="no-underline hover:text-blue-400 hover:underline"
          >
            ← Newer
          </a>
        )}
      </span>
    </div>
  );
}
