import React from "react";
import Typography from "@mui/material/Typography";
import SearchBar from "../../search bar/SearchBar";
// will include search function for tours
// tour cards
// searching by tour code
function BookATour() {
  return (
    <div style={{ position: "relative", top: "100px" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
        }}
      >
        FIND YOUR NEXT ADVENTURE
      </Typography>
      <SearchBar />
    </div>
  );
}

export default BookATour;
