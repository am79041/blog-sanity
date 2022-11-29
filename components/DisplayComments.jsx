import Img from "next/image";

export default function DisplayComments({ postComments }) {
  if (postComments == undefined) {
    return <h4>Make the First Comment! 😊</h4>;
  }
  return (
    <div className="">
      <h3> Comments:</h3>
      {postComments?.map((e) => {
        return (
          <div key={e._key} className="mb-4 flex flex-col gap-y-4">
            <span className="flex flex-row items-center gap-x-2 font-extrabold">
              <Img
                src={e.image}
                width={40}
                height={40}
                className="rounded-full"
              />{" "}
              {e.name}
            </span>
            <span>{e.comment}</span>
          </div>
        );
      })}
    </div>
  );
}
