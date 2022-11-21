import Img from "next/image";
import { BiBook } from "react-icons/bi";

export default function BlogCard({ post }) {
  return (
    <section className="mb-6 flex flex-col">
      <Img
        src={post.postImage.url}
        width={400}
        height={230}
        alt={post.title}
        loading="lazy"
        className="rounded-t-sm"
      />
      <div className="rounded-b-md bg-gray-800 py-4 px-3">
        <a
          className="font-bold no-underline hover:text-blue-400 hover:underline"
          href={`/posts/${post.slug.current}`}
        >
          {post.title}
        </a>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm">
            Updated at {new Date(post._updatedAt).toDateString("en-US")}
          </span>
        </div>
      </div>
    </section>
  );
}
