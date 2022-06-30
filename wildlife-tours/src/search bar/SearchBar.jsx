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
  // Don't make it possible to hit enter for input box on search/prevent input expansion []
  // make it so that enter triggers search, function []

  const [sentSearch, setSentSearch] = useState({ value: "" });

  const [searchValue, setSearchValue] = useState({
    value: "",
  });

  const inputHandler = (event) => {
    const lowerCase = event.target.value.toLowerCase();
    setSearchValue((prevState) => ({ ...prevState, value: lowerCase }));
    console.log(searchValue);
  };

  const search = () => {
    const lowerCase = searchValue.value.toLowerCase();
    setSentSearch((prevState) => ({ ...prevState, value: lowerCase }));
  };

  useEffect(() => {
    setSearchValue(searchValue);
  }, [searchValue]);

  // useEffect(() => {
  //   setSentSearch((prevState) => ({ ...prevState, value: "" }));
  //   search();
  // }, []);

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
      <PageTest search={sentSearch.value} />
    </Box>
  );
}
