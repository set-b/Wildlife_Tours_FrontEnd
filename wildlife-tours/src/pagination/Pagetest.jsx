/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import usePagination from "./usePaginationTest";
import Constants from "../constants/Constants";

export default function PageTest() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [tourData, setTourData] = useState([]);
  //   console.log(tourData);

  useEffect(() => {
    let numberOfTours = 0;
    const renderTours = async () => {
      setLoading(true);
      await fetch(`${Constants.HEROKU_ENDPOINT_POSTGRESQL}tours`, {
        mode: "cors",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Oops! Something went wrong!");
        })
        .then((responseData) => {
          setLoading(false);
          setTourData(responseData);
          console.log(responseData);
          numberOfTours = responseData.length;
          const numberArray = Array.from(Array(numberOfTours).keys());
          //   setTourNumberArray(numberArray);
          //   createVideoPlayingObjects(numberOfTours);
        })
        .catch((error) => console.log(error));
    };
    renderTours();
  }, []);

  const count = Math.ceil(tourData.length / perPage);
  const data = usePagination(tourData, perPage);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ margin: "20px 0px" }}
    >
      <Stack spacing={2}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
}
