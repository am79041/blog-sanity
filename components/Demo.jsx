import { useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

export default function Demo(props) {
  const { _id, postLikes } = props;
  const [Likes, setLikes] = useState(postLikes);
  const [set, isSet] = useState(false);

  const liked = "h-6 w-6 text-red-400 focus:text-red-600";
  const liking = "h-6 w-6 text-red-600 animate-pulse";

  const incLikes = async () => {
    try {
      isSet(true);
      const res = await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify({ _id }),
      });
      const data = await res.json();
      setLikes(data.totalLikes);
      isSet(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="m-auto flex w-[20%] justify-between sm:w-[10%]">
      <button onClick={incLikes}>
        <BsFillSuitHeartFill className={set ? liking : liked} />
      </button>
      <span>{Likes}</span>
    </div>
  );
}
