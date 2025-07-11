import { useCommentContext } from "../context/CommentContext";
import CommentItem from "./CommentItem";
import type { Comment } from "../types/interface";

type Props = {
  comments: Comment[];
};

const CommentList = ({ comments }: Props) => {
  const { sortType } = useCommentContext();

  const sortComments = (comments: Comment[]) => {
    const sorted = [...comments];
    switch (sortType) {
      case "newest":
        return sorted.sort((a, b) => b.timestamp - a.timestamp);
      case "oldest":
        return sorted.sort((a, b) => a.timestamp - b.timestamp);
      case "most-score":
        return sorted.sort(
          (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
        );
      case "least-score":
        return sorted.sort(
          (a, b) => a.upvotes - a.downvotes - (b.upvotes - b.downvotes)
        );
      default:
        return sorted;
    }
  };

  const visible = sortComments(comments);

  return (
    <>
      {visible.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
