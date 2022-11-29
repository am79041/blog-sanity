import { useForm } from "react-hook-form";
import { useState } from "react";
import DisplayComments from "./DisplayComments";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Comments({ _id, postComments }) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState(postComments);
  const [isSubmitting, setIfSubmitting] = useState(false);
  const [isSubmitted, setIfSubmitted] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIfSubmitting(true);

    try {
      const result = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      const jsonData = await result.json();
      setIfSubmitting(false);
      setIfSubmitted(true);
      setFormData(jsonData);
    } catch (err) {
      setFormData(err);
    }
  };
  if (isSubmitting) {
    return <span className="m-4">Submitting comment...</span>;
  }

  if (session) {
    return (
      <section className="mb-16 p-8">
        <DisplayComments postComments={formData} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-8 flex flex-col gap-y-4"
        >
          <input
            {...register("_id", { required: true })}
            value={_id}
            type="hidden"
          />
          <input
            {...register("name", { required: true, min: 1, max: 20 })}
            value={session.user.name}
            type="hidden"
          />
          <input
            {...register("email", { required: true })}
            value={session.user.email}
            type="hidden"
          />
          <input
            {...register("imageUri", { required: true })}
            value={session.user.image}
            type="hidden"
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            className="rounded-sm p-2"
            rows="6"
            {...register("comment", { required: true })}
          ></textarea>
          <input
            type="submit"
            className="focus:shadow-outline cursor-pointer rounded bg-[#1abc9c] py-2 px-4 font-bold text-white shadow hover:bg-[#1abc8e] focus:outline-none"
          />
        </form>
        <button
          className="max-w-fit rounded-sm bg-[#1abc9c] p-3 text-sm text-white"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </section>
    );
  }
  return (
    <section className="mb-16 p-8">
      <DisplayComments postComments={formData} />
      <button
        className="mt-8 rounded-sm bg-purple-500 p-3 text-sm text-white"
        onClick={() => signIn("google")}
      >
        Sign in to comment
      </button>
    </section>
  );
}
