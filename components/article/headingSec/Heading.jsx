import Img from "next/image";

export default function Title({ title, postImage }) {
  return (
    <section className="lg:mt-[3rem]">
      <h1 className="text-center font-bold ">{title}</h1>
      {/* <Img
        src={postImage.url}
        alt={postImage.alt}
        loading="lazy"
        width={800}
        height={460}
        className="rounded-lg"
      /> */}
    </section>
  );
}
