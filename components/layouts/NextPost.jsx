export default function NextPost({ nextPost }) {
  return (
    <a
      className="text-[#1abc9c] no-underline hover:text-gray-700"
      href={nextPost.slug}
    >
      {nextPost.title} →
    </a>
  );
}
