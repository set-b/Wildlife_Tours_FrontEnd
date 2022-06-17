/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tilt from "react-vanilla-tilt";
import ReactPlayer from "react-player";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import Constants from "../constants/Constants";
import usePagination from "./usePaginationTest";
import { videoLinks } from "../assets/videoLinks";

export default function PageTest() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [tourData, setTourData] = useState([]);
  const [playObjects, setPlayObjects] = useState([]);

  const handleClickTrue = (id) => {
    const videoClickIndex = playObjects.findIndex((play) => play.id === id);
    console.log(videoClickIndex);
    setPlayObjects([
      ...playObjects,
      (playObjects[videoClickIndex].clicked = true),
    ]);
  };

  const handleClickFalse = (id) => {
    const videoClickIndex = playObjects.findIndex((play) => play.id === id);
    console.log(videoClickIndex);
    setPlayObjects([
      ...playObjects,
      (playObjects[videoClickIndex].clicked = false),
    ]);
  };

  const isClicked = (id) => {
    const videoClickIndex = playObjects.findIndex((play) => play.id === id);
    return playObjects[videoClickIndex].clicked;
  };

  const videoIsPlaying = (id) => {
    const videoClickIndex = playObjects.findIndex((play) => play.id === id);
    return playObjects[videoClickIndex].isPlaying;
  };

  const togglePlay = (id) => {
    const videoClickIndex = playObjects.findIndex((play) => play.id === id);
    setPlayObjects([
      ...playObjects,
      (playObjects[videoClickIndex].isPlaying = true),
    ]);
    console.log(playObjects[videoClickIndex].isPlaying);
  };

  const togglePause = (id) => {
    const videoClickIndex = playObjects.findIndex((play) => play.id === id);
    setPlayObjects([
      ...playObjects,
      (playObjects[videoClickIndex].isPlaying = false),
    ]);
    console.log(playObjects[videoClickIndex].isPlaying);
  };

  const videoByTourLocation = (location) => {
    const video = videoLinks.filter((vid) => vid.location === location);
    console.log(video[0].link);
    return video[0].link;
  };

  const createVideoPlayingObjects = (number) => {
    playObjects.length = number;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < number; i++) {
      const playObject = { id: i + 1, isPlaying: false, clicked: false };
      playObjects[i] = playObject;
    }
    setPlayObjects(playObjects);
  };

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
          createVideoPlayingObjects(numberOfTours);
        })
        .catch((error) => console.log(error));
    };
    renderTours();
  }, []);

  const count = Math.ceil(tourData.length / perPage);
  const data = usePagination(tourData, perPage);
  const dataNumberArray = Array.from(Array(data.currentData().length).keys()); // this should be deleted

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
    console.log(page);
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
        <Grid sx={{ flexGrow: 1 }} container spacing={7}>
          {data.currentData().map((tour) => (
            <Tilt style={{}}>
              <Card
                elevation={5}
                sx={{
                  position: "relative",
                  maxWidth: 500,
                  width: 400,
                  height: "400px",
                  margin: 1,
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                    transformOrigin: "center",
                    transition: "transform 330ms ease-in-out",
                  },
                }}
                onMouseEnter={() => togglePlay(tour.id)}
                onMouseLeave={() => togglePause(tour.id)}
              >
                <CardMedia
                  height="200"
                  sx={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(60px)",
                  }}
                >
                  <header
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "18%",
                      background: "black",
                      color: "black",
                      top: 0,
                    }}
                  >
                    Text
                  </header>
                  <ReactPlayer
                    url={videoByTourLocation(tour.location)}
                    playing={videoIsPlaying(tour.id)}
                    volume="0"
                    muted
                    width="auto"
                    height="300px"
                  />
                  <footer
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "18%",
                      background: "black",
                      bottom: 0,
                      color: "black",
                    }}
                  >
                    Text
                  </footer>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {tour.title}
                  </Typography>
                  <Tooltip title="add to favorites">
                    {isClicked(tour.id) ? (
                      <FavoriteIcon
                        onClick={() => handleClickFalse(tour.id)}
                        sx={{
                          color: "white",
                          opacity: "40%",
                          position: "absolute",
                          left: 175,
                          bottom: 355,
                          fontSize: 50,
                          "&:hover": {
                            color: "white",
                            backgroundColor: "grey",
                            cursor: "pointer",
                            opacity: "100%",
                            // margin: 0,
                          },
                        }}
                      />
                    ) : (
                      <FavoriteBorderSharpIcon
                        onClick={() => handleClickTrue(tour.id)}
                        sx={{
                          color: "white",
                          opacity: "40%",
                          position: "absolute",
                          left: 175,
                          bottom: 355,
                          fontSize: 50,
                          "&:hover": {
                            color: "white",
                            backgroundColor: "grey",
                            cursor: "pointer",
                            opacity: "100%",
                            // margin: 0,
                          },
                        }}
                      />
                    )}
                  </Tooltip>
                  <Tooltip title="add to cart">
                    <AddShoppingCartIcon
                      sx={{
                        color: "white",
                        opacity: "40%",
                        position: "absolute",
                        right: 175,
                        bottom: 355,
                        fontSize: 50,
                        "&:hover": {
                          color: "white",
                          backgroundColor: "grey",
                          cursor: "pointer",
                          opacity: "100%",
                        },
                      }}
                    />
                  </Tooltip>
                </CardContent>
                <CardActions
                // sx={{
                //   transformStyle: "preserve-3d",
                //   transform: "translateZ(60px)",
                // }}
                >
                  <Button
                    size="small"
                    sx={{
                      position: "sticky",
                      // objectPosition: 50% 50%,
                      right: 150,
                      bottom: "20px",
                      color: "white",
                    }}
                  >
                    Find Out More
                  </Button>
                </CardActions>
              </Card>
            </Tilt>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
