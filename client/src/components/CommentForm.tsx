import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useCommentContext } from "../context/CommentContext";

const CommentForm = ({ parentId }: { parentId: string | null }) => {
  const { addComment } = useCommentContext();
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addComment(content, parentId);
      setContent(""); 
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <TextField
        label={parentId ? "Write a reply..." : "Add a comment..."}
        variant="outlined"
        size="small"
        fullWidth
        multiline
        minRows={2}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        size="small"
        sx={{ alignSelf: "flex-end" }}
        disabled={!content.trim()}
      >
        {parentId ? "Reply" : "Comment"}
      </Button>
    </Box>
  );
};

export default CommentForm;
