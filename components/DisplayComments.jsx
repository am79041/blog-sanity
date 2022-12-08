export default function DisplayComments({ postComments }) {
  if (postComments == undefined) {
    return <h4>Make the First Comment! 😊</h4>;
  }
  return (
    <div className="my-16">
      <h2> Comments:</h2>
      {postComments?.map((e) => {
        if (e.approved) {
          return (
            <div key={e._key} className="mb-4 flex flex-col gap-y-4">
              <span className="font-extrabold text-pink-600">
                {e.name}
              </span>
              <span>{e.comment}</span>
            </div>
          );
        }
      })}
    </div>
  );
}
