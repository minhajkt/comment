export type Comment = {
  id: string;
  parentId: string | null;
  content: string;
  author: string;
  timestamp: number;
  upvotes: number;
  downvotes: number;
};

export type SortType = "newest" | "oldest" | "most-score" | "least-score";

export type CommentContextType = {
  comments: Comment[];
  addComment: (content: string, parentId: string | null) => void;
  vote: (id: string, type: "up" | "down") => void;
  sortType: SortType;
  setSortType: (type: SortType) => void;
};
