import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tilt from "react-vanilla-tilt";
import HoverVideoPlayer from "react-hover-video-player";
// import Video from "../assets/wildlifefinal.mp4";
import Constants from "../constants/Constants";

export default function SpacingGrid() {
  const [tourData, setTourData] = useState([]);
  const [tourNumberArray, setTourNumberArray] = useState([]);

  const videoLinks = [
    { location: "Asia", link: "https://www.youtube.com/watch?v=cwsdTKoGv5U" },
    { location: "Africa", link: "https://www.youtube.com/watch?v=6yXuCf5tBlg" },
    {
      location: "South America",
      link: "https://www.youtube.com/watch?v=d649GL3FKaU",
    },
    {
      location: "Pacific Ocean",
      link: "https://www.youtube.com/watch?v=lBWZ9ls9-Oc",
    },
    {
      location: "North America",
      link: "https://www.youtube.com/watch?v=wUhMIn1UO7Q",
    },
  ];

  sessionStorage.setItem("videos", videoLinks);

  const videoByTourLocation = (location) => {
    const video = videoLinks.filter((vid) => vid.location === location); // this filter is probably wrong
    console.log(location);
    console.log(videoLinks[0].location);
    return video.link;
  };

  // make a switch case for tourData value.location, returning youtube links for autoplay

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
        })
        .catch((error) => console.log(error));
    };
    renderTours();
  }, []);
  console.log(videoByTourLocation("Africa"));
  return (
    <div>
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
                        maxWidth: 300,
                        height: "400px",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "transform 330ms ease-in-out",
                        },
                      }}
                    >
                      <CardMedia
                        height="200"
                        sx={{
                          transformStyle: "preserve-3d",
                          transform: "translateZ(60px)",
                        }}
                      >
                        <HoverVideoPlayer
                          videoSrc={sessionStorage.getItem("videos")[0]}
                          // video returned through youtube link with value.location as param
                          muted
                          loop
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                      </CardMedia>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {tourData[value].title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {tourData[value].description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          sx={{ position: "absolute", bottom: "20px" }}
                        >
                          Share
                        </Button>
                        <Button
                          size="small"
                          sx={{
                            position: "absolute",
                            bottom: "20px",
                            right: "110px",
                          }}
                        >
                          More Info
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
