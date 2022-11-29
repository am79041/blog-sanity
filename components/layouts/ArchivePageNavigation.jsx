export default function ArchivePageNavigation({ postCount, postId }) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <span>
        <a href={`/archive/${postId}`} className="no-underline">
          Page {postId} {"/"} {postCount}
        </a>
      </span>
      <span className="flex justify-between">
        {postId < postCount && (
          <a
            href={`/archive/${String(Number(postId) + 1)}`}
            className="text-[#1abc9c] no-underline hover:text-gray-700"
          >
            Older →
          </a>
        )}
        {postId > 1 && (
          <a
            href={`/archive/${String(Number(postId) - 1)}`}
            className="text-[#1abc9c] no-underline hover:text-gray-700"
          >
            ← Newer
          </a>
        )}
      </span>
    </div>
  );
}
