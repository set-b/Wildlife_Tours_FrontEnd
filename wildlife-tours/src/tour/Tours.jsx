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
import Video from "../assets/wildlifefinal.mp4";
// import { sendHttpRequest } from "../utils/httpHelper";
import Constants from "../constants/Constants";

export default function SpacingGrid() {
  // console.log(sendHttpRequest("GET", "/tours"));
  const [tourData, setTourData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isFetching, setIsFetching] = useState(true);
  console.log(tourData); // this is an array of objects, which react js mistakes as key value pairs, or an intermediate value.

  // const numberOfTourCards = Array.from(tourData.length.keys());

  fetch(`${Constants.HEROKU_ENDPOINT_POSTGRESQL}tours`, { mode: "cors" }).then(
    (response) => console.log(response.json()) // this is a get request to tours.
  );

  const renderTours = async () => {
    try {
      await fetch(`${Constants.HEROKU_ENDPOINT_POSTGRESQL}tours`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((responseData) => {
          setTourData(responseData);
          setIsFetching(false);
          console.log(responseData);
        })
        .catch((error) => console.log(error));
      // setTourData(response.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    renderTours();
  }, []);
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={7}>
      <Grid item xs={12} elevation={3}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1].map((value) => (
            <Grid key={value.id} item>
              <Tilt style={{}}>
                <Card
                  elevation={5}
                  sx={{
                    maxWidth: 300,
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
                      videoSrc={Video}
                      // playing={playing}
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
                      lorem ipsum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Tilt>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
