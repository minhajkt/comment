import { useState } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Button,
  Stack,
  Box,
  Avatar,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import { useCommentContext } from "../context/CommentContext";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import type { Comment } from "../types/interface";

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { vote, comments } = useCommentContext();
  const [showReply, setShowReply] = useState(false);

  const replies = comments.filter((c) => c.parentId === comment.id);

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        mb: 1.5,
        ml: comment.parentId ? 4 : 0,
        borderLeft: comment.parentId ? "4px solid #ccc" : undefined,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Avatar sx={{ width: 32, height: 32 }}>{comment.author[0]}</Avatar>

        <Box flexGrow={1}>
          <Typography variant="subtitle2">{comment.author}</Typography>
          <Typography variant="caption" color="text.secondary">
            {new Date(comment.timestamp).toLocaleString()}
          </Typography>

          <Typography variant="body1" sx={{ mt: 1 }}>
            {comment.content}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <IconButton
              onClick={() => vote(comment.id, "up")}
              size="small"
              color="primary"
            >
              <ThumbUpAltIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">{comment.upvotes}</Typography>

            <IconButton
              onClick={() => vote(comment.id, "down")}
              size="small"
              color="error"
            >
              <ThumbDownAltIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">{comment.downvotes}</Typography>

            <Button
              size="small"
              startIcon={<ReplyIcon />}
              onClick={() => setShowReply(!showReply)}
            >
              Reply
            </Button>
          </Stack>

          {showReply && (
            <Box mt={1}>
              <CommentForm parentId={comment.id} />
            </Box>
          )}

          {replies.length > 0 && (
            <Box mt={2}>
              <CommentList comments={replies} />
            </Box>
          )}
        </Box>
      </Stack>
    </Paper>
  );
};

export default CommentItem;
