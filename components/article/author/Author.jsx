import Img from "next/image";
import { BiBook } from "react-icons/bi";
import readingTime from "reading-time";

export default function Author({ author, _updatedAt, body }) {
  const stats = readingTime(body);
  return (
    <>
      {author && (
        <section className="my-8 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:justify-between">
          <div className="flex gap-x-4 items-center">
            <Img
              src={author.authorImg.asset.url}
              width={50}
              height={50}
              loading="lazy"
              className="rounded-full"
            />
            <span>{author.name}</span>
          </div>
          <div className="flex gap-x-4 items-center">
            <span>{new Date(_updatedAt).toDateString()}</span>
            <div className="flex gap-x-2 items-center">
              <BiBook />
              <span>{stats.text}</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
