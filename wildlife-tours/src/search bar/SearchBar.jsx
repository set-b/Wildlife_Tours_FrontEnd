/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

export default function SearchBar() {
  //   const [value, setValue] = React.useState("Controlled");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 500, height: 500, fontSize: 24 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-textarea"
          label="Search Tours"
          placeholder="i.e. Elephants in Africa"
          multiline
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon
                    sx={{
                      color: "white",
                      opacity: "40%",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "grey",
                        cursor: "pointer",
                        opacity: "100%",
                      },
                    }}
                    onClick={() => {
                      document.getElementById("outlined-textarea").focus();
                      // toggle focus if empty; if content is there -> filter
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <Tooltip title="Filter Results">
          <IconButton sx={{ position: "relative", top: 18 }}>
            <FilterAltIcon
              sx={{
                color: "white",
                opacity: "40%",
                "&:hover": {
                  color: "white",
                  backgroundColor: "grey",
                  cursor: "pointer",
                  opacity: "100%",
                  // add onclick for menu to pop up
                },
              }}
            />
          </IconButton>
        </Tooltip>
      </div>
      <Link
        onClick={() => console.log("clicked")}
        variant="body2"
        sx={{ position: "relative", top: -450, right: 193, cursor: "pointer" }}
      >
        Already booked? Sign in
      </Link>
    </Box>
  );
}
