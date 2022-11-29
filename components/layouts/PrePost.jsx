import Img from "next/image";

export default function PrePost({ previousPost }) {
  return (
    <a
      className="text-[#1abc9c] no-underline hover:text-gray-700"
      href={previousPost.slug}
    >
      ← {previousPost.title}
    </a>
  );
}
