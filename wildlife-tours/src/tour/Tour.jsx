import * as React from "react";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tilt from "react-vanilla-tilt";
// import Styling from "./Tour.module.css";

// import FormControlLabel from "@mui/material/FormControlLabel";
// import RadioGroup from "@mui/material/RadioGroup";
// import Radio from "@mui/material/Radio";

export default function SpacingGrid() {
  // populate cards as paper
  // const options = {
  //   scale: 1.3,
  // };
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12} elevation={3}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Grid key={value} item>
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
                    component="img"
                    height="200"
                    image="https://a-z-animals.com/media/2021/05/Favorite-and-Most-Popular-Animals_-Lion.jpg"
                    alt="lion"
                    sx={{
                      transformStyle: "preserve-3d",
                      transform: "translateZ(60px)",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lions in Africa
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
