export default function NextPost({ nextPost }) {
  return (
    <a
      className="font-bold text-blue-300 no-underline hover:text-blue-400 hover:underline"
      href={nextPost.slug}
    >
      {nextPost.title} →
    </a>
  );
}
