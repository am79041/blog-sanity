import Img from "next/image";

export default function PrePost({ previousPost }) {
  return (
    <>
      {previousPost && (
        <li className="list-none w-[40%] text-left">
          <a
            className="no-underline hover:underline text-blue-300 hover:text-blue-400 font-bold"
            href={previousPost.slug}
          >
            ← {previousPost.title}
          </a>
        </li>
      )}
    </>
  );
}
