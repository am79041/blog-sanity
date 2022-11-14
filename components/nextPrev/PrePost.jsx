import Img from "next/image";

export default function PrePost({ previousPost }) {
  return (
    <>
      {previousPost && (
        <div className="flex flex-col">
          <Img
            src={previousPost.postImage.url}
            alt={previousPost.postImage.alt}
            width={240}
            height={170}
            className="rounded-md cursor-pointer"
          />
          <a
            className="no-underline text-md font-semibold cursor-pointer"
            href={previousPost.slug}
          >
            {previousPost.title}
          </a>
        </div>
      )}
    </>
  );
}
