export default function NextPost({ nextPost }) {
  return (
    <>
      {nextPost && (
        <li className="list-none w-[40%] text-right">
          <a
            className="no-underline hover:underline text-blue-300 hover:text-blue-400 font-bold"
            href={nextPost.slug}
          >
            {nextPost.title} →
          </a>
        </li>
      )}
    </>
  );
}
