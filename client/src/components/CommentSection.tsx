import { Box, Typography, Divider, Paper } from "@mui/material";
import CommentForm from "./CommentForm";

const CommentSection = () => {

  return (
    <Box minHeight="100vh" bgcolor="background.default" p={2}>
      <Paper
        elevation={3}
        sx={{ maxWidth: 700, mx: "auto", p: 3, borderRadius: 3 }}
      >
        <Typography variant="h5" gutterBottom>
          Comments
        </Typography>


        <Divider sx={{ my: 2 }} />

        <CommentForm parentId={null} />

      </Paper>
    </Box>
  );
};

export default CommentSection;
