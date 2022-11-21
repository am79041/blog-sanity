import Img from "next/image";

export default function PrePost({ previousPost }) {
  return (
    <a
      className="font-bold text-blue-300 no-underline hover:text-blue-400 hover:underline"
      href={previousPost.slug}
    >
      ← {previousPost.title}
    </a>
  );
}
