/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Comment, CommentContextType, SortType } from "../types/interface";

export const CommentContext = createContext<CommentContextType | undefined>(undefined);

let idCounter = 0;
const generateId = () => (++idCounter).toString();

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [sortType, setSortType] = useState<SortType>("newest");

  const addComment = (content: string, parentId: string | null = null) => {
    const newComment: Comment = {
      id: generateId(),
      parentId,
      content,
      author: "User",
      timestamp: Date.now(),
      upvotes: 0,
      downvotes: 0,
    };
    setComments((prev) => [...prev, newComment]);
  };

  const vote = (id: string, type: "up" | "down") => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              upvotes: type === "up" ? c.upvotes + 1 : c.upvotes,
              downvotes: type === "down" ? c.downvotes + 1 : c.downvotes,
            }
          : c
      )
    );
  };

  return (
    <CommentContext.Provider
      value={{ comments, addComment, vote, sortType, setSortType }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("Unexpected Error");
  }
  return context;
};