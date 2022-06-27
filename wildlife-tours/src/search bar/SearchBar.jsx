/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import PageTest from "../pagination/Pagetest";

export default function SearchBar() {
  // add functionality to search bar through input handler; state is one letter behind input; check financial modeling app [X]

  // import pageTest component with searcValue as props []
  // use value to filter through tourdata []
  // pass new tour data through pagination function as const data []
  // re-render paginated results through passing data via map []

  const [searchValue, setSearchValue] = useState({
    value: "",
    // searching: false,
    // change to true when button clicked; after filtering, change back to false!
  });

  const inputHandler = (event) => {
    const lowerCase = event.target.value.toLowerCase();
    setSearchValue((prevState) => ({ ...prevState, value: lowerCase }));
    console.log(searchValue);
  };

  // function which determines if anything is passed to pageTest as a prop
  const search = () => {
    console.log(searchValue.value);
    if (searchValue.value === "") {
      document.getElementById("outlined-textarea").focus();
      sessionStorage.setItem("searching", false);
    } else {
      sessionStorage.setItem("searching", true);
    }
    const searching = sessionStorage.getItem("searching");
    console.log(searching);
    // return searching; // why is this returned?
    // use sessionStorage boolean instead of searching prop?
  };

  useEffect(() => {
    setSearchValue(searchValue); // console is still behind, but that may not be an issue.
  }, [searchValue]);

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
          onChange={inputHandler}
          multiline
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => search()}>
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
      <PageTest search={searchValue} />
    </Box>
  );
}
