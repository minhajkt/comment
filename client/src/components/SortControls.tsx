import {  FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useCommentContext } from "../context/CommentContext";


const SortControls = () => {
  const { sortType, setSortType } = useCommentContext();

  const handleChange = (event: SelectChangeEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSortType(event.target.value as any);
  };

  return (
      <FormControl size="small" sx={{ minWidth: 150, ml: "auto" }}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortType} label="Sort By" onChange={handleChange}>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
          <MenuItem value="most-score">Most Score</MenuItem>
          <MenuItem value="least-score">Least Score</MenuItem>
        </Select>
      </FormControl>
  );
};

export default SortControls;
