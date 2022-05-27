import React from "react";
import Tilt from "react-parallax-tilt";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import styled from "styled-components";
// import Title from "react-vanilla-tilt";
// // .tilt {
// //   transform-style: preserve-3d;
// //   /* transform: perspective(1000px); */
// // }

function Tour() {
  //  change dimension scope of tilt??
  return (
    <div className="TourCard">
      <Tilt tiltEnable="false">
        <img
          src="https://a-z-animals.com/media/2021/05/Favorite-and-Most-Popular-Animals_-Lion.jpg"
          alt="lion"
          style={{
            width: "40%",
            height: "auto",
          }}
        />
        <h1>text</h1>
      </Tilt>
      <Tilt sx={{ maxWidth: 345 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Tilt>
    </div>
  );
}

export default Tour;
