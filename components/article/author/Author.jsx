import Img from "next/image";
import { BiBook } from "react-icons/bi";
import readingTime from "reading-time";

export default function Author({ author, _updatedAt, body }) {
  const stats = readingTime(body);
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <img
          src={author.authorImg.asset.url}
          className="h-10 w-10 rounded-full"
          alt="ninja"
          loading="lazy"
        />
        <span>{author.name}</span>
      </div>
      <div className="flex items-center gap-x-4">
        <span>Published At {new Date(_updatedAt).toDateString("en-US")}</span>
        <BiBook />
        <span>{stats.text}</span>
      </div>
    </section>
  );
}
