import { BiCommentDetail } from "react-icons/bi";

export default function ReadingTime(props) {
  return (
    <div className="flex items-center gap-x-2">
      <BiCommentDetail />
      <p className="text-white">{props.text}</p>
    </div>
  );
}
