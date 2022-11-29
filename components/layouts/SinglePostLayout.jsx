import { PortableText } from "@portabletext/react";
import Meta from "../article/meta/Meta";
import Author from "../article/author/Author";
import serializers from "../serialize/serializers";

export default function SinglePostLayout({ post }) {
  return (
    <section className="m-auto my-24 w-11/12 grid-cols-3 gap-x-8 lg:grid lg:w-4/5">
      <article className="col-span-2 bg-white p-8 md:p-12">
        <Meta {...post} />
        <h1>{post?.title}</h1>
        <Author {...post} />
        <PortableText value={post?.body} components={serializers} />
        <div className="flex justify-between">
          <a className="w-[40%] text-left" href={post.previousPost?.slug}>
            {post.previousPost?.title}
          </a>
          <a className="w-[40%] text-right" href={post.nextPost?.slug}>
            {post.nextPost?.title}
          </a>
        </div>
      </article>
      <article className="gap-y-6 lg:grid lg:h-[45%] lg:grid-rows-4">
        <div className="bg-white"></div>
        <div className="row-span-2 bg-white"></div>
        <div className="bg-white"></div>
      </article>
    </section>
  );
}
