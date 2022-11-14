import Img from "next/image";

export default function NextPost({ nextPost }) {
  return (
    <>
      {nextPost && (
        <div className="flex flex-col">
          <Img
            src={nextPost.postImage.url}
            alt={nextPost.postImage.alt}
            width={240}
            height={170}
            className="rounded-md cursor-pointer"
          />
          <a className="no-underline cursor-pointer" href={nextPost.slug}>
            {nextPost.title}
          </a>
        </div>
      )}
    </>
  );
}
