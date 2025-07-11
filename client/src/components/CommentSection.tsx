import { Box, Typography, Divider, Paper } from "@mui/material";
import { useCommentContext } from "../context/CommentContext";
import SortControls from "./SortControls";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const CommentSection = () => {
  const { comments } = useCommentContext();
  const topLevelComments = comments.filter((c) => c.parentId === null);

  return (
    <Box minHeight="100vh" bgcolor="background.default" p={2}>
      <Paper
        elevation={3}
        sx={{ maxWidth: 700, mx: "auto", p: 3, borderRadius: 3 }}
      >
        <Typography variant="h5" gutterBottom>
          Comments
        </Typography>

        <Box display="flex" justifyContent="flex-end" mb={2}>
          <SortControls />
        </Box>

        <Divider sx={{ my: 2 }} />

        <CommentForm parentId={null} />

        <Box mt={3}>
          <CommentList comments={topLevelComments} />
        </Box>
      </Paper>
    </Box>
  );
};

export default CommentSection;
