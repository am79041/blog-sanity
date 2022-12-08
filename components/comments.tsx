import { useForm } from "react-hook-form"
import React, { useState, createRef, useRef } from "react"
import ReCAPTCHA from 'react-google-recaptcha'

export default function Comments({ _id }: { _id: string }) {

  const [isSubmitting, setIfSubmitting] = useState(false)
  const [isSubmitted, setIfSubmitted] = useState(false)
  const { register, handleSubmit } = useForm()
  const recaptchaRef = useRef()

  const onSubmit = async (data: any) => {

    const token = recaptchaRef.current.getValue()
    recaptchaRef.current.reset()
    setIfSubmitting(true)
    setIfSubmitted(false)

    try {

      const googleV = await fetch('/api/captchaVerify', {
        method: 'POST',
        body: JSON.stringify({ response: token })
      })

      const realData = await googleV.json()
      console.log(realData)

      const result = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),

      });

      await result.json();
      setIfSubmitting(false);
      setIfSubmitted(true);

    } catch (err) {
    }
  };

  if (isSubmitted) {
    const form = document.getElementById('commentForm') as HTMLFormElement
    form.reset()
  }

  return (
    <section className="mb-16">
      {isSubmitting && <span>Submitting Comment...</span>}
      {isSubmitted && <span className='text-lg'> Great! Your comment will appear above after getting approved 😊</span>
      }

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 flex flex-col gap-y-4" id='commentForm'
      >
        <input
          {...register("_id", { required: true })}
          value={_id}
          type="hidden"
        />

        <label htmlFor='name'>Name</label>
        <input className='rounded px-2 py-1'
          {...register("name", { required: true, min: 1, max: 20 })}
        />
        <label htmlFor='email'>Email</label>
        <input className='rounded px-2 py-1'
          {...register("email", { required: true })}
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          className="rounded px-2 py-1"
          rows="6"
          {...register("comment", { required: true })}
        ></textarea>
        <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
        <input
          type="submit"
          className="focus:shadow-outline cursor-pointer rounded bg-[#1abc9c] py-2 px-4 font-bold text-white shadow hover:bg-[#1abc8e] focus:outline-none"
        />
      </form>
    </section >
  );
}
