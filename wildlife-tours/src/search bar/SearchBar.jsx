/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import PageTest from "../pagination/Pagetest";
// import PageTestTwo from "../pagination/PagetestTwo";

export default function SearchBar() {
  // Don't make it possible to hit enter for input box on search/prevent input expansion []
  // make it so that enter triggers search, function []

  // DEBUG THIS FILE

  // follow pagination tutorial search again, and use useRef for input instead of state???? []

  // pass in ref through pagetest instead of searchvalue.value?

  // I used useRef...but the same problem exists because useRef doesn'tnotify you when it changes
  // conditional prop?? [X]

  const inputEl = useRef("");

  // conditional rendering prop added X

  // eslint-disable-next-line no-unused-vars
  const [sentSearch, setSentSearch] = useState({ value: "" }); // may be no longer needed
  // equivalent of searchTerm
  const [searchValue, setSearchValue] = useState({
    value: "",
  });

  const getSearchTerm = () => {
    console.log(inputEl.current.value);
    setSearchValue((prevState) => ({
      ...prevState,
      value: inputEl.current.value,
    }));
  };

  const inputHandler = (e) => {
    // replace with useRef()
    // const lowerCase = event.target.value.toLowerCase();
    // setSearchValue((prevState) => ({ ...prevState, value: lowerCase }));
    // console.log(searchValue);

    setSearchValue((prevState) => ({
      ...prevState,
      value: e.target.value.toLowerCase(),
    }));

    // inputEl.current.value = searchValue.value;

    console.log(inputEl.current.value);
  };

  const search = () => {
    const lowerCase = searchValue.value.toLowerCase();
    setSentSearch((prevState) => ({ ...prevState, value: lowerCase }));
  };

  useEffect(() => {
    setSearchValue(searchValue);
    // inputEl.current.focus();
  }, [searchValue, inputEl.current.value]); // fiddle around with useEffect and setSearch/sentSearch??? []

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
          // ref={inputEl}
          id="outlined-textarea"
          label="Search Tours"
          placeholder="i.e. Elephants in Africa"
          onChange={inputHandler} // replace with useRef
          value={searchValue.value}
          type="text"
          multiline
          fullWidth
          // value={searchValue.value}
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
        <input
          ref={inputEl}
          type="text"
          placeholder="i.e. Elephants in Africa"
          value={searchValue.value}
          onChange={getSearchTerm}
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
      <PageTest search={sentSearch.value || ""} />
    </Box>
  );
}
