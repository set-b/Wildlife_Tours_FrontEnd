import React, { useEffect, useState } from "react";
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
// import { Pagination } from "@mui/material";
import AppPagination from "../pagination/index";

export default function SpacingGrid() {
  const [tourData, setTourData] = useState([]);
  const [tourNumberArray, setTourNumberArray] = useState([]);
  const [playObjects, setPlayObjects] = useState([]);

  const videoLinks = [
    {
      location: "Asia",
      link: "https://www.youtube.com/embed/cwsdTKoGv5U?autoplay=1&mute=1&controls=0",
    },
    {
      location: "Africa",
      link: "https://www.youtube.com/embed/6yXuCf5tBlg?autoplay=1&mute=1&controls=0",
    },
    {
      location: "South America",
      link: "https://www.youtube.com/embed/d649GL3FKaU?autoplay=1&mute=1&controls=0",
    },
    {
      location: "Pacific Ocean",
      link: "https://www.youtube.com/embed/lBWZ9ls9-Oc?autoplay=1&mute=1&controls=0",
    },
    {
      location: "North America",
      link: "https://www.youtube.com/embed/wUhMIn1UO7Q?autoplay=1&mute=1&controls=0",
    },
  ];

  sessionStorage.setItem("videos", videoLinks); // probably get rid of this

  const videoByTourLocation = (location) => {
    const video = videoLinks.filter((vid) => vid.location === location); // this filter is probably wrong
    console.log(video[0].link);
    return video[0].link;
  };

  const handleClickTrue = (value) => {
    setPlayObjects([...playObjects, (playObjects[value].clicked = true)]);
  };

  const handleClickFalse = (value) => {
    setPlayObjects([...playObjects, (playObjects[value].clicked = false)]);
  };

  const togglePlay = (value) => {
    setPlayObjects([...playObjects, (playObjects[value].isPlaying = true)]);
    console.log(playObjects[value].isPlaying);
  };

  const togglePause = (value) => {
    setPlayObjects([...playObjects, (playObjects[value].isPlaying = false)]);
    console.log(playObjects[value].isPlaying);
  };

  const createVideoPlayingObjects = (number) => {
    playObjects.length = number;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < number; i++) {
      const playObject = { isPlaying: false, clicked: false };
      playObjects[i] = playObject;
    }
    // console.log(playObjects[0].isPlaying);
    setPlayObjects(playObjects);
  };

  useEffect(() => {
    let numberOfTours = 0;
    const renderTours = async () => {
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
          setTourData(responseData);
          console.log(responseData);
          numberOfTours = responseData.length;
          const numberArray = Array.from(Array(numberOfTours).keys());
          setTourNumberArray(numberArray);
          createVideoPlayingObjects(numberOfTours);
        })
        .catch((error) => console.log(error));
    };
    renderTours();
  }, []);
  return (
    <div style={{ position: "relative", top: "-350px" }}>
      <AppPagination />
      {tourNumberArray.length > 0 && (
        <Grid sx={{ flexGrow: 1 }} container spacing={7}>
          <Grid item xs={12} elevation={3}>
            <Grid container justifyContent="center" spacing={2}>
              {tourNumberArray.map((value) => (
                <Grid key={value} item>
                  <Tilt style={{}}>
                    <Card
                      elevation={5}
                      sx={{
                        maxWidth: 500,
                        width: 400,
                        height: "400px",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "transform 330ms ease-in-out",
                        },
                      }}
                      onMouseEnter={() => togglePlay(value)}
                      onMouseLeave={() => togglePause(value)}
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
                          url={videoByTourLocation(tourData[value].location)}
                          playing={playObjects[value].isPlaying}
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
                          {tourData[value].title}
                        </Typography>
                        <Tooltip title="add to favorites">
                          {playObjects[value].clicked ? (
                            <FavoriteIcon
                              onClick={() => handleClickFalse(value)}
                              sx={{
                                color: "white",
                                opacity: "40%",
                                position: "relative",
                                left: 175,
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
                          ) : (
                            <FavoriteBorderSharpIcon
                              onClick={() => handleClickTrue(value)}
                              sx={{
                                color: "white",
                                opacity: "40%",
                                position: "relative",
                                left: 175,
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
                          )}
                        </Tooltip>
                        <Tooltip title="add to cart">
                          <AddShoppingCartIcon
                            sx={{
                              color: "white",
                              opacity: "40%",
                              position: "relative",
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
                      <CardActions>
                        <Button
                          size="small"
                          sx={{
                            position: "absolute",
                            right: 140,
                            bottom: "20px",
                            color: "white",
                          }}
                        >
                          Find Out More
                        </Button>
                      </CardActions>
                    </Card>
                  </Tilt>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
